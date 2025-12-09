import { Button } from '../components/Button';
import { LivreItem } from '../components/LivreItem';
import Title from '../components/title';
import { useAPI } from '../hooks/useAPI';

function App() {
  const { isloading, donnees, fetch } = useAPI('livres');
  return (
    <>
      <Title>My Favorite Books</Title>
      {isloading ? (
        <h3>LOADING ...</h3>
      ) : (
        <>
          <ul>
            {donnees?.data?.map((data) => (
              <LivreItem isbn={data.ISBN} key={data.ISBN}>
                {data.titre}
              </LivreItem>
            ))}
          </ul>
          <Button onClick={() => fetch()}>Charger les données</Button>
        </>
      )}
    </>
  );
}

export default App;
