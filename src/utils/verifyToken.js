import jwt from 'jsonwebtoken';

 export default (req, res, next) => {
    const token = req.headers['auth-token'];
    if(!token) return res.status(401).json({ success: false, errors: "Access Denied" })

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
    }catch(err){
        res.status(400).json({ success: false, errors: "Invalid Token" })
    }
 }