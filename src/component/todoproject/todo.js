// 🔴 Updated TODO LIST App with Add, Delete, Edit, LocalStorage using React and Hooks
import React, { useState } from 'react';
import todo from '../images/todo.png';
import './App.css';

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);

    const addItem = () => {
        if (!inputData) {
            alert('plz fill data');
        } else if (inputData && !toggleSubmit) {
            setItems(
                items.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: inputData };
                    }
                    return elem;
                })
            );
            setToggleSubmit(true);
            setInputData("");
            setIsEditItem(null);
        } else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputData]);
            setInputData("");
        }
    };

    //delete the items

    const deleteItem = (index) => {
        const updateditems = items.filter((elem) => {
            return index !== elem.id;
        });
        setItems(updateditems);
    };

    //edit the item

    const editItem = (id) => {
        let newEditItem = items.find((elem) => {
            return elem.id === id;
        });
        console.log(newEditItem);

        setToggleSubmit(false);
        setInputData(newEditItem.name);
        setIsEditItem(id);
    };

    //remove all
    const removeAll = () => {
        setItems([]);
    };

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="todologo" />
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="✍ Add Items..."
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        {
                            toggleSubmit ? <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem} ></i> :
                                <i className="far fa-edit add-btn" title="Update Item" onClick={addItem} ></i>
                        }
                    </div>

                    <div className="showItems">

                        {
                            items.map((elem) => {
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <h3>{elem.name}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-edit add-btn" title="Edit Item" onClick={() => editItem(elem.id)} ></i>
                                            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(elem.id)} ></i>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                    {/* clear all button */}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span> CHECK LIST </span></button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Todo;









































































//🔴 Build Awesome Todo App With REACT Using Hooks
// import React, { useState } from 'react';
// import todo from '../images/todo.png';
// import '../App.css';

// const Todo = () => {

//     const [inputData, setInputData] = useState('');
//     const [items, setItems] = useState([]);

//     const addItem = () => {
//         if (!inputData) {

//         } else {
//             setItems([...items, inputData]);
//             setInputData("");
//         }
//     };

//     //delete the items

//     const deleteItem = (id) => {
//         console.log(id);
//         const updateditems = items.filter((elem, ind) => {
//             return ind !== id;
//         });
//         setItems(updateditems);
//     };

//     //remove all
//     const removeAll = () => {
//         setItems([]);
//     };

//     return (
//         <>
//             <div className="main-div">
//                 <div className="child-div">
//                     <figure>
//                         <img src={todo} alt="todologo" />
//                         <figcaption>Add Your List Here ✌</figcaption>
//                     </figure>

//                     <div className="addItems">
//                         <input type="text" placeholder="✍ Add Items..."
//                             value={inputData}
//                             onChange={(e) => setInputData(e.target.value)}
//                         />
//                         <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem} ></i>
//                     </div>

//                     <div className="showItems">

//                         {
//                             items.map((elem, ind) => {
//                                 return (
//                                     <div className="eachItem" key={ind}>
//                                         <h3>{elem}</h3>
//                                         <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(ind)} ></i>
//                                     </div>
//                                 )
//                             })
//                         }

//                     </div>

//                     {/* clear all button */}
//                     <div className="showItems">
//                         <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span> CHECK LIST </span></button>
//                     </div>

//                 </div>
//             </div>
//         </>
//     );
// }

// export default Todo;