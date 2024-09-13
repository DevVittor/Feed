import { Helmet, HelmetProvider } from "react-helmet-async";
import { CardPost } from "../components/CardPost";
import { EditProfile } from "../components/EditProfile";
import { FaArrowTrendUp } from "react-icons/fa6";
import { ListCategory } from "../components/ListCategory";
import { SearchPost } from "../components/SearchPost";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export function Home() {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");

  console.log(search);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/v1/post/list"
      );

      console.log(response.data.list);
      setPost(response.data.list);
    };

    fetchData().catch((error) => {
      console.error(error);
    });
  }, []);

  const searchPost = async () => {
    const response = await axios.get(
      `http://localhost:3000/api/v1/post/search?search=${search}`
    );
    console.log(response.data);
    setPost(response.data.result);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Page Home" />
      </Helmet>
      <div className="min-h-screen flex justify-center items-start flex-wrap md:gap-5 gap-2 md:py-5 p-2">
        <div className="flex flex-col gap-5 md:w-[350px] w-full md:order-1 order-2">
          <EditProfile />
          <div className="md:block hidden">
            <ListCategory />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-2 md:order-2 order-1 md:w-auto w-full">
          <SearchPost searchPost={searchPost} setSearch={setSearch} />
          {post.map((item) => (
            <Link
              className="md:w-auto w-full"
              to={`/post/${item._id}`}
              key={item._id}
            >
              <CardPost
                title={item.title}
                skills={item.skills}
                details={item.details}
                min={item.price.min}
                max={item.price.max}
                level={item.level}
                category={item.category}
              />
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2 order-3 md:w-auto w-full">
          <div className="flex items-center gap-1.5 w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-1.5 w-full">
                <h3 className="text-lg font-medium text-zinc-100">
                  Relevantes
                </h3>
                <FaArrowTrendUp />
              </div>
              <select
                className="bg-black border border-zinc-700 rounded-sm outline-none px-2 py-1"
                name=""
                id=""
              >
                <option value="Post">Post</option>
                <option value="Freelancer">Freelancer</option>
              </select>
            </div>
          </div>
          {Array.from({ length: 5 }).map((_, index) => (
            <EditProfile key={index} />
          ))}
        </div>
      </div>
    </HelmetProvider>
  );
}
