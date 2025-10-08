import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Condition = () => {
    const [isLoggedIn, setisLoggedIn] =useState(false);
    const navigate =useNavigate('');

    return(
        <>
        <div>
                {isLoggedIn ? <h1>Hi User Or Hi Admin</h1> : <h1>Please Log In User</h1>}

                <button onClick={() => {
  setisLoggedIn(true);
  navigate('/form'); // login hone ke baad dusre page par bhej do
}}>
  Login
</button>

            
        </div>
        </>
    )


}
//     if(isLoggedIn){
//         return(
//             <h1>Welcome Admin you are logged in</h1>
//         )
//     }
//     else{
//         navigate('/form')
//         return(
//             <>
//             <h1>You are not logged please login</h1>
//             <button onlick={setisLoggedIn(true)}>Login</button>
//             </>
//         )
//     }
//   return (
//     <div>
      
//     </div>
//   )
// }

export default Condition
