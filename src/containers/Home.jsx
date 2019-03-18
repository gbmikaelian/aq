import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import Table from '../components/Table';
import PropTypes from 'prop-types';

import getTasksActionCreators from '../actions/toDoList/getTasks';
import addTasksActionCreators from '../actions/toDoList/AddTask';
import deleteTaskActionCreators from '../actions/toDoList/deleteTask';
import Notification from '../components/Notification';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    control: {
        padding: theme.spacing.unit * 2
    },
    icon: {
        cursor: 'pointer',
        margin: theme.spacing.unit * 2,
    },
    tablesBlock: {
        display: 'flex',
        border: '1px solid'
    }
});

class Home extends Component {
    state = {
        spacing: 16,
        pros: '',
        cons: '',
        notifyVariant: '',
        notifyOpen: false,
        notification: Function
    };

    handleChange = key => (event, value) => {
        this.setState({[key]: value});
    };

    componentDidMount() {
        this.props.getToDoList();
    }

    notification = (notifyOpen = false, notifyVariant = 'success', notifyMessage = '') => {
        
        if (typeof notifyOpen === 'boolean' && notifyOpen) {
            this.setState({ 
                notifyOpen,
                notifyMessage,
                notifyVariant
            });
        } else {
            this.setState({notifyOpen: false});
        }
        
    }
    componentDidUpdate(prevProps) {
        if(prevProps.addToDoList.success !== this.props.addToDoList.success) {
            this.notification(true, 'success', 'Item successfully created!');
            this.props.getToDoList();
            this.props.addToDoList.success = false;
        }

        if(prevProps.deleteTaskReducer.success !== this.props.deleteTaskReducer.success) {
            this.notification(true, 'success', 'Item successfully deleted!');            
            this.props.getToDoList();
            this.props.deleteTaskReducer.success = false;
        }
        
        if(prevProps.taskListReducer.error !== this.props.taskListReducer.error) {
            this.notification(true, 'error', this.props.taskListReducer.errorMessage);            
            this.props.taskListReducer.error = false;
        }
    }

    deleteItem = (e, key, catName) => {
        this.props.deleteTask(key, this.props.taskList, catName);
        e.stopPropagation();
    }

    addItem = (catName) => {
        let { taskList } = this.props;
        
        if (this.state[catName]) {
            this.props.addTask(taskList, this.state[catName], catName);
            this.setState({
                [catName]: ''
            });
        }
    }

    setInputValue = (e, name) => {
        this.setState({[name]: e.target.value});
    }

    render() {
        const {classes} = this.props;

        return (
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <Grid
                        container
                        className={classes.demo}
                        justify="center">
                        <div className={classes.tablesBlock}>
                            <Grid key="pros" item style={{borderRight: '1px solid'}}>
                                <Table
                                    data={{
                                        title: "Pro's",
                                        name: 'pros',
                                        items: this.props.pros,
                                        inputValue: this.state.pros
                                    }}
                                    setInputValue={this.setInputValue}
                                    addItem={this.addItem}
                                    deleteItem={this.deleteItem}/>
                            </Grid>

                            <Grid key="cons" item>
                                <Table 
                                    data={{
                                        title: "Con's",
                                        name: 'cons',
                                        items: this.props.cons,
                                        inputValue: this.state.cons
                                    }} 
                                    setInputValue={this.setInputValue}
                                    addItem={this.addItem}
                                    deleteItem={this.deleteItem}/>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
                <Notification
                    variant={this.state.notifyVariant}
                    message={this.state.notifyMessage}
                    handleClose={this.notification}
                    open={this.state.notifyOpen} />
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    const {taskList} = state.getTasks;
    return {
        addToDoList: state.addTask,
        deleteTaskReducer: state.deleteTask,
        taskListReducer: state.getTasks,
        taskList,
        cons: taskList.cons,
        pros: taskList.pros
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getToDoList() {
            dispatch(getTasksActionCreators.getTasksRequest());
        },
        addTask (data, taskName, catName) {
            dispatch(addTasksActionCreators.addTaskRequest({data, taskName, catName}));
        },
        deleteTask (itemKey, data, catName) {
            dispatch(deleteTaskActionCreators.deleteTaskRequest({data, itemKey, catName}));
        } 
    };
};

Home.propTypes = {
    getToDoList: PropTypes.func,
    addToDoList: PropTypes.object,
    deleteTaskReducer: PropTypes.object,
    taskListReducer: PropTypes.object,
    deleteTask: PropTypes.func,
    addTask: PropTypes.func,
    cons: PropTypes.array,
    pros: PropTypes.array,
    classes: PropTypes.object,
    taskList: PropTypes.object
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Home));