import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
            "id": 524047,
            "poster_path": "https://image.tmdb.org/t/p/original//sA154deR0X51EcR2lm2FfDczryg.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//juzEhsX92if2lJ2CSqKAI4RQswt.jpg",
            "title": "Greenland",
            "average_rating": 9,
            "release_date": "2020-07-29"
        },
        {
            "id": 606234,
            "poster_path": "https://image.tmdb.org/t/p/original//eDnHgozW8vfOaLHzfpHluf1GZCW.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//u9YEh2xVAPVTKoaMNlB5tH6pXkm.jpg",
            "title": "Archive",
            "average_rating": 8.5,
            "release_date": "2020-08-13"
        },
        {
            "id": 149,
            "poster_path": "https://image.tmdb.org/t/p/original//5KlRFKKSbyCiyYpZSS3A6G5bW0K.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//qZ4NYuwME0j6QgJmIE6AZMgmCaj.jpg",
            "title": "Akira",
            "average_rating": 9,
            "release_date": "1988-07-16"
        },
        {
            "id": 437518,
            "poster_path": "https://image.tmdb.org/t/p/original//puVA7UoLuu7Q7OtGRWINhT2XpOB.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//z8PntmDQqNt8ertwoXQTFoMQg5u.jpg",
            "title": "Friend of the World",
            "average_rating": 1,
            "release_date": "2020-08-15"
        },
        {
            "id": 521034,
            "poster_path": "https://image.tmdb.org/t/p/original//5MSDwUcqnGodFTvtlLiLKK0XKS.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//8PK4X8U3C79ilzIjNTkTgjmc4js.jpg",
            "title": "The Secret Garden",
            "average_rating": 6,
            "release_date": "2020-07-08"
        },
        {
            "id": 579583,
            "poster_path": "https://image.tmdb.org/t/p/original//zQFjMmE3K9AX5QrBL1SXIxYQ9jz.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//5rwcd24GGltKiqdPT4G2dmchLr9.jpg",
            "title": "The King of Staten Island",
            "average_rating": 6,
            "release_date": "2020-07-22"
        },
        {
            "id": 385103,
            "poster_path": "https://image.tmdb.org/t/p/original//jHo2M1OiH9Re33jYtUQdfzPeUkx.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//fKtYXUhX5fxMxzQfyUcQW9Shik6.jpg",
            "title": "Scoob!",
            "average_rating": 6,
            "release_date": "2020-07-08"
        },
        {
            "id": 531499,
            "poster_path": "https://image.tmdb.org/t/p/original//3eg0kGC2Xh0vhydJHO37Sp4cmMt.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//zogWnCSztU8xvabaepQnAwsOtOt.jpg",
            "title": "The Tax Collector",
            "average_rating": 9,
            "release_date": "2020-08-07"
        },
        {
            "id": 27205,
            "poster_path": "https://image.tmdb.org/t/p/original//9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
            "title": "Inception",
            "average_rating": 3,
            "release_date": "2010-07-15"
        },
        {
            "id": 390635,
            "poster_path": "https://image.tmdb.org/t/p/original//jYoRYxB56YU7CmqU4BfDWIuHZUX.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//mWb5UjxCmevMlvbxnXc9Y3zc00w.jpg",
            "title": "Fate/Stay Night: Heaven's Feel III. Spring Song",
            "average_rating": 4,
            "release_date": "2020-08-15"
        },
        {
            "id": 659991,
            "poster_path": "https://image.tmdb.org/t/p/original//dKjD3DTZjRI3Ipkf7Oz5zAILnwD.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//5nRyaVklxyA9OkxqZaPv1KBRqpd.jpg",
            "title": "Made in Italy",
            "average_rating": 8,
            "release_date": "2020-08-06"
        },
        {
            "id": 496243,
            "poster_path": "https://image.tmdb.org/t/p/original//7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg",
            "title": "Parasite",
            "average_rating": 6,
            "release_date": "2019-05-30"
        },
        {
            "id": 517412,
            "poster_path": "https://image.tmdb.org/t/p/original//v0guO0krvyz8IfKGxEje04LVM9d.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//4tphk3VbqoRtCVuOzlEQxUrpR6c.jpg",
            "title": "Tesla",
            "average_rating": 2,
            "release_date": "2020-08-14"
        },
        {
            "id": 522444,
            "poster_path": "https://image.tmdb.org/t/p/original//95S6PinQIvVe4uJAd82a2iGZ0rA.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//fRrpOILyXuWaWLmqF7kXeMVwITQ.jpg",
            "title": "Black Water: Abyss",
            "average_rating": 2,
            "release_date": "2020-07-09"
        },
        {
            "id": 530915,
            "poster_path": "https://image.tmdb.org/t/p/original//iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//cqa3sa4c4jevgnEJwq3CMF8UfTG.jpg",
            "title": "1917",
            "average_rating": 5,
            "release_date": "2019-12-25"
        },
        {
            "id": 671,
            "poster_path": "https://image.tmdb.org/t/p/original//wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//hziiv14OpD73u9gAak4XDDfBKa2.jpg",
            "title": "Harry Potter and the Philosopher's Stone",
            "average_rating": 9,
            "release_date": "2001-11-16"
        },
        {
            "id": 514847,
            "poster_path": "https://image.tmdb.org/t/p/original//wxPhn4ef1EAo5njxwBkAEVrlJJG.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//qfQ78ZKiouoM2yhAnfNblp9ijQE.jpg",
            "title": "The Hunt",
            "average_rating": 8,
            "release_date": "2020-03-11"
        },
        {
            "id": 480857,
            "poster_path": "https://image.tmdb.org/t/p/original//akHIQu8W3rOgT28r25ggXaKcQIr.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//e7tjpKP36Xd6BzyTMZo4AUe86VM.jpg",
            "title": "Radioactive",
            "average_rating": 9,
            "release_date": "2020-03-11"
        },
        {
            "id": 594718,
            "poster_path": "https://image.tmdb.org/t/p/original//aQQW03qNC5O5N2C5XDAbvtywOVr.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//lGydLXSaDLxN8WoAdubHCnhAgfd.jpg",
            "title": "Sputnik",
            "average_rating": 8,
            "release_date": "2020-04-16"
        },
        {
            "id": 587496,
            "poster_path": "https://image.tmdb.org/t/p/original//3ynPnBXQVT2Y0s19fDIPlWKUlxH.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//2gBMBfmQvHeOQQ5PiKiuxVdGs77.jpg",
            "title": "The Rental",
            "average_rating": 2,
            "release_date": "2020-07-23"
        },
        {
            "id": 653598,
            "poster_path": "https://image.tmdb.org/t/p/original//hJUA4wfvw0A6l3niOfxourqpERA.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//nTyl9fqTQNtwh8BUTZ0WzKH16r7.jpg",
            "title": "Spree",
            "average_rating": 2,
            "release_date": "2020-08-14"
        },
        {
            "id": 454626,
            "poster_path": "https://image.tmdb.org/t/p/original//aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//diFNHa3SXaGSSFovGatNWxLz2tn.jpg",
            "title": "Sonic the Hedgehog",
            "average_rating": 4,
            "release_date": "2020-02-12"
        },
        {
            "id": 486589,
            "poster_path": "https://image.tmdb.org/t/p/original//MBiKqTsouYqAACLYNDadsjhhC0.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//bga3i5jcejBekr2FCGJga1fYCh.jpg",
            "title": "Red Shoes and the Seven Dwarfs",
            "average_rating": 9,
            "release_date": "2019-07-25"
        },
        {
            "id": 651586,
            "poster_path": "https://image.tmdb.org/t/p/original//27eA9xGba61LtKr7gJRnhtDDgEP.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//1iEDKZHREDetZcOoqioZewcHOw9.jpg",
            "title": "Superagente Makey",
            "average_rating": 3,
            "release_date": "2020-07-17"
        },
        {
            "id": 489326,
            "poster_path": "https://image.tmdb.org/t/p/original//aVbqhqYtlxwEGihTEhewZAgDOCX.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//dFB6Tiy3z2xRLbnEUB5ocApT5xG.jpg",
            "title": "Mortal",
            "average_rating": 5,
            "release_date": "2020-02-28"
        },
        {
            "id": 446893,
            "poster_path": "https://image.tmdb.org/t/p/original//7W0G3YECgDAfnuiHG91r8WqgIOe.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//qsxhnirlp7y4Ae9bd11oYJSX59j.jpg",
            "title": "Trolls World Tour",
            "average_rating": 5,
            "release_date": "2020-03-12"
        },
        {
            "id": 575479,
            "poster_path": "https://image.tmdb.org/t/p/original//eV4HVz2m27fJ2VqZwzZd4Yf8Tli.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//tJkjdZguScL7aZrHvgOma7rhu8c.jpg",
            "title": "An Easy Girl",
            "average_rating": 6,
            "release_date": "2019-08-28"
        },
        {
            "id": 605804,
            "poster_path": "https://image.tmdb.org/t/p/original//7Jk4pDMM3G9h29lWshEZjX711wg.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//su0huGwZfAmzPvUjnlG42LO9GFl.jpg",
            "title": "The Wretched",
            "average_rating": 9,
            "release_date": "2020-05-01"
        },
        {
            "id": 400160,
            "poster_path": "https://image.tmdb.org/t/p/original//j8MRnCjuN7kpM8w3B5hM5mrvTaE.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//wu1uilmhM4TdluKi2ytfz8gidHf.jpg",
            "title": "The SpongeBob Movie: Sponge on the Run",
            "average_rating": 6,
            "release_date": "2020-08-14"
        },
        {
            "id": 531876,
            "poster_path": "https://image.tmdb.org/t/p/original//hPkqY2EMqWUnFEoedukilIUieVG.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//n1RohH2VoK1CdVI2fXvcP19dSlm.jpg",
            "title": "The Outpost",
            "average_rating": 2,
            "release_date": "2020-06-24"
        },
        {
            "id": 625568,
            "poster_path": "https://image.tmdb.org/t/p/original//7I8BmtqjLyyMf3EjrUEIQs0gFYw.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//e7bpDu3RKsjOYLSt9gHYT2c32Zd.jpg",
            "title": "Unhinged",
            "average_rating": 9,
            "release_date": "2020-07-02"
        },
        {
            "id": 505707,
            "poster_path": "https://image.tmdb.org/t/p/original//k50gYFDfpAyxcIGjWjnXAaOM81e.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//p71xHf9KBqEIP6gQZ53to2lDh4E.jpg",
            "title": "Waiting for the Barbarians",
            "average_rating": 6,
            "release_date": "2019-09-06"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Header</h1>
        </header>
        <section>Movie Display Section</section>
      </div>
    );
  }
}

export default App;
