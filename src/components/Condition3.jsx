import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export function Condition3(){

    <h1>Check you inhormatin</h1>
    const username="shivani"
    const password ="shivani4321"
    const navigate = useNavigate();
    if(username ==="shivani" && password ==="shivani4321"){
        
        navigate('/form');
        document.writeln("you informayion is valid")
    }
    else{
        return <h1>your data is invalid</h1>
    }
        
}