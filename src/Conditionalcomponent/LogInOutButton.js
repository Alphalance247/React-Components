import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const LogInOutButton = function (props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) return <LoginButton />;
  return <LogoutButton />;
};
export default LogInOutButton;
