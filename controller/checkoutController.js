

const checkout = require('../Models/checkoutSchema')




exports.addCheckout = async (req, res) => {
    // logic
    console.log('inside checkoutController request');

    const  customerId = req.payload
    console.log( customerId);



    const { email,
        phone,
        checkin,
        checkoutdate,
        Room_type,
        No_Rooms,
        adults,
        children,
        extra_services,
        partner_id,
        price_for_oneroom,
        roomdetails,
        status
    } = req.body



     console.log(`${email}`); 

    try {

        const newCheckout = new checkout({
            email,
            phone,
            checkin,
            checkoutdate,
            Room_type,
            No_Rooms,
            adults,
            children,
            extra_services,
            price_for_oneroom,
            customerId,
            partner_id,
            roomdetails,
            status,
            review:""


        })
        await newCheckout.save()

        // response
        res.status(200).json(newCheckout)




    }
    catch (err) {
        res.status(401).json('Request FAILED due to', err)
    }
}


exports.getCustomerRooms = async (req, res) => {

    const  customerId = req.payload
    console.log(customerId);


    try {
        const allcustomerbookedrooms = await checkout.find({customerId})
        res.status(200).json(allcustomerbookedrooms)
    }
    catch (err) {
        res.status(401).json('Request FAILED due to', err)
    }
}
//get all booked rooms 
exports.getBookedRooms = async (req, res) => {
    const  partner_id = req.payload
    console.log(partner_id);
    try {
        const allbookedrooms = await checkout.find({partner_id})
        res.status(200).json(allbookedrooms)
    }
    catch (err) {
        res.status(401).json('Request FAILED due to', err)
    }
}

//editbookingstatus

exports.editBookingStatus = async(req,res)=>{
    const {id} = req.params

    const{email,phone,checkin,checkoutdate,Room_type,
        No_Rooms,  adults,   children,  extra_services,
        price_for_oneroom,customerId, partner_id, roomdetails,status}= req.body


        try{

const updateBookingStatus = await checkout.findByIdAndUpdate({_id:id},{email,phone,checkin,checkoutdate,Room_type,
    No_Rooms,  adults,   children,  extra_services,
    price_for_oneroom,customerId, partner_id, roomdetails,status},{new:true})
    await updateBookingStatus.save()

          res.status(200).json(updateBookingStatus)

        }
        catch(err){
            res.status(401).json('Request FAILED due to',err)
       }
}
