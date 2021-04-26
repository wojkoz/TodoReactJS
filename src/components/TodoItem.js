import PropTypes from "prop-types";
import "./TodoItem.css";
import React, { useState } from "react";
import TodoItemDescription from "./TodoItemDescription";
import DeleteIcon from "@material-ui/icons/Delete";
import { Grid, Tooltip } from "@material-ui/core";

function TodoItem({ item, maxDescLength = 10, deleteItemCallback }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="item">
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <h3>{item.title}</h3>
        </Grid>
        <Grid item xs={3}>
          <Tooltip title="Delete item">
            <DeleteIcon
              fontSize="small"
              onClick={async () => await deleteItemCallback(item.todoId)}
            ></DeleteIcon>
          </Tooltip>
        </Grid>
      </Grid>
      <div onClick={() => setIsOpen(!isOpen)}>
        <TodoItemDescription
          isOpen={isOpen}
          description={item.description}
          maxDescLength={maxDescLength}
        ></TodoItemDescription>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  maxDescLength: PropTypes.number.isRequired,
  deleteItemCallback: PropTypes.func.isRequired,
};

export default TodoItem;
