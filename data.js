/**
 * BAZA DANYCH DESTYNACJI I REZYDENTÓW EXIM TOURS (LATO & ZIMA)
 */
const EXIM_DATA = {
  "ALBANIA": {
    name: "Albania",
    flag: "🇦🇱",
    cardPayment: "NIE (gotówka)",
    lat: 41.3237,
    lng: 19.4560,
    zoom: 8,
    destinations: {
      "DURRES": {
        name: "Durres / Vlore (Riwiera Albańska)",
        lat: 41.3237,
        lng: 19.4560,
        residents: [
          { name: "Paulina Stachow", role: "Rezydent", phone: "+355 69 38 51 495", email: "paulina.stachow@exim.pl", period: "1.04 - 31.10", note: "Durres / Vlore na telefon" }
        ]
      }
    }
  },
  "BUŁGARIA": {
    name: "Bułgaria",
    flag: "🇧🇬",
    cardPayment: "TAK (karta akceptowana)",
    lat: 42.7339,
    lng: 27.5000,
    zoom: 8,
    destinations: {
      "SŁONECZNY BRZEG": {
        name: "Słoneczny Brzeg (BOJ)",
        lat: 42.6952,
        lng: 27.7103,
        residents: [
          { name: "Artur Makowiecki", role: "Główny rezydent", phone: "+48 504 643 596", email: "artur.makowiecki@exim.pl", period: "25.04 - 31.10" },
          { name: "Katarzyna Gattnar", role: "Rezydent", phone: "+48 508 459 940", email: "katarzyna.gattnar@exim.pl", period: "Sezon Letni" },
          { name: "Marcin Wolny", role: "Rezydent", phone: "+48 690 689 847", email: "marcin.wolny@exim.pl", period: "Sezon Letni" },
          { name: "Marcin Filipowicz / Radosław Chyt", role: "Operacja lotniskowa", phone: "+48 780 654 714 / +48 530 444 322", email: "marcin.filipowicz@exim.pl", period: "Sezon Letni" }
        ]
      },
      "ZŁOTE PIASKI": {
        name: "Złote Piaski / Albena / Obzor (VAR)",
        lat: 43.2842,
        lng: 28.0416,
        residents: [
          { name: "Izabela Wisełka", role: "Rezydent", phone: "+48 502 954 041", email: "izabela.wiselka@exim.pl", period: "Sezon Letni", note: "Złote Piaski / Obzor / Albena" },
          { name: "Piotr Wisełka", role: "Rezydent", phone: "+48 690 690 142", email: "piotr.wiselka@exim.pl", period: "Sezon Letni" },
          { name: "Damian Mackiewicz", role: "Operacja lotniskowa", phone: "+359 894 503 580", email: "", period: "Sezon Letni" }
        ]
      }
    }
  },
  "CYPR": {
    name: "Cypr (Południowy)",
    flag: "🇨🇾",
    cardPayment: "TAK (karta akceptowana)",
    lat: 34.9823,
    lng: 33.1451,
    zoom: 9,
    destinations: {
      "LARNACA": {
        name: "Larnaka / Ayia Napa / Protaras (LCA)",
        lat: 34.9167,
        lng: 33.6292,
        residents: [
          { name: "Małgorzata Karwicka", role: "Rezydent", phone: "+48 508 459 596", localPhone: "+357 99 320 754", email: "reklamacje complaints.cy@mtsglobe.com", period: "Cały rok" }
        ]
      },
      "PAFOS": {
        name: "Pafos / Limassol (PFO)",
        lat: 34.7754,
        lng: 32.4245,
        residents: [
          { name: "Zofia Musielewicz", role: "Rezydent", phone: "+48 502 953 993", localPhone: "+357 97 867 565", email: "", period: "Cały sezon" },
          { name: "Tomasz Jasiulewicz", role: "Rezydent", phone: "+48 502 953 988", localPhone: "+357 99 272 470", email: "", period: "Cały sezon" }
        ]
      }
    }
  },
  "CYPR PÓŁNOCNY": {
    name: "Cypr Północny",
    flag: "🇹🇷",
    cardPayment: "TAK (karta akceptowana)",
    lat: 35.2500,
    lng: 33.7000,
    zoom: 9,
    destinations: {
      "CYPR PÓŁNOCNY": {
        name: "Kyrenia / Famagusta / Bafra",
        lat: 35.3400,
        lng: 33.3200,
        residents: [
          { name: "Barbara Gabzdyl", role: "Główny rezydent", phone: "+90 533 824 61 76", email: "barbara.gabzdyl@exim.pl", period: "Cały sezon" },
          { name: "Agnieszka Ryfka", role: "Operacja lotniskowa LCA", phone: "+357 963 57387", email: "agnieszka.ryfka@exim.pl", period: "Cały sezon" }
        ]
      },
      "ACAPULCO": {
        name: "Acapulco Resort & Spa (Klub)",
        lat: 35.3340,
        lng: 33.4010,
        residents: [
          { name: "Wiktoria Dąbrowska / Julia Mazurkiewicz", role: "Klub Animacyjny", phone: "+90 539 110 17 84", email: "", period: "27.06 - 05.09" }
        ]
      },
      "SALAMIS": {
        name: "Salamis Bay Conti",
        lat: 35.1850,
        lng: 33.9000,
        residents: [
          { name: "Magdalena Cieślak / Julia Gąsior", role: "Klub Animacyjny", phone: "+90 539 110 18 30", email: "", period: "Sezon Letni" }
        ]
      }
    }
  },
  "EGIPT": {
    name: "Egipt",
    flag: "🇪🇬",
    cardPayment: "TAK (karta akceptowana)",
    lat: 26.8206,
    lng: 33.0000,
    zoom: 6,
    destinations: {
      "HURGHADA": {
        name: "Hurghada & El Gouna (HRG)",
        lat: 27.2579,
        lng: 33.8116,
        residents: [
          { name: "Mahmoud Khedr", role: "Główny rezydent", phone: "+20 127 2392 222", email: "mahmoud.khedr@exim.pl", period: "Cały rok" },
          { name: "Elżbieta Adamkiewicz", role: "Rezydent", phone: "+20 127 2391 111", email: "elzbieta.adamkiewicz@exim.pl", period: "Cały sezon" },
          { name: "Grażyna Pomianowska", role: "Rezydent (Safaga/Południe)", phone: "+20 102 344 2732", email: "mahmoud.khedr@exim.pl", period: "Cały sezon" },
          { name: "Piotr Maged", role: "Rezydent (Al Ahiaa / El Gouna)", phone: "+20 100 7775 753", email: "", period: "Cały sezon" },
          { name: "Ahmed Zakaria", role: "Rezydent", phone: "+20 111 5110 440", email: "", period: "Cały sezon" },
          { name: "Anna Winiarek", role: "Rezydent", phone: "+20 101 7446 611", email: "", period: "Cały sezon" }
        ]
      },
      "SHARM EL SHEIKH": {
        name: "Sharm El Sheikh (SSH)",
        lat: 27.9158,
        lng: 34.3299,
        residents: [
          { name: "Emad Hamdy", role: "Rezydent", phone: "+20 100 9108 056", email: "emad.hamdy@exim.pl", period: "Cały rok" }
        ]
      },
      "MARSA ALAM": {
        name: "Marsa Alam (RMF)",
        lat: 25.0657,
        lng: 34.8790,
        residents: [
          { name: "Ahmed El Naqady", role: "Rezydent", phone: "+20 122 4699 921", email: "ahmed.elnaqady@exim.pl", period: "Cały rok" }
        ]
      }
    }
  },
  "GRECJA": {
    name: "Grecja",
    flag: "🇬🇷",
    cardPayment: "TAK (karta akceptowana; Rodos - preferowana gotówka)",
    lat: 37.5000,
    lng: 23.5000,
    zoom: 7,
    destinations: {
      "KRETA WSCHODNIA": {
        name: "Kreta Wschodnia (HER)",
        lat: 35.3387,
        lng: 25.1442,
        residents: [
          { name: "Agata Szwarc", role: "Rezydent", phone: "+48 571 607 992", email: "agata.szwarc@exim.pl", period: "01.05 - 31.10" }
        ]
      },
      "KRETA ZACHODNIA": {
        name: "Kreta Zachodnia (CHQ)",
        lat: 35.5138,
        lng: 24.0180,
        residents: [
          { name: "Elżbieta Marek", role: "Rezydent", phone: "+48 508 459 733", email: "elzbieta.marek@exim.pl", period: "1.04 - 31.10" }
        ]
      },
      "RODOS": {
        name: "Rodos (RHO)",
        lat: 36.4341,
        lng: 28.2176,
        residents: [
          { name: "Bartosz Godziszewski", role: "Rezydent", phone: "+48 508 459 839", email: "bartosz.godziszewski@exim.pl", period: "1.04 - 31.10" }
        ]
      },
      "ZAKYNTHOS": {
        name: "Zakynthos (ZTH)",
        lat: 37.7870,
        lng: 20.8979,
        residents: [
          { name: "Monika Kaczmarek", role: "Rezydent", phone: "+48 690 689 842", email: "monika.kaczmarek@exim.pl", period: "Czartery" }
        ]
      }
    }
  },
  "HISZPANIA": {
    name: "Hiszpania & Kanary",
    flag: "🇪🇸",
    cardPayment: "TAK (z wyjątkiem Costa del Sol - gotówka)",
    lat: 38.5000,
    lng: -2.0000,
    zoom: 6,
    destinations: {
      "COSTA BRAVA": {
        name: "Costa Brava & Costa de Barcelona",
        lat: 41.7000,
        lng: 2.8500,
        residents: [
          { name: "Monika Sternik", role: "Główny rezydent", phone: "+48 571 607 995", email: "monika.sternik@exim.pl", period: "1.04 - 31.10 + wycieczki" },
          { name: "Lidia Kosowska", role: "Rezydent", phone: "", email: "", period: "Sezon Letni" },
          { name: "Kaja Sternik", role: "Rezydent", phone: "", email: "", period: "Sezon Letni" }
        ]
      },
      "COSTA DORADA": {
        name: "Costa Dorada / Salou",
        lat: 41.0766,
        lng: 1.1416,
        residents: [
          { name: "Karolina Myślicka", role: "Rezydent", phone: "+48 504 713 506", email: "", period: "Sezon Letni" }
        ]
      },
      "MAJORKA": {
        name: "Majorka (PMI)",
        lat: 39.6953,
        lng: 3.0176,
        residents: [
          { name: "Ewelina Lachowska", role: "Rezydent", phone: "+48 571 607 996", email: "ewelina.lachowska@exim.pl", period: "1.04 - 31.10" },
          { name: "Agata Szambelan", role: "Rezydent", phone: "+48 508 459 927", email: "agata.szambelan@exim.pl", period: "Sezon Letni" }
        ]
      },
      "COSTA DEL SOL": {
        name: "Costa del Sol / Malaga",
        lat: 36.5400,
        lng: -4.6260,
        residents: [
          { name: "Monika Salamon", role: "Rezydent", phone: "+48 571 607 991", email: "monika.salamon@exim.pl", period: "Cały rok" }
        ]
      },
      "COSTA BLANCA": {
        name: "Costa Blanca & Walencja",
        lat: 38.3452,
        lng: -0.4810,
        residents: [
          { name: "Beata Zawierucha", role: "Rezydent", phone: "+48 502 954 033", email: "beata.zawierucha@exim.pl", period: "Cały rok + wycieczki" }
        ]
      },
      "TENERYFA": {
        name: "Teneryfa (Wyspy Kanaryjskie)",
        lat: 28.2916,
        lng: -16.6291,
        residents: [
          { name: "Urszula Tyburska", role: "Rezydent", phone: "+48 666 662 590", email: "urszula.tyburska@exim.pl", period: "Cały rok" },
          { name: "Zbigniew Tyburski", role: "Rezydent", phone: "+48 577 141 306", email: "", period: "Cały rok" }
        ]
      },
      "FUERTEVENTURA": {
        name: "Fuerteventura (Wyspy Kanaryjskie)",
        lat: 28.3587,
        lng: -14.0537,
        residents: [
          { name: "Klaudia Tenczar", role: "Rezydent", phone: "+48 508 459 992", email: "klaudia.tenczar@exim.pl", period: "Cały rok" }
        ]
      },
      "LANZAROTE": {
        name: "Lanzarote (Wyspy Kanaryjskie)",
        lat: 28.9630,
        lng: -13.5477,
        residents: [
          { name: "Magdalena Nolywajka", role: "Rezydent", phone: "+34 697 57 46 88", email: "magdanolywajka@gmail.com", period: "Wycieczki własne" }
        ]
      },
      "GRAN CANARIA": {
        name: "Gran Canaria (Wyspy Kanaryjskie)",
        lat: 27.9202,
        lng: -15.5474,
        residents: [
          { name: "Karolina / Simon", role: "Obsługa telefoniczna / Wycieczki", phone: "+48 530 000 257", email: "info@grancanaria4you.pl", period: "Cały rok + wycieczki" }
        ]
      }
    }
  },
  "TUNEZJA": {
    name: "Tunezja",
    flag: "🇹🇳",
    cardPayment: "NIE (gotówka: EUR, USD, TND)",
    lat: 35.0000,
    lng: 10.0000,
    zoom: 7,
    destinations: {
      "KONTYNENT": {
        name: "Tunezja Kontynent (Sousse, Monastir, Hammamet)",
        lat: 35.8254,
        lng: 10.6369,
        residents: [
          { name: "Anna Tarnowska-Laroussi", role: "Główny rezydent", phone: "+216 28 292 492", email: "anna.tarnowska@exim.pl", period: "Czartery" },
          { name: "Hichem Mahmoudi", role: "Rezydent", phone: "+216 58 057 725", email: "hichem.mahmoudi@exim.pl", period: "Czartery" },
          { name: "Jagoda Chróst", role: "Rezydent", phone: "+216 29 875 188", email: "jagoda.chrost@exim.pl", period: "Czartery" },
          { name: "Michalina Siadaczka", role: "Asystent", phone: "+216 29 596 939", email: "michalina.siadaczka@exim.pl", period: "Czartery" },
          { name: "Agnieszka Pietrzyk-Meddeb", role: "Rezydent", phone: "+216 50 220 846", email: "agnieszka.pietrzyk@exim.pl", period: "Czartery" }
        ]
      },
      "DJERBA": {
        name: "Djerba & Zarzis (DJE)",
        lat: 33.8076,
        lng: 10.8451,
        residents: [
          { name: "Ahmed Cherni", role: "Rezydent", phone: "+48 606 242 728", email: "ahmed.cherni@exim.pl", period: "Czartery" },
          { name: "Łukasz Marecki", role: "Rezydent (Zarzis)", phone: "+216 53 272 771", email: "lukasz.marecki@exim.pl", period: "Czartery" }
        ]
      }
    }
  },
  "TURCJA": {
    name: "Turcja",
    flag: "🇹🇷",
    cardPayment: "TAK (karta akceptowana)",
    lat: 36.8841,
    lng: 31.0000,
    zoom: 8,
    destinations: {
      "RIWIERA TURECKA": {
        name: "Riwiera Turecka (Antalya, Side, Alanya)",
        lat: 36.7667,
        lng: 31.3889,
        residents: [
          { name: "Hanna Brodiuk", role: "Rezydent (Side)", phone: "+90 533 486 00 31", email: "hanna.brodiuk@exim.pl", period: "Czartery" },
          { name: "Blanka Madenci", role: "Rezydent (Alanya)", phone: "+90 541 640 3882", email: "blanka.madenci@exim.pl", period: "Czartery" },
          { name: "Karol Amanowicz", role: "Operacja lotniskowa", phone: "+90 549 827 59 21", email: "karol.amanowicz@exim.pl", period: "Czartery" },
          { name: "Manuela Egitmen", role: "Operacja lotniskowa", phone: "+90 543 938 33 26", email: "manuela.egitmen@exim.pl", period: "Czartery" },
          { name: "Wiktoria Gokalp", role: "Przewodnik", phone: "+90 549 658 5066", email: "wiktoria.gokalp@exim.pl", period: "Czartery" }
        ]
      }
    }
  },
  "MALTA": {
    name: "Malta",
    flag: "🇲🇹",
    cardPayment: "TAK (karta akceptowana)",
    lat: 35.8989,
    lng: 14.5146,
    zoom: 11,
    destinations: {
      "MALTA": {
        name: "Malta (Cała wyspa)",
        lat: 35.8989,
        lng: 14.5146,
        residents: [
          { name: "Dagmara Cyba", role: "Rezydent", phone: "+48 502 954 041", email: "dagmara.cyba@exim.pl", period: "Lato" },
          { name: "Izabela Wisełka", role: "Rezydent (Zima)", phone: "+48 502 954 041", email: "izabela.wiselka@exim.pl", period: "Zima" }
        ]
      }
    }
  },
  "MAROKO": {
    name: "Maroko",
    flag: "🇲🇦",
    cardPayment: "NIE (gotówka: EUR, USD, MAD)",
    lat: 30.4278,
    lng: -9.5981,
    zoom: 8,
    destinations: {
      "AGADIR": {
        name: "Agadir & Wycieczki (AGA)",
        lat: 30.4278,
        lng: -9.5981,
        residents: [
          { name: "Katarzyna Marach / Lutowska", role: "Rezydent", phone: "+212 665 252 452", email: "contact@kaleonatours.com", period: "Cały rok + wycieczki" }
        ]
      }
    }
  },
  "PORTUGALIA": {
    name: "Portugalia (Madera)",
    flag: "🇵🇹",
    cardPayment: "TAK (karta akceptowana)",
    lat: 32.7607,
    lng: -16.9595,
    zoom: 10,
    destinations: {
      "MADERA": {
        name: "Madera / Funchal (FNC)",
        lat: 32.7607,
        lng: -16.9595,
        residents: [
          { name: "Piotr Skierski", role: "Rezydent", phone: "+48 504 643 599", email: "piotr.skierski@exim.pl", period: "Cały rok" }
        ]
      }
    }
  },
  "DOMINIKANA": {
    name: "Dominikana",
    flag: "🇩🇴",
    cardPayment: "TAK (karta akceptowana)",
    lat: 18.5601,
    lng: -68.3725,
    zoom: 9,
    destinations: {
      "DOMINIKANA": {
        name: "Punta Cana / Cała wyspa (PUJ)",
        lat: 18.5601,
        lng: -68.3725,
        residents: [
          { name: "Zbigniew Alexanderski / Go Vacation", role: "Rezydent MTS / Go Vacation (polski)", phone: "+1 (849) 452-3911 / +1 829 679 3522", email: "kerstin.zdrallek@govacation-domrep.com", period: "Cały rok (dyżur 24/7)" }
        ]
      }
    }
  },
  "ZJEDNOCZONE EMIRATY ARABSKIE": {
    name: "Emiraty Arabskie (ZEA)",
    flag: "🇦🇪",
    cardPayment: "TAK (karta akceptowana)",
    lat: 25.2048,
    lng: 55.2708,
    zoom: 8,
    destinations: {
      "DUBAJ": {
        name: "Dubaj & Ras Al Khaimah (DXB/RKT)",
        lat: 25.2048,
        lng: 55.2708,
        residents: [
          { name: "Aleksandra Franke", role: "Rezydent", phone: "+971 55 267 1538", email: "odrozd@interia.pl", period: "Sezon Letni / Zimowy" }
        ]
      }
    }
  }
};