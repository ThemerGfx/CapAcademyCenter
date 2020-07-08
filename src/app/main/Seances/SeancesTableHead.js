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
        id            : 'admin',
        align         : 'left',
        disablePadding: false,
        label         : 'Admin',
        sort          : true
    },
    {
        id            : 'nameFormation',
        align         : 'left',
        disablePadding: false,
        label         : 'Nom Formation',
        sort          : true
    },
    {
        id            : 'nameFormateur',
        align         : 'left',
        disablePadding: false,
        label         : 'Nom Formateur',
        sort          : true
    },
    {
        id            : 'dateSeance',
        align         : 'left',
        disablePadding: false,
        label         : 'Date Séance',
        sort          : true
    },
    {
        id            : 'urlSeance',
        align         : 'left',
        disablePadding: false,
        label         : 'Url Séance',
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

class SeancesTableHead extends React.Component {
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

export default withStyles(styles, {withTheme: true})(SeancesTableHead);
