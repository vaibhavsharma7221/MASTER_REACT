import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Message from './components/Message';
import Count from './components/Count'
import FunctionClick from './components/functionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline/>
      {/* <Inline/> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}

      {/* <FunctionClick></FunctionClick>
      <ClassClick/> */}
      {/* <Greet name="Diana" charactername="wonderwomen" />
      <Welcome name="Bruce" heroName="batman" /> */}

      {/*<Count></Count>
      <Message/>
       <Greet name="Bruce" charactername="batman">
        this is children props
      </Greet>
      <Greet name="Clark" charactername="superman">
        <button>action</button>
      </Greet>
      <Greet name="Diana" charactername="wonderwomen"/>
      
      <Welcome name="Bruce" heroName="batman"/> 
      <Welcome name="Clark" heroName="Superman"/> 
      <Welcome name="diana" heroName="wonderwoman"/> 

    <Hello/>*/}

    </div>
  );
}

export default App;
