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

describe("", function() {
  let resultado =  parseQueryParams("http://www.exercises.com?keyword=functional&language=haskell&level=advanced");
  it("Si hacemos  ('http://www.exercises.com?keyword=functional&language=haskell&level=advanced') el keyword es objects", function() {
    assert.equal(resultado.keyword, 'functional');
  })
  it("Si hacemos  ('http://www.exercises.com?keyword=functional&language=haskell&level=advanced') el language es haskell", function() {
    assert.equal(resultado.language, 'haskell');
  })
  it("Si hacemos  ('http://www.exercises.com?keyword=functional&language=haskell&level=advanced') el level es advanced", function() {
    assert.equal(resultado.level, 'advanced');
  })
});

