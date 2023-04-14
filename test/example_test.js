QUnit.module('example');

QUnit.test('one equals one', assert => {
  assert.equal(1, 1);
});

QUnit.test('one not equals two', assert => {
    assert.notEqual(1, 2);
  });
  