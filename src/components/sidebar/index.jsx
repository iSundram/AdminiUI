/* eslint-disable */

import React, { useState, useEffect } from "react";
import { HiX, HiCog, HiChevronRight } from "react-icons/hi";
import { MdTrendingUp } from "react-icons/md";
import Links from "./components/Links";

import SidebarCard from "components/sidebar/componentsrtl/SidebarCard";
import routes from "routes.js";

const Sidebar = ({ open, onClose }) => {
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [sidebarTransparency, setSidebarTransparency] = useState(0.95);
  const [sidebarColor, setSidebarColor] = useState('white');
  const [sidebarStyle, setSidebarStyle] = useState('glass'); // glass, solid, gradient
  const [animation, setAnimation] = useState('slide'); // slide, fade, scale

  const transparentBg = sidebarColor === 'white' 
    ? `rgba(255, 255, 255, ${sidebarTransparency})` 
    : `rgba(30, 41, 59, ${sidebarTransparency})`;

  const getBackgroundStyle = () => {
    const baseStyles = {
      borderRight: '1px solid rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
    };

    switch (sidebarStyle) {
      case 'glass':
        return {
          ...baseStyles,
          backgroundColor: transparentBg,
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        };
      case 'gradient':
        return {
          ...baseStyles,
          background: `linear-gradient(135deg, ${transparentBg} 0%, rgba(99, 102, 241, 0.1) 100%)`,
          backdropFilter: 'blur(15px)',
        };
      case 'solid':
      default:
        return {
          ...baseStyles,
          backgroundColor: sidebarColor === 'white' ? '#ffffff' : '#1e293b',
          backdropFilter: 'none',
        };
    }
  };

  const getAnimationClass = () => {
    const baseClass = "sm:none duration-300 ease-in-out linear fixed !z-50 flex min-h-full flex-col pb-6 shadow-2xl transition-all dark:text-white md:!z-50 lg:!z-50 xl:!z-0";
    
    if (!open) {
      switch (animation) {
        case 'fade':
          return `${baseClass} -translate-x-96 opacity-0`;
        case 'scale':
          return `${baseClass} -translate-x-96 scale-95`;
        case 'slide':
        default:
          return `${baseClass} -translate-x-96`;
      }
    }
    
    return `${baseClass} translate-x-0 opacity-100 scale-100`;
  };

  return (
    <>
      <div
        className={getAnimationClass()}
        style={getBackgroundStyle()}
      >
        {/* Close button for mobile */}
        <button
          className="absolute top-4 right-4 block cursor-pointer xl:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200"
          onClick={onClose}
        >
          <HiX className="h-5 w-5" />
        </button>

        {/* Enhanced Header Section */}
        <div className="relative px-6 pt-8 pb-2">
          {/* Customizer Toggle */}
          <button
            className="absolute top-6 left-4 p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-200 hover:scale-105"
            onClick={() => setShowCustomizer(!showCustomizer)}
          >
            <HiCog className="h-5 w-5" />
          </button>

          {/* Enhanced Brand Section */}
          <div className="mt-8 mb-2">
            <div className="flex items-center justify-center mb-2">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">A</span>
              </div>
            </div>
            <h1 className="text-center font-bold text-2xl text-navy-700 dark:text-white tracking-tight">
              ADMINI<span className="text-brand-500">UI</span>
            </h1>
            <p className="text-center text-xs text-gray-500 dark:text-gray-400 font-medium mt-1">
              PROFESSIONAL
            </p>
          </div>
        </div>

        {/* Elegant divider */}
        <div className="mx-6 h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent dark:via-white/30" />

        {/* Navigation Menu */}
        <div className="flex-1 px-4 py-6">
          <ul className="space-y-1">
            <Links routes={routes} />
          </ul>
        </div>

        {/* Enhanced Bottom Dashboard Card */}
        <div className="mx-4 mb-4">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-indigo-600/90 p-6 backdrop-blur-sm">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-10 -translate-x-10"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                    <MdTrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white/90 text-sm font-medium">Total Balance</span>
                </div>
                <button className="text-white/70 hover:text-white transition-colors">
                  <HiChevronRight className="h-4 w-4" />
                </button>
              </div>
              
              <div className="mb-3">
                <h3 className="text-2xl font-bold text-white">$12,847.50</h3>
                <div className="flex items-center space-x-1 mt-1">
                  <span className="text-green-300 text-xs">+2.45%</span>
                  <span className="text-white/70 text-xs">from last month</span>
                </div>
              </div>

              {/* Mini chart visualization */}
              <div className="flex items-end space-x-1 h-8">
                {[12, 19, 15, 25, 22, 18, 30, 28, 35, 32, 38, 42].map((height, index) => (
                  <div
                    key={index}
                    className="bg-white/30 rounded-sm flex-1"
                    style={{ height: `${(height / 42) * 100}%` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Nav item end */}
      </div>

      {/* Enhanced Customizer Panel */}
      {showCustomizer && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[59] transition-opacity duration-300"
            onClick={() => setShowCustomizer(false)}
          />
          
          {/* Customizer Panel */}
          <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white/95 backdrop-blur-xl shadow-2xl z-[60] transform transition-all duration-300 ease-out dark:bg-navy-800/95 border-l border-white/20">
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-white/10">
                <div>
                  <h3 className="text-xl font-bold text-navy-700 dark:text-white">Customize Sidebar</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Personalize your experience</p>
                </div>
                <button
                  onClick={() => setShowCustomizer(false)}
                  className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-navy-700 transition-colors"
                >
                  <HiX className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
                {/* Appearance Style */}
                <div>
                  <label className="block text-sm font-semibold text-navy-700 dark:text-white mb-3">
                    Appearance Style
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'glass', label: 'Glass', desc: 'Modern glass effect' },
                      { value: 'gradient', label: 'Gradient', desc: 'Colorful gradient' },
                      { value: 'solid', label: 'Solid', desc: 'Classic solid' }
                    ].map((style) => (
                      <button
                        key={style.value}
                        onClick={() => setSidebarStyle(style.value)}
                        className={`p-3 rounded-xl text-center transition-all duration-200 ${
                          sidebarStyle === style.value
                            ? 'bg-blue-500 text-white shadow-lg scale-105'
                            : 'bg-gray-100 dark:bg-navy-700 hover:bg-gray-200 dark:hover:bg-navy-600'
                        }`}
                      >
                        <div className="text-sm font-medium">{style.label}</div>
                        <div className="text-xs opacity-75 mt-1">{style.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Transparency Control */}
                <div>
                  <label className="flex items-center justify-between text-sm font-semibold text-navy-700 dark:text-white mb-3">
                    <span>Transparency</span>
                    <span className="text-blue-500">{Math.round((1 - sidebarTransparency) * 100)}%</span>
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="0.3"
                      max="1"
                      step="0.05"
                      value={sidebarTransparency}
                      onChange={(e) => setSidebarTransparency(parseFloat(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 slider"
                      style={{
                        background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(1 - sidebarTransparency) * 100}%, #e5e7eb ${(1 - sidebarTransparency) * 100}%, #e5e7eb 100%)`
                      }}
                    />
                  </div>
                </div>

                {/* Animation Style */}
                <div>
                  <label className="block text-sm font-semibold text-navy-700 dark:text-white mb-3">
                    Animation Style
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'slide', label: 'Slide', desc: 'Classic slide animation' },
                      { value: 'fade', label: 'Fade', desc: 'Smooth fade transition' },
                      { value: 'scale', label: 'Scale', desc: 'Scale with slide' }
                    ].map((anim) => (
                      <button
                        key={anim.value}
                        onClick={() => setAnimation(anim.value)}
                        className={`w-full p-3 text-left rounded-xl transition-all duration-200 ${
                          animation === anim.value
                            ? 'bg-blue-50 border-2 border-blue-500 dark:bg-blue-900/20'
                            : 'bg-gray-50 hover:bg-gray-100 dark:bg-navy-700 dark:hover:bg-navy-600 border-2 border-transparent'
                        }`}
                      >
                        <div className="font-medium text-sm">{anim.label}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{anim.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Theme */}
                <div>
                  <label className="block text-sm font-semibold text-navy-700 dark:text-white mb-3">
                    Color Theme
                  </label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setSidebarColor('white')}
                      className={`flex-1 p-4 rounded-xl border-2 transition-all duration-200 ${
                        sidebarColor === 'white' 
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                          : 'border-gray-200 dark:border-navy-600 hover:border-gray-300'
                      }`}
                    >
                      <div className="w-6 h-6 rounded-full bg-white border border-gray-300 mx-auto mb-2"></div>
                      <div className="text-sm font-medium">Light</div>
                    </button>
                    <button
                      onClick={() => setSidebarColor('dark')}
                      className={`flex-1 p-4 rounded-xl border-2 transition-all duration-200 ${
                        sidebarColor === 'dark' 
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                          : 'border-gray-200 dark:border-navy-600 hover:border-gray-300'
                      }`}
                    >
                      <div className="w-6 h-6 rounded-full bg-navy-800 mx-auto mb-2"></div>
                      <div className="text-sm font-medium">Dark</div>
                    </button>
                  </div>
                </div>

                {/* Quick Presets */}
                <div>
                  <label className="block text-sm font-semibold text-navy-700 dark:text-white mb-3">
                    Quick Presets
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    <button
                      onClick={() => {
                        setSidebarStyle('glass');
                        setSidebarTransparency(0.9);
                        setAnimation('slide');
                      }}
                      className="w-full p-3 text-left rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700 transition-all"
                    >
                      <div className="font-medium text-sm text-blue-700 dark:text-blue-300">Glass Mode</div>
                      <div className="text-xs text-blue-600 dark:text-blue-400">Modern glass with 10% transparency</div>
                    </button>
                    <button
                      onClick={() => {
                        setSidebarStyle('gradient');
                        setSidebarTransparency(0.8);
                        setAnimation('fade');
                      }}
                      className="w-full p-3 text-left rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700 transition-all"
                    >
                      <div className="font-medium text-sm text-purple-700 dark:text-purple-300">Gradient Mode</div>
                      <div className="text-xs text-purple-600 dark:text-purple-400">Colorful with fade animation</div>
                    </button>
                    <button
                      onClick={() => {
                        setSidebarStyle('solid');
                        setSidebarTransparency(1);
                        setAnimation('scale');
                      }}
                      className="w-full p-3 text-left rounded-xl bg-gradient-to-r from-gray-50 to-slate-50 hover:from-gray-100 hover:to-slate-100 dark:from-gray-800/50 dark:to-slate-800/50 border border-gray-200 dark:border-gray-700 transition-all"
                    >
                      <div className="font-medium text-sm text-gray-700 dark:text-gray-300">Professional Mode</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Solid background with scale effect</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200/50 dark:border-white/10">
                <button
                  onClick={() => {
                    setSidebarStyle('glass');
                    setSidebarTransparency(0.95);
                    setSidebarColor('white');
                    setAnimation('slide');
                  }}
                  className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 dark:bg-navy-700 dark:hover:bg-navy-600 rounded-lg text-sm font-medium transition-colors"
                >
                  Reset to Default
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
