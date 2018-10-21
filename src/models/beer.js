const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request.js')

const Beer = function (){
  this.data = []
  this.beerList = []
}

Beer.prototype.getData = function () {
  const url = "https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6";
  const request = new Request(url)
  request.get().then((data) => {
    this.data = data
    // console.log(data);
    PubSub.publish('Beer:beer-display-ready', data)
  })
};

Beer.prototype.toggle = function () {
  const moreInfo = document.getElementById('#toggle-info')
  if(moreInfo.style.display === "none"){
    moreInfo.style.display === "block";
  }else{
    moreInfo.style.display === "none";
  }
};




module.exports = Beer;
