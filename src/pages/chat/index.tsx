import { MdChat } from 'react-icons/md';
import SideNav from '../../components/chats/SideNav';
import ChatsSide from '../../components/chats/ChatsSide';
import ChatSection from '../../components/chats/chatSection/ChatSection';
export default function Chat() {
  return (
    <div className="max-w-screen-xl mx-auto px-2 border-2 my-10 bg-gray-700 text-white">
      <div className="flex h-[90vh]">
        {/* <SideNav /> */}
        <div className="w-1/3 border overflow-hidden">
          <ChatsSide />
        </div>
        <div className="w-2/3">
          <ChatSection />
        </div>
      </div>
    </div>
  );
}
