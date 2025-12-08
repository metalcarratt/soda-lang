export type LessonType = {
  name: string;
  pathName: string;
  video: string;
  transcript?: { speaker: string; lines: string; timing?: number }[];
  vocab?: string[];
};

export const interviewLessons: LessonType[] = [
  {
    name: 'Do you like Coke?',
    pathName: '1-coke',
    video: 'interview-coke.mp4',
    transcript: [
      {
        speaker: 'interviewer',
        lines: '콜라 좋아해?',
        timing: 0,
      },
      {
        speaker: 'student',
        lines: '별로. 예전에 너무 많이 마셨는데,',
        timing: 3,
      },
      {
        speaker: 'student',
        lines: '수업 시간에 트림이 멈추질 않았어.',
        timing: 6,
      },
      {
        speaker: 'interviewer',
        lines: '으엑, 징그러워…',
        timing: 8,
      },
    ],
    vocab: [
      '콜라',
      '수업',
      '시간',
      '트림',
      '멈추다',
      '징그럽다',
      '좋아하다',
      '마시다',
      '별로',
      '예전',
    ],
  },
  {
    name: 'How was the test?',
    pathName: '2-test',
    video: 'interview-test.mp4',
    transcript: [
      {
        speaker: 'interviewer',
        lines: '반에서 1등인데, 이번 시험 어땠어?',
      },
      {
        speaker: 'student',
        lines: '음… 꽤 쉬웠던 것 같아. 기본만 알면 다 비슷비슷하잖아.',
      },
      {
        speaker: 'interviewer',
        lines: '난 어렵던데…',
      },
      {
        speaker: 'student',
        lines: '아, 진짜?',
      },
    ],
    vocab: [
      '반',
      '1등',
      '이번',
      '시험',
      '어떻다',
      '꽤',
      '쉽다',
      '기본',
      '알다',
      '비슷하다',
      '어렵다',
      '진짜',
    ],
  },
  {
    name: 'New hairstyle',
    pathName: '3-hair',
    video: 'interview-hair.mp4',
    transcript: [
      { speaker: 'interviewer', lines: '머리카락이 왜 얼굴을 다 가려?' },
      { speaker: 'student', lines: '요즘 스타일이야. 나 어때?' },
      { speaker: 'interviewer', lines: '공포 영화 스타일 아니야?' },
      { speaker: 'student', lines: '어… 망했나?' },
    ],
    vocab: [
      '머리카락',
      '왜',
      '얼굴',
      '가리다',
      '요즘',
      '스타일',
      '어떻다',
      '공포',
      '영화',
      '망하다',
    ],
  },
  {
    name: 'Why are you late?',
    pathName: '4-late',
    video: 'interview-late.mp4',
    transcript: [
      { speaker: 'interviewer', lines: '그래서, 오늘 왜 지각했어' },
      { speaker: 'student', lines: '할머니가 아프셔서 병원에 같이 갔거든.' },
      { speaker: 'interviewer', lines: '헐, 진짜?' },
      { speaker: 'student', lines: '아니, 그냥 늦잠 잤어.' },
      { speaker: 'interviewer', lines: '어…' },
    ],
    vocab: [
      '그래서',
      '오늘',
      '왜',
      '지각하다',
      '할머니',
      '아프다',
      '병원',
      '같이',
      '가다',
      '진짜',
      '그냥',
      '늦잠',
      '자다',
    ],
  },
];

export const reporterLessons: LessonType[] = [
  {
    name: 'Soap disaster',
    pathName: '5-soap',
    video: 'report-soap.mp4',
    transcript: [
      { speaker: 'reporter', lines: '속보입니다!' },
      {
        speaker: 'reporter',
        lines: '방금 전, 남자 화장실에서 비누통이 폭발했습니다!',
      },
      { speaker: 'reporter', lines: '현장은 완전 난장판이에요!' },
      {
        speaker: 'reporter',
        lines:
          '목격자들에 따르면, 비누가 벽, 거울, 심지어 천장까지 튀었다고 합니다.',
      },
      {
        speaker: 'reporter',
        lines: '선생님들도 어리둥절한 상황이고, 아무도 자백하지 않고 있어요.',
      },
      { speaker: 'reporter', lines: '과연, 다음엔 무슨 일이 벌어질까요?' },
    ],
  },
  {
    name: 'Rogue seagulls',
    pathName: '6-seagulls',
    video: 'report-birds.mp4',
    transcript: [
      { speaker: 'reporter', lines: '중요 속보입니다!' },
      { speaker: 'reporter', lines: '과학실 앞에 갈매기 떼가 나타났습니다!' },
      { speaker: 'reporter', lines: '학생들 손에서 물건을 훔쳐가고 있어요!' },
      {
        speaker: 'reporter',
        lines: '어떤 여자 학생은… 갈매기한테 안경까지 뺏겼대요!',
      },
      { speaker: 'reporter', lines: '밖에 나가야 한다면… 진짜 조심하세요!' },
    ],
  },
];

export const sockSagaLessons: LessonType[] = [
  {
    name: 'Important Announcement',
    pathName: 'sock-saga-1',
    video: 'sock-saga-1.mp4',
    transcript: [
      { speaker: 'reporter', lines: '임돈기 리포팅.' },
      {
        speaker: 'reporter',
        lines: '오늘 교장 선생님께서 큰 발표를 하신다고 합니다.',
      },
      { speaker: 'reporter', lines: '과연 무엇일까요?' },
    ],
    vocab: [
      '오늘', // have
      '교장',
      '선생님',
      '큰',
      '발표', // announcement
      '과연', // have
    ],
  },
  {
    name: 'Long socks',
    pathName: 'sock-saga-2',
    video: 'sock-saga-2.mp4',
    transcript: [
      { speaker: 'reporter', lines: '임돈기 입니다.' },
      {
        speaker: 'reporter',
        lines: '방금 교장 선생님이 말씀하셨어요.',
      },
      {
        speaker: 'reporter',
        lines: '오늘부터 모두 긴 양말을 신어야 한다고 합니다.',
      },
      { speaker: 'reporter', lines: '이 새로운 유행, 어떻게 될까요?' },
    ],
    vocab: [
      '과연',
      '교장',
      '선생님',
      '말씀하다',
      '모두',
      '긴',
      '양말',
      '신다', // wear
      '이',
      '새로운',
      '유행',
      '어떻다',
      '되다',
    ],
  },
  {
    name: 'Red socks',
    pathName: 'sock-saga-3',
    video: 'sock-saga-3.mp4',
    transcript: [
      { speaker: 'reporter', lines: '임돈기 다시 전합니다.' },
      { speaker: 'reporter', lines: '속보!' },
      {
        speaker: 'reporter',
        lines: '한 학생이 빨간색 긴 양말을 신고 학교에 왔습니다!',
      },
      { speaker: 'reporter', lines: '그게 가진 유일한 긴 양말 이라네요.' },
      {
        speaker: 'reporter',
        lines: '앞으로 어떻게 될까요?',
      },
    ],
    vocab: ['다시'],
  },
  {
    name: 'Stockings?',
    pathName: 'sock-saga-4',
    video: 'sock-saga-4.mp4',
    transcript: [
      { speaker: 'reporter', lines: '임돈기 입니다.' },
      {
        speaker: 'reporter',
        lines: '여학생들이 검은색 스타킹도 양말로 인정되는지 묻고 있습니다.',
      },
      {
        speaker: 'reporter',
        lines: '선생님들은 당황해서 대답을 못 하고 있네요.',
      },
    ],
  },
  {
    name: 'Pile of socks',
    pathName: 'sock-saga-5',
    video: 'sock-saga-5.mp4',
    transcript: [
      { speaker: 'reporter', lines: '임돈기 리포팅.' },
      { speaker: 'reporter', lines: '충격적인 시위!' },
      {
        speaker: 'reporter',
        lines: '오늘 많은 학생들이 아예 양말을 신지 않고 등교했습니다.',
      },
      {
        speaker: 'reporter',
        lines: '대신 교장실 앞에서 더러운 양말 더미가 발견되었습니다.',
      },
    ],
  },
  {
    name: 'Victory',
    pathName: 'sock-saga-6',
    video: 'sock-saga-6.mp4',
    transcript: [
      { speaker: 'reporter', lines: '임돈기 속보 전합니다.' },
      { speaker: 'reporter', lines: '방금 교장 선생님이 발표하셨습니다.' },
      {
        speaker: 'reporter',
        lines: '이제 양말은 길지 않아도 된다고 합니다!',
      },
      {
        speaker: 'reporter',
        lines: '학생들은 성공적인 승리를 축하하며 환호하고 있습니다.',
      },
    ],
  },
];

export const findByPathName = (pathName: string) => {
  let lesson = interviewLessons.find((item) => item.pathName === pathName);
  if (lesson) {
    return lesson;
  }

  lesson = reporterLessons.find((item) => item.pathName === pathName);
  if (lesson) {
    return lesson;
  }

  return sockSagaLessons.find((item) => item.pathName === pathName);
};
