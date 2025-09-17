import { NavLink } from "react-router";


export default function Navitems({pageprops}:{pageprops:NavigationProps}){
    return(
       
        <div className="mb-4">
         <NavLink to={pageprops.url} className={  ({isActive})=> `${isActive && `bg-black text-white flex p-2 rounded`}` }>
                <div className="flex gap-2">
                    <div>{pageprops.icon}</div>
                    <div>{pageprops.name}</div>
                </div>
        </NavLink>
       </div>
    )
}