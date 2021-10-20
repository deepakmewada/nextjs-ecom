import mongoose from 'mongoose';

const ConfigSchema = new mongoose.Schema({
    key:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true
    },
    data: {
        type:Array,
        required:true
    },
})

export default mongoose.models.Config || mongoose.model('Config',ConfigSchema)