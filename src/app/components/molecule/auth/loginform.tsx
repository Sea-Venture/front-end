import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import InputField from "../../atom/auth/inputField";
import LoginButton from "../../atom/auth/loginButton";

const loginform = ({ authType }: { authType: string }) => {
  const [formData, setFormData] = useState({ email: "", password: "", username: "" });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {

      console.log("formData", formData);
      const response = await axios.post("http://localhost:8080/api/user/auth/register", {
        userName: formData.username,
        email: formData.email,
        password: formData.password,
      });

      console.log("Registration successful:", response);
      alert("Registration successful! Redirecting to dashboard...");
      router.push("/api/user/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("http://localhost:8080/api/user/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      // Save the token in localStorage
      const token = response.data.token;
      localStorage.setItem("token", token);

      console.log("Login successful:", response.data.user.role);
      const role = response.data.user.role;
      if (role === "user") {
        router.push("/api/user/dashboard");
      } else if (role === "admin") {
        router.push("/api/admin/dashboard");
      }
      alert("Login successful! Redirecting to dashboard...");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  if (authType === "login") {
    return (
      <form className="mt-6 w-full max-w-md mx-auto" onSubmit={handleLogin}>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <InputField
            type="email"
            placeholder="Enter Email Address"
            required
            onChange={handleInputChange}
            name="email"
          />
        </div>
        <div className="mb-4">
          <InputField
            type="password"
            placeholder="Enter Password"
            required
            onChange={handleInputChange}
            name="password"
          />
        </div>
        <div className="flex justify-center items-center mt-4">
          <LoginButton btnName="Login" />
        </div>
      </form>
    );
  }

  if (authType === "register") {
    return (
      <form className="mt-6 w-full max-w-md mx-auto" onSubmit={handleRegister}>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <InputField
            type="text"
            placeholder="Enter a username"
            required
            onChange={handleInputChange}
            name="username"
          />
        </div>
        <div className="mb-4">
          <InputField
            type="email"
            placeholder="Enter Email Address"
            required
            onChange={handleInputChange}
            name="email"
          />
        </div>
        <div className="mb-4">
          <InputField
            type="password"
            placeholder="Enter Password"
            required
            onChange={handleInputChange}
            name="password"
          />
        </div>
        <div className="flex justify-center items-center mt-4">
          <LoginButton btnName="Register" />
        </div>
      </form>
    );
  }

  return null;
};

export default loginform;