import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Test in <FirstApp />', () => {

    const title = 'Hola, Soy Goku';
    const subTitle = 'Soy un subtitulo';

    test('Should match snapshot', () => {
        const { container } = render(
            <FirstApp
                title={title}
            />
        )

        expect(container).toMatchSnapshot();
    });

    test('should show the message "Hola, Soy Goku"', () => {
        render(<FirstApp title={title} />)
        // screen.debug()
        expect(screen.getByText(title)).toBeTruthy();
    })

    test('should show title in an <h1>', () => {
        render(<FirstApp title={title} />)

        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title)
    })

    test('Should show the title sent by Props', () => {
        render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />
        )

        expect( screen.getAllByText(subTitle).length).toBe(2);
    })

});