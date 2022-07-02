import {render, screen} from '@testing-library/react';
import {GifGrid} from '../../src/components';
import {useFetchGifs} from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {

    const category = 'Goku';

    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('Debe de mostrar el items cuando se cargan las imágenes', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Goku',
                url: 'https://localhost/goku.gif'
            },
            {
                id: 'DEF',
                title: 'Vegeta',
                url: 'https://localhost/vegeta.gif'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render( <GifGrid category={category}/> );
        expect(screen.getAllByRole('img').length).toBe(gifs.length);


    });

});


