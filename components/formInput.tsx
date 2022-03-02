import { FC } from "react";

interface InputProps {
  register: any;
  type?: string;
  options?: string[];
  inputName: string;
  inputLabel: string;
  placeholder?: string;
  error: any;
}

interface ErrorProps {
  error: any;
  inputLabel: string;
}

const ErrorDisplay: FC<ErrorProps> = ({ error, inputLabel }) => {
  if (error && error.type === "required") {
    return <div className="invalid-feedback">{inputLabel} is required</div>;
  }
  return null;
};

const Input: FC<InputProps> = ({
  register,
  type,
  options,
  inputName,
  inputLabel,
  placeholder,
  error,
}) => {
  return (
    <div className="form-group">
      <label className="my-2" htmlFor={inputName}>
        {inputLabel}
      </label>

      {!options && (
        <input
          id={inputName}
          type={type ? type : "text"}
          className={`form-control ${error ? "is-invalid" : ""}`}
          {...register(inputName, { required: true })}
          placeholder={placeholder}
        />
      )}

      {options && (
        <select
          id={inputName}
          type={type ? type : "text"}
          className={`form-control ${error ? "is-invalid" : ""}`}
          {...register(inputName, { required: true })}
          placeholder={placeholder}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}

      <ErrorDisplay error={error} inputLabel={inputLabel} />
    </div>
  );
};

export default Input;
