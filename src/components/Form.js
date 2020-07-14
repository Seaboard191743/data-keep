import React from "react";
import "./form.css";

const Form = ({clear, data, onChange, onSubmit}) => {
    return (
        <form className = "form" onSubmit = {onSubmit}>
            <label className = "label--font--style" htmlFor = "name">Name*</label>
            <input 
                className = "form__name" 
                type = "text" name = "name" 
                value = {clear.name} 
                onChange = {onChange} 
                required
            />
            <label className = "label--font--style" htmlFor = "job">Job*</label>
            <input 
                className = "form__name" 
                type = "text" name = "job"
                value = {clear.job}  
                onChange = {onChange} 
                required
            />
            <button className = "form__submit">Submit</button>
        </form>
    )
}
export default Form;