import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import { useParams } from "react-router-dom";
export default function Details() {
  const [post, setPost] = useState({});

  const { postId } = useParams();
  console.log(postId);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/v1/post/details?postId=${postId}`
      );
      console.log(response.data.result);
      setPost(response.data.result);
    };

    fetchData().catch((error) => {
      console.error(error);
    });
  }, [postId]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.details} />
      </Helmet>
      <main className="flex-grow">
        <section>
          <div className="flex justify-center items-start flex-wrap md:gap-3 gap-2 md:py-5 md:px-3 p-2">
            <div className="flex flex-col gap-2 bg-zinc-900 rounded-md shadow-sm h-auto md:w-[876px] w-full md:py-8 py-5 md:px-16 px-3">
              <div className="flex items-start gap-3">
                <img
                  className="h-[50px] w-[50px] rounded-full object-cover"
                  src="https://images.pexels.com/photos/17522554/pexels-photo-17522554/free-photo-of-homem-face-rosto-cara.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div className="flex flex-col">
                  <span className="font-medium text-zinc-100">
                    {post.author}
                  </span>
                  <h3 className="text-zinc-500 font-light text-sm">
                    {post.createdAt || "4 de out. de 2022"}
                  </h3>
                </div>
              </div>
              <h2 className="text-5xl font-bold text-zinc-100 leading-[64px]">
                {post.title}
              </h2>
              <div className="flex items-start flex-wrap">
                <ol className="flex items-start gap-1 flex-wrap">
                  <li className="px-2 py-1 border border-zinc-700 rounded-sm text-zinc-100 font-medium text-sm">
                    #{post.skills}
                  </li>
                </ol>
              </div>
              <p className="text-xl leading-8 text-zinc-300">{post.details}</p>
            </div>
            <div className="flex flex-col flex-wrap md:justify-normal justify-center md:gap-3 gap-2 md:w-auto w-full">
              <div className="md:w-[350px] w-full rounded-md shadow-sm bg-zinc-900 p-3 flex flex-col gap-2">
                <div className="">
                  <h3 className="px-3 py-1 rounded-md bg-blue-500 font-medium text-lg text-zinc-100 w-full text-center">
                    R$ {post.min || 300} - R$ {post.max || 500}
                  </h3>
                </div>
                <div className="">
                  <label className="flex items-center gap-1" htmlFor="">
                    <span>Author:</span>
                    <h3 className="text-zinc-100 font-medium text-sm">
                      {post.author}
                    </h3>
                  </label>
                </div>
                <div className="">
                  <label className="flex items-center gap-1" htmlFor="">
                    <span>Level:</span>
                    <h3 className="text-zinc-100 font-medium text-sm">any</h3>
                  </label>
                </div>
                <div className="">
                  <label className="flex items-center gap-1" htmlFor="">
                    <span>Term:</span>
                    <h3 className="text-zinc-100 font-medium text-sm">
                      14 Days
                    </h3>
                  </label>
                </div>
                <div className="">
                  <label className="flex items-center gap-1" htmlFor="">
                    <span>Category:</span>
                    <h3 className="text-zinc-100 font-medium text-sm">
                      {post.category}
                    </h3>
                  </label>
                </div>
              </div>
              <div className="md:w-[350px] w-full rounded-md shadow-sm bg-zinc-900 p-3 flex justify-between items-center flex-col md:gap-3 gap-2">
                <div className="flex w-full justify-between items-center">
                  <div className="">
                    <h2 className="text-xl font-bold text-zinc-100">
                      Proposals
                    </h2>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span
                      className="flex items-center gap-1 text-zinc-100 font-medium text-sm hover:cursor-pointer"
                      title="Menor Valor"
                    >
                      <FaArrowDownLong className="text-red-500" />
                      R$ 100
                    </span>
                    <span>-</span>
                    <span
                      className="flex items-center gap-1 text-zinc-100 font-medium text-sm hover:cursor-pointer"
                      title="Maior Valor"
                    >
                      R$ 150
                      <FaArrowUpLong className="text-green-500" />
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div
                      key={index}
                      className="w-full h-[70px] bg-white rounded-md"
                    ></div>
                  ))}
                </div>
                <div className="w-full">
                  <button className="bg-zinc-700 text-zinc-100 font-medium text-lg w-full px-3 py-1 rounded-md">
                    132 | See All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </HelmetProvider>
  );
}
