"use client"
import BlogCard from "@/components/blogCard";

function BlogList({ blogs }) {
  // const allBlogs = blogs.slice(0, 10)
  
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
      <div className="mx-auto max-w-screen-xl px-4 w-full">
        <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {            
            blogs.map((blog) => 
              <BlogCard 
                key={blog.id} 
                title={blog.title.slice(0, 10)+'...'}
                likes={blog.likes}
                userName={blog.userId}
                tag={'prueba'}
                id={blog._id}
              />)
          }
        </div>
      </div>
    </div>
  );
}

export default BlogList;