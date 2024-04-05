'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import Modal from "@/components/Modal";
import { CircleX } from "lucide-react";
import { AnimatePresence } from "framer-motion";
const Login = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  useEffect(() => {
    document.addEventListener('keydown', async (e) => {
      if (e.key === 'F8') {
        router.push('/election-login')
      }
    })
  }, [])
  return (
    <>
    <AnimatePresence>
      {isOpen && (<Modal>
        <div className="bg-neutral-800 p-10 mt-20 rounded-3xl min-w-[30vw] flex flex-col items-center justify-center gap-5 text-white">
          <div role="button" onClick={() => setIsOpen(false)} className="w-full text-red-400">
            <CircleX size={30} />
          </div>
          <div className="w-full">
            <p className="text-2xl pb-2">
              Email Id
            </p>
            <Input />
          </div>
          <div className="w-full">
            <p className="text-2xl pb-2">
              Password
            </p>
            <Input/>
          </div>
          <div className="w-full flex gap-5 items-center">
            <div role="button" className="px-5 py-2 rounded-xl bg-black w-fit">
              Login
            </div>
            <div>
              Don't have an account? <span onClick={() => { setIsOpen(true) }} className="underline cursor-pointer">Register</span>
            </div>
          </div>
        </div>
      </Modal>)}
      </AnimatePresence>
      <main className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center text-white px-40 py-24">
        <p className="font-semibold text-7xl">
          <span className=" underline-offset-4 decoration-orange-500 decoration-4 underline">Welcome</span> <span className=" underline-offset-4 decoration-white decoration-4 underline">to</span> <span className=" underline-offset-4 decoration-green-700 decoration-4 underline">ElectionSeva</span>
        </p>
        <div className="bg-white/5 p-10 mt-20 rounded-3xl min-w-[50vw] flex flex-col items-center justify-center gap-5">
          <div className="w-full">
            <p className="text-2xl pb-2">
              Username/ Email Id
            </p>
            <Input />
          </div>
          <div className="w-full">
            <p className="text-2xl pb-2">
              Password
            </p>
            <Input />
          </div>
          <div className="w-full flex gap-5 items-center">
            <div role="button" className="px-5 py-2 rounded-xl bg-black w-fit">
              Login
            </div>
            <div>
              Don't have an account? <span onClick={() => { setIsOpen(true) }} className="underline cursor-pointer">Register</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;