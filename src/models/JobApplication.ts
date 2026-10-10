import mongoose, { Schema, Document } from "mongoose";

export interface IJobApplication extends Document {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  experience: string;
  location?: string;
  noticePeriod?: string;
  linkedin?: string;
  coverNote?: string;
  resumeFileName?: string;
  status: string;
  createdAt: Date;
}

const JobApplicationSchema: Schema = new Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    experience: { type: String, required: true, trim: true },
    location: { type: String, default: "Not specified" },
    noticePeriod: { type: String, default: "Not specified" },
    linkedin: { type: String, trim: true },
    coverNote: { type: String },
    resumeFileName: { type: String },
    status: { type: String, default: "Under Review" },
    createdAt: { type: Date, default: Date.now },
  },
  {
    collection: "job_applications",
  }
);

export default mongoose.models.JobApplication ||
  mongoose.model<IJobApplication>("JobApplication", JobApplicationSchema);
