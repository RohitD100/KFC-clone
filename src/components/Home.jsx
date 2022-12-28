import { Box, Spacer } from "@chakra-ui/react";
import Welcome from './Home_section/Welcome';
import Category from './Home_section/Category';
import Offer from './Home_section/Offer';
import Footer from "./Home_section/Footer";
import Navbar from "../components/Navbar";
import MobileNavbar from "./MobileNavbar";
import { useMediaQuery } from '@chakra-ui/react'


export default function Home(){
  const [isMatch] = useMediaQuery("(max-width: 600px)");

    // console.log(isMatch)

    return(
        <>  
        {
            isMatch ? (<MobileNavbar/>) : (<Navbar/>)
        }
            
            <Box id="home">
                <Box h="230px" id ="spacer"/>
                <Welcome/>
                <Category/>
                <Offer/>
                <Footer/>
            </Box>
        </>
    )
}

