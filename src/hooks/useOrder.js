import { useState, useEffect } from "react";
function useOrder() {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);
  useEffect(() => {
    calcularTotal();
  }, []);

  const calcularTotal = () => {
    let eltotal = 0;
    items.map((item) => {
      eltotal = eltotal + item.price * item.quantity;
    });

    setTotal(eltotal);
  };
  return {
    total,
    setTotal,
    items,
    setItems,
    calcularTotal,
  };
}
export { useOrder };
