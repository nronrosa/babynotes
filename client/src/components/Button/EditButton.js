import React from 'react';

export const EditButton = ({ index, editRow, handleEditClick, handleSaveClick, myId }) => {
    let editText = "edit";
    if (index === editRow) {
        editText = "save";
    }
    return <button onClick={() => {
        if (editText === "save") { handleSaveClick(myId) }
        else { handleEditClick(index) }
    }} className="btn btn-success">{editText}</button>
}
