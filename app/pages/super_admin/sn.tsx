import { getDashboardData } from "../../server/data/dashboard.server";
import { requireSuperAdmin } from "../../server/auth/auth.server";
import type { ChartData } from '../../server/data/dashboard.server';

import { formdialog as action} from "~/server/actions/currency.server";
export {action}
export async function loader({ request }: { request: Request }) {
  const url= request.url.split("/")
  const slug= url[url.length-1]
  console.log(slug)
  const { user } = await requireSuperAdmin({ request });
  const dashboardData = await getDashboardData(user.role, user.region_id, slug);
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

   const  {slug}  = useLoaderData<typeof loader>();
   console.log(slug)
  

  const { user, dashboardData } = useLoaderData<any>();
  console.log("DASHBOARD DATA=++++++++++++++++++++++:", dashboardData);



  


  return (
    <div className="p-6 space-y-6">
      <Suspense fallback={<DashboardSkeleton />}>
      {/* Bouton retour */}
      <div className=" flex justify-between">
        <div>
          <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        ⬅ Retour à la liste
      </button>
        </div>
        <div className="flex gap-5">
          <div ><button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300" onClick={() => navigate("/master/regions/sn/detail")}>Details</button></div>
          <div><button className="px-4 py-2 bg-red-500 rounded hover:bg-gray-300">Supprimer</button></div>
        </div>
      </div>

      {/* Titre */}
      


          <Await resolve={dashboardData}>
            {(data) => (
              <>
                {/* Stats Grid */}
               

                {/* Charts */}
                 
                  <h1 className="text-3xl font-bold">Go-Up : {slug.toUpperCase()}</h1>

                 

                <ClientChartWrapper role={role} data={data.chartDataa} />

                {/* Recent Activity & KPIs */}
                
                
              </>
              
            )}

            
          </Await>
        </Suspense>

        

    </div>
  );
}
