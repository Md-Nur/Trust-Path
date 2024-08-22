import mongoose, { Document, Schema } from "mongoose";

export interface Client extends Document {
  name: string;
  imgUrl: string;
}

const Client = new Schema<Client>(
  {
    name: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ClientModel =
  mongoose.models.Client || mongoose.model<Client>("Client", Client);

export default ClientModel;
