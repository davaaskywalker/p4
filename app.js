//Дэлгэцтэй ажиллах 
var uiController = (function () {

})();


//Санхүүтэй ажиллах
var financeController = (function () {

})();

//Програмын холбогч контролор
var appController = (function (uiController, financeController) {



    document.querySelector(".add__btn").addEventListener("click", function () {
        console.log("clicked..")
        //1 өгөгдлийг дэлгэцнээс авна
        //2 Олж авсан өгөгдлүүдээ санхүүгийн контролерт дамжуулж хадгална.
        //3 Олж авсан өгөгдөлөө вэб дээрээ гаргана
        //4 Төсвийг тооцно.
        //5. Эцсийн үлдэгдэл тооцно, дэлгэцэнд гаргана.
    })



    document.addEventListener("keypress", function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            console.log("clicked..")
        }
    });
})(
    uiController, financeController
);