import {fireEvent, render, screen} from '@testing-library/react';
import {AddCategory} from '../../src/components';

describe('Pruebas en <AddCategory/>', () => {

    test('debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={ () => {} } />);
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'test' } } );

        expect( input.value ).toBe('test');

    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'test';

        render(<AddCategory onNewCategory={ () => {} } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');

    });
});
