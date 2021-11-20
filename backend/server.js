const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const colors = require("colors");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
// routes
const productRoutes = require("./routes/Products");
const userRoutes = require("./routes/Auth");
const orderRoutes = require("./routes/Orders");
const path = require("path");
// define app
const app = express();
//db
const connectDB = require("./config/db");
connectDB();

//port
const PORT = 8080;

app.use(express.json());
//cors
app.use(cors({ origin: true }));

app.get("/", (req, res) => {
  res.send("welcome to markosis");
});
//routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/uploads", require("./routes/Upload"));

//err handler
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
