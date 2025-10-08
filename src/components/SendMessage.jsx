import React from "react";

export function SendMessage(){
    const status ="Successs";

    function statusMessage(status){

        switch (status){
            case "Loading" :return <h1>Loading...</h1>
            
            case "Successs" :return <h1>data is loaded successfully..</h1>
            
            case "error" :return <h1>error ocured...</h1>

            default :return <h1>consdition not machted</h1>
            
        }
    }
    return(
        <div>
            {statusMessage(status)}
        </div>
    )



}



