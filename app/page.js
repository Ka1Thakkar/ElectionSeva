'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

const Login = () => {
  const router  = useRouter()
  useEffect(() => {
    document.addEventListener('keydown', async (e) => {
      if (e.key === 'F8') {
        router.push('/election-commission')
      }
    })
  }, [])
  return (
    <main className="min-h-screen bg-[#1f1f1f] flex flex-col items-center justify-center text-white px-40 py-24">
      <p className="font-semibold text-6xl">
        <span className=" underline-offset-4 decoration-orange-500 decoration-4 underline">Welcome</span> <span className=" underline-offset-4 decoration-white decoration-4 underline">to</span> <span className=" underline-offset-4 decoration-green-700 decoration-4 underline">ElectionSeva</span>
      </p>
      <div className="bg-white/10 p-5 rounded-3xl min-w-[50vw]">
        <Input placeholder="Enter your email" />
      </div>
    </main>
  );
}
 
export default Login;