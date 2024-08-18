import Image from "next/image";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-5xl items-center justify-between lg:flex">
        <p className="font-figtree flex w-full justify-center bg-blue/25 text-blue border border-blue rounded from-zinc-200 pb-6 pt-8 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:w-auto lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Milo Ramirez Portfolio
        </p>
        <div className="flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            rel="noopener noreferrer"
          >
            <Image
              src="/favicon.png"
              alt="Milo Ramirez Logo"
              width={50}
              height={50}
              priority
            />
          </a>
        </div>
      </div>

      <div className="font-space_mono w-full flex flex-1 justify-center items-center">
        <div>
          <h1 className="w-full text-6xl pb-4">Hello World!</h1>
          <div className="w-full flex justify-center space-x-4">
            {['bg-purple', 'bg-red', 'bg-yellow', 'bg-blue'].map((bgColor, index) => (
              <span key={index} className={`text-xl ${bgColor} dark:${bgColor}-light rounded-full px-4 py-2`}>{index + 1}</span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
