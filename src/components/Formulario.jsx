import { useState } from "react";
import "../css/Formulario.css";

//Inicio de funcionalidad
export const Formulario = ()=> {
    //estados

    const [ divisa, setDivisa ] = useState('');
    const [ cripto, setValorCripto ] = useState('');

    const [ alerta, setAlerta ] = useState(false);
    const [ msgInfo, setMsgInfo] = useState(''); 

    const handleSumbit = (e)=> {
        e.preventDefault();

        if( divisa === '' || cripto === ''){
            setAlerta(true);
            setMsgInfo('');
            return;
        }
        setAlerta(false);
        setMsgInfo(`Cotizando ${cripto} tu divisa ${divisa}`);
    };

    return(
        <form className="formulario" onSubmit={ handleSumbit }>
            {alerta && (
                <div className="alerta-error">
                    Todos los campos son obligatorios ⚠️
                </div>
            )}

            <div>
                <label className="label" htmlFor="divisa"> Elige tu divisa (Moneda) </label>
                    <select className="select" id="moneda" value={ divisa } onChange={(e) => setDivisa(e.target.value)}>
                        <option value=""> --Seleccione --</option>
                        <option value="USD"> Dolar. USD </option>
                        <option value="EUR"> Euro. EUR</option>
                        <option value="MXN"> Peso Mexicano. MXN </option>
                        <option value="GBP"> Libra. GBP </option>
                    </select>
            </div>

            <div className="campo">
                <label className="label" htmlFor="cripto"> Elige la criptomoneda </label>
                <select className="select" id="cripto" value={ cripto } onChange={(e) => setValorCripto(e.target.value)}>
                    <option value=""> --Seleccione --</option>
                    <option value="BTC"> Bitcoin. BTC </option>
                    <option value="ETH"> Ethereum. ETH </option>
                </select>
            </div>

            <button type="submit" className="btn-cotizar">
                Cotizar
            </button>

            { msgInfo && (
                <div className="alerta-info">
                    <p>{msgInfo}</p>
                </div>
            )}
        </form>
    )
};

export default Formulario;