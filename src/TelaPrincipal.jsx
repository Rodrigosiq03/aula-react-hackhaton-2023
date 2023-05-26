import styles from './styles.module.css';
import logo from './assets/imagem-logo-pizzapp.jpg';
import ContainerLeft from './ContainerLeft';


function TelaPrincipal() {
    return (
      <div className={styles['container-principal']}>
        <ContainerLeft />
        <div className={ styles['container-right'] } >
          <img src={ logo } alt="Imagem logo pizzapp" />
        </div>
      </div>
    )
}

export default TelaPrincipal