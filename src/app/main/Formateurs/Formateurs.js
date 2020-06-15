import React from 'react';
import {FusePageCarded} from '@fuse';
import FormateursTable from './FormateursTable';
import FormateursHeader from './FormateursHeader';

const Formateurs = () => {
    
    return (
       <React.Fragment>
           <FusePageCarded
               classes={{
                   content: "flex",
                   header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
               }}
               header={
                 <FormateursHeader />
               }
               content={
                  <FormateursTable />
               }
               innerScroll
           />
        </React.Fragment>
       );
    };

export default Formateurs
