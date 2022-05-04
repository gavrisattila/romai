
  QUnit.module('romai', function() {
    QUnit.test('Létezik-e a romai?', function(assert) {
      assert.ok(romai,"létezik a romai");
    });
    QUnit.test('Függvény-e a romai?', function(assert) {
      assert.ok(typeof romai==="function","fv a romai");
    });
    QUnit.test('n=1', function(assert) {
      assert.equal(romai(1),"I");
    });
    QUnit.test('n=2', function(assert) {
      assert.equal(romai(2),"II");
    });
  });