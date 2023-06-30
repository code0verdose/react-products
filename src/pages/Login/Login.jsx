import React from "react";
import { useForm } from "../../api/hooks/useForm";

export const Login = () => {
  const { submitHandler, handleChange, formData, response } = useForm()

  return (
    <div>
      <a href="/">Home</a>
      <form onSubmit={submitHandler}>
        <input onChange={handleChange} name="login" type="text" />
        <input onChange={handleChange} name="password" type="password" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
