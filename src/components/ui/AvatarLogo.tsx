import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const AvatarLogo = () => {
  return (
    <Avatar className="size-10">
      <AvatarImage src="/image/image-random.png" />
      <AvatarFallback>FR</AvatarFallback>
    </Avatar>
  );
};
