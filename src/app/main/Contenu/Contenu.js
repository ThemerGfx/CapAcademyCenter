import React from 'react';
import {FusePageCarded} from '@fuse';
import ContenuTable from './ContenuTable';
import ContenuHeader from './ContenuHeader';

const Contenu = () => {
    
    return (
       <React.Fragment>
           <FusePageCarded
               classes={{
                   content: "flex",
                   header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
               }}
               header={
                 <ContenuHeader />
               }
               content={
                  <ContenuTable />
               }
               innerScroll
           />
        </React.Fragment>
       );
    };

export default Contenu
