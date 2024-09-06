import { signupUser } from "@/api/authService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toastOptions } from "@/config/toast";
import { ErrorResponse } from "@/types/authTypes";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    userDetails: { role: "Teacher", name: "" },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name") {
      setCredentials({
        ...credentials,
        userDetails: { ...credentials.userDetails, name: value },
      });
    } else {
      setCredentials({ ...credentials, [name]: value });
    }
  };

  const signupMutation = useMutation({
    mutationFn: signupUser,
    onSuccess: () => {
      toast.success("Signup Successful", toastOptions);
      toast.info("Please login with your credentials", toastOptions);
      navigate("/auth/login");
    },
    onError: (error: AxiosError) => {
      const errResponse = error.response?.data as ErrorResponse;
      toast.error(errResponse.message, toastOptions);
    },
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    signupMutation.mutateAsync(credentials);
  };

  return (
    <>
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex items-center justify-center py-12">
          <form
            onSubmit={handleSubmit}
            className="mx-auto grid w-[350px] gap-6"
          >
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Connect with us</h1>
              <p className="text-balance text-muted-foreground">
                Enter your details below to create your account
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="role">Role</Label>
                <RadioGroup
                  className="flex"
                  name="role"
                  value={credentials.userDetails.role}
                  onValueChange={(value) =>
                    setCredentials({
                      ...credentials,
                      userDetails: { ...credentials.userDetails, role: value },
                    })
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Teacher" id="r1" />
                    <Label htmlFor="r1">Faculty</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Student" id="r2" />
                    <Label htmlFor="r2">Admin</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="John"
                  value={credentials.userDetails.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="mail@company.domain"
                  value={credentials.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Create account
              </Button>
              <Button variant="outline" className="w-full gap-3">
                <FaGoogle />
                Continue with Google
              </Button>
              <div className="mt-3 text-center text-sm">
                Already have an account?{" "}
                <Link to="/auth/login" className="underline">
                  Login
                </Link>
              </div>
              <div className="text-center text-sm">
                <p className="text-balance text-muted-foreground">
                  By clicking continue, you agree to our{" "}
                  <Link
                    to="/terms-of-service"
                    className="ml-auto inline-block underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy-policy"
                    className="ml-auto inline-block underline"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="hidden bg-muted lg:block">
          <img
            src="https://cdn.elearningindustry.com/wp-content/uploads/2021/07/Create-Interactive-eLearning-Content-In-3-Steps.png"
            alt="Image showing a pictorial representation of the interactive learning"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </>
  );
};

export default Signup;
