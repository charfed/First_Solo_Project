
$( document ).ready(function() {
    $("body").css({'background-color': '#d7d7d7 '})

    $("body").append(`
    <div class="topnav">
        <a href="#home" class="active" >Home</a>
        <a href="#footer">Contact</a>
        <input id = "search" type='text' placeholder=" ...seach ">
     </div>`
    )

    $("body").append(`
        <div id="footer">
        <div>Copyright © 2024 M.Char, Inc.</div>
        <div><img id='call' src='/imgs/call.gif'></div>
        <div>for contact +216 47 451 593</div>
        <div>email ybestWatches@gmail.com</div>
        </div>`
        )


var search = $("#search")

    search.on('keypress', function(event) {
        if (event.key === 'Enter') {
            var value = search.val().toLowerCase()
            var filteredWatches = filter(watches, function(el) {
                return el.brand.toLowerCase().includes(value) || el.house.toLowerCase().includes(value)
            })
            DisplayFilteredWatches(filteredWatches)
        }
    })
        
})


var watches = [{brand : 'Datejust 36',house : 'Rolex',img:'/imgs/1.png',price:23.995 ,stock :5},{brand : 'Datejust 41',house : 'Rolex',img:'/imgs/2.png',price:22.920,stock :2},{brand : 'Datejust Gold/Steel',house : 'Rolex',img:'/imgs/3.png',price:20.580,stock :7},{brand : 'Datejust Diamonds',house : 'Rolex',img:'/imgs/4.png',price:19.995,stock :0},{brand : 'Lady-Datejust',house : 'Rolex',img:'/imgs/5.png',price:25.995,stock :2},   {brand : 'Speedmaster Pro',house : 'Omega',img:'/imgs/6.png',price:7.995,stock :4},{brand : 'Speedmaster Reduce',house : 'Omega',img:'/imgs/7.png',price:5.495,stock :0},{brand : 'Speedmaster Race',house : 'Omega',img:'/imgs/8.png',price:11.205,stock :1},{brand : 'Speedmaster P54',house : 'Omega',img:'/imgs/9.png',price:4.875,stock :10},{brand : 'Speedmaster Vintage',house : 'Omega',img:'/imgs/10.png',price:13.875,stock :9},{brand : 'Rolay Oak SelfWind 41mn',house : 'Audemars Piguet',img:'/imgs/11.png',price:28.683,stock :5},{brand : 'Rolay Oak SelfWind 37mn',house : 'Audemars Piguet',img:'/imgs/12.png',price:29.995,stock :1},{brand : 'Rolay Oak Chronograph',house : 'Audemars Piguet',img:'/imgs/13.png',price:26.955,stock :2},{brand : 'Rolay Oak YellowGold',house : 'Audemars Piguet',img:'/imgs/14.png',price:13.050,stock :0},{brand : 'Rolay Oak Steel',house : 'Audemars Piguet',img:'/imgs/15.png',price:8.750,stock :3},{brand : 'Nautilus Steel 40mm',house : 'Patek Philippe',img:'/imgs/16.png',price:71.750,stock :1},{brand : 'Nautilus Moon phase',house : 'Patek Philippe',img:'/imgs/17.png',price:68.899,stock :2},{brand : 'Nautilus Chronograph',house : 'Patek Philippe',img:'/imgs/18.png',price:92.995,stock :2},{brand : 'Nautilus Ladies',house : 'Patek Philippe',img:'/imgs/19.png',price:57.495,stock :3},{brand : 'Nautilus White gold',house : 'Patek Philippe',img:'/imgs/20.png',price:37.729,stock :6},{brand : 'Nautilus 37mm',house : 'Patek Philippe',img:'/imgs/21.png',price:25.825,stock :4}]  

var cont = document.getElementById('container')
 


each(watches,function(el,i){
    cont.innerHTML+=`<div id ='items'>
  <div class='item'>${el.house}</div>
  <div class='item'>${el.brand}</div>
  <div class='item'><img src="${el.img}"></div>
  <div class='item'>$${el.price}</div>
  <div class='item'>${el.stock} in stock</div></div>`
})


// because I added the search in the Jquery ready function ... conflict in the time of execution so I added it to the the jQuerry

// var search = document.getElementById('search')

// search.addEventListener('keypress', function(event) {

//     if (event.key === 'Enter') {
  
//       var value = search.value.toLowerCase()
  
//       var filtredWatches = filter(watches,function(el) {
        
//         return el.brand.toLowerCase().includes(value) || el.house.toLowerCase().includes(value)
  
//       })
      
//       DisplayFilteredWatches(filtredWatches)

//     }
//   })

  
  function DisplayFilteredWatches(watches){
    cont.innerHTML = ''
   each(watches,function(el){
     
     cont.innerHTML+=`<div id ='items'>
     <div class='item'>${el.house}</div>
     <div class='item'>${el.brand}</div>
     <div class='item'><img src="${el.img}"></div>
     <div class='item'>$${el.price}</div>
     <div class='item'>${el.stock} in stock</div></div>`})
 
 } 




function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }
  
  function map(array, func) {
    var acc = [];
    each(array, function (element, i) {
      acc.push(func(element, i));
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function (element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }
