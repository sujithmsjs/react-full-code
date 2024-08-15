import React, { useState, useEffect } from "react";

const MyModal = ({ isOpen, onClose, data }) => {
  console.info(data);
  return (
    <div className="modal">
      <div className="modal-content">
        <pre>{JSON.stringify(data, null, 5)}</pre>
      </div>
    </div>
  );
};

export default MyModal;
