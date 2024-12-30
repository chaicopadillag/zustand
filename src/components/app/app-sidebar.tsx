import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar';
import { Home, Search, Settings } from 'lucide-react';
import { IoPerson } from 'react-icons/io5';
import { GiBearFace } from 'react-icons/gi';
import { Link } from 'react-router';

// Menu items.
const items = [
  {
    title: 'Home',
    url: '/dashboard',
    icon: Home
  },
  {
    title: 'Bear',
    url: '/dashboard/bear',
    icon: GiBearFace
  },
  {
    title: 'Person',
    url: '/dashboard/person',
    icon: IoPerson
  },
  {
    title: 'Search',
    url: '#',
    icon: Search
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings
  }
];

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
