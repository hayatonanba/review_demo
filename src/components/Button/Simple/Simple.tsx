import type { ReactNode } from "react";

type Props = {
  children: ReactNode
}

export default function Simple({children}: Props) {
    return (
        <button 
        type="button" 
        className="border border-black px-4 py-2 rounded-full hover:scale-95 hover:bg-black hover:text-white transition ease-in-out duration-300 cursor-pointer"
        >
          {children}
        </button>
    );
}
