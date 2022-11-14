import axios from "axios";
import react, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import NavBarSiswa from "../../../components/NavBarSiswa/NavBarSiswa";
import NavigationBar from "../../../components/NavigationBar/NavigationBar";
import {
  MDBBtn,
  MDBContainer,
  MDBCheckbox,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import logo from '../../../img/Lemon.png'


function Login(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')){
      navigate('/home');
    }
  },[]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('email',email);
    formData.append('password',password);

    await axios.post('/api/auth/login', formData)
    .then((response) => {

      console.log(response.data.access_token);
      localStorage.setItem('token',response.data.access_token);

      navigate('/dasboardsiswa');

    }).catch((error) => {
      console.log(error.response.data);
      setValidation(error.response.data);
    })
  }

  return(
    <div>
    <NavigationBar/>
    <MDBContainer fluid mt='5'>
        <MDBRow>
          <MDBCol md='3' lg='5' className='order-2 order-lg-1 d-flex flex-column align-items-center col1'>

            <p className="text-center h1 fw-bold mx-1 mx-md-4 mt-4">LOGIN SISWA</p>
            <p className="text-center h7 mb-4">Selamat datang di E-learning Lemon para siswa</p>
                  {
                    validation.error && (
                      <div className="alert alert-danger" role="alert">
                       { validation.error }
                        </div>
                    )
                  }
            <form onSubmit={loginHandler}>
            <div className="d-flex flex-row align-items-center mb-4">
              <MDBInput label="Alamat Email" type="text" className="w-100 mg1 form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
              {
                validation.email && (
                <small className="text-danger">
                   { validation.email[0] }
              </small>
              )
              }
            </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Kata Sandi</label>
                      <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="*******"/>
                      {
                        validation.password && (
                          <small className="text-danger">
                            { validation.password[0] }
                          </small>
                        )
                      }
                    </div>
                    <button className="btn btn-warning" type="submit">Login</button>
                  </form>
      
 </MDBCol>
 <MDBCol md='1' lg='5' className='d-flex align-items-center md1'>
            <MDBCardImage src={logo} fluid className='mt-4 md2'/>
          </MDBCol>

        </MDBRow>

</MDBContainer>
    </div>
  )
}
export default Login

  