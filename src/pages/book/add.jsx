import { useRef, useState } from 'react';

import Button from '../../components/Button';

export function Add() {
  const formRef = useRef();
  const [titre, setTitre] = useState('');
  const [isbn, setIsbn] = useState('');

  const handleSubmit = async (formEvent) => {
    const formValues = new FormData(formEvent.target);
    let isValid = false;
    if (!formValues.get('isbn')) {
      alert("Il faut renseigner l'ISBN pour valider !");
      isValid = false;
    }
    if (!formValues.get('titre')) {
      alert('Il faut renseigner le titre pour valider !');
      isValid = false;
    }

    if (isValid) {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/livres`, {
        method: 'POST',
        body: JSON.stringify({
          isbn: formValues.get('isbn'),
          titre: formValues.get('titre'),
          anneeSortie: 2000,
          resumer: null,
          idAuteur: 1,
          idEditeur: 1,
          idGenre: 1,
        }),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      });
      const data = await response.json();
      alert(JSON.stringify(data));
      formEvent.preventDefault();
    }
  };

  return (
    <div>
      <h1>Ajouter un livre</h1>
      <form noValidate ref={formRef} onSubmit={(e) => handleSubmit(e)}>
        <div className="space-x-4">
          <label htmlFor="titre">Titre</label>
          <input
            className="border rounded border-gray-300"
            value={titre}
            onChange={(inputChangeEvent) => {
              setTitre(inputChangeEvent.target.value);
            }}
            name="titre"
            id="titre"
            type="text"
            required
          />
          {!titre && <h4 className="text-red-800">*Requis</h4>}

          <label htmlFor="titre">ISBN</label>
          <input
            className="border rounded border-gray-300"
            value={isbn}
            onChange={(inputChangeEvent) => {
              setIsbn(inputChangeEvent.target.value);
            }}
            name="isbn"
            id="isbn"
            type="text"
            required
          />
          {!isbn && <h4 className="text-red-800">*Requis</h4>}
        </div>

        <Button type="submit">Creer le livre</Button>
      </form>
    </div>
  );
}
