// --- MBTI Question Bank ---
const questions = [
  // 1. E vs I (Q1, Q2, Q3)
  {
    id: 1,
    type: 'EI',
    weight: 35,
    question: '주말이 되었을 때 나의 행동은 주로 어느 쪽에 가까운가요?',
    optA: '친구들을 만나거나 야외 활동을 하며 에너지를 충전한다.',
    optB: '집에서 조용히 넷플릭스를 보거나 독서를 하며 휴식을 취한다.'
  },
  {
    id: 2,
    type: 'EI',
    weight: 30,
    question: '새로운 사람들과 함께하는 모임이나 파티에 참석했을 때 나는?',
    optA: '처음 보는 사람들에게도 쉽게 말을 걸고 대화를 이어 나간다.',
    optB: '아는 사람들 곁에 있거나 주로 다른 사람들의 이야기를 경청한다.'
  },
  {
    id: 3,
    type: 'EI',
    weight: 35,
    question: '중요한 협업 프로젝트를 추진할 때 선호하는 일 처리 방식은?',
    optA: '회의를 자주 소집하여 다양한 의견을 수다 떨듯 토론하며 결정한다.',
    optB: '각자 맡은 바를 문서 등으로 정리하여 독립적으로 처리한 후 취합한다.'
  },
  
  // 2. S vs N (Q4, Q5, Q6)
  {
    id: 4,
    type: 'SN',
    weight: 35,
    question: '자연이 아름다운 숲길을 걸으며 산책할 때 드는 나의 주된 생각은?',
    optA: '시원한 바람, 싱그러운 풀 냄새 등 지금 오감으로 느껴지는 감각에 집중한다.',
    optB: '이 숲의 역사나 미래 모습, 인생의 흐름 등 꼬리에 꼬리를 무는 상상에 잠긴다.'
  },
  {
    id: 5,
    type: 'SN',
    weight: 30,
    question: '어떤 소설이나 영화를 감상하고 난 뒤 내가 말하는 리뷰 스타일은?',
    optA: '주인공들의 대사, 주요 줄거리, 명장면 등 사실적 묘사를 주로 이야기한다.',
    optB: '작품 속 숨겨진 암시나 상징적 메시지, 혹은 만약 결말이 달랐다면 어땠을지 가설을 논한다.'
  },
  {
    id: 6,
    type: 'SN',
    weight: 35,
    question: '어려운 신형 전자기기를 새로 구매했을 때 나의 행동 방식은?',
    optA: '기본 사용 설명서를 꼼꼼히 읽어보며 단계별 가이드를 그대로 따른다.',
    optB: '설명서 없이 직접 이것저것 눌러보며 전체적인 감을 익혀서 사용한다.'
  },

  // 3. T vs F (Q7, Q8, Q9)
  {
    id: 7,
    type: 'TF',
    weight: 35,
    question: '친한 친구가 속상한 일이 있어 위로차 비싼 물건을 샀다고 이야기할 때 나의 반응은?',
    optA: '“어떤 물건 샀어? 얼마 주고 샀는데? 유용해?”라며 사실적 정보부터 묻는다.',
    optB: '“얼마나 마음이 안 좋았으면 쇼핑까지 했을까...”라며 친구의 감정에 먼저 공감한다.'
  },
  {
    id: 8,
    type: 'TF',
    weight: 30,
    question: '복잡한 공동의 트러블을 해결해야 할 때 내가 가장 중요하게 여기는 잣대는?',
    optA: '감정을 배제하고 상황을 논리적으로 분석해 공정하고 합리적인 기준을 세우는 것',
    optB: '사람들이 받을 상처와 관계의 원만함을 고려해 유연하고 평화롭게 조율하는 것'
  },
  {
    id: 9,
    type: 'TF',
    weight: 35,
    question: '친구와 함께 가려던 식당이 휴업 중일 때, 슬퍼하는 친구에게 해줄 내 생각은?',
    optA: '“오늘 휴무구나! 그럼 근처 맛집 차선책 리스트를 빠르게 찾아보자”라고 제안한다.',
    optB: '“아, 기대 엄청 했을 텐데 너무 아쉽다... 진짜 속상하겠다!”라며 아쉬움을 나눠 갖는다.'
  },

  // 4. J vs P (Q10, Q11, Q12)
  {
    id: 10,
    type: 'JP',
    weight: 35,
    question: '친구와 먼 곳으로 장기 여행 계획을 세우게 되었을 때 나의 행동 방식은?',
    optA: '일자별 동선, 맛집 리스트, 대기 시간까지 꼼꼼하게 알아보고 문서로 정리한다.',
    optB: '숙소와 굵직한 랜드마크 정도만 공유하고 세부 동선은 당일 날씨와 컨디션에 맡긴다.'
  },
  {
    id: 11,
    type: 'JP',
    weight: 30,
    question: '과제나 업무 마감 기한이 코앞으로 다가왔을 때 나의 업무 스타일은?',
    optA: '미리 세워둔 일정표에 맞춰 매일 일정한 분량을 처리해 마감 전에 미리 끝마친다.',
    optB: '마감 직전까지 빈둥거리다 마지막 순간에 초인적인 에너지를 쏟아붓는 벼락치기를 한다.'
  },
  {
    id: 12,
    type: 'JP',
    weight: 35,
    question: '평상시 일상에서 내 책상이나 공부방의 위생/정돈 상태는 어떤 편인가요?',
    optA: '물건들이 제 카테고리에 맞게 일목요연하게 정돈되어 있어야 집중이 잘 된다.',
    optB: '자유롭게 흐트러져 있는 것이 편안하며, 어질러진 속에서도 내 물건 위치는 다 안다.'
  }
];

// --- MBTI 16 Profiles Database ---
const mbtiProfiles = {
  ENFP: {
    nickname: '재기발랄한 활동가',
    summary: '열정적이고 창의적이며, 늘 긍정적이고 즐거운 에너지를 몰고 다니는 자유로운 영혼입니다. 뛰어난 소통력과 따뜻함으로 어디서나 사랑받습니다.',
    traits: [
      '상상력이 풍부하고 매 순간 새로운 아이디어가 샘솟음',
      '타인의 장점과 마음을 잘 읽어내는 훌륭한 리스너',
      '틀에 얽매이기보다 다양한 가능성을 넓혀가는 편',
      '새로운 사람들과 친해지는 속도가 매우 빠름'
    ],
    strengths: [
      '뛰어난 사교성과 친화력',
      '창의적인 시각과 문제 해결',
      '타인을 격려하고 긍정적 자극을 주는 능력'
    ],
    weaknesses: [
      '반복적인 세부 업무나 서류 처리에 매우 취약함',
      '쉽게 번아웃이 오고 집중력이 빨리 분산됨',
      '일의 마무리가 계획대로 깔끔하지 않은 편'
    ],
    bestCompat: 'INFJ',
    bestDesc: '말하지 않아도 깊은 속마음을 통찰하고 정신적 교감을 나누는 최상의 파트너입니다.',
    worstCompat: 'ISTJ',
    worstDesc: '규칙과 틀을 중시하는 ISTJ와 자유를 지향하는 ENFP는 협업 시 갈등이 쉽게 생깁니다.'
  },
  ENFJ: {
    nickname: '정의로운 사회운동가',
    summary: '넘치는 카리스마와 선한 영향력을 지닌 온화한 리더입니다. 공동체의 가치와 타인의 자아실현을 위해 기꺼이 헌신하며 사람들의 마음을 움직입니다.',
    traits: [
      '타인의 감정에 탁월한 감정이입 능력을 보유',
      '설득력이 뛰어난 화술과 포용력을 지닌 훌륭한 지도자',
      '개인보다 공동체의 성장과 공익적인 발전을 지향',
      '갈등을 예방하고 부드러운 중재자 역할을 도맡음'
    ],
    strengths: [
      '이타주의적인 성향과 든든한 신뢰감',
      '주변 사람들의 잠재력을 끌어올리는 능력',
      '리더로서 팀원들을 화합시키는 통합 리더십'
    ],
    weaknesses: [
      '모든 사람에게 좋은 평판을 받으려 과도하게 신경 씀',
      '타인의 문제를 내 일처럼 고민하다가 정신적으로 탈진함',
      '지나치게 이상적인 해결책에 매달려 현실을 망각하기도 함'
    ],
    bestCompat: 'INFP',
    bestDesc: '따뜻한 감성과 타인을 존중하는 마음씨가 닮아 서로에게 큰 안식처가 되어 줍니다.',
    worstCompat: 'ISTP',
    worstDesc: '감정적 교류를 원하는 ENFJ에게 극도로 실용적이고 건조한 ISTP는 깊은 상처를 줄 수 있습니다.'
  },
  ENTP: {
    nickname: '뜨거운 논쟁을 즐기는 변론가',
    summary: '기발한 위트와 날카로운 통찰력을 무기로 세상의 당연한 가치들에 도전을 제기하는 브레인입니다. 지적 호기심과 모험심이 대단히 높습니다.',
    traits: [
      '지루한 일상을 혁파하는 기발한 비즈니스 아이디어',
      '자유롭고 솔직하게 본인의 의견을 주장하는 당당함',
      '기존의 낡은 관습이나 형식적인 규칙에 저항함',
      '다방면에 방대한 지식을 섭렵하려는 경향'
    ],
    strengths: [
      '유연하고 신선한 대안을 제시하는 순발력',
      '두려움 없이 새로운 영역을 개척하는 추진력',
      '복잡한 논리 구조를 빠르게 소화하는 이해력'
    ],
    weaknesses: [
      '상대의 감정을 고려치 않은 직설적인 반박과 논쟁',
      '마무리가 성급하거나 끈기가 다소 아쉬움',
      '반복적인 절차와 시스템을 견디기 힘들어함'
    ],
    bestCompat: 'INFJ',
    bestDesc: 'ENTP의 번뜩이는 아이디어와 INFJ의 깊이 있는 통찰이 만나 가장 지적인 대화를 공유합니다.',
    worstCompat: 'ISFJ',
    worstDesc: '안정과 전통을 수호하려는 ISFJ와 급진적 변화를 원하는 ENTP는 가치관 차이가 큽니다.'
  },
  ENTJ: {
    nickname: '대담한 지도자',
    summary: '냉철한 의지와 전략적 판단으로 팀과 비즈니스를 효율적으로 통솔해나가는 야심 찬 리더입니다. 장기적 비전을 설계하는 능력이 발군입니다.',
    traits: [
      '단호하고 단단한 결단력과 과감한 돌파력',
      '비효율적인 구조를 참지 못하며 시스템을 재정렬함',
      '스스로에게 엄격하며 지속적으로 성장을 일궈냄',
      '문제 해결 시 본인의 이성과 원칙에만 입각함'
    ],
    strengths: [
      '논리적이고 빈틈없는 장기 전략 수립',
      '위기 속에서도 주저함이 없는 탁월한 추진력',
      '비즈니스와 과제를 완벽하게 장악하는 지휘 통제력'
    ],
    weaknesses: [
      '타인의 감정이나 인간적인 약점을 다소 매섭게 비판함',
      '지나치게 고집스럽고 권위주의적인 모습을 보일 수 있음',
      '속도가 느린 팀원들을 향해 참을성을 잃기 쉬움'
    ],
    bestCompat: 'INFP',
    bestDesc: '냉정하고 결단력 있는 ENTJ와 따뜻하고 깊은 통찰력을 지닌 INFP는 환상의 균형을 이룹니다.',
    worstCompat: 'ISFP',
    worstDesc: '효율을 극도로 고집하는 ENTJ는 온화하고 유유자적한 ISFP에게 큰 상처와 압박을 줄 수 있습니다.'
  },
  ESFP: {
    nickname: '자유로운 영혼의 연예인',
    summary: '인간 비타민으로 불리며, 매 순간을 기쁘게 살아가고 주변에 긍정적인 웃음을 나누는 파티형 인물입니다. 사교성과 실천적 감각이 최고입니다.',
    traits: [
      '주변 사람들을 기쁘게 만드는 뛰어난 유머 감각',
      '눈치가 빠르고 트렌드에 민감한 패션/미적 감각',
      '이론적인 논쟁보다 몸으로 직접 느끼고 겪는 것을 선호',
      '적응력이 탁월하여 낯선 환경에서도 바로 적응함'
    ],
    strengths: [
      '어느 그룹에나 자연스레 융화되는 뛰어난 친화력',
      '순수한 긍정과 리액션으로 모임 분위기를 즐겁게 환기시킴',
      '현재 직면한 문제를 빠르게 몸으로 때우며 실질적으로 해결'
    ],
    weaknesses: [
      '미래에 관한 계획이나 다가올 금전적/시간적 대비가 미흡함',
      '갈등이나 부정적 주제에 회피 반응이 강함',
      '자극적 흥미를 좇느라 끈기 있게 한 우물을 파지 못함'
    ],
    bestCompat: 'ISFJ',
    bestDesc: '활기찬 ESFP와 차분하고 세심하게 보살피는 ISFJ가 만나 안정적인 기쁨을 누립니다.',
    worstCompat: 'INTJ',
    worstDesc: '깊고 철학적인 주제에 골몰하는 INTJ와 현실의 즐거움을 좇는 ESFP는 서로의 언어를 이해하지 못합니다.'
  },
  ESFJ: {
    nickname: '사교적인 외교관',
    summary: '친절하고 공감심 가득하며, 모임이나 단체의 화합을 가장 아름답게 조율하는 헌신적 조력자입니다. 타인을 위해 아낌없이 베풀며 성실합니다.',
    traits: [
      '자신의 바운더리 내 사람들을 알뜰하게 보살피는 다정함',
      '전통적인 규칙이나 예의범절을 칼같이 중요시함',
      '타인의 칭찬이나 인정의 말에 매우 큰 에너지를 얻음',
      '모임이나 가족의 일정을 조용히 잘 추진하는 꼼꼼함'
    ],
    strengths: [
      '강한 사회적 적응력과 사근사근함',
      '약속이나 책임감을 반드시 완수하는 성실함',
      '공동체를 정답고 안락한 공간으로 가꾸어내는 조화의 손길'
    ],
    weaknesses: [
      '상대의 사소한 비판이나 무반응에 크게 상처받고 전전긍긍함',
      '새로운 실험적인 변화보다 지나치게 안정적 관습만 선호함',
      '과한 오지랖으로 타인의 사생활에 의도치 않게 간섭하기도 함'
    ],
    bestCompat: 'ISFP',
    bestDesc: 'ESFJ의 다정한 가이드와 ISFP의 배려 깊고 조용한 온기가 최상의 편안함을 선사합니다.',
    worstCompat: 'INTP',
    worstDesc: '공감 중심인 ESFJ에게 논리와 비판적 의문을 던지는 INTP는 고집스럽고 야속하게 느껴집니다.'
  },
  ESTP: {
    nickname: '수완 좋은 활동가',
    summary: '말보다는 즉각적인 실천으로 돌파구를 찾아내는 야생마와 같습니다. 대단히 관찰력이 뛰어나며 현재를 주도하는 기동성을 가지고 있습니다.',
    traits: [
      '눈치가 아주 빠르고 상대방의 상태를 한눈에 꿰뚫어 봄',
      '과장된 포장보다는 직설적이고 현실적인 의사소통',
      '몸으로 느끼는 스포츠, 스릴, 모험적인 활동을 아주 즐김',
      '위기 대처 시 엄청난 순발력과 임기응변 발휘'
    ],
    strengths: [
      '위기에 전혀 쫄지 않는 대담함과 실질적인 문제 해결력',
      '말솜씨가 활기차고 사교적이어서 어디서나 마당발',
      '탁상공론에 갇히지 않고 바로 행동해 성과를 쥐어짜 냄'
    ],
    weaknesses: [
      '행동이 생각보다 앞서 돌발 행동을 하거나 다치는 경우가 많음',
      '반복적이거나 강압적인 규율에 저항하며 끈기가 약함',
      '타인의 감수성을 고려하지 못하는 과하게 솔직한 직언'
    ],
    bestCompat: 'ISFJ',
    bestDesc: '거침없이 돌진하는 ESTP의 발걸음에 ISFJ의 다정하고 섬세한 쉼표가 붙는 좋은 조합입니다.',
    worstCompat: 'INFP',
    worstDesc: '눈앞의 팩트를 중시하는 ESTP와 내면의 깊은 의미와 영혼을 중시하는 INFP는 충돌하기 쉽습니다.'
  },
  ESTJ: {
    nickname: '엄격한 관리자',
    summary: '규칙, 체계, 시간 관리를 가장 확실하게 실천하는 든든한 등대 같은 성격입니다. 투명하고 논리적인 원칙으로 리더십을 드러냅니다.',
    traits: [
      '공정함과 객관성을 생명처럼 소중하게 다룸',
      '계획대로 한결같이 행동하며 신뢰감을 구축함',
      '시간 약속을 지키지 않거나 무능한 태도를 혐오함',
      '체계적이고 정량적인 데이터를 바탕으로 보고하고 일함'
    ],
    strengths: [
      '어려운 팀도 즉시 기강을 잡고 끌어가는 탁월한 통솔력',
      '책임감이 대단하여 맡은 직무는 밤을 새워서라도 완수',
      '가치관이나 신념이 매우 투명하고 일관성 있음'
    ],
    weaknesses: [
      '다양성을 이해하지 못하고 “이게 맞는 정답”이라 고집함',
      '감정적 위로나 공감 대화에 대해 시간 낭비라 치부함',
      '상대의 사정을 무시하고 급하게 몰아쳐 심적 압박을 가함'
    ],
    bestCompat: 'ISFP',
    bestDesc: '원칙과 실용성을 제공하는 ESTJ와 부드럽고 유연한 ISFP는 서로에게 유용한 영향을 줍니다.',
    worstCompat: 'INFP',
    worstDesc: '계획성과 팩트를 강조하는 ESTJ는 자유로운 상상과 감성 중심의 INFP를 견디기 힘들어합니다.'
  },
  INFP: {
    nickname: '열정적인 중재자',
    summary: '겉으로는 조용하고 수줍어 보이지만, 내면에는 세상을 다정하게 채우고자 하는 신념과 낭만이 불타오르는 아름다운 이상주의자입니다.',
    traits: [
      '깊은 감수성과 탁월한 인문학적/창의적 표현력',
      '개인의 자유와 주관적 신념을 무엇보다 신성시함',
      '비난이나 분쟁을 극도로 피하는 평화주의적 성향',
      '단순 흥미보다 삶과 행동의 숨겨진 가치를 중시'
    ],
    strengths: [
      '타인의 기쁨과 슬픔을 온몸으로 보듬는 탁월한 공감 능력',
      '독창적이고 개성 넘치는 독보적인 예술성',
      '타인의 고유한 개성과 라이프스타일을 완벽하게 인정함'
    ],
    weaknesses: [
      '현실을 도피하고 망상의 세계에 머무는 성향이 강함',
      '자신의 약점에 상처받아 굴 속으로 숨어버리거나 잠적함',
      '거절이나 쓴소리를 하지 못해 모든 짐을 홀로 다 떠안음'
    ],
    bestCompat: 'ENFJ',
    bestDesc: 'ENFJ가 제시하는 올바른 길과 리더십 아래, INFP는 안심하고 내면의 창의성을 발현합니다.',
    worstCompat: 'ESTJ',
    worstDesc: '엄격한 현실적 의무와 지시를 들이미는 ESTJ 앞에서는 숨을 쉬기 힘든 피로를 느낍니다.'
  },
  INFJ: {
    nickname: '선의의 옹호자',
    summary: '세상에서 가장 희소한 성격으로, 샘솟는 직관과 깊은 공감을 결합하여 주변에 따뜻한 변화를 일으키는 조용한 전략가입니다.',
    traits: [
      '상대의 거짓을 본능적으로 감지하는 고도의 촉',
      '말솜씨와 행동 뒤에 늘 장기적인 은유와 목표를 숨겨둠',
      '겉으론 온화하지만 가슴속 깊이 단단한 철학을 지님',
      '혼자서 조용히 사색을 하며 내면에 영감을 충전함'
    ],
    strengths: [
      '타인의 인생 고민에 대해 매우 신중하고 명확한 조언을 해줌',
      '도덕적 신념을 가슴에 품고 흔들림 없이 한 길을 걸어감',
      '풍부한 상상력과 이성적 통찰을 조화롭게 융합함'
    ],
    weaknesses: [
      '자신의 속마음과 진짜 속내는 극히 극소수에게만 드러냄',
      '완벽주의 기질로 인해 이상에 도달하지 못하면 잦은 번아웃을 호소',
      '타인의 감정 쓰레기통 역할을 자처하다가 스스로 지침'
    ],
    bestCompat: 'ENFP',
    bestDesc: 'INFJ의 심오한 생각과 ENFP의 톡톡 튀는 활기가 영적 교감을 최고조로 올려 줍니다.',
    worstCompat: 'ESTP',
    worstDesc: '자극적이고 직설적인 ESTP의 접근은 섬세하고 심사숙고하는 INFJ에게 방어벽을 세우게 합니다.'
  },
  INTP: {
    nickname: '아이디어 자판기',
    summary: '세상의 흥미로운 현상과 구조를 논리적으로 해부하는 학자 성향입니다. 지식 그 자체와 가설 검증에서 최고의 쾌감을 느끼는 이론가입니다.',
    traits: [
      '논리 전개에 틈이 있는 대화는 조용히 의문을 제기함',
      '감정을 걷어내고 순수한 인과관계 위주로 생각함',
      '주목받거나 리더가 되는 것에는 관심이 거의 없음',
      '관심 분야가 생기면 무서울 정도로 파고드는 스페셜리스트'
    ],
    strengths: [
      '복잡한 시스템에서 문제점의 원인을 정확히 추론함',
      '틀에 갇히지 않는 유연하고 새로운 프레임을 구상함',
      '선입견 없이 언제나 열려 있는 지적 태도'
    ],
    weaknesses: [
      '상대방이 흘리는 감정 신호나 대인 관계의 윤활유 역할을 어려워함',
      '아이디어 설계만 즐기고 실제 실행에 옮기는 기동력이 떨어짐',
      '매사 분석과 비판적 잣대를 들이대 상대에게 건조하다는 인상을 줌'
    ],
    bestCompat: 'ENTJ',
    bestDesc: 'INTP의 무한한 지적 설계도를 ENTJ의 강력한 파워로 현실화하는 폭발적인 생산성을 냅니다.',
    worstCompat: 'ESFJ',
    worstDesc: '전통적 관습, 안부 묻기 등 정형화된 친목을 중시하는 ESFJ와는 소통 코드가 정반대입니다.'
  },
  INTJ: {
    nickname: '용의주도한 전략가',
    summary: '독창적이고 독립적인 전략 기획가로서, 세상이라는 체스판을 위에서 내려다보듯 계획을 세우는 브레인입니다. 주관과 통찰력이 확고합니다.',
    traits: [
      '원대한 계획과 분석을 홀로 설계하는 완벽 고독을 즐김',
      '비합리적이거나 근거 없는 감정적 논리는 칼같이 무시함',
      '자신의 역량을 키우는 자기 계발에 에너지를 아낌없이 투자',
      '조용하지만 차가운 눈빛 너머로 미래의 승리를 그려봄'
    ],
    strengths: [
      '결론에 다다르는 압도적이고 빈틈없는 로직 설계',
      '외부 흔들림이나 비난에도 묵묵히 본인의 비전을 밀어붙임',
      '체계적이고 단계적으로 대상을 효율화하는 뛰어난 브레인'
    ],
    weaknesses: [
      '사회적 상호작용(스몰 토크 등)을 냉소적으로 보아 고립될 수 있음',
      '타인을 지나치게 낮잡아 보거나 가혹한 논리를 들이댐',
      '조금이라도 타협이 불가한 완고한 면모를 가짐'
    ],
    bestCompat: 'ENFP',
    bestDesc: '서로 다른 시각을 공유하며, INTJ의 날카로운 칼날에 ENFP의 따뜻한 감성이 더해집니다.',
    worstCompat: 'ESFP',
    worstDesc: '미래를 전략적으로 구축하려는 INTJ와 현장과 즉흥 재미에 살고 죽는 ESFP는 거리가 멉니다.'
  },
  ISFP: {
    nickname: '호기심 많은 예술가',
    summary: '온화하고 조용히 타인을 배려하며, 매 순간 세상의 자연과 소중한 가치를 탐구하는 힐러입니다. 주위에 해를 끼치지 않는 온화함의 상징입니다.',
    traits: [
      '자기 의견을 남에게 주입하기보다는 말없이 받아줌',
      '뛰어난 미적 감각과 세련된 안목을 지님',
      '계획적으로 살기보다 자연스러운 흐름에 몸을 맡기는 스타일',
      '자신의 내면을 굳이 드러내 자랑하지 않고 묵묵함'
    ],
    strengths: [
      '남의 단점이나 허물을 쉽게 헐뜯지 않는 넓은 보량',
      '갈등을 피하고 평화로운 분위기를 지탱하는 부드러움',
      '눈앞의 미세한 아름다움을 예술로 승화하는 감각'
    ],
    weaknesses: [
      '거절이나 싫은 내색을 전혀 하지 않아 과다한 스트레스를 겪음',
      '장기적인 인생의 설계나 마감 시간 준수에 유독 취약함',
      '비판에 상처를 아주 깊게 받고 오랫동안 곱씹음'
    ],
    bestCompat: 'ESFJ',
    bestDesc: '말없이 상대를 아끼는 ISFP와 다정하게 챙겨주는 ESFJ가 만나 아주 따뜻한 안식을 이룹니다.',
    worstCompat: 'ENTJ',
    worstDesc: '목표와 팩트로 채찍질하는 ENTJ 아래에서 ISFP의 감수성은 큰 억압을 받게 됩니다.'
  },
  ISFJ: {
    nickname: '용감한 수호자',
    summary: '보이지 않는 곳에서 성실하고 따뜻하게 헌신하며 사람들을 보살피는 든든한 방패와 같은 존재입니다. 타인의 행복을 도울 때 가장 행복해합니다.',
    traits: [
      '타인의 소소한 취향이나 중요한 날짜를 신기할 만큼 잘 기억함',
      '질서정연하고 확실한 업무를 한결같이 수행함',
      '겉보기에 차분하고 소극적이지만 내 사람들을 지킬 때는 대담함',
      '전통적인 관습과 따뜻한 가족적 관계를 우선시함'
    ],
    strengths: [
      '디테일에 아주 강하며 성실하고 믿음직함',
      '사람들의 고민을 다정하게 들어주며 실무적 지원을 해줌',
      '사회적 규범과 안정적 루틴을 지키는 모범 시민의 자세'
    ],
    weaknesses: [
      '타인의 부탁을 다 들어주느라 본인의 휴식 시간과 건강을 해침',
      '과격한 급작스러운 변화나 계획의 돌발 취소에 큰 스트레스를 받음',
      '과거의 실수나 후회를 오랫동안 곱씹으며 우울감에 빠짐'
    ],
    bestCompat: 'ESFP',
    bestDesc: 'ISFJ의 정갈한 다정함과 ESFP의 즐거운 에너지가 상호작용하여 유쾌한 신뢰를 이룹니다.',
    worstCompat: 'ENTP',
    worstDesc: '모든 안정된 시스템에 비판적 의문을 던지며 흔드는 ENTP는 ISFJ에게 매우 피곤한 대상입니다.'
  },
  ISTP: {
    nickname: '만능 재주꾼',
    summary: '필요한 말만 하며 상황을 이성적으로 관찰하고 해결하는 쿨한 현실주의자입니다. 도구나 기계, 몸을 쓰는 실용적 경험을 즐깁니다.',
    traits: [
      '감정 기복이 지극히 적어 무심해 보이지만 마음은 유연함',
      '직접 기기를 뜯어보거나 조립하는 체험적 학습을 좋아함',
      '누가 내 생활 영역을 간섭하거나 귀찮게 하는 것을 혐오함',
      '인간관계나 행동에서 최소의 에너지로 최대의 성과를 내려 함'
    ],
    strengths: [
      '큰 트러블이나 당혹스러운 사고에도 매우 침착하게 수습함',
      '관찰과 팩트에 근거한 극도의 실무 능력',
      '위선이 없고 유연하며 뒤끝이 전혀 없는 쿨한 성격'
    ],
    weaknesses: [
      '슬퍼하는 이의 마음을 감정적으로 받아들이지 못하고 해결책만 우김',
      '인간관계에서 연락을 잘 안 하거나 대화 참여율이 낮음',
      '동기부여가 생기지 않는 모든 일에 지나치게 무기력함'
    ],
    bestCompat: 'ESTJ',
    bestDesc: '현실적인 팩트로 쿵짝이 맞으며, 추진과 수리를 조화롭게 나누어 갖는 좋은 비즈니스적/개인적 짝입니다.',
    worstCompat: 'ENFJ',
    worstDesc: '뜨거운 감정적 밀착과 지속적인 소통을 원하는 ENFJ에게 고독한 ISTP는 차가운 벽으로 느껴집니다.'
  },
  ISTJ: {
    nickname: '청렴결백한 공무원',
    summary: '한 치의 오차도 용납하지 않는 정갈함과 논리, 그리고 끝없는 성실성으로 무장한 원칙주의자입니다. 사회와 가정의 든든한 뼈대 역할을 담당합니다.',
    traits: [
      '계획한 업무 일지, 수치, 기록들을 정확하게 저장함',
      '조용하고 차분하게 주어진 임무를 소리 없이 완성해 냄',
      '추상적인 아이디어보다는 입증된 경험적 사실을 신뢰함',
      '도덕적 해이나 불량한 태도, 게으름을 극도로 혐오함'
    ],
    strengths: [
      '한 번 약속하거나 사인한 일은 무슨 일이 있어도 지키는 극강의 신용',
      '정돈과 체계화 능력이 매우 뛰어남',
      '위기 속에서도 감정에 치우치지 않는 이성적 평점심 유지'
    ],
    weaknesses: [
      '창의적인 상상이나 가설 설정 등에 어려움을 겪고 보수적임',
      '조금만 틀을 벗어나도 예민해지고 융통성을 발휘하지 못함',
      '타인의 약한 소리나 우는소리에 대해 비논리적이라 생각해 면박을 줌'
    ],
    bestCompat: 'ESTP',
    bestDesc: '서로 현실을 정확히 파악하여, 한 사람은 행동을 담당하고 한 사람은 질서를 잡는 모범 조합입니다.',
    worstCompat: 'ENFP',
    worstDesc: '수시로 계획을 바꾸고 기발하지만 불확실한 아이디어를 투척하는 ENFP는 ISTJ를 지치게 만듭니다.'
  }
};

// --- MBTI Profiles Extensions for Careers & Famous Figures ---
const mbtiExtensions = {
  ENFP: {
    recommendJobs: ['마케팅 크리에이터', '홍보 전문가', '이벤트 플래너', '저널리스트'],
    famousPeople: ['윌 스미스', '로버트 다우니 Jr.', 'RM (BTS)', '오프라 윈프리']
  },
  ENFJ: {
    recommendJobs: ['상담치료사', '비영리 단체 리더', '교사/교수', '인사총괄 HR'],
    famousPeople: ['마틴 루터 킹', '버락 오바마', '유재석', '넬슨 만델라']
  },
  ENTP: {
    recommendJobs: ['창업가/스타트업 리더', '경영 컨설턴트', '마케팅 분석가', '기획 기획자'],
    famousPeople: ['토마스 에디슨', '마크 트웨인', '스티브 잡스', '육성재']
  },
  ENTJ: {
    recommendJobs: ['경영 책임자 (CEO)', '벤처 캐피탈리스트', '전략 기획자', '변호사'],
    famousPeople: ['스티브 잡스', '고든 램지', '이재용', '줄리어스 시저']
  },
  ESFP: {
    recommendJobs: ['연예인/배우', '레크리에이션 강사', '항공기 승무원', '홍보 모델'],
    famousPeople: ['마릴린 먼로', '엘비스 프레슬리', '지효 (트와이스)', '백종원']
  },
  ESFJ: {
    recommendJobs: ['초등 교사', '의료 상담사', '호텔 지배인', '고객 서비스 관리자'],
    famousPeople: ['테일러 스위프트', '광희', '제이홉 (BTS)', '빌 클린턴']
  },
  ESTP: {
    recommendJobs: ['소방관/경찰관', '스포츠 마케터', '금융 브로커', '엔지니어'],
    famousPeople: ['도널드 트럼프', '마돈나', '신동엽', '효린']
  },
  ESTJ: {
    recommendJobs: ['군인/경찰 관리자', '프로젝트 매니저', '재무 분석가', '법률 사무원'],
    famousPeople: ['소크라테스 (가설)', '존 D. 록펠러', '힐러리 클린턴', '스티브 발머']
  },
  INFP: {
    recommendJobs: ['시인/소설가', '임상 심리사', '미술 치료사', '환경 운동가'],
    famousPeople: ['윌리엄 셰익스피어', '조앤 K. 롤링', '아이유', '빈센트 반 고흐']
  },
  INFJ: {
    recommendJobs: ['심리 상담가', '소설가/작가', '성직자/상담원', '교육 공무원'],
    famousPeople: ['마하트마 간디', '태연', '베네딕트 컴버배치', '도스토옙스키']
  },
  INTP: {
    recommendJobs: ['소프트웨어 엔지니어', '순수과학 연구원', '데이터 분석가', '대학 교수'],
    famousPeople: ['알베르트 아인슈타인', '르네 데카르트', '빌 게이츠', '진 (BTS)']
  },
  INTJ: {
    recommendJobs: ['시스템 아키텍트', '투자 분석가', '전략 컨설턴트', '컴퓨터 과학자'],
    famousPeople: ['엘론 머스크', '아이작 뉴턴', '서태지', '프레드리히 니체']
  },
  ISFP: {
    recommendJobs: ['시각 디자이너', '작곡가/가수', '조경 아티스트', '사회복지사'],
    famousPeople: ['마이클 잭슨', '정국 (BTS)', '레오나르도 다 빈치', '브래드 피트']
  },
  ISFJ: {
    recommendJobs: ['간호사/위생사', '사서/기록관', '유치원 교사', '인사 행정원'],
    famousPeople: ['마더 테레사', '비욘세', '김세정', '엘리자베스 2세 여왕']
  },
  ISTP: {
    recommendJobs: ['정밀 기계공', '파일럿/조종사', '응급구조사', '소프트웨어 개발자'],
    famousPeople: ['톰 크루즈', '클린트 이스트우드', '슈가 (BTS)', '마이클 조던']
  },
  ISTJ: {
    recommendJobs: ['회계사/세무사', '공무원', '사법 행정가', '감사관'],
    famousPeople: ['조지 워싱턴', '워렌 버핏', '김구라', '앙겔라 메르켈']
  }
};

// Merge extensions into profiles
Object.keys(mbtiExtensions).forEach(key => {
  Object.assign(mbtiProfiles[key], mbtiExtensions[key]);
});

// --- Global App State Management ---
let currentQuestionIndex = 0;
let scores = {
  EI: 0, // Option A accumulates for E
  SN: 0, // Option A accumulates for S
  TF: 0, // Option A accumulates for T
  JP: 0  // Option A accumulates for J
};

// --- DOM Elements ---
const startSection = document.getElementById('start-section');
const quizSection = document.getElementById('quiz-section');
const loadingSection = document.getElementById('loading-section');
const resultSection = document.getElementById('result-section');

const startBtn = document.getElementById('start-btn');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

const currentStepSpan = document.getElementById('current-step');
const progressFill = document.getElementById('progress-fill');
const questionIdSpan = document.getElementById('question-id');
const questionTextH2 = document.getElementById('question-text');
const optABtn = document.getElementById('opt-a');
const optBBtn = document.getElementById('opt-b');
const optATextSpan = document.getElementById('opt-a-text');
const optBTextSpan = document.getElementById('opt-b-text');

const loadingPercentSpan = document.getElementById('loading-percent');
const status1 = document.getElementById('status-1');
const status2 = document.getElementById('status-2');
const status3 = document.getElementById('status-3');

const resultMbtiDiv = document.getElementById('result-mbti');
const resultNicknameH2 = document.getElementById('result-nickname');
const resultSummaryP = document.getElementById('result-summary');
const resultTraitsUl = document.getElementById('result-traits');
const resultStrengthsUl = document.getElementById('result-strengths');
const resultWeaknessesUl = document.getElementById('result-weaknesses');
const compatBestMbtiH4 = document.getElementById('compat-best-mbti');
const compatBestDescP = document.getElementById('compat-best-desc');
const compatWorstMbtiH4 = document.getElementById('compat-worst-mbti');
const compatWorstDescP = document.getElementById('compat-worst-desc');
const resultImageImg = document.getElementById('result-image');
const resultJobsUl = document.getElementById('result-jobs');
const resultFiguresDiv = document.getElementById('result-figures');

const shareBtn = document.getElementById('share-btn');
const restartBtn = document.getElementById('restart-btn');
const toastMessage = document.getElementById('toast-message');

// --- Initialization & Setup ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupEventListeners();
});

// --- Theme Toggle Controller ---
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

function toggleTheme() {
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem('theme', 'dark');
  }
}

// --- Event Listeners Setup ---
function setupEventListeners() {
  themeToggleBtn.addEventListener('click', toggleTheme);
  
  startBtn.addEventListener('click', startQuiz);
  
  optABtn.addEventListener('click', () => handleAnswer('A'));
  optBBtn.addEventListener('click', () => handleAnswer('B'));
  
  restartBtn.addEventListener('click', restartQuiz);
  shareBtn.addEventListener('click', shareResult);
}

// --- Quiz Navigation Handlers ---
function startQuiz() {
  currentQuestionIndex = 0;
  scores = { EI: 0, SN: 0, TF: 0, JP: 0 };
  
  // Transition smoothly to Quiz Section
  startSection.classList.add('hidden');
  startSection.classList.remove('active');
  
  quizSection.classList.remove('hidden');
  quizSection.classList.add('active', 'animate-fade-in');
  
  renderQuestion();
}

function renderQuestion() {
  const currentQ = questions[currentQuestionIndex];
  
  // Update step labels
  const stepStr = String(currentQuestionIndex + 1).padStart(2, '0');
  currentStepSpan.textContent = stepStr;
  questionIdSpan.textContent = currentQuestionIndex + 1;
  
  // Update progress bar fill
  const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressFill.style.width = `${progressPercent}%`;
  
  // Load question copy
  questionTextH2.textContent = currentQ.question;
  optATextSpan.textContent = currentQ.optA;
  optBTextSpan.textContent = currentQ.optB;
  
  // Apply a dynamic entry animation to the question container content
  const container = document.querySelector('.quiz-container');
  container.classList.remove('animate-fade-in');
  void container.offsetWidth; // Trigger reflow to restart animation
  container.classList.add('animate-fade-in');
}

function handleAnswer(choice) {
  const currentQ = questions[currentQuestionIndex];
  
  // Add weight if option A is selected
  if (choice === 'A') {
    scores[currentQ.type] += currentQ.weight;
  }
  
  currentQuestionIndex++;
  
  if (currentQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    // Show loading spinner
    showLoading();
  }
}

// --- Loading Simulation ---
function showLoading() {
  quizSection.classList.add('hidden');
  quizSection.classList.remove('active');
  
  loadingSection.classList.remove('hidden');
  loadingSection.classList.add('active', 'animate-fade-in');
  
  // Reset statuses
  status1.className = 'status-item active';
  status2.className = 'status-item';
  status3.className = 'status-item';
  status1.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 답변 분석 중...';
  status2.innerHTML = '<i class="fa-regular fa-circle"></i> 성향 지표 계산 중...';
  status3.innerHTML = '<i class="fa-regular fa-circle"></i> 성격 유형 리포트 생성 중...';
  
  let percent = 0;
  const interval = setInterval(() => {
    percent += 4;
    loadingPercentSpan.textContent = percent;
    
    // Animate checklist progress based on percentage
    if (percent === 32) {
      status1.innerHTML = '<i class="fa-solid fa-circle-check" style="color: var(--color-s);"></i> 답변 분석 완료';
      status1.className = 'status-item';
      status2.className = 'status-item active';
      status2.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 성향 지표 계산 중...';
    } else if (percent === 68) {
      status2.innerHTML = '<i class="fa-solid fa-circle-check" style="color: var(--color-s);"></i> 성향 지표 계산 완료';
      status2.className = 'status-item';
      status3.className = 'status-item active';
      status3.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 성격 유형 리포트 생성 중...';
    } else if (percent >= 100) {
      clearInterval(interval);
      status3.innerHTML = '<i class="fa-solid fa-circle-check" style="color: var(--color-s);"></i> 성격 유형 리포트 생성 완료';
      status3.className = 'status-item';
      setTimeout(showResults, 600);
    }
  }, 70);
}

// --- Result Screen Generator ---
function showResults() {
  loadingSection.classList.add('hidden');
  loadingSection.classList.remove('active');
  
  resultSection.classList.remove('hidden');
  resultSection.classList.add('active', 'animate-fade-in');
  
  // Calculate final MBTI Type
  const mbti = calculateMbti();
  const profile = mbtiProfiles[mbti];
  
  // Set textual content
  resultMbtiDiv.textContent = mbti;
  resultNicknameH2.textContent = profile.nickname;
  resultSummaryP.textContent = profile.summary;
  
  // Set illustration based on temperament group
  let imageSrc = 'images/diplomat.png';
  if (mbti.includes('NT')) {
    imageSrc = 'images/analyst.png';
  } else if (mbti.includes('NF')) {
    imageSrc = 'images/diplomat.png';
  } else if (mbti.includes('S') && mbti.includes('J')) {
    imageSrc = 'images/sentinel.png';
  } else if (mbti.includes('S') && mbti.includes('P')) {
    imageSrc = 'images/explorer.png';
  }
  resultImageImg.src = imageSrc;
  
  // Populate traits list
  resultTraitsUl.innerHTML = '';
  profile.traits.forEach(trait => {
    const li = document.createElement('li');
    li.textContent = trait;
    resultTraitsUl.appendChild(li);
  });
  
  // Populate strengths list
  resultStrengthsUl.innerHTML = '';
  profile.strengths.forEach(st => {
    const li = document.createElement('li');
    li.textContent = st;
    resultStrengthsUl.appendChild(li);
  });
  
  // Populate weaknesses list
  resultWeaknessesUl.innerHTML = '';
  profile.weaknesses.forEach(wk => {
    const li = document.createElement('li');
    li.textContent = wk;
    resultWeaknessesUl.appendChild(li);
  });
  
  // Populate Compatibility fields
  compatBestMbtiH4.textContent = profile.bestCompat;
  compatBestDescP.textContent = profile.bestDesc;
  compatWorstMbtiH4.textContent = profile.worstCompat;
  compatWorstDescP.textContent = profile.worstDesc;
  
  // Populate recommend jobs list
  resultJobsUl.innerHTML = '';
  profile.recommendJobs.forEach(job => {
    const li = document.createElement('li');
    li.textContent = job;
    resultJobsUl.appendChild(li);
  });

  // Populate famous figures list
  resultFiguresDiv.innerHTML = '';
  profile.famousPeople.forEach(person => {
    const span = document.createElement('span');
    span.className = 'figure-tag';
    span.textContent = person;
    resultFiguresDiv.appendChild(span);
  });
  
  // Animate Spectrum Progress Bars
  animateSpectrums();
}

function calculateMbti() {
  let mbti = '';
  
  // E vs I
  mbti += (scores.EI >= 50) ? 'E' : 'I';
  // S vs N
  mbti += (scores.SN >= 50) ? 'S' : 'N';
  // T vs F
  mbti += (scores.TF >= 50) ? 'T' : 'F';
  // J vs P
  mbti += (scores.JP >= 50) ? 'J' : 'P';
  
  return mbti;
}

// Animate Center-out dual percentage fills
function animateSpectrums() {
  const spectrums = [
    { type: 'EI', id: 'fill-ei', labelL: 'pct-e', labelR: 'pct-i' },
    { type: 'SN', id: 'fill-sn', labelL: 'pct-s', labelR: 'pct-n' },
    { type: 'TF', id: 'fill-tf', labelL: 'pct-t', labelR: 'pct-f' },
    { type: 'JP', id: 'fill-jp', labelL: 'pct-j', labelR: 'pct-p' }
  ];
  
  spectrums.forEach(spec => {
    const scoreA = scores[spec.type]; // Percentage of Option A (left-side)
    const scoreB = 100 - scoreA;      // Percentage of Option B (right-side)
    
    // Update raw textual percentage labels
    document.getElementById(spec.labelL).textContent = `${scoreA}%`;
    document.getElementById(spec.labelR).textContent = `${scoreB}%`;
    
    const fillEl = document.getElementById(spec.id);
    
    // We compute position coordinate (from left edge: 0% is max A, 100% is max B, 50% is center)
    const coordinate = 100 - scoreA;
    
    if (scoreA > 50) {
      // Option A is dominant (left-side fill)
      fillEl.style.left = `${coordinate}%`;
      fillEl.style.width = `${50 - coordinate}%`;
    } else if (scoreA < 50) {
      // Option B is dominant (right-side fill)
      fillEl.style.left = '50%';
      fillEl.style.width = `${coordinate - 50}%`;
    } else {
      // Exactly 50/50 balance
      fillEl.style.left = '50%';
      fillEl.style.width = '0%';
    }
  });
}

function restartQuiz() {
  resultSection.classList.add('hidden');
  resultSection.classList.remove('active');
  
  startSection.classList.remove('hidden');
  startSection.classList.add('active', 'animate-fade-in');
}

// --- Share Result Function ---
function shareResult() {
  const currentUrl = window.location.href;
  
  // Try to use Web Share API
  if (navigator.share) {
    navigator.share({
      title: '마인드 프리즘 : 나만의 MBTI 성향 분석 테스트',
      text: '나의 진짜 MBTI 유형과 상세 성향 스펙트럼 결과를 확인해보세요!',
      url: currentUrl
    }).catch(err => {
      // Fallback if rejected or fails
      copyToClipboard(currentUrl);
    });
  } else {
    // Standard Clipboard Copy fallback
    copyToClipboard(currentUrl);
  }
}

function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToastNotification();
    }).catch(err => {
      fallbackCopyToClipboard(text);
    });
  } else {
    fallbackCopyToClipboard(text);
  }
}

function fallbackCopyToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.width = "2em";
  textArea.style.height = "2em";
  textArea.style.padding = "0";
  textArea.style.border = "none";
  textArea.style.outline = "none";
  textArea.style.boxShadow = "none";
  textArea.style.background = "transparent";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    const successful = document.execCommand('copy');
    if (successful) {
      showToastNotification();
    } else {
      alert('링크 복사에 실패했습니다. 주소창의 주소를 직접 복사해주세요.');
    }
  } catch (err) {
    alert('링크 복사에 실패했습니다. 주소창의 주소를 직접 복사해주세요.');
  }
  document.body.removeChild(textArea);
}

function showToastNotification() {
  toastMessage.classList.remove('hidden');
  toastMessage.style.transform = 'translateX(-50%) translateY(0)';
  toastMessage.style.opacity = '1';
  
  setTimeout(() => {
    toastMessage.style.transform = 'translateX(-50%) translateY(20px)';
    toastMessage.style.opacity = '0';
    setTimeout(() => {
      toastMessage.classList.add('hidden');
    }, 400);
  }, 2500);
}
