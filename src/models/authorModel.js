
    const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {

  author_id:Number,
  author_name:String,
  age:Number,
  address:String
},
{timestamps: true}
);
module.exports = mongoose.model('Author', authorSchema)
//     bookName: {
//         type:String,
//          require:true},
//     price:{
//         indianPrice:String,
//         europePrice:String},
//     year:{
//         type:Number,
//          default:2021},
//     tags:[Array],
//     authorName:String,
//     totalPages:Number,
//     stockAvailable:Boolean,
    






//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
