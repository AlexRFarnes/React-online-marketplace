import React from "react";
import { Divider, Segment, Button } from "semantic-ui-react";
import calculateCartTotal from "../../utils/calculateCartTotal";
import StripeCheckout from "react-stripe-checkout";

function CartSummary({ products, handleCheckout, success }) {
  const [isCartEmpty, setCartEmpty] = React.useState(false);
  const [cartAmmount, setCartAmount] = React.useState(0);
  const [stripeAmount, setStripeAmount] = React.useState(0);

  React.useEffect(() => {
    const { cartTotal, stripeTotal } = calculateCartTotal(products);
    setCartAmount(cartTotal);
    setStripeAmount(stripeTotal);
    setCartEmpty(products.length === 0);
  }, [products]);

  return (
    <>
      <Divider />
      <Segment clearing size='large'>
        <strong>Sub total:</strong> ${cartAmmount}
        <StripeCheckout
          name='React Online Market'
          amount={stripeAmount}
          image={products.length > 0 ? products[0].product.mediaUrl : ""}
          currency='USD'
          shippingAddress={true}
          billingAddress={true}
          zipCode={true}
          token={handleCheckout}
          allowRememberMe={true}
          stripeKey='pk_test_51JUNtOJOzGO6wB7hKskVNIp4TCDr70TLYrGpEypq8m3TdgAYacxziKuuRXO69A8fwd5qwJrbUbIDR1CTRVghqkjA00Ofmpz3eY'
          triggerEvent='onClick'>
          <Button
            disabled={isCartEmpty || success}
            icon='cart'
            color='teal'
            floated='right'
            content='Checkout'
          />
        </StripeCheckout>
      </Segment>
    </>
  );
}

export default CartSummary;
