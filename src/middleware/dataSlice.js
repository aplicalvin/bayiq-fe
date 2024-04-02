import axios from "axios";

export const getAllDokter = async () => {
  return await axios.get("/api/dokter").then((res) => console.log(res));
};

export const getAllPost = async () => {
  return await axios.get("/api/post").then((res) => res.data.data);
};
