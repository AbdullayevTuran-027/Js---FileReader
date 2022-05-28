const uploadArea = document.querySelector(".upload-area");
const galery = document.querySelector(".galery");
const uploadIcon = document.querySelector(".fa-upload");
const uploadInput = document.querySelector(".photo-upload input ");
let count = 0;
let imgArray = [];
let tru;
uploadIcon.addEventListener("click", (e) => {
  uploadInput.click();
});

uploadInput.addEventListener("change", function () {
  const reader = new FileReader();
  var filePath = uploadInput.value;

  // Allowing file type
  var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;

  if (!allowedExtensions.exec(filePath)) {
    alert("Yalnız şəkil yükləmək olar");
    fileInput.value = "";
    return false;
  } else {
    reader.addEventListener("load", () => {
      galery.innerHTML +=
        '<div class="col-4 galery-items" ><img src="' +
        reader.result +
        '" alt=""/><a href="' +
        reader.result +
        '" download>Download</a></div>';
    });
    reader.readAsDataURL(this.files[0]);
  }
});

uploadArea.addEventListener("dragover", (e) => e.preventDefault());
uploadArea.addEventListener("drop", (e) => {
   e.preventDefault();

  let fileReader = new FileReader();
  fileReader.readAsDataURL(e.dataTransfer.files[0]);
  let fileType = e.dataTransfer.files[0].type;

  fileReader.onload = function () {
    for (let index = 0; index < imgArray.length; index++) {
      if (imgArray[index] == fileReader.result) {
        tru = 1;
        break
      }
      else{
        tru = 0
      }
    }
    if (tru==undefined) {
      tru=0
    }
    if (
      tru==0 && (
      fileType == "image/jpeg" ||
      fileType == "image/png" ||
      fileType == "image/jpg" )
    ){
    galery.innerHTML +=
      '<div class="col-4 galery-items" ><img src="' +
      fileReader.result +
      '" alt=""/><a href="' +
      fileReader.result +
      '" download>Download</a></div>';
    imgArray[count] = fileReader.result;
    count++;
  }else {
    console.log("Yalnız Şəkil.(Təkrar şəkil olmaz!)");
    console.log(fileType)
    
  }
  
} 
});