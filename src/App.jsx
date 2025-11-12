import { useState, useEffect } from 'react'
import axios from "axios";

function App() {
  const [attori, setAttori] = useState([]);

  function fetchAttori() {
    axios.get('https://lanciweb.github.io/demo/api/actors/')
      .then((res) => {
        setAttori(res.data);
      })
      .catch((err) => console.error('Errore nella chiamata:', err));
  }

  useEffect(fetchAttori, []);

  return (
    <div className="container py-4">
      <div className="row g-3">
        {attori.map((attore) => (
          <div key={attore.id} className="col-lg-3">
            <div className="card">
              <div className="h-100 text-center card_attore">
                <div className='img_wrap'>
                  <img src={attore.image} className="immagine_attore" />
                </div>
                <div className="card-body corpo_carta">
                  <h5 className="card-title titolo_attore">{attore.name}</h5>
                  <p className="card-text riga_dato"><strong>Anno:</strong> {attore.birth_year}</p>
                  <p className="card-text riga_dato"><strong>Nazionalità:</strong> {attore.nationality}</p>
                  <p className="card-text descrizione_breve">{attore.known_for}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
