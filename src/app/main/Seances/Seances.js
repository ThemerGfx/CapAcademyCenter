import React from 'react';
import {FusePageCarded} from '@fuse';
import SeancesTable from './SeancesTable';
import SeancesHeader from './SeancesHeader';

const Seances = () => {
    
    return (
       <React.Fragment>
           <FusePageCarded
               classes={{
                   content: "flex",
                   header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
               }}
               header={
                 <SeancesHeader />
               }
               content={
                  <SeancesTable />
               }
               innerScroll
           />
        </React.Fragment>
       );
    };

export default Seances
