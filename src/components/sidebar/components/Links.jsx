/* eslint-disable */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashIcon from "components/icons/DashIcon";

export function SidebarLinks(props) {
  let location = useLocation();
  const { routes } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes) => {
    return routes.map((route, index) => {
      if (
        route.layout === "/admin" ||
        route.layout === "/auth" ||
        route.layout === "/rtl"
      ) {
        const isActive = activeRoute(route.path);
        
        return (
          <Link key={index} to={route.layout + "/" + route.path}>
            <li className="relative group mb-2">
              <div
                className={`flex items-center px-4 py-3 mx-2 rounded-xl transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/10 hover:text-navy-700 dark:hover:text-white"
                }`}
              >
                {/* Icon */}
                <div className={`flex items-center justify-center w-10 h-10 rounded-lg mr-3 transition-all duration-200 ${
                  isActive 
                    ? "bg-white/20 text-white" 
                    : "bg-gray-100 dark:bg-navy-700 text-gray-500 dark:text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500 dark:group-hover:bg-blue-900/20"
                }`}>
                  {route.icon ? route.icon : <DashIcon />}
                </div>

                {/* Text */}
                <div className="flex-1">
                  <span className={`font-medium text-sm leading-tight ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-gray-700 dark:text-gray-200 group-hover:text-navy-700 dark:group-hover:text-white"
                  }`}>
                    {route.name}
                  </span>
                  {route.secondary && !isActive && (
                    <div className="mt-1">
                      <span className="text-xs text-blue-500 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-full">
                        New
                      </span>
                    </div>
                  )}
                </div>

                {/* Active indicator & hover arrow */}
                {isActive ? (
                  <div className="w-1 h-8 bg-white rounded-full"></div>
                ) : (
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Active state glow effect */}
              {isActive && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-sm -z-10"></div>
              )}
            </li>
          </Link>
        );
      }
    });
  };

  return createLinks(routes);
}

export default SidebarLinks;
