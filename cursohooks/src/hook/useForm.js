import { useState } from "react"

export const useForm = (initialState={})=>{
    
    const [value, setValue] = useState(initialState);

    const handleInputChange = ({ target }) => {
        setValue({
            ...value,
            [ target.name ]: target.value
        }); 
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(value)
    }


    return [value, handleInputChange, handleSubmit];
}