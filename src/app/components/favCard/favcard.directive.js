export function FavCardDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/favcard/favcard.html',
    scope: {
      item: '='
    },
    controller: FavCardController,
    controllerAs: 'ctrl',
    bindToController: true
  };

  return directive;
}

class FavCardController {
  constructor () {
    'ngInject';
  }
}
