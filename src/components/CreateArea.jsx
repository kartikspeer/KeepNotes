import React, { useState, useEffect } from "react";
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';
import { Zoom } from "@material-ui/core";

function CreateArea(props) {

  const [isExpanded,setisExpanded] = useState(false);

  const [noteText, setnoteText] = useState({ title: "", content: "" });

  const [inEdit,setEdit] = useState(false);
  // setEdit(exp);
  // I was struggling to apply edit function where i have to pass states between to child components
  // and use that to initialize a state. useState is like a constructor.
  // to use dependent intialization use useEffect.
  // it worked.
  useEffect(() => {
    setEdit(props.inEditMode);
  }, [props]);

  useEffect(() => {
    setnoteText({title: props.isEditing.title, content: props.isEditing.content});
  },[props])

  // console.log(exp);
  // console.log(inEdit);

  function handleTitle(event) {
    const { name, value } = event.target;
    setnoteText((prevnoteText) => {
      return { ...prevnoteText, [name]: value };
    });
  } 
  
  function expand(){
    // console.log(isExpanded);
    setisExpanded(!isExpanded);
  }

  return (
    <div>
      {(isExpanded || inEdit) && (
        <form className="create-area">
          <input
            name="title"
            onChange={handleTitle}
            value={noteText.title}
            placeholder="Title"
          />
          <textarea
            onChange={handleTitle}
            name="content"
            placeholder="Note"
            value={noteText.content}
            rows="3"
          />
          <Zoom in={isExpanded || inEdit}>
            <Fab
              onClick={(event) => {
                props.onAdd(noteText);
                setnoteText({ title: "", content: "" });
                event.preventDefault();
                setisExpanded(!isExpanded && !inEdit);
                setEdit(false);
                props.setEditMode(false);
                // console.log(inEdit);
              }}
            >
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
      )}
      <button onClick={expand} className="createButton">{!isExpanded?<AddIcon />:<CloseIcon/>}</button>
    </div>
  );
}

export default CreateArea;
