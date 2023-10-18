const Button = ({onClick,disabled}) => {
    return ( 
        <>
            <div>
                <button onClick={onClick} className="p-2 bg-blue-400 font-bold text-xl">
                    {disabled ? "loading...":"Fetch Todo"}
                </button>
            </div>
        </>
     );
}
 
export default Button;