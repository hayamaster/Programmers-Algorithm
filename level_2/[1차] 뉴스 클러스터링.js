const makeTwoStr = (str) => {
  const english = /[a-zA-Z]/;
  const array = [];

  str.split("").forEach((char, idx) => {
    let twoStr = char;

    if (idx < str.length - 1) {
      twoStr += str[idx + 1];
      if (english.test(twoStr[0]) && english.test(twoStr[1])) {
        array.push(twoStr.toUpperCase());
      }
    }
  });

  return array;
};

const solution = (str1, str2) => {
  const arr1 = makeTwoStr(str1);
  const arr2 = makeTwoStr(str2);

  if (arr1.length === 0 && arr2.length === 0) return 65536;

  let 교집합_길이 = 0;
  let 합집합_길이 = 0;

  arr1.forEach((strFromArr1) => {
    const sameIdx = arr2.findIndex(
      (strFromArr2) => strFromArr2 === strFromArr1
    );
    if (sameIdx >= 0) {
      arr2.splice(sameIdx, 1);
      교집합_길이++;
    }
  });

  합집합_길이 = arr1.length + arr2.length;

  return Math.floor((교집합_길이 / 합집합_길이) * 65536);
};
