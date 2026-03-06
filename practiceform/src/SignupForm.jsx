import React, { useState } from "react";

function SignupForm() {

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

    // Required validation
    if(!formData.name.trim()){
      newErrors.name = "Name is required";
    }

    if(!formData.email.trim()){
      newErrors.email = "Email is required";
    }

    if(!formData.password.trim()){
      newErrors.password = "Password is required";
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(formData.email && !emailRegex.test(formData.email)){
      newErrors.email = "Invalid email format";
    }

    // Password length validation
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

    // clear form
    setFormData({
      name: "",
      email: "",
      password: ""
    });

    setErrors({});
  }

  return (
    <form onSubmit={handleSubmit}>

      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button type="submit">Submit</button>

    </form>
  );
}

export default SignupForm;