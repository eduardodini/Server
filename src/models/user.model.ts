import mongoose from "mongoose";

export interface User extends mongoose.Document {
    name: String
}

const userScheme = new mongoose.Schema({ 
    name: {
        type: String
    }
})

export const User = mongoose.model<User>('User', userScheme);