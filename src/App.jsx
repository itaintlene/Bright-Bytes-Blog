import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { login, logout } from "./store/authSlice"

function App() {
  // loading state: for asking from db and network connections about database bc its not local
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

// to check if user is either logged in then user data is displayed or if they're logged out
  useEffect(() => {
    authService.getCurrentUser()
               .then((userData)=>{
                if (userData) {
                  dispatch(login({userData}))
                } else {
                  dispatch(logout())
                }
               })
               .finally(()=>setLoading(false))
  }, [dispatch, setLoading]);
  
  return ! loading ? (
          <div className="min-h-screen flex flex-wrap content-between bg-gray-25">
            <div className="w-full block">
            <Header />
              <main className="pt-16">
              <Outlet /> 
              </main>
            <Footer />
            </div>
          </div>
  ) : (null)
}

export default App
