import React from "react";

export default class Login extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            username: "",
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        this.props.login({
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }).then(() => {
            this.props.history.push("/chirps")
        });
    }

    handleInput(key){
        return (e) => {
            this.setState({
                [key]: e.target.value
            });
        }
    }

    render(){
        return (
            <div className="session-form">
                <h2>Log In!</h2>
                <form>

                    <label> username:<br/>
                        <input
                        type="text"
                        value={this.state.username}
                        onChange={this.handleInput("username")}
                        />
                    </label>
                    
                    <label> password:<br/>
                        <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput("password")}
                        />
                    </label>

                    <button onClick={this.handleSubmit}>Login</button>

                </form>
            </div>
        );
    }

}