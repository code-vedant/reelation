import mongoose, {Schema,model,models} from "mongoose";

export const dimensions = {
    width: 1080,
    height: 1920
}

export interface IVideo{
    _id? : mongoose.Types.ObjectId;
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl: string;
    transformation?: {
        width: number;
        height: number;
    }
    createdAt?: Date;
    updatedAt?: Date;
}

const videoSchema = new Schema<IVideo>({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    videoUrl: {
        type: String,
        required: true
    },
    thumbnailUrl: {
        type: String,
        required: true
    },
    transformation: {
        type: {
            width: {
                type: Number,
                required: true
            },
            height: {
                type: Number,
                required: true
            }
        },
        required: false
    }
},{
    timestamps: true
});

const Video = models.Video || model<IVideo>("Video", videoSchema);

export default Video;