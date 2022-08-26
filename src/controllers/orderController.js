const { count } = require("console")
const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel")

const createorder= async function (req, res) {
    let userid= req.body.userId
    let productid =req.body.productid
    let userValidation = await userModel.findById(userid)
    let productValidation = await userModel.findById(productid)
    if(userValidation){  //By check the user is present or not.

        if(productValidation){     //By check the product is present or not.

            let isfreeAppUser = userValidation.freeAppUser
            
            let userBalance = userValidation.userbalance

            if (isfreeAppUser == false){   //chcking user is freeAppUser or not
                let bookPrice = productValidation.bookPrice
                if (userBalance>=bookPrice){   //user has sufficient balance to make order or not

                    let orderDetails = req.body     //user is not freeAppUser
                    orderDetails.amount =bookPrice
                    orderDetails.freeAppUser = isfreeAppUser
                    orderDetails.date = new Date()
                    let updatedBalance = userBalance - bookPrice
                    
                    let savedData= await orderModel.create(orderDetails)     //create order
                    await userModel.findOneAndUpdate({"_id":userid},{"userbalance":updatedBalance})  //updating the balance
                    res.send({msg: savedData})

                }else{
                  res.send ({msg:"low Balance, load Balance first then purchase"})  
                }

            }

        }
        

    }



 
}

module.exports.createorder = createorder






// const getBooksData = async function (req, res) {
//     let allBooks = await BookModel.find({ authorName: "HO" })
//     console.log(allBooks)
//     if (allBooks.length > 0) res.send({ msg: allBooks, condition: true })
//     else res.send({ msg: "No books found", condition: false })
// }


// const updateBooks = async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks = await BookModel.findOneAndUpdate(
//         { authorName: "ABC" }, //condition
//         { $set: data }, //update in data
//         { new: true, upsert: true } ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT
//     )

//     res.send({ msg: allBooks })
// }

// const deleteBooks = async function (req, res) {
//     // let data = req.body 
//     let allBooks = await BookModel.updateMany(
//         { authorName: "FI" }, //condition
//         { $set: { isDeleted: true } }, //update in data
//         { new: true } ,
//     )

//     res.send({ msg: allBooks })
// }



// const totalSalesPerAuthor = async function (req, res) {
//     // let data = req.body 
//     let allAuthorSales = await BookModel.aggregate(
//         [
//             { $group: { _id: "$authorName", totalNumberOfSales: { $sum: "$sales" } } },
//             { $sort: { totalNumberOfSales: -1 } }
//         ]
//     )

//     res.send({ msg: allAuthorSales })
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE




// module.exports.getBooksData = getBooksData
// module.exports.updateBooks = updateBooks
// module.exports.deleteBooks = deleteBooks
// module.exports.totalSalesPerAuthor = totalSalesPerAuthor
