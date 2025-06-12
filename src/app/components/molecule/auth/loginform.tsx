import React, { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "../../atom/auth/inputField";
import LoginButton from "../../atom/auth/loginButton";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/firebaseConfig";
import { useUserStore } from "@/store/UserStore";
import { fetchUserByEmail } from "@/app/utils/apiService";

const LoginForm = ({ authType }: { authType: string }) => {
  const [formData, setFormData] = useState({ email: "", password: "", username: "" });
  const [error, setError] = useState<string | null>(null);
  const {setToken, setRole, setEmail} = useUserStore();
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      // Register user with Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const token = await userCredential.user.getIdToken();

      // Send user data to backend
      await fetch("https://sea-venture.org/api/user/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email: formData.email,
          username: formData.username, 
          role: "user", 
        }),
      });

      
      localStorage.setItem("token", token);
      alert("Registration successful! Redirecting to dashboard...");
      router.push("/user/dashboard");
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Registration failed";
      setError(errorMsg);
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      const token = await userCredential.user.getIdToken();

      localStorage.setItem("token", token);



      const response = await fetch("https://sea-venture.org/api/user/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: token,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const userData = await response.json();
      setEmail(userData.email);
      setRole(userData.role);
      setToken(token);

      const user = await fetchUserByEmail(formData.email);

      alert("Login successful! Redirecting to dashboard...");
      alert(user)
      if (user.role === "guide") {
      router.push("/guide/dashboard");
    } else if (user.role === "user") {
      router.push("/user/dashboard");
    }

    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Login failed";
      setError(errorMsg);
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

export default LoginForm;