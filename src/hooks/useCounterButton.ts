import { useState } from 'react';

export function useCounterButton() {
  const [quantity, setQuantity] = useState<number>(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  return {
    quantity,
    incrementQuantity,
    decrementQuantity,
  };
}
