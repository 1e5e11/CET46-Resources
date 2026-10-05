import fs from 'node:fs/promises';
import crypto from 'node:crypto';
const c=JSON.parse(await fs.readFile(new URL('../资料清单.json',import.meta.url),'utf8'));
let ok=0;
for(const f of c.files){const b=await fs.readFile(new URL('../'+f.local_path,import.meta.url));if(b.length!==f.bytes||crypto.createHash('sha256').update(b).digest('hex')!==f.sha256)throw Error('文件校验失败：'+f.local_path);ok++;}
console.log('全部'+ok+'份资料校验通过。');
