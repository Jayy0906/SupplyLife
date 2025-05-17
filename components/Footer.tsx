"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Link from "next/link";

type SubscriptionStatus = "success" | "error" | "loading" | null;

export default function Footer() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] =
    useState<SubscriptionStatus>(null);

  const navigationLinks = [
    { title: "HOW IT WORKS", href: "/how-it-works" },
    { title: "REVIEWS", href: "/reviews" },
    { title: "FAQS", href: "/faq" },
  ];

  const includedLinks = [
    { title: "WHAT’S INCLUDED", href: "/what-is-included" },
    { title: "WHAT WE TEST FOR", href: "/what-we-test-for" },
    { title: "GET YOUR KIT", href: "/get-your-kit" },
  ];

  const utilityLinks = [
    { title: "CONTACT", href: "/contact" },
    { title: "TERMS & CONDITIONS", href: "/terms&conditions" },
    { title: "PRIVACY POLICY", href: "/privacy-policy" },
  ];

  const handleSubscribeClick = async (event: FormEvent) => {
    event.preventDefault();
    if (!email || !validateEmail(email)) {
      setSubscriptionStatus("error");
      return;
    }

    setSubscriptionStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubscriptionStatus("success");
    setIsPopupVisible(true);
    setEmail("");
  };

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    setSubscriptionStatus(null);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setSubscriptionStatus(null);
  };

  useEffect(() => {
    if (isPopupVisible) {
      const timeout = setTimeout(() => {
        setIsPopupVisible(false);
        setSubscriptionStatus(null);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [isPopupVisible]);

  return (
    <footer className="bg-gray-100 py-8 md:py-8 lg:py-14 2xl:py-50 px-6 md:px-10 lg:px-20 2xl:px-64">
      <div className="flex flex-col lg:flex-row flex-wrap gap-10 lg:gap-14">
        {/* Company Info */}
        <div className="flex-1 min-w-[250px]">
          <div className="text-2xl md:text-3xl 2xl:text-8xl font-bold mb-2 2xl:mb-10">
            <span className="text-black">SUPPLY</span>
            <span className="text-yellow-400">life</span>
          </div>
          <p className="text-sm md:text-base text-gray-500 2xl:text-6xl">
            COPYRIGHT 2019. <br /> ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex-1 min-w-[250px] text-sm md:text-base 2xl:text-5xl text-gray-700 lg:mr-60 2xl:mr-160">
          {" "}
          {/* Adjusted lg:mr-40 to lg:mr-20 for reduced right margin */}
          <div className="flex flex-col md:flex-row md:justify-between lg:gap-20 2xl:gap-40 w-full">
            {/* Navigation column */}
            <div className="mb-6 md:mb-0 md:flex-1">
              <h3 className="font-bold mb-2 2xl:mb-10 text-black 2xl:text-7xl">
                Navigation
              </h3>
              <ul className="space-y-0.5 2xl:space-y-8">
                {" "}
                {/* Reduced vertical space between items */}
                {navigationLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="hover:text-black whitespace-nowrap 2xl:text-6xl"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Included column */}
            <div className="mb-6 md:mb-0 md:mt-8 lg:mt-8 2xl:mt-28 md:flex-1 2xl:text-6xl">
              <h3 className="sr-only">What's Included</h3>
              <ul className="space-y-0.5 2xl:space-y-8">
                {includedLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="hover:text-black whitespace-nowrap"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Utility column */}
            <div className="md:flex-1 md:mt-8 lg:mt-8 2xl:mt-28 2xl:text-6xl">
              <h3 className="sr-only">Utility</h3>
              <ul className="space-y-0.5 2xl:space-y-8">
                {utilityLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="hover:text-black whitespace-nowrap"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="font-bold mb-2 2xl:mb-10 text-black 2xl:text-7xl">
            Newsletter Sign up
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-4 2xl:mb-10 2xl:text-6xl">
            Enter your email to stay updated with news and updates from
            SupplyLife.
          </p>
          <form
            onSubmit={handleSubscribeClick}
            className="flex flex-col sm:flex-row gap-2"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={handleEmailChange}
              aria-describedby="email-error"
              className={`px-4 2xl:px-14 py-2 rounded-full border w-full text-sm md:text-base bg-white text-black 2xl:text-6xl ${
                subscriptionStatus === "error"
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            <button
              type="submit"
              disabled={subscriptionStatus === "loading"}
              className="bg-yellow-400 text-white px-6 py-2 2xl:px-15 2xl:py-15 rounded-full text-sm md:text-base 2xl:text-6xl font-semibold hover:bg-yellow-500 sm:w-auto w-full cursor-pointer"
            >
              {subscriptionStatus === "loading"
                ? "Subscribing..."
                : "SUBSCRIBE"}
            </button>
          </form>
          {subscriptionStatus === "error" && (
            <p id="email-error" className="mt-2 text-red-500 text-sm">
              Please enter a valid email address.
            </p>
          )}
        </div>
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-md shadow-lg relative max-w-md w-full mx-4">
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-green-500">Success!</h2>
            <p className="text-gray-700">
              Thanks for subscribing. You’ll now get the latest updates from
              SupplyLife.
            </p>
          </div>
        </div>
      )}
    </footer>
  );
}
