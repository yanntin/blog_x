import "./inners.css";


export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 dark:bg-zinc-950 text-gray-900 dark:text-zinc-200">
            <main className="max-w-[60ch] mx-auto w-full space-y-6">
                {children}
            </main>
        </div>
    );
}
