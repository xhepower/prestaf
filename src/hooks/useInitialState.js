import { useState } from "react";

const initialState = {
  activeUser: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const setActiveUser = (user) => {
    setState({
      ...state,
      activeUser: [user],
    });
  };

  return {
    state,
    setActiveUser,
  };
};

export default useInitialState;
