import './App.css';
import Profile from "./profile/profile"

function App() {
  const handleName = (name) => {
    alert(name);}
  return (
    <div className="App">
      <Profile fullName="Mohamed Ali Amor" bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." profession="full Stack Developer" handleName={handleName}>
        <img src="images/profil-pic.jpg" alt="" style={{height:350, width:300,position:"absolute", left:"10vw", top:20, borderRadius:10}} / >
      </Profile>
    </div>
  );
}

export default App;