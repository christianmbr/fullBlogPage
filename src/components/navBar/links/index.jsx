import Link from "next/link"

const links = [
    {
        tittle: 'Homepage',
        path: '/'
    },
    {
        tittle: 'About',
        path: '/about'
    },
    {
        tittle: 'Contact',
        path: '/contact'
    },
    {
        tittle: 'Blogs',
        path: '/blog'
    }
]

function Links() {
    return ( <div>
        {
            links.map(({tittle, path}, index) => {
                return tittle === 'Homepage' ? <Link href={path} key={index} className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">{tittle}</Link> : <Link href={path} key={index} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{tittle}</Link>
            })
        }
    </div> );
}

export default Links;