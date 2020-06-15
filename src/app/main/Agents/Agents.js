import React from 'react';
import {FusePageCarded} from '@fuse';
import AgentsTable from './AgentsTable';
import AgentsHeader from './AgentsHeader';

const Agents = () => {
    
    return (
       <React.Fragment>
           <FusePageCarded
               classes={{
                   content: "flex",
                   header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
               }}
               header={
                 <AgentsHeader />
               }
               content={
                  <AgentsTable />
               }
               innerScroll
           />
        </React.Fragment>
       );
    };

export default Agents
