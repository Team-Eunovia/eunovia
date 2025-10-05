export type Post = {
  id: number;
  title: string;
  content: string;
  thumbnail_image?: string;
  category: "별" | "우주" | "그리고 사람";
  created_at: string;
};

export const posts: Post[] = [
  {
    id: 1,
    title: "이름 없는 백성 제 이름이 생기기 전 이 두 눈이",
    content:
      "제 이름이 생기기 전 이 두 눈이 생기기도 전 당신이 제게 용기를 주었어요. 어떤 역경과 어려움이 있더라도 당신이 함께 하신다 했지요 당신이 올 수 없는 나라에서 혼자 왕이 되느니 차라리 당신의 나라에서 사는 이름 없는 백성이 되고 싶습니다",
    thumbnail_image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    category: "그리고 사람",
    created_at: "2025-09-22T12:00:00Z",
  },
  {
    id: 2,
    title: "별빛 아래",
    content:
      "별 하나가 깜빡일 때마다 마음속 고요가 말을 걸어온다. 세상의 소음이 멈추고, 하늘의 속삭임만 남는다. 그 빛은 길을 잃은 이에게 말한다. '너는 결코 혼자가 아니야.'",
    category: "별",
    created_at: "2025-09-22T12:05:00Z",
  },
  {
    id: 3,
    title: "우주의 숨결",
    content:
      "우주는 끝없이 펼쳐진 침묵의 바다. 그 안에서 우리는 한 점 먼지일 뿐이다. 그러나 그 먼지에도 영혼이 깃들어 있으니, 어찌 감히 스스로를 작다 하겠는가?",
    thumbnail_image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
    category: "우주",
    created_at: "2025-09-22T12:10:00Z",
  },
  {
    id: 4,
    title: "바람의 기도",
    content:
      "바람이 나무 사이를 지나며 기도한다. 잎사귀 하나, 풀잎 하나에도 마음이 있다고. 그대여, 귀 기울여 들어보라. 세상은 살아있는 모든 것과 함께 숨 쉰다.",
    category: "그리고 사람",
    created_at: "2025-09-22T12:15:00Z",
  },
  {
    id: 5,
    title: "고요한 물결",
    content:
      "호수 위 잔잔한 물결은 말한다. 서두르지 말라고, 모든 것은 때가 있다고. 마음을 비우면 세상의 모든 답이 그 안에 있음을 알게 되리라.",
    thumbnail_image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    category: "그리고 사람",
    created_at: "2025-09-22T12:20:00Z",
  },
  {
    id: 6,
    title: "별의 기억",
    content:
      "별은 오래전 잊힌 이들의 꿈을 간직한다. 그 빛은 시간 너머로 우리에게 전한다. 사랑했던 순간, 아팠던 날들, 모두가 별이 되어 반짝인다.",
    thumbnail_image:
      "https://images.unsplash.com/photo-1758380743428-ac0b72817e94?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    category: "별",
    created_at: "2025-09-22T12:25:00Z",
  },
  {
    id: 7,
    title: "우주 속 나",
    content:
      "나는 우주의 작은 조각, 그러나 그 안엔 무한이 담겨 있다. 내 안의 하늘이 열릴 때, 비로소 나는 세상과 하나가 된다.",
    thumbnail_image:
      "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
    category: "우주",
    created_at: "2025-09-22T12:30:00Z",
  },
  {
    id: 8,
    title: "길 위의 사람",
    content:
      "길은 끝없이 이어지고, 사람은 그 위를 걷는다. 어디로 가는지 모르더라도, 발걸음 하나하나는 삶의 노래가 된다. 멈추지 말고 걸어가라.",
    category: "그리고 사람",
    created_at: "2025-09-22T12:35:00Z",
  },
  {
    id: 9,
    title: "하늘의 품",
    content:
      "별이 하늘에 흩뿌려진 것은 우리를 위로하려 함이다. 어둠 속에서도 빛은 존재하고, 그 빛은 우리의 상처를 어루만진다.",
    thumbnail_image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    category: "별",
    created_at: "2025-09-22T12:40:00Z",
  },
  {
    id: 10,
    title: "영원의 순간",
    content:
      "찰나의 순간에도 영원이 있다. 한 번의 숨결, 한 번의 미소, 그 안에 우주가 담겨 있다. 지금 이 순간을 소중히 여기라, 그것이 곧 영원이다.",
    category: "우주",
    created_at: "2025-09-22T12:45:00Z",
  },
  {
    id: 11,
    title: "깊은 밤의 속삭임",
    content:
      "깊은 밤, 별빛이 내 마음에 말을 건다. 어둠은 두려움이 아니라 고요의 품이다. 그 속에서 나는 나를 찾고, 세상과 하나가 된다. 별 하나가 내게 묻는다, '그대는 무엇을 위해 살아가는가?' 그리고 나는 침묵으로 답한다, 그저 이 순간을 사랑하기에.",
    category: "별",
    created_at: "2025-09-22T12:21:00Z",
  },
  {
    id: 12,
    title: "우주의 거울",
    content:
      "우주는 거대한 거울, 내 마음을 비춘다. 그 안에서 나는 끝없는 질문과 마주한다. 나는 누구인가, 어디서 왔는가? 그 답은 별들 사이에 흩뿌려져 있다. 그러나 찾으려 애쓰지 말라, 그저 바라보는 것만으로 충분하다. 모든 것은 이미 내 안에 있다.",
    thumbnail_image:
      "https://images.unsplash.com/photo-1741598743471-61d733b04a44?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
    category: "우주",
    created_at: "2025-09-22T12:22:00Z",
  },
  {
    id: 13,
    title: "흙길의 나그네",
    content:
      "흙길을 걷는 나그네, 발자국마다 이야기가 쌓인다. 바람이 내 어깨를 스치며 말한다, 멈추지 말라고. 세상은 끝없는 여정이고, 모든 걸음은 집으로 향한다. 그 집은 멀리 있지 않다. 내 마음 깊은 곳, 그곳이 나의 안식처다.",
    thumbnail_image:
      "https://plus.unsplash.com/premium_photo-1757922072048-5968c04e6199?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMTN8fHxlbnwwfHx8fHw%3D",
    category: "그리고 사람",
    created_at: "2025-09-22T12:23:00Z",
  },
  {
    id: 14,
    title: "달빛의 노래",
    content:
      "달빛이 숲을 덮으면 세상은 고요 속에서 노래한다. 나무와 풀, 그리고 바람까지 모두가 화음을 이룬다. 그 노래는 내게 말한다, 모든 것은 지나가지만 사랑은 남는다고. 귀 기울여라, 그대의 심장도 그 노래의 일부다. 그러니 두려워 말고 마음을 열어 보라.",
    thumbnail_image:
      "https://images.unsplash.com/photo-1756312148347-611b60723c7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNDd8fHxlbnwwfHx8fHw%3D",
    category: "별",
    created_at: "2025-09-22T12:24:00Z",
  },
  {
    id: 15,
    title: "시간의 강",
    content:
      "시간은 강물처럼 흐르고, 나는 그 위에 떠 있는 작은 배다. 어디로 가는지 알지 못해도, 물결이 나를 이끈다. 강은 말한다, 서두르지 말라고, 모든 것은 제자리로 돌아간다고. 나는 그저 물결에 몸을 맡기고, 지금 이 순간을 사랑한다. 그 안에서 영원이 반짝인다.",
    thumbnail_image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    category: "그리고 사람",
    created_at: "2025-09-22T12:25:00Z",
  },
  {
    id: 16,
    title: "별들의 대화",
    content:
      "별들은 서로 속삭이며 밤을 채운다. 그들의 대화는 시간과 공간을 넘어선다. 나는 그 소리를 듣고 싶어 귀를 기울인다. 그들은 말한다, 모든 생명은 연결되어 있다고. 너와 나, 그리고 저 먼 우주까지, 우리는 모두 하나의 노래다. 그 노래를 잊지 말라.",
    thumbnail_image:
      "https://images.unsplash.com/photo-1716045168176-15d310a01dc0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGFuaW1lfGVufDB8fDB8fHww",
    category: "별",
    created_at: "2025-09-22T12:26:00Z",
  },
  {
    id: 17,
    title: "우주의 품",
    content:
      "우주는 끝없는 품을 열어 우리를 감싼다. 그 안에서 나는 작고도 크다. 내 숨결 하나가 우주의 리듬과 맞닿아 있다. 두려워 말라, 우주는 결코 너를 버리지 않는다. 그저 눈을 감고, 그 품 안에서 쉬어라. 모든 답은 그 안에서 기다리고 있다.",
    thumbnail_image:
      "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
    category: "우주",
    created_at: "2025-09-22T12:27:00Z",
  },
  {
    id: 18,
    title: "바람 속의 진실",
    content:
      "바람은 진실을 속삭이며 지나간다. 세상의 모든 소음 속에서도 그 목소리는 맑다. 귀를 열어 들어보라, 바람은 네가 잊고 있던 것을 상기시킨다. 너는 사랑받는 존재라는 것을. 그 사랑은 나무, 하늘, 그리고 너 자신 안에 있다. 그러니 미소 지으며 걸어가라.",
    thumbnail_image:
      "https://images.unsplash.com/photo-1657815555962-297100ce4b0e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGFuaW1lfGVufDB8fDB8fHww",
    category: "그리고 사람",
    created_at: "2025-09-22T12:28:00Z",
  },
  {
    id: 19,
    title: "하늘의 약속",
    content:
      "별 하나가 떨어질 때마다 하늘은 약속을 속삭인다. 어둠이 깊을수록 빛은 더 밝게 빛난다고. 그 빛은 너를 위한 길잡이다. 절망 속에서도 희망은 존재한다. 그 약속을 믿고, 한 걸음 더 내디뎌라. 너의 길은 이미 하늘에 그려져 있다.",
    thumbnail_image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    category: "별",
    created_at: "2025-09-22T12:29:00Z",
  },
  {
    id: 20,
    title: "영원의 문",
    content:
      "모든 것은 흘러가지만, 영원의 문은 늘 열려 있다. 그 문 너머에는 시간도, 고통도 없다. 단지 사랑과 평화만이 존재한다. 나는 그 문을 향해 걷는다, 서두르지 않고 천천히. 내 심장이 그 문을 이미 알고 있으니. 그곳에서 나는 나를 만난다.",
    thumbnail_image:
      "https://plus.unsplash.com/premium_photo-1661961652174-028332ac597d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGFuaW1lfGVufDB8fDB8fHww",
    category: "우주",
    created_at: "2025-09-22T12:30:00Z",
  },
];
