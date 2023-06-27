import { useState } from 'react'
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);

    /**
     * add values for counter
     */
    const handleAdd = () => {
        setCounter(counter + 1);
    }

    /**
     * delete values for counter
     */
    const handleSubstract = () => setCounter(counter - 1);


    /**
     * reset count for counter 
     */
    const handleReset = () => setCounter(value);


    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button aria-label='btn-add' onClick={handleAdd} >
                +1
            </button>
            <button aria-label='btn-reset' onClick={handleReset} >
                Reset
            </button>
            <button aria-label='btn-substrac' onClick={handleSubstract} >
                -1
            </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 'Does not found value'
}