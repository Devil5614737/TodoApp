import "../styles/navbar.css";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../firebase/config";
import { useEffect } from "react";

const Navbar = ({setTodos}) => {



  // implementing google login system
  const google = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // const user = result.user;
        localStorage.setItem("token", token);
      })
      .catch((error) => {
        if (error) {
          window.alert("something went wrong..");
        }
      });
  };


const handleLogout=()=>{
  localStorage.removeItem('token');
  //  window.location='/'
}

useEffect(()=>{
  const container=document.querySelector('.main');
  const btn=document.querySelector('.switch')
  btn.addEventListener('click',()=>{
    container.classList.toggle('active')
    document.querySelector('.navbar').classList.toggle('dark')
    btn.textContent='on'
   
  })
})

  return (
    <div className="navbar ">
      <div className="header">
        <div className="logo">
          <p>TodoApp</p>
        </div>
        <div className="right">
          <ul>
            <li>
              <p>
                Dark Mode: <span className="switch">off</span>
              </p>
            </li>
            <li>
              {localStorage.getItem('token')?<p onClick={handleLogout}>SignOut</p>:<p onClick={google}>SignIn</p>}
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
