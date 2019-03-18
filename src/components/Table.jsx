import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';



const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    body: {
        fontSize: 14
    }
}))(TableCell);

const justify = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};

const styles = theme => ({
    root: {
        width: '100%',
    },
    table: {
        minWidth: 300
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default
        }
    },
    frameBlock: justify,
    addItemBlock: justify,
    frameDeleteButton: {
        cursor: 'pointer'
    }
});


const CustomizedTable = (props) => {
    const {classes, data} = props;
    const items = props.data.items ? props.data.items : [];
    return (
        <Paper className={classes.root}>
            <Table className={classes.table} >
                <TableHead>
                    <TableRow>
                        <CustomTableCell>
                            {data.title}
                        </CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        items.map((row, key) => (
                            <TableRow className={classes.row} key={key}>
                                <CustomTableCell component="th" scope="row">
                                    <div className={classes.frameBlock}>
                                        <span> 
                                            {row}
                                        </span>
                                        <Fab size="small" aria-label="Delete" className={classes.fab}>
                                            <DeleteIcon onClick={(e) => props.deleteItem(e, key, data.name)}/>
                                        </Fab>
                                    </div>
                                </CustomTableCell>
                            </TableRow>
                        ))
                    }
                    <TableRow className={classes.row} key="create">
                        <CustomTableCell component="th" scope="row">
                            <div className={classes.addItemBlock}>
                                <TextField
                                    id="create-item"
                                    label="Create field"
                                    type="text"
                                    margin="dense"
                                    className={classes.textField}
                                    value={data.inputValue}
                                    onChange={(e) => props.setInputValue(e, data.name)}
                                    variant="outlined"/>
                                <Fab color="primary" size="small" aria-label="Add" onClick={() => props.addItem(data.name)} className={classes.fab} >
                                    <AddIcon />
                                </Fab>
                            </div>
                        </CustomTableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    );
};

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object,
    setInputValue: PropTypes.func,
    addItem: PropTypes.func,
    deleteItem: PropTypes.func
};

export default withStyles(styles)(CustomizedTable);
