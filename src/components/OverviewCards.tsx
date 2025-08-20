'use client'

import React from 'react'

const metricsUpper = [
  {
    title: "Carbon dioxide Value",
    value: "3200.28",
    unit: "ppm",
    trend: `<svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.6875 9.50001L6.75 4.43751L9.9795 7.66701C10.9132 5.82663 12.4534 4.36485 14.34 3.52851L16.395 2.61351M16.395 2.61351L11.94 0.902756M16.395 2.61351L14.685 7.06851" stroke="#0FC99F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    trendValue: "40%",
    icon: `<svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8125 14.75C1.8125 16.2418 2.40513 17.6726 3.46002 18.7275C4.51492 19.7824 5.94566 20.375 7.4375 20.375H21.5C22.5973 20.3762 23.6602 19.9924 24.5036 19.2905C25.347 18.5885 25.9175 17.613 26.1156 16.5337C26.3136 15.4545 26.1268 14.3399 25.5877 13.3843C25.0485 12.4286 24.1912 11.6923 23.165 11.3037C23.397 10.644 23.4398 9.93261 23.2888 9.24982C23.1377 8.56704 22.7987 7.94009 22.3101 7.4398C21.8215 6.9395 21.2028 6.58579 20.5238 6.41862C19.8448 6.25144 19.1325 6.27747 18.4675 6.49375C18.0374 4.84377 16.9819 3.42599 15.5247 2.54064C14.0675 1.65528 12.3228 1.37188 10.6603 1.75043C8.99771 2.12899 7.54776 3.13978 6.61748 4.56876C5.6872 5.99775 5.34963 7.73271 5.67625 9.40625C4.55198 9.77731 3.57337 10.4935 2.87968 11.4529C2.18598 12.4123 1.81254 13.5661 1.8125 14.75Z" stroke="#0FC99F" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    trendStyle: `<svg width="65" height="88" viewBox="0 0 65 88" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.536181 85.9334C7.15221 90.612 12.1746 43.4818 19.5301 53.2976C26.8856 63.1134 40.1859 59.2811 40.1859 59.2811C40.1859 59.2811 37.2809 23.4894 48.05 29.4407C58.8191 35.392 45.332 28.5777 65.8912 39.9392C86.4503 51.3008 65.3693 0.991547 65.3693 0.991547" stroke="#0FC99F" stroke-width="1.58188"/>
</svg>
`,
style: "absolute -right-4 top-[4px] "
  },
  {
    title: "Ammonia Value",
    value: "3200.28",
    unit: "ppm",
    trend: `<svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.6875 9.50001L6.75 4.43751L9.9795 7.66701C10.9132 5.82663 12.4534 4.36485 14.34 3.52851L16.395 2.61351M16.395 2.61351L11.94 0.902756M16.395 2.61351L14.685 7.06851" stroke="#0FC99F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    trendValue: "8%",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_411_288)">
<path d="M13.5174 14.634C13.4252 14.4738 13.2261 14.4083 13.0561 14.4811C12.7333 14.6219 12.3764 14.6971 12.0026 14.6971C11.6311 14.6971 11.2767 14.6195 10.9538 14.4811C10.7839 14.4083 10.5848 14.4714 10.4925 14.634L7.91921 19.1179C7.81482 19.2976 7.8828 19.5282 8.0673 19.6229C8.69121 19.9434 10.1381 20.5673 11.9807 20.577C11.9807 20.577 11.9977 20.577 12.0026 20.577C12.0098 20.577 12.0244 20.577 12.0244 20.577C13.8524 20.5673 15.309 19.9434 15.9378 19.6229C16.1223 19.5282 16.1927 19.2976 16.0883 19.1179L13.5174 14.634Z" fill="#0FC99F"/>
<path d="M9.35868 11.7451C9.44608 11.0022 9.83694 10.3419 10.4026 9.9122C10.5507 9.80053 10.5919 9.59661 10.4973 9.43881L7.88994 4.97674C7.78555 4.79709 7.55007 4.74125 7.3777 4.85536C6.78778 5.23893 5.52296 6.19058 4.6053 7.77342C4.59801 7.78556 4.59801 7.78556 4.59559 7.79041C4.59316 7.79527 4.58587 7.80741 4.58587 7.80741C3.68035 9.40725 3.49828 10.9804 3.46672 11.682C3.45701 11.8908 3.62209 12.0631 3.83087 12.0631H9.00182C9.18146 12.0656 9.33683 11.9272 9.35868 11.7451Z" fill="#0FC99F"/>
<path d="M19.4165 7.80741C19.4165 7.80741 19.4092 7.79527 19.4068 7.79041C19.4044 7.78556 19.4044 7.78556 19.3971 7.77342C18.4794 6.19058 17.2146 5.23893 16.6247 4.85536C16.4499 4.74125 16.2168 4.79709 16.1124 4.97674L13.5027 9.43881C13.4104 9.59903 13.4517 9.80053 13.5974 9.9122C14.163 10.3419 14.5539 11.0022 14.6413 11.7451C14.6631 11.9272 14.8185 12.0656 15.003 12.0656H20.1739C20.3827 12.0656 20.5478 11.8932 20.5381 11.6844C20.5041 10.9828 20.3245 9.40967 19.4165 7.80741Z" fill="#0FC99F"/>
<path d="M10.2205 12.0534C10.2253 12.704 10.5798 13.2697 11.1041 13.5756C11.3663 13.7285 11.6746 13.8183 11.9999 13.8183C12.3277 13.8183 12.636 13.7285 12.9006 13.5756C13.4226 13.2696 13.7746 12.704 13.7819 12.0534C13.7819 12.0485 13.7819 12.0437 13.7819 12.0388C13.7819 11.3785 13.4226 10.8031 12.8909 10.4972C12.6287 10.3467 12.3253 10.2593 12.0024 10.2593C11.6795 10.2593 11.376 10.3467 11.1138 10.4972C10.5822 10.8055 10.2229 11.3809 10.2229 12.0388C10.2205 12.0437 10.2205 12.0485 10.2205 12.0534Z" fill="#0FC99F"/>
<path d="M20.4847 3.51527C19.385 2.41311 18.1007 1.54886 16.6708 0.944366C15.19 0.318026 13.6193 0 12 0C10.3807 0 8.81003 0.318026 7.32915 0.944366C5.89925 1.54886 4.61744 2.41311 3.51527 3.51527C2.41311 4.61744 1.54886 5.89925 0.944366 7.32915C0.318025 8.80761 0 10.3807 0 12C0 13.6193 0.318025 15.19 0.944366 16.6708C1.54886 18.1007 2.41311 19.3825 3.51527 20.4847C4.61744 21.5869 5.89925 22.4511 7.32918 23.0556C8.81003 23.682 10.3807 24 12 24C13.6193 24 15.19 23.682 16.6708 23.0557C18.1007 22.4512 19.385 21.5869 20.4847 20.4848C21.5869 19.3826 22.4511 18.1008 23.0556 16.6709C23.682 15.19 24 13.6193 24 12C24 10.3808 23.6819 8.80763 23.058 7.32918C22.4536 5.89925 21.5869 4.61744 20.4847 3.51527ZM20.9338 15.7726C20.4459 16.9258 19.7467 17.9623 18.8558 18.8533C17.9648 19.7443 16.9282 20.4434 15.775 20.9314C14.5806 21.4364 13.3109 21.6937 12.0024 21.6937C10.6939 21.6937 9.42424 21.4364 8.22982 20.9314C7.07667 20.4435 6.04006 19.7443 5.1491 18.8533C4.25814 17.9624 3.55897 16.9258 3.07101 15.7726C2.56605 14.5782 2.30872 13.3085 2.30872 12C2.30872 10.6915 2.56605 9.42183 3.07101 8.22742C3.55897 7.07427 4.25814 6.03765 5.1491 5.1467C6.04006 4.25574 7.07667 3.55657 8.22982 3.06861C9.42424 2.56363 10.6939 2.30629 12.0024 2.30629C13.3109 2.30629 14.5806 2.56363 15.775 3.06858C16.9282 3.55654 17.9648 4.25571 18.8558 5.14667C19.7467 6.03763 20.4459 7.07425 20.9338 8.22739C21.4388 9.42181 21.6961 10.6915 21.6961 12C21.6961 13.3085 21.4388 14.5782 20.9338 15.7726Z" fill="#0FC99F"/>
</g>
<defs>
<clipPath id="clip0_411_288">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`,
    trendStyle: `<svg width="84" height="51" viewBox="0 0 84 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.0154 48.9081C6.77049 54.6125 19.4869 8.95325 25.1252 19.8465C30.7635 30.7397 44.5133 29.1504 44.5133 29.1504C44.5133 29.1504 47.5432 -6.63097 57.185 1.01278C66.8268 8.65652 54.6462 -0.286174 73.0533 14.3064C91.4604 28.899 78.9535 -24.1953 78.9535 -24.1953" stroke="#0FC99F" stroke-width="1.58188"/>
</svg>
`,
style: 'absolute right-4 top-0'
  }
]
const metricsLower = [
{
    title: "Temperature",
    value: "32",
    unit: "°C",
    trend: `<svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.6875 0.90275L6.75 5.96525L9.9795 2.73575C10.9132 4.57613 12.4534 6.03791 14.34 6.87425L16.395 7.78925M16.395 7.78925L11.94 9.5M16.395 7.78925L14.685 3.33425" stroke="#FF1D1D" stroke-opacity="0.9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    trendValue: "2%",
    icon: `<svg width="11" height="24" viewBox="0 0 11 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 14.76V3.5C8 2.83696 7.73661 2.20107 7.26777 1.73223C6.79893 1.26339 6.16304 1 5.5 1C4.83696 1 4.20107 1.26339 3.73223 1.73223C3.26339 2.20107 3 2.83696 3 3.5V14.76C2.19728 15.2963 1.58832 16.0766 1.26307 16.9856C0.937822 17.8946 0.91352 18.8841 1.19376 19.8079C1.47399 20.7317 2.04391 21.541 2.81934 22.1161C3.59476 22.6912 4.53459 23.0017 5.5 23.0017C6.46541 23.0017 7.40524 22.6912 8.18066 22.1161C8.95609 21.541 9.52601 20.7317 9.80624 19.8079C10.0865 18.8841 10.0622 17.8946 9.73693 16.9856C9.41168 16.0766 8.80272 15.2963 8 14.76Z" stroke="#0FC99F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    trendStyle: `<svg width="89" height="38" viewBox="0 0 89 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.24534 25.5999C3.42974 33.4031 37.0481 -0.0076866 36.5668 12.2488C36.0856 24.5053 48.8247 29.9182 48.8247 29.9182C48.8247 29.9182 69.1405 0.308212 73.7455 11.7181C78.3506 23.1279 72.1803 9.33423 80.9717 31.1167C89.7632 52.8991 105.127 0.560106 105.127 0.560106" stroke="#0FC99F" stroke-width="1.58188"/>
</svg>
`,
style: "absolute -right-4 bottom-4 "

  },
  {
    title: "Humidity",
    value: "62",
    unit: "%",
    trend: `<svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.6875 9.50001L6.75 4.43751L9.9795 7.66701C10.9132 5.82663 12.4534 4.36485 14.34 3.52851L16.395 2.61351M16.395 2.61351L11.94 0.902756M16.395 2.61351L14.685 7.06851" stroke="#0FC99F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    trendValue: "5%",
    icon: `<svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.99989 1.91415L14.6599 8.04582C15.7792 9.25765 16.5417 10.8019 16.8508 12.4832C17.1599 14.1645 17.0018 15.9074 16.3964 17.4914C15.7911 19.0753 14.7657 20.4292 13.45 21.3818C12.1343 22.3343 10.5874 22.8428 9.00489 22.8428C7.42241 22.8428 5.87549 22.3343 4.55978 21.3818C3.24407 20.4292 2.2187 19.0753 1.61335 17.4914C1.008 15.9074 0.849881 14.1645 1.15899 12.4832C1.46809 10.8019 2.23054 9.25765 3.34989 8.04582L8.99989 1.91415Z" stroke="#0FC99F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
 trendStyle: `<svg width="86" height="67" viewBox="0 0 86 67" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M84.6095 1.69785C78.5645 -3.69846 68.2481 42.5621 62.049 31.978C55.85 21.3938 42.2018 23.6985 42.2018 23.6985C42.2018 23.6985 41.0433 59.5892 31.0157 52.459C20.9882 45.3288 16.8269 38.1488 9.89113 39.0952C2.9554 40.0416 1.56335 89.0107 1.56335 89.0107" stroke="#0FC99F" stroke-width="1.58188"/>
</svg>
`,
style: 'absolute right-4 bottom-0'

  },
]
  

export function OverviewCards() {
  return (
    // <CHANGE> Made container responsive with proper flex layout
    <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-6 w-full">
      {/* overviewcard */}
      
      <div className="grid space-y-4 w-full lg:max-w-4xl">
        {/* overview card 1 */}
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full z-20">
          {metricsUpper.map((x, index) => (
            
            <div key={index} className="flex overflow-hidden relative justify-start gap-2 sm:gap-4 py-3 sm:py-4 w-full border rounded-[10px] shadow-md border-[#0FC99F45]">
              {/* icon */}
              <div className="flex self-end space-x-2 sm:space-x-3 items-center justify-center ml-4 sm:ml-7">
                <span dangerouslySetInnerHTML={{__html: x.icon}} className="self-start flex items-center justify-center relative shadow-2xl shadow-black-300/50 rounded-full h-[32px] w-[32px] sm:h-[40px] sm:w-[40px]" />
                
                {/* contents */}
                <div className="self-start flex flex-col gap-1 sm:gap-2">
                  <p className="text-sm sm:text-[16px] text-neutral-500">{x.title}</p>
                  <div className="flex gap-1 sm:gap-2 items-center justify-center">
                    <h1 className="text-xl sm:text-2xl font-extrabold">{x.value}</h1>
                    <span className="text-sm sm:text-base font-normal">{x.unit}</span>
                    {/* trendValue */}
                    <div className="flex items-center shadow-md h-[fit-content] p-1 sm:p-2 rounded-[10px] gap-1 sm:gap-2 text-[#0FC99F]">
                      <span className="text-xs sm:text-sm">{x.trendValue}</span>
                      <span dangerouslySetInnerHTML={{ __html: x.trend}} />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* trend style */}
              <div className={`hidden sm:block ${x.style}`}>
                <span dangerouslySetInnerHTML={{__html: x.trendStyle}} />
              </div>
            </div>
          ))}
        </div>

        {/* overview card 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {metricsLower.map((x, index) => (
                        <div key={index} className="flex overflow-hidden relative justify-start gap-2 sm:gap-4 py-3 sm:py-4 w-full border rounded-[10px] shadow-md border-[#0FC99F45]">
              {/* icon */}
              <div className="flex self-end space-x-2 sm:space-x-3 items-center justify-center ml-4 sm:ml-7">
                <span dangerouslySetInnerHTML={{__html: x.icon}} className="self-start flex items-center justify-center relative shadow-2xl shadow-black-300/50 rounded-full h-[32px] w-[32px] sm:h-[40px] sm:w-[40px]" />
                
                {/* contents */}
                <div className="self-start flex flex-col gap-1 sm:gap-2">
                  <p className="text-sm sm:text-[16px] text-neutral-500">{x.title}</p>
                  <div className="flex gap-1 sm:gap-2 items-center justify-center">
                    <h1 className="text-xl sm:text-2xl font-extrabold">{x.value}</h1>
                    <span className="text-sm sm:text-base font-normal">{x.unit}</span>
                    {/* trendValue */}
                    <div className="flex items-center shadow-md h-[fit-content] p-1 sm:p-2 rounded-[10px] gap-1 sm:gap-2 text-[#0FC99F]">
                      <span className="text-xs sm:text-sm">{x.trendValue}</span>
                      <span dangerouslySetInnerHTML={{ __html: x.trend}} />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* trend style */}
              <div className={`hidden sm:block ${x.style}`}>
                <span dangerouslySetInnerHTML={{__html: x.trendStyle}} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* emptyBox */}
      <div className=" block   shadow-md w-full max-w-xs rounded-[10px]" />
    </div>
  )
}
