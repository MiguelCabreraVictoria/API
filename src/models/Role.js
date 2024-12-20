import { Schema, model } from "mongoose";
 
export const RolesEnum = {
  ADMIN: 'admin', 
  MODERATOR: 'moderator',
  USER: 'user'
}


Object.freeze(RolesEnum)


const RoleSchema  = new Schema({
  name: String
}, {
    versionKey: false
  }) 


export default model('Role', RoleSchema);
