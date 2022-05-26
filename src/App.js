import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
// import { Canvas, useFrame } from '@react-three/fiber'
import icon from "./downarrow.svg";
import ImageGallery from "react-image-gallery";
import "./App.css";
import Faq from "react-faq-component";

export const rice1 = require("./images/rice-1.jpg");
export const guangzhou1 = require("./images/guangzhou-1.jpg");
export const rice2 = require("./images/rice-2.jpg");
export const guangzhou2 = require("./images/guangzhou-2.jpg");
export const zhijin1 = require("./images/zhijin-1.jpg");
export const guangzhou3 = require("./images/guangzhou-3.jpg");
export const guangzhou4 = require("./images/guangzhou-4.jpg");
export const guangzhou5 = require("./images/guangzhou-5.jpg");
export const guangzhou6 = require("./images/guangzhou-6.jpg");
export const guangzhou7 = require("./images/guangzhou-7.jpg");
export const guangzhou8 = require("./images/guangzhou-8.jpg");

const images = [
  {
    original: rice1,
    // thumbnail: rice1,
    description: "Rice Terraces in Guangzhou",
  },
  {
    original: guangzhou8,
    description: "Cultural Tour: Ancestral Temple and Nanfeng Ancient Kiln",
  },
  {
    original: guangzhou1,
    // thumbnail: guangzhou1,
  },
  {
    original: rice2,
    // thumbnail: rice2,
  },
  {
    original: zhijin1,
    // thumbnail: zhijin1,
  },
  {
    original: guangzhou2,
    // thumbnail: guangzhou2,
  },
  {
    original: guangzhou3,
    // thumbnail: guangzhou2,
  },
  {
    original: guangzhou4,
    description: "GuangDong Museum, only a walk from the library",
  },
  { original: guangzhou5 },
  {
    original: guangzhou6,
    description:
      "Take the Bullet Train from GuangZhou South Station to Explore HK!",
  },
  { original: guangzhou7 },
];

const faq = {
  rows: [
    {
      title: "去哪里旅游？(Where to go?)",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "去多长时间？[X日游] (How long is the trip?)",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "什么时候走／回来？(When to go?)",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "跟谁一起去旅游？(Who to go with?)",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title:
        "怎么去旅游？要不要定订机票／火车票？（往返/单程票？直飞/转机？订哪个航空公司？靠走道还是靠窗户还是的位子）(How to go?)",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title:
        "怎么办护照／签证？旅行社会不会帮忙申请护照/签证？(How to get passport?)",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title:
        "为什么你们的旅行社最好？ 你们的导游怎么样？(Why you should choose us?)",
      content: <p>current version is 1.2.1</p>,
    },
  ],
};

const guangzhou = {
  rows: [
    {
      title:
        "Intro to Guangzhou ： 怎么去旅游？要不要定订机票／火车票？（往返/单程票？直飞/转机？订哪个航空公司？靠走道还是靠窗户还是的位子?)",
      content:
        "第一站在广州！广州是一个中国公司和文化中心。SouthWest China Travel 已经定订机票从。所以，要是你住在离Boston近，你不用订机票。我们的旅行社订单程 直飞，没有难受地转机。有两个机票也 位子连在一起 （lian zai yi qi = next to each other) 一个是靠 窗户所以你可以看棒的看法。九月一号到了广州！",
    },
    {
      title: "订什么旅馆/酒店？",
      content:
        "你们要查开车租 还是公共汽车去我们已经订的酒店。 你在 广州Marriott Hotel 要睡觉两个晚上。广州Marriott Hotel是酒店因为有多活动。好得不得了。你可以游泳，在 gym? 活动为提高你的力气。有自由早上饭也在酒店里边饭馆，还是有Room Service。托运你的行李（别带多箱子，可以一还是两个）以后，你会初你的广州程 (cheng = trip ???). !!! ",
    },
    {
      title: "打算做什么活动？对什么景点 (jǐng diǎn,attractions) 感兴趣？",
      content:
        "从酒店，你可以吃饭还是马上去第一景点：广州图书馆！为三个天你在广州，我们打算了早上和下午的景点。你的早上和晚上有空儿。查景点，Explore! 你可以 take a bullet train 去首都，北京，是中国的政治和文化中心。还是explore广州多的有名公司 （examples of famous companies in Guangzhou) 因为是中国的Business中心。景点和长城有名一样的找。你可以 Explore 着找好饭馆。FengFang TianPi 饭馆有主要菜系 (Càixì=Regional cuisine ) 也 素餐。第一个天你去广州图书馆那，走去GuangDong Museum。晚上你可以Explore也找饭馆吃晚饭。第二个天我们订你Bicycle旅游团。很好玩儿。广州很flat，所以不难。也九月的天气不是太热了。以后，中午你应该去 GuangZhou South Station to take a Bullet Train 去Explore香港。你回广州的时候你可以去 WanNian 饭馆吃完饭。第三个天我们订你文化旅游！你会去Ancestral Temple and Nanfeng Ancient Kiln 。你导游会说你中国的 Ceramic History. 那你会回酒店To pack去直飞 Yuanyang rice terraces。",
    },
  ],
};

const faqStyles = {
  // bgColor: 'white',
  padding: "0 4rem",
  rowTitleColor: "#273444",
  rowTitleTextSize: "1.5rem",
  // rowContentColor: 'grey',
  rowContentTextSize: "1.2rem",
  // arrowColor: "red",
};

const config = {
  animate: true,
  expandIcon: "+",
  collapseIcon: "-",
  // arrowIcon: "V",
  // tabFocus: true
};

function App() {
  return (
    <div className="App">
      <div className="App-header heading">
        <h1>Southwest China Travel</h1>
        <p style={{ margin: "0 calc(10vw)" }}>
          From Guangzhou, to the Yuanyang rice terraces, to the beautiful
          Guiyang Zhijin caves in the span of one week, right before school
          starts!
        </p>
        <br />
        <a className="next" href="#basics">
          <img src={icon} alt="down" width="50px" height="auto" />
        </a>
      </div>
      <div
        id="basics"
        className="section"
        style={{ backgroundColor: "#282c34" }}
      >
        <h1 className="sec-head">The Basics</h1>
        <div className="intros" style={{color: 'white'}}>
          <h2>开学前一周的中国旅行 (Week trip to China before the school starts)</h2>
          <p>
            游客会去广州，紅河ハニ棚田 （云南），和织金洞 (贵州）. (Tourists
            will go to Guangzhou, the Yuanyuang Rice Terraces (Yunnan), and the
            Zhijin Caves (Guizhou)). <br />
            这个旅行是一个星期—不用怕！不经不是太长的时间，也会很好玩儿。(This
            trip is an entire week, but fear not! It is not too long and it will
            be very enjoyable.) <br />
            我们会九月十号出发，九月十七号回到Boston。(We will depart on
            September 10th and return to Boston on the 17th.)
          </p>
        </div>
        <a className="next" href="#attractions">
          <img src={icon} alt="down" width="50px" height="auto" />
        </a>
      </div>
      <div
        id="attractions"
        className="section"
        style={{ backgroundColor: "#000000" }}
      >
        <h1 className="sec-head">The Attractions (景点)</h1>
        <div style={{ maxHeight: "60vh!important" }}>
          <ImageGallery items={images} sizes="50vh" showThumbnails="false" />
        </div>
        <a className="next" href="#faq">
          <img
            src={icon}
            alt="down"
            width="50px"
            height="auto"
            style={{
              filter:
                "invert(0%) sepia(98%) saturate(0%) hue-rotate(13deg) brightness(98%) contrast(105%) !important",
            }}
          />
        </a>
      </div>
      <div id="faq" className="section2" style={{ backgroundColor: "white" }}>
        <h1 className="sec-head" style={{ color: "black" }}>
          Frequently Asked Questions
        </h1>
        <Faq data={faq} styles={faqStyles} config={config} />
        <a className="next" href="#guangzhou">
          <img
            src={icon}
            alt="down"
            width="50px"
            height="auto"
            style={{
              filter:
                "invert(0%) sepia(98%) saturate(0%) hue-rotate(13deg) brightness(98%) contrast(105%) !important",
            }}
          />
        </a>
      </div>
      <div
        id="guangzhou"
        className="section2"
        style={{ backgroundColor: "#f0f2f5" }}
      >
        <h1 className="sec-head" style={{ color: "black" }}>
          Guangzhou Segment + Introduction (3 days, 3 nights)
        </h1>
        <div className="intros">
          <h2>
            怎么去旅游？要不要定订机票／火车票？（往返/单程票？直飞/转机？订哪个航空公司？靠走道还是靠窗户还是的位子?
            (How are we travelling and how do we book air/train tickets? What
            airlines are we booking and what seats?)
          </h2>
          <p>
            第一站在广州！广州是一个中国公司和文化中心。SouthWest China Travel
            已经定订机票从。所以，要是你住在离Boston近，你不用订机票。我们的旅行社订单程
            直飞，没有难受地转机。有两个机票也 位子连在一起 （lian zai yi qi =
            next to each other) 一个是靠
            窗户所以你可以看棒的看法。九月一号到了广州!
          </p>

          <h2>订什么旅馆/酒店? (What hotels will we be staying at?)</h2>
          <p>
            你们要查开车租 还是公共汽车去我们已经订的酒店。 你在 广州Marriott
            Hotel 要睡觉两个晚上。广州Marriott
            Hotel是酒店因为有多活动。好得不得了。你可以游泳，在 gym?
            活动为提高你的力气。有自由早上饭也在酒店里边饭馆，还是有Room
            Service。托运你的行李（别带多箱子，可以一还是两个）以后，你会初你的广州程
            (cheng = trip ???). !!!
          </p>
          <h2>
            打算做什么活动？对什么景点感兴趣？(What are some of the attractions
            we will be seeing?)
          </h2>
          <p>
            {" "}
            从酒店，你可以吃饭还是马上去第一景点：广州图书馆！为三个天你在广州，我们打算了早上和下午的景点。你的早上和晚上有空儿。查景点，Explore!
            你可以 take a bullet train
            去首都，北京，是中国的政治和文化中心。还是explore广州多的有名公司
            （examples of famous companies in Guangzhou)
            因为是中国的Business中心。景点和长城有名一样的找。你可以 Explore
            着找好饭馆。FengFang TianPi 饭馆有主要菜系 (Càixì=Regional cuisine )
            也 素餐。第一个天你去广州图书馆那，走去GuangDong
            Museum。晚上你可以Explore也找饭馆吃晚饭。第二个天我们订你Bicycle旅游团。很好玩儿。广州很flat，所以不难。也九月的天气不是太热了。以后，中午你应该去
            GuangZhou South Station to take a Bullet Train
            去Explore香港。你回广州的时候你可以去 WanNian
            饭馆吃完饭。第三个天我们订你文化旅游！你会去Ancestral Temple and
            Nanfeng Ancient Kiln 。你导游会说你中国的 Ceramic History.
            那你会回酒店To pack去直飞 Yuanyang rice terraces。
          </p>
        </div>

        {/* <Faq
                data={guangzhou}
                styles={faqStyles}
                config={config}
            /> */}
        <a className="next" href="#zhijin">
          <img
            src={icon}
            alt="down"
            width="50px"
            height="auto"
            style={{
              filter:
                "invert(0%) sepia(98%) saturate(0%) hue-rotate(13deg) brightness(98%) contrast(105%) !important",
            }}
          />
        </a>
      </div>
      <div
        id="zhijin"
        className="section2"
        style={{ backgroundColor: "#f0faf8" }}
      >
        <h1 className="sec-head" style={{ color: "black" }}>
          Zhijin Segment (1 day, 1 night)
        </h1>
        <div className="intros">
          <p>
            贵州的天气很凉快但是不会太冷。贵州的菜系是有名的—他们的辣菜特别的好吃也很受欢迎。{" "}
            <br />
            The weather in Guizhou is quite cool but it isn’t too cold in the
            fall. Guizhou cuisine is world-famous—their spicy dishes are
            especially tasty and popular. Guizhou culture has many stories.
            Guizhou also has many historic villages—these villages are
            historical landmarks of the Miao people, who used to farm in the
            area.
            <br /> <br />
            贵州文化有很多故事。贵州有很多的村庄—这些村庄是苗族人的历史地标。贵州有很漂亮的织金洞。织金洞需需要一整天闯过，有一路的漂亮的钟乳石和石笋.
            可以照很多的照片。他们曾经在该地区耕种 <br />
            There is a very beautiful Zhijin Cave in Guizhou. Zhijin Cave takes
            a whole day to pass through, and there are beautiful stalactites and
            stalagmites all along the way, where you can take a lot of pictures!{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
