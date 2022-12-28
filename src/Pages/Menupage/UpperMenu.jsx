// import { HashLink } from "react-router-hash-link";
import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
export const UpperMenu = () => {
  return (
    <Box>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          background={"black"}
          borderRadius={"30px"}
          color={"white"}
          width={"180px"}
        >
          Kfc Menu
        </MenuButton>
        <MenuList >
          <MenuItem fontSize={"16px"} fontWeight={"bold"}>
            {" "}
            <Link to="chicken" smooth>
              CHICKEN BUCKETS
            </Link>
          </MenuItem>
          <MenuItem fontSize={"16px"} fontWeight={"bold"}>
            {" "}
            <Link to="launch" smooth>
              NEW LAUNCH
            </Link>
          </MenuItem>
          <MenuItem fontSize={"16px"} fontWeight={"bold"}>
            {" "}
            <Link smooth to="biryani">
              BIRYANI BUCKETS
            </Link>
          </MenuItem>
          <MenuItem fontSize={"16px"} fontWeight={"bold"}>
            {" "}
            <Link smooth to="meal">
              BOX MEALS
            </Link>
          </MenuItem>
          <MenuItem fontSize={"16px"} fontWeight={"bold"}>
            {" "}
            <Link smooth to="burger">
              BURGERS
            </Link>
          </MenuItem>

          <MenuItem fontSize={"16px"} fontWeight={"bold"}>
            {" "}
            <Link smooth to="homemeal">
              STAY HOME <br/>SPECIALS
            </Link>
          </MenuItem>
          <MenuItem fontSize={"16px"} fontWeight={"bold"}>
            {" "}
            <Link smooth to="snack">
              SNACKS
            </Link>
          </MenuItem>
          <MenuItem fontSize={"16px"} fontWeight={"bold"}>
            {" "}
            <Link smooth to="beverage">
              BEVERAGES
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
