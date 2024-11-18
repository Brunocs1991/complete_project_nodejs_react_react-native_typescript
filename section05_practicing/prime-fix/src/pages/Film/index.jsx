import styles from "./Film.module.css"
import {useParams} from "react-router-dom";
const Film = () => {

  const {id} = useParams()
  return (
    <div>
      <h1>Film {id}</h1>
    </div>
  );
}
export default Film;
