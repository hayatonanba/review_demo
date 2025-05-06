import type { ReactNode } from "react";

type Props = {
  children: ReactNode
}

export default function GlassCard({children}: Props) {
    return (
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-screen h-screen">
        <div className="w-[300px] h-[200px] border-white/30 shadow-xl rounded-md backdrop-blur-xl bg-[rgba(255,255,255,0.25)]">
          {children}
        </div>
      </div>
        
    );
}
