import {FuseLoadable} from '@fuse';

export const AjoutFormateurConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/ajout-formateur/add',
            component: FuseLoadable({
                loader: () => import('./AjoutFormateur')
            })
        },
        {
            path     : '/table-formateurs',
            component: FuseLoadable({
                loader: () => import('./Formateurs')
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
