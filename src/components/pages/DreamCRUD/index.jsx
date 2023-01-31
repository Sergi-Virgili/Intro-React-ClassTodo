import React from "react";
import { useState } from "react";
import { DreamCard } from "../../DreamCard";
import styles from "./dreamList.module.css";

const dataBase = [
  {
    id: "1",
    title: "dream1",
    img: "https://images.immediate.co.uk/production/volatile/sites/25/2020/04/Things-never-knew-astronomy-e454e5d.jpg",
  },
  {
    id: "2",
    title: "dream2",
    img: "https://www.esa.int/var/esa/storage/images/enabling_support/space_transportation/19716729-20-eng-GB/Space_Transportation_pillars.jpg",
  },
  { id: "3", title: "dream1", img: "fdef.jpg" },
  { id: "4", title: "dream2", img: "fdef.jpg" },
  { id: "5", title: "dream1", img: "fdef.jpg" },
  { id: "6", title: "dream2", img: "fdef.jpg" },
  { id: "7", title: "dream2", img: "fdef.jpg" },
];

export const DreamCRUD = () => {
  const [data, setData] = useState(dataBase);
  // const [newItem, setNewItem] = useState({})
  const newItem = { title: "", img: "" };

  const deleteHandler = (id) => {
    let newData = data.filter((item) => item.id != id);
    setData(newData);
  };

  const inputHandler = (inputValue) => {
    console.log(inputValue);
  };

  return (
    <div>
      <input type="search" onChange={(e) => inputHandler(e.target.value)} />
      {!data.length ? <p>Not Dreams Find</p> : ""}
      <section className={styles.listContainer}>
        {data.map((item, i) => (
          <DreamCard
            key={i}
            deleteHandler={deleteHandler}
            item={item}
          ></DreamCard>
        ))}
      </section>
    </div>
  );
};
