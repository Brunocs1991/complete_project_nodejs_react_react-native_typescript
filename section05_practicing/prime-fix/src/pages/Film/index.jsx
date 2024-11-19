import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import api from "../../services/api.js";
import styles from "./Film.module.css";

const Film = () => {

  const {id} = useParams()
  const [film, setFilm] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    function loadFilm() {
      return api.get(`/movie/${id}`, {
        params: {
          language: "pt-BR",
        }
      })
    }

    loadFilm()
      .then(r => {
        setFilm(r.data)
        setLoading(false);
      })
      .catch(e => {
        console.error(e)
      });
  }, [id]);
  if (loading) {
    return (
      <div className={"loading"}>
        <h2>Carregando detalhes...</h2>
      </div>);
  }
  return (
    <div className={styles.filmInfo}>
      <h1>{film.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`} alt={film.title}/>
      <h3>Sinopse</h3>
      <span>{film.overview}</span>
      <strong>Avaliação: {film.vote_average}</strong>
      <div className={styles.areaButton}>
        <button>Salvar</button>
        <button>

          <a href="#">
               Trailer
          </a>
        </button>
      </div>
    </div>
  );
}
export default Film;
