"use client";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { useState } from "react";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  message: string;
}

type FieldProps = {
  name: string;
  placeholder: string;
  errors: Record<string, string | undefined>;
  touched: Record<string, boolean | undefined>;
  as?: React.ElementType;
};

export default function ContactUsForm() {
  const [success, setSuccess] = useState<boolean>(false);

  const formValidation = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNo: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
    message: Yup.string()
      .required("Message is required")
      .min(20, "Message must be at least 20 characters"),
  });

  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    console.log("Form data", values);
    setSuccess(true);
    resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNo: "",
          message: "",
        }}
        validationSchema={formValidation}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <FieldInput
              name="firstName"
              placeholder="First name*"
              errors={errors}
              touched={touched}
            />
            <FieldInput
              name="lastName"
              placeholder="Last name*"
              errors={errors}
              touched={touched}
            />
            <FieldInput
              name="email"
              placeholder="Email address*"
              errors={errors}
              touched={touched}
            />
            <FieldInput
              name="phoneNo"
              placeholder="Contact number*"
              errors={errors}
              touched={touched}
            />
            <FieldInput
              name="message"
              placeholder="Message"
              as="textarea"
              errors={errors}
              touched={touched}
            />

            <button
              type="submit"
              className="buttonGradient text-white px-10 xl:px-12 py-3 xl:py-4 custom-text-md rounded-full"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      {success && (
        <div className="fixed inset-0 w-screen h-screen bg-black/80 flex items-center justify-center z-50">
          <SuccessPop onClose={()=>setSuccess(false)}/>
        </div>
      )}
    </div>
  );
}

const FieldInput = ({ name, placeholder, errors, touched, as }:FieldProps) => (
  <div className="mb-4">
    <Field
      as={as}
      name={name}
      placeholder={placeholder}
      className={`appearance-none w-full focus:bg-none py-3 px-5 pr-10 bg-white text-gray/50 border border-[#DBDBDB] rounded-md 
        focus:outline-none
        focus:border-green
        focus:shadow-[0_0_0_6px_rgba(255,255,255,0.47),5px_7px_4px_-5px_rgba(128,211,246,0.42),-1px_5px_4px_-2px_#D8C778,-5px_-5px_3.5px_-3px_rgba(242,136,156,0.27)]
        transition-all duration-300
        ${errors[name] && touched[name] ? "" : ""}`}
    />
    <ErrorMessage
      name={name}
      component="div"
      className=" bottom-0 text-red-500 text-xs mt-1"
    />
  </div>
);
const SuccessPop = ({ onClose }:{onClose:()=>void} ) =>{
  return (
    <div className="relative w-[90%] max-w-[35rem] p-[2px] rounded-2xl shadow-md">
      <div className="bg-white rounded-2xl px-4 md:px-10 py-4 md:py-12 text-center">
        {/* SUCCESS ICON */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-2xl font-semibold text-black mb-2">
          Message sent successfully
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-600 text-base leading-relaxed">
          Thank you for reaching out. We receive many inquiries daily and our
          team is dedicated to addressing each one. Please allow us up to 3
          business days to respond.
        </p>

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="mt-8 bg-lightDarkGreen cursor-pointer text-white px-10 py-3 rounded-xl font-medium hover:bg-darkBlue/80 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};
