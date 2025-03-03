const inputFieldAtom = ({placeholder,type}:{placeholder:string,type:string}) => {
    return (
        <div>
            <input type={type} placeholder={placeholder} className="w-full h-10 border-2 border-gray-300 rounded-md pl-2" />
        </div>
    );
}

export default inputFieldAtom;