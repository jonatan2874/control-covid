import React from 'react';
import BottonRightImage from './BottonRightImage';
import FormLogo from './Logo'

const style = {
    margin: "2em auto",
    padding: "2em 2em",
    textAlign : "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    minHeight : 250,
}

const styleP = { 
    color: "#FFF",
    fontWeight : 400,
    fontSize : "1.5em",
}

export const CovidForm = props =>{
    
    return (
        <>
            <FormLogo/>
            <section style={style}>
                <p style={styleP}>Registro Diario Covid-19</p>
                <select defaultValue="Cedula">
                    <option value="Cedula" >Cedula</option>
                    <option value="Pasaporte">Pasaporte</option>
                </select>
                <input type="text" placeholder="Numero de documento" />
                <button>Continuar</button>
            </section>
            <BottonRightImage/>
        </>
    )
}
