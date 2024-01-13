import React from "react";
import { useState } from "react";
import useFormLogic from "../hooks/useFormLogic";
import { useEffect } from "react";

function Option({ tabla, campo, atributos }) {
  const { llenadoCmb } = useFormLogic();
  const [cmb, setCmb] = useState([]);
  useEffect(() => {
    (async () => {
      const cmbUnit = await llenadoCmb(tabla, campo, atributos);
      setCmb(cmbUnit);
    })();
  }, [tabla, campo]);

  const ujum = cmb ? (
    cmb.map((item) => {
      return (
        <option
          atr={JSON.stringify(item.atr)}
          value={item.id}
          id={`${tabla}-${item.id}-${item.campo}`}
        >
          {item.campo}
        </option>
      );
    })
  ) : (
    <></>
  );

  return ujum;
}

export default Option;
