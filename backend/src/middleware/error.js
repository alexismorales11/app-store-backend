//Miffleware de tipo error
function logError (error, req, res, next){
    next(error);
}

//Miffleware que devuelve error en JSON
function resError (error, req, res, next){
    res.status(500).json({
        message: error.message,
        stack: error.stack
    })
}

module.exports = { logError, resError };