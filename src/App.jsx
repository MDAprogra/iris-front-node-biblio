import Button from './assets/components/Button';
import Title from './assets/components/title';

function App() {
  return (
    <Title name="Biblio">
      <Button onClick={() => alert('Default onClick !')}>VALIDATION</Button>
    </Title>
  );
}

export default App;
