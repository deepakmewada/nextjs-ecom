import User from '../../../models/User'
import dbConnect from '../../../utils/dbConnect';
import { registerValidation } from '../../../utils/validations';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'POST':
        try {
            const { error } = registerValidation(req.body)
            if(error) return res.status(400).json({ success: false, errors: error.details[0].message }) 
           
            // Check If User Exist
            const emailExist = await User.findOne({email: req.body.email})
            if(emailExist) return res.status(400).json({ success: false, errors: "Email Id already exist" }) 

            //Hash Password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt)

            const user = new User({
              name: req.body.name,
              email: req.body.email,
              password: hashedPassword
            })
            
            // Saving Data t0 MongoDB
            await user.save()
            res.status(201).json({ success: true, user: user._id })
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