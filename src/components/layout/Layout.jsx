import React from 'react'
import { Helmet } from "react-helmet"
import Footer from "./Footer";
import Header from './Header';
import { ToastContainer, Flip } from 'react-toastify';
const Layout = ({children , title, description , keywords }) => {
  return (
    <>
    <Helmet>
      <meta charSet='UTF-8'/>
      <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>{title}</title>
    </Helmet>
    <div>
      <Header/>
      <main style={{minHeight : '75vh'}} className='bg-slate-100'>
        <ToastContainer 
        draggablePercent={60}
        transition={Flip}
        autoClose={1000}
        position='top-center'/>
        {children}
      </main>
      <Footer/>
    </div>
    </>
  )
};

Layout.defaultProps={
  title:'Top Shelf',
  description:"Top Shelf is a line of curated skincare essentials",
  keywords:"skincare "
};
export default Layout