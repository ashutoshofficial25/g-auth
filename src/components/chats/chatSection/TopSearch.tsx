import { BiSearch } from 'react-icons/bi';
import { HiDotsVertical } from 'react-icons/hi';

export default function TopSearch() {
  return (
    <>
      <div className="flex justify-between items-center gap-2 p-2 bg-gray-900">
        <div className="flex gap-3 items-center">
          <img
            src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg"
            alt=""
            className="rounded-full content-cover h-12 w-12"
          />
          <div className="w-full leading-4">
            <p className="text-lg">Name</p>

            <p className="text-xs">+91 9698379766</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <BiSearch size={'20'} />
          <HiDotsVertical size={'15'} />
        </div>
      </div>
    </>
  );
}
