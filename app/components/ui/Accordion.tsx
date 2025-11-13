import { useState } from "react";


type Rights = {
  lectureSeule: boolean;
  lectureEcriture: boolean;
};

type RightKey = keyof Rights;

export default function Accordion({ title }: {title:string}){
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

  

    return(
        <div>
                <div>
                <div>
                <div
                  className=" bg-gray-100 p-6 rounded-xl shadow cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div className=" flex justify-between">
                    <div>
                      <div className="font-bold">{title} </div>
                      <div className="block text-sm font-medium text-gray-700 ">
                        Paramètre d'autorisation pour le {title}{" "}
                      </div>
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
                <div >
                  <div>
                    <div className="flex p-6 gap-3">
                      <div className=" font-medium text-gray-700 ">
                        {title}
                      </div>
                      <div className=" flex items-center">
                        <hr className="text-gray-300 w-240" />
                      </div>
                      <div className="flex gap-2">
                        <input type="checkbox"
                        checked={selectAll}
              onChange={handleSelectAll} />
                        <div className="font-bold"> Select all</div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                  <div className="px-6 flex gap-5 pb-5">
                    <div className="flex gap-3">
                      <input type="checkbox"
                      checked={rights.lectureSeule}
                      onChange={() => handleRightChange("lectureSeule")}
               />
                      <div className="font-bold">Lecture seule</div>
                    </div>

                    <div className="flex gap-3">
                      <input type="checkbox"
                      checked={rights.lectureEcriture} 
                      onChange={() => handleRightChange("lectureEcriture")}/>
                      
                      <div className="font-bold">Lecture, Ecriture</div>
                    </div>
                  </div>
                </div>
                 )}
              </div>

              
              </div>
        </div>
    )
}