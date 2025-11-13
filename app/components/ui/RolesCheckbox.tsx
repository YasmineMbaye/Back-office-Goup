import { useState } from "react";

export default function RolesCheckbox() {
  const [showMore, setShowMore] = useState(false);

  const roles = [
    "Secrétaire",
    "Chauffeur",
    "Chef de département",
    "Assistant",
    "Comptable",
    "Technicien",
    "Agent de sécurité",
    "Directeur",
    "Stagiaire",
  ];

  // Si showMore = false → on affiche seulement les 3 premiers
  const visibleRoles = showMore ? roles : roles.slice(0, 4);

  return (
    <div className="space-y-2 overflow-y-auto">
      
<div className=" flex justify-between  ">
 <div className="flex items-end">
   <div className="text-sm font-medium text-gray-700  ">Roles</div>
 </div>
  <button
        type="button"
        onClick={() => setShowMore(!showMore)}
        className="text-sm text-blue-600 hover:underline mt-2  "
      >
        {showMore ? "Voir moins ▼" : "Voir plus ▶ "}
      </button>
</div>
      <div className="grid grid-cols-2 gap-2">
        {visibleRoles.map((role) => (
          <label
            key={role}
            className="flex items-center gap-2 text-gray-700 hover:bg-gray-50 rounded-md px-2 py-1 transition"
          >
            <input type="checkbox" name="roles" value={role} />
            {role}
          </label>
        ))}
      </div>

      {/* Bouton voir plus / voir moins */}
      
    </div>
  );
}
