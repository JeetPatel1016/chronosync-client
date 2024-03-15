import { useState, FormEventHandler, ChangeEventHandler } from "react";
import AuthLayout from "../AuthLayout";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoginValidation } from "@/lib/validation/auth.validation";
import { login } from "@/services/auth.service";
export type LoginPayload = {
  email: string;
  password: string;
};

const InitPayload: LoginPayload = {
  email: "",
  password: "",
};
const InitError: LoginPayload = {
  email: "",
  password: "",
};

export default function Login() {
  const [errors, setErrors] = useState<Partial<LoginPayload>>(InitError);
  const [payload, setPayload] = useState<LoginPayload>(InitPayload);

  const handlePayload: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.currentTarget?.value;
    const updateError = { ...errors };
    delete updateError[e.target.name as keyof LoginPayload];
    setErrors(updateError);
    setPayload((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const errors = LoginValidation(payload);
    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }
    try {
      const data = await login(payload);
      console.log("data", data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit}
        className="md:w-[400px] flex flex-col mx-2 gap-6"
      >
        <h2 className="text-2xl text-center">Sign In to ChronoSync</h2>
        <label>
          <span className="block mb-1">Email ID</span>
          <Input
            type="text"
            name="email"
            className={`${errors.email ? "error" : ""}`}
            onChange={handlePayload}
          />
          <span className="text-xs md:text-sm text-rose-500">
            {errors.email}
          </span>
        </label>
        <label>
          <div className="flex w-full justify-between items-center mb-1">
            <span className="block ">Password</span>
            <span className="block text-sm text-right">
              <Link className="transit primary-link" to={"/forgot-password"}>
                Reset Password
              </Link>
            </span>
          </div>
          <Input
            type="password"
            name="password"
            className={`${errors.password ? "error" : ""}`}
            onChange={handlePayload}
          />

          <span className="text-xs md:text-sm text-rose-500">
            {errors.password}
          </span>
        </label>
        <Button type="submit" className="btn mt-6">
          Sign In
        </Button>
        <span className="text-sm text-center">
          Don&apos;t have an account?{" "}
          <Link className="primary-link" to={"/register"}>
            Create an account
          </Link>
        </span>
      </form>
    </AuthLayout>
  );
}
