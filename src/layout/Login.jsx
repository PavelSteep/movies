import React from 'react';
import './Login.css';

function Login({ onCloseLoginForm }) {
    // Добавляем функцию для обработки клика на крестик
    const handleCloseLoginForm = () => {
        onCloseLoginForm();
    };

    return (
        <div className='login-form active'>
            <form>
                <div id='close-login-form' className="fa-solid fa-xmark" onClick={handleCloseLoginForm}></div>
                <h2>Welcome back!</h2>
                <div className='wrap-img'>
                    <a href="!#" className="login-logo">
                        <img src={process.env.PUBLIC_URL+'/logo.png'} className='login__logo' alt='logo' />
                    </a>
                </div>
                <div className='frm'>
                    <i className="fa-regular fa-address-card"></i>
                    <input type='text' className="box" placeholder='login...' style={{ color: '#90949C'}} />
                </div>
                <div className='frm'>
                    <i className="fa-solid fa-phone-volume"></i>
                    <input type='text' className="box" placeholder='phone number' style={{ color: '#90949C'}} />
                </div>
                <div className='frm'>
                    <i className="fa-regular fa-envelope"></i>
                    <input type='email' className="box" placeholder='email...' style={{ color: '#90949C'}} />
                </div>
                <div className='frm req'>
                    <input type='checkbox' id='remember' />
                    <label htmlFor='remember'>Remember me</label>
                    <a href='!#'>Forgot password</a>
                </div>
                <input type='submit' value='Login' className='link-bnt' />
                <div className='register-block-footer'>
                    <p>Don't have an account? <span>Register</span></p>
                </div>
            </form>
        </div>
    )
}

export default Login;



// import React, { useEffect } from 'react';
// import './Login.css';

// function Login({ onCloseLoginForm }) {
//   useEffect(() => {
//     const handleCloseLoginForm = () => {
//       onCloseLoginForm();
//     };

//     const closeLoginFormElement = document.getElementById('close-login-form');

//     if (closeLoginFormElement) {
//       closeLoginFormElement.addEventListener('click', handleCloseLoginForm);

//       // Удаляем слушателя при размонтировании
//       return () => {
//         closeLoginFormElement.removeEventListener('click', handleCloseLoginForm);
//       };
//     }
//   }, [onCloseLoginForm]);

//   return (
//     <div className='login-form active'>
//       <form>
//         <div id='close-login-form' className="fa-solid fa-xmark"></div>
//         <h2>Welcome back!</h2>
//         <div className='frm'>
//                 <i className="fa-regular fa-address-card"></i>
//                 <input type='text' className="box" placeholder='login...' />
//             </div>
//             <div className='frm'>
//                 <i className="fa-solid fa-phone-volume"></i>
//                 <input type='text' className="box" placeholder='phone number' />
//             </div>
//             <div className='frm'>
//                 <i className="fa-regular fa-envelope"></i>
//                 <input type='email' className="box" placeholder='email...' />
//             </div>
//             <div className='frm req'>
//                 <input type='checkbox' id='remember' />
//                 <label htmlFor='remember'>Remember me</label>
//                 <a href='!#'>Forgot password</a>
//             </div>
//             <input type='submit' value='Login' className='link-bnt' />
//       </form>
//     </div>
//   );
// }

// export default Login;