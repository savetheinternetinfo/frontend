const fs = require("fs-extra");
const finalObject = { translation: {} };

const outputPath = "./languages.json";
if (fs.existsSync(outputPath)) {
  fs.removeSync(outputPath);
}

const run = async () => {
  const files = await fs.readdir("./");
  const jsonFiles = files.filter(file => file.includes(".json"));
  for (let json of jsonFiles) {
    const jsonContent = await fs.readFile(`./${json}`, "utf-8");
    const parsedContent = JSON.parse(jsonContent);
    const [keyName] = json.split(".");
    finalObject.translation[keyName] = parsedContent;
  }
  await fs.writeFile(outputPath, JSON.stringify(finalObject));
};

run();
