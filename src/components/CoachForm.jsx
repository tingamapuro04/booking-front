/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";

const CoachForm = () => {
  const mobutu = "Mobutu";
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState("");

  const resetForm = () => {
    setName("");
    setDescription("");
    setCity("");
    setImage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(description);
    console.log(city);
    console.log(image);
    fetch(
      "https://booking-app-7i9f.onrender.com/api/v1/coaches",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        },
        body: JSON.stringify({
          name,
          description,
          image,
          city,
        }),
      },
      { withCredentials: true }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        console.log(response);
        throw new Error("Network response was not ok.");
      })
      .then((response) => console.log(response))
      .catch((response) => console.log(response));
    resetForm();
  };

  return (
    <div className="container w-75">
      <p>{mobutu}</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Coach Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            className="form-control"
            id="description"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            Coach Image
          </label>
          <input
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type="text"
            className="form-control"
            id="city"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            Coach City
          </label>
          <input
            onChange={(e) => setCity(e.target.value)}
            value={city}
            type="text"
            className="form-control"
            id="inputGroupFile02"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CoachForm;
