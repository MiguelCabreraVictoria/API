import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB is connected"))
  .catch(error => console.error("Error connecting to the database: ", error));
