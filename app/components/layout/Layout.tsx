import { Outlet } from "react-router";
import Sidebar from "../ui/Sidebar";
import Header from "../ui/Header";

export default function layout(){
  return(
    <main className=" h-screen flex">
      <div className=" w-60 bg-gray-200 ">
        <Sidebar/>
      </div>
      <div className="h-full  flex-1">
        <div className="flex flex-col h-full">
          <div className=" h-15 p-4 bg-gray-100">
          <Header/>
        </div>
        <div className=" flex-1 p-4">
          <Outlet/>
        </div>
        </div>
      </div>

    </main>
  )
}