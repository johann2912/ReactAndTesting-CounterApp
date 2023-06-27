import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Test <CounterApp />', () => {

    const initialValue = 23;

    test('Should match with snapshot', () => {
        const { container } = render(<CounterApp value={ initialValue } />)

        expect(container).toMatchSnapshot();
    })

    test('Should show value initial is an 100 <CounterApp value={100} />', () => {
        render(<CounterApp value={ 100 } />)

        expect(screen.getByText(100)).toBeTruthy();
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100')
    })

    test('increment button +1', () => {
        render(<CounterApp value={ initialValue } />);
        fireEvent.click(screen.getByRole('button', { name: 'btn-add'}));
        expect(screen.getByText('24')).toBeTruthy();
    })

    test('decrement button -1', () => {
        render(<CounterApp value={ initialValue } />);
        fireEvent.click(screen.getByRole('button', { name: 'btn-substrac'}));
        expect(screen.getByText('22')).toBeTruthy();
    })

    test('reset button', () => {
        render(<CounterApp value={ initialValue } />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset'}));
        
        expect(screen.getByText('23')).toBeTruthy();
    })

})