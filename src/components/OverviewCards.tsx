import { metricsLower, metricsUpper } from "../../public/assets";

export function OverviewCards() {
  return (
    // <CHANGE> Made container responsive with proper flex layout
    <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-6 w-full">
      {/* overviewcard */}

      <div className="grid space-y-4 w-full lg:max-w-4xl">
        {/* overview card 1 */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full z-20">
          {metricsUpper.map((x, index) => (
            <div
              key={index}
              className="flex overflow-hidden relative justify-start gap-2 sm:gap-4 py-3 sm:py-4 w-full border rounded-[10px]  border-[#0FC99F45]"
            >
              {/* icon */}
              <div className="flex self-end space-x-2 sm:space-x-3 items-center justify-center ml-4 sm:ml-7">
                <span
                  dangerouslySetInnerHTML={{ __html: x.icon }}
                  className="self-start flex items-center justify-center relative shadow-2xl shadow-black-300/50 rounded-full h-[32px] w-[32px] sm:h-[40px] sm:w-[40px]"
                />

                {/* contents */}
                <div className="self-start flex flex-col gap-1 sm:gap-2">
                  <p className="text-sm sm:text-[16px] text-neutral-500">
                    {x.title}
                  </p>
                  <div className="flex gap-1 sm:gap-2 items-center justify-center">
                    <h1 className="text-xl md:text-md sm:text-2xl font-extrabold md:font-medium">
                      {x.value}
                    </h1>
                    <span className="text-sm sm:text-base font-normal">
                      {x.unit}
                    </span>
                    {/* trendValue */}
                    <div className="flex items-center shadow-[0_2px_4px_rgba(15,201,159,0.1)] h-[fit-content] p-1 sm:p-2 rounded-[5px] gap-1 sm:gap-2 text-[#0FC99F]">
                      <span className="text-xs sm:text-sm">{x.trendValue}</span>
                      <span dangerouslySetInnerHTML={{ __html: x.trend }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* trend style */}
              <div className={`hidden sm:block ${x.style}`}>
                <span dangerouslySetInnerHTML={{ __html: x.trendStyle }} />
              </div>
            </div>
          ))}
        </div>

        {/* overview card 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {metricsLower.map((x, index) => (
            <div
              key={index}
              className="flex overflow-hidden relative justify-start gap-2 sm:gap-4 py-3 sm:py-4 w-full border rounded-[10px] border-[#0FC99F45]"
            >
              {/* icon */}
              <div className="flex self-end space-x-2 sm:space-x-3 items-center justify-center ml-4 sm:ml-7">
                <span
                  dangerouslySetInnerHTML={{ __html: x.icon }}
                  className="self-start flex items-center justify-center relative shadow-2xl shadow-black-300/50 rounded-full h-[32px] w-[32px] sm:h-[40px] sm:w-[40px]"
                />

                {/* contents */}
                <div className="self-start flex flex-col gap-1 sm:gap-2">
                  <p className="text-sm sm:text-[16px] text-neutral-500">
                    {x.title}
                  </p>
                  <div className="flex gap-1 sm:gap-2 items-center justify-center">
                    <h1 className="text-xl md:text-md sm:text-2xl font-extrabold md:font-medium">
                      {x.value}
                    </h1>
                    <span className="text-sm sm:text-base font-normal">
                      {x.unit}
                    </span>
                    {/* trendValue */}
                    <div className="flex items-center shadow-[0_2px_4px_rgba(15,201,159,0.1)] h-[fit-content] p-1 sm:p-2 rounded-[5px] gap-1 sm:gap-2 text-[#0FC99F]">
                      <span className="text-xs sm:text-sm">{x.trendValue}</span>
                      <span dangerouslySetInnerHTML={{ __html: x.trend }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* trend style */}
              <div className={`hidden sm:block ${x.style}`}>
                <span dangerouslySetInnerHTML={{ __html: x.trendStyle }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* emptyBox */}
      <div className=" block   border border-[#D4D4D4] w-full max-w-xs rounded-[10px]" />
    </div>
  );
}
