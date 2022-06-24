import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

function Note(props){
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>

            <button className="edit-button" onClick={()=>{
                props.setEditMode(true);
                props.editNote(props);
            }}><EditOutlinedIcon/></button>

            <button className="delete-button" onClick = {()=>{
                props.onDelete(props.id);
            }}><DeleteIcon /></button>
        </div>
    );
}

export default Note;