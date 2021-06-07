describe("", function() {
  let resultado =  parseQueryParams("http://www.exercises.com?keyword=objects&language=javascript&level=intermediate");
  it("Si hacemos  ('http://www.exercises.com?keyword=objects&language=javascript&level=intermediate') el keyword es objects", function() {
    assert.equal(resultado.keyword, 'objects');
  })
  it("Si hacemos  ('http://www.exercises.com?keyword=objects&language=javascript&level=intermediate') el language es javascript", function() {
    assert.equal(resultado.language, 'javascript');
  })
  it("Si hacemos  ('http://www.exercises.com?keyword=objects&language=javascript&level=intermediate') el level es intermediate", function() {
    assert.equal(resultado.level, 'intermediate');
  })
});
