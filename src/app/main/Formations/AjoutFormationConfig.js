import {FuseLoadable} from '@fuse';

export const AjoutFormationConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/ajout-formation/:formationId?',
            component: FuseLoadable({
                loader: () => import('./AjoutFormation')
            })
        },        
        {
            path     : '/ajout-contenu/:contenuId?',
            component: FuseLoadable({
                loader: () => import('./AjoutContenu')
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