import { useNavigate } from "react-router"

export default function Sidebar() {
  const navigator = useNavigate()
    return ( 
     <section>
   
        <div class="min-h-screen flex flex-row">
          <div class="flex flex-col w-56 overflow-hidden">
          
            <ul class="flex flex-col py-4">
              <li>
                <a 
                onClick={() =>{
                  navigator('/home')
                }}
                class=" mt-10 flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-home"></i></span>
                  <span class="text-sm font-medium">Dashboard</span>
                </a>
              </li>
           
              <li>
                <a 
                onClick={() => {
                  navigator('/')
                  localStorage.clear()
                }}
                 class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-log-out"></i></span>
                  <span class="text-sm font-medium">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
     </section>
  
    )
}