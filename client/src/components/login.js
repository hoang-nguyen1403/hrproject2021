import React from 'react'
import ReactDOM from 'react-dom';

import './Semantic/semantic.min.css'
import './style.css'
import {Button, Modal} from 'semantic-ui-react'
import Register from './RegisterForm'
import Main_login from "./main_login";

function Load_main_login(){
    ReactDOM.render(<Main_login/>, document.getElementById("root"))
}

function Register_open(){
    ReactDOM.render(<Register />, document.getElementById("main_root"))
}


const Login = (props) =>{
    const [open1, setOpen] = React.useState(false)
    const [secondOpen, setSecondOpen] = React.useState(false)
    return(
        <>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open1}
                trigger={<a href='#' className='black' >
                    <i className="black user circle outline icon"></i><span className='black color_text'>Login</span>
                    </a>}
            >
                <Modal.Content >
                    <Modal.Description>
                        <div className='ui container'>
                            <div className="ui placeholder segment">
                                <div className="ui two column very relaxed stackable grid">
                                    <div className="column">
                                        <form className="ui form">
                                            <div className="field">
                                                <label>Username</label>
                                                <div className="ui left icon input">
                                                    <input type="text" placeholder="Username" />
                                                    <i className="user icon"></i>
                                                </div>
                                            </div>
                                            <div className="field">
                                                <label>Password</label>
                                                <div className="ui left icon input">
                                                    <input type="password" />
                                                    <i className="lock icon"></i>
                                                </div>
                                            </div>

                                        </form>
                                        <button className="ui big blue submit button" onClick={Load_main_login} >Login</button>
                                    </div>
                                    <div className="middle aligned column">
                                        <button className='ui big button' onClick={() => setSecondOpen(true)} primary>
                                            <i className="signup icon"></i>
                                            Sign Up
                                        </button>

                                    </div>
                                </div>
                                <div className="ui vertical divider">
                                    Or
                                </div>
                            </div>
                        </div>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <div className='ui grid'>
                        <div className='row'>
                            <div className='center aligned  column'>
                                <h4> Wellcome HR Lotus</h4>
                            </div>
                        </div>

                    </div>

                </Modal.Actions>
            </Modal>
            <Modal
                onClose={() => setSecondOpen(false)}
                open={secondOpen}
                size='small'
            >
                <Modal.Content>
                    <Register />
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        icon='check'
                        content='All Done'
                        onClick={() => setSecondOpen(false)}
                    />
                </Modal.Actions>
            </Modal>
        </>
    )
}


export default Login;