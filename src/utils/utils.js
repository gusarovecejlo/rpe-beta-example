/**
 * @param target: <Object>
 * @param array: <Array>
 * @param key: <String>
 * @returns {String | Number} //prototype ok
 * @constructor
 */
export const URLParser = (target, array, key) => {
  let resultObject
  const fullKey = `${key}_id`
  if (Number.isInteger(target)) {
    resultObject = array.find(element => element[fullKey] === target)
  }
  if (resultObject.alias) {
    return resultObject.alias
  } else {
    return resultObject[fullKey]
  }
}