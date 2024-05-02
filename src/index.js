import app from "./app.js";
import { ConnectDB } from "./db.js";

ConnectDB();

app.listen(4000);
console.log("Server on port", 4000);
