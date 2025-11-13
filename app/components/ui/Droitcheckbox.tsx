import { useState } from "react";

export default function DroitsCheckbox() {
  const [showMore, setShowMore] = useState(false);

  // Liste des droits possibles
  const droits = [
    "Voir trajets",
    "Gérer factures",
    "Créer notifications",
    "Voir clients",
    "Modifier personnel",
    "Valider trajets",
    "Accéder aux rapports",
    "Gérer équipements",
    "Traiter incidents",
  ];

  // Afficher seulement les 4 premiers si showMore = false
  const visibleDroits = showMore ? droits : droits.slice(0, 4);

  return (
    <div className="space-y-2 overflow-y-auto">
      <div className="flex justify-between">
        <div className="text-sm font-medium text-gray-700">Droits</div>
        <button
          type="button"
          onClick={() => setShowMore(!showMore)}
          className="text-sm text-blue-600 hover:underline"
        >
          {showMore ? "Voir moins ▼" : "Voir plus ▶"}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {visibleDroits.map((droit) => (
          <label
            key={droit}
            className="flex items-center gap-2 text-gray-700 hover:bg-gray-50 rounded-md px-2 py-1 transition"
          >
            <input type="checkbox" name="droits" value={droit} />
            {droit}
          </label>
        ))}
      </div>
    </div>
  );
}
