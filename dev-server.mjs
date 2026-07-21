import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
const root = new URL("./site/", import.meta.url).pathname;
const types={".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8",".svg":"image/svg+xml",".png":"image/png",".xml":"application/xml; charset=utf-8",".txt":"text/plain; charset=utf-8",".webmanifest":"application/manifest+json"};
createServer(async(req,res)=>{try{let path=decodeURIComponent(req.url.split("?")[0]);let file=join(root,normalize(path));if(path.endsWith("/"))file=join(file,"index.html");try{if((await stat(file)).isDirectory())file=join(file,"index.html")}catch{};const data=await readFile(file);res.writeHead(200,{"Content-Type":types[extname(file)]||"application/octet-stream"});res.end(data)}catch{const data=await readFile(join(root,"404.html"));res.writeHead(404,{"Content-Type":"text/html; charset=utf-8"});res.end(data)}}).listen(4173,()=>console.log("http://localhost:4173"));
