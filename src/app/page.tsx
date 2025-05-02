import "./globals.css";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]" style={{ transform: "translateX(-40px)" }}>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold text-center sm:text-left">
          莫瑞埃克
        </h1>
        <div className="text-center sm:text-left leading-relaxed text-gray-800 dark:text-gray-200 font-[family-name:var(--font-geist-sans)]">
          <p className="mb-2 ">
            安卓研发，初级前端研发，以及一个不给自己设限的人。
          </p>
          <p className="">
            目前隐于不知名大厂，这个博客都是我的一些看法，谈不上真知灼见，如果能给您一点启发就好了。
          </p>
        </div>
        <div className="w-full h-[1px] bg-black/[.1] dark:bg-white/[.1]"></div>
        <ol className="list-inside list-decimal text-base/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)] text-gray-500">
          <li className="mb-2 tracking-[-.01em]">
            <a href="/articles/desktop" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Windows桌面端UI框架选型
            </a>
          </li>
        </ol>
      </main>
    </div>
  );
}
