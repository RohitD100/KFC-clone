import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authentication } from "../context/firebase/firebase-config";
import { RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";
import { AuthContext } from "../context/authcontext/AuthContext";

import {
  Box,
  Spacer,
  Container,
  Center,
  Heading,
  Text,
  Img,
  Input,
  Button,
  Divider,
  PinInput,
  PinInputField,
  HStack,
} from "@chakra-ui/react";

const mypin = {
  a: "",
  b: "",
  c: "",
  d: "",
};

export default function Login() {
  const { setUser } = React.useContext(AuthContext);
  const countryCode = "+91";
  const [phone, setPhone] = useState(countryCode);
  const [pin, setPin] = useState(mypin);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const { a, b, c, d, e, f } = pin;

  const Inputevent = (e) => {
    setPhone(e.target.value);
  };

  const generateourCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-box",
      {
        size: "invisible",
        callback: (response) => {
          // recaptcha solved, allow sign in with phone number
        },
      },
      authentication
    );
  };

  const Sendotp = (e) => {
    e.preventDefault();
    if (phone.length >= 12) {
      console.log(phone);
      setShow(true);
      generateourCaptcha();
      setTimeout(() => {
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(authentication, phone, appVerifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
          })
          .catch((err) => {
            console.log(err);
          });
      }, 3000);
    }
  };

  const PinEvent = (e) => {
    const { name, value } = e.target;
    setPin({ ...pin, [name]: value });
  };

  const OnsubmitEvent = () => {
    setUser(true);
    const otp = pin.a + pin.b + pin.c + pin.d + pin.e + pin.f;

    if (otp.length === 6) {
      // console.log(otp);
      const confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          console.log(error);
          // ...
        });

      return navigate("/");
    }
  };

  const sendform = (
    <Box>
      <Center mt={"30px"} display={"flex"} flexDirection={"column"} >
        <Center maxWidth = {"450px"} textAlign="center"  mt={"30px"}>
          <Text fontSize={"16px"} fontWeight={"bolder"} letterSpacing={"-1px"}>
            LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!
          </Text>
        </Center>
        <Input
          placeholder="Phone Number*"
          type={"text"}
          name={"phone"}
          value={phone}
          onChange={Inputevent}
          outline={"none"}
          borderTop="none"
          borderLeft={"none"}
          borderRight={"none"}
          borderBottom={"1px solid black"}
        ></Input>
      </Center>
      <Center mt={"20px"}>
        <Text fontSize={"12px"}>
          By “logging in to KFC”, you agree to our{" "}
          <u style={{ fontWeight: "bold" }}>Privacy Policy</u> and{" "}
          <u style={{ fontWeight: "bold" }}>Terms & Conditions</u>.
        </Text>
      </Center>
      <Center mt={"20px"}>
        <Button
          fontSize={"13px"}
          fontWeight={"bold"}
          w={"177px"}
          h="44px"
          borderRadius={"30px"}
          bgColor={"black"}
          color={"white"}
          _hover={"none"}
          onClick={Sendotp}
        >
          Send Me a Code
        </Button>
      </Center>
      <Center mt={"20px"}>
        <Divider mr={"3px"} />
        or
        <Divider ml={"3px"} />
      </Center>
      <Center mt={"20px"}>
        <Button
          fontSize={"14px"}
          fontWeight={"bold"}
          w={"464px"}
          h="48px"
          borderRadius={"30px"}
          bgColor={"white"}
          color={"grey"}
          _hover={"none"}
          border={"1px solid black"}
        >
          Skip, Continue As Guest
        </Button>
      </Center>
    </Box>
  );

  const otpform = (
    <Box id="">
      <Center w={"450px"} textAlign="center" mt={"30px"}>
        <Text fontSize={"20px"} fontWeight={"bolder"} letterSpacing={"-1px"}>
          WE JUST TEXTED YOU
        </Text>
      </Center>

      <Center mt={"20px"}>
        <Text fontSize={"12px"}>
          Please enter the verification code we just sent to {phone}
        </Text>
      </Center>

      <Center mt={"20px"}>
        <Text
          fontSize={"14px"}
          color={"grey"}
          fontWeight={"bold"}
          cursor={"pointer"}
        >
          <u>Different Number?</u>
        </Text>
      </Center>

      <Center mt={"30px"}>
        <HStack>
          <PinInput>
            <PinInputField
              borderTop={"none"}
              borderLeft={"none"}
              borderRight={"none"}
              borderBottom={"1px solid black"}
              name="a"
              value={a}
              onChange={PinEvent}
            />
            <PinInputField
              borderTop={"none"}
              borderLeft={"none"}
              borderRight={"none"}
              borderBottom={"1px solid black"}
              name="b"
              value={b}
              onChange={PinEvent}
            />
            <PinInputField
              borderTop={"none"}
              borderLeft={"none"}
              borderRight={"none"}
              borderBottom={"1px solid black"}
              name="c"
              value={c}
              onChange={PinEvent}
            />
            <PinInputField
              borderTop={"none"}
              borderLeft={"none"}
              borderRight={"none"}
              borderBottom={"1px solid black"}
              name="d"
              value={d}
              onChange={PinEvent}
            />
            <PinInputField
              borderTop={"none"}
              borderLeft={"none"}
              borderRight={"none"}
              borderBottom={"1px solid black"}
              name="e"
              value={e}
              onChange={PinEvent}
            />
            <PinInputField
              borderTop={"none"}
              borderLeft={"none"}
              borderRight={"none"}
              borderBottom={"1px solid black"}
              name="f"
              value={f}
              onChange={PinEvent}
            />
          </PinInput>
        </HStack>
      </Center>

      <Center mt={"20px"}>
        <Text fontSize={"14px"} color={"grey"} fontWeight={"bold"}>
          <u>Resend the Code</u>
        </Text>
      </Center>
      <Center mt={"20px"}>
        <Divider mr={"3px"} />
        or
        <Divider ml={"3px"} />
      </Center>
      <Center mt={"20px"}>
        <Button
          fontSize={"14px"}
          fontWeight={"bold"}
          w={"90px"}
          h="30px"
          borderRadius={"30px"}
          color={"black"}
          bgColor="grey"
          onClick={OnsubmitEvent}
        >
          Submit
        </Button>
      </Center>
    </Box>
  );

  const display = !show ? sendform : otpform;

  return (
    <Box h={"1000px"}>
      <Spacer h={"50px"} />
      <Container>
        <Center mt={"20px"}>
          <Text fontSize={"14px"} color="rgb(0,0,0)" fontWeight={"bold"}>
            Sign In / Sign Up
          </Text>
        </Center>
        <Center mt={"30px"}>
          <Heading
            fontSize={"38px"}
            fontFamily={"Times New Roman"}
            color={"red"}
            fontWeight={"bold"}
          >
            <Img
              src="https://login.kfc.co.in/auth/resources/1vkce/login/kfcIndiaLoginUIDev_2022_08_04/images/KFC_logo.svg"
              alt="image"
            />
          </Heading>
        </Center>

        {display}
        <Center>
          <Box id="recaptcha-box"></Box>
        </Center>
      </Container>
    </Box>
  );
}
