import React from 'react'
import * as yup from 'yup'
import { Formik , Form , Field , ErrorMessage} from 'formik'
import YupPassword from 'yup-password';
YupPassword(yup);
const Formm = () => {

  const defaultValue ={
    name : "",
    email : "",
    password : "",
    gender: "",
    termsAndConditon: false,
    transportMode: ""
  }

const validationSchema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup.string().required("Please enter your email").email("please enter valid email"),
  password: yup.string().required('required').min(
        8,
        'password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special'
      )
      .minLowercase(1, 'password must contain at least 1 lower case letter')
      .minUppercase(1, 'password must contain at least 1 upper case letter')
      .minNumbers(1, 'password must contain at least 1 number')
      .minSymbols(1, 'password must contain at least 1 special character'),
  gender: yup.string().required("Please enter your gender"),
  transportMode: yup.string().required("Please select  transportMode"),
  termsAndConditon: yup.boolean().oneOf([true], "please accept terms and Conditon")
})

  const handleSubmit = (values)=>{
    console.log("values", values)
  }
  return (
    <div className='container'>
    <div className='col-md-12 text-center mt-5'>
      <h1>Form validation using formik and yup</h1>
      <Formik initialValues={defaultValue}
      validationSchema = {validationSchema}
      onSubmit={handleSubmit}
      >
            <Form>
              <div className='col-md-12 mt-4'>
              <Field type="text" name="name" placeholder="Enter your name" className="form-control" />
              <p className='text-danger'>
                  <ErrorMessage name='name' />
              </p>
              </div>
              <div className='col-md-12 mt-4'>
              <Field type="text" name="email" placeholder="Enter your email" className="form-control" />
              <p className='text-danger'>
                  <ErrorMessage name='email' />
              </p>
              </div>
              <div className='col-md-12 mt-4'>
              <Field type="text" name="password" placeholder="Enter your password" className="form-control" />
              <p className='text-danger'>
                  <ErrorMessage name='password' />
              </p>
              </div>
              <div className='col-md-12 mt-4'>
                 <Field component='select' name="gender" placeholder='Select your gender' className='form-control'>
                    <option value="" disabled>Please select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                 </Field>
                 <p className='text-danger'>
                  <ErrorMessage name='gender' />
              </p>
              </div>
              <div className='col-md-12 mt-4'>
                <label className='form-inline'>
                  <Field type="checkbox" name ='termsAndConditon'></Field>
                  I accept Term and Conditions.!!
                </label>
                <p className='text-danger'>
                  <ErrorMessage name='termsAndConditon' />
              </p>
              </div>
              <div className='col-md-12 mt-4'>
                <label >
                  <Field type='radio' name='transportMode' value = 'Bike'>
                  </Field>
                  Bike
                </label>
                <label >
                  <Field type='radio' name='transportMode' value = 'Car'>
                  </Field>
                  Car
                </label>
                <p className='text-danger'>
                  <ErrorMessage name='transportMode' />
              </p>
              </div>
              <button className='btn btn-primary' type='submit'>
                  Submit
              </button>
            </Form>
      </Formik>
    </div>
    </div>
  )
}

export default Formm