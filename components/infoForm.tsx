import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import FormData from "../interfaces/formData";
import Input from "./formInput";

const InfoForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // @TODO: Print this data somewhere.
    console.log(data);
  };

  return (
    <>
      <h1>Personal Information</h1>
      <p>
        We need some personal information (as stated in your passport) to start
        your identity verification.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "300px" }}>
        <Input
          register={register}
          inputName="firstName"
          inputLabel="First name"
          placeholder="First Name"
          error={errors.firstName}
        />

        <Input
          register={register}
          inputName="lastName"
          inputLabel="Last name"
          placeholder="Last Name"
          error={errors.lastName}
        />

        <Input
          register={register}
          options={["United States", "France", "Germany", "Brazil"]}
          inputName="nationality"
          inputLabel="Nationality"
          error={errors.nationality}
        />

        <Input
          register={register}
          type="date"
          inputName="date"
          inputLabel="Birthday"
          placeholder=""
          error={errors.date}
        />

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </>
  );
};

export default InfoForm;
