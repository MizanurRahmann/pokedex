import React from 'react'


function Loading() {
    const getMainElementToCenter = {
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "Center",
        alignItems: "center"
    }
    const forLoading = {
        width: "100%",
        display: "flex",
        justifyContent: "center"
    }
    const forHeading = {
        letterSpacing: "4px",
        fontSize: "3rem",
        textTransform: "uppercase",
        textAlign: "center",
        fontWeight: "300",
        padding: "20px 0 0 0"
    }
    
    return (
        <div style={getMainElementToCenter}>
            <div style={{width: "50%"}}>
                <div style={forLoading}>
                    <img 
                        src={require('../../decorations/images/loading.gif')} 
                        style={{width: "80px"}}
                        alt="loading_image"
                    />
                </div>
                <h1 style={forHeading}>
                    Loading
                </h1>
            </div>
        </div>
    )
}

export default Loading
