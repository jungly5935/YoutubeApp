const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikeSchema = mongoose.Schema({
    userFrom : {
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    videoId : {
        type:String
    },
    commentId : {
        type:String
    }
    
   
}, { timestamps: true })



const Like = mongoose.model('Like', LikeSchema);

module.exports = { Like }