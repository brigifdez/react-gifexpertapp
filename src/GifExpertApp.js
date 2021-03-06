import React, { useState } from 'react';
import { Fragment } from "react";
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories,setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories( [ 'HunterXHunter',...categories ] );
    //     setCategories ( cats => [ ...cats, 'HunterXHunter ']);
    // }

    return(
        <Fragment >
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category } />
                    ))
                }
            </ol>
        </Fragment>
    )
}

export default GifExpertApp;