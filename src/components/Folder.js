import React from "react";
import { useState } from "react";
const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  if (explorer.isFolder) {
    return (
      <div>
        <span onClick={() => setExpand(!expand)}>
          {explorer.name}
          <br />
          <div
            style={{ display: expand ? "block" : "none", paddingLeft: "15px" }}
          >
            {explorer.items.map((exp) => {
              return <Folder key={exp.name} explorer={exp} />;
            })}
          </div>
        </span>
      </div>
    );
  } else {
    return (
      <span>
        {explorer.name}
        <br />
      </span>
    );
  }
};

export default Folder;
