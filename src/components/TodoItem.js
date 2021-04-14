import PropTypes from 'prop-types';
import "./TodoItem.css"
import React, {useState} from 'react';
import TodoItemDescription from './TodoItemDescription';

function TodoItem({item, maxDescLength = 10}){
    const [isOpen, setIsOpen] =  useState(false);

        return (
            <div className="item" onClick={() => setIsOpen(!isOpen)}>
                <div><h3>{item.title}</h3></div>
                <TodoItemDescription isOpen={isOpen} description={item.description} maxDescLength={maxDescLength}></TodoItemDescription>
            </div>
        );

}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
    maxDescLength: PropTypes.number.isRequired
}

export default TodoItem;