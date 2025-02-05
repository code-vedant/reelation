import mongoose, {Schema,model,models} from "mongoose";
import bcryptjs from "bcryptjs";

export interface IUser{
    _id? : mongoose.Types.ObjectId;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const userSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        await bcryptjs.hash(this.password, 10)
    } 
    next();
})

const User = models.User || model<IUser>("User", userSchema);

export default User;
