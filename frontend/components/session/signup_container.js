import { connect } from "react-redux";

import { createNewUser } from "../../actions/session";
import Signup from "./signup";

const mapStateToProps = null;

const mapDispatchToProps = ( dispatch ) => {
    return {
        createNewUser: formUser => dispatch(createNewUser(formUser)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);