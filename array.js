fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => setProductCard(json))
    .catch(err => console.log(err));
