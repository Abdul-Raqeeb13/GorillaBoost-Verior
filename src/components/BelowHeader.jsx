  import React, { useState, useRef, useEffect } from "react";

  const BelowHeader = ({
    title,
    subtitle,
    btnName = "Filter",
    color = "bg-cardColor",
    px = "",
    py = "",
    icon, // JSX icon
    options = [], // array of { label, value }
    onSelectOption = () => {} // callback
  }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown on outside click
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <header
        className={`${color} mt-5 shadow-sm text-white ${px} ${py} flex flex-col sm:flex-row sm:justify-between sm:items-center  sm:gap-0 `}
      >
        {/* Left: Title & Subtitle */}
        <div>
          <p className="font-semibold text-24">{title}</p>
          {subtitle && <p className="text-white font-normal text-14">{subtitle}</p>}
        </div>

        {/* Right: Button with Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center space-x-2 px-4 py-2  text-white rounded-lg bg-extraLightGray"
          >
            {icon && <span className="w-5 h-5">{icon}</span>}
            <span className="text-sm font-medium">{btnName}</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                open ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {open && options.length > 0 && (
            <div className="absolute right-0 mt-2 w-48 bg-extraLightGray text-white rounded-md shadow-lg z-20">
              {options.map((opt, index) => (
                <button
                  key={index}
                  className="w-full text-left px-4 py-2 "
                  onClick={() => {
                    onSelectOption(opt);
                    setOpen(false);
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>
    );
  };

  export default BelowHeader;
