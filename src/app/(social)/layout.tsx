import BottomNav from "@/components/layout/BottomNav";
import LeftSidebar from "@/components/feed/LeftSidebar";

export default function SocialLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen pb-16 md:pb-0">
      <div className="mx-auto max-w-[1440px] px-2 sm:px-4 lg:px-6 flex justify-start lg:gap-6 w-full flex-1">
        <LeftSidebar />
        <div className="flex-1 min-w-0 w-full mb-12 mt-6">
          {children}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
