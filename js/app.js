'use strict';
function Image(url,title,description,keyword,horns){
  this.url=url;
  this.title=title;
  this.description=description;
  this.keyword=keyword;
  this.horns=horns;
}

$.ajax('../data/page-1.json')
  .then(data=>{
    // console.log(data);
    data.forEach((val)=>{
      let image= new Image(val.image_url,val.title,val.description,val.keyword,val.horns);
      //   console.log(image);
      image.render();
    });
  });


Image.prototype.render = function(){
  let imageTemplate= $('#photo-template').first().clone();
  imageTemplate.find('h2').text(this.title);

  imageTemplate.find('img').attr('src',this.url);

  imageTemplate.find('p').text(this.description);
  $('main').append(imageTemplate);

  console.log(imageTemplate.html());
};
