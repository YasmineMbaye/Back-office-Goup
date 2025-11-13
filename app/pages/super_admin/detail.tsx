import { getDashboardData } from "../../server/data/dashboard.server";
import { requireSuperAdmin } from "../../server/auth/auth.server";
import type { ChartData } from '../../server/data/dashboard.server';


export async function loader({ request }: { request: Request }) {
  const url= request.url.split("/")
  const slug= url[url.length-2]
  console.log(slug)
  const { user } = await requireSuperAdmin({ request });
  const dashboardData = await getDashboardData(user.role, user.region_id, slug);
  console.log("DASHBOARD DATAaaaaaaaaaa:", user);
  const yass=request
  console.log(yass);
  

  
  return {
    slug,
    user,
    dashboardData,
    
  };
}

import { useParams, useNavigate, useLoaderData, Await } from "react-router";
import { Suspense } from "react";
import { DashboardSkeleton } from "~/components/loading/dashboard-skeleton";
import { TrendingDown, TrendingUp } from "lucide-react";
import { ClientChartWrapper } from "~/components/charts/client-chart-wrapper";
import type { UserRole } from "~/types/navigation";

interface DashboardLayoutProps {
  title: string;
  role: UserRole;
}

// Exemple de données, tu peux remplacer par une API ou base de données

export default function OrganisationDetails({  role="super_admin" }: DashboardLayoutProps) {
 /* const { code } = useParams(); // Récupère le code depuis l'URL
  const navigate = useNavigate();

  // Cherche l'organisation correspondant au code
  const organisation = organisations.find((org) => org.code === code);

  if (!organisation) return <p>Organisation introuvable</p>; */

  const navigate = useNavigate();

   
  

  const  { user, dashboardData } = useLoaderData<any>();
  console.log("DASHBOARD DATA================================:", dashboardData);



  return (
    <div className="p-6 space-y-6">
      
      {/* Bouton retour */}
      
          <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        ⬅ Retour au dashboard
      </button>
        

      {/* Titre */}
      


           <Await resolve={dashboardData}>
            {(data) => (
              <>
                {/* Stats Grid */}
               

                {/* Charts */}
                 
                  

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {data.statut.map((stat: any, index: number) => (
                    <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-base font-medium text-gray-600">{stat.title}</p>
                          <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                        </div>
                        <div className={`flex items-center text-base font-medium ${
                          stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.changeType === 'increase' ? (
                            <TrendingUp className="w-5 h-5 mr-1" />
                          ) : (
                            <TrendingDown className="w-5 h-5 mr-1" />
                          )}
                          {Math.abs(stat.change)}%
                        </div>
                      </div> 
                    </div>
                  ))}
                </div>

                

                {/* Recent Activity & KPIs */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Informations générales</h3>
                    <div className="space-y-4">
                      {data.recentActivityy.map((activity: any, index: number) => (
                        <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                          <div>
                            <p className="text-base font-medium text-gray-900">
                              {activity.action}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                              {activity.region}
                            </p>
                          </div>
                          <span className="text-sm text-gray-400 font-medium">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                   <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Coordonnées</h3>
                    <div className="space-y-4">
                      {data.coordonnees.map((activity: any, index: number) => (
                        <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                          <div>
                            <p className="text-base font-medium text-gray-900">
                              {activity.action}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                              {activity.value}
                            </p>
                          </div>
                          <span className="text-sm text-gray-400 font-medium">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                   <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Responsable</h3>
                    <div className="space-y-4">
                      {data.responsable.map((activity: any, index: number) => (
                        <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                          <div>
                            <p className="text-base font-medium text-gray-900">
                              {activity.action}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                              {activity.value }
                            </p>
                          </div>
                          <span className="text-sm text-gray-400 font-medium">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  

                  
                   

                  
                </div>
                
              </>
              
            )}

            
          </Await>
       

        

    </div>
  );
}
