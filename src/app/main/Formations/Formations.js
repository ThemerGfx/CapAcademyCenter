import React from 'react';
import {FusePageCarded} from '@fuse';
import FormationsTable from './FormationsTable';
import FormationsHeader from './FormationsHeader';

const Formateurs = () => {
    
    return (
       <React.Fragment>
           <FusePageCarded
               classes={{
                   content: "flex",
                   header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
               }}
               header={
                 <FormationsHeader />
               }
               content={
                  <FormationsTable />
               }
               innerScroll
           />
        </React.Fragment>
       );
    };

export default Formateurs
