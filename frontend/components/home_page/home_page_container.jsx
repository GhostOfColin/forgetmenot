import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    users: users,
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchusers: () => dispatch(fetchusers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);