import React from 'react'
import { withPortfolioState } from '../../context/PortfolioState'

const Card = (props) => {
    const { stock, entry, exit, handleUpdate, handleChange } = props
    return (
        <form className="grid__item" onSubmit={(e) => handleUpdate(e, {stock, entry, exit})}>
            <div>
                <label>Stock: </label>
                <input type="text" name="stock" value={stock} onChange={handleChange} /> 

                <label>Desired Entry: </label>
                <input type="text" name="entry" value={entry} onChange={handleChange} />

                <label>Desired Exit: </label>
                <input type="text" name="exit" value={exit} onChange={handleChange} />
            </div>

            <div>
                <button>Update</button>
                <button>Delete</button>
            </div>
        </form>
    )
}

export default withPortfolioState(Card)
