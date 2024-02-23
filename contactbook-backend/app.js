const express = require("express");
const cors = require("cors");
const ApiError = require("./app/api-error");
const contactsRouter = require("./app/routes/contact.route");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);

app.use((req, res, next) => {
    // Nếu không có route nào khớp, gọi hàm next để chuyển sang middleware xử lý lỗi
    return next(new ApiError(404, "Resource not found"));
});

// Middleware xử lý lỗi
app.use((err, req, res, next) => {
    // Trả về lỗi dưới dạng JSON
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});

app.use("/api/contacts", contactsRouter);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the contact book application" });
});

module.exports = app;
