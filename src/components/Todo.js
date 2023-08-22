import React, { useState } from 'react'

const Todo = () => {
    const [inputData, setInputData] = useState("")
    const [Items, setItems] = useState("")

    const addItems = () => {
        // e.preventDefault;
        if (!inputData) {
            alert("plz enter data")
        } else {
            setItems([...Items, inputData])
        }
    }

    return (
        <>
            <div>
                <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} />
                <button onClick={addItems}>Add Item</button>
            </div>

            <div className="show-Items">
                {
                    Items.map((curEle,index)=>{
                     return(
                        <h3>{curEle}</h3>
                     )
                    })
                }
                {/* {
                    Items.map((curEle, index) => {
                        return (
                            <><h3>{curEle}</h3><span>Edit</span><span>Delete</span></>
                        )
                    })
                } */}

            </div>
            <div>
                <button>Remove All</button>
            </div>


        </>
    )
}

export default Todo