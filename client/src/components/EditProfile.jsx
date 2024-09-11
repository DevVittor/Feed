import { Button } from "./Button";

export function EditProfile() {
  return (
    <aside className="rounded-lg bg-zinc-900 flex flex-col gap-2 justify-center items-center">
      <div className="flex justify-center items-center flex-col relative">
        <div className="h-[80px] md:w-[350px] w-full">
          <img
            className="h-full w-full object-cover rounded-t-lg"
            src="https://images.pexels.com/photos/8633368/pexels-photo-8633368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="absolute right-0 left-0 h-[50px] w-full flex justify-center items-center">
          <div className="h-[55px] w-[55px] rounded-md bg-red-500">
            <img
              className="h-full w-full object-cover rounded-md shadow-md"
              src="https://images.pexels.com/photos/20447502/pexels-photo-20447502/free-photo-of-mulher-cafe-rua-via.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
        <div className="h-auto w-[350px] pt-10 flex justify-center items-center flex-col">
          <h3 className="text-white font-medium text-lg">Jéssica Gomes</h3>
          <span className="text-sm font-light text-zinc-300 ">Developer</span>
        </div>
      </div>
      <div className="flex justify-center items-center border-y border-zinc-700 w-full"></div>
      <div className="flex justify-center items-center pb-2">
        <Button className="border border-zinc-500 px-3 py-1 font-medium rounded-sm text-white">
          Editar o seu perfil
        </Button>
      </div>
    </aside>
  );
}
