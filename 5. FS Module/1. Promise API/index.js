import * as fs from "fs/promises";

// creating Directory / Foldar
try {
  await fs.mkdir("D:\\nodes\\sagar");
  console.log("Directory created ...");
} catch (error) {
  console.log(Error);
}
