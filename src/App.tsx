import styled from 'styled-components';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import TodoProvider from './context/TodoContext';
import TodoSearch from './components/TodoSearch';
import Footer from './components/Footer';

const AppWrapper = styled.div`
  margin: 0 auto;
  max-width: 650px;
  height: 98vh;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <TodoProvider>
      <AppWrapper>
        <TodoSearch />
        <TodoAdd />
        <TodoList />
        <Footer />
      </AppWrapper>
    </TodoProvider>
  );
}

export default App;
