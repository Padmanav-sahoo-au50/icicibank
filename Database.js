const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://padmanav:<750430>@cluster0.rhi5vkc.mongodb.net/?retryWrites=true&w=majority", {useNewUrlparser: true, useUnifiedTopology: true},
(err) => {
    if(err){
        console.log("Connection Failed", err)
    }
    else{
        console.log("Connection Success");
    }
}
)

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const user = new mongoose.model("user_collection", userSchema);

app.listen(5010, () => {
    console.log("listening to mongoDB on port 5010")
})