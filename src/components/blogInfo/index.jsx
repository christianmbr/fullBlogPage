"use client"

function ShowBlog({ body, title, userName }) {
  return ( 
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-20">
      <h1 class="text-5xl font-bold dark:text-white">{ title }</h1>
      <h3 className="text-5xl font-bold dark:text-white">{ userName }</h3>
      <p class="my-4 text-lg text-gray-500">{ body }</p>
    </div>
  );
}

export default ShowBlog;