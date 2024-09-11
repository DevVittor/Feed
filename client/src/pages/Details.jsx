import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
export default function Details() {
  return (
    <main>
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
                  Abhishek Gurjar
                </span>
                <h3 className="text-zinc-500 font-light text-sm">
                  4 de out. de 2022
                </h3>
              </div>
            </div>
            <h2 className="text-5xl font-bold text-zinc-100 leading-[64px]">
              Using TailwindCSS with Express and EJS
            </h2>
            <div className="flex items-start flex-wrap">
              <ol className="flex items-start gap-1 flex-wrap">
                {Array.from({ length: 5 }).map((_, index) => (
                  <li
                    key={index}
                    className="px-2 py-1 border border-zinc-700 rounded-sm text-zinc-100 font-medium text-sm"
                  >
                    #Skill {index}
                  </li>
                ))}
              </ol>
            </div>
            <p className="text-xl leading-8 text-zinc-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              voluptate similique enim alias quasi culpa debitis explicabo
              quidem corporis! Fuga reiciendis rerum possimus eligendi, expedita
              dolorem quas consectetur ducimus ipsam numquam qui est architecto,
              nesciunt tenetur odio praesentium perspiciatis vero recusandae
              doloremque labore quia dignissimos! Corporis molestias nihil id
              tempora enim incidunt quam, doloribus temporibus a libero eligendi
              eius, sapiente quo dignissimos. Culpa, ipsa architecto? Nobis
              ipsum quasi quidem architecto atque similique nihil obcaecati unde
              magni, veritatis aspernatur aperiam error ratione, suscipit, eum
              quia. Aperiam enim laudantium, voluptas ab, tenetur quaerat dolore
              deleniti similique molestias provident illum numquam omnis
              accusantium neque maxime cumque commodi vero inventore?
              Perspiciatis, totam assumenda nam accusamus consectetur magni
              dolores dignissimos quas, error atque at cumque! Pariatur deleniti
              deserunt blanditiis corrupti soluta voluptatem animi aperiam
              voluptatum voluptas ut voluptate praesentium iure vitae quia,
              provident, quo laudantium aliquid. Quas iure voluptates quae aut
              impedit sapiente! Vitae quo nam natus expedita. Cupiditate, minima
              in molestiae nihil molestias eveniet maiores accusantium sit. Esse
              repellat, eum dolores perferendis voluptates excepturi. Corporis,
              hic quaerat? Ipsum labore dolorum consequatur nulla, atque
              suscipit nesciunt magnam quaerat similique iste officiis error,
              libero ea voluptatibus voluptatum excepturi quisquam aspernatur.
              Nostrum labore unde odio velit, voluptates similique! Ipsam rem
              magnam voluptas incidunt aut quia numquam dolores qui error
              quibusdam id esse provident totam impedit amet, praesentium dolor
              voluptatum perspiciatis facere ea reiciendis! Et molestias labore
              aliquid fuga quae ea est cum numquam? Vel quo dignissimos fugit ea
              consectetur dicta maxime eum fuga a non tempora repellat vitae,
              itaque quidem soluta. Ea ullam quibusdam delectus iure sint sit
              neque est eveniet, hic exercitationem, quo unde, doloremque quod
              magni? Accusantium harum neque, dolor autem doloribus cumque
              dolorum officiis reiciendis suscipit incidunt accusamus, facere
              quo consequuntur. Consequuntur repellendus reiciendis modi
              doloribus commodi minima similique expedita quia ipsa deserunt
              adipisci odit facilis corrupti, minus atque quibusdam incidunt
              magnam ut dolore accusamus nemo eaque dolor illo. Earum quam
              repellendus adipisci quisquam facilis molestiae voluptatum dolorem
              consectetur alias enim pariatur rerum unde nulla perspiciatis
              sequi, magnam reprehenderit ratione deleniti? Dolorem, qui
              debitis? Voluptate ullam tenetur natus fugiat labore, officiis ex
              magni voluptatibus eius nulla officia laudantium reprehenderit
              harum sed vero nihil provident animi cum mollitia expedita
              doloremque nam fuga ipsam! Sequi soluta ratione a, at omnis
              cupiditate iusto rerum eum iure sapiente commodi, corporis odit
              eius culpa quia laudantium accusantium expedita ipsam consectetur
              nobis modi distinctio repudiandae error iste. Molestiae eveniet
              optio vero autem ad suscipit quas ipsam aliquam. Odio, aperiam?
              Perferendis ex sint minus cupiditate assumenda voluptas animi id,
              magni inventore ullam veritatis nisi distinctio ut placeat fugit
              excepturi harum quo, voluptatum porro laudantium at aspernatur.
              Odit officia quisquam molestiae vel ex, dolores maiores tempore
              laborum fugit in at, suscipit atque distinctio, veritatis
              assumenda autem? Voluptatum nobis reprehenderit rem, adipisci ipsa
              rerum sunt suscipit expedita omnis, voluptatem eum perferendis
              esse a et! Ratione deleniti at similique incidunt dolore sunt
              officiis officia, eveniet perferendis ea delectus. Quasi debitis
              accusamus aperiam, dignissimos fugit perspiciatis, modi dolores
              nulla consequatur, hic consectetur deleniti repellendus
              reiciendis!
            </p>
          </div>
          <div className="flex flex-col flex-wrap md:justify-normal justify-center md:gap-3 gap-2 md:w-auto w-full">
            <div className="md:w-[350px] w-full rounded-md shadow-sm bg-zinc-900 p-3 flex flex-col gap-2">
              <div className="">
                <h3 className="px-3 py-1 rounded-md bg-blue-500 font-medium text-lg text-zinc-100 w-full text-center">
                  R$ 350 - R$ 450
                </h3>
              </div>
              <div className="">
                <label className="flex items-center gap-1" htmlFor="">
                  <span>Author:</span>
                  <h3 className="text-zinc-100 font-medium text-sm">
                    Manuel Gomes
                  </h3>
                </label>
              </div>
              <div className="">
                <label className="flex items-center gap-1" htmlFor="">
                  <span>Level:</span>
                  <h3 className="text-zinc-100 font-medium text-sm">
                    Profissional
                  </h3>
                </label>
              </div>
              <div className="">
                <label className="flex items-center gap-1" htmlFor="">
                  <span>Term:</span>
                  <h3 className="text-zinc-100 font-medium text-sm">14 Days</h3>
                </label>
              </div>
              <div className="">
                <label className="flex items-center gap-1" htmlFor="">
                  <span>Category:</span>
                  <h3 className="text-zinc-100 font-medium text-sm">Web</h3>
                </label>
              </div>
            </div>
            <div className="md:w-[350px] w-full rounded-md shadow-sm bg-zinc-900 p-3 flex justify-between items-center flex-col md:gap-3 gap-2">
              <div className="flex w-full justify-between items-center">
                <div className="">
                  <h2 className="text-xl font-bold text-zinc-100">Proposals</h2>
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
  );
}
