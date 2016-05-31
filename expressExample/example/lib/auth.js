/**
 * Created by Alicia on 21/04/2016.
 */
// Closure
var auth = function (key) {
    return function (req, res, next) {
        if(req.query.key !== key){
            res.status(401).send('Unauthorized');
            return; // DON'T FORGET
        }
        next();
    };
};

module.exports = auth;