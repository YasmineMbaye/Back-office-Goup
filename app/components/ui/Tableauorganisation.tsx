import { Users } from "~/utils/Constantes";

export default function Tableauc() {
    return (
        

<div className="card bg-base-100 shadow-sm border border-base-300 mb-5">
<div className="overflow-x-auto ">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="bg-base-200">
        <th></th>
        <th>Organisation</th>
        <th>Pays</th>
        <th>Code</th>
        <th>Identification</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {Users.map((u, i) => (
          <tr key={i}>
            <th>{i + 1}</th>
            <td>{u.nom}</td>
            <td>{u.pays}</td>
            <td>{u.code}</td>
            <td>{u.identification}</td>
           
          </tr>
        ))}
      
    </tbody>
  </table>
</div>
     
</div>
    );
}