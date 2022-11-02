
let cacheNueva= caches.open("cacheNueva")

cacheNueva.then(cache=> cache.add("065_cache.html"))

cacheNueva.then(cache=> cache.addAll(["harina.html", "064_memoize2.html", "064_memoize2.js"]))

cacheNueva
  .then(cache=> cache.match("harina.html"))
  .then(cache=> console.log(cache))

//.then(cache=> cache.delete("harina.html"))

cacheNueva.then(response=> console.log(response.keys()))

cacheNueva.then(cache=>{
  fetch("065_cache.html")
  .then(update=> cache.put("065_cache.html", update))
  })