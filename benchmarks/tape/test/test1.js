
const test = require('tape');
for (let i = 0; i < 8; i++) {
  test('test ' + i, function  (assert) {
    setTimeout(()=>{
      assert.ok(Math.random() * 100 > 5);
      assert.end();
    },40);
  });
}
