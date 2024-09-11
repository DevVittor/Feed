import { Helmet, HelmetProvider } from "react-helmet-async";
import { CardPost } from "../components/CardPost";
import { EditProfile } from "../components/EditProfile";
import { FaArrowTrendUp } from "react-icons/fa6";
import { ListCategory } from "../components/ListCategory";
import { SearchPost } from "../components/SearchPost";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Page Home" />
      </Helmet>
      <div className="min-h-screen flex justify-center items-start flex-wrap gap-5 md:py-5 p-2">
        <div className="flex flex-col gap-5 md:w-[350px] w-full md:order-1 order-2">
          <EditProfile />
          <div className="md:block hidden">
            <ListCategory />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-2 md:order-2 order-1 md:w-auto w-full">
          <SearchPost />
          {Array.from({ length: 40 }).map((_, index) => (
            <Link to={`/post/${index}`} key={index}>
              <CardPost
                title="Preciso de um Ecommerce de Roupas feito com Wordpress"
                skills={["Developer", "Ux/Ui", "Photoshop", "SEO", "Mobile"]}
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa similique iste ipsum recusandae sequi ea, molestias non ducimus in necessitatibus obcaecati doloribus quasi praesentium aliquam omnis quae minus facilis dignissimos, aperiam nulla, vitae autem blanditiis. Dolorem, inventore dolore commodi facere aliquam consectetur soluta, vel nam voluptas maxime asperiores nesciunt maiores!"
                photo="https://images.pexels.com/photos/19278092/pexels-photo-19278092/free-photo-of-neve-panorama-vista-paisagem.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
