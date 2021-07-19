import React from "react";

export default function SearchForm({ setInput,  handleSubmit, input }) {
    const handleChange = e => {
    setInput(e.target.value);
  };

  return (
    <section className="section section-search">
       <form onSubmit={handleSubmit}>
            <input
              placeholder="eg. Gin or Margarita"
              value={input}
              className="input"
              type="text"
              onChange={handleChange}
            />
            <input className="btn" type='submit' value='GO' />
          </form>
    </section>
  );
}
