// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI as string);

//         console.log("MongoDB Connected");
//     } catch (error) {
//         console.log("Database Error:", error);

//         process.exit(1);
//     }
// };

// export default connectDB;


import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(process.env.MONGO_URI as string, {
      serverSelectionTimeoutMS: 5000,
    });

    isConnected = db.connections[0].readyState === 1;

    console.log("✅ DB Connected");
  } catch (error) {
    console.log("❌ DB Error:", error);
  }
};

export default connectDB;