import { useState } from 'react';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch', 'Samurai X', 'Dragon Ball' ]);

    const onAddCategories = () => {
        // categories.push('Valorant');
        setCategories([...categories, 'Valorant']);
        // setCategories(cat => [...cat, 'Valorant']);
    }

    console.log(categories);
    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}

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
