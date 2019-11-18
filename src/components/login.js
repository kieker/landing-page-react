import React from 'react';

class Login extends React.Component {
    username = React.createRef();

    handleSubmit = event => {
        event.preventDefault();
        const username = this.username.current.value;
        this.props.history.push(`/dashboard/${username}`);
    }
    render() {
        return (
            <form className="user-selector">
                <h2> Please enter your username: </h2>
                <input type="text" required placeholder="Username" ref={this.username} />
                <button type="submit" onClick={this.handleSubmit}>Visit Dashboard</button>
            </form>
        )
    }
}
export default Login;