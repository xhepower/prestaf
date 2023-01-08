import { useEffect, useState } from "react";

const useGetProducts = (API) => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(async () => {}, []);

  return { token, errors, isLoading };
};

export default useGetProducts;
