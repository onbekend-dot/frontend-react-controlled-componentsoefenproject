import { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
    const [state, setState] = useState({
        name: "",
        age: "",
        message: "",
        termsAndConditions: false
    });

    function handleChange(evt) {
        const  { name, value, type, checked } = evt.target;

        setState({
            ...state,
            [name]: type === "checkbox" ? checked: value
        });
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        console.log(state);
    }
            function handleReset() {
                setState({
                    name: "",
                    age: "",
                    message: "",
                    termsAndConditions: false
                });

            }
    return (
        <form
            className="contact-form" onSubmit={handleSubmit}>
            <article className="form-group">
                <label>Naam:</label>
            <input
                name="name"
                value={state.name}
                onChange={handleChange}
                />
            </article>

            <article className="form-group">
               <label>Leeftijd:</label>
           <input className="age-input"
                  type="number"
                name="age"
                value={state.age}
                onChange={handleChange}
                />
           </article>
            <article className="form-group">
                <label>Opmerkingen:</label>
            <textarea
                name="message"
                value={state.message}
                onChange={handleChange}
            />
                </article>
            <article className="form-group">
                <label>ik schrijf me in voor de nieuwsbrief</label>
                <input
                       type="checkbox"
                       name="termsAndConditions"
                       checked={state.termsAndConditions}
                       onChange={handleChange}
                    />
            </article>

            <button type="submit">
                Versturen
            </button>
            <button type="button"
            onClick={handleReset}
            >
            reset
            </button>
        </form>
    );
}

export default ContactForm;