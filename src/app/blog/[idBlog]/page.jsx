import ShowBlog from "@/components/blogInfo"
import config from '@/utils/config.js'

const findBlog = async (id) => {
  try {
    const response = await fetch(`${config.blogsUrl}${id}`)
    return response.json()
  } catch (error) {
    console.error(error.message)
  }
}

async function Blog({ params }) {
  try {
    const { userId, title, body } = await findBlog(params.idBlog)

    return (
      <ShowBlog 
        userName= { userId }
        title={ title }
        body={ body }
      />
    );
  } catch (error) {
    console.error(error.message)
  }
}

export default Blog
