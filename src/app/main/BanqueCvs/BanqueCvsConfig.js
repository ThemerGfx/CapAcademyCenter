import {FuseLoadable} from '@fuse';

export const BanqueCvsConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/table-cvs',
            component: FuseLoadable({
                loader: () => import('./BanqueCvs')
            })
        }
    ]
}