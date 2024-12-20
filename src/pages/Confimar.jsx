import styles from './Confirmar.module.css';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { BrowserRouter, Router } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function getPrecoAleatorio(min, max, qnt) {
    return Math.floor((Math.random() * ((max - min + 1)) + min) * 100) * qnt;
}

const validationSchema = yup.object({
    cep: yup.string().matches(/^\d{8}$/, 'O CEP deve conter 8 dígitos').required('O CEP é obrigatório')
});

function Confirmar(props) {
    const [cepData, setCepData] = useState(null);
    const [cep, setCep] = useState('');
    const [frete, setFrete] = useState(0);

    const formik = useFormik({
        initialValues: { cep: '' },
        validationSchema,
        onSubmit: (values) => {
            setCep(values.cep);
        },
    });

    useEffect(() => {
        if (cep) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then((response) => response.json())
                .then((data) => {
                    setCepData(data);
                    console.log(data);

                    // Calcular o frete baseado na propriedade `regiao`
                    if (data.regiao === 'Norte') setFrete(getPrecoAleatorio(15, 30, props.itens));
                    else if (data.regiao === 'Nordeste') setFrete(getPrecoAleatorio(5, 15, props.itens));
                    else if (data.regiao === 'Centro-oeste') setFrete(getPrecoAleatorio(30, 50, props.itens));
                    else if (data.regiao === 'Sudeste') setFrete(getPrecoAleatorio(30, 50, props.itens));
                    else if (data.regiao === 'Sul') setFrete(getPrecoAleatorio(50, 70, props.itens));
                    else setFrete(0); // Caso a região não seja reconhecida
                })
                .catch((error) => console.error(error));
        }
    }, [cep]);

    const totalComFrete = props.total + frete;

    let navigate = useNavigate();

    return (

        <div className={styles.confirmar}>
            <h3 className={styles.titulo}>
                Itens: {props.itens} <br />
                Total em carro(s): R$ {props.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </h3>

            <div className={styles.endereco}>
                <h4>Endereço de Entrega</h4>
                <form onSubmit={formik.handleSubmit} >
                    <label>Digite seu CEP:</label>
                    <input
                        type="text"
                        name="cep"
                        placeholder="00000-000"
                        value={formik.values.cep}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.cep && <p className={styles.erros}>{formik.errors.cep}</p>}
                    <button type="submit">Calcular Frete</button>
                </form>


            </div>
            {cepData && (
                <div className={styles.dados}>
                    <p>
                        <p className={styles.info}>
                            Cidade: {cepData.localidade} <br />
                            Estado: {cepData.uf} <br />
                            Bairro: {cepData.bairro} <br />
                            Rua: {cepData.logradouro} <br />
                            Região: {cepData.regiao} <br />

                        </p>

                        <p className={styles.frete}>
                            Frete: R$ {frete.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} <br />
                            Total com Frete: <strong> R$ {totalComFrete.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} </strong>

                        </p>
                        <div>
                            <button type="submit" onClick={() => navigate("/pedidoFeito")}>Deseja finalizar a compra?</button>
                        </div>
                    </p>
                </div>
            )}
        </div>
    );
}



export default Confirmar;
