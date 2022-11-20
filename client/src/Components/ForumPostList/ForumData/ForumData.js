import defaultImg from "../../../Assets/DirectoryList/default.png";

const data = [
  {
    id: 1,
    title: "What Does the fox say ? ",
    vote: 56,
    author: {
      name: "Mamunur Rashid",
      image: defaultImg,
    },
    text: `It's got a long way to go before ever becoming the next Gangnam Style YouTube sensation, but the song "The Fox (What Does the Fox Say?)" is doing pretty well — 150 million views and counting as of Wednesday morning.
    If you haven't yet heard and seen the video from two Norwegian brothers who call themselves Ylvis, we'll embed it. Or just ask the closest kid to show it to you. It's a sensation with the younger set.`,
    time: "2021-05-29T12:59-0500",
    upvote_users: [
      {
        id: 1,
      },
      {
        id: 3,
      },
      {
        id: 5,
      },
    ],
    downvote_users: [
      {
        id: 3,
      },
      {
        id: 5,
      },
    ],
    comment: [
      {
        id: 1,
        user: "Md sakib",
        image: defaultImg,
        text: "If you haven't yet heard and seen the video from two Norwegian brothers who call themselves Ylvis, we'll embed it. Or just ask the closest kid to show it to you. It's a sensation with the younger set.",
        reply: [
          {
            id: 1,
            user: "Md sakib",
            image: defaultImg,
            text: "If you haven't yet heard and seen the video from two Norwegian brothers who call themselves Ylvis, we'll embed it. Or just ask the closest kid to show it to you. It's a sensation with the younger set.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "What Does the fox say ? ",
    vote: 34,
    text: `It's got a long way to go before ever becoming the next Gangnam Style YouTube sensation, but the song "The Fox (What Does the Fox Say?)" is doing pretty well — 150 million views and counting as of Wednesday morning.
    If you haven't yet heard and seen the video from two Norwegian brothers who call themselves Ylvis, we'll embed it. Or just ask the closest kid to show it to you. It's a sensation with the younger set.It's got a long way to go before ever becoming the next Gangnam Style YouTube sensation, but the song "The Fox (What Does the Fox Say?)" is doing pretty well — 150 million views and counting as of Wednesday morning.`,
    author: {
      name: "Mamunur Rashid",
      image: defaultImg,
    },
    time: "2021-05-25T12:59-0500",
    upvote_users: [
      {
        id: 5,
      },
    ],
    downvote_users: [
      {
        id: 1,
      },
    ],
  },
  {
    id: 3,
    title: "What Does the fox say ? ",
    vote: 12,
    text: "If you haven't yet heard and seen the video from two Norwegian brothers who call themselves Ylvis, we'll embed it. Or just ask the closest kid to show it to you. It's a sensation with the younger set.",
    author: {
      name: "Mamunur Rashid",
      image: defaultImg,
    },
    time: "2021-05-10T12:59-0500",
    upvote_users: [
      {
        id: 2,
      },
    ],
    downvote_users: [
      {
        id: 3,
      },
    ],
  },
];

export default data;
