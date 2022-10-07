const express = require("express")
const app = express();
const cookieParser = require("cookie-parser")
const cors = require("cors")

const errorMiddleware = require("./middleware/error");

//import routes
// const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user")
const complainRoutes = require("./routes/complain");
const departmentRoutes = require("./routes/department");

// middleware  
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(cookieParser());
app.use(cors())

// app.use("/api/v1", productRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", complainRoutes);
app.use("/api/v1", departmentRoutes);

app.use(errorMiddleware);


module.exports = app;
