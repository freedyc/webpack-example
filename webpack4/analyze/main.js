(function(modules) { // webpackBootstrap
	// 使用jsonp callback 加载模块
	function webpackJsonpCallback(data) {
		var chunkIds = data[0];
		var moreModules = data[1];
		// add "moreModules" to the modules object,
		// then flag all "chunkIds" as loaded and fire callback
		var moduleId, chunkId, i = 0, resolves = [];
		for(;i < chunkIds.length; i++) {
			chunkId = chunkIds[i];
			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
				resolves.push(installedChunks[chunkId][0]);
			}
			installedChunks[chunkId] = 0;
		}
		for(moduleId in moreModules) {
			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
				modules[moduleId] = moreModules[moduleId];
			}
		}
		if(parentJsonpFunction) parentJsonpFunction(data);

		while(resolves.length) {
			resolves.shift()();
		}

	};


	// 缓存模块
	var installedModules = {};

	//用于存储已加载和正在加载的块的对象
  //undefined=未加载块，null =已预加载/预取块
  //Promise =加载块，0 =加载块 
	var installedChunks = {
		"main": 0
	};

	// 生成脚本的scr
	function jsonpScriptSrc(chunkId) {
		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
	}

	// The require function
	function __webpack_require__(moduleId) {

		// 检查模块是否存在
		if(installedModules[moduleId]) {
			return installedModules[moduleId].exports;
		}
		// 创建一个新的模块并放入缓存
		var module = installedModules[moduleId] = {
			i: moduleId,
			l: false,
			exports: {}
		};

		// 执行模块的功能
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		// 标记模块已经加载
		module.l = true;

		// 返回导出的模块
		return module.exports;
	}

	// 支持块加载功能， 加载其他的js文件
	__webpack_require__.e = function requireEnsure(chunkId) {
		var promises = [];


		// JSONP chunk loading for javascript

		var installedChunkData = installedChunks[chunkId];
		if(installedChunkData !== 0) { // 0 means "already installed".

			// a Promise means "currently loading".
			if(installedChunkData) {
				promises.push(installedChunkData[2]);
			} else {
				// setup Promise in chunk cache
				var promise = new Promise(function(resolve, reject) {
					installedChunkData = installedChunks[chunkId] = [resolve, reject];
				});
				promises.push(installedChunkData[2] = promise);

				// start chunk loading
				var script = document.createElement('script');
				var onScriptComplete;

				script.charset = 'utf-8';
				script.timeout = 120;
				if (__webpack_require__.nc) {
					script.setAttribute("nonce", __webpack_require__.nc);
				}
				script.src = jsonpScriptSrc(chunkId);

				// create error before stack unwound to get useful stacktrace later
				var error = new Error();
				onScriptComplete = function (event) {
					// avoid mem leaks in IE.
					script.onerror = script.onload = null;
					clearTimeout(timeout);
					var chunk = installedChunks[chunkId];
					if(chunk !== 0) {
						if(chunk) {
							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
							var realSrc = event && event.target && event.target.src;
							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
							error.name = 'ChunkLoadError';
							error.type = errorType;
							error.request = realSrc;
							chunk[1](error);
						}
						installedChunks[chunkId] = undefined;
					}
				};
				var timeout = setTimeout(function(){
					onScriptComplete({ type: 'timeout', target: script });
				}, 120000);
				script.onerror = script.onload = onScriptComplete;
				document.head.appendChild(script);
			}
		}
		return Promise.all(promises);
	};

	// 公开模块对象
	__webpack_require__.m = modules;

	// 公开缓存对象
	__webpack_require__.c = installedModules;

	// define getter function for harmony exports
	__webpack_require__.d = function(exports, name, getter) {
		if(!__webpack_require__.o(exports, name)) {
			Object.defineProperty(exports, name, { enumerable: true, get: getter });
		}
	};

	// define __esModule on exports  
	__webpack_require__.r = function(exports) {
		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
		}
		Object.defineProperty(exports, '__esModule', { value: true });
	};

	// create a fake namespace object
	// mode & 1: value is a module id, require it
	// mode & 2: merge all properties of value into the ns
	// mode & 4: return value when already ns object
	// mode & 8|1: behave like require
	__webpack_require__.t = function(value, mode) {
		if(mode & 1) value = __webpack_require__(value);
		if(mode & 8) return value;
		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
		var ns = Object.create(null);
		__webpack_require__.r(ns);
		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
		return ns;
	};

	// getDefaultExport function for compatibility with non-harmony modules
	__webpack_require__.n = function(module) {
		var getter = module && module.__esModule ?
			function getDefault() { return module['default']; } :
			function getModuleExports() { return module; };
		__webpack_require__.d(getter, 'a', getter);
		return getter;
	};

	// Object.prototype.hasOwnProperty.call
	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

	// __webpack_public_path__
	__webpack_require__.p = "";

	// on error function for async loading
	__webpack_require__.oe = function(err) { console.error(err); throw err; };

	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
	jsonpArray.push = webpackJsonpCallback;
	jsonpArray = jsonpArray.slice();
	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
	var parentJsonpFunction = oldJsonpFunction;


	// Load entry module and return exports
	return __webpack_require__(__webpack_require__.s = "./src/index.js");
})({
  "./src/index.js": (function(module, exports, __webpack_require__) {
    __webpack_require__
      .e(0) // 加载的模块chunkId
      .then(__webpack_require__.bind(null, "./src/async1.js"))
      .then((_) => {   console.log(_.default);}); 
      //# sourceURL=webpack:///./src/index.js?");
  })
});
/**
 * 1. 创建闭包立即执行 传入模块对象
 * 2. 执行Jsonpcallback
 * 3. __webpack_require__
 * 5. 加载__webpack_require__文件
 */