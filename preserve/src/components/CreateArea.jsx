import React, { useState } from "react";

function CreateArea(props) {
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

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={inputText.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputText.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
