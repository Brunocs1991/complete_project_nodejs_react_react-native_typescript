import {useEffect, useState} from "react";
import "./style.css"

const App = () => {

  const [nutri, setNutri] = useState([])
  useEffect(() => {
    function loadApi() {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts"
      fetch(url)
        .then((data) => data.json())
        .then((json) => setNutri(json))
    }

    loadApi()
  }, [])
  return (<div className={"container"}>
    <header>
      <strong>React Nutri</strong>
    </header>
    {nutri.map((item) => {
      return (
        <article key={item.id} className={"post"}>
          <strong className={"title"}>{item.titulo}</strong>
          <img src={item.capa} alt={item.titulo} className={"cover"}/>
          <p className={"subtitle"}>{item.subtitulo}</p>
          <a className={"button"}>Acessar</a>
        </article>
      )
    })}
  </div>)
}

export default App
