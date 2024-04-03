import axios from "axios";
import useAxiosPriv from "./axiosPriv";

export const GetAllDokter = async () => {
  return await axios.get("/api/dokter").then((res) => console.log(res));
};

export const GetAllPost = async () => {
  return await axios.get("/api/post").then((res) => res.data.data);
};
