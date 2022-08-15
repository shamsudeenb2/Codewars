function namespace (root, path, value) {
    var fn = arguments.length < 3 ? get : set;
    
    return fn.apply(null, arguments);
  }
  
  function get (root, path) {
    return path.split(".").reduce(function (root, piece) {
      return root && root[piece];
    }, root);
  }
  
  function set (root, path, value) {
    var split = path.split(".")
      , last = split.pop()
      , nest;
  
    nest = split.reduce(function (root, piece) {
      return root[piece] || (root[piece] = {});
    }, root);
  
    return nest[last] = value;
  }