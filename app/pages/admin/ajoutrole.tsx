import { useState } from "react";
import { Form } from "react-router";
import Accordion from "~/components/ui/Accordion";


export default function Home() {

  const [isOpen, setIsOpen] = useState(false); // état ouvert/fermé

  return (
    <div className="p-6  ">
      <div className="">
        <div className="flex justify-between">
          <div className="font-bold text-xl mb-6">Ajouter un role</div>
          <div className="flex gap-4 border-gray-200 mb-4">
            <button
              type="button"
              onClick={() => close()}
              className="px-4 border rounded-lg text-gray-600 hover:bg-gray-100"
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
        </div>
        <div>
          <Form method="post" onSubmit={() => close()} className=" space-y-5">
            {/* Nom complet */}

            {/* Pays */}

            {/* Rôles */}
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="mb-7">
                <div className="font-bold text-xl">Details</div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Remplissez les informations concernant le rôle de
                  l’utilisateur. Le nom doit être unique et la description peut
                  contenir des informations supplémentaires sur les permissions
                  ou responsabilités.
                </div>
              </div>
              <div className=" flex gap-5">
                {/*  <div className="  h-35 overflow-y-auto">
                <RolesCheckbox/>
              </div>*/}

                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom du Role
                  </label>
                  <input
                    type="text"
                    name="nom"
                    placeholder="Ex: Secretaire"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description du role
                  </label>
                  <textarea
                    name="description"
                    placeholder=""
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

            <div className="bg-white  rounded-xl shadow">
              
                          <Accordion title="Dashboard" />
                          <Accordion title="Personnel" />
                          <Accordion title="Notification" />
                          <Accordion title="Facturation" />
              

              
            </div>

            {/* Boutons */}
            {/* <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
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
            </div> */}
          </Form>
        </div>
      </div>
    </div>
  );
}
