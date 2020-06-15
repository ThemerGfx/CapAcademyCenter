import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse/index';
import {AjoutAgentConfig} from 'app/main/Agents/AjoutAgentConfig';
import {AjoutFormateurConfig} from '../main/Formateurs/AjoutFormateurConfig'
import {LoginConfig} from '../auth/LoginConfig'
import {Register2PageConfig} from '../auth/Register2PageConfig'
import {AjoutFormationConfig} from '../main/Formations/AjoutFormationConfig'

const routeConfigs = [
    AjoutAgentConfig,
    AjoutFormateurConfig,
    AjoutFormationConfig,
    LoginConfig,
    Register2PageConfig
];

 const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/table-agents"/>
    }
];

 export default routes;
