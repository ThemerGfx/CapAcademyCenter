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
        id            : 'nom',
        align         : 'left',
        disablePadding: false,
        label         : 'Nom',
        sort          : true
    },
    {
        id            : 'prénom',
        align         : 'left',
        disablePadding: false,
        label         : 'Prénom',
        sort          : true
    },
    {
        id            : 'phone',
        align         : 'left',
        disablePadding: false,
        label         : 'Téléphone',
        sort          : true
    },
    {
        id            : 'specialite',
        align         : 'left',
        disablePadding: false,
        label         : 'Spécialité',
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

class FormateursTableHead extends React.Component {
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

export default withStyles(styles, {withTheme: true})(FormateursTableHead);
