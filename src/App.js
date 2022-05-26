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
export const logo = require("./images/southwest-china.png");

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
      title: "去哪里旅游？(Where are we going?)",
      content: `游客会去广州，紅河ハニ棚田 （云南），和织金洞 (贵州）。我们多数的时候会在中国的西南地区。 (Tourists will go to Guangzhou, the Yuanyuang Rice Terraces (Yunnan), and the Zhijin Caves (Guizhou). We will stick to the Southwest region of China.).`,
    },
    {
      title: "去多长时间？[X日游] (How long is the trip?)",
      content:
        "这个旅行是一个星期—不用怕！不经不是太长的时间，也会很好玩儿。这个时间包括飞尘时间。 (This trip is an entire week, but fear not! It is not too long and it will be very enjoyable. This number includes flight time.)",
    },
    {
      title: "什么时候走／回来？(When do we depart and return?)",
      content: `我们会九月十号出发，九月十七号回到Boston。我们从波士顿洛根国际机场起飞。(We will depart on September 10th and return to Boston on the 17th, flying from the Logan International Airport in Boston.)`,
    },
    {
      title:
        "怎么去旅游？要不要定订机票／火车票？（往返/单程票？直飞/转机？订哪个航空公司？靠走道还是靠窗户还是的位子）(How to go?)",
      content:
        "单程两人经济（波士顿→广州）； 马航（$5,144），然后单程两人经济舱（龙洞堡贵阳→波士顿）； 联合航空公司（3930 美元）。 —— One way trip 2 person economy (Boston → Guangzhou); Malaysia Airlines ($5,144) and then one way trip 2 person economy (Longdongbao Guiyang → Boston); United Airlines ($3930).",
    },
    {
      title:
        "怎么办护照／签证？旅行社会不会帮忙申请护照/签证？(How to get passport?)",
      content:
        "南西 中国旅行 （SouthWest China Travel） 已经帮你订机票从。所以，要是你住在离Boston近，你不用订机票。我们的旅行社帮游客订单程 直飞的机票，所以，你不会难受地转机。如果你定两张机票，两个位子会连在一起 （lian zai yi qi = next to each other)。 一个位子会是靠 窗户的位子，所以你可以看很棒的风景。九月一号到了第一站：广州！",
    },
    {
      title:
        "为什么你们的旅行社最好？ 你们的导游怎么样？(Why you should choose us?)",
      content:
        "我们的程会是最好。我们的七个天在中国是只十一千美元。你会看些个中国的商业和文化中心。我们会棒你订机票，酒店，也订些个旅游。我希望你喜欢我们的行程会买我们的。(Our agency is the best! Not only are we affordable, you will also have a wonderful experience seeing some of China's most famous cultural and commecial sites. We will also help you book flights, hotels, and tours. We hope you will like our trip.)",
    },
  ],
};

const faqStyles = {
  // bgColor: 'white',
  padding: "0 4rem",
  rowTitleColor: "#273444",
  rowTitleTextSize: "1.5rem",
  textAlign: "left",
  fontFamily:
    "'Hiragino Sans GB', 'Source Han Sans ', 'Noto Sans 5C', 'SimHei', 'Noto Sans'",
  rowContentTextSize: "1.2rem",
  rowContentPaddingBottom: "2rem",
  rowContentPaddingTop: "2rem",
  rowContentColor: "#3a49a1",
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
      <div id="top" className="App-header heading">
        <img src={logo} width="80px"></img>
        <h1>西南旅行社</h1>
        <p style={{ margin: "0 calc(10vw)" }}>
          From Guangzhou, to the Yuanyang rice terraces, to the beautiful
          Guizhou Zhijin caves in the span of one week, right before school
          starts!
        </p>
        <br />
        <a className="next" href="#basics">
          <img src={icon} alt="down" width="50px" height="auto" />
        </a>
      </div>
      <div
        id="basics"
        className="section2"
        style={{ backgroundColor: "#282c34" }}
      >
        <h1 className="sec-head">The Basics</h1>
        <div className="intros" style={{ color: "white" }}>
          <h2>
            开学前一周的中国旅行 (A one week trip to China before the school
            starts)
          </h2>
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
          <h2>
            总共需要花一万两千六百六十块美元。 (In total, the trip costs
            $12,000)
          </h2>
          <p>
            你可以跟你的好朋友还是同学一起去旅游。(You can travel with your good
            friends or classmates, or maybe something more?)
          </p>
        </div>
        <a className="next" href="#attractions">
          <img src={icon} alt="down" width="50px" height="auto" />
        </a>
      </div>
      <div
        id="attractions"
        className="section2"
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
          Frequently Asked Questions (经常问的问题)
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
          <h1>Tianhe District / Itinerary / Questions</h1>
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
        <a className="next" href="#rice">
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
        id="rice"
        className="section2"
        style={{ backgroundColor: "#f0faf8" }}
      >
        <h1 className="sec-head" style={{ color: "black" }}>
          Yuanyang Rice Terraces (2 days, 1 night)
        </h1>
        <div className="intros">
          <h2>
            游客怎么去旅游？要不要定订机票／火车票？(How will tourists travel
            and how do we book tickets?)
          </h2>
          <p>
            游客登单程航空送广州去昆明。你们想坐哪里我们的旅行社会订哪里的位子。当然我们要简单计算，所以我们会定直飞的航空。游客会登中国南航空公司。如果游客要水平位子我们是愿意。
          </p>

          <h2>游客什么时候走／回来？ </h2>
          <p>游客走广州旅行的第三天，然后游客去之间第五天。</p>
          <h2>
            游客一共花（to spend money）多少钱？ (How much will tourists spend?){" "}
          </h2>
          <p>
            游客会 一共花万九百九十八元 ($10,998)。多又名 名胜古迹
            是便宜。旅行社的打折很好。如果你想导游，有可能有打四折。
          </p>

          <h2>游客订什么旅馆/酒店？ (What hotels should tourists book?) </h2>
          <p>
            旅行社订游客yun ti 旅馆。我们推荐这个旅馆比酒店因为它的文化。Yunti
            旅馆的业主（ye zhu owner)
            就像你的父母。他们会做饭早饭和欢迎游客。如果你想多素餐，然后好说业主。{" "}
            <br />
            初在昆明游客会登公共公车。游客能看日下，我们推荐靠窗户。
            马上游客到紅河ハニ棚田他们能托运的行李跟前桌子服务员。第四天有可会去​​​​紅河ハニ棚田。水稻梯田（
            shuidao ditian rice terrance) 好走了。带包里面多水平，有时候热的.
          </p>
          <h2> 打算做什么活动？对什么景点 (jǐng diǎn,attractions) 感兴趣？</h2> 
          <p>初暑假在昆明游客会登往返公共公车。游客能看日下，我们推荐靠窗户。 马上游客到紅河ハニ棚田他们能托运的行李跟前桌子服务员。第四天有可会去​​​​紅游客ニ棚田。水稻梯田（ shuidao ditian rice terrance) 好走了。带多水瓶包里面，有时候热的. 大多时候会自由行，游客能拍照和见面当地（dāng dì, local)人。最有名的地方是 Longshuba, Bada, Douyishu, 和 Laohuzui 水稻地毯。第五天游客会去当地镇（zhén, town). 我的旅行社会照顾交通。 以后到了， 游客能试试当地菜。The Hani 人在云南。主要菜系是辣辣酸酸汤。在新地方请小心！以后当地镇游客会去之间。语录平安! </p>
        </div>
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
        style={{ backgroundColor: "#fff9f2" }}
      >
        <h1 className="sec-head" style={{ color: "black" }}>
          Zhijin Segment (1.5 days, 1 night)
        </h1>
        <div className="intros">
          <h2>Transportation & Details</h2>
          <p>
            昆明到织金的动车 (You will take a bullet train from Kunming to
            Zhijin). 然后，您将参加为期一整天的织金洞之旅。
          </p>
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
            stalagmites all along the way, where you can take a lot of pictures!
          </p>
          <h2>
            织金洞内有40多个阵型 (accumulations)，形成岩溶
            (karsts)，看的像房间。走完的时候，
          </h2>
          <p>
            大家回酒店睡觉。第二天就会到美国了！（There are more than 40
            formations in Zhijin Cave, which are formed by karsts/rock
            fragments, which look like rooms. After you pass the cave, you will
            go back to your hotel for the night. Then you will go to the USA!）
          </p>
          <h2>还有 （plus！...）</h2>
          <p>
            织金洞的附近十山，所以有需要导游。织金洞也有礼品店；你可以买很多的纪念品带回家！
          </p>
        </div>
      </div>
      <div className="App-header ending ">
        {/* <h1 style={{fontSize: '4rem', color:"white"}}>Sign up today!</h1> */}
        <div
          style={{ margin: "0 calc(10vw)", color: "white" }}
          className="intros conclusion"
        >
          <h2>
            我们的程会是最好。我们的七个天在中国是只十一千美元。你会看些个中国的商业和文化中心。我们会棒你订机票，酒店，也订些个旅游。我希望你喜欢我们的行程会买我们的。
          </h2>
          <p>
            Our trip will be the best. It is only $12,660 for a 7 day adventure
            in SouthWest China to see some of the most busy and historically
            significant centers and sights, right before you get back into the
            grind of school!
          </p>
        </div>
        <a className="next" href="#top">
          <img src={icon} alt="down" width="50px" height="auto" />
        </a>
      </div>
    </div>
  );
}

export default App;
