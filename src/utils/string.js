export const toUpperFirst = (param) => {
  if (typeof param === 'string') {
    return param.charAt(0).toUpperCase() + param.slice(1);
  }

  return null;
}

export const toUpperFirstEach = (param) => {
  let str;
  if (typeof param === 'string') {
    if (param.indexOf('-') > 0) {
      str = dashToSpace(param);
    } else {
      str = param;
    }

    let splitString = str.split(" ");
    splitString = splitString.map(s => toUpperFirst(s));
    return splitString.toString().replace(',', ' ');
  }

  return null;
}

export const spaceToDash = (string) => {
  if (string.indexOf(' ') > 0) {
    return string.replace(/\s+/g, '-');
  }

  return string;
}

export const dashToSpace = (string) => {
  if (string.indexOf('-') > 0) {
    const data = string.replace(/-/g, ' ');
    return data;
  }

  return string;
}
