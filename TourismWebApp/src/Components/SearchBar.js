import { useState } from "react";

const SearchBar = ({onSearch}) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add text')
            return
        }

        onSearch({text})
        setText('')
    }

    return (
        <form className='add-form' onSubmit = {onSubmit}>
            <div className='form-control'>
            <label>
                Search from one of the given attributes: Food & Drink, Fun/Play, Shop, Relax, Nature, Sport
            </label>
            <input
                type='text'
                placeholder='Food & Drink, Fun/Play, Shop, Relax, Nature, Sport'
                value = {text}
                onChange = {(e) => {
                    setText(e.target.value)
                }}
            />
            </div>

            <button type="submit" className='btn btn-block'>
                Search
            </button>
        </form>

    )
};

export default SearchBar;