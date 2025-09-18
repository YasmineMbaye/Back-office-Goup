import { useLoaderData, Await } from "react-router";

import { ErrorBoundary } from "../ui/error-boundary";

import type { UserRole } from "../../types/navigation";
import { Plus, Search } from 'lucide-react';

interface DashboardLayoutProps {
  title: string;
  role: UserRole;
}

export function RegionLayout({ title, role }: DashboardLayoutProps) {
  const { user, dashboardData } = useLoaderData<any>();

  return (
    <ErrorBoundary>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="text-lg text-gray-600 mt-2">Bienvenue dans la gestion des régions</p>
          
        </div>


        <div className="  card card-body bg-base-100 shadow-sm border border-base-300 ">
            <div className='flex justify-between'> 
              
           
    
        <div className=' flex '>
            <div className='bg-black p-3 rounded-l-sm'><Search className='text-white'/></div>
         <input type="text" placeholder="Rechercher une organisation..."  className="  rounded-r-sm px-4 border border-gray-200" />
        </div>

        <button className="btn bg-black text-white " > <Plus className="" /> Ajouter une organisation</button>
            </div>
        
        </div>
        
        <div>
            <div className="card bg-base-100 shadow-sm border border-base-300 mb-5 ring-1">
<div className="overflow-x-auto ">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="bg-white text-black ">
        <th></th>
        <th>Organisation</th>
        <th>Pays</th>
        <th>Code</th>
        <th>Identification</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
          <tr >
            <th>1</th>
            <td>Go-up-Sn</td>
            <td>Senegal</td>
            <td>SN</td>
            <td>24334</td>
           
          </tr>
       
      
    </tbody>
  </table>
</div>
     
</div>
        </div>
      </div>
    </ErrorBoundary>
  );
}