import PropTypes from 'prop-types'
import qboy from '../src/assets/qboy.jpg'

export default function Body(props){
    return(
        <div className="person">
            <img src={qboy} alt="person-logo" className="person-picture" />
            <p><strong>{props.name}</strong></p>
            <p>{(props.case).toUpperCase()}</p>
            <p>ARRESTED</p>
            <p>ARRESTED</p>
            {/* <p>Is it Healthy? {props.isHealthy? "Yes" : "No"}</p>
            <p><strong>{props.name}</strong> is {props.age} year's old!</p> */}
        </div>
    )
}

Body.defaultProps = {
    name: "Guest",
    food: "Unknown",
    isHealthy: false,
    age: 0
}

Body.propTypes = {
    name: PropTypes.string,
    food: PropTypes.string,
    isHealthy: PropTypes.bool,
    age: PropTypes.number
    }


