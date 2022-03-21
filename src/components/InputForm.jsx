import React from 'react'

function InputForm({handleSubmit, input, seed}) {
  return (
    <form className='form-container' onSubmit={handleSubmit}>
        <input
          ref ={input}
          className="input"
          name="seed"
          placeholder="Enter random string"
          defaultValue={seed}
          required
        />
        <button type="submit"><i className="fas fa-search"></i></button>
      </form>  
  )
}

export default InputForm