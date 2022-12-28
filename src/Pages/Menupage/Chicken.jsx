import React from "react";
import CartButton from "../addtocart/CartButton";
import { chicken } from "./menu-data/ChickenData";
import {
  Box,
  Spacer,
  Grid,
  GridItem,
  Img,
  Heading,
} from "@chakra-ui/react";

// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";
// import Loading from "../../loading/Loading";



export default function Chicken() {
  // const [loading, setLoading] = useState(false)
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   setLoading(true)
  //   axios({
  //     url: "https://github.com/pandit0305/mockserver-app",
  //     method: "GET",
  //   }).then((res) => {
  //   setLoading(false)
  //   console.log(res)
  //   setData(res.data)})
  //   .catch((err)=>{
  //   setLoading(false)
  //     console.log(err)
  //   })
  //   ;
  // }, []);


  return (
    <>
    <Box id="chicken" h={"100px"} ></Box>
    <Box bgColor={"#F8F7F5"} mt={"70px"} borderRadius={"5px"} >
       
      <Spacer h={"100px"} />
      <Box>
        <Heading
          fontSize={"32px"}
          lineHeight={"50px"}
          // border={"1px solid red"}
          ml={"20px"}
          letterSpacing={"-2px"}
          
        > 
          CHICKEN BUCKETS
        </Heading>
      </Box>
      <Spacer h={"20px"} />

      {/* {loading && <Loading/>} */}
      <Grid
        templateColumns={"repeat(2, 1fr)"}
        rowGap="30px"
        // columnGap={"5px"}
        columnGap={{ base: "-50px", sm: "-20px", md: "-20px", lg: "-5px" }}
        w={"865px"}
        mt={"20px"}
        
      >
        {chicken.map((ele) => (
          <GridItem  ml="20px" key={ele.id} maxWidth={"380px"}>
            <Img
              src={ele.image}
              alt="image_launch"
              w={"auto"}
              h={"285px"}
              borderRadius={"5px"}
            />
            <Heading fontSize={"16px"} m={"10px 0px 10px 0px"}>
              {ele.name}
            </Heading>
            <Heading fontSize={"16px"} m={"10px 0px 10px 0px"}>
              {ele.price}
            </Heading>
            <p style={{ width: "auto" }}>{ele.detail}</p>
            <Box m={"30px 0px 30px 0px"} >
              <CartButton ele={ele} id ={ele.id}/>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  </>
  );
}
