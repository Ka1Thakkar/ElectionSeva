'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import Modal from "@/components/Modal";
import { CircleX } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import Axios from 'axios';
const Login = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState("");
  const [address, setAddress] = useState("");
  const [voterId, setVoterId] = useState("");
  const router = useRouter()
  useEffect(() => {
    document.addEventListener('keydown', async (e) => {
      if (e.key === 'F8') {
        router.push('/election-login')
      }
    })
  }, [])

  function loginHandler() {
    console.log(email);
    console.log(pass);
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: pass,
    }).then((response) => {
      console.log(response);
      if (response.data[0].email) {
        router.push('/user');
      }
    });
  }

  function signInHandler() {
    console.log(email);
    console.log(pass);
    Axios.post("http://localhost:3001/signup", {
      username: user,
      email: email,
      password: pass,
      address: address,
      voterId: voterId
    }).then((response) => {
      console.log(response);
      if (response.data.message==="You are successfully registered") {
        setEmail("");
        setPass("");
        setUser("");
        setVoterId("");
        setAddress("");
        window.location.reload();
      }
      if(response.data.message==="Email already registered"){

      }
    });
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (<Modal>
          <div className="bg-neutral-800 p-10 mt-20 rounded-3xl min-w-[30vw] flex flex-col items-center justify-center gap-5 text-white">
            <div role="button" onClick={() => setIsOpen(false)} className="w-full text-red-400">
              <CircleX size={30} />
            </div>
            <div className="w-full">
              <p className="text-2xl pb-2" >
                Username
              </p>
              <Input onChange={e => setUser(e.target.value)} value={user}/>
            </div>
            <div className="w-full">
              <p className="text-2xl pb-2" >
                Email Id
              </p>
              <Input onChange={e => setEmail(e.target.value)} value={email}/>
            </div>
            <div className="w-full">
              <p className="text-2xl pb-2" >
                Password
              </p>
              <Input onChange={e => setPass(e.target.value)} value={pass}/>
            </div>
            <div className="w-full">
              <p className="text-2xl pb-2" >
                Address
              </p>
              <Input onChange={e => setAddress(e.target.value)} value={address}/>
            </div>
            <div className="w-full">
              <p className="text-2xl pb-2" >
                VoterId
              </p>
              <Input onChange={e => setVoterId(e.target.value)} value={voterId}/>
            </div>
            <div className="w-full flex gap-5 items-center">
              <div role="button" className="px-5 py-2 rounded-xl bg-black w-fit" onClick={signInHandler}>
                Sign Up
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
              Email Id
            </p>
            <Input onChange={e => setEmail(e.target.value)} value={email} />
          </div>
          <div className="w-full">
            <p className="text-2xl pb-2">
              Password
            </p>
            <Input onChange={e => setPass(e.target.value)} value={pass} />
          </div>
          <div className="w-full flex gap-5 items-center">
            <div role="button" id="loginButton" className="px-5 py-2 rounded-xl bg-black w-fit" onClick={loginHandler}>
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