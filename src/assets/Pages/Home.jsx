import { Link } from "react-router-dom"
import LoginSection from "../Components/LoginSection/LoginSection"
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"

const Home = () => {
  return (
    <>
    <Navbar/>
    <LoginSection/>
    <Footer/>
    </>
  )
}

export default Home