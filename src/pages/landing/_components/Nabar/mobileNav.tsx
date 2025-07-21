import React, { useState } from "react";
import {
  Menu,
  ChevronDown,
  Phone,
  Mail,
  Home,
  Users,
  Activity,
  Settings,
  Calendar,
  MessageCircle,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Button } from "../../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../../../../components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../../components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../components/ui/collapsible";

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  dropdown?: NavItem[];
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      label: "Accueil",
      href: "/",
      icon: <Home size={18} />,
    },
    {
      label: "Graines d'Eveil",
      href: "#",
      icon: <Users size={18} />,
      dropdown: [{ label: "A Propos de Nous", href: "/apropos" }],
    },
    {
      label: "Nos Activités",
      href: "#",
      icon: <Activity size={18} />,
      dropdown: [
        { label: "Pour Enfants", href: "/programs#enfants" },
        { label: "Pour Parents", href: "/programs#parents" },
      ],
    },
    {
      label: "Nos Services",
      href: "/services",
      icon: <Settings size={18} />,
    },
    {
      label: "Nos Evènements",
      href: "#",
      icon: <Calendar size={18} />,
      dropdown: [
        { label: "Mum-gym", href: "/mum-gym" },
        { label: "Spéciale vacances", href: "/vacances" },
      ],
    },
    {
      label: "Contacts",
      href: "/contacts",
      icon: <MessageCircle size={18} />,
    },
  ];

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 border-b">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Graines d'Eveil</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/30"></div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+237 671 98 83 16 / 655 90 20 55</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/30"></div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>graineseveil25@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/">
                <img
                  src="img/logo.png"
                  alt="Graines d'Eveil Logo"
                  className="h-12 w-auto object-contain"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  {navItems.map((item) => (
                    <li key={item.label} className="relative list-none">
                      {item.dropdown ? (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <button
                              className="bg-transparent hover:bg-green-50 hover:text-green-700 flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-colors"
                              type="button"
                            >
                              {item.icon}
                              <span>{item.label}</span>
                              <ChevronDown className="w-4 h-4 ml-1" />
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="start"
                            className="w-56 bg-white border border-green-100 rounded-lg shadow-lg p-0"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <DropdownMenuItem
                                asChild
                                key={dropdownItem.label}
                              >
                                <a
                                  href={dropdownItem.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                                >
                                  {dropdownItem.label}
                                </a>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : (
                        <NavigationMenuLink
                          href={item.href}
                          className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-green-50 hover:text-green-700 focus:bg-green-50 focus:text-green-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        >
                          <div className="flex items-center gap-2">
                            {item.icon}
                            <span>{item.label}</span>
                          </div>
                        </NavigationMenuLink>
                      )}
                    </li>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white shadow-md hover:shadow-lg transition-all duration-200">
                Inscription
              </Button>
            </div>

            {/* Mobile menu */}
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="px-2">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader className="text-left">
                    <SheetTitle>
                      <a href="/">
                        <img
                          src="img/logo.png"
                          alt="Graines d'Eveil Logo"
                          className="h-10 w-auto object-contain"
                        />
                      </a>
                    </SheetTitle>
                    <SheetDescription>Navigation principale</SheetDescription>
                  </SheetHeader>

                  <div className="mt-6 space-y-2">
                    {navItems.map((item) => (
                      <div key={item.label}>
                        {item.dropdown ? (
                          <Collapsible>
                            <CollapsibleTrigger asChild>
                              <Button
                                variant="ghost"
                                className="w-full justify-between hover:bg-green-50 hover:text-green-700"
                                onClick={() => toggleDropdown(item.label)}
                              >
                                <div className="flex items-center gap-3">
                                  {item.icon}
                                  <span>{item.label}</span>
                                </div>
                                <ChevronDown
                                  className={`h-4 w-4 transition-transform duration-200 ${
                                    activeDropdown === item.label
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="space-y-1 mt-2 ml-8">
                              {item.dropdown.map((dropdownItem) => (
                                <Button
                                  key={dropdownItem.label}
                                  variant="ghost"
                                  className="w-full justify-start text-sm hover:bg-green-50 hover:text-green-700"
                                  asChild
                                >
                                  <a href={dropdownItem.href}>
                                    {dropdownItem.label}
                                  </a>
                                </Button>
                              ))}
                            </CollapsibleContent>
                          </Collapsible>
                        ) : (
                          <Button
                            variant="ghost"
                            className="w-full justify-start hover:bg-green-50 hover:text-green-700"
                            asChild
                          >
                            <a href={item.href}>
                              <div className="flex items-center gap-3">
                                {item.icon}
                                <span>{item.label}</span>
                              </div>
                            </a>
                          </Button>
                        )}
                      </div>
                    ))}

                    {/* Mobile CTA */}
                    <div className="pt-6 border-t">
                      <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white shadow-md">
                        Inscription
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
