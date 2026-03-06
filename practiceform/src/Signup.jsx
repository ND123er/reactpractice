import React, { useState } from "react";
import "./SignupForm.css";

function Signup() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  function handleChange(e){
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function validate(){
    const newErrors = {};

    if(!formData.name.trim()){
      newErrors.name = "Name is required";
    }

    if(!formData.email.trim()){
      newErrors.email = "Email is required";
    }

    if(!formData.password.trim()){
      newErrors.password = "Password is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(formData.email && !emailRegex.test(formData.email)){
      newErrors.email = "Invalid email format";
    }

    if(formData.password && formData.password.length < 6){
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  }

  function handleSubmit(e){
    e.preventDefault();

    const validationErrors = validate();

    if(Object.keys(validationErrors).length > 0){
      setErrors(validationErrors);
      return;
    }

    console.log("Form Data:", formData);

    setFormData({
      name: "",
      email: "",
      password: ""
    });

    setErrors({});
  }

  return (
    <div className="form-container">
      <form className="signup-form" onSubmit={handleSubmit}>

        <h2>Create Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="text"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Sign Up</button>

      </form>
    </div>
  );
}

export default Signup;