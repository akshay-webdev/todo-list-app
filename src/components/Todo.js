import React, { useState } from 'react';
import './Todo.css'; // Import your custom CSS file

const Todo = () => {
    // State variables
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);

    // Function to add or update items
    const addItems = () => {
        if (!inputData) {
            alert("Please enter data");
        } else {
            if (editIndex === -1) {
                // Add a new item
                setItems([...items, inputData]);
            } else {
                // Update the edited item
                const newItems = [...items];
                newItems[editIndex] = inputData;
                setItems(newItems);
                setEditIndex(-1); // Reset editIndex after updating
            }
            setInputData(""); // Clear input field
        }
    };

    // Function to delete an item
    const deleteItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1); // Remove the item at the specified index
        setItems(newItems); // Update the items state
    };

    // Function to start editing an item
    const startEditing = (index) => {
        setInputData(items[index]); // Pre-fill the input field with the item's text
        setEditIndex(index); // Set the index of the item being edited
    };
    //Delete All items
    const removeAll = () => {

        // Method 1
        // if(items.length>0){
        //   const confirmDelete=window.alert("Are you sure,want to delete all items ?");
        //   if(confirmDelete){
        //     setItems([]); 
        //   }

        // }

        // Method 2
        alert("Are you sure,want to delete all items ?")
        setItems([]);

    }

    return (
        <div className="container mt-5">
            <h4 className='text-center text-danger pb-3'>To-Do List</h4>
            {/* Input field and Add/Update button */}
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter an item"
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                />
                <button className="btn btn-primary" onClick={addItems}>
                    {editIndex === -1 ? "Add Item" : "Update Item"}
                </button>
            </div>

            {/* Display items */}
            <div className="show-items">
                {items.map((curEle, index) => {
                    return (
                        <div className="item" key={index}>
                            <h3>{curEle}</h3>
                            <div>
                                {/* Edit and Delete buttons */}
                                <button className="btn btn-secondary" onClick={() => startEditing(index)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => deleteItem(index)}>Delete</button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div>
                <button className="btn btn-warning" onClick={removeAll} disabled={items.length===0}>Remove All</button>
            </div>
        </div>
    );
};

export default Todo;
