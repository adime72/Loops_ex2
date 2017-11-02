var tri_width=1

for (var tri_hight = 0; tri_hight < 5; tri_hight++) {
  var star = "";
  
  for (var tri_width = 0; tri_width <= tri_hight; tri_width++) {
    star += "*";

  }
  console.log(star);
}
tri_width=0
 star=""
while (tri_width<=5) {
 star=star+"*";
 tri_width=tri_width+1
    console.log(star);
}