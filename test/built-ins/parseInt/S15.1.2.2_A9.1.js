// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of parseInt has the attribute DontEnum
es5id: 15.1.2.2_A9.1
es6id: 18.2.5
esid: sec-parseint-string-radix
description: Checking use propertyIsEnumerable, for-in
---*/

//CHECK#1
if (parseInt.propertyIsEnumerable('length') !== false) {
  $ERROR('#1: parseInt.propertyIsEnumerable(\'length\') === false. Actual: ' + (parseInt.propertyIsEnumerable('length')));
}

//CHECK#2
var result = true;
for (var p in parseInt){
  if (p === "length") {
    result = false;
  }
}

if (result !== true) {
  $ERROR('#2: result = true; for (p in parseInt) { if (p === "length") result = false; }  result === true;');
}
