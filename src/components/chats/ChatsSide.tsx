import { BiMessageAdd } from 'react-icons/bi';
import { FaFilter } from 'react-icons/fa';
import { HiDotsVertical } from 'react-icons/hi';
import UserDeatils from './UserDetails';

export default function ChatsSide() {
  return (
    <>
      <div className="">
        <div className="flex justify-between items-center my-3 px-2">
          <p className="font-bold text-xl">Chats</p>
          <div className="flex gap-3 items-center">
            <BiMessageAdd size={'25'} />
            <HiDotsVertical size={'20'} />
          </div>
        </div>
        <div className="flex gap-2 my-4 items-center px-2">
          <input
            type="text"
            className="p-1 rounded-lg  w-full  outline-none bg-gray-500"
          />
          <FaFilter />
        </div>
        <UserDeatils avator="" chat="" time="" userName="" />
        <UserDeatils avator="" chat="" time="" userName="" />
        <UserDeatils avator="" chat="" time="" userName="" />
        <UserDeatils avator="" chat="" time="" userName="" />
      </div>
    </>
  );
}
