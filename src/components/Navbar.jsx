import React from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { Flex, Box, Grid, GridItem, Button, Center } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { AuthContext } from "../context/authcontext/AuthContext";
import MyAccount from "./MyAccount";
// import { useMediaQuery } from "@chakra-ui/react";
import kfc from './kfc.jpg';

import {
  Modal,
  Img,
  Text,
  Spacer,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const links = [
  { path: "/career", title: "Careers" },
  { path: "/about", title: "About" },
];

const find = "Find A KFC";
const order = "Start Order";
const login = (
  <Box mt="5px">
    <NavLink to="/login">
      <Icon icon="teenyicons:user-circle-solid" fontSize={"30px"} />
    </NavLink>
  </Box>
);
const cart = <Icon icon="mingcute:shopping-bag-2-line" fontSize={"30px"} />;

export const temp = (
  <Grid w={"45px"} templateColumns={"repeat(3,1fr)"}>
    <GridItem w="8px" h={"18px"} border="1px solid red" bg={"red"}></GridItem>
    <GridItem w="8px" h={"18px"} border="1px solid red" bg={"red"}></GridItem>
    <GridItem w="8px" h={"18px"} border="1px solid red" bg={"red"}></GridItem>
  </Grid>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = React.useContext(AuthContext);

  // const isMatch = useMediaQuery("(min-width: 768px)");

  // console.log(isMatch);

  const navbar = (
    <Box
      position={"fixed"}
      w="100%"
      zIndex={"1000"}
      bgColor={"white"}
      height="auto"
      id="navbar"
      boxShadow={"rgba(0,0,0,0.8)"}
      top={"0"}
    >
      <Box
        display={{ base: "flex", md: "block", lg:"flex"}}
        justifyContent={"space-between"}
        position={"relative"}
        ml={{md:"20px",lg:"auto"}}
        w="1103.12px"
        h={"auto"}
        m={"auto"}
        mb="15px"
        id="navlink-nav"
      >
        <Box>
          {temp}
          <Box
            display="flex"
            maxWidth={"700px"}
            gap={"50px"}
            mt="30px"
            flexWrap={"wrap"}
            id="nav-item"
          >
            <NavLink to={"/"}>
              <Img
                src={kfc}
                alt="logo_kfc"
                w={"180px"}
                h={"45px"}
                mt={"-5px"}
                borderRadius={"10px"}
                id="logo"
              />
            </NavLink>
            <NavLink to={"/menu"}>
              <Text
                fontSize={{ base: "14px" }}
                fontWeight={"bold"}
                id="menufont"
              >
                Menu
              </Text>
            </NavLink>

            {links.map((ele) => (
              <NavLink
                id="nav-map"
                key={ele.path}
                to={ele.path}
                style={{ fontWeight: "bold", fontSize: "14px" }}
              >
                {ele.title}
              </NavLink>
            ))}
            <NavLink
              id="nav-map"
              to={"/find_kfc"}
              style={{ fontWeight: "bold", fontSize: "14px" }}
            >
              {find}
              <ExternalLinkIcon fontSize={"13px"} mb="3px" ml="3px" />
            </NavLink>
          </Box>
        </Box>
        <Box>
          <Flex w="380px" mt={"40px"} gap="30px">
            <NavLink to={"/start_order"}>
              <Button
                w={"165px"}
                h="44px"
                borderRadius={"30px"}
                bgColor="red"
                color={"white"}
                fontWeight="bold"
                _hover={"red.200"}
              >
                {order}
              </Button>
            </NavLink>
            <Box>{!user ? login : <MyAccount />}</Box>

            <NavLink to={"/cart"}>
              <Button _hover={"none"} bg={"white"}>
                {cart}
              </Button>
            </NavLink>
          </Flex>
        </Box>
      </Box>
      <Box
        position={"fixed"}
        w="100%"
        zIndex={"-1"}
        bgColor={"#202124"}
        _hover={{ background: "rgba(0, 0, 0, 0.9)" }}
        id="start-order"
      >
        <Box>
          <Box onClick={onOpen} w={"100%"} h="40px" id="pick-up">
            <Center mt={"0px"} cursor="pointer">
              <Text mt={"10px"}>
                <Icon
                  icon="carbon:location-filled"
                  color="red"
                  fontSize={"20px"}
                />
              </Text>
              <Text color={"white"} ml="5px" mt={"5px"} fontSize={"16px"}>
                Start an Order for Pickup or Delivery
              </Text>
            </Center>
          </Box>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent maxW={{ base: "980px" }} id="modal-body">
              <ModalHeader fontWeight={"bold"}>
                <Center>START YOUR ORDER</Center>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody
                backgroundColor="lightgray"
                borderBottomRadius={"10px"}
              >
                <Center
                  w={"350px"}
                  m="auto"
                  textAlign={"center"}
                  fontSize="25px"
                  fontWeight={"bold"}
                >
                  LET'S GET STARTED. WOULD YOU LIKE PICKUP OR DELIVERY?
                </Center>
                <Spacer h={"15px"} />
                <Center>
                  <Text>
                    Menu availability and pricing may vary between order types.
                  </Text>
                </Center>
                <Spacer h={"15px"} />
                <Grid
                  templateColumns={"repeat(2, 1fr)"}
                  ml={{ base: "200px", sm: "150px", lg: "200px" }}
                >
                  <GridItem colSpan={1}>
                    <Button
                      borderRadius={"30px"}
                      border="1px solid black"
                      p={"30px 40px 30px 40px"}
                      fontWeight="bold"
                    >
                      QUICK PICK-UP
                    </Button>
                  </GridItem>
                  <GridItem colSpan={{ base: 1, md: 2, sm: 2, lg: 1 }}>
                    <Button
                      borderRadius={"30px"}
                      border="1px solid black"
                      p={"30px 40px 30px 40px"}
                      fontWeight="bold"
                    >
                      DELIVERY
                    </Button>
                  </GridItem>
                </Grid>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
      </Box>
    </Box>
  );

  return <>{navbar}</>;
}
