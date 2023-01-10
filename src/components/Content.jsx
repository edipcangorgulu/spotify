import NavBar from './NavBar';
import Home from 'views/Home';
import Search from 'views/Search';
import Collection from 'views/Collection';
import { Switch, Route } from 'react-router-dom';


const Content = () => {
  return (

    <main className='flex-auto overflow-auto'>
      <NavBar />
      <div className='px-8 py-5'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/collection'>
            <Collection />
          </Route>
        </Switch>
      </div>
    </main>


  )
}

export default Content