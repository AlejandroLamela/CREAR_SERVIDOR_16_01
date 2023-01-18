const indexGet = (req,res, next)=> {
    return res.status(200).json('OK, teachers routes workings')
 };

 const createPost = (req, res, next)=>{
    return res.status(200).json('OK POST DE create funcionando');
 };

 module.exports = {
    indexGet,
    createPost,
 }