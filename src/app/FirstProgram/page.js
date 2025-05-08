import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="font-bold text-blue-600  ">
          Hello <User name="Raju" />
          Hello <User name="Peter" />
        </h1>
      </main>
    </div>
  );
}

const User = (props) => {
  return (
    <>
      <div>
        <h1>Amit {props.name} </h1>
      </div>
    </>
  );
};
