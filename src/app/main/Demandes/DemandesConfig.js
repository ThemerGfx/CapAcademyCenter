import {FuseLoadable} from '@fuse';

export const DemandesConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/table-demandes',
            component: FuseLoadable({
                loader: () => import('./Demandes')
            })
        }
    ]
}