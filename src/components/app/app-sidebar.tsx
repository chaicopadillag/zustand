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
import { Home } from 'lucide-react';
import { FaTasks } from 'react-icons/fa';
import { GiBearFace } from 'react-icons/gi';
import { IoHeartOutline, IoPerson } from 'react-icons/io5';
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
    title: 'Tareas',
    url: '/dashboard/tasks',
    icon: FaTasks
  },
  {
    title: 'Boda',
    url: 'wedding-invitation',
    icon: IoHeartOutline
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
