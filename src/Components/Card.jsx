import { useContext } from 'react'
import { Link } from "react-router-dom";
import { setFavorite, isFav, removeFavorite } from "./utils/localStorage.service";
import { ContextGlobal } from './utils/global.context';
import styles from "./module/Card.module.css";

const Card = ({ name, username, id }) => {
  const { tema } = useContext(ContextGlobal)
  const darkMode = tema === "dark" || false

  const addFav = () => {
    setFavorite({ name, username, id });
  }

  const deleteFav = () => {
    removeFavorite(id);
  }

  const fav = isFav(id);

  return (
    <div className={`card ${darkMode ? styles.cardDark : ''}`}>
      <img className="card-img-top" src="/images/doctor.jpg" alt="imgDoctor" />
      <div className={`card-body ${styles.CardBody}`}>
        <Link to={`/medico/${id}`}>
          <h6 className={`card-title ${styles.title}`}>{name}</h6>
        </Link>
        <h5 className="card-text">{username}</h5>
        <button onClick={fav ? deleteFav : addFav} className={`btn btn-${darkMode ? 'dark' : 'light'} ${styles.favButton}`}>{fav ? '❌' : '⭐'}</button>
      </div>
    </div>
  );
};

export default Card;

//Sin problemas en La Card
