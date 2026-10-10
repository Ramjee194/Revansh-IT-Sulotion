import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

/* eslint-disable @typescript-eslint/no-explicit-any */
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

function sanitizeMongoUri(uri: string): string {
  try {
    const protocolMatch = uri.match(/^(mongodb(?:\+srv)?:\/\/)(.*)$/);
    if (!protocolMatch) return uri;
    const protocol = protocolMatch[1];
    const rest = protocolMatch[2];

    const lastAtIndex = rest.lastIndexOf("@");
    if (lastAtIndex === -1) return uri;

    const creds = rest.substring(0, lastAtIndex);
    const hostAndDb = rest.substring(lastAtIndex + 1);

    const colonIndex = creds.indexOf(":");
    if (colonIndex !== -1) {
      const user = creds.substring(0, colonIndex);
      const pass = creds.substring(colonIndex + 1);
      const encodedUser = encodeURIComponent(decodeURIComponent(user));
      const encodedPass = encodeURIComponent(decodeURIComponent(pass));
      return `${protocol}${encodedUser}:${encodedPass}@${hostAndDb}`;
    }
    return uri;
  } catch {
    return uri;
  }
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  const rawUri = process.env.MONGODB_URI || "";
  const uriToUse = sanitizeMongoUri(rawUri);

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      connectTimeoutMS: 8000,
      serverSelectionTimeoutMS: 8000,
    };

    cached.promise = mongoose.connect(uriToUse, opts).then((mongoose) => {
      console.log("MongoDB Connected Successfully");
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error("MongoDB Connection Error:", e);
    throw e;
  }

  return cached.conn;
}

export default connectDB;
