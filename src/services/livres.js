export const wait = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 2000);
  });
};

export const getLivres = async () => {
  await wait();
  const reponse = await fetch('http://localhost:3000/livres');

  if (!reponse.ok) {
    throw Error('Loading livres data failed');
  }
  return await reponse.json();
};
