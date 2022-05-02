import React from 'react';
// import { IoCaretForward } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";

function ChatArea({ chatOpen, setChatOpen }) {
  return (
    <div className={`w-full min-w-fit h-full bg-slate-200 flex flex-col transition duration-500 ${chatOpen ? "translate-x-0" : "translate-x-full"}`}>
      <div className='flex justify-start items-center p-4 cursor-pointer'>
        <MdOutlineClose onClick={() => setChatOpen(false)} size={20} />
      </div>
      <hr className='m-0' />
      <ul className='p-2 w-full'>
        <li className="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
          <div className="flex ml-2"> <img src="https://i.imgur.com/aq39RMA.jpg" width="40" height="40" className="rounded-full" />
            <div className="flex flex-col ml-2">
              <span className="font-medium text-black">Jessica Koel</span>
              <span className="text-sm text-gray-400 truncate w-32">Hey, Joel, I here to help you out please tell me</span> </div>
          </div>
          <div className="flex flex-col items-center"> <span className="text-gray-300">11:26</span> <i className="fa fa-star text-green-400"></i> </div>
        </li>
        <li className="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
          <div className="flex ml-2">
            <img src="https://i.imgur.com/eMaYwXn.jpg" width="40" height="40" className="rounded-full" />
            <div className="flex flex-col ml-2">
              <span className="font-medium text-black">Komeial Bolger</span>
              <span className="text-sm text-gray-400 truncate w-32">I will send you all documents as soon as possible</span> </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gray-300">12:26</span>
            <i className="fa fa-star text-green-400"></i>
          </div>
        </li>
        <li className="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
          <div className="flex ml-2">
            <img src="https://i.imgur.com/zQZSWrt.jpg" width="40" height="40" className="rounded-full" />
            <div className="flex flex-col ml-2">
              <span className="font-medium text-black">Tamaara Suiale</span>
              <span className="text-sm text-gray-400 truncate w-32">Are you going to business trip next week</span> </div>
          </div>
          <div className="flex flex-col items-center"> <span className="text-gray-300">8:26</span> <i className="fa fa-star text-green-400"></i> </div>
        </li>
        <li className="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
          <div className="flex ml-2"> <img src="https://i.imgur.com/agRGhBc.jpg" width="40" height="40" className="rounded-full" />
            <div className="flex flex-col ml-2"> <span className="font-medium text-black">Sam Nielson</span> <span className="text-sm text-gray-400 truncate w-32">I suggest to start new business soon</span> </div>
          </div>
          <div className="flex flex-col items-center"> <span className="text-gray-300">7:16</span> <i className="fa fa-star text-green-400"></i> </div>
        </li>
        <li className="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
          <div className="flex ml-2"> <img src="https://i.imgur.com/uIgDDDd.jpg" width="40" height="40" className="rounded-full" />
            <div className="flex flex-col ml-2">
              <span className="font-medium text-black">Caroline Nexon</span>
              <span className="text-sm text-gray-400 truncate w-32">We need to start new reseatch center.</span> </div>
          </div>
          <div className="flex flex-col items-center"> <span className="text-gray-300">9:26</span> <i className="fa fa-star text-green-400"></i> </div>
        </li>
        <li className="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
          <div className="flex ml-2">
            <img src="https://i.imgur.com/tT8rjKC.jpg" width="40" height="40" className="rounded-full" />
            <div className="flex flex-col ml-2">
              <span className="font-medium text-black">Patrick Koeler</span>
              <span className="text-sm text-gray-400 truncate w-32">May be yes</span>
            </div>
          </div>
          <div className="flex flex-col items-center"> <span className="text-gray-300">3:26</span> <i className="fa fa-star text-green-400"></i> </div>
        </li>
      </ul>


      {/* <div className="h-full w-full bg-white min-w-[300px]">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="w-full">
            <div className="relative">
              <input type="text" className="w-full h-12 rounded focus:outline-none px-3 focus:shadow-md" placeholder="Search..." /> <i className="fa fa-search absolute right-3 top-4 text-gray-300"></i> </div>
            <ul className='p-0'>
              <li className="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                <div className="flex ml-2"> <img src="https://i.imgur.com/aq39RMA.jpg" width="40" height="40" className="rounded-full" />
                  <div className="flex flex-col ml-2">
                    <span className="font-medium text-black">Jessica Koel</span>
                    <span className="text-sm text-gray-400 truncate w-32">Hey, Joel, I here to help you out please tell me</span> </div>
                </div>
                <div className="flex flex-col items-center"> <span className="text-gray-300">11:26</span> <i className="fa fa-star text-green-400"></i> </div>
              </li>
              <li className="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                <div className="flex ml-2">
                  <img src="https://i.imgur.com/eMaYwXn.jpg" width="40" height="40" className="rounded-full" />
                  <div className="flex flex-col ml-2">
                    <span className="font-medium text-black">Komeial Bolger</span>
                    <span className="text-sm text-gray-400 truncate w-32">I will send you all documents as soon as possible</span> </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-gray-300">12:26</span>
                  <i className="fa fa-star text-green-400"></i>
                </div>
              </li>
              <li className="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                <div className="flex ml-2">
                  <img src="https://i.imgur.com/zQZSWrt.jpg" width="40" height="40" className="rounded-full" />
                  <div className="flex flex-col ml-2">
                    <span className="font-medium text-black">Tamaara Suiale</span>
                    <span className="text-sm text-gray-400 truncate w-32">Are you going to business trip next week</span> </div>
                </div>
                <div className="flex flex-col items-center"> <span className="text-gray-300">8:26</span> <i className="fa fa-star text-green-400"></i> </div>
              </li>
              <li className="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                <div className="flex ml-2"> <img src="https://i.imgur.com/agRGhBc.jpg" width="40" height="40" className="rounded-full" />
                  <div className="flex flex-col ml-2"> <span className="font-medium text-black">Sam Nielson</span> <span className="text-sm text-gray-400 truncate w-32">I suggest to start new business soon</span> </div>
                </div>
                <div className="flex flex-col items-center"> <span className="text-gray-300">7:16</span> <i className="fa fa-star text-green-400"></i> </div>
              </li>
              <li className="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                <div className="flex ml-2"> <img src="https://i.imgur.com/uIgDDDd.jpg" width="40" height="40" className="rounded-full" />
                  <div className="flex flex-col ml-2">
                    <span className="font-medium text-black">Caroline Nexon</span>
                    <span className="text-sm text-gray-400 truncate w-32">We need to start new reseatch center.</span> </div>
                </div>
                <div className="flex flex-col items-center"> <span className="text-gray-300">9:26</span> <i className="fa fa-star text-green-400"></i> </div>
              </li>
              <li className="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                <div className="flex ml-2">
                  <img src="https://i.imgur.com/tT8rjKC.jpg" width="40" height="40" className="rounded-full" />
                  <div className="flex flex-col ml-2">
                    <span className="font-medium text-black">Patrick Koeler</span>
                    <span className="text-sm text-gray-400 truncate w-32">May be yes</span>
                  </div>
                </div>
                <div className="flex flex-col items-center"> <span className="text-gray-300">3:26</span> <i className="fa fa-star text-green-400"></i> </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> */}
    </div>
  )
}

export default ChatArea