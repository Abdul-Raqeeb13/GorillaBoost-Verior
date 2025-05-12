import React, { useState } from 'react';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Input,
} from "@material-tailwind/react";

function Cards() {
  const [isOpen, setIsOpen] = useState(false);
  const [projects, setProjects] = useState([]); // Photo ads
  const [videos, setVideos] = useState([]);     // Video ads
  const [form, setForm] = useState({
    image: '',
    title: '',
    subtitle: '',
    date: new Date().toISOString().split('T')[0],
  });
  const [isVideo, setIsVideo] = useState(false); // Toggle between image/video

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
      if (isVideo) {
        setVideos([...videos, newEntry]);
      } else {
        setProjects([...projects, newEntry]);
      }
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
            className="flex flex-col items-center justify-center cursor-pointer rounded-xl bg-lightGray p-5 text-white text-center"
            onClick={() => { setIsOpen(true); setIsVideo(false); }}
          >
            <img src="./assets/addicon.png" className="w-24 h-24" alt="Add" />
            <h3 className="text-lg font-semibold mt-2">Create Photo Ad</h3>
            <p className="text-sm text-gray-400">Start a new photo ad</p>
          </div>

          {/* Render Photo Cards */}
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-lightGray rounded-lg flex flex-col">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-40 object-cover"
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

      {/* Video Ads Row (separate line) */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Video Ads</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Create Video Ad */}
          <div
            className="flex flex-col items-center justify-center cursor-pointer rounded-xl bg-lightGray p-5 text-white text-center"
            onClick={() => { setIsOpen(true); setIsVideo(true); }}
          >
            <img src="./assets/addicon.png" className="w-24 h-24" alt="Add" />
            <h3 className="text-lg font-semibold mt-2">Create Video Ad</h3>
            <p className="text-sm text-gray-400">Start a new video ad</p>
          </div>

          {/* Render Video Cards */}
          {videos.map((vid, idx) => (
            <div key={idx} className="bg-lightGray rounded-lg flex flex-col">
              <video
                src={vid.image}
                controls
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-white">
                <h2 className="text-lg font-semibold break-words">{vid.title}</h2>
                <p className="text-sm mt-3 text-paraTextColor break-words">{vid.subtitle}</p>
                <p className="text-xs text-gray-400 mt-2">{vid.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dialog for Creating Ad */}
      <Dialog open={isOpen} handler={() => setIsOpen(false)}>
        <DialogHeader>{isVideo ? "Create New Video Ad" : "Create New Photo Ad"}</DialogHeader>
        <DialogBody className="flex flex-col gap-4">
          <input
            type="file"
            accept={isVideo ? "video/*" : "image/*"}
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
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default Cards;
