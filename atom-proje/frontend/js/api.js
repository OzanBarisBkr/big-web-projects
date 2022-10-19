$(document).ready(function(){



    var OurServicesItems =[
        {
            image: "./frontend/images/urunler/1.png",
            title: "Televizyon Tamiri ve Bakımı",
            content: "Televizyon, şüphesiz hayatımızda önemli bir yer ediniyor. Biz de İstanbul Teknik Servis olarak, marka ve model fark etmeksizin televi…»",
            hover: "Televizyon",
            where:"#"
        },
        {
            image: "./frontend/images/urunler/2.png",
            title: "Klima Onarım ve Bakımı",
            content: "Artık her evde ana ihtiyaç olan klima kullanımı ile birlikte klima servisi hizmetleri zorunluluk haline gelmiştir. Klimaları temin ederken, teknoloji, …»",
            hover: "Klima",
            where:"#"
        },
        {
            image: "./frontend/images/urunler/3.png",
            title: "Çamaşır Makinesi Onarım ve Bakımı",
            content: "Çamaşır Makinesi servisi olarak il ve semt bazında geniş bir servis ağına sahip şekilde çalışmaktayız. Türkiye’nin herhangi bir yerinden çamaşır makinesi arızası …» ",
            hover: "Çamaşır Makinesi",
            where:"#"
        },
        {
            image: "./frontend/images/urunler/4.png",
            title: "Bulaşık Makinesi Onarım ve Bakımı",
            content: "Bulaşık makinanız, etkin ve hatasız çalışma performansı için belli aralıklarda bakıma gereksinim duyar. Makinenizin verimli çalışmasını sağlamak için… …»",
            hover: "Bulaşık Makinesi",
            where:"#"
        },
        {
            image: "./frontend/images/urunler/5.png",
            title: "Buzdolabı Onarım ve Bakımı",
            content: "Buzdolabı arızalarında en iyi teknisyenlerimizle %100 garantili işçilikle hizmet veriyoruz. Her marka buzdolabı için tamir onarım ve yedek parça değişim… »",
            hover: "Buzdolabı",
            where:"#"
        },
        {
            image: "./frontend/images/urunler/6.png",
            title: "Kombi Makinesi Onarım ve Bakımı",
            content: "Kombiniz çalışmıyor veya kombi sisteminizin bir kısmı düzgün çalışmıyorsa veya hiç çalışmıyorsa Atom Tamir Servisi ile hemen temasa geçin. »",
            hover: "Kombi Makinesi",
            where:"#"
        },
        {
            image: "./frontend/images/urunler/7.png",
            title: "Ocak Onarım ve Bakımı",
            content: "Evlerin vazgeçilmezi olan set üstü ocaklar gaz ile çalışmaları sebebiyle bakım ve arızalarına dikkat edilmemesi durumunda büyük sorunlara…»",
            hover: "Ocak Onarım",
            where:"#"
        },
        {
            image: "./frontend/images/urunler/8.png",
            title: "Fırın Onarım ve Bakımı",
            content: "Teknik Servisimizde, tüm orjinal ve yedek parçalar ekonomik fiyatlara bulunmaktadır. Alanında deneyimli ekip ve profesyonel kadrosuyla…»",
            hover: "Fırın",
            where:"#"
        },
        {
            image: "./frontend/images/urunler/9.png",
            title: "Aspiratör Onarım ve Bakımı",
            content: "Aspiratör Yetkili Servisi Arayışınıza Profesyonel Çözümler Sunuyoruz Yeni bir aspiratör aldığınız veya mevcut aspiratörünüzde herhangi bir aksaklık meydana…» ",
            hover: "Aspiratör",
            where:"#"
        },
        {
            image: "./frontend/images/urunler/10.png",
            title: "Elektrikli Ev Aletleri Onarım Ve Bakımı",
            content: "Küçük Ev Aletleri Servisi için aradığınız yer Atom Teknik firmasıdır. İstanbul ilinde bulunan firma müşterilerine kaliteli hizmet vermeyi hedef edinmiştir. »",
            hover: "Elektrikli Ev Aletleri",
            where:"#"
        },
        
    ];
    

    var ourServices= $("#ourServicesBox");
    var ourServicesSlide= $("#ourServicesBoxSlide");
        

    OurServicesItems.forEach((et) =>{
        ourServices.append(
            "<div class='col-md-6 col-lg-4'> <div class='box-item wow fadeInLeft' data-wow-delay='200ms' > <div class='item-img'> <img class='w-100' src='"+ et.image +"' alt='...'> </div><div class='item-content'> <h5>"+ et.title +"</h5> <p>"+ et.content +"</p></div><div class='visible-content'> "+ et.hover +" <br>Onarım Ve Bakımı <a class='btn-style-2' href='"+ et.where +"' tabindex='0'>Detaylı Oku »</a> </div></div></div>"
            );
    });
    OurServicesItems.forEach((et) =>{
        ourServicesSlide.append(
            "<div class='col-12 col-lg-4'> <div class='box-item wow fadeInLeft' data-wow-delay='200ms' > <div class='item-img'> <img class='w-100' src='"+ et.image +"' alt='...'> </div><div class='item-content'> <h5>"+ et.title +"</h5> <p>"+ et.content +"</p></div><div class='visible-content'> "+ et.hover +" <br>Onarım Ve Bakımı <a class='btn-style-2' href='"+ et.where +"' tabindex='0'>Detaylı Oku »</a> </div></div></div>"
            );
    });


    

}); // ready end