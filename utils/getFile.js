import fs from "fs";

const findFile = async (filePath = "src") => {
  try {
    const data = await fs.readdirSync(`./${filePath}`);
    const result = [];
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const targetFilePath = `${filePath}/${item}`;
      // 如果式src/index.ts 直接跳过
      if (targetFilePath === "src/index.ts") {
        continue;
      }
      // 如果式以.ts文件为结尾，则认为是文件
      if (item.endsWith(".ts")) {
        result.push(targetFilePath);
      } else {
        // 否则就是文件夹
        const r = await findFile(`${filePath}/${item}`);
        result.push(r);
      }
    }
    return result;
  } catch (err) {
    return [];
  }
};

const filePath = await findFile();
let utilsFilePath = filePath.flat(Infinity);

const writeFileData = `const utilsFilePath = ${JSON.stringify(utilsFilePath)};export default utilsFilePath `;

fs.writeFile("./utils/file.js", writeFileData, () => {});
