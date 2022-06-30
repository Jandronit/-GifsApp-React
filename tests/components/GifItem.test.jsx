import { render } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Pruebas en <GifItem/>', () => {

    const title = 'Titulo del GIF';
    const url = 'https://media1.giphy.com/media/3o7btZGKQnB9XQqQiY/giphy.gif';

    test('Debe de hacer match con el snapshot', () => {

        const { container } = render( <GifItem title={ title } url={ url } /> );
        expect(container).toMatchSnapshot();

    });

});
