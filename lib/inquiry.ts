import mongoose, { Document, Model, Schema } from "mongoose";

export interface IInquiry extends Document {
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  message: string;
}

const InquirySchema = new Schema<IInquiry>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export const Inquiry: Model<IInquiry> =
  mongoose.models.Inquiry || mongoose.model<IInquiry>("Inquiry", InquirySchema); 