(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _postFixedNonTaxable = require('./rendaFixaApp/entities/behaviours/postFixedNonTaxable');

var _postFixedNonTaxable2 = _interopRequireDefault(_postFixedNonTaxable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
    var resetEmotes = function resetEmotes() {
        alert('let\'s go! 2');
        console.log('asfasdfsda');
        var r = _postFixedNonTaxable2.default.updatedGrossIncomeRate(12, 1.5, 1.5);
        document.getElementById('result').innerText = r;
    };

    document.getElementById('btnResult').addEventListener('click', resetEmotes, false);
}; // import readingTime from 'reading-time';

},{"./rendaFixaApp/entities/behaviours/postFixedNonTaxable":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PostFixedNonTaxable = function () {
    function PostFixedNonTaxable() {
        _classCallCheck(this, PostFixedNonTaxable);
    }

    _createClass(PostFixedNonTaxable, null, [{
        key: "updatedGrossIncomeRate",
        value: function updatedGrossIncomeRate(month, yearlyBaseRate, investmentRate) {
            return ((1.0 + yearlyBaseRate) ** (month / 12) - 1) * investmentRate;
        }
    }, {
        key: "updatedNetIncomeRate",
        value: function updatedNetIncomeRate(month, yearlyBaseRate, investmentRate) {
            return ((1.0 + yearlyBaseRate) ** (month / 12) - 1) * investmentRate;
        }
    }]);

    return PostFixedNonTaxable;
}();

exports.default = PostFixedNonTaxable;

},{}]},{},[1]);
