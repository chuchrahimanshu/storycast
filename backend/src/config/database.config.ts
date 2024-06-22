import mongoose from "mongoose";
import { MONGODB_URI } from "../utils/variables.util";

(async () => {
  try {
    const database = await mongoose.connect(MONGODB_URI);
    if (!database) {
      console.log("ERROR - Connecting to database MongoDB");
    }
    console.log(`SUCCESS - MongoDB Connected Successfully`);
  } catch (error) {
    console.log(`ERROR - Connecting to database MongoDB, ${error}`);
  }
})();

export default mongoose.connection;