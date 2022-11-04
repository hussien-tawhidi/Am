import React from "react";

export default function EndingPart({ endPointDataFile }) {
  return (
    <div className="para">
      {endPointDataFile.map((ending) => (
        <p key={ending.id}>{ending.para}</p>
      ))}
    </div>
  );
}
