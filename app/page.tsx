import Main from "@/components/Main";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <div className="grid grid-rows-[80px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-0">
      <NavBar />
        
        <main>
          <Main />
        </main>
      </div>
    </div>
  );
}
