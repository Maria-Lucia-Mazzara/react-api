import { useState, useEffect } from "react";
import axios from "axios";

function Attore() {
    const [attrici, setAttrici] = useState([]);

    function fetchAttrici() {
        axios
            .get(" https://lanciweb.github.io/demo/api/actresses/")
            .then((res) => {
                setAttrici(res.data);
            })
            .catch((err) => console.error("Errore nella chiamata:", err));
    }

    useEffect(fetchAttrici, []);

    return (
        <div className="container py-4">
            <div className="row g-3">
                {attrici.map((attrici) => (
                    <div key={attrici.id} className="col-lg-3">
                        <div className="card">
                            <div className="h-100 text-center card_attrice">
                                <div className="img_wrap">
                                    <img src={attrici.image} className="immagine_attrici" />
                                </div>
                                <div className="card-body corpo_carta">
                                    <h5 className="card-title titolo_attrice">{attrici.name}</h5>
                                    <p className="card-text riga_dato">
                                        <strong>Anno:</strong> {attrici.birth_year}
                                    </p>
                                    <p className="card-text riga_dato">
                                        <strong>Nazionalità:</strong> {attrici.nationality}
                                    </p>
                                    <p className="card-text descrizione_breve">
                                        {attrici.known_for}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Attore;
