import { useState } from 'react';
import {AddCategory} from './components/AddCategory';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch', 'Samurai X', 'Dragon Ball' ]);

    const onAddCategories = (e) => {
        // categories.push('Valorant');
        setCategories([...categories, e]);
        // setCategories(cat => [...cat, 'Valorant']);
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory setCategories={ setCategories }/>

            {/* Listado de Gif */}
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
