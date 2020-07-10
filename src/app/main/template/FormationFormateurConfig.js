import {FuseLoadable} from '@fuse';

export const FormationFormateurConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/table-formation-formateurs',
            component: FuseLoadable({
                loader: () => import('./FormationFormateur')
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
