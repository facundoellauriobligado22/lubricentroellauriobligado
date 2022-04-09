import { useState, useEffect } from 'react'

const Counter = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }


    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <div>
            < div className='row' >
                <div className='col-4 mb-3'>
                    <button className="btn btn-primary float-start" onClick={decrement}>-</button>
                </div>
                <div className='col-4 mb-3' >
                    <p style={{ textAlign: "center" }}>{count}</p>
                </div>
                <div className='col-4 mb-3 '>
                    <button className="btn btn-primary float-end" onClick={increment}>+</button>
                </div>
            </div >
            <div class="d-grid gap-2">
            <button className="btn btn-outline-primary btn-lg" onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Counter


