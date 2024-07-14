
document.querySelectorAll(".menu a").forEach(function (link) {
    link.addEventListener("click", function () {
      // console.log('hello');
      document.querySelector(".menu .active").classList.remove("active");
      link.classList.add("active");
  
      const category = link.getAttribute("data-category");
      console.log(category);
      getCategory();
    });
  });
  


 
  
  //https://www.themealdb.com/api/json/v1/1/search.php?s//home
  //https://www.themealdb.com/api/json/v1/1/categories.php//category
  
  async function getHome() {
    let data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s"
    );
    let result = await data.json();
  //   console.log(result);
  displayHome(result.home);
  }
  
  
  
  function displayHome(arr) {
    let cartona = ``;
    for (let i = 0; i < arr.length; i++) {
      cartona += `
      
           <div class="col-md-3">
  
                        <div  class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                            <img class="w-100" src="${arr[i].strMealThumb}"  height="200" alt="" srcset="">
                            <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                                <h3>${arr[i].strMeal}</h3>
                            </div>
                      </div>
          </div> 
      `
    }
    document.getElementById('demo').innerHTML=cartona
  }
  



  
  //category
  async function getCategory() {
    let data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    let result = await data.json();
  //   console.log(result);
    display(result.categories);
  }
  
  
  
  function display(data) {
    let cartona = ``;
    for (let i = 0; i < data.length; i++) {
      cartona += `
      
           <div class="col-md-3">
  
                        <div  class="meal position-relative  overflow-hidden rounded-2 cursor-pointer">
                            <img class="w-100" src="${data[i].strCategoryThumb}"  height="200" alt="" srcset="">
                            <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                                <h3>${data[i].strCategory}</h3>
                            </div>
                      </div>
          </div> 
      `
    }
    document.getElementById('demo').innerHTML=cartona
  }
  





  //loader
  $('#boxIcon').on('click',function(){
     let left = $("#sideBox").css('left')
     console.log(left);
      let width=$('#boxMenu').width()
      if (left == "0px"){
          $('#sideBox').animate({left:-width},1000)
      }else{
          $('#sideBox').animate({left:"0px"},1000)  
      }
     
  })
  
  $(function(){
      $('.loader').fadeOut(1000,function(){
          $('#loading').fadeOut(500,function(){
              $('body').css('overflow','auto')
          })
      })
  })
  