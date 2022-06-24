import { useState } from 'react';
import {AddCategory} from './components/AddCategory';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch', 'Samurai X', 'Dragon Ball' ]);

    const onAddCategories = () => {
        // categories.push('Valorant');
        setCategories([...categories, 'Valorant']);
        // setCategories(cat => [...cat, 'Valorant']);
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory/>

            {/* Listado de Gif */}
            <button onClick={ onAddCategories }>Add</button>
            <ol>
                {
                    categories.map(category => {
                    return <li key={category}>{category}</li>
                })
                }
            </ol>
                {/* Gif Item */}


        </>
    );
}
