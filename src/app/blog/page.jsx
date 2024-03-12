import BlogList from "@/components/blogList";
import config from "@/utils/config.js";

const getBlogs = async () => {
  try {
    const allBlogs = await fetch(config.blogsUrl, {cache: 'no-store'})
    return allBlogs.json()
  } catch (error) {
    console.error(error.message)
  }
}

async function BlogPage () {
  try {
    const allBlogs = await getBlogs()
    return <BlogList blogs={ allBlogs }/>
  } catch (error) {
    console.error(error.message)
  }
}

export default BlogPage;