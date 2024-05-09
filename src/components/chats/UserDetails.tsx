import { CgProfile as Profile } from 'react-icons/cg';

type IProps = {
  avator: string;
  userName: string;
  chat: string;
  time: string;
};

export default function UserDeatils({ avator, userName, chat, time }: IProps) {
  return (
    <>
      <div className="bg-sky-600 py-2.5 px-2 hover:bg-sky-800">
        <div className="flex gap-3 items-center">
          <img
            src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg"
            alt=""
            className="rounded-full content-cover h-14 w-14"
          />
          <div className="w-full leading-4">
            <div className="flex justify-between ">
              <p className="text-lg">Name</p>
              <p className="text-xs">12/04/2024</p>
            </div>
            <p className="text-sm">hello friend what that ...</p>
          </div>
        </div>
      </div>
    </>
  );
}
