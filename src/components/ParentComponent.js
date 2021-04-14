import React, {useState} from "react";
import Form from "./Form";
import DisplayData from "./DisplayData"

function ParentComponent(){
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");

    function handleFirstName(event){
        setFirstName(event.target.value)
    }

    function handleLastName(event){
        setLastName(event.target.value)
    }


    return(
        <div>
            <Form
            firstName={firstName}
            lastName={lastName}
            handleFirstName={handleFirstName}
            handleLastName={handleLastName}
            />
            <DisplayData firstName={firstName} lastName={lastName}/>
        </div>
    );
}

export default ParentComponent;