import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse/index';
import {AjoutAgentConfig} from 'app/main/Agents/AjoutAgentConfig';
import {AjoutFormateurConfig} from '../main/Formateurs/AjoutFormateurConfig'
import {LoginConfig} from '../auth/LoginConfig'
import {Register2PageConfig} from '../auth/Register2PageConfig'
import {AjoutFormationConfig} from '../main/Formations/AjoutFormationConfig'
import {ContenuConfig} from '../main/Contenu/ContenuConfig'
import {AjoutSeancesConfig} from '../main/Seances/AjoutSeancesConfig'
import {FormationFormateurConfig} from '../main/template/FormationFormateurConfig'
import {DemandesConfig} from '../main/Demandes/DemandesConfig'

const routeConfigs = [
    LoginConfig,
    Register2PageConfig,
    AjoutAgentConfig,
    AjoutFormateurConfig,
    AjoutFormationConfig,
    ContenuConfig,
    AjoutSeancesConfig,
    FormationFormateurConfig,
    DemandesConfig
];

 const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/login"/>
    }
];

 export default routes;
