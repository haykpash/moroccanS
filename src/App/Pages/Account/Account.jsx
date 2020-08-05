import React, { useRef, useState } from 'react';
import './Account.scss';
import '../Pages.scss';
import keycode from 'keycode';
import API from '../../common/API.js';
import { emailCheck, 
        firstNameCheck,
        lastNameCheck,
        addressCheck } from '../../common/utilities';

const Account  = () => {
    // States
    const [emailIsValid, updateImailIsValid] = useState(true);
    const [passwordIsValid ] = useState(true);
    const [firstNameIsValid, updateFirstNameIsValid] = useState(true);
    const [lastNameIsValid, updateLastNameIsValid] = useState(true);
    const [addressIsValid, updateAddressIsValid] = useState(true);
    const [errors, updateErrorsArray] = useState([]);
    //      Refs
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const addressRef = useRef();
    const emailRef = useRef();
    const passwordlRef = useRef();
    //     Button
    const handleClick = () =>  {
        
        console.log( 'Clicking submit button');
    
        let errorMessages = [];
    
        if (!firstNameCheck(firstNameRef.current.value) ) {
            errorMessages.push({
                message: 'Invaled First Name',
            });
        }
        if (!lastNameCheck(lastNameRef.current.value) ) {
            errorMessages.push({
                message: 'Invaled Last Name',
            });
        } 
        if (!addressCheck(addressRef.current.value) ) {
            errorMessages.push({
                message: 'Invaled Address',
            });
        } 
        if (!emailCheck(emailRef.current.value) ) {
            errorMessages.push({
                message: 'Invaled Email',
            });
        } 
        if (passwordlRef.current.value.length < 8) {
            errorMessages.push({
                message: 'Password must be minimum 8 charachters or numbers',
            });
        } 
        updateErrorsArray(errorMessages);
        
        if (errorMessages.length === 0 ) {
            //updateFirstNameIsValid(true);
                
                console.log('Posting Data');
                
            const postData = {
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                address: addressRef.current.value,
                email: emailRef.current.value,
                password: passwordlRef.current.value,
            }
            API.post('registrationForm', postData).then((result) => {
                console.log('Posting the data', result);
            });
        }
    } 
    //        Validate Email
    const validateEmail = () =>  {
        console.log(emailRef.current.value);
        if (!emailCheck(emailRef.current.value)) {
            updateImailIsValid(false);
        } else {
            updateImailIsValid(true);
        }
    } 
    //       Validate First Name
    const validateFirstName = () =>  {
        console.log(firstNameRef.current.value);
        if (!firstNameCheck(firstNameRef.current.value)) {
            updateFirstNameIsValid(false);
        } else {
            updateFirstNameIsValid(true);
        }
    } 
    //       Validate Last Name
    const validateLastName = () =>  {
        console.log(lastNameRef.current.value);
        if (!lastNameCheck(lastNameRef.current.value)) {
            updateLastNameIsValid(false);
        } else {
            updateLastNameIsValid(true);
        }
    }     
    //        Validate Address
    const validateAddress = () =>  {
        console.log(addressRef.current.value);
        if (!addressCheck( addressRef.current.value)) {
            updateAddressIsValid(false);
        } else {
            updateAddressIsValid(true);
        }
    }//      Looping error messages
    const displayErrors = () => {
        return errors.map((error, idx) => {
            return ( 
                <li key={ idx }>  { error.message }</li> 
            );
        });
    }
    //      keycode button
    const handleKeyDown = (event) => {
        switch (keycode(event)) {
            case 'enter':
                handleClick();
                break;
            default: 
                return true;
        }
    };
    return (
        <div className="Account Pages">
            <div className="error-message">
                <ul>
                    { displayErrors() }
                </ul>
            </div>
            <div className="registration">
                <div className="form-group">
                    <div className="left">
                        <label htmlFor="firstNamer">First Name</label> 
                    </div>
                    <div className="right">
                        <input
                            className={ firstNameIsValid ? '' : 'emailinvalid' }
                            ref={ firstNameRef }
                            name="firstName" 
                            id="firstName" 
                            placeholder="First Name" 
                            onChange={ validateFirstName }
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="left">
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="right">
                        <input 
                            className={ lastNameIsValid ? '' : 'emailinvalid' }
                            ref={ lastNameRef }
                            name="lastName" 
                            id="lastName" 
                            placeholder="Last Name"
                            onChange={ validateLastName } 
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="left">
                        <label htmlFor="address">Address</label>
                    </div>
                    <div className="right">
                        <input 
                            className={ addressIsValid ? '' : 'emailinvalid' }
                            ref={ addressRef }
                            name="address" 
                            id="address" 
                            placeholder="Address" 
                            onChange={ validateAddress }
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="left">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="right">
                        <input
                            className={ emailIsValid ? '' : 'emailinvalid' }
                            ref={ emailRef }
                            name="email" 
                            id="email" 
                            placeholder="Email" 
                            onChange={ validateEmail }
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="left">
                        <label htmlFor="pasword">Pssword</label>
                    </div>
                    <div className="right pasword">
                        <input 
                            className={ passwordIsValid ? '' : 'emailinvalid' }
                            ref={ passwordlRef }
                            name="pasword" 
                            id="pasword" 
                            placeholder="Pssword"
                        />
                    </div>
                </div>
                <div >
                    <button 
                        tabIndex={ 0 }
                        onClick={ handleClick } 
                        onKeyDown={ handleKeyDown }
                        >
                                Register
                    </button>
                </div>
            </div>
        </div>
    )
};
export default Account;