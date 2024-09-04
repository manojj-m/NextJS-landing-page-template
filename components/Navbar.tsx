import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { MobileNav } from "@/components/MobileNav";

const Navbar = () => {
  // Replace with your auth of choice, e.g. Clerk: const { userId } = auth();
  const isUserSignedIn = false;

  return (
    <nav
      className={cn(
        "sticky h-14 inset-x-0 top-0 z-30 border-b border-gray-200  bg-white/40 backdrop-blur-lg transition-all"
      )}
    >
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link
            href="/"
            className="flex z-40 justify-center items-center gap-1"
          >
            <Image
              src="/logo.png"
              alt="convo logo"
              width={50}
              height={50}
              quality={100}
              className="w-7 h-7"
            />
            <span className="text-2xl font-semibold" style={{ color: 'rgb(23, 48, 87)' }}>Evaluate Learning</span>
          </Link>
          <div className="hidden items-center space-x-4 sm:flex">
            {/* <Link
              className={buttonVariants({
                size: "sm",
              })}
              href="/getstarted"
            >
              Try it out
            </Link> */}
            {/* <Link
              className={buttonVariants({
                size: "sm",
              })}
              href="/signup"
            >
              Get started
            </Link> */}
          </div>          
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
