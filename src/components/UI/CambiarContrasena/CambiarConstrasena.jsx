import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Modal } from '../../UI/Modal/Modal'
import '../../../assets/css/CambiarContrasena.css'
import { Logout } from '../../helpers/logout/Logout'


export const CambiarConstrasena = () => {

    let username = localStorage.getItem('username')
    let idUser = localStorage.getItem('idUser')
    const [estadoModalEmail, cambiarEstadoModalEmail] = useState(false)
    const [usuario, setUsuario] = useState({})
    const [state, setState] = useState({
        form: {
            username: username,
            password: '',
        },
        error: false,
        errorMsg: '',
    })

    const obtenerUsuario = async () =>{
        const response = await fetch("https://leon-ebanisteria.herokuapp.com/users/usuario/" + idUser)
        const responseJSON =await response.json()
        setUsuario(responseJSON)
    }

    const manejadorSubmit = (e) => {
        e.preventDefault()
    }

    const manejadorChange = async (e) => {
        await setState({
            form: {
                ...state.form,
                username : username,
                [e.target.name]: e.target.value,
            },
        })
    }

    const manejadorChange2 = (e) => {
        const password = document.querySelector('#passwordNC')
        setUsuario({
            ...usuario,
            password: password.value,
        })
    }

    useEffect(() => {
        obtenerUsuario()
    }, [])
    

    const manejadorBoton = () => {
        let url = 'https://leon-ebanisteria.herokuapp.com/login/'
        let form = document.querySelector('#form1')
        let form2 = document.querySelector('#form2')

        axios
            .post(url, state.form)
            .then((response) => {
                if (response.status === 200) {
                    // form.style.visibility="hidden"
                    // form.style.opacity="0"
                    form2.style.visibility="visible"
                    form2.style.opacity="1"
                    form2.style.right="0"
                }
            })
            .catch((error) => {
                cambiarEstadoModalEmail(!estadoModalEmail)
                const inputContrasena = document.getElementById('password')

                inputContrasena.value = ''
                setState({
                    error: true,
                    errorMsg: 'la contraseña es incorrecta',
                })
            })
    }

    const manejadorBoton2 = () => {
        const password1 = document.getElementById('passwordN')
        const password2 = document.getElementById('passwordNC')
        
        if(password1.value === password2.value){
            cambiarContrasena()
        }else{
            cambiarEstadoModalEmail(!estadoModalEmail)
            const inputContrasena = document.getElementById('password')

                inputContrasena.value = ''
                setState({
                    error: true,
                    errorMsg: 'la contraseña es incorrecta',
                })
        }
    }

    const cambiarContrasena=()=>{
        let url = 'https://leon-ebanisteria.herokuapp.com/users/usuario/'
        axios
        .put(url+idUser+"/", usuario)
        .then((response) => {
            if (response.status === 200) {
                Logout()
                window.location.href="/Login"
            }
        })
        .catch((error) => {
            console.log(error)
            cambiarEstadoModalEmail(!estadoModalEmail)
            const inputContrasena = document.getElementById('passwordN')
            const inputContrasena2 = document.getElementById('passwordNC')

            inputContrasena.value = ''
            inputContrasena2.value = ''
            setState({
                error: true,
                errorMsg: 'No se pudo cambiar su contraseña',
            })
        })
    }

    return (
        <>
            {state.error === true ?(
            <Modal
                estado={estadoModalEmail}
                cambiarEstado={cambiarEstadoModalEmail}
                color={"#FF5733"}
            >
                <p>{state.errorMsg}</p>
            </Modal>
        )
        :""
        }
        
        <div className="containerFormC">
        <form className='formLogin formCambiarC' id="form1" onSubmit={manejadorSubmit}>
            <div className='txt_field'>
                <input
                    type='password'
                    id='password'
                    name='password'
                    required
                    onChange={manejadorChange}
                />
                <label className='labelForm' for='password'>
                    Contraseña Actual
                </label>
                <span></span>
            </div>

            <div className='divbtn'>
                <button
                    className='btnSubmit'
                    onClick={manejadorBoton}
                >
                    Verificar
                </button>
            </div>
            
        </form>
        <form className='formLogin formCambiarC2' id="form2" onSubmit={manejadorSubmit}>
            <div className='txt_field'>
                <input
                    type='password'
                    id='passwordN'
                    name='password'
                    required
                />
                <label className='labelForm' for='passwordN'>
                    Contraseña Nueva
                </label>
                <span></span>
            </div>
            <div className='txt_field'>
                <input
                    type='password'
                    id='passwordNC'
                    name='password'
                    required
                    onChange={manejadorChange2}
                />
                <label className='labelForm' for='passwordNC'>
                    Confirmar contraseña
                </label>
                <span></span>
            </div>

            <div className='divbtn'>
                <button
                    className='btnSubmit'
                    onClick={manejadorBoton2}
                >
                    Cambiar contraseña
                </button>
            </div>
        </form>
        </div>

        </>
    )
}
