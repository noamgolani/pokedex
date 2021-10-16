var fs = require("fs");

fs.readFile("./names.html", (err, content) => {
  if (err) console.log(err);
  const data = content.toString();
  const ancors = data.match(/<td><a href=".+" title=".+">(.+)<\/a>/g);
  const names = ancors.map((a) => {
    const name = a.replace(/<td><a href=".+" title=".+">/, "");
    return name.replace("</a>", "");
  });

  const jsonString = JSON.stringify(names);
  const jsString = `export default ${jsonString}`;
  fs.writeFile("./src/names.js", jsString, {}, (err) => {
    if (!err) console.log("Writen the names js");
  });
});
