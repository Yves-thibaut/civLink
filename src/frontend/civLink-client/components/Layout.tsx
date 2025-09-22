'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, Users, Briefcase, MessageCircle, Map, Settings, Bell, Search, User, LogOut, Plus, Edit, Shield, BookOpen, Award, Building } from 'lucide-react';
import { Button } from '@/src/frontend/components/ui/button';
import { Input } from '@/src/frontend/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/src/frontend/components/ui/dropdown-menu';
import { cn } from '@/src/frontend/lib/utils';

const navigation = [
  { name: 'Accueil', href: '/', icon: Home },
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Répertoire', href: '/directory', icon: Users },
  { name: 'Opportunités', href: '/opportunities', icon: Briefcase },
  { name: 'Messages', href: '/messages', icon: MessageCircle },
  { name: 'Carte', href: '/map', icon: Map },
  { name: 'Groupes', href: '/groups', icon: Users },
  { name: 'Ressources', href: '/resources', icon: BookOpen },
  { name: 'Success Stories', href: '/success-stories', icon: Award }
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const pathname = usePathname();

  // Mock data for current OSC user
  const currentOSC = {
    id: '1',
    name: 'CIDP Cameroun',
    avatar: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg',
    sector: 'Paix & Gouvernance',
    country: 'Cameroun',
    verified: true
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className={cn(
        "fixed inset-0 z-50 lg:hidden",
        sidebarOpen ? "block" : "hidden"
      )}>
        <div className="fixed inset-0 bg-black/20" onClick={() => setSidebarOpen(false)} />
        <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-xl">
          <div className="flex items-center justify-between p-4 border-b">
            {/* <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg" />
              <span className="font-bold text-gray-900">CivLink</span>
            </div> */}
            {/* Logo image */}
            <div className="flex items-center space-x-2">
              <img src="/civLink-logo.png" alt="CivLink" className="h-8" />
            </div>
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="p-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-orange-50 text-orange-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex w-64 flex-col bg-white border-r border-gray-200">
          <div className="flex items-center px-6 py-4 border-b">
            {/* <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg" />
              <span className="font-bold text-gray-900">CivLink</span>
            </div> */}
            <div className="flex items-center space-x-2">
              <img src="/civLink-logo.png" alt="CivLink nnnn" className="h-8 " />
            </div>
          </div>
          <nav className="flex-1 p-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-orange-50 text-orange-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
          <div className="p-4 border-t">
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Paramètres
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div className="hidden md:flex items-center space-x-2 flex-1 max-w-lg">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Rechercher des OSC, opportunités..."
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              
              {/* Profile Dropdown */}
              <DropdownMenu open={profileOpen} onOpenChange={setProfileOpen}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <img
                      src={currentOSC.avatar}
                      alt={currentOSC.name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    {currentOSC.verified && (
                      <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-blue-500 rounded-full flex items-center justify-center">
                        <Shield className="h-2 w-2 text-white" />
                      </div>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64" align="end">
                  <div className="flex items-center space-x-3 p-3 border-b">
                    <img
                      src={currentOSC.avatar}
                      alt={currentOSC.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-1">
                        <p className="font-semibold text-gray-900 truncate">{currentOSC.name}</p>
                        {currentOSC.verified && (
                          <Shield className="h-4 w-4 text-blue-500" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{currentOSC.sector}</p>
                      <p className="text-xs text-gray-500">{currentOSC.country}</p>
                    </div>
                  </div>
                  
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>Mon profil</span>
                    </Link>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem asChild>
                    <Link href="/profile/edit" className="flex items-center space-x-2">
                      <Edit className="h-4 w-4" />
                      <span>Modifier le profil</span>
                    </Link>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem asChild>
                    <Link href="/posts/create" className="flex items-center space-x-2">
                      <Plus className="h-4 w-4" />
                      <span>Créer un post</span>
                    </Link>
                  </DropdownMenuItem>
                  
                  <DropdownMenuSeparator />
                  
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="flex items-center space-x-2">
                      <Settings className="h-4 w-4" />
                      <span>Paramètres</span>
                    </Link>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem className="flex items-center space-x-2 text-red-600">
                    <LogOut className="h-4 w-4" />
                    <span>Déconnexion</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>

        {/* Mobile bottom navigation */}
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-2">
          <div className="flex justify-around">
            {navigation.slice(0, 5).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex flex-col items-center space-y-1 px-2 py-1 rounded-lg text-xs font-medium transition-colors",
                  pathname === item.href
                    ? "text-orange-600"
                    : "text-gray-600"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-xs">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}