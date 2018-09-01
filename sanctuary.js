const {create, env} = require ('sanctuary');
const $ = require ('sanctuary-def');

//    PromiseType :: Type -> Type -> Type
const PromiseType = $.BinaryType
  ('my-package/Promise')
  ('https://example.com/my-package#Promise')
  (x => Object.prototype.toString.call (x) === '[object Promise]')
  (p => [])
  (p => []);

module.exports = create ({
  checkTypes: true,
  env: env.concat ([PromiseType ($.Unknown) ($.Unknown)]),
});
