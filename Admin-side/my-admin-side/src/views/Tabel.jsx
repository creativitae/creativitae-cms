import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { readTemplates } from "../stores/actionCreator";
export default function Tabel() {
  const dispatch = useDispatch()
  const {dataTemplate} =  useSelector((state) => {
    // console.log(state.template);
    return state.template
  })
  // console.log(state);
  console.log(dataTemplate);
  useEffect(() => {
    dispatch(readTemplates())
  },
  []
  )
    return (

        
<section class="container mx-auto p-5 font-mono">
  <div class="w-full h-full mb-8 overflow-hidden rounded-lg shadow-lg">
    <div class="w-full overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
            <th class="px-4 py-3">Name</th>
            <th class="px-4 py-3">Premium</th>
            <th class="px-4 py-3">Status</th>
            <th class="px-4 py-3">Image</th>
          </tr>
        </thead>
        <tbody class="bg-white">
          {dataTemplate.map(el => {
            console.log(el.isPremium);
            return (

          <tr class="text-gray-700">
            <td class="px-4 py-3 border">
              <div class="flex items-center text-sm">
              
                <div>
                  <p class="font-semibold text-black">{el.name}</p>
                  
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-ms font-semibold border">{el.isPremium.toString()}</td>
            <td class="px-4 py-3 text-xs border">
              <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> {el.status} </span>
            </td>
            <div class="relative w-[100px] h-[100px]  rounded-full md:block">
                  <img class="object-cover w-full h-full " src={el.image} alt="" loading="lazy" />
            </div>
          </tr>
            )
          })}
         
        </tbody>
      </table>
    </div>
  </div>
</section>
    )
}