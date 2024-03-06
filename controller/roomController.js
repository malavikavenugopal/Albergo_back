//import model

const rooms = require('../Models/roomSchema')


//add rooms

exports.addRooms = async (req, res) => {
    // logic
    console.log('inside roomController request');

    const userId = req.payload
    console.log(userId);

    const { name, info, location, map, phone, category, img1, img2, img3, img4, bedroom1, bedroom1info, bedroom2, bedroom2info, bedroom3, bedroom3info, price1, price2, price3 } = req.body

    console.log(`${name}`);

    try {
        const existingRoom = await rooms.findOne({ name })
        if (existingRoom) {
            res.status(406).json('Hotel already exist... upload new Hotel')
        }
        else {
            const newRooms = new rooms({
                name,
                info,
                location,
                map,
                phone,
                category,
                img1,
                img2,
                img3,
                img4,
                bedroom1,
                bedroom1info,
                bedroom2,
                bedroom2info,
                bedroom3,
                bedroom3info,
                price1,
                price2,
                price3,
                userId

            })
            await newRooms.save()

            // response
            res.status(200).json(newRooms)

        }
    }


    catch (err) {
        res.status(401).json('Request FAILED due to', err)
    }

}

//getAllRooms


exports.getRooms = async (req, res) => {

    const searchKey = req.query.search
    console.log(searchKey)

    
    const query = {
        location : {
             $regex: searchKey, $options: 'i'
        }
   }
    try {
        const allrooms = await rooms.find(query)
        res.status(200).json(allrooms)
    }
    catch (err) {
        res.status(401).json('Request FAILED due to', err)
    }
}


//getPartnerRooms

exports.getPartnerRoom = async (req, res) => {


    const userId = req.payload
    console.log(userId);
    try {
        const allUserRoom = await rooms.find({ userId })
        res.status(200).json(allUserRoom)
    }
    catch (err) {
        res.status(401).json('Request FAILED due to', err)
    }
}


//delete partner room


exports.deletePartnerRoom = async (req, res) => {

    const { id } = req.params

    try {
        const removeRoom = await rooms.findByIdAndDelete({ _id: id })

        res.status(200).json(removeRoom)
    }

    catch (err) {
        res.status(401).json('Request FAILED due to', err)
    }


}


//editRoomDetails

exports.editRoomDetails = async (req, res) => {


    const { id } = req.params

    const { name, info, location, map, phone, category, img1, img2, img3, img4, bedroom1, bedroom1info, bedroom2, bedroom2info, bedroom3, bedroom3info, price1, price2, price3 } = req.body


    try {

        const updateRoomDeatils = await rooms.findByIdAndUpdate({ _id: id }, { name, info, location, map, phone, category, img1, img2, img3, img4, bedroom1, bedroom1info, bedroom2, bedroom2info, bedroom3, bedroom3info, price1, price2, price3 }, { new: true })

        await updateRoomDeatils.save()

        res.status(200).json(updateRoomDeatils)

    }
    catch (err) {
        res.status(401).json('Request FAILED due to', err)
    }
}

//get rooms by category

exports.getRoomsByCategory = async (req, res) => {

    const searchKey = req.query.search
    console.log(searchKey);

    try {
        const category = await rooms.find({category : searchKey})
        res.status(200).json(category)
    }
    catch (err) {
        res.status(401).json('Request FAILED due to', err)
    }
}