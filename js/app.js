var initialCats = [
			{
				clickCount : 0,
				name : 'Tabby',
				imgSrc : 'img/cat1.jpg',
				imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
        nicknames:[{"nickname":"koko"},{"nickname":"lolo"},{"nickname":"louza"}]
			},
			{
				clickCount : 0,
				name : 'Tiger',
				imgSrc : 'img/cat2.jpg',
				imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
        nicknames:[{"nickname":"tiger"}]
			},
			{
				clickCount : 0,
				name : 'Scaredy',
				imgSrc : 'img/cat3.jpg',
				imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
        nicknames:[{"nickname":"Scaredy"}]
			},
			{
				clickCount : 0,
				name : 'Shadow',
				imgSrc : 'img/cat4.jpg',
				imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
        nicknames:[{"nickname":"shadowy"}]
			},
			{
				clickCount : 0,
				name : 'Sleepy',
				imgSrc : 'img/cat5.jpg',
				imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
        nicknames:[{"nickname":"sleepy"}]
			}
]

var Cat = function(data){

      this.clickCounter = ko.observable(data.clickCount);
      this.name = ko.observable(data.name);
      this.imgSrc = ko.observable(data.imgSrc);
      this.level = ko.observable(data.level);
      this.nicknames = ko.observableArray(data.nicknames);

      this.catLevel = ko.computed(function(){
        if(this.clickCounter()===10){
          this.level("Infant");
        }
        else if(this.clickCounter()===15){
          this.level("Teen");
        }
        else if(this.clickCounter()===30){
          this.level("Adult");
        }
        else if(this.clickCounter()===40){
          this.level("Ninja");
        }
        return this.level;
      },this);
};
var ViewModel = function(){
    var self = this;
    this.catList = ko.observableArray([]);
    initialCats.forEach(function(catItem){
      self.catList.push( new Cat(catItem) );
    });

    this.currentCat = ko.observable( self.catList()[0]);

    this.catSelector = function(cat){
      self.currentCat(cat);
    }
    this.incrementCounter = function(){
      this.clickCounter(this.clickCounter() + 1);
    };
};

ko.applyBindings(new ViewModel());
