import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const AvatarLogo = () => {
  return (
    <Avatar className="size-10">
      <AvatarImage src="/kaori.jpg" />
      <AvatarFallback>FR</AvatarFallback>
    </Avatar>
  );
};
