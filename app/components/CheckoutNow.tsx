"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./AddToBag";

export default function CheckoutNow({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();
  const [checkoutMessage, setCheckoutMessage] = useState<string | null>(null);

  async function buyNow(priceId: string) {
    try {
      const result = await checkoutSingleItem(priceId);
      if (result?.error) {
        setCheckoutMessage(
          "Stripe is currently closed. Please try again later."
        );
      }
    } catch (error) {
      setCheckoutMessage("Stripe is currently closed. Please try again later.");
      console.log(error);
    }
  }

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };

  return (
    <div>
      <Button
        className="bg-green-600 hover:bg-green-700 text-white"
        onClick={() => {
          buyNow(product.price_id);
        }}
      >
        Checkout Now
      </Button>
      {checkoutMessage && (
        <p className="mt-2 text-sm text-red-500 text-center">
          {checkoutMessage}
        </p>
      )}
    </div>
  );
}
