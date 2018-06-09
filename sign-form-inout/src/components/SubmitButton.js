import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import {MdArrowForward} from 'react-icons/lib/md';
import {FaFacebook, FaGooglePlus, FaTwitter} from 'react-icons/lib/fa';

const SubmitButton = (props) => {
    let socialNets = null;

    if (props.type === 'signIn') {
        socialNets = (s
            <div className='socialNets'>
                <FaGooglePlus className='socialNetsIcon'/>
                <FaTwitter className='socialNetsIcon'/>
                <FaFacebook className='socialNetsIcon'/>
            </div>
        )
    } else {
        socialNets = (
            <div className='socialNets'>
            </div>
        )
    }
    return (
        <div className='submitButton'>
            {socialNets}
            <button className={props.type === 'signIn' ? 'submitSignIn' : 'submitSignUp'}>
                <MdArrowForward/>
            </button>
        </div>
    )
};
SubmitButton.PropTypes = {
    type: PropTypes.string
}
export default SubmitButton;