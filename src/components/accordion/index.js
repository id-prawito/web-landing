import React, { useState } from "react";
import {
  AccordionContainer,
  AccordionContent,
  AccordionImg,
  AccordionSite,
} from "./AccordionElements";
import img1 from "../../assets/img/img-1.png";
import img2 from "../../assets/img/img-2.png";

const render = () => {
  let items = [
    {
      name: "Header 1",
      content: "Lorem Impsum dolar asmet",
      img: img1,
    },
    {
      name: "Header 2",
      content: "Lorem Impsum dolar asmet",
      img: img2,
    },
    {
      name: "Header 3",
      content: "Lorem Impsum dolar asmet",
      img: img1,
    },
  ];

  return (
    <AccordionSite>
      <div className="accordion_container">
        <AccordionComponent items={items} />
      </div>
    </AccordionSite>
  );
};

const AccordionComponent = ({ items }) => {
  const [active, setActive] = useState();

  const handleClick = (item) => {
    setActive(item.name === active ? null : item.name);
  };

  const gambarPertama = items[0].img;
  return (
    <AccordionContainer>
      <div className="accordion_bungkus">
        <div className="pembungkus">
          {items.map((item, i) => {
            let isActive = active === item.name;
            return (
              <AccordionContent
                key={i}
                onClick={() => handleClick(item)}
                itemName={item.name}
                itemContent={item.content}
                isActive={isActive}
              />
            );
          })}
        </div>
        <div className="pembungkus_gambar">
          {active ? (
            items.map((item, i) => {
              let isActive = active === item.name;
              return (
                <div className="try" key={i}>
                  <AccordionImg isActive={isActive} itemImg={item.img} />
                </div>
              );
            })
          ) : (
            <img style={{ width: "300px" }} src={gambarPertama} alt="" />
          )}
        </div>
      </div>
    </AccordionContainer>
  );
};

export default render;
