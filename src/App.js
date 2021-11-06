import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Movies from './components/Movies'
import MovieDetails from './components/MovieDetails'
// import Header from 'components/Header'
import StartPage from 'components/StartPage'




export const App = () => {

  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={StartPage}/>
        <Route exact path='/movies/' component={Movies}/>
        <Route path='/movies/:id' component={ MovieDetails }/>
      </Switch>
     </BrowserRouter>
     </>
  )
}

// export const App = () => {

//   return (
//     <>
//     <BrowserRouter>
//       <Switch>
//         <Route exact path='/'>
//           <Header />
//           <Movies />
//         </Route>
//         <Route path='/movies/:id' component={ MovieDetails }/>
//       </Switch>
//      </BrowserRouter>
//      </>
//   )
// }

