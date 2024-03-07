class ApiError extends Error {
    constructor(statusCode, message) {
        super(message); // Truyền message vào hàm super để khởi tạo thuộc tính message của Error
        this.statusCode = statusCode;
    }
}

module.exports = ApiError;
