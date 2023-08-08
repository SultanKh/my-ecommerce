
import './ErrorMessage.css'

const ErrorMessage = ({errorMessage}) => {
    return <div className="alert alert-error">
        <div className="icon__wrapper">
            <span className="mdi mdi-alert-outline"></span>
        </div>
        <p>{errorMessage}</p>
    </div>
}

export default ErrorMessage;