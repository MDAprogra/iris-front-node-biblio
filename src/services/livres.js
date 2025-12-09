export const wait = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 2000);
  });
};

export const getLivres = async () => {
  //   await wait();
  const reponse = await fetch('http://localhost:3000/livres');

  if (!reponse.ok) {
    throw Error('Loading livres data failed');
  }
  return await reponse.json();
};

export const getLivreDetail = async (isbn) => {
  //   await wait();
  const reponse = await fetch(`http://localhost:3000/livres/${isbn}`);

  if (!reponse.ok) {
    throw Error('Loading livres data failed');
  }
  return await reponse.json();
};

export const getAuteurs = async () => {
  //await wait();
  const reponse = await fetch('http://localhost:3000/auteurs');

  if (!reponse.ok) {
    throw Error('Loading auteurs data failed');
  }
  return await reponse.json();
};

export const getAuteurDetail = async (id) => {
  //await wait();
  const reponse = await fetch(`http://localhost:3000/auteurs/${id}`);

  if (!reponse.ok) {
    throw Error('Loading auteur data failed');
  }
  return await reponse.json();
};
