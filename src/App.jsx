import React, {useState} from 'react';
import './App.css';


function App() {
    const [message, setMessage] = React.useState('');
    const [ termsAndConditionsValue, setTermsAndConditionsValue ] = React.useState(false);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    return (
        <>
        <div>
          <h1>
              Gegevens
          </h1>
            <form>
                <label htmlFor="name">Naam
                    <input
                        type="text"
                        id="name"
                        value={name}
                        placeholder="Enter your name"
                           onChange={(e)  => setName(e.target.value)}
                    />
                </label>
            </form>
            <form>
                <label htmlFor="age">Leeftijd
                    <input type="number"
                           id="age"
                           value={age}
                           placeholder="Enter your age"
                           onChange={(e)   => setAge(e.target.value)}
                    />
                </label>
            </form>
            <h2>
                Jouw review
            </h2>

                <label htmlFor="Message">
                    <h2> Opmerkingen</h2>
                    <textarea
                           id="message"
                           rows="5"
                           cols="30"
                           value={message}
                    placeholder="Wat vond je van het recept?"
                    onChange={(e)  => setMessage(e.target.value)}
                    />

                </label>


            <label htmlFor="form-terms-and-conditions">
                <input
                    type="checkbox"
                    id="form-terms-and-conditions"
                    name="terms-and-conditions"
                    checked={termsAndConditionsValue}
                    onChange={()  => setTermsAndConditionsValue(!termsAndConditionsValue)}
                    />
                Ik ga akkoord met de  algemene voorwaarden
            </label>



        </div>
            </>
    );
}

export default App;
