// @ts-nocheck

const shuffle = (o) => {
  for (
    let j, x, i = o.length;
    i;
    j = parseInt((Math.random() * i) as any), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
};

function chunkArray(arr, chunk_size) {
  const _arr = arr.slice();
  const results = [];

  while (_arr.length) {
    results.push(_arr.splice(0, chunk_size));
  }

  return results;
}

function timeConverter(timestamp) {
  let unix_timestamp = timestamp;
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var date = new Date(unix_timestamp * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = '0' + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = '0' + date.getSeconds();

  // Will display time in 10:30:23 format
  var formattedTime =
    hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  return formattedTime;
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getRandomItemsFromArray(array, number) {
  return array.sort(() => Math.random() - Math.random()).slice(0, number);
}

function deepCopy(inObject) {
  let outObject, value, key;

  if (typeof inObject !== 'object' || inObject === null) {
    return inObject; // Return the value if inObject is not an object
  }

  // Create an array or object to hold the values
  outObject = Array.isArray(inObject) ? [] : {};

  for (key in inObject) {
    value = inObject[key];

    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] = deepCopy(value);
  }

  return outObject;
}

export {
  shuffle,
  chunkArray,
  timeConverter,
  uuidv4,
  getRandomItemsFromArray,
  deepCopy,
};
