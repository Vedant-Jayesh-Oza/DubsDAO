import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x303f08FeB8cF595910f6e96E9dc103C7483AA371");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Stephen Curry Three Pointer",
        description: "This NFT will give you access to DubsDAO!",
        image: readFileSync("scripts/assets/stephen.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();