import { useState, useEffect } from 'react'
import axios from "axios";

function App() {
  const [attori, setAttori] = useState([]);

  function fetchAttori() {
    axios.get('https://lanciweb.github.io/demo/api/actors/')
      .then((res) => {
        setAttori(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error('Errore nella chiamata:', err));
  }

  useEffect(fetchAttori, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card" style={{ width: '18rem' }}>
            {attori.map((attore) => (
              <div key={attore.id} className="card-body">
                <h2 className="card-title">
                  {attore.name}
                </h2>
                <h4 className="card-title">
                  {attore.birth_year}
                </h4>
                <h4 className="card-title">
                  {attore.nationality}
                </h4>
                <h4 className="card-title">
                  {attore.biography}
                </h4>
                <img src={attore.image} className="card-img-top" alt="..."></img>
                <p className="card-text">
                  {attore.known_for}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default App
