import React from 'react'

function InputForm(props) {
  return (
    <form className='form-container' onSubmit={props.handleSubmit}>
        <input
          className="input"
          name="seed"
          placeholder="Enter random string"
          onChange={props.onChange}
          value={props.input}
          required
        />
        <button type="submit"><i className="fas fa-search"></i></button>
      </form>  
  )
}

export default InputForm