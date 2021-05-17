import React, {useState,useEffect} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { useForm,Controller } from "react-hook-form";

import BottonRightImage from './BottonRightImage';
import FormLogo from './Logo'
import Modal from '../../components/Modal'

const endpoint = (window.location.href==="https://zonae.com.co/forms/")? 
                    "https://zonae.com.co/forms/backend/public" : 
                    "http://localhost:8080/control-covid/backend/public";

export const Form = props =>{
    const { register, handleSubmit, control, reset } = useForm();
    const [button,setBtnState] = useState(true);
    const [loader,setLoaderState] = useState(false);
    const [auth,setAuth] = useState(false);
    const [peopleId,setPeopleId] = useState(null);
    const [documentTypes,setDocumentTypes] = useState([]);
    const [questions,setQuestions] = useState([]);
    const [current,setCurrent] = useState(0)
    const [sendSurvey,setSendSurvey] = useState(false)
    const [modal,setModal] = useState(false)
    const [modalContent,setModalContent] = useState('')
    const [mainBtnText,setmainBtnText] = useState('continuar')
    
    useEffect(()=>init(),[])

    const handleClick = (props)=> {
        if (sendSurvey) {
            handleSubmit(saveSurvey)()
            return;
        }
        if(current+1===questions.length){
            setmainBtnText("finalizar")
            setSendSurvey(true)
        }
        setCurrent(current+1)
    }

    const getPeople = async (props)=>{
        if(props.documentType==="" || props.documentNumber ===""){
            setModalContent(<p>Por favor selecione el tipo de documento y digite el documento</p>)
            setModal(true)
            return
        }

        setBtnState(false)
        setLoaderState(true)
        
        try{
            let response = await fetch(`${endpoint}/personByDoc/${props.documentType}/${props.documentNumber}`)
            .then()
            .then(res => res.json())
            console.table(response)
            if(response.length===0){
                setModalContent(<p>No se encontro ninguna persona con esos datos</p>)
                setModal(true)
            }
            else{
                setAuth(true)
                setPeopleId(response[0].id)
            }
            // setCurrent(current+1)
        }
        catch (e){
            setModalContent(<p>Se produjo un error intente de nuevo</p>)
            setModal(true)
        }

        setLoaderState(false)
        setBtnState(true)

        
    }

    const getDocumentTypes = async ()=>{
        let response = await fetch(`${endpoint}/documentTypes`)
            .then()
            .then(res => res.json())
            setDocumentTypes(response)
    }

    const getQuestions = async ()=>{
        let response = await fetch(`${endpoint}/questions/1`)
            .then()
            .then(res => res.json())
            setQuestions(response)
    }

    const saveSurvey = async (props) => {
        setBtnState(false)
        setLoaderState(true)

        let questions = {};
        for(const element in props){ 
            if(element==='documentType' || element==='documentNumber'){ continue; }
            // console.log(`${element}: ${props[element]}`); 
            questions[element.split("_")[1]] = props[element]
        }

        let data = {
            survey_id : 1,
            people_id : peopleId,
            values : questions 
        }
        let response = await fetch(`${endpoint}/saveSurvey`,{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then()
        .then(res => res.json())
        // console.log(typeof response)
        if (response.id>0) {
            setAuth(false)
            setPeopleId(null)
            setCurrent(0);
            setSendSurvey(false);
            reset({documentNumber:''})
            setmainBtnText('continuar');
        }
        else{
            setModalContent(<p>Se produjo un error intente de nuevo</p>)
            setModal(true)
        }
        setBtnState(true)
        setLoaderState(false)
            // console.table(response)
    }

    const init = async ()=>{
        getDocumentTypes();
        getQuestions();
        console.log(current)
    }
    
    const handleChange = ()=>{}

    return (
        <>
        <Modal
            show = {modal}
            setShow = {setModal}
            content = {modalContent}
        />
        <div className="form" >
            <FormLogo/>
            <section>
                <p 
                    style={auth && current<questions.length ? {opacity:1} : {opacity:0}} 
                >
                    Marque la casilla si tiene el sintoma
                </p>
                <ul>
                    <li className={ auth ? "forward" : "" } >
                        <div className="auth">
                            <select {...register("documentType")}>
                                <option value="" >Seleccione...</option>
                                {documentTypes.map(element=> 
                                    (<option key={element.id} value={element.id} >{element.name}</option>) 
                                )}
                            </select>
                            <input type="text" placeholder="Numero de documento" {...register("documentNumber")} />
                        </div>
                    </li>
                    {questions.map( (element,index)=>
                        
                            <li key={element.id} className={ current>index ? "forward" : "" }>
                                <div className="question">
                                    <div>
                                    {element.name}
                                    </div>
                                    <div>
                                    <Controller
                                        name={`checkbox_${element.id}`}
                                        control={control}
                                        defaultValue={false}
                                        render={({ field }) => <Checkbox {...field} color="default" />}
                                    />                                        
                                    </div>
                                </div>
                            </li>
                        
                    )}
                    
                    <li>
                        <div>
                        <p>Gracias por realizar la encuesta!</p>
                        </div>
                    </li>
                </ul>
                    {loader && (<div className="loader"></div>)}
                    {button && (<button onClick={auth ? handleClick : handleSubmit(getPeople)}>{mainBtnText}</button>)}
            </section>

            <BottonRightImage/>
        </div>
        </>
    )
}
