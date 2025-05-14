import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { FiEdit } from "react-icons/fi";

const cardData = [
  {
    id: 1,
    title: "Verior",
    subtitle:
      "Verior is a dynamic",
    image: "/assets/v.svg",
    createdAt: "2024-04-10",
    lastActivity: "2025-05-01",
  },
  {
    id: 2,
    title: "Verior",
    subtitle:
      "Verior is a dynamic",
    image: "/assets/v.svg",
    createdAt: "2024-03-12",
    lastActivity: "2025-04-28",
  },
  {
    id: 3,
    title: "Verior",
    subtitle:
      "Verior is a dynamic",
    image: "/assets/v.svg",
    createdAt: "2024-02-22",
    lastActivity: "2025-04-20",
  },
  {
    id: 4,
    title: "Verior",
    subtitle:
      "Verior is a dynamic",
    image: "/assets/v.svg",
    createdAt: "2024-01-18",
    lastActivity: "2025-03-29",
  },
  {
    id: 5,
    title: "Verior",
    subtitle:
      "Verior is a dynamic",
    image: "/assets/v.svg",
    createdAt: "2024-04-01",
    lastActivity: "2025-04-25",
  },
  {
    id: 6,
    title: "Verior",
    subtitle:
      "Verior is a dynamic",
    image: "/assets/v.svg",
    createdAt: "2023-12-11",
    lastActivity: "2025-03-30",
  },
  {
    id: 7,
    title: "Verior",
    subtitle:
      "Verior is a dynamic",
    image: "/assets/v.svg",
    createdAt: "2024-05-02",
    lastActivity: "2025-05-06",
  },
];


const Card = ({ image, title, subtitle }) => {
  return (
    <div className="bg-bmComponentBgColor rounded-lg shadow-md overflow-hidden flex flex-col mt-6">
      {/* Image with padding and background */}
      <div className="bg-extraLightGray p-2">
        <img src={image} alt={title} className="w-40 h-40 object-contain mx-auto" />
      </div>

      {/* Content */}
      <div className="p-4 bg-lightGray flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-semibold text-26 text-white">{title}</h3>
          <p className=" text-white mt-2 font-normal text-14">{subtitle}</p>
        </div>

        {/* Centered Buttons */}
        <div className="flex justify-center gap-3 mt-4">
  {/* Edit Button */}
  <button className="flex justify-center items-center gap-2 bg-darkGreen text-lightGreen w-full py-2 rounded-lg text-sm text-center">
    <img src="/assets/edit.svg" alt="edit" />
    Edit
  </button>

  {/* Delete Button */}
  <button className="flex justify-center items-center gap-2 bg-darkRed text-redColor w-full py-2 rounded-lg text-sm text-center">
    <img src="/assets/delete.svg" alt="delete" />
    Delete
  </button>
</div>

      </div>
    </div>
  );
};


const GridView = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cardData.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          title={card.title}
          subtitle={card.subtitle}
        />
      ))}
    </div>
  );
};


const TableView = () => {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full table-auto border-collapse text-left text-white">
        <thead>
          <tr className="bg-lightGray text-white text-16 font-bold">
            <th className="px-8 py-2">Image</th>
            <th className="px-8 py-2">Subtitle</th>
            <th className="px-8 py-2">Created At</th>
            <th className="px-8 py-2">Last Activity</th>
            <th className="px-8 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cardData.map((card, index) => (
            <tr
              key={card.id}
              className={index % 2 === 0 ? "bg-extraLightGray" : "bg-lightGray"}
            >
              {/* Image + Title in One Row, Centered Vertically */}
              <td className="px-5 py-3">
                <div className="flex items-center gap-4">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="object-contain"
                  />
                  <span className="text-20 font-semibold">{card.title}</span>
                </div>
              </td>

              <td className="px-8 py-2 font-normal text-14 align-middle">{card.subtitle}</td>
              <td className="px-8 py-2 whitespace-nowrap align-middle">{card.createdAt}</td>
              <td className="px-8 py-2 whitespace-nowrap align-middle">{card.lastActivity}</td>

              <td className="px-8 py-2 align-middle">
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 bg-darkGreen text-lightGreen px-4 py-2 rounded-lg text-sm">
                    <img src="/assets/edit.svg" alt="edit" />
                    Edit
                  </button>
                  <button className="flex items-center gap-1 bg-darkRed text-redColor px-4 py-2 rounded-lg text-sm">
                    <img src="/assets/delete.svg" alt="delete" />
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};




export { GridView, TableView };
