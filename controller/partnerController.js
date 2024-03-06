

const partner = require('../Models/partnerSchema')

//import jwt
//to ensure proper login  and gave secret code to user
const jwt = require("jsonwebtoken")

// logic for register

exports.registerPartner = async (req, res)=>{
    // logic
    console.log('inside partnerController-register logic');


    const {email, fname, lname,  phone, password, confirmpassword} = req.body

    try {// since email is the unique value we are checking that email is already parent in the database
    // for that we are using finOne method which return entire document when the condition is true else return null
    const existingPartner = await partner.findOne({email})
    if(existingPartner){
        // so we are sending a response in the 400 series
        res.status(406).json('account already exist... please login')

    }else{

            const newPartner = new partner({
                email,
                fname,
                lname,
                phone,
                password,
                confirmpassword,
                profile:""
            })

            // 2) add the object use save() method in mongoose

            await newPartner.save()

            // response
            res.status(200).json(newPartner)

        }
        }catch(err){
            res.status(401).json('register request FAILED due to',err)
        }


    
}

exports.login =  async(req,res)=>{
    console.log('inside userController-login logic');
    const { email,password} = req.body
try{
    const existingPartner= await partner.findOne({email,password})
    //{email:email,password:password}

    if(existingPartner){



        //create token using sign method
      const token2 =  jwt.sign({partnerid:existingPartner._id},"supersecretkey123")
        res.status(200).json(
            {
                existingPartner,token2
                //existingUser:existingUser
            }
            
        )
    }
    else{
        res.status(404).json('Invalid Email or Password')
    }
}catch(err){
    res.status(401).json('Login request FAILED due to',err)
}

}




//edit partner profile
exports.editPartner = async(req,res)=>{


    const userId = req.payload
    const { email, fname, lname,  phone, password, confirmpassword , profile} = req.body


    const profileImage = req.file?req.file.filename:profile

    try{

        const updatePartner= await users.findByIdAndUpdate({_id:userId},{email, fname, lname,  phone, password, confirmpassword , profile:profileImage},{new:true})

        await updatePartner.save()
        res.status(200).json(updatePartner)

    }catch(err){
        res.status(401).json('Request FAILED due to',err)
    }

}



