import React, { useState } from "react";
import { ProjectCard } from "./projectCard";
import { Modal } from "../modal/modal";

export const ProjectBox = ({ projectsList }) => {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState(null);

  const toggleModal = () => {
    setShowModal((curr) => !curr);
  };

  const showContent = (project) => {
    setContent(project);
    toggleModal();
  };

  return (
    <div className="grid md:grid-cols-2 gap-5">
      {projectsList
        ? projectsList.map((project) => (
            <ProjectCard {...project} onClick={showContent} />
          ))
        : null}
      {showModal ? (
        <Modal onClose={() => toggleModal()} content={content} />
      ) : null}
    </div>
  );
};
