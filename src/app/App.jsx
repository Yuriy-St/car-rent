import { Fragment, useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import styled from '@emotion/styled';
import tw from 'twin.macro';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Title>Vite + React with Tailwind and Emotion/styled</Title>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Fragment>
  );
}

const Title = styled.h1(tw`
  text-3xl
  font-bold
  underline
`);

export default App;
