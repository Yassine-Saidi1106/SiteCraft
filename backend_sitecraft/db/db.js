const mongoose = require("mongoose")

module.exports.connectToMongoDB = async () =>{
    mongoose.set("strictQuery",false )
    mongoose.connect("mongodb://localhost:27017/SiteCraft").then (
        ()=>
            console.log("connect to db")
    ).catch(
        (err)=>{
            console.log(err.message)
        }
    )


}