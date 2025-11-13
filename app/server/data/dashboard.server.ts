import type { UserRole } from "../../types/navigation";

// Interfaces pour les données
export interface DashboardStats {
  title: string;
  value: string | number;
  change: number;
  changeType: "increase" | "decrease";
}

export interface ChartData {
  [key: string]: any;
}

export interface DashboardData {
  stats: DashboardStats[];
  chartData: ChartData[];
  recentActivity: any[];
  kpis: any[];
  recentActivityy:any[];
   coordonnees:any[];
   responsable :any[];
   statistiques :any[];
    ml :any[];
     sn  :any[];

}

// Simuler un délai de chargement réseau
function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getDashboardData(role: UserRole, regionId?: string, slug?:string): Promise<DashboardData> {
  // Simuler une latence réseau
  await delay(Math.random() * 1000 + 500);
  
  switch (role) {
    case "super_admin":
      return getSuperAdminData(slug);
    case "admin":
      return getAdminData(regionId);
    case "partener":
      return getPartnerData(regionId);
    case "personnel":
      return getPersonnelData(regionId);
    default:
      throw new Error("Unknown role");
  }
}

function getSuperAdminData(slug: string = "ml"): DashboardData {

  const key = (slug || "ml") as keyof typeof orgs;
  
const orgs = {
    sn: {
      recentActivityy: [
        { action: "Pays", region: "Sénégal", time: "Il y a 2h" },
        { action: "Code", region: "sn", time: "Il y a 2h" },
        { action: "Date de création", region: "01/01/2024", time: "Il y a 2h" },
        { action: "Statut", region: "Actif", time: "Il y a 2h" }
      ],
      coordonnees: [
        { action: "Adresse", value: "Dakar, Plateau", time: "Il y a 2h" },
        { action: "Téléphone", value: "+221 77 123 45 67", time: "Il y a 2h" },
        { action: "Email", value: "contact@go-up.sn", time: "Il y a 2h" },
        { action: "Site web", value: "www.go-up.sn", time: "Il y a 2h" }
      ],
      responsable: [
        { action: "Nom", value: "Mamadou Ndiaye", time: "Il y a 2h" },
        { action: "Fonction", value: "Directeur régional", time: "Il y a 2h" },
        { action: "Téléphone", value: "+221 77 987 65 43", time: "Il y a 2h" },
        { action: "Email", value: "mamadou@go-up.sn", time: "Il y a 2h" }
      ],
      statistiques: [
        { action: "Chauffeurs", value: "1200", time: "Il y a 2h" },
        { action: "Clients", value: "15000", time: "Il y a 2h" },
        { action: "Courses", value: "45000", time: "Il y a 2h" },
        { action: "Revenus", value: "150 M FCFA", time: "Il y a 2h" }
      ],
      statut: [
      {
        title: "Chauffeurs",
        value: 1200,
        change: 8.2,
        changeType: "increase"
      },
      {
        title: "Clients",
        value: "1500",
        change: 12.5,
        changeType: "increase"
      },
      {
        title: "Revenue",
        value: "€45.8M",
        change: 15.3,
        changeType: "increase"
      },
      {
        title: "Course",
        value: "30",
        change: 0.1,
        changeType: "increase"
      }
    ],
    chartDataa: [
      { name: "France", users: 450000, revenue: 12500000, trips: 85000 },
      { name: "Allemagne", users: 380000, revenue: 9800000, trips: 72000 },
      { name: "Espagne", users: 320000, revenue: 8200000, trips: 63000 },
      { name: "Italie", users: 290000, revenue: 7500000, trips: 58000 },
      { name: "UK", users: 410000, revenue: 11200000, trips: 78000 },
      { name: "Pays-Bas", users: 180000, revenue: 4800000, trips: 35000 }
    ],
    },
    ml: {
      recentActivityy: [
        { action: "Pays", region: "Mali", time: "Il y a 2h" },
        { action: "Code", region: "ml", time: "Il y a 2h" },
        { action: "Date de création", region: "15/02/2024", time: "Il y a 2h" },
        { action: "Statut", region: "Actif", time: "Il y a 2h" }
      ],
      coordonnees: [
        { action: "Adresse", value: "Bamako, Quartier Hippodrome", time: "Il y a 2h" },
        { action: "Téléphone", value: "+223 77 111 22 33", time: "Il y a 2h" },
        { action: "Email", value: "contact@go-up.ml", time: "Il y a 2h" },
        { action: "Site web", value: "www.go-up.ml", time: "Il y a 2h" }
      ],
      responsable: [
        { action: "Nom", value: "Fatoumata Coulibaly", time: "Il y a 2h" },
        { action: "Fonction", value: "Directrice régionale", time: "Il y a 2h" },
        { action: "Téléphone", value: "+223 77 888 99 00", time: "Il y a 2h" },
        { action: "Email", value: "fatoumata@go-up.ml", time: "Il y a 2h" }
      ],
      statistiques: [
        { action: "Chauffeurs", value: "800", time: "Il y a 2h" },
        { action: "Clients", value: "10000", time: "Il y a 2h" },
        { action: "Courses", value: "25000", time: "Il y a 2h" },
        { action: "Revenus", value: "80 M FCFA", time: "Il y a 2h" }
      ],
      statut: [
      {
        title: "Chauffeurs",
        value: 1200,
        change: 8.2,
        changeType: "increase"
      },
      {
        title: "Clients",
        value: "1500",
        change: 12.5,
        changeType: "increase"
      },
      {
        title: "Revenue",
        value: "€45.8M",
        change: 15.3,
        changeType: "increase"
      },
      {
        title: "Course",
        value: "30",
        change: 0.1,
        changeType: "increase"
      }
    ],
    chartDataa: [
      { name: "France", users: 450000, revenue: 12500000, trips: 85000 },
      { name: "Allemagne", users: 380000, revenue: 9800000, trips: 72000 },
      { name: "Espagne", users: 320000, revenue: 8200000, trips: 63000 },
      { name: "Italie", users: 290000, revenue: 7500000, trips: 58000 },
      { name: "UK", users: 410000, revenue: 11200000, trips: 78000 },
      { name: "Pays-Bas", users: 180000, revenue: 4800000, trips: 35000 }
    ],
    }
  };


  


  return {
    stats: [
      {
        title: "Régions Actives",
        value: 12,
        change: 8.2,
        changeType: "increase"
      },
      {
        title: "Utilisateurs Totaux",
        value: "2.4M",
        change: 12.5,
        changeType: "increase"
      },
      {
        title: "Revenus Globaux",
        value: "€45.8M",
        change: 15.3,
        changeType: "increase"
      },
      {
        title: "Uptime Serveurs",
        value: "99.9%",
        change: 0.1,
        changeType: "increase"
      }
    ],
    chartData: [
      { name: "France", users: 450000, revenue: 12500000, trips: 85000 },
      { name: "Allemagne", users: 380000, revenue: 9800000, trips: 72000 },
      { name: "Espagne", users: 320000, revenue: 8200000, trips: 63000 },
      { name: "Italie", users: 290000, revenue: 7500000, trips: 58000 },
      { name: "UK", users: 410000, revenue: 11200000, trips: 78000 },
      { name: "Pays-Bas", users: 180000, revenue: 4800000, trips: 35000 }
    ],
    recentActivity: [
      { action: "Nouvelle région ajoutée", region: "Portugal", time: "Il y a 2h" },
      { action: "Mise à jour serveur", status: "Complété", time: "Il y a 4h" },
      { action: "Rapport mensuel généré", type: "Financier", time: "Il y a 6h" }
    ],
    

    kpis: [
      { label: "Taux de satisfaction", value: 96.2, unit: "%" },
      { label: "Temps de réponse moyen", value: 1.8, unit: "s" },
      { label: "Croissance mensuelle", value: 12.5, unit: "%" }
    ],
    ...orgs[key]
  
  };
}

function getAdminData(regionId?: string): DashboardData {
  
  return {
    stats: [
      {
        title: "Chauffeurs Actifs",
        value: 1847,
        change: 5.2,
        changeType: "increase"
      },
      {
        title: "Courses Aujourd'hui",
        value: 3254,
        change: 12.8,
        changeType: "increase"
      },
      {
        title: "Revenus du Jour",
        value: "€45,690",
        change: 8.4,
        changeType: "increase"
      },
      {
        title: "Taux Satisfaction",
        value: "4.8/5",
        change: 2.1,
        changeType: "increase"
      }
    ],
    chartData: [
      { time: "00h", trips: 45, revenue: 890 },
      { time: "04h", trips: 23, revenue: 450 },
      { time: "08h", trips: 185, revenue: 3200 },
      { time: "12h", trips: 320, revenue: 5800 },
      { time: "16h", trips: 280, revenue: 4900 },
      { time: "20h", trips: 420, revenue: 7500 },
      { time: "23h", trips: 220, revenue: 3900 }
    ],
    recentActivity: [
      { driver: "Pierre Martin", status: "Connecté", time: "À l'instant" },
      { incident: "Signalement client", priority: "Moyen", time: "Il y a 15min" },
      { payment: "Paiement en retard", amount: "€127", time: "Il y a 1h" }
    ],
    kpis: [
      { label: "Temps d'attente moyen", value: 4.2, unit: "min" },
      { label: "Distance moyenne", value: 8.5, unit: "km" },
      { label: "Prix moyen course", value: 14.8, unit: "€" }
    ]
  };
}

function getPartnerData(_regionId?: string): DashboardData {
  return {
    stats: [
      {
        title: "Audits ce Mois",
        value: 28,
        change: 16.7,
        changeType: "increase"
      },
      {
        title: "Conformité",
        value: "98.5%",
        change: 1.2,
        changeType: "increase"
      },
      {
        title: "Incidents Résolus",
        value: 145,
        change: -8.3,
        changeType: "decrease"
      },
      {
        title: "Temps de Réponse",
        value: "2.1h",
        change: -15.4,
        changeType: "decrease"
      }
    ],
    chartData: [
      { category: "Sécurité", passed: 95, failed: 5 },
      { category: "Qualité Service", passed: 88, failed: 12 },
      { category: "Conformité Légale", passed: 98, failed: 2 },
      { category: "Protection Données", passed: 92, failed: 8 },
      { category: "Standards Véhicules", passed: 96, failed: 4 }
    ],
    recentActivity: [
      { type: "audit", entity: "UberCorp France", status: "En cours", time: "Il y a 2h" },
      { type: "rapport", title: "Conformité Q1", status: "Publié", time: "Il y a 1j" },
      { type: "alerte", message: "Incident de sécurité", priority: "Haute", time: "Il y a 3h" }
    ],
    kpis: [
      { label: "Taux de conformité", value: 98.5, unit: "%" },
      { label: "Audits réalisés", value: 28, unit: "/mois" },
      { label: "Temps de résolution", value: 2.1, unit: "h" }
    ]
  };
}

function getPersonnelData(_regionId?: string): DashboardData {
  return {
    stats: [
      {
        title: "Tickets Support",
        value: 42,
        change: -12.5,
        changeType: "decrease"
      },
      {
        title: "Chauffeurs en Ligne",
        value: 1247,
        change: 8.7,
        changeType: "increase"
      },
      {
        title: "Temps Réponse Moy.",
        value: "3.2min",
        change: -18.2,
        changeType: "decrease"
      },
      {
        title: "Satisfaction Client",
        value: "4.7/5",
        change: 2.8,
        changeType: "increase"
      }
    ],
    chartData: [
      { hour: "6h", tickets: 12, resolved: 10 },
      { hour: "9h", tickets: 28, resolved: 25 },
      { hour: "12h", tickets: 45, resolved: 42 },
      { hour: "15h", tickets: 38, resolved: 35 },
      { hour: "18h", tickets: 52, resolved: 48 },
      { hour: "21h", tickets: 35, resolved: 32 }
    ],
    recentActivity: [
      { ticket: "#2847", client: "Marie D.", issue: "Problème paiement", status: "Résolu", time: "Il y a 5min" },
      { ticket: "#2846", client: "Jean L.", issue: "Course annulée", status: "En cours", time: "Il y a 15min" },
      { ticket: "#2845", client: "Anna M.", issue: "Facturation", status: "Résolu", time: "Il y a 32min" }
    ],
    kpis: [
      { label: "Tickets résolus", value: 89.5, unit: "%" },
      { label: "Premier contact", value: 2.1, unit: "min" },
      { label: "Escalade nécessaire", value: 12.3, unit: "%" }
    ]
  };
}