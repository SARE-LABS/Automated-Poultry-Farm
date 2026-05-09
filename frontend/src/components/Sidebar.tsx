import Image from "next/image";
import { bottomItems, navigationItems } from "../../public/assets";


export function SideNavbar() {
  return (
    // <CHANGE> Made width responsive - narrow on mobile, full width on medium screens and up
    <aside className="overflow-hidden w-16 md:w-64  bg-white  text-[#0FC99F] border-r border-r-[#D4D4D4] flex flex-col">
      {/* <CHANGE> Adjusted padding and made logo/text responsive */}
      <div className="p-3 md:p-6 h-[15%]">
        <div className="flex gap-3 items-center justify-center md:justify-start">
          <Image
            src="/sare-logo.png"
            alt="sare-logo"
            width={40}
            height={40}
            className="h-8 w-8"
          />
          {/* <CHANGE> Hide company name on mobile, show on medium screens and up */}
          <span className="text-lg font-semibold self-end hidden md:block">
            SARE
          </span>
        </div>
      </div>

      {/* <CHANGE> Adjusted padding for mobile */}
      <nav className="flex-1 relative  md:top-0 px-2 md:px-4 md:lh-[42.5%]  border-b border-[#D4D4D4]">
        <ul className="space-y-4">
          {navigationItems.map(({ active, label, icon, id }) => (
            <li key={id}>
              <button
                className={`w-full h-[45px] flex items-center gap-3 group px-2 md:px-3 py-2 rounded-[10px] text-sm transition-all duration-150 group justify-center md:justify-start cursor-pointer ${
                  active
                    ? "bg-[#0ACA9F] font-extrabold text-white"
                    : "text-black hover:text-white group-hover:font-extrabold hover:bg-[#0ACA9F]"
                }`}
              >
                <span
                  className="h-5 w-5 group-hover:text-white flex-shrink-0"
                  dangerouslySetInnerHTML={{ __html: icon }}
                />
                {/* <CHANGE> Hide labels on mobile, show on medium screens and up */}
                <span className="hidden md:block">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* <CHANGE> Adjusted padding for mobile */}
      <div className="p-2  md:p-4  shadow-md h-[35%] ">
        <ul className="space-y-2">
          {bottomItems.map((item, index) => (
            <li key={index}>
              <button
                className={`w-full flex items-center gap-3 group px-2 md:px-3 py-2 rounded-[10px] text-sm transition-all duration-150 group justify-center md:justify-start ${
                  item.active
                    ? "bg-[#0ACA9F] font-extrabold text-white"
                    : "text-black hover:text-white group-hover:font-extrabold hover:bg-[#0ACA9F]"
                }`}
              >
                <span
                  className="h-5 w-5 flex-shrink-0"
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
                {/* <CHANGE> Hide labels on mobile, show on medium screens and up */}
                <span className="hidden md:block">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
