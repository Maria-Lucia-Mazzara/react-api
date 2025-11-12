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

    </>
  )
}

export default App
