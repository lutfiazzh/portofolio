import { useState,useEffect } from "react";

const Preloader = () => {

    const [loading, setloading] = useState(true);

    useEffect(() => {
        setTimeout(()=>setloading(false),3000)

    },[]    );

  return (
    loading &&(
        <div className="w-screen h-screen fixed inset-0 flex items-center justify-center bg-black z-50">
            <svg
                className="w-10 h-10 animate-spin text-violet-600"
                viewBox="0 0 24 24"
            >
                <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeDasharray="60"
                strokeDashoffset="20"
                strokeLinecap="round"
                />
            </svg>
        </div>

    )


  )
};

export default Preloader;