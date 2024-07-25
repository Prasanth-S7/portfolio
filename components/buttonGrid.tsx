interface buttonGridProps{
    children:React.ReactNode,
    name:string
}
export default function ButtonGrid({children,name}:buttonGridProps){
    return (
        <button className="bg-dark border-gray rounded-sm flex items-center h-full py-0 bg-white p-0">
            <div className="bg-black px-4 flex items-center justify-center h-full ">{children}</div>
            <div className="flex items-center justify-center h-full w-full border-2  text-black">
                {name}
            </div>
        </button>
    )
}