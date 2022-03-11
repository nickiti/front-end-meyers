import './App.css';
import FilterContainer from './components/FilterContainer';
import StoreContainer from './components/StoreContainer';

function App() {
  return (
    <>
    <div className='flex flex-row'>
      <FilterContainer/>
      <StoreContainer/>
    </div>
    </>
  )
}

export default App;
