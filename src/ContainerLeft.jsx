import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

function ContainerLeft() {
  const router = useNavigate();

  function onClickP() {
    router('/pizzas')
  }

  return (
    <div className={styles['container-left']}>
      <h1 className={styles['text-h1']}>Pizzapp</h1>
      <hr />
      <p id='tag-p-color-change' className={styles['text-p']} onClick={onClickP} >Pizzas</p>
      <hr />
      <p className={styles["text-p"]}>Bebidas</p>
      <hr />
      <p className={styles["text-p"]}>Carrinho</p>
    </div>
  )
}

export default ContainerLeft