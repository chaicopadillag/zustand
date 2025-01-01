import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar';
import { useAuthStore } from '@/stores/auth';
import { Home, User } from 'lucide-react';
import { FaTasks } from 'react-icons/fa';
import { GiBearFace } from 'react-icons/gi';
import { IoHeartOutline, IoLogOut, IoPerson } from 'react-icons/io5';
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
  const { setUnauthenticated, authUser, authStatus } = useAuthStore((state) => state);

  return (
    <Sidebar>
      {authStatus === 'authenticated' && (
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size='lg' asChild>
                <a href='#'>
                  <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
                    <User className='size-4' />
                  </div>
                  <div className='flex flex-col gap-0.5 leading-none'>
                    <span className='font-semibold'>{authUser?.fullName}</span>
                    <span className=''>{authUser?.email}</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
      )}
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
              <SidebarMenuItem>
                <SidebarMenuButton onClick={setUnauthenticated}>
                  <IoLogOut />
                  <span>Cerrar sessión</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
