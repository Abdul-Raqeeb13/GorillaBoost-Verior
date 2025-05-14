import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Input,
} from "@material-tailwind/react";

function Cards() {
  const nav = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    image: '',
    title: '',
    subtitle: '',
    date: new Date().toISOString().split('T')[0],
  });

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setForm({ ...form, image: fileURL });
    }
  };

  const handleCreate = () => {
    if (form.title && form.subtitle && form.image) {
      const newEntry = { ...form };
      setProjects([...projects, newEntry]);
      setForm({
        image: '',
        title: '',
        subtitle: '',
        date: new Date().toISOString().split('T')[0],
      });
      setIsOpen(false);
    }
  };

  return (
    <div className="mt-6 ">
      {/* Photo Ads Row (includes Create button) */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Create Photo Ad Card */}
          <div
            className="flex flex-col items-center justify-center cursor-pointer bg-lightGray text-white text-center w-full h-[300px]  px-5 rounded-lg"
            onClick={() => setIsOpen(true)}
          >
            <img src="/assets/addicon.png" className="w-32 h-32" alt="Add" />
            <h3 className="text-24 font-semibold mt-2">Score Creatives</h3>
            <p className="text-14 font-medium text-paraTextColor">Evaluate your ad creatives now and unlock insights to boost performance.</p>
          </div>

          {/* Render Photo Cards */}
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-lightGray rounded-lg flex flex-col w-full h-[300px] overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-[180px] object-cover rounded-tl-lg rounded-tr-lg"
              />
              <div className="p-4 text-white flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-20 font-semibold break-words">{proj.title}</h2>
                  <p className="text-14 font-medium mt-3 text-paraTextColor break-words">{proj.subtitle}</p>
                </div>
                <p className="text-14 font-mediun mt-3">{proj.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dialog for Creating Ad */}
      <Dialog open={isOpen} handler={() => setIsOpen(false)}>
        <DialogHeader>Create New Photo Ad</DialogHeader>
        <DialogBody className="flex flex-col gap-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="border p-2 rounded"
          />
          <Input
            label="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <Input
            label="Subtitle"
            value={form.subtitle}
            onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
          />
          <Input
            label="Date"
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={() => setIsOpen(false)} className="mr-1">
            Cancel
          </Button>
          <Button variant="gradient" color="blue" onClick={handleCreate}>
            Create
          </Button>
          <Button
            variant="gradient"
            className="ml-1"
            color="red"
            onClick={() => {
              nav("/forecast/compliancechecker");
            }}
          >
            Move to next page
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default Cards;
