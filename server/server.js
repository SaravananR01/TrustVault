import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from 'mongoose';
import multer from 'multer';
import multers3 from 'multer-s3';
//import aws from 'aws-sdk';
import dotenv from 'dotenv/config';
import {S3Client} from '@aws-sdk/client-s3';



const port = 8080 || process.env.port;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

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
    fileowner: String,
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
            metadata:function (req,file,cb){
                cb(null,{fieldName:file.fieldname});
            },
            key:function(req,file,cb){
                cb(null,Date.now().toString());
            },
        })
    });

// const upload=()=>multer({dest:'./uploads'});

//file upload using multer
app.post('/file-upload',(req,res,next)=>{
    const upload_single=upload().single('file');
    upload_single(req,res,err=>{
        if (err){
            return res.status(400).json({message:err.message});
        }

        console.log(req.files);

        res.status(200).json({data:req.files});
    })
});
