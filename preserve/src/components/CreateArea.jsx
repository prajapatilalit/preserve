import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpand, setIsExpand] = useState(false);
  const [inputText, setInputText] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { value, name } = e.target;

    setInputText((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function submitNote(event) {
    props.onAdd(inputText);
    event.preventDefault();

    setInputText({
      title: "",
      content: "",
    });
  }

  function handleExpand() {
    setIsExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpand ? (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={inputText.title}
          />
        ) : null}

        <textarea
          onChange={handleChange}
          onClick={handleExpand}
          name="content"
          placeholder="Take a note..."
          rows={isExpand ? "3" : "1"}
          value={inputText.content}
        />
        <Zoom in={isExpand}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
