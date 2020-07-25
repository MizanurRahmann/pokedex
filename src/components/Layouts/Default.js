import React from 'react'
import '../../decorations/styles/css/Default.css';

function Default() {
    return (
        <div className="container page-not-found">
            <div className="fourOfour">
                <div className=" middle">
                    <h1>4</h1>
                    <img src={require('../../decorations/images/poke-dribbble.png')} alt="logo" />
                    <h1>4</h1>
                </div>
            </div>
            <div className="line"></div>
            <div className="fourOfour-message">
                <div className="message">
                    <p>
                        Unfortunately something went wrong. Please double check the url or go back to the
                    <span> landing page</span>. If you continue get this error - please email me at mr926560@gmial.com
                </p>
                    <a href="/">Go Back</a>
                </div>
            </div>
        </div>
    )
}

export default Default
