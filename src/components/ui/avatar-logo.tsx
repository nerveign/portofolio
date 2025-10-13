import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const AvatarLogo = () => {
  return (
    <Avatar className="size-10 select-none">
      <AvatarImage className="select-none" src="/image/image-random.png" />
      <AvatarFallback>FR</AvatarFallback>
    </Avatar>
  );
};
