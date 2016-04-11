export class MainController {
  constructor ($timeout, webDevTec, sampleFavData, toastr) {
    'ngInject';

    this.awesomeThings = [];
    this.favs = [];
    this.classAnimation = '';
    this.creationDate = 1460340753899;
    this.toastr = toastr;

    this.activate($timeout, webDevTec, sampleFavData);
  }

  activate($timeout, webDevTec, sampleFavData) {
    this.getWebDevTec(webDevTec);
    this.getFav(sampleFavData);
    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }

  getWebDevTec(webDevTec) {
    this.awesomeThings = webDevTec.getTec();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  getFav(sampleFavData) {
    this.favs = sampleFavData.getFav();
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }
}
