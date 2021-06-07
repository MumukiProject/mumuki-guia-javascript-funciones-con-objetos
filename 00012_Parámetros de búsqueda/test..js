describe("", function() {
  it("Si hacemos  ('http://www.exercises.com?keyword=objects&language=javascript&level=intermediate') el keyword es objects", function() {
    let resultado =  parseQueryParams("http://www.exercises.com?keyword=objects&language=javascript&level=intermediate");
    assert.equal(resultado.keyword, 'objects');
  })
  it("Si hacemos  ('http://www.exercises.com?keyword=objects&language=javascript&level=intermediate') el language es javascript", function() {
    let resultado =  parseQueryParams("http://www.exercises.com?keyword=objects&language=javascript&level=intermediate");
    assert.equal(resultado.language, 'javascript');
  })
  it("Si hacemos  ('http://www.exercises.com?keyword=objects&language=javascript&level=intermediate') el level es intermediate", function() {
    let resultado =  parseQueryParams("http://www.exercises.com?keyword=objects&language=javascript&level=intermediate");
    assert.equal(resultado.level, 'intermediate');
  })
});

describe("", function() {
  it("Si hacemos  ('http://www.exercises.com?keyword=functional&language=haskell&level=advanced') el keyword es objects", function() {
    let resultado =  parseQueryParams("http://www.exercises.com?keyword=functional&language=haskell&level=advanced");
    assert.equal(resultado.keyword, 'functional');
  })
  it("Si hacemos  ('http://www.exercises.com?keyword=functional&language=haskell&level=advanced') el language es haskell", function() {
    let resultado =  parseQueryParams("http://www.exercises.com?keyword=functional&language=haskell&level=advanced");
    assert.equal(resultado.language, 'haskell');
  })
  it("Si hacemos  ('http://www.exercises.com?keyword=functional&language=haskell&level=advanced') el level es advanced", function() {
    let resultado =  parseQueryParams("http://www.exercises.com?keyword=functional&language=haskell&level=advanced");
    assert.equal(resultado.level, 'advanced');
  })
});

