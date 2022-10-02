$(document).ready(function(){

    var objectItems =
        [
            {
                image: "./frontend/icons/settings-icon.png",
                content:"Motor sistemi ürün grubunda ticari araçlar için aşağıdaki başlıca parçaları iş ortaklarına sunmaktadır.",
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
                image: "./frontend/images/yakit-r.png",
                content:"Yakıt sistemi ürün grubunda ticari araçlar için aşağıdaki başlıca parçaları iş ortaklarına sunmaktadır.",
                check1: "Enjektör",
                check2: "Enjektör Memesi",
                check3: "Kartuş"
            },
            {
                image: "./frontend/images/egzoz-r.png",
                content:"Egzoz sistemi ürün grubunda ticari araçlar için aşağıdaki başlıca parçaları iş ortaklarına sunmaktadır.",
                check1: "Enjektör",
                check2: "Enjektör Memesi",
            },
            {
                image: "./frontend/images/sogutma-r.png",
                content:"Soğutma sistemi ürün grubunda ticari araçlar için aşağıdaki başlıca parçaları iş ortaklarına sunmaktadır.",
                check1: "Enjektör",
                check2: "Enjektör Memesi",
            },
            {
                image: "./frontend/images/elektrik-r.png",
                content:"Elektrik sistemi ürün grubunda ticari araçlar için aşağıdaki başlıca parçaları iş ortaklarına sunmaktadır.",
                check1: "Enjektör",
                check2: "Enjektör Memesi",
                check3: "We Are Electric"
            },
            {
                image: "./frontend/images/debriyaj-r.png",
                content:"Debriyaj sistemi ürün grubunda ticari araçlar için aşağıdaki başlıca parçaları iş ortaklarına sunmaktadır.",
                check1: "Enjektör",
                check2: "Enjektör Memesi",
                check3: "Stop Ettirmeden"
            },
            {
                image: "./frontend/images/aktarma-r.png",
                content:"Aktarma sistemi ürün grubunda ticari araçlar için aşağıdaki başlıca parçaları iş ortaklarına sunmaktadır.",
                check1: "Aktarma Faaliyetleri",
                check2: "Aktarma Sistemleri",
            },
            {
                image: "./frontend/images/saft-r.png",
                content:"Şaft sistemi ürün grubunda ticari araçlar için aşağıdaki başlıca parçaları iş ortaklarına sunmaktadır.",
                check1: "Dante Alighiari",
                check2: "İlahi Komedya",
            },
            {
                image: "./frontend/images/aks-r.png",
                content:"Aks & Dingil sistemi ürün grubunda ticari araçlar için aşağıdaki başlıca parçaları iş ortaklarına sunmaktadır.",
                check1: "Aks & Dingil",
                check2: "Dingil & Aks",
            },
            {
                image: "./frontend/images/suspansiyon-r.png",
                content:"Süspansiyon sistemi ürün grubunda ticari araçlar için aşağıdaki başlıca parçaları iş ortaklarına sunmaktadır.",
                check1: "Enjektör",
                check2: "Enjektör Memesi",
                check3: "Yakıt Borusu"
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
            var checkBoxVal = $(".check-product-item-area label");

            $(".product-class").click(function(){
                $("#sis").empty();
                
                var index = $(this).attr("data-slick-index");

                $("#sis").append("<div class='container product-search-area mx-auto bor-15'> <div class='row mb-3 first-row-element' > <div class='col-12 col-md-2 col-lg-1 pe-0 mb-4 mb-lg-0' id='sis-image'> <figure class='text-center mx-auto mt-1'><img src='"+ objectItems[index].image +"' alt=''></figure> </div><div class='col-12 col-md-10 col-lg-11 ps-0 text-center text-md-start'> <h3 class='b-red-1 mb-4 mb-md-0' id='sis-title'>TÜM ÜRÜNLERDE ARA</h3> <span id='sis-content'>"+ objectItems[index].content +"</span> <a class='float-md-end mt-3 mt-md-0' href='#'>TÜMÜ</a> </div></div><div class='bordered'></div><div class='row check-product-item-area'> <div class='col-12 d-flex align-items-center flex-wrap justify-content-center ' id='sis-checkbox'> <input type='checkbox' class='check-product-item' id='check-product-1'> <label for='check-product-1'>"+ objectItems[index].check1 +"</label> <input type='checkbox' class='check-product-item' id='check-product-2'> <label for='check-product-2'>"+ objectItems[index].check2 +"</label> <input type='checkbox' class='check-product-item' id='check-product-3'> <label for='check-product-3'>"+ objectItems[index].check3 +"</label> <input type='checkbox' class='check-product-item' id='check-product-4'> <label for='check-product-4'>"+ objectItems[index].check4 +"</label> <input type='checkbox' class='check-product-item' id='check-product-5'> <label for='check-product-5'>"+ objectItems[index].check5 +"</label> <input type='checkbox' class='check-product-item' id='check-product-6'> <label for='check-product-6'>"+ objectItems[index].check6 +"</label> <input type='checkbox' class='check-product-item' id='check-product-7'> <label for='check-product-7'>"+ objectItems[index].check7 +"</label> <input type='checkbox' class='check-product-item' id='check-product-8'> <label for='check-product-8'>"+ objectItems[index].check8 +"</label> <input type='checkbox' class='check-product-item' id='check-product-9'> <label for='check-product-9'>"+ objectItems[index].check9 +"</label> <input type='checkbox' class='check-product-item' id='check-product-10'> <label for='check-product-10'>"+ objectItems[index].check10 +"</label> <input type='checkbox' class='check-product-item' id='check-product-11'> <label for='check-product-11'>"+ objectItems[index].check11 +"</label> <input type='checkbox' class='check-product-item' id='check-product-12'> <label for='check-product-12'>"+ objectItems[index].check12 +"</label> </div></div><div class='row '> <div class='col-md-10 offset-md-1'> <div class='row'> <div class='col-lg-4 order-2 order-md-1 select-box p-0'> <select class='form-select' aria-label='Default select example'> <option selected>Araç Markası seçiniz</option> <option value='1'>Maserati</option> <option value='2'>Porche</option> <option value='3'>Murat 131</option> </select> </div><div class='col-lg-5 order-1 order-md-2 select-box'> <input type='text' placeholder='OEM No, Ürün Adını, Stok kodu ' name='car-search' id='car-search'> </div><div class='col-lg-2 order-3 select-box p-0 mx-0' id='click-link'> <a href='#open-search' class='btn-style-blue' >HEMEN ARA</a> </div></div></div></div><div class='container body-18 d-none' id='open-search'> <div class='row'> <div class='col-12 d-flex title ps-0'> <h4 class='me-lg-3'>Öne Çıkan Arama Sonuçları »</h4> <p class='ms-lg-5'>Search result: <span id=''>1</span> to <span id=''>10</span> of <span id=''>463</span> products found. </p><div class='cat-to-cat ms-auto'><span id=''>YAKIT SİSTEMİ</span> » <span id=''>Yakıt Borusu</span></div></div><div class='col-12 item-box'> <div class='image-box'> <img src='./frontend/images/cats/bosh-scania.png' alt=''> </div><div class='item-content my-auto'> <h5>REAR LAMP COVER SCANIA P/R/4 SERIES</h5> <p>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at… »</p><ul class='d-flex p-0'> <li>BOSCH</li><li>SCANIA</li><li>CABIN</li><li><span class='oem'>OEM:</span><span id='oem-number' class='ms-3'>02-25280-06</span></li></ul> <div class='marketing ms-auto'> <div class='like-box like' id='like'><img class='heart-1' src='./frontend/icons/heart.png' alt=''><img class='heart-2 d-none' src='./frontend/icons/heart-fill.png' alt=''></div><div class='inspect'><a href='#'>İNCELE</a></div><div class='add-card'> <div class='how-much'> <span>-</span> <span>1</span> <span>+</span> </div><div class='add-to-basket'><a href='#'>SEPETE EKLE</a></div></div></div></div><div class='brand'> <img src='./frontend/images/brands/bosch.png' alt=''> </div></div><div class='col-12 item-box'> <div class='image-box'> <img src='./frontend/images/cats/bosh-scania.png' alt=''> </div><div class='item-content my-auto'> <h5>REAR LAMP COVER SCANIA P/R/4 SERIES</h5> <p>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at… »</p><ul class='d-flex p-0'> <li>BOSCH</li><li>SCANIA</li><li>CABIN</li><li><span class='oem'>OEM:</span><span id='oem-number' class='ms-3'>02-25280-06</span></li></ul> <div class='marketing ms-auto'> <div class='like-box like' id='like'><img class='heart-1' src='./frontend/icons/heart.png' alt=''><img class='heart-2 d-none' src='./frontend/icons/heart-fill.png' alt=''></div><div class='inspect'><a href='#'>İNCELE</a></div><div class='add-card'> <div class='how-much'> <span>-</span> <span>1</span> <span>+</span> </div><div class='add-to-basket'><a href='#'>SEPETE EKLE</a></div></div></div></div><div class='brand'> <img src='./frontend/images/brands/bosch.png' alt=''> </div></div><div class='col-12 item-box'> <div class='image-box'> <img src='./frontend/images/cats/bosh-scania.png' alt=''> </div><div class='item-content my-auto'> <h5>REAR LAMP COVER SCANIA P/R/4 SERIES</h5> <p>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at… »</p><ul class='d-flex p-0'> <li>BOSCH</li><li>SCANIA</li><li>CABIN</li><li><span class='oem'>OEM:</span><span id='oem-number' class='ms-3'>02-25280-06</span></li></ul> <div class='marketing ms-auto'> <div class='like-box like' id='like'><img class='heart-1' src='./frontend/icons/heart.png' alt=''><img class='heart-2 d-none' src='./frontend/icons/heart-fill.png' alt=''></div><div class='inspect'><a href='#'>İNCELE</a></div><div class='add-card'> <div class='how-much'> <span>-</span> <span>1</span> <span>+</span> </div><div class='add-to-basket'><a href='#'>SEPETE EKLE</a></div></div></div></div><div class='brand'> <img src='./frontend/images/brands/bosch.png' alt=''> </div></div><div class='see-all text-center'><a class='btn-style-blue' href='#'>TÜMÜNÜ GÖR »</a></div></div></div></div>");

                if($(".check-product-item-area label").value === undefined){
                    $("label:contains('undefined')").css("display", "none");
                }; 
                $('.product-search-area #click-link').on('click', function (){
                    $('#open-search').removeClass('d-none');
                    $('.product-search-area').css('height', '100%');
                    $('.product-search-area:before').css('height', '50%');
                    //like
                   
                    $('.like-box').on('click', function (){
                            
                            if( $(this).find('.heart-1').css('display') == 'none' ){
                                    $(this).find('.heart-2').addClass('d-none');
                                    $(this).find('.heart-1').css('display', 'block');
                           
                            }else{
                                $(this).find('.heart-1').css('display', 'none');
                                $(this).find('.heart-2').removeClass('d-none');
                            }
                    });
                    
                    
                    

                   
                   
                    
                });  
                
            }); 
        };
        

       


    var MostPopProducts =[
        {
            image: "./frontend/images/most-l-1.png",
            brand: "DAF",
            cat: "STEERING",
            title: "REAR LAMP COVER SCANIA P/R/4 SERIES",
            oem: "1695567",
            producer: "BOSCH"
        },
        {
            image: "./frontend/images/most-l-2.png",
            brand: "BOSH",
            cat: "STEERING",
            title: "REAR LAMP COVER SCANIA P/R/4 SERIES",
            oem: "1695567",
            producer: "BOSCH"
        },
        {
            image: "./frontend/images/most-l-3.png",
            brand: "BOSH",
            cat: "STEERING",
            title: "REAR LAMP COVER SCANIA P/R/4 SERIES",
            oem: "1695567",
            producer: "BOSCH"
        },
        {
            image: "./frontend/images/most-l-1.png",
            brand: "BOSH",
            cat: "STEERING",
            title: "REAR LAMP COVER SCANIA P/R/4 SERIES",
            oem: "1695567",
            producer: "BOSCH"
        }
    ];
    var MostSearchProducts =[
        {
            image: "./frontend/images/most-s-1.png",
            brand: "DAF",
            cat: "STEERING",
            title: "REAR LAMP COVER SCANIA P/R/4 SERIES",
            oem: "1695567",
            producer: "BOSCH"
        },
        {
            image: "./frontend/images/most-s-2.png",
            brand: "IVECO",
            cat: "STEERING",
            title: "REAR LAMP COVER SCANIA P/R/4 SERIES",
            oem: "1695567",
            producer: "BOSCH"
        },
        {
            image: "./frontend/images/most-s-3.png",
            brand: "MERCEDES",
            cat: "STEERING",
            title: "REAR LAMP COVER SCANIA P/R/4 SERIES",
            oem: "1695567",
            producer: "BOSCH"
        },
        {
            image: "./frontend/images/most-s-1.png",
            brand: "DAF",
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
            "<div class='most-card'><figure class='text-center mx-auto my-auto'><img src='"+ product.image +"' class='w-100 ' alt=''></figure><div class='brands d-flex justify-content-between'><span>"+ product.brand +"</span><span>"+ product.cat +"</span></div><div class='card-border'></div><div class='card-name'><h5>"+ product.title +"</h5></div><div class='row brand-id-table'><div class='col-4'><span class='brand-oem'>OEM</span></div><div class='col-5'><span class='brand-id'>: "+ product.oem +"</span></div><div class='col-4'><span class='brand-producer'>ÜRETİCİ</span></div><div class='col-5'><span class='brand-name'>: "+ product.producer +"</span></div></div><button class='button add-to-card mt-auto align-self-center' onclick=''>SEPETE EKLE</button></div>"
            );
    });

    MostSearchProducts.forEach((product) =>{
        mostSearch.append(
            "<div class='most-card'><figure class='text-center mx-auto my-auto'><img src='"+ product.image +"' class='w-100 ' alt=''></figure><div class='brands d-flex justify-content-between'><span>"+ product.brand +"</span><span>"+ product.cat +"</span></div><div class='card-border'></div><div class='card-name'><h5>"+ product.title +"</h5></div><div class='row brand-id-table'><div class='col-4'><span class='brand-oem'>OEM</span></div><div class='col-5'><span class='brand-id'>: "+ product.oem +"</span></div><div class='col-4'><span class='brand-producer'>ÜRETİCİ</span></div><div class='col-5'><span class='brand-name'>: "+ product.producer +"</span></div></div><button class='button add-to-card mt-auto align-self-center' onclick=''>SEPETE EKLE</button></div>"
            );
    });




}); //  document ready end