import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from 'mongoose';
import multer from 'multer';
import multers3 from 'multer-s3';
//import aws from 'aws-sdk';
import dotenv from 'dotenv/config';
import {S3Client} from '@aws-sdk/client-s3';
import path from 'path';
import session from 'express-session';


const port = 8080 || process.env.port;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
    origin:'http://localhost:5173',
    credentials: true
}));

app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    cookie:{
        httpOnly:true,
        sameSite: 'strict',
        maxAge: 1000 * 60 * 60 * 24
    },
}));

//mongoose connection
mongoose.connect('mongodb://localhost:27017/TrustVault');

//user schema and model
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const User = mongoose.model("users",userSchema);

//file schema and model
const fileSchema = new mongoose.Schema({
    filename: String,
    fileowner_email: String,
    fileURL: String
});

const File=mongoose.model("files",fileSchema);

// S3 bucket connection
// const s3=new aws.S3({
//     accessKeyId: process.env.S3_ACCESS_KEY,
//     secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
//     region: process.env.S3_BUCKET_REGION,
// });

const s3 = new S3Client({
    region: process.env.S3_BUCKET_REGION,
    credentials:{
        accessKeyId:process.env.S3_ACCESS_KEY,
        secretAccessKey:process.env.S3_SECRET_ACCESS_KEY
    },
});

// Login API Endpoint
app.post('/login',async(req,res)=>{
    try{
        console.log(req.body);
        const user = await User.findOne({email:req.body.email});
        if (!user){
            return res.status(404).json({error:"User Not Found"});
        }

        // console.log(user[0].password);
        // console.log(req.body.password);
        if (user.password!=req.body.password){
            return res.status(401).json({error:"Invalid Credentials"});
        }
        delete user.password;
        console.log("User Found");
        
        req.session.user = user;
        
        res.send(user);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});


//Signup API Endpoint
app.post('/signup',async (req,res)=>{
    try{
        console.log(req.body);
        const user= await User.create(req.body);
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});

app.listen(port,()=>{
    console.log(`Server listening on Port: ${port}`);
});

//upload function
const upload = ()=>
    multer({
        storage:multers3({
            s3:s3,
            bucket:'trust-vault-docs',
            acl:'public-read',
            serverSideEncryption:'AES256',
            metadata:function (req,file,cb){
                cb(null,{fieldName:file.fieldname});
            },
            contentType:multers3.AUTO_CONTENT_TYPE,
            key:function(req,file,cb){
                const ext = path.extname(file.originalname);
                const filename = `${Date.now().toString()}_${file.originalname}`;
                cb(null, filename);
            },
        })
    });

// const upload=()=>multer({dest:'./uploads'});

//file upload using multer
app.post('/file-upload',(req,res,next)=>{
    const upload_single=upload().single('file');
    upload_single(req,res,async(err)=>{
        if (err){
            return res.status(400).json({message:err.message});
        }

        console.log(req.file);
        const userEmail = req.session.user.email;
        console.log(userEmail);
        const file_body={
            filename: req.file.originalname,
            fileowner_email: userEmail,
            fileURL:req.file.location
        };
        const file = await File.create(file_body);

        res.status(200).json({data:req.file});
    })
});


// fix this
app.get('/get-files',async (req,res)=>{
    const user = req.session.user;
    console.log(user);
    const files= await File.find({fileowner_email:user.email});
    console.log(files);
});

app.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if (err){
            console.log(err);
            res.status(500).send('Error Logging Out');
        }else{
            res.status(200).send('User Logged Out');
        }
    })
});


