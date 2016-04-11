export class SampleFavDataService {
  constructor () {
    'ngInject';

    this.data = [
      {
        'name': 'Metro',
        'url': 'https://metro.ca/',
        'description': 'Mid-tier grocery',
        'tags': ['Grocery']
      },
      {
        'name': 'Le Cafe Michi',
        'url': 'https://www.zomato.com/toronto/le-cafe-michi-scarborough-gta',
        'description': 'Set in a strip mall, this Japanese eatery offers sushi & desserts such as green tea mousse cake.',
        'address': '1802 Pharmacy Ave, Toronto, ON M1T 1K1',
        'tags': ['Restaurant', 'Japanese']
      },
      {
        'name': 'Franks Gourmet Hotdogsi',
        'url': 'http://www.fancyfranks.com/',
        'description': 'Hip counter serve specializing in gourmet franks with unique toppings, from kimchi to PB&J.',
        'address': '326 College St, Toronto, ON M5T 1S3',
        'menu': 'http://www.fancyfranks.com/menu',
        'tags': ['Restaurant', 'American']
      },
      {
        'name': 'Porchetta And Co',
        'url': 'http://porchettaco.com/',
        'description': 'Slow-cooked roast pork sandwiches in a counter-service, cash-only spot with very limited seating.',
        'address': '1802 Pharmacy Ave, Toronto, ON M1T 1K1',
        'img': 'http://porchettaco.com/img/porchetta&co_house_special.jpg',
        'tags': ['Restaurant', 'Sandwiches']
      }
    ];
  }

  getFav() {
    return this.data;
  }
}
