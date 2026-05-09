"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"

export function TopNavbar() {
  const [notified, setNotified] = useState(false)
  const [date, setDate] = useState("")
  const [period, setPeriod] = useState("")
  const [profilePic, setProfilePic] = useState()
  const [userName, setUserName] = useState()
  const [email, setEmail] = useState()
  // <CHANGE> Added state for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setDate(() => {
      const currentDate = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      return currentDate
    })

    const hours = new Date().getHours()
    if (hours >= 5 && hours < 12) {
      setPeriod("Morning")
    } else if (hours >= 12 && hours < 17) {
      setPeriod("Afternoon")
    } else if (hours >= 17 && hours < 21) {
      setPeriod("Evening")
    } else {
      setPeriod("Night")
    }
  }, [])

  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 relative">
      <div className="flex items-center justify-between">
        {/* Greeting & Date */}
        <div className="text-left">
          <h1 className="text-[24px] sm:text-xl font-medium text-black">
            Good {period}, David
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">{date}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Chat Button - Always visible */}
          <button className="p-2 hover:bg-gray-100 rounded-[6px] shadow-sm cursor-pointer ">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.125 7.75C7.125 7.84946 7.08549 7.94484 7.01517 8.01517C6.94484 8.08549 6.84946 8.125 6.75 8.125C6.65054 8.125 6.55516 8.08549 6.48484 8.01517C6.41451 7.94484 6.375 7.84946 6.375 7.75C6.375 7.65054 6.41451 7.55516 6.48484 7.48484C6.55516 7.41451 6.65054 7.375 6.75 7.375C6.84946 7.375 6.94484 7.41451 7.01517 7.48484C7.08549 7.55516 7.125 7.65054 7.125 7.75ZM7.125 7.75H6.75M10.875 7.75C10.875 7.84946 10.8355 7.94484 10.7652 8.01517C10.6948 8.08549 10.5995 8.125 10.5 8.125C10.4005 8.125 10.3052 8.08549 10.2348 8.01517C10.1645 7.94484 10.125 7.84946 10.125 7.75C10.125 7.65054 10.1645 7.55516 10.2348 7.48484C10.3052 7.41451 10.4005 7.375 10.5 7.375C10.5995 7.375 10.6948 7.41451 10.7652 7.48484C10.8355 7.55516 10.875 7.65054 10.875 7.75ZM10.875 7.75H10.5M14.625 7.75C14.625 7.84946 14.5855 7.94484 14.5152 8.01517C14.4448 8.08549 14.3495 8.125 14.25 8.125C14.1505 8.125 14.0552 8.08549 13.9848 8.01517C13.9145 7.94484 13.875 7.84946 13.875 7.75C13.875 7.65054 13.9145 7.55516 13.9848 7.48484C14.0552 7.41451 14.1505 7.375 14.25 7.375C14.3495 7.375 14.4448 7.41451 14.5152 7.48484C14.5855 7.55516 14.625 7.65054 14.625 7.75ZM14.625 7.75H14.25M0.75 10.76C0.75 12.36 1.873 13.754 3.457 13.987C4.544 14.147 5.642 14.27 6.75 14.356V19L10.934 14.817C11.1412 14.6107 11.4197 14.4918 11.712 14.485C13.6636 14.437 15.6105 14.2707 17.542 13.987C19.127 13.754 20.25 12.361 20.25 10.759V4.741C20.25 3.139 19.127 1.746 17.543 1.513C15.211 1.17071 12.857 0.999258 10.5 1C8.108 1 5.756 1.175 3.457 1.513C1.873 1.746 0.75 3.14 0.75 4.741V10.759V10.76Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Notification Button - Always visible */}
          <button className="relative p-2 hover:bg-gray-100 rounded-[6px] shadow-sm cursor-pointer transition-all duration-200">
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.438 18.214C16.6797 17.9444 18.8823 17.4069 21 16.6127C19.2066 14.5942 18.2156 11.9705 18.2195 9.25129V8.33448C18.2195 6.38926 17.459 4.5237 16.1051 3.14822C14.7513 1.77274 12.9152 1 11.0006 1C9.08603 1 7.24987 1.77274 5.89606 3.14822C4.54225 4.5237 3.78169 6.38926 3.78169 8.33448V9.25129C3.78532 11.9707 2.79388 14.5944 1 16.6127C3.08506 17.395 5.28322 17.939 7.5632 18.214M14.438 18.214C12.1544 18.4892 9.84679 18.4892 7.5632 18.214M14.438 18.214C14.6114 18.7639 14.6545 19.3477 14.5638 19.9177C14.4732 20.4878 14.2513 21.028 13.9163 21.4945C13.5813 21.9609 13.1426 22.3404 12.6359 22.602C12.1293 22.8636 11.5689 23 11.0006 23C10.4323 23 9.87195 22.8636 9.36529 22.602C8.85862 22.3404 8.41993 21.9609 8.08491 21.4945C7.74989 21.028 7.52802 20.4878 7.43736 19.9177C7.3467 19.3477 7.38982 18.7639 7.5632 18.214" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {notified ? (
              <div className="bg-red-800 rounded-full h-2 w-2 absolute top-[6px] right-[9px]" />
            ) : (
              <div className="bg-transparent rounded-full h-2 w-2 absolute top-[6px] right-[9px]" />
            )}
          </button>

          {/* <CHANGE> Profile - Hidden on mobile, visible on desktop */}
          <div className="hidden md:flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
              <Image
                width={60}
                height={60}
                src="/profilePic.png"
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <h1 className="text-base font-medium truncate">
                David Jeff
              </h1>
              <span className="text-gray-500 text-[10px] font-medium truncate">
                davidjeff@gmail.com
              </span>
            </div>
          </div>

          {/* <CHANGE> Hamburger Menu Button - Visible only on mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-[6px] shadow-md transition-all duration-200"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* <CHANGE> Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-2 invisible'
        }`}
      >
        <div className="p-4">
          <div className="flex gap-3 items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
              <Image
                width={60}
                height={60}
                src="/profilePic.png"
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <h1 className="text-base font-medium">
                David Jeff
              </h1>
              <span className="text-gray-500 text-sm font-medium">
                davidjeff@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <CHANGE> Overlay for mobile menu */}
      {/* {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-25 z-[-1]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )} */}
    </header>
  )
}
