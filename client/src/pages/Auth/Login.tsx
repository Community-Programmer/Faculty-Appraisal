import { loginUser } from "@/api/authService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toastOptions } from "@/config/toast";
import { login } from "@/store/authSlice";
import { ErrorResponse } from "@/types/authTypes";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (res) => {
      dispatch(login(res.data));
      toast.success("Login Successful", toastOptions);
      navigate("/");
    },
    onError: (error: AxiosError) => {
      const errResponse = error.response?.data as ErrorResponse;
      console.log(errResponse);
      toast.error(errResponse.message, toastOptions);
    },
  });

  const handleLogin = async () => {
    loginMutation.mutate(credentials);
  };

  return (
    <>
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Welcome Back</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={credentials.email}
                  onChange={handleChange}
                  placeholder="mail@company.domain"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button
                onClick={handleLogin}
                type="submit"
                className="w-full flex gap-1"
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending && (
                  <Loader2 className="h-5 w-5 animate-spin" />
                )}
                Login
              </Button>
              <Button variant="outline" className="w-full gap-3">
                <FaGoogle />
                Login with Google
              </Button>
            </div>
            <div className="mt-3 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/auth/signup" className="underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <img
            src="https://cdn.elearningindustry.com/wp-content/uploads/2021/07/Create-Interactive-eLearning-Content-In-3-Steps.png"
            alt="Image showing a pictorial representation of the interactive learing"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
