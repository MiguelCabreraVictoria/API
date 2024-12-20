// user.model.js (o como lo llames)
import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: { type: String, unique: true },
  roles: [{ ref: 'Role', type: Schema.Types.ObjectId }]
}, {
  timestamps: true,
  versionKey: false
});

UserSchema.statics.encryptPassword = async function(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.statics.comparePassword = async function(password, receivedPassword) {
  return await bcrypt.compare(password, receivedPassword);
};


const User = model('User', UserSchema)
export default User;
