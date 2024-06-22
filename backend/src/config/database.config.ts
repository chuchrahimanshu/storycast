import mongoose from "mongoose";

(async () => {
  try {
    const database = await mongoose.connect(process.env.MONGODB_URI as string);
    if (!database) {
      console.log("ERROR - Connecting to database MongoDB");
    }
    console.log(`SUCCESS - MongoDB Connected Successfully`);
  } catch (error) {
    console.log(`ERROR - Connecting to database MongoDB, ${error}`);
  }
})();

export default mongoose.connection;