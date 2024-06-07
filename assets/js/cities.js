let cities = [
  { 
      city: "Adana", 
      famousFor: "Kebap", 
      type: "Yemek", 
      plateNumber: "01" 
  },
  { 

      city: "Ankara", 
      famousFor: "Simidi", 
      type: "Yemek", 
      plateNumber: "06" 
  },
  { 
      city: "İstanbul", 
      famousFor: "Boğaz", 
      type: "Yer", 
      plateNumber: "34" 
  },
  { 
      city: "İzmir", 
      famousFor: "Boyoz", 
      type: "Yemek", 
      plateNumber: "35" 
  },
  { 
      city: "Bursa", 
      famousFor: "İskender Kebabı", 
      type: "Yemek", 
      plateNumber: "16" 
  },
  { 
      city: "Antalya", 
      famousFor: "Düden Şelalesi", 
      type: "Yer", 
      plateNumber: "07" 
  },
  { 
      city: "Gaziantep", 
      famousFor: "Baklava", 
      type: "Yemek", 
      plateNumber: "27" 
  },
  { 
      city: "Konya", 
      famousFor: "Etli Ekmek", 
      type: "Yemek", 
      plateNumber: "42" 
  },
  { 
      city: "Trabzon", 
      famousFor: "Hamsi", 
      type: "Yemek", 
      plateNumber: "61" 
  },
  { 
      city: "Kayseri", 
      famousFor: "Mantı", 
      type: "Yemek", 
      plateNumber: "38" 
  },
  { 
      city: "Eskişehir", 
      famousFor: "Lületaşı", 
      type: "Yer", 
      plateNumber: "26" 
  },
  { 
      city: "Rize", 
      famousFor: "Çay", 
      type: "Yemek", 
      plateNumber: "53" 
  },
  { 
      city: "Erzurum", 
      famousFor: "Cağ Kebabı", 
      type: "Yemek", 
      plateNumber: "25" 
  },
  { 
      city: "Diyarbakır", 
      famousFor: "Karpuz", 
      type: "Yer", 
      plateNumber: "21" 
  },
  { 
      city: "Mardin", 
      famousFor: "Taş Evler", 
      type: "Yer", 
      plateNumber: "47" 
  },
  { 
      city: "Van", 
      famousFor: "Van Kedisi", 
      type: "Yer", 
      plateNumber: "65" 
  },
  { 
      city: "Sivas", 
      famousFor: "Kangal Köpeği", 
      type: "Yer", 
      plateNumber: "58" 
  },
  { 
      city: "Şanlıurfa", 
      famousFor: "Balıklıgöl", 
      type: "Yer", 
      plateNumber: "63" 
  },
  { 
      city: "Mersin", 
      famousFor: "Tantuni", 
      type: "Yemek", 
      plateNumber: "33" 
  },
  { 
      city: "Muğla", 
      famousFor: "Turistik Yerleri", 
      type: "Yer", 
      plateNumber: "48" 
  },
  { 
      city: "Çanakkale", 
      famousFor: "Tarihi Gelibolu Yarımadası", 
      type: "Yer", 
      plateNumber: "17" 
  },
  { 
      city: "Hatay", 
      famousFor: "Antakya Mozaikleri", 
      type: "Yer", 
      plateNumber: "31" 
  },
  { 
      city: "İzmir", 
      famousFor: "Efes Antik Kenti", 
      type: "Yer", 
      plateNumber: "35" 
  },
  { 
      city: "Nevşehir", 
      famousFor: "Kapadokya", 
      type: "Yer", 
      plateNumber: "50" 
  },
  { 
      city: "Aydın", 
      famousFor: "Milet Antik Kenti", 
      type: "Yer", 
      plateNumber: "09" 
  }
];

let sehirler = document.querySelector('#sehirler');
let yemekler = document.querySelector('#yemekler');
let yerler = document.querySelector('#yerler');
let tekSayilar = document.querySelector('#tekSayilar');
let ciftSayilar = document.querySelector('#ciftSayilar');

for (let i=0; i<cities.length; i++) {
    sehirler.innerHTML += '<li>' + 'Şehir: ' + cities[i].city + '<br>' + 'Meşhur Yemeği: ' + cities[i].famousFor + '<br>' + 'Tip: ' + cities[i].type + '<br>' + 'Plakası: ' + cities[i].plateNumber + '</li>';
}

for (let i=0; i<cities.length; i++) {
    if(cities[i].type === 'Yemek') {
        yemekler.innerHTML += '<li>' + 'Şehir: ' + cities[i].city + '<br>' + 'Meşhur Yemeği: ' + cities[i].famousFor + '<br>' + 'Tip: ' + cities[i].type + '<br>' + 'Plakası: ' + cities[i].plateNumber + '</li>';
    }

    if(cities[i].type === 'Yer') {
        yerler.innerHTML += '<li>' + 'Şehir: ' + cities[i].city + '<br>' + 'Meşhur Yemeği: ' + cities[i].famousFor + '<br>' + 'Tip: ' + cities[i].type + '<br>' + 'Plakası: ' + cities[i].plateNumber + '</li>';
    }
}

for (let i=0; i<cities.length; i++) {
    if(cities[i].plateNumber % 2 === 0) {
        ciftSayilar.innerHTML += '<li>' + 'Şehir: ' + cities[i].city + '<br>' + 'Meşhur Yemeği: ' + cities[i].famousFor + '<br>' + 'Tip: ' + cities[i].type + '<br>' + 'Plakası: ' + cities[i].plateNumber + '</li>';
    } else {
        tekSayilar.innerHTML += '<li>' + 'Şehir: ' + cities[i].city + '<br>' + 'Meşhur Yemeği: ' + cities[i].famousFor + '<br>' + 'Tip: ' + cities[i].type + '<br>' + 'Plakası: ' + cities[i].plateNumber + '</li>';
    }
}