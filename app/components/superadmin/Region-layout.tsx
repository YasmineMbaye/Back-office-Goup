import {
  useLoaderData,
  Await,
  redirect,
  NavLink,
  useNavigate,
} from "react-router";

import { ErrorBoundary } from "../ui/error-boundary";

import type { UserRole } from "../../types/navigation";
import { Plus, Search, UserRoundPlus } from "lucide-react";
import { Form } from "react-router";
import { useRef } from "react";
import type { Route } from "../../+types/root";

interface DashboardLayoutProps {
  title: string;
  role: UserRole;
}

export function RegionLayout({ title, role }: DashboardLayoutProps) {
  const { user, dashboardData } = useLoaderData<any>();

  // On crée une référence mutable pour garder une "pointeuse" vers l'élément <dialog>
  // Le type HTMLDialogElement indique que cette ref pointera vers un élément <dialog>
  const modalRef = useRef<HTMLDialogElement>(null);

  // Fonction pour ouvrir le modal
  const ouvrirModal = () => {
    // On vérifie si la référence à l'élément <dialog> est bien définie (pas null)
    if (modalRef.current) {
      // Si oui, on appelle la méthode native showModal() pour afficher la boîte de dialogue
      modalRef.current.showModal();
    }
  };

  const navigate = useNavigate();

  return (
    <ErrorBoundary>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="text-lg text-gray-600 mt-2">
            Bienvenue dans la gestion des régions
          </p>
        </div>

        <div className=" ">
          <div className="flex justify-between ">
            <div className=" flex border border-gray-200 rounded">
              <div className=" p-2 rounded-l-sm bg-white">
                <Search className="" />
              </div>
              <input
                type="text"
                placeholder="Rechercher une organisation..."
                className="  rounded-r-sm px-2  bg-white outline-gray-400"
              />
            </div>

            <div className=" bg-black text-white px-2  flex items-center rounded cursor-pointer">
              <button onClick={ouvrirModal}>
                {" "}
                <div className="flex cursor-pointer ">
                  <div>
                    <Plus className="" />
                  </div>{" "}
                  <div> Ajouter organisation</div>
                </div>{" "}
              </button>
            </div>
          </div>
        </div>

        <div>
          <table className="  rounded-lg overflow-hidden  min-w-full ">
            <thead className=" bg-gray-200 font-bold">
              <tr className="border border-gray-300 ">
                <th className=" px-4 py-2 text-left"></th>
                <th className=" px-4 py-2 text-left ">Organisation</th>
                <th className=" px-4 py-2 text-left">Pays</th>
                <th className=" px-4 py-2 text-left">Status</th>
                
              </tr>
            </thead>
            <tbody>
              <tr
                className="bg-white hover:bg-gray-50 cursor-pointer border border-gray-200 text-gray-600"
                onClick={() => navigate("/master/regions/sn")}
              >
                <td className=" px-4 py-2 text-black font-bold">1</td>
                <td className=" px-4 py-2"> Go-up-Sn </td>
                <td className=" px-4 py-2"> Senegal</td>
                <td className=" px-4 py-2  "><div className="bg-green-500 text-white w-14 rounded-2xl px-2">Actif </div></td>
       
                
              </tr>
              <tr
                className="bg-white hover:bg-gray-50 cursor-pointer border border-gray-300 text-gray-600 "
                onClick={() => navigate("/master/regions/ml")}
              >
                <td className=" px-4 py-2 text-black font-bold">2</td>
                <td className=" px-4 py-2">Go-up-Mali</td>
                <td className=" px-4 py-2">Mali</td>
                <td className=" px-4 py-2  "><div className="bg-red-600 text-white w-17 rounded-2xl px-2">Inactif </div></td>
            
                
              </tr>
            </tbody>
          </table>
        </div>

        <dialog
          ref={modalRef}
          id=""
          className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent    "
        >
          <div className="  flex justify-center items-center h-screen">
            <div className="bg-white w-120  shadow-2xl">
              <div className="bg-gray-200 p-3">
                <h3 className="flex items-center gap-2 px-4 py-2 font-bold text-lg text-center">
                  <Plus /> Ajouter une organisation
                </h3>
              </div>

              <Form method="post" onSubmit={() => modalRef.current?.close()}>
                <div className=" mt-5 ">
                  <fieldset className="fieldset ">
                    <div className="flex gap-39 px-4 mb-4 mt-4">
                      <div className=" ">Pays</div>
                      <div>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Ex:Senegal"
                          className=" px-3 py-1 rounded border border-gray-400 outline-gray-500"
                        />
                      </div>
                    </div>
                    <div className="border border-t-0 border-r-0 border-l-0 border-b-gray-200"></div>

                  
                    <div className="border border-t-0 border-r-0 border-l-0 border-b-gray-200"></div>

                    <div className="flex gap-24 px-4 mb-4 mt-4">
                      <div className=" ">Email Responsable</div>
                      <div>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Identification"
                          className=" px-3 py-1 rounded border border-gray-400 outline-gray-500"
                        />
                      </div>
                    </div>
                    
                    <div className="border border-t-0 border-r-0 border-l-0 border-b-gray-200"></div>

                    <div className="mt-5 flex justify-end px-6">
                      <div className="flex gap-5 mb-5 ">
                        <button className=" py-2 px-3 rounded border border-gray-300">
                          Annuler
                        </button>
                        <button
                          type="submit"
                          className="py-2 px-3 bg-black text-white rounded"
                        >
                          Enregistrer
                        </button>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </Form>
            </div>
          </div>
        </dialog>
      </div>
    </ErrorBoundary>
  );
}
