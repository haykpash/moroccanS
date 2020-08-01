import React from 'react';
import './Account.scss';
import '../Pages.scss';

const Account  = () => {
    return (
        <div className="Account Pages">
            <div className="registration">
                <div className="form-group">
                    <div className="left">
                        <label htmlFor="FirstNamer">First Name</label> 
                    </div>
                    <div className="right">
                        <input
                        name="First Name" 
                        id="First Name" 
                        placeholder="First Name" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="left">
                        <label htmlFor="LastNamer">Last Name</label>
                    </div>
                    <div className="right">
                        <input 
                        name="Last Name" 
                        id="Last Name" 
                        placeholder="Last Name" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="left">
                        <label htmlFor="LastNamer">Address</label>
                    </div>
                    <div className="right">
                        <input 
                        name="Address" 
                        id="Address" 
                        placeholder="Address" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="left">
                        <label htmlFor="LastNamer">Email</label>
                    </div>
                    <div className="right">
                        <input 
                        name="Email" 
                        id="Email" 
                        placeholder="Email" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="left">
                        <label htmlFor="LastNamer">Pssword</label>
                    </div>
                    <div className="right pasword">
                        <input 
                            name="Pssword" 
                            id="Pssword" 
                            placeholder="Pssword"
                        />
                    </div>
                </div>
                

                    <div className="right">
                        <button>
                            Register
                        </button>
                    </div>
                
            </div>
        </div>
    )
};
export default Account;