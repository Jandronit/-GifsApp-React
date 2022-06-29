import {useState} from 'react';
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Goku']);

    const onAddCategories = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>

            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={ onAddCategories }
            />

            {
                categories.map( category => (
                    <GifGrid
                        key = { category }
                        category = { category }
                    />
                ))
            }

        </>
    );
}
