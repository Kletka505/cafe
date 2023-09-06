import '../sass/login/main.sass'
import LoginBear from '../img/login-bear.svg'
import Field from '../components/Field/Field'
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { HashLink as Link } from "react-router-hash-link";

function Login() {
    function LoginUser() {
        let email = document.getElementById('login-field-email').value;
        let password = document.getElementById('login-field-password').value;
        
        let xhr = new XMLHttpRequest(); 
        
        xhr.withCredentials = true
        let url = "http://127.0.0.1:8000/auth/login";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        

        
        xhr.onreadystatechange = function () {
            if (xhr.status === 200) {
                window.location.href = '/profile';
            } else { 
                window.location.href = '/login/error';
                console.log('Error');
            }
            }
        var data = 'username=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password);
        xhr.send(data);
        

    }

    return (
        <>
            <div className="login-main">
                <header className="login-header">
                    <img className='login-header__img' src={LoginBear} />
                    <h1 className='login-header__h1'>ВХОД</h1>
                </header>
                <div className='login-content'>
                    <Field text='Почта' idInput='login-field-email' idText='login-p-email'/>
                    <Field text='Пароль' idInput='login-field-password' idText='login-p-password'/>
                    <Link to='/authorization' className='login-content__registration'>
                        Регистрация
                    </Link>
                </div>
                <button className='login-button' onClick={LoginUser}>
                    ВОЙТИ
                </button>

            </div>
        </>
    );
}

export default Login;