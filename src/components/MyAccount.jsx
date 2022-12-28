import React from "react";
import { AuthContext } from "../context/authcontext/AuthContext";
import { useNavigate } from "react-router-dom";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";

export default function MyAccount() {
    const {Signout}  = React.useContext(AuthContext);
    const navigate = useNavigate();

    const SignoutHandler =()=>{
        Signout()
        navigate('/')
    }

  return (
    <Menu mt={"5px"}>
      <MenuButton as={Button}  bg={"white"}  _hover={{bg:"white"}}>
        MyAccount
      </MenuButton>
      <MenuList position={"relative"}>
        <MenuGroup position={"absolute"} zIndex={"1000"}>
          <MenuItem>My Account</MenuItem>
          <MenuItem>Payments </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Help">
          <MenuItem>Docs</MenuItem>
          <MenuItem onClick={SignoutHandler}>Sign Out</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}
