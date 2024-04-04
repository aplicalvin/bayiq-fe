import axios from "axios";
const LogOut = async () => {
  try {
    const cek = await axios.delete("/api/logout");
    console.log(cek);
  } catch (error) {
    console.error("error saat logout : ", error);
  }
};
export default LogOut;
