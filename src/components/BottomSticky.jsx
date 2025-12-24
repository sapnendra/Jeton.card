import { MdOutlineMessage } from "react-icons/md";

const BottomSticky = () => {
  return (
    <>
      <div className="fixed z-99 left-1/2 bottom-10 -translate-x-1/2 flex gap-[2vw] text-white font-semibold bg-[#ff6044] px-6 py-3 rounded-full">
        <h4>Home</h4>
        <h4>Personal</h4>
        <h4>Business</h4>
        <h4>Company</h4>
      </div>
      <button className="fixed z-99 right-10 bottom-10 flex items-center justify-center gap-2  text-white font-semibold bg-[#82828296] px-4 py-3 rounded-full">
        <MdOutlineMessage className="w-6 h-6" />
        Support
      </button>
    </>
  );
};

export default BottomSticky;
