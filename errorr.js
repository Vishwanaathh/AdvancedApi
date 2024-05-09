
const errorMiddleware = (err, req, res, next) => {
    console.log('Processing error');
    res.status(process.env.CODE).json({
        message: err.message,
        stack: process.env.NODE_ENV
    });
};
module.exports=errorMiddleware;