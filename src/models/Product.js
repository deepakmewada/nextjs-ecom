import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    images:{
        type:Array,
        required:true
    },
    pid: {
        type:Number,
        required:true
    },
    tags: {
        type:Array
    }
})

export default mongoose.models.Product || mongoose.model('Product',ProductSchema)