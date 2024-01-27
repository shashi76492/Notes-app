import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";


const AddNote = ({ handleAddNote }) => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(200);
  const [addDiv, setAddDiv] = useState(false);



  const handleChange = (e) => {
  
    const newText = e.target.value;
    setText(newText)
    setCount(200 - newText.length);
  };

  const handleSaveClick = () => {
    handleAddNote(text);
    setText("");
    setCount(200);
    setAddDiv(!addDiv)
  };


  const handleClick = () => {
    setAddDiv(!addDiv);
  };

  return (
    <>
      {addDiv ? (
          <div className="Add-Note show"   >
          <ImCross  style={{marginLeft:"98%", marginTop:"0%" , width:"30px" , color:"#fff" , cursor:"pointer" , color:"#252525"}} onClick={handleClick} />
          <textarea
          style={{color:"black", whiteSpace:"pre-wrap"}}
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
      ) : (
        <></>
      )}
      <div className="addNote">
        <FaPlus size={30} onClick={handleClick}  />
      </div>
    </>
  );
};

export default AddNote;
