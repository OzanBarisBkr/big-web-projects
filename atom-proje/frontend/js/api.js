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

            //services group
    var OurServicesItemsGroup =[
        {
            image: "./frontend/images/urunler-2/1.png",
            title: "Endüstriyel Buzdolabı Servisi",
            content: "Endüstriyel mutfak teknik servisi alanında en iyi ve en hesaplı teknik servis hizmetinden yararlanmak için bizimle iletişime geçebilirsiniz  »",
            hover: "Endüstriyel Buzdolabı",
            where:"#"
        },
        {
            image: "./frontend/images/urunler-2/2.png",
            title: "Endüstriyel Bulaşık Makinesi Servisi",
            content: "Endüstriyel bulaşık makineleri için doğru arıza tespiti yaparak üstün bir teknik servis hizmeti sağlıyoruz. . Endüstriyel mutfak teknik servisi alanında…  »",
            hover: "Endüstriyel Bulaşık Makinesi",
            where:"#"
        },
        {
            image: "./frontend/images/urunler-2/3.png",
            title: "Endüstriyel Ocak Servisi",
            content: "Yerinde çözüm yerinde onarım güvencesiyle endüstriyel ocaklar için uzman ekibimizle profesyonel çözümler üretiyoruz. Sunduğumuz hesaplı fiyatlarla   »",
            hover: "Endüstriyel Ocak",
            where:"#"
        },
        {
            image: "./frontend/images/urunler-2/4.png",
            title: "Endüstriyel Fritöz  Servisi",
            content: "Alternatif Tamir Onarım Merkezi olarak, deneyimli ekibimizle endüstriyel fritözler için gereken tüm bakım hizmetini sağlıyoruz. Marka ve model  »",
            hover: "Endüstriyel Fritöz",
            where:"#"
        },
        {
            image: "./frontend/images/urunler-2/5.png",
            title: "Endüstriyel Fırın Servisi",
            content: "Hesaplı ve tecrübeli hizmeti ayağınıza getiren ATOM, endüstriyel fırınlar için hızlı arıza tespiti ve doğru çözümler üretir. İstanbul’un her yerinde…  »",
            hover: "Endüstriyel Fırın",
            where:"#"
        },
        {
            image: "./frontend/images/urunler-2/6.png",
            title: "Endüstriyel Buz Makinesi Servisi",
            content: "Atom Teknik Servis’in tecrübeli ekibi, endüstriyel buz makinenize gerekli bakımları yaparak makinenizin ömrünü uzatır. Herhangi bir arıza durumunda…   »",
            hover: "Endüstriyel Buz Makinesi",
            where:"#"
        }
        
    ];


    var OurServicesItemsBanner =[
        {
            image: "./frontend/images/banner-images/banner-1.png",
            title: "Televizyon Onarım ve Bakımı",
            content: "Televizyon onarım ve bakımında Tecrübeli servis çalışanları ile üstün hizmet",
            where:"#"
        },
        {
            image: "./frontend/images/banner-images/banner-2.png",
            title: "Kombi Onarım ve Bakımı",
            content: "Kombi onarım ve bakımında Tecrübeli servis çalışanları ile üstün hizmet",
            where:"#"
        },
        {
            image: "./frontend/images/banner-images/banner-3.png",
            title: "Çamaşır Makinası Onarım ve Bakımı",
            content: "Çamaşır Makinası onarım ve bakımında Tecrübeli servis çalışanları ile üstün hizmet",
            where:"#"
        },
        {
            image: "./frontend/images/banner-images/banner-4.png",
            title: "Endüstriyel Mutfak Onarım ve Bakımı",
            content: "Endüstriyel Mutfak onarım ve bakımında Tecrübeli servis çalışanları ile üstün hizmet",
            where:"#"
        }
    ];
    

    var ourServices= $("#ourServicesBox");
    var ourServicesSlide= $("#ourServicesBoxSlide");

    //services group
    
    var ourServicesSlideGroup= $("#ourServiceGroupM");
    var ourServicesNormal= $(".our-services-normal");




    var ourServicesSlideBanner= $("#ourServicesBoxSlideMobile");
        

    OurServicesItems.forEach((et) =>{
        ourServices.append(
            "<div class='col-md-6 col-lg-4'> <div class='box-item mx-auto wow fadeInLeft' data-wow-delay='200ms' > <div class='item-img'> <img class='w-100' src='"+ et.image +"' alt='...'> </div><div class='item-content'> <h5>"+ et.title +"</h5> <p>"+ et.content +"</p></div><div class='visible-content'> "+ et.hover +" <br>Onarım Ve Bakımı <a class='btn-style-2' href='"+ et.where +"' tabindex='0'>Detaylı Oku »</a> </div></div></div>"
            );
    });

    //<a href='#' class='btn-style-3 ' > <span>TÜM HİZMETLERİMİZ</span></i> </a>
    
    OurServicesItems.forEach((et) =>{
        ourServicesSlide.append(
            "<div class='col-12 col-lg-4'> <div class='box-item wow fadeInLeft' data-wow-delay='200ms' > <div class='item-img'> <img class='w-100' src='"+ et.image +"' alt='...'> </div><div class='item-content'> <h5>"+ et.title +"</h5> <p>"+ et.content +"</p></div><div class='visible-content'> "+ et.hover +" <br>Onarım Ve Bakımı <a class='btn-style-2' href='"+ et.where +"' tabindex='0'>Detaylı Oku »</a> </div></div></div>"
            );
    });


    //servicesGroup
    
    OurServicesItemsGroup.forEach((et) =>{
        ourServicesSlideGroup.append(
            "<div class='col-12 col-lg-4'> <div class='box-item wow fadeInLeft' data-wow-delay='200ms' > <div class='item-img'> <img class='w-100' src='"+ et.image +"' alt='...'> </div><div class='item-content'> <h5>"+ et.title +"</h5> <p>"+ et.content +"</p></div><div class='visible-content-2'> "+ et.hover +" <br>Onarım Ve Bakımı <a class='btn-style-2' href='"+ et.where +"' tabindex='0'>Detaylı Oku »</a> </div></div></div>"
            );
    });

    OurServicesItemsGroup.forEach((et) =>{
        ourServicesNormal.append(
            "<div class='col-12 col-lg-4'> <div class='box-item wow fadeInLeft' data-wow-delay='200ms' > <div class='item-img'> <img class='w-100' src='"+ et.image +"' alt='...'> </div><div class='item-content'> <h5>"+ et.title +"</h5> <p>"+ et.content +"</p></div><div class='visible-content-2'> "+ et.hover +" <br>Onarım Ve Bakımı <a class='btn-style-2' href='"+ et.where +"' tabindex='0'>Detaylı Oku »</a> </div></div></div>"
            );
    });


    //homeBanner
    OurServicesItemsBanner.forEach((et) =>{
        ourServicesSlideBanner.append(
            "<div class='col-12 col-lg-4'> <div class='box-item wow fadeInLeft' data-wow-delay='200ms' > <div class='item-img'> <img class='w-100' src='"+ et.image +"' alt='...'> </div><div class='item-content'> <h5 class='wow fadeInDown' data-wow-delay='200ms'>"+ et.title +"</h5> <p class='wow fadeInDown' data-wow-delay='400ms'>"+ et.content +"</p></div></div></div>"
            );
    });












    var objectItems =
        [
            {
                image: "./frontend/images/servis-detay/0.png",
                content:"Televizyonunuzun bakımında uygun fiyat, gerçek kalite, doğru hizmet…",
                title: "Televizyon Tamiri Ve Bakımı",
                breadcrumb: "televizyon",
                p1:"Televizyonun günümüzde önemli bir kitle iletişim aracı olduğu yadsınamayacak bir gerçektir. Hem nitel hem nicel büyük bir gelişme kaydeden televizyon kendine özgü anlatım biçimiyle etkili bir konuma gelmiştir. Hemen hemen tüm toplumlarda en merkezi kültürel dışavurma biçimi ve kurumu olarak kabul edilmekte ve öğrenmede de önemli bir rol oynamaktadır. Bu çalışmanın amacı  toplumsal iletişimdeki yerini onun temel özellikleri bağlamında irdelemektir.",
                p2:"Beklemediğiniz anda televizyonunuz bozulduğunda yapmanız gereken ilk işiniz bizden teknik anlamda destek almanız gerektiğini belirtelim. Ya da bu konuda uzman olan firmalardan da yardım talebinde bulunabilirsiniz.",
                p3:"Televizyon tamir servis hizmetleri bünyesinde Led Tv, Lcd Tv, Qled Tv, Curved Tv ve Plazma modellerinde hizmet verilir. Servis içinde yeni nesil televizyonlar ve eski model tüm seriler için uzman teknisyenler görev almaktadır.",
                p4:"Aşağıdaki iletişim bilgilerinden hemen kayıt oluşturabilirsiniz. Televizyonların genelde bir çok sorunu tamiri mümkün olan parça ve arızalardır. Firmamıza danışmadan televizyonunuzu boşa çıkmayın yenisini almayın. Profesyonel uzman teknik kadromuza gerekli tamir onarım işlemi en kısa sürede yapılır ve çalışır vaziyette teslim edilir."
            },
            {
                image: "./frontend/images/servis-detay/1.png",
                content:"Kombi bakımında uygun fiyat, gerçek kalite, doğru hizmet…",
                title: "Kombi Tamiri Ve Bakımı",
                breadcrumb: "kombi",
                p1:"Kombiniz çalışmıyor veya kombi sisteminizin bir kısmı düzgün çalışmıyorsa veya hiç çalışmıyorsa Atom Tamir Servisi ile hemen temasa geçin.",
                p2:"İstanbul’da en güvenilir kombi tamircisi, uzun yıllardan bu yana kombi arızalarında servis ihtiyacına hızlı, garantili ve yerinde çözüm hizmeti vermekteyiz.",
                p3:"Hermatik, bacalı ve yoğuşmalı kombi tamiri, bakımı, arızası, revizyonu, onarımı ve montaj taleplerinizi deneyimli servis ekipleriyle yerinde yapmaktadır.",
                p4:"Kombiler genleşme tankı, hava akış şalteri, baca, ısı sensörleri, eşanjör, pompa, fan motoru, termostat, kontrol panosu, elektronik anakart, gibi birçok parçaların bir araya gelmesiyle oluşmaktadır. Bu kadar çok parçadan oluşan kombi kullanıma bağlı olarak zaman içerisinde arızalar olabilir. Kombi arızalandığında arıza kodları ile size durumu bildirir. Arıza kodları sayesinde kombi arıza sebebini anlayabilirsiniz.",
                h1:"Kombi Tamiri"
            },
            {
                image: "./frontend/images/servis-detay/2.png",
                content:"Ocak bakımında uygun fiyat, gerçek kalite, doğru hizmet…",
                title: "Ocak Tamiri Ve Bakımı",
                breadcrumb: "ocak",
                p1:"Evlerin vazgeçilmezi olan set üstü ocaklar gaz ile çalışmaları sebebiyle bakım ve arızalarına dikkat edilmemesi durumunda büyük sorunlara yol açabilmektedir. Bunun önüne geçebilmek için cihazlarınızın bakımlarını düzenli olarak yapmalı, temizliğine dikkat etmelisiniz.",
                p2:"Set Üstü Ocaklarda oluşabilecek sorunlar nelerdir?<br /> Gaz ateşlememe<br />Ateşleme bujisinin çalışmaması<br />Otomatik çakmağın çalışmaması<br />Gaz sorunu<br /> Servis gelmeden önce neler yapabilirsiniz?<br />Set üstü ocaklar için teknik servisimize başvurmanız önemlidir. Tecrübesiz, bilmeyen birisi büyük sorunlara yol açabilir.",
                p3:"Peki, set üstü ocak Arçelik teknik servisimiz gelmeden önce neler yapabilirsiniz?<br />Ocağınızın görünen kısımlarını güzel bir şekilde temizleyebilirsiniz.<br />Ocak gözleri ve kapaklarının düzgün bir şekilde oturduğundan emin olunuz<br /> Gaz kaçağı olmadığından emin olabilirsiniz.<br />Set Üstü Ocak Ölçüleri<br />Set üstü ocağınızın ölçüleri sizin yerinize ve cihazın büyüklüğüne göre değişiklik göstermektedir. Bunun için alacağınız cihazın firmasıyla görüşmenizi öneririz."
            },
            {
                image: "./frontend/images/servis-detay/3.png",
                content:"Çamaşır Makinası bakımında uygun fiyat, gerçek kalite, doğru hizmet…",
                title: "Çamaşır Makinası Tamiri Ve Bakımı",
                breadcrumb: "çamaşır makinası",
                p1:"Çamaşır Makinesi servisi olarak il ve semt bazında geniş bir servis ağına sahip şekilde çalışmaktayız. Türkiye’nin herhangi bir yerinden çamaşır makinesi arızası hakkında, çamaşır makinesi servisi hizmeti almak için bize ulaşabilirsiniz. İlgili ekiplerimize arıza hakkında detaylı bilgilendirme yaparak, servisin gerçekleşeceği saati belirleyebilirsiniz. ",
                p2:"Beyaz Eşya Doktoru, tamir işlerinde en tecrübeli ve en güvenilir personelleri yolluyor sonra, sizlere en kaliteli ve kalıcı çözümleri sunuyoruz. Herhangi bir sebepten dolayı arıza yapan çamaşır makineleriniz, ustalarımız tarafından titizlikle kontrolden geçirilip tamir işlemi en kısa sürede gerçekleştirilmektedir.",
                p3:"Telefon numaralarımız üzerinden bizimle iletişime geçerek, cihazlarınıza dair her tür bilgileri alabilir ve her konu da aklınız da ki tüm sorularınıza yanıt bulabilirsiniz. Servisimiz tüm beyaz eşya ürünlerine ait cihazlarınıza bakıyor ve tüm arızalarınızı gidererek mağduriyetinizi en kısa süre içerisin de gidermektedir. Beyaz Eşya Tamir Servisimiz her marka cihazlarınızın tamir bakım ve onarımını garantili olarak sizlere sunmaktadır. Sizler de hiç vakit kaybetme den bizleri arayabilirsiniz.",
                h1:"Çamaşır Makinesi Servisi",
                h2:"Çamaşır Makinası Tamir Servisi"
            },
            {
                image: "./frontend/images/servis-detay/4.png",
                content:"Bulaşık Makinası bakımında uygun fiyat, gerçek kalite, doğru hizmet…",
                title: "Bulaşık Makinası Tamiri Ve Bakımı",
                breadcrumb: "bulaşık makinası",
                p1:"Bulaşık makinanız, etkin ve hatasız çalışma performansı için belli aralıklarda bakıma gereksinim duyar. Makinenizin verimli çalışmasını sağlamak için dikkat etmemiz gereken belirli birkaç husus vardır. Sertlik derecesi yüksek su kullanmak durumundaysanız, bir süre sonra makinenizin içerisinde kireç ve yağ oluşumu başladığını görüceksiniz. Zamanla makinenizin atık su bölümünün kireç, yağ, kir ve mineral tortularından oluşan bir film tabakası oluştuğunu fark edebilirsiniz. Ender durumlarda bu şekilde oluşmuş bir film tabakası suyun içerisinde çözünmüş halde bulunan ve cihazınızın iç duvarlarına sarımsı, kahverengimsi veya pas rengindeki bir çökelti şeklinde yapışan bir madde oluşturur.",
                p2:"Bulaşık makinenize bakım yaptırarak cihazınızın su püskürtme kolu, ısıtma rezistansı ve filtresi gibi parçalarını temiz tutarak, sisteme bulaşan kireç, yağ benzeri. biriken pisliklerin atılmasını sağlayabilirsiniz. Sonuç olarak Bulaşık makinenizden yüksek performans alırsınız ve aktif çalışma ömrünü uzatmış olursunuz. Tam temizlik sağlığınızı her zaman korur. Bulaşık makineniza düzenli aralıklarla bakım yaptırmayı unutmayınız. ",
                h1:"Bulaşık Makinesi Servisi"
            },
            {
                image: "./frontend/images/servis-detay/5.png",
                content:"Fırın  bakımında uygun fiyat, gerçek kalite, doğru hizmet…",
                title: "Fırın Tamiri Ve Bakımı",
                breadcrumb: "fırın",
                p1:"Teknik Servisimizde, tüm orjinal ve yedek parçalar ekonomik fiyatlara bulunmaktadır. Alanında deneyimli ekip ve profesyonel kadrosuyla İstanbul geneline bakım, onarım, arıza, tamir ve teknik servis hizmeti sunmaktayız.",
                p2:"Gerçekleştirdiğimiz hizmetlerin hepsinde, 18 yıl boyunca geçerli işçilik ve yedek parça garantisi vermekteyiz. Türkiye geneline orijinal yedek parça ve aksesuar temini sağlamakla birlikte, İstanbul il sınırları içerisindeki müşterilerimize de servis hizmeti sunuyoruz.",
                p3:"Aşağıdaki telefon numaramızdan bizleri arayarak ürünleriniz hakkında ki probleminizi belirtebilir ve servis kaydınız alınarak servis ekiplerimizin sizlere yönlenmesini sağlayabilirsiniz"
            },
            {
                image: "./frontend/images/servis-detay/6.png",
                content:"Klima bakımında uygun fiyat, gerçek kalite, doğru hizmet…",
                title: "Klima Tamiri Ve Bakımı",
                breadcrumb: "klima",
                p1:"Artık her evde ana ihtiyaç olan klima kullanımı ile birlikte klima servisi hizmetleri zorunluluk haline gelmiştir. Klimaları temin ederken, teknoloji, pratiklik, elektrik tüketimi gibi birçok özelliğini değerlendiririz. Uzun araştırmalar ile aldığımız klimanın aldıktan sonra en verimli, problemsiz, sağlıklı kullanımı için ise servis hizmetleri önemlidir.",
                p2:"Klima Bakımı konusunda yetkili klima servisi olarak, Smart Klima, 19 yılı aşan sektörel deneyim, kendini geliştiren, klima teknolojisini ve yeniliklerini her daim takip eden, yetkili servis kadrosu ile koşulsuz müşteri memnuniyetini ve mutluluğunu sağlamak, güvenilir ve kaliteli işçilik hizmeti sunmak önceliğimizdir.",
                p3:"Temel amacımız, klimalarınızın en yüksek performansa ulaşması ve kusursuz bir çalışma prensibine sahip olmasını sağlamak."
            },
            {
                image: "./frontend/images/servis-detay/7.png",
                content:"Aspiratör bakımında uygun fiyat, gerçek kalite, doğru hizmet…",
                title: "Aspiratör Tamiri Ve Bakımı",
                breadcrumb: "aspiratör",
                p1:"Aspiratör Yetkili Servisi Arayışınıza Profesyonel Çözümler Sunuyoruz<br />Yeni bir aspiratör aldığınız veya mevcut aspiratörünüzde herhangi bir aksaklık meydana geldi. Hiç dert etmeyiniz, tek yapmanız gereken branşında yetkili ve uzman aspiratör servisi firmamıza bir telefonla ulaşmak olacaktır. Uzun yıllara dayalı bilgi birikimi tecrübesinin yanı sıra gerekli donanımı ile firmamız size bu alanda optimum çözümler sunmaktan büyük mutluluk duyacaktır. İstanbul’un hangi semtinde olursanız olun, hiç çekinmeden arayabileceğiniz yetkili servisimiz sizlerden gelecek çağrılara anında yanıt vererek sorununuzun giderilmesini sağlayacaktır. Yağlı buharlaşmaya maruz kalan davlumbazlar (aspiratör) genellikle motor aksamından kaynaklanan sorunlar nedeniyle arıza yaparlar. Dolayısıyla basit çalışma prensibi onların kolay kolay arıza yapmalarının önüne geçer. Ancak bir kez problem meydana geldiğinde cihazın ihtiyaç duyduğu gerekli onarım çalışması yapılmadan tekrar normal işlevlerini sürdüremezler.",
                p2:"Aspiratör Arızası Bakım Ve Onarımı Bizim İşimiz<br />Başta aspiratör arızası giderilmesi olmak üzere diğer tüm çalışmalarımızın firmamız garantisi altında gerçekleştirdiğini ayrıca vurgulamak istiyoruz. Dolayısıyla çalışmalarımızın her zaman arkasındayız ve saygıdeğer müşterilerimizin %100 memnuniyetini sağlamak bizim işimiz. Bizlere web sayfamızda yer alan telefon numaralarından günün her saatinde ulaşabilir ve makul fiyatlarımızdan yararlanabilirsiniz. Ödeme kolaylıklarının sağlandığı ayrıcalıklı hizmetleri ile artık aspiratör servisi arayışınıza bir son verebilirsiniz. Çünkü teknik servisimiz hızlı ve güvenilir hizmetler sunabilmek için sizlerden gelecek çağrıları bekliyor."
            },
            {
                image: "./frontend/images/servis-detay/8.png",
                content:"Küçük ev Aletleri bakımında uygun fiyat, gerçek kalite, doğru hizmet…",
                title: "Küçük ev Aletleri Tamiri Ve Bakımı",
                breadcrumb: "küçük ev aletleri",
                p1:"Küçük Ev Aletleri Servisi için aradığınız yer Atom Teknik firmasıdır.<br />İstanbul ilinde bulunan firma müşterilerine kaliteli hizmet vermeyi hedef edinmiştir.",
                p2:"Uzun yıllardır sektörde olan firma alanında uzman kişiler ile Küçük Ev Aletleri için teknik hizmet vermektedir. Her zaman kaliteli hizmeti ön plana alan Atom Teknik, kullandığı orijinal parçalar ile arızalanan küçük ev aletlerinizi kaliteli ve güvenilir şekilde tamir etmektedir."
            },
            {
                image: "./frontend/images/servis-detay/9.png",
                content:"Buzdolabı bakımında uygun fiyat, gerçek kalite, doğru hizmet…",
                title: "Buzdolabı Tamiri Ve Bakımı",
                breadcrumb: "buzdolabı",
                p1:"Buzdolabı arızalarında en iyi teknisyenlerimizle %100 garantili işçilikle hizmet veriyoruz. Her marka buzdolabı için tamir onarım ve yedek parça değişim yapılmaktadır. Buzdolabı soğutma sorunları, elektrik enerji arızaları, motor ve elektronik dahil tüm arızalarda kalıcı uzun ömürlü tamir onarım hizmeti alın.",
                p2:"Buzdolabı tüm modellerinde veya eski tip cihazların hepsinde servis sağlıyoruz. Buzdolabı Tamir Onarım talebinizi aşağıdan oluşturabilirsiniz",
                p3:"Buzdolabı markaları olan Arçelik, Beko, Bosch, Dometic, Empero, Franke, Grundig, Kleo, LG, Liebherr, Profilo, Regal, Samsung, Sharp, Siemens, Silverline, Uğur, Vestel, Vestfrost cihazlarında yetkin teknik personellerimizle en iyi işçilik ve hizmeti sağlarız. Buzdolabı Teknik servis birimleri içinde çalışan teknisyenlerimiz oldukça yüksek deneyim ve tecrübeye sahiptir.",
                p4:"Arızalı olan Buzdolabı için ilk önceliğimiz servise taşımadan yerinde tamir onarım hizmetidir. Buzdolabı Servisi ekiplerimiz yerinize tam donanımlı aracımızla ile gelecek olup arıza tespit işleminde sonra yerinde buzdolabı tamir onarım hizmeti verecektir."
            }
        ];


        //objectItems
        var bannerProduct = Object.keys(objectItems).map(function(key) {
            return [objectItems[key]];
        });
            console.log(typeof(bannerProduct));
            console.log(bannerProduct);
        
            
            apiSurvivor();
            function apiSurvivor(){
               // var checkBoxVal = $(".check-product-item-area label");
    
                $(".services-slider .item").click(function(){
                    $("#services-detail-main").empty();
                    //"+ objectItems[index].image +"
                    var index = $(this).attr("data-index");
    
                    $("#services-detail-main").append("<div class='container body-5'> <div class='item-img shine-animation'> <img class='w-100' src='"+ objectItems[index].image +"' alt=''> </div><div class='content'> <h3>"+ objectItems[index].title +"</h3><p>"+ objectItems[index].content +"</p></div></div>");

                    $("#title-name").empty();

                    $("#title-name").append("<span>"+ objectItems[index].breadcrumb +"</span> tamiri ve bakımı</span>");
    

                    $("#article-content").empty();

                    $("#article-content").append("<h5 class='wow fadeInDown' data-wow-delay='200ms'>"+ objectItems[index].h1 +"</h5> <p class='wow fadeInDown' data-wow-delay='300ms'>"+ objectItems[index].p1 +"</p><h5 class='wow fadeInDown' data-wow-delay='500ms'>"+ objectItems[index].h2 +"</h5> <p class='wow fadeInDown' data-wow-delay='600ms'>"+ objectItems[index].p2 +"</p><h5 class='wow fadeInDown' data-wow-delay='700ms'>"+ objectItems[index].h3 +"</h5> <p class='wow fadeInDown' data-wow-delay='900ms'>"+ objectItems[index].p3 +"</p><h5 class='wow fadeInDown' data-wow-delay='1100ms'>"+ objectItems[index].h4 +"</h5> <p class='wow fadeInDown' data-wow-delay='1100ms'>"+ objectItems[index].p4 +"</p>");


                    if($("#article-content p").value === undefined){
                        $("p:contains('undefined')").css("display", "none");
                    }; 
                    if($("#article-content h5").value === undefined){
                        $("h5:contains('undefined')").css("display", "none");
                    }; 
                    
                    
                }); 
                
                //<span>televizyon</span> tamiri ve bakımı</span>
            };
            

            var objectItems2= [
                {
                    image: "./frontend/images/endustriyel-detay/endustriyel-0.png",
                    content:"Endüstriyel mutfak teknik servisi alanında en iyi ve en hesaplı teknik servis hizmetinden yararlanmak için bizimle iletişime geçebilirsiniz  »",
                    title: "Endüstriyel Buzdolabı Servisi",
                    p1:"Alternatif Tamir Onarım Merkezi olarak endüstriyel buzdolapları için sizlere garantili ve üstün bir teknik servis hizmeti sağlıyoruz. Endüstriyel mutfak teknik servisi alanında en iyi ve en hesaplı teknik servis hizmetinden yararlanmak için bizimle iletişime geçebilirsiniz. ",
                    breadcrumb:"endüstriyel buzdolabı servisi"
                },
                {
                    image: "./frontend/images/endustriyel-detay/endustriyel-1.png",
                    content:"Endüstriyel mutfak teknik servisi alanında en iyi ve en hesaplı teknik servis hizmetinden yararlanmak için bizimle iletişime geçebilirsiniz  »",
                    title: "Endüstriyel Bulaşık Makinesi Servisi",
                    p1:"Endüstriyel bulaşık makineleri için doğru arıza tespiti yaparak üstün bir teknik servis hizmeti sağlıyoruz. Endüstriyel mutfak teknik servisi alanında daima müşteri memnuniyetini ön planda tutuyor ve profesyonel ekibimizle çalışmalarımızı özveriyle yürütüyoruz. ",
                    breadcrumb:"endüstriyel bulaşık makinesi servisi"
                },
                {
                    image: "./frontend/images/endustriyel-detay/endustriyel-2.png",
                    content:"Yerinde çözüm yerinde onarım güvencesiyle endüstriyel ocaklar için uzman ekibimizle profesyonel çözümler üretiyoruz. Sunduğumuz hesaplı fiyatlarla tüm müşterilerimiz için kaliteli bir hizmet sağlıyoruz.",
                    title: "Endüstriyel Ocak Servisi",
                    p1:"Yerinde çözüm yerinde onarım güvencesiyle endüstriyel ocaklar için uzman ekibimizle profesyonel çözümler üretiyoruz. Sunduğumuz hesaplı fiyatlarla   »",
                    breadcrumb:"endüstriyel ocak servisi"
                },
                {
                    image: "./frontend/images/endustriyel-detay/endustriyel-3.png",
                    content:"Alternatif Tamir Onarım Merkezi olarak, deneyimli ekibimizle endüstriyel fritözler için gereken tüm bakım hizmetini sağlıyoruz. Marka ve model fark etmeksizin vermiş olduğumuz garantili hizmet kapsamında endüstriyel mutfak ekipmanlarınızdaki sorunlarınıza hızlı çözümler üretiyoruz.",
                    title: "Endüstriyel Fritöz Servisi",
                    p1:"Alternatif Tamir Onarım Merkezi olarak, deneyimli ekibimizle endüstriyel fritözler için gereken tüm bakım hizmetini sağlıyoruz. Marka ve model  »",
                    breadcrumb:"endüstriyel fritöz servisi"
                },
                {
                    image: "./frontend/images/endustriyel-detay/endustriyel-4.png",
                    content:"Hesaplı ve tecrübeli hizmeti ayağınıza getiren ATOM, endüstriyel fırınlar için hızlı arıza tespiti ve doğru çözümler üretir. İstanbul’un her yerinde sağladığımız teknik servis hizmetiyle size bir telefon kadar yakınız.",
                    title: "Endüstriyel Fırın Servisi",
                    p1:"Hesaplı ve tecrübeli hizmeti ayağınıza getiren ATOM, endüstriyel fırınlar için hızlı arıza tespiti ve doğru çözümler üretir. İstanbul’un her yerinde…  »",
                    breadcrumb:"endüstriyel fırın servisi"
                },
                {
                    image: "./frontend/images/endustriyel-detay/endustriyel-5.png",
                    content:"Endüstriyel mutfak teknik servisi alanında en iyi ve en hesaplı teknik servis hizmetinden yararlanmak için bizimle iletişime geçebilirsiniz  »",
                    title: "Endüstriyel Buz Makinesi Servisi",
                    p1:"Atom Teknik Servis’in tecrübeli ekibi, endüstriyel buz makinenize gerekli bakımları yaparak makinenizin ömrünü uzatır. Herhangi bir arıza durumunda en doğru şekilde arıza tespiti yapılarak gerekli tüm servis hizmeti ATOM teknik Servis garantisiyle gerçekleştirilir.",
                    breadcrumb:"endüstriyel buz makinesi servisi"
                }
            ];
            
            

            $(".visible-content-2").click(function(){
                $("#servicesDetail").empty();
                //"+ objectItems[index].image +"
                var index2 = $(this).attr("data-index");

                $("#servicesDetail").append("<div class='container body-5'> <div class='item-img shine-animation wow fadeInDown' data-wow-delay='200ms'> <img class='w-100' src='"+ objectItems2[index2].image +"' alt=''> </div><div class='content bg-3 '> <h3 class='wow fadeInDown' data-wow-delay='400ms'>"+ objectItems2[index2].title +"</h3> <p class='wow fadeInDown' data-wow-delay='400ms'>"+ objectItems2[index2].content +"</p></div></div>");

                $(".kitchen-s-name").empty();

                $(".kitchen-s-name").append("<span>"+ objectItems2[index2].breadcrumb +"</span>");


                $(".article-content").empty();

                $(".article-content").append("<p class='wow fadeInDown' data-wow-delay='400ms'>"+ objectItems2[index2].p1 +"</p>"); 


                
                
                
            }); 



    

}); // ready end