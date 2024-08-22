import mongoose, { Document, Schema } from "mongoose";

export interface Service extends Document {
  name: string;
  content: string;
  serviceType: string;
}

const Service = new Schema<Service>(
  {
    name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    serviceType: {
      type: String,
      enum: [
        "audit & assurance",
        "taxation",
        "consulting",
        "corporate law",
        "business advisory",
      ],
    },
  },
  {
    timestamps: true,
  }
);

const ServiceModel =
  (mongoose.models.Service as mongoose.Model<Service>) ||
  mongoose.model<Service>("Service", Service);

export default ServiceModel;
