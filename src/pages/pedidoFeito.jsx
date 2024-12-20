import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import styles from'../pages/pedidoFeito.module.css';


function PedidoFeito({ limparCarrinho }) {
    let navigate = useNavigate();

    useEffect(() => {
        limparCarrinho();
    }, [limparCarrinho])
    return (
        <div className={styles.pedidoFeito}>
            <div className={styles.feito}>Pedido realizado com suceso!</div>
            <button type="submit" onClick={() => navigate('/')}>Voltar ao ínicio</button>
        </div>
    );
}

export default PedidoFeito;