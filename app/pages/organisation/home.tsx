import React from 'react'
import Recherche from '~/components/ui/Recherche'
import Tableauorganisation from '~/components/ui/Tableauorganisation'

export default function Home() {
  return (
    <div>
      <div className="breadcrumbs text-sm mb-4">
      <ul>
    <li><a href='/master'>Dashboard</a></li>
    <li className="text-info" >Gestions des organisation</li>
  </ul>
  </div>
  <div className='mb-8'>
    <Recherche/>
  </div>
  <div>
    <Tableauorganisation/>
  </div>
</div>
    
  )
}
