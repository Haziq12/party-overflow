import { Profile } from '../models/profile.js'
import { Post } from '../models/post.js'


const create = async (req, res) => {
  console.log(req.body)
  try {
    req.body.added_by = req.user.profile
    const post = await new Post(req.body)
    await post.save()
    await Profile.updateOne(
      { _id: req.user.profile },
      { $push: { posts: post } }
    )
    return res.status(201).json(post)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export {
   create,
}