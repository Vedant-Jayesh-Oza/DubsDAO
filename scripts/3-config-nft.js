import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xE5E5219134D8c78b5b5B79E62B9A65a6e0Ec20B8");

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