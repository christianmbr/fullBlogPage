import Blog from '../model/blogModel.js'

export const findAllBlogs = async (req, res) => {
  try {
    const response = await Blog.find({})
    return res.status(200).json(response)
  } catch (error) {
    console.error(error.message)
  }
}

export const findBlog = async (req, res) => {
  try {
    // No olvidar validar informacion entrante.
    const blog = await Blog.findById(req.params.id)
    return res.status(200).json(blog)
  } catch (error) {
    console.error(error.message)
  }
}