// components/layout/defaultNavItems.tsx
import React from "react";
import {
  UserCircleIcon,
  ChatBubbleBottomCenterTextIcon,
  InformationCircleIcon,
  CurrencyDollarIcon,
  ArrowLeftOnRectangleIcon
} from "@heroicons/react/24/outline";

export const defaultNavItems = [
  {
    label: "Chat",
    href: "/chat",
    icon: <ChatBubbleBottomCenterTextIcon className="w-6 h-6" />,
    
  },
  {
    label: "Profile",
    href: "/account",
    icon: <UserCircleIcon className="w-6 h-6" />,
  },
  {
    label: "Resources",
    href: "#",
    icon: <InformationCircleIcon className="w-6 h-6" />,
  },
  {
    label: "Credits",
    href: "#",
    icon: <CurrencyDollarIcon className="w-6 h-6" />,
  },
];
