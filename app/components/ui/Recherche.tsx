import { Plus } from 'lucide-react';
export default function Tableaua() {
    


    return (
        <div className="card card-body bg-base-100 shadow-sm border border-base-300 ">
            <div className=" flex justify-between mb-5">
            
              <button className="btn bg-gray-200" > <Plus className="" /> Ajouter une organisation</button>
           
        </div>
         <input type="text" placeholder="Rechercher un utilisateur..."  className="input " />
        
        </div>
        
    );
}