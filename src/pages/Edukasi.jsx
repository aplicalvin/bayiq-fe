import Edukasi2 from "../components/Edukasi/Edukasi2";
import EdukasiHead from "../components/Edukasi/EdukasiHead";
import { useState, useEffect } from "react";
import { getAllPost } from "../middleware/dataSlice";

function Edukasi() {
  const [post, setPost] = useState([]);
  const [result, setResult] = useState({ isActive: false, data: [] });
  const fetch = async () => {
    await getAllPost().then((res) => setPost(res));
  };
  useEffect(() => {
    fetch();
  }, []);
  const handleSeacrh = (Search) => {
    const data = post.filter(
      (item) =>
        Search.some(
          (keyword) =>
            typeof item.title === "string" &&
            item.title.toLowerCase().includes(keyword.toLowerCase())
        ) ||
        Search.some((keyword) =>
          item.kategoris.some(
            (category) =>
              typeof category.name === "string" &&
              category.name.toLowerCase().includes(keyword.toLowerCase())
          )
        )
    );
    setResult({ isActive: true, data: data });
  };

  return (
    <>
      <div>
        <EdukasiHead handleSeacrh={handleSeacrh} />
        <Edukasi2 post={post} result={result} />
      </div>
    </>
  );
}

export default Edukasi;
