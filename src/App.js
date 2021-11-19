import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Component/MyNavbar';
import JsonDataDisplay from './MyPractice/MyTable';
import MyCard from './Component/MyCard';
import Content from './Component/Content';
import Bottom from './Component/Bottom';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Content /><br/>
      <MyCard /><br/>
      <JsonDataDisplay />
      <Bottom />
    </div>
  );
}

export default App;
