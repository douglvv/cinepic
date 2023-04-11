// API key
function getAPIKey(req, res, next){
    req.key = '6b526007'
    next()
}

module.exports = getAPIKey;