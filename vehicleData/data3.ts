export interface LocationUpdate {
    date: string;
    time: string;
    latitude: number;
    longitude: number;
    area: string;
}

export interface Vehicle {
    vehicleNumber: string;
    locationUpdates: LocationUpdate[];
}

export const mockVehicles: Vehicle[] = [
    {
      "vehicleNumber": "BAV-100",
      "locationUpdates": [
        {
          "date": "11/15/2024",
          "time": "6:00 AM",
          "latitude": 24.81831291,
          "longitude": 67.02511154,
          "area": "DHA"
        },
        {
          "date": "11/15/2024",
          "time": "7:00 AM",
          "latitude": 24.81327968,
          "longitude": 67.03875753,
          "area": "Clifton"
        },
        {
          "date": "11/15/2024",
          "time": "8:00 AM",
          "latitude": 24.81089781,
          "longitude": 67.02418858,
          "area": "DHA"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-101",
      "locationUpdates": [
        {
          "date": "11/14/2024",
          "time": "8:00 AM",
          "latitude": 24.86946463,
          "longitude": 67.00288336,
          "area": "Saddar"
        },
        {
          "date": "11/14/2024",
          "time": "9:00 AM",
          "latitude": 24.86995993,
          "longitude": 67.01521298,
          "area": "Saddar"
        },
        {
          "date": "11/14/2024",
          "time": "10:00 AM",
          "latitude": 24.9139699,
          "longitude": 67.02246015,
          "area": "Nazimabad"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-102",
      "locationUpdates": [
        {
          "date": "11/11/2024",
          "time": "9:00 AM",
          "latitude": 24.91355718,
          "longitude": 67.03201655,
          "area": "Nazimabad"
        },
        {
          "date": "11/11/2024",
          "time": "10:00 AM",
          "latitude": 24.82882054,
          "longitude": 67.13713286,
          "area": "Korangi"
        },
        {
          "date": "11/11/2024",
          "time": "11:00 AM",
          "latitude": 24.91486248,
          "longitude": 67.10117422,
          "area": "Gulshan-e-Iqbal"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-103",
      "locationUpdates": [
        {
          "date": "11/15/2024",
          "time": "10:00 AM",
          "latitude": 24.82082953,
          "longitude": 67.03286162,
          "area": "DHA"
        },
        {
          "date": "11/15/2024",
          "time": "11:00 AM",
          "latitude": 24.81890669,
          "longitude": 67.04413582,
          "area": "Clifton"
        },
        {
          "date": "11/15/2024",
          "time": "12:00 PM",
          "latitude": 24.82697098,
          "longitude": 67.13667345,
          "area": "Korangi"
        },
        {
          "date": "11/15/2024",
          "time": "1:00 PM",
          "latitude": 24.80556373,
          "longitude": 67.03758478,
          "area": "Clifton"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-104",
      "locationUpdates": [
        {
          "date": "11/14/2024",
          "time": "9:00 AM",
          "latitude": 24.91317016,
          "longitude": 67.03142976,
          "area": "Nazimabad"
        },
        {
          "date": "11/14/2024",
          "time": "10:00 AM",
          "latitude": 24.81829146,
          "longitude": 67.03494326,
          "area": "Clifton"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-105",
      "locationUpdates": [
        {
          "date": "11/15/2024",
          "time": "8:00 AM",
          "latitude": 24.86303854,
          "longitude": 67.00246584,
          "area": "Saddar"
        },
        {
          "date": "11/15/2024",
          "time": "9:00 AM",
          "latitude": 24.86819441,
          "longitude": 67.0101814,
          "area": "Saddar"
        },
        {
          "date": "11/15/2024",
          "time": "10:00 AM",
          "latitude": 24.87134375,
          "longitude": 67.00498703,
          "area": "Saddar"
        },
        {
          "date": "11/15/2024",
          "time": "11:00 AM",
          "latitude": 24.81363096,
          "longitude": 67.02732383,
          "area": "Clifton"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-106",
      "locationUpdates": [
        {
          "date": "11/10/2024",
          "time": "8:00 AM",
          "latitude": 24.88695688,
          "longitude": 67.19930002,
          "area": "Malir"
        },
        {
          "date": "11/10/2024",
          "time": "9:00 AM",
          "latitude": 24.85339224,
          "longitude": 67.0145302,
          "area": "Saddar"
        },
        {
          "date": "11/10/2024",
          "time": "10:00 AM",
          "latitude": 24.83833243,
          "longitude": 67.12301429,
          "area": "Korangi"
        },
        {
          "date": "11/10/2024",
          "time": "11:00 AM",
          "latitude": 24.8731545,
          "longitude": 67.20114934,
          "area": "Malir"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-107",
      "locationUpdates": [
        {
          "date": "11/13/2024",
          "time": "6:00 AM",
          "latitude": 24.81488019,
          "longitude": 67.03222652,
          "area": "Clifton"
        },
        {
          "date": "11/13/2024",
          "time": "7:00 AM",
          "latitude": 24.82465761,
          "longitude": 67.1305759,
          "area": "Korangi"
        },
        {
          "date": "11/13/2024",
          "time": "8:00 AM",
          "latitude": 24.82351604,
          "longitude": 67.1358828,
          "area": "Korangi"
        },
        {
          "date": "11/13/2024",
          "time": "9:00 AM",
          "latitude": 24.88365845,
          "longitude": 67.20256178,
          "area": "Malir"
        },
        {
          "date": "11/13/2024",
          "time": "10:00 AM",
          "latitude": 24.90328527,
          "longitude": 67.02762196,
          "area": "Nazimabad"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-108",
      "locationUpdates": [
        {
          "date": "11/14/2024",
          "time": "8:00 AM",
          "latitude": 24.81193769,
          "longitude": 67.03472171,
          "area": "Clifton"
        },
        {
          "date": "11/14/2024",
          "time": "9:00 AM",
          "latitude": 24.85937008,
          "longitude": 67.01784167,
          "area": "Saddar"
        },
        {
          "date": "11/14/2024",
          "time": "10:00 AM",
          "latitude": 24.86768732,
          "longitude": 67.20380792,
          "area": "Malir"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-109",
      "locationUpdates": [
        {
          "date": "11/15/2024",
          "time": "10:00 AM",
          "latitude": 24.81300916,
          "longitude": 67.02875212,
          "area": "Clifton"
        },
        {
          "date": "11/15/2024",
          "time": "11:00 AM",
          "latitude": 24.82765737,
          "longitude": 67.12959996,
          "area": "Korangi"
        },
        {
          "date": "11/15/2024",
          "time": "12:00 PM",
          "latitude": 24.87434152,
          "longitude": 67.19263432,
          "area": "Malir"
        },
        {
          "date": "11/15/2024",
          "time": "1:00 PM",
          "latitude": 24.83501472,
          "longitude": 67.12819491,
          "area": "Korangi"
        },
        {
          "date": "11/15/2024",
          "time": "2:00 PM",
          "latitude": 24.88298167,
          "longitude": 67.19411814,
          "area": "Malir"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-110",
      "locationUpdates": [
        {
          "date": "11/12/2024",
          "time": "7:00 AM",
          "latitude": 24.91460836,
          "longitude": 67.02623345,
          "area": "Nazimabad"
        },
        {
          "date": "11/12/2024",
          "time": "8:00 AM",
          "latitude": 24.88402033,
          "longitude": 67.19075278,
          "area": "Malir"
        },
        {
          "date": "11/12/2024",
          "time": "9:00 AM",
          "latitude": 24.82435416,
          "longitude": 67.13927456,
          "area": "Korangi"
        },
        {
          "date": "11/12/2024",
          "time": "10:00 AM",
          "latitude": 24.9085715,
          "longitude": 67.04026658,
          "area": "Nazimabad"
        },
        {
          "date": "11/12/2024",
          "time": "11:00 AM",
          "latitude": 24.80492764,
          "longitude": 67.03811731,
          "area": "Clifton"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-111",
      "locationUpdates": [
        {
          "date": "11/10/2024",
          "time": "8:00 AM",
          "latitude": 24.86531448,
          "longitude": 67.00447672,
          "area": "Saddar"
        },
        {
          "date": "11/10/2024",
          "time": "9:00 AM",
          "latitude": 24.81747632,
          "longitude": 67.0360207,
          "area": "Clifton"
        },
        {
          "date": "11/10/2024",
          "time": "10:00 AM",
          "latitude": 24.80984417,
          "longitude": 67.03817351,
          "area": "Clifton"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-112",
      "locationUpdates": [
        {
          "date": "11/15/2024",
          "time": "7:00 AM",
          "latitude": 24.91302672,
          "longitude": 67.0334208,
          "area": "Nazimabad"
        },
        {
          "date": "11/15/2024",
          "time": "8:00 AM",
          "latitude": 24.81820912,
          "longitude": 67.0381824,
          "area": "DHA"
        },
        {
          "date": "11/15/2024",
          "time": "9:00 AM",
          "latitude": 24.91362959,
          "longitude": 67.02596288,
          "area": "Nazimabad"
        },
        {
          "date": "11/15/2024",
          "time": "10:00 AM",
          "latitude": 24.86720765,
          "longitude": 67.19855042,
          "area": "Malir"
        },
        {
          "date": "11/15/2024",
          "time": "11:00 AM",
          "latitude": 24.89990249,
          "longitude": 67.0219602,
          "area": "Nazimabad"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-113",
      "locationUpdates": [
        {
          "date": "11/11/2024",
          "time": "9:00 AM",
          "latitude": 24.8869637,
          "longitude": 67.18950808,
          "area": "Malir"
        },
        {
          "date": "11/11/2024",
          "time": "10:00 AM",
          "latitude": 24.83797325,
          "longitude": 67.14196026,
          "area": "Korangi"
        },
        {
          "date": "11/11/2024",
          "time": "11:00 AM",
          "latitude": 24.92598219,
          "longitude": 67.10008304,
          "area": "Gulshan-e-Iqbal"
        },
        {
          "date": "11/11/2024",
          "time": "12:00 PM",
          "latitude": 24.86817725,
          "longitude": 67.00652792,
          "area": "Saddar"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-114",
      "locationUpdates": [
        {
          "date": "11/13/2024",
          "time": "10:00 AM",
          "latitude": 24.90433592,
          "longitude": 67.0271953,
          "area": "Nazimabad"
        },
        {
          "date": "11/13/2024",
          "time": "11:00 AM",
          "latitude": 24.90861373,
          "longitude": 67.09482973,
          "area": "Gulshan-e-Iqbal"
        },
        {
          "date": "11/13/2024",
          "time": "12:00 PM",
          "latitude": 24.81244106,
          "longitude": 67.04482885,
          "area": "Clifton"
        },
        {
          "date": "11/13/2024",
          "time": "1:00 PM",
          "latitude": 24.81235055,
          "longitude": 67.02772085,
          "area": "Clifton"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-115",
      "locationUpdates": [
        {
          "date": "11/12/2024",
          "time": "8:00 AM",
          "latitude": 24.91301307,
          "longitude": 67.08853659,
          "area": "Gulshan-e-Iqbal"
        },
        {
          "date": "11/12/2024",
          "time": "9:00 AM",
          "latitude": 24.92210455,
          "longitude": 67.10307357,
          "area": "Gulshan-e-Iqbal"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-116",
      "locationUpdates": [
        {
          "date": "11/15/2024",
          "time": "6:00 AM",
          "latitude": 24.91791302,
          "longitude": 67.10193385,
          "area": "Gulshan-e-Iqbal"
        },
        {
          "date": "11/15/2024",
          "time": "7:00 AM",
          "latitude": 24.83068056,
          "longitude": 67.13714485,
          "area": "Korangi"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-117",
      "locationUpdates": [
        {
          "date": "11/15/2024",
          "time": "9:00 AM",
          "latitude": 24.85832503,
          "longitude": 67.0178248,
          "area": "Saddar"
        },
        {
          "date": "11/15/2024",
          "time": "10:00 AM",
          "latitude": 24.89675666,
          "longitude": 67.03622474,
          "area": "Nazimabad"
        },
        {
          "date": "11/15/2024",
          "time": "11:00 AM",
          "latitude": 24.81486266,
          "longitude": 67.02874561,
          "area": "DHA"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-118",
      "locationUpdates": [
        {
          "date": "11/15/2024",
          "time": "6:00 AM",
          "latitude": 24.92585707,
          "longitude": 67.09019175,
          "area": "Gulshan-e-Iqbal"
        },
        {
          "date": "11/15/2024",
          "time": "7:00 AM",
          "latitude": 24.87518368,
          "longitude": 67.20458267,
          "area": "Malir"
        },
        {
          "date": "11/15/2024",
          "time": "8:00 AM",
          "latitude": 24.86317288,
          "longitude": 67.01031296,
          "area": "Saddar"
        },
        {
          "date": "11/15/2024",
          "time": "9:00 AM",
          "latitude": 24.85906109,
          "longitude": 67.00705569,
          "area": "Saddar"
        },
        {
          "date": "11/15/2024",
          "time": "10:00 AM",
          "latitude": 24.85327764,
          "longitude": 67.0177258,
          "area": "Saddar"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-119",
      "locationUpdates": [
        {
          "date": "11/15/2024",
          "time": "9:00 AM",
          "latitude": 24.82602391,
          "longitude": 67.13401276,
          "area": "Korangi"
        },
        {
          "date": "11/15/2024",
          "time": "10:00 AM",
          "latitude": 24.91263626,
          "longitude": 67.09772909,
          "area": "Gulshan-e-Iqbal"
        },
        {
          "date": "11/15/2024",
          "time": "11:00 AM",
          "latitude": 24.81743122,
          "longitude": 67.02914366,
          "area": "DHA"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-120",
      "locationUpdates": [
        {
          "date": "11/10/2024",
          "time": "7:00 AM",
          "latitude": 24.81194426,
          "longitude": 67.04205208,
          "area": "Clifton"
        },
        {
          "date": "11/10/2024",
          "time": "8:00 AM",
          "latitude": 24.91125512,
          "longitude": 67.09563361,
          "area": "Gulshan-e-Iqbal"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-121",
      "locationUpdates": [
        {
          "date": "11/14/2024",
          "time": "7:00 AM",
          "latitude": 24.80279123,
          "longitude": 67.02448721,
          "area": "DHA"
        },
        {
          "date": "11/14/2024",
          "time": "8:00 AM",
          "latitude": 24.81428838,
          "longitude": 67.02892377,
          "area": "DHA"
        },
        {
          "date": "11/14/2024",
          "time": "9:00 AM",
          "latitude": 24.85827758,
          "longitude": 67.01140406,
          "area": "Saddar"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-122",
      "locationUpdates": [
        {
          "date": "11/12/2024",
          "time": "10:00 AM",
          "latitude": 24.90808481,
          "longitude": 67.09894964,
          "area": "Gulshan-e-Iqbal"
        },
        {
          "date": "11/12/2024",
          "time": "11:00 AM",
          "latitude": 24.89626653,
          "longitude": 67.02596497,
          "area": "Nazimabad"
        },
        {
          "date": "11/12/2024",
          "time": "12:00 PM",
          "latitude": 24.80351981,
          "longitude": 67.02474645,
          "area": "DHA"
        },
        {
          "date": "11/12/2024",
          "time": "1:00 PM",
          "latitude": 24.83440644,
          "longitude": 67.12793855,
          "area": "Korangi"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-123",
      "locationUpdates": [
        {
          "date": "11/14/2024",
          "time": "10:00 AM",
          "latitude": 24.87937757,
          "longitude": 67.20346097,
          "area": "Malir"
        },
        {
          "date": "11/14/2024",
          "time": "11:00 AM",
          "latitude": 24.91358191,
          "longitude": 67.02748099,
          "area": "Nazimabad"
        },
        {
          "date": "11/14/2024",
          "time": "12:00 PM",
          "latitude": 24.80805442,
          "longitude": 67.03328031,
          "area": "Clifton"
        },
        {
          "date": "11/14/2024",
          "time": "1:00 PM",
          "latitude": 24.86862133,
          "longitude": 67.01569975,
          "area": "Saddar"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-124",
      "locationUpdates": [
        {
          "date": "11/12/2024",
          "time": "10:00 AM",
          "latitude": 24.91215198,
          "longitude": 67.10369658,
          "area": "Gulshan-e-Iqbal"
        },
        {
          "date": "11/12/2024",
          "time": "11:00 AM",
          "latitude": 24.8398959,
          "longitude": 67.13103681,
          "area": "Korangi"
        },
        {
          "date": "11/12/2024",
          "time": "12:00 PM",
          "latitude": 24.92650628,
          "longitude": 67.0954739,
          "area": "Gulshan-e-Iqbal"
        },
        {
          "date": "11/12/2024",
          "time": "1:00 PM",
          "latitude": 24.9246521,
          "longitude": 67.10347084,
          "area": "Gulshan-e-Iqbal"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-125",
      "locationUpdates": [
        {
          "date": "11/12/2024",
          "time": "6:00 AM",
          "latitude": 24.80918974,
          "longitude": 67.04590972,
          "area": "Clifton"
        },
        {
          "date": "11/12/2024",
          "time": "7:00 AM",
          "latitude": 24.82320908,
          "longitude": 67.03082259,
          "area": "Clifton"
        },
        {
          "date": "11/12/2024",
          "time": "8:00 AM",
          "latitude": 24.87768697,
          "longitude": 67.189174,
          "area": "Malir"
        },
        {
          "date": "11/12/2024",
          "time": "9:00 AM",
          "latitude": 24.88485768,
          "longitude": 67.20265265,
          "area": "Malir"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-126",
      "locationUpdates": [
        {
          "date": "11/15/2024",
          "time": "10:00 AM",
          "latitude": 24.92698384,
          "longitude": 67.08996901,
          "area": "Gulshan-e-Iqbal"
        },
        {
          "date": "11/15/2024",
          "time": "11:00 AM",
          "latitude": 24.83423786,
          "longitude": 67.12365549,
          "area": "Korangi"
        },
        {
          "date": "11/15/2024",
          "time": "12:00 PM",
          "latitude": 24.88451331,
          "longitude": 67.19580706,
          "area": "Malir"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-127",
      "locationUpdates": [
        {
          "date": "11/13/2024",
          "time": "10:00 AM",
          "latitude": 24.85686605,
          "longitude": 67.01826661,
          "area": "Saddar"
        },
        {
          "date": "11/13/2024",
          "time": "11:00 AM",
          "latitude": 24.84221766,
          "longitude": 67.12316424,
          "area": "Korangi"
        },
        {
          "date": "11/13/2024",
          "time": "12:00 PM",
          "latitude": 24.81251588,
          "longitude": 67.02870706,
          "area": "Clifton"
        },
        {
          "date": "11/13/2024",
          "time": "1:00 PM",
          "latitude": 24.9261551,
          "longitude": 67.09971614,
          "area": "Gulshan-e-Iqbal"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-128",
      "locationUpdates": [
        {
          "date": "11/10/2024",
          "time": "9:00 AM",
          "latitude": 24.85561667,
          "longitude": 67.00828716,
          "area": "Saddar"
        },
        {
          "date": "11/10/2024",
          "time": "10:00 AM",
          "latitude": 24.8082815,
          "longitude": 67.03521934,
          "area": "DHA"
        },
        {
          "date": "11/10/2024",
          "time": "11:00 AM",
          "latitude": 24.88715741,
          "longitude": 67.18788615,
          "area": "Malir"
        },
        {
          "date": "11/10/2024",
          "time": "12:00 PM",
          "latitude": 24.87520358,
          "longitude": 67.19070473,
          "area": "Malir"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-129",
      "locationUpdates": [
        {
          "date": "11/14/2024",
          "time": "9:00 AM",
          "latitude": 24.92553999,
          "longitude": 67.09112277,
          "area": "Gulshan-e-Iqbal"
        },
        {
          "date": "11/14/2024",
          "time": "10:00 AM",
          "latitude": 24.8121012,
          "longitude": 67.02913547,
          "area": "Clifton"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-130",
      "locationUpdates": [
        {
          "date": "11/11/2024",
          "time": "10:00 AM",
          "latitude": 24.82383472,
          "longitude": 67.12683596,
          "area": "Korangi"
        },
        {
          "date": "11/11/2024",
          "time": "11:00 AM",
          "latitude": 24.81587437,
          "longitude": 67.02894831,
          "area": "DHA"
        },
        {
          "date": "11/11/2024",
          "time": "12:00 PM",
          "latitude": 24.83943983,
          "longitude": 67.14203688,
          "area": "Korangi"
        },
        {
          "date": "11/11/2024",
          "time": "1:00 PM",
          "latitude": 24.82630145,
          "longitude": 67.12391488,
          "area": "Korangi"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-131",
      "locationUpdates": [
        {
          "date": "11/12/2024",
          "time": "10:00 AM",
          "latitude": 24.88671661,
          "longitude": 67.19447443,
          "area": "Malir"
        },
        {
          "date": "11/12/2024",
          "time": "11:00 AM",
          "latitude": 24.81759045,
          "longitude": 67.02836318,
          "area": "Clifton"
        },
        {
          "date": "11/12/2024",
          "time": "12:00 PM",
          "latitude": 24.89687068,
          "longitude": 67.03954512,
          "area": "Nazimabad"
        },
        {
          "date": "11/12/2024",
          "time": "1:00 PM",
          "latitude": 24.90055921,
          "longitude": 67.03688179,
          "area": "Nazimabad"
        },
        {
          "date": "11/12/2024",
          "time": "2:00 PM",
          "latitude": 24.92139603,
          "longitude": 67.09368441,
          "area": "Gulshan-e-Iqbal"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-132",
      "locationUpdates": [
        {
          "date": "11/11/2024",
          "time": "9:00 AM",
          "latitude": 24.85531592,
          "longitude": 67.01466912,
          "area": "Saddar"
        },
        {
          "date": "11/11/2024",
          "time": "10:00 AM",
          "latitude": 24.92308557,
          "longitude": 67.09523149,
          "area": "Gulshan-e-Iqbal"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-133",
      "locationUpdates": [
        {
          "date": "11/14/2024",
          "time": "10:00 AM",
          "latitude": 24.91875913,
          "longitude": 67.08823053,
          "area": "Gulshan-e-Iqbal"
        },
        {
          "date": "11/14/2024",
          "time": "11:00 AM",
          "latitude": 24.83988702,
          "longitude": 67.13978641,
          "area": "Korangi"
        },
        {
          "date": "11/14/2024",
          "time": "12:00 PM",
          "latitude": 24.85987149,
          "longitude": 67.01631473,
          "area": "Saddar"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-134",
      "locationUpdates": [
        {
          "date": "11/12/2024",
          "time": "10:00 AM",
          "latitude": 24.8708085,
          "longitude": 67.1984429,
          "area": "Malir"
        },
        {
          "date": "11/12/2024",
          "time": "11:00 AM",
          "latitude": 24.81171848,
          "longitude": 67.02641429,
          "area": "Clifton"
        },
        {
          "date": "11/12/2024",
          "time": "12:00 PM",
          "latitude": 24.83606614,
          "longitude": 67.12513429,
          "area": "Korangi"
        },
        {
          "date": "11/12/2024",
          "time": "1:00 PM",
          "latitude": 24.81253378,
          "longitude": 67.03153852,
          "area": "DHA"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-135",
      "locationUpdates": [
        {
          "date": "11/15/2024",
          "time": "9:00 AM",
          "latitude": 24.82442028,
          "longitude": 67.13311646,
          "area": "Korangi"
        },
        {
          "date": "11/15/2024",
          "time": "10:00 AM",
          "latitude": 24.88571393,
          "longitude": 67.19892528,
          "area": "Malir"
        },
        {
          "date": "11/15/2024",
          "time": "11:00 AM",
          "latitude": 24.91299302,
          "longitude": 67.10178884,
          "area": "Gulshan-e-Iqbal"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-136",
      "locationUpdates": [
        {
          "date": "11/13/2024",
          "time": "8:00 AM",
          "latitude": 24.81379326,
          "longitude": 67.03688861,
          "area": "DHA"
        },
        {
          "date": "11/13/2024",
          "time": "9:00 AM",
          "latitude": 24.90049879,
          "longitude": 67.03506237,
          "area": "Nazimabad"
        },
        {
          "date": "11/13/2024",
          "time": "10:00 AM",
          "latitude": 24.88213882,
          "longitude": 67.20360727,
          "area": "Malir"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-137",
      "locationUpdates": [
        {
          "date": "11/15/2024",
          "time": "9:00 AM",
          "latitude": 24.82594596,
          "longitude": 67.13495898,
          "area": "Korangi"
        },
        {
          "date": "11/15/2024",
          "time": "10:00 AM",
          "latitude": 24.81501982,
          "longitude": 67.03002533,
          "area": "Clifton"
        },
        {
          "date": "11/15/2024",
          "time": "11:00 AM",
          "latitude": 24.87855934,
          "longitude": 67.20433413,
          "area": "Malir"
        },
        {
          "date": "11/15/2024",
          "time": "12:00 PM",
          "latitude": 24.89764305,
          "longitude": 67.02947635,
          "area": "Nazimabad"
        },
        {
          "date": "11/15/2024",
          "time": "1:00 PM",
          "latitude": 24.84294442,
          "longitude": 67.1329174,
          "area": "Korangi"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-138",
      "locationUpdates": [
        {
          "date": "11/10/2024",
          "time": "10:00 AM",
          "latitude": 24.83464057,
          "longitude": 67.12547993,
          "area": "Korangi"
        },
        {
          "date": "11/10/2024",
          "time": "11:00 AM",
          "latitude": 24.81308748,
          "longitude": 67.02357337,
          "area": "DHA"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-139",
      "locationUpdates": [
        {
          "date": "11/15/2024",
          "time": "6:00 AM",
          "latitude": 24.82547114,
          "longitude": 67.12733503,
          "area": "Korangi"
        },
        {
          "date": "11/15/2024",
          "time": "7:00 AM",
          "latitude": 24.86262799,
          "longitude": 67.01722608,
          "area": "Saddar"
        },
        {
          "date": "11/15/2024",
          "time": "8:00 AM",
          "latitude": 24.82020659,
          "longitude": 67.02318159,
          "area": "DHA"
        },
        {
          "date": "11/15/2024",
          "time": "9:00 AM",
          "latitude": 24.91051188,
          "longitude": 67.03988939,
          "area": "Nazimabad"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-140",
      "locationUpdates": [
        {
          "date": "11/12/2024",
          "time": "9:00 AM",
          "latitude": 24.82959739,
          "longitude": 67.13268094,
          "area": "Korangi"
        },
        {
          "date": "11/12/2024",
          "time": "10:00 AM",
          "latitude": 24.90604786,
          "longitude": 67.02425454,
          "area": "Nazimabad"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-141",
      "locationUpdates": [
        {
          "date": "11/12/2024",
          "time": "8:00 AM",
          "latitude": 24.90069956,
          "longitude": 67.02150311,
          "area": "Nazimabad"
        },
        {
          "date": "11/12/2024",
          "time": "9:00 AM",
          "latitude": 24.89862262,
          "longitude": 67.02794277,
          "area": "Nazimabad"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-142",
      "locationUpdates": [
        {
          "date": "11/15/2024",
          "time": "6:00 AM",
          "latitude": 24.91711637,
          "longitude": 67.10201845,
          "area": "Gulshan-e-Iqbal"
        },
        {
          "date": "11/15/2024",
          "time": "7:00 AM",
          "latitude": 24.86245856,
          "longitude": 67.00194416,
          "area": "Saddar"
        },
        {
          "date": "11/15/2024",
          "time": "8:00 AM",
          "latitude": 24.82212663,
          "longitude": 67.0255176,
          "area": "DHA"
        },
        {
          "date": "11/15/2024",
          "time": "9:00 AM",
          "latitude": 24.87785843,
          "longitude": 67.18662232,
          "area": "Malir"
        },
        {
          "date": "11/15/2024",
          "time": "10:00 AM",
          "latitude": 24.80416888,
          "longitude": 67.02747299,
          "area": "DHA"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-143",
      "locationUpdates": [
        {
          "date": "11/15/2024",
          "time": "8:00 AM",
          "latitude": 24.91548736,
          "longitude": 67.02319828,
          "area": "Nazimabad"
        },
        {
          "date": "11/15/2024",
          "time": "9:00 AM",
          "latitude": 24.85894648,
          "longitude": 67.01887816,
          "area": "Saddar"
        },
        {
          "date": "11/15/2024",
          "time": "10:00 AM",
          "latitude": 24.90995443,
          "longitude": 67.03955701,
          "area": "Nazimabad"
        },
        {
          "date": "11/15/2024",
          "time": "11:00 AM",
          "latitude": 24.8770046,
          "longitude": 67.20130309,
          "area": "Malir"
        },
        {
          "date": "11/15/2024",
          "time": "12:00 PM",
          "latitude": 24.86157908,
          "longitude": 67.01387997,
          "area": "Saddar"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-144",
      "locationUpdates": [
        {
          "date": "11/13/2024",
          "time": "8:00 AM",
          "latitude": 24.86967568,
          "longitude": 67.19819327,
          "area": "Malir"
        },
        {
          "date": "11/13/2024",
          "time": "9:00 AM",
          "latitude": 24.90083544,
          "longitude": 67.02855984,
          "area": "Nazimabad"
        },
        {
          "date": "11/13/2024",
          "time": "10:00 AM",
          "latitude": 24.81982495,
          "longitude": 67.03496339,
          "area": "DHA"
        },
        {
          "date": "11/13/2024",
          "time": "11:00 AM",
          "latitude": 24.88234663,
          "longitude": 67.19183397,
          "area": "Malir"
        },
        {
          "date": "11/13/2024",
          "time": "12:00 PM",
          "latitude": 24.87524584,
          "longitude": 67.19286806,
          "area": "Malir"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-145",
      "locationUpdates": [
        {
          "date": "11/12/2024",
          "time": "6:00 AM",
          "latitude": 24.81738879,
          "longitude": 67.02782457,
          "area": "DHA"
        },
        {
          "date": "11/12/2024",
          "time": "7:00 AM",
          "latitude": 24.91364301,
          "longitude": 67.10039349,
          "area": "Gulshan-e-Iqbal"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-146",
      "locationUpdates": [
        {
          "date": "11/11/2024",
          "time": "6:00 AM",
          "latitude": 24.82785943,
          "longitude": 67.13864619,
          "area": "Korangi"
        },
        {
          "date": "11/11/2024",
          "time": "7:00 AM",
          "latitude": 24.86615867,
          "longitude": 67.00839989,
          "area": "Saddar"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-147",
      "locationUpdates": [
        {
          "date": "11/15/2024",
          "time": "8:00 AM",
          "latitude": 24.8969307,
          "longitude": 67.02667719,
          "area": "Nazimabad"
        },
        {
          "date": "11/15/2024",
          "time": "9:00 AM",
          "latitude": 24.90882943,
          "longitude": 67.09478548,
          "area": "Gulshan-e-Iqbal"
        },
        {
          "date": "11/15/2024",
          "time": "10:00 AM",
          "latitude": 24.81044375,
          "longitude": 67.02736733,
          "area": "Clifton"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-148",
      "locationUpdates": [
        {
          "date": "11/11/2024",
          "time": "10:00 AM",
          "latitude": 24.87396354,
          "longitude": 67.19749552,
          "area": "Malir"
        },
        {
          "date": "11/11/2024",
          "time": "11:00 AM",
          "latitude": 24.86847756,
          "longitude": 67.01350169,
          "area": "Saddar"
        },
        {
          "date": "11/11/2024",
          "time": "12:00 PM",
          "latitude": 24.81775196,
          "longitude": 67.02507726,
          "area": "DHA"
        },
        {
          "date": "11/11/2024",
          "time": "1:00 PM",
          "latitude": 24.82745486,
          "longitude": 67.12461528,
          "area": "Korangi"
        },
        {
          "date": "11/11/2024",
          "time": "2:00 PM",
          "latitude": 24.8746846,
          "longitude": 67.19324539,
          "area": "Malir"
        }
      ]
    },
    {
      "vehicleNumber": "BAV-149",
      "locationUpdates": [
        {
          "date": "11/14/2024",
          "time": "8:00 AM",
          "latitude": 24.86386235,
          "longitude": 67.00070209,
          "area": "Saddar"
        },
        {
          "date": "11/14/2024",
          "time": "9:00 AM",
          "latitude": 24.81116359,
          "longitude": 67.04552883,
          "area": "Clifton"
        },
        {
          "date": "11/14/2024",
          "time": "10:00 AM",
          "latitude": 24.87864803,
          "longitude": 67.19505908,
          "area": "Malir"
        },
        {
          "date": "11/14/2024",
          "time": "11:00 AM",
          "latitude": 24.92780651,
          "longitude": 67.08871284,
          "area": "Gulshan-e-Iqbal"
        },
        {
          "date": "11/14/2024",
          "time": "12:00 PM",
          "latitude": 24.88566241,
          "longitude": 67.19596155,
          "area": "Malir"
        }
      ]
    }
  ]