import { useState } from "react";
import { Form, useNavigate } from "react-router";
import Accordion from "~/components/ui/Accordion";
import { Plus, Search, UserRoundPlus, Cog  } from "lucide-react";
import Accordionregion from "~/components/ui/Accordionregion";


export default function configuration() {

  const [isOpen, setIsOpen] = useState(false); // état ouvert/fermé
const navigate = useNavigate();

  return (
    <div className="p-6  ">
      <div className="">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Configuration du Systeme</h1>
          <p className="text-sm text-gray-600 mt-2">
            Gérez les régions et les organisations.
          </p>
        </div>
        <div className="flex justify-between">
          <div className="font-bold text-xl mb-6">Regions</div>
          <div className="flex gap-4 border-gray-200 mb-4">
            
          </div>
        </div>
        <div>
          <Form method="post" onSubmit={() => close()} className=" space-y-5">
            {/* Nom complet */}

            {/* Pays */}

            {/* Rôles */}
             <div >
              <button onClick={() => navigate("/master/regions/configuration/new")} type="button" className=" bg-black text-white py-2 px-6 rounded cursor-pointer" >
                {" "}
                <div className="flex ">
                  <div>
                    <Plus  className="" />
                  </div>{" "}
                  <div> Ajouter une région</div>
                </div>{" "}
              </button>
            </div>

            {/* <div>
            
             <div className="  h-35 overflow-y-auto">
                <DroitsCheckbox/>
              </div>
            </div> */}

            <div className="bg-gray-100  rounded-xl shadow ">
                          <Accordionregion  title="Ile-de-France" soustitle="Liste des Organisation de l'Ile de France" organisationone="France" organisationtwo="London" url="/master/regions/configuration/neworg"/>
                          
                          <Accordionregion title="West-Africa" soustitle="Liste des Organisation de West-Africa" organisationone="Sengal" organisationtwo="Mali" url="/master/regions/configuration/neworg"/>
                          
                          
              

              
            </div>

            {/* Boutons */}
             <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={() => navigate("/master/regions")}
                className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
              >
                Annuler
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
                onClick={() => navigate("/master/regions")}
              >
                Enregistrer
              </button>
            </div> 
          </Form>
        </div>
      </div>
    </div>
  );
}
