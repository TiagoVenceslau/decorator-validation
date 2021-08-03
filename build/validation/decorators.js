"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.url = exports.email = exports.pattern = exports.maxlength = exports.minlength = exports.max = exports.min = exports.required = exports.getValidationKey = void 0;

require("reflect-metadata");

var constants_1 = require("./constants");

var getValidationKey = function (key) {
  return constants_1.ValidationKeys.REFLECT + key;
};

exports.getValidationKey = getValidationKey;

var required = function (message) {
  if (message === void 0) {
    message = constants_1.DEFAULT_ERROR_MESSAGES.REQUIRED;
  }

  return function (target, propertyKey) {
    Reflect.defineMetadata(exports.getValidationKey(constants_1.ValidationKeys.REQUIRED), {
      message: message
    }, target, propertyKey);
  };
};

exports.required = required;

var min = function (value, message) {
  if (message === void 0) {
    message = constants_1.DEFAULT_ERROR_MESSAGES.MIN;
  }

  return function (target, propertyKey) {
    Reflect.defineMetadata(exports.getValidationKey(constants_1.ValidationKeys.MIN), {
      value: value,
      message: message
    }, target, propertyKey);
  };
};

exports.min = min;

var max = function (value, message) {
  if (message === void 0) {
    message = constants_1.DEFAULT_ERROR_MESSAGES.MAX;
  }

  return function (target, propertyKey) {
    Reflect.defineMetadata(exports.getValidationKey(constants_1.ValidationKeys.MAX), {
      value: value,
      message: message
    }, target, propertyKey);
  };
};

exports.max = max;

var minlength = function (value, message) {
  if (message === void 0) {
    message = constants_1.DEFAULT_ERROR_MESSAGES.MIN_LENGTH;
  }

  return function (target, propertyKey) {
    Reflect.defineMetadata(exports.getValidationKey(constants_1.ValidationKeys.MIN_LENGTH), {
      value: value,
      message: message
    }, target, propertyKey);
  };
};

exports.minlength = minlength;

var maxlength = function (value, message) {
  if (message === void 0) {
    message = constants_1.DEFAULT_ERROR_MESSAGES.MAX_LENGTH;
  }

  return function (target, propertyKey) {
    Reflect.defineMetadata(exports.getValidationKey(constants_1.ValidationKeys.MAX_LENGTH), {
      value: value,
      message: message
    }, target, propertyKey);
  };
};

exports.maxlength = maxlength;

var pattern = function (value, message) {
  if (message === void 0) {
    message = constants_1.DEFAULT_ERROR_MESSAGES.PATTERN;
  }

  return function (target, propertyKey) {
    Reflect.defineMetadata(exports.getValidationKey(constants_1.ValidationKeys.PATTERN), {
      value: typeof value === 'string' ? value : value.toString(),
      message: message
    }, target, propertyKey);
  };
};

exports.pattern = pattern;

var email = function (message) {
  if (message === void 0) {
    message = constants_1.DEFAULT_ERROR_MESSAGES.EMAIL;
  }

  return function (target, propertyKey) {
    Reflect.defineMetadata(exports.getValidationKey(constants_1.ValidationKeys.EMAIL), {
      message: message
    }, target, propertyKey);
  };
};

exports.email = email;

var url = function (message) {
  if (message === void 0) {
    message = constants_1.DEFAULT_ERROR_MESSAGES.URL;
  }

  return function (target, propertyKey) {
    Reflect.defineMetadata(exports.getValidationKey(constants_1.ValidationKeys.URL), {
      message: message
    }, target, propertyKey);
  };
};

exports.url = url;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRpb24vZGVjb3JhdG9ycy5qcyIsInZhbGlkYXRpb24vZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInVybCIsImVtYWlsIiwicGF0dGVybiIsIm1heGxlbmd0aCIsIm1pbmxlbmd0aCIsIm1heCIsIm1pbiIsInJlcXVpcmVkIiwiZ2V0VmFsaWRhdGlvbktleSIsInJlcXVpcmUiLCJjb25zdGFudHNfMSIsImtleSIsIlZhbGlkYXRpb25LZXlzIiwiUkVGTEVDVCIsIm1lc3NhZ2UiLCJERUZBVUxUX0VSUk9SX01FU1NBR0VTIiwiUkVRVUlSRUQiLCJ0YXJnZXQiLCJwcm9wZXJ0eUtleSIsIlJlZmxlY3QiLCJkZWZpbmVNZXRhZGF0YSIsIk1JTiIsIk1BWCIsIk1JTl9MRU5HVEgiLCJNQVhfTEVOR1RIIiwiUEFUVEVSTiIsInRvU3RyaW5nIiwiRU1BSUwiLCJVUkwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUVDLEVBQUFBLEtBQUssRUFBRTtBQUFULENBQTdDO0FBQ0FELE9BQU8sQ0FBQ0UsR0FBUixHQUFjRixPQUFPLENBQUNHLEtBQVIsR0FBZ0JILE9BQU8sQ0FBQ0ksT0FBUixHQUFrQkosT0FBTyxDQUFDSyxTQUFSLEdBQW9CTCxPQUFPLENBQUNNLFNBQVIsR0FBb0JOLE9BQU8sQ0FBQ08sR0FBUixHQUFjUCxPQUFPLENBQUNRLEdBQVIsR0FBY1IsT0FBTyxDQUFDUyxRQUFSLEdBQW1CVCxPQUFPLENBQUNVLGdCQUFSLEdBQTJCLEtBQUssQ0FBdks7O0FDSUFDLE9BQUEsQ0FBQSxrQkFBQSxDQUFBOztBQUNBLElBQUFDLFdBQUEsR0FBQUQsT0FBQSxDQUFBLGFBQUEsQ0FBQTs7QUFXTyxJQUFNRCxnQkFBZ0IsR0FBRyxVQUFDRyxHQUFELEVBQVk7QUFBSyxTQUFBRCxXQUFB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QUFHLFVBQUNhLE9BQUQsRUFBK0M7QUFBOUMsTUFBQUEsT0FBQSxLQUFBLEtBQUEsQ0FBQSxFQUFBO0FBQUFBLElBQUFBLE9BQUEsR0FBa0JKLFdBQUEsQ0FBQUssc0JBQUEsQ0FBdUJZLEtBQXpDO0FBQThDOztBQUFLLFNBQUEsVUFBQ1YsTUFBRCxFQUFpQkMsV0FBakIsRUFBb0M7QUFDekdDLElBQUFBLE9BQU8sQ0FBQ0MsY0FBUixDQUNJdEIsT0FBQSxDQUFBVSxnQkFBQSxDQUFpQkUsV0FBQSxDQUFBRSxjQUFBLENBQWVlLEtBQWhDLENBREosRUFFSTtBQUNJYixNQUFBQSxPQUFPLEVBQUVBO0FBRGIsS0FGSixFQUtJRyxNQUxKLEVBTUlDLFdBTko7QUFRSCxHQVR3RTtBQVN4RSxDQVRNOztBQUFNcEIsT0FBQSxDQUFBRyxLQUFBLEdBQUtBLEtBQUw7O0FBcUJOLElBQU1ELEdBQUcsR0FBRyxVQUFDYyxPQUFELEVBQTZDO0FBQTVDLE1BQUFBLE9BQUEsS0FBQSxLQUFBLENBQUEsRUFBQTtBQUFBQSxJQUFBQSxPQUFBLEdBQWtCSixXQUFBLENBQUFLLHNCQUFBLENBQXVCYSxHQUF6QztBQUE0Qzs7QUFBSyxTQUFBLFVBQUNYLE1BQUQsRUFBaUJDLFdBQWpCLEVBQW9DO0FBQ3JHQyxJQUFBQSxPQUFPLENBQUNDLGNBQVIsQ0FDSXRCLE9BQUEsQ0FBQVUsZ0JBQUEsQ0FBaUJFLFdBQUEsQ0FBQUUsY0FBQSxDQUFlZ0IsR0FBaEMsQ0FESixFQUVJO0FBQ0lkLE1BQUFBLE9BQU8sRUFBRUE7QUFEYixLQUZKLEVBS0lHLE1BTEosRUFNSUMsV0FOSjtBQVFILEdBVG9FO0FBU3BFLENBVE07O0FBQU1wQixPQUFBLENBQUFFLEdBQUEsR0FBR0EsR0FBSCIsImZpbGUiOiJ2YWxpZGF0aW9uL2RlY29yYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXJsID0gZXhwb3J0cy5lbWFpbCA9IGV4cG9ydHMucGF0dGVybiA9IGV4cG9ydHMubWF4bGVuZ3RoID0gZXhwb3J0cy5taW5sZW5ndGggPSBleHBvcnRzLm1heCA9IGV4cG9ydHMubWluID0gZXhwb3J0cy5yZXF1aXJlZCA9IGV4cG9ydHMuZ2V0VmFsaWRhdGlvbktleSA9IHZvaWQgMDtcbnJlcXVpcmUoXCJyZWZsZWN0LW1ldGFkYXRhXCIpO1xudmFyIGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xudmFyIGdldFZhbGlkYXRpb25LZXkgPSBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBjb25zdGFudHNfMS5WYWxpZGF0aW9uS2V5cy5SRUZMRUNUICsga2V5OyB9O1xuZXhwb3J0cy5nZXRWYWxpZGF0aW9uS2V5ID0gZ2V0VmFsaWRhdGlvbktleTtcbnZhciByZXF1aXJlZCA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgaWYgKG1lc3NhZ2UgPT09IHZvaWQgMCkgeyBtZXNzYWdlID0gY29uc3RhbnRzXzEuREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5SRVFVSVJFRDsgfVxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKGV4cG9ydHMuZ2V0VmFsaWRhdGlvbktleShjb25zdGFudHNfMS5WYWxpZGF0aW9uS2V5cy5SRVFVSVJFRCksIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgfSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgfTtcbn07XG5leHBvcnRzLnJlcXVpcmVkID0gcmVxdWlyZWQ7XG52YXIgbWluID0gZnVuY3Rpb24gKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgaWYgKG1lc3NhZ2UgPT09IHZvaWQgMCkgeyBtZXNzYWdlID0gY29uc3RhbnRzXzEuREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5NSU47IH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShleHBvcnRzLmdldFZhbGlkYXRpb25LZXkoY29uc3RhbnRzXzEuVmFsaWRhdGlvbktleXMuTUlOKSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICB9LCB0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgICB9O1xufTtcbmV4cG9ydHMubWluID0gbWluO1xudmFyIG1heCA9IGZ1bmN0aW9uICh2YWx1ZSwgbWVzc2FnZSkge1xuICAgIGlmIChtZXNzYWdlID09PSB2b2lkIDApIHsgbWVzc2FnZSA9IGNvbnN0YW50c18xLkRFRkFVTFRfRVJST1JfTUVTU0FHRVMuTUFYOyB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoZXhwb3J0cy5nZXRWYWxpZGF0aW9uS2V5KGNvbnN0YW50c18xLlZhbGlkYXRpb25LZXlzLk1BWCksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgfSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgfTtcbn07XG5leHBvcnRzLm1heCA9IG1heDtcbnZhciBtaW5sZW5ndGggPSBmdW5jdGlvbiAodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICBpZiAobWVzc2FnZSA9PT0gdm9pZCAwKSB7IG1lc3NhZ2UgPSBjb25zdGFudHNfMS5ERUZBVUxUX0VSUk9SX01FU1NBR0VTLk1JTl9MRU5HVEg7IH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShleHBvcnRzLmdldFZhbGlkYXRpb25LZXkoY29uc3RhbnRzXzEuVmFsaWRhdGlvbktleXMuTUlOX0xFTkdUSCksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgfSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgfTtcbn07XG5leHBvcnRzLm1pbmxlbmd0aCA9IG1pbmxlbmd0aDtcbnZhciBtYXhsZW5ndGggPSBmdW5jdGlvbiAodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICBpZiAobWVzc2FnZSA9PT0gdm9pZCAwKSB7IG1lc3NhZ2UgPSBjb25zdGFudHNfMS5ERUZBVUxUX0VSUk9SX01FU1NBR0VTLk1BWF9MRU5HVEg7IH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShleHBvcnRzLmdldFZhbGlkYXRpb25LZXkoY29uc3RhbnRzXzEuVmFsaWRhdGlvbktleXMuTUFYX0xFTkdUSCksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgfSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgfTtcbn07XG5leHBvcnRzLm1heGxlbmd0aCA9IG1heGxlbmd0aDtcbnZhciBwYXR0ZXJuID0gZnVuY3Rpb24gKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgaWYgKG1lc3NhZ2UgPT09IHZvaWQgMCkgeyBtZXNzYWdlID0gY29uc3RhbnRzXzEuREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5QQVRURVJOOyB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoZXhwb3J0cy5nZXRWYWxpZGF0aW9uS2V5KGNvbnN0YW50c18xLlZhbGlkYXRpb25LZXlzLlBBVFRFUk4pLCB7XG4gICAgICAgICAgICB2YWx1ZTogdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogdmFsdWUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgfSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgfTtcbn07XG5leHBvcnRzLnBhdHRlcm4gPSBwYXR0ZXJuO1xudmFyIGVtYWlsID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICBpZiAobWVzc2FnZSA9PT0gdm9pZCAwKSB7IG1lc3NhZ2UgPSBjb25zdGFudHNfMS5ERUZBVUxUX0VSUk9SX01FU1NBR0VTLkVNQUlMOyB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoZXhwb3J0cy5nZXRWYWxpZGF0aW9uS2V5KGNvbnN0YW50c18xLlZhbGlkYXRpb25LZXlzLkVNQUlMKSwge1xuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICB9LCB0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgICB9O1xufTtcbmV4cG9ydHMuZW1haWwgPSBlbWFpbDtcbnZhciB1cmwgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgIGlmIChtZXNzYWdlID09PSB2b2lkIDApIHsgbWVzc2FnZSA9IGNvbnN0YW50c18xLkRFRkFVTFRfRVJST1JfTUVTU0FHRVMuVVJMOyB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoZXhwb3J0cy5nZXRWYWxpZGF0aW9uS2V5KGNvbnN0YW50c18xLlZhbGlkYXRpb25LZXlzLlVSTCksIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgfSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgfTtcbn07XG5leHBvcnRzLnVybCA9IHVybDsiLCIvKipcbiAqIEBuYW1lc3BhY2UgRGVjb3JhdG9yc1xuICogQG1lbWJlck9mIFZhbGlkYXRpb25cbiAqL1xuXG5cbmltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCB7VmFsaWRhdGlvbktleXMsIERFRkFVTFRfRVJST1JfTUVTU0FHRVN9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5cblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEBmdW5jdGlvblxuICogQG5hbWVzcGFjZSBEZWNvcmF0b3JzXG4gKiBAbWVtYmVyT2YgVmFsaWRhdGlvblxuICovXG5leHBvcnQgY29uc3QgZ2V0VmFsaWRhdGlvbktleSA9IChrZXk6IHN0cmluZykgPT4gVmFsaWRhdGlvbktleXMuUkVGTEVDVCArIGtleTtcblxuLyoqXG4gKiBNYXJrcyB0aGUgcHJvcGVydHkgYXMgcmVxdWlyZWQuXG4gKlxuICogVmFsaWRhdG9ycyB0byB2YWxpZGF0ZSBhIGRlY29yYXRlZCBwcm9wZXJ0eSBtdXN0IHVzZSBrZXkge0BsaW5rIFZhbGlkYXRpb25LZXlzLlJFUVVJUkVEfVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbWVzc2FnZV0gdGhlIGVycm9yIG1lc3NhZ2UuIERlZmF1bHRzIHRvIHtAbGluayBERUZBVUxUX0VSUk9SX01FU1NBR0VTLlJFUVVJUkVEfVxuICogQGRlY29yYXRvclxuICogQG5hbWVzcGFjZSBEZWNvcmF0b3JzXG4gKiBAbWVtYmVyT2YgVmFsaWRhdGlvblxuICovXG5leHBvcnQgY29uc3QgcmVxdWlyZWQgPSAobWVzc2FnZTogc3RyaW5nID0gREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5SRVFVSVJFRCkgPT4gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nKSA9PiB7XG4gICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcbiAgICAgICAgZ2V0VmFsaWRhdGlvbktleShWYWxpZGF0aW9uS2V5cy5SRVFVSVJFRCksXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgfSxcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICBwcm9wZXJ0eUtleVxuICAgICk7XG59XG5cbi8qKlxuICogRGVmaW5lcyBhIG1pbmltdW0gdmFsdWUgZm9yIHRoZSBwcm9wZXJ0eVxuICpcbiAqIFZhbGlkYXRvcnMgdG8gdmFsaWRhdGUgYSBkZWNvcmF0ZWQgcHJvcGVydHkgbXVzdCB1c2Uga2V5IHtAbGluayBWYWxpZGF0aW9uS2V5cy5NSU59XG4gKlxuICogQHBhcmFtIHtudW1iZXIgfCBEYXRlfSB2YWx1ZVxuICogQHBhcmFtIHtzdHJpbmd9IFttZXNzYWdlXSB0aGUgZXJyb3IgbWVzc2FnZS4gRGVmYXVsdHMgdG8ge0BsaW5rIERFRkFVTFRfRVJST1JfTUVTU0FHRVMuTUlOfVxuICogQGRlY29yYXRvclxuICogQG5hbWVzcGFjZSBEZWNvcmF0b3JzXG4gKiBAbWVtYmVyT2YgVmFsaWRhdGlvblxuICovXG5leHBvcnQgY29uc3QgbWluID0gKHZhbHVlOiBudW1iZXIgfCBEYXRlIHwgc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcgPSBERUZBVUxUX0VSUk9SX01FU1NBR0VTLk1JTikgPT4gKHRhcmdldDogT2JqZWN0LCBwcm9wZXJ0eUtleTogc3RyaW5nKSA9PiB7XG4gICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcbiAgICAgICAgZ2V0VmFsaWRhdGlvbktleShWYWxpZGF0aW9uS2V5cy5NSU4pLFxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICAgIH0sXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgcHJvcGVydHlLZXlcbiAgICApO1xufVxuXG4vKipcbiAqIERlZmluZXMgYSBtYXhpbXVtIHZhbHVlIGZvciB0aGUgcHJvcGVydHlcbiAqXG4gKiBWYWxpZGF0b3JzIHRvIHZhbGlkYXRlIGEgZGVjb3JhdGVkIHByb3BlcnR5IG11c3QgdXNlIGtleSB7QGxpbmsgVmFsaWRhdGlvbktleXMuTUFYfVxuICpcbiAqIEBwYXJhbSB7bnVtYmVyIHwgRGF0ZX0gdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbWVzc2FnZV0gdGhlIGVycm9yIG1lc3NhZ2UuIERlZmF1bHRzIHRvIHtAbGluayBERUZBVUxUX0VSUk9SX01FU1NBR0VTLk1BWH1cbiAqIEBkZWNvcmF0b3JcbiAqIEBuYW1lc3BhY2UgRGVjb3JhdG9yc1xuICogQG1lbWJlck9mIFZhbGlkYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IG1heCA9ICh2YWx1ZTogbnVtYmVyIHwgRGF0ZSB8IHN0cmluZywgbWVzc2FnZTogc3RyaW5nID0gREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5NQVgpID0+ICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHlLZXk6IHN0cmluZykgPT4ge1xuICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXG4gICAgICAgIGdldFZhbGlkYXRpb25LZXkoVmFsaWRhdGlvbktleXMuTUFYKSxcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICB9LFxuICAgICAgICB0YXJnZXQsXG4gICAgICAgIHByb3BlcnR5S2V5XG4gICAgKTtcbn1cblxuLyoqXG4gKiBEZWZpbmVzIGEgbWluaW11bSBsZW5ndGggZm9yIHRoZSBwcm9wZXJ0eVxuICpcbiAqIFZhbGlkYXRvcnMgdG8gdmFsaWRhdGUgYSBkZWNvcmF0ZWQgcHJvcGVydHkgbXVzdCB1c2Uga2V5IHtAbGluayBWYWxpZGF0aW9uS2V5cy5NSU5fTEVOR1RIfVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtzdHJpbmd9IFttZXNzYWdlXSB0aGUgZXJyb3IgbWVzc2FnZS4gRGVmYXVsdHMgdG8ge0BsaW5rIERFRkFVTFRfRVJST1JfTUVTU0FHRVMuTUlOX0xFTkdUSH1cbiAqIEBkZWNvcmF0b3JcbiAqIEBuYW1lc3BhY2UgRGVjb3JhdG9yc1xuICogQG1lbWJlck9mIFZhbGlkYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbmxlbmd0aCA9ICh2YWx1ZTogbnVtYmVyLCBtZXNzYWdlOiBzdHJpbmcgPSBERUZBVUxUX0VSUk9SX01FU1NBR0VTLk1JTl9MRU5HVEgpID0+ICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHlLZXk6IHN0cmluZykgPT4ge1xuICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXG4gICAgICAgIGdldFZhbGlkYXRpb25LZXkoVmFsaWRhdGlvbktleXMuTUlOX0xFTkdUSCksXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgfSxcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICBwcm9wZXJ0eUtleVxuICAgICk7XG59XG5cbi8qKlxuICogRGVmaW5lcyBhIG1heGltdW0gbGVuZ3RoIGZvciB0aGUgcHJvcGVydHlcbiAqXG4gKiBWYWxpZGF0b3JzIHRvIHZhbGlkYXRlIGEgZGVjb3JhdGVkIHByb3BlcnR5IG11c3QgdXNlIGtleSB7QGxpbmsgVmFsaWRhdGlvbktleXMuTUFYX0xFTkdUSH1cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbWVzc2FnZV0gdGhlIGVycm9yIG1lc3NhZ2UuIERlZmF1bHRzIHRvIHtAbGluayBERUZBVUxUX0VSUk9SX01FU1NBR0VTLk1BWF9MRU5HVEh9XG4gKiBAZGVjb3JhdG9yXG4gKiBAbmFtZXNwYWNlIERlY29yYXRvcnNcbiAqIEBtZW1iZXJPZiBWYWxpZGF0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBtYXhsZW5ndGggPSAodmFsdWU6IG51bWJlciwgbWVzc2FnZTogc3RyaW5nID0gREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5NQVhfTEVOR1RIKSA9PiAodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5S2V5OiBzdHJpbmcpID0+IHtcbiAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFxuICAgICAgICBnZXRWYWxpZGF0aW9uS2V5KFZhbGlkYXRpb25LZXlzLk1BWF9MRU5HVEgpLFxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICAgIH0sXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgcHJvcGVydHlLZXlcbiAgICApO1xufVxuXG4vKipcbiAqIERlZmluZXMgYSBSZWdFeHAgcGF0dGVybiB0aGUgcHJvcGVydHkgbXVzdCByZXNwZWN0XG4gKlxuICogVmFsaWRhdG9ycyB0byB2YWxpZGF0ZSBhIGRlY29yYXRlZCBwcm9wZXJ0eSBtdXN0IHVzZSBrZXkge0BsaW5rIFZhbGlkYXRpb25LZXlzLlBBVFRFUk59XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gW21lc3NhZ2VdIHRoZSBlcnJvciBtZXNzYWdlLiBEZWZhdWx0cyB0byB7QGxpbmsgREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5QQVRURVJOfVxuICogQGRlY29yYXRvclxuICogQG5hbWVzcGFjZSBEZWNvcmF0b3JzXG4gKiBAbWVtYmVyT2YgVmFsaWRhdGlvblxuICovXG5leHBvcnQgY29uc3QgcGF0dGVybiA9ICh2YWx1ZTogUmVnRXhwIHwgc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcgPSBERUZBVUxUX0VSUk9SX01FU1NBR0VTLlBBVFRFUk4pID0+ICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHlLZXk6IHN0cmluZykgPT4ge1xuICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXG4gICAgICAgIGdldFZhbGlkYXRpb25LZXkoVmFsaWRhdGlvbktleXMuUEFUVEVSTiksXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiB2YWx1ZS50b1N0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICB9LFxuICAgICAgICB0YXJnZXQsXG4gICAgICAgIHByb3BlcnR5S2V5XG4gICAgKTtcbn1cblxuLyoqXG4gKiBEZWZpbmVzIHRoZSBwcm9wZXJ0eSBhcyBhbiBlbWFpbFxuICpcbiAqIFZhbGlkYXRvcnMgdG8gdmFsaWRhdGUgYSBkZWNvcmF0ZWQgcHJvcGVydHkgbXVzdCB1c2Uga2V5IHtAbGluayBWYWxpZGF0aW9uS2V5cy5FTUFJTH1cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW21lc3NhZ2VdIHRoZSBlcnJvciBtZXNzYWdlLiBEZWZhdWx0cyB0byB7QGxpbmsgREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5FTUFJTH1cbiAqIEBkZWNvcmF0b3JcbiAqIEBuYW1lc3BhY2UgRGVjb3JhdG9yc1xuICogQG1lbWJlck9mIFZhbGlkYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGVtYWlsID0gKG1lc3NhZ2U6IHN0cmluZyA9IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuRU1BSUwpID0+ICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHlLZXk6IHN0cmluZykgPT4ge1xuICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXG4gICAgICAgIGdldFZhbGlkYXRpb25LZXkoVmFsaWRhdGlvbktleXMuRU1BSUwpLFxuICAgICAgICB7XG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICAgIH0sXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgcHJvcGVydHlLZXlcbiAgICApO1xufVxuXG4vKipcbiAqIERlZmluZXMgdGhlIHByb3BlcnR5IGFzIGFuIFVSTFxuICpcbiAqIFZhbGlkYXRvcnMgdG8gdmFsaWRhdGUgYSBkZWNvcmF0ZWQgcHJvcGVydHkgbXVzdCB1c2Uga2V5IHtAbGluayBWYWxpZGF0aW9uS2V5cy5VUkx9XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFttZXNzYWdlXSB0aGUgZXJyb3IgbWVzc2FnZS4gRGVmYXVsdHMgdG8ge0BsaW5rIERFRkFVTFRfRVJST1JfTUVTU0FHRVMuVVJMfVxuICogQGRlY29yYXRvclxuICogQG5hbWVzcGFjZSBEZWNvcmF0b3JzXG4gKiBAbWVtYmVyT2YgVmFsaWRhdGlvblxuICovXG5leHBvcnQgY29uc3QgdXJsID0gKG1lc3NhZ2U6IHN0cmluZyA9IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuVVJMKSA9PiAodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5S2V5OiBzdHJpbmcpID0+IHtcbiAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFxuICAgICAgICBnZXRWYWxpZGF0aW9uS2V5KFZhbGlkYXRpb25LZXlzLlVSTCksXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgfSxcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICBwcm9wZXJ0eUtleVxuICAgICk7XG59Il19
