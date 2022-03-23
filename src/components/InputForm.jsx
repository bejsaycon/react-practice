import React from 'react'

function InputForm({handleSubmit, inputRef}) {
  return (
    <form className='form-container' onSubmit={handleSubmit}>
        <input
          className="input"
          name="seed"
          placeholder="Enter random string"
          required
        />
        <button type="submit"><i className="fas fa-search"></i></button>
      </form>  
  )
}

export default InputForm