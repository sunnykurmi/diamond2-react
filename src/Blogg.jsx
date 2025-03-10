
import { RiArrowDropUpLine, RiArrowLeftLine, RiArrowRightSLine, RiCheckLine, RiFacebookBoxFill, RiFacebookBoxLine, RiFacebookLine, RiInstagramFill, RiInstagramLine } from '@remixicon/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Blogg = () => {


  const [linkCopied, setLinkCopied] = useState(false);

  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setLinkCopied(true);
      setTimeout(() => {
        setLinkCopied(false);
      }, 1000);
    });
  };

  const data = [{
    id: 1,
    title: "round",
    para: "A veritable classic, the timeless shape of this perfect round brilliant cut maximizes the brilliance and beauty of the stone.",
    img: "/images/stones/Round_H&A.webp",
  }, {
    id: 2,
    title: "HEART",
    para: "Ideal for a solitaire pendant or ring, this heart-shaped cut is the perfect declaration of love.",
    img: "/images/stones/Heart.webp",
  }, {
    id: 3,
    title: "CUSHION",
    para: "This traditional cut incorporates a square center with rounded pillow-like corners to evoke a romantic mood.",
    img: "/images/stones/Cushion.webp",
  }, {
    id: 4,
    title: "BAGUETTE",
    para: "This rectangular form/minimalist construction of the baguette cut puts the focus squarely on the top section of the diamond.",
    img: "/images/stones/Baguette.webp",
  }, {
    id: 5,
    title: "OVAL",
    para: "An elegant variant of the classic round cut, the elongated shape creates the illusion of size and emits a dazzling radiance.",
    img: "/images/stones/Oval.webp",
  }, {
    id: 6,
    title: "RADIANT",
    para: "This elongated square cut, with a complete brilliant-cut facet pattern applied to the crown and pavilion, offers a lively brilliance.",
    img: "/images/stones/Radiant.webp",
  }, {
    id: 7,
    title: "PRINCESS",
    para: "Modern in appearance, this cut is a four-sided pyramid shape with Chevron-shaped bottom facets to enhance the sparkle of the diamond.",
    img: "/images/stones/Princess.webp",
  }, {
    id: 8,
    title: "TRILLION",
    para: "Characterized by a striking triangular-shape, this remarkable cut stands out for its stunning beauty.",
    img: "/images/stones/Trilliant.webp",
  }, {
    id: 9,
    title: "ASSCHER",
    para: "Square-shape cut has large step facets and a high crown octagonal appearance as each corner is cropped for a distinctive sparkle.",
    img: "/images/stones/Asscher.webp",
  }, {
    id: 10,
    title: "PEAR",
    para: "A cross between a round and marquise cut, the tear-drop shape of the stone has a slimming effect when worn on the finger.",
    img: "/images/stones/Pear.webp",
  }, {
    id: 11,
    title: "EMERALD",
    para: "Renowned for its understated elegance, this style focuses on a classic rectangular shape and features step-cut facets.",
    img: "/images/stones/Emerald.webp",
  }, {
    id: 12,
    title: "MARQUISE",
    para: "This slender, eye-shaped cut with striking symmetry offers the largest crown surface areas to maximize the perceived size of the stone.",
    img: "/images/stones/Marquise.webp",
  },
  ];

  return (
    <div>
      <div className=" h-20 border-b-2 text-[#262626] border-[#0000000b] border-opacity-30  center w-full p-5 montserrat">
        <img className=' w-[30%]  md:w-[12%]' src="/images/logo_text_2.png" alt="" />
      </div>
      <div className=" h-32 flex text-[#262626] items-center justify-between  px-5 md:px-32  w-full p-5 montserrat">
        <div className=" w-fit md:w-[30%] flex items-center gap-2 text-xs font-light h-full ">
          <a href="/" className='underline cursor-pointer'  >Home</a>
          <RiArrowRightSLine opacity={.5} size={16} />
          <a href="">Blog</a>
          <RiArrowRightSLine opacity={.5} size={16} />
          <a href="">About Stones and Cuts</a>
        </div>
        <div className="w-[30%] flex items-center justify-end gap-2  text-xs font-light h-full ">
          <p className='underline cursor-pointer' onClick={handleShareClick}>
            {linkCopied ? <p className='flex items-center'> Link copied   <RiCheckLine opacity={.5} size={16} /></p> : 'Share'}</p>
        </div>
      </div>
      <div className="w-full  text-[#262626]   flex flex-col text-center items-center  spectral-regular ">
        <div className="center flex-col gap-10 w-full py-10">
          <p className=' text-3xl md:text-7xl '>About Stones and Cuts.</p>
        </div>
        <div className=" w-full md:w-[70%]  ">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {data.map((item) => (
            <div key={item.id} className=" w-full md:w-[20vw] h-[40vh]     overflow-hidden">
              <div className=" w-full center">

              <div className="size-32">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              </div>
              <div className="w-full center flex-col">
                <h3 className="text-lg font-semibold mb-2 uppercase">{item.title}</h3>
                <p className="text-gray-700 w-[80%] text-center leading-tight text-xs md:text-sm montserrat">{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      <div className="w-full h-[10vh]  md:h-[30vh] p-5 md:px-20  bg-gray-50 flex">
        <div className="h-full w-1/2 flex items-center">
          <img className=' w-[80%] md:w-[22%]' src="/images/logo_text_2.png" alt="" />
        </div>
        <div className="h-full w-1/2 flex items-center montserrat justify-end ">
          <div className="flex max-[600px]:text-xs   gap-2">
            <a href="https://www.instagram.com/diamond2official/?igsh=MXEyaG5hajJudjhkbQ%3D%3D#" target="_blank" rel="noreferrer">
              <p className="hover:opacity-70 transition-all ease-linear duration-100" >
                Instagram </p>
            </a>
            <a href="https://www.facebook.com/share/19yq86hQSB/?mibextid=wwXIfr" target="_blank" rel="noreferrer" >

              <p className="hover:opacity-70 cursor-pointer transition-all ease-linear duration-100" >Facebook</p>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogg;



