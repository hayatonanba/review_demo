import type { ReactNode } from "react";

type Props = {
  children: ReactNode
}

export default function ThreeDCard({children}: Props) {
    return (
      <div className="perspective-normal perspective-origin-center m-20">
        <div className="border p-3 w-[400px] h-[200px] rounded-md shadow-sm rotate-x-45 rotate-z-20">
          {children}
        </div>
      </div>
        
    );
}
