import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useState } from "react";

function CreateTodoItem({ addItemFn }) {
  const [isError, setIsError] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onTitleChange = (text) => {
    text === "" ? setIsError(true) : setIsError(false);

    setTitle(text);
  };

  const onDescriptionChange = (text) => {
    setDescription(text);
  };

  return (
    <div>
      <div>
        <h2>Create new Todo item</h2>
      </div>
      <div>
        <form noValidate autoComplete="off">
          <TextField
            error={isError}
            id="outlined-basic"
            value={title}
            label="Title"
            variant="outlined"
            onChange={(e) => onTitleChange(e.target.value)}
          />
          <br></br>
          <TextField
            id="standard-multiline-static"
            label="Description"
            value={description}
            multiline
            rows={4}
            onChange={(e) => onDescriptionChange(e.target.value)}
          />
        </form>
      </div>
      <Button
        style={{ marginTop: 5 }}
        disabled={title.length === 0}
        variant="contained"
        onPointerDown={() => addItemFn(title, description)}
      >
        Add item
      </Button>
    </div>
  );
}

CreateTodoItem.propTypes = {
  addItemFn: PropTypes.func.isRequired,
};

export default CreateTodoItem;
