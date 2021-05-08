import React from 'react'
import ReactDOM from 'react-dom';

import './Semantic/semantic.min.css'
import './style.css'
import {Modal} from "semantic-ui-react";

const Register = (props) => {
    return (
        <div className='ui container' >
            <form className="ui form">
                <h1 className="ui dividing header">Register Information</h1>
                <div className="field">
                    <label>Name</label>
                    <div className="two fields">
                        <div className="field">
                            <input type="text" name="shipping[first-name]" placeholder="First Name"/>
                        </div>
                        <div className="field">
                            <input type="text" name="shipping[last-name]" placeholder="Last Name"/>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label>Personal Address</label>
                    <div className="fields">
                        <div className="twelve wide field">
                            <input type="text" name="shipping[address]" placeholder="Street Address"/>
                        </div>
                        <div className="four wide field">
                            <input type="text" name="shipping[address-2]" placeholder="Apt #"/>
                        </div>
                    </div>
                </div>
                <div className="two fields">
                    <div className="field">
                        <label>State</label>
                        <select className="ui fluid dropdown">
                            <option value="">State</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </div>
                    <div className="field">
                        <label>Country</label>
                        <div className="twelve wide field">
                            <input type="text" name="country" placeholder="Country" />
                        </div>
                    </div>
                </div>
                <div className="inline fields">
                    <label>Gender</label>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="male" tabIndex="0" className="hidden"/>
                                <label>Male</label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="fmale" tabIndex="0" className="hidden"/>
                                <label>Fmale</label>
                        </div>
                    </div>
                </div>
                <div className="ui button" tabIndex="0">Submit</div>
            </form>
        </div>
)
}

export default Register;