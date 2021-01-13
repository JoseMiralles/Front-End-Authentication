import connect from "react-redux/lib/connect/connect";
import { login } from "../../actions/session";
import Login from "./login";

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
    return {
        login: (formUser) => dispatch(login(formUser))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Login);