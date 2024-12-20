import {RolesEnum} from '../models/Role'

export const checkRolesExisted = (req, res, next) => {
  if(req.body.roles){
    for (let i= 0; i < req.body.roles.length; i++){
      
      if (!Object.values(RolesEnum).includes(req.body.roles[i])){
          return res.status(400).json({message: 'Invalid Role'});
      }      
    }
  }

  next();
}

