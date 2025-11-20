import { useState } from "react";
import { useNavigate } from "react-router";
import { Form } from "react-router";
import Accordion from "~/components/ui/Accordion";


export default function Home() {

  const [isOpen, setIsOpen] = useState(false); // état ouvert/fermé
  const navigate = useNavigate();

  return (
    <div className="p-6  ">
      <div className="">
        <div className=" ">
            <div className="mb-4">
          <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        ⬅ Retour a Configuration
      </button>
        </div>
          <div className="font-bold text-xl ">Ajout d'une organisation</div>
          <p className="text-sm text-gray-600 mt-2">
            Enregistrer une nouvelle organisation dans le systéme GOUP.
          </p>
          <div className="flex gap-4 border-gray-200 mb-4">
            
          </div>
        </div>
        <div>
          <Form method="post" onSubmit={() => close()} className=" space-y-5">
            {/* Nom complet */}

            {/* Pays */}

            {/* Rôles */}
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="mb-7">
                <div className="font-bold text-xl">Informations générales de l'organisation</div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Rensignez les details d'identification de l'organisation    </div>
              </div>
              <div className=" flex gap-5">
                {/*  <div className="  h-35 overflow-y-auto">
                <RolesCheckbox/>
              </div>*/}

                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom de l'organisation 
                  </label>
                  <input
                    type="text"
                    name="nom"
                    placeholder="Saisir le nom"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description de l'organisation
                  </label>
                  <textarea
                    name="description"
                    placeholder="Saisir une description de la région"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <div className="mb-7">
                <div className="font-bold text-xl">Sélection du pays</div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                 Choisir le pays ou se trouve l'organisation </div>
              </div>

              <div>

<div className="flex justify-between bg-gray-200 rounded hover:bg-gray-300 p-3 mb-3">
                   <div className="font-bold">Mali </div>
                      <input type="checkbox" checked
                      />
                      
                    </div>

                <div className="flex justify-between rounded hover:bg-gray-300 p-3 mb-3">
                   <div className="">Sénegal</div>
                      <input type="checkbox" 
                      />
                      
                    </div>

                  

                <div className="flex justify-between  rounded hover:bg-gray-300 p-3 mb-3">
                   <div className="">Maroc</div>
                      <input type="checkbox" 
                      />
                      
                    </div>
              </div>
              
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <div className="mb-7">
                <div className="font-bold text-xl">Sélection de la langue</div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                 Choisir la langue principal de l'organisation </div>
              </div>

              <div>

<div className="flex justify-between bg-gray-200 rounded hover:bg-gray-300 p-3 mb-3">
                   <div className="font-bold">Espagnol </div>
                      <input type="checkbox" checked
                      />
                      
                    </div>

                <div className="flex justify-between rounded hover:bg-gray-300 p-3 mb-3">
                   <div className="">Francais</div>
                      <input type="checkbox" 
                      />
                      
                    </div>

                  

                <div className="flex justify-between  rounded hover:bg-gray-300 p-3 mb-3">
                   <div className="">Anglais</div>
                      <input type="checkbox" 
                      />
                      
                    </div>
              </div>
              
            </div>
           
 <div className="bg-white p-6 rounded-xl shadow w-155">
              <div className="mb-7">
                <div className="font-bold text-xl">Coordonnées du responsable</div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Indiquez le contact principal du responsable de l'organisation
                </div>
              </div>
              <div className=" flex gap-5">
                {/*  <div className="  h-35 overflow-y-auto">
                <RolesCheckbox/>
              </div>*/}

                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                   Email du responsable
                  </label>
                  <input
                    type="text"
                    name="nom"
                    placeholder="exemple@domaine.com"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>
                
              </div>
            </div>
            {/* <div>

            
            
             <div className="  h-35 overflow-y-auto">
                <DroitsCheckbox/>
              </div>
            </div> */}

            
            {/* Boutons */}
             <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={() => close()}
                className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
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
