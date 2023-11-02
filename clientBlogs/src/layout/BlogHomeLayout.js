import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const BlogHomeLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default BlogHomeLayout