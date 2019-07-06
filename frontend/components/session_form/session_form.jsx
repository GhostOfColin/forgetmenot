import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul className="error-list">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  demo(e) {
    e.preventDefault();
    this.props.login({username: "guest", password: "password"})
  }

  componentDidMount() {
    this.props.clearErrors()
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  render() {
    return (
      <div className="session-screen">
        <div className="row">
          <div className="session-left">

          </div>

          <div className="session-right">
            <div className="alt-page-button-container">
              {this.props.navLink}
            </div>
            <div className="session-form-wrapper">
              <div className="session-form-container">
                <h1 className="session-form-header">{this.props.pageText}</h1>
                <br/>
                <form onSubmit={this.handleSubmit}>
                  <div>
                    <label>
                      <input type="text"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.update('username')}
                      />
                    </label>
                    <br/>
                    <br/>
                    <label>
                      <input type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.update('password')}
                      />
                    </label>
                    <br/>
                    <br/>
                    <input type="submit" value={this.props.pageButtonText} />
                  </div>
                  {this.renderErrors()}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>  
    );
  }
}

export default withRouter(SessionForm);