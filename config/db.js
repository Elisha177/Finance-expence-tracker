const mongoose = require("mongoose");
const connectDB = async () => {
    try{

        await mongoose.connect(process.env.MONGO_URL, {
      
        })
        console.log("MOngoDB Connected")
    } catch(e) {
            console.log("Error occured")
            process.exit(1)
    }
}

module.exports = connectDB