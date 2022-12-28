import {
  Heading,
  Box,
  Img,
} from "@chakra-ui/react";
import { temp } from "../Navbar";

const template =
  "https://images.ctfassets.net/wtodlh47qxpt/4gztBB8yAvtp6jV7JAuLD/093fddbb77a78a44a4d3d5e066c592de/KFC_Peri_Peri_Banner__1440x396px.jpg?w=1366&fit=fill&fm=webp";
export default function Welcome() {
  return (
    <Box mt={{md:'85px', lg:"0px"}}>
      <Img src={template} alt="template" id="template"/>
      <Box bgColor={"#F8F7F5"}>
        <Box h={"137.703px"} ml={{base:"20px", sm:"10px", md:"44px", lg:"120px"}}>
          {temp}
          <Heading
            m={"35px 0px 35px 0px"}
            fontWeight={"bold"}
            letterSpacing={"-2px"}
            fontSize={{base:"30px", sm:"40px", md:"44px", lg:"44px"}}
          >
            WELCOME TO KFC!
          </Heading>
        </Box>
      </Box>
    </Box>
  );
}
