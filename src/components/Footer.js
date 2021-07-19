import React from "react";
import { Link } from "react-router-dom";
import SearchFormTerm from './Footer';

export default function Footer({setAlpabetTerm}) {
  return (
    <footer className="footer">
      <SearchFormTerm setAlpabetTerm={setAlpabetTerm}/>
    </footer>
  );
}
