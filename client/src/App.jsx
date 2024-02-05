// import React from "react";
// import { BrowserRouter as Routes, Route, Outlet } from 'react-router-dom';
// import Navbar from "./components/Navbar";
// import SearchBooks from "./pages/SearchBooks";
// import SavedBooks from "./pages/SavedBooks";
// import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink,} from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Navbar />
//       <Outlet>
//         <>
//           <Routes>
//             <Route 
//               path='/' 
//               element={<SearchBooks />} 
//             />
//             <Route 
//               path='/saved' 
//               element={<SavedBooks />} 
//             />
//             <Route 
//               path='*'
//               element={<h1 className='display-2'>Wrong page!</h1>}
//             />
//           </Routes>
//         </>
//       </Outlet>
//     </ApolloProvider>
//   );
// }
import './App.css';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;