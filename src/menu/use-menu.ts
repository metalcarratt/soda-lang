import { useState } from 'react';

export const useMenu = () => {
  const [visible, setVisible] = useState(true);

  const toggle = () => (visible ? setVisible(false) : setVisible(true));

  return { visible, setVisible, toggle };
};
