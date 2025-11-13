import type { UserRole } from "~/types/navigation";
import { ErrorBoundary } from "../ui/error-boundary";
import { Plus, Search, SquarePen, Trash2 } from "lucide-react";
import { Form, useNavigate } from "react-router";
import { useRef, useState } from "react";
import RolesCheckbox from "../ui/RolesCheckbox";
import DroitsCheckbox from "../ui/Droitcheckbox";
import { Eye } from 'lucide-react';

interface DashboardLayoutProps {
  title: string;
  role: UserRole;
}

type Role = {
  id: number;
  nom: string;
  description:string;
  droits?: string
    
};




export default function RoledroitLayout({ title, role }: DashboardLayoutProps){

  const [nomrole, setnomrole] = useState('')
  const [description, setdescription] = useState('');
  const [searchTerm, setSearchTerm] = useState<string>("");


function handlenomroleChange(e:any) {
    setnomrole(e.target.value);
  }

  function handledescriptionChange(e:any) {
    setdescription(e.target.value);
  }
  
  const [selectedRole, setSelectedRole] = useState <Role | null> (null);
  const [showModal, setShowModal] = useState(false);

  const modules = ["Dashboard", "Personnel", "Facturation", "Notification", "Analytics Region"];

  const roles = [
    {
      id: 1,
      tags: ["#6366F1"],
      roleName: "Comptable",
      description: "Gère les comptes et les transactions financières.",
      droits: 4,
      users: 3,
    },
    {
      id: 2,
      tags:["#F59E0B"],
      roleName: "Ressources Humaines",
      description: "Supervise le recrutement et la gestion du personnel.",
      droits: 2,
      users: 5,
    },
  ];

  // Fonction appelée quand on clique sur "Voir détails"
  const handleView = (role:Role) => {
    setSelectedRole(role);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedRole(null);
  };

  

const modalRef = useRef<HTMLDialogElement>(null);
const modalRefSup = useRef<HTMLDialogElement>(null);
const modalmodifRef = useRef<HTMLDialogElement>(null);


  // Fonction pour ouvrir le modal
const ouvrirModal = () => {
   
  // On vérifie si la référence à l'élément <dialog> est bien définie (pas null)
  if (modalRef.current) {
    // Si oui, on appelle la méthode native showModal() pour afficher la boîte de dialogue
    modalRef.current.showModal();
  }
};

const ouvrirModalsuppression = () => {
   
  // On vérifie si la référence à l'élément <dialog> est bien définie (pas null)
  if (modalRefSup.current) {
    // Si oui, on appelle la méthode native showModal() pour afficher la boîte de dialogue
    modalRefSup.current.showModal();
  }
};

const ouvrirmodifModal = () => {
   
  // On vérifie si la référence à l'élément <dialog> est bien définie (pas null)
  if (modalmodifRef.current) {
    // Si oui, on appelle la méthode native showModal() pour afficher la boîte de dialogue
    modalmodifRef.current.showModal();
  }
};

const navigate = useNavigate();

const filteredRoles = roles.filter((role) =>
  role.roleName.toLowerCase().includes(searchTerm.toLowerCase()) ||
  role.description.toLowerCase().includes(searchTerm.toLowerCase())
);



    return(
      <ErrorBoundary>
            <div className="p-6 space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                <p className="text-lg text-gray-600 mt-2">
                  Gestion des droits et roles
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
                      placeholder="Rechercher un role"
                      className="  rounded-r-sm px-2  bg-white outline-gray-400"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
      
                  
                   <div className=" bg-black text-white px-2  flex items-center rounded cursor-pointer">
                     
                    
                      <button onClick={() => navigate("/admin/roles/ajoutrole")} > <div className="flex cursor-pointer "><div><Plus className="" /></div>  <div> Ajouter un role</div></div> </button>
                      
                    
                   </div>
                  
                </div>
              </div>
      
              <div>
                
                   
    <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white">
      <table className="min-w-full">
        <thead className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wider">
          <tr>
            <th className="px-6 py-4 text-left font-semibold">Tags</th>
            <th className="px-6 py-4 text-left font-semibold">Role name</th>
            <th className="px-6 py-4 text-left font-semibold w-50">Description</th>
            <th className="px-6 py-4 text-center font-semibold">Droits</th>
            <th className="px-6 py-4 text-center font-semibold">Users</th>
          </tr>
        </thead>

        <tbody className="text-gray-700">
          {filteredRoles.map((role, index) => (
            <tr
              key={role.id}
              className={`hover:bg-gray-50 transition ${
                index !== roles.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              {/* Tags sous forme de points colorés */}
              <td className="px-6 py-5">
                <div className="flex items-center gap-2">
                  {role.tags.map((color, i) => (
                    <span
                      key={i}
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
              </td>

              <td className="px-6 py-1 font-semibold text-gray-800">
                {role.roleName}
              </td>
              <td className="px-6 py-1 text-gray-600 line-clamp-1">{role.description}</td>

              <td className="px-6 py-1 text-center font-semibold text-indigo-700">
                {role.droits}
              </td>

              <td className="px-6 py-1 text-center font-semibold text-gray-700">
                {role.users}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      

      
      
                  </div>





      
        <dialog ref={modalRef}  id="" className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-black/50 ">
        <div className="  flex justify-center items-center h-screen">
          <div className="bg-white rounded-2xl shadow-2xl w-[600px] max-w-full">
          {/* Header */}
          <div className="bg-gray-100 px-6 py-4 border-b border-gray-200 flex items-center justify-between rounded-2xl">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <Plus /> Ajouter un role
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
            
                        {/* Pays */}
            
            
      
            {/* Rôles */}
            <div>
            
            {/*  <div className="  h-35 overflow-y-auto">
                <RolesCheckbox/>
              </div>*/}

               <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom du Role
              </label>
              <input
                type="text"
                name="nom"
                placeholder="Ex: Secretaire"
                
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
              />
              
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description du role
              </label>
              <input
                type="text"
                name="description"
                placeholder=""
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
              />
              
            </div>

           {/* <div>
            
             <div className="  h-35 overflow-y-auto">
                <DroitsCheckbox/>
              </div>
            </div> */}

            <div className="  h-35 overflow-y-auto">
               <table className="  rounded-lg overflow-hidden  min-w-full ">
        <thead className=" font-bold">
          
            <tr className="border border-gray-300 ">
            
            <th className=" px-4 py-2 text-left "></th>
            <th className=" px-4 py-2 text-left">Lecture</th>
            <th className=" px-4 py-2 text-left w-40 ">Ecriture</th>
            
          </tr>
          
          
        </thead>
        <tbody>
          <tr className="bg-white hover:bg-gray-50 cursor-pointer border border-gray-200 text-gray-600"
            > 
            
           <td className=" px-4 py-2 font-bold text-black" > Dashboard </td>
            <td className=" px-4 py-2">  <input type="checkbox" name="Dashboard" value={"lecture"} /></td>
            <td className=" px-4 py-2">  <input type="checkbox" name="Dashboard" value={"Ecriture"}  /></td>
               </tr>
          <tr className="bg-white hover:bg-gray-50 cursor-pointer border border-gray-300 text-gray-600 "
          
          >
           
            <td className=" px-4 py-2 text-black font-bold">Personnel</td>
            <td className=" px-4 py-2">  <input type="checkbox" name="Personnel" value={"lecture"}  /></td>
            <td className=" px-4 py-2">  <input type="checkbox" name="Personnel" value={"Ecriture"}  /></td>
              </tr>

              <tr className="bg-white hover:bg-gray-50 cursor-pointer border border-gray-200 text-gray-600"
            > 
            
           <td className=" px-4 py-2 font-bold text-black" > Roles Droit </td>
            <td className=" px-4 py-2">  <input type="checkbox" name="Roles droit" value={"lecture"}  /></td>
            <td className=" px-4 py-2">  <input type="checkbox" name="Role  droit" value={"Ecritire"}  /></td>
               </tr>
          <tr className="bg-white hover:bg-gray-50 cursor-pointer border border-gray-300 text-gray-600 "
          
          ></tr>

          <tr className="bg-white hover:bg-gray-50 cursor-pointer border border-gray-200 text-gray-600"
            > 
            
           <td className=" px-4 py-2 font-bold text-black" > Chauffeur </td>
            <td className=" px-4 py-2 ">  <input type="checkbox" name="droits"  /></td>
            <td className=" px-4 py-2">  <input type="checkbox" name="droits"  /></td>
               </tr>
          <tr className="bg-white hover:bg-gray-50 cursor-pointer border border-gray-300 text-gray-600 "
          
          ></tr>
                        <tr className="bg-white hover:bg-gray-50 cursor-pointer border border-gray-200 text-gray-600"
            > 
            
           <td className=" px-4 py-2 font-bold text-black" > Facturation </td>
            <td className=" px-4 py-2">  <input type="checkbox" name="droits"  /></td>
            <td className=" px-4 py-2">  <input type="checkbox" name="droits"  /></td>
               </tr>

                             <tr className="bg-white hover:bg-gray-50 cursor-pointer border border-gray-200 text-gray-600"
            > 
            
           <td className=" px-4 py-2 font-bold text-black" > Notification </td>
            <td className=" px-4 py-2">  <input type="checkbox" name="droits"  /></td>
            <td className=" px-4 py-2">  <input type="checkbox" name="droits"  /></td>
               </tr>

                             <tr className="bg-white hover:bg-gray-50 cursor-pointer border border-gray-200 text-gray-600"
            > 
            
           <td className=" px-4 py-2 font-bold text-black" > Analytics Region </td>
            <td className=" px-4 py-2">  <input type="checkbox" name="droits"  /></td>
            <td className=" px-4 py-2">  <input type="checkbox" name="droits"  /></td>
               </tr>

           
        </tbody>
      </table>
            </div>
            
      
            {/* État */}
           
            
      
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

      <dialog ref={modalmodifRef}  id="" className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-black/50 ">
        <div className="  flex justify-center items-center h-screen">
          <div className="bg-white rounded-2xl shadow-2xl w-[600px] max-w-full">
          {/* Header */}
          <div className="bg-gray-100 px-6 py-4 border-b border-gray-200 flex items-center justify-between rounded-2xl">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <Plus /> Ajouter un role
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
            
                        {/* Pays */}
            
            
      
            {/* Rôles */}
            <div>
            
            {/*  <div className="  h-35 overflow-y-auto">
                <RolesCheckbox/>
              </div>*/}

               <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom du Role
              </label>
              <input
                type="text"
                name="nom"
                placeholder="Ex: Secretaire"
                value={nomrole}
                onChange={handlenomroleChange}

                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
              />
              
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description du role
              </label>
              <input
                type="text"
                name="description"
                placeholder=""
                value={description}
                onChange={handledescriptionChange}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
              />
              
            </div>

           {/* <div>
            
             <div className="  h-35 overflow-y-auto">
                <DroitsCheckbox/>
              </div>
            </div> */}

            <div className="  h-35 overflow-y-auto">
               <table className="  rounded-lg overflow-hidden  min-w-full ">
        <thead className=" font-bold">
          
            <tr className="border border-gray-300 ">
            
            <th className=" px-4 py-2 text-left "></th>
            <th className=" px-4 py-2 text-left">Lecture</th>
            <th className=" px-4 py-2 text-left w-40 ">Ecriture</th>
            
          </tr>
          
          
        </thead>
        <tbody>
          <tr className="bg-white hover:bg-gray-50 cursor-pointer border border-gray-200 text-gray-600"
            > 
            
           <td className=" px-4 py-2 font-bold text-black" > Dashboard </td>
            <td className=" px-4 py-2">  <input type="checkbox" name="Dashboard" value={"lecture"} /></td>
            <td className=" px-4 py-2">  <input type="checkbox" name="Dashboard" value={"Ecriture"}  /></td>
               </tr>
          <tr className="bg-white hover:bg-gray-50 cursor-pointer border border-gray-300 text-gray-600 "
          
          >
           
            <td className=" px-4 py-2 text-black font-bold">Personnel</td>
            <td className=" px-4 py-2">  <input type="checkbox" name="Personnel" value={"lecture"}  /></td>
            <td className=" px-4 py-2">  <input type="checkbox" name="Personnel" value={"Ecriture"}  /></td>
              </tr>

              <tr className="bg-white hover:bg-gray-50 cursor-pointer border border-gray-200 text-gray-600"
            > 
            
           <td className=" px-4 py-2 font-bold text-black" > Roles Droit </td>
            <td className=" px-4 py-2">  <input type="checkbox" name="Roles droit" value={"lecture"}  /></td>
            <td className=" px-4 py-2">  <input type="checkbox" name="Role  droit" value={"Ecritire"}  /></td>
               </tr>
          <tr className="bg-white hover:bg-gray-50 cursor-pointer border border-gray-300 text-gray-600 "
          
          ></tr>

          <tr className="bg-white hover:bg-gray-50 cursor-pointer border border-gray-200 text-gray-600"
            > 
            
           <td className=" px-4 py-2 font-bold text-black" > Chauffeur </td>
            <td className=" px-4 py-2 ">  <input type="checkbox" name="droits"  /></td>
            <td className=" px-4 py-2">  <input type="checkbox" name="droits"  /></td>
               </tr>
          <tr className="bg-white hover:bg-gray-50 cursor-pointer border border-gray-300 text-gray-600 "
          
          ></tr>
                        <tr className="bg-white hover:bg-gray-50 cursor-pointer border border-gray-200 text-gray-600"
            > 
            
           <td className=" px-4 py-2 font-bold text-black" > Facturation </td>
            <td className=" px-4 py-2">  <input type="checkbox" name="droits"  /></td>
            <td className=" px-4 py-2">  <input type="checkbox" name="droits"  /></td>
               </tr>

                             <tr className="bg-white hover:bg-gray-50 cursor-pointer border border-gray-200 text-gray-600"
            > 
            
           <td className=" px-4 py-2 font-bold text-black" > Notification </td>
            <td className=" px-4 py-2">  <input type="checkbox" name="droits"  /></td>
            <td className=" px-4 py-2">  <input type="checkbox" name="droits"  /></td>
               </tr>

                             <tr className="bg-white hover:bg-gray-50 cursor-pointer border border-gray-200 text-gray-600"
            > 
            
           <td className=" px-4 py-2 font-bold text-black" > Analytics Region </td>
            <td className=" px-4 py-2">  <input type="checkbox" name="droits"  /></td>
            <td className=" px-4 py-2">  <input type="checkbox" name="droits"  /></td>
               </tr>

           
        </tbody>
      </table>
            </div>
            
      
            {/* État */}
           
            
      
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

      {showModal && selectedRole && (
        <div className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-black/50 ">
        <div className="  flex justify-center items-center h-screen">
          <div className="bg-white rounded-2xl shadow-2xl w-[600px] max-w-full">
          {/* Header */}
          <div className="bg-gray-100 px-6 py-4 border-b border-gray-200 flex items-center justify-between rounded-2xl">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <Plus /> Détails du rôle
            </h3>
            <button
              type="button"
              onClick={() => setShowModal(false)}
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
            
                        {/* Pays */}
            
            
      
            {/* Rôles */}
            <div>
            
            {/*  <div className="  h-35 overflow-y-auto">
                <RolesCheckbox/>
              </div>*/}

               <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom du Role
              </label>
              <input
                type="text"
                name="nom"
                placeholder="Ex: Secretaire"
                value={selectedRole.nom}
                
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
              />
              
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description du role
              </label>
              <input
                type="text"
                name="description"
                placeholder=""
                value={selectedRole.description}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
              />
              
            </div>

           {/* <div>
            
             <div className="  h-35 overflow-y-auto">
                <DroitsCheckbox/>
              </div>
            </div> */}

            <div className="  h-35 overflow-y-auto">
               <table className="  rounded-lg overflow-hidden  min-w-full ">
        <thead className=" font-bold">
          
            <tr className="border border-gray-300 ">
            
            <th className=" px-4 py-2 text-left "></th>
            <th className=" px-4 py-2 text-left">Lecture</th>
            <th className=" px-4 py-2 text-left w-40 ">Ecriture</th>
            
          </tr>
          
          
        </thead>
        <tbody>
          {modules.map((module) => (
          <tr  key={module} className="bg-white hover:bg-gray-50 cursor-pointer border border-gray-200 text-gray-600"
            > 
            
           <td className=" px-4 py-2 font-bold text-black" > {module} </td>
              </tr>   ))}
         

           
        </tbody>
      </table>
            </div>
            
      
            {/* État */}
           
            
      
           
            
      
            {/* Boutons */}
            <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
              
              <button
                 onClick={handleClose}
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
              >
                Fermer
              </button>
            </div>
          </Form>
        </div>
        </div>
      </div>

      )}


      






       <dialog ref={modalRefSup}  id="" className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-black/50 ">
        <div className="  flex justify-center items-center h-screen">
          <div className="bg-white rounded-2xl shadow-2xl w-[600px] max-w-full">
          {/* Header */}
          
      
          {/* Formulaire */}
          <Form
            method="post"
            onSubmit={() => modalRef.current?.close()}
            className="p-6 space-y-5"
          >
            {/* Nom complet */}
            
                        {/* Pays */}
            
            
      
            {/* Rôles */}
            <div className=" text-center text-2xl font-bold">
            
           Voulez vous supprimer ce droit ?
              
            </div>
           
            <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={() => modalRefSup.current?.close()}
                className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
              >
                Ok
              </button>
            </div>
          </Form>
        </div>
        </div>
      </dialog>
      
      
                </div>
              
          </ErrorBoundary>
    )
}