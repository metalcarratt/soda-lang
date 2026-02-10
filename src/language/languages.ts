export const EN_KR = 'en-kr';
export const KR_EN = 'kr-en';
export const EN_MA = 'en-ma';
export const EN_DU = 'en-du';
export const EN_ZH = 'en-zh';

export const languages = [EN_KR, KR_EN, EN_MA, EN_DU, EN_ZH];

export const langLookup: Record<string, { learn: string; as: string }> = {
  [EN_KR]: {
    learn: 'Korean',
    as: 'English',
  },
  [KR_EN]: {
    learn: 'English',
    as: 'Korean',
  },
  [EN_MA]: {
    learn: 'Maori',
    as: 'English',
  },
  [EN_DU]: {
    learn: 'Dutch',
    as: 'English',
  },
  [EN_ZH]: {
    learn: 'Chinese',
    as: 'English',
  },
};
