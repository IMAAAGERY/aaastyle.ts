'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var require$$0 = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=require$$0__default["default"],g=60103;reactJsxRuntime_production_min.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");reactJsxRuntime_production_min.Fragment=h("react.fragment");}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

var reactJsxRuntime_development = {};

/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (exports) {

if (process.env.NODE_ENV !== "production") {
  (function() {

var React = require$$0__default["default"];
var _assign = objectAssign;

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  symbolFor('react.scope');
  symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}
}(reactJsxRuntime_development));

if (process.env.NODE_ENV === 'production') {
  jsxRuntime.exports = reactJsxRuntime_production_min;
} else {
  jsxRuntime.exports = reactJsxRuntime_development;
}

var ViewStyle = styled__default["default"].div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n\tposition: fixed;\n\tz-index: 100;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tflex-direction: row;\n\tbackground-color: ", ";\n\tflex-wrap: wrap;\n\toverflow-x: hidden;\n\tbox-sizing: border-box;\n\t@media (max-width: 768px) {\n\t\tflex-direction: column;\n\t}\n"], ["\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n\tposition: fixed;\n\tz-index: 100;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tflex-direction: row;\n\tbackground-color: ", ";\n\tflex-wrap: wrap;\n\toverflow-x: hidden;\n\tbox-sizing: border-box;\n\t@media (max-width: 768px) {\n\t\tflex-direction: column;\n\t}\n"])), function (props) { return props.theme.view.backgroundColor; });
var ContainerStyle = styled__default["default"].div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n\tposition: relative;\n\tflex-direction: ", ";\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n\tbackground-color: ", ";\n\tpadding: 8px;\n\t@media (max-width: 768px) {\n\t\tflex-direction: column;\n\t}\n"], ["\n\tposition: relative;\n\tflex-direction: ", ";\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n\tbackground-color: ", ";\n\tpadding: 8px;\n\t@media (max-width: 768px) {\n\t\tflex-direction: column;\n\t}\n"])), function (props) { return (props.vertical ? 'column' : 'row'); }, function (props) { return props.theme.container.backgroundColor; });
var BoxStyle = styled__default["default"].div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: ", ";\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n\tborder-radius: 12px;\n\tbox-sizing: border-box;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\tbackground-color: ", ";\n\tpadding: 8px;\n\tmargin: 8px;\n\n\t@media (max-width: 768px) {\n\t\tflex-direction: column;\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: ", ";\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n\tborder-radius: 12px;\n\tbox-sizing: border-box;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\tbackground-color: ", ";\n\tpadding: 8px;\n\tmargin: 8px;\n\n\t@media (max-width: 768px) {\n\t\tflex-direction: column;\n\t}\n"])), function (props) { return (props.vertical ? 'column' : 'row'); }, function (props) { return props.theme.box.backgroundColor; });
var MasterDetailStyle = styled__default["default"].div(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-start;\n\tflex-grow: 1;\n\n\t@media (max-width: 768px) {\n\t\tflex-grow: unset;\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-start;\n\tflex-grow: 1;\n\n\t@media (max-width: 768px) {\n\t\tflex-grow: unset;\n\t}\n"])));
var MasterDetailGroupTitleStyle = styled__default["default"].span(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-self: flex-start;\n"], ["\n\tdisplay: flex;\n\talign-self: flex-start;\n"])));
var DialogBackgroundStyle = styled__default["default"].div(templateObject_6$3 || (templateObject_6$3 = __makeTemplateObject(["\n\tposition: fixed;\n\tz-index: 1000;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100vw;\n\theight: 100vh;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: ", ";\n\topacity: 0.3;\n"], ["\n\tposition: fixed;\n\tz-index: 1000;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100vw;\n\theight: 100vh;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: ", ";\n\topacity: 0.3;\n"])), function (props) { return props.theme.dialogBackground.backgroundColor; });
var DialogStyle = styled__default["default"].div(templateObject_7$2 || (templateObject_7$2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: start;\n\talign-self: center;\n\tjustify-self: center;\n\tposition: fixed;\n\tmin-width: 200px;\n\tmin-height: 200px;\n\tbackground-color: ", ";\n\tborder-radius: 12px;\n\tpadding: 8px;\n\tcolor: #000000;\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: start;\n\talign-self: center;\n\tjustify-self: center;\n\tposition: fixed;\n\tmin-width: 200px;\n\tmin-height: 200px;\n\tbackground-color: ", ";\n\tborder-radius: 12px;\n\tpadding: 8px;\n\tcolor: #000000;\n"])), function (props) { return props.theme.dialog.backgroundColor; });
var SidebarStyle = styled__default["default"].aside(templateObject_8$2 || (templateObject_8$2 = __makeTemplateObject(["\n\tposition: sticky;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n\tleft: 0;\n\ttop: 0;\n\theight: 100vh;\n\twidth: ", ";\n\toverflow-x: hidden;\n\ttransition: 0.5s;\n\twhite-space: nowrap;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\tpadding: 0;\n\tbox-sizing: border-box;\n\t@media (max-width: 768px) {\n\t\t/* position: absolute; */\n\t\twidth: ", ";\n\t}\n"], ["\n\tposition: sticky;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n\tleft: 0;\n\ttop: 0;\n\theight: 100vh;\n\twidth: ", ";\n\toverflow-x: hidden;\n\ttransition: 0.5s;\n\twhite-space: nowrap;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\tpadding: 0;\n\tbox-sizing: border-box;\n\t@media (max-width: 768px) {\n\t\t/* position: absolute; */\n\t\twidth: ", ";\n\t}\n"])), function (props) { return (props.collapsed ? '70px' : '250px'); }, function (props) { return props.theme.sidebar.backgroundColor; }, function (props) { return props.theme.sidebar.color; }, function (props) { return (props.collapsed ? '0' : '200px'); });
var SidebarItemStyle = styled__default["default"].div(templateObject_9$2 || (templateObject_9$2 = __makeTemplateObject(["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: ", ";\n\tbackground-color: ", ";\n\tborder-bottom: 1px solid rgba(144, 144, 144, 0.3);\n\twidth: 100%;\n\tmin-height: 50px;\n\tpadding: 8px;\n\tbox-sizing: border-box;\n"], ["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: ", ";\n\tbackground-color: ", ";\n\tborder-bottom: 1px solid rgba(144, 144, 144, 0.3);\n\twidth: 100%;\n\tmin-height: 50px;\n\tpadding: 8px;\n\tbox-sizing: border-box;\n"])), function (props) { return props.theme.sidebarItem.color; }, function (props) { return props.theme.sidebarItem.backgroundColor; });
var NavbarStyle = styled__default["default"].div(templateObject_10$2 || (templateObject_10$2 = __makeTemplateObject(["\n\tposition: sticky;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\tleft: 0;\n\ttop: 0;\n\tmin-height: 60px;\n\twidth: 100%;\n\toverflow: hidden;\n\ttransition: 0.5s;\n\twhite-space: nowrap;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\tpadding: 0;\n\tbox-sizing: border-box;\n\tbox-shadow: 0px 1px 2px 0px rgb(60 64 67 / 30%), 0px 1px 3px 1px rgb(60 64 67 / 15%);\n"], ["\n\tposition: sticky;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\tleft: 0;\n\ttop: 0;\n\tmin-height: 60px;\n\twidth: 100%;\n\toverflow: hidden;\n\ttransition: 0.5s;\n\twhite-space: nowrap;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\tpadding: 0;\n\tbox-sizing: border-box;\n\tbox-shadow: 0px 1px 2px 0px rgb(60 64 67 / 30%), 0px 1px 3px 1px rgb(60 64 67 / 15%);\n"])), function (props) { return props.theme.navbar.backgroundColor; }, function (props) { return props.theme.navbar.color; });
var NavbarItemStyle = styled__default["default"].div(templateObject_11$2 || (templateObject_11$2 = __makeTemplateObject(["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: ", ";\n\tbackground-color: ", ";\n\tborder-bottom: 1px solid rgba(144, 144, 144, 0.3);\n\twidth: 100%;\n\tmin-height: 50px;\n\tpadding: 8px;\n\tbox-sizing: border-box;\n"], ["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: ", ";\n\tbackground-color: ", ";\n\tborder-bottom: 1px solid rgba(144, 144, 144, 0.3);\n\twidth: 100%;\n\tmin-height: 50px;\n\tpadding: 8px;\n\tbox-sizing: border-box;\n"])), function (props) { return props.theme.navbarItem.color; }, function (props) { return props.theme.navbarItem.backgroundColor; });
var templateObject_1$4, templateObject_2$4, templateObject_3$4, templateObject_4$4, templateObject_5$3, templateObject_6$3, templateObject_7$2, templateObject_8$2, templateObject_9$2, templateObject_10$2, templateObject_11$2;

var DEFAULT_THEME = {
    button: {
        backgroundColor: {
            primary: '#007bff',
            secondary: '#6c757d',
            warning: '#ffc107',
            danger: '#dc3545',
            info: '#17a2b8',
            success: '#28a745',
            dark: '#343a40',
            light: '#f8f9fa',
        },
        borderColor: {
            primary: '#007bff',
            secondary: '#6c757d',
            warning: '#ffc107',
            danger: '#dc3545',
            info: '#17a2b8',
            success: '#28a745',
            dark: '#343a40',
            light: '#f8f9fa',
        },
        color: {
            primary: '#ffffff',
            secondary: '#ffffff',
            warning: '#000000',
            danger: '#000000',
            info: '#000000',
            success: '#000000',
            dark: '#ffffff',
            light: '#000000',
        },
    },
    sidebar: {
        backgroundColor: '#f2f2f7',
        color: '#000000',
    },
    sidebarItem: {
        backgroundColor: '#f2f2f7',
        color: '#000000',
    },
    navbar: {
        backgroundColor: '#f2f2f7',
        color: '#000000',
    },
    navbarItem: {
        backgroundColor: '#f2f2f7',
        color: '#000000',
    },
    container: {
        backgroundColor: 'transparent',
    },
    view: {
        backgroundColor: 'transparent',
    },
    list: {
        backgroundColor: '#ffffff',
        borderColor: 'transparent',
        color: '#000000',
    },
    listItem: {
        backgroundColor: 'transparent',
        color: '#000000',
    },
    dialog: {
        backgroundColor: '#ffffff',
    },
    dialogBackground: {
        backgroundColor: '#909090',
    },
    card: {
        backgroundColor: '#ffffff',
    },
    toast: {
        backgroundColor: '#ffffff',
    },
    box: {
        backgroundColor: '#ffffff',
    },
    input: {
        backgroundColor: '#ffffff',
        color: '#000000',
    },
    icon: {
        backgroundColor: 'transparent',
        color: '#000000',
    },
    label: {
        backgroundColor: 'transparent',
        color: 'transparent',
    },
    fab: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: 'transparent',
    },
    select: {
        backgroundColor: '#ffffff',
        color: '#ffffff',
    },
    option: {
        backgroundColor: '#ffffff',
        selectedBackgroundColor: '#ffffff',
        hoverBackgroundColor: '#ffffff',
        color: '#ffffff',
        selectedColor: '#ffffff',
        hoverColor: '#ffffff',
    },
};

var Box = require$$0.forwardRef(function (props, ref) {
    var children = props.children, style = props.style, className = props.className, theme = props.theme, vertical = props.vertical;
    return (jsxRuntime.exports.jsx(styled.ThemeProvider, __assign({ theme: theme || DEFAULT_THEME }, { children: jsxRuntime.exports.jsx(BoxStyle, __assign({ ref: ref, style: style, className: className, vertical: vertical }, { children: children }), void 0) }), void 0));
});

var Container = require$$0.forwardRef(function (props, ref) {
    var children = props.children, style = props.style, className = props.className, theme = props.theme, vertical = props.vertical;
    return (jsxRuntime.exports.jsx(styled.ThemeProvider, __assign({ theme: theme || DEFAULT_THEME }, { children: jsxRuntime.exports.jsx(ContainerStyle, __assign({ ref: ref, style: style, className: className, vertical: vertical }, { children: children }), void 0) }), void 0));
});

var Dialog = require$$0.forwardRef(function (props, ref) {
    var children = props.children, style = props.style, theme = props.theme, className = props.className;
    return (jsxRuntime.exports.jsx(styled.ThemeProvider, __assign({ theme: theme || DEFAULT_THEME }, { children: jsxRuntime.exports.jsx(DialogBackgroundStyle, { children: jsxRuntime.exports.jsx(DialogStyle, __assign({ ref: ref, style: style, className: className }, { children: children }), void 0) }, void 0) }), void 0));
});

var ListStyle = styled__default["default"].ul(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n\tbox-sizing: border-box;\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: flex-start;\n\tlist-style: none;\n\tcolor: ", ";\n\tborder-radius: 12px;\n\tpadding: 0;\n\tmargin: 12px;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\ttransition: 0.3s;\n"], ["\n\tbox-sizing: border-box;\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: flex-start;\n\tlist-style: none;\n\tcolor: ", ";\n\tborder-radius: 12px;\n\tpadding: 0;\n\tmargin: 12px;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\ttransition: 0.3s;\n"])), function (props) { return props.theme.list.color; });
var ListItemStyle = styled__default["default"].li(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n\tposition: relative;\n\tborder-bottom: 1px solid rgba(144, 144, 144, 0.3);\n\tcursor: pointer;\n\tcolor: ", ";\n\tbackground-color: ", ";\n\tbox-sizing: border-box;\n\tline-height: 2.5;\n\twidth: 100%;\n\n\t&:hover{\n\t\topacity: 0.8;\n\t}\n"], ["\n\tposition: relative;\n\tborder-bottom: 1px solid rgba(144, 144, 144, 0.3);\n\tcursor: pointer;\n\tcolor: ", ";\n\tbackground-color: ", ";\n\tbox-sizing: border-box;\n\tline-height: 2.5;\n\twidth: 100%;\n\n\t&:hover{\n\t\topacity: 0.8;\n\t}\n"])), function (props) { return props.theme.listItem.color; }, function (props) { return props.theme.listItem.backgroundColor; });
var DropdownStyle = styled__default["default"].div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var DropdownItemStyle = styled__default["default"].div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject([""], [""])));
var templateObject_1$3, templateObject_2$3, templateObject_3$3, templateObject_4$3;

var List = require$$0.forwardRef(function (props, ref) {
    var children = props.children, style = props.style, className = props.className, theme = props.theme;
    return (jsxRuntime.exports.jsx(ListStyle, __assign({ ref: ref, style: style, className: className, theme: theme }, { children: children }), void 0));
});

var ListItem = require$$0.forwardRef(function (props, ref) {
    var children = props.children, style = props.style, className = props.className, theme = props.theme, onClick = props.onClick;
    return (jsxRuntime.exports.jsx(ListItemStyle, __assign({ onClick: onClick, ref: ref, style: style, theme: theme, className: className }, { children: children }), void 0));
});

var Sidebar = require$$0.forwardRef(function (props, ref) {
    var children = props.children, style = props.style, className = props.className, theme = props.theme, collapsed = props.collapsed;
    return (jsxRuntime.exports.jsx(styled.ThemeProvider, __assign({ theme: theme || DEFAULT_THEME }, { children: jsxRuntime.exports.jsx(SidebarStyle, __assign({ ref: ref, style: style, className: className, collapsed: collapsed }, { children: children }), void 0) }), void 0));
});

var SidebarItem = require$$0.forwardRef(function (props, ref) {
    var children = props.children, style = props.style, className = props.className, theme = props.theme;
    return (jsxRuntime.exports.jsx(styled.ThemeProvider, __assign({ theme: theme || DEFAULT_THEME }, { children: jsxRuntime.exports.jsx(SidebarItemStyle, __assign({ ref: ref, style: style, className: className }, { children: children }), void 0) }), void 0));
});

var MasterDetail = require$$0.forwardRef(function (props, ref) {
    var children = props.children, style = props.style, className = props.className, theme = props.theme, header = props.header, footer = props.footer, collapsed = props.collapsed;
    var _a = require$$0.useState(), currentContent = _a[0], setCurrentContent = _a[1];
    return (jsxRuntime.exports.jsx(styled.ThemeProvider, __assign({ theme: theme || DEFAULT_THEME }, { children: jsxRuntime.exports.jsxs(MasterDetailStyle, __assign({ ref: ref, style: style, className: className }, { children: [jsxRuntime.exports.jsxs(Sidebar, __assign({ collapsed: collapsed }, { children: [header && jsxRuntime.exports.jsx(SidebarItem, { children: header }, void 0), children === null || children === void 0 ? void 0 : children.map(function (group, index) {
                            var _a;
                            return (jsxRuntime.exports.jsxs(SidebarItem, { children: [jsxRuntime.exports.jsx(MasterDetailGroupTitleStyle, { children: collapsed ? group.collapsedTitle : group.title }, void 0), jsxRuntime.exports.jsx(List, { children: (_a = group.items) === null || _a === void 0 ? void 0 : _a.map(function (item, index) { return (jsxRuntime.exports.jsx(ListItem, __assign({ onClick: function () { return setCurrentContent(item.content); } }, { children: collapsed ? item.collapsedTitle : item.title }), index)); }) }, void 0)] }, index));
                        }), footer && jsxRuntime.exports.jsx(SidebarItem, __assign({ style: { justifySelf: 'flex-end' } }, { children: footer }), void 0)] }), void 0), jsxRuntime.exports.jsx(Container, __assign({ vertical: true, style: { backgroundColor: '#f2f2f7', borderLeft: '1px solid rgba(144, 144, 144, 0.3)', flexGrow: 1 } }, { children: currentContent }), void 0)] }), void 0) }), void 0));
});

var View = require$$0.forwardRef(function (props, ref) {
    var children = props.children, style = props.style, className = props.className, theme = props.theme;
    return (jsxRuntime.exports.jsx(styled.ThemeProvider, __assign({ theme: theme || DEFAULT_THEME }, { children: jsxRuntime.exports.jsx(ViewStyle, __assign({ style: style, className: className, ref: ref }, { children: children }), void 0) }), void 0));
});

var NavbarItem = require$$0.forwardRef(function (props, ref) {
    var children = props.children, style = props.style, className = props.className, theme = props.theme;
    return (jsxRuntime.exports.jsx(styled.ThemeProvider, __assign({ theme: theme || DEFAULT_THEME }, { children: jsxRuntime.exports.jsx(NavbarItemStyle, __assign({ ref: ref, style: style, className: className }, { children: children }), void 0) }), void 0));
});

var Navbar = require$$0.forwardRef(function (props, ref) {
    var children = props.children, style = props.style, className = props.className, theme = props.theme;
    return (jsxRuntime.exports.jsx(styled.ThemeProvider, __assign({ theme: theme || DEFAULT_THEME }, { children: jsxRuntime.exports.jsx(NavbarStyle, __assign({ ref: ref, style: style, className: className }, { children: children }), void 0) }), void 0));
});

var ButtonStyle = styled__default["default"].button(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 40px;\n\twidth: 120px;\n\tmargin: 8px;\n\tborder-radius: 4px;\n\tcolor: ", ";\n\tcursor: pointer;\n\toverflow: hidden;\n\tfont-weight: bold;\n\tpadding: 12px 24px;\n\n\t&:hover {\n\t\topacity: 0.8;\n\t}\n\n\t", "\n\n\t", "\n"], ["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 40px;\n\twidth: 120px;\n\tmargin: 8px;\n\tborder-radius: 4px;\n\tcolor: ", ";\n\tcursor: pointer;\n\toverflow: hidden;\n\tfont-weight: bold;\n\tpadding: 12px 24px;\n\n\t&:hover {\n\t\topacity: 0.8;\n\t}\n\n\t", "\n\n\t", "\n"])), function (props) { return "".concat(props.theme.button.color[props.color]); }, function (props) {
    return (props.variant === 'outlined' && styled.css(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n\t\t\t\tcolor: #000000;\n\t\t\t\tborder: 3px solid ", ";\n\t\t\t\tbackground: none;\n\t\t\t"], ["\n\t\t\t\tcolor: #000000;\n\t\t\t\tborder: 3px solid ", ";\n\t\t\t\tbackground: none;\n\t\t\t"])), props.theme.button.borderColor[props.color])) ||
        (props.variant === 'contained' && styled.css(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n\t\t\t\tborder: none;\n\t\t\t\tbackground: ", ";\n\t\t\t"], ["\n\t\t\t\tborder: none;\n\t\t\t\tbackground: ", ";\n\t\t\t"])), props.theme.button.backgroundColor[props.color])) ||
        (props.variant === 'text' && styled.css(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n\t\t\t\tcolor: #000000;\n\t\t\t\tborder: none;\n\t\t\t\tbackground: none;\n\t\t\t"], ["\n\t\t\t\tcolor: #000000;\n\t\t\t\tborder: none;\n\t\t\t\tbackground: none;\n\t\t\t"]))));
}, function (props) {
    return (props.shape === 'rounded' && styled.css(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n\t\t\t\tborder-radius: 12px;\n\t\t\t"], ["\n\t\t\t\tborder-radius: 12px;\n\t\t\t"])))) ||
        (props.shape === 'pill' && styled.css(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n\t\t\t\tborder-radius: 200px;\n\t\t\t"], ["\n\t\t\t\tborder-radius: 200px;\n\t\t\t"])))) ||
        (props.shape === 'sharp' && styled.css(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n\t\t\t\tborder-radius: 0;\n\t\t\t"], ["\n\t\t\t\tborder-radius: 0;\n\t\t\t"]))));
});
var ButtonContentStyle = styled__default["default"].span(templateObject_8$1 || (templateObject_8$1 = __makeTemplateObject(["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tz-index: 2;\n"], ["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tz-index: 2;\n"])));
var rippleEffect = styled.keyframes(templateObject_9$1 || (templateObject_9$1 = __makeTemplateObject(["\n\t0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(10);\n    opacity: 0.375;\n  }\n  100% {\n    transform: scale(35);\n    opacity: 0;\n  }\n"], ["\n\t0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(10);\n    opacity: 0.375;\n  }\n  100% {\n    transform: scale(35);\n    opacity: 0;\n  }\n"])));
var ButtonRippleStyle = styled__default["default"].span(templateObject_10$1 || (templateObject_10$1 = __makeTemplateObject(["\n\twidth: 25px;\n\theight: 25px;\n\tposition: absolute;\n\tdisplay: block;\n\tcontent: '';\n\tborder-radius: 200px;\n\tanimation: 0.9s ease 1 forwards ", ";\n\tleft: ", "px;\n\ttop: ", "px;\n\tbackground-color: #e6e6e6;\n"], ["\n\twidth: 25px;\n\theight: 25px;\n\tposition: absolute;\n\tdisplay: block;\n\tcontent: '';\n\tborder-radius: 200px;\n\tanimation: 0.9s ease 1 forwards ", ";\n\tleft: ", "px;\n\ttop: ", "px;\n\tbackground-color: #e6e6e6;\n"])), rippleEffect, function (props) { return props.left; }, function (props) { return props.top; });
var ToggleSwitchWrapperStyle = styled__default["default"].div(templateObject_11$1 || (templateObject_11$1 = __makeTemplateObject(["\n\tposition: relative;\n\tmargin: 4px;\n"], ["\n\tposition: relative;\n\tmargin: 4px;\n"])));
var ToggleSwitchLabelStyle = styled__default["default"].label(templateObject_12$1 || (templateObject_12$1 = __makeTemplateObject(["\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 42px;\n\theight: 26px;\n\tborder-radius: 15px;\n\tbackground: #bebebe;\n\tcursor: pointer;\n\t&::after {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\tborder-radius: 50%;\n\t\twidth: 18px;\n\t\theight: 18px;\n\t\tmargin: 3px;\n\t\tbackground: #ffffff;\n\t\tbox-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);\n\t\ttransition: 0.2s;\n\t}\n"], ["\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 42px;\n\theight: 26px;\n\tborder-radius: 15px;\n\tbackground: #bebebe;\n\tcursor: pointer;\n\t&::after {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\tborder-radius: 50%;\n\t\twidth: 18px;\n\t\theight: 18px;\n\t\tmargin: 3px;\n\t\tbackground: #ffffff;\n\t\tbox-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);\n\t\ttransition: 0.2s;\n\t}\n"])));
var ToggleSwitchStyle = styled__default["default"].input(templateObject_13$1 || (templateObject_13$1 = __makeTemplateObject(["\n\topacity: 0;\n\tz-index: 1;\n\tborder-radius: 15px;\n\twidth: 42px;\n\theight: 26px;\n\tmargin: 0;\n\t&:checked + ", " {\n\t\tbackground: #4fbe79;\n\t\t&::after {\n\t\t\tcontent: '';\n\t\t\tdisplay: block;\n\t\t\tborder-radius: 50%;\n\t\t\twidth: 18px;\n\t\t\theight: 18px;\n\t\t\tmargin-left: 21px;\n\t\t\ttransition: 0.2s;\n\t\t}\n\t}\n\n\t&:disabled + ", " {\n\t\tbackground: #cccccc;\n\t\tcursor: default;\n\t}\n"], ["\n\topacity: 0;\n\tz-index: 1;\n\tborder-radius: 15px;\n\twidth: 42px;\n\theight: 26px;\n\tmargin: 0;\n\t&:checked + ", " {\n\t\tbackground: #4fbe79;\n\t\t&::after {\n\t\t\tcontent: '';\n\t\t\tdisplay: block;\n\t\t\tborder-radius: 50%;\n\t\t\twidth: 18px;\n\t\t\theight: 18px;\n\t\t\tmargin-left: 21px;\n\t\t\ttransition: 0.2s;\n\t\t}\n\t}\n\n\t&:disabled + ", " {\n\t\tbackground: #cccccc;\n\t\tcursor: default;\n\t}\n"])), ToggleSwitchLabelStyle, ToggleSwitchLabelStyle);
var ToggleButtonStyle = styled__default["default"].button(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 40px;\n\twidth: 40px;\n\tmargin: 4px;\n\tborder-radius: 4px;\n\toverflow: hidden;\n\tborder: none;\n\tbackground-color: ", ";\n\tbox-sizing: border-box;\n\tcursor: pointer;\n\n\t&:hover {\n\t\tbackground-color: ", ";\n\t}\n\n\t", "\n"], ["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 40px;\n\twidth: 40px;\n\tmargin: 4px;\n\tborder-radius: 4px;\n\toverflow: hidden;\n\tborder: none;\n\tbackground-color: ", ";\n\tbox-sizing: border-box;\n\tcursor: pointer;\n\n\t&:hover {\n\t\tbackground-color: ", ";\n\t}\n\n\t", "\n"])), function (props) { return (props.selected ? '#cccccc' : '#ffffff'); }, function (props) { return (props.selected ? '#cccccc' : '#f2f2f7'); }, function (props) {
    return (props.positionInGroup === 'first' && styled.css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n\t\t\t\tborder-top-left-radius: 4px !important;\n\t\t\t\tborder-bottom-left-radius: 4px !important;\n\t\t\t"], ["\n\t\t\t\tborder-top-left-radius: 4px !important;\n\t\t\t\tborder-bottom-left-radius: 4px !important;\n\t\t\t"])))) ||
        (props.positionInGroup === 'last' && styled.css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n\t\t\t\tborder-top-right-radius: 4px !important;\n\t\t\t\tborder-bottom-right-radius\u00EB: 4px !important;\n\t\t\t"], ["\n\t\t\t\tborder-top-right-radius: 4px !important;\n\t\t\t\tborder-bottom-right-radius\u00EB: 4px !important;\n\t\t\t"]))));
});
var ToggleButtonGroupStyle = styled__default["default"].div(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: ", ";\n\tjustify-content: center;\n\talign-items: center;\n\tborder: 1px solid #909090;\n\tborder-radius: 4px;\n\tbox-sizing: border-box;\n\twidth: fit-content;\n\tpadding: 0;\n\n\t& * {\n\t\tmargin: 0;\n\t\tborder-radius: 0;\n\t}\n"], ["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: ", ";\n\tjustify-content: center;\n\talign-items: center;\n\tborder: 1px solid #909090;\n\tborder-radius: 4px;\n\tbox-sizing: border-box;\n\twidth: fit-content;\n\tpadding: 0;\n\n\t& * {\n\t\tmargin: 0;\n\t\tborder-radius: 0;\n\t}\n"])), function (props) { return (props.orientation === 'horizontal' ? 'row' : 'column'); });
var FABStyle = styled__default["default"].button(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n\tcursor: pointer;\n\twidth: fit-content;\n\theight: fit-content;\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\toverflow: hidden;\n\tborder-radius: ", ";\n\tfont-weight: bold;\n\tborder: 1px solid;\n\tbackground-color: ", ";\n\tborder-color: ", ";\n\tmin-width: ", ";\n\tpadding: 12px;\n\t& * {\n\t\tpadding: 0;\n\t}\n"], ["\n\tcursor: pointer;\n\twidth: fit-content;\n\theight: fit-content;\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\toverflow: hidden;\n\tborder-radius: ", ";\n\tfont-weight: bold;\n\tborder: 1px solid;\n\tbackground-color: ", ";\n\tborder-color: ", ";\n\tmin-width: ", ";\n\tpadding: 12px;\n\t& * {\n\t\tpadding: 0;\n\t}\n"])), function (props) { return props.extended ? '200px' : '100%'; }, function (props) { return props.theme.fab.backgroundColor; }, function (props) { return props.theme.fab.borderColor; }, function (props) { return props.extended ? '200px' : 'unset'; });
var templateObject_1$2, templateObject_2$2, templateObject_3$2, templateObject_4$2, templateObject_5$2, templateObject_6$2, templateObject_7$1, templateObject_8$1, templateObject_9$1, templateObject_10$1, templateObject_11$1, templateObject_12$1, templateObject_13$1, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18;

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

var ToggleSwitch = require$$0.forwardRef(function (props, ref) {
    var style = props.style, className = props.className, onClick = props.onClick, onChange = props.onChange, disabled = props.disabled, checked = props.checked;
    var id = v4();
    return (jsxRuntime.exports.jsxs(ToggleSwitchWrapperStyle, { children: [jsxRuntime.exports.jsx(ToggleSwitchStyle, { ref: ref, style: style, className: className, disabled: disabled, checked: checked, onChange: onChange, onClick: onClick, id: "toggleSwitch-".concat(id), type: 'checkbox' }, void 0), jsxRuntime.exports.jsx(ToggleSwitchLabelStyle, { htmlFor: "toggleSwitch-".concat(id) }, void 0)] }, void 0));
});

var Button = require$$0.forwardRef(function (props, ref) {
    var children = props.children, className = props.className, style = props.style, theme = props.theme, variant = props.variant, color = props.color, shape = props.shape, disabled = props.disabled, onClick = props.onClick;
    var _a = require$$0.useState({ x: -1, y: -1 }), coords = _a[0], setCoords = _a[1];
    var _b = require$$0.useState(false), isRippling = _b[0], setIsRippling = _b[1];
    require$$0.useEffect(function () {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            setTimeout(function () { return setIsRippling(false); }, 300);
        }
        else
            setIsRippling(false);
    }, [coords]);
    require$$0.useEffect(function () {
        if (!isRippling)
            setCoords({ x: -1, y: -1 });
    }, [isRippling]);
    var handleClick = function (e) {
        var node = e.target;
        var rect = node.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick(e);
    };
    return (jsxRuntime.exports.jsxs(ButtonStyle, __assign({ ref: ref, disabled: disabled, theme: theme, className: className, style: style, onClick: handleClick, variant: variant || 'contained', color: color || 'primary', shape: shape || 'rounded' }, { children: [jsxRuntime.exports.jsx(ButtonContentStyle, { children: children }, void 0), isRippling && jsxRuntime.exports.jsx(ButtonRippleStyle, { left: coords.x, top: coords.y }, void 0)] }), void 0));
});

var FAB = require$$0.forwardRef(function (props, ref) {
    require$$0.useRef();
    var className = props.className, style = props.style, onClick = props.onClick, theme = props.theme, children = props.children, extended = props.extended;
    var _a = require$$0.useState({ x: -1, y: -1 }), coords = _a[0], setCoords = _a[1];
    var _b = require$$0.useState(false), isRippling = _b[0], setIsRippling = _b[1];
    require$$0.useEffect(function () {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            setTimeout(function () { return setIsRippling(false); }, 300);
        }
        else
            setIsRippling(false);
    }, [coords]);
    require$$0.useEffect(function () {
        if (!isRippling)
            setCoords({ x: -1, y: -1 });
    }, [isRippling]);
    var handleClick = function (e) {
        var node = e.target;
        var rect = node.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick(e);
    };
    return (jsxRuntime.exports.jsxs(FABStyle, __assign({ extended: extended || false, ref: ref, className: className, style: style, theme: theme, onClick: handleClick }, { children: [jsxRuntime.exports.jsx(ButtonContentStyle, { children: children }, void 0), isRippling && jsxRuntime.exports.jsx(ButtonRippleStyle, { left: coords.x, top: coords.y }, void 0)] }), void 0));
});

var ToggleButton = require$$0.forwardRef(function (props, ref) {
    var theme = props.theme, children = props.children, style = props.style, className = props.className, onClick = props.onClick, selected = props.selected, positionInGroup = props.positionInGroup;
    var _a = require$$0.useState(selected || false), clicked = _a[0], setClicked = _a[1];
    var _b = require$$0.useState({ x: -1, y: -1 }), coords = _b[0], setCoords = _b[1];
    var _c = require$$0.useState(false), isRippling = _c[0], setIsRippling = _c[1];
    require$$0.useEffect(function () {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            setTimeout(function () { return setIsRippling(false); }, 300);
        }
        else
            setIsRippling(false);
    }, [coords]);
    require$$0.useEffect(function () {
        if (!isRippling)
            setCoords({ x: -1, y: -1 });
    }, [isRippling]);
    require$$0.useEffect(function () {
        if (typeof selected !== 'undefined')
            setClicked(selected);
    }, [selected]);
    var handleClick = function (e) {
        var node = e.target;
        var rect = node.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        if (typeof selected === 'undefined') {
            setClicked(!clicked);
        }
        onClick && onClick(e);
    };
    return (jsxRuntime.exports.jsxs(ToggleButtonStyle, __assign({ positionInGroup: positionInGroup, selected: clicked, theme: theme || DEFAULT_THEME, ref: ref, onClick: function (e) { return handleClick(e); }, style: style, className: className }, { children: [jsxRuntime.exports.jsx(ButtonContentStyle, { children: children }, void 0), isRippling && jsxRuntime.exports.jsx(ButtonRippleStyle, { left: coords.x, top: coords.y }, void 0)] }), void 0));
});

var ToggleButtonGroup = require$$0.forwardRef(function (props, ref) {
    var children = props.children, style = props.style, className = props.className, exclusive = props.exclusive, orientation = props.orientation;
    var _a = require$$0.useState(Array(children.length).fill(false)), selectedButtons = _a[0], setSelectedButtons = _a[1];
    var handleToggleButtonClick = function (index) {
        if (exclusive) {
            var newSelectedButtons = Array(children.length).fill(false);
            newSelectedButtons[index] = !selectedButtons[index];
            setSelectedButtons(newSelectedButtons);
        }
        else {
            var newSelectedButtons = __spreadArray([], selectedButtons, true);
            newSelectedButtons[index] = !newSelectedButtons[index];
            setSelectedButtons(__spreadArray(__spreadArray([], selectedButtons, true), [selectedButtons[index]], false));
        }
        console.log(selectedButtons);
    };
    return (jsxRuntime.exports.jsx(ToggleButtonGroupStyle, __assign({ orientation: orientation || 'horizontal', ref: ref, style: style, className: className }, { children: children.map(function (child, index) { return (jsxRuntime.exports.jsx(ToggleButton, __assign({ positionInGroup: index === 0 ? 'first' : index === (children.length - 1) ? 'last' : undefined, selected: selectedButtons[index], onClick: function () { return handleToggleButtonClick(index); } }, { children: child }), index)); }) }), void 0));
});

var InputStyle = styled__default["default"].input(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n\tborder: none;\n\tborder-bottom: 1px solid rgba(144, 144, 144, 0.3);\n"], ["\n\tborder: none;\n\tborder-bottom: 1px solid rgba(144, 144, 144, 0.3);\n"])));
var SelectWrapperStyle = styled__default["default"].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject([""], [""])));
var SelectStyle = styled__default["default"].div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n\tposition: relative;\n\tborder: none;\n\tborder-radius: 4px;\n"], ["\n\tposition: relative;\n\tborder: none;\n\tborder-radius: 4px;\n"])));
var OptionsWrapperStyle = styled__default["default"].div(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject([""], [""])));
var OptionsListStyle = styled__default["default"].ul(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject([""], [""])));
var OptionStyle = styled__default["default"].li(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject([""], [""])));
var templateObject_1$1, templateObject_2$1, templateObject_3$1, templateObject_4$1, templateObject_5$1, templateObject_6$1;

var Input = require$$0.forwardRef(function (props, ref) {
    var style = props.style, className = props.className, theme = props.theme, value = props.value, defaultValue = props.defaultValue, defaultChecked = props.defaultChecked, type = props.type, placeholder = props.placeholder;
    return (jsxRuntime.exports.jsx(InputStyle, { ref: ref, value: value, defaultValue: defaultValue, defaultChecked: defaultChecked, placeholder: placeholder, type: type, theme: theme, className: className, style: style }, void 0));
});

var Select = require$$0.forwardRef(function (props, ref) {
    props.theme; props.placeholder; props.defaultValue; var options = props.options; props.className; props.style;
    return (jsxRuntime.exports.jsxs(SelectWrapperStyle, { children: [jsxRuntime.exports.jsx(SelectStyle, { ref: ref }, void 0), jsxRuntime.exports.jsx(OptionsWrapperStyle, { children: jsxRuntime.exports.jsx(OptionsListStyle, { children: options.map(function (option) { return (jsxRuntime.exports.jsx(OptionStyle, __assign({ value: option.value }, { children: option.label }), option.value)); }) }, void 0) }, void 0)] }, void 0));
});

var Dropdown = require$$0.forwardRef(function (props, ref) {
    return jsxRuntime.exports.jsx(DropdownStyle, {}, void 0);
});

var DropdownItem = require$$0.forwardRef(function (props, ref) {
    return jsxRuntime.exports.jsx(DropdownItemStyle, {}, void 0);
});

var SpacerStyle = styled__default["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\theight: 8px;\n\tmin-width: 8px;\n"], ["\n\theight: 8px;\n\tmin-width: 8px;\n"])));
var ToastStyle = styled__default["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\tposition: fixed;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\tz-index: 1000;\n\twidth: 120px;\n\theight: 40px;\n\tborder-radius: 200px;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\tbackground-color: ", ";\n\tcursor: ", ";\n\ttransition: 0.5s;\n\n\t", "\n"], ["\n\tposition: fixed;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\tz-index: 1000;\n\twidth: 120px;\n\theight: 40px;\n\tborder-radius: 200px;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\tbackground-color: ", ";\n\tcursor: ", ";\n\ttransition: 0.5s;\n\n\t", "\n"])), function (props) { return props.theme.toast.backgroundColor; }, function (props) { return (props.closable ? 'pointer' : 'default'); }, function (props) {
    return (props.position === 'top-left' && styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t\t\t\ttop: 8px;\n\t\t\t\tleft: ", ";\n\t\t\t"], ["\n\t\t\t\ttop: 8px;\n\t\t\t\tleft: ", ";\n\t\t\t"])), props.show ? '8px' : '-120px')) ||
        (props.position === 'top-center' && styled.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t\t\t\ttop: ", ";\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t"], ["\n\t\t\t\ttop: ", ";\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t"])), props.show ? '8px' : '-120px')) ||
        (props.position === 'top-right' && styled.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t\t\t\ttop: 8px;\n\t\t\t\tright: ", ";\n\t\t\t"], ["\n\t\t\t\ttop: 8px;\n\t\t\t\tright: ", ";\n\t\t\t"])), props.show ? '8px' : '-120px')) ||
        (props.position === 'bottom-left' && styled.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t\t\t\tbottom: 8px;\n\t\t\t\tleft: ", ";\n\t\t\t"], ["\n\t\t\t\tbottom: 8px;\n\t\t\t\tleft: ", ";\n\t\t\t"])), props.show ? '8px' : '-120px')) ||
        (props.position === 'bottom-center' && styled.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\t\t\t\tbottom: ", ";\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t"], ["\n\t\t\t\tbottom: ", ";\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t"])), props.show ? '8px' : '-120px')) ||
        (props.position === 'bottom-right' && styled.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\t\t\t\tbottom: 8px;\n\t\t\t\tright: ", ";\n\t\t\t"], ["\n\t\t\t\tbottom: 8px;\n\t\t\t\tright: ", ";\n\t\t\t"])), props.show ? '8px' : '-120px'));
});
var handleIconSize = function (size) {
    switch (size) {
        case 'small':
            return styled.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n\t\t\t\twidth: 32px;\n\t\t\t\theight: 32px;\n\t\t\t"], ["\n\t\t\t\twidth: 32px;\n\t\t\t\theight: 32px;\n\t\t\t"])));
        case 'medium':
            return styled.css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n\t\t\t\twidth: 64px;\n\t\t\t\theight: 64px;\n\t\t\t"], ["\n\t\t\t\twidth: 64px;\n\t\t\t\theight: 64px;\n\t\t\t"])));
        case 'large':
            return styled.css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n\t\t\t\twidth: 128px;\n\t\t\t\theight: 128px;\n\t\t\t"], ["\n\t\t\t\twidth: 128px;\n\t\t\t\theight: 128px;\n\t\t\t"])));
    }
};
var handleIconShape = function (shape) {
    switch (shape) {
        case 'circle':
            return '100%';
        case 'square':
            return '0';
    }
};
var IconStyle = styled__default["default"].div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\t", ";\n\tcolor: ", ";\n\tbackground-color: ", ";\n\n\t& * {\n\t\twidth: fit-content;\n\t\theight: 100%;\n\t}\n\t/* border-radius: ", "; */\n"], ["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\t", ";\n\tcolor: ", ";\n\tbackground-color: ", ";\n\n\t& * {\n\t\twidth: fit-content;\n\t\theight: 100%;\n\t}\n\t/* border-radius: ", "; */\n"])), function (props) { return handleIconSize(props.size); }, function (props) { return props.theme.icon.color; }, function (props) { return props.theme.icon.backgroundColor; }, function (props) { return handleIconShape(props.shape); });
var LabelStyle = styled__default["default"].div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\tbox-sizing: border-box;\n\twidth: fit-content;\n\tpadding: 12px;\n"], ["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\tbox-sizing: border-box;\n\twidth: fit-content;\n\tpadding: 12px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;

var Icon = require$$0.forwardRef(function (props, ref) {
    var children = props.children, style = props.style, theme = props.theme, className = props.className, shape = props.shape, size = props.size;
    return (jsxRuntime.exports.jsx(IconStyle, __assign({ ref: ref, style: style, theme: theme, className: className, shape: shape || 'circle', size: size || 'medium' }, { children: children }), void 0));
});

var Spacer = function (props) {
    return (jsxRuntime.exports.jsx(SpacerStyle, {}, void 0));
};

var Label = require$$0.forwardRef(function (props, ref) {
    var children = props.children, theme = props.theme, className = props.className, style = props.style;
    var childrenDestructuring = function () {
        if (children) {
            if (Array.isArray(children)) {
                return children.map(function (component, index) {
                    if (index !== children.length - 1) {
                        return (jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, { children: [typeof component === 'string' ? jsxRuntime.exports.jsx("span", { children: "component" }, void 0) : component, jsxRuntime.exports.jsx(Spacer, {}, void 0)] }, void 0));
                    }
                    return typeof component === 'string' ? jsxRuntime.exports.jsx("span", { children: "component" }, void 0) : component;
                });
            }
            return children;
        }
    };
    return (jsxRuntime.exports.jsx(LabelStyle, __assign({ theme: theme, className: className, style: style, ref: ref }, { children: childrenDestructuring() }), void 0));
});

var Toast = require$$0.forwardRef(function (props, ref) {
    props.children; var className = props.className, style = props.style, position = props.position, duration = props.duration, onClose = props.onClose, closable = props.closable, theme = props.theme;
    var _a = require$$0.useState('default'); _a[0]; var setColor = _a[1];
    var _b = require$$0.useState(''), message = _b[0], setMessage = _b[1];
    var _c = require$$0.useState(false), show = _c[0], setShow = _c[1];
    require$$0.useEffect(function () {
        if (duration) {
            var timer_1 = setTimeout(function () { return setShow(false); }, duration);
            return function () { return clearTimeout(timer_1); };
        }
        // eslint-disable-next-line
    }, [show]);
    var toast = function (type, message) {
        setColor(type || 'default');
        setMessage(message || '');
        setShow(true);
    };
    require$$0.useImperativeHandle(ref, function () { return ({
        toast: function () {
            toast('default', 'Hello world!');
        },
    }); });
    var handleClick = function (e) {
        closable && setShow(false);
        onClose && onClose();
    };
    return (jsxRuntime.exports.jsx(ToastStyle, __assign({ closable: closable || false, onClick: handleClick, ref: ref, className: className, style: style, theme: theme, position: position || 'top-center', show: show }, { children: message }), void 0));
});

exports.Box = Box;
exports.Button = Button;
exports.Container = Container;
exports.Dialog = Dialog;
exports.Dropdown = Dropdown;
exports.DropdownItem = DropdownItem;
exports.FAB = FAB;
exports.Icon = Icon;
exports.Input = Input;
exports.Label = Label;
exports.List = List;
exports.ListItem = ListItem;
exports.MasterDetail = MasterDetail;
exports.Navbar = Navbar;
exports.NavbarItem = NavbarItem;
exports.Select = Select;
exports.Sidebar = Sidebar;
exports.SidebarItem = SidebarItem;
exports.Spacer = Spacer;
exports.Toast = Toast;
exports.ToggleButton = ToggleButton;
exports.ToggleButtonGroup = ToggleButtonGroup;
exports.ToggleSwitch = ToggleSwitch;
exports.View = View;
//# sourceMappingURL=index.js.map
