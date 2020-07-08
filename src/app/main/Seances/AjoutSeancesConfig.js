import {FuseLoadable} from '@fuse';

export const AjoutSeancesConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/ajout-seance/:seanceId?',
            component: FuseLoadable({
                loader: () => import('./AjoutSeance')
            })
        },
        {
            path     : '/table-seances',
            component: FuseLoadable({
                loader: () => import('./Seances')
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
