import BlogCard from "@/components/blogCard";

function BlogList() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
      <div className="mx-auto max-w-screen-xl px-4 w-full">
        <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">

          <BlogCard />
          
        </div>
      </div>
    </div>
  );
}

export default BlogList;