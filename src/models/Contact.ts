import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  service?: string;
  message: string;
  status: string;
  createdAt: Date;
}

const ContactSchema: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, default: "Not provided", trim: true },
    subject: { type: String, required: true, trim: true },
    service: { type: String, default: "General Inquiry" },
    message: { type: String, required: true },
    status: { type: String, default: "New Inquiry" },
    createdAt: { type: Date, default: Date.now },
  },
  {
    collection: "client_inquiries",
  }
);

export default mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);
