import React from 'react'

function Pagination(props) {
    const {next, previous} = props;
    const buttonStyle = {
        width: "40px",
        height: "40px",
        margin: "0 10px",
        border: "none",
        outline: "none",
        borderRadius: "50%",
        background: "#fff",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    }

    return (
        <div>
            { previous && <button onClick={previous} style={buttonStyle}>
                <i className="fas fa-chevron-left"></i>
                </button> 
            }
            { next && <button onClick={next} style={buttonStyle}>
                <i className="fas fa-chevron-right"></i>
                </button> 
            }
        </div>
    )
}

export default Pagination
