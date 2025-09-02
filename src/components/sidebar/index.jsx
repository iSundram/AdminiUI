/* eslint-disable */

import React, { useState } from "react";
import { HiX, HiCog } from "react-icons/hi";
import Links from "./components/Links";

import SidebarCard from "components/sidebar/componentsrtl/SidebarCard";
import routes from "routes.js";

const Sidebar = ({ open, onClose }) => {
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [sidebarTransparency, setSidebarTransparency] = useState(0.95);
  const [sidebarColor, setSidebarColor] = useState('white');

  const transparentBg = sidebarColor === 'white' 
    ? `rgba(255, 255, 255, ${sidebarTransparency})` 
    : `rgba(30, 41, 59, ${sidebarTransparency})`;

  return (
    <>
      <div
        className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col pb-10 shadow-2xl shadow-white/5 transition-all dark:text-white md:!z-50 lg:!z-50 xl:!z-0 backdrop-blur-md ${
          open ? "translate-x-0" : "-translate-x-96"
        }`}
        style={{ 
          backgroundColor: transparentBg,
          backdropFilter: 'blur(10px)',
          borderRight: '1px solid rgba(255, 255, 255, 0.2)'
        }}
      >
        <span
          className="absolute top-4 right-4 block cursor-pointer xl:hidden"
          onClick={onClose}
        >
          <HiX />
        </span>

        {/* Customizer Button */}
        <button
          className="absolute top-4 left-4 block cursor-pointer p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-all"
          onClick={() => setShowCustomizer(!showCustomizer)}
        >
          <HiCog className="h-5 w-5" />
        </button>

        <div className={`mx-[56px] mt-[50px] flex items-center`}>
          <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
            AdminiUI
          </div>
        </div>
        <div className="mt-[58px] mb-7 h-px bg-gray-300/50 dark:bg-white/30" />
        {/* Nav item */}

        <ul className="mb-auto pt-1">
          <Links routes={routes} />
        </ul>

        {/* Customizer Card instead of Upgrade Card */}
        <div className="flex justify-center">
          <div className="relative mt-14 flex w-[256px] justify-center rounded-[20px] bg-gradient-to-br from-blue-500/80 via-purple-500/80 to-indigo-500/80 pb-4 backdrop-blur-md">
            <div className="absolute -top-12 flex h-24 w-24 items-center justify-center rounded-full border-[4px] border-white/30 bg-gradient-to-b from-blue-400/80 to-purple-500/80">
              <HiCog className="h-8 w-8 text-white" />
            </div>
            <div className="mt-16 flex h-fit flex-col items-center">
              <p className="text-lg font-bold text-white">AdminiUI</p>
              <p className="mt-1 px-4 text-center text-sm text-white">
                Customize your dashboard experience with our enhanced settings!
              </p>
            </div>
          </div>
        </div>

        {/* Nav item end */}
      </div>

      {/* Customizer Panel */}
      {showCustomizer && (
        <div className="fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-md shadow-2xl z-[60] transition-all duration-300 dark:bg-navy-800/95">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-navy-700 dark:text-white">Customize Sidebar</h3>
              <button
                onClick={() => setShowCustomizer(false)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-navy-700"
              >
                <HiX className="h-5 w-5" />
              </button>
            </div>

            {/* Transparency Control */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-navy-700 dark:text-white mb-2">
                Transparency: {Math.round((1 - sidebarTransparency) * 100)}%
              </label>
              <input
                type="range"
                min="0.5"
                max="1"
                step="0.05"
                value={sidebarTransparency}
                onChange={(e) => setSidebarTransparency(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
            </div>

            {/* Color Theme */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-navy-700 dark:text-white mb-2">
                Color Theme
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setSidebarColor('white')}
                  className={`w-8 h-8 rounded-full bg-white border-2 ${
                    sidebarColor === 'white' ? 'border-blue-500' : 'border-gray-300'
                  }`}
                />
                <button
                  onClick={() => setSidebarColor('dark')}
                  className={`w-8 h-8 rounded-full bg-navy-800 border-2 ${
                    sidebarColor === 'dark' ? 'border-blue-500' : 'border-gray-300'
                  }`}
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-navy-700 dark:text-white mb-2">
                Quick Actions
              </label>
              <div className="space-y-2">
                <button
                  onClick={() => setSidebarTransparency(0.9)}
                  className="w-full p-2 text-left rounded-lg bg-blue-50 hover:bg-blue-100 dark:bg-navy-700 dark:hover:bg-navy-600 text-sm"
                >
                  Glass Effect (10% transparent)
                </button>
                <button
                  onClick={() => setSidebarTransparency(0.7)}
                  className="w-full p-2 text-left rounded-lg bg-blue-50 hover:bg-blue-100 dark:bg-navy-700 dark:hover:bg-navy-600 text-sm"
                >
                  Semi-transparent (30%)
                </button>
                <button
                  onClick={() => setSidebarTransparency(1)}
                  className="w-full p-2 text-left rounded-lg bg-blue-50 hover:bg-blue-100 dark:bg-navy-700 dark:hover:bg-navy-600 text-sm"
                >
                  Solid (0% transparent)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
