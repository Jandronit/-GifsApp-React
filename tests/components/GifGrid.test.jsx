import {render, screen} from '@testing-library/react';
import {GifGrid} from '../../src/components';

describe('Pruebas en <GifGrid/>', () => {

    const category = 'Goku';

    test('Debe de mostrar el loading inicialmente', () => {

        render( <GifGrid category={ category }  /> );
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );
    });

    test('Debe de mostrar el items cuando se cargan las imágenes', () => {


    });

});


