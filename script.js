var img = document.getElementById('img');

var slides = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUQ1cNbeznBgth_S-IEJ7YHGa631Sg3UrLeg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMdIOXxClz5UAzgDsymVnzSUEHHc7ZPs8z9g&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2001AbDzqLSxs2lyqh7oninL-qVivaCpgrA&s',
    'https://images.indianexpress.com/2018/08/polypharmacy-759.jpg?w=414'];
var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
}
setInterval(slider,2000);
