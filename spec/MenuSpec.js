describe("Menu", function() {
    var menu;
    const menu_items = [{ "dish": "Pizza", "price": 5.00 }, { "dish": "Pasta", "price": 3.50 }, { "dish": "Calzone", "price": 7.99 }];
    beforeEach(function() {
        menu = new Menu(menu_items);
    });

    describe('#all', function() {
        it("should return all menu items", function() {
            expect(menu.all()).toEqual(menu_items);
        });
    });
});