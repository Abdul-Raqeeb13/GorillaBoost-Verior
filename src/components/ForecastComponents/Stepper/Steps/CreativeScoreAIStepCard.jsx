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

    const nav = useNavigate()
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
      // Reset form
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
    <div className="mt-6 space-y-10">
      {/* Photo Ads Row (includes Create button) */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Photo Ads</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Create Photo Ad */}
          <div
            className="flex flex-col items-center justify-center cursor-pointer  bg-lightGray p-5 text-white text-center"
            onClick={() => setIsOpen(true)}
          >
            <img src="/assets/addicon.png" className="w-24 h-24" alt="Add" />
            <h3 className="text-lg font-semibold mt-2">Create Photo Ad</h3>
            <p className="text-sm text-gray-400">Start a new photo ad</p>
          </div>

          {/* Render Photo Cards */}
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-lightGray rounded-lg flex flex-col">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-40 object-cover rounded-tl-lg rounded-tr-lg"
              />
              <div className="p-4 text-white">
                <h2 className="text-lg font-semibold break-words">{proj.title}</h2>
                <p className="text-sm mt-3 text-paraTextColor break-words">{proj.subtitle}</p>
                <p className="text-xs text-gray-400 mt-2">{proj.date}</p>
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


         <Button variant="gradient" className='ml-1' color="red" onClick={()=>{nav("/forecast/compliancechecker")}}>
            Move to next page
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default Cards;
