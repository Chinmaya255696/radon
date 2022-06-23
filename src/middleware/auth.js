const jwt = require("jsonwebtoken");

const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
    try{let token = req.headers["x-auth-token"]
    if(!token) return res.status(401).send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-radon')

    if(!decodedToken) return res.status(200).send({status: false, msg:"token is not valid"})
    }catch(error){
        res.status(500).send({msg: "Error" , error: error.message})
    }

    next();
}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    try{let token = req.headers["x-auth-token"];
    
    let decodedToken = jwt.verify(token, "functionup-radon");
    //userId from which the request is made .In this case message to be posted.
    let userToBeModified = req.params.userId

    //userId for the logged in user
    let  userLoggedIn = decodedToken.userId
    
    //userId comparision to check if the logged inuser is requesting for their own data
    if(userToBeModified !=userLoggedIn)return res.status(403).send({status:false , msg: "user logged in is not allowed to modify the requested users data"}) 
    // retun the updated document
}catch(error){
    res.status(500).send({msg: "Error" , error: error.message})
}

    next()
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise