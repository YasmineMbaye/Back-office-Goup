import { LayoutDashboard, Notebook, AudioWaveform,  Settings } from 'lucide-react';


export const Nav:NavigationProps []= [
    {
        name:"Dashboard",
        url:"/master",
        icon:<LayoutDashboard/>
    },
    {
        name:"Organisation",
        url:"/organisation",
        icon:<Notebook/>
    },
  
];

export const Users: User[]=[
    {
        
  nom: "Go-up-Sn",
  pays:"Senegal",
  code: "SN",
  identification: "78778778",
  
    }
]