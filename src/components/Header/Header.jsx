// import React from 'react'
// conditional rendering, upon checking whether user is logged in or not

import { Link, useNavigate } from 'react-router-dom'
import { Container, Logo, LogoutBtn } from '../index.js'
import { useSelector } from 'react-redux'

function Header() {

  const authStatus = useSelector((state) => state.auth.status) // bringing this from store/authSlice/status
  const navigate = useNavigate()

  const navItems = [
    {
    name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    }
  ]

  return (
    <header 
    className='fixed top-0 left-0 right-0 z-50 lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md' 
    >
    <Container>

      <nav className='flex'>

        <div className='flex-1 flex justify-between items-center'>
          <Link to='/'>
            <Logo width='70px' className='text-xl'   />
            </Link>
        </div>

        <ul className='md:flex items-center justify-between text-base text-gray-900 pt-4 md:pt-0 ml-auto'>

          {navItems.map((item) => 
          item.active ? (       
            <li key={item.name}>
              <button
              onClick={() => navigate(item.slug)}
              className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
              >{item.name}</button>
            </li>
          ) : null
          )}

          {/* if Status is active then display logout button or else dont */}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}

        </ul>
      </nav>
      </Container>
  </header>
  )
}

export default Header