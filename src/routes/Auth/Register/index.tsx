import { useState, FormEventHandler, ChangeEventHandler } from "react";
import AuthLayout from "../AuthLayout";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

type RegisterPayload = {
  email: string;
  password: string;
  cnfPassword: string;
  tnc: boolean;
};

type RegisterError = {
  email: string;
  password: string;
  cnfPassword: string;
  tnc: string;
};

const InitPayload: RegisterPayload = {
  email: "",
  password: "",
  cnfPassword: "",
  tnc: false,
};
const InitError: RegisterError = {
  email: "",
  password: "",
  cnfPassword: "",
  tnc: "",
};

export default function Register() {
  const [payload, setPayload] = useState(InitPayload);
  const [errors, setErrors] = useState(InitError);
  const handlePayload: ChangeEventHandler<
    HTMLInputElement | HTMLButtonElement
  > = (e) => {
    const { name, value } = e.currentTarget;
    if (errors[name as keyof RegisterError])
      setErrors((state) => ({ ...state, [name]: "" }));
    if (name === "tnc") {
      setPayload((state) => ({ ...state, tnc: !state.tnc }));
    } else {
      setPayload((state) => ({ ...state, [name]: value }));
    }
  };
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (!validate()) {
      signUp();
    }
  };
  const validate = () => {
    return true;
  };
  const signUp = async () => {
    console.log(payload);
  };
  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit}
        className="md:w-[400px] flex flex-col mx-2 gap-6"
      >
        <h2 className="text-2xl text-center">Create an account</h2>
        <label>
          <span className="block mb-1">Email ID</span>
          <Input
            onChange={handlePayload}
            name="email"
            type="text"
            className={`${errors.email ? "error" : ""}`}
          />
          <span className="text-xs md:text-sm text-rose-500">
            {errors.email}
          </span>
        </label>
        <label>
          <span className="block mb-1">Password</span>
          <Input
            onChange={handlePayload}
            name="password"
            type="password"
            className={`${errors.password ? "error" : ""}`}
          />

          <span className="text-xs md:text-sm text-rose-500">
            {errors.password}
          </span>
        </label>
        <label>
          <span className="block mb-1">Confirm Password</span>
          <Input
            onChange={handlePayload}
            name="cnfPassword"
            type="password"
            className={`${errors.cnfPassword ? "error" : ""}`}
          />

          <span className="text-xs md:text-sm text-rose-500">
            {errors.cnfPassword}
          </span>
        </label>
        <label className="">
          <div className="flex items-center gap-2 w-full">
            <input
              type="checkbox"
              onChange={handlePayload}
              name="tnc"
              className={`input-check ${errors.tnc ? "error" : ""}`}
            />
            <span className="text-sm">
              I agree to{" "}
              <Link className="primary-link" to={"/"}>
                Terms of Usage
              </Link>{" "}
              and{" "}
              <Link className="primary-link" to={"/"}>
                Privacy Policy
              </Link>
            </span>
          </div>

          <span className="text-xs md:text-sm text-rose-500">{errors.tnc}</span>
        </label>
        <Button type="submit" className="btn mt-6">
          Sign In
        </Button>
        <span className="text-sm text-center">
          Already a user?{" "}
          <Link className="primary-link" to={"/login"}>
            Log into your account
          </Link>
        </span>
      </form>
    </AuthLayout>
  );
}
