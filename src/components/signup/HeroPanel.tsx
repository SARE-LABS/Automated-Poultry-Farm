import Image from "next/image";
import Link from "next/link";

export function HeroPanel({ pathname }: { pathname: string }) {
  return (
    <div className="hidden lg:flex lg:w-[50%] relative overflow-hidden">
      <Image
        src="/signup-hero.jpg"
        alt="Modern poultry farm"
        fill
        className="object-cover"
        priority
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/70 to-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between p-10 w-full">
        <div className="flex items-center gap-3">
          <Image
            src="/sare-logo.png"
            alt="SARE Logo"
            width={44}
            height={44}
            className="drop-shadow-lg"
          />
          {/* <span className="text-xl font-bold text-white tracking-wide drop-shadow-lg">
            SARE
          </span> */}
        </div>

        {/* Hero Text & CTAs */}
        <div className="space-y-8">
          <div className="space-y-3">
            <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight drop-shadow-lg">
              Let&apos;s Get You Started
            </h1>
            <p className="text-white/70 text-base max-w-[80%] leading-relaxed">
              Complete this registration to set up your AQMS and take control of
              your farm operations.
            </p>
          </div>
          {pathname === "/signup" ? (
            <Link href="/login" className="w-full">
              <div className="w-[60%] flex items-center gap-4 bg-white/20 backdrop-blur-md px-5 py-4 border border-white/20 cursor-pointer group transition-all duration-300 hover:bg-white/30 ">
                {/* Icon */}
                <div>
                  <p className="text-sm font-semibold text-white">
                    Login to your account
                  </p>
                  <p className="text-xs text-white/50">
                    Already have an account?
                  </p>
                </div>
              </div>
            </Link>
          ) : (
            <Link
              href="/signup"
              className="flex items-center gap-4 bg-white/95 backdrop-blur-md rounded- px-5 py-4 shadow-xl shadow-black/10 cursor-default group transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Icon */}
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Sign up your account
                </p>
                <p className="text-xs text-gray-400">
                  Create a new AQMS account
                </p>
              </div>
            </Link>
          )}
        </div>

        {/* Footer */}
        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} SARE Labs. All rights reserved.
        </p>
      </div>
    </div>
  );
}
