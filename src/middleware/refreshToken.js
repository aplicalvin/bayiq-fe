import axios from "axios";
import { useUserContext } from "./LoginSlice";

const RefToken = () => {
  const { dispatch } = useUserContext();
  const refresh_token = async () => {
    const res = await axios
      .get("/api/token", { withCredentials: true })
      .then((res) => res?.data);
    dispatch({ type: "REFRESH", payload: res });
    return res.accToken;
  };
  return { refresh_token };
};

export default RefToken;
