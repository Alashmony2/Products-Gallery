import { Input, Button } from "@heroui/react";
import axios from "axios";
import { useFormik } from "formik";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { AuthContext } from "../../contexts/AuthContext.jsx";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password must be at least 4 characters"),
  });

  const onSubmit = (values) => {
    setIsLoading(true);
    setErrMsg("");

    axios
      .post("https://fakestoreapi.com/auth/login", values)
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        setIsLoggedIn(true);
        navigate("/");
      })
      .catch(() => {
        setErrMsg("Invalid username or password");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="my-10 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white dark:bg-slate-800 p-8 rounded-lg shadow-2xl"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Login
        </h2>

        <div className="grid gap-4">
          <Input
          label="Username"
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.username && errors.username}
            errorMessage={errors.username}
            variant="bordered"
          />

          <Input
            label="Password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.password && errors.password}
            errorMessage={errors.password}
            variant="bordered"
          />

          <Button type="submit" isLoading={isLoading} color="warning">
            Login
          </Button>
          <p className="text-sm text-gray-500 text-center mt-4">
            Demo Credentials – Username: <b>mor_2314</b>, Password: <b>83r5^_</b>
            </p>

          {errMsg && <p className="text-red-500 text-sm text-center">{errMsg}</p>}
        </div>
      </form>
    </div>
  );
}
