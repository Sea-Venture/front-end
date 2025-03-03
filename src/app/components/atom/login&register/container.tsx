const Container = ({ children }: { children: React.ReactNode }) => {
    return <div className={"bg-white rounded-lg shadow-md w-3/4 h-96 max-w-3xl"}>
        {children}
    </div>
}

export default Container;