const myImg = document.createElement('img');

myImg.setAttribute(
  'src','https://1.bp.blogspot.com/-2L-yulnE3Ck/XXsx1Bi0TFI/AAAAAAAAZ3U/_7VgSTIz-cw00_22DITpjZNOTpAH8Xh2gCLcBGAsYHQ/s1600/0-happy-thanksgiving-clip-art.jpg'
);
myImg.style.height = '450px'; 
myImg.style.width = '550px';

const image = document.getElementById('image');
image.append(myImg);
