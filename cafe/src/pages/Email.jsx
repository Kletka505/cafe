import "../sass/email/main.sass";
import LoginBear from "../img/login-bear.svg";
import Field from "../components/Field/Field";

function Email() {
  function SendEmail(){
    let email = document.getElementById('email-field-name').value;
    
    let xhr = new XMLHttpRequest(); 
    xhr.withCredentials = true
    let url = 'http://127.0.0.1:8000/auth/forgot-password';
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json"); 
    xhr.onreadystatechange = function () {
      if (xhr.status === 202) {
          window.location.href = '/code';
      } else { 
          console.log('Error');
      }
      }  
    var data = JSON.stringify({"email": email});
    xhr.send(data);

  }
  return (
    <>
      <div className="email-main">
        <header className="email-header">
          <img className="email-header__img" src={LoginBear} />
          <h1 className="email-header__h1">ВВЕДИТЕ ПОЧТУ</h1>
        </header>
        <div className="email-content">
          <Field type="email" idInput="email-field-name"/>
        </div>
        <button className="email-button" onClick={SendEmail}>ПРОДОЛЖИТЬ</button>
      </div>
    </>
  );
}

export default Email;
