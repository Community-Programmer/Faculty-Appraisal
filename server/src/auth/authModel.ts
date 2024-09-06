import mongoose, { Document, Schema } from "mongoose";

interface UserDetails {
  role: string;
  name: string;
  profileUrl?: string;
  dob?: Date;
}

interface User extends Document {
  email: string;
  password: string;
  userDetails: UserDetails;
}

const userDetailSchema = new Schema<UserDetails>({
  role: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  profileUrl: {
    type: String,
    default: 'https://t3.ftcdn.net/jpg/03/64/62/36/360_F_364623623_ERzQYfO4HHHyawYkJ16tREsizLyvcaeg.jpg'
  },
  dob: {
    type: Date,
  },
});

const authSchema = new Schema<User>(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    userDetails: {
      type: userDetailSchema,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<User>("User", authSchema);
