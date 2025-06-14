const mongoose = require("mongoose")

module.exports.connectToMongoDB = async () =>{
    mongoose.set("strictQuery",false )
    mongoose.connect(process.env.mongo_url).then (
        ()=>
            console.log("connect to db")
    ).catch(
        (err)=>{
            console.log(err.message)
        }
    )


}