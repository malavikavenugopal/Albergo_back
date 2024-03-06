// path to resolve the client

// 1) import express

const express = require('express')

// import controller

const userController = require('../controller/userController')
const roomController = require('../controller/roomController')
const partnerController = require('../controller/partnerController')
const checkoutController = require('../controller/checkoutController')


//import middleware
const jwtMiddleware = require('../middleware/jwtMiddleware')

const jwtmiddlewearUser = require('../middleware/jwtMiddleWareUser')
//import multer
const multerConfig = require('../middleware/multerMiddleware')

// 2) create an object for the class

const router = new express.Router()

// 3) Path for resloving a request
//     syntax - router.httprequest('path to resolve request',() => {how to resolve the request(inside controller)})
//     a) Register
router.post('/user/register', userController.register)

//     b)login
router.post('/user/login', userController.login)

//    c)getallrooms  
router.get('/rooms', roomController.getRooms)

//     d)registerpartner
router.post('/partner/register', partnerController.registerPartner)
//     e)loginpartner
router.post('/partner/login', partnerController.login)
//      f)uploads rooms
router.post('/rooms/add', jwtMiddleware,roomController.addRooms)
//      e)Partner Rooms
router.get('/partner_rooms',jwtMiddleware, roomController.getPartnerRoom)
//      f)uploads checkouts
router.post('/checkout',jwtmiddlewearUser, checkoutController.addCheckout)
//      g)getcustomerbooks   
router.get('/reserve/user',jwtmiddlewearUser, checkoutController.getCustomerRooms)
//      h)getallbooks   
router.get('/reserve' , jwtMiddleware,checkoutController.getBookedRooms)
//      i)editcustomerbooks   
router.put('/update/:id', jwtMiddleware,checkoutController.editBookingStatus)
//       j)delete project
router.delete('/room/remove/:id',jwtMiddleware,roomController.deletePartnerRoom)
//       k)editroomdetails   
router.put('/updateroom/:id', jwtMiddleware,roomController.editRoomDetails)
//       l)edit partner profile
router.put('/partner/edit',jwtMiddleware,multerConfig.single('profile'),partnerController.editPartner)
//       k)getallroomsbycat  
router.get('/category', roomController.getRoomsByCategory)

// 4) export router

module.exports = router