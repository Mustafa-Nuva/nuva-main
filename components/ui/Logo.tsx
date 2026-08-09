import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
  alt?: string;
};

export default function Logo({ className, priority, alt = "NUVA logo" }: LogoProps) {
  return (
    <Image
      src="/icon.png"
      alt={alt}
      width={28}
      height={28}
      priority={priority}
      className={className}
      style={{
        filter: "brightness(0) invert(1)",
        objectFit: "contain",
      }}
    />
  );
}
