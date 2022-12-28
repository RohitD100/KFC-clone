import React from "react";

import { Box, Spacer, Input, Heading } from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
import { temp } from "../components/Navbar";
import Chicken from "./Menupage/Chicken";
import Launch from "./Menupage/Launch";
import Biryani from "./Menupage/Biryani";
import BoxMeal from "./Menupage/BoxMeal";
import Burger from "./Menupage/Burger";
import Stayhome from "./Menupage/Stayhome";
import Snacks from "./Menupage/Snacks";
import Beverage from "./Menupage/Beverage";
// import { UpperMenu } from "./Menupage/UpperMenu";
import { MenuSideBar } from "./Menupage/MenuSideBar";
import Navbar from "../components/Navbar";
// import MobileNavbar from "../components/MobileNavbar";
import { useMediaQuery } from "@chakra-ui/react";
import MobileMenu from "./MobileMenu";
// import SmallMobileMenu from "./SmallMobileMenu";

export default function Menu() {
  // const [isMatch] = useMediaQuery("(max-width: 1024px)");
  const [isSmallMatch] = useMediaQuery("(max-width: 600px)");

  const menu = (<>
    {
      // isMatch ? <MobileNavbar/> : <Navbar/>
    }
    <Navbar/>
    <Box width={"100%"}>
      <Box w="1103.12px" m="auto">
        <Spacer h={{ base: "140px", md: "230px", lg: "140px" }} />

        <Box position={"fixed"} id="temp-logo">
          {temp}
        </Box>

        <Box
          m={"40px 0px 40px 0px"}
          position={"fixed"}
          w="100%"
          id="heading-logo"
        >
          <Heading style={{ fontStretch: "condensed" }} fontSize={"35px"}>
            KFC MENU
          </Heading>
        </Box>

        {/* sidebar */}
        <Box>
          {" "}
          <MenuSideBar />
        </Box>
      </Box>

      <Box
        width={"865px"}
        h={"1000px"}
        ml={"400px"}
        position={"relative"}
        top={"50px"}
      >
        <Box m={"6px"}>
          <Box position={"relative"}>
            <SearchIcon position={"absolute"} left={"10px"} top={"10px"} />
            <Input
              type="text"
              pl={"35px"}
              placeholder={"Search our menu"}
              w={"201px"}
              h={"35px"}
              borderRadius={"30px"}
            />
          </Box>
        </Box>

        <Box>
          <Heading m={"10px 0px 10px 0px"}>
            <Box border={"1px solid black"}></Box>
          </Heading>
        </Box>
        <Box>
          <Chicken />
          <Launch />
          <Biryani />
          <BoxMeal />
          <Burger />
          <Stayhome />
          <Snacks />
          <Beverage />
        </Box>
      </Box>
    </Box>
  </>)

  
  return (
    <>
      {
        isSmallMatch ?(<MobileMenu/>):(menu)
      }
    </>
    
  )
}
