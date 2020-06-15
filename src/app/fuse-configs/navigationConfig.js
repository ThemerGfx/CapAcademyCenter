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
            }
        ]
    }
];

export default navigationConfig;
