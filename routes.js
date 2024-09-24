import express from 'express'
import mongoose from 'mongoose';
import User from './userModel';

const app = express();

app.use(express.json());






app.post("/createuser", async (req, res) => {
    try {
        const bodyData = req.body;
        const user = new User(bodyData);
        const userData = await user.save();
        res.send(userData);
    } catch (error) {
        res.send(error);
    }
});

app.get("/readalluser", async(req, res)=>{
    try{
        const userData = await User.find({});
        res.send(userData);
    }catch(error){
        res.send(error);
    }
});

app.get("/read/:name", async(req, res)=>{
    try{
        const name = req.params.name;
        const user = await User.findOne({ name: name });
        res.send(user);
    }catch(error){
        res.send(error);
    }
});

app.put("/updateuser/:name", async (req, res) => {
    try {
        const name = req.params.name;
        const user = await User.findOneAndUpdate({ name: name }, req.body, { new: true });
        
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("/", (req, res) => {
    res.send("from get route");
});

app.delete("/delete/:name", async(req, res) => {
    try {
        const name = req.params.name;
        const user = await User.findOneAndDelete({ name: name });
    }
    catch(error){
        console.log(error);
    }
});

app.listen(8000, () => {
    console.log(`server is running at 8000`);
});


module.exports= app