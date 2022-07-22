import {v4 as uuidv4} from "uuid";

function chillHop() {
    return [
      {
        name: "Beaver Creek",
        cover:
          "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
        artist: "Aso, Middle School, Aviino",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
        color: ["#205950", "#2ab3bf"],
        id: uuidv4(),
        active: true,
      },
      {
        name: "Daylight",
        cover:
          "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
        artist: "Aiguille",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
        color: ["#EF8EA9", "#ab417f"],
        id: uuidv4(),
        active: false,
      },
      {
        name: "Keep Going",
        cover:
          "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
        artist: "Swørn",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
        color: ["#CD607D", "#c94043"],
        id: uuidv4(),
        active: false,
      },
      {
        name: "Nightfall",
        cover:
          "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
        artist: "Aiguille",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
        color: ["#EF8EA9", "#ab417f"],
        id: uuidv4(),
        active: false,
      },
      {
        name: "Reflection",
        cover:
          "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
        artist: "Swørn",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
        color: ["#CD607D", "#c94043"],
        id: uuidv4(),
        active: false,
      },
      {
        name: "Under the City Stars",
        cover:
          "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
        artist: "Aso, Middle School, Aviino",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
        color: ["#205950", "#2ab3bf"],
        id: uuidv4(),
        active: false,
      },
      {
        name: "Lemon",
        artist: "Tom Doolie",
        cover: "https://chillhop.com/wp-content/uploads/2020/07/53eef8b1ac9bf40038b2b5dc7ca2d13fc19cf95e-1024x1024.jpg",
        id: uuidv4(),
        active: false,
        color: ["#3C2A38", "#6FABCF"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=7977"
      },
      {
        name: "Peaches",
        artist: "Philanthrope, The Field Tapes",
        cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
        id: uuidv4(),
        active: false,
        color: ["#9FBD5E", "#ECF2E4"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=11246"
      }
    ];
  }
  
  export default chillHop;