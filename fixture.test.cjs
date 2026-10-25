const {test}=require('node:test'); const assert=require('node:assert/strict');
test('deterministic arithmetic',()=>assert.equal(19+23,42));
test('async scheduler',async()=>{await new Promise(r=>setTimeout(r,5));assert.ok(true)});
test('UTF-8 content',()=>assert.equal(Buffer.from('ação').toString(),'ação'));
