//const { count } = require("console")
const authorModel = require("../models/authorModel")
const AuthorModel= require("../models/authorModel")
 const booksModel= require("../models/booksModel")
 
//AuthorController
const createAuthor=async function(req,res){
let author=req.body
let saveAuthor=await AuthorModel.create(author)
 res.send({msg:saveAuthor})

}
//BookController
const createBook = async function (req,res) {
    const Book = req.body;
    const savedbook = await booksModel.create(Book)
    res.send( {msg : savedbook})
    
}
const booksByChetan=async function(req,res){
    let author = await AuthorModel.find({author_name:"Chetan Bhagat"});
    let ID =await booksModel.find({author_id:{$eq:author[0].author_id}});
    res.send({msg:ID})

}
const updatebook=async function(req,res){
    const bookprice= await booksModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true});
    const updateprice=bookprice.price;
    const authorupdate=await authorModel.find({author_id:{$eq:bookprice.author_id}}).select({author_name:1,_id:0});
    res.send({msg:{authorupdate,updateprice}})
}
const bookrange =async function(req,res){
    const range =await booksModel.find({price:{$gte:50,$lte:100}});
    const hum= range.map(tum=>tum.author_id);
    const Newrange= await authorModel.find({author_id:hum}).select({author_name:1,_id:0});
    res.send (Newrange);
}

module.exports.booksByChetan=booksByChetan;
module.exports.updatebook=updatebook;
module.exports.bookrange=bookrange;


module.exports.createAuthor=createAuthor;
module.exports.createBook=createBook;


// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE


// module.exports.createAuthor= createAuthor
// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
