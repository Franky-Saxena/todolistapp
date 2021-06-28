//🔴 Create Awesome Portfolio Filter Image Gallery in React JS
import React, { useState } from 'react';
import '../TabMenu/tab.css';
import Menu from './menu';
import Menuitems from './Menuitems';

const GalleryReact = () => {

    const [items, setItems] = useState(Menu);

    const filterItems = (categItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    };

    return (
        <>
            <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
            <hr />

            <div className="menu-tabs container">
                <div className="menu-tabs d-flex justify-content-around">
                    <button className="btn btn-warning" onClick={() => filterItems('breakfast')}>Breakfast</button>
                    <button className="btn btn-warning" onClick={() => filterItems('lunch')}>Lunch</button>
                    <button className="btn btn-warning" onClick={() => filterItems('evening')}>Evening</button>
                    <button className="btn btn-warning" onClick={() => filterItems('dinner')}>Dinner</button>
                    <button className="btn btn-warning" onClick={() => setItems(Menu)}>All</button>
                </div>
            </div>

            {/* my main items section */}
            <Menuitems />
    

        </>
    );
}

export default GalleryReact;
