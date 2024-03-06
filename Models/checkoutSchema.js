const mongoose = require('mongoose')


const checkoutSchema = new mongoose.Schema({
  

    email:  {
        type: String,
        require:true
    },
    phone:{
        type: String,
        require:true
    },
    checkin: {
        type: String,
        require:true
    },
    checkoutdate: {
        type: String,
        require:true
    },
    Room_type:  {
        type: String,
        require:true
    },
    No_Rooms:  {
        type: String,
        require:true
    },
    adults:  {
        type: String,
        require:true
    },
    children: {
        type: String,
        require:true
    },
    extra_services:  {
        type: String,
        require:true
    },
    price_for_oneroom: {
        type: String,
        require:true
    },
    customerId:{
        type: String,
        require:true
    },
    partner_id:{
        type: String,
        require:true
    },
    roomdetails:{
        type: Object,
        require:true
    },
    status:{
        type: String,
        require:true
    },
    review:{
        type: String,
        require:true
    }
}

)
// create modal
const checkout = mongoose.model("checkout", checkoutSchema)

// export modal
module.exports = checkout