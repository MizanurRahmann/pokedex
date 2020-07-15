import React from 'react'

function Pagination(props) {
    const {next, previous} = props;
    return (
        <div>
            { previous && <button onClick={previous}>Previos</button> }
            { next && <button onClick={next}>Next</button> }
        </div>
    )
}

export default Pagination
