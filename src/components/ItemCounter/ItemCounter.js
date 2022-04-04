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
        <div className='card container card border-warning mb-3' style={{ width: 250 }}>
            <p style={{ textAlign: "center" }}>Aceite Elaion W40</p>
            <hr />
            <div className='card-body'>
                <div className='row'>
                    <div className='col-4 mb-3'>
                        <button className="btn btn-primary" onClick={decrement}>-</button>
                    </div>
                    <div className='col-4 mb-3' >
                        <p style={{ textAlign: "center" }}>{count}</p>
                    </div>
                    <div className='col-4'>
                        <button className="btn btn-primary" style={{ align: "right" }} onClick={increment}>+</button>
                    </div>
                </div>
                <button className="btn btn-outline-primary btn-lg" onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Counter