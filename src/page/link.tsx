import { usePath } from "./use-path";

export type TargetType = {
  lang: string;
  lessonId?: string;
  subpage?: string;
  playlistId?: string;
  place?: number;
}

type LinkProps = {
  target: TargetType
  children: React.ReactNode;
  className?: string;
  afterFn?: () => void;
};

export const Link = ({ target, children, className, afterFn }: LinkProps) => {
  const { navigate } = usePath();
  const link = getLink(target);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(link);
    afterFn?.();
  };

  return (
    <a href={link} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

const getLink = (target: TargetType) => {
  let url = import.meta.env.BASE_URL + target.lang;
  if (target.lessonId) {
    url += `/lesson/${target.lessonId}`;

    if (target.subpage) {
      url += '/' + target.subpage;
    } else {
      url += '/video';
    }

    if (target.playlistId) {
      url += `?playlist=${target.playlistId}&place=${target.place}`
    }
  }
  return url;
}