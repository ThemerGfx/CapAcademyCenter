const navigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'table-agents',
                'title': 'Gestion des agents',
                'type' : 'item',
                'icon' : 'list',
                'url'  : '/table-agents'
            },
            {
                'id'   : 'table-formateurs',
                'title': 'Gestion des formateurs',
                'type' : 'item',
                'icon' : 'list',
                'url'  : '/table-formateurs'
            },
            {
                'id'   : 'table-formations',
                'title': 'Gestion des formations',
                'type' : 'item',
                'icon' : 'list',
                'url'  : '/table-formations'
            },
            {
                'id'   : 'table-contenu',
                'title': 'Gestion de contenu',
                'type' : 'item',
                'icon' : 'list',
                'url'  : '/table-contenu'
            },
            {
                'id'   : 'table-cvs',
                'title': 'Gestion de banque des CVs',
                'type' : 'item',
                'icon' : 'list',
                'url'  : '/table-cvs'
            },
            {
                'id'   : 'table-seances',
                'title': 'Gestion des séances',
                'type' : 'item',
                'icon' : 'list',
                'url'  : '/table-seances'
            },
            {
                'id'   : 'table-demandes',
                'title': 'Gestion des demandes',
                'type' : 'item',
                'icon' : 'list',
                'url'  : '/table-demandes'
            }
        ]
    }
];

export default navigationConfig;
