import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
import icon from './downarrow.svg';
import ImageGallery from 'react-image-gallery';
import './App.css';
import Faq from "react-faq-component";

export const rice1 = require('./images/rice-1.jpg');
export const guangzhou1 = require('./images/guangzhou-1.jpg');
export const rice2 = require('./images/rice-2.jpg');
export const guangzhou2 = require('./images/guangzhou-2.jpg');
export const zhijin1 = require('./images/zhijin-1.jpg');
export const guangzhou3 = require('./images/guangzhou-3.jpg');

const images = [
  {
    original: rice1,
    // thumbnail: rice1,
    description: "Rice Terraces in Guangzhou"
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
        title: "怎么去旅游？要不要定订机票／火车票？（往返/单程票？直飞/转机？订哪个航空公司？靠走道还是靠窗户还是的位子）(How to go?)",
        content: <p>current version is 1.2.1</p>,
    },
    {
      title: "怎么办护照／签证？旅行社会不会帮忙申请护照/签证？(How to get passport?)",
      content: <p>current version is 1.2.1</p>,
  },
  {
    title: "为什么你们的旅行社最好？ 你们的导游怎么样？(Why you should choose us?)",
    content: <p>current version is 1.2.1</p>,
},
  ],
};

const faqStyles = {
  // bgColor: 'white',
  padding: "0 4rem",
  rowTitleColor: "#273444",
  rowTitleTextSize: '1.5rem',
  // rowContentColor: 'grey',
  rowContentTextSize: '1.2rem',
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
    		<p style={{margin: '0 calc(10vw)'}}>From Guangzhou, to the Yuanyang rice terraces, to the beautiful Guiyang Zhijin caves in the span of one week, right before school starts!</p>
        <br />
        <a className="next" href="#basics"><img  src={icon} alt="down" width="50px" height="auto"/></a>
    	</div>
      <div id="basics" className="section" style={{backgroundColor: '#282c34'}}>
        <h1 className="sec-head">The Basics</h1>
        <ul>
          <li>Seven Days</li>
        </ul>
        <a className="next" href="#attractions"><img src={icon} alt="down" width="50px" height="auto"/></a>
      </div>
      	<div id="attractions" className="section" style={{backgroundColor: '#000000'}}>
          <h1 className="sec-head" >The Attractions (景点)</h1>
          <div style={{	maxHeight:"60vh!important"}}><ImageGallery items={images} sizes="50vh" showThumbnails="false" /></div>
          <a className="next" href="#faq"><img src={icon} alt="down" width="50px" height="auto" style={{filter: "invert(0%) sepia(98%) saturate(0%) hue-rotate(13deg) brightness(98%) contrast(105%) !important"}}/></a>
          

        </div>
        <div id="faq" className="section" style={{backgroundColor: 'white'}}>
          <h1 className="sec-head" style={{color:"black"}}>Frequently Asked Questions</h1>
          <Faq
                data={faq}
                styles={faqStyles}
                config={config}
            />
          <a className="next" href="#attractions"><img src={icon} alt="down" width="50px" height="auto" style={{filter: "invert(0%) sepia(98%) saturate(0%) hue-rotate(13deg) brightness(98%) contrast(105%) !important"}}/></a>
          

        </div>
    </div>
  );
}

export default App;
