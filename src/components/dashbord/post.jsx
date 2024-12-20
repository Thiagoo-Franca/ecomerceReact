import styles from './post.module.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';

function getPrecoAleatorio(min, max) {
    return Math.floor(Math.random() * ((max - min + 1)) + min) * 10000;
}


function Post({ nome, onAdicionarAoCarrinho }) {
    const carImagens = {
        "296 GTB (Hibrido)": "https://quatrorodas.abril.com.br/wp-content/uploads/2022/06/Ferrari-296-GTB-BRASIL-14.jpg?quality=70&strip=info"
        , "296 GTS (Híbrido)": "https://quatrorodas.abril.com.br/wp-content/uploads/2022/04/ferrari_296_gts_22-1.jpg?crop=1&resize=1212,909"
        , "348 GTS 3.4": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWaiHPJsLFPrJEX2o7iZvPJKciTVhNGibnA&s"
        , "348 Spider 3.4": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxJ_9K1nfDP1LUXVs671ThkhS1HfR8bBE7yA&s"
        , "348 TS/TB 3.4": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjl8xVHatd3KHy7kb-I1LU3kZy-UMxLr-6HQ&s"
        , "355 Berlinetta": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWMo4z0515XOQJ-kYKBs_qjL4sNcsUyuToRQ&s",
        "355 Berlinetta F1": "https://www.pastorecc.com.br/site/photos/cars/860/bg_Ptl5p7l6bukQE6QcBEbG.jpeg",
        "355 GTS": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVGXWXoaaZUtiiN-awsLqdObGzl6uINb4nbg&s"
        , "355 GTS F1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_oF35HaJXghF2QFqCWVDbxNQ7hc9npQ-A7Q&sZ",
        "355 GTS Spider": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvUsEi5L2yFLp1NgNQYGYGcE1aHGYnPrY5RQ&s",
        "355 GTS Targa": "https://images.clickdealer.co.uk/vehicles/4023/4023360/large2/88306052.jpg",
        "360 Modena": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Ferrari_360_Modena_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2840%29_%28cropped%29.jpg",
        "360 Modena F1": "https://viabella.com.br/image/resize?w=1300&h=1300&force=1&q=90&src=userfiles/veiculos/a4644ee8a056efd02547bd481bc9d5ad.jpg",
        "355 Spider F1": "https://www.rardleymotors.com/docs2/cars/enlarge/170843052958100.jpg",
        "360 Challenge Stradale": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI44S8RkeJzg19gYZB73cKp_FLBsq0OAOhUA&s"
    }

    const [preco, setPreco] = useState(0)

    useEffect(() => {
        const precoGerado = getPrecoAleatorio(10, 400)
        setPreco(precoGerado)
    }, [])

    const imagemUrl = carImagens[nome]


    return (
        <div className={styles.post}>
            <h1>{nome}</h1>
            <img className={styles.fotoDoCarro} src={imagemUrl} alt={nome} />
            <h3>R$ {preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h3>
            <button type='submit' onClick={() => onAdicionarAoCarrinho({ nome, preco })}>Adicionar ao carrinho</button>
        </div>
    );
}


Post.propTypes = {
    nome: PropTypes.object.isRequired,
    onAdicionarAoCarrinho: PropTypes.func.isRequired
};
export default Post;
