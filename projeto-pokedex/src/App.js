import React from "react";
import { AppRouter } from "./Routes/AppRouter";
import GlobalContext from "./contexts/GlobalContext";
import GlobalState from "./contexts/GlobalState";

const App = () => {
 
  return (
    <div>
     <GlobalState>
     <AppRouter 
    
    //  pokedex={pokedex} 
    //  addToPokedex={addToPokedex} 
    //  removeFromPokedex={removeFromPokedex} 
  
     />
     </GlobalState>
    </div>
  );
}

export default App;
