import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { useState } from "react";

function PortalDemo() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h1>Portal Demo</h1>
      {/* ComponentA */}
      <div>
        {/* ComponentB */}
        <div
          style={{
            width: 100,
            height: 100,
            transform: "scale(1.1)",
          }}
        >
          {/* ComponentC */}
          <div>
            <div>
              <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                Modal Content
              </Modal>
              <Button onClick={() => setIsOpen(true)}>Open</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortalDemo;
