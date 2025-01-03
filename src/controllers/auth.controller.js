import User from '../models/User'
import Role from '../models/Role'
import jwt from 'jsonwebtoken'

export const signUp = async (req, res) => {
  const {username, email, password, roles} = req.body

  const hashedPassword = await User.encryptPassword(password);
  const newUser = new User({
    username, 
    email, 
    password: hashedPassword
  })  

  if(roles){

   const foundRoles = await Role.find({name: {$in: roles}})
   newUser.roles = foundRoles.map(role => role._id)    
   
  } else {
    const role = await Role.findOne({name: "user"})
    newUser.roles = [role._id]
  }

  const savedUser = await newUser.save()

  const token = jwt.sign({id: savedUser._id},config.SECRET , {
    expiresIn: 86400
  })

  res.status(200).json({token}) 
  
}

export const signIn = async (req, res) => {
  const {email, password} = req.body;

  const userFound = await User.findOne({email: email}).populate("roles")

  if(!userFound) return res.status(400).json({message: 'User not found'})

  const matchPassword = await User.comparePassword(password,userFound.password)

  if (!matchPassword) return res.status(400).json({message: "Incorrect Password. Try again"})


  const token = jwt.sign({id: userFound._id}, process.env.SECRET, {
    expiresIn: 84600
  })

  res.json({token})

}
