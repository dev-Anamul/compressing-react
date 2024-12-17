import { useEffect, useState } from "react";
import { getProductData, Product } from "../utils/api";
import PostCard from "./PostCard";

const Home = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const setResData = async () => {
      const resData: Product[] = await getProductData();
      setData(resData);
    };

    setResData();
  }, []);

  const handleReadMore = () => {
    console.log("calling read more...");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {data?.map((el) => {
        return (
          <PostCard
            title={el?.title}
            image={el?.image}
            description={el?.description}
            date="September 29, 2024"
            onClick={handleReadMore}
          />
        );
      })}
    </div>
  );
};

export default Home;
