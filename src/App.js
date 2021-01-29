import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import NewPosts from './containers/NewPosts/NewPosts';
import EditPosts from './containers/EditPosts/EditPosts';
import ReadOnePost from './containers/ReadOnePost/ReadOnePost';

const App = () => {
  return (
   <BrowserRouter>
    <Switch>
      <Route path='/' exact component={MainPage}/>
      <Route path='/about' component={About}/>
      <Route path='/contacts' component={Contacts}/>
      <Route path='/add' component={NewPosts}/>
      <Route path='/more/:id' component={ReadOnePost}/>
      <Route path='/edit/:id' component={EditPosts}/>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
