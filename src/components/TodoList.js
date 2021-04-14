import PropTypes from 'prop-types';
import TodoModel from "../models/TodoModel";
import TodoItem from './TodoItem';
import "../App.css";
import Grid from "@material-ui/core/Grid";

function TodoList({items}){

    return (
        <div className="center grid">
           <Grid container spacing={3}>
           {
                items.map((item, index) => {
                    return <Grid key={Math.random()*100} item xs={6}>
                        <TodoItem key={index} item={item} maxDescLength={25}></TodoItem>
                        </Grid>
                    })
            }
           </Grid>
        </div>
    );
}

TodoList.propTypes = {
    items: PropTypes.arrayOf(TodoModel).isRequired
}

export default TodoList;