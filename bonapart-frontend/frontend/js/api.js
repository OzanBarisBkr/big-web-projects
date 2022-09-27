$(document).ready(function(){

    var objectItems =
        [
            {
                image: "/frontend/icons/settings-icon.png",
                content:"Yakıt sistemi ürün grubunda ticari araçlar için aşağıdaki başlıca parçaları iş ortaklarına sunmaktadır.",
                check1: "Enjektör",
                check2: "Enjektör Memesi",
                check3: "Yakıt Filtresi",
                check4: "Yakıt Borusu",
                check5: "Yakıt Deposu",
                check6: "Depo Kapağı",
                check7: "Hırsızlık Önleyici Aleti",
                check8: "Yakıt Besleme Pompası",
                check9: "Taşırma Valfi",
                check10: "Su Ayırıcı",
                check11: "Kartuş",
                check12: "Sensör"
            },
            {
                image: "/frontend/images/yakit-sistemi-icon.png",
                content:"Yakıt sistemi ürün grubunda ticari araçlar için aşağıdaki başlıca parçaları iş ortaklarına sunmaktadır.",
                check1: "Enjektör",
                check2: "Enjektör Memesi",
            },
            {
                image: "/frontend/icons/settings-icon.png",
                content:"Yakıt sistemi ürün grubunda ticari araçlar için aşağıdaki başlıca parçaları iş ortaklarına sunmaktadır.",
                check1: "Enjektör",
                check2: "Enjektör Memesi",
            },
            {
                image: "/frontend/icons/settings-icon.png",
                content:"Yakıt sistemi ürün grubunda ticari araçlar için aşağıdaki başlıca parçaları iş ortaklarına sunmaktadır.",
                check1: "Enjektör",
                check2: "Enjektör Memesi",
            },
            {
                image: "/frontend/icons/settings-icon.png",
                content:"Yakıt sistemi ürün grubunda ticari araçlar için aşağıdaki başlıca parçaları iş ortaklarına sunmaktadır.",
                check1: "Enjektör",
                check2: "Enjektör Memesi",
            },
            {
                image: "/frontend/icons/settings-icon.png",
                content:"Yakıt sistemi ürün grubunda ticari araçlar için aşağıdaki başlıca parçaları iş ortaklarına sunmaktadır.",
                check1: "Enjektör",
                check2: "Enjektör Memesi",
            },
            {
                image: "/frontend/icons/settings-icon.png",
                content:"Yakıt sistemi ürün grubunda ticari araçlar için aşağıdaki başlıca parçaları iş ortaklarına sunmaktadır.",
                check1: "Enjektör",
                check2: "Enjektör Memesi",
            },
            {
                image: "/frontend/icons/settings-icon.png",
                content:"Yakıt sistemi ürün grubunda ticari araçlar için aşağıdaki başlıca parçaları iş ortaklarına sunmaktadır.",
                check1: "Enjektör",
                check2: "Enjektör Memesi",
            },
            {
                image: "/frontend/icons/settings-icon.png",
                content:"Yakıt sistemi ürün grubunda ticari araçlar için aşağıdaki başlıca parçaları iş ortaklarına sunmaktadır.",
                check1: "Enjektör",
                check2: "Enjektör Memesi",
            },
            {
                image: "/frontend/icons/settings-icon.png",
                content:"Yakıt sistemi ürün grubunda ticari araçlar için aşağıdaki başlıca parçaları iş ortaklarına sunmaktadır.",
                check1: "Enjektör",
                check2: "Enjektör Memesi",
            }
        ];

        //objectItems
        var bannerProduct = Object.keys(objectItems).map(function(key) {
        return [objectItems[key]];
    });
        console.log(typeof(bannerProduct));
        console.log(bannerProduct);
    
        
        deneme();
        function deneme(){
            var productC = document.getElementsByClassName("product-class");

            var sis = document.getElementById("sis");
            var sisImage = document.getElementById("sis-image");
            var sisTitle = document.getElementById("sis-title");
            var sisContent = document.getElementById("sis-content");
            var sisCheckbox = document.getElementById("sis-checkbox");

            $(".product-class").click(function(){
                $("#sis").empty();
                
                var index = $(this).attr("data-slick-index");
                $("#sis").append("<div class='container product-search-area mx-auto bor-15'> <div class='row mb-3 ' > <div class='col-1 pe-0' id='sis-image'> <figure class='text-center mx-auto mt-1'><img src='"+ objectItems[index].image +"' alt=''></figure> </div><div class='col-11 ps-0'> <h3 class='b-red-1' id='sis-title'>TÜM ÜRÜNLERDE ARA</h3> <span id='sis-content'>"+ objectItems[index].content +"</span> <a class='float-end' href='#'>TÜMÜ</a> </div></div><div class='bordered'></div><div class='row check-product-item-area'> <div class='col-12 d-flex align-items-center flex-wrap justify-content-center ' id='sis-checkbox'> <input type='checkbox' class='check-product-item' id='check-product-1'> <label for='check-product-1'>"+ objectItems[index].check1 +"</label> <input type='checkbox' class='check-product-item' id='check-product-2'> <label for='check-product-2'>"+ objectItems[index].check2 +"</label> <input type='checkbox' class='check-product-item' id='check-product-3'> <label for='check-product-3'>"+ objectItems[index].check3 +"</label> <input type='checkbox' class='check-product-item' id='check-product-4'> <label for='check-product-4'>"+ objectItems[index].check4 +"</label> <input type='checkbox' class='check-product-item' id='check-product-5'> <label for='check-product-5'>"+ objectItems[index].check5 +"</label> <input type='checkbox' class='check-product-item' id='check-product-6'> <label for='check-product-6'>"+ objectItems[index].check6 +"</label> <input type='checkbox' class='check-product-item' id='check-product-7'> <label for='check-product-7'>"+ objectItems[index].check7 +"</label> <input type='checkbox' class='check-product-item' id='check-product-8'> <label for='check-product-8'>"+ objectItems[index].check8 +"</label> <input type='checkbox' class='check-product-item' id='check-product-9'> <label for='check-product-9'>"+ objectItems[index].check9 +"</label> <input type='checkbox' class='check-product-item' id='check-product-10'> <label for='check-product-10'>"+ objectItems[index].check10 +"</label> <input type='checkbox' class='check-product-item' id='check-product-11'> <label for='check-product-11'>"+ objectItems[index].check11 +"</label> <input type='checkbox' class='check-product-item' id='check-product-12'> <label for='check-product-12'>"+ objectItems[index].check12 +"</label> </div></div><div class='row '> <div class='col-md-10 offset-md-1'> <div class='row'> <div class='col-md-4 order-2 order-md-1 select-box p-0'> <select class='form-select' aria-label='Default select example'> <option selected>Araç Markası seçiniz</option> <option value='1'>Maserati</option> <option value='2'>Porche</option> <option value='3'>Murat 131</option> </select> </div><div class='col-md-5 order-1 order-md-2 select-box'> <input type='text' placeholder='OEM No, Ürün Adını, Stok kodu ' name='car-search' id='car-search'> </div><div class='col-md-2 order-3 select-box p-0 mx-0'> <a href='#' >HEMEN ARA</a> </div></div></div></div></div>");
                   
            }); 
        };

    

    



    var MostPopProducts =[
        {
            image: "/frontend/images/most-1.png",
            brand: "DAF",
            cat: "STEERING",
            title: "REAR LAMP COVER SCANIA P/R/4 SERIES",
            oem: "1695567",
            producer: "BOSCH"
        },
        {
            image: "/frontend/images/most-2.png",
            brand: "baris",
            cat: "STEERING",
            title: "REAR LAMP COVER SCANIA P/R/4 SERIES",
            oem: "1695567",
            producer: "BOSCH"
        },
        {
            image: "/frontend/images/most-3.png",
            brand: "baris",
            cat: "STEERING",
            title: "REAR LAMP COVER SCANIA P/R/4 SERIES",
            oem: "1695567",
            producer: "BOSCH"
        },
        {
            image: "/frontend/images/most-1.png",
            brand: "baris",
            cat: "STEERING",
            title: "REAR LAMP COVER SCANIA P/R/4 SERIES",
            oem: "1695567",
            producer: "BOSCH"
        }
    ];
    var MostSearchProducts =[
        {
            image: "/frontend/images/most-1.png",
            brand: "DAF",
            cat: "STEERING",
            title: "REAR LAMP COVER SCANIA P/R/4 SERIES",
            oem: "1695567",
            producer: "BOSCH"
        },
        {
            image: "/frontend/images/most-2.png",
            brand: "baris",
            cat: "STEERING",
            title: "REAR LAMP COVER SCANIA P/R/4 SERIES",
            oem: "1695567",
            producer: "BOSCH"
        },
        {
            image: "/frontend/images/most-3.png",
            brand: "baris",
            cat: "STEERING",
            title: "REAR LAMP COVER SCANIA P/R/4 SERIES",
            oem: "1695567",
            producer: "BOSCH"
        },
        {
            image: "/frontend/images/most-1.png",
            brand: "baris",
            cat: "STEERING",
            title: "REAR LAMP COVER SCANIA P/R/4 SERIES",
            oem: "1695567",
            producer: "BOSCH"
        }
    ];
    

    var mostPop= $("#most-populer-items");
    var mostSearch= $("#most-search-items");
        
    MostPopProducts.forEach((product) =>{
        mostPop.append(
            "<div class='most-card'><figure class='text-center mx-auto'><img src='"+ product.image +"' class='w-100 ' alt=''></figure><div class='brands d-flex justify-content-between'><span>"+ product.brand +"</span><span>"+ product.cat +"</span></div><div class='card-border'></div><div class='card-name'><h5>"+ product.title +"</h5></div><div class='row brand-id-table'><div class='col-4'><span class='brand-oem'>OEM</span></div><div class='col-5'><span class='brand-id'>: "+ product.oem +"</span></div><div class='col-4'><span class='brand-producer'>ÜRETİCİ</span></div><div class='col-5'><span class='brand-name'>: "+ product.producer +"</span></div></div><button class='button add-to-card mt-auto align-self-center' onclick=''>SEPETE EKLE</button></div>"
            );
    });

    MostSearchProducts.forEach((product) =>{
        mostSearch.append(
            "<div class='most-card'><figure class='text-center mx-auto'><img src='"+ product.image +"' class='w-100 ' alt=''></figure><div class='brands d-flex justify-content-between'><span>"+ product.brand +"</span><span>"+ product.cat +"</span></div><div class='card-border'></div><div class='card-name'><h5>"+ product.title +"</h5></div><div class='row brand-id-table'><div class='col-4'><span class='brand-oem'>OEM</span></div><div class='col-5'><span class='brand-id'>: "+ product.oem +"</span></div><div class='col-4'><span class='brand-producer'>ÜRETİCİ</span></div><div class='col-5'><span class='brand-name'>: "+ product.producer +"</span></div></div><button class='button add-to-card mt-auto align-self-center' onclick=''>SEPETE EKLE</button></div>"
            );
    });




}); //  document ready end