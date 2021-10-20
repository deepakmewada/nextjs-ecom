import User from '../../../models/User'
import dbConnect from '../../../utils/dbConnect';
import { loginValidation } from '../../../utils/validations';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'POST':
      try{
            const { error } = loginValidation(req.body)
            if(error) return res.status(400).json({ success: false, errors: error.details[0].message }) 
           
            // Check If User Exist
            const user = await User.findOne({email: req.body.email})
            if(!user) return res.status(400).json({ success: false, errors: "Email not found" }) 

            //Check Password
            const validPass = await bcrypt.compare(req.body.password, user.password);
            if(!validPass) return res.status(400).json({ success: false, errors: "Invalid Password" }) 

            //Create and assign a token
            const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)

            res.setHeader('auth-token',token).status(200).json({success: true,user: {name:user.name,id:user._id}})
        } catch (error) {
            console.log(error)
            res.status(400).json({ success: false })
        }
        break
    default:
      res.status(400).json({ success: false})
      break
  }
}