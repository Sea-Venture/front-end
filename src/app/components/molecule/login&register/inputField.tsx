'use client';

import InputFieldText from "@/app/components/atom/login&register/inputFieldText";
import InputFieldAttom from "@/app/components/atom/login&register/inputFieldAtom";

const inputField = ({label,placeholder,type}:{label:string,placeholder:string,type:string}) => {
    return <div>
        <InputFieldText text={label} />
        <InputFieldAttom placeholder={placeholder} type={type} />
    </div>
}

export default inputField;