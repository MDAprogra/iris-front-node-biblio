import { Button } from '../../components/Button';
import { useAPI } from '../../hooks/useAPI';
import { LivreItem } from './items/LivreItem';

function App() {
  const { isloading, donnees, fetch } = useAPI('livres', true);

  return (
    <>
      {isloading ? (
        <h3>LOADING ...</h3>
      ) : (
        <>
          <ul>
            {donnees?.data?.map((data) => (
              <LivreItem
                isbn={data.ISBN}
                key={data.ISBN}
                onDelete={() => fetch()}
              >
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
