import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home/'
import { BrowserRouter, Link, Switch, Route, Router, useParams } from 'react-router-dom'
import Favourites from './pages/Favourites'
import Profile from './pages/Profile'
import Post from './pages/Post'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/favourites' component={Favourites} />
      <Route exact path='/posts/:username' component={Profile} />
      <Route exact path='/posts/:username/:slug' component={Post} />
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
