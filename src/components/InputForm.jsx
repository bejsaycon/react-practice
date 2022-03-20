import React from 'react'

function InputForm(props) {
  return (
    <form onSubmit={handleSubmit}>
        <input
          className="input"
          name="seed"
          placeholder="Enter random string"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          required
        />
        <button type="submit"><i className="fas fa-search"></i></button>
      </form>
  )
}

export default InputForm