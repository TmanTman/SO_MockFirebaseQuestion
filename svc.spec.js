describe('Test', function() {

    var mySvc = null;
    beforeEach(function() {
        MockFirebase.override();
        module('app');
        inject(function(_myService_) {
            myService = _myService_;
        });
        myService.start();
    });

    it('that it reads data correctly', function() {
        // var ref = new Firebase('mock://eg.firebaseio.com/data');
        var ref = myService.getRef();
        ref.set({
            test: 'success!'
        });
        ref.flush();
        var data = myService.data();
        expect(data).toEqual({
            test: 'success!'
        });
    });
});
