import React from "react";

export default function SearchFormTerm({ setSearchTerm, setAlpabetTerm }) {

   const onAlphabetClick = (e) => {
      setAlpabetTerm(e.target.value);
    }

  const prepareAlphabets = () => {
        let result = [];
        for(let i=97; i<123; i++) {
          result.push(
            <button className="btn" type="button" key={i} 
              onClick={(e) => onAlphabetClick(e)} 
              value={String.fromCharCode(i)} >
              {String.fromCharCode(i)}
            </button>
          )
        }
        return result;
      }

  return (
    <footer className="footer">
      <h4 className="section-title">Пошук за алфавітом</h4>
            <ul className="items">
             {prepareAlphabets()}
            </ul>
    </footer>
  );
}
