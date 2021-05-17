import React,{useState,useEffect} from 'react';

const Modal = ({show ,setShow,content}) => {
    const [state,setState] = useState(show);
    const handleClick = ()=>{
        setShow(!state);
        setState(!state);
    }
    useEffect(()=>setState(show),[show])

    return (
        <div className={!state? "container-modal" :"container-modal show"} >
            <div className="modal">
                {content}
                <button onClick={handleClick}>aceptar</button>
            </div>            
        </div>
    )
}

export default Modal;
