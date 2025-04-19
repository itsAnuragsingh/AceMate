import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 gap-4">
      <h1 className="font-bold text-4xl">AceMate ❤️</h1>
      <div className="w-1/2 h-1/3 space-y-2 border-2 border-gray-700 rounded-lg flex flex-col px-3 py-4  bg-gray-800 lg:w-1/4">
      <h3 className="text-gray-600 text-lg font-light"> Your smart learning partner to ace interviews, notes, and quizzes.</h3>
      <p className="text-gray-200 text-lg">AceMate is an AI-powered all-in-one learning assistant that helps students and professionals prepare for success. From mock interviews to instant note-making from PDFs and quiz generation – it’s everything you need, in one smart platform.

</p>
      </div>
    </div>
  );
}
