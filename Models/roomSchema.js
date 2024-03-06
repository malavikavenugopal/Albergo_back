
const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    name:  {
        type: String,
        require:true
    },
    info: {
        type: String,
        require:true
    } ,
    location: {
        type: String,
        require:true
    },
    map: {
        type: String,
        require:true
    },
    phone:  {
        type: String,
        require:true
    },
    category: {
        type: String,
        require:true
    },
    img1:  {
        type: String,
        require:true
    },
    img2:  {
        type: String,
        require:true
    },
    img3:  {
        type: String,
        require:true
    },
    img4: {
        type: String,
        require:true
    },
    bedroom1: {
        type: String,
        require:true
    },
    bedroom1info: {
        type: String,
        require:true
    },
    bedroom2: {
        type: String,
        require:true
    },
    bedroom2info:  {
        type: String,
        require:true
    },
    bedroom3:  {
        type: String,
        require:true
    },
    bedroom3info:  {
        type: String,
        require:true
    },
    price1:  {
        type: String,
        require:true
    },
    price2:  {
        type: String,
        require:true
    },
    price3: {
        type: String,
        require:true
    },
    userId:{
        type: String,
        require:true
    }

})
// create modal

const rooms = mongoose.model("rooms", roomSchema)

// export modal

module.exports = rooms