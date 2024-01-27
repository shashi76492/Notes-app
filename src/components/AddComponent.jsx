import { useState } from "react";


const AddComponent = ({ handleAddNote }) => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(200);

  const handleChange = (e) => {
   
    const newText = e.target.value
    setText(newText);
    setCount(200 - newText.length)
    
  };

  const handleSaveClick = () => {
    handleAddNote(text);
    setText("")
    setCount(200)
  };



  return (
    <div className="note new"  >
      <textarea
        rows="8"
        columns="10"
        placeholder="Type to add a note... "
        onChange={handleChange}
        value={text}
        
      ></textarea>
      <div className="note-footer">
        <small>{count} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddComponent;
