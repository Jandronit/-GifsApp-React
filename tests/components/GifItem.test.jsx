import {render, screen} from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Pruebas en <GifItem/>', () => {

    const title = 'Titulo del GIF';
    const url = 'https://media1.giphy.com/media/3o7btZGKQnB9XQqQiY/giphy.gif';

    test('Debe de hacer match con el snapshot', () => {

        const { container } = render( <GifItem title={ title } url={ url } /> );
        expect(container).toMatchSnapshot();

    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {

        render( <GifItem title={ title } url={ url } /> );
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

    test('Debe de mostrar el titulo con el texto indicado', () => {

            render( <GifItem title={ title } url={ url } /> );
            expect( screen.getByText(title) ).toBeTruthy();
    });

});
