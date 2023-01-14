import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;
function App() {
  return (
    <Container>
      <header className="App-header">
        <p>Hello starter.</p>
      </header>
    </Container>
  );
}

export default App;
