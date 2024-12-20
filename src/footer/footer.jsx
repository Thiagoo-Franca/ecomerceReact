import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer id='baixo' className={styles.footer}>
            <div className={styles.contatos}>
                <p>Nossas redes sociais</p>
                <div className={styles.links}>
                    <a href="https://www.instagram.com/ferrari/" target='_blank'><img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="instagram logo" /> Siga-nos no instagram</a>
                </div>
                <p>
                    Entre em contato por telefone: <a href="#">(71) 99999-9999</a>
                </p>
            </div>
            <div className={styles.endereco}>Via Abetone Inferiore 4, Maranello, Modena, Itália</div>
        </footer>
    );
}