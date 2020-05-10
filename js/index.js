var bannerph = new Array
(
"image/b1.jpg",
"image/b2.jpg",
"image/b3.jpg",
"image/b4.jpg",
"image/b5.jpg",
"image/b6.jpg",
)
var li = new Array
(
"image/li1.jpg",
"image/li2.jpg",
"image/li3.jpg",
"image/li4.jpg",
"image/li5.jpg",
"image/li6.jpg",
)
var knph = new Array
(
"image/KNIGHT2.png",
"image/KNIGHT.png",
)
var s49 = new Array
(
"image/049-1.png",
"image/049-2.png",
)
var nums =1;
var knnum =0;
var s49num =0;
setInterval("fort()",7000);
setInterval("kn()",10000);
setInterval("scp049ch()",500);
function mouseOver()
{
whoph.src="image/egg.png";
}

function mouseOut(){
whoph.src="image/who.jpg";
}

function fort()
{
  if(nums==6)
	nums=0;
  banner.src = bannerph[nums];  
  nums++;
}
function kn()
{
  if(knnum ==2)
	{
	 knnum=0;
	}
	knight.src= knph[knnum];
  knnum++;
}
function live(num)
{
  living.src = li[num];
}

function scp049ch()
{
  if(s49num ==2)
	{
	 s49num=0;
	}
	scp049.src = s49[s49num];
  s49num++;
}

