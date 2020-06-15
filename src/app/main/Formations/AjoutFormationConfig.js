import {FuseLoadable} from '@fuse';

export const AjoutFormationConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/ajout-formation/:agentId?',
            component: FuseLoadable({
                loader: () => import('./AjoutFormation')
            })
        },
        {
            path     : '/table-formations',
            component: FuseLoadable({
                loader: () => import('./Formations')
            })
        }
    ]
}