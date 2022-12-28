import React from "react";
import { CartContext } from "../../context/cartcontext/CartContext";
import { addToCart } from "../../context/cartcontext/action";
import { Img, Button } from "@chakra-ui/react";

export default function CartButton({ ele,id }) {
  const { dispatch } = React.useContext(CartContext);

  return (
    <Button
      w={"184px"}
      h={"44px"}
      borderRadius={"30px"}
      bgColor={"red"}
      color={"white"}
      _hover={{ background: "rgba(255, 0, 0, 0.8)" }}
      onClick={() => dispatch(addToCart(ele))}
    >
      Add to Cart{" "}
      <Img
        src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        ml={"5px"}
      />
    </Button>
  );
}
