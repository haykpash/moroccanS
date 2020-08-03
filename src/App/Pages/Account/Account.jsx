import React, { useRef, useState } from 'react';
import './Account.scss';
import '../Pages.scss';
import { emailCheck, nameCheck, addressCheck } from '../../common/utilities';

const Account  = () => {
    // States
    const [emailIsValid, updateImailIsValid] = useState(true);
    const [passwordIsValid, updatePasswordlIsValid] = useState(true);
    const [firstNameIsValid, updateFirstNameIsValid] = useState(true);
    const [lastNameIsValid, updateLastNameIsValid] = useState(true);
    const [addressIsValid, updateAddressIsValid] = useState(true);
        // Refs
    const emailRef = useRef();
    const passwordlRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const addressRef = useRef();

    const handleClick = () =>  {
        console.log( 'Submit');
    } // Validate Email
    const validateEmail = () =>  {
        console.log(emailRef.current.value);
        if (!emailCheck(emailRef.current.value)) {
            updateImailIsValid(false);
        } else {
            updateImailIsValid(true);
        }
    } // Validate First Name
    const validateFirstName = () =>  {
        console.log(firstNameRef.current.value);
        if (!nameCheck(firstNameRef.current.value)) {
            updateFirstNameIsValid(false);
        } else {
            updateFirstNameIsValid(true);
        }
    } // Validate Last Name
    const validateLastName = () =>  {
        console.log(lastNameRef.current.value);
        if (!nameCheck(lastNameRef.current.value)) {
            updateLastNameIsValid(false);
        } else {
            updateLastNameIsValid(true);
        }
    }     // Validate Address
    const validateAddress = () =>  {
        console.log(addressRef.current.value);
        if (!addressCheck( addressRef.current.value)) {
            updateAddressIsValid(false);
        } else {
            updateAddressIsValid(true);
        }
    }
    return (
        <form className="Account Pages">
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
                <div className="right">
                    <button onClick={ handleClick } >
                        Register
                    </button>
                </div>
            </div>
        </form>
    )
};
export default Account;