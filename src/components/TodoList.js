import PropTypes from 'prop-types';
import TodoModel from "../models/TodoModel";
import TodoItem from './TodoItem';

function TodoList({items}){

    return (
        <div>
            {
                items.map((item, index) => {return <TodoItem item={item}></TodoItem>})
            }
        </div>
    );
}

TodoList.propTypes = {
    items: PropTypes.arrayOf(TodoModel)
}

export default TodoList;