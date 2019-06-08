var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Factory = /** @class */ (function () {
    function Factory() {
    }
    return Factory;
}());
var VolkwagenFactory = /** @class */ (function (_super) {
    __extends(VolkwagenFactory, _super);
    function VolkwagenFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VolkwagenFactory.prototype.create = function () {
        return new VolkswagenVehicle();
    };
    return VolkwagenFactory;
}(Factory));
var VolkswagenVehicle = /** @class */ (function () {
    function VolkswagenVehicle() {
    }
    VolkswagenVehicle.prototype.move = function () {
        return true;
    };
    return VolkswagenVehicle;
}());
var vehicle1 = new VolkwagenFactory().create();
console.log(vehicle1.move());
//# sourceMappingURL=factory_method.js.map