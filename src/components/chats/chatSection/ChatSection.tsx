import InputBox from './InputBox';
import TopSearch from './TopSearch';

export default function ChatSection() {
  return (
    <div className=" border h-full  relative">
      <div className="absolute w-full top-0 left-0">
        <TopSearch />
      </div>
      <div className="pt-16">chat</div>
      <div className="absolute w-full bottom-0 left-0">
        <InputBox />
      </div>
    </div>
  );
}
