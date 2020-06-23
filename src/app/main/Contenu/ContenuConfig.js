import {FuseLoadable} from '@fuse';

export const ContenuConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/table-contenu',
            component: FuseLoadable({
                loader: () => import('./Contenu')
            })
        }
    ]
}