import React,{ useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
    const [items, setItems] = useState([]);
    const [isEditing, setEditing] = useState({ title: "", content: "" });
    const [inEditMode,setEditMode] = useState(false);

    function addItem(noteText) {
        setItems(prevItems => {
        return [...prevItems, noteText];
        });
    }

    function handleDelete(id){
        setItems(previtems =>{
        return previtems.filter((noteItem,index)=>{
            return index !== id;
        })
        })
    }

    function handleEdit(data){
        // setEditing(true);
        // addItem(noteText);
        // const editedItem = items.filter((prevItems,index) =>
        //     index === data.id
        // );
        // console
        // setItems(prevItems => {
        //     return [...prevItems, editedContent];
        // });
        console.log(data);
        // console.log(items);
        // console.log(editedItem);
        // const { name, value } = editedItem;
        // const { name, value } = editedItem;
        setEditing({title: data.title, content: data.content});
        // console.log(isEditing);
        setEditMode(true);
        handleDelete(data.id);
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addItem} setEditMode={setEditMode} inEditMode={inEditMode} isEditing = {isEditing}/>
            {items.map((noteItem,index) => {
                return (
                    <Note 
                        key={index} 
                        id = {index} 
                        title={noteItem.title} 
                        content={noteItem.content} 
                        onDelete={handleDelete} 
                        setEditMode = {setEditMode}
                        editNote = {handleEdit}
                    />);
            })}
            <Footer />
        </div>
    );
}

export default App;


