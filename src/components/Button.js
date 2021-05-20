//import PropTypes from 'prop-types'
//import {useState} from 'react'
const Square = (props) => {
   
    return (
        
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}
/* SquareButton.defaultProps = {
    color: '#9CF867'
}
 */
export default Square
