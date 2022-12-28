import React from "react";
import { CartContext } from "../../context/cartcontext/CartContext";
import { Increment, Decrement } from "../../context/cartcontext/action";
import { Button, Heading} from "@chakra-ui/react";

export default function AddButton({ quantity, id }) {
  const { dispatch } = React.useContext(CartContext);

  return (
    <>
      <Button
        borderRadius={"50%"}
        border={"1px solid black"}
        transform={"rotate(90deg)"}
        _hover={{ bgColor: "black", color: "white" }}
        disabled={quantity === 1}
        onClick={() => dispatch(Decrement(id))}
      >
        I
      </Button>
      <Heading fontSize={"18px"}>{quantity}</Heading>
      <Button
        borderRadius={"50%"}
        fontSize={"20px"}
        border={"1px solid black"}
        w={"20px"}
        _hover={{ bgColor: "black", color: "white" }}
        onClick={() => dispatch(Increment(id))}
      >
        +
      </Button>
    </>
  );
}
