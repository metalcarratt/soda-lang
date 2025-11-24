type WordType = {
  en: string;
  breakdown?: [string, string][];
  note?: string;
};

export const wordList: Record<string, WordType> = {
  콜라: { en: 'Cola' },
  좋아해: { en: 'like' },
  별로: { en: 'not really' },
  예전에: { en: 'in the past' },
  너무: { en: 'too' },
  많이: { en: 'many/much' },
  마셨는데: { en: 'when drink' },
  수업: { en: 'class' },
  시간에: { en: 'time' },
  트림이: { en: 'burp' },
  멈추질: { en: 'stop' },
  않았어: { en: 'did not' },
  으엑: { en: 'eww' },
  징그러워: { en: 'gross' },
  반에서: {
    en: 'in the class',
    breakdown: [
      ['반', 'class'],
      ['에서', 'in'],
    ],
  },
  '1등인데': {
    en: 'since you are first place',
    breakdown: [
      ['1등 (일등)', 'first place'],
      ['이다', 'are'],
      ['ㄴ데', 'since'],
    ],
  },
  이번: { en: 'this time' },
  시험: { en: 'exam' },
  어땠어: { en: 'how was' },
  음: { en: 'um' },
  꽤: { en: 'quite' },
  쉬웠던: { en: 'was easy' },
  것: { en: 'thing' },
  같아: { en: 'seems / I think' },
  기본만: {
    en: 'just the basics',
    breakdown: [
      ['기본', 'basics'],
      ['만', 'just'],
    ],
  },
  알면: {
    en: 'if you know',
    breakdown: [
      ['알다', 'know'],
      ['면', 'if'],
    ],
  },
  다: { en: 'all' },
  비슷비슷하잖아: {
    en: 'pretty similar, right?',
    breakdown: [
      ['비슷', 'similar'],
      ['비슷하', 'be similar'],
      ['잖아', 'right?'],
    ],
  },
  난: { en: 'I' },
  어렵던데: {
    en: 'found it hard',
    breakdown: [
      ['어렵다', 'be hard'],
      ['던', '(something in the past)'],
      ['데', 'as I recall'],
    ],
  },
  아: { en: 'ah' },
  진짜: { en: 'really' },
  머리카락이: {
    en: 'hair',
    breakdown: [
      ['머리', 'head'],
      ['카락', 'hair'],
    ],
  },
  왜: { en: 'why' },
  얼굴을: { en: 'face' },
  가려: { en: 'cover/hide' },
  요즘: { en: 'these days' },
  스타일이야: {
    en: 'is style',
    breakdown: [
      ['스타일', 'style'],
      ['이야', 'is'],
    ],
  },
  나: { en: 'I' },
  어때: { en: 'how is it' },
  공포: { en: 'horror' },
  영화: { en: 'movie' },
  스타일: { en: 'style' },
  아니야: { en: 'is it not?' },
  어: { en: 'oh' },
  망했나: {
    en: 'did I fail?',
    breakdown: [
      ['망하다', 'fail'],
      ['했', 'did (past)'],
      ['나', '(question)'],
    ],
  },
  그래서: { en: 'so' },
  오늘: { en: 'today' },
  지각했어: { en: 'was late' },
  할머니가: { en: 'grandmother' },
  아프셔서: {
    en: 'because sick',
    breakdown: [
      ['아프다', 'be sick'],
      ['셔', 'was'],
      ['서', 'because'],
    ],
  },
  병원에: {
    en: 'to the hospital',
    breakdown: [
      ['병원', 'hospital'],
      ['에', 'to'],
    ],
  },
  같이: { en: 'together' },
  갔거든: {
    en: 'went',
    breakdown: [
      ['가다', 'to go'],
      ['았', '(past) ~ went'],
      ['거든', 'because'],
    ],
  },
  헐: { en: 'whoa' },
  아니: { en: 'not really' },
  그냥: { en: 'just' },
  늦잠: {
    en: 'oversleep',
    breakdown: [
      ['늦', 'late'],
      ['잠', 'sleep'],
    ],
  },
  잤어: {
    en: 'slept',
    breakdown: [
      ['자다', 'to sleep'],
      ['았다', '(past) ~ slept'],
    ],
    note: "잠 자 together means 'to sleep'",
  },

  속보입니다: {
    en: 'breaking news',
    breakdown: [
      ['속보', 'breaking new'],
      ['입니다', 'is'],
    ],
  },
  방금: { en: 'just now' },
  전: { en: 'before' },
  남자: { en: 'man' },
  화장실에서: {
    en: 'in the bathroom',
    breakdown: [
      ['화장실', 'bathroom'],
      ['에서', 'in'],
    ],
  },
  비누통이: { en: 'soap bottle' },
  폭발했습니다: { en: 'exploded' },
  현장은: { en: 'the scene' },
  완전: { en: 'total' },
  난장판이에요: {
    en: 'is chaos',
    breakdown: [
      ['난장판', 'chaos'],
      ['이에요', 'is'],
    ],
  },
  목격자들에: { en: 'witnesses' },
  따르면: { en: 'according to' },
  비누가: { en: 'soap' },
  벽: { en: 'wall' },
  거울: { en: 'mirror' },
  심지어: { en: 'even' },
  천장까지: {
    en: 'to the ceiling',
    breakdown: [
      ['천장', 'ceiling'],
      ['까지', 'until'],
    ],
  },
  튀었다고: {
    en: 'said it splashed',
    breakdown: [
      ['튀었', 'splashed'],
      ['다고', 'said'],
    ],
    note: "~다고 합니다 together means 'said'",
  },
  합니다: { en: 'did' },
  선생님들도: {
    en: 'even the teachers',
    breakdown: [
      ['선생님들', 'teachers'],
      ['도', 'even'],
    ],
  },
  어리둥절한: { en: 'confusing' },
  상황이고: {
    en: 'the situation is',
    breakdown: [
      ['상황', 'situation'],
      ['이고', 'is'],
    ],
  },
  아무도: { en: 'no one' },
  자백하지: { en: 'confess', note: "~하지 않다 together means 'do not'" },
  않고: { en: 'did not' },
  있어요: { en: 'doing', note: "~고 있다 together means 'doing'" },
  과연: { en: 'indeed' },
  다음엔: { en: 'next' },
  무슨: { en: 'what kind of' },
  일이: { en: 'thing/event' },
  벌어질까요: { en: 'will happen' },

  중요: { en: 'important' },
  과학실: {
    en: 'science room',
    breakdown: [
      ['과학', 'science'],
      ['실', 'room'],
    ],
  },
  앞에: { en: 'in front of' },
  갈매기: { en: 'seagull' },
  떼가: { en: 'a flock of' },
  나타났습니다: { en: 'has appeared' },
  학생들: { en: 'students' },
  손에서: {
    en: 'from hands',
    breakdown: [
      ['손', 'hand'],
      ['에서', 'from'],
    ],
  },
  물건을: { en: 'things' },
  훔쳐가고: { en: 'steal' },
  어떤: { en: 'some' },
  여자: { en: 'woman/girl' },
  학생은: { en: 'student' },
  갈매기한테: {
    en: 'by a seagull',
    breakdown: [
      ['갈매기', 'seagull'],
      ['한테', 'by/from'],
    ],
  },
  안경까지: {
    en: 'even glasses',
    breakdown: [
      ['안경', 'glasses'],
      ['까지', 'even'],
    ],
  },
  뺏겼대요: { en: 'snatched' },
  밖에: { en: 'outside' },
  나가야: {
    en: 'must go out',
    breakdown: [
      ['나가다', 'go out'],
      ['야', 'must'],
    ],
  },
  한다면: {
    en: 'if you do',
    breakdown: [
      ['한다', 'do'],
      ['면', 'if'],
    ],
  },
  조심하세요: { en: 'be careful' },
};
