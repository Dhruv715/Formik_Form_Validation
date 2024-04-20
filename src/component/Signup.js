import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("*First Name is Required"),
  lastName: Yup.string()
    .min(4, "Too Short!")
    .max(70, "Too Long!")
    .required("*Last Name is Required"),
  mobileNo: Yup.string()
    .min(10, "Too Short!")
    .max(10, "Too Long!")
    .required("*Contact No. is Required"),
  email: Yup.string().email("*Invalid email").required("*Email is Required"),
  nickName: Yup.string()
    .min(4, "Too Short!")
    .max(70, "Too Long!")
    .required("*Nick Name is Required"),
});
function Signup() {
  return (
    <div className="formcontrol">
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          mobileNo: "",
          email: "",
          nickName: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
          alert(JSON.stringify(values, null, 5))
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="firstName" placeholder="enter Fname here.." />

            <ErrorMessage name="firstName" component={"p"} />

            <Field
              name="lastName"
              type="text"
              placeholder="enter Lname here.."
            />
            <ErrorMessage name="lastName" component={"p"} />

            <Field
              name="mobileNo"
              type="text"
              placeholder="enter Mobile Number here.."
            />
            <ErrorMessage name="mobileNo" component={"p"} />

            <Field name="email" type="email" placeholder="enter Email here.." />
            <ErrorMessage name="email" component={"p"} />

            <Field
              name="nickName"
              type="text"
              placeholder="enter Nick name here.."
            />
            <ErrorMessage name="nickName" component={"p"} />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;
