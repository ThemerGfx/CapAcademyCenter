import React from 'react';
import {FusePageCarded} from '@fuse';
import BanqueCvsTable from './BanqueCvsTable';

const BanqueCvs = () => {
    
    return (
       <React.Fragment>
           <FusePageCarded
               classes={{
                   content: "flex",
                   header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
               }}
               content={
                  <BanqueCvsTable />
               }
               innerScroll
           />
        </React.Fragment>
       );
    };

export default BanqueCvs
