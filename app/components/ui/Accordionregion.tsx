import { Plus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";


type Rights = {
  lectureSeule: boolean;
  lectureEcriture: boolean;
};

type RightKey = keyof Rights;

export default function Accordion({ title, soustitle, organisationone, organisationtwo, url }: {title:string, soustitle?:string, organisationone?:string, organisationtwo?:string, url:string}){
   const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [rights, setRights] = useState<Rights>({
    lectureSeule: false,
    lectureEcriture: false,
  });

// Fonction quand on clique sur "Select all"
  const handleSelectAll = () => {
    const newValue = !selectAll;
    setSelectAll(newValue);
    setRights({
      lectureSeule: newValue,
      lectureEcriture: newValue,
    });
  };

  // Fonction quand on clique sur un droit individuel
  const handleRightChange = (key:RightKey) => {
    const newRights = { ...rights, [key]: !rights[key] };
    setRights(newRights);

    // Si tous les droits sont cochés, selectAll = true, sinon false
    const allSelected = Object.values(newRights).every((v) => v);
    setSelectAll(allSelected);
  };

  const navigate = useNavigate();


    return(
        <div className="mb-2">
                <div>
                <div className="">
                <div
                  className=" bg-white p-6 rounded-xl shadow cursor-pointer mb-2"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div className=" flex justify-between">
                    <div>
                      <div className="font-bold text-gray-600">{title} </div>
                      
                    </div>
                    <div className="flex items-center">
                      <svg
                        data-accordion-icon
                        className={`w-3 h-3 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {isOpen && (
                <div className="bg-gray-100 pb-2 border-l-3 border-solid border-gray-400">
                  <div >
                    <div className="flex p-4 gap-3">
                      <div className=" font-bold text-lg ">
                        {soustitle}
                      </div>
                      
                    </div>
                  </div>
                  
                  
                    <div className="px-4">
                      
                      <div className=" bg-white py-3 px-6 rounded-xl shadow cursor-pointer font-bold text-gray-600 mb-4">{organisationone}</div>
                    <div className=" bg-white py-3 px-6 rounded-xl shadow cursor-pointer font-bold text-gray-600 mb-4">{organisationtwo}</div>
                    
                    </div>
                     <div className="px-5">
                      <button onClick={() => navigate(url)} className=" bg-gray-300 text-gray-800 py-2 px-6 rounded cursor-pointer" type="button">
                {" "}
                <div className="flex cursor-pointer  ">
                  <div>
                    <Plus  className="" />
                  </div>{" "}
                  <div> Ajouter une organisation</div>
                </div>{" "}
              </button>
                     </div>

                    
                  </div>
                
                 )}
              </div>

              
              </div>
        </div>
    )
}