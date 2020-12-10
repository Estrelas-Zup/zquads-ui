import React, { useState } from 'react'
import { headers } from '../../core/request'
import FormGroup from '../../components/FormGroup'


import './style.css'


  const Login = () => {
    const [email, setUserValue] = useState('')
    const [password, setPasswordValue] = useState('')
  
    const onSubmit = () => {
      const data = {
        email: email,
        password: password,
      }
  
      fetch('http://localhost:8080/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)})
      .then(res => res.json())
      .then(
        (result) => {
          localStorage.setItem('token', result.token)
        
        }
      )
    }

 

    return (
      <div className="container">
        <div className="forms-container">

          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <FormGroup
                id='usuario'
                name='usuario'
                value={email}
                onChange={setUserValue}
                label='Usuário'
                placeholder='Insira o nome de usuário'
              />

              <FormGroup
                id='senha'
                name='senha'
                value={password}
                onChange={setPasswordValue}
                label='Senha'
                placeholder='Insira a senha'
                type='password'
              />
              <div className='ButtonContainer'>
                <button
                  type='button'
                  onClick={onSubmit}
                >
                  Enviar
          </button>
              </div>


              

              
              <input type="submit" value="Entrar" className="btn solid" onClick={onSubmit} />
              <hr />
              <input type="submit" value="Criar uma conta" className="btn solid register" />
            </form>
          </div>
        </div>

        
      </div>
    )
  }

  export default Login
