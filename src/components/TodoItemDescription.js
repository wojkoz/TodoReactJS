import PropTypes from 'prop-types';

function TodoItemDescription({isOpen, maxDescLength, description}){

    if(isOpen){
        return <div>{description}</div>;
    }else{
        return description.length > maxDescLength 
        ? <div>{description.substring(0,maxDescLength)+"..."}</div> 
        : <div>{description}</div>
    }
}

TodoItemDescription.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    maxDescLength: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
}

export default TodoItemDescription;