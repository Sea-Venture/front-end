'use client';

import InputField from "@/app/components/molecule/login&register/inputField";

const LoginRegisterForm = () => {
    return <div className={"w-100"}>
        <InputField label={"username"} placeholder={"enter your user Name"} type={"text"}/>
        <InputField label={"username"} placeholder={"enter your user Name"} type={"text"}/>
        <InputField label={"username"} placeholder={"enter your user Name"} type={"text"}/>
        <InputField label={"username"} placeholder={"enter your user Name"} type={"text"}/>
    </div>
}

export default LoginRegisterForm;