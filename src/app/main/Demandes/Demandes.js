import React from 'react';
import {FusePageCarded} from '@fuse';
import DemandesTable from './DemandesTable';

const Demandes = () => {
    
    return (
       <React.Fragment>
           <FusePageCarded
               classes={{
                   content: "flex",
                   header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
               }}
               content={
                  <DemandesTable />
               }
               innerScroll
           />
        </React.Fragment>
       );
    };

export default Demandes
