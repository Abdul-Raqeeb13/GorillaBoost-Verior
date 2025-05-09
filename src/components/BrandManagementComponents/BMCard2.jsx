import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { FiEdit } from "react-icons/fi";

const cardData = [
  {
    id: 1,
    title: "Verior",
    subtitle:
      "Verior is a dynamic and innovative brand focused on delivering cutting-edge solutions.",
    image: "/assets/verior.png",
    createdAt: "2024-04-10",
    lastActivity: "2025-05-01",
  },
  {
    id: 2,
    title: "Verior",
    subtitle:
      "Verior is a dynamic and innovative brand focused on delivering cutting-edge solutions.",
    image: "/assets/verior.png",
    createdAt: "2024-03-12",
    lastActivity: "2025-04-28",
  },
  {
    id: 3,
    title: "Verior",
    subtitle:
      "Verior is a dynamic and innovative brand focused on delivering cutting-edge solutions.",
    image: "/assets/verior.png",
    createdAt: "2024-02-22",
    lastActivity: "2025-04-20",
  },
  {
    id: 4,
    title: "Verior",
    subtitle:
      "Verior is a dynamic and innovative brand focused on delivering cutting-edge solutions.",
    image: "/assets/verior.png",
    createdAt: "2024-01-18",
    lastActivity: "2025-03-29",
  },
  {
    id: 5,
    title: "Verior",
    subtitle:
      "Verior is a dynamic and innovative brand focused on delivering cutting-edge solutions.",
    image: "/assets/verior.png",
    createdAt: "2024-04-01",
    lastActivity: "2025-04-25",
  },
  {
    id: 6,
    title: "Verior",
    subtitle:
      "Verior is a dynamic and innovative brand focused on delivering cutting-edge solutions.",
    image: "/assets/verior.png",
    createdAt: "2023-12-11",
    lastActivity: "2025-03-30",
  },
  {
    id: 7,
    title: "Verior",
    subtitle:
      "Verior is a dynamic and innovative brand focused on delivering cutting-edge solutions.",
    image: "/assets/verior.png",
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
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-xs text-white mt-2">{subtitle}</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          {/* Edit Button */}
          <button className="flex items-center gap-2 bg-darkGreen text-lightGreen px-6 py-2 rounded-lg text-sm">
            <img src="/assets/edit.svg" alt="" srcset="" />
            Edit
          </button>

          {/* Delete Button */}
          <button className="flex items-center gap-2 bg-darkRed text-redColor  px-6 py-2 rounded-lg text-sm ">
            <img src="/assets/delete.svg" alt="" srcset="" />
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
      <table className="min-w-[1000px] w-full table-auto border-collapse text-left text-sm text-white">
        <thead>
          <tr className="bg-lightGray text-white">
            <th className="px-8 py-2">Image</th>
            <th className="px-8 py-2">Title</th>
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
              <td className="px-4 py-3">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-10 h-12 object-contain"
                />
              </td>
              <td className="px-10 py-3 text-sm whitespace-nowrap">{card.title}</td>
              <td className="px-10 py-3 text-sm">{card.subtitle}</td>
              <td className="px-10 py-3 whitespace-nowrap">{card.createdAt}</td>
              <td className="px-10 py-3 whitespace-nowrap">{card.lastActivity}</td>
              <td className="px-10 py-3 flex gap-2 whitespace-nowrap">
                <button className="flex items-center gap-1 bg-darkGreen text-lightGreen w-24 px-4 py-2 rounded-lg text-sm">
                  <img src="/assets/edit.svg" alt="edit" />
                  Edit
                </button>
                <button className="flex items-center gap-1 bg-darkRed text-redColor w-24 px-3 py-2 rounded-lg text-sm">
                  <img src="/assets/delete.svg" alt="delete" />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export { GridView, TableView };
