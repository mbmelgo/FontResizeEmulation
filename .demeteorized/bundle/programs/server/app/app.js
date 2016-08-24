var require = meteorInstall({"lib":{"collections":{"index.js":["./letters",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// lib/collections/index.js                                                                       //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
'use strict';                                                                                     //
                                                                                                  //
Object.defineProperty(exports, "__esModule", {                                                    //
  value: true                                                                                     //
});                                                                                               //
exports.Letters = exports.undefined = undefined;                                                  //
                                                                                                  //
var _letters = require('./letters');                                                              // 1
                                                                                                  //
var _letters2 = _interopRequireDefault(_letters);                                                 //
                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
                                                                                                  //
exports.undefined = undefined;                                                                    //
exports.Letters = _letters2['default'];                                                           //
////////////////////////////////////////////////////////////////////////////////////////////////////

}],"letters.js":["meteor/mongo",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// lib/collections/letters.js                                                                     //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
'use strict';                                                                                     //
                                                                                                  //
Object.defineProperty(exports, "__esModule", {                                                    //
  value: true                                                                                     //
});                                                                                               //
                                                                                                  //
var _mongo = require('meteor/mongo');                                                             // 1
                                                                                                  //
var Letters = new _mongo.Mongo.Collection('letters');                                             // 3
                                                                                                  //
exports['default'] = Letters;                                                                     //
////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"server":{"configs":{"index.js":["./initial_add.js",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// server/configs/index.js                                                                        //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
'use strict';                                                                                     //
                                                                                                  //
Object.defineProperty(exports, "__esModule", {                                                    //
    value: true                                                                                   //
});                                                                                               //
                                                                                                  //
exports['default'] = function () {                                                                //
    (0, _initial_add2['default'])();                                                              // 4
};                                                                                                // 5
                                                                                                  //
var _initial_add = require('./initial_add.js');                                                   // 1
                                                                                                  //
var _initial_add2 = _interopRequireDefault(_initial_add);                                         //
                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
////////////////////////////////////////////////////////////////////////////////////////////////////

}],"initial_add.js":["/lib/collections",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// server/configs/initial_add.js                                                                  //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
"use strict";                                                                                     //
                                                                                                  //
Object.defineProperty(exports, "__esModule", {                                                    //
                 value: true                                                                      //
});                                                                                               //
                                                                                                  //
exports["default"] = function () {                                                                //
                 if (_collections.Letters.find().count() < 1) {                                   // 6
                                                                                                  //
                                  var dimensionX = 5;                                             // 8
                                  var dimensionY = 7;                                             // 9
                                  //=======A======//                                              //
                                  var name = "A";                                                 // 11
                                  var fillUpIndexes = ["0,1", "0,2", "0,3", "1,0", "1,4", "2,0", "2,4", "3,0", "3,1", "3,2", "3,3", "3,4", "4,0", "4,4", "5,0", "5,4", "6,0", "6,4"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                                  //=======B======//                                              //
                                  name = "B";                                                     // 21
                                  fillUpIndexes = ["0,0", "0,1", "0,2", "0,3", "1,0", "1,4", "2,0", "2,4", "3,0", "3,1", "3,2", "3,3", "4,0", "4,4", "5,0", "5,4", "6,0", "6,1", "6,2", "6,3"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                                  //=======C======//                                              //
                                  name = "C";                                                     // 31
                                  fillUpIndexes = ["0,1", "0,2", "0,3", "1,0", "1,4", "2,0", "3,0", "4,0", "5,0", "5,4", "6,1", "6,2", "6,3"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                                  //=======D======//                                              //
                                  name = "D";                                                     // 41
                                  fillUpIndexes = ["0,0", "0,1", "0,2", "0,3", "1,0", "1,4", "2,0", "2,4", "3,0", "3,4", "4,0", "4,4", "5,0", "5,4", "6,0", "6,1", "6,2", "6,3"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                                  //=======E======//                                              //
                                  name = "E";                                                     // 51
                                  fillUpIndexes = ["0,0", "0,1", "0,2", "0,3", "0,4", "1,0", "2,0", "3,0", "3,1", "3,2", "3,3", "4,0", "5,0", "6,0", "6,1", "6,2", "6,3", "6,4"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                                  //=======F======//                                              //
                                  name = "F";                                                     // 61
                                  fillUpIndexes = ["0,0", "0,1", "0,2", "0,3", "0,4", "1,0", "2,0", "3,0", "3,1", "3,2", "3,3", "4,0", "5,0", "6,0"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                                  //=======G======//                                              //
                                  name = "G";                                                     // 71
                                  fillUpIndexes = ["0,1", "0,2", "0,3", "1,0", "2,0", "3,0", "4,0", "4,3", "4,4", "5,0", "5,4", "6,1", "6,2", "6,3"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                                  //=======H======//                                              //
                                  name = "H";                                                     // 81
                                  fillUpIndexes = ["0,0", "0,4", "1,0", "1,4", "2,0", "2,4", "3,0", "3,1", "3,2", "3,3", "3,4", "4,0", "4,4", "5,0", "5,4", "6,0", "6,4"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                                  //=======I======//                                              //
                                  name = "I";                                                     // 91
                                  fillUpIndexes = ["0,1", "0,2", "0,3", "1,2", "2,2", "3,2", "4,2", "5,2", "6,1", "6,2", "6,3"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                                  //=======J======//                                              //
                                  name = "J";                                                     // 101
                                  fillUpIndexes = ["0,2", "0,3", "0,4", "1,3", "2,3", "3,3", "4,3", "5,0", "5,3", "6,1", "6,2"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                                  //=======K======//                                              //
                                  name = "K";                                                     // 111
                                  fillUpIndexes = ["0,0", "0,4", "1,0", "1,3", "2,0", "2,2", "3,0", "3,1", "4,0", "4,2", "5,0", "5,3", "6,0", "6,4"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                                  //=======L======//                                              //
                                  name = "L";                                                     // 121
                                  fillUpIndexes = ["0,0", "1,0", "2,0", "3,0", "4,0", "5,0", "6,0", "6,1", "6,2", "6,3", "6,4"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                                  //=======M======//                                              //
                                  name = "M";                                                     // 131
                                  fillUpIndexes = ["0,0", "0,4", "1,0", "1,1", "1,3", "1,4", "2,0", "2,2", "2,4", "3,0", "3,2", "3,4", "4,0", "4,4", "5,0", "5,4", "6,0", "6,4"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                                  //=======N======//                                              //
                                  name = "N";                                                     // 141
                                  fillUpIndexes = ["0,0", "0,4", "1,0", "1,4", "2,0", "2,1", "2,4", "3,0", "3,2", "3,4", "4,0", "4,3", "4,4", "5,0", "5,4", "6,0", "6,4"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                                  //=======O======//                                              //
                                  name = "O";                                                     // 151
                                  fillUpIndexes = ["0,1", "0,2", "0,3", "1,0", "1,4", "2,0", "2,4", "3,0", "3,4", "4,0", "4,4", "5,0", "5,4", "6,1", "6,2", "6,3"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                                  //=======P======//                                              //
                                  name = "P";                                                     // 161
                                  fillUpIndexes = ["0,0", "0,1", "0,2", "0,3", "1,0", "1,4", "2,0", "2,4", "3,0", "3,1", "3,2", "3,3", "4,0", "5,0", "6,0"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                                  //=======Q======//                                              //
                                  name = "Q";                                                     // 171
                                  fillUpIndexes = ["0,1", "0,2", "0,3", "1,0", "1,4", "2,0", "2,4", "3,0", "3,4", "4,0", "4,2", "4,4", "5,0", "5,3", "6,1", "6,2", "6,4"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                                  //=======R======//                                              //
                                  name = "R";                                                     // 181
                                  fillUpIndexes = ["0,0", "0,1", "0,2", "0,3", "1,0", "1,4", "2,0", "2,4", "3,0", "3,1", "3,2", "3,3", "4,0", "4,2", "5,0", "5,3", "6,0", "6,4"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                                  //=======S======//                                              //
                                  name = "S";                                                     // 191
                                  fillUpIndexes = ["0,1", "0,2", "0,3", "0,4", "1,0", "2,0", "3,1", "3,2", "3,3", "4,4", "5,4", "6,0", "6,1", "6,2", "6,3"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                                  //=======T======//                                              //
                                  name = "T";                                                     // 201
                                  fillUpIndexes = ["0,0", "0,1", "0,2", "0,3", "0,4", "1,2", "2,2", "3,2", "4,2", "5,2", "6,2"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                                  //=======U======//                                              //
                                  name = "U";                                                     // 211
                                  fillUpIndexes = ["0,0", "0,4", "1,0", "1,4", "2,0", "2,4", "3,0", "3,4", "4,0", "4,4", "5,0", "5,4", "6,1", "6,2", "6,3"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                                  //=======V======//                                              //
                                  name = "V";                                                     // 221
                                  fillUpIndexes = ["0,0", "0,4", "1,0", "1,4", "2,0", "2,4", "3,0", "3,4", "4,1", "4,3", "5,1", "5,3", "6,2"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                                  //=======W======//                                              //
                                  name = "W";                                                     // 231
                                  fillUpIndexes = ["0,0", "0,4", "1,0", "1,4", "2,0", "2,4", "3,0", "3,2", "3,4", "4,0", "4,2", "4,4", "5,0", "5,2", "5,4", "6,1", "6,3"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                                  //=======X======//                                              //
                                  name = "X";                                                     // 241
                                  fillUpIndexes = ["0,0", "0,4", "1,0", "1,4", "2,1", "2,3", "3,2", "4,1", "4,3", "5,0", "5,4", "6,0", "6,4"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                                  //=======Y======//                                              //
                                  name = "Y";                                                     // 251
                                  fillUpIndexes = ["0,0", "0,4", "1,0", "1,4", "2,1", "2,3", "3,2", "4,2", "5,2", "6,2"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                                  //=======Z======//                                              //
                                  name = "Z";                                                     // 261
                                  fillUpIndexes = ["0,0", "0,1", "0,2", "0,3", "0,4", "1,4", "2,3", "3,2", "4,1", "5,0", "6,0", "6,1", "6,2", "6,3", "6,4"];
                                  _collections.Letters.insert({ name: name, fillUpIndexes: fillUpIndexes, dimensionX: dimensionX, dimensionY: dimensionY });
                 }                                                                                // 271
};                                                                                                // 273
                                                                                                  //
var _collections = require("/lib/collections");                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"methods":{"index.js":function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// server/methods/index.js                                                                        //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
"use strict";                                                                                     //
                                                                                                  //
Object.defineProperty(exports, "__esModule", {                                                    //
  value: true                                                                                     //
});                                                                                               //
                                                                                                  //
exports["default"] = function () {};                                                              //
////////////////////////////////////////////////////////////////////////////////////////////////////

}},"publications":{"index.js":["./letters",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// server/publications/index.js                                                                   //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
'use strict';                                                                                     //
                                                                                                  //
Object.defineProperty(exports, "__esModule", {                                                    //
  value: true                                                                                     //
});                                                                                               //
                                                                                                  //
exports['default'] = function () {                                                                //
  (0, _letters2['default'])();                                                                    // 4
};                                                                                                // 5
                                                                                                  //
var _letters = require('./letters');                                                              // 1
                                                                                                  //
var _letters2 = _interopRequireDefault(_letters);                                                 //
                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
////////////////////////////////////////////////////////////////////////////////////////////////////

}],"letters.js":["/lib/collections","meteor/meteor","meteor/check",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// server/publications/letters.js                                                                 //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
'use strict';                                                                                     //
                                                                                                  //
Object.defineProperty(exports, "__esModule", {                                                    //
  value: true                                                                                     //
});                                                                                               //
                                                                                                  //
exports['default'] = function () {                                                                //
  _meteor.Meteor.publish('letters', function (name) {                                             // 6
    (0, _check.check)(name, String);                                                              // 7
    return _collections.Letters.find({ name: name });                                             // 8
  });                                                                                             // 9
};                                                                                                // 10
                                                                                                  //
var _collections = require('/lib/collections');                                                   // 1
                                                                                                  //
var _meteor = require('meteor/meteor');                                                           // 2
                                                                                                  //
var _check = require('meteor/check');                                                             // 3
////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"main.js":["./publications","./methods","./configs",function(require){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// server/main.js                                                                                 //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
'use strict';                                                                                     //
                                                                                                  //
var _publications = require('./publications');                                                    // 1
                                                                                                  //
var _publications2 = _interopRequireDefault(_publications);                                       //
                                                                                                  //
var _methods = require('./methods');                                                              // 2
                                                                                                  //
var _methods2 = _interopRequireDefault(_methods);                                                 //
                                                                                                  //
var _configs = require('./configs');                                                              // 3
                                                                                                  //
var _configs2 = _interopRequireDefault(_configs);                                                 //
                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
                                                                                                  //
(0, _publications2['default'])();                                                                 // 5
(0, _methods2['default'])();                                                                      // 6
(0, _configs2['default'])();                                                                      // 7
////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".jsx"]});
require("./lib/collections/index.js");
require("./lib/collections/letters.js");
require("./server/configs/index.js");
require("./server/configs/initial_add.js");
require("./server/methods/index.js");
require("./server/publications/index.js");
require("./server/publications/letters.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
