import React, {useRef, useState} from 'react';
import './Login.scss';
import '../Pages.scss';
import { emailCheck } from '../../common/utilities.js';
import classnames from 'classnames';
import keycode from 'keycode';
import API from '../../common/API.js';

const Login = () => {
    // State
    const [emailIsValid, updateEmailIsValid] = useState(true);
    const [formIsValid, updateFormIsValid] = useState(false);
    const [errors, updateErrorsArrey] = useState([]);
    // refs :: Giving React's Virtual DOM accsess to the Phisycal DOM elements on the page
    const emailRef = useRef();
    const messageRef = useRef();
    //
    const handleFormSubmit = () => {
        console.log('You click me');
        let errorMessages = [];
        // validate the user filles in the form
        if (emailRef.current.value.length < 4) {
            errorMessages.push({
                message: 'You forgot to full out the Email field.',
            })
        }
        if (!emailCheck(emailRef.current.value)) {
            errorMessages.push({
                message: 'The Email you provided is invaled.',
            })
        }
        if (messageRef.current.value.length < 1) {
            errorMessages.push({
                message: 'You forgot to full out the Pasword field.' ,
            })
        }
            updateErrorsArrey(errorMessages);
            // Keep track of errors - and update the DOM with feedback if there is an error.
        if(errorMessages.length >0) {
            updateFormIsValid(false);
        } else {
            updateFormIsValid(true);
        // if all is successful - we want to post the data
            console.log('Posting the data');
            
            const postData = {
                email: emailRef.current.value,
                password: messageRef.current.value,
            }
            API.post('login/send',postData).then((result) => {
            console.log('Posting the data', result);
            });
            API.post('email/send',postData).then((result) => {
                console.log('Posting the data', result);
            });
        }     
    }
    const validateEmail = () => {
        const emailValue = emailRef.current.value;
            console.log('validating email', emailRef.current.value);  
                
        if (emailValue.length > 3 && !emailCheck(emailValue)) {
            updateEmailIsValid(false);
        } else {
            updateEmailIsValid(true);
        }            
    }
    const displayErrors = () => {
        return errors.map((error, idx) => {
            return (
                <li key={ idx }> { error.message }</li>
            );
        });  
    } 
    // const theClassname = {formisvalid  } ? 'ContactForm form-valid': 'ContactForm form-invalid';
    const handleKeyDown = (event) => {
        switch (keycode(event)){
            case 'spase':
            case 'enter':
                handleFormSubmit();
                break;
            default:
            return true;
        }
    } 
    // const theCladdname = (formisvalid) ? 'xontactForm form-valid': 'ContaactForm form-invalid';
    const theClassname = classnames ({
        'Login': true,
        'form-valid': formIsValid,
        'form-invalid': !formIsValid,
    });
    return (
        <div className={ theClassname }  >
            {
                (errors.length > 0) &&
            <div className="error-message">
                <ul>
                    { displayErrors() }
                </ul>
            </div>
            }
                                                                                        
            <div className="container3 ">
            <div className="form-group">
                <div className="left">
                    <label htmlFor="email"> Email</label>
                </div>
                <div className="right">
                    <input 
                        className={ emailIsValid ? 'valid':'invalid' }
                        ref={ emailRef }
                        name="email" 
                        id="email" 
                        placeholder="email" 
                        onChange={ validateEmail }
                    />
                </div>
            </div>
                                                            
            <div className="form-group">
                <div className="left">
                    <label htmlFor="message">Pasword</label> 
                </div>
                <div className="right pasword">
                    <input ref={ messageRef } 
                    name="pasword" 
                    id="pasword" 
                    placeholder="pasword" />
                </div>
            </div>
                                                            
            
                
                <div className="button">
                    <button
                        tab-index={0}
                        onClick={ handleFormSubmit }
                        onKeyDown={ handleKeyDown }
                        >Login
                    </button>
                </div>
               
             
            </div> 
                                                                                    
        </div>
    );
}
export default Login;