import "../sass/code/main.sass";
import LoginBear from "../img/login-bear.svg";
import Field from "../components/Field/Field";

function Code() {
  function SendCode(){

    let token = document.getElementById('token-field-name').value;
    let password = document.getElementById('password-field-name').value;
    
    let xhr = new XMLHttpRequest(); 
    xhr.withCredentials = true
    let url = 'http://127.0.0.1:8000/auth/reset-password';
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json"); 
    xhr.onreadystatechange = function () {
      if (xhr.status === 200) {
          window.location.href = '/login';
      } else { 
          console.log('Error');
      }
      }  
    var data = JSON.stringify({"token": token, "password": password});
    xhr.send(data);

  }
  return (
    <>
      <div className="code-main">
        <header className="code-header">
          <img className="code-header__img" src={LoginBear} />
          <h1 className="code-header__h1">ВВЕДИТЕ КОД</h1>
        </header>
        <div className="code-content">
          <Field type="text" idInput="token-field-name"/>
        </div>
        <h1 className="code-header__h1">ВВЕДИТЕ НОВЫЙ ПАРОЛь</h1>
        <div className="code-content">
          <Field type="text" idInput="password-field-name" />
        </div>
        <button className="code-button" onClick={SendCode}>ПРОДОЛЖИТЬ</button>
      </div>
    </>
  );
}

export default Code;
