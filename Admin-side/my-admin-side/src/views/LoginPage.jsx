import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Login } from "../stores/actionCreator"
const input = {
  email : "",
  password : "",
}
export function LoginPage() {
  const [data,setData] = useState(input)
  const dipatch = useDispatch()
  const navigation  = useNavigate()
  const handleChangeLogin = (event) => {
    const {name,value} = event.target
        setData({
          ...data,
          [name] : value
        })
        console.log(value);
  }
  async function handleLogin(event) {
    try {
      event.preventDefault()
      await dipatch(Login(data))
      navigation('/home')
    } catch (error) {
      console.log(error);
    }
  }
    return (
        <div
  class="container max-w-md mx-auto xl:max-w-3xl h-full flex bg-white rounded-lg shadow-lg overflow-hidden mt-[100px]"
>
  <div class="relative hidden xl:block xl:w-1/2 h-full ">
    <img
      class="absolute h-[410px] w-full object-cover"
      src="https://enjiner.com/wp-content/uploads/2017/09/cv-yang-baik-dan-benar.jpg"
      alt="my zomato"
    />
  </div>
  <div class="w-full xl:w-1/2 p-8">
    <form onSubmit={handleLogin}>
        <h1 class=" text-2xl font-bold">Sign in to your account</h1>
      <div>
        <span class="text-gray-600 text-sm">
          Don't have an account?
        </span>
     
          <span class="text-gray-700 text-sm font-semibold">
          Sign up
        </span>
      
      </div>
      <div class="mb-4 mt-6">
        <label
          class="block text-gray-700 text-sm font-semibold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
            name="email"
            onChange={handleChangeLogin}
            value={data.email}
          class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
          id="email"
          type="text"
          placeholder="Your email address"
        />
      </div>
      <div class="mb-6 mt-6">
        <label
          class="block text-gray-700 text-sm font-semibold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          name="password"
          onChange={handleChangeLogin}
          value={data.password}
          class="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
          id="password"
          type="password"
          placeholder="Your password"
        />
        <a
          class="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800"
          href="/forgot"
        >
          Forgot Password?
        </a>
      </div>
      <div class="flex w-full mt-8">
        <button
          class="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
          type="sumbit"
        >
          Sign in
        </button>
        <div>
        </div>
      </div>
    </form>
  </div>
</div>
    )
}