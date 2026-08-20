import Image from "next/image";

type Props = {
  priority?: boolean;
  className?: string;
};

export default function Logo({ priority = false, className = "" }: Props) {
  return (
    <Image
      className={className}
      src="/images/logo.png"
      alt="Marcelo Gás"
      width={1254}
      height={1254}
      priority={priority}
      sizes="(max-width: 640px) 168px, 210px"
    />
  );
}
