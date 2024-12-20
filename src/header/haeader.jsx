import styles from './header.module.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {

  let navigate = useNavigate();

  return (
    <header id='topo' className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logoHeader} src="https://i.pinimg.com/originals/4c/ab/f1/4cabf11ca2754891d4d9d20326eca835.png" alt="logoDaEmpresa" />
        <h1 className={styles.titleHeader}>Ferrari</h1>
      </div>

      <div className={styles.navegacao}>
        <div className={styles.pesquisa}>
          <input type="text" placeholder="Pesquisar por produtos" />
          <button>Ok</button>
        </div>
        <nav>
          <ul className={styles.menu}>
            <li onClick={() => {navigate('/')}}>Home</li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#baixo">Contato</a></li>
          </ul>
        </nav>
      </div>

      <div className={styles.usuario}> 
        <label className={styles.login}>MeuUsuario</label>
        <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="fotoUsuario" />
      </div>

      <img 
        onClick={() => navigate('/pagar')}
        className={styles.carrinho} 
        src="https://cdn-icons-png.flaticon.com/512/34/34562.png" 
        alt="carrinho" 
      />
    </header>
  );
}
