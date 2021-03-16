try {
	!(function(i, s, o, g, r, a, m) {
    console.log('i',i);
    console.log('s',s);
    console.log('o',o);
    console.log('g',g);
    console.log('r',r);
    console.log('a',a);
    console.log('m',m);
    if (!!i.ba) return
    r = i.ba = function() {
      ;(r.queue = r.queue || []).push(arguments)
    }
    ;(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
    a.async = 1
    a.src = g
    m.parentNode.insertBefore(a, m)
  })(window, document, "script", "https://collect.blishtech.co/js/blish-analytic.js") 
  ba("init", "123-456-789")
  ba("sendPageview")
} catch (e) {
	console.log(e)
}
