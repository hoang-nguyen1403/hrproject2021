import React from 'react'
import ReactDOM from 'react-dom';

import './Semantic/semantic.min.css'
import './style.css'
import {Button, Modal} from 'semantic-ui-react'
import Logined_Menubar from "./logined_menubar";
import Logined_Main from "./logined_main";

const Main_login = (props) =>{
    return (
        <div className='ui grid'>
            <div className='row'>
                <div className='column'>
                    <Logined_Menubar/>
                </div>
            </div>
            <div className="row divider"></div>
            <div className='row'>
                <div className='column'>
                    <Logined_Main/>
                </div>
            </div>

        </div>
    )
}

export default Main_login