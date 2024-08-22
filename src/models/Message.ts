import mongoose, { Document, Model, Schema } from "mongoose";

export interface Message extends Document {
  name: string;
  email: string;
  subject: string;
  imgUrl: string;
  message: string;
}

const Message = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    imgUrl: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const MessageModel =
  (mongoose.models.Message as Model<Message>) ||
  mongoose.model<Message>("Message", Message);

export default MessageModel;
