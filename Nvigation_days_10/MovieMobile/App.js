
import Home from './components/home';
import {createAppContainer, reactAppContainer} from  'react-navigation'
import {createStackNavigator, reactNavigationStack} from 'react-navigation-stack'
import Detail from './components/detail';


const AppNavigator=createStackNavigator({
  Home:{screen:Home},
  Detail: { screen: Detail }
})

const App = createAppContainer(AppNavigator);
export default  App;
  


