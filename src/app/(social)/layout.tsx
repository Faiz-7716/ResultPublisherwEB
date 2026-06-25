import BottomNav from "@/components/layout/BottomNav";
import Navbar from "@/components/layout/Navbar";
import LeftSidebar from "@/components/feed/LeftSidebar";

export default function SocialLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen pb-16 md:pb-0">
      <Navbar />
      <div className="mx-auto max-w-[1400px] px-2 sm:px-4 lg:px-6 xl:px-8 flex justify-start lg:gap-8 w-full mt-6 flex-1">
        <LeftSidebar />
        <div className="flex-1 max-w-[1000px] min-w-0 w-full mb-12">
          {children}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
