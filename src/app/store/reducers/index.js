import {combineReducers} from 'redux';
import fuse from './fuse';
import auth from 'app/auth/store/reducers';
import quickPanel from 'app/fuse-layouts/shared-components/quickPanel/store/reducers';

import agentReducer from './AgentReducers/AgentReducers'
import formateurReducer from './FormateurReducers/FormateurReducers'
import formationReducer from './FormationReducers/FormationReducers'
import contenuReducer from './ContenuReducers/ContenuReducers'
import seanceReducer from '../reducers/SeanceReducers/SeanceReducers'
import authReducers from '../../auth/store/reducers/index'

const createReducer = (asyncReducers) =>
    combineReducers({
        auth,
        fuse,
        quickPanel,
        ...asyncReducers,
        agentReducer,
        formateurReducer,
        formationReducer,
        contenuReducer,
        seanceReducer,
        authReducers
    });

export default createReducer;
