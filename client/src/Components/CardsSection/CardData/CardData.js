import circleImg from "../../../Assets/CardsSection/circle.svg";
import hex from "../../../Assets/CardsSection/hex.svg";
import square from "../../../Assets/CardsSection/square.svg";

const CardData = [
  {
    id: 1,
    title: "Reminisce",
    image: circleImg,
    description:
      "It helped me to bring back all those lost memories in my campus life as well as my friends whom I've lost my contact after graduation",

    points: [
      {
        id: 1,
        text: "230 additional notes",
      },
    ],
  },
  {
    id: 2,
    title: "Create",
    image: hex,
    description:
      "It helped me to bring back all those lost memories in my campus life as well as my friends whom I've lost my contact after graduation",

    points: [
      {
        id: 1,
        text: "230 additional notes",
      },
      {
        id: 2,
        text: "1,890 additional notes",
      },
    ],
  },
  {
    id: 3,
    title: "Reconnect",
    image: square,
    description:
      "It helped me to bring back all those lost memories in my campus life as well as my friends whom I've lost my contact after graduation",
    points: [
      {
        id: 1,
        text: "230 additional notes",
      },
      {
        id: 2,
        text: "1,890 additional notes",
      },
      {
        id: 3,
        text: "3 additional notes",
      },
    ],
  },
];

export default CardData;
