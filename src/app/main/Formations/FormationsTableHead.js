import React from 'react';
import {
    TableHead,
    TableSortLabel,
    TableCell,
    TableRow,
    Tooltip,
    withStyles
} from '@material-ui/core';

const rows = [
    {
        id            : 'id',
        align         : 'left',
        disablePadding: false,
        label         : 'ID',
        sort          : true
    },
    {
        id            : 'name',
        align         : 'left',
        disablePadding: false,
        label         : 'Nom',
        sort          : true
    },
    {
        id            : 'dateDebt',
        align         : 'left',
        disablePadding: false,
        label         : 'Date début',
        sort          : true
    },
    {
        id            : 'dateFin',
        align         : 'left',
        disablePadding: false,
        label         : 'Date fin',
        sort          : true
    },
    {
        id            : 'prix',
        align         : 'left',
        disablePadding: false,
        label         : 'Prix',
        sort          : true
    },
    {
        id            : 'formateur',
        align         : 'left',
        disablePadding: false,
        label         : 'Formateur',
        sort          : true
    },
    {
        id            : 'type',
        align         : 'left',
        disablePadding: false,
        label         : 'Type',
        sort          : true
    },
    {
        id            : 'contenu',
        align         : 'left',
        disablePadding: false,
        label         : 'Ajouter contenu',
        sort          : true
    },
    {
        id            : 'modifier',
        align         : 'left',
        disablePadding: false,
        label         : 'Modifier',
        sort          : true
    },
    {
        id            : 'seance',
        align         : 'left',
        disablePadding: false,
        label         : 'Ajouter séance',
        sort          : true
    },
    {
        id            : 'supprimer',
        align         : 'left',
        disablePadding: false,
        label         : 'Supprimer',
        sort          : true
    }
];

const styles = theme => ({
    actionsButtonWrapper: {
        background: theme.palette.background.paper
    }
});

class FormationsTableHead extends React.Component {
    state = {
        selectedProductsMenu: null
    };
    
    openSelectedProductsMenu = (event) => {
        this.setState({selectedProductsMenu: event.currentTarget});
    };

    closeSelectedProductsMenu = () => {
        this.setState({selectedProductsMenu: null});
    };

    render()
    {
        const {order, orderBy} = this.props;

        return (
            <TableHead>
                <TableRow className="h-45 w-64">
                    {rows.map(row => {
                        return (
                            <TableCell
                                key={row.id}
                                align={row.align}
                                padding={row.disablePadding ? 'none' : 'default'}
                                sortDirection={orderBy === row.id ? order : false}
                            >
                                {row.sort && (
                                    <Tooltip
                                        title="Sort"
                                        placement={row.align === "right" ? 'bottom-end' : 'bottom-start'}
                                        enterDelay={300}
                                    >
                                        <TableSortLabel
                                            active={orderBy === row.id}
                                            direction={order}
                                        >
                                            {row.label}
                                        </TableSortLabel>
                                    </Tooltip>
                                )}
                            </TableCell>
                        );
                    }, this)}
                </TableRow>
            </TableHead>
        );
    }
}

export default withStyles(styles, {withTheme: true})(FormationsTableHead);
