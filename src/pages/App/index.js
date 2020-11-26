import React,{ Component } from 'react';
import css from './style.module.css';
import Toolbar from '../../components/Toolbar';
import BurgerPage from '../BurgerPage';
import SideBar from '../../components/SideBar';
class App extends Component {
  state = {
    showSiderBar:false
  };

  toggleSideBar = () => {
    this.setState(prevState => {
      return {showSiderBar: !prevState.showSiderBar}
    });
  }
  render(){
    return(
      <div>
       <Toolbar toggleSideBar={this.toggleSideBar}/>
       <SideBar showSiderBar={this.state.showSiderBar} toggleSideBar={this.toggleSideBar}/>
       <main className={css.Content}>
       <BurgerPage/>
       </main>
    </div>
    );
  }
}

export default App;
