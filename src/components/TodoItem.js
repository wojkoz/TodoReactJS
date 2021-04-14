import PropTypes from 'prop-types';
import "./TodoItem.css"
import React, {useState} from 'react';

function TodoItem({item, maxDescLength = 10}){
    const [isOpen, setIsOpen] =  useState(false);


    if(isOpen){
        return (
            <div className="item" onClick={() => setIsOpen(!isOpen)}>
                <div><h3>{item.title}</h3></div>
                <div>{item.description}</div>
            </div>
        );
    }else{
        return (
            <div className="item" onClick={() => setIsOpen(!isOpen)}>
                <div><h3>{item.title}</h3></div>
                {
                    item.description.length > maxDescLength 
                    ? <div>{item.description.substring(0,maxDescLength)+"..."}</div> 
                    : <div>{item.description}</div>
                }
            </div>
        );
    }
}

TodoItem.propTypes = {
    item: PropTypes.object,
    maxDescLength: PropTypes.number
}

export default TodoItem;