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

        objectItems
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
            var sisContent = document.getElementById("sis-coentet");
            var sisCheckbox = document.getElementById("sis-checkbox");

            $(".product-class").click(function(){
                $("#sis-image").empty();
                
                for(i=0; i< productC.length; i++){
                        console.log(bannerProduct[i]);
                        console.log(productC[i]);
                        bannerProduct[i].forEach((product) =>{
                            sisImage.append(
                                "<figure class='text-center mx-auto mt-1'><img src='"+ product.image +"' alt=''></figure>"
                                );
                        });
                   
                };
                
            }); 
        };

    // function selectBox(){
    //     var productC = document.getElementsByClassName("product-class");
    //     var sis = document.getElementById("sis");
    //     var sisImage = document.getElementById("sis-image");
    //     var sisTitle = document.getElementById("sis-title");
    //     var sisContent = document.getElementById("sis-coentet");
    //     var sisCheckbox = document.getElementById("sis-checkbox");
    //     for(i=0; i< productC.length; i++){
    //     productC[i].addEventListener("click", function(){
    //         $("#sis-image").empty();
    //             bannerProduct[i].forEach((item) => {
    //                     sisImage.append(
    //                         "<figure class='text-center mx-auto mt-1'><img src='"+ item.image +"' alt=''></figure>"
    //                     );
                    
    //             });
    //         });
            
    //     };
    // };
    // selectBox(); 

    



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