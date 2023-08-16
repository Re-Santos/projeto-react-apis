// import React, {useState} from 'react'
// import Header from '../../Componentes/Header/Header';
// import{useHistory} from 'react-router-dom'


// const PokemonDetailPage = () => {
//   const [isCaptured, setIsCaptured]= useState('false');
//   const history = useHistory();

//   const toggleCapture = () =>{

//     setIsCaptured(prevState =>!prevState);
//   }

//   return (
//     <>
//     <div>
//        <Header
//         leftButton={<button onClick={() => history.goBack()}>Back</button>}
//         rightButton={
//           <button onClick={toggleCapture}>
//             {isCaptured ? 'Remove from Pokedex' : 'Add to Pokedex'}
//           </button>
//         }
//         />
//       <h1>Pokemon Detail Page</h1>
//     </div>
//     </>
//   )
// }

// export default PokemonDetailPage
