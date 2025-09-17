import Navitems from "./Navitems";
import { Nav } from "../../utils/Constantes";

export default function Sidebar(){
    return(
        <div className=" h-full flex flex-col">
            <div className=" h-20 shadow-2xl flex justify-center items-center ">
                <div className="bg-white rounded text-5xl font-bold ">GoUp</div>
            </div>
            <div className="flex-1 p-6">
                <div className="font-bold mb-3 text-gray-600">Gestion des ressources</div>
                <div className=" flex flex-col">
                    {Nav.map((page:NavigationProps, index)=>(
                        <Navitems key={index} pageprops={page}  />
                    ))}

                </div>
            </div>
            <div>
                3
            </div>
        </div>
    )
}