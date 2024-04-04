import axios from "axios";

export const GetAllDokter = async () => {
  return await axios.get("/api/dokter").then((res) => console.log(res));
};

export const GetAllPost = async () => {
  return await axios.get("/api/post").then((res) => res.data.data);
};
