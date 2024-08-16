import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import Cookies from 'js-cookie'
import { toast } from "react-toastify"
import { useMutation } from "@tanstack/react-query"
import { logout } from '@/api/data/query';
import { useNavigate } from 'react-router-dom';


export default function UserNav() {
  const navigate = useNavigate();
  const cookie = Cookies.get('user');
  const user = cookie ? JSON.parse(cookie) : null;
    

  const logoutMutation = useMutation({
    mutationFn: logout,
  })


  async function submitLogout () {
    try {
      
      const res = await logoutMutation.mutateAsync();      
      if (res?.response_code === "000") {

        Cookies.remove('token');
        Cookies.remove('user');
        toast.success(res?.response_message);
        navigate('/login')

      } else {
          toast.error(res?.response_message || "An error occurred during logout. Please try again.");
      }

    } catch (error) {
      toast.error("An error occurred during logout. Please try again.");
    }
  }


  async function settings () {
    try {
      
      navigate('/settings')

    } catch (error) {
      toast.error("An error occurred during logout. Please try again.");
    }
  }


  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-14 w-14 rounded-full">
          <Avatar className="h-14 w-14">
            <AvatarImage
              src={
                'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png'
              }
              alt={''}
            />
            <AvatarFallback>hello</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user ? `${user?.first_name} ${user?.last_name}` : 'User Avatar'}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user ? `${user?.email}` : 'Email'}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {/* <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem> */}
          {/* <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem> */}
          <DropdownMenuItem onClick={() => settings()}>
            Settings
            <DropdownMenuShortcut></DropdownMenuShortcut>
          </DropdownMenuItem>
          {/* <DropdownMenuItem>New Team</DropdownMenuItem> */}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => submitLogout()}>
          Log out
          <DropdownMenuShortcut></DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}