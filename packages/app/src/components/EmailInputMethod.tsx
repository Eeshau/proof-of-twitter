// import { useState } from "react";
// import { Button, OutlinedButton } from "./Button";

// const EmailInputMethod = ({
//   onClickGoogle,
//   onClickEMLFile,
// }: {
//   onClickGoogle: () => void;
//   onClickEMLFile: () => void;
// }) => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         gap: 16,
//         alignItems: "center",
//       }}
//     >
//       <Button onClick={onClickGoogle}>Sign in with Google</Button>
//       or
//       <OutlinedButton
//         data-testid="upload-email-eml-file-button"
//         onClick={() => {
//           onClickEMLFile();
//         }}
//       >
//         Upload email .eml file{" "}
//       </OutlinedButton>
//     </div>
//   );
// };

// export default EmailInputMethod;


import { useState } from "react";
import { Button, OutlinedButton } from "./Button";

const EmailInputMethod = ({
  onClickGoogle,
  onClickEMLFile,
  highlighted = false,
}: {
  onClickGoogle: () => void;
  onClickEMLFile: () => void;
  highlighted?: boolean;
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 16,
        alignItems: "center",
      }}
    >
      <Button onClick={onClickGoogle} highlighted={highlighted}>Sign in with Google</Button>
      or
      <OutlinedButton
        highlighted={highlighted}
        data-testid="upload-email-eml-file-button"
        onClick={() => {
          onClickEMLFile();
        }}
      >
        Upload email .eml file{" "}
      </OutlinedButton>
    </div>
  );
};

export default EmailInputMethod;

