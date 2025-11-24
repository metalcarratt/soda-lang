import { usePath } from "./use-path";

type LinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
  afterFn?: () => void;
};

export const Link = ({ to, children, className, afterFn }: LinkProps) => {
  const { navigate } = usePath();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(to);
    afterFn?.();
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}