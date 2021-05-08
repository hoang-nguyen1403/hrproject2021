import React from 'react'
import ReactDOM from 'react-dom';

import './Semantic/semantic.min.css'
import './style.css'
import {Modal} from "semantic-ui-react";
import UserDataService from "../services/user_services";

const options = [
    {
        label: "Select your team...",
        value: "",
    },
    {
        label: "Production",
        value: "Production",
    },
    {
        label: "Marketing",
        value: "Marketing",
    },
    {
        label: "Sale",
        value: "Sale",
    },
    {
        label: "IT",
        value: "IT",
    },
    {
        label: "HR",
        value: "HR",
    },
    {
        label: "Manager",
        value: "Manager",
    },
];

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangeFname = this.onChangeFname.bind(this);
        this.onChangeLname = this.onChangeLname.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeTeam = this.onChangeTeam.bind(this);

        this.saveUser = this.saveUser.bind(this);
        this.newUser = this.newUser.bind(this);

        this.state = {
            id: null,
            user_name: "",
            lname: "",
            fname: "",
            password: "",
            email: "",
            address: "",
            team: "",
            country: "",
            gender: "",
            is_admin: false,
            submitted: false
        };
    }

    onChangeUser(e) {
        this.setState({
            user_name: e.target.value
        });
    }

    onChangeFname(e) {
        this.setState({
            fname: e.target.value
        });
    }

    onChangeLname(e) {
        this.setState({
            lname: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        });
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onChangeCountry(e) {
        this.setState({
            country: e.target.value
        });
    }

    onChangeTeam(e) {
        this.setState({
            team: e.target.value
        });
    }

    saveUser() {
        var data = {
            user_name: this.state.user_name,
            full_name: this.state.fname + " " + this.state.lname,
            password: this.state.password,
            email: this.state.email,
            address: this.state.address,
            gender: this.state.gender,
            is_admin: this.state.is_admin,
            team: this.state.team,
            country: this.state.country
        };

        UserDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    user_name: response.data.user_name,
                    full_name: response.data.full_name,
                    password: response.data.password,
                    email: response.data.email,
                    address: response.data.address,
                    gender: response.data.gender,
                    team: response.data.team,
                    country: response.data.country,
                    is_admin: response.data.is_admin,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newUser() {

    }
    render()
    {
        return (
            <div className='ui container'>
                <form className="ui form">
                    <h1 className="ui dividing header">Register Information</h1>
                    <div className="field">
                        <label>User Name - Password</label>
                        <div className="two fields">
                            <div className="field">
                                <input type="text" name="user_name" id="user_name"
                                       value={this.state.user_name}
                                       onChange={this.onChangeUser}
                                       placeholder="User"/>
                            </div>
                            <div className="field">
                                <input type="password" name="password" id="password"
                                       value={this.state.password}
                                       onChange={this.onChangePassword}
                                       placeholder="Password"/>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label>Name</label>
                        <div className="two fields">
                            <div className="field">
                                <input type="text" name="fname" id="fname"
                                       value={this.state.fname}
                                       onChange={this.onChangeFname}
                                       placeholder="First Name"/>
                            </div>
                            <div className="field">
                                <input type="text" name="lname" id="lname"
                                       value={this.state.lname}
                                       onChange={this.onChangeLname} placeholder="Last Name"/>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label>Personal Address</label>
                        <div className="fields">
                            <div className="sixteen wide field">
                                <input type="text" name="address" id="address"
                                       value={this.state.address}
                                       onChange={this.onChangeAddress} placeholder="Street Address"/>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <div className="fields">
                            <div className="sixteen wide field">
                                <input type="text" name="email" id="email"
                                       value={this.state.email}
                                       onChange={this.onChangeEmail} placeholder="abcja@gmail.com"/>
                            </div>
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Team</label>
                            <select className="ui fluid dropdown"
                                    name ="team" id="team"
                                    value={this.state.team}
                                    onChange={this.onChangeTeam}>
                                {options.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="field">
                            <label>Country</label>
                            <div className="twelve wide field">
                                <input type="text" name="country" id="country"
                                       value={this.state.country}
                                       onChange={this.onChangeCountry} placeholder="Country"/>
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
                    <div className="ui button" tabIndex="0" onClick={this.saveUser}>Submit</div>
                </form>
            </div>
        );
    }
}