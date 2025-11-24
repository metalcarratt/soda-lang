import { useState } from 'react';

export type PanelType = 'video' | 'transcript' | 'vocab' | 'menu';

export const usePanel = () => {
  const [panel, setPanel] = useState<PanelType | undefined>();

  return { panel, setPanel };
};

export type UsePageType = ReturnType<typeof usePanel>;
