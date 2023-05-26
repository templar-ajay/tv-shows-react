import React from "react";
export default function Para({ children }) {
  return (
    <>
      <p className="disc" dangerouslySetInnerHTML={{ __html: children }}></p>
    </>
  );
}
