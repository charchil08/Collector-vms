const app = require("./app")

const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });
const connectDb = require("./config/db");

//Uncaught exception
process.on("uncaughtException", (err) => {
    console.log("Error : " + err.message);
    console.log("Shutting down server due to unhcaught exception");
    process.exit(1);
})

//db and server setup 
connectDb();
const server = app.listen(process.env.PORT, () => {
    console.log("Server is working on http://localhost:" + process.env.PORT);
})

// unhandled server rejection
process.on("unhandledRejection", (err) => {
    console.log("Error : " + err.message);
    console.log("Shutting down server due to unhandled rejection");

    server.close(() => {
        process.exit(1);
    })

})