export const isValueEmptyOrUndefined = val => {
  return val === null || val === '' || val === undefined;
};

export const doesDataHaveEmptyOrUndefined = arr => {
  let flag = false;
  arr.forEach(value => {
    if (isValueEmptyOrUndefined(value)) {
      flag = true;
    }
  });
  return flag;
};

export const getCMsMetHeight = height => {
  return height / 100;
};

export const numberInputValidator = (value, decimal = false) => {
  let parsedVal = parseInt(value, 10);
  if (decimal) parsedVal = parseFloat(value, 10);
  if (!parsedVal) return '';
  return parsedVal.toString();
};

export const stringTrimmingHelper = val => {
  if (isValueEmptyOrUndefined(val)) return '';
  const trimmed = val.trim();
  if (val.endsWith(' ')) return `${trimmed} `;
  return trimmed;
};

export const dateInputValidator = value => {
  if (isValueEmptyOrUndefined(value)) return '';
  let val = value;
  if (!(val.endsWith('0') || val.endsWith('-'))) {
    val =
      value.substr(0, value.length - 1) +
      numberInputValidator(value.substr(-1));
  }
  if (!val.endsWith('-')) {
    if (val.length === 3) {
      val = `${val.substr(0, 2)}-${val.substr(-1)}`;
    } else if (val.length === 6) {
      val = `${val.substr(0, 5)}-${val.substr(-1)}`;
    }
  }
  return val;
};

export const getMetHeight = height => {
  if (!height) return 0;
  const foot = parseInt(height[0], 10) * 0.3048;
  let inch = 0;
  if (height.length > 4) inch = parseInt(height.substr(4, 2), 10) * 0.0254;
  return foot + inch;
};

export const getBMI = (weight, height) => {
  const heightMt = getMetHeight(height);
  const bmi = Number(weight, 10) / (heightMt * heightMt);
  return bmi.toFixed(2);
};

export const heightInputValidator = value => {
  if (isValueEmptyOrUndefined(value) || value === '0') return '';
  if (numberInputValidator(value.substr(-1)) || value.substr(-1) === '0') {
    if (value.length === 1) {
      if (value.substr(-1) === '0') return '';
      return `${value} ‘ `;
    }
    if (value.length === 6 && !(value.substr(-2) <= '11')) {
      return value.substr(0, 4);
    }
    return value;
  }
  return '';
};

export const inputValidator = (label, value) => {
  switch (label) {
    case 'number':
      return numberInputValidator(value);
    case 'decimal':
      return numberInputValidator(value, true);
    case 'string':
      return stringTrimmingHelper(value);
    case 'date':
      return dateInputValidator(value);
    case 'height':
      return heightInputValidator(value);
    default:
      return value;
  }
};

export const emailValidation = email => {
  const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
  return reg.test(email);
};

export const mobNoValidation = number => {
  if (number.length === 10) {
    if (parseInt(number, 10) === 0) return false;
    return /^\d{10}$/.test(number);
  }
  return false;
};

export const submitValidator = obj => {
  const retObj = {
    isValid: false,
    errMsg: '',
  };
  const labels = Object.keys(obj);
  for (let j = 0; j < labels.length; j += 1) {
    const elm = labels[j];
    switch (elm) {
      case 'email':
        if (!emailValidation(obj[elm])) {
          retObj.errMsg = 'Please provide a valid email Id';
          return retObj;
        }
        break;
      case 'phone':
        if (!mobNoValidation(obj[elm])) {
          retObj.errMsg = 'Please provide a valid Mobile Number';
          return retObj;
        }
        break;
      default:
        break;
    }
  }
  retObj.isValid = true;
  return retObj;
};

export const getDMYfromDateString = date => {
  const retObj = {
    day: '',
    month: '',
    year: '',
  };
  if (date.length > 0) {
    const val = date.split('-');
    retObj.day = val[2] || '';
    retObj.month = val[1] || '';
    retObj.year = val[0] || '';
  }
  return retObj;
};

export const getDateString = ({ day, month, year }) => {
  if (!doesDataHaveEmptyOrUndefined([day, month, year])) {
    let d = day;
    let m = month;
    if (d.length === 1) d = `0${day}`;
    if (m.length === 1) m = `0${month}`;
    return [year, m, d].join('-');
  }
  return '';
};

export const dateValidator = date => {
  let dateObj = date;
  if (typeof date === 'string') dateObj = getDMYfromDateString(date);
  const { day, month, year } = dateObj;
  const maxDateAllowed = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const retObj = {
    isValid: false,
    errMsg: '',
  };
  if (!doesDataHaveEmptyOrUndefined([day, month, year])) {
    if (year.length === 4) {
      if (parseInt(day, 10) && parseInt(month, 10) && parseInt(year, 10)) {
        if (parseInt(year, 10) % 4 === 0) maxDateAllowed[1] = 29;
        if (day <= maxDateAllowed[parseInt(month, 10) - 1])
          retObj.isValid = true;
        else retObj.errMsg = 'Day & month combination is not allowed';
      } else retObj.errMsg = 'day, month or year cannot be 0';
    } else retObj.errMsg = 'Year is not in YYYY format';
  } else retObj.errMsg = 'Please enter a valid date';
  return retObj;
};

export const isDeviceMobile = () => {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
};

export const mapObjectKeys = (baseObj, newObj) => {
  const updatedObj = { ...baseObj };
  Object.keys(newObj).forEach(key => {
    const dataType = typeof newObj[key];
    switch (dataType) {
      case 'string':
        updatedObj[key] = newObj[key];
        break;
      case 'object':
        if (Array.isArray(newObj[key])) {
          updatedObj[key] = newObj[key];
        } else if (newObj[key] instanceof File) {
          updatedObj[key] = newObj[key];
        } else if (newObj[key]) {
          updatedObj[key] = mapObjectKeys(updatedObj[key], newObj[key]);
        } else updatedObj[key] = newObj[key];
        break;
      default:
        updatedObj[key] = newObj[key];
    }
  });
  return updatedObj;
};

export const validURL = str => {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator
  return !!pattern.test(str);
};

export const updateStoreDataUtil = (payload, state) => {
  const { data, name } = payload;
  const dataType = typeof data;
  let newState = {};
  switch (dataType) {
    case 'string':
      newState = { ...state, [name]: data };
      break;
    case 'object':
      if (Array.isArray(data)) {
        newState = { ...state, [name]: data };
      } else if (data) {
        newState = { ...state, [name]: mapObjectKeys(state[name], data) };
      } else newState = { ...state, [name]: data };
      break;
    default:
      newState = { ...state, [name]: data };
  }
  return newState;
};

export const doesObjExistsInArr = (arr, obj, key) => {
  const retObj = { found: false };
  if (!arr) return retObj;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i][key] === obj[key]) {
      retObj.pos = i;
      retObj.found = true;
    }
  }
  return retObj;
};
