import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from 'mongoose';

const port = 8080 || process.env.port;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/TrustVault');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const User = mongoose.model("users",userSchema);

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
