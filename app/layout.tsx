import SideNav from "./ui/sidenav";
import "./globals.css";

export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <html lang="pt-br">
      <body className="flex h-screen flex-col md:overflow-hidden">
            <header className="h-10.75 bg-blue-400 flex items-center px-6 text-white">
              <p>SISUPA</p>
            </header>

            <div className="flex flex-1 overflow-hidden">
              <aside className="w-full flex-none md:w-64"> 
                  <SideNav />
              </aside>
              <main className="grow p-6 md:overflow-y-auto md:p-8">
                {children}
              </main>
            </div>
      </body>
    </html>
  );
}
