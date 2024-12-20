import './App.css';
import Header from './header/haeader.jsx';
import Footer from './footer/footer.jsx';
import Post from './components/dashbord/post.jsx';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Confirmar from './pages/Confimar.jsx';
import PedidoFeito from './pages/pedidoFeito.jsx';
import { useCallback } from 'react';

function App() {
    const [limite, setLimite] = useState(9);

    const mostrarMais = () => {
        setLimite(limite + 3);
    };

    const limparCarrinho = useCallback(() => {
        setCarrinho([]);
    }, []);

    const [data, setData] = useState([]);

    const [carrinho, setCarrinho] = useState([]);

    const adicionarAoCarrinho = (item) => {
        setCarrinho((carrinhoAtual) => [...carrinhoAtual, item]);
    };

    const totalCarrinho = carrinho.reduce((total, item) => total + item.preco, 0);

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("x-apihub-key", "VOi0AHYtRKhzk8cbNDMEkCJcI6V604XarUEWQ8ha7cs91VovHK");
        myHeaders.append("x-apihub-host", "Brazilian-Vehicle-Pricing.allthingsdev.co");
        myHeaders.append("x-apihub-endpoint", "949ecc14-49a2-4a19-8ae5-f0f1eedf0f2f");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        };

        fetch("https://Brazilian-Vehicle-Pricing.proxy-production.allthingsdev.co/fipe/api/v1/carros/marcas/20/modelos", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setData(result.modelos);
            })
            .catch((error) => console.error(error));
    }, []);


    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<div className='home'>Seja Bem-vindo(a)</div>}/>
                    <Route path="/pagar" element={<Confirmar itens={carrinho.length} total = {totalCarrinho} />} />
                    <Route path="/pedidoFeito" element={<PedidoFeito limparCarrinho={limparCarrinho}/>} />
                </Routes>
            </BrowserRouter >


            <div className="carrinho">
                <p> Itens no carrinho: {carrinho.length} <br />Total do Carrinho:<strong>R$ {totalCarrinho.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> </p>
                <button type="submit" onClick={limparCarrinho}>Limpar carrinho</button>
            </div>

            <div className="container">
                {data.slice(0, limite).map((info, indice) => (
                    <Post key={info.codigo || indice} nome={info.nome} onAdicionarAoCarrinho={adicionarAoCarrinho} />
                ))}
            </div>

            <div className="mostrarMais">
                <button type="submit" onClick={mostrarMais}>Mostrar mais</button>
            </div>

            <Footer />
        </>
    );
}



export default App;
