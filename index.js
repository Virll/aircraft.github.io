var img = ["./src/1.jpg","./src/2.jpg","./src/3.jpg","./src/4.JPG","./src/5.JPG"];
var index = 1;
console.log(img)
$('#b_2').click(NextImg);
$('#b_1').click(BackImg);
function NextImg(){
    index +=1;
    $(".E_I_Main img").attr("src",img[index])
  $(".E_I_N_L img").attr("src",img[index-1])
  console.log(index);
  if(index >= img.length-1){
       index = 0
  }
  $(".E_I_N_R img").attr("src",img[index+1])
  console.log(index);
}
function BackImg(){
    index -=1;  
    $(".E_I_Main img").attr("src",img[index])
    $(".E_I_N_R img").attr("src",img[index+1])
    console.log(index);
    if(index <= 0){
        index = img.length;
    }
    $(".E_I_N_L img").attr("src",img[index-1])
    console.log(index);
}