//  import mongoose

const mongoose = require('mongoose')



// create schema - need to use schema class in mongoose

const partnerSchema = new mongoose.Schema({
  
    email : {
        type: String,
        require:true,
      
       
    },
    fname:{
        type: String,
        require:true,
        
    },
    lname:{
        type: String,
        require:true,
    },
    phone:{
        type: String,
        require:true,
    },
    password : {
        type:String,
        require:true
    },
    confirmpassword:{
        type: String,
        require:true,
    },
    profile: {
        type:String,
        require:true
    }

})

// create modal

const partner = mongoose.model("partner",partnerSchema)
module.exports = partner
// export modal


