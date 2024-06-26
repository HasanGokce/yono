import Image from "next/image";

export function Bottombar() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="pointer-events-none grid place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/button-home.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={36}
            height={36}
            priority
          />
          Home
        </a>
        <a
          className="pointer-events-none grid place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/button-home.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={36}
            height={36}
            priority
          />
          Home
        </a>
        <a
          className="pointer-events-none grid place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/button-home.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={36}
            height={36}
            priority
          />
          Home
        </a>
      </div>
    </div>
  );
}
