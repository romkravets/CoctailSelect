import React, {useState, useEffect, useContext } from "react";
import {Route, Switch, Redirect, useHistory } from "react-router-dom";

import Home from "./pages/Home";
import SingleCocktail from "./pages/SingleCocktail";
import Navbar from "./components/NavBar";
import CocktailsList from "./components/CocktailList";
import SearchFormTerm from './components/SearchFormTerm';
import PopUp from './components/PopUp';
import Modal from './components/UI/Modal';

import listContext from './list_context';

export const context = React.createContext({isTheam: true});

const App = () => {

  const { cartCount, cart, removeAll } = useContext(listContext);

  const history = useHistory();

  const [theam, setTheam] = useState(true);
  const [alpabetTerm, setAlpabetTerm] = useState(null);

  const [input, setInput] = useState("");

  const [modal, setModal] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [redirect, setRedirect] = useState(false);

  const [item, setItem] = useState([]);

  const [modalContent, setModalContent] = useState("Added to bascket");

  const handleSubmit = e => {
    e.preventDefault();
    getDrinks();
  };

   async function getDrinks() {
       let cocktail = input;
        try {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`);
        const data = await res.json();
        const { drinks } = data;

          if (drinks) {
          const newCocktails = drinks.map((element) => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass,
            } = element;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          });
          setItem(newCocktails);
          setRedirect(true);
          setInput('');

        } else {
          setItem([]);
        }
      } catch (error) {
    }
      setLoading(false);
      setRedirect(false);
  }

   useEffect(() => {
    setLoading(true);
    async function getDrinksAlphabet() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${alpabetTerm}`
        );
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const newCocktails = drinks.map((element) => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass,
            } = element;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          });
          setItem(newCocktails);
          setRedirect(true);

        } else {
          setItem([]);
        }
      } catch (error) {
      }
      setLoading(false);
      setRedirect(false);

    }
    getDrinksAlphabet();

  }, [alpabetTerm]);

  if (redirect) {
    return <Redirect to={{
      pathname: "/search",
      count: item.length
    }}/>
  }

  const toggleModal = () => {
    if  (cart.length === 0) {
      debugger;
      setModal(false);
      setModalContent("First select cocteils");
      setOpen(true);
      const timeout = setTimeout(() => {
        setOpen(false);
        setModalContent("Added to bascket");   
      }, 1000);
      return () => clearTimeout(timeout);
    } else {
      setModal(true)
      setOpen(false);
      setModalContent("Added to bascket");
    }
  }

  const toggleCloseModal = () => setModal(false);

  const hendlerBy = () => {
     console.log(JSON.stringify(cart));
     setModal(false);
     removeAll();
     cart.splice(0, cart.length);
     history.push({pathname: "/"});
  }

  const getOtherTheam = () => {
    setTheam(!theam);
      if (theam === true) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
   };

  return (
    <div>
      <context.Provider value={theam}>
        <Navbar 
          changeTheme={getOtherTheam} 
          setInput={setInput} 
          input={input} 
          handleSubmit={handleSubmit}
          toggleModal={toggleModal}
          cartCount={cartCount}
        />
      </context.Provider>

      <main>
      <Switch>
          <Route exact path="/">
            <Home setOpen={setOpen}/>
          </Route>
          <Route exact path="/search">
            <CocktailsList loading={loading} cocktails={item} setOpen={setOpen}/>
          </Route>
          <Route exact path="/cocktail/:id">
            <SingleCocktail loading={loading} cocktails={item} setOpen={setOpen}/>
          </Route>
      </Switch>
      </main>
      <SearchFormTerm setAlpabetTerm={setAlpabetTerm}/>
      { modal && (
        <PopUp 
          setModal={setModal} 
          toggleModal={toggleModal} 
          hendlerBy={hendlerBy} 
          toggleCloseModal={toggleCloseModal}/>
      )}
      {
        isOpen  && (
          <Modal setOpen={setOpen} isOpen={isOpen} content={modalContent}/>
          )
        }
  </div>
  );
}

export default App;