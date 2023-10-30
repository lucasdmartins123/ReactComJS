import Banner from "components/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "components/Titulo";
import { useFavoritoContext } from "Contextos/Favoritos";
import Cards from "components/Cards";

function Favoritos() {
  const { favorito } = useFavoritoContext();

  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Cards {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
}

export default Favoritos;
