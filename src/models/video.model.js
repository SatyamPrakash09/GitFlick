import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongooseAggregatePaginate"
const videoSchema = new Schema({
    videoFile:{
        type:String, //Cloudinary url
        required:[true, "Video File URL is required !!"]
    },
    thumbnail:{
        type:String, //Cloudinary url
        required:[true, "Thumbnail URL is required !!"]
    },
    title:{
        type:String, 
        required:[true, "Title is required !!"]
    },
    description:{
        type:String,
        required:[true, "Description is required !!"]
    },
    duration:{
        type:Number,
        required:true
    },
    views:{
        type:Number,
        default:0,
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema)