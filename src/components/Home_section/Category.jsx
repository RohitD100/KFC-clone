import {
  Heading,
  Box,
  Img,
  Spacer,
  Flex,
  Grid,
  GridItem,
  Text
} from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { data } from "./category._data";
import { Link, NavLink } from "react-router-dom";

export default function Category() {
  return (
    <Box>
      <Spacer h={{base:"60px", sm:"90px", md:"110px", lg:"110px"}} />
      <Box maxWidth={"1130px"} m={"auto"}>
        <Flex justifyContent={"space-between"}>
          <Heading ml={{base:"10px"}}>BROWSE CATEGORIES</Heading>
          <Divider maxWidth={"700px"} mt={"15px"} />
        </Flex>
        <Spacer h={"50px"} />
        <Grid
          templateColumns={{
          
            md: "repeat(3, 1fr)",
            sm: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          rowGap={"30px"}
          ml={{base:"20px"}}
        >
          {data.map((ele) => (
            <Link to={"/menu"}>
              <GridItem
                w={{base:"243.141px"}}
                h={"243px"}
                boxShadow={"md"}
                bgColor={"#F8F7F5"}
         

              >
                <Img src={ele.image} alt="image" />
                <Heading
                  fontSize={"18px"}
                  textAlign={"center"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  maxWidth={"auto"}
                  h={"44px"}
                  mt={"10px"}
                  letterSpacing={"-1px"}
                >
                  {ele.title}
                </Heading>
              </GridItem>
            </Link>
          ))}
          <GridItem
            w={"243.141px"}
            h={"243px"}
            boxShadow={"md"}
            bgColor={"#F8F7F5"}
            ml={{base:"5px", sm:"5px", md:"5px", lg:"5px"}}
          >
            <Img
              src="https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg"
              alt="image_view"
              w={"184px"}
              h={"180px"}
              m={"auto"}
            />
            <NavLink to={'/menu'}>
            <Text fontSize={"14px"} textAlign={"center"} fontWeight={"bold"}>View All Menu →</Text>
            </NavLink>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
