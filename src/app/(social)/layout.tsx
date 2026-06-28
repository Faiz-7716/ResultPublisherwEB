import BottomNav from "@/components/layout/BottomNav";
import LeftSidebar from "@/components/feed/LeftSidebar";

export default function SocialLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen pb-16 md:pb-0 w-full">
      <LeftSidebar />
      <div className="flex-1 flex flex-col min-w-0 w-full">
        <div className="mx-auto w-full max-w-[1352px] px-2 sm:px-4 lg:px-6 mt-6 mb-12">
          {children}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
