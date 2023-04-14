
function getAPIKey(req, res, next){
    req.key = '6b526007' // < --- Api key
    next()
}

module.exports = getAPIKey;