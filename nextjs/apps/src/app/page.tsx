import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1 className="font-bold text-[24px] mt-10 text-center">통합지방세 시스템</h1>
    <div className="container p-7 my-5 mx-auto bg-indigo-200/50 rounded-lg shadow-md shadow-gray-400">
      <div>
        <ul className="flex flex-row space-x-5" >
          <li className="px-5 font-bold  hover:text-blue-500 hover:underline"><Link href="/interview">인터뷰 내용</Link></li>
          <li className="px-5 font-bold  hover:text-blue-500 hover:underline"><Link href="/data">연계 인터페이스 아이디</Link></li>
          <li className="px-5 font-bold  hover:text-blue-500 hover:underline"><Link href="/data/score">지자체</Link></li>
          
          <li className=""></li>
        </ul>
      </div>
    </div>
    </>
  );
}
