import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import HelloWorld2 from './components/HelloWorld2';
import LoopEx from './components/LoopEx';
import LoopEx2 from './components/LoopEx2';
import ProductList from './components/products/ProductList';

function App() {

  const products = [
    {pno:1 , pname:'상품1' , price: 3000},
    {pno:2 , pname:'상품2' , price: 4000},
    {pno:3 , pname:'상품3' , price: 5000},
  ]

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* 컴포넌트 */}
        {/* <LoopEx></LoopEx> */}
        {/* <LoopEx2 start={1} end={10}></LoopEx2> */}
        <ProductList/>
      </header>
      
    </div>
  );
}

export default App;
