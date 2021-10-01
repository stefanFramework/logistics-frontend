import React from 'react';
import { Helmet } from 'react-helmet';
import DataTable from 'components/DataTable';

export default function CarriersListingPage() {
  return (
    <div>
      <h1>Available Carriers</h1>
      <DataTable heading={
        [
          'Carrier',
          'Modalidad',
          'Acciones'
        ]} data={[
            {id: 1, name:'DHL', mode:'Reverse'}, 
            {id: 2, name:'Safe', mode:'Reverse'}, 
            {id: 3, name:'Eagle', mode:'Reverse'}
          ]} />
    </div>
  );
}
