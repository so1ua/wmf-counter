import './App.css';

import useStore from 'container/Store'


function App() {
  const {increment} = useStore();
  return (
    <div style={{ display: 'flex' }}>
      Counter:
        <div
          style={{
            cursor: 'pointer',
            paddingLeft: 10,
            color: 'blue',
            userSelect: 'none'
          }}
          onClick={increment}
          >
          +
        </div>
    </div>
  );
}

export default App;
