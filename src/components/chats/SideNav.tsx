import { MdChat } from 'react-icons/md';
import { TbAB2 } from 'react-icons/tb';
import { MdOutlineGroups2 } from 'react-icons/md';
import { MdOutlineArchive } from 'react-icons/md';
import { FaRegStar } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';

export default function SideNav() {
  return (
    <>
      <div className=" flex flex-col px-2 justify-between my-2">
        <div className="flex flex-col gap-3">
          <MdChat size="30" />
          <TbAB2 size={'30'} />
          <MdOutlineGroups2 size="30" />
          <MdOutlineArchive size="30" />
          <FaRegStar size="30" />
        </div>

        <div className="flex flex-col flex-end  gap-3">
          <IoSettingsOutline size={'30'} />
          <CgProfile size={'30'} />
        </div>
      </div>
    </>
  );
}
