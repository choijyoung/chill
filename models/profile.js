import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  myMusic: [{type: Schema.Types.ObjectId, ref:"Song"}],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}