import { useLoaderData, Await, redirect, NavLink, useNavigate } from "react-router";

import { ErrorBoundary } from "../ui/error-boundary";

import type { UserRole } from "../../types/navigation";
import { Plus, Search, UserRoundPlus } from "lucide-react";
import { Form } from "react-router";
import { useRef } from "react";
import type { Route } from "../../+types/root";
import RolesCheckbox from "../ui/RolesCheckbox";


interface DashboardLayoutProps {
  title: string;
  role: UserRole;
}




export function Utilisateurlayout({ title, role }: DashboardLayoutProps) {
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
            Bienvenue dans la zones des utilisateurs
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
                placeholder="Rechercher un pay..."
                className="  rounded-r-sm px-2  bg-white outline-gray-400"
              />
            </div>

            
             <div className=" bg-black text-white px-2  flex items-center rounded cursor-pointer">
               
              
                <button onClick={ouvrirModal} > <div className="flex cursor-pointer "><div><Plus className="" /></div>  <div> Ajouter un membre</div></div> </button>
                
              
             </div>
            
          </div>
        </div>

        <div>
          
             <table className="  rounded-lg overflow-hidden  min-w-full ">
  <thead className=" bg-gray-200 font-bold">
    
      <tr className="border border-gray-300 ">
      <th className=" px-4 py-2 text-left"></th>
      <th className=" px-4 py-2 text-left ">Nom</th>
      <th className=" px-4 py-2 text-left">Pays</th>
      <th className=" px-4 py-2 text-left w-20 ">Role</th>
      <th className=" px-4 py-2 text-left">Status</th>
    </tr>
    
    
  </thead>
  <tbody>
    <tr className="bg-white hover:bg-gray-50 cursor-pointer border border-gray-200 text-gray-600"
      > 
      <td className=" px-4 py-2 text-black font-bold">1</td>
     <td className=" px-4 py-2"> Yacine Mbaye </td>
      <td className=" px-4 py-2">  Senegal</td>
      <td className=" px-4 py-1 line-clamp-1"> Secretaire  SecretaireSecretaire </td>
      <td className=" px-4 py-2 "> <div className="bg-green-600 text-white w-13 rounded-2xl px-2">actif </div></td>
    </tr>
    <tr className="bg-white hover:bg-gray-50 cursor-pointer border border-gray-300 text-gray-600 "
    
    >
      <td className=" px-4 py-2 text-black font-bold">2</td>
      <td className=" px-4 py-2">Modou Coly</td>
      <td className=" px-4 py-2">France</td>
      <td className=" px-4 py-1 line-clamp-1">Chauffeur  SecretaireSecretaire</td>
      <td className=" px-4 py-2  "><div className="bg-red-600 text-white w-15 rounded-2xl px-2">inactif </div></td>
    </tr>
  </tbody>
</table>

            </div>

  <dialog ref={modalRef}  id="" className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-black/50 ">
  <div className="  flex justify-center items-center h-screen">
    <div className="bg-white rounded-2xl shadow-2xl w-[500px] max-w-full">
    {/* Header */}
    <div className="bg-gray-100 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
      <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
        <Plus /> Ajouter un membre
      </h3>
      <button
        type="button"
        onClick={() => modalRef.current?.close()}
        className="text-gray-500 hover:text-gray-800"
      >
        ✕
      </button>
    </div>

    {/* Formulaire */}
    <Form
      method="post"
      onSubmit={() => modalRef.current?.close()}
      className="p-6 space-y-5"
    >
      {/* Nom complet */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nom complet
        </label>
        <input
          type="text"
          name="nom"
          placeholder="Ex : Yacine Mbaye"
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
        />
      </div>

      {/* Pays */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Pays
        </label>
        <input
          type="text"
          name="pays"
          placeholder="Ex : Sénégal"
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
        />
        <img src="" alt="" />
      </div>
      

      {/* Rôles */}
      <div>
      
        <div className="  h-35 overflow-y-auto">
          <RolesCheckbox/>
        </div>
      </div>

      {/* État */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          État
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-gray-700">
            <input type="radio" name="etat" value="Actif" />
            Actif
          </label>
          <label className="flex items-center gap-2 text-gray-700">
            <input type="radio" name="etat" value="Inactif" defaultChecked />
            Inactif
          </label>
        </div>
      </div>

      {/* Boutons */}
      <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={() => modalRef.current?.close()}
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
</dialog>


          </div>
        
    </ErrorBoundary>
  );
}
