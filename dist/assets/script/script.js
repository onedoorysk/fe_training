"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Name = function () {
    function Name(firstName, lastName) {
        _classCallCheck(this, Name);

        this.firstName = firstName;
        this.lastName = lastName;
    }

    _createClass(Name, [{
        key: "getName",
        value: function getName() {
            return this.lastName + " " + this.firstName;
        }
    }]);

    return Name;
}();
//# sourceMappingURL=script.js.map