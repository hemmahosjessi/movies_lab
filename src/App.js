import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Movies from './components/Movies'
import MovieDetails from './components/MovieDetails'
import Header from 'components/Header'


export const App = () => {

  return (
    <>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Movies />
        </Route>
        <Route path='/movies/:id' exact>
          <MovieDetails/>
        </Route>
      </Switch>
     </BrowserRouter>
     </>
  )
}

