import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Bloglist from '../components/Bloglist'
import Footer from '../components/Footer'
import Bloghome from '../components/Bloghome'
import Writing from '../components/Writing'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Bloghome/>
    <Writing/>
    {/* <Bloglist/>  */}
    <Footer/>
    </>
  )
}

export default Home