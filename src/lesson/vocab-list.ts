type VocabType = {
  image: string;
};

export const vocabList: Record<string, VocabType> = {
  // very high frequency
  시간: { image: '/words/time.jpg' },
  수업: { image: '/words/class-subject.jpg' },
  알다: { image: '/words/know.jpg' },
  좋아하다: { image: '/words/like.jpg' },
  마시다: { image: '/words/drinking.jpg' },
  이번: { image: '/words/this-time.jpg' },
  시험: { image: '/words/exam.jpg' },
  어떻다: { image: '/words/how.jpg' },
  어렵다: { image: '/words/difficult.jpg' },
  쉽다: { image: '/words/easy.jpg' },
  왜: { image: '/words/why.jpg' },
  오늘: { image: '/words/today.jpg' },
  같이: { image: '/words/together.jpg' },
  가다: { image: '/words/go.jpg' },
  자다: { image: '/words/sleep.jpg' },
  얼굴: { image: '/words/face.jpg' },
  아프다: { image: '/words/sick.jpg' },

  // common in speech
  진짜: { image: '/words/really.jpg' },
  별로: { image: '/words/not-really.jpg' },
  꽤: { image: '/words/quite.jpg' },
  예전: { image: '/words/the-past.jpg' },
  비슷하다: { image: '/words/similar.jpg' },
  기본: { image: '/words/basics.jpg' },
  그냥: { image: '/words/just.jpg' },
  그래서: { image: '/words/so.jpg' },
  요즘: { image: '/words/these-days.jpg' },
  망하다: { image: '/words/fail.jpg' },
  스타일: { image: '/words/style.jpg' },

  // moderate frequency (school related)
  반: { image: '/words/class.jpg' },
  '1등': { image: '/words/first.jpg' },
  지각하다: { image: '/words/late.jpg' },
  늦잠: { image: '/words/oversleep.jpg' },
  할머니: { image: '/words/grandmother.jpg' },
  병원: { image: '/words/hospital.jpg' },

  // lower frequency
  콜라: { image: '/words/cola.jpg' },
  트림: { image: '/words/burp.jpg' },
  멈추다: { image: '/words/stop.jpg' },
  징그럽다: { image: '/words/gross.jpg' },
  머리카락: { image: '/words/hair.jpg' },
  가리다: { image: '/words/cover.jpg' },
  공포: { image: '/words/horror.jpg' },
  영화: { image: '/words/movie.jpg' },

  // new
};
