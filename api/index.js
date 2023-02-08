import server from "./src/app.js";
import db from "./src/config/db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3001;

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to mysql");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
