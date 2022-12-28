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
import { UpperMenu } from "./Menupage/UpperMenu";

import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import { useMediaQuery } from "@chakra-ui/react";

export default function SmallMobileMenu() {
  const [isMatch] = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <Box>{isMatch ? <MobileNavbar /> : <Navbar />}</Box>
      <Box
        position={"fixed"}
        top={"120px"}
        zIndex={1000}
        padding={"30px 30px"}
        background={"white"}
        width={"100%"}
      >
        <UpperMenu />
      </Box>

      <Box
        width={"865px"}
        h={"1000px"}
        m={"auto"}
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

          <Box>
            <Heading m={"10px 0px 10px 0px"}>
              <Box border={"1px solid black"}></Box>
            </Heading>
          </Box>
          <Box mt={"100px"}>
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
    </>
  );
}
