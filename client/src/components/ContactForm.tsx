import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Header from "./Header";
import Main from "./Main";

type Inputs = {
  firstName: string;
  lastName: string;
  notes: string;
};

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [formData, setFormData] = useState<Inputs | {}>({});
  const [formSubmit, setFormSubmit] = useState<boolean>(false);
  const [closeForm, setCloseForm] = useState<boolean>(false);

  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setFormData(data);
    setFormSubmit(true);
  };

  useEffect(() => {
    if (formSubmit) {
      console.log("making request");
      fetch("http://localhost:8080/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          console.log(res.json());
        })
        .then((newContact) => {
          console.log(newContact);
          alert("Your contact was succsessfully created!");
          setCloseForm(true);
        })
        .catch((error) => {
          console.log(error);
          alert("Something went wrong!");
          setCloseForm(true);
        });
    }
  }, [formSubmit]);

  if (closeForm) {
    return <Main />;
  }

  return (
    <div>
      <Header />
      <h3>Add new contact</h3>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="addContactForm"
      >
        <label>
          First Name:
          <input
            type="text"
            {...register("firstName", { required: true })}
            placeholder={"ex: Katherine"}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            {...register("lastName", { required: true })}
            placeholder={"ex: Johnson"}
          />
        </label>
        <label>
          Notes:
          <textarea
            {...register("notes")}
            placeholder={"Add contact notes here"}
          />
        </label>
        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
