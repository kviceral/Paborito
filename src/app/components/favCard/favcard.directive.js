export function FavCardDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/favcard/favcard.html',
    scope: {
      creationDate: '='
    },
    controller: FavCardController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class FavCardController {
  constructor (moment) {
    'ngInject';

    // "this.creation" is available by directive option "bindToController: true"
    this.relativeDate = moment(this.creationDate).fromNow();
  }
}
