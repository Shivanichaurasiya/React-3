
import React ,{useState} from 'react';
 export function Form(){
    const [name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const[password,setPassword]=useState("");
    const[isChecked,setIsChecked]=useState(false);
    const[gender,setGender]=useState("");
    const[city,setCity]=useState("");

     function handleSubmit(e){
        e.preventDefault();
        console.log(name,email,phone,password,isChecked,gender)
    }


    return(
        <>
        <h2>Registration form</h2>
        <form onSubmit={handleSubmit}>
            <label>Name
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="FullName" placeholder="Name"/><br/>
                </label><br/>
                <label>Email
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="Email" placeholder="Email"/><br/>
                </label><br/>
                 <label>Phone
                <input type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} name="Phone" placeholder="Phone"/><br/>
                </label><br/>
                 <label>Password
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="Password" placeholder="Password"/><br/>
                </label><br/>
               <label>
                <input type="checkbox" checked={isChecked} onChange={(e)=>setIsChecked(e.target.checked)} />
                Accept Terms
                </label><br/>
               <label>
                <input type="radio" value="Male" checked={gender==="Male"} onChange={(e)=>setGender(e.target.value)}/>
                Male
                </label><br/>
                <label>
                    <input type="radio" value="Female" checked={gender==="Female"} onChange={(e)=>setGender(e.target.value)}/>
                    Female
                    </label><br/>
            <select value={city} onChange={(e)=>setCity(e.target.value)}>
                <option value="">Select city</option>
                <option value="Delhi">Delhi</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Gujrat">Gujrat</option>
                <option value="Mumbai">Mumbai</option>

            </select>
            <br/>
            <button type="submit">submit</button>
  </form>  
       </>
    )
  }  


// import React, { useState } from "react";

// export function Form() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");

//   const [isChecked, setIsChecked] = useState(false);
//   const [gender, setGender] = useState("");
//   const [city, setCity] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(name, email, phone, password, isChecked, gender, city);
//   }

//   return (
//     <>
//       <h2>Registration form</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           name="FullName"
//           placeholder="Full Name"
//         />
//         <br />

//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           name="Email"
//           placeholder="Email"
//         />
//         <br />

//         <input
//           type="tel"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           name="Phone"
//           placeholder="Phone"
//         />
//         <br />

//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           name="Password"
//           placeholder="Password"
//         />
//         <br />

//         <label>
//           <input
//             type="checkbox"
//             checked={isChecked}
//             onChange={(e) => setIsChecked(e.target.checked)}
//           />
//           Accept Terms
//         </label>
//         <br />

//         <label>
//           <input
//             type="radio"
//             value="Male"
//             checked={gender === "Male"}
//             onChange={(e) => setGender(e.target.value)}
//           />
//           Male
//         </label>
//         <br />

//         <label>
//           <input
//             type="radio"
//             value="Female"
//             checked={gender === "Female"}
//             onChange={(e) => setGender(e.target.value)}
//           />
//           Female
//         </label>
//         <br />

//         <select value={city} onChange={(e) => setCity(e.target.value)}>
//           <option value="">Select city</option>
//           <option value="Delhi">Delhi</option>
//           <option value="Lucknow">Lucknow</option>
//           <option value="Gujrat">Gujrat</option>
//           <option value="Mumbai">Mumbai</option>
//         </select>
//         <br />

//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }
