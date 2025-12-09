export const wait = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 2000);
  });
};

export const getLivres = async () => {
  //   await wait();
  const reponse = await fetch(
    'https://iris-node-biblio-production.up.railway.app/livres',
  );

  if (!reponse.ok) {
    throw Error('Loading livres data failed');
  }
  return await reponse.json();
};

export const getLivreDetail = async (isbn) => {
  //   await wait();
  const reponse = await fetch(
    `https://iris-node-biblio-production.up.railway.app/livres/${isbn}`,
  );

  if (!reponse.ok) {
    throw Error('Loading livres data failed');
  }
  return await reponse.json();
};

export const getAuteurs = async () => {
  //await wait();
  const reponse = await fetch(
    'https://iris-node-biblio-production.up.railway.app/auteurs',
  );

  if (!reponse.ok) {
    throw Error('Loading auteurs data failed');
  }
  return await reponse.json();
};

export const getAuteurDetail = async (id) => {
  //await wait();
  const reponse = await fetch(
    `https://iris-node-biblio-production.up.railway.app/auteurs/${id}`,
  );

  if (!reponse.ok) {
    throw Error('Loading auteur data failed');
  }
  return await reponse.json();
};
