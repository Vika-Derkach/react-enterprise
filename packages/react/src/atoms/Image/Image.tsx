// import { Spacing } from "@ds.e/foundation";
import { Spacing } from "@ds.e/foundation";
import React from "react";
interface ImageProps {
  hexCode?: string;
  width?: keyof typeof Spacing;
  height?: keyof typeof Spacing;
  // width: string;
  // height: string;
}

const Image: React.FC<ImageProps> = ({
  hexCode,
  width = Spacing.sm,
  height = Spacing.sm,
}) => {
  const className = `dse-width-${width} dse-height-${height}`;

  return (
    <div>
      {" "}
      <img
        className={className}
        style={{
          backgroundColor: hexCode,
        }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/200px-Cat03.jpg"
        alt=""
      />
    </div>
  );
};

export default Image;
