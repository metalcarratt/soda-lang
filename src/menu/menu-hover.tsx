import { type PropsWithChildren } from "react";
import './menu.scss';
import { useDataContext } from "../data/use-data-context";

export const MenuHover = ({children}: PropsWithChildren) => {
  const { menu } = useDataContext();
  return (
    <div className={`menuHover ${menu.visible ? 'visible' : ''}`}>
      {menu.visible && children}
      <span className="chevron" onClick={() => menu.toggle()}>{menu.visible ? 'Hide' : 'Menu'}</span>
    </div>
  )
}