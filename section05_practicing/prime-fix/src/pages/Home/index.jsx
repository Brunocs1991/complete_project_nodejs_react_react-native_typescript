import {useEffect, useState} from "react";
import api from "../../services/api.js";
import styles from "./Home.module.css";
import {Link} from "react-router-dom";

const Home = () => {

  const [film, setFilm] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilms() {
      return await api.get("/movie/now_playing", {
        params: {
          language: "pt-BR", page: 1,
        }
      });
    }

    loadFilms().then(r => {
      setFilm(r.data.results)
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>
        <h2>Carregando...</h2>
      </div>);
  }
  return (<div className={styles.container}>
    <div className={styles.listfilm}>
      {film.map((f) => {
        return (
          <article key={f.id}>
            <strong>{f.title}</strong>
            <img src={`https://image.tmdb.org/t/p/w500/${f.poster_path}`} alt={f.title}/>
            <Link to={`/film/${f.id}`}>Access</Link>
          </article>
        );
      })}
    </div>
  </div>);
}

export default Home;
