import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  MenuTop  from './components/menuTop';


//PAGES

import Home from './pages/home';
import NewMovies from './pages/newMovies';
import Popular from './pages/popular';
import Search from './pages/search/search';
import Movie from './pages/movie';
import Error404 from './pages/error404';



function App() {

  const { Header, Content } = Layout;

  return (
    <Layout>
      <Router>
        <Header style={{ zIndex: 1 }}>
          <MenuTop />
        </Header>
        <Content>

          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>

            <Route path="/new-movies" exact={true}>

              <NewMovies />

            </Route>
            <Route path="/popular" exact={true}>
              <Popular />
            </Route>

            <Route path="/search" exact={true}>
              <Search />
            </Route>

            <Route path="/movie/:id" exact={true}>
              <Movie />
            </Route>

            <Route path="*">
              <Error404 />
            </Route>
          </Switch>

        </Content>
      </Router>
    </Layout>
  );
}

export default App;

