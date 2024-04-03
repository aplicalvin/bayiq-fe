import axios from "axios";
const LogOut = async () => {
  try {
    await axios.delete("/logout");
  } catch (error) {
    console.error("error saat logout : ", error);
  }
};
export default LogOut;
