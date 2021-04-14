import PropTypes from 'prop-types';

function TodoItem({item}){
    return (
        <div className=".center">
            <div>{item.title}</div>
            <div>{item.description}</div>
        </div>
    );
}

TodoItem.propTypes = {
    item: PropTypes.object
}

export default TodoItem;