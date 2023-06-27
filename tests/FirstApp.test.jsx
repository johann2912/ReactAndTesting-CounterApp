import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Test in <FirstApp />', () => {

    // test('Should match snapshot', () => {
    //     const title = 'Hola, Soy Goku'
    //     const { container } = render( <FirstApp title={ title } /> )

    //     expect(container).toMatchSnapshot();
    // });

    test('the title must be displayed in an <h1>', () => {
        const title = 'Hola, Soy Goku'
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> )
        
        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);

        expect(getByTestId('test-title').innerHTML).toContain(title);
    })

    test('It must show the title sent by Props', () => {
        const title = 'Hola, Soy Goku';
        const subTitle = 'Soy un subtitulo'
        const { getAllByText } = render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle } 
            /> 
        )
        
        expect(getAllByText(subTitle).length).toBe(2);
    })
    

});