(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.VueUploader = undefined;
	
	var _uploader = __webpack_require__(80);
	
	var _uploader2 = _interopRequireDefault(_uploader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_uploader2.default.version = '2.0.0';
	
	exports.VueUploader = _uploader2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(30)('wks')
	  , uid        = __webpack_require__(34)
	  , Symbol     = __webpack_require__(2).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 2 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 3 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(17)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(8)
	  , createDesc = __webpack_require__(29);
	module.exports = __webpack_require__(5) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(4)
	  , IE8_DOM_DEFINE = __webpack_require__(48)
	  , toPrimitive    = __webpack_require__(69)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(14);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(2)
	  , core      = __webpack_require__(3)
	  , ctx       = __webpack_require__(10)
	  , hide      = __webpack_require__(6)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 12 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , document = __webpack_require__(2).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(8).f
	  , has = __webpack_require__(12)
	  , TAG = __webpack_require__(1)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(30)('keys')
	  , uid    = __webpack_require__(34);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(25)
	  , defined = __webpack_require__(15);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(9)
	  , TAG = __webpack_require__(1)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2).document && document.documentElement;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(9);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(27)
	  , $export        = __webpack_require__(11)
	  , redefine       = __webpack_require__(64)
	  , hide           = __webpack_require__(6)
	  , has            = __webpack_require__(12)
	  , Iterators      = __webpack_require__(7)
	  , $iterCreate    = __webpack_require__(52)
	  , setToStringTag = __webpack_require__(18)
	  , getPrototypeOf = __webpack_require__(60)
	  , ITERATOR       = __webpack_require__(1)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(61)
	  , enumBugKeys = __webpack_require__(23);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(2)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(10)
	  , invoke             = __webpack_require__(49)
	  , html               = __webpack_require__(24)
	  , cel                = __webpack_require__(16)
	  , global             = __webpack_require__(2)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(9)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(20)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(15);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(40);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _assign = __webpack_require__(37);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _promise = __webpack_require__(39);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _FileAPI = __webpack_require__(79);
	
	var _FileAPI2 = _interopRequireDefault(_FileAPI);
	
	var _enums = __webpack_require__(36);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createFileData(fileId) {
	    return {
	        id: Math.random() * 1000,
	        percent: 100,
	        origin: null,
	        file: fileId,
	        msg: '',
	        status: _enums.FileStatus.UPLOADED
	    };
	}
	
	function transformFileList(files) {
	    var fileList = [],
	        values = [];
	    if (typeof files === 'string' && files.length > 0) values = [files];else if (files instanceof Array) values = files;
	
	    fileList = values.map(function (item, i) {
	        if (typeof item === 'string') return createFileData(item);
	        return item;
	    });
	    return fileList;
	}
	
	exports.default = {
	
	    props: ['config', 'files', 'name', 'maxlength', 'maxfiles', 'multiple'],
	
	    mounted: function mounted() {
	
	        console.log('ready...');
	
	        _FileAPI2.default.withCredentials = false;
	
	        this.$watch('files', function () {
	            this.$set('list', transformFileList(files));
	        });
	
	        var fileInput = this.$el.querySelector('input[type="file"]');
	        this.initFileInput(fileInput);
	    },
	
	    computed: {
	        canAddFile: function canAddFile() {
	            return this.couldAddFile();
	        },
	        canMultipleSelect: function canMultipleSelect() {
	            return this.settings.multiple;
	        }
	    },
	
	    methods: {
	        couldAddFile: function couldAddFile() {
	            return this.couldPlusFiles() > 0;
	        },
	        couldPlusFiles: function couldPlusFiles(count) {
	            count = count || 0;
	            return this.settings.maxFiles - (this.list.length + count);
	        },
	
	
	        isFileSizeOk: function isFileSizeOk(size) {
	            var maxFileSize = this.settings.maxFileSize;
	            return size <= maxFileSize;
	        },
	
	        isDimensionOk: function isDimensionOk(width, height) {
	            return this.checkDimension(width, height) === true;
	        },
	
	        checkDimension: function checkDimension(width, height) {
	            var _settings = this.settings;
	            var widthConfig = _settings.width;
	            var heightConfig = _settings.height;
	            var scaleConfig = _settings.scale;
	
	
	            if (widthConfig instanceof Array) {
	                if (width < widthConfig[0] || width > widthConfig[1]) return '图片宽度不合规范！';
	            } else if (width != widthConfig) return '图片宽度不合规范！';
	
	            if (heightConfig instanceof Array) {
	                if (height < heightConfig[0] || height > heightConfig[1]) return '图片高度不合规范！';
	            } else if (height != widthConfig) return '图片高度不合规范！';
	
	            var scale = width / height;
	            if (scaleConfig instanceof Array) {
	                if (scale < scaleConfig[0] || scale > scaleConfig[1]) return '图片宽高比不合规范！';
	            } else if (scale != scaleConfig) return '图片宽高比不合规范！';
	
	            return true;
	        },
	
	        getFileClass: function getFileClass(item) {
	            return {
	                'file': true,
	                'file-uploading': item.status == _enums.FileStatus.UPLOADING,
	                'file-upload-fail': item.status == _enums.FileStatus.FAILED
	            };
	        },
	        handleClick: function handleClick(item) {
	            if (item.status == _enums.FileStatus.FAILED) {
	                this.reUploadFile(item);
	            }
	
	            if (item.status == _enums.FileStatus.UPLOADED) {
	                this.settings.onClick(item);
	            }
	        },
	        reUploadFile: function reUploadFile(item) {
	            this.updateFile(item.origin, {
	                status: _enums.FileStatus.UPLOADING,
	                percent: 0
	            });
	            this.uploadOneFile(item.origin);
	        },
	        formatFileSize: function formatFileSize(size) {
	            return Math.round(size / 1024) + 'KB';
	        },
	        clearFileInput: function clearFileInput() {
	            this.$file.value = '';
	        },
	        initFileInput: function initFileInput(file) {
	            var that = this;
	            this.$file = file;
	
	            _FileAPI2.default.event.on(file, 'change', function (evt) {
	                console.log('file change...');
	                var files = _FileAPI2.default.getFiles(evt);
	                _FileAPI2.default.filterFiles(files, function (file, info) {
	                    if (!/^image/.test(file.type)) {
	                        that.handleError(file.name + '不是合法的图片文件！');
	                        return false;
	                    } else if (!that.isFileSizeOk(file.size)) {
	                        var tip = '单张图片最大' + that.formatFileSize(that.settings.maxFileSize);
	                        that.handleError(tip);
	                        return false;
	                    } else if (!that.isDimensionOk(info.width, info.height)) {
	                        var _tip = that.checkDimension(info.width, info.height);
	                        that.handleError(_tip);
	                        return false;
	                    }
	
	                    return true;
	                }, function (files, rejected) {
	                    if (files.length) {
	
	                        if (that.couldPlusFiles() < files.length) {
	                            var tip = '最多还能添加' + that.couldPlusFiles() + '张图片';
	                            that.handleError(tip);
	                            console.warn(tip);
	                            return;
	                        }
	
	                        _FileAPI2.default.each(files, function (file) {
	                            new _promise2.default(function (resolve, reject) {
	                                that.settings.beforeUpload.call(null, resolve, reject);
	                            }).then(function (data) {
	                                that.addFile(file);
	                                that.uploadOneFile(file, data || {});
	                            });
	                        });
	                    }
	                });
	            });
	        },
	        showImage: function showImage(value) {
	
	            var showImage = this.settings.showImage;
	
	            if (/^data/.test(value)) return value;
	
	            if (typeof showImage === 'function') {
	                return showImage.call(null, value);
	            } else if (typeof showImage === 'string') return showImage;else return value;
	        },
	        toJSON: function toJSON(data) {
	            try {
	                return JSON.parse(data);
	            } catch (e) {
	                return data;
	            }
	            return data;
	        },
	        getIdByFile: function getIdByFile(_ref) {
	            var type = _ref.type;
	            var name = _ref.name;
	            var size = _ref.size;
	            var lastModified = _ref.lastModified;
	
	            return [type, name, size, lastModified].join('_');
	        },
	        createFileData: function createFileData(fileId) {
	            return {
	                id: Math.random() * 1000,
	                percent: 100,
	                origin: null,
	                file: fileId,
	                msg: '',
	                status: _enums.FileStatus.UPLOADED
	            };
	        },
	        addFile: function addFile(file) {
	            var that = this;
	            var fileId = this.getIdByFile(file);
	
	            _FileAPI2.default.Image(file).resize(1, 100, 'min').get(function (err, img) {
	
	                that.list.push({
	                    id: fileId,
	                    percent: 0,
	                    origin: file,
	                    file: img && img.toDataURL(),
	                    msg: '',
	                    status: _enums.FileStatus.UPLOADING
	                });
	            });
	        },
	        updateFile: function updateFile(file, data) {
	            var fileId = this.getIdByFile(file);
	            this.list = this.list.map(function (item) {
	                if (item.id == fileId) {
	                    item = (0, _assign2.default)(item, data);
	                }
	                return item;
	            });
	        },
	        uploadOneFile: function uploadOneFile(file, data) {
	            var that = this;
	            that.uploadFile(file, data).then(function (result) {
	
	                that.updateFile(file, {
	                    file: result,
	                    status: _enums.FileStatus.UPLOADED
	                });
	
	                that.settings.onAdd.call(null, result);
	            }).catch(function (err) {
	
	                that.handleError(err);
	
	                that.updateFile(file, {
	                    status: _enums.FileStatus.FAILED,
	                    msg: err
	                });
	            });
	        },
	        uploadFile: function uploadFile(file, data) {
	
	            data = data || {};
	
	            var that = this,
	                settings = this.settings;
	
	            data = (0, _assign2.default)(data, settings.data);
	
	            return new _promise2.default(function (resolve, reject) {
	                _FileAPI2.default.upload({
	                    url: settings.uploadUrl,
	                    files: (0, _defineProperty3.default)({}, settings.uploadName, file),
	                    data: data,
	                    imageAutoOrientation: false,
	                    progress: function progress(evt) {
	                        that.updateFile(file, {
	                            percent: Math.round(evt.loaded / evt.total * 100)
	                        });
	                    },
	
	                    complete: function complete(err, xhr) {
	
	                        that.clearFileInput();
	
	                        var fileStatus = _enums.FileStatus.FAILED;
	
	                        if (xhr.readyState == 4 && xhr.status == 200) {
	                            var _data = that.toJSON(xhr.responseText);
	                            var result = settings.onUploaded.call(null, _data);
	                            if (result === false) reject('fail');else {
	                                fileStatus = _enums.FileStatus.UPLOADED;
	                                resolve(result);
	                            }
	                        } else reject(xhr.statusText);
	
	                        that.updateFile(file, {
	                            status: fileStatus
	                        });
	                    }
	                });
	            });
	        },
	        removeFile: function removeFile(file) {
	
	            this.list = this.list.filter(function (item) {
	                return item.id != file.id;
	            });
	
	            if (typeof this.settings.onRemove === 'function') {
	                this.settings.onRemove.call(this, file);
	            }
	        },
	        handleError: function handleError(e) {
	            this.clearFileInput();
	            this.settings.onError.call(null, e);
	        }
	    },
	
	    data: function data() {
	
	        var defaultSettings = {
	            beforeUpload: function beforeUpload(resolve) {
	                resolve({});
	            },
	            onClick: function onClick(item) {},
	            onAdd: function onAdd(value) {},
	            onError: function onError(tip) {
	                alert(tip);
	            },
	
	
	            uploadName: 'file',
	
	            name: 'file',
	
	            maxFiles: 1,
	
	            maxFileSize: 5 * 1024 * 1024,
	
	            multiple: false,
	
	            scale: [0.1, 10],
	
	            width: [1, 9999],
	
	            height: [1, 9999]
	        };
	
	        var userSettings = this.config;
	
	        var fileSettings = {};
	        if (this.name) fileSettings.name = this.name;
	        if (this.maxfiles) fileSettings.maxFiles = this.maxFiles;
	        if (this.maxsize) fileSettings.maxFileSize = this.maxsize;
	        if (this.multiple) fileSettings.multiple = this.multiple;
	
	        var settings = (0, _assign2.default)(defaultSettings, this.config, fileSettings);
	
	        var fileList = transformFileList(this.files);
	
	        return {
	            settings: settings,
	            list: fileList
	        };
	    }
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var FileStatus = {
	    NONE: 1,
	    UPLOADING: 2,
	    FAILED: 3,
	    UPLOADED: 4
	};
	
	exports.FileStatus = FileStatus;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(42), __esModule: true };

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(43), __esModule: true };

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(38);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(72);
	module.exports = __webpack_require__(3).Object.assign;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(73);
	var $Object = __webpack_require__(3).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(74);
	__webpack_require__(76);
	__webpack_require__(77);
	__webpack_require__(75);
	module.exports = __webpack_require__(3).Promise;

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(21)
	  , toLength  = __webpack_require__(32)
	  , toIndex   = __webpack_require__(68);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(10)
	  , call        = __webpack_require__(51)
	  , isArrayIter = __webpack_require__(50)
	  , anObject    = __webpack_require__(4)
	  , toLength    = __webpack_require__(32)
	  , getIterFn   = __webpack_require__(70)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(5) && !__webpack_require__(17)(function(){
	  return Object.defineProperty(__webpack_require__(16)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 49 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(7)
	  , ITERATOR   = __webpack_require__(1)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(4);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(57)
	  , descriptor     = __webpack_require__(29)
	  , setToStringTag = __webpack_require__(18)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(6)(IteratorPrototype, __webpack_require__(1)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(1)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(2)
	  , macrotask = __webpack_require__(31).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(9)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(28)
	  , gOPS     = __webpack_require__(59)
	  , pIE      = __webpack_require__(62)
	  , toObject = __webpack_require__(33)
	  , IObject  = __webpack_require__(25)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(17)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(4)
	  , dPs         = __webpack_require__(58)
	  , enumBugKeys = __webpack_require__(23)
	  , IE_PROTO    = __webpack_require__(19)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(16)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(24).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(8)
	  , anObject = __webpack_require__(4)
	  , getKeys  = __webpack_require__(28);
	
	module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(12)
	  , toObject    = __webpack_require__(33)
	  , IE_PROTO    = __webpack_require__(19)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(12)
	  , toIObject    = __webpack_require__(21)
	  , arrayIndexOf = __webpack_require__(46)(false)
	  , IE_PROTO     = __webpack_require__(19)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(6);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(2)
	  , core        = __webpack_require__(3)
	  , dP          = __webpack_require__(8)
	  , DESCRIPTORS = __webpack_require__(5)
	  , SPECIES     = __webpack_require__(1)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(4)
	  , aFunction = __webpack_require__(14)
	  , SPECIES   = __webpack_require__(1)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(20)
	  , defined   = __webpack_require__(15);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(20)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(22)
	  , ITERATOR  = __webpack_require__(1)('iterator')
	  , Iterators = __webpack_require__(7);
	module.exports = __webpack_require__(3).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(44)
	  , step             = __webpack_require__(54)
	  , Iterators        = __webpack_require__(7)
	  , toIObject        = __webpack_require__(21);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(26)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(11);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(56)});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(11);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(5), 'Object', {defineProperty: __webpack_require__(8).f});

/***/ },
/* 74 */
/***/ function(module, exports) {



/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(27)
	  , global             = __webpack_require__(2)
	  , ctx                = __webpack_require__(10)
	  , classof            = __webpack_require__(22)
	  , $export            = __webpack_require__(11)
	  , isObject           = __webpack_require__(13)
	  , aFunction          = __webpack_require__(14)
	  , anInstance         = __webpack_require__(45)
	  , forOf              = __webpack_require__(47)
	  , speciesConstructor = __webpack_require__(66)
	  , task               = __webpack_require__(31).set
	  , microtask          = __webpack_require__(55)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(63)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(18)($Promise, PROMISE);
	__webpack_require__(65)(PROMISE);
	Wrapper = __webpack_require__(3)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(53)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(67)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(26)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(71);
	var global        = __webpack_require__(2)
	  , hide          = __webpack_require__(6)
	  , Iterators     = __webpack_require__(7)
	  , TO_STRING_TAG = __webpack_require__(1)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 78 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! FileAPI 2.0.21 - BSD | git://github.com/mailru/FileAPI.git
	 * FileAPI — a set of  javascript tools for working with files. Multiupload, drag'n'drop and chunked file upload. Images: crop, resize and auto orientation by EXIF.
	 */
	
	/*
	 * JavaScript Canvas to Blob 2.0.5
	 * https://github.com/blueimp/JavaScript-Canvas-to-Blob
	 *
	 * Copyright 2012, Sebastian Tschan
	 * https://blueimp.net
	 *
	 * Licensed under the MIT license:
	 * http://www.opensource.org/licenses/MIT
	 *
	 * Based on stackoverflow user Stoive's code snippet:
	 * http://stackoverflow.com/q/4998908
	 */
	
	/*jslint nomen: true, regexp: true */
	/*global window, atob, Blob, ArrayBuffer, Uint8Array */
	
	(function (window) {
	    'use strict';
	    var CanvasPrototype = window.HTMLCanvasElement &&
	            window.HTMLCanvasElement.prototype,
	        hasBlobConstructor = window.Blob && (function () {
	            try {
	                return Boolean(new Blob());
	            } catch (e) {
	                return false;
	            }
	        }()),
	        hasArrayBufferViewSupport = hasBlobConstructor && window.Uint8Array &&
	            (function () {
	                try {
	                    return new Blob([new Uint8Array(100)]).size === 100;
	                } catch (e) {
	                    return false;
	                }
	            }()),
	        BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder ||
	            window.MozBlobBuilder || window.MSBlobBuilder,
	        dataURLtoBlob = (hasBlobConstructor || BlobBuilder) && window.atob &&
	            window.ArrayBuffer && window.Uint8Array && function (dataURI) {
	                var byteString,
	                    arrayBuffer,
	                    intArray,
	                    i,
	                    mimeString,
	                    bb;
	                if (dataURI.split(',')[0].indexOf('base64') >= 0) {
	                    // Convert base64 to raw binary data held in a string:
	                    byteString = atob(dataURI.split(',')[1]);
	                } else {
	                    // Convert base64/URLEncoded data component to raw binary data:
	                    byteString = decodeURIComponent(dataURI.split(',')[1]);
	                }
	                // Write the bytes of the string to an ArrayBuffer:
	                arrayBuffer = new ArrayBuffer(byteString.length);
	                intArray = new Uint8Array(arrayBuffer);
	                for (i = 0; i < byteString.length; i += 1) {
	                    intArray[i] = byteString.charCodeAt(i);
	                }
	                // Separate out the mime component:
	                mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
	                // Write the ArrayBuffer (or ArrayBufferView) to a blob:
	                if (hasBlobConstructor) {
	                    return new Blob(
	                        [hasArrayBufferViewSupport ? intArray : arrayBuffer],
	                        {type: mimeString}
	                    );
	                }
	                bb = new BlobBuilder();
	                bb.append(arrayBuffer);
	                return bb.getBlob(mimeString);
	            };
	    if (window.HTMLCanvasElement && !CanvasPrototype.toBlob) {
	        if (CanvasPrototype.mozGetAsFile) {
	            CanvasPrototype.toBlob = function (callback, type, quality) {
	                if (quality && CanvasPrototype.toDataURL && dataURLtoBlob) {
	                    callback(dataURLtoBlob(this.toDataURL(type, quality)));
	                } else {
	                    callback(this.mozGetAsFile('blob', type));
	                }
	            };
	        } else if (CanvasPrototype.toDataURL && dataURLtoBlob) {
	            CanvasPrototype.toBlob = function (callback, type, quality) {
	                callback(dataURLtoBlob(this.toDataURL(type, quality)));
	            };
	        }
	    }
	    window.dataURLtoBlob = dataURLtoBlob;
	})(window);
	
	/*jslint evil: true */
	/*global window, URL, webkitURL, ActiveXObject */
	
	(function (window, undef){
		'use strict';
	
		var
			gid = 1,
			noop = function (){},
	
			document = window.document,
			doctype = document.doctype || {},
			userAgent = window.navigator.userAgent,
			safari = /safari\//i.test(userAgent) && !/chrome\//i.test(userAgent),
			iemobile = /iemobile\//i.test(userAgent),
			insecureChrome = !safari && /chrome\//i.test(userAgent) && window.location.protocol === 'http:',
	
			// https://github.com/blueimp/JavaScript-Load-Image/blob/master/load-image.js#L48
			apiURL = (window.createObjectURL && window) || (window.URL && URL.revokeObjectURL && URL) || (window.webkitURL && webkitURL),
	
			Blob = window.Blob,
			File = window.File,
			FileReader = window.FileReader,
			FormData = window.FormData,
	
	
			XMLHttpRequest = window.XMLHttpRequest,
			jQuery = window.jQuery,
	
			html5 =    !!(File && (FileReader && (window.Uint8Array || FormData || XMLHttpRequest.prototype.sendAsBinary)))
					&& !(safari && /windows/i.test(userAgent) && !iemobile), // BugFix: https://github.com/mailru/FileAPI/issues/25
	
			cors = html5 && ('withCredentials' in (new XMLHttpRequest)),
	
			chunked = html5 && !!Blob && !!(Blob.prototype.webkitSlice || Blob.prototype.mozSlice || Blob.prototype.slice),
	
			normalize = ('' + ''.normalize).indexOf('[native code]') > 0,
	
			// https://github.com/blueimp/JavaScript-Canvas-to-Blob
			dataURLtoBlob = window.dataURLtoBlob,
	
	
			_rimg = /img/i,
			_rcanvas = /canvas/i,
			_rimgcanvas = /img|canvas/i,
			_rinput = /input/i,
			_rdata = /^data:[^,]+,/,
	
			_toString = {}.toString,
			_supportConsoleLog,
			_supportConsoleLogApply,
	
	
			Math = window.Math,
	
			_SIZE_CONST = function (pow){
				pow = new window.Number(Math.pow(1024, pow));
				pow.from = function (sz){ return Math.round(sz * this); };
				return	pow;
			},
	
			_elEvents = {}, // element event listeners
			_infoReader = [], // list of file info processors
	
			_readerEvents = 'abort progress error load loadend',
			_xhrPropsExport = 'status statusText readyState response responseXML responseText responseBody'.split(' '),
	
			currentTarget = 'currentTarget', // for minimize
			preventDefault = 'preventDefault', // and this too
	
			_isArray = function (ar) {
				return	ar && ('length' in ar);
			},
	
			/**
			 * Iterate over a object or array
			 */
			_each = function (obj, fn, ctx){
				if( obj ){
					if( _isArray(obj) ){
						for( var i = 0, n = obj.length; i < n; i++ ){
							if( i in obj ){
								fn.call(ctx, obj[i], i, obj);
							}
						}
					}
					else {
						for( var key in obj ){
							if( obj.hasOwnProperty(key) ){
								fn.call(ctx, obj[key], key, obj);
							}
						}
					}
				}
			},
	
			/**
			 * Merge the contents of two or more objects together into the first object
			 */
			_extend = function (dst){
				var args = arguments, i = 1, _ext = function (val, key){ dst[key] = val; };
				for( ; i < args.length; i++ ){
					_each(args[i], _ext);
				}
				return  dst;
			},
	
			/**
			 * Add event listener
			 */
			_on = function (el, type, fn){
				if( el ){
					var uid = api.uid(el);
	
					if( !_elEvents[uid] ){
						_elEvents[uid] = {};
					}
	
					var isFileReader = (FileReader && el) && (el instanceof FileReader);
					_each(type.split(/\s+/), function (type){
						if( jQuery && !isFileReader){
							jQuery.event.add(el, type, fn);
						} else {
							if( !_elEvents[uid][type] ){
								_elEvents[uid][type] = [];
							}
	
							_elEvents[uid][type].push(fn);
	
							if( el.addEventListener ){ el.addEventListener(type, fn, false); }
							else if( el.attachEvent ){ el.attachEvent('on'+type, fn); }
							else { el['on'+type] = fn; }
						}
					});
				}
			},
	
	
			/**
			 * Remove event listener
			 */
			_off = function (el, type, fn){
				if( el ){
					var uid = api.uid(el), events = _elEvents[uid] || {};
	
					var isFileReader = (FileReader && el) && (el instanceof FileReader);
					_each(type.split(/\s+/), function (type){
						if( jQuery && !isFileReader){
							jQuery.event.remove(el, type, fn);
						}
						else {
							var fns = events[type] || [], i = fns.length;
	
							while( i-- ){
								if( fns[i] === fn ){
									fns.splice(i, 1);
									break;
								}
							}
	
							if( el.addEventListener ){ el.removeEventListener(type, fn, false); }
							else if( el.detachEvent ){ el.detachEvent('on'+type, fn); }
							else { el['on'+type] = null; }
						}
					});
				}
			},
	
	
			_one = function(el, type, fn){
				_on(el, type, function _(evt){
					_off(el, type, _);
					fn(evt);
				});
			},
	
	
			_fixEvent = function (evt){
				if( !evt.target ){ evt.target = window.event && window.event.srcElement || document; }
				if( evt.target.nodeType === 3 ){ evt.target = evt.target.parentNode; }
				return  evt;
			},
	
	
			_supportInputAttr = function (attr){
				var input = document.createElement('input');
				input.setAttribute('type', "file");
				return attr in input;
			},
	
	
			/**
			 * FileAPI (core object)
			 */
			api = {
				version: '2.0.21',
	
				cors: false,
				html5: true,
				media: false,
				formData: true,
				multiPassResize: true,
				insecureChrome: insecureChrome,
	
				debug: false,
				pingUrl: false,
				multiFlash: false,
				flashAbortTimeout: 0,
				withCredentials: true,
	
				staticPath: './dist/',
	
				flashUrl: 0, // @default: './FileAPI.flash.swf'
				flashImageUrl: 0, // @default: './FileAPI.flash.image.swf'
	
				postNameConcat: function (name, idx){
					return	name + (idx != null ? '['+ idx +']' : '');
				},
	
				ext2mime: {
					  jpg:	'image/jpeg'
					, tif:	'image/tiff'
					, txt:	'text/plain'
				},
	
				// Fallback for flash
				accept: {
					  'image/*': 'art bm bmp dwg dxf cbr cbz fif fpx gif ico iefs jfif jpe jpeg jpg jps jut mcf nap nif pbm pcx pgm pict pm png pnm qif qtif ras rast rf rp svf tga tif tiff xbm xbm xpm xwd'
					, 'audio/*': 'm4a flac aac rm mpa wav wma ogg mp3 mp2 m3u mod amf dmf dsm far gdm imf it m15 med okt s3m stm sfx ult uni xm sid ac3 dts cue aif aiff wpl ape mac mpc mpp shn wv nsf spc gym adplug adx dsp adp ymf ast afc hps xs'
					, 'video/*': 'm4v 3gp nsv ts ty strm rm rmvb m3u ifo mov qt divx xvid bivx vob nrg img iso pva wmv asf asx ogm m2v avi bin dat dvr-ms mpg mpeg mp4 mkv avc vp3 svq3 nuv viv dv fli flv wpl'
				},
	
				uploadRetry : 0,
				networkDownRetryTimeout : 5000, // milliseconds, don't flood when network is down
	
				chunkSize : 0,
				chunkUploadRetry : 0,
				chunkNetworkDownRetryTimeout : 2000, // milliseconds, don't flood when network is down
	
				KB: _SIZE_CONST(1),
				MB: _SIZE_CONST(2),
				GB: _SIZE_CONST(3),
				TB: _SIZE_CONST(4),
	
				EMPTY_PNG: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIW2NkAAIAAAoAAggA9GkAAAAASUVORK5CYII=',
	
				expando: 'fileapi' + (new Date).getTime(),
	
				uid: function (obj){
					return	obj
						? (obj[api.expando] = obj[api.expando] || api.uid())
						: (++gid, api.expando + gid)
					;
				},
	
				log: function (){
					if( api.debug && _supportConsoleLog ){
						if( _supportConsoleLogApply ){
							console.log.apply(console, arguments);
						}
						else {
							console.log([].join.call(arguments, ' '));
						}
					}
				},
	
				/**
				 * Create new image
				 *
				 * @param {String} [src]
				 * @param {Function} [fn]   1. error -- boolean, 2. img -- Image element
				 * @returns {HTMLElement}
				 */
				newImage: function (src, fn){
					var img = document.createElement('img');
					if( fn ){
						api.event.one(img, 'error load', function (evt){
							fn(evt.type == 'error', img);
							img = null;
						});
					}
					img.src = src;
					return	img;
				},
	
				/**
				 * Get XHR
				 * @returns {XMLHttpRequest}
				 */
				getXHR: function (){
					var xhr;
	
					if( XMLHttpRequest ){
						xhr = new XMLHttpRequest;
					}
					else if( window.ActiveXObject ){
						try {
							xhr = new ActiveXObject('MSXML2.XMLHttp.3.0');
						} catch (e) {
							xhr = new ActiveXObject('Microsoft.XMLHTTP');
						}
					}
	
					return  xhr;
				},
	
				isArray: _isArray,
	
				support: {
					dnd:     cors && ('ondrop' in document.createElement('div')),
					cors:    cors,
					html5:   html5,
					chunked: chunked,
					dataURI: true,
					accept:   _supportInputAttr('accept'),
					multiple: _supportInputAttr('multiple')
				},
	
				event: {
					  on: _on
					, off: _off
					, one: _one
					, fix: _fixEvent
				},
	
	
				throttle: function(fn, delay) {
					var id, args;
	
					return function _throttle(){
						args = arguments;
	
						if( !id ){
							fn.apply(window, args);
							id = setTimeout(function (){
								id = 0;
								fn.apply(window, args);
							}, delay);
						}
					};
				},
	
	
				F: function (){},
	
	
				parseJSON: function (str){
					var json;
					if( window.JSON && JSON.parse ){
						json = JSON.parse(str);
					}
					else {
						json = (new Function('return ('+str.replace(/([\r\n])/g, '\\$1')+');'))();
					}
					return json;
				},
	
	
				trim: function (str){
					str = String(str);
					return	str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
				},
	
				/**
				 * Simple Defer
				 * @return	{Object}
				 */
				defer: function (){
					var
						  list = []
						, result
						, error
						, defer = {
							resolve: function (err, res){
								defer.resolve = noop;
								error	= err || false;
								result	= res;
	
								while( res = list.shift() ){
									res(error, result);
								}
							},
	
							then: function (fn){
								if( error !== undef ){
									fn(error, result);
								} else {
									list.push(fn);
								}
							}
					};
	
					return	defer;
				},
	
				queue: function (fn){
					var
						  _idx = 0
						, _length = 0
						, _fail = false
						, _end = false
						, queue = {
							inc: function (){
								_length++;
							},
	
							next: function (){
								_idx++;
								setTimeout(queue.check, 0);
							},
	
							check: function (){
								(_idx >= _length) && !_fail && queue.end();
							},
	
							isFail: function (){
								return _fail;
							},
	
							fail: function (){
								!_fail && fn(_fail = true);
							},
	
							end: function (){
								if( !_end ){
									_end = true;
									fn();
								}
							}
						}
					;
					return queue;
				},
	
	
				/**
				 * For each object
				 *
				 * @param	{Object|Array}	obj
				 * @param	{Function}		fn
				 * @param	{*}				[ctx]
				 */
				each: _each,
	
	
				/**
				 * Async for
				 * @param {Array} array
				 * @param {Function} callback
				 */
				afor: function (array, callback){
					var i = 0, n = array.length;
	
					if( _isArray(array) && n-- ){
						(function _next(){
							callback(n != i && _next, array[i], i++);
						})();
					}
					else {
						callback(false);
					}
				},
	
	
				/**
				 * Merge the contents of two or more objects together into the first object
				 *
				 * @param	{Object}	dst
				 * @return	{Object}
				 */
				extend: _extend,
	
	
				/**
				 * Is file?
				 * @param  {File}  file
				 * @return {Boolean}
				 */
				isFile: function (file){
					return _toString.call(file) === '[object File]';
				},
	
	
				/**
				 * Is blob?
				 * @param   {Blob}  blob
				 * @returns {Boolean}
				 */
				isBlob: function (blob) {
					return this.isFile(blob) || (_toString.call(blob) === '[object Blob]');
				},
	
	
				/**
				 * Is canvas element
				 *
				 * @param	{HTMLElement}	el
				 * @return	{Boolean}
				 */
				isCanvas: function (el){
					return	el && _rcanvas.test(el.nodeName);
				},
	
	
				getFilesFilter: function (filter){
					filter = typeof filter == 'string' ? filter : (filter.getAttribute && filter.getAttribute('accept') || '');
					return	filter ? new RegExp('('+ filter.replace(/\./g, '\\.').replace(/,/g, '|') +')$', 'i') : /./;
				},
	
	
	
				/**
				 * Read as DataURL
				 *
				 * @param {File|Element} file
				 * @param {Function} fn
				 */
				readAsDataURL: function (file, fn){
					if( api.isCanvas(file) ){
						_emit(file, fn, 'load', api.toDataURL(file));
					}
					else {
						_readAs(file, fn, 'DataURL');
					}
				},
	
	
				/**
				 * Read as Binary string
				 *
				 * @param {File} file
				 * @param {Function} fn
				 */
				readAsBinaryString: function (file, fn){
					if( _hasSupportReadAs('BinaryString') ){
						_readAs(file, fn, 'BinaryString');
					} else {
						// Hello IE10!
						_readAs(file, function (evt){
							if( evt.type == 'load' ){
								try {
									// dataURL -> binaryString
									evt.result = api.toBinaryString(evt.result);
								} catch (e){
									evt.type = 'error';
									evt.message = e.toString();
								}
							}
							fn(evt);
						}, 'DataURL');
					}
				},
	
	
				/**
				 * Read as ArrayBuffer
				 *
				 * @param {File} file
				 * @param {Function} fn
				 */
				readAsArrayBuffer: function(file, fn){
					_readAs(file, fn, 'ArrayBuffer');
				},
	
	
				/**
				 * Read as text
				 *
				 * @param {File} file
				 * @param {String} encoding
				 * @param {Function} [fn]
				 */
				readAsText: function(file, encoding, fn){
					if( !fn ){
						fn	= encoding;
						encoding = 'utf-8';
					}
	
					_readAs(file, fn, 'Text', encoding);
				},
	
	
				/**
				 * Convert image or canvas to DataURL
				 *
				 * @param   {Element}  el      Image or Canvas element
				 * @param   {String}   [type]  mime-type
				 * @return  {String}
				 */
				toDataURL: function (el, type){
					if( typeof el == 'string' ){
						return  el;
					}
					else if( el.toDataURL ){
						return  el.toDataURL(type || 'image/png');
					}
				},
	
	
				/**
				 * Canvert string, image or canvas to binary string
				 *
				 * @param   {String|Element} val
				 * @return  {String}
				 */
				toBinaryString: function (val){
					return  window.atob(api.toDataURL(val).replace(_rdata, ''));
				},
	
	
				/**
				 * Read file or DataURL as ImageElement
				 *
				 * @param	{File|String}	file
				 * @param	{Function}		fn
				 * @param	{Boolean}		[progress]
				 */
				readAsImage: function (file, fn, progress){
					if( api.isBlob(file) ){
						if( apiURL ){
							/** @namespace apiURL.createObjectURL */
							var data = apiURL.createObjectURL(file);
							if( data === undef ){
								_emit(file, fn, 'error');
							}
							else {
								api.readAsImage(data, fn, progress);
							}
						}
						else {
							api.readAsDataURL(file, function (evt){
								if( evt.type == 'load' ){
									api.readAsImage(evt.result, fn, progress);
								}
								else if( progress || evt.type == 'error' ){
									_emit(file, fn, evt, null, { loaded: evt.loaded, total: evt.total });
								}
							});
						}
					}
					else if( api.isCanvas(file) ){
						_emit(file, fn, 'load', file);
					}
					else if( _rimg.test(file.nodeName) ){
						if( file.complete ){
							_emit(file, fn, 'load', file);
						}
						else {
							var events = 'error abort load';
							_one(file, events, function _fn(evt){
								if( evt.type == 'load' && apiURL ){
									/** @namespace apiURL.revokeObjectURL */
									apiURL.revokeObjectURL(file.src);
								}
	
								_off(file, events, _fn);
								_emit(file, fn, evt, file);
							});
						}
					}
					else if( file.iframe ){
						_emit(file, fn, { type: 'error' });
					}
					else {
						// Created image
						var img = api.newImage(file.dataURL || file);
						api.readAsImage(img, fn, progress);
					}
				},
	
	
				/**
				 * Make file by name
				 *
				 * @param	{String}	name
				 * @return	{Array}
				 */
				checkFileObj: function (name){
					var file = {}, accept = api.accept;
	
					if( typeof name == 'object' ){
						file = name;
					}
					else {
						file.name = (name + '').split(/\\|\//g).pop();
					}
	
					if( file.type == null ){
						file.type = file.name.split('.').pop();
					}
	
					_each(accept, function (ext, type){
						ext = new RegExp(ext.replace(/\s/g, '|'), 'i');
						if( ext.test(file.type) || api.ext2mime[file.type] ){
							file.type = api.ext2mime[file.type] || (type.split('/')[0] +'/'+ file.type);
						}
					});
	
					return	file;
				},
	
	
				/**
				 * Get drop files
				 *
				 * @param	{Event}	evt
				 * @param	{Function} callback
				 */
				getDropFiles: function (evt, callback){
					var
						  files = []
						, all = []
						, items
						, dataTransfer = _getDataTransfer(evt)
						, transFiles = dataTransfer.files
						, transItems = dataTransfer.items
						, entrySupport = _isArray(transItems) && transItems[0] && _getAsEntry(transItems[0])
						, queue = api.queue(function (){ callback(files, all); })
					;
	
					if( entrySupport ){
						if( normalize && transFiles ){
							var
								i = transFiles.length
								, file
								, entry
							;
	
							items = new Array(i);
							while( i-- ){
								file = transFiles[i];
	
								try {
									entry = _getAsEntry(transItems[i]);
								}
								catch( err ){
									api.log('[err] getDropFiles: ', err);
									entry = null;
								}
	
								if( _isEntry(entry) ){
									// OSX filesystems use Unicode Normalization Form D (NFD),
									// and entry.file(…) can't read the files with the same names
									if( entry.isDirectory || (entry.isFile && file.name == file.name.normalize('NFC')) ){
										items[i] = entry;
									}
									else {
										items[i] = file;
									}
								}
								else {
									items[i] = file;
								}
							}
						}
						else {
							items = transItems;
						}
					}
					else {
						items = transFiles;
					}
	
					_each(items || [], function (item){
						queue.inc();
	
						try {
							if( entrySupport && _isEntry(item) ){
								_readEntryAsFiles(item, function (err, entryFiles, allEntries){
									if( err ){
										api.log('[err] getDropFiles:', err);
									} else {
										files.push.apply(files, entryFiles);
									}
									all.push.apply(all, allEntries);
	
									queue.next();
								});
							}
							else {
								_isRegularFile(item, function (yes, err){
									if( yes ){
										files.push(item);
									}
									else {
										item.error = err;
									}
									all.push(item);
	
									queue.next();
								});
							}
						}
						catch( err ){
							queue.next();
							api.log('[err] getDropFiles: ', err);
						}
					});
	
					queue.check();
				},
	
	
				/**
				 * Get file list
				 *
				 * @param	{HTMLInputElement|Event}	input
				 * @param	{String|Function}	[filter]
				 * @param	{Function}			[callback]
				 * @return	{Array|Null}
				 */
				getFiles: function (input, filter, callback){
					var files = [];
	
					if( callback ){
						api.filterFiles(api.getFiles(input), filter, callback);
						return null;
					}
	
					if( input.jquery ){
						// jQuery object
						input.each(function (){
							files = files.concat(api.getFiles(this));
						});
						input	= files;
						files	= [];
					}
	
					if( typeof filter == 'string' ){
						filter	= api.getFilesFilter(filter);
					}
	
					if( input.originalEvent ){
						// jQuery event
						input = _fixEvent(input.originalEvent);
					}
					else if( input.srcElement ){
						// IE Event
						input = _fixEvent(input);
					}
	
	
					if( input.dataTransfer ){
						// Drag'n'Drop
						input = input.dataTransfer;
					}
					else if( input.target ){
						// Event
						input = input.target;
					}
	
					if( input.files ){
						// Input[type="file"]
						files = input.files;
	
						if( !html5 ){
							// Partial support for file api
							files[0].blob	= input;
							files[0].iframe	= true;
						}
					}
					else if( !html5 && isInputFile(input) ){
						if( api.trim(input.value) ){
							files = [api.checkFileObj(input.value)];
							files[0].blob   = input;
							files[0].iframe = true;
						}
					}
					else if( _isArray(input) ){
						files	= input;
					}
	
					return	api.filter(files, function (file){ return !filter || filter.test(file.name); });
				},
	
	
				/**
				 * Get total file size
				 * @param	{Array}	files
				 * @return	{Number}
				 */
				getTotalSize: function (files){
					var size = 0, i = files && files.length;
					while( i-- ){
						size += files[i].size;
					}
					return	size;
				},
	
	
				/**
				 * Get image information
				 *
				 * @param	{File}		file
				 * @param	{Function}	fn
				 */
				getInfo: function (file, fn){
					var info = {}, readers = _infoReader.concat();
	
					if( api.isBlob(file) ){
						(function _next(){
							var reader = readers.shift();
							if( reader ){
								if( reader.test(file.type) ){
									reader(file, function (err, res){
										if( err ){
											fn(err);
										}
										else {
											_extend(info, res);
											_next();
										}
									});
								}
								else {
									_next();
								}
							}
							else {
								fn(false, info);
							}
						})();
					}
					else {
						fn('not_support_info', info);
					}
				},
	
	
				/**
				 * Add information reader
				 *
				 * @param {RegExp} mime
				 * @param {Function} fn
				 */
				addInfoReader: function (mime, fn){
					fn.test = function (type){ return mime.test(type); };
					_infoReader.push(fn);
				},
	
	
				/**
				 * Filter of array
				 *
				 * @param	{Array}		input
				 * @param	{Function}	fn
				 * @return	{Array}
				 */
				filter: function (input, fn){
					var result = [], i = 0, n = input.length, val;
	
					for( ; i < n; i++ ){
						if( i in input ){
							val = input[i];
							if( fn.call(val, val, i, input) ){
								result.push(val);
							}
						}
					}
	
					return	result;
				},
	
	
				/**
				 * Filter files
				 *
				 * @param	{Array}		files
				 * @param	{Function}	eachFn
				 * @param	{Function}	resultFn
				 */
				filterFiles: function (files, eachFn, resultFn){
					if( files.length ){
						// HTML5 or Flash
						var queue = files.concat(), file, result = [], deleted = [];
	
						(function _next(){
							if( queue.length ){
								file = queue.shift();
								api.getInfo(file, function (err, info){
									(eachFn(file, err ? false : info) ? result : deleted).push(file);
									_next();
								});
							}
							else {
								resultFn(result, deleted);
							}
						})();
					}
					else {
						resultFn([], files);
					}
				},
	
	
				upload: function (options){
					options = _extend({
						  jsonp: 'callback'
						, prepare: api.F
						, beforeupload: api.F
						, upload: api.F
						, fileupload: api.F
						, fileprogress: api.F
						, filecomplete: api.F
						, progress: api.F
						, complete: api.F
						, pause: api.F
						, imageOriginal: true
						, chunkSize: api.chunkSize
						, chunkUploadRetry: api.chunkUploadRetry
						, uploadRetry: api.uploadRetry
					}, options);
	
	
					if( options.imageAutoOrientation && !options.imageTransform ){
						options.imageTransform = { rotate: 'auto' };
					}
	
	
					var
						  proxyXHR = new api.XHR(options)
						, dataArray = this._getFilesDataArray(options.files)
						, _this = this
						, _total = 0
						, _loaded = 0
						, _nextFile
						, _complete = false
					;
	
	
					// calc total size
					_each(dataArray, function (data){
						_total += data.size;
					});
	
					// Array of files
					proxyXHR.files = [];
					_each(dataArray, function (data){
						proxyXHR.files.push(data.file);
					});
	
					// Set upload status props
					proxyXHR.total	= _total;
					proxyXHR.loaded	= 0;
					proxyXHR.filesLeft = dataArray.length;
	
					// emit "beforeupload"  event
					options.beforeupload(proxyXHR, options);
	
					// Upload by file
					_nextFile = function (){
						var
							  data = dataArray.shift()
							, _file = data && data.file
							, _fileLoaded = false
							, _fileOptions = _simpleClone(options)
						;
	
						proxyXHR.filesLeft = dataArray.length;
	
						if( _file && _file.name === api.expando ){
							_file = null;
							api.log('[warn] FileAPI.upload() — called without files');
						}
	
						if( ( proxyXHR.statusText != 'abort' || proxyXHR.current ) && data ){
							// Mark active job
							_complete = false;
	
							// Set current upload file
							proxyXHR.currentFile = _file;
	
							// Prepare file options
							if (_file && options.prepare(_file, _fileOptions) === false) {
								_nextFile.call(_this);
								return;
							}
							_fileOptions.file = _file;
	
							_this._getFormData(_fileOptions, data, function (form){
								if( !_loaded ){
									// emit "upload" event
									options.upload(proxyXHR, options);
								}
	
								var xhr = new api.XHR(_extend({}, _fileOptions, {
	
									upload: _file ? function (){
										// emit "fileupload" event
										options.fileupload(_file, xhr, _fileOptions);
									} : noop,
	
									progress: _file ? function (evt){
										if( !_fileLoaded ){
											// For ignore the double calls.
											_fileLoaded = (evt.loaded === evt.total);
	
											// emit "fileprogress" event
											options.fileprogress({
												  type:   'progress'
												, total:  data.total = evt.total
												, loaded: data.loaded = evt.loaded
											}, _file, xhr, _fileOptions);
	
											// emit "progress" event
											options.progress({
												  type:   'progress'
												, total:  _total
												, loaded: proxyXHR.loaded = (_loaded + data.size * (evt.loaded/evt.total)) || 0
											}, _file, xhr, _fileOptions);
										}
									} : noop,
	
									complete: function (err){
										_each(_xhrPropsExport, function (name){
											proxyXHR[name] = xhr[name];
										});
	
										if( _file ){
											data.total = (data.total || data.size);
											data.loaded	= data.total;
	
											if( !err ) {
												// emulate 100% "progress"
												this.progress(data);
	
												// fixed throttle event
												_fileLoaded = true;
	
												// bytes loaded
												_loaded += data.size; // data.size != data.total, it's desirable fix this
												proxyXHR.loaded = _loaded;
											}
	
											// emit "filecomplete" event
											options.filecomplete(err, xhr, _file, _fileOptions);
										}
	
										// upload next file
										setTimeout(function () {_nextFile.call(_this);}, 0);
									}
								})); // xhr
	
	
								// ...
								proxyXHR.abort = function (current){
									if (!current) { dataArray.length = 0; }
									this.current = current;
									xhr.abort();
								};
	
								// Start upload
								xhr.send(form);
							});
						}
						else {
							var successful = proxyXHR.status == 200 || proxyXHR.status == 201 || proxyXHR.status == 204;
							options.complete(successful ? false : (proxyXHR.statusText || 'error'), proxyXHR, options);
							// Mark done state
							_complete = true;
						}
					};
	
	
					// Next tick
					setTimeout(_nextFile, 0);
	
	
					// Append more files to the existing request
					// first - add them to the queue head/tail
					proxyXHR.append = function (files, first) {
						files = api._getFilesDataArray([].concat(files));
	
						_each(files, function (data) {
							_total += data.size;
							proxyXHR.files.push(data.file);
							if (first) {
								dataArray.unshift(data);
							} else {
								dataArray.push(data);
							}
						});
	
						proxyXHR.statusText = "";
	
						if( _complete ){
							_nextFile.call(_this);
						}
					};
	
	
					// Removes file from queue by file reference and returns it
					proxyXHR.remove = function (file) {
					    var i = dataArray.length, _file;
					    while( i-- ){
							if( dataArray[i].file == file ){
								_file = dataArray.splice(i, 1);
								_total -= _file.size;
							}
						}
						return	_file;
					};
	
					return proxyXHR;
				},
	
	
				_getFilesDataArray: function (data){
					var files = [], oFiles = {};
	
					if( isInputFile(data) ){
						var tmp = api.getFiles(data);
						oFiles[data.name || 'file'] = data.getAttribute('multiple') !== null ? tmp : tmp[0];
					}
					else if( _isArray(data) && isInputFile(data[0]) ){
						_each(data, function (input){
							oFiles[input.name || 'file'] = api.getFiles(input);
						});
					}
					else {
						oFiles = data;
					}
	
					_each(oFiles, function add(file, name){
						if( _isArray(file) ){
							_each(file, function (file){
								add(file, name);
							});
						}
						else if( file && (file.name || file.image) ){
							files.push({
								  name: name
								, file: file
								, size: file.size
								, total: file.size
								, loaded: 0
							});
						}
					});
	
					if( !files.length ){
						// Create fake `file` object
						files.push({ file: { name: api.expando } });
					}
	
					return	files;
				},
	
	
				_getFormData: function (options, data, fn){
					var
						  file = data.file
						, name = data.name
						, filename = file.name
						, filetype = file.type
						, trans = api.support.transform && options.imageTransform
						, Form = new api.Form
						, queue = api.queue(function (){ fn(Form); })
						, isOrignTrans = trans && _isOriginTransform(trans)
						, postNameConcat = api.postNameConcat
					;
	
					// Append data
					_each(options.data, function add(val, name){
						if( typeof val == 'object' ){
							_each(val, function (v, i){
								add(v, postNameConcat(name, i));
							});
						}
						else {
							Form.append(name, val);
						}
					});
	
					(function _addFile(file/**Object*/){
						if( file.image ){ // This is a FileAPI.Image
							queue.inc();
	
							file.toData(function (err, image){
								// @todo: требует рефакторинга и обработки ошибки
								if (file.file) {
									image.type = file.file.type;
									image.quality = file.matrix.quality;
									filename = file.file && file.file.name;
								}
	
								filename = filename || (new Date).getTime()+'.png';
	
								_addFile(image);
								queue.next();
							});
						}
						else if( api.Image && trans && (/^image/.test(file.type) || _rimgcanvas.test(file.nodeName)) ){
							queue.inc();
	
							if( isOrignTrans ){
								// Convert to array for transform function
								trans = [trans];
							}
	
							api.Image.transform(file, trans, options.imageAutoOrientation, function (err, images){
								if( isOrignTrans && !err ){
									if( !dataURLtoBlob && !api.flashEngine ){
										// Canvas.toBlob or Flash not supported, use multipart
										Form.multipart = true;
									}
	
									Form.append(name, images[0], filename,  trans[0].type || filetype);
								}
								else {
									var addOrigin = 0;
	
									if( !err ){
										_each(images, function (image, idx){
											if( !dataURLtoBlob && !api.flashEngine ){
												Form.multipart = true;
											}
	
											if( !trans[idx].postName ){
												addOrigin = 1;
											}
	
											Form.append(trans[idx].postName || postNameConcat(name, idx), image, filename, trans[idx].type || filetype);
										});
									}
	
									if( err || options.imageOriginal ){
										Form.append(postNameConcat(name, (addOrigin ? 'original' : null)), file, filename, filetype);
									}
								}
	
								queue.next();
							});
						}
						else if( filename !== api.expando ){
							Form.append(name, file, filename);
						}
					})(file);
	
					queue.check();
				},
	
	
				reset: function (inp, notRemove){
					var parent, clone;
	
					if( jQuery ){
						clone = jQuery(inp).clone(true).insertBefore(inp).val('')[0];
						if( !notRemove ){
							jQuery(inp).remove();
						}
					} else {
						parent  = inp.parentNode;
						clone   = parent.insertBefore(inp.cloneNode(true), inp);
						clone.value = '';
	
						if( !notRemove ){
							parent.removeChild(inp);
						}
	
						_each(_elEvents[api.uid(inp)], function (fns, type){
							_each(fns, function (fn){
								_off(inp, type, fn);
								_on(clone, type, fn);
							});
						});
					}
	
					return  clone;
				},
	
	
				/**
				 * Load remote file
				 *
				 * @param   {String}    url
				 * @param   {Function}  fn
				 * @return  {XMLHttpRequest}
				 */
				load: function (url, fn){
					var xhr = api.getXHR();
					if( xhr ){
						xhr.open('GET', url, true);
	
						if( xhr.overrideMimeType ){
					        xhr.overrideMimeType('text/plain; charset=x-user-defined');
						}
	
						_on(xhr, 'progress', function (/**Event*/evt){
							/** @namespace evt.lengthComputable */
							if( evt.lengthComputable ){
								fn({ type: evt.type, loaded: evt.loaded, total: evt.total }, xhr);
							}
						});
	
						xhr.onreadystatechange = function(){
							if( xhr.readyState == 4 ){
								xhr.onreadystatechange = null;
								if( xhr.status == 200 ){
									url = url.split('/');
									/** @namespace xhr.responseBody */
									var file = {
									      name: url[url.length-1]
										, size: xhr.getResponseHeader('Content-Length')
										, type: xhr.getResponseHeader('Content-Type')
									};
									file.dataURL = 'data:'+file.type+';base64,' + api.encode64(xhr.responseBody || xhr.responseText);
									fn({ type: 'load', result: file }, xhr);
								}
								else {
									fn({ type: 'error' }, xhr);
								}
						    }
						};
					    xhr.send(null);
					} else {
						fn({ type: 'error' });
					}
	
					return  xhr;
				},
	
				encode64: function (str){
					var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=', outStr = '', i = 0;
	
					if( typeof str !== 'string' ){
						str	= String(str);
					}
	
					while( i < str.length ){
						//all three "& 0xff" added below are there to fix a known bug
						//with bytes returned by xhr.responseText
						var
							  byte1 = str.charCodeAt(i++) & 0xff
							, byte2 = str.charCodeAt(i++) & 0xff
							, byte3 = str.charCodeAt(i++) & 0xff
							, enc1 = byte1 >> 2
							, enc2 = ((byte1 & 3) << 4) | (byte2 >> 4)
							, enc3, enc4
						;
	
						if( isNaN(byte2) ){
							enc3 = enc4 = 64;
						} else {
							enc3 = ((byte2 & 15) << 2) | (byte3 >> 6);
							enc4 = isNaN(byte3) ? 64 : byte3 & 63;
						}
	
						outStr += b64.charAt(enc1) + b64.charAt(enc2) + b64.charAt(enc3) + b64.charAt(enc4);
					}
	
					return  outStr;
				}
	
			} // api
		;
	
	
		function _emit(target, fn, name, res, ext){
			var evt = {
				  type:		name.type || name
				, target:	target
				, result:	res
			};
			_extend(evt, ext);
			fn(evt);
		}
	
	
		function _hasSupportReadAs(method){
			return	FileReader && !!FileReader.prototype['readAs' + method];
		}
	
	
		function _readAs(file, fn, method, encoding){
			if( api.isBlob(file) && _hasSupportReadAs(method) ){
				var Reader = new FileReader;
	
				// Add event listener
				_on(Reader, _readerEvents, function _fn(evt){
					var type = evt.type;
					if( type == 'progress' ){
						_emit(file, fn, evt, evt.target.result, { loaded: evt.loaded, total: evt.total });
					}
					else if( type == 'loadend' ){
						_off(Reader, _readerEvents, _fn);
						Reader = null;
					}
					else {
						_emit(file, fn, evt, evt.target.result);
					}
				});
	
	
				try {
					// ReadAs ...
					if( encoding ){
						Reader['readAs' + method](file, encoding);
					}
					else {
						Reader['readAs' + method](file);
					}
				}
				catch (err){
					_emit(file, fn, 'error', undef, { error: err.toString() });
				}
			}
			else {
				_emit(file, fn, 'error', undef, { error: 'filreader_not_support_' + method });
			}
		}
	
	
		function _isRegularFile(file, callback){
			// http://stackoverflow.com/questions/8856628/detecting-folders-directories-in-javascript-filelist-objects
			if( !file.type && (safari || ((file.size % 4096) === 0 && (file.size <= 102400))) ){
				if( FileReader ){
					try {
						var reader = new FileReader();
	
						_one(reader, _readerEvents, function (evt){
							var isFile = evt.type != 'error';
							if( isFile ){
								if ( reader.readyState == null || reader.readyState === reader.LOADING ) {
									reader.abort();
								}
								callback(isFile);
							}
							else {
								callback(false, reader.error);
							}
						});
	
						reader.readAsDataURL(file);
					} catch( err ){
						callback(false, err);
					}
				}
				else {
					callback(null, new Error('FileReader is not supported'));
				}
			}
			else {
				callback(true);
			}
		}
	
	
		function _isEntry(item){
			return item && (item.isFile || item.isDirectory);
		}
	
	
		function _getAsEntry(item){
			var entry;
			if( item.getAsEntry ){ entry = item.getAsEntry(); }
			else if( item.webkitGetAsEntry ){ entry = item.webkitGetAsEntry(); }
			return	entry;
		}
	
	
		function _readEntryAsFiles(entry, callback){
			if( !entry ){
				// error
				var err = new Error('invalid entry');
				entry = new Object(entry);
				entry.error = err;
				callback(err.message, [], [entry]);
			}
			else if( entry.isFile ){
				// Read as file
				entry.file(function (file){
					// success
					file.fullPath = entry.fullPath;
					callback(false, [file], [file]);
				}, function (err){
					// error
					entry.error = err;
					callback('FileError.code: ' + err.code, [], [entry]);
				});
			}
			else if( entry.isDirectory ){
				var
					reader = entry.createReader()
					, firstAttempt = true
					, files = []
					, all = [entry]
				;
	
				var onerror = function (err){
					// error
					entry.error = err;
					callback('DirectoryError.code: ' + err.code, files, all);
				};
				var ondone = function ondone(entries){
					if( firstAttempt ){
						firstAttempt = false;
						if( !entries.length ){
							entry.error = new Error('directory is empty');
						}
					}
	
					// success
					if( entries.length ){
						api.afor(entries, function (next, entry){
							_readEntryAsFiles(entry, function (err, entryFiles, allEntries){
								if( !err ){
									files = files.concat(entryFiles);
								}
								all = all.concat(allEntries);
	
								if( next ){
									next();
								}
								else {
									reader.readEntries(ondone, onerror);
								}
							});
						});
					}
					else {
						callback(false, files, all);
					}
				};
	
				reader.readEntries(ondone, onerror);
			}
			else {
				_readEntryAsFiles(_getAsEntry(entry), callback);
			}
		}
	
	
		function _simpleClone(obj){
			var copy = {};
			_each(obj, function (val, key){
				if( val && (typeof val === 'object') && (val.nodeType === void 0) ){
					val = _extend({}, val);
				}
				copy[key] = val;
			});
			return	copy;
		}
	
	
		function isInputFile(el){
			return	_rinput.test(el && el.tagName);
		}
	
	
		function _getDataTransfer(evt){
			return	(evt.originalEvent || evt || '').dataTransfer || {};
		}
	
	
		function _isOriginTransform(trans){
			var key;
			for( key in trans ){
				if( trans.hasOwnProperty(key) ){
					if( !(trans[key] instanceof Object || key === 'overlay' || key === 'filter') ){
						return	true;
					}
				}
			}
			return	false;
		}
	
	
		// Add default image info reader
		api.addInfoReader(/^image/, function (file/**File*/, callback/**Function*/){
			if( !file.__dimensions ){
				var defer = file.__dimensions = api.defer();
	
				api.readAsImage(file, function (evt){
					var img = evt.target;
					defer.resolve(evt.type == 'load' ? false : 'error', {
						  width:  img.width
						, height: img.height
					});
	                img.src = api.EMPTY_PNG;
					img = null;
				});
			}
	
			file.__dimensions.then(callback);
		});
	
	
		/**
		 * Drag'n'Drop special event
		 *
		 * @param	{HTMLElement}	el
		 * @param	{Function}		onHover
		 * @param	{Function}		onDrop
		 */
		api.event.dnd = function (el, onHover, onDrop){
			var _id, _type;
	
			if( !onDrop ){
				onDrop = onHover;
				onHover = api.F;
			}
	
			if( FileReader ){
				// Hover
				_on(el, 'dragenter dragleave dragover', onHover.ff = onHover.ff || function (evt){
					var
						  types = _getDataTransfer(evt).types
						, i = types && types.length
						, debounceTrigger = false
					;
	
					while( i-- ){
						if( ~types[i].indexOf('File') ){
							evt[preventDefault]();
	
							if( _type !== evt.type ){
								_type = evt.type; // Store current type of event
	
								if( _type != 'dragleave' ){
									onHover.call(evt[currentTarget], true, evt);
								}
	
								debounceTrigger = true;
							}
	
							break; // exit from "while"
						}
					}
	
					if( debounceTrigger ){
						clearTimeout(_id);
						_id = setTimeout(function (){
							onHover.call(evt[currentTarget], _type != 'dragleave', evt);
						}, 50);
					}
				});
	
	
				// Drop
				_on(el, 'drop', onDrop.ff = onDrop.ff || function (evt){
					evt[preventDefault]();
	
					_type = 0;
	
					api.getDropFiles(evt, function (files, all){
						onDrop.call(evt[currentTarget], files, all, evt);
					});
					
					onHover.call(evt[currentTarget], false, evt);
				});
			}
			else {
				api.log("Drag'n'Drop -- not supported");
			}
		};
	
	
		/**
		 * Remove drag'n'drop
		 * @param	{HTMLElement}	el
		 * @param	{Function}		onHover
		 * @param	{Function}		onDrop
		 */
		api.event.dnd.off = function (el, onHover, onDrop){
			_off(el, 'dragenter dragleave dragover', onHover.ff);
			_off(el, 'drop', onDrop.ff);
		};
	
	
		// Support jQuery
		if( jQuery && !jQuery.fn.dnd ){
			jQuery.fn.dnd = function (onHover, onDrop){
				return this.each(function (){
					api.event.dnd(this, onHover, onDrop);
				});
			};
	
			jQuery.fn.offdnd = function (onHover, onDrop){
				return this.each(function (){
					api.event.dnd.off(this, onHover, onDrop);
				});
			};
		}
	
		// @export
		window.FileAPI  = _extend(api, window.FileAPI);
	
	
		// Debug info
		api.log('FileAPI: ' + api.version);
		api.log('protocol: ' + window.location.protocol);
		api.log('doctype: [' + doctype.name + '] ' + doctype.publicId + ' ' + doctype.systemId);
	
	
		// @detect 'x-ua-compatible'
		_each(document.getElementsByTagName('meta'), function (meta){
			if( /x-ua-compatible/i.test(meta.getAttribute('http-equiv')) ){
				api.log('meta.http-equiv: ' + meta.getAttribute('content'));
			}
		});
	
	
		// Configuration
		try {
			_supportConsoleLog = !!console.log;
			_supportConsoleLogApply = !!console.log.apply;
		}
		catch (err) {}
	
		if( !api.flashUrl ){ api.flashUrl = api.staticPath + 'FileAPI.flash.swf'; }
		if( !api.flashImageUrl ){ api.flashImageUrl = api.staticPath + 'FileAPI.flash.image.swf'; }
		if( !api.flashWebcamUrl ){ api.flashWebcamUrl = api.staticPath + 'FileAPI.flash.camera.swf'; }
	})(window, void 0);
	
	/*global window, FileAPI, document */
	
	(function (api, document, undef) {
		'use strict';
	
		var
			min = Math.min,
			round = Math.round,
			getCanvas = function () { return document.createElement('canvas'); },
			support = false,
			exifOrientation = {
				  8:	270
				, 3:	180
				, 6:	90
				, 7:	270
				, 4:	180
				, 5:	90
			}
		;
	
		try {
			support = getCanvas().toDataURL('image/png').indexOf('data:image/png') > -1;
		}
		catch (e){}
	
	
		function Image(file){
			if( file instanceof Image ){
				var img = new Image(file.file);
				api.extend(img.matrix, file.matrix);
				return	img;
			}
			else if( !(this instanceof Image) ){
				return	new Image(file);
			}
	
			this.file   = file;
			this.size   = file.size || 100;
	
			this.matrix	= {
				sx: 0,
				sy: 0,
				sw: 0,
				sh: 0,
				dx: 0,
				dy: 0,
				dw: 0,
				dh: 0,
				resize: 0, // min, max OR preview
				deg: 0,
				quality: 1, // jpeg quality
				filter: 0
			};
		}
	
	
		Image.prototype = {
			image: true,
			constructor: Image,
	
			set: function (attrs){
				api.extend(this.matrix, attrs);
				return	this;
			},
	
			crop: function (x, y, w, h){
				if( w === undef ){
					w	= x;
					h	= y;
					x = y = 0;
				}
				return	this.set({ sx: x, sy: y, sw: w, sh: h || w });
			},
	
			resize: function (w, h, strategy){
				if( /min|max|height|width/.test(h) ){
					strategy = h;
					h = w;
				}
	
				return	this.set({ dw: w, dh: h || w, resize: strategy });
			},
	
			preview: function (w, h){
				return	this.resize(w, h || w, 'preview');
			},
	
			rotate: function (deg){
				return	this.set({ deg: deg });
			},
	
			filter: function (filter){
				return	this.set({ filter: filter });
			},
	
			overlay: function (images){
				return	this.set({ overlay: images });
			},
	
			clone: function (){
				return	new Image(this);
			},
	
			_load: function (image, fn){
				var self = this;
	
				if( /img|video/i.test(image.nodeName) ){
					fn.call(self, null, image);
				}
				else {
					api.readAsImage(image, function (evt){
						fn.call(self, evt.type != 'load', evt.result);
					});
				}
			},
	
			_apply: function (image, fn){
				var
					  canvas = getCanvas()
					, m = this.getMatrix(image)
					, ctx = canvas.getContext('2d')
					, width = image.videoWidth || image.width
					, height = image.videoHeight || image.height
					, deg = m.deg
					, dw = m.dw
					, dh = m.dh
					, w = width
					, h = height
					, filter = m.filter
					, copy // canvas copy
					, buffer = image
					, overlay = m.overlay
					, queue = api.queue(function (){ image.src = api.EMPTY_PNG; fn(false, canvas); })
					, renderImageToCanvas = api.renderImageToCanvas
				;
	
				// Normalize angle
				deg = deg - Math.floor(deg/360)*360;
	
				// For `renderImageToCanvas`
				image._type = this.file.type;
	
				while(m.multipass && min(w/dw, h/dh) > 2 ){
					w = (w/2 + 0.5)|0;
					h = (h/2 + 0.5)|0;
	
					copy = getCanvas();
					copy.width  = w;
					copy.height = h;
	
					if( buffer !== image ){
						renderImageToCanvas(copy, buffer, 0, 0, buffer.width, buffer.height, 0, 0, w, h);
						buffer = copy;
					}
					else {
						buffer = copy;
						renderImageToCanvas(buffer, image, m.sx, m.sy, m.sw, m.sh, 0, 0, w, h);
						m.sx = m.sy = m.sw = m.sh = 0;
					}
				}
	
	
				canvas.width  = (deg % 180) ? dh : dw;
				canvas.height = (deg % 180) ? dw : dh;
	
				canvas.type = m.type;
				canvas.quality = m.quality;
	
				ctx.rotate(deg * Math.PI / 180);
				renderImageToCanvas(ctx.canvas, buffer
					, m.sx, m.sy
					, m.sw || buffer.width
					, m.sh || buffer.height
					, (deg == 180 || deg == 270 ? -dw : 0)
					, (deg == 90 || deg == 180 ? -dh : 0)
					, dw, dh
				);
				dw = canvas.width;
				dh = canvas.height;
	
				// Apply overlay
				overlay && api.each([].concat(overlay), function (over){
					queue.inc();
					// preload
					var img = new window.Image, fn = function (){
						var
							  x = over.x|0
							, y = over.y|0
							, w = over.w || img.width
							, h = over.h || img.height
							, rel = over.rel
						;
	
						// center  |  right  |  left
						x = (rel == 1 || rel == 4 || rel == 7) ? (dw - w + x)/2 : (rel == 2 || rel == 5 || rel == 8 ? dw - (w + x) : x);
	
						// center  |  bottom  |  top
						y = (rel == 3 || rel == 4 || rel == 5) ? (dh - h + y)/2 : (rel >= 6 ? dh - (h + y) : y);
	
						api.event.off(img, 'error load abort', fn);
	
						try {
							ctx.globalAlpha = over.opacity || 1;
							ctx.drawImage(img, x, y, w, h);
						}
						catch (er){}
	
						queue.next();
					};
	
					api.event.on(img, 'error load abort', fn);
					img.src = over.src;
	
					if( img.complete ){
						fn();
					}
				});
	
				if( filter ){
					queue.inc();
					Image.applyFilter(canvas, filter, queue.next);
				}
	
				queue.check();
			},
	
			getMatrix: function (image){
				var
					  m  = api.extend({}, this.matrix)
					, sw = m.sw = m.sw || image.videoWidth || image.naturalWidth ||  image.width
					, sh = m.sh = m.sh || image.videoHeight || image.naturalHeight || image.height
					, dw = m.dw = m.dw || sw
					, dh = m.dh = m.dh || sh
					, sf = sw/sh, df = dw/dh
					, strategy = m.resize
				;
	
				if( strategy == 'preview' ){
					if( dw != sw || dh != sh ){
						// Make preview
						var w, h;
	
						if( df >= sf ){
							w	= sw;
							h	= w / df;
						} else {
							h	= sh;
							w	= h * df;
						}
	
						if( w != sw || h != sh ){
							m.sx	= ~~((sw - w)/2);
							m.sy	= ~~((sh - h)/2);
							sw		= w;
							sh		= h;
						}
					}
				}
				else if( strategy == 'height' ){
					dw = dh * sf;
				}
				else if( strategy == 'width' ){
					dh = dw / sf;
				}
				else if( strategy ){
					if( !(sw > dw || sh > dh) ){
						dw = sw;
						dh = sh;
					}
					else if( strategy == 'min' ){
						dw = round(sf < df ? min(sw, dw) : dh*sf);
						dh = round(sf < df ? dw/sf : min(sh, dh));
					}
					else {
						dw = round(sf >= df ? min(sw, dw) : dh*sf);
						dh = round(sf >= df ? dw/sf : min(sh, dh));
					}
				}
	
				m.sw = sw;
				m.sh = sh;
				m.dw = dw;
				m.dh = dh;
				m.multipass = api.multiPassResize;
				return	m;
			},
	
			_trans: function (fn){
				this._load(this.file, function (err, image){
					if( err ){
						fn(err);
					}
					else {
						try {
							this._apply(image, fn);
						} catch (err){
							api.log('[err] FileAPI.Image.fn._apply:', err);
							fn(err);
						}
					}
				});
			},
	
	
			get: function (fn){
				if( api.support.transform ){
					var _this = this, matrix = _this.matrix;
	
					if( matrix.deg == 'auto' ){
						api.getInfo(_this.file, function (err, info){
							// rotate by exif orientation
							matrix.deg = exifOrientation[info && info.exif && info.exif.Orientation] || 0;
							_this._trans(fn);
						});
					}
					else {
						_this._trans(fn);
					}
				}
				else {
					fn('not_support_transform');
				}
	
				return this;
			},
	
	
			toData: function (fn){
				return this.get(fn);
			}
	
		};
	
	
		Image.exifOrientation = exifOrientation;
	
	
		Image.transform = function (file, transform, autoOrientation, fn){
			function _transform(err, img){
				// img -- info object
				var
					  images = {}
					, queue = api.queue(function (err){
						fn(err, images);
					})
				;
	
				if( !err ){
					api.each(transform, function (params, name){
						if( !queue.isFail() ){
							var ImgTrans = new Image(img.nodeType ? img : file), isFn = typeof params == 'function';
	
							if( isFn ){
								params(img, ImgTrans);
							}
							else if( params.width ){
								ImgTrans[params.preview ? 'preview' : 'resize'](params.width, params.height, params.strategy);
							}
							else {
								if( params.maxWidth && (img.width > params.maxWidth || img.height > params.maxHeight) ){
									ImgTrans.resize(params.maxWidth, params.maxHeight, 'max');
								}
							}
	
							if( params.crop ){
								var crop = params.crop;
								ImgTrans.crop(crop.x|0, crop.y|0, crop.w || crop.width, crop.h || crop.height);
							}
	
							if( params.rotate === undef && autoOrientation ){
								params.rotate = 'auto';
							}
	
							ImgTrans.set({ type: ImgTrans.matrix.type || params.type || file.type || 'image/png' });
	
							if( !isFn ){
								ImgTrans.set({
									  deg: params.rotate
									, overlay: params.overlay
									, filter: params.filter
									, quality: params.quality || 1
								});
							}
	
							queue.inc();
							ImgTrans.toData(function (err, image){
								if( err ){
									queue.fail();
								}
								else {
									images[name] = image;
									queue.next();
								}
							});
						}
					});
				}
				else {
					queue.fail();
				}
			}
	
	
			// @todo: Оло-ло, нужно рефакторить это место
			if( file.width ){
				_transform(false, file);
			} else {
				api.getInfo(file, _transform);
			}
		};
	
	
		// @const
		api.each(['TOP', 'CENTER', 'BOTTOM'], function (x, i){
			api.each(['LEFT', 'CENTER', 'RIGHT'], function (y, j){
				Image[x+'_'+y] = i*3 + j;
				Image[y+'_'+x] = i*3 + j;
			});
		});
	
	
		/**
		 * Trabsform element to canvas
		 *
		 * @param    {Image|HTMLVideoElement}   el
		 * @returns  {Canvas}
		 */
		Image.toCanvas = function(el){
			var canvas		= document.createElement('canvas');
			canvas.width	= el.videoWidth || el.width;
			canvas.height	= el.videoHeight || el.height;
			canvas.getContext('2d').drawImage(el, 0, 0);
			return	canvas;
		};
	
	
		/**
		 * Create image from DataURL
		 * @param  {String}  dataURL
		 * @param  {Object}  size
		 * @param  {Function}  callback
		 */
		Image.fromDataURL = function (dataURL, size, callback){
			var img = api.newImage(dataURL);
			api.extend(img, size);
			callback(img);
		};
	
	
		/**
		 * Apply filter (caman.js)
		 *
		 * @param  {Canvas|Image}   canvas
		 * @param  {String|Function}  filter
		 * @param  {Function}  doneFn
		 */
		Image.applyFilter = function (canvas, filter, doneFn){
			if( typeof filter == 'function' ){
				filter(canvas, doneFn);
			}
			else if( window.Caman ){
				// http://camanjs.com/guides/
				window.Caman(canvas.tagName == 'IMG' ? Image.toCanvas(canvas) : canvas, function (){
					if( typeof filter == 'string' ){
						this[filter]();
					}
					else {
						api.each(filter, function (val, method){
							this[method](val);
						}, this);
					}
					this.render(doneFn);
				});
			}
		};
	
	
		/**
		 * For load-image-ios.js
		 */
		api.renderImageToCanvas = function (canvas, img, sx, sy, sw, sh, dx, dy, dw, dh){
			try {
				return canvas.getContext('2d').drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
			} catch (ex) {
				api.log('renderImageToCanvas failed');
				throw ex;
			}
		};
	
	
		// @export
		api.support.canvas = api.support.transform = support;
		api.Image = Image;
	})(FileAPI, document);
	
	/*
	 * JavaScript Load Image iOS scaling fixes 1.0.3
	 * https://github.com/blueimp/JavaScript-Load-Image
	 *
	 * Copyright 2013, Sebastian Tschan
	 * https://blueimp.net
	 *
	 * iOS image scaling fixes based on
	 * https://github.com/stomita/ios-imagefile-megapixel
	 *
	 * Licensed under the MIT license:
	 * http://www.opensource.org/licenses/MIT
	 */
	
	/*jslint nomen: true, bitwise: true */
	/*global FileAPI, window, document */
	
	(function (factory) {
		'use strict';
		factory(FileAPI);
	}(function (loadImage) {
	    'use strict';
	
	    // Only apply fixes on the iOS platform:
	    if (!window.navigator || !window.navigator.platform ||
	             !(/iP(hone|od|ad)/).test(window.navigator.platform)) {
	        return;
	    }
	
	    var originalRenderMethod = loadImage.renderImageToCanvas;
	
	    // Detects subsampling in JPEG images:
	    loadImage.detectSubsampling = function (img) {
	        var canvas,
	            context;
	        if (img.width * img.height > 1024 * 1024) { // only consider mexapixel images
	            canvas = document.createElement('canvas');
	            canvas.width = canvas.height = 1;
	            context = canvas.getContext('2d');
	            context.drawImage(img, -img.width + 1, 0);
	            // subsampled image becomes half smaller in rendering size.
	            // check alpha channel value to confirm image is covering edge pixel or not.
	            // if alpha value is 0 image is not covering, hence subsampled.
	            return context.getImageData(0, 0, 1, 1).data[3] === 0;
	        }
	        return false;
	    };
	
	    // Detects vertical squash in JPEG images:
	    loadImage.detectVerticalSquash = function (img, subsampled) {
	        var naturalHeight = img.naturalHeight || img.height,
	            canvas = document.createElement('canvas'),
	            context = canvas.getContext('2d'),
	            data,
	            sy,
	            ey,
	            py,
	            alpha;
	        if (subsampled) {
	            naturalHeight /= 2;
	        }
	        canvas.width = 1;
	        canvas.height = naturalHeight;
	        context.drawImage(img, 0, 0);
	        data = context.getImageData(0, 0, 1, naturalHeight).data;
	        // search image edge pixel position in case it is squashed vertically:
	        sy = 0;
	        ey = naturalHeight;
	        py = naturalHeight;
	        while (py > sy) {
	            alpha = data[(py - 1) * 4 + 3];
	            if (alpha === 0) {
	                ey = py;
	            } else {
	                sy = py;
	            }
	            py = (ey + sy) >> 1;
	        }
	        return (py / naturalHeight) || 1;
	    };
	
	    // Renders image to canvas while working around iOS image scaling bugs:
	    // https://github.com/blueimp/JavaScript-Load-Image/issues/13
	    loadImage.renderImageToCanvas = function (
	        canvas,
	        img,
	        sourceX,
	        sourceY,
	        sourceWidth,
	        sourceHeight,
	        destX,
	        destY,
	        destWidth,
	        destHeight
	    ) {
	        if (img._type === 'image/jpeg') {
	            var context = canvas.getContext('2d'),
	                tmpCanvas = document.createElement('canvas'),
	                tileSize = 1024,
	                tmpContext = tmpCanvas.getContext('2d'),
	                subsampled,
	                vertSquashRatio,
	                tileX,
	                tileY;
	            tmpCanvas.width = tileSize;
	            tmpCanvas.height = tileSize;
	            context.save();
	            subsampled = loadImage.detectSubsampling(img);
	            if (subsampled) {
	                sourceX /= 2;
	                sourceY /= 2;
	                sourceWidth /= 2;
	                sourceHeight /= 2;
	            }
	            vertSquashRatio = loadImage.detectVerticalSquash(img, subsampled);
	            if (subsampled || vertSquashRatio !== 1) {
	                sourceY *= vertSquashRatio;
	                destWidth = Math.ceil(tileSize * destWidth / sourceWidth);
	                destHeight = Math.ceil(
	                    tileSize * destHeight / sourceHeight / vertSquashRatio
	                );
	                destY = 0;
	                tileY = 0;
	                while (tileY < sourceHeight) {
	                    destX = 0;
	                    tileX = 0;
	                    while (tileX < sourceWidth) {
	                        tmpContext.clearRect(0, 0, tileSize, tileSize);
	                        tmpContext.drawImage(
	                            img,
	                            sourceX,
	                            sourceY,
	                            sourceWidth,
	                            sourceHeight,
	                            -tileX,
	                            -tileY,
	                            sourceWidth,
	                            sourceHeight
	                        );
	                        context.drawImage(
	                            tmpCanvas,
	                            0,
	                            0,
	                            tileSize,
	                            tileSize,
	                            destX,
	                            destY,
	                            destWidth,
	                            destHeight
	                        );
	                        tileX += tileSize;
	                        destX += destWidth;
	                    }
	                    tileY += tileSize;
	                    destY += destHeight;
	                }
	                context.restore();
	                return canvas;
	            }
	        }
	        return originalRenderMethod(
	            canvas,
	            img,
	            sourceX,
	            sourceY,
	            sourceWidth,
	            sourceHeight,
	            destX,
	            destY,
	            destWidth,
	            destHeight
	        );
	    };
	
	}));
	
	/*global window, FileAPI */
	
	(function (api, window){
		"use strict";
	
		var
			  document = window.document
			, FormData = window.FormData
			, Form = function (){ this.items = []; }
			, encodeURIComponent = window.encodeURIComponent
		;
	
	
		Form.prototype = {
	
			append: function (name, blob, file, type){
				this.items.push({
					  name: name
					, blob: blob && blob.blob || (blob == void 0 ? '' : blob)
					, file: blob && (file || blob.name)
					, type:	blob && (type || blob.type)
				});
			},
	
			each: function (fn){
				var i = 0, n = this.items.length;
				for( ; i < n; i++ ){
					fn.call(this, this.items[i]);
				}
			},
	
			toData: function (fn, options){
			    // allow chunked transfer if we have only one file to send
			    // flag is used below and in XHR._send
			    options._chunked = api.support.chunked && options.chunkSize > 0 && api.filter(this.items, function (item){ return item.file; }).length == 1;
	
				if( !api.support.html5 ){
					api.log('FileAPI.Form.toHtmlData');
					this.toHtmlData(fn);
				}
				else if( !api.formData || this.multipart || !FormData ){
					api.log('FileAPI.Form.toMultipartData');
					this.toMultipartData(fn);
				}
				else if( options._chunked ){
					api.log('FileAPI.Form.toPlainData');
					this.toPlainData(fn);
				}
				else {
					api.log('FileAPI.Form.toFormData');
					this.toFormData(fn);
				}
			},
	
			_to: function (data, complete, next, arg){
				var queue = api.queue(function (){
					complete(data);
				});
	
				this.each(function (file){
					try{
						next(file, data, queue, arg);
					}
					catch( err ){
						api.log('FileAPI.Form._to: ' + err.message);
						complete(err);
					}
				});
	
				queue.check();
			},
	
	
			toHtmlData: function (fn){
				this._to(document.createDocumentFragment(), fn, function (file, data/**DocumentFragment*/){
					var blob = file.blob, hidden;
	
					if( file.file ){
						api.reset(blob, true);
						// set new name
						blob.name = file.name;
						blob.disabled = false;
						data.appendChild(blob);
					}
					else {
						hidden = document.createElement('input');
						hidden.name  = file.name;
						hidden.type  = 'hidden';
						hidden.value = blob;
						data.appendChild(hidden);
					}
				});
			},
	
			toPlainData: function (fn){
				this._to({}, fn, function (file, data, queue){
					if( file.file ){
						data.type = file.file;
					}
	
					if( file.blob.toBlob ){
					    // canvas
						queue.inc();
						_convertFile(file, function (file, blob){
							data.name = file.name;
							data.file = blob;
							data.size = blob.length;
							data.type = file.type;
							queue.next();
						});
					}
					else if( file.file ){
					    // file
						data.name = file.blob.name;
						data.file = file.blob;
						data.size = file.blob.size;
						data.type = file.type;
					}
					else {
					    // additional data
					    if( !data.params ){
					        data.params = [];
					    }
					    data.params.push(encodeURIComponent(file.name) +"="+ encodeURIComponent(file.blob));
					}
	
					data.start = -1;
					data.end = data.file && data.file.FileAPIReadPosition || -1;
					data.retry = 0;
				});
			},
	
			toFormData: function (fn){
				this._to(new FormData, fn, function (file, data, queue){
					if( file.blob && file.blob.toBlob ){
						queue.inc();
						_convertFile(file, function (file, blob){
							data.append(file.name, blob, file.file);
							queue.next();
						});
					}
					else if( file.file ){
						data.append(file.name, file.blob, file.file);
					}
					else {
						data.append(file.name, file.blob);
					}
	
					if( file.file ){
						data.append('_'+file.name, file.file);
					}
				});
			},
	
	
			toMultipartData: function (fn){
				this._to([], fn, function (file, data, queue, boundary){
					queue.inc();
					_convertFile(file, function (file, blob){
						data.push(
							  '--_' + boundary + ('\r\nContent-Disposition: form-data; name="'+ file.name +'"'+ (file.file ? '; filename="'+ encodeURIComponent(file.file) +'"' : '')
							+ (file.file ? '\r\nContent-Type: '+ (file.type || 'application/octet-stream') : '')
							+ '\r\n'
							+ '\r\n'+ (file.file ? blob : encodeURIComponent(blob))
							+ '\r\n')
						);
						queue.next();
					}, true);
				}, api.expando);
			}
		};
	
	
		function _convertFile(file, fn, useBinaryString){
			var blob = file.blob, filename = file.file;
	
			if( filename ){
				if( !blob.toDataURL ){
					// The Blob is not an image.
					api.readAsBinaryString(blob, function (evt){
						if( evt.type == 'load' ){
							fn(file, evt.result);
						}
					});
					return;
				}
	
				var
					  mime = { 'image/jpeg': '.jpe?g', 'image/png': '.png' }
					, type = mime[file.type] ? file.type : 'image/png'
					, ext  = mime[type] || '.png'
					, quality = blob.quality || 1
				;
	
				if( !filename.match(new RegExp(ext+'$', 'i')) ){
					// Does not change the current extension, but add a new one.
					filename += ext.replace('?', '');
				}
	
				file.file = filename;
				file.type = type;
	
				if( !useBinaryString && blob.toBlob ){
					blob.toBlob(function (blob){
						fn(file, blob);
					}, type, quality);
				}
				else {
					fn(file, api.toBinaryString(blob.toDataURL(type, quality)));
				}
			}
			else {
				fn(file, blob);
			}
		}
	
	
		// @export
		api.Form = Form;
	})(FileAPI, window);
	
	/*global window, FileAPI, Uint8Array */
	
	(function (window, api){
		"use strict";
	
		var
			  noop = function (){}
			, document = window.document
	
			, XHR = function (options){
				this.uid = api.uid();
				this.xhr = {
					  abort: noop
					, getResponseHeader: noop
					, getAllResponseHeaders: noop
				};
				this.options = options;
			},
	
			_xhrResponsePostfix = { '': 1, XML: 1, Text: 1, Body: 1 }
		;
	
	
		XHR.prototype = {
			status: 0,
			statusText: '',
			constructor: XHR,
	
			getResponseHeader: function (name){
				return this.xhr.getResponseHeader(name);
			},
	
			getAllResponseHeaders: function (){
				return this.xhr.getAllResponseHeaders() || {};
			},
	
			end: function (status, statusText){
				var _this = this, options = _this.options;
	
				_this.end		=
				_this.abort		= noop;
				_this.status	= status;
	
				if( statusText ){
					_this.statusText = statusText;
				}
	
				api.log('xhr.end:', status, statusText);
				options.complete(status == 200 || status == 201 ? false : _this.statusText || 'unknown', _this);
	
				if( _this.xhr && _this.xhr.node ){
					setTimeout(function (){
						var node = _this.xhr.node;
						try { node.parentNode.removeChild(node); } catch (e){}
						try { delete window[_this.uid]; } catch (e){}
						window[_this.uid] = _this.xhr.node = null;
					}, 9);
				}
			},
	
			abort: function (){
				this.end(0, 'abort');
	
				if( this.xhr ){
					this.xhr.aborted = true;
					this.xhr.abort();
				}
			},
	
			send: function (FormData){
				var _this = this, options = this.options;
	
				FormData.toData(function (data){
					if( data instanceof Error ){
						_this.end(0, data.message);
					}
					else{
						// Start uploading
						options.upload(options, _this);
						_this._send.call(_this, options, data);
					}
				}, options);
			},
	
			_send: function (options, data){
				var _this = this, xhr, uid = _this.uid, onLoadFnName = _this.uid + "Load", url = options.url;
	
				api.log('XHR._send:', data);
	
				if( !options.cache ){
					// No cache
					url += (~url.indexOf('?') ? '&' : '?') + api.uid();
				}
	
				if( data.nodeName ){
					var jsonp = options.jsonp;
	
					// prepare callback in GET
					url = url.replace(/([a-z]+)=(\?)/i, '$1='+uid);
	
					// legacy
					options.upload(options, _this);
	
					var
						onPostMessage = function (evt){
							if( ~url.indexOf(evt.origin) ){
								try {
									var result = api.parseJSON(evt.data);
									if( result.id == uid ){
										complete(result.status, result.statusText, result.response);
									}
								} catch( err ){
									complete(0, err.message);
								}
							}
						},
	
						// jsonp-callack
						complete = window[uid] = function (status, statusText, response){
							_this.readyState	= 4;
							_this.responseText	= response;
							_this.end(status, statusText);
	
							api.event.off(window, 'message', onPostMessage);
							window[uid] = xhr = transport = window[onLoadFnName] = null;
						}
					;
	
					_this.xhr.abort = function (){
						try {
							if( transport.stop ){ transport.stop(); }
							else if( transport.contentWindow.stop ){ transport.contentWindow.stop(); }
							else { transport.contentWindow.document.execCommand('Stop'); }
						}
						catch (er) {}
						complete(0, "abort");
					};
	
					api.event.on(window, 'message', onPostMessage);
	
					window[onLoadFnName] = function (){
						try {
							var
								  win = transport.contentWindow
								, doc = win.document
								, result = win.result || api.parseJSON(doc.body.innerHTML)
							;
							complete(result.status, result.statusText, result.response);
						} catch (e){
							api.log('[transport.onload]', e);
						}
					};
	
					xhr = document.createElement('div');
					xhr.innerHTML = '<form target="'+ uid +'" action="'+ url +'" method="POST" enctype="multipart/form-data" style="position: absolute; top: -1000px; overflow: hidden; width: 1px; height: 1px;">'
								+ '<iframe name="'+ uid +'" src="javascript:false;" onload="window.' + onLoadFnName + ' && ' + onLoadFnName + '();"></iframe>'
								+ (jsonp && (options.url.indexOf('=?') < 0) ? '<input value="'+ uid +'" name="'+jsonp+'" type="hidden"/>' : '')
								+ '</form>'
					;
	
					// get form-data & transport
					var
						  form = xhr.getElementsByTagName('form')[0]
						, transport = xhr.getElementsByTagName('iframe')[0]
					;
	
					form.appendChild(data);
	
					api.log(form.parentNode.innerHTML);
	
					// append to DOM
					document.body.appendChild(xhr);
	
					// keep a reference to node-transport
					_this.xhr.node = xhr;
	
					// send
					_this.readyState = 2; // loaded
					try {
						form.submit();
					} catch (err) {
						api.log('iframe.error: ' + err);
					}
					form = null;
				}
				else {
					// Clean url
					url = url.replace(/([a-z]+)=(\?)&?/i, '');
	
					// html5
					if (this.xhr && this.xhr.aborted) {
						api.log("Error: already aborted");
						return;
					}
					xhr = _this.xhr = api.getXHR();
	
					if (data.params) {
						url += (url.indexOf('?') < 0 ? "?" : "&") + data.params.join("&");
					}
	
					xhr.open('POST', url, true);
	
					if( api.withCredentials ){
						xhr.withCredentials = "true";
					}
	
					if( !options.headers || !options.headers['X-Requested-With'] ){
						xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
					}
	
					api.each(options.headers, function (val, key){
						xhr.setRequestHeader(key, val);
					});
	
	
					if ( options._chunked ) {
						// chunked upload
						if( xhr.upload ){
							xhr.upload.addEventListener('progress', api.throttle(function (/**Event*/evt){
								if (!data.retry) {
									// show progress only for correct chunk uploads
									options.progress({
										  type:			evt.type
										, total:		data.size
										, loaded:		data.start + evt.loaded
										, totalSize:	data.size
									}, _this, options);
								}
							}, 100), false);
						}
	
						xhr.onreadystatechange = function (){
							var lkb = parseInt(xhr.getResponseHeader('X-Last-Known-Byte'), 10);
	
							_this.status     = xhr.status;
							_this.statusText = xhr.statusText;
							_this.readyState = xhr.readyState;
	
							if( xhr.readyState == 4 ){
								for( var k in _xhrResponsePostfix ){
									_this['response'+k]  = xhr['response'+k];
								}
								xhr.onreadystatechange = null;
	
								if (!xhr.status || xhr.status - 201 > 0) {
									api.log("Error: " + xhr.status);
									// some kind of error
									// 0 - connection fail or timeout, if xhr.aborted is true, then it's not recoverable user action
									// up - server error
									if (((!xhr.status && !xhr.aborted) || 500 == xhr.status || 416 == xhr.status) && ++data.retry <= options.chunkUploadRetry) {
										// let's try again the same chunk
										// only applicable for recoverable error codes 500 && 416
										var delay = xhr.status ? 0 : api.chunkNetworkDownRetryTimeout;
	
										// inform about recoverable problems
										options.pause(data.file, options);
	
										// smart restart if server reports about the last known byte
										api.log("X-Last-Known-Byte: " + lkb);
										if (lkb) {
											data.end = lkb;
										} else {
											data.end = data.start - 1;
											if (416 == xhr.status) {
												data.end = data.end - options.chunkSize;
											}
										}
	
										setTimeout(function () {
											_this._send(options, data);
										}, delay);
									} else {
										// no mo retries
										_this.end(xhr.status);
									}
								} else {
									// success
									data.retry = 0;
	
									if (data.end == data.size - 1) {
										// finished
										_this.end(xhr.status);
									} else {
										// next chunk
	
										// shift position if server reports about the last known byte
										api.log("X-Last-Known-Byte: " + lkb);
										if (lkb) {
											data.end = lkb;
										}
										data.file.FileAPIReadPosition = data.end;
	
										setTimeout(function () {
											_this._send(options, data);
										}, 0);
									}
								}
	
								xhr = null;
							}
						};
	
						data.start = data.end + 1;
						data.end = Math.max(Math.min(data.start + options.chunkSize, data.size) - 1, data.start);
	
						// Retrieve a slice of file
						var
							  file = data.file
							, slice = (file.slice || file.mozSlice || file.webkitSlice).call(file, data.start, data.end + 1)
						;
	
						if( data.size && !slice.size ){
							setTimeout(function (){
								_this.end(-1);
							});
						} else {
							xhr.setRequestHeader("Content-Range", "bytes " + data.start + "-" + data.end + "/" + data.size);
							xhr.setRequestHeader("Content-Disposition", 'attachment; filename=' + encodeURIComponent(data.name));
							xhr.setRequestHeader("Content-Type", data.type || "application/octet-stream");
	
							xhr.send(slice);
						}
	
						file = slice = null;
					} else {
						// single piece upload
						if( xhr.upload ){
							// https://github.com/blueimp/jQuery-File-Upload/wiki/Fixing-Safari-hanging-on-very-high-speed-connections-%281Gbps%29
							xhr.upload.addEventListener('progress', api.throttle(function (/**Event*/evt){
								options.progress(evt, _this, options);
							}, 100), false);
						}
	
						xhr.onreadystatechange = function (){
							_this.status     = xhr.status;
							_this.statusText = xhr.statusText;
							_this.readyState = xhr.readyState;
	
							if( xhr.readyState == 4 ){
								for( var k in _xhrResponsePostfix ){
									_this['response'+k]  = xhr['response'+k];
								}
								xhr.onreadystatechange = null;
	
								if (!xhr.status || xhr.status > 201) {
									api.log("Error: " + xhr.status);
									if (((!xhr.status && !xhr.aborted) || 500 == xhr.status) && (options.retry || 0) < options.uploadRetry) {
										options.retry = (options.retry || 0) + 1;
										var delay = api.networkDownRetryTimeout;
	
										// inform about recoverable problems
										options.pause(options.file, options);
	
										setTimeout(function () {
											_this._send(options, data);
										}, delay);
									} else {
										//success
										_this.end(xhr.status);
									}
								} else {
									//success
									_this.end(xhr.status);
								}
	
								xhr = null;
							}
						};
	
						if( api.isArray(data) ){
							// multipart
							xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=_'+api.expando);
							var rawData = data.join('') +'--_'+ api.expando +'--';
	
							/** @namespace  xhr.sendAsBinary  https://developer.mozilla.org/ru/XMLHttpRequest#Sending_binary_content */
							if( xhr.sendAsBinary ){
								xhr.sendAsBinary(rawData);
							}
							else {
								var bytes = Array.prototype.map.call(rawData, function(c){ return c.charCodeAt(0) & 0xff; });
								xhr.send(new Uint8Array(bytes).buffer);
	
							}
						} else {
							// FormData
							xhr.send(data);
						}
					}
				}
			}
		};
	
	
		// @export
		api.XHR = XHR;
	})(window, FileAPI);
	
	/**
	 * @class	FileAPI.Camera
	 * @author	RubaXa	<trash@rubaxa.org>
	 * @support	Chrome 21+, FF 18+, Opera 12+
	 */
	
	/*global window, FileAPI, jQuery */
	/** @namespace LocalMediaStream -- https://developer.mozilla.org/en-US/docs/WebRTC/MediaStream_API#LocalMediaStream */
	(function (window, api){
		"use strict";
	
		var
			URL = window.URL || window.webkitURL,
	
			document = window.document,
			navigator = window.navigator,
	
			getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia,
	
			html5 = !!getMedia
		;
	
	
		// Support "media"
		api.support.media = html5;
	
	
		var Camera = function (video){
			this.video = video;
		};
	
	
		Camera.prototype = {
			isActive: function (){
				return	!!this._active;
			},
	
	
			/**
			 * Start camera streaming
			 * @param	{Function}	callback
			 */
			start: function (callback){
				var
					  _this = this
					, video = _this.video
					, _successId
					, _failId
					, _complete = function (err){
						_this._active = !err;
						clearTimeout(_failId);
						clearTimeout(_successId);
	//					api.event.off(video, 'loadedmetadata', _complete);
						callback && callback(err, _this);
					}
				;
	
				getMedia.call(navigator, { video: true }, function (stream/**LocalMediaStream*/){
					// Success
					_this.stream = stream;
	
	//				api.event.on(video, 'loadedmetadata', function (){
	//					_complete(null);
	//				});
	
					// Set camera stream
					video.src = URL.createObjectURL(stream);
	
					// Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
					// See crbug.com/110938.
					_successId = setInterval(function (){
						if( _detectVideoSignal(video) ){
							_complete(null);
						}
					}, 1000);
	
					_failId = setTimeout(function (){
						_complete('timeout');
					}, 5000);
	
					// Go-go-go!
					video.play();
				}, _complete/*error*/);
			},
	
	
			/**
			 * Stop camera streaming
			 */
			stop: function (){
				try {
					this._active = false;
					this.video.pause();
	
					try {
						this.stream.stop();
					} catch (err) {
						api.each(this.stream.getTracks(), function (track) {
							track.stop();
						});
					}
	
					this.stream = null;
				} catch( err ){
					api.log('[FileAPI.Camera] stop:', err);
				}
			},
	
	
			/**
			 * Create screenshot
			 * @return {FileAPI.Camera.Shot}
			 */
			shot: function (){
				return	new Shot(this.video);
			}
		};
	
	
		/**
		 * Get camera element from container
		 *
		 * @static
		 * @param	{HTMLElement}	el
		 * @return	{Camera}
		 */
		Camera.get = function (el){
			return	new Camera(el.firstChild);
		};
	
	
		/**
		 * Publish camera element into container
		 *
		 * @static
		 * @param	{HTMLElement}	el
		 * @param	{Object}		options
		 * @param	{Function}		[callback]
		 */
		Camera.publish = function (el, options, callback){
			if( typeof options == 'function' ){
				callback = options;
				options = {};
			}
	
			// Dimensions of "camera"
			options = api.extend({}, {
				  width:	'100%'
				, height:	'100%'
				, start:	true
			}, options);
	
	
			if( el.jquery ){
				// Extract first element, from jQuery collection
				el = el[0];
			}
	
	
			var doneFn = function (err){
				if( err ){
					callback(err);
				}
				else {
					// Get camera
					var cam = Camera.get(el);
					if( options.start ){
						cam.start(callback);
					}
					else {
						callback(null, cam);
					}
				}
			};
	
	
			el.style.width	= _px(options.width);
			el.style.height	= _px(options.height);
	
	
			if( api.html5 && html5 && !api.insecureChrome ){
				// Create video element
				var video = document.createElement('video');
	
				// Set dimensions
				video.style.width	= _px(options.width);
				video.style.height	= _px(options.height);
	
				// Clean container
				if( window.jQuery ){
					jQuery(el).empty();
				} else {
					el.innerHTML = '';
				}
	
				// Add "camera" to container
				el.appendChild(video);
	
				// end
				doneFn();
			}
			else {
				Camera.fallback(el, options, doneFn);
			}
		};
	
	
		Camera.fallback = function (el, options, callback){
			callback('not_support_camera');
		};
	
		Camera.checkAlreadyCaptured = (function () {
			var	mediaDevices = navigator.mediaDevices,
				MediaStreamTrack = window.MediaStreamTrack,
				navigatorEnumerateDevices = navigator.enumerateDevices,
				enumerateDevices;
	
			if (mediaDevices && mediaDevices.enumerateDevices) {
				enumerateDevices = function (callback) {
					mediaDevices.enumerateDevices().then(callback);
				};
			} else if (MediaStreamTrack && MediaStreamTrack.getSources) {
				enumerateDevices = MediaStreamTrack.getSources.bind(MediaStreamTrack);
			} else if (navigatorEnumerateDevices) {
				enumerateDevices = navigatorEnumerateDevices.bind(navigator);
			} else {
				enumerateDevices = function (fn) {
					fn([]);
				};
			}
	
			return function (callback) {
				enumerateDevices(function (devices) {
					var deviceExists = devices.some(function (device) {
						return (device.kind === 'videoinput' || device.kind === 'video') && device.label;
					});
	
					callback(deviceExists);
				});
			};
	
		})();
	
	
		/**
		 * @class	FileAPI.Camera.Shot
		 */
		var Shot = function (video){
			var canvas	= video.nodeName ? api.Image.toCanvas(video) : video;
			var shot	= api.Image(canvas);
			shot.type	= 'image/png';
			shot.width	= canvas.width;
			shot.height	= canvas.height;
			shot.size	= canvas.width * canvas.height * 4;
			return	shot;
		};
	
	
		/**
		 * Add "px" postfix, if value is a number
		 *
		 * @private
		 * @param	{*}  val
		 * @return	{String}
		 */
		function _px(val){
			return	val >= 0 ? val + 'px' : val;
		}
	
	
		/**
		 * @private
		 * @param	{HTMLVideoElement} video
		 * @return	{Boolean}
		 */
		function _detectVideoSignal(video){
			var canvas = document.createElement('canvas'), ctx, res = false;
			try {
				ctx = canvas.getContext('2d');
				ctx.drawImage(video, 0, 0, 1, 1);
				res = ctx.getImageData(0, 0, 1, 1).data[4] != 255;
			}
			catch( err ){
				api.log('[FileAPI.Camera] detectVideoSignal:', err);
			}
			return	res;
		}
	
	
		// @export
		Camera.Shot	= Shot;
		api.Camera	= Camera;
	})(window, FileAPI);
	
	/**
	 * FileAPI fallback to Flash
	 *
	 * @flash-developer  "Vladimir Demidov" <v.demidov@corp.mail.ru>
	 */
	
	/*global window, FileAPI */
	(function (window, jQuery, api) {
	    "use strict";
	
	    var _each = api.each,
	        _cameraQueue = [];
	
	    if (api.support.flash && (api.media && (!api.support.media || !api.html5 || api.insecureChrome))) {
	        (function () {
	            function _wrap(fn) {
	                var id = fn.wid = api.uid();
	                api.Flash._fn[id] = fn;
	                return 'FileAPI.Flash._fn.' + id;
	            }
	
	
	            function _unwrap(fn) {
	                try {
	                    api.Flash._fn[fn.wid] = null;
	                    delete api.Flash._fn[fn.wid];
	                } catch (e) {
	                }
	            }
	
	            var flash = api.Flash;
	            api.extend(api.Flash, {
	
	                patchCamera: function () {
	                    api.Camera.fallback = function (el, options, callback) {
	                        var camId = api.uid();
	                        api.log('FlashAPI.Camera.publish: ' + camId);
	                        flash.publish(el, camId, api.extend(options, {
	                            camera: true,
	                            onEvent: _wrap(function _(evt) {
	                                if (evt.type === 'camera') {
	                                    _unwrap(_);
	
	                                    if (evt.error) {
	                                        api.log('FlashAPI.Camera.publish.error: ' + evt.error);
	                                        callback(evt.error);
	                                    } else {
	                                        api.log('FlashAPI.Camera.publish.success: ' + camId);
	                                        callback(null);
	                                    }
	                                }
	                            })
	                        }));
	                    };
	                    // Run
	                    _each(_cameraQueue, function (args) {
	                        api.Camera.fallback.apply(api.Camera, args);
	                    });
	                    _cameraQueue = [];
	
	
	                    // FileAPI.Camera:proto
	                    api.extend(api.Camera.prototype, {
	                        _id: function () {
	                            return this.video.id;
	                        },
	
	                        start: function (callback) {
	                            var _this = this;
	                            flash.cmd(this._id(), 'camera.on', {
	                                callback: _wrap(function _(evt) {
	                                    _unwrap(_);
	
	                                    if (evt.error) {
	                                        api.log('FlashAPI.camera.on.error: ' + evt.error);
	                                        callback(evt.error, _this);
	                                    } else {
	                                        api.log('FlashAPI.camera.on.success: ' + _this._id());
	                                        _this._active = true;
	                                        callback(null, _this);
	                                    }
	                                })
	                            });
	                        },
	
	                        stop: function () {
	                            this._active = false;
	                            flash.cmd(this._id(), 'camera.off');
	                        },
	
	                        shot: function () {
	                            api.log('FlashAPI.Camera.shot:', this._id());
	
	                            var shot = api.Flash.cmd(this._id(), 'shot', {});
	                            shot.type = 'image/png';
	                            shot.flashId = this._id();
	                            shot.isShot = true;
	
	                            return new api.Camera.Shot(shot);
	                        }
	                    });
	                }
	            });
	
	            api.Camera.fallback = function () {
	                _cameraQueue.push(arguments);
	            };
	
	        }());
	    }
	}(window, window.jQuery, FileAPI));
	if( true ){ !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function (){ return FileAPI; }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); }

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(78)
	
	/* script */
	__vue_exports__ = __webpack_require__(35)
	
	/* template */
	var __vue_template__ = __webpack_require__(81)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "file-container"
	  }, [(list) && _l((list), function(item) {
	    return _h('div', {
	      class: getFileClass(item),
	      attrs: {
	        "title": item.msg,
	        "percent": item.percent
	      },
	      on: {
	        "click": function($event) {
	          handleClick(item)
	        }
	      }
	    }, [_h('img', {
	      attrs: {
	        "src": showImage(item.file)
	      }
	    }), " ", _h('a', {
	      staticClass: "file-remove",
	      attrs: {
	        "href": "javascript:;"
	      },
	      on: {
	        "click": function($event) {
	          removeFile(item)
	        }
	      }
	    }, ["×"]), " ", _h('input', {
	      attrs: {
	        "type": "hidden",
	        "name": settings.name
	      },
	      domProps: {
	        "value": item.file
	      }
	    })])
	  }), " ", _h('div', {
	    directives: [{
	      name: "show",
	      value: (canAddFile),
	      expression: "canAddFile"
	    }],
	    staticClass: "file file-select"
	  }, [(canMultipleSelect) ? _h('input', {
	    staticClass: "text",
	    attrs: {
	      "type": "file",
	      "multiple": "multiple"
	    }
	  }) : _h('input', {
	    staticClass: "text",
	    attrs: {
	      "type": "file"
	    }
	  }), " "])])
	}},staticRenderFns: []}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-uploader2.js.map