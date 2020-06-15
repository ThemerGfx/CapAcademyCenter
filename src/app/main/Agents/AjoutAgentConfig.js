import {FuseLoadable} from '@fuse';

export const AjoutAgentConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/ajout-agent/:agentId?',
            component: FuseLoadable({
                loader: () => import('./AjoutAgent')
            })
        },
        {
            path     : '/table-agents',
            component: FuseLoadable({
                loader: () => import('./Agents')
            })
        }
    ]
};

/**
 * Lazy load Example
 */
/*
import FuseLoadable from '@fuse/components/FuseLoadable/FuseLoadable';

export const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: FuseLoadable({
                loader: () => import('./Example')
            })
        }
    ]
};
*/
