
function UserGreeting(props){

const welcomeaMessage = <h2 className="welcome-message">
                       welcone  {props.username}
                       </h2>
const guest = <h2 className="guest">
  please log in to continue
             </h2>

return(props.isLoggedIn ? welcomeaMessage : guest);
}
export default UserGreeting