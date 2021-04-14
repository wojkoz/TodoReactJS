import PropTypes from 'prop-types';
import "./TodoItem.css"

function TodoItem({item}){
    return (
        <div className="item">
            <div><h3>{item.title}</h3></div>
            <div>{item.description}</div>
        </div>
    );
}

TodoItem.propTypes = {
    item: PropTypes.object
}

export default TodoItem;