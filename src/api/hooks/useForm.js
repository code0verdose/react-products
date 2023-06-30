import { useState } from "react";

export const useForm = () => {
  const [formData, setFormData] = useState({});
  const [response, setResponse] = useState({});

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (evt) => {
    evt.preventDefault()
    const requestBody = JSON.stringify(formData);

    const req = fetch("https://gateway.scan-interfax.ru/api/v1/account/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    })
      .then((res) => res.json())
      .then((data) => setResponse(data));
  };

  return { submitHandler, handleChange, formData, response };
};
