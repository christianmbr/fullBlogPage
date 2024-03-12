import { Inter } from 'next/font/google'
import NavBar from '@/components/navBar';
import Footer from '@/components/footer';
import "./globals.css";

const inter = Inter({subsets: ['latin']})

function HomeLayout({children}) {
  return ( 
    <html lang='es'>
      <body className={inter.className + " bg-gray-800"}>
        <NavBar />
          {children}
        <Footer />
      </body>
    </html>
  );
}

export default HomeLayout;