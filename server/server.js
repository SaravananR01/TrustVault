import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from 'mongoose';
import multer from 'multer';
import multers3 from 'multer-s3';
import dotenv from 'dotenv/config';
import {S3Client} from '@aws-sdk/client-s3';
import path from 'path';
import jwt from 'jsonwebtoken';


const port = 8080 || process.env.port;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
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
const s3 = new S3Client({
    region: process.env.S3_BUCKET_REGION,
    credentials:{
        accessKeyId:process.env.S3_ACCESS_KEY,
        secretAccessKey:process.env.S3_SECRET_ACCESS_KEY
    },
});

//Authenticate Token Function
function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.status(401);
    jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user)=>{
        if (err) return res.status(403);
        req.user=user;
        next()
    });
}

// Login API Endpoint
app.post('/login',async(req,res)=>{
    try{
        console.log(req.body);
        const user = await User.findOne({email:req.body.email});
        if (!user){
            return res.status(404).json({error:"User Not Found"});
        }

        if (user.password!=req.body.password){
            return res.status(401).json({error:"Invalid Credentials"});
        }
        delete user.password;
        console.log("User Found");
        
        const token = jwt.sign({email:user.email},process.env.JWT_SECRET_KEY);

        res.json({token:token});

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

//file upload using multer
app.post('/file-upload',authenticateToken,(req,res,next)=>{
    const upload_single=upload().single('file');
    upload_single(req,res,async(err)=>{
        if (err){
            return res.status(400).json({message:err.message});
        }

        console.log(req.file);
        const file_body={
            filename: req.file.originalname,
            fileowner_email: req.user.email,
            fileURL:req.file.location
        };
        const file = await File.create(file_body);

        res.status(200).json({data:req.file});
    })
});

//retrieving files of a user
app.get('/get-files',authenticateToken,async (req,res)=>{
    const files= await File.find({fileowner_email:req.user.email});
    console.log(files);
    res.status(200).send(files);
});

// app.get('/logout',(req,res)=>{
//     req.session.destroy((err)=>{
//         if (err){
//             console.log(err);
//             res.status(500).send('Error Logging Out');
//         }else{
//             res.status(200).send('User Logged Out');
//         }
//     })
// });


