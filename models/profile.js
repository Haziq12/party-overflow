import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema(
  {
    email: {type: String, required: true, lowercase: true, unique: true},
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }