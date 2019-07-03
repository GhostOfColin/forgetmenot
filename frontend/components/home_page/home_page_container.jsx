import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import HomePage from './home_page';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    users: users,
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  fetchusers: () => dispatch(fetchusers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);