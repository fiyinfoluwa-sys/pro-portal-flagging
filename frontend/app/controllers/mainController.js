angular.module('flagApp')
  .controller('MainController', ['evaluateService', function(evaluateService) {
    const vm = this;

    // Initialize candidate and flags
    vm.candidate = {
      name: '',
      nacExam: null,
      mccqe1: null,
      canadianExperience: 0,
      practiceGaps: 0
    };
    vm.flags = [];

    // Call backend, display flags, and save state
    vm.evaluate = () => {
      evaluateService.evaluate(vm.candidate).then(res => {
        vm.flags = res.data.flags;
        localStorage.setItem('lastEval', JSON.stringify({ candidate: vm.candidate, flags: vm.flags }));
      });
    };

    // Mark a flag overridden
    vm.override = index => {
      vm.flags[index].overridden = true;
    };

    // Acknowledge a flag
    vm.ack = index => {
      vm.flags[index].acknowledged = true;
    };
  }]);

