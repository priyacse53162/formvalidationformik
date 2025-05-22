import './App.css'
import {Formik, Form, Field ,ErrorMessage} from "formik"
import * as Yup from "yup"
function App() {
  const validationform = Yup.object().shape({
    username: Yup.string().required("Enter valid username"),
    email:Yup.string().email("Enter valid email").required("Enter valid email"),
    password:Yup.string().min(8,"Min 8 letter").required("Enter valid password"),
    cpassword: Yup.string().oneOf([Yup.ref("password"),null],"Password not match").required("Enter valid Confirm password")
  })
  const initialvalues={
    username:"",
    email:"",
    password:"",
    cpassword:""
  }
  const handlesubmit=(values)=>{
    alert("submited sussesfully")
  }
  return (
    <div className="bgcontainer">
    <Formik 
      initialValues={initialvalues}
      validationSchema={validationform}
      onSubmit={handlesubmit}>
      {({errors, touched})=>(
        <Form className="form-container">
        <label className="input-label">Username:</label>
        <Field className="input-field" name='username' />
        <ErrorMessage className='errormsg' name='username' component="div"/>
        <label className="input-label">Email:</label>
        <Field className="input-field" name='email' />
        <ErrorMessage className='errormsg' name='email' component="div"/>
        <label className="input-label">Password:</label>
        <Field className="input-field" name='password' />
        <ErrorMessage className='errormsg' name='password' component="div"/>
        <label className="input-label">Confirm Password:</label>
        <Field className="input-field" name='cpassword' />
        <ErrorMessage className='errormsg' name='cpassword' component="div"/>
        <button className="submit-button" type="submit">Submit</button>
      </Form>
      )}
    </Formik>
    </div>
  )
}

export default App
