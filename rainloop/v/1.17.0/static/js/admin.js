/* RainLoop Webmail (c) RainLoop Team | Licensed under MIT */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "rainloop/v/0.0.0/static/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 561);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************************!*\
  !*** ./dev/Common/Enums.js ***!
  \*****************************/
/*! exports provided: FileType, StorageResultType, Focused, State, StateType, Capa, KeyState, FolderType, ServerFolderType, LoginSignMeTypeAsString, LoginSignMeType, ComposeType, UploadErrorCode, SetSystemFoldersNotification, ClientSideKeyName, EventKeyCode, MessageSetAction, MessageSelectAction, DesktopNotification, MessagePriority, EditorDefaultType, ServerSecure, SearchDateType, SaveSettingsStep, Layout, FilterConditionField, FilterConditionType, FiltersAction, FilterRulesType, SignedVerifyStatus, ContactPropertyType, Magics, Ports, Notification */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileType", function() { return FileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageResultType", function() { return StorageResultType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Focused", function() { return Focused; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateType", function() { return StateType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Capa", function() { return Capa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyState", function() { return KeyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderType", function() { return FolderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerFolderType", function() { return ServerFolderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSignMeTypeAsString", function() { return LoginSignMeTypeAsString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSignMeType", function() { return LoginSignMeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposeType", function() { return ComposeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadErrorCode", function() { return UploadErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSystemFoldersNotification", function() { return SetSystemFoldersNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientSideKeyName", function() { return ClientSideKeyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventKeyCode", function() { return EventKeyCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageSetAction", function() { return MessageSetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageSelectAction", function() { return MessageSelectAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopNotification", function() { return DesktopNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePriority", function() { return MessagePriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorDefaultType", function() { return EditorDefaultType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerSecure", function() { return ServerSecure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDateType", function() { return SearchDateType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveSettingsStep", function() { return SaveSettingsStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterConditionField", function() { return FilterConditionField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterConditionType", function() { return FilterConditionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersAction", function() { return FiltersAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterRulesType", function() { return FilterRulesType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignedVerifyStatus", function() { return SignedVerifyStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPropertyType", function() { return ContactPropertyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Magics", function() { return Magics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ports", function() { return Ports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* eslint quote-props: 0 */

/**
 * @enum {string}
 */
var FileType = {
  'Unknown': 'unknown',
  'Text': 'text',
  'Html': 'html',
  'Code': 'code',
  'Eml': 'eml',
  'WordText': 'word-text',
  'Pdf': 'pdf',
  'Image': 'image',
  'Audio': 'audio',
  'Video': 'video',
  'Sheet': 'sheet',
  'Presentation': 'presentation',
  'Certificate': 'certificate',
  'CertificateBin': 'certificate-bin',
  'Archive': 'archive'
};
/**
 * @enum {string}
 */

var StorageResultType = {
  'Success': 'success',
  'Abort': 'abort',
  'Error': 'error',
  'Unload': 'unload'
};
/**
 * @enum {string}
 */

var Focused = {
  'None': 'none',
  'MessageList': 'message-list',
  'MessageView': 'message-view',
  'FolderList': 'folder-list'
};
/**
 * @enum {number}
 */

var State = {
  'Empty': 10,
  'Login': 20,
  'Auth': 30
};
/**
 * @enum {number}
 */

var StateType = {
  'Webmail': 0,
  'Admin': 1
};
/**
 * @enum {string}
 */

var Capa = {
  'TwoFactor': 'TWO_FACTOR',
  'TwoFactorForce': 'TWO_FACTOR_FORCE',
  'OpenPGP': 'OPEN_PGP',
  'Prefetch': 'PREFETCH',
  'Gravatar': 'GRAVATAR',
  'Folders': 'FOLDERS',
  'Composer': 'COMPOSER',
  'Contacts': 'CONTACTS',
  'Reload': 'RELOAD',
  'Search': 'SEARCH',
  'SearchAdv': 'SEARCH_ADV',
  'MessageActions': 'MESSAGE_ACTIONS',
  'MessageListActions': 'MESSAGELIST_ACTIONS',
  'AttachmentsActions': 'ATTACHMENTS_ACTIONS',
  'DangerousActions': 'DANGEROUS_ACTIONS',
  'Settings': 'SETTINGS',
  'Help': 'HELP',
  'Themes': 'THEMES',
  'UserBackground': 'USER_BACKGROUND',
  'Sieve': 'SIEVE',
  'Filters': 'FILTERS',
  'AttachmentThumbnails': 'ATTACHMENT_THUMBNAILS',
  'Templates': 'TEMPLATES',
  'AutoLogout': 'AUTOLOGOUT',
  'AdditionalAccounts': 'ADDITIONAL_ACCOUNTS',
  'Identities': 'IDENTITIES'
};
/**
 * @enum {string}
 */

var KeyState = {
  'All': 'all',
  'None': 'none',
  'ContactList': 'contact-list',
  'MessageList': 'message-list',
  'FolderList': 'folder-list',
  'MessageView': 'message-view',
  'Compose': 'compose',
  'Settings': 'settings',
  'Menu': 'menu',
  'PopupComposeOpenPGP': 'compose-open-pgp',
  'PopupMessageOpenPGP': 'message-open-pgp',
  'PopupViewOpenPGP': 'view-open-pgp',
  'PopupKeyboardShortcutsHelp': 'popup-keyboard-shortcuts-help',
  'PopupAsk': 'popup-ask'
};
/**
 * @enum {number}
 */

var FolderType = {
  'Inbox': 10,
  'SentItems': 11,
  'Draft': 12,
  'Trash': 13,
  'Spam': 14,
  'Archive': 15,
  'NotSpam': 80,
  'User': 99
};
/**
 * @enum {number}
 */

var ServerFolderType = {
  'USER': 0,
  'INBOX': 1,
  'SENT': 2,
  'DRAFTS': 3,
  'JUNK': 4,
  'TRASH': 5,
  'IMPORTANT': 10,
  'FLAGGED': 11,
  'ALL': 12
};
/**
 * @enum {string}
 */

var LoginSignMeTypeAsString = {
  'DefaultOff': 'defaultoff',
  'DefaultOn': 'defaulton',
  'Unused': 'unused'
};
/**
 * @enum {number}
 */

var LoginSignMeType = {
  'DefaultOff': 0,
  'DefaultOn': 1,
  'Unused': 2
};
/**
 * @enum {string}
 */

var ComposeType = {
  'Empty': 'empty',
  'Reply': 'reply',
  'ReplyAll': 'replyall',
  'Forward': 'forward',
  'ForwardAsAttachment': 'forward-as-attachment',
  'Draft': 'draft',
  'EditAsNew': 'editasnew'
};
/**
 * @enum {number}
 */

var UploadErrorCode = {
  'Normal': 0,
  'FileIsTooBig': 1,
  'FilePartiallyUploaded': 2,
  'FileNoUploaded': 3,
  'MissingTempFolder': 4,
  'FileOnSaveingError': 5,
  'FileType': 98,
  'Unknown': 99
};
/**
 * @enum {number}
 */

var SetSystemFoldersNotification = {
  'None': 0,
  'Sent': 1,
  'Draft': 2,
  'Spam': 3,
  'Trash': 4,
  'Archive': 5
};
/**
 * @enum {number}
 */

var ClientSideKeyName = {
  'FoldersLashHash': 0,
  'MessagesInboxLastHash': 1,
  'MailBoxListSize': 2,
  'ExpandedFolders': 3,
  'FolderListSize': 4,
  'MessageListSize': 5,
  'LastReplyAction': 6,
  'LastSignMe': 7,
  'ComposeLastIdentityID': 8,
  'MessageHeaderFullInfo': 9,
  'MessageAttachmnetControls': 10
};
/**
 * @enum {number}
 */

var EventKeyCode = {
  'Backspace': 8,
  'Tab': 9,
  'Enter': 13,
  'Esc': 27,
  'PageUp': 33,
  'PageDown': 34,
  'Left': 37,
  'Right': 39,
  'Up': 38,
  'Down': 40,
  'End': 35,
  'Home': 36,
  'Space': 32,
  'Insert': 45,
  'Delete': 46,
  'A': 65,
  'S': 83
};
/**
 * @enum {number}
 */

var MessageSetAction = {
  'SetSeen': 0,
  'UnsetSeen': 1,
  'SetFlag': 2,
  'UnsetFlag': 3
};
/**
 * @enum {number}
 */

var MessageSelectAction = {
  'All': 0,
  'None': 1,
  'Invert': 2,
  'Unseen': 3,
  'Seen': 4,
  'Flagged': 5,
  'Unflagged': 6
};
/**
 * @enum {number}
 */

var DesktopNotification = {
  'Allowed': 0,
  'NotAllowed': 1,
  'Denied': 2,
  'NotSupported': 9
};
/**
 * @enum {number}
 */

var MessagePriority = {
  'Low': 5,
  'Normal': 3,
  'High': 1
};
/**
 * @enum {string}
 */

var EditorDefaultType = {
  'Html': 'Html',
  'Plain': 'Plain',
  'HtmlForced': 'HtmlForced',
  'PlainForced': 'PlainForced'
};
/**
 * @enum {number}
 */

var ServerSecure = {
  'None': 0,
  'SSL': 1,
  'TLS': 2
};
/**
 * @enum {number}
 */

var SearchDateType = {
  'All': -1,
  'Days3': 3,
  'Days7': 7,
  'Month': 30
};
/**
 * @enum {number}
 */

var SaveSettingsStep = {
  'Animate': -2,
  'Idle': -1,
  'TrueResult': 1,
  'FalseResult': 0
};
/**
 * @enum {number}
 */

var Layout = {
  'NoPreview': 0,
  'SidePreview': 1,
  'BottomPreview': 2
};
/**
 * @enum {string}
 */

var FilterConditionField = {
  'From': 'From',
  'Recipient': 'Recipient',
  'Subject': 'Subject',
  'Header': 'Header',
  'Size': 'Size'
};
/**
 * @enum {string}
 */

var FilterConditionType = {
  'Contains': 'Contains',
  'NotContains': 'NotContains',
  'EqualTo': 'EqualTo',
  'NotEqualTo': 'NotEqualTo',
  'Regex': 'Regex',
  'Over': 'Over',
  'Under': 'Under'
};
/**
 * @enum {string}
 */

var FiltersAction = {
  'None': 'None',
  'MoveTo': 'MoveTo',
  'Discard': 'Discard',
  'Vacation': 'Vacation',
  'Reject': 'Reject',
  'Forward': 'Forward'
};
/**
 * @enum {string}
 */

var FilterRulesType = {
  'All': 'All',
  'Any': 'Any'
};
/**
 * @enum {number}
 */

var SignedVerifyStatus = {
  'UnknownPublicKeys': -4,
  'UnknownPrivateKey': -3,
  'Unverified': -2,
  'Error': -1,
  'None': 0,
  'Success': 1
};
/**
 * @enum {number}
 */

var ContactPropertyType = {
  'Unknown': 0,
  'FullName': 10,
  'FirstName': 15,
  'LastName': 16,
  'MiddleName': 16,
  'Nick': 18,
  'NamePrefix': 20,
  'NameSuffix': 21,
  'Email': 30,
  'Phone': 31,
  'Web': 32,
  'Birthday': 40,
  'Facebook': 90,
  'Skype': 91,
  'GitHub': 92,
  'Note': 110,
  'Custom': 250
};
/**
 * @enum {number}
 */

var Magics = {
  'EventWhichMouseMiddle': 3,
  'ifvisibleIdle10s': 10,
  'BitLength2048': 2048,
  'BitLength1024': 1024,
  'Size350px': 350,
  'Size50px': 50,
  'Size20px': 20,
  'Size1px': 1,
  'Time30mInMin': 30,
  'Time60m': 60000 * 60,
  'Time30m': 60000 * 30,
  'Time20m': 60000 * 20,
  'Time15m': 60000 * 15,
  'Time10m': 60000 * 10,
  'Time5m': 60000 * 5,
  'Time3m': 60000 * 3,
  'Time2m': 60000 * 2,
  'Time1m': 60000,
  'Time30s': 30000,
  'Time10s': 10000,
  'Time7s': 7000,
  'Time5s': 5000,
  'Time3s': 3000,
  'Time1s': 1000,
  'Time500ms': 500,
  'Time350ms': 350,
  'Time250ms': 250,
  'Time200ms': 200,
  'Time100ms': 100,
  'Time50ms': 50,
  'Time20ms': 20,
  'Time10ms': 10,
  'Time1ms': 1
};
/**
 * @enum {number}
 */

var Ports = {
  'Imap': 143,
  'ImapSsl': 993,
  'Smtp': 25,
  'SmtpSsl': 465,
  'SmtpStartTls': 587
};
/**
 * @enum {number}
 */

var Notification = {
  'InvalidToken': 101,
  'AuthError': 102,
  'AccessError': 103,
  'ConnectionError': 104,
  'CaptchaError': 105,
  'SocialFacebookLoginAccessDisable': 106,
  'SocialTwitterLoginAccessDisable': 107,
  'SocialGoogleLoginAccessDisable': 108,
  'DomainNotAllowed': 109,
  'AccountNotAllowed': 110,
  'AccountTwoFactorAuthRequired': 120,
  'AccountTwoFactorAuthError': 121,
  'CouldNotSaveNewPassword': 130,
  'CurrentPasswordIncorrect': 131,
  'NewPasswordShort': 132,
  'NewPasswordWeak': 133,
  'NewPasswordForbidden': 134,
  'ContactsSyncError': 140,
  'CantGetMessageList': 201,
  'CantGetMessage': 202,
  'CantDeleteMessage': 203,
  'CantMoveMessage': 204,
  'CantCopyMessage': 205,
  'CantSaveMessage': 301,
  'CantSendMessage': 302,
  'InvalidRecipients': 303,
  'CantSaveFilters': 351,
  'CantGetFilters': 352,
  'FiltersAreNotCorrect': 355,
  'CantCreateFolder': 400,
  'CantRenameFolder': 401,
  'CantDeleteFolder': 402,
  'CantSubscribeFolder': 403,
  'CantUnsubscribeFolder': 404,
  'CantDeleteNonEmptyFolder': 405,
  'CantSaveSettings': 501,
  'CantSavePluginSettings': 502,
  'DomainAlreadyExists': 601,
  'CantInstallPackage': 701,
  'CantDeletePackage': 702,
  'InvalidPluginPackage': 703,
  'UnsupportedPluginPackage': 704,
  'LicensingServerIsUnavailable': 710,
  'LicensingExpired': 711,
  'LicensingBanned': 712,
  'DemoSendMessageError': 750,
  'DemoAccountError': 751,
  'AccountAlreadyExists': 801,
  'AccountDoesNotExist': 802,
  'MailServerError': 901,
  'ClientViewError': 902,
  'InvalidInputArgument': 903,
  'AjaxFalse': 950,
  'AjaxAbort': 951,
  'AjaxParse': 952,
  'AjaxTimeout': 953,
  'UnknownNotification': 999,
  'UnknownError': 999
};

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./dev/External/ko.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ 204);
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ 85);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ 119);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set-timeout */ 33);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ 12);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_interval__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set-interval */ 57);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_interval__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set_interval__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/trim */ 153);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ 17);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! window */ 4);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(window__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! $ */ 7);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n($__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var Opentip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Opentip */ 228);
/* harmony import */ var pikaday__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pikaday */ 229);
/* harmony import */ var pikaday__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pikaday__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Common/Enums */ 0);















var ko = window__WEBPACK_IMPORTED_MODULE_8___default.a.ko,
    $win = $__WEBPACK_IMPORTED_MODULE_10___default()(window__WEBPACK_IMPORTED_MODULE_8___default.a),
    fDisposalTooltipHelper = function fDisposalTooltipHelper(element) {
  ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
    if (element && element.__opentip) {
      element.__opentip.deactivate();
    }
  });
};

ko.bindingHandlers.updateWidth = {
  init: function init(element, fValueAccessor) {
    var $el = $__WEBPACK_IMPORTED_MODULE_10___default()(element),
        fValue = fValueAccessor(),
        fInit = function fInit() {
      fValue($el.width());

      _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_3___default()(function () {
        fValue($el.width());
      }, Common_Enums__WEBPACK_IMPORTED_MODULE_13__["Magics"].Time500ms);
    };

    $win.on('resize', fInit);
    fInit();
    ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
      $win.off('resize', fInit);
    });
  }
};
ko.bindingHandlers.editor = {
  init: function init(element, fValueAccessor) {
    var editor = null;

    var fValue = fValueAccessor(),
        HtmlEditor = __webpack_require__(/*! Common/HtmlEditor */ 226).default,
        fUpdateEditorValue = function fUpdateEditorValue() {
      if (fValue && fValue.__editor) {
        fValue.__editor.setHtmlOrPlain(fValue());
      }
    },
        fUpdateKoValue = function fUpdateKoValue() {
      if (fValue && fValue.__editor) {
        fValue(fValue.__editor.getDataWithHtmlMark());
      }
    },
        fOnReady = function fOnReady() {
      fValue.__editor = editor;
      fUpdateEditorValue();
    };

    if (ko.isObservable(fValue) && HtmlEditor) {
      editor = new HtmlEditor(element, fUpdateKoValue, fOnReady, fUpdateKoValue);
      fValue.__fetchEditorValue = fUpdateKoValue;
      fValue.subscribe(fUpdateEditorValue); // ko.utils.domNodeDisposal.addDisposeCallback(element, () => {
      // });
    }
  }
};
ko.bindingHandlers.json = {
  init: function init(element, fValueAccessor) {
    $__WEBPACK_IMPORTED_MODULE_10___default()(element).text(window__WEBPACK_IMPORTED_MODULE_8___default.a.JSON.stringify(ko.unwrap(fValueAccessor())));
  },
  update: function update(element, fValueAccessor) {
    $__WEBPACK_IMPORTED_MODULE_10___default()(element).text(window__WEBPACK_IMPORTED_MODULE_8___default.a.JSON.stringify(ko.unwrap(fValueAccessor())));
  }
};
ko.bindingHandlers.scrollerShadows = {
  init: function init(element) {
    var limit = 8,
        $el = $__WEBPACK_IMPORTED_MODULE_10___default()(element),
        cont = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()($el).call($el, '[data-scroller-shadows-content]')[0] || null,
        fFunc = ___WEBPACK_IMPORTED_MODULE_9___default.a.throttle(function () {
      $el.toggleClass('scroller-shadow-top', limit < cont.scrollTop).toggleClass('scroller-shadow-bottom', cont.scrollTop + limit < cont.scrollHeight - cont.clientHeight);
    }, 100);

    if (cont) {
      $__WEBPACK_IMPORTED_MODULE_10___default()(cont).on('scroll resize', fFunc);
      $win.on('resize', fFunc);
      ko.utils.domNodeDisposal.addDisposeCallback(cont, function () {
        $__WEBPACK_IMPORTED_MODULE_10___default()(cont).off();
        $win.off('resize', fFunc);
      });
    }
  }
};
ko.bindingHandlers.pikaday = {
  init: function init(element, fValueAccessor, fAllBindingsAccessor, viewModel, bindingContext) {
    ko.bindingHandlers.textInput.init(element, fValueAccessor, fAllBindingsAccessor, viewModel, bindingContext);

    if (pikaday__WEBPACK_IMPORTED_MODULE_12___default.a) {
      element.__pikaday = new pikaday__WEBPACK_IMPORTED_MODULE_12___default.a({
        field: element
      });
    }
  }
};
ko.bindingHandlers.visibleAnimated = {
  init: function init(element, fValueAccessor) {
    var $el = $__WEBPACK_IMPORTED_MODULE_10___default()(element);
    $el.addClass('rl-animated-inited');

    if (ko.unwrap(fValueAccessor())) {
      $el.show();
    } else {
      $el.hide();
    }
  },
  update: function update(element, fValueAccessor) {
    var $el = $__WEBPACK_IMPORTED_MODULE_10___default()(element);

    if (ko.unwrap(fValueAccessor())) {
      $el.addClass('rl-animated-hidden').show();

      ___WEBPACK_IMPORTED_MODULE_9___default.a.delay(function () {
        $el.removeClass('rl-animated-hidden');
      }, 10);
    } else {
      $el.hide().removeClass('rl-animated-hidden');
    }
  }
};
ko.bindingHandlers.tooltip = {
  init: function init(element, fValueAccessor) {
    var $el = $__WEBPACK_IMPORTED_MODULE_10___default()(element),
        fValue = fValueAccessor(),
        isMobile = 'on' === ($el.data('tooltip-mobile') || 'off'),
        isI18N = 'on' === ($el.data('tooltip-i18n') || 'on'),
        Globals = __webpack_require__(/*! Common/Globals */ 6);

    if (!Globals.bMobileDevice || isMobile) {
      var sValue = !ko.isObservable(fValue) && ___WEBPACK_IMPORTED_MODULE_9___default.a.isFunction(fValue) ? fValue() : ko.unwrap(fValue);
      element.__opentip = new Opentip__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"](element, {
        'style': 'rainloopTip',
        'element': element,
        'tipJoint': $el.data('tooltip-join') || 'bottom'
      });
      Globals.dropdownVisibility.subscribe(function (v) {
        if (v) {
          element.__opentip.hide();
        }
      });

      if ('' === sValue) {
        element.__opentip.hide();

        element.__opentip.deactivate();

        element.__opentip.setContent('');
      } else {
        element.__opentip.activate();
      }

      if (isI18N) {
        var Translator = __webpack_require__(/*! Common/Translator */ 9);

        element.__opentip.setContent(Translator.i18n(sValue));

        Translator.trigger.subscribe(function () {
          element.__opentip.setContent(Translator.i18n(sValue));
        });
        Globals.dropdownVisibility.subscribe(function () {
          if (element && element.__opentip) {
            element.__opentip.setContent(Translator.i18n(sValue));
          }
        });
      } else {
        element.__opentip.setContent(sValue);
      }

      $win.on('rl.tooltips.diactivate', function () {
        element.__opentip.hide();

        element.__opentip.deactivate();
      });
      $win.on('rl.tooltips.activate', function () {
        element.__opentip.activate();
      });
    }
  },
  update: function update(element, fValueAccessor) {
    var $el = $__WEBPACK_IMPORTED_MODULE_10___default()(element),
        fValue = fValueAccessor(),
        isMobile = 'on' === ($el.data('tooltip-mobile') || 'off'),
        isI18N = 'on' === ($el.data('tooltip-i18n') || 'on'),
        Globals = __webpack_require__(/*! Common/Globals */ 6);

    if ((!Globals.bMobileDevice || isMobile) && element.__opentip) {
      var sValue = !ko.isObservable(fValue) && ___WEBPACK_IMPORTED_MODULE_9___default.a.isFunction(fValue) ? fValue() : ko.unwrap(fValue);

      if (sValue) {
        element.__opentip.setContent(isI18N ? __webpack_require__(/*! Common/Translator */ 9).i18n(sValue) : sValue);

        element.__opentip.activate();
      } else {
        element.__opentip.hide();

        element.__opentip.deactivate();

        element.__opentip.setContent('');
      }
    }
  }
};
ko.bindingHandlers.tooltipErrorTip = {
  init: function init(element) {
    var $el = $__WEBPACK_IMPORTED_MODULE_10___default()(element);
    element.__opentip = new Opentip__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"](element, {
      style: 'rainloopErrorTip',
      hideOn: 'mouseout click',
      element: element,
      tipJoint: $el.data('tooltip-join') || 'top'
    });

    element.__opentip.deactivate();

    $__WEBPACK_IMPORTED_MODULE_10___default()(window__WEBPACK_IMPORTED_MODULE_8___default.a.document).on('click', function () {
      if (element && element.__opentip) {
        element.__opentip.hide();
      }
    });
    fDisposalTooltipHelper(element);
  },
  update: function update(element, fValueAccessor) {
    var $el = $__WEBPACK_IMPORTED_MODULE_10___default()(element),
        fValue = fValueAccessor(),
        value = !ko.isObservable(fValue) && ___WEBPACK_IMPORTED_MODULE_9___default.a.isFunction(fValue) ? fValue() : ko.unwrap(fValue),
        openTips = element.__opentip;

    if (openTips) {
      if ('' === value) {
        openTips.hide();
        openTips.deactivate();
        openTips.setContent('');
      } else {
        ___WEBPACK_IMPORTED_MODULE_9___default.a.delay(function () {
          if ($el.is(':visible')) {
            openTips.setContent(value);
            openTips.activate();
            openTips.show();
          } else {
            openTips.hide();
            openTips.deactivate();
            openTips.setContent('');
          }
        }, Common_Enums__WEBPACK_IMPORTED_MODULE_13__["Magics"].Time100ms);
      }
    }
  }
};
ko.bindingHandlers.registrateBootstrapDropdown = {
  init: function init(element) {
    var Globals = __webpack_require__(/*! Common/Globals */ 6);

    if (Globals && Globals.data.aBootstrapDropdowns) {
      Globals.data.aBootstrapDropdowns.push($__WEBPACK_IMPORTED_MODULE_10___default()(element));
      $__WEBPACK_IMPORTED_MODULE_10___default()(element).click(function () {
        __webpack_require__(/*! Common/Utils */ 2).detectDropdownVisibility();
      }); // ko.utils.domNodeDisposal.addDisposeCallback(element, () => {
      // });
    }
  }
};
ko.bindingHandlers.openDropdownTrigger = {
  update: function update(element, fValueAccessor) {
    if (ko.unwrap(fValueAccessor())) {
      var $el = $__WEBPACK_IMPORTED_MODULE_10___default()(element);

      if (!$el.hasClass('open')) {
        _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()($el).call($el, '.dropdown-toggle').dropdown('toggle');
      }

      _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()($el).call($el, '.dropdown-toggle').focus();

      __webpack_require__(/*! Common/Utils */ 2).detectDropdownVisibility();

      fValueAccessor()(false);
    }
  }
};
ko.bindingHandlers.dropdownCloser = {
  init: function init(element) {
    $__WEBPACK_IMPORTED_MODULE_10___default()(element).closest('.dropdown').on('click', '.e-item', function () {
      $__WEBPACK_IMPORTED_MODULE_10___default()(element).dropdown('toggle');
    });
  }
};
ko.bindingHandlers.popover = {
  init: function init(element, fValueAccessor) {
    $__WEBPACK_IMPORTED_MODULE_10___default()(element).popover(ko.unwrap(fValueAccessor()));
    ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
      $__WEBPACK_IMPORTED_MODULE_10___default()(element).popover('destroy');
    });
  }
};
ko.bindingHandlers.csstext = {};

ko.bindingHandlers.csstext.init = ko.bindingHandlers.csstext.update = function (element, fValueAccessor) {
  if (element && element.styleSheet && 'undefined' !== typeof element.styleSheet.cssText) {
    element.styleSheet.cssText = ko.unwrap(fValueAccessor());
  } else {
    $__WEBPACK_IMPORTED_MODULE_10___default()(element).text(ko.unwrap(fValueAccessor()));
  }
};

ko.bindingHandlers.resizecrop = {
  init: function init(element) {
    $__WEBPACK_IMPORTED_MODULE_10___default()(element).addClass('resizecrop').resizecrop({
      'width': '100',
      'height': '100',
      'wrapperCSS': {
        'border-radius': '10px'
      }
    });
  },
  update: function update(element, fValueAccessor) {
    fValueAccessor()();
    $__WEBPACK_IMPORTED_MODULE_10___default()(element).resizecrop({
      'width': '100',
      'height': '100'
    });
  }
};
ko.bindingHandlers.onKeyDown = {
  init: function init(element, fValueAccessor, fAllBindingsAccessor, viewModel) {
    $__WEBPACK_IMPORTED_MODULE_10___default()(element).on('keydown.koOnKeyDown', function (event) {
      if (event) {
        return fValueAccessor().call(viewModel, event);
      }

      return true;
    });
    ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
      $__WEBPACK_IMPORTED_MODULE_10___default()(element).off('keydown.koOnKeyDown');
    });
  }
};
ko.bindingHandlers.onEnter = {
  init: function init(element, fValueAccessor, fAllBindingsAccessor, viewModel) {
    $__WEBPACK_IMPORTED_MODULE_10___default()(element).on('keypress.koOnEnter', function (event) {
      if (event && 13 === window__WEBPACK_IMPORTED_MODULE_8___default.a.parseInt(event.keyCode, 10)) {
        $__WEBPACK_IMPORTED_MODULE_10___default()(element).trigger('change');
        fValueAccessor().call(viewModel);
      }
    });
    ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
      $__WEBPACK_IMPORTED_MODULE_10___default()(element).off('keypress.koOnEnter');
    });
  }
};
ko.bindingHandlers.onSpace = {
  init: function init(element, fValueAccessor, fAllBindingsAccessor, viewModel) {
    $__WEBPACK_IMPORTED_MODULE_10___default()(element).on('keyup.koOnSpace', function (event) {
      if (event && 32 === window__WEBPACK_IMPORTED_MODULE_8___default.a.parseInt(event.keyCode, 10)) {
        fValueAccessor().call(viewModel, event);
      }
    });
    ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
      $__WEBPACK_IMPORTED_MODULE_10___default()(element).off('keyup.koOnSpace');
    });
  }
};
ko.bindingHandlers.onTab = {
  init: function init(element, fValueAccessor, fAllBindingsAccessor, viewModel) {
    $__WEBPACK_IMPORTED_MODULE_10___default()(element).on('keydown.koOnTab', function (event) {
      if (event && 9 === window__WEBPACK_IMPORTED_MODULE_8___default.a.parseInt(event.keyCode, 10)) {
        return fValueAccessor().call(viewModel, !!event.shiftKey);
      }

      return true;
    });
    ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
      $__WEBPACK_IMPORTED_MODULE_10___default()(element).off('keydown.koOnTab');
    });
  }
};
ko.bindingHandlers.onEsc = {
  init: function init(element, fValueAccessor, fAllBindingsAccessor, viewModel) {
    $__WEBPACK_IMPORTED_MODULE_10___default()(element).on('keyup.koOnEsc', function (event) {
      if (event && 27 === window__WEBPACK_IMPORTED_MODULE_8___default.a.parseInt(event.keyCode, 10)) {
        $__WEBPACK_IMPORTED_MODULE_10___default()(element).trigger('change');
        fValueAccessor().call(viewModel);
      }
    });
    ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
      $__WEBPACK_IMPORTED_MODULE_10___default()(element).off('keyup.koOnEsc');
    });
  }
};
ko.bindingHandlers.clickOnTrue = {
  update: function update(element, fValueAccessor) {
    if (ko.unwrap(fValueAccessor())) {
      $__WEBPACK_IMPORTED_MODULE_10___default()(element).click();
    }
  }
};
ko.bindingHandlers.modal = {
  init: function init(element, fValueAccessor) {
    var _context;

    var Globals = __webpack_require__(/*! Common/Globals */ 6),
        Utils = __webpack_require__(/*! Common/Utils */ 2);

    _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(_context = $__WEBPACK_IMPORTED_MODULE_10___default()(element).toggleClass('fade', !Globals.bMobileDevice).modal({
      'keyboard': false,
      'show': ko.unwrap(fValueAccessor())
    }).on('shown.koModal', Utils.windowResizeCallback)).call(_context, '.close').on('click.koModal', function () {
      fValueAccessor()(false);
    });

    ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
      var _context2;

      _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = $__WEBPACK_IMPORTED_MODULE_10___default()(element).off('shown.koModal')).call(_context2, '.close').off('click.koModal');
    });
  },
  update: function update(element, fValueAccessor) {
    var Globals = __webpack_require__(/*! Common/Globals */ 6);

    $__WEBPACK_IMPORTED_MODULE_10___default()(element).modal(ko.unwrap(fValueAccessor()) ? 'show' : 'hide');

    if (Globals.$html.hasClass('rl-anim')) {
      Globals.$html.addClass('rl-modal-animation');

      ___WEBPACK_IMPORTED_MODULE_9___default.a.delay(function () {
        Globals.$html.removeClass('rl-modal-animation');
      }, Common_Enums__WEBPACK_IMPORTED_MODULE_13__["Magics"].Time500ms);
    }
  }
};
ko.bindingHandlers.moment = {
  init: function init(element, fValueAccessor) {
    __webpack_require__(/*! Common/Momentor */ 61).momentToNode($__WEBPACK_IMPORTED_MODULE_10___default()(element).addClass('moment').data('moment-time', ko.unwrap(fValueAccessor())));
  },
  update: function update(element, fValueAccessor) {
    __webpack_require__(/*! Common/Momentor */ 61).momentToNode($__WEBPACK_IMPORTED_MODULE_10___default()(element).data('moment-time', ko.unwrap(fValueAccessor())));
  }
};
ko.bindingHandlers.i18nInit = {
  init: function init(element) {
    __webpack_require__(/*! Common/Translator */ 9).i18nToNodes(element);
  }
};
ko.bindingHandlers.translatorInit = {
  init: function init(element) {
    __webpack_require__(/*! Common/Translator */ 9).i18nToNodes(element);
  }
};
ko.bindingHandlers.i18nUpdate = {
  update: function update(element, fValueAccessor) {
    ko.unwrap(fValueAccessor());

    __webpack_require__(/*! Common/Translator */ 9).i18nToNodes(element);
  }
};
ko.bindingHandlers.link = {
  update: function update(element, fValueAccessor) {
    $__WEBPACK_IMPORTED_MODULE_10___default()(element).attr('href', ko.unwrap(fValueAccessor()));
  }
};
ko.bindingHandlers.title = {
  update: function update(element, fValueAccessor) {
    $__WEBPACK_IMPORTED_MODULE_10___default()(element).attr('title', ko.unwrap(fValueAccessor()));
  }
};
ko.bindingHandlers.textF = {
  init: function init(element, fValueAccessor) {
    $__WEBPACK_IMPORTED_MODULE_10___default()(element).text(ko.unwrap(fValueAccessor()));
  }
};
ko.bindingHandlers.initDom = {
  init: function init(element, fValueAccessor) {
    fValueAccessor()(element);
  }
};
ko.bindingHandlers.initFixedTrigger = {
  init: function init(element, fValueAccessor) {
    var values = ko.unwrap(fValueAccessor()),
        $el = $__WEBPACK_IMPORTED_MODULE_10___default()(element),
        top = values[1] || 0;
    var $container = $__WEBPACK_IMPORTED_MODULE_10___default()(values[0] || null);
    $container = $container[0] ? $container : null;

    if ($container) {
      $win.resize(function () {
        var offset = $container ? $container.offset() : null;

        if (offset && offset.top) {
          $el.css('top', offset.top + top);
        }
      });
    }
  }
};
ko.bindingHandlers.initResizeTrigger = {
  init: function init(element, fValueAccessor) {
    var values = ko.unwrap(fValueAccessor());
    $__WEBPACK_IMPORTED_MODULE_10___default()(element).css({
      'height': values[1],
      'min-height': values[1]
    });
  },
  update: function update(oElement, fValueAccessor) {
    var Utils = __webpack_require__(/*! Common/Utils */ 2),
        Globals = __webpack_require__(/*! Common/Globals */ 6),
        values = ko.unwrap(fValueAccessor());

    var value = Utils.pInt(values[1]),
        size = 0,
        offset = $__WEBPACK_IMPORTED_MODULE_10___default()(oElement).offset().top;

    if (0 < offset) {
      offset += Utils.pInt(values[2]);
      size = Globals.$win.height() - offset;

      if (value < size) {
        value = size;
      }

      $__WEBPACK_IMPORTED_MODULE_10___default()(oElement).css({
        'height': value,
        'min-height': value
      });
    }
  }
};
ko.bindingHandlers.appendDom = {
  update: function update(element, fValueAccessor) {
    $__WEBPACK_IMPORTED_MODULE_10___default()(element).hide().empty().append(ko.unwrap(fValueAccessor())).show();
  }
};
ko.bindingHandlers.draggable = {
  init: function init(element, fValueAccessor, fAllBindingsAccessor) {
    var Globals = __webpack_require__(/*! Common/Globals */ 6),
        Utils = __webpack_require__(/*! Common/Utils */ 2);

    if (!Globals.bMobileDevice) {
      var triggerZone = 100,
          scrollSpeed = 3,
          fAllValueFunc = fAllBindingsAccessor(),
          droppableSelector = fAllValueFunc && fAllValueFunc.droppableSelector ? fAllValueFunc.droppableSelector : '',
          conf = {
        distance: 20,
        handle: '.dragHandle',
        cursorAt: {
          top: 22,
          left: 3
        },
        refreshPositions: true,
        scroll: true,
        drag: null,
        stop: null,
        helper: null
      };

      if (droppableSelector) {
        conf.drag = function (event) {
          $__WEBPACK_IMPORTED_MODULE_10___default()(droppableSelector).each(function () {
            var $this = $__WEBPACK_IMPORTED_MODULE_10___default()(this),
                // eslint-disable-line no-invalid-this
            offset = $this.offset(),
                bottomPos = offset.top + $this.height();
            window__WEBPACK_IMPORTED_MODULE_8___default.a.clearInterval($this.data('timerScroll'));
            $this.data('timerScroll', false);

            if (event.pageX >= offset.left && event.pageX <= offset.left + $this.width()) {
              if (event.pageY >= bottomPos - triggerZone && event.pageY <= bottomPos) {
                var moveUp = function moveUp() {
                  $this.scrollTop($this.scrollTop() + scrollSpeed);
                  Utils.windowResize();
                };

                $this.data('timerScroll', _babel_runtime_corejs3_core_js_stable_set_interval__WEBPACK_IMPORTED_MODULE_5___default()(moveUp, 10));
                moveUp();
              }

              if (event.pageY >= offset.top && event.pageY <= offset.top + triggerZone) {
                var moveDown = function moveDown() {
                  $this.scrollTop($this.scrollTop() - scrollSpeed);
                  Utils.windowResize();
                };

                $this.data('timerScroll', _babel_runtime_corejs3_core_js_stable_set_interval__WEBPACK_IMPORTED_MODULE_5___default()(moveDown, 10));
                moveDown();
              }
            }
          });
        };

        conf.stop = function () {
          $__WEBPACK_IMPORTED_MODULE_10___default()(droppableSelector).each(function () {
            var $this = $__WEBPACK_IMPORTED_MODULE_10___default()(this); // eslint-disable-line no-invalid-this

            window__WEBPACK_IMPORTED_MODULE_8___default.a.clearInterval($this.data('timerScroll'));
            $this.data('timerScroll', false);
          });
        };
      }

      conf.helper = function (event) {
        return fValueAccessor()(event && event.target ? ko.dataFor(event.target) : null);
      };

      $__WEBPACK_IMPORTED_MODULE_10___default()(element).draggable(conf).on('mousedown.koDraggable', function () {
        Utils.removeInFocus();
      });
      ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
        $__WEBPACK_IMPORTED_MODULE_10___default()(element).off('mousedown.koDraggable').draggable('destroy');
      });
    }
  }
};
ko.bindingHandlers.droppable = {
  init: function init(element, fValueAccessor, fAllBindingsAccessor) {
    var Globals = __webpack_require__(/*! Common/Globals */ 6);

    if (!Globals.bMobileDevice) {
      var fValueFunc = fValueAccessor(),
          fAllValueFunc = fAllBindingsAccessor(),
          fOverCallback = fAllValueFunc && fAllValueFunc.droppableOver ? fAllValueFunc.droppableOver : null,
          fOutCallback = fAllValueFunc && fAllValueFunc.droppableOut ? fAllValueFunc.droppableOut : null,
          conf = {
        tolerance: 'pointer',
        hoverClass: 'droppableHover',
        drop: null,
        over: null,
        out: null
      };

      if (fValueFunc) {
        conf.drop = function (event, ui) {
          fValueFunc(event, ui);
        };

        if (fOverCallback) {
          conf.over = function (event, ui) {
            fOverCallback(event, ui);
          };
        }

        if (fOutCallback) {
          conf.out = function (event, ui) {
            fOutCallback(event, ui);
          };
        }

        $__WEBPACK_IMPORTED_MODULE_10___default()(element).droppable(conf);
        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
          $__WEBPACK_IMPORTED_MODULE_10___default()(element).droppable('destroy');
        });
      }
    }
  }
};
ko.bindingHandlers.nano = {
  init: function init(element) {
    var Globals = __webpack_require__(/*! Common/Globals */ 6),
        Settings = __webpack_require__(/*! Storage/Settings */ 5);

    if (!Globals.bDisableNanoScroll && !Settings.appSettingsGet('useNativeScrollbars')) {
      $__WEBPACK_IMPORTED_MODULE_10___default()(element).addClass('nano').nanoScroller({
        iOSNativeScrolling: false,
        preventPageScrolling: true
      });
    }
  }
};
ko.bindingHandlers.saveTrigger = {
  init: function init(element) {
    var $el = $__WEBPACK_IMPORTED_MODULE_10___default()(element);
    $el.data('save-trigger-type', $el.is('input[type=text],input[type=email],input[type=password],select,textarea') ? 'input' : 'custom');

    if ('custom' === $el.data('save-trigger-type')) {
      $el.append('&nbsp;&nbsp;' + '<i class="icon-spinner animated"></i>' + '<i class="icon-remove error"></i>' + '<i class="icon-ok success"></i>').addClass('settings-saved-trigger');
    } else {
      $el.addClass('settings-saved-trigger-input');
    }
  },
  update: function update(element, fValueAccessor) {
    var _context3, _context4, _context5, _context6;

    var value = ko.unwrap(fValueAccessor()),
        $el = $__WEBPACK_IMPORTED_MODULE_10___default()(element);

    if ('custom' === $el.data('save-trigger-type')) {
      switch (value.toString()) {
        case '1':
          _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(_context3 = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()($el).call($el, '.animated,.error').hide().removeClass('visible').end()).call(_context3, '.success').show().addClass('visible');

          break;

        case '0':
          _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(_context4 = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()($el).call($el, '.animated,.success').hide().removeClass('visible').end()).call(_context4, '.error').show().addClass('visible');

          break;

        case '-2':
          _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(_context5 = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()($el).call($el, '.error,.success').hide().removeClass('visible').end()).call(_context5, '.animated').show().addClass('visible');

          break;

        default:
          _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(_context6 = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()($el).call($el, '.animated').hide().end()).call(_context6, '.error,.success').removeClass('visible');

          break;
      }
    } else {
      switch (value.toString()) {
        case '1':
          $el.addClass('success').removeClass('error');
          break;

        case '0':
          $el.addClass('error').removeClass('success');
          break;

        case '-2':
          break;

        default:
          $el.removeClass('error success');
          break;
      }
    }
  }
};
ko.bindingHandlers.emailsTags = {
  init: function init(element, fValueAccessor, fAllBindingsAccessor) {
    var Utils = __webpack_require__(/*! Common/Utils */ 2),
        EmailModel = __webpack_require__(/*! Model/Email */ 82).default,
        $el = $__WEBPACK_IMPORTED_MODULE_10___default()(element),
        fValue = fValueAccessor(),
        fAllBindings = fAllBindingsAccessor(),
        fAutoCompleteSource = fAllBindings.autoCompleteSource || null,
        inputDelimiters = [',', ';', '\n'],
        fFocusCallback = function fFocusCallback(value) {
      if (fValue && fValue.focused) {
        fValue.focused(!!value);
      }
    };

    $el.inputosaurus({
      parseOnBlur: true,
      allowDragAndDrop: true,
      focusCallback: fFocusCallback,
      inputDelimiters: inputDelimiters,
      autoCompleteSource: fAutoCompleteSource,
      splitHook: function splitHook(value) {
        var v = _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_6___default()(Utils).call(Utils, value);

        if (v && -1 < inputDelimiters.indexOf(v.substr(-1))) {
          return EmailModel.splitEmailLine(value);
        }

        return null;
      },
      parseHook: function parseHook(input) {
        return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_7___default()(___WEBPACK_IMPORTED_MODULE_9___default.a).call(___WEBPACK_IMPORTED_MODULE_9___default.a, ___WEBPACK_IMPORTED_MODULE_9___default.a.flatten(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_7___default()(___WEBPACK_IMPORTED_MODULE_9___default.a).call(___WEBPACK_IMPORTED_MODULE_9___default.a, input, function (inputValue) {
          var values = EmailModel.parseEmailLine(inputValue);
          return values.length ? values : inputValue;
        })), function (item) {
          return ___WEBPACK_IMPORTED_MODULE_9___default.a.isObject(item) ? [item.toLine(false), item] : [item, null];
        });
      },
      change: function change(event) {
        $el.data('EmailsTagsValue', event.target.value);
        fValue(event.target.value);
      }
    });

    if (fValue && fValue.focused && fValue.focused.subscribe) {
      fValue.focused.subscribe(function (value) {
        $el.inputosaurus(value ? 'focus' : 'blur');
      });
    }
  },
  update: function update(element, fValueAccessor) {
    var $oEl = $__WEBPACK_IMPORTED_MODULE_10___default()(element),
        fValue = fValueAccessor(),
        value = ko.unwrap(fValue);

    if ($oEl.data('EmailsTagsValue') !== value) {
      $oEl.val(value);
      $oEl.data('EmailsTagsValue', value);
      $oEl.inputosaurus('refresh');
    }
  }
};
ko.bindingHandlers.command = {
  init: function init(element, fValueAccessor, fAllBindingsAccessor, viewModel, bindingContext) {
    var jqElement = $__WEBPACK_IMPORTED_MODULE_10___default()(element),
        command = fValueAccessor();

    if (!command || !command.isCommand) {
      throw new Error('Value should be a command');
    }

    if (!command.enabled) {
      command.enabled = ko.observable(true);
    }

    if (!command.canExecute) {
      var __realCanExecute = command.__realCanExecute;

      if (___WEBPACK_IMPORTED_MODULE_9___default.a.isFunction(__realCanExecute)) {
        command.canExecute = ko.computed(function () {
          return command.enabled() && __realCanExecute.call(viewModel, viewModel);
        });
      } else {
        command.canExecute = ko.computed(function () {
          return command.enabled() && !!__realCanExecute;
        });
      }
    }

    jqElement.addClass('command');
    ko.bindingHandlers[jqElement.is('form') ? 'submit' : 'click'].init(element, fValueAccessor, fAllBindingsAccessor, viewModel, bindingContext);
  },
  update: function update(element, fValueAccessor) {
    var jqElement = $__WEBPACK_IMPORTED_MODULE_10___default()(element),
        command = fValueAccessor();
    var result = command.enabled();
    jqElement.toggleClass('command-not-enabled', !result);

    if (result) {
      result = command.canExecute();
      jqElement.toggleClass('command-can-not-be-execute', !result);
    }

    jqElement.toggleClass('command-disabled disable disabled', !result).toggleClass('no-disabled', !!result);

    if (jqElement.is('input') || jqElement.is('button')) {
      jqElement.prop('disabled', !result);
    }
  }
}; // extenders

ko.extenders.trimmer = function (target) {
  var Utils = __webpack_require__(/*! Common/Utils */ 2),
      result = ko.computed({
    read: target,
    write: function write(newValue) {
      target(_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_6___default()(Utils).call(Utils, newValue.toString()));
    }
  });

  result(target());
  return result;
};

ko.extenders.posInterer = function (target, defaultVal) {
  var Utils = __webpack_require__(/*! Common/Utils */ 2),
      result = ko.computed({
    read: target,
    write: function write(newValue) {
      var val = Utils.pInt(newValue.toString(), defaultVal);

      if (0 >= val) {
        val = defaultVal;
      }

      if (val === target() && '' + val !== '' + newValue) {
        target(val + 1);
      }

      target(val);
    }
  });

  result(target());
  return result;
};

ko.extenders.limitedList = function (target, limitedList) {
  var Utils = __webpack_require__(/*! Common/Utils */ 2),
      result = ko.computed({
    read: target,
    write: function write(newValue) {
      var currentValue = ko.unwrap(target),
          list = ko.unwrap(limitedList);

      if (Utils.isNonEmptyArray(list)) {
        if (-1 < Utils.inArray(newValue, list)) {
          target(newValue);
        } else if (-1 < Utils.inArray(currentValue, list)) {
          target(currentValue + ' ');
          target(currentValue);
        } else {
          target(list[0] + ' ');
          target(list[0]);
        }
      } else {
        target('');
      }
    }
  }).extend({
    notify: 'always'
  });

  result(target());

  if (!result.valueHasMutated) {
    result.valueHasMutated = function () {
      target.valueHasMutated();
    };
  }

  return result;
};

ko.extenders.reversible = function (target) {
  var value = target();

  target.commit = function () {
    value = target();
  };

  target.reverse = function () {
    target(value);
  };

  target.commitedValue = function () {
    return value;
  };

  return target;
};

ko.extenders.toggleSubscribe = function (target, options) {
  target.subscribe(options[1], options[0], 'beforeChange');
  target.subscribe(options[2], options[0]);
  return target;
};

ko.extenders.toggleSubscribeProperty = function (target, options) {
  var prop = options[1];

  if (prop) {
    target.subscribe(function (prev) {
      if (prev && prev[prop]) {
        prev[prop](false);
      }
    }, options[0], 'beforeChange');
    target.subscribe(function (next) {
      if (next && next[prop]) {
        next[prop](true);
      }
    }, options[0]);
  }

  return target;
};

ko.extenders.falseTimeout = function (target, option) {
  target.iFalseTimeoutTimeout = 0;
  target.subscribe(function (value) {
    if (value) {
      window__WEBPACK_IMPORTED_MODULE_8___default.a.clearTimeout(target.iFalseTimeoutTimeout);
      target.iFalseTimeoutTimeout = _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_3___default()(function () {
        target(false);
        target.iFalseTimeoutTimeout = 0;
      }, __webpack_require__(/*! Common/Utils */ 2).pInt(option));
    }
  });
  return target;
};

ko.extenders.specialThrottle = function (target, option) {
  target.iSpecialThrottleTimeoutValue = __webpack_require__(/*! Common/Utils */ 2).pInt(option);

  if (0 < target.iSpecialThrottleTimeoutValue) {
    target.iSpecialThrottleTimeout = 0;
    target.valueForRead = ko.observable(!!target()).extend({
      throttle: 10
    });
    return ko.computed({
      read: target.valueForRead,
      write: function write(bValue) {
        if (bValue) {
          target.valueForRead(bValue);
        } else {
          if (target.valueForRead()) {
            window__WEBPACK_IMPORTED_MODULE_8___default.a.clearTimeout(target.iSpecialThrottleTimeout);
            target.iSpecialThrottleTimeout = _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_3___default()(function () {
              target.valueForRead(false);
              target.iSpecialThrottleTimeout = 0;
            }, target.iSpecialThrottleTimeoutValue);
          } else {
            target.valueForRead(bValue);
          }
        }
      }
    });
  }

  return target;
};

ko.extenders.idleTrigger = function (target) {
  target.trigger = ko.observable(Common_Enums__WEBPACK_IMPORTED_MODULE_13__["SaveSettingsStep"].Idle);
  return target;
}; // functions


ko.observable.fn.idleTrigger = function () {
  return this.extend({
    'idleTrigger': true
  });
};

ko.observable.fn.validateNone = function () {
  this.hasError = ko.observable(false);
  return this;
};

ko.observable.fn.validateEmail = function () {
  var _this = this;

  this.hasError = ko.observable(false);
  this.subscribe(function (value) {
    _this.hasError('' !== value && !/^[^@\s]+@[^@\s]+$/.test(value));
  });
  this.valueHasMutated();
  return this;
};

ko.observable.fn.validateSimpleEmail = function () {
  var _this2 = this;

  this.hasError = ko.observable(false);
  this.subscribe(function (value) {
    _this2.hasError('' !== value && !/^.+@.+$/.test(value));
  });
  this.valueHasMutated();
  return this;
};

ko.observable.fn.deleteAccessHelper = function () {
  this.extend({
    falseTimeout: 3000
  }).extend({
    toggleSubscribeProperty: [this, 'deleteAccess']
  });
  return this;
};

ko.observable.fn.validateFunc = function (fFunc) {
  var _this3 = this;

  this.hasFuncError = ko.observable(false);

  if (___WEBPACK_IMPORTED_MODULE_9___default.a.isFunction(fFunc)) {
    this.subscribe(function (value) {
      _this3.hasFuncError(!fFunc(value));
    });
    this.valueHasMutated();
  }

  return this;
};

/* harmony default export */ __webpack_exports__["a"] = (ko);

/***/ }),
/* 2 */
/*!*****************************!*\
  !*** ./dev/Common/Utils.js ***!
  \*****************************/
/*! exports provided: trim, inArray, isArray, isObject, isFunc, isUnd, isNull, has, bind, noop, noopTrue, noopFalse, jassl, silentTryCatch, isNormal, isPosNumeric, pInt, pString, pBool, boolToAjax, isNonEmptyArray, encodeURIComponent, decodeURIComponent, decodeURI, encodeURI, simpleQueryParser, fakeMd5, encodeHtml, splitPlainText, timeOutAction, timeOutActionSecond, deModule, inFocus, removeInFocus, removeSelection, replySubjectAdd, roundNumber, friendlySize, log, delegateRun, killCtrlACtrlS, createCommandLegacy, convertThemeName, quoteName, microtime, timestamp, convertLangName, draggablePlace, defautOptionsAfterRender, clearBqSwitcher, previewMessage, settingsSaveHelperFunction, settingsSaveHelperSimpleFunction, settingsSaveHelperSubscribeFunction, findEmailAndLinks, htmlToPlain, plainToHtml, folderListOptionsBuilder, selectElement, detectDropdownVisibility, triggerAutocompleteInputChange, getConfigurationFromScriptTag, disposeOne, disposeObject, delegateRunOnDestroy, appendStyles, changeTheme, computedPagenatorHelper, getFileExtension, mimeContentType, isTransparent, getRealHeight, resizeAndCrop, mailToHelper, domReady, windowResize, windowResizeCallback */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return trim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inArray", function() { return inArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunc", function() { return isFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnd", function() { return isUnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noopTrue", function() { return noopTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noopFalse", function() { return noopFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "silentTryCatch", function() { return silentTryCatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNormal", function() { return isNormal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPosNumeric", function() { return isPosNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pInt", function() { return pInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pString", function() { return pString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pBool", function() { return pBool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boolToAjax", function() { return boolToAjax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonEmptyArray", function() { return isNonEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeURIComponent", function() { return encodeURIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeURIComponent", function() { return decodeURIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeURI", function() { return decodeURI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeURI", function() { return encodeURI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleQueryParser", function() { return simpleQueryParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeMd5", function() { return fakeMd5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeHtml", function() { return encodeHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitPlainText", function() { return splitPlainText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeOutAction", function() { return timeOutAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeOutActionSecond", function() { return timeOutActionSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deModule", function() { return deModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inFocus", function() { return inFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeInFocus", function() { return removeInFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSelection", function() { return removeSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replySubjectAdd", function() { return replySubjectAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundNumber", function() { return roundNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "friendlySize", function() { return friendlySize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delegateRun", function() { return delegateRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "killCtrlACtrlS", function() { return killCtrlACtrlS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCommandLegacy", function() { return createCommandLegacy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertThemeName", function() { return convertThemeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quoteName", function() { return quoteName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "microtime", function() { return microtime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestamp", function() { return timestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertLangName", function() { return convertLangName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draggablePlace", function() { return draggablePlace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defautOptionsAfterRender", function() { return defautOptionsAfterRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearBqSwitcher", function() { return clearBqSwitcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previewMessage", function() { return previewMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsSaveHelperFunction", function() { return settingsSaveHelperFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsSaveHelperSimpleFunction", function() { return settingsSaveHelperSimpleFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsSaveHelperSubscribeFunction", function() { return settingsSaveHelperSubscribeFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findEmailAndLinks", function() { return findEmailAndLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlToPlain", function() { return htmlToPlain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plainToHtml", function() { return plainToHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "folderListOptionsBuilder", function() { return folderListOptionsBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectElement", function() { return selectElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectDropdownVisibility", function() { return detectDropdownVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerAutocompleteInputChange", function() { return triggerAutocompleteInputChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigurationFromScriptTag", function() { return getConfigurationFromScriptTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disposeOne", function() { return disposeOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disposeObject", function() { return disposeObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delegateRunOnDestroy", function() { return delegateRunOnDestroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendStyles", function() { return appendStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTheme", function() { return changeTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computedPagenatorHelper", function() { return computedPagenatorHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileExtension", function() { return getFileExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeContentType", function() { return mimeContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTransparent", function() { return isTransparent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRealHeight", function() { return getRealHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeAndCrop", function() { return resizeAndCrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mailToHelper", function() { return mailToHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domReady", function() { return domReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowResize", function() { return windowResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowResizeCallback", function() { return windowResizeCallback; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ 85);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ 119);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ 45);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ 203);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ 59);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ 77);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ 224);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ 204);
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ 48);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/trim */ 153);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set-timeout */ 33);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ 12);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ 175);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/values */ 122);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/reduce */ 227);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! window */ 4);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(window__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! $ */ 7);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n($__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Autolinker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! Autolinker */ 230);
/* harmony import */ var Autolinker__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(Autolinker__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var Common_Globals__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! Common/Globals */ 6);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Common_Mime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! Common/Mime */ 231);
/* harmony import */ var Common_Jassl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! Common/Jassl */ 121);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jassl", function() { return Common_Jassl__WEBPACK_IMPORTED_MODULE_23__["a"]; });


























var trim = _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_9___default()($__WEBPACK_IMPORTED_MODULE_16___default.a);

var inArray = $__WEBPACK_IMPORTED_MODULE_16___default.a.inArray;
var isArray = ___WEBPACK_IMPORTED_MODULE_17___default.a.isArray;
var isObject = ___WEBPACK_IMPORTED_MODULE_17___default.a.isObject;
var isFunc = ___WEBPACK_IMPORTED_MODULE_17___default.a.isFunction;
var isUnd = ___WEBPACK_IMPORTED_MODULE_17___default.a.isUndefined;
var isNull = ___WEBPACK_IMPORTED_MODULE_17___default.a.isNull;
var has = ___WEBPACK_IMPORTED_MODULE_17___default.a.has;
var bind = ___WEBPACK_IMPORTED_MODULE_17___default.a.bind;

var noop = function noop() {}; // eslint-disable-line no-empty-function


var noopTrue = function noopTrue() {
  return true;
};

var noopFalse = function noopFalse() {
  return false;
};


/**
 * @param {Function} func
 */

function silentTryCatch(func) {
  try {
    func();
  } catch (e) {} // eslint-disable-line no-empty

}
/**
 * @param {*} value
 * @returns {boolean}
 */

function isNormal(value) {
  return !isUnd(value) && !isNull(value);
}
/**
 * @param {(string|number)} value
 * @param {boolean=} includeZero = true
 * @returns {boolean}
 */

function isPosNumeric(value, includeZero) {
  if (includeZero === void 0) {
    includeZero = true;
  }

  return !isNormal(value) ? false : includeZero ? /^[0-9]*$/.test(value.toString()) : /^[1-9]+[0-9]*$/.test(value.toString());
}
/**
 * @param {*} value
 * @param {number=} defaultValur = 0
 * @returns {number}
 */

function pInt(value, defaultValur) {
  if (defaultValur === void 0) {
    defaultValur = 0;
  }

  var result = isNormal(value) && '' !== value ? window__WEBPACK_IMPORTED_MODULE_15___default.a.parseInt(value, 10) : defaultValur;
  return window__WEBPACK_IMPORTED_MODULE_15___default.a.isNaN(result) ? defaultValur : result;
}
/**
 * @param {*} value
 * @returns {string}
 */

function pString(value) {
  return isNormal(value) ? '' + value : '';
}
/**
 * @param {*} value
 * @returns {boolean}
 */

function pBool(value) {
  return !!value;
}
/**
 * @param {*} value
 * @returns {string}
 */

function boolToAjax(value) {
  return value ? '1' : '0';
}
/**
 * @param {*} values
 * @returns {boolean}
 */

function isNonEmptyArray(values) {
  return isArray(values) && 0 < values.length;
}
/**
 * @param {string} component
 * @returns {string}
 */

function encodeURIComponent(component) {
  return window__WEBPACK_IMPORTED_MODULE_15___default.a.encodeURIComponent(component);
}
/**
 * @param {string} component
 * @returns {string}
 */

function decodeURIComponent(component) {
  return window__WEBPACK_IMPORTED_MODULE_15___default.a.decodeURIComponent(component);
}
/**
 * @param {string} url
 * @returns {string}
 */

function decodeURI(url) {
  return window__WEBPACK_IMPORTED_MODULE_15___default.a.decodeURI(url);
}
/**
 * @param {string} url
 * @returns {string}
 */

function encodeURI(url) {
  return window__WEBPACK_IMPORTED_MODULE_15___default.a.encodeURI(url);
}
/**
 * @param {string} queryString
 * @returns {Object}
 */

function simpleQueryParser(queryString) {
  var index = 0,
      len = 0,
      temp = null;
  var queries = queryString.split('&'),
      params = {};

  for (len = queries.length; index < len; index++) {
    temp = queries[index].split('=');
    params[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
  }

  return params;
}
/**
 * @param {number=} len = 32
 * @returns {string}
 */

function fakeMd5(len) {
  if (len === void 0) {
    len = 32;
  }

  var line = '0123456789abcdefghijklmnopqrstuvwxyz',
      lineLen = line.length;
  len = pInt(len);
  var result = '';

  while (result.length < len) {
    result += line.substr(window__WEBPACK_IMPORTED_MODULE_15___default.a.Math.round(window__WEBPACK_IMPORTED_MODULE_15___default.a.Math.random() * lineLen), 1);
  }

  return result;
}
/**
 * @param {string} text
 * @returns {string}
 */

function encodeHtml(text) {
  return isNormal(text) ? ___WEBPACK_IMPORTED_MODULE_17___default.a.escape(text.toString()) : '';
}
/**
 * @param {string} text
 * @param {number=} len = 100
 * @returns {string}
 */

function splitPlainText(text, len) {
  if (len === void 0) {
    len = 100;
  }

  var prefix = '',
      subText = '',
      result = text,
      spacePos = 0,
      newLinePos = 0;

  while (result.length > len) {
    subText = result.substring(0, len);
    spacePos = subText.lastIndexOf(' ');
    newLinePos = subText.lastIndexOf('\n');

    if (-1 !== newLinePos) {
      spacePos = newLinePos;
    }

    if (-1 === spacePos) {
      spacePos = len;
    }

    prefix += subText.substring(0, spacePos) + '\n';
    result = result.substring(spacePos + 1);
  }

  return prefix + result;
}

var timeOutAction = function () {
  var timeOuts = {};
  return function (action, fFunction, timeOut) {
    timeOuts[action] = isUnd(timeOuts[action]) ? 0 : timeOuts[action];
    window__WEBPACK_IMPORTED_MODULE_15___default.a.clearTimeout(timeOuts[action]);
    timeOuts[action] = _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_10___default()(fFunction, timeOut);
  };
}();

var timeOutActionSecond = function () {
  var timeOuts = {};
  return function (action, fFunction, timeOut) {
    if (!timeOuts[action]) {
      timeOuts[action] = _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_10___default()(function () {
        fFunction();
        timeOuts[action] = 0;
      }, timeOut);
    }
  };
}();


/**
 * @param {any} m
 * @returns {any}
 */

function deModule(m) {
  return (m && m.default ? m.default : m) || '';
}
/**
 * @returns {boolean}
 */

function inFocus() {
  try {
    if (window__WEBPACK_IMPORTED_MODULE_15___default.a.document.activeElement) {
      if (isUnd(window__WEBPACK_IMPORTED_MODULE_15___default.a.document.activeElement.__inFocusCache)) {
        window__WEBPACK_IMPORTED_MODULE_15___default.a.document.activeElement.__inFocusCache = $__WEBPACK_IMPORTED_MODULE_16___default()(window__WEBPACK_IMPORTED_MODULE_15___default.a.document.activeElement).is('input,textarea,iframe,.cke_editable');
      }

      return !!window__WEBPACK_IMPORTED_MODULE_15___default.a.document.activeElement.__inFocusCache;
    }
  } catch (e) {} // eslint-disable-line no-empty


  return false;
}
/**
 * @param {boolean} force
 * @returns {void}
 */

function removeInFocus(force) {
  if (window__WEBPACK_IMPORTED_MODULE_15___default.a.document && window__WEBPACK_IMPORTED_MODULE_15___default.a.document.activeElement && window__WEBPACK_IMPORTED_MODULE_15___default.a.document.activeElement.blur) {
    try {
      var activeEl = $__WEBPACK_IMPORTED_MODULE_16___default()(window__WEBPACK_IMPORTED_MODULE_15___default.a.document.activeElement);

      if (activeEl && activeEl.is('input,textarea')) {
        window__WEBPACK_IMPORTED_MODULE_15___default.a.document.activeElement.blur();
      } else if (force) {
        window__WEBPACK_IMPORTED_MODULE_15___default.a.document.activeElement.blur();
      }
    } catch (e) {} // eslint-disable-line no-empty

  }
}
/**
 * @returns {void}
 */

function removeSelection() {
  try {
    if (window__WEBPACK_IMPORTED_MODULE_15___default.a && window__WEBPACK_IMPORTED_MODULE_15___default.a.getSelection) {
      var sel = window__WEBPACK_IMPORTED_MODULE_15___default.a.getSelection();

      if (sel && sel.removeAllRanges) {
        sel.removeAllRanges();
      }
    } else if (window__WEBPACK_IMPORTED_MODULE_15___default.a.document && window__WEBPACK_IMPORTED_MODULE_15___default.a.document.selection && window__WEBPACK_IMPORTED_MODULE_15___default.a.document.selection.empty) {
      window__WEBPACK_IMPORTED_MODULE_15___default.a.document.selection.empty();
    }
  } catch (e) {} // eslint-disable-line no-empty

}
/**
 * @param {string} prefix
 * @param {string} subject
 * @returns {string}
 */

function replySubjectAdd(prefix, subject) {
  prefix = trim(prefix.toUpperCase());
  subject = trim(subject.replace(/[\s]+/g, ' '));
  var drop = false,
      re = 'RE' === prefix,
      fwd = 'FWD' === prefix;
  var parts = [],
      prefixIsRe = !fwd;

  if ('' !== subject) {
    ___WEBPACK_IMPORTED_MODULE_17___default.a.each(subject.split(':'), function (part) {
      var trimmedPart = trim(part);

      if (!drop && (/^(RE|FWD)$/i.test(trimmedPart) || /^(RE|FWD)[[(][\d]+[\])]$/i.test(trimmedPart))) {
        if (!re) {
          re = !!/^RE/i.test(trimmedPart);
        }

        if (!fwd) {
          fwd = !!/^FWD/i.test(trimmedPart);
        }
      } else {
        parts.push(part);
        drop = true;
      }
    });
  }

  if (prefixIsRe) {
    re = false;
  } else {
    fwd = false;
  }

  return trim((prefixIsRe ? 'Re: ' : 'Fwd: ') + (re ? 'Re: ' : '') + (fwd ? 'Fwd: ' : '') + trim(parts.join(':')));
}
/**
 * @param {number} num
 * @param {number} dec
 * @returns {number}
 */

function roundNumber(num, dec) {
  return window__WEBPACK_IMPORTED_MODULE_15___default.a.Math.round(num * window__WEBPACK_IMPORTED_MODULE_15___default.a.Math.pow(10, dec)) / window__WEBPACK_IMPORTED_MODULE_15___default.a.Math.pow(10, dec);
}
/**
 * @param {(number|string)} sizeInBytes
 * @returns {string}
 */

function friendlySize(sizeInBytes) {
  sizeInBytes = pInt(sizeInBytes);

  switch (true) {
    case 1073741824 <= sizeInBytes:
      return roundNumber(sizeInBytes / 1073741824, 1) + 'GB';

    case 1048576 <= sizeInBytes:
      return roundNumber(sizeInBytes / 1048576, 1) + 'MB';

    case 1024 <= sizeInBytes:
      return roundNumber(sizeInBytes / 1024, 0) + 'KB';
    // no default
  }

  return sizeInBytes + 'B';
}
/**
 * @param {string} desc
 */

function log(desc) {
  if (window__WEBPACK_IMPORTED_MODULE_15___default.a.console && window__WEBPACK_IMPORTED_MODULE_15___default.a.console.log) {
    window__WEBPACK_IMPORTED_MODULE_15___default.a.console.log(desc);
  }
}
/**
 * @param {?} object
 * @param {string} methodName
 * @param {Array=} params
 * @param {number=} delay = 0
 */

function delegateRun(object, methodName, params, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  if (object && object[methodName]) {
    delay = pInt(delay);
    params = isArray(params) ? params : [];

    if (0 >= delay) {
      object[methodName].apply(object, params);
    } else {
      ___WEBPACK_IMPORTED_MODULE_17___default.a.delay(function () {
        object[methodName].apply(object, params);
      }, delay);
    }
  }
}
/**
 * @param {?} event
 */

function killCtrlACtrlS(event) {
  event = event || window__WEBPACK_IMPORTED_MODULE_15___default.a.event;

  if (event && event.ctrlKey && !event.shiftKey && !event.altKey) {
    var key = event.keyCode || event.which;

    if (key === Common_Enums__WEBPACK_IMPORTED_MODULE_21__["EventKeyCode"].S) {
      event.preventDefault();
      return;
    } else if (key === Common_Enums__WEBPACK_IMPORTED_MODULE_21__["EventKeyCode"].A) {
      var sender = event.target || event.srcElement;

      if (sender && ('true' === '' + sender.contentEditable || sender.tagName && sender.tagName.match(/INPUT|TEXTAREA/i))) {
        return;
      }

      if (window__WEBPACK_IMPORTED_MODULE_15___default.a.getSelection) {
        window__WEBPACK_IMPORTED_MODULE_15___default.a.getSelection().removeAllRanges();
      } else if (window__WEBPACK_IMPORTED_MODULE_15___default.a.document.selection && window__WEBPACK_IMPORTED_MODULE_15___default.a.document.selection.clear) {
        window__WEBPACK_IMPORTED_MODULE_15___default.a.document.selection.clear();
      }

      event.preventDefault();
    }
  }
}
/**
 * @param {(Object|null|undefined)} context
 * @param {Function} fExecute
 * @param {(Function|boolean|null)=} fCanExecute = true
 * @returns {Function}
 */

function createCommandLegacy(context, fExecute, fCanExecute) {
  if (fCanExecute === void 0) {
    fCanExecute = true;
  }

  var fResult = null;

  var fNonEmpty = function fNonEmpty() {
    if (fResult && fResult.canExecute && fResult.canExecute()) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      fExecute.apply(context, args);
    }

    return false;
  };

  fResult = fExecute ? fNonEmpty : noop;
  fResult.enabled = ko__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].observable(true);
  fResult.isCommand = true;

  if (isFunc(fCanExecute)) {
    fResult.canExecute = ko__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].computed(function () {
      return fResult && fResult.enabled() && fCanExecute.call(context);
    });
  } else {
    fResult.canExecute = ko__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].computed(function () {
      return fResult && fResult.enabled() && !!fCanExecute;
    });
  }

  return fResult;
}
/**
 * @param {string} theme
 * @returns {string}
 */

var convertThemeName = ___WEBPACK_IMPORTED_MODULE_17___default.a.memoize(function (theme) {
  if ('@custom' === theme.substr(-7)) {
    theme = trim(theme.substring(0, theme.length - 7));
  }

  return trim(theme.replace(/[^a-zA-Z0-9]+/g, ' ').replace(/([A-Z])/g, ' $1').replace(/[\s]+/g, ' '));
});
/**
 * @param {string} name
 * @returns {string}
 */

function quoteName(name) {
  return name.replace(/["]/g, '\\"');
}
/**
 * @returns {number}
 */

function microtime() {
  return new window__WEBPACK_IMPORTED_MODULE_15___default.a.Date().getTime();
}
/**
 * @returns {number}
 */

function timestamp() {
  return window__WEBPACK_IMPORTED_MODULE_15___default.a.Math.round(microtime() / 1000);
}
/**
 *
 * @param {string} language
 * @param {boolean=} isEng = false
 * @returns {string}
 */

function convertLangName(language, isEng) {
  if (isEng === void 0) {
    isEng = false;
  }

  return __webpack_require__(/*! Common/Translator */ 9).i18n('LANGS_NAMES' + (true === isEng ? '_EN' : '') + '/LANG_' + language.toUpperCase().replace(/[^a-zA-Z0-9]+/g, '_'), null, language);
}
/**
 * @returns {object}
 */

function draggablePlace() {
  return $__WEBPACK_IMPORTED_MODULE_16___default()('<div class="draggablePlace">' + '<span class="text"></span>&nbsp;' + '<i class="icon-copy icon-white visible-on-ctrl"></i>' + '<i class="icon-mail icon-white hidden-on-ctrl"></i>' + '</div>').appendTo('#rl-hidden');
}
/**
 * @param {object} domOption
 * @param {object} item
 * @returns {void}
 */

function defautOptionsAfterRender(domItem, item) {
  if (item && !isUnd(item.disabled) && domItem) {
    $__WEBPACK_IMPORTED_MODULE_16___default()(domItem).toggleClass('disabled', item.disabled).prop('disabled', item.disabled);
  }
}
/**
 * @param {string} title
 * @param {Object} body
 * @param {boolean} isHtml
 * @param {boolean} print
 */

function clearBqSwitcher(body) {
  _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_11___default()(body).call(body, 'blockquote.rl-bq-switcher').removeClass('rl-bq-switcher hidden-bq');

  _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_11___default()(body).call(body, '.rlBlockquoteSwitcher').off('.rlBlockquoteSwitcher').remove();

  _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_11___default()(body).call(body, '[data-html-editor-font-wrapper]').removeAttr('data-html-editor-font-wrapper');
}
/**
 * @param {object} messageData
 * @param {Object} body
 * @param {boolean} isHtml
 * @param {boolean} print
 * @returns {void}
 */

function previewMessage(_ref, body, isHtml, print) {
  var title = _ref.title,
      subject = _ref.subject,
      date = _ref.date,
      fromCreds = _ref.fromCreds,
      toCreds = _ref.toCreds,
      toLabel = _ref.toLabel,
      ccClass = _ref.ccClass,
      ccCreds = _ref.ccCreds,
      ccLabel = _ref.ccLabel;
  var win = window__WEBPACK_IMPORTED_MODULE_15___default.a.open(''),
      doc = win.document,
      bodyClone = body.clone(),
      bodyClass = isHtml ? 'html' : 'plain';
  clearBqSwitcher(bodyClone);
  var html = bodyClone ? bodyClone.html() : '';
  doc.write(deModule(__webpack_require__(/*! Html/PreviewMessage.html */ 357)).replace('{{title}}', encodeHtml(title)).replace('{{subject}}', encodeHtml(subject)).replace('{{date}}', encodeHtml(date)).replace('{{fromCreds}}', encodeHtml(fromCreds)).replace('{{toCreds}}', encodeHtml(toCreds)).replace('{{toLabel}}', encodeHtml(toLabel)).replace('{{ccClass}}', encodeHtml(ccClass)).replace('{{ccCreds}}', encodeHtml(ccCreds)).replace('{{ccLabel}}', encodeHtml(ccLabel)).replace('{{bodyClass}}', bodyClass).replace('{{html}}', html));
  doc.close();

  if (print) {
    _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_10___default()(function () {
      return win.print();
    }, 100);
  }
}
/**
 * @param {Function} fCallback
 * @param {?} koTrigger
 * @param {?} context = null
 * @param {number=} timer = 1000
 * @returns {Function}
 */

function settingsSaveHelperFunction(fCallback, koTrigger, context, timer) {
  if (context === void 0) {
    context = null;
  }

  if (timer === void 0) {
    timer = 1000;
  }

  timer = pInt(timer);
  return function (type, data, cached, requestAction, requestParameters) {
    koTrigger.call(context, data && data.Result ? Common_Enums__WEBPACK_IMPORTED_MODULE_21__["SaveSettingsStep"].TrueResult : Common_Enums__WEBPACK_IMPORTED_MODULE_21__["SaveSettingsStep"].FalseResult);

    if (fCallback) {
      fCallback.call(context, type, data, cached, requestAction, requestParameters);
    }

    ___WEBPACK_IMPORTED_MODULE_17___default.a.delay(function () {
      koTrigger.call(context, Common_Enums__WEBPACK_IMPORTED_MODULE_21__["SaveSettingsStep"].Idle);
    }, timer);
  };
}
/**
 * @param {object} koTrigger
 * @param {mixed} context
 * @returns {mixed}
 */

function settingsSaveHelperSimpleFunction(koTrigger, context) {
  return settingsSaveHelperFunction(null, koTrigger, context, 1000);
}
/**
 * @param {object} remote
 * @param {string} settingName
 * @param {string} type
 * @param {function} fTriggerFunction
 * @returns {function}
 */

function settingsSaveHelperSubscribeFunction(remote, settingName, type, fTriggerFunction) {
  return function (value) {
    if (remote) {
      switch (type) {
        case 'bool':
        case 'boolean':
          value = value ? '1' : '0';
          break;

        case 'int':
        case 'integer':
        case 'number':
          value = pInt(value);
          break;

        case 'trim':
          value = trim(value);
          break;

        default:
          value = pString(value);
          break;
      }

      var data = {};
      data[settingName] = value;

      if (remote.saveAdminConfig) {
        remote.saveAdminConfig(fTriggerFunction || null, data);
      } else if (remote.saveSettings) {
        remote.saveSettings(fTriggerFunction || null, data);
      }
    }
  };
}
/**
 * @param {string} html
 * @returns {string}
 */

function findEmailAndLinks(html) {
  return Autolinker__WEBPACK_IMPORTED_MODULE_19___default.a ? Autolinker__WEBPACK_IMPORTED_MODULE_19___default.a.link(html, {
    newWindow: true,
    stripPrefix: false,
    urls: true,
    email: true,
    mention: false,
    phone: false,
    hashtag: false,
    replaceFn: function replaceFn(match) {
      return !(match && 'url' === match.getType() && match.matchedText && 0 !== match.matchedText.indexOf('http'));
    }
  }) : html;
}
/**
 * @param {string} html
 * @returns {string}
 */

function htmlToPlain(html) {
  var pos = 0,
      limit = 0,
      iP1 = 0,
      iP2 = 0,
      iP3 = 0,
      text = '';

  var convertBlockquote = function convertBlockquote(blockquoteText) {
    blockquoteText = '> ' + trim(blockquoteText).replace(/\n/gm, '\n> ');
    return blockquoteText.replace(/(^|\n)([> ]+)/gm, function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return args && 2 < args.length ? args[1] + trim(args[2].replace(/[\s]/g, '')) + ' ' : '';
    });
  };

  var convertDivs = function convertDivs() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    if (args && 1 < args.length) {
      var divText = trim(args[1]);

      if (0 < divText.length) {
        divText = divText.replace(/<div[^>]*>([\s\S\r\n]*)<\/div>/gim, convertDivs);
        divText = '\n' + trim(divText) + '\n';
      }

      return divText;
    }

    return '';
  };

  var convertPre = function convertPre() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return args && 1 < args.length ? args[1].toString().replace(/[\n]/gm, '<br />').replace(/[\r]/gm, '') : '';
  },
      fixAttibuteValue = function fixAttibuteValue() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    return args && 1 < args.length ? '' + args[1] + ___WEBPACK_IMPORTED_MODULE_17___default.a.escape(args[2]) : '';
  },
      convertLinks = function convertLinks() {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    return args && 1 < args.length ? trim(args[1]) : '';
  };

  text = html.replace(/<p[^>]*><\/p>/gi, '').replace(/<pre[^>]*>([\s\S\r\n\t]*)<\/pre>/gim, convertPre).replace(/[\s]+/gm, ' ').replace(/((?:href|data)\s?=\s?)("[^"]+?"|'[^']+?')/gim, fixAttibuteValue).replace(/<br[^>]*>/gim, '\n').replace(/<\/h[\d]>/gi, '\n').replace(/<\/p>/gi, '\n\n').replace(/<ul[^>]*>/gim, '\n').replace(/<\/ul>/gi, '\n').replace(/<li[^>]*>/gim, ' * ').replace(/<\/li>/gi, '\n').replace(/<\/td>/gi, '\n').replace(/<\/tr>/gi, '\n').replace(/<hr[^>]*>/gim, '\n_______________________________\n\n').replace(/<div[^>]*>([\s\S\r\n]*)<\/div>/gim, convertDivs).replace(/<blockquote[^>]*>/gim, '\n__bq__start__\n').replace(/<\/blockquote>/gim, '\n__bq__end__\n').replace(/<a [^>]*>([\s\S\r\n]*?)<\/a>/gim, convertLinks).replace(/<\/div>/gi, '\n').replace(/&nbsp;/gi, ' ').replace(/&quot;/gi, '"').replace(/<[^>]*>/gm, '');
  text = Common_Globals__WEBPACK_IMPORTED_MODULE_20__["$div"].html(text).text();
  text = text.replace(/\n[ \t]+/gm, '\n').replace(/[\n]{3,}/gm, '\n\n').replace(/&gt;/gi, '>').replace(/&lt;/gi, '<').replace(/&amp;/gi, '&');
  text = splitPlainText(text);
  pos = 0;
  limit = 800;

  while (0 < limit) {
    limit -= 1;
    iP1 = text.indexOf('__bq__start__', pos);

    if (-1 < iP1) {
      iP2 = text.indexOf('__bq__start__', iP1 + 5);
      iP3 = text.indexOf('__bq__end__', iP1 + 5);

      if ((-1 === iP2 || iP3 < iP2) && iP1 < iP3) {
        text = text.substring(0, iP1) + convertBlockquote(text.substring(iP1 + 13, iP3)) + text.substring(iP3 + 11);
        pos = 0;
      } else if (-1 < iP2 && iP2 < iP3) {
        pos = iP2 - 1;
      } else {
        pos = 0;
      }
    } else {
      break;
    }
  }

  text = text.replace(/__bq__start__/gm, '').replace(/__bq__end__/gm, '');
  return text;
}
/**
 * @param {string} plain
 * @param {boolean} findEmailAndLinksInText = false
 * @returns {string}
 */

function plainToHtml(plain, findEmailAndLinksInText) {
  if (findEmailAndLinksInText === void 0) {
    findEmailAndLinksInText = false;
  }

  plain = plain.toString().replace(/\r/g, '');
  plain = plain.replace(/^>[> ]>+/gm, function (_ref2) {
    var match = _ref2[0];
    return match ? match.replace(/[ ]+/g, '') : match;
  });
  var bIn = false,
      bDo = true,
      bStart = true,
      aNextText = [],
      sLine = '',
      iIndex = 0,
      aText = plain.split('\n');

  do {
    bDo = false;
    aNextText = [];

    for (iIndex = 0; iIndex < aText.length; iIndex++) {
      sLine = aText[iIndex];
      bStart = '>' === sLine.substr(0, 1);

      if (bStart && !bIn) {
        bDo = true;
        bIn = true;
        aNextText.push('~~~blockquote~~~');
        aNextText.push(sLine.substr(1));
      } else if (!bStart && bIn) {
        if ('' !== sLine) {
          bIn = false;
          aNextText.push('~~~/blockquote~~~');
          aNextText.push(sLine);
        } else {
          aNextText.push(sLine);
        }
      } else if (bStart && bIn) {
        aNextText.push(sLine.substr(1));
      } else {
        aNextText.push(sLine);
      }
    }

    if (bIn) {
      bIn = false;
      aNextText.push('~~~/blockquote~~~');
    }

    aText = aNextText;
  } while (bDo);

  plain = aText.join('\n');
  plain = plain // .replace(/~~~\/blockquote~~~\n~~~blockquote~~~/g, '\n')
  .replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/~~~blockquote~~~[\s]*/g, '<blockquote>').replace(/[\s]*~~~\/blockquote~~~/g, '</blockquote>').replace(/\n/g, '<br />');
  return findEmailAndLinksInText ? findEmailAndLinks(plain) : plain;
}
window__WEBPACK_IMPORTED_MODULE_15___default.a['rainloop_Utils_htmlToPlain'] = htmlToPlain; // eslint-disable-line dot-notation

window__WEBPACK_IMPORTED_MODULE_15___default.a['rainloop_Utils_plainToHtml'] = plainToHtml; // eslint-disable-line dot-notation

/**
 * @param {Array} aSystem
 * @param {Array} aList
 * @param {Array=} aDisabled
 * @param {Array=} aHeaderLines
 * @param {?number=} iUnDeep
 * @param {Function=} fDisableCallback
 * @param {Function=} fVisibleCallback
 * @param {Function=} fRenameCallback
 * @param {boolean=} bSystem
 * @param {boolean=} bBuildUnvisible
 * @returns {Array}
 */

function folderListOptionsBuilder(aSystem, aList, aDisabled, aHeaderLines, iUnDeep, fDisableCallback, fVisibleCallback, fRenameCallback, bSystem, bBuildUnvisible) {
  var
  /**
  * @type {?FolderModel}
  */
  oItem = null,
      bSep = false,
      iIndex = 0,
      iLen = 0,
      aResult = [];
  var sDeepPrefix = "\xA0\xA0\xA0";
  bBuildUnvisible = isUnd(bBuildUnvisible) ? false : !!bBuildUnvisible;
  bSystem = !isNormal(bSystem) ? 0 < aSystem.length : bSystem;
  iUnDeep = !isNormal(iUnDeep) ? 0 : iUnDeep;
  fDisableCallback = isNormal(fDisableCallback) ? fDisableCallback : null;
  fVisibleCallback = isNormal(fVisibleCallback) ? fVisibleCallback : null;
  fRenameCallback = isNormal(fRenameCallback) ? fRenameCallback : null;

  if (!isArray(aDisabled)) {
    aDisabled = [];
  }

  if (!isArray(aHeaderLines)) {
    aHeaderLines = [];
  }

  for (iIndex = 0, iLen = aHeaderLines.length; iIndex < iLen; iIndex++) {
    aResult.push({
      id: aHeaderLines[iIndex][0],
      name: aHeaderLines[iIndex][1],
      system: false,
      seporator: false,
      disabled: false
    });
  }

  bSep = true;

  for (iIndex = 0, iLen = aSystem.length; iIndex < iLen; iIndex++) {
    oItem = aSystem[iIndex];

    if (fVisibleCallback ? fVisibleCallback(oItem) : true) {
      if (bSep && 0 < aResult.length) {
        aResult.push({
          id: '---',
          name: '---',
          system: false,
          seporator: true,
          disabled: true
        });
      }

      bSep = false;
      aResult.push({
        id: oItem.fullNameRaw,
        name: fRenameCallback ? fRenameCallback(oItem) : oItem.name(),
        system: true,
        seporator: false,
        disabled: !oItem.selectable || -1 < inArray(oItem.fullNameRaw, aDisabled) || (fDisableCallback ? fDisableCallback(oItem) : false)
      });
    }
  }

  bSep = true;

  for (iIndex = 0, iLen = aList.length; iIndex < iLen; iIndex++) {
    oItem = aList[iIndex]; // if (oItem.subScribed() || !oItem.existen || bBuildUnvisible)

    if ((oItem.subScribed() || !oItem.existen || bBuildUnvisible) && (oItem.selectable || oItem.hasSubScribedSubfolders())) {
      if (fVisibleCallback ? fVisibleCallback(oItem) : true) {
        if (Common_Enums__WEBPACK_IMPORTED_MODULE_21__["FolderType"].User === oItem.type() || !bSystem || oItem.hasSubScribedSubfolders()) {
          if (bSep && 0 < aResult.length) {
            aResult.push({
              id: '---',
              name: '---',
              system: false,
              seporator: true,
              disabled: true
            });
          }

          bSep = false;
          aResult.push({
            id: oItem.fullNameRaw,
            name: new window__WEBPACK_IMPORTED_MODULE_15___default.a.Array(oItem.deep + 1 - iUnDeep).join(sDeepPrefix) + (fRenameCallback ? fRenameCallback(oItem) : oItem.name()),
            system: false,
            seporator: false,
            disabled: !oItem.selectable || -1 < inArray(oItem.fullNameRaw, aDisabled) || (fDisableCallback ? fDisableCallback(oItem) : false)
          });
        }
      }
    }

    if (oItem.subScribed() && 0 < oItem.subFolders().length) {
      aResult = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_12___default()(aResult).call(aResult, folderListOptionsBuilder([], oItem.subFolders(), aDisabled, [], iUnDeep, fDisableCallback, fVisibleCallback, fRenameCallback, bSystem, bBuildUnvisible));
    }
  }

  return aResult;
}
/**
 * @param {object} element
 * @returns {void}
 */

function selectElement(element) {
  var sel = null,
      range = null;

  if (window__WEBPACK_IMPORTED_MODULE_15___default.a.getSelection) {
    sel = window__WEBPACK_IMPORTED_MODULE_15___default.a.getSelection();
    sel.removeAllRanges();
    range = window__WEBPACK_IMPORTED_MODULE_15___default.a.document.createRange();
    range.selectNodeContents(element);
    sel.addRange(range);
  } else if (window__WEBPACK_IMPORTED_MODULE_15___default.a.document.selection) {
    range = window__WEBPACK_IMPORTED_MODULE_15___default.a.document.body.createTextRange();
    range.moveToElementText(element);
    range.select();
  }
}
var detectDropdownVisibility = ___WEBPACK_IMPORTED_MODULE_17___default.a.debounce(function () {
  Object(Common_Globals__WEBPACK_IMPORTED_MODULE_20__["dropdownVisibility"])(!!_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_11___default()(___WEBPACK_IMPORTED_MODULE_17___default.a).call(___WEBPACK_IMPORTED_MODULE_17___default.a, Common_Globals__WEBPACK_IMPORTED_MODULE_20__["data"].aBootstrapDropdowns, function (item) {
    return item.hasClass('open');
  }));
}, 50);
/**
 * @param {boolean=} delay = false
 */

function triggerAutocompleteInputChange(delay) {
  if (delay === void 0) {
    delay = false;
  }

  var fFunc = function fFunc() {
    $__WEBPACK_IMPORTED_MODULE_16___default()('.checkAutocomplete').trigger('change');
  };

  if (delay) {
    ___WEBPACK_IMPORTED_MODULE_17___default.a.delay(fFunc, 100);
  } else {
    fFunc();
  }
}
var configurationScriptTagCache = {};
/**
 * @param {string} configuration
 * @returns {object}
 */

function getConfigurationFromScriptTag(configuration) {
  if (!configurationScriptTagCache[configuration]) {
    configurationScriptTagCache[configuration] = $__WEBPACK_IMPORTED_MODULE_16___default()('script[type="application/json"][data-configuration="' + configuration + '"]');
  }

  try {
    return JSON.parse(configurationScriptTagCache[configuration].text());
  } catch (e) {} // eslint-disable-line no-empty


  return {};
}
/**
 * @param {mixed} mPropOrValue
 * @param {mixed} value
 */

function disposeOne(propOrValue, value) {
  var disposable = value || propOrValue;

  if (disposable && 'function' === typeof disposable.dispose) {
    disposable.dispose();
  }
}
/**
 * @param {Object} object
 */

function disposeObject(object) {
  if (object) {
    if (isArray(object.disposables)) {
      ___WEBPACK_IMPORTED_MODULE_17___default.a.each(object.disposables, disposeOne);
    }

    ko__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].utils.objectForEach(object, disposeOne);
  }
}
/**
 * @param {Object|Array} objectOrObjects
 * @returns {void}
 */

function delegateRunOnDestroy(objectOrObjects) {
  if (objectOrObjects) {
    if (isArray(objectOrObjects)) {
      ___WEBPACK_IMPORTED_MODULE_17___default.a.each(objectOrObjects, function (item) {
        delegateRunOnDestroy(item);
      });
    } else if (objectOrObjects && objectOrObjects.onDestroy) {
      objectOrObjects.onDestroy();
    }
  }
}
/**
 * @param {object} $styleTag
 * @param {string} css
 * @returns {boolean}
 */

function appendStyles($styleTag, css) {
  if ($styleTag && $styleTag[0]) {
    if ($styleTag[0].styleSheet && !isUnd($styleTag[0].styleSheet.cssText)) {
      $styleTag[0].styleSheet.cssText = css;
    } else {
      $styleTag.text(css);
    }

    return true;
  }

  return false;
}
var __themeTimer = 0,
    __themeAjax = null;
/**
 * @param {string} value
 * @param {function=} themeTrigger = noop
 * @returns {void}
 */

function changeTheme(value, themeTrigger) {
  if (themeTrigger === void 0) {
    themeTrigger = noop;
  }

  var themeLink = $__WEBPACK_IMPORTED_MODULE_16___default()('#app-theme-link'),
      clearTimer = function clearTimer() {
    __themeTimer = _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_10___default()(function () {
      return themeTrigger(Common_Enums__WEBPACK_IMPORTED_MODULE_21__["SaveSettingsStep"].Idle);
    }, 1000);
    __themeAjax = null;
  };

  var themeStyle = $__WEBPACK_IMPORTED_MODULE_16___default()('#app-theme-style'),
      url = themeLink.attr('href');

  if (!url) {
    url = themeStyle.attr('data-href');
  }

  if (url) {
    url = url.toString().replace(/\/-\/[^/]+\/-\//, '/-/' + value + '/-/');
    url = url.replace(/\/Css\/[^/]+\/User\//, '/Css/0/User/');
    url = url.replace(/\/Hash\/[^/]+\//, '/Hash/-/');

    if ('Json/' !== url.substring(url.length - 5, url.length)) {
      url += 'Json/';
    }

    window__WEBPACK_IMPORTED_MODULE_15___default.a.clearTimeout(__themeTimer);
    themeTrigger(Common_Enums__WEBPACK_IMPORTED_MODULE_21__["SaveSettingsStep"].Animate);

    if (__themeAjax && __themeAjax.abort) {
      __themeAjax.abort();
    }

    __themeAjax = $__WEBPACK_IMPORTED_MODULE_16___default.a.ajax({
      url: url,
      dataType: 'json'
    }).then(function (data) {
      if (data && isArray(data) && 2 === data.length) {
        if (themeLink && themeLink[0] && (!themeStyle || !themeStyle[0])) {
          themeStyle = $__WEBPACK_IMPORTED_MODULE_16___default()('<style id="app-theme-style"></style>');
          themeLink.after(themeStyle);
          themeLink.remove();
        }

        if (themeStyle && themeStyle[0]) {
          if (appendStyles(themeStyle, data[1])) {
            themeStyle.attr('data-href', url).attr('data-theme', data[0]);
          }
        }

        themeTrigger(Common_Enums__WEBPACK_IMPORTED_MODULE_21__["SaveSettingsStep"].TrueResult);
      }
    }).then(clearTimer, clearTimer);
  }
}
/**
 * @returns {function}
 */

function computedPagenatorHelper(koCurrentPage, koPageCount) {
  return function () {
    var currentPage = koCurrentPage(),
        pageCount = koPageCount(),
        result = [],
        fAdd = function fAdd(index, push, customName) {
      if (push === void 0) {
        push = true;
      }

      if (customName === void 0) {
        customName = '';
      }

      var data = {
        current: index === currentPage,
        name: '' === customName ? index.toString() : customName.toString(),
        custom: '' !== customName,
        title: '' === customName ? '' : index.toString(),
        value: index.toString()
      };

      if (push) {
        result.push(data);
      } else {
        result.unshift(data);
      }
    };

    var prev = 0,
        next = 0,
        limit = 2;

    if (1 < pageCount || 0 < pageCount && pageCount < currentPage) {
      if (pageCount < currentPage) {
        fAdd(pageCount);
        prev = pageCount;
        next = pageCount;
      } else {
        if (3 >= currentPage || pageCount - 2 <= currentPage) {
          limit += 2;
        }

        fAdd(currentPage);
        prev = currentPage;
        next = currentPage;
      }

      while (0 < limit) {
        prev -= 1;
        next += 1;

        if (0 < prev) {
          fAdd(prev, false);
          limit -= 1;
        }

        if (pageCount >= next) {
          fAdd(next, true);
          limit -= 1;
        } else if (0 >= prev) {
          break;
        }
      }

      if (3 === prev) {
        fAdd(2, false);
      } else if (3 < prev) {
        fAdd(Math.round((prev - 1) / 2), false, '...');
      }

      if (pageCount - 2 === next) {
        fAdd(pageCount - 1, true);
      } else if (pageCount - 2 > next) {
        fAdd(Math.round((pageCount + next) / 2), true, '...');
      } // first and last


      if (1 < prev) {
        fAdd(1, false);
      }

      if (pageCount > next) {
        fAdd(pageCount, true);
      }
    }

    return result;
  };
}
/**
 * @param {string} fileName
 * @returns {string}
 */

function getFileExtension(fileName) {
  fileName = trim(fileName).toLowerCase();
  var result = fileName.split('.').pop();
  return result === fileName ? '' : result;
}
/**
 * @param {string} fileName
 * @returns {string}
 */

function mimeContentType(fileName) {
  var ext = '',
      result = 'application/octet-stream';
  fileName = trim(fileName).toLowerCase();

  if ('winmail.dat' === fileName) {
    return 'application/ms-tnef';
  }

  ext = getFileExtension(fileName);

  if (ext && 0 < ext.length && !isUnd(Common_Mime__WEBPACK_IMPORTED_MODULE_22__[/* Mime */ "a"][ext])) {
    result = Common_Mime__WEBPACK_IMPORTED_MODULE_22__[/* Mime */ "a"][ext];
  }

  return result;
}
/**
 * @param {string} color
 * @returns {boolean}
 */

function isTransparent(color) {
  return 'rgba(0, 0, 0, 0)' === color || 'transparent' === color;
}
/**
 * @param {Object} $el
 * @returns {number}
 */

function getRealHeight($el) {
  $el.clone().show().appendTo(Common_Globals__WEBPACK_IMPORTED_MODULE_20__["$hcont"]);
  var result = Common_Globals__WEBPACK_IMPORTED_MODULE_20__["$hcont"].height();
  Common_Globals__WEBPACK_IMPORTED_MODULE_20__["$hcont"].empty();
  return result;
}
/**
 * @param {string} url
 * @param {number} value
 * @param {Function} fCallback
 */

function resizeAndCrop(url, value, fCallback) {
  var img = new window__WEBPACK_IMPORTED_MODULE_15___default.a.Image();

  img.onload = function () {
    var diff = [0, 0];
    var canvas = window__WEBPACK_IMPORTED_MODULE_15___default.a.document.createElement('canvas'),
        ctx = canvas.getContext('2d');
    canvas.width = value;
    canvas.height = value;

    if (this.width > this.height) {
      diff = [this.width - this.height, 0];
    } else {
      diff = [0, this.height - this.width];
    }

    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, value, value);
    ctx.drawImage(this, diff[0] / 2, diff[1] / 2, this.width - diff[0], this.height - diff[1], 0, 0, value, value);
    fCallback(canvas.toDataURL('image/jpeg'));
  };

  img.src = url;
}
/**
 * @param {string} mailToUrl
 * @param {Function} PopupComposeViewModel
 * @returns {boolean}
 */

function mailToHelper(mailToUrl, PopupComposeViewModel) {
  if (mailToUrl && 'mailto:' === mailToUrl.toString().substr(0, 7).toLowerCase()) {
    if (!PopupComposeViewModel) {
      return true;
    }

    mailToUrl = mailToUrl.toString().substr(7);
    var to = [],
        cc = null,
        bcc = null,
        params = {};

    var email = mailToUrl.replace(/\?.+$/, ''),
        query = mailToUrl.replace(/^[^?]*\?/, ''),
        EmailModel = __webpack_require__(/*! Model/Email */ 82).default;

    params = simpleQueryParser(query);

    if (!isUnd(params.to)) {
      to = EmailModel.parseEmailLine(decodeURIComponent(email + ',' + params.to));
      to = _babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_13___default()(___WEBPACK_IMPORTED_MODULE_17___default.a).call(___WEBPACK_IMPORTED_MODULE_17___default.a, _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_14___default()(to).call(to, function (result, value) {
        if (value) {
          if (result[value.email]) {
            if (!result[value.email].name) {
              result[value.email] = value;
            }
          } else {
            result[value.email] = value;
          }
        }

        return result;
      }, {}));
    } else {
      to = EmailModel.parseEmailLine(email);
    }

    if (!isUnd(params.cc)) {
      cc = EmailModel.parseEmailLine(decodeURIComponent(params.cc));
    }

    if (!isUnd(params.bcc)) {
      bcc = EmailModel.parseEmailLine(decodeURIComponent(params.bcc));
    }

    __webpack_require__(/*! Knoin/Knoin */ 8).showScreenPopup(PopupComposeViewModel, [Common_Enums__WEBPACK_IMPORTED_MODULE_21__["ComposeType"].Empty, null, to, cc, bcc, isUnd(params.subject) ? null : pString(decodeURIComponent(params.subject)), isUnd(params.body) ? null : plainToHtml(pString(decodeURIComponent(params.body)))]);

    return true;
  }

  return false;
}
/**
 * @param {Function} fn
 * @returns {void}
 */

function domReady(fn) {
  $__WEBPACK_IMPORTED_MODULE_16___default()(function () {
    return fn();
  }); //
  //	if ('loading' !== window.document.readyState)
  //	{
  //		fn();
  //	}
  //	else
  //	{
  //		window.document.addEventListener('DOMContentLoaded', fn);
  //	}
}
var windowResize = ___WEBPACK_IMPORTED_MODULE_17___default.a.debounce(function (timeout) {
  if (isUnd(timeout) || isNull(timeout)) {
    Common_Globals__WEBPACK_IMPORTED_MODULE_20__["$win"].resize();
  } else {
    _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_10___default()(function () {
      Common_Globals__WEBPACK_IMPORTED_MODULE_20__["$win"].resize();
    }, timeout);
  }
}, 50);
/**
 * @returns {void}
 */

function windowResizeCallback() {
  windowResize();
}
var substr = window__WEBPACK_IMPORTED_MODULE_15___default.a.String.substr;

if ('b' !== 'ab'.substr(-1)) {
  substr = function substr(str, start, length) {
    start = 0 > start ? str.length + start : start;
    return str.substr(start, length);
  };

  window__WEBPACK_IMPORTED_MODULE_15___default.a.String.substr = substr;
}

/***/ }),
/* 3 */
/*!***************************!*\
  !*** external "window._" ***!
  \***************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = window._;

/***/ }),
/* 4 */
/*!*************************!*\
  !*** external "window" ***!
  \*************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = window;

/***/ }),
/* 5 */
/*!*********************************!*\
  !*** ./dev/Storage/Settings.js ***!
  \*********************************/
/*! exports provided: settingsGet, settingsSet, appSettingsGet, capa */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsGet", function() { return settingsGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsSet", function() { return settingsSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appSettingsGet", function() { return appSettingsGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capa", function() { return capa; });
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! window */ 4);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(window__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Common/Utils */ 2);


var SETTINGS = window__WEBPACK_IMPORTED_MODULE_0___default.a.__rlah_data() || null;
SETTINGS = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_1__["isNormal"])(SETTINGS) ? SETTINGS : {};
var APP_SETTINGS = SETTINGS.System || null;
APP_SETTINGS = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_1__["isNormal"])(APP_SETTINGS) ? APP_SETTINGS : {};
/**
 * @param {string} name
 * @returns {*}
 */

function settingsGet(name) {
  return Object(Common_Utils__WEBPACK_IMPORTED_MODULE_1__["isUnd"])(SETTINGS[name]) ? null : SETTINGS[name];
}
/**
 * @param {string} name
 * @param {*} value
 */

function settingsSet(name, value) {
  SETTINGS[name] = value;
}
/**
 * @param {string} name
 * @returns {*}
 */

function appSettingsGet(name) {
  return Object(Common_Utils__WEBPACK_IMPORTED_MODULE_1__["isUnd"])(APP_SETTINGS[name]) ? null : APP_SETTINGS[name];
}
/**
 * @param {string} name
 * @returns {boolean}
 */

function capa(name) {
  var values = settingsGet('Capa');
  return Object(Common_Utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(values) && Object(Common_Utils__WEBPACK_IMPORTED_MODULE_1__["isNormal"])(name) && -1 < Object(Common_Utils__WEBPACK_IMPORTED_MODULE_1__["inArray"])(name, values);
}

/***/ }),
/* 6 */
/*!*******************************!*\
  !*** ./dev/Common/Globals.js ***!
  \*******************************/
/*! exports provided: $win, $doc, $html, $body, $div, $hcont, startMicrotime, dropdownVisibility, useKeyboardShortcuts, sUserAgent, bIE, bChrome, bSafari, bMobileDevice, bDisableNanoScroll, bAnimationSupported, bXMLHttpRequestSupported, bIsHttps, htmlEditorDefaultConfig, htmlEditorLangsMap, bAllowPdfPreview, VIEW_MODELS, moveAction, leftPanelDisabled, leftPanelType, leftPanelWidth, popupVisibilityNames, popupVisibility, keyScopeReal, keyScopeFake, keyScope, data */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$win", function() { return $win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$doc", function() { return $doc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$html", function() { return $html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$body", function() { return $body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$div", function() { return $div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$hcont", function() { return $hcont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startMicrotime", function() { return startMicrotime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropdownVisibility", function() { return dropdownVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useKeyboardShortcuts", function() { return useKeyboardShortcuts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sUserAgent", function() { return sUserAgent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bIE", function() { return bIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bChrome", function() { return bChrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bSafari", function() { return bSafari; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bMobileDevice", function() { return bMobileDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bDisableNanoScroll", function() { return bDisableNanoScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bAnimationSupported", function() { return bAnimationSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bXMLHttpRequestSupported", function() { return bXMLHttpRequestSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bIsHttps", function() { return bIsHttps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlEditorDefaultConfig", function() { return htmlEditorDefaultConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlEditorLangsMap", function() { return htmlEditorLangsMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bAllowPdfPreview", function() { return bAllowPdfPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_MODELS", function() { return VIEW_MODELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveAction", function() { return moveAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftPanelDisabled", function() { return leftPanelDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftPanelType", function() { return leftPanelType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftPanelWidth", function() { return leftPanelWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popupVisibilityNames", function() { return popupVisibilityNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popupVisibility", function() { return popupVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyScopeReal", function() { return keyScopeReal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyScopeFake", function() { return keyScopeFake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyScope", function() { return keyScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ 314);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ 12);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! window */ 4);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(window__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! $ */ 7);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n($__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var key__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! key */ 21);
/* harmony import */ var key__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(key__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Common/Enums */ 0);








var $win = $__WEBPACK_IMPORTED_MODULE_4___default()(window__WEBPACK_IMPORTED_MODULE_2___default.a);
$win.__sizes = [0, 0];

var $doc = $__WEBPACK_IMPORTED_MODULE_4___default()(window__WEBPACK_IMPORTED_MODULE_2___default.a.document);
var $html = $__WEBPACK_IMPORTED_MODULE_4___default()('html');
var $body = $__WEBPACK_IMPORTED_MODULE_4___default()('body');
var $div = $__WEBPACK_IMPORTED_MODULE_4___default()('<div></div>');
var $hcont = $__WEBPACK_IMPORTED_MODULE_4___default()('<div></div>');
$hcont.attr('area', 'hidden').css({
  position: 'absolute',
  left: -5000
}).appendTo($body);
var startMicrotime = new window__WEBPACK_IMPORTED_MODULE_2___default.a.Date().getTime();
/**
 * @type {?}
 */

var dropdownVisibility = ko__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].observable(false).extend({
  rateLimit: 0
});
/**
 * @type {boolean}
 */

var useKeyboardShortcuts = ko__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].observable(true);
/**
 * @type {string}
 */

var sUserAgent = 'navigator' in window__WEBPACK_IMPORTED_MODULE_2___default.a && 'userAgent' in window__WEBPACK_IMPORTED_MODULE_2___default.a.navigator && window__WEBPACK_IMPORTED_MODULE_2___default.a.navigator.userAgent.toLowerCase() || '';
/**
 * @type {boolean}
 */

var bIE = -1 < sUserAgent.indexOf('msie');
/**
 * @type {boolean}
 */

var bChrome = -1 < sUserAgent.indexOf('chrome');
/**
 * @type {boolean}
 */

var bSafari = !bChrome && -1 < sUserAgent.indexOf('safari');
/**
 * @type {boolean}
 */

var bMobileDevice = /android/i.test(sUserAgent) || /iphone/i.test(sUserAgent) || /ipod/i.test(sUserAgent) || /ipad/i.test(sUserAgent) || /blackberry/i.test(sUserAgent);
/**
 * @type {boolean}
 */

var bDisableNanoScroll = bMobileDevice;
/**
 * @type {boolean}
 */

var bAnimationSupported = !bMobileDevice && $html.hasClass('csstransitions') && $html.hasClass('cssanimations');
/**
 * @type {boolean}
 */

var bXMLHttpRequestSupported = !!window__WEBPACK_IMPORTED_MODULE_2___default.a.XMLHttpRequest;
/**
 * @type {boolean}
 */

var bIsHttps = window__WEBPACK_IMPORTED_MODULE_2___default.a.document && window__WEBPACK_IMPORTED_MODULE_2___default.a.document.location ? 'https:' === window__WEBPACK_IMPORTED_MODULE_2___default.a.document.location.protocol : false;
/**
 * @type {Object}
 */

var htmlEditorDefaultConfig = {
  'title': false,
  'stylesSet': false,
  'customConfig': '',
  'contentsCss': '',
  'toolbarGroups': [{
    name: 'spec'
  }, {
    name: 'styles'
  }, {
    name: 'basicstyles',
    groups: ['basicstyles', 'cleanup', 'bidi']
  }, {
    name: 'colors'
  }, bMobileDevice ? {} : {
    name: 'paragraph',
    groups: ['list', 'indent', 'blocks', 'align']
  }, {
    name: 'links'
  }, {
    name: 'insert'
  }, {
    name: 'document',
    groups: ['mode', 'document', 'doctools']
  }, {
    name: 'others'
  }],
  'removePlugins': 'liststyle',
  'removeButtons': 'Format,Undo,Redo,Cut,Copy,Paste,Anchor,Strike,Subscript,Superscript,Image,SelectAll,Source',
  'removeDialogTabs': 'link:advanced;link:target;image:advanced;images:advanced',
  'extraPlugins': 'plain,signature',
  'allowedContent': true,
  'extraAllowedContent': true,
  'fillEmptyBlocks': false,
  'ignoreEmptyParagraph': true,
  'disableNativeSpellChecker': false,
  'colorButton_enableAutomatic': false,
  'colorButton_enableMore': true,
  'font_defaultLabel': 'Arial',
  'fontSize_defaultLabel': '13',
  'fontSize_sizes': '10/10px;12/12px;13/13px;14/14px;16/16px;18/18px;20/20px;24/24px;28/28px;36/36px;48/48px'
};
/**
 * @type {Object}
 */

var htmlEditorLangsMap = {
  'ar_sa': 'ar-sa',
  'bg_bg': 'bg',
  'cs_CZ': 'cs',
  'de_de': 'de',
  'el_gr': 'el',
  'es_es': 'es',
  'et_ee': 'et',
  'fr_fr': 'fr',
  'hu_hu': 'hu',
  'is_is': 'is',
  'it_it': 'it',
  'ja_jp': 'ja',
  'ko_kr': 'ko',
  'lt_lt': 'lt',
  'lv_lv': 'lv',
  'fa_ir': 'fa',
  'nb_no': 'nb',
  'nl_nl': 'nl',
  'pl_pl': 'pl',
  'pt_br': 'pt-br',
  'pt_pt': 'pt',
  'ro_ro': 'ro',
  'ru_ru': 'ru',
  'sk_sk': 'sk',
  'sl_si': 'sl',
  'sv_se': 'sv',
  'tr_tr': 'tr',
  'uk_ua': 'uk',
  'zh_cn': 'zh-cn',
  'zh_tw': 'zh'
};
/**
 * @type {boolean}
 */

var bAllowPdfPreview = !bMobileDevice;

if (bAllowPdfPreview && window__WEBPACK_IMPORTED_MODULE_2___default.a.navigator && window__WEBPACK_IMPORTED_MODULE_2___default.a.navigator.mimeTypes) {
  bAllowPdfPreview = !!_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(___WEBPACK_IMPORTED_MODULE_3___default.a).call(___WEBPACK_IMPORTED_MODULE_3___default.a, window__WEBPACK_IMPORTED_MODULE_2___default.a.navigator.mimeTypes, function (type) {
    return type && 'application/pdf' === type.type;
  });

  if (!bAllowPdfPreview) {
    bAllowPdfPreview = 'undefined' !== typeof window__WEBPACK_IMPORTED_MODULE_2___default.a.navigator.mimeTypes['application/pdf'];
  }
}


var VIEW_MODELS = {
  settings: [],
  'settings-removed': [],
  'settings-disabled': []
};
var moveAction = ko__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].observable(false);
var leftPanelDisabled = ko__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].observable(false);
var leftPanelType = ko__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].observable('');
var leftPanelWidth = ko__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].observable(0);
leftPanelDisabled.subscribe(function (value) {
  if (value && moveAction()) {
    moveAction(false);
  }
});
moveAction.subscribe(function (value) {
  if (value && leftPanelDisabled()) {
    leftPanelDisabled(false);
  }
}); // popups

var popupVisibilityNames = ko__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].observableArray([]);
var popupVisibility = ko__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].computed(function () {
  return 0 < popupVisibilityNames().length;
});
popupVisibility.subscribe(function (bValue) {
  $html.toggleClass('rl-modal', bValue);
}); // keys

var keyScopeReal = ko__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].observable(Common_Enums__WEBPACK_IMPORTED_MODULE_7__["KeyState"].All);
var keyScopeFake = ko__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].observable(Common_Enums__WEBPACK_IMPORTED_MODULE_7__["KeyState"].All);
var keyScope = ko__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].computed({
  read: function read() {
    return keyScopeFake();
  },
  write: function write(value) {
    if (Common_Enums__WEBPACK_IMPORTED_MODULE_7__["KeyState"].Menu !== value) {
      if (Common_Enums__WEBPACK_IMPORTED_MODULE_7__["KeyState"].Compose === value) {
        // disableKeyFilter
        key__WEBPACK_IMPORTED_MODULE_5___default.a.filter = function () {
          return useKeyboardShortcuts();
        };
      } else {
        // restoreKeyFilter
        key__WEBPACK_IMPORTED_MODULE_5___default.a.filter = function (event) {
          if (useKeyboardShortcuts()) {
            var el = event.target || event.srcElement,
                tagName = el ? el.tagName.toUpperCase() : '';
            return !('INPUT' === tagName || 'SELECT' === tagName || 'TEXTAREA' === tagName || el && 'DIV' === tagName && ('editorHtmlArea' === el.className || 'true' === '' + el.contentEditable));
          }

          return false;
        };
      }

      keyScopeFake(value);

      if (dropdownVisibility()) {
        value = Common_Enums__WEBPACK_IMPORTED_MODULE_7__["KeyState"].Menu;
      }
    }

    keyScopeReal(value);
  }
});
keyScopeReal.subscribe(function (value) {
  //	window.console.log('keyScope=' + sValue); // DEBUG
  key__WEBPACK_IMPORTED_MODULE_5___default.a.setScope(value);
});
dropdownVisibility.subscribe(function (value) {
  if (value) {
    keyScope(Common_Enums__WEBPACK_IMPORTED_MODULE_7__["KeyState"].Menu);
  } else if (Common_Enums__WEBPACK_IMPORTED_MODULE_7__["KeyState"].Menu === key__WEBPACK_IMPORTED_MODULE_5___default.a.getScope()) {
    keyScope(keyScopeFake());
  }
});
/**
 * @type {*}
 */

var data = {
  __APP__: null,
  iAjaxErrorCount: 0,
  iTokenErrorCount: 0,
  aBootstrapDropdowns: [],
  iMessageBodyCacheCount: 0,
  bUnload: false
};

/***/ }),
/* 7 */
/*!********************************!*\
  !*** external "window.jQuery" ***!
  \********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = window.jQuery;

/***/ }),
/* 8 */
/*!****************************!*\
  !*** ./dev/Knoin/Knoin.js ***!
  \****************************/
/*! exports provided: ViewType, hideLoading, createCommand, addSettingsViewModel, removeSettingsViewModel, disableSettingsViewModel, routeOff, routeOn, screen, getScreenPopup, hideScreenPopup, vmRunHook, buildViewModel, showScreenPopup, warmUpScreenPopup, isPopupVisible, screenOnRoute, startScreens, setHash, commandDecorator, command, viewDecorator, view, viewModel, popupDecorator, popup, settingsMenuKeysHandler */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewType", function() { return ViewType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return hideLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCommand", function() { return createCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSettingsViewModel", function() { return addSettingsViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSettingsViewModel", function() { return removeSettingsViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableSettingsViewModel", function() { return disableSettingsViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeOff", function() { return routeOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeOn", function() { return routeOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screen", function() { return screen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScreenPopup", function() { return getScreenPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideScreenPopup", function() { return hideScreenPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmRunHook", function() { return vmRunHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildViewModel", function() { return buildViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showScreenPopup", function() { return showScreenPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warmUpScreenPopup", function() { return warmUpScreenPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPopupVisible", function() { return isPopupVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenOnRoute", function() { return screenOnRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startScreens", function() { return startScreens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHash", function() { return setHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commandDecorator", function() { return commandDecorator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "command", function() { return commandDecorator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewDecorator", function() { return viewDecorator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view", function() { return viewDecorator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewModel", function() { return viewDecorator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popupDecorator", function() { return popupDecorator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popup", function() { return popupDecorator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsMenuKeysHandler", function() { return settingsMenuKeysHandler; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ 28);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ 48);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ 45);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ 224);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! $ */ 7);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n($__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var hasher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hasher */ 63);
/* harmony import */ var hasher__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hasher__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var crossroads__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! crossroads */ 176);
/* harmony import */ var crossroads__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(crossroads__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Common_Plugins__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Common/Plugins */ 36);
/* harmony import */ var Common_Globals__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Common/Globals */ 6);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Common/Utils */ 2);













var currentScreen = null,
    defaultScreenName = '';
var SCREENS = {};
var ViewType = {
  Popup: 'Popups',
  Left: 'Left',
  Right: 'Right',
  Center: 'Center'
};
/**
 * @returns {void}
 */

function hideLoading() {
  $__WEBPACK_IMPORTED_MODULE_5___default()('#rl-content').addClass('rl-content-show');
  $__WEBPACK_IMPORTED_MODULE_5___default()('#rl-loading').hide().remove();
}
/**
 * @param {Function} fExecute
 * @param {(Function|boolean|null)=} fCanExecute = true
 * @returns {Function}
 */

function createCommand(fExecute, fCanExecute) {
  if (fCanExecute === void 0) {
    fCanExecute = true;
  }

  return Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["createCommandLegacy"])(null, fExecute, fCanExecute);
}
/**
 * @param {Function} SettingsViewModelClass
 * @param {string} template
 * @param {string} labelName
 * @param {string} route
 * @param {boolean=} isDefault = false
 * @returns {void}
 */

function addSettingsViewModel(SettingsViewModelClass, template, labelName, route, isDefault) {
  if (isDefault === void 0) {
    isDefault = false;
  }

  SettingsViewModelClass.__rlSettingsData = {
    Label: labelName,
    Template: template,
    Route: route,
    IsDefault: !!isDefault
  };
  Common_Globals__WEBPACK_IMPORTED_MODULE_11__["VIEW_MODELS"].settings.push(SettingsViewModelClass);
}
/**
 * @param {Function} SettingsViewModelClass
 * @returns {void}
 */

function removeSettingsViewModel(SettingsViewModelClass) {
  Common_Globals__WEBPACK_IMPORTED_MODULE_11__["VIEW_MODELS"]['settings-removed'].push(SettingsViewModelClass);
}
/**
 * @param {Function} SettingsViewModelClass
 * @returns {void}
 */

function disableSettingsViewModel(SettingsViewModelClass) {
  Common_Globals__WEBPACK_IMPORTED_MODULE_11__["VIEW_MODELS"]['settings-disabled'].push(SettingsViewModelClass);
}
/**
 * @returns {void}
 */

function routeOff() {
  hasher__WEBPACK_IMPORTED_MODULE_7___default.a.changed.active = false;
}
/**
 * @returns {void}
 */

function routeOn() {
  hasher__WEBPACK_IMPORTED_MODULE_7___default.a.changed.active = true;
}
/**
 * @param {string} screenName
 * @returns {?Object}
 */

function screen(screenName) {
  return '' !== screenName && !Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["isUnd"])(SCREENS[screenName]) ? SCREENS[screenName] : null;
}
/**
 * @param {Function} ViewModelClassToShow
 * @returns {Function|null}
 */

function getScreenPopup(PopuViewModelClass) {
  var result = null;

  if (PopuViewModelClass) {
    result = PopuViewModelClass;

    if (PopuViewModelClass.default) {
      result = PopuViewModelClass.default;
    }
  }

  return result;
}
/**
 * @param {Function} ViewModelClassToHide
 * @returns {void}
 */

function hideScreenPopup(ViewModelClassToHide) {
  var ModalView = getScreenPopup(ViewModelClassToHide);

  if (ModalView && ModalView.__vm && ModalView.__dom) {
    ModalView.__vm.modalVisibility(false);
  }
}
/**
 * @param {string} hookName
 * @param {Function} ViewModelClass
 * @param {mixed=} params = null
 */

function vmRunHook(hookName, ViewModelClass, params) {
  if (params === void 0) {
    params = null;
  }

  ___WEBPACK_IMPORTED_MODULE_4___default.a.each(ViewModelClass.__names, function (name) {
    Object(Common_Plugins__WEBPACK_IMPORTED_MODULE_10__[/* runHook */ "f"])(hookName, [name, ViewModelClass.__vm, params]);
  });
}
/**
 * @param {Function} ViewModelClass
 * @param {Object=} vmScreen
 * @returns {*}
 */

function buildViewModel(ViewModelClass, vmScreen) {
  if (ViewModelClass && !ViewModelClass.__builded) {
    var vmDom = null;
    var vm = new ViewModelClass(vmScreen),
        position = ViewModelClass.__type || '',
        vmPlace = position ? $__WEBPACK_IMPORTED_MODULE_5___default()('#rl-content #rl-' + position.toLowerCase()) : null;
    ViewModelClass.__builded = true;
    ViewModelClass.__vm = vm;
    vm.onShowTrigger = ko__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].observable(false);
    vm.onHideTrigger = ko__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].observable(false);
    vm.viewModelName = ViewModelClass.__name;
    vm.viewModelNames = ViewModelClass.__names;
    vm.viewModelTemplateID = ViewModelClass.__templateID;
    vm.viewModelPosition = ViewModelClass.__type;

    if (vmPlace && 1 === vmPlace.length) {
      vmDom = $__WEBPACK_IMPORTED_MODULE_5___default()('<div></div>').addClass('rl-view-model').addClass('RL-' + vm.viewModelTemplateID).hide();
      vmDom.appendTo(vmPlace);
      vm.viewModelDom = vmDom;
      ViewModelClass.__dom = vmDom;

      if (ViewType.Popup === position) {
        vm.cancelCommand = vm.closeCommand = createCommand(function () {
          hideScreenPopup(ViewModelClass);
        });
        vm.modalVisibility.subscribe(function (value) {
          if (value) {
            vm.viewModelDom.show();
            vm.storeAndSetKeyScope();
            Common_Globals__WEBPACK_IMPORTED_MODULE_11__["popupVisibilityNames"].push(vm.viewModelName);
            vm.viewModelDom.css('z-index', 3000 + Object(Common_Globals__WEBPACK_IMPORTED_MODULE_11__["popupVisibilityNames"])().length + 10);

            if (vm.onShowTrigger) {
              vm.onShowTrigger(!vm.onShowTrigger());
            }

            Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["delegateRun"])(vm, 'onShowWithDelay', [], 500);
          } else {
            Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["delegateRun"])(vm, 'onHide');
            Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["delegateRun"])(vm, 'onHideWithDelay', [], 500);

            if (vm.onHideTrigger) {
              vm.onHideTrigger(!vm.onHideTrigger());
            }

            vm.restoreKeyScope();
            vmRunHook('view-model-on-hide', ViewModelClass);
            Common_Globals__WEBPACK_IMPORTED_MODULE_11__["popupVisibilityNames"].remove(vm.viewModelName);
            vm.viewModelDom.css('z-index', 2000);

            ___WEBPACK_IMPORTED_MODULE_4___default.a.delay(function () {
              return vm.viewModelDom.hide();
            }, 300);
          }
        });
      }

      vmRunHook('view-model-pre-build', ViewModelClass, vmDom);
      ko__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].applyBindingAccessorsToNode(vmDom[0], {
        translatorInit: true,
        template: function template() {
          return {
            name: vm.viewModelTemplateID
          };
        }
      }, vm);
      Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["delegateRun"])(vm, 'onBuild', [vmDom]);

      if (vm && ViewType.Popup === position) {
        vm.registerPopupKeyDown();
      }

      vmRunHook('view-model-post-build', ViewModelClass, vmDom);
    } else {
      Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["log"])('Cannot find view model position: ' + position);
    }
  }

  return ViewModelClass ? ViewModelClass.__vm : null;
}
/**
 * @param {Function} ViewModelClassToShow
 * @param {Array=} params
 * @returns {void}
 */

function showScreenPopup(ViewModelClassToShow, params) {
  if (params === void 0) {
    params = [];
  }

  var ModalView = getScreenPopup(ViewModelClassToShow);

  if (ModalView) {
    buildViewModel(ModalView);

    if (ModalView.__vm && ModalView.__dom) {
      Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["delegateRun"])(ModalView.__vm, 'onBeforeShow', params || []);

      ModalView.__vm.modalVisibility(true);

      Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["delegateRun"])(ModalView.__vm, 'onShow', params || []);
      vmRunHook('view-model-on-show', ModalView, params || []);
    }
  }
}
/**
 * @param {Function} ViewModelClassToShow
 * @returns {void}
 */

function warmUpScreenPopup(ViewModelClassToShow) {
  var ModalView = getScreenPopup(ViewModelClassToShow);

  if (ModalView) {
    buildViewModel(ModalView);

    if (ModalView.__vm && ModalView.__dom) {
      Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["delegateRun"])(ModalView.__vm, 'onWarmUp');
    }
  }
}
/**
 * @param {Function} ViewModelClassToShow
 * @returns {boolean}
 */

function isPopupVisible(ViewModelClassToShow) {
  var ModalView = getScreenPopup(ViewModelClassToShow);
  return ModalView && ModalView.__vm ? ModalView.__vm.modalVisibility() : false;
}
/**
 * @param {string} screenName
 * @param {string} subPart
 * @returns {void}
 */

function screenOnRoute(screenName, subPart) {
  var vmScreen = null,
      isSameScreen = false,
      cross = null;

  if ('' === Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["pString"])(screenName)) {
    screenName = defaultScreenName;
  }

  if ('' !== screenName) {
    vmScreen = screen(screenName);

    if (!vmScreen) {
      vmScreen = screen(defaultScreenName);

      if (vmScreen) {
        subPart = screenName + '/' + subPart;
        screenName = defaultScreenName;
      }
    }

    if (vmScreen && vmScreen.__started) {
      isSameScreen = currentScreen && vmScreen === currentScreen;

      if (!vmScreen.__builded) {
        vmScreen.__builded = true;

        if (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["isNonEmptyArray"])(vmScreen.viewModels())) {
          ___WEBPACK_IMPORTED_MODULE_4___default.a.each(vmScreen.viewModels(), function (ViewModelClass) {
            buildViewModel(ViewModelClass, vmScreen);
          });
        }

        Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["delegateRun"])(vmScreen, 'onBuild');
      }

      ___WEBPACK_IMPORTED_MODULE_4___default.a.defer(function () {
        // hide screen
        if (currentScreen && !isSameScreen) {
          Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["delegateRun"])(currentScreen, 'onHide');
          Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["delegateRun"])(currentScreen, 'onHideWithDelay', [], 500);

          if (currentScreen.onHideTrigger) {
            currentScreen.onHideTrigger(!currentScreen.onHideTrigger());
          }

          if (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["isNonEmptyArray"])(currentScreen.viewModels())) {
            ___WEBPACK_IMPORTED_MODULE_4___default.a.each(currentScreen.viewModels(), function (ViewModelClass) {
              if (ViewModelClass.__vm && ViewModelClass.__dom && ViewType.Popup !== ViewModelClass.__vm.viewModelPosition) {
                ViewModelClass.__dom.hide();

                ViewModelClass.__vm.viewModelVisibility(false);

                Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["delegateRun"])(ViewModelClass.__vm, 'onHide');
                Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["delegateRun"])(ViewModelClass.__vm, 'onHideWithDelay', [], 500);

                if (ViewModelClass.__vm.onHideTrigger) {
                  ViewModelClass.__vm.onHideTrigger(!ViewModelClass.__vm.onHideTrigger());
                }
              }
            });
          }
        } // --


        currentScreen = vmScreen; // show screen

        if (currentScreen && !isSameScreen) {
          Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["delegateRun"])(currentScreen, 'onShow');

          if (currentScreen.onShowTrigger) {
            currentScreen.onShowTrigger(!currentScreen.onShowTrigger());
          }

          Object(Common_Plugins__WEBPACK_IMPORTED_MODULE_10__[/* runHook */ "f"])('screen-on-show', [currentScreen.screenName(), currentScreen]);

          if (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["isNonEmptyArray"])(currentScreen.viewModels())) {
            ___WEBPACK_IMPORTED_MODULE_4___default.a.each(currentScreen.viewModels(), function (ViewModelClass) {
              if (ViewModelClass.__vm && ViewModelClass.__dom && ViewType.Popup !== ViewModelClass.__vm.viewModelPosition) {
                Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["delegateRun"])(ViewModelClass.__vm, 'onBeforeShow');

                ViewModelClass.__dom.show();

                ViewModelClass.__vm.viewModelVisibility(true);

                Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["delegateRun"])(ViewModelClass.__vm, 'onShow');

                if (ViewModelClass.__vm.onShowTrigger) {
                  ViewModelClass.__vm.onShowTrigger(!ViewModelClass.__vm.onShowTrigger());
                }

                Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["delegateRun"])(ViewModelClass.__vm, 'onShowWithDelay', [], 200);
                vmRunHook('view-model-on-show', ViewModelClass);
              }
            });
          }
        } // --


        cross = vmScreen && vmScreen.__cross ? vmScreen.__cross() : null;

        if (cross) {
          cross.parse(subPart);
        }
      });
    }
  }
}
/**
 * @param {Array} screensClasses
 * @returns {void}
 */

function startScreens(screensClasses) {
  ___WEBPACK_IMPORTED_MODULE_4___default.a.each(screensClasses, function (CScreen) {
    if (CScreen) {
      var vmScreen = new CScreen(),
          screenName = vmScreen ? vmScreen.screenName() : '';

      if (vmScreen && '' !== screenName) {
        if ('' === defaultScreenName) {
          defaultScreenName = screenName;
        }

        SCREENS[screenName] = vmScreen;
      }
    }
  });

  ___WEBPACK_IMPORTED_MODULE_4___default.a.each(SCREENS, function (vmScreen) {
    if (vmScreen && !vmScreen.__started && vmScreen.__start) {
      vmScreen.__started = true;

      vmScreen.__start();

      Object(Common_Plugins__WEBPACK_IMPORTED_MODULE_10__[/* runHook */ "f"])('screen-pre-start', [vmScreen.screenName(), vmScreen]);
      Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["delegateRun"])(vmScreen, 'onStart');
      Object(Common_Plugins__WEBPACK_IMPORTED_MODULE_10__[/* runHook */ "f"])('screen-post-start', [vmScreen.screenName(), vmScreen]);
    }
  });

  var cross = crossroads__WEBPACK_IMPORTED_MODULE_8___default.a.create();
  cross.addRoute(/^([a-zA-Z0-9-]*)\/?(.*)$/, screenOnRoute);
  hasher__WEBPACK_IMPORTED_MODULE_7___default.a.initialized.add(cross.parse, cross);
  hasher__WEBPACK_IMPORTED_MODULE_7___default.a.changed.add(cross.parse, cross);
  hasher__WEBPACK_IMPORTED_MODULE_7___default.a.init();

  ___WEBPACK_IMPORTED_MODULE_4___default.a.delay(function () {
    return Common_Globals__WEBPACK_IMPORTED_MODULE_11__["$html"].removeClass('rl-started-trigger').addClass('rl-started');
  }, 100);

  ___WEBPACK_IMPORTED_MODULE_4___default.a.delay(function () {
    return Common_Globals__WEBPACK_IMPORTED_MODULE_11__["$html"].addClass('rl-started-delay');
  }, 200);
}
/**
 * @param {string} sHash
 * @param {boolean=} silence = false
 * @param {boolean=} replace = false
 * @returns {void}
 */

function setHash(hash, silence, replace) {
  if (silence === void 0) {
    silence = false;
  }

  if (replace === void 0) {
    replace = false;
  }

  hash = '#' === hash.substr(0, 1) ? hash.substr(1) : hash;
  hash = '/' === hash.substr(0, 1) ? hash.substr(1) : hash;
  var cmd = replace ? 'replaceHash' : 'setHash';

  if (silence) {
    hasher__WEBPACK_IMPORTED_MODULE_7___default.a.changed.active = false;
    hasher__WEBPACK_IMPORTED_MODULE_7___default.a[cmd](hash);
    hasher__WEBPACK_IMPORTED_MODULE_7___default.a.changed.active = true;
  } else {
    hasher__WEBPACK_IMPORTED_MODULE_7___default.a.changed.active = true;
    hasher__WEBPACK_IMPORTED_MODULE_7___default.a[cmd](hash);
    hasher__WEBPACK_IMPORTED_MODULE_7___default.a.setHash(hash);
  }
}
/**
 * @param {Object} params
 * @returns {Function}
 */

function viewDecorator(_ref) {
  var name = _ref.name,
      type = _ref.type,
      templateID = _ref.templateID;
  return function (target) {
    if (target) {
      if (name) {
        if (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["isArray"])(name)) {
          target.__names = name;
        } else {
          target.__names = [name];
        }

        target.__name = target.__names[0];
      }

      if (type) {
        target.__type = type;
      }

      if (templateID) {
        target.__templateID = templateID;
      }
    }
  };
}
/**
 * @param {Object} params
 * @returns {Function}
 */


function popupDecorator(_ref2) {
  var name = _ref2.name,
      templateID = _ref2.templateID;
  return viewDecorator({
    name: name,
    type: ViewType.Popup,
    templateID: templateID
  });
}
/**
 * @param {Function} canExecute
 * @returns {Function}
 */


function commandDecorator(canExecute) {
  if (canExecute === void 0) {
    canExecute = true;
  }

  return function (target, key, descriptor) {
    if (!key || !key.match(/Command$/)) {
      throw new Error("name \"" + key + "\" should end with Command suffix");
    }

    var value = descriptor.value || descriptor.initializer(),
        normCanExecute = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_12__["isFunc"])(canExecute) ? canExecute : function () {
      return !!canExecute;
    };

    descriptor.value = function () {
      if (normCanExecute.call(this, this)) {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        value.apply(this, args);
      }

      return false;
    };

    descriptor.value.__realCanExecute = normCanExecute;
    descriptor.value.isCommand = true;
    return descriptor;
  };
}
/**
 * @param {miced} $items
 * @returns {Function}
 */


function settingsMenuKeysHandler($items) {
  return ___WEBPACK_IMPORTED_MODULE_4___default.a.throttle(function (event, handler) {
    var up = handler && 'up' === handler.shortcut;

    if (event && $items.length) {
      var index = $items.index(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()($items).call($items, '.selected'));

      if (up && 0 < index) {
        index -= 1;
      } else if (!up && index < $items.length - 1) {
        index += 1;
      }

      var resultHash = $items.eq(index).attr('href');

      if (resultHash) {
        setHash(resultHash, false, true);
      }
    }
  }, Common_Enums__WEBPACK_IMPORTED_MODULE_9__["Magics"].Time200ms);
}



/***/ }),
/* 9 */
/*!**********************************!*\
  !*** ./dev/Common/Translator.js ***!
  \**********************************/
/*! exports provided: trigger, i18n, i18nToNodes, initNotificationLanguage, initOnStartOrLangChange, getNotification, getNotificationFromResponse, getUploadErrorDescByCode, reload */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return i18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18nToNodes", function() { return i18nToNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initNotificationLanguage", function() { return initNotificationLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initOnStartOrLangChange", function() { return initOnStartOrLangChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotification", function() { return getNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotificationFromResponse", function() { return getNotificationFromResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUploadErrorDescByCode", function() { return getUploadErrorDescByCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reload", function() { return reload; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ 62);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ 45);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ 59);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ 151);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! window */ 4);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(window__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! $ */ 7);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n($__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Common_Globals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Common/Globals */ 6);
/* harmony import */ var Common_Momentor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Common/Momentor */ 61);
/* harmony import */ var Common_Links__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Common/Links */ 15);













var I18N_DATA = window__WEBPACK_IMPORTED_MODULE_4___default.a.rainloopI18N || {};
var I18N_NOTIFICATION_DATA = {};
var I18N_NOTIFICATION_MAP = [[Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].InvalidToken, 'NOTIFICATIONS/INVALID_TOKEN'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].InvalidToken, 'NOTIFICATIONS/INVALID_TOKEN'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].AuthError, 'NOTIFICATIONS/AUTH_ERROR'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].AccessError, 'NOTIFICATIONS/ACCESS_ERROR'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].ConnectionError, 'NOTIFICATIONS/CONNECTION_ERROR'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].CaptchaError, 'NOTIFICATIONS/CAPTCHA_ERROR'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].SocialFacebookLoginAccessDisable, 'NOTIFICATIONS/SOCIAL_FACEBOOK_LOGIN_ACCESS_DISABLE'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].SocialTwitterLoginAccessDisable, 'NOTIFICATIONS/SOCIAL_TWITTER_LOGIN_ACCESS_DISABLE'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].SocialGoogleLoginAccessDisable, 'NOTIFICATIONS/SOCIAL_GOOGLE_LOGIN_ACCESS_DISABLE'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].DomainNotAllowed, 'NOTIFICATIONS/DOMAIN_NOT_ALLOWED'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].AccountNotAllowed, 'NOTIFICATIONS/ACCOUNT_NOT_ALLOWED'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].AccountTwoFactorAuthRequired, 'NOTIFICATIONS/ACCOUNT_TWO_FACTOR_AUTH_REQUIRED'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].AccountTwoFactorAuthError, 'NOTIFICATIONS/ACCOUNT_TWO_FACTOR_AUTH_ERROR'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].CouldNotSaveNewPassword, 'NOTIFICATIONS/COULD_NOT_SAVE_NEW_PASSWORD'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].CurrentPasswordIncorrect, 'NOTIFICATIONS/CURRENT_PASSWORD_INCORRECT'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].NewPasswordShort, 'NOTIFICATIONS/NEW_PASSWORD_SHORT'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].NewPasswordWeak, 'NOTIFICATIONS/NEW_PASSWORD_WEAK'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].NewPasswordForbidden, 'NOTIFICATIONS/NEW_PASSWORD_FORBIDDENT'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].ContactsSyncError, 'NOTIFICATIONS/CONTACTS_SYNC_ERROR'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].CantGetMessageList, 'NOTIFICATIONS/CANT_GET_MESSAGE_LIST'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].CantGetMessage, 'NOTIFICATIONS/CANT_GET_MESSAGE'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].CantDeleteMessage, 'NOTIFICATIONS/CANT_DELETE_MESSAGE'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].CantMoveMessage, 'NOTIFICATIONS/CANT_MOVE_MESSAGE'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].CantCopyMessage, 'NOTIFICATIONS/CANT_MOVE_MESSAGE'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].CantSaveMessage, 'NOTIFICATIONS/CANT_SAVE_MESSAGE'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].CantSendMessage, 'NOTIFICATIONS/CANT_SEND_MESSAGE'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].InvalidRecipients, 'NOTIFICATIONS/INVALID_RECIPIENTS'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].CantSaveFilters, 'NOTIFICATIONS/CANT_SAVE_FILTERS'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].CantGetFilters, 'NOTIFICATIONS/CANT_GET_FILTERS'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].FiltersAreNotCorrect, 'NOTIFICATIONS/FILTERS_ARE_NOT_CORRECT'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].CantCreateFolder, 'NOTIFICATIONS/CANT_CREATE_FOLDER'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].CantRenameFolder, 'NOTIFICATIONS/CANT_RENAME_FOLDER'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].CantDeleteFolder, 'NOTIFICATIONS/CANT_DELETE_FOLDER'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].CantDeleteNonEmptyFolder, 'NOTIFICATIONS/CANT_DELETE_NON_EMPTY_FOLDER'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].CantSubscribeFolder, 'NOTIFICATIONS/CANT_SUBSCRIBE_FOLDER'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].CantUnsubscribeFolder, 'NOTIFICATIONS/CANT_UNSUBSCRIBE_FOLDER'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].CantSaveSettings, 'NOTIFICATIONS/CANT_SAVE_SETTINGS'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].CantSavePluginSettings, 'NOTIFICATIONS/CANT_SAVE_PLUGIN_SETTINGS'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].DomainAlreadyExists, 'NOTIFICATIONS/DOMAIN_ALREADY_EXISTS'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].CantInstallPackage, 'NOTIFICATIONS/CANT_INSTALL_PACKAGE'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].CantDeletePackage, 'NOTIFICATIONS/CANT_DELETE_PACKAGE'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].InvalidPluginPackage, 'NOTIFICATIONS/INVALID_PLUGIN_PACKAGE'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].UnsupportedPluginPackage, 'NOTIFICATIONS/UNSUPPORTED_PLUGIN_PACKAGE'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].LicensingServerIsUnavailable, 'NOTIFICATIONS/LICENSING_SERVER_IS_UNAVAILABLE'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].LicensingExpired, 'NOTIFICATIONS/LICENSING_EXPIRED'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].LicensingBanned, 'NOTIFICATIONS/LICENSING_BANNED'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].DemoSendMessageError, 'NOTIFICATIONS/DEMO_SEND_MESSAGE_ERROR'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].DemoAccountError, 'NOTIFICATIONS/DEMO_ACCOUNT_ERROR'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].AccountAlreadyExists, 'NOTIFICATIONS/ACCOUNT_ALREADY_EXISTS'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].AccountDoesNotExist, 'NOTIFICATIONS/ACCOUNT_DOES_NOT_EXIST'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].MailServerError, 'NOTIFICATIONS/MAIL_SERVER_ERROR'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].InvalidInputArgument, 'NOTIFICATIONS/INVALID_INPUT_ARGUMENT'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].UnknownNotification, 'NOTIFICATIONS/UNKNOWN_ERROR'], [Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].UnknownError, 'NOTIFICATIONS/UNKNOWN_ERROR']];
var trigger = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(false);
/**
 * @param {string} key
 * @param {Object=} valueList
 * @param {string=} defaulValue
 * @returns {string}
 */

function i18n(key, valueList, defaulValue) {
  var valueName = '',
      result = I18N_DATA[key];

  if (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_9__["isUnd"])(result)) {
    result = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_9__["isUnd"])(defaulValue) ? key : defaulValue;
  }

  if (!Object(Common_Utils__WEBPACK_IMPORTED_MODULE_9__["isUnd"])(valueList) && !Object(Common_Utils__WEBPACK_IMPORTED_MODULE_9__["isNull"])(valueList)) {
    for (valueName in valueList) {
      if (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_9__["has"])(valueList, valueName)) {
        result = result.replace('%' + valueName + '%', valueList[valueName]);
      }
    }
  }

  return result;
}

var i18nToNode = function i18nToNode(element) {
  var $el = $__WEBPACK_IMPORTED_MODULE_6___default()(element),
      key = $el.data('i18n');

  if (key) {
    if ('[' === key.substr(0, 1)) {
      switch (key.substr(0, 6)) {
        case '[html]':
          $el.html(i18n(key.substr(6)));
          break;

        case '[place':
          $el.attr('placeholder', i18n(key.substr(13)));
          break;

        case '[title':
          $el.attr('title', i18n(key.substr(7)));
          break;
        // no default
      }
    } else {
      $el.text(i18n(key));
    }
  }
};
/**
 * @param {Object} elements
 * @param {boolean=} animate = false
 */


function i18nToNodes(elements, animate) {
  if (animate === void 0) {
    animate = false;
  }

  ___WEBPACK_IMPORTED_MODULE_5___default.a.defer(function () {
    $__WEBPACK_IMPORTED_MODULE_6___default()('[data-i18n]', elements).each(function (index, item) {
      i18nToNode(item);
    });

    if (animate && Common_Globals__WEBPACK_IMPORTED_MODULE_10__["bAnimationSupported"]) {
      $__WEBPACK_IMPORTED_MODULE_6___default()('.i18n-animation[data-i18n]', elements).letterfx({
        'fx': 'fall fade',
        'backwards': false,
        'timing': 50,
        'fx_duration': '50ms',
        'letter_end': 'restore',
        'element_end': 'restore'
      });
    }
  });
}

var reloadData = function reloadData() {
  if (window__WEBPACK_IMPORTED_MODULE_4___default.a.rainloopI18N) {
    I18N_DATA = window__WEBPACK_IMPORTED_MODULE_4___default.a.rainloopI18N || {};
    i18nToNodes(window__WEBPACK_IMPORTED_MODULE_4___default.a.document, true);
    Object(Common_Momentor__WEBPACK_IMPORTED_MODULE_11__["reload"])();
    trigger(!trigger());
  }

  window__WEBPACK_IMPORTED_MODULE_4___default.a.rainloopI18N = null;
};
/**
 * @returns {void}
 */


function initNotificationLanguage() {
  I18N_NOTIFICATION_MAP.forEach(function (item) {
    I18N_NOTIFICATION_DATA[item[0]] = i18n(item[1]);
  });
}
/**
 * @param {Function} startCallback
 * @param {Function=} langCallback = null
 */

function initOnStartOrLangChange(startCallback, langCallback) {
  if (langCallback === void 0) {
    langCallback = null;
  }

  if (startCallback) {
    startCallback();
  }

  if (langCallback) {
    trigger.subscribe(function () {
      if (startCallback) {
        startCallback();
      }

      if (langCallback) {
        langCallback();
      }
    });
  } else if (startCallback) {
    trigger.subscribe(startCallback);
  }
}
/**
 * @param {number} code
 * @param {*=} message = ''
 * @param {*=} defCode = null
 * @returns {string}
 */

function getNotification(code, message, defCode) {
  if (message === void 0) {
    message = '';
  }

  if (defCode === void 0) {
    defCode = null;
  }

  code = window__WEBPACK_IMPORTED_MODULE_4___default.a.parseInt(code, 10) || 0;

  if (Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].ClientViewError === code && message) {
    return message;
  }

  defCode = defCode ? window__WEBPACK_IMPORTED_MODULE_4___default.a.parseInt(defCode, 10) || 0 : 0;
  return Object(Common_Utils__WEBPACK_IMPORTED_MODULE_9__["isUnd"])(I18N_NOTIFICATION_DATA[code]) ? defCode && Object(Common_Utils__WEBPACK_IMPORTED_MODULE_9__["isUnd"])(I18N_NOTIFICATION_DATA[defCode]) ? I18N_NOTIFICATION_DATA[defCode] : '' : I18N_NOTIFICATION_DATA[code];
}
/**
 * @param {object} response
 * @param {number} defCode = Notification.UnknownNotification
 * @returns {string}
 */

function getNotificationFromResponse(response, defCode) {
  if (defCode === void 0) {
    defCode = Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].UnknownNotification;
  }

  return response && response.ErrorCode ? getNotification(Object(Common_Utils__WEBPACK_IMPORTED_MODULE_9__["pInt"])(response.ErrorCode), response.ErrorMessage || '') : getNotification(defCode);
}
/**
 * @param {*} code
 * @returns {string}
 */

function getUploadErrorDescByCode(code) {
  var result = '';

  switch (window__WEBPACK_IMPORTED_MODULE_4___default.a.parseInt(code, 10) || 0) {
    case Common_Enums__WEBPACK_IMPORTED_MODULE_8__["UploadErrorCode"].FileIsTooBig:
      result = i18n('UPLOAD/ERROR_FILE_IS_TOO_BIG');
      break;

    case Common_Enums__WEBPACK_IMPORTED_MODULE_8__["UploadErrorCode"].FilePartiallyUploaded:
      result = i18n('UPLOAD/ERROR_FILE_PARTIALLY_UPLOADED');
      break;

    case Common_Enums__WEBPACK_IMPORTED_MODULE_8__["UploadErrorCode"].FileNoUploaded:
      result = i18n('UPLOAD/ERROR_NO_FILE_UPLOADED');
      break;

    case Common_Enums__WEBPACK_IMPORTED_MODULE_8__["UploadErrorCode"].MissingTempFolder:
      result = i18n('UPLOAD/ERROR_MISSING_TEMP_FOLDER');
      break;

    case Common_Enums__WEBPACK_IMPORTED_MODULE_8__["UploadErrorCode"].FileOnSaveingError:
      result = i18n('UPLOAD/ERROR_ON_SAVING_FILE');
      break;

    case Common_Enums__WEBPACK_IMPORTED_MODULE_8__["UploadErrorCode"].FileType:
      result = i18n('UPLOAD/ERROR_FILE_TYPE');
      break;

    default:
      result = i18n('UPLOAD/ERROR_UNKNOWN');
      break;
  }

  return result;
}
/**
 * @param {boolean} admin
 * @param {string} language
 */

function reload(admin, language) {
  var start = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_9__["microtime"])();
  Common_Globals__WEBPACK_IMPORTED_MODULE_10__["$html"].addClass('rl-changing-language');
  return new _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
    $__WEBPACK_IMPORTED_MODULE_6___default.a.ajax({
      url: Object(Common_Links__WEBPACK_IMPORTED_MODULE_12__[/* langLink */ "n"])(language, admin),
      dataType: 'script',
      cache: true
    }).then(function () {
      ___WEBPACK_IMPORTED_MODULE_5___default.a.delay(function () {
        reloadData();
        var isRtl = -1 < Object(Common_Utils__WEBPACK_IMPORTED_MODULE_9__["inArray"])((language || '').toLowerCase(), ['ar', 'ar_sa', 'he', 'he_he', 'ur', 'ur_ir']);
        Common_Globals__WEBPACK_IMPORTED_MODULE_10__["$html"].removeClass('rl-changing-language').removeClass('rl-rtl rl-ltr') // .attr('dir', isRtl ? 'rtl' : 'ltr')
        .addClass(isRtl ? 'rl-rtl' : 'rl-ltr');
        resolve();
      }, 500 < Object(Common_Utils__WEBPACK_IMPORTED_MODULE_9__["microtime"])() - start ? 1 : 500);
    }, function () {
      Common_Globals__WEBPACK_IMPORTED_MODULE_10__["$html"].removeClass('rl-changing-language');
      window__WEBPACK_IMPORTED_MODULE_4___default.a.rainloopI18N = null;
      reject();
    });
  });
} // init section

Common_Globals__WEBPACK_IMPORTED_MODULE_10__["$html"].addClass('rl-' + (Common_Globals__WEBPACK_IMPORTED_MODULE_10__["$html"].attr('dir') || 'ltr'));

/***/ }),
/* 10 */
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/esm/inheritsLoose.js ***!
  \**************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inheritsLoose; });
/* harmony import */ var _babel_runtime_corejs3_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/create */ 293);
/* harmony import */ var _babel_runtime_corejs3_core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ 294);


function _inheritsLoose(subClass, superClass) {
  subClass.prototype = _babel_runtime_corejs3_core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(subClass, superClass);
}

/***/ }),
/* 11 */,
/* 12 */
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js ***!
  \*****************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/find */ 333);

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
/*!*****************************!*\
  !*** ./dev/Common/Links.js ***!
  \*****************************/
/*! exports provided: populateAuthSuffix, subQueryPrefix, root, rootAdmin, rootUser, attachmentRaw, attachmentDownload, attachmentPreview, attachmentThumbnailPreview, attachmentPreviewAsPlain, attachmentFramed, serverRequest, upload, uploadContacts, uploadBackground, append, change, ajax, messageViewLink, messageDownloadLink, avatarLink, publicLink, userBackground, phpInfo, langLink, exportContactsVcf, exportContactsCsv, socialGoogle, socialTwitter, socialFacebook, staticPrefix, emptyContactPic, sound, notificationMailIcon, openPgpJs, openPgpWorkerJs, openPgpWorkerPath, themePreviewLink, inbox, settings, about, admin, mailBox */
/*! exports used: ajax, append, attachmentDownload, attachmentFramed, attachmentPreview, attachmentPreviewAsPlain, attachmentThumbnailPreview, avatarLink, change, emptyContactPic, exportContactsCsv, exportContactsVcf, inbox, langLink, mailBox, messageDownloadLink, messageViewLink, notificationMailIcon, openPgpJs, openPgpWorkerJs, phpInfo, populateAuthSuffix, root, rootAdmin, rootUser, settings, socialFacebook, socialGoogle, socialTwitter, sound, subQueryPrefix, themePreviewLink, upload, uploadBackground, uploadContacts, userBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return populateAuthSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return subQueryPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return rootAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return rootUser; });
/* unused harmony export attachmentRaw */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return attachmentDownload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return attachmentPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return attachmentThumbnailPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return attachmentPreviewAsPlain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return attachmentFramed; });
/* unused harmony export serverRequest */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return upload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return uploadContacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return uploadBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return change; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ajax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return messageViewLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return messageDownloadLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return avatarLink; });
/* unused harmony export publicLink */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return userBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return phpInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return langLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return exportContactsVcf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return exportContactsCsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return socialGoogle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return socialTwitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return socialFacebook; });
/* unused harmony export staticPrefix */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return emptyContactPic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return sound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return notificationMailIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return openPgpJs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return openPgpWorkerJs; });
/* unused harmony export openPgpWorkerPath */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return themePreviewLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return inbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return settings; });
/* unused harmony export about */
/* unused harmony export admin */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return mailBox; });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ 45);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ 59);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! window */ 4);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(window__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Storage_Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Storage/Settings */ 5);





var ROOT = './',
    HASH_PREFIX = '#/',
    SERVER_PREFIX = './?',
    SUB_QUERY_PREFIX = '&q[]=',
    VERSION = Storage_Settings__WEBPACK_IMPORTED_MODULE_4__["appSettingsGet"]('version'),
    WEB_PREFIX = Storage_Settings__WEBPACK_IMPORTED_MODULE_4__["appSettingsGet"]('webPath') || '',
    VERSION_PREFIX = Storage_Settings__WEBPACK_IMPORTED_MODULE_4__["appSettingsGet"]('webVersionPath') || 'rainloop/v/' + VERSION + '/',
    STATIC_PREFIX = VERSION_PREFIX + 'static/',
    ADMIN_HOST_USE = !!Storage_Settings__WEBPACK_IMPORTED_MODULE_4__["appSettingsGet"]('adminHostUse'),
    ADMIN_PATH = Storage_Settings__WEBPACK_IMPORTED_MODULE_4__["appSettingsGet"]('adminPath') || 'admin';
var AUTH_PREFIX = Storage_Settings__WEBPACK_IMPORTED_MODULE_4__["settingsGet"]('AuthAccountHash') || '0';
/**
 * @returns {void}
 */

function populateAuthSuffix() {
  AUTH_PREFIX = Storage_Settings__WEBPACK_IMPORTED_MODULE_4__["settingsGet"]('AuthAccountHash') || '0';
}
/**
 * @returns {string}
 */

function subQueryPrefix() {
  return SUB_QUERY_PREFIX;
}
/**
 * @param {string=} startupUrl
 * @returns {string}
 */

function root(startupUrl) {
  if (startupUrl === void 0) {
    startupUrl = '';
  }

  return HASH_PREFIX + Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["pString"])(startupUrl);
}
/**
 * @returns {string}
 */

function rootAdmin() {
  return ADMIN_HOST_USE ? ROOT : SERVER_PREFIX + ADMIN_PATH;
}
/**
 * @returns {string}
 */

function rootUser() {
  return ROOT;
}
/**
 * @param {string} type
 * @param {string} download
 * @param {string=} customSpecSuffix
 * @returns {string}
 */

function attachmentRaw(type, download, customSpecSuffix) {
  customSpecSuffix = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["isUnd"])(customSpecSuffix) ? AUTH_PREFIX : customSpecSuffix;
  return SERVER_PREFIX + '/Raw/' + SUB_QUERY_PREFIX + '/' + customSpecSuffix + '/' + type + '/' + SUB_QUERY_PREFIX + '/' + download;
}
/**
 * @param {string} download
 * @param {string=} customSpecSuffix
 * @returns {string}
 */

function attachmentDownload(download, customSpecSuffix) {
  return attachmentRaw('Download', download, customSpecSuffix);
}
/**
 * @param {string} download
 * @param {string=} customSpecSuffix
 * @returns {string}
 */

function attachmentPreview(download, customSpecSuffix) {
  return attachmentRaw('View', download, customSpecSuffix);
}
/**
 * @param {string} download
 * @param {string=} customSpecSuffix
 * @returns {string}
 */

function attachmentThumbnailPreview(download, customSpecSuffix) {
  return attachmentRaw('ViewThumbnail', download, customSpecSuffix);
}
/**
 * @param {string} download
 * @param {string=} customSpecSuffix
 * @returns {string}
 */

function attachmentPreviewAsPlain(download, customSpecSuffix) {
  return attachmentRaw('ViewAsPlain', download, customSpecSuffix);
}
/**
 * @param {string} download
 * @param {string=} customSpecSuffix
 * @returns {string}
 */

function attachmentFramed(download, customSpecSuffix) {
  return attachmentRaw('FramedView', download, customSpecSuffix);
}
/**
 * @param {string} type
 * @returns {string}
 */

function serverRequest(type) {
  return SERVER_PREFIX + '/' + type + '/' + SUB_QUERY_PREFIX + '/' + AUTH_PREFIX + '/';
}
/**
 * @returns {string}
 */

function upload() {
  return serverRequest('Upload');
}
/**
 * @returns {string}
 */

function uploadContacts() {
  return serverRequest('UploadContacts');
}
/**
 * @returns {string}
 */

function uploadBackground() {
  return serverRequest('UploadBackground');
}
/**
 * @returns {string}
 */

function append() {
  return serverRequest('Append');
}
/**
 * @param {string} email
 * @returns {string}
 */

function change(email) {
  return serverRequest('Change') + Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["encodeURIComponent"])(email) + '/';
}
/**
 * @param {string} add
 * @returns {string}
 */

function ajax(add) {
  return serverRequest('Ajax') + add;
}
/**
 * @param {string} requestHash
 * @returns {string}
 */

function messageViewLink(requestHash) {
  return SERVER_PREFIX + '/Raw/' + SUB_QUERY_PREFIX + '/' + AUTH_PREFIX + '/ViewAsPlain/' + SUB_QUERY_PREFIX + '/' + requestHash;
}
/**
 * @param {string} requestHash
 * @returns {string}
 */

function messageDownloadLink(requestHash) {
  return SERVER_PREFIX + '/Raw/' + SUB_QUERY_PREFIX + '/' + AUTH_PREFIX + '/Download/' + SUB_QUERY_PREFIX + '/' + requestHash;
}
/**
 * @param {string} email
 * @returns {string}
 */

function avatarLink(email) {
  return SERVER_PREFIX + '/Raw/0/Avatar/' + Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["encodeURIComponent"])(email) + '/';
}
/**
 * @param {string} hash
 * @returns {string}
 */

function publicLink(hash) {
  return SERVER_PREFIX + '/Raw/0/Public/' + hash + '/';
}
/**
 * @param {string} hash
 * @returns {string}
 */

function userBackground(hash) {
  return SERVER_PREFIX + '/Raw/' + SUB_QUERY_PREFIX + '/' + AUTH_PREFIX + '/UserBackground/' + SUB_QUERY_PREFIX + '/' + hash;
}
/**
 * @returns {string}
 */

function phpInfo() {
  return SERVER_PREFIX + '/Info';
}
/**
 * @param {string} lang
 * @param {boolean} isAdmin
 * @returns {string}
 */

function langLink(lang, isAdmin) {
  return SERVER_PREFIX + '/Lang/0/' + (isAdmin ? 'Admin' : 'App') + '/' + window__WEBPACK_IMPORTED_MODULE_2___default.a.encodeURI(lang) + '/' + VERSION + '/';
}
/**
 * @returns {string}
 */

function exportContactsVcf() {
  return SERVER_PREFIX + '/Raw/' + SUB_QUERY_PREFIX + '/' + AUTH_PREFIX + '/ContactsVcf/';
}
/**
 * @returns {string}
 */

function exportContactsCsv() {
  return SERVER_PREFIX + '/Raw/' + SUB_QUERY_PREFIX + '/' + AUTH_PREFIX + '/ContactsCsv/';
}
/**
 * @param {boolean} xauth = false
 * @returns {string}
 */

function socialGoogle(xauth) {
  if (xauth === void 0) {
    xauth = false;
  }

  return SERVER_PREFIX + 'SocialGoogle' + ('' !== AUTH_PREFIX ? '/' + SUB_QUERY_PREFIX + '/' + AUTH_PREFIX + '/' : '') + (xauth ? '&xauth=1' : '');
}
/**
 * @returns {string}
 */

function socialTwitter() {
  return SERVER_PREFIX + 'SocialTwitter' + ('' !== AUTH_PREFIX ? '/' + SUB_QUERY_PREFIX + '/' + AUTH_PREFIX + '/' : '');
}
/**
 * @returns {string}
 */

function socialFacebook() {
  return SERVER_PREFIX + 'SocialFacebook' + ('' !== AUTH_PREFIX ? '/' + SUB_QUERY_PREFIX + '/' + AUTH_PREFIX + '/' : '');
}
/**
 * @param {string} path
 * @returns {string}
 */

function staticPrefix(path) {
  return STATIC_PREFIX + path;
}
/**
 * @returns {string}
 */

function emptyContactPic() {
  return staticPrefix('css/images/empty-contact.png');
}
/**
 * @param {string} fileName
 * @returns {string}
 */

function sound(fileName) {
  return staticPrefix('sounds/' + fileName);
}
/**
 * @returns {string}
 */

function notificationMailIcon() {
  return staticPrefix('css/images/icom-message-notification.png');
}
/**
 * @returns {string}
 */

function openPgpJs() {
  return staticPrefix('js/min/openpgp.min.js');
}
/**
 * @returns {string}
 */

function openPgpWorkerJs() {
  return staticPrefix('js/min/openpgp.worker.min.js');
}
/**
 * @returns {string}
 */

function openPgpWorkerPath() {
  return staticPrefix('js/min/');
}
/**
 * @param {string} theme
 * @returns {string}
 */

function themePreviewLink(theme) {
  var prefix = VERSION_PREFIX;

  if ('@custom' === theme.substr(-7)) {
    theme = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["trim"])(theme.substring(0, theme.length - 7));
    prefix = WEB_PREFIX;
  }

  return prefix + 'themes/' + window__WEBPACK_IMPORTED_MODULE_2___default.a.encodeURI(theme) + '/images/preview.png';
}
/**
 * @param {string} inboxFolderName = 'INBOX'
 * @returns {string}
 */

function inbox(inboxFolderName) {
  if (inboxFolderName === void 0) {
    inboxFolderName = 'INBOX';
  }

  return HASH_PREFIX + 'mailbox/' + inboxFolderName;
}
/**
 * @param {string=} screenName = ''
 * @returns {string}
 */

function settings(screenName) {
  if (screenName === void 0) {
    screenName = '';
  }

  return HASH_PREFIX + 'settings' + (screenName ? '/' + screenName : '');
}
/**
 * @returns {string}
 */

function about() {
  return HASH_PREFIX + 'about';
}
/**
 * @param {string} screenName
 * @returns {string}
 */

function admin(screenName) {
  var result = HASH_PREFIX;

  switch (screenName) {
    case 'AdminDomains':
      result += 'domains';
      break;

    case 'AdminSecurity':
      result += 'security';
      break;

    case 'AdminLicensing':
      result += 'licensing';
      break;
    // no default
  }

  return result;
}
/**
 * @param {string} folder
 * @param {number=} page = 1
 * @param {string=} search = ''
 * @param {string=} threadUid = ''
 * @returns {string}
 */

function mailBox(folder, page, search, threadUid) {
  if (page === void 0) {
    page = 1;
  }

  if (search === void 0) {
    search = '';
  }

  if (threadUid === void 0) {
    threadUid = '';
  }

  page = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["isNormal"])(page) ? Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["pInt"])(page) : 1;
  search = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["pString"])(search);
  var result = HASH_PREFIX + 'mailbox/';

  if ('' !== folder) {
    var resultThreadUid = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["pInt"])(threadUid);
    result += window__WEBPACK_IMPORTED_MODULE_2___default.a.encodeURI(folder) + (0 < resultThreadUid ? '~' + resultThreadUid : '');
  }

  if (1 < page) {
    result = result.replace(/[/]+$/, '');
    result += '/p' + page;
  }

  if ('' !== search) {
    result = result.replace(/[/]+$/, '');
    result += '/' + window__WEBPACK_IMPORTED_MODULE_2___default.a.encodeURI(search);
  }

  return result;
}

/***/ }),
/* 16 */,
/* 17 */
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/map */ 348);

/***/ }),
/* 18 */
/*!**********************************!*\
  !*** ./dev/Remote/Admin/Ajax.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var Remote_AbstractAjax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Remote/AbstractAjax */ 303);



var RemoteAdminAjax = /*#__PURE__*/function (_AbstractAjaxRemote) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(RemoteAdminAjax, _AbstractAjaxRemote);

  function RemoteAdminAjax() {
    var _this;

    _this = _AbstractAjaxRemote.call(this) || this;
    _this.oRequests = {};
    return _this;
  }
  /**
   * @param {?Function} fCallback
   * @param {string} sLogin
   * @param {string} sPassword
   */


  var _proto = RemoteAdminAjax.prototype;

  _proto.adminLogin = function adminLogin(fCallback, sLogin, sPassword) {
    this.defaultRequest(fCallback, 'AdminLogin', {
      'Login': sLogin,
      'Password': sPassword
    });
  }
  /**
   * @param {?Function} fCallback
   */
  ;

  _proto.adminLogout = function adminLogout(fCallback) {
    this.defaultRequest(fCallback, 'AdminLogout');
  }
  /**
   * @param {?Function} fCallback
   * @param {?} oData
   */
  ;

  _proto.saveAdminConfig = function saveAdminConfig(fCallback, oData) {
    this.defaultRequest(fCallback, 'AdminSettingsUpdate', oData);
  }
  /**
   * @param {string} key
   * @param {?Function} valueFn
   * @param {?Function} fn
   */
  ;

  _proto.saveAdminConfigHelper = function saveAdminConfigHelper(key, valueFn, fn) {
    var _this2 = this;

    return function (value) {
      var data = {};
      data[key] = valueFn ? valueFn(value) : value;

      _this2.saveAdminConfig(fn || null, data);
    };
  }
  /**
   * @param {?Function} fCallback
   * @param {boolean=} bIncludeAliases = true
   */
  ;

  _proto.domainList = function domainList(fCallback, bIncludeAliases) {
    if (bIncludeAliases === void 0) {
      bIncludeAliases = true;
    }

    this.defaultRequest(fCallback, 'AdminDomainList', {
      'IncludeAliases': bIncludeAliases ? '1' : '0'
    });
  }
  /**
   * @param {?Function} fCallback
   */
  ;

  _proto.pluginList = function pluginList(fCallback) {
    this.defaultRequest(fCallback, 'AdminPluginList');
  }
  /**
   * @param {?Function} fCallback
   */
  ;

  _proto.packagesList = function packagesList(fCallback) {
    this.defaultRequest(fCallback, 'AdminPackagesList');
  }
  /**
   * @param {?Function} fCallback
   */
  ;

  _proto.coreData = function coreData(fCallback) {
    this.defaultRequest(fCallback, 'AdminCoreData');
  }
  /**
   * @param {?Function} fCallback
   */
  ;

  _proto.updateCoreData = function updateCoreData(fCallback) {
    this.defaultRequest(fCallback, 'AdminUpdateCoreData', {}, 90000);
  }
  /**
   * @param {?Function} fCallback
   * @param {Object} oPackage
   */
  ;

  _proto.packageInstall = function packageInstall(fCallback, oPackage) {
    this.defaultRequest(fCallback, 'AdminPackageInstall', {
      'Id': oPackage.id,
      'Type': oPackage.type,
      'File': oPackage.file
    }, 60000);
  }
  /**
   * @param {?Function} fCallback
   * @param {Object} oPackage
   */
  ;

  _proto.packageDelete = function packageDelete(fCallback, oPackage) {
    this.defaultRequest(fCallback, 'AdminPackageDelete', {
      'Id': oPackage.id
    });
  }
  /**
   * @param {?Function} fCallback
   * @param {string} sName
   */
  ;

  _proto.domain = function domain(fCallback, sName) {
    this.defaultRequest(fCallback, 'AdminDomainLoad', {
      'Name': sName
    });
  }
  /**
   * @param {?Function} fCallback
   * @param {string} sName
   */
  ;

  _proto.plugin = function plugin(fCallback, sName) {
    this.defaultRequest(fCallback, 'AdminPluginLoad', {
      'Name': sName
    });
  }
  /**
   * @param {?Function} fCallback
   * @param {string} sName
   */
  ;

  _proto.domainDelete = function domainDelete(fCallback, sName) {
    this.defaultRequest(fCallback, 'AdminDomainDelete', {
      'Name': sName
    });
  }
  /**
   * @param {?Function} fCallback
   * @param {string} sName
   * @param {boolean} bDisabled
   */
  ;

  _proto.domainDisable = function domainDisable(fCallback, sName, bDisabled) {
    return this.defaultRequest(fCallback, 'AdminDomainDisable', {
      Name: sName,
      Disabled: bDisabled ? '1' : '0'
    });
  }
  /**
   * @param {?Function} fCallback
   * @param {Object} oConfig
   */
  ;

  _proto.pluginSettingsUpdate = function pluginSettingsUpdate(fCallback, oConfig) {
    return this.defaultRequest(fCallback, 'AdminPluginSettingsUpdate', oConfig);
  }
  /**
   * @param {?Function} fCallback
   * @param {boolean} bForce
   */
  ;

  _proto.licensing = function licensing(fCallback, bForce) {
    return this.defaultRequest(fCallback, 'AdminLicensing', {
      Force: bForce ? '1' : '0'
    });
  }
  /**
   * @param {?Function} fCallback
   * @param {string} sDomain
   * @param {string} sKey
   */
  ;

  _proto.licensingActivate = function licensingActivate(fCallback, sDomain, sKey) {
    return this.defaultRequest(fCallback, 'AdminLicensingActivate', {
      Domain: sDomain,
      Key: sKey
    });
  }
  /**
   * @param {?Function} fCallback
   * @param {string} sName
   * @param {boolean} bDisabled
   */
  ;

  _proto.pluginDisable = function pluginDisable(fCallback, sName, bDisabled) {
    return this.defaultRequest(fCallback, 'AdminPluginDisable', {
      Name: sName,
      Disabled: bDisabled ? '1' : '0'
    });
  };

  _proto.createDomainAlias = function createDomainAlias(fCallback, sName, sAlias) {
    this.defaultRequest(fCallback, 'AdminDomainAliasSave', {
      Name: sName,
      Alias: sAlias
    });
  };

  _proto.createOrUpdateDomain = function createOrUpdateDomain(fCallback, bCreate, sName, sIncHost, iIncPort, sIncSecure, bIncShortLogin, bUseSieve, sSieveAllowRaw, sSieveHost, iSievePort, sSieveSecure, sOutHost, iOutPort, sOutSecure, bOutShortLogin, bOutAuth, bOutPhpMail, sWhiteList) {
    this.defaultRequest(fCallback, 'AdminDomainSave', {
      'Create': bCreate ? '1' : '0',
      'Name': sName,
      'IncHost': sIncHost,
      'IncPort': iIncPort,
      'IncSecure': sIncSecure,
      'IncShortLogin': bIncShortLogin ? '1' : '0',
      'UseSieve': bUseSieve ? '1' : '0',
      'SieveAllowRaw': sSieveAllowRaw ? '1' : '0',
      'SieveHost': sSieveHost,
      'SievePort': iSievePort,
      'SieveSecure': sSieveSecure,
      'OutHost': sOutHost,
      'OutPort': iOutPort,
      'OutSecure': sOutSecure,
      'OutShortLogin': bOutShortLogin ? '1' : '0',
      'OutAuth': bOutAuth ? '1' : '0',
      'OutUsePhpMail': bOutPhpMail ? '1' : '0',
      'WhiteList': sWhiteList
    });
  };

  _proto.testConnectionForDomain = function testConnectionForDomain(fCallback, sName, sIncHost, iIncPort, sIncSecure, bUseSieve, sSieveHost, iSievePort, sSieveSecure, sOutHost, iOutPort, sOutSecure, bOutAuth, bOutPhpMail) {
    this.defaultRequest(fCallback, 'AdminDomainTest', {
      'Name': sName,
      'IncHost': sIncHost,
      'IncPort': iIncPort,
      'IncSecure': sIncSecure,
      'UseSieve': bUseSieve ? '1' : '0',
      'SieveHost': sSieveHost,
      'SievePort': iSievePort,
      'SieveSecure': sSieveSecure,
      'OutHost': sOutHost,
      'OutPort': iOutPort,
      'OutSecure': sOutSecure,
      'OutAuth': bOutAuth ? '1' : '0',
      'OutUsePhpMail': bOutPhpMail ? '1' : '0'
    });
  }
  /**
   * @param {?Function} fCallback
   * @param {?} oData
   */
  ;

  _proto.testContacts = function testContacts(fCallback, oData) {
    this.defaultRequest(fCallback, 'AdminContactsTest', oData);
  }
  /**
   * @param {?Function} fCallback
   * @param {?} oData
   */
  ;

  _proto.saveNewAdminPassword = function saveNewAdminPassword(fCallback, oData) {
    this.defaultRequest(fCallback, 'AdminPasswordUpdate', oData);
  }
  /**
   * @param {?Function} fCallback
   */
  ;

  _proto.adminPing = function adminPing(fCallback) {
    this.defaultRequest(fCallback, 'AdminPing');
  };

  return RemoteAdminAjax;
}(Remote_AbstractAjax__WEBPACK_IMPORTED_MODULE_1__[/* AbstractAjaxRemote */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (new RemoteAdminAjax());

/***/ }),
/* 19 */
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/esm/applyDecoratedDescriptor.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _applyDecoratedDescriptor; });
/* harmony import */ var _babel_runtime_corejs3_core_js_instance_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/for-each */ 297);
/* harmony import */ var _babel_runtime_corejs3_core_js_instance_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_instance_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/keys */ 298);
/* harmony import */ var _babel_runtime_corejs3_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_instance_reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/reduce */ 299);
/* harmony import */ var _babel_runtime_corejs3_core_js_instance_reduce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_instance_reduce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_instance_reverse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/reverse */ 300);
/* harmony import */ var _babel_runtime_corejs3_core_js_instance_reverse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_instance_reverse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/slice */ 301);
/* harmony import */ var _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/define-property */ 302);
/* harmony import */ var _babel_runtime_corejs3_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__);






function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var _context, _context2, _context3;

  var desc = {};

  _babel_runtime_corejs3_core_js_instance_for_each__WEBPACK_IMPORTED_MODULE_0___default()(_context = _babel_runtime_corejs3_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(descriptor)).call(_context, function (key) {
    desc[key] = descriptor[key];
  });

  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = _babel_runtime_corejs3_core_js_instance_reduce__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = _babel_runtime_corejs3_core_js_instance_reverse__WEBPACK_IMPORTED_MODULE_3___default()(_context3 = _babel_runtime_corejs3_core_js_instance_slice__WEBPACK_IMPORTED_MODULE_4___default()(decorators).call(decorators)).call(_context3)).call(_context2, function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    _babel_runtime_corejs3_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default()(target, property, desc);

    desc = null;
  }

  return desc;
}

/***/ }),
/* 20 */
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/object/get-own-property-descriptor */ 389);

/***/ }),
/* 21 */
/*!*****************************!*\
  !*** external "window.key" ***!
  \*****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = window.key;

/***/ }),
/* 22 */,
/* 23 */
/*!******************************!*\
  !*** ./dev/Common/Events.js ***!
  \******************************/
/*! exports provided: sub, pub */
/*! exports used: pub, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pub; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Common_Plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Common/Plugins */ 36);



var SUBS = {};
/**
 * @param {string|Object} name
 * @param {Function} func
 * @param {Object=} context
 */

function sub(name, func, context) {
  if (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(name)) {
    context = func || null;
    func = null;

    ___WEBPACK_IMPORTED_MODULE_0___default.a.each(name, function (subFunc, subName) {
      sub(subName, subFunc, context);
    });
  } else {
    if (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_1__["isUnd"])(SUBS[name])) {
      SUBS[name] = [];
    }

    SUBS[name].push([func, context]);
  }
}
/**
 * @param {string} name
 * @param {Array=} args
 */

function pub(name, args) {
  Common_Plugins__WEBPACK_IMPORTED_MODULE_2__[/* runHook */ "f"]('rl-pub', [name, args]);

  if (!Object(Common_Utils__WEBPACK_IMPORTED_MODULE_1__["isUnd"])(SUBS[name])) {
    ___WEBPACK_IMPORTED_MODULE_0___default.a.each(SUBS[name], function (items) {
      if (items[0]) {
        items[0].apply(items[1] || null, args || []);
      }
    });
  }
}

/***/ }),
/* 24 */
/*!******************************!*\
  !*** ./dev/Common/Consts.js ***!
  \******************************/
/*! exports provided: MESSAGES_PER_PAGE, MESSAGES_PER_PAGE_VALUES, CONTACTS_PER_PAGE, DEFAULT_AJAX_TIMEOUT, SEARCH_AJAX_TIMEOUT, SEND_MESSAGE_AJAX_TIMEOUT, SAVE_MESSAGE_AJAX_TIMEOUT, CONTACTS_SYNC_AJAX_TIMEOUT, UNUSED_OPTION_VALUE, CLIENT_SIDE_STORAGE_INDEX_NAME, IMAP_DEFAULT_PORT, IMAP_DEFAULT_SECURE_PORT, SMTP_DEFAULT_PORT, SMTP_DEFAULT_SECURE_PORT, SIEVE_DEFAULT_PORT, MESSAGE_BODY_CACHE_LIMIT, AJAX_ERROR_LIMIT, TOKEN_ERROR_LIMIT, RAINLOOP_TRIAL_KEY, DATA_IMAGE_USER_DOT_PIC, DATA_IMAGE_TRANSP_PIC, DATA_IMAGE_LAZY_PLACEHOLDER_PIC */
/*! exports used: AJAX_ERROR_LIMIT, CLIENT_SIDE_STORAGE_INDEX_NAME, CONTACTS_PER_PAGE, CONTACTS_SYNC_AJAX_TIMEOUT, DATA_IMAGE_LAZY_PLACEHOLDER_PIC, DATA_IMAGE_USER_DOT_PIC, DEFAULT_AJAX_TIMEOUT, IMAP_DEFAULT_PORT, MESSAGES_PER_PAGE, MESSAGES_PER_PAGE_VALUES, MESSAGE_BODY_CACHE_LIMIT, SAVE_MESSAGE_AJAX_TIMEOUT, SEARCH_AJAX_TIMEOUT, SEND_MESSAGE_AJAX_TIMEOUT, SIEVE_DEFAULT_PORT, SMTP_DEFAULT_PORT, TOKEN_ERROR_LIMIT, UNUSED_OPTION_VALUE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return MESSAGES_PER_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return MESSAGES_PER_PAGE_VALUES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CONTACTS_PER_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return DEFAULT_AJAX_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SEARCH_AJAX_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SEND_MESSAGE_AJAX_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SAVE_MESSAGE_AJAX_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CONTACTS_SYNC_AJAX_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return UNUSED_OPTION_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CLIENT_SIDE_STORAGE_INDEX_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return IMAP_DEFAULT_PORT; });
/* unused harmony export IMAP_DEFAULT_SECURE_PORT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SMTP_DEFAULT_PORT; });
/* unused harmony export SMTP_DEFAULT_SECURE_PORT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SIEVE_DEFAULT_PORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return MESSAGE_BODY_CACHE_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AJAX_ERROR_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return TOKEN_ERROR_LIMIT; });
/* unused harmony export RAINLOOP_TRIAL_KEY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DATA_IMAGE_USER_DOT_PIC; });
/* unused harmony export DATA_IMAGE_TRANSP_PIC */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DATA_IMAGE_LAZY_PLACEHOLDER_PIC; });
var MESSAGES_PER_PAGE = 20;
var MESSAGES_PER_PAGE_VALUES = [10, 20, 30, 50, 100];
var CONTACTS_PER_PAGE = 50;
var DEFAULT_AJAX_TIMEOUT = 30000;
var SEARCH_AJAX_TIMEOUT = 300000;
var SEND_MESSAGE_AJAX_TIMEOUT = 300000;
var SAVE_MESSAGE_AJAX_TIMEOUT = 200000;
var CONTACTS_SYNC_AJAX_TIMEOUT = 200000;
var UNUSED_OPTION_VALUE = '__UNUSE__';
var CLIENT_SIDE_STORAGE_INDEX_NAME = 'rlcsc';
var IMAP_DEFAULT_PORT = 143;
var IMAP_DEFAULT_SECURE_PORT = 993;
var SMTP_DEFAULT_PORT = 25;
var SMTP_DEFAULT_SECURE_PORT = 465;
var SIEVE_DEFAULT_PORT = 4190;
var MESSAGE_BODY_CACHE_LIMIT = 15;
var AJAX_ERROR_LIMIT = 7;
var TOKEN_ERROR_LIMIT = 10;
var RAINLOOP_TRIAL_KEY = 'RAINLOOP-TRIAL-KEY';
/* eslint max-len: 0 */

var DATA_IMAGE_USER_DOT_PIC = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAHHklEQVRoQ7VZW08bVxCeXRuwIbTGXIwNtBBaqjwgVUiR8lDlbza9qe1DpVZ9aNQ/0KpPeaJK07SpcuEeCEmUAObm21bfrL9lONjexSYrWfbunj37zXdmvpkz9oIgCKTD0Wg0xPd94TDP83Q0zvWa50vzklSrdanVanqf4/D84GBGr+F+Op3S8fqoJxLOdnZgTvsO/nYhenHA+UC7CWF1uXwkb9++ldPTUwVerVbVqFQqpR8YPjQ0JCMjI5LNDijoRgP3PQVu5+5Eor2XGLg7IV4GkIdHJ/LmzRs5ODiIwNbrdR0O0GCcq4Xz4eFhmZyclP7+tDQaIik/BG5XKQn4SwG3zJTLZXn9+rUclI8UHD5YVoDDN8bSzXhONwL48fFxGR4eilzFZT1uFRIB5yT8BqCdnR3Z3d0VP9Un6XRawYJpggVrZBv38ME4XKtUKnLt2jUplUoy1PR/l3U7T6sVSAQcgMAkj8PDQ9ne3pajoyMRL7zeKsYZWHgWYDGmv78/mmdwcFA+mJlSgziHDWrERrsjEXDXegTi1tZW+DLxI2bxIrqFNYTXyDyCFweMAHCwb8e4RnTNuOsqe3t7sra21pTD0Kct666E8XlcZyzw9/RUUXK5nK5oUinUQI6TQ3cynO/v78vq6qrKXCNwlTiJJpyNGc3nZHp6uqV2dwrQWOCtZBDAV1ZWwsQk7f0wiQn5kffbAu/0/KWBYzIC1+XukfGx0RGZmppKlC2tIV0Bh4aDcZW7HhkfH8urLLZL7T2pihvlkMNnz56FiadHxicL41IsFpN41bkxsYxbRdFo9jwB8KdPn14J8KnSpBQKhQs63nPmbCVRcBUAR2Lq1VVmpksyMTFxAXjcEsQybiegESionjx5osCZOeNe1O4+EhCAX7bQSgQcxRHTMgAgcz5+/Dis/hL4uHU3/B4YGNASGHIKxuEql0k+l05AeIAF1vPnz5VxFFmdDlaJrMtZITJeSsXCOTlMunKxjLtMYOKNjQ158eJFuAuKkUOb5sEwgff19SkJUBVkThZUbnXZrtCKBQ6gbnWIkjZpyne3ejAWoGnA7Icz6irvBLgbOMicCM6TkxPx/LAkbXfgWcsazuE2kFRsKD5Z+CiqDumKncpZvieWcS6dDVD8xiYCNflpJdwcdwJOf9airLmVQ7DPzMxIYWLsXGXoVqLt5k0M3K3JUVPDZdbWNzsCp48TPFdvdnZWUz32nDha7bJ63kgAJPzSdRks9/Kf9xMJAQ1gq2NpaUmy2Yz4zar4nQC3xb99AQwCcGzLAAwuhG8YiWvcOKts+r4GOe5nMhm5efOm9lUA3E3vSZJRrKvE0fnPv//Jy5cvo5cTHIPQbSjhOoqq69evS19f6lxDKK4+sVhigZPtKJqbrQeqxd5+WR4+fKgqgT0k2XX3nhiPgETWXFhYkFzuPZ2yVq1GTSOXpE47/VjgNnD4m4GG7/LhsTx69EiwD4Vr2MwIIxgbAH18fKx1yfz8vEogNvGtWnCuhLZa9UTAreVWFsHy/b/+Vrbdl7E5REMQD2jDoUbByty+/ZnU64GkU2HzyJLhktU1cLv8nARgkYS2d3ajAgwG8qU2oLmDZ92CMaOjo7K4uCiZgbDWaRWgnZhPxLhrMUCvr69riwKZk1LHF7XqrWAO9hJxH6ozNzcnCx/PqztZg9mf6SQMscCtm2C5ke4BGMlHWTUp36036AJajDVrFMzBrhhWslQsSrFYiOqVpMriNYIgqFRq2j3FAb/zffT6zuxFXxsNzs3NTXn16lW4gYiW96w1FyedF+83xG/2FNGCRpU4NjamMsn+OZ9xE5RXqdaDdPpib6RWCzuwKF9RxqI2AVNQBwQYJoK0wdBejnqtEikP3pfP51XjUTESl12FqJEKxsEorARYDD44ONTeID7YpsEnrRvQfWAI2e8WfDaTUSIwJ0iBCmFOtOUAHvVMPp/TPwvYFVYFIuP8l+DBgwdaa2Miqwa0GgYwfeMltovbDfh6c1vIgMYcliSsKv4IWFr6VDHxvldvBAH+1sA+cnl5WYOPmmr9ir+1l9I0Cgz0yjhXjfJJ0JROnmezWbl165ayr/5fqwcBNr7IfhjMqKcvESSM4eRcCasQ3bDNObmKPLdGUGpZsN24cUNLBm9zazu4d++e6qpNBFaTuUS26U5dpuR1CxyA7J9ddrMRqlz4pwLLYawymPd++/2PADt2ugcGwq9gCCdhQ96C6xWwa6j1ceuq+I0EhW0i8MAIVJfeL3d/DVD8EKi12P6/2S2jV/EccVB54O/ejz/9HGCpoBBMta5rXMXLu53D1XAwjhXwvvv+h4BAXVe4bOu3O3ChxF08LiZFG3fel199G9CH3fLyqv24NcB44MRhpdK788U3CpyKwsCw590xmfSpzsBt0Fqc3ud3vtZigxWcVZCklVpSiN0w3q5E/h9TGMIUuA3+EQAAAABJRU5ErkJggg==';
var DATA_IMAGE_TRANSP_PIC = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIW2NkAAIAAAoAAggA9GkAAAAASUVORK5CYII=';
var DATA_IMAGE_LAZY_PLACEHOLDER_PIC = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC';

/***/ }),
/* 25 */
/*!***************************************!*\
  !*** ./dev/Knoin/AbstractViewNext.js ***!
  \***************************************/
/*! exports provided: AbstractViewNext */
/*! exports used: AbstractViewNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractViewNext; });
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Common_Globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Common/Globals */ 6);




var AbstractViewNext = /*#__PURE__*/function () {
  function AbstractViewNext() {
    this.bDisabeCloseOnEsc = false;
    this.sDefaultKeyScope = Common_Enums__WEBPACK_IMPORTED_MODULE_2__["KeyState"].None;
    this.sCurrentKeyScope = Common_Enums__WEBPACK_IMPORTED_MODULE_2__["KeyState"].None;
    this.viewModelVisibility = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(false);
    this.modalVisibility = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(false).extend({
      rateLimit: 0
    });
    this.viewModelName = '';
    this.viewModelNames = [];
    this.viewModelDom = null;
  }

  var _proto = AbstractViewNext.prototype;

  /**
   * @returns {void}
   */
  _proto.storeAndSetKeyScope = function storeAndSetKeyScope() {
    this.sCurrentKeyScope = Object(Common_Globals__WEBPACK_IMPORTED_MODULE_3__["keyScope"])();
    Object(Common_Globals__WEBPACK_IMPORTED_MODULE_3__["keyScope"])(this.sDefaultKeyScope);
  }
  /**
   * @returns {void}
   */
  ;

  _proto.restoreKeyScope = function restoreKeyScope() {
    Object(Common_Globals__WEBPACK_IMPORTED_MODULE_3__["keyScope"])(this.sCurrentKeyScope);
  }
  /**
   * @returns {void}
   */
  ;

  _proto.registerPopupKeyDown = function registerPopupKeyDown() {
    var _this = this;

    Common_Globals__WEBPACK_IMPORTED_MODULE_3__["$win"].on('keydown', function (event) {
      if (event && _this.modalVisibility && _this.modalVisibility()) {
        if (!_this.bDisabeCloseOnEsc && Common_Enums__WEBPACK_IMPORTED_MODULE_2__["EventKeyCode"].Esc === event.keyCode) {
          Object(Common_Utils__WEBPACK_IMPORTED_MODULE_1__["delegateRun"])(_this, 'cancelCommand');
          return false;
        } else if (Common_Enums__WEBPACK_IMPORTED_MODULE_2__["EventKeyCode"].Backspace === event.keyCode && !Object(Common_Utils__WEBPACK_IMPORTED_MODULE_1__["inFocus"])()) {
          return false;
        }
      }

      return true;
    });
  };

  _proto.cancelCommand = function cancelCommand() {} // eslint-disable-line no-empty-function
  ;

  _proto.closeCommand = function closeCommand() {} // eslint-disable-line no-empty-function
  ;

  return AbstractViewNext;
}();

/***/ }),
/* 26 */
/*!******************************!*\
  !*** ./dev/Stores/Social.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! window */ 4);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(window__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! $ */ 7);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n($__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Storage_Settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Storage/Settings */ 5);





var SocialStore = /*#__PURE__*/function () {
  function SocialStore() {
    var _this = this;

    this.google = {};
    this.twitter = {};
    this.facebook = {};
    this.dropbox = {}; // Google

    this.google.enabled = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(false);
    this.google.clientID = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable('');
    this.google.clientSecret = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable('');
    this.google.apiKey = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable('');
    this.google.loading = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(false);
    this.google.userName = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable('');
    this.google.loggined = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].computed(function () {
      return '' !== _this.google.userName();
    });
    this.google.capa = {};
    this.google.capa.auth = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(false);
    this.google.capa.authGmail = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(false);
    this.google.capa.drive = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(false);
    this.google.capa.preview = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(false);
    this.google.require = {};
    this.google.require.clientSettings = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].computed(function () {
      return _this.google.enabled() && (_this.google.capa.auth() || _this.google.capa.authGmail() || _this.google.capa.drive());
    });
    this.google.require.apiKeySettings = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].computed(function () {
      return _this.google.enabled() && _this.google.capa.drive();
    }); // Facebook

    this.facebook.enabled = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(false);
    this.facebook.appID = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable('');
    this.facebook.appSecret = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable('');
    this.facebook.loading = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(false);
    this.facebook.userName = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable('');
    this.facebook.supported = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(false);
    this.facebook.loggined = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].computed(function () {
      return '' !== _this.facebook.userName();
    }); // Twitter

    this.twitter.enabled = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(false);
    this.twitter.consumerKey = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable('');
    this.twitter.consumerSecret = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable('');
    this.twitter.loading = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(false);
    this.twitter.userName = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable('');
    this.twitter.loggined = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].computed(function () {
      return '' !== _this.twitter.userName();
    }); // Dropbox

    this.dropbox.enabled = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(false);
    this.dropbox.apiKey = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable('');
  }

  var _proto = SocialStore.prototype;

  _proto.populate = function populate() {
    this.google.enabled(!!Storage_Settings__WEBPACK_IMPORTED_MODULE_3__["settingsGet"]('AllowGoogleSocial'));
    this.google.clientID(Storage_Settings__WEBPACK_IMPORTED_MODULE_3__["settingsGet"]('GoogleClientID'));
    this.google.clientSecret(Storage_Settings__WEBPACK_IMPORTED_MODULE_3__["settingsGet"]('GoogleClientSecret'));
    this.google.apiKey(Storage_Settings__WEBPACK_IMPORTED_MODULE_3__["settingsGet"]('GoogleApiKey'));
    this.google.capa.auth(!!Storage_Settings__WEBPACK_IMPORTED_MODULE_3__["settingsGet"]('AllowGoogleSocialAuth'));
    this.google.capa.authGmail(!!Storage_Settings__WEBPACK_IMPORTED_MODULE_3__["settingsGet"]('AllowGoogleSocialAuthGmail'));
    this.google.capa.drive(!!Storage_Settings__WEBPACK_IMPORTED_MODULE_3__["settingsGet"]('AllowGoogleSocialDrive'));
    this.google.capa.preview(!!Storage_Settings__WEBPACK_IMPORTED_MODULE_3__["settingsGet"]('AllowGoogleSocialPreview'));
    this.facebook.enabled(!!Storage_Settings__WEBPACK_IMPORTED_MODULE_3__["settingsGet"]('AllowFacebookSocial'));
    this.facebook.appID(Storage_Settings__WEBPACK_IMPORTED_MODULE_3__["settingsGet"]('FacebookAppID'));
    this.facebook.appSecret(Storage_Settings__WEBPACK_IMPORTED_MODULE_3__["settingsGet"]('FacebookAppSecret'));
    this.facebook.supported(!!Storage_Settings__WEBPACK_IMPORTED_MODULE_3__["settingsGet"]('SupportedFacebookSocial'));
    this.twitter.enabled = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(!!Storage_Settings__WEBPACK_IMPORTED_MODULE_3__["settingsGet"]('AllowTwitterSocial'));
    this.twitter.consumerKey = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Storage_Settings__WEBPACK_IMPORTED_MODULE_3__["settingsGet"]('TwitterConsumerKey'));
    this.twitter.consumerSecret = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Storage_Settings__WEBPACK_IMPORTED_MODULE_3__["settingsGet"]('TwitterConsumerSecret'));
    this.dropbox.enabled(!!Storage_Settings__WEBPACK_IMPORTED_MODULE_3__["settingsGet"]('AllowDropboxSocial'));
    this.dropbox.apiKey(Storage_Settings__WEBPACK_IMPORTED_MODULE_3__["settingsGet"]('DropboxApiKey'));
  };

  _proto.appendDropbox = function appendDropbox() {
    if (!window__WEBPACK_IMPORTED_MODULE_0___default.a.Dropbox && this.dropbox.enabled() && this.dropbox.apiKey()) {
      if (!window__WEBPACK_IMPORTED_MODULE_0___default.a.document.getElementById('dropboxjs')) {
        var script = window__WEBPACK_IMPORTED_MODULE_0___default.a.document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://www.dropbox.com/static/api/2/dropins.js';
        $__WEBPACK_IMPORTED_MODULE_2___default()(script).attr('id', 'dropboxjs').attr('data-app-key', this.dropbox.apiKey());
        window__WEBPACK_IMPORTED_MODULE_0___default.a.document.body.appendChild(script);
      }
    }
  };

  return SocialStore;
}();

/* harmony default export */ __webpack_exports__["a"] = (new SocialStore());

/***/ }),
/* 27 */,
/* 28 */
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js ***!
  \*******************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/filter */ 358);

/***/ }),
/* 29 */
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),
/* 30 */
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 126)))

/***/ }),
/* 31 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/global.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 126)))

/***/ }),
/* 32 */
/*!***********************************!*\
  !*** ./dev/Component/Abstract.js ***!
  \***********************************/
/*! exports provided: AbstractComponent, componentExportHelper */
/*! exports used: AbstractComponent, componentExportHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return componentExportHelper; });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ 151);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $ */ 7);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n($__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Common_Translator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Common/Translator */ 9);






var AbstractComponent = /*#__PURE__*/function () {
  function AbstractComponent() {
    this.disposable = [];
  }

  var _proto = AbstractComponent.prototype;

  _proto.dispose = function dispose() {
    this.disposable.forEach(function (funcToDispose) {
      if (funcToDispose && funcToDispose.dispose) {
        funcToDispose.dispose();
      }
    });
  };

  return AbstractComponent;
}();
/**
 * @param {*} ClassObject
 * @param {string} templateID = ''
 * @returns {Object}
 */


var componentExportHelper = function componentExportHelper(ClassObject, templateID) {
  if (templateID === void 0) {
    templateID = '';
  }

  return {
    template: templateID ? {
      element: templateID
    } : '<b></b>',
    viewModel: {
      createViewModel: function createViewModel(params, componentInfo) {
        params = params || {};
        params.element = null;

        if (componentInfo && componentInfo.element) {
          params.component = componentInfo;
          params.element = $__WEBPACK_IMPORTED_MODULE_1___default()(componentInfo.element);
          Object(Common_Translator__WEBPACK_IMPORTED_MODULE_4__["i18nToNodes"])(params.element);

          if (!Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["isUnd"])(params.inline) && ko__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].unwrap(params.inline)) {
            params.element.css('display', 'inline-block');
          }
        }

        return new ClassObject(params);
      }
    }
  };
};



/***/ }),
/* 33 */
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/set-timeout.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/set-timeout */ 248);

/***/ }),
/* 34 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/export.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ 31);
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 157).f;
var isForced = __webpack_require__(/*! ../internals/is-forced */ 187);
var path = __webpack_require__(/*! ../internals/path */ 51);
var bind = __webpack_require__(/*! ../internals/function-bind-context */ 116);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 52);
var has = __webpack_require__(/*! ../internals/has */ 54);

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof NativeConstructor) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return NativeConstructor.apply(this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    target[key] = resultProperty;

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!has(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};


/***/ }),
/* 35 */,
/* 36 */
/*!*******************************!*\
  !*** ./dev/Common/Plugins.js ***!
  \*******************************/
/*! exports provided: addHook, runHook, mainSettingsGet, remoteRequest, addSettingsViewModel, addSettingsViewModelForAdmin, runSettingsViewModelHooks, settingsGet */
/*! exports used: addHook, addSettingsViewModel, addSettingsViewModelForAdmin, mainSettingsGet, remoteRequest, runHook, runSettingsViewModelHooks, settingsGet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return runHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return mainSettingsGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return remoteRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addSettingsViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addSettingsViewModelForAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return runSettingsViewModelHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return settingsGet; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Common_Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Common/Globals */ 6);
/* harmony import */ var Storage_Settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Storage/Settings */ 5);




var SIMPLE_HOOKS = {},
    USER_VIEW_MODELS_HOOKS = [],
    ADMIN_VIEW_MODELS_HOOKS = [];
/**
 * @param {string} name
 * @param {Function} callback
 */

function addHook(name, callback) {
  if (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_1__["isFunc"])(callback)) {
    if (!Object(Common_Utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(SIMPLE_HOOKS[name])) {
      SIMPLE_HOOKS[name] = [];
    }

    SIMPLE_HOOKS[name].push(callback);
  }
}
/**
 * @param {string} name
 * @param {Array=} args = []
 */

function runHook(name, args) {
  if (args === void 0) {
    args = [];
  }

  if (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(SIMPLE_HOOKS[name])) {
    ___WEBPACK_IMPORTED_MODULE_0___default.a.each(SIMPLE_HOOKS[name], function (callback) {
      callback.apply(void 0, args);
    });
  }
}
/**
 * @param {string} name
 * @returns {?}
 */

function mainSettingsGet(name) {
  return Storage_Settings__WEBPACK_IMPORTED_MODULE_3__["settingsGet"](name);
}
/**
 * @param {Function} callback
 * @param {string} action
 * @param {Object=} parameters
 * @param {?number=} timeout
 */

function remoteRequest(callback, action, parameters, timeout) {
  if (Common_Globals__WEBPACK_IMPORTED_MODULE_2__["data"].__APP__) {
    Common_Globals__WEBPACK_IMPORTED_MODULE_2__["data"].__APP__.remote().defaultRequest(callback, 'Plugin' + action, parameters, timeout);
  }
}
/**
 * @param {Function} SettingsViewModelClass
 * @param {string} labelName
 * @param {string} template
 * @param {string} route
 */

function addSettingsViewModel(SettingsViewModelClass, template, labelName, route) {
  USER_VIEW_MODELS_HOOKS.push([SettingsViewModelClass, template, labelName, route]);
}
/**
 * @param {Function} SettingsViewModelClass
 * @param {string} labelName
 * @param {string} template
 * @param {string} route
 */

function addSettingsViewModelForAdmin(SettingsViewModelClass, template, labelName, route) {
  ADMIN_VIEW_MODELS_HOOKS.push([SettingsViewModelClass, template, labelName, route]);
}
/**
 * @param {boolean} admin
 */

function runSettingsViewModelHooks(admin) {
  var Knoin = __webpack_require__(/*! Knoin/Knoin */ 8);

  ___WEBPACK_IMPORTED_MODULE_0___default.a.each(admin ? ADMIN_VIEW_MODELS_HOOKS : USER_VIEW_MODELS_HOOKS, function (view) {
    Knoin.addSettingsViewModel(view[0], view[1], view[2], view[3]);
  });
}
/**
 * @param {string} pluginSection
 * @param {string} name
 * @returns {?}
 */

function settingsGet(pluginSection, name) {
  var plugins = Storage_Settings__WEBPACK_IMPORTED_MODULE_3__["settingsGet"]('Plugins');
  plugins = plugins && !Object(Common_Utils__WEBPACK_IMPORTED_MODULE_1__["isUnd"])(plugins[pluginSection]) ? plugins[pluginSection] : null;
  return plugins ? Object(Common_Utils__WEBPACK_IMPORTED_MODULE_1__["isUnd"])(plugins[name]) ? null : plugins[name] : null;
}

/***/ }),
/* 37 */
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 38 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/well-known-symbol.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 31);
var shared = __webpack_require__(/*! ../internals/shared */ 188);
var has = __webpack_require__(/*! ../internals/has */ 54);
var uid = __webpack_require__(/*! ../internals/uid */ 189);
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ 192);
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ 261);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 39 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 30);
var shared = __webpack_require__(/*! ../internals/shared */ 104);
var has = __webpack_require__(/*! ../internals/has */ 44);
var uid = __webpack_require__(/*! ../internals/uid */ 136);
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ 137);
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ 213);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 40 */
/*!**********************************!*\
  !*** ./dev/Stores/Admin/Core.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ko */ 1);


var CoreAdminStore = function CoreAdminStore() {
  this.coreReal = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(true);
  this.coreChannel = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable('stable');
  this.coreType = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable('stable');
  this.coreUpdatable = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(true);
  this.coreAccess = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(true);
  this.coreWarning = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(false);
  this.coreChecking = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(false).extend({
    throttle: 100
  });
  this.coreUpdating = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(false).extend({
    throttle: 100
  });
  this.coreVersion = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable('');
  this.coreRemoteVersion = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable('');
  this.coreRemoteRelease = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable('');
  this.coreVersionCompare = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(-2);
};

/* harmony default export */ __webpack_exports__["a"] = (new CoreAdminStore());

/***/ }),
/* 41 */,
/* 42 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 49);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 43 */
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/fails.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 44 */
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ 89);

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),
/* 45 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 65);
var exec = __webpack_require__(/*! ../internals/regexp-exec */ 162);

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),
/* 46 */,
/* 47 */
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 55);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 66);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 95);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 48 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 55);
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ 66).f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),
/* 49 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 50 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-object.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 51 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/path.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 52 */
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-non-enumerable-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 53);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 81);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 90);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 53 */
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/descriptors.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 43);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 54 */
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/has.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 55 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 37);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 56 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 57 */
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/set-interval.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/set-interval */ 283);

/***/ }),
/* 58 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/an-object.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 50);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 59 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ 149);
var anObject = __webpack_require__(/*! ../internals/an-object */ 42);
var toLength = __webpack_require__(/*! ../internals/to-length */ 84);
var toInteger = __webpack_require__(/*! ../internals/to-integer */ 79);
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 56);
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ 171);
var getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ 282);
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ 150);

var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
});


/***/ }),
/* 60 */,
/* 61 */
/*!********************************!*\
  !*** ./dev/Common/Momentor.js ***!
  \********************************/
/*! exports provided: momentNow, momentNowUnix, searchSubtractFormatDateHelper, format, momentToNode, reload */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "momentNow", function() { return momentNow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "momentNowUnix", function() { return momentNowUnix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchSubtractFormatDateHelper", function() { return searchSubtractFormatDateHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "momentToNode", function() { return momentToNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reload", function() { return reload; });
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! window */ 4);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(window__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! $ */ 7);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n($__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 100);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Common_Translator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Common/Translator */ 9);





var _moment = null;
var _momentNow = 0;

var updateMomentNow = ___WEBPACK_IMPORTED_MODULE_1___default.a.debounce(function () {
  _moment = moment__WEBPACK_IMPORTED_MODULE_3___default()();
}, 500, true);

var updateMomentNowUnix = ___WEBPACK_IMPORTED_MODULE_1___default.a.debounce(function () {
  _momentNow = moment__WEBPACK_IMPORTED_MODULE_3___default()().unix();
}, 500, true);
/**
 * @returns {moment}
 */


function momentNow() {
  updateMomentNow();
  return _moment || moment__WEBPACK_IMPORTED_MODULE_3___default()();
}
/**
 * @returns {number}
 */

function momentNowUnix() {
  updateMomentNowUnix();
  return _momentNow || 0;
}
/**
 * @param {number} date
 * @returns {string}
 */

function searchSubtractFormatDateHelper(date) {
  return momentNow().clone().subtract(date, 'days').format('YYYY.MM.DD');
}
/**
 * @param {Object} m
 * @returns {string}
 */

function formatCustomShortDate(m) {
  var now = momentNow();

  if (m && now) {
    switch (true) {
      case 4 >= now.diff(m, 'hours'):
        return m.fromNow();

      case now.format('L') === m.format('L'):
        return Object(Common_Translator__WEBPACK_IMPORTED_MODULE_4__["i18n"])('MESSAGE_LIST/TODAY_AT', {
          TIME: m.format('LT')
        });

      case now.clone().subtract(1, 'days').format('L') === m.format('L'):
        return Object(Common_Translator__WEBPACK_IMPORTED_MODULE_4__["i18n"])('MESSAGE_LIST/YESTERDAY_AT', {
          TIME: m.format('LT')
        });

      case now.year() === m.year():
        return m.format('D MMM.');
      // no default
    }
  }

  return m ? m.format('LL') : '';
}
/**
 * @param {number} timeStampInUTC
 * @param {string} formatStr
 * @returns {string}
 */


function format(timeStampInUTC, formatStr) {
  var m = null,
      result = '';
  var now = momentNowUnix();
  timeStampInUTC = 0 < timeStampInUTC ? timeStampInUTC : 0 === timeStampInUTC ? now : 0;
  timeStampInUTC = now < timeStampInUTC ? now : timeStampInUTC;
  m = 0 < timeStampInUTC ? moment__WEBPACK_IMPORTED_MODULE_3___default.a.unix(timeStampInUTC) : null;

  if (m && 1970 === m.year()) {
    m = null;
  }

  if (m) {
    switch (formatStr) {
      case 'FROMNOW':
        result = m.fromNow();
        break;

      case 'SHORT':
        result = formatCustomShortDate(m);
        break;

      case 'FULL':
        result = m.format('LLL');
        break;

      default:
        result = m.format(formatStr);
        break;
    }
  }

  return result;
}
/**
 * @param {Object} element
 * @returns {void}
 */

function momentToNode(element) {
  var key = '',
      time = 0;
  var $el = $__WEBPACK_IMPORTED_MODULE_2___default()(element);
  time = $el.data('moment-time');

  if (time) {
    key = $el.data('moment-format');

    if (key) {
      $el.text(format(time, key));
    }

    key = $el.data('moment-format-title');

    if (key) {
      $el.attr('title', format(time, key));
    }
  }
}
/**
 * @returns {void}
 */

function reload() {
  ___WEBPACK_IMPORTED_MODULE_1___default.a.defer(function () {
    $__WEBPACK_IMPORTED_MODULE_2___default()('.moment', window__WEBPACK_IMPORTED_MODULE_0___default.a.document).each(function (index, item) {
      momentToNode(item);
    });
  });
}

/***/ }),
/* 62 */
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/promise.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/promise */ 251);

/***/ }),
/* 63 */
/*!********************************!*\
  !*** external "window.hasher" ***!
  \********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = window.hasher;

/***/ }),
/* 64 */,
/* 65 */
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 30);
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 127).f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 47);
var redefine = __webpack_require__(/*! ../internals/redefine */ 69);
var setGlobal = __webpack_require__(/*! ../internals/set-global */ 96);
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ 209);
var isForced = __webpack_require__(/*! ../internals/is-forced */ 182);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 66 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 55);
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ 134);
var anObject = __webpack_require__(/*! ../internals/an-object */ 42);
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ 133);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 67 */,
/* 68 */
/*!**********************************!*\
  !*** ./dev/Helper/Apps/Admin.js ***!
  \**********************************/
/*! exports provided: getApp */
/*! exports used: getApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getApp; });
/**
 * @returns {AppAdmin}
 */
function getApp() {
  return __webpack_require__(/*! App/Admin */ 403).default;
}

/***/ }),
/* 69 */
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 30);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 47);
var has = __webpack_require__(/*! ../internals/has */ 44);
var setGlobal = __webpack_require__(/*! ../internals/set-global */ 96);
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ 129);
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ 130);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),
/* 70 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-function.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 71 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/entry-virtual.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ 51);

module.exports = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};


/***/ }),
/* 72 */
/*!********************************!*\
  !*** ./dev/Stores/Language.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Storage_Settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Storage/Settings */ 5);




var LanguageStore = /*#__PURE__*/function () {
  function LanguageStore() {
    this.languages = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observableArray([]);
    this.languagesAdmin = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observableArray([]);
    this.language = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable('').extend({
      limitedList: this.languages
    }).extend({
      reversible: true
    });
    this.languageAdmin = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable('').extend({
      limitedList: this.languagesAdmin
    }).extend({
      reversible: true
    });
    this.userLanguage = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable('');
    this.userLanguageAdmin = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable('');
  }

  var _proto = LanguageStore.prototype;

  _proto.populate = function populate() {
    var aLanguages = Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["appSettingsGet"]('languages'),
        aLanguagesAdmin = Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["appSettingsGet"]('languagesAdmin');
    this.languages(Object(Common_Utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(aLanguages) ? aLanguages : []);
    this.languagesAdmin(Object(Common_Utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(aLanguagesAdmin) ? aLanguagesAdmin : []);
    this.language(Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["settingsGet"]('Language'));
    this.languageAdmin(Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["settingsGet"]('LanguageAdmin'));
    this.userLanguage(Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["settingsGet"]('UserLanguage'));
    this.userLanguageAdmin(Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["settingsGet"]('UserLanguageAdmin'));
  };

  return LanguageStore;
}();

/* harmony default export */ __webpack_exports__["a"] = (new LanguageStore());

/***/ }),
/* 73 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ 128);
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 56);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 74 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 75 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-built-in.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ 51);
var global = __webpack_require__(/*! ../internals/global */ 31);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 76 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterators.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 77 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 65);
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ 128);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 73);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ 284);

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),
/* 78 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ 165);
var global = __webpack_require__(/*! ../internals/global */ 30);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 79 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 80 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-indexed-object.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ 170);
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 115);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 81 */
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-define-property.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 53);
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ 186);
var anObject = __webpack_require__(/*! ../internals/an-object */ 58);
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ 158);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 82 */
/*!****************************!*\
  !*** ./dev/Model/Email.js ***!
  \****************************/
/*! exports provided: EmailModel, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailModel", function() { return EmailModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmailModel; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ 17);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ 48);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ 45);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ 315);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ 151);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ 59);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var emailjs_addressparser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! emailjs-addressparser */ 178);
/* harmony import */ var emailjs_addressparser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(emailjs_addressparser__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Common/Utils */ 2);










var EmailModel = /*#__PURE__*/function () {
  /**
   * @param {string=} email = ''
   * @param {string=} name = ''
   * @param {string=} dkimStatus = 'none'
   * @param {string=} dkimValue = ''
   */
  function EmailModel(email, name, dkimStatus, dkimValue) {
    if (email === void 0) {
      email = '';
    }

    if (name === void 0) {
      name = '';
    }

    if (dkimStatus === void 0) {
      dkimStatus = 'none';
    }

    if (dkimValue === void 0) {
      dkimValue = '';
    }

    this.email = '';
    this.name = '';
    this.dkimStatus = '';
    this.dkimValue = '';
    this.email = email;
    this.name = name;
    this.dkimStatus = dkimStatus;
    this.dkimValue = dkimValue;
    this.clearDuplicateName();
  }
  /**
   * @static
   * @param {AjaxJsonEmail} json
   * @returns {?EmailModel}
   */


  EmailModel.newInstanceFromJson = function newInstanceFromJson(json) {
    var email = new EmailModel();
    return email.initByJson(json) ? email : null;
  }
  /**
   * @returns {void}
   */
  ;

  var _proto = EmailModel.prototype;

  _proto.clear = function clear() {
    this.email = '';
    this.name = '';
    this.dkimStatus = 'none';
    this.dkimValue = '';
  }
  /**
   * @returns {boolean}
   */
  ;

  _proto.validate = function validate() {
    return '' !== this.name || '' !== this.email;
  }
  /**
   * @param {boolean} withoutName = false
   * @returns {string}
   */
  ;

  _proto.hash = function hash(withoutName) {
    if (withoutName === void 0) {
      withoutName = false;
    }

    return '#' + (withoutName ? '' : this.name) + '#' + this.email + '#';
  }
  /**
   * @returns {void}
   */
  ;

  _proto.clearDuplicateName = function clearDuplicateName() {
    if (this.name === this.email) {
      this.name = '';
    }
  }
  /**
   * @param {string} query
   * @returns {boolean}
   */
  ;

  _proto.search = function search(query) {
    return -1 < (this.name + ' ' + this.email).toLowerCase().indexOf(query.toLowerCase());
  }
  /**
   * @param {AjaxJsonEmail} oJsonEmail
   * @returns {boolean}
   */
  ;

  _proto.initByJson = function initByJson(json) {
    var result = false;

    if (json && 'Object/Email' === json['@Object']) {
      this.name = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["trim"])(json.Name);
      this.email = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["trim"])(json.Email);
      this.dkimStatus = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["trim"])(json.DkimStatus || '');
      this.dkimValue = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["trim"])(json.DkimValue || '');
      result = '' !== this.email;
      this.clearDuplicateName();
    }

    return result;
  }
  /**
   * @param {boolean} friendlyView
   * @param {boolean=} wrapWithLink = false
   * @param {boolean=} useEncodeHtml = false
   * @returns {string}
   */
  ;

  _proto.toLine = function toLine(friendlyView, wrapWithLink, useEncodeHtml) {
    if (wrapWithLink === void 0) {
      wrapWithLink = false;
    }

    if (useEncodeHtml === void 0) {
      useEncodeHtml = false;
    }

    var result = '';

    if ('' !== this.email) {
      if (friendlyView && '' !== this.name) {
        result = wrapWithLink ? '<a href="mailto:' + Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["encodeHtml"])(this.email) + '?to=' + Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["encodeHtml"])('"' + this.name + '" <' + this.email + '>') + '" target="_blank" tabindex="-1">' + Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["encodeHtml"])(this.name) + '</a>' : useEncodeHtml ? Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["encodeHtml"])(this.name) : this.name; // result = wrapWithLink ? '<a href="mailto:' + encodeHtml('"' + this.name + '" <' + this.email + '>') +
        // 	'" target="_blank" tabindex="-1">' + encodeHtml(this.name) + '</a>' : (useEncodeHtml ? encodeHtml(this.name) : this.name);
      } else {
        result = this.email;

        if ('' !== this.name) {
          if (wrapWithLink) {
            result = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["encodeHtml"])('"' + this.name + '" <') + '<a href="mailto:' + Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["encodeHtml"])(this.email) + '?to=' + Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["encodeHtml"])('"' + this.name + '" <' + this.email + '>') + '" target="_blank" tabindex="-1">' + Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["encodeHtml"])(result) + '</a>' + Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["encodeHtml"])('>'); // result = encodeHtml('"' + this.name + '" <') + '<a href="mailto:' +
            // 	encodeHtml('"' + this.name + '" <' + this.email + '>') +
            // 	'" target="_blank" tabindex="-1">' +
            // 	encodeHtml(result) +
            // 	'</a>' +
            // 	encodeHtml('>');
          } else {
            result = '"' + this.name + '" <' + result + '>';

            if (useEncodeHtml) {
              result = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["encodeHtml"])(result);
            }
          }
        } else if (wrapWithLink) {
          result = '<a href="mailto:' + Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["encodeHtml"])(this.email) + '" target="_blank" tabindex="-1">' + Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["encodeHtml"])(this.email) + '</a>';
        }
      }
    }

    return result;
  };

  EmailModel.splitEmailLine = function splitEmailLine(line) {
    var parsedResult = emailjs_addressparser__WEBPACK_IMPORTED_MODULE_7___default()(line);

    if (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["isNonEmptyArray"])(parsedResult)) {
      var result = [];
      var exists = false;
      parsedResult.forEach(function (item) {
        var address = item.address ? new EmailModel(item.address.replace(/^[<]+(.*)[>]+$/g, '$1'), item.name || '') : null;

        if (address && address.email) {
          exists = true;
        }

        result.push(address ? address.toLine(false) : item.name);
      });
      return exists ? result : null;
    }

    return null;
  };

  EmailModel.parseEmailLine = function parseEmailLine(line) {
    var parsedResult = emailjs_addressparser__WEBPACK_IMPORTED_MODULE_7___default()(line);

    if (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["isNonEmptyArray"])(parsedResult)) {
      return ___WEBPACK_IMPORTED_MODULE_6___default.a.compact(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(___WEBPACK_IMPORTED_MODULE_6___default.a).call(___WEBPACK_IMPORTED_MODULE_6___default.a, parsedResult, function (item) {
        return item.address ? new EmailModel(item.address.replace(/^[<]+(.*)[>]+$/g, '$1'), item.name || '') : null;
      }));
    }

    return [];
  }
  /**
   * @param {string} emailAddress
   * @returns {boolean}
   */
  ;

  _proto.parse = function parse(emailAddress) {
    emailAddress = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["trim"])(emailAddress);

    if ('' === emailAddress) {
      return false;
    }

    var result = emailjs_addressparser__WEBPACK_IMPORTED_MODULE_7___default()(emailAddress);

    if (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["isNonEmptyArray"])(result) && result[0]) {
      this.name = result[0].name || '';
      this.email = result[0].address || '';
      this.clearDuplicateName();
      return true;
    }

    return false;
  };

  return EmailModel;
}();



/***/ }),
/* 83 */,
/* 84 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ 79);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 85 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ 99);
var redefine = __webpack_require__(/*! ../internals/redefine */ 69);
var toString = __webpack_require__(/*! ../internals/object-to-string */ 216);

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),
/* 86 */
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-pure.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 87 */
/*!****************************************!*\
  !*** ./dev/Component/AbstractInput.js ***!
  \****************************************/
/*! exports provided: AbstractInput, default */
/*! exports used: AbstractInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractInput; });
/* unused harmony export default */
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/assertThisInitialized */ 29);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ 12);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Component_Abstract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Component/Abstract */ 32);








var AbstractInput = /*#__PURE__*/function (_AbstractComponent) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AbstractInput, _AbstractComponent);

  /**
   * @param {Object} params
   */
  function AbstractInput(params) {
    var _this;

    _this = _AbstractComponent.call(this) || this;
    _this.value = params.value || '';
    _this.size = params.size || 0;
    _this.label = params.label || '';
    _this.preLabel = params.preLabel || '';
    _this.enable = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["isUnd"])(params.enable) ? true : params.enable;
    _this.trigger = params.trigger && params.trigger.subscribe ? params.trigger : null;
    _this.placeholder = params.placeholder || '';
    _this.labeled = !Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["isUnd"])(params.label);
    _this.preLabeled = !Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["isUnd"])(params.preLabel);
    _this.triggered = !Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["isUnd"])(params.trigger) && !!_this.trigger;
    _this.classForTrigger = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable('');
    _this.className = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].computed(function () {
      var size = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].unwrap(_this.size),
          suffixValue = _this.trigger ? ' ' + Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["trim"])('settings-saved-trigger-input ' + _this.classForTrigger()) : '';
      return (0 < size ? 'span' + size : '') + suffixValue;
    });

    if (!Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["isUnd"])(params.width) && params.element) {
      var _context;

      _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context = params.element).call(_context, 'input,select,textarea').css('width', params.width);
    }

    _this.disposable.push(_this.className);

    if (_this.trigger) {
      _this.setTriggerState(_this.trigger());

      _this.disposable.push(_this.trigger.subscribe(_this.setTriggerState, Object(_babel_runtime_corejs3_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this)));
    }

    return _this;
  }

  var _proto = AbstractInput.prototype;

  _proto.setTriggerState = function setTriggerState(value) {
    switch (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["pInt"])(value)) {
      case Common_Enums__WEBPACK_IMPORTED_MODULE_5__["SaveSettingsStep"].TrueResult:
        this.classForTrigger('success');
        break;

      case Common_Enums__WEBPACK_IMPORTED_MODULE_5__["SaveSettingsStep"].FalseResult:
        this.classForTrigger('error');
        break;

      default:
        this.classForTrigger('');
        break;
    }
  };

  return AbstractInput;
}(Component_Abstract__WEBPACK_IMPORTED_MODULE_6__[/* AbstractComponent */ "a"]);



/***/ }),
/* 88 */
/*!**********************************!*\
  !*** ./dev/Stores/Admin/Capa.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Storage_Settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Storage/Settings */ 5);




var CapaAdminStore = /*#__PURE__*/function () {
  function CapaAdminStore() {
    this.additionalAccounts = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(false);
    this.identities = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(false);
    this.gravatar = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(false);
    this.attachmentThumbnails = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(false);
    this.sieve = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(false);
    this.filters = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(false);
    this.themes = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(true);
    this.userBackground = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(false);
    this.openPGP = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(false);
    this.twoFactorAuth = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(false);
    this.twoFactorAuthForce = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(false);
    this.templates = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(false);
  }

  var _proto = CapaAdminStore.prototype;

  _proto.populate = function populate() {
    this.additionalAccounts(Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["capa"](Common_Enums__WEBPACK_IMPORTED_MODULE_1__["Capa"].AdditionalAccounts));
    this.identities(Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["capa"](Common_Enums__WEBPACK_IMPORTED_MODULE_1__["Capa"].Identities));
    this.gravatar(Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["capa"](Common_Enums__WEBPACK_IMPORTED_MODULE_1__["Capa"].Gravatar));
    this.attachmentThumbnails(Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["capa"](Common_Enums__WEBPACK_IMPORTED_MODULE_1__["Capa"].AttachmentThumbnails));
    this.sieve(Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["capa"](Common_Enums__WEBPACK_IMPORTED_MODULE_1__["Capa"].Sieve));
    this.filters(Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["capa"](Common_Enums__WEBPACK_IMPORTED_MODULE_1__["Capa"].Filters));
    this.themes(Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["capa"](Common_Enums__WEBPACK_IMPORTED_MODULE_1__["Capa"].Themes));
    this.userBackground(Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["capa"](Common_Enums__WEBPACK_IMPORTED_MODULE_1__["Capa"].UserBackground));
    this.openPGP(Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["capa"](Common_Enums__WEBPACK_IMPORTED_MODULE_1__["Capa"].OpenPGP));
    this.twoFactorAuth(Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["capa"](Common_Enums__WEBPACK_IMPORTED_MODULE_1__["Capa"].TwoFactor));
    this.twoFactorAuthForce(Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["capa"](Common_Enums__WEBPACK_IMPORTED_MODULE_1__["Capa"].TwoFactorForce));
    this.templates(Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["capa"](Common_Enums__WEBPACK_IMPORTED_MODULE_1__["Capa"].Templates));
  };

  return CapaAdminStore;
}();

/* harmony default export */ __webpack_exports__["a"] = (new CapaAdminStore());

/***/ }),
/* 89 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 56);

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 90 */
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-property-descriptor.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 91 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-length.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ 142);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 92 */
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ 144);
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ 114);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 38);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 93 */,
/* 94 */
/*!*************************************!*\
  !*** ./dev/Stores/Admin/Package.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ko */ 1);


var PackageAdminStore = function PackageAdminStore() {
  this.packages = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observableArray([]);
  this.packages.loading = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(false).extend({
    throttle: 100
  });
  this.packagesReal = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(true);
  this.packagesMainUpdatable = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(true);
};

/* harmony default export */ __webpack_exports__["a"] = (new PackageAdminStore());

/***/ }),
/* 95 */
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 96 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 30);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 47);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 97 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 30);
var setGlobal = __webpack_require__(/*! ../internals/set-global */ 96);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 98 */
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 99 */
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 39);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 100 */
/*!********************************!*\
  !*** external "window.moment" ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = window.moment;

/***/ }),
/* 101 */
/*!************************************!*\
  !*** external "window.progressJs" ***!
  \************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = window.progressJs;

/***/ }),
/* 102 */,
/* 103 */,
/* 104 */
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 98);
var store = __webpack_require__(/*! ../internals/shared-store */ 97);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.12.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 105 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 106 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-user-agent.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 75);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 107 */
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterate.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 58);
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ 260);
var toLength = __webpack_require__(/*! ../internals/to-length */ 91);
var bind = __webpack_require__(/*! ../internals/function-bind-context */ 116);
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ 262);
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ 263);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),
/* 108 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/redefine.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 52);

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
};


/***/ }),
/* 109 */
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/new-promise-capability.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ 70);

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 110 */
/*!*********************************!*\
  !*** ./dev/Stores/Admin/App.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! window */ 4);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(window__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! $ */ 7);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n($__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Storage_Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Storage/Settings */ 5);
/* harmony import */ var Stores_AbstractApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Stores/AbstractApp */ 296);







var AppAdminStore = /*#__PURE__*/function (_AbstractAppStore) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(AppAdminStore, _AbstractAppStore);

  function AppAdminStore() {
    var _this;

    _this = _AbstractAppStore.call(this) || this;
    _this.determineUserLanguage = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(false);
    _this.determineUserDomain = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(false);
    _this.weakPassword = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(false);
    _this.useLocalProxyForExternalImages = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(false);
    _this.dataFolderAccess = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(false);
    return _this;
  }

  var _proto = AppAdminStore.prototype;

  _proto.populate = function populate() {
    var _this2 = this;

    _AbstractAppStore.prototype.populate.call(this);

    this.determineUserLanguage(!!Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_4__["settingsGet"])('DetermineUserLanguage'));
    this.determineUserDomain(!!Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_4__["settingsGet"])('DetermineUserDomain'));
    this.weakPassword(!!Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_4__["settingsGet"])('WeakPassword'));
    this.useLocalProxyForExternalImages(!!Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_4__["settingsGet"])('UseLocalProxyForExternalImages'));

    if (Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_4__["settingsGet"])('Auth')) {
      $__WEBPACK_IMPORTED_MODULE_2___default.a.get('./data/VERSION?' + window__WEBPACK_IMPORTED_MODULE_1___default.a.Math.random()).then(function () {
        return _this2.dataFolderAccess(true);
      });
    }
  };

  return AppAdminStore;
}(Stores_AbstractApp__WEBPACK_IMPORTED_MODULE_5__[/* AbstractAppStore */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (new AppAdminStore());

/***/ }),
/* 111 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ 104);
var uid = __webpack_require__(/*! ../internals/uid */ 136);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 112 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 113 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 114 */
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof-raw.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 115 */
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/require-object-coercible.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 116 */
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-bind-context.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ 70);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 117 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-object.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 115);

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 118 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-is-node.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ 114);
var global = __webpack_require__(/*! ../internals/global */ 31);

module.exports = classof(global.process) == 'process';


/***/ }),
/* 119 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(/*! ../internals/redefine */ 69);
var anObject = __webpack_require__(/*! ../internals/an-object */ 42);
var fails = __webpack_require__(/*! ../internals/fails */ 37);
var flags = __webpack_require__(/*! ../internals/regexp-flags */ 202);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),
/* 120 */
/*!****************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-method-uses-to-length.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 53);
var fails = __webpack_require__(/*! ../internals/fails */ 43);
var has = __webpack_require__(/*! ../internals/has */ 54);

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),
/* 121 */
/*!*****************************!*\
  !*** ./dev/Common/Jassl.js ***!
  \*****************************/
/*! exports provided: jassl */
/*! exports used: jassl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return jassl; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ 62);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! window */ 4);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(window__WEBPACK_IMPORTED_MODULE_1__);

 // let rainloopCaches = window.caches && window.caches.open ? window.caches : null;

/**
 * @param {src} src
 * @param {boolean} async = false
 * @returns {Promise}
 */

function jassl(src, async) {
  if (async === void 0) {
    async = false;
  }

  if (!_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0___default.a || !_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all) {
    throw new Error('Promises are not available your environment.');
  }

  if (!src) {
    throw new Error('src should not be empty.');
  }

  return new _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
    var element = window__WEBPACK_IMPORTED_MODULE_1___default.a.document.createElement('script');

    element.onload = function () {
      resolve(src);
    };

    element.onerror = function () {
      reject(new Error(src));
    };

    element.async = true === async;
    element.src = src;
    window__WEBPACK_IMPORTED_MODULE_1___default.a.document.body.appendChild(element);
  })
  /* .then((s) => {
  const found = s && rainloopCaches ? s.match(/rainloop\/v\/([^\/]+)\/static\//) : null;
  if (found && found[1])
  {
  rainloopCaches.open('rainloop-offline-' + found[1]).then(
  (cache) => cache.add(s)
  ).catch(() => {
  rainloopCaches = null;
  });
  }
  return s;
  })*/
  ;
}

/***/ }),
/* 122 */
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/values.js ***!
  \*******************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/values */ 341);

/***/ }),
/* 123 */
/*!*****************************!*\
  !*** ./dev/Stores/Theme.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Storage_Settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Storage/Settings */ 5);




var ThemeStore = /*#__PURE__*/function () {
  function ThemeStore() {
    this.themes = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observableArray([]);
    this.themeBackgroundName = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable('');
    this.themeBackgroundHash = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable('');
    this.theme = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable('').extend({
      limitedList: this.themes
    });
  }

  var _proto = ThemeStore.prototype;

  _proto.populate = function populate() {
    var themes = Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["appSettingsGet"]('themes');
    this.themes(Object(Common_Utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(themes) ? themes : []);
    this.theme(Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["settingsGet"]('Theme'));
    this.themeBackgroundName(Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["settingsGet"]('UserBackgroundName'));
    this.themeBackgroundHash(Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["settingsGet"]('UserBackgroundHash'));
  };

  return ThemeStore;
}();

/* harmony default export */ __webpack_exports__["a"] = (new ThemeStore());

/***/ }),
/* 124 */,
/* 125 */
/*!************************************!*\
  !*** ./dev/Stores/Admin/Plugin.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ko */ 1);


var PluginAdminStore = function PluginAdminStore() {
  this.plugins = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observableArray([]);
  this.plugins.loading = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(false).extend({
    throttle: 100
  });
  this.plugins.error = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable('');
};

/* harmony default export */ __webpack_exports__["a"] = (new PluginAdminStore());

/***/ }),
/* 126 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 127 */
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 55);
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ 179);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 95);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 73);
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ 133);
var has = __webpack_require__(/*! ../internals/has */ 44);
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ 134);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 128 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 37);
var classof = __webpack_require__(/*! ../internals/classof-raw */ 74);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 129 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ 97);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 130 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ 208);
var global = __webpack_require__(/*! ../internals/global */ 30);
var isObject = __webpack_require__(/*! ../internals/is-object */ 49);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 47);
var objectHas = __webpack_require__(/*! ../internals/has */ 44);
var shared = __webpack_require__(/*! ../internals/shared-store */ 97);
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ 111);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ 105);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 131 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 132 */,
/* 133 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 49);

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 134 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 55);
var fails = __webpack_require__(/*! ../internals/fails */ 37);
var createElement = __webpack_require__(/*! ../internals/document-create-element */ 135);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 135 */
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 30);
var isObject = __webpack_require__(/*! ../internals/is-object */ 49);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 136 */
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 137 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ 156);
var fails = __webpack_require__(/*! ../internals/fails */ 37);

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  return !String(Symbol()) ||
    // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),
/* 138 */
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/document-create-element.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 31);
var isObject = __webpack_require__(/*! ../internals/is-object */ 50);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 139 */
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-prototype-of.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ 54);
var toObject = __webpack_require__(/*! ../internals/to-object */ 117);
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ 140);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ 255);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 140 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared-key.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ 188);
var uid = __webpack_require__(/*! ../internals/uid */ 189);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 141 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared-store.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 31);
var setGlobal = __webpack_require__(/*! ../internals/set-global */ 254);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 142 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-integer.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 143 */
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/hidden-keys.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 144 */
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-string-tag-support.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 38);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 145 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-to-string-tag.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ 144);
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ 81).f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 52);
var has = __webpack_require__(/*! ../internals/has */ 54);
var toString = __webpack_require__(/*! ../internals/object-to-string */ 267);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 38);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!has(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty(target, 'toString', toString);
    }
  }
};


/***/ }),
/* 146 */
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/perform.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),
/* 147 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/internal-state.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ 274);
var global = __webpack_require__(/*! ../internals/global */ 31);
var isObject = __webpack_require__(/*! ../internals/is-object */ 50);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 52);
var objectHas = __webpack_require__(/*! ../internals/has */ 54);
var shared = __webpack_require__(/*! ../internals/shared-store */ 141);
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ 140);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ 143);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 148 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-v8-version.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 31);
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ 106);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 149 */
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ 45);
var redefine = __webpack_require__(/*! ../internals/redefine */ 69);
var fails = __webpack_require__(/*! ../internals/fails */ 37);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 39);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 47);

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === RegExp.prototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),
/* 150 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ 74);
var regexpExec = __webpack_require__(/*! ./regexp-exec */ 162);

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),
/* 151 */
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 30);
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ 218);
var forEach = __webpack_require__(/*! ../internals/array-for-each */ 355);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 47);

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),
/* 152 */
/*!*************************************!*\
  !*** ./dev/Knoin/AbstractScreen.js ***!
  \*************************************/
/*! exports provided: AbstractScreen */
/*! exports used: AbstractScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractScreen; });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ 151);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var crossroads__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crossroads */ 176);
/* harmony import */ var crossroads__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crossroads__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Common/Utils */ 2);




var AbstractScreen = /*#__PURE__*/function () {
  function AbstractScreen(screenName, viewModels) {
    if (viewModels === void 0) {
      viewModels = [];
    }

    this.oCross = null;
    this.sScreenName = void 0;
    this.aViewModels = void 0;
    this.sScreenName = screenName;
    this.aViewModels = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["isArray"])(viewModels) ? viewModels : [];
  }
  /**
   * @returns {Array}
   */


  var _proto = AbstractScreen.prototype;

  _proto.viewModels = function viewModels() {
    return this.aViewModels;
  }
  /**
   * @returns {string}
   */
  ;

  _proto.screenName = function screenName() {
    return this.sScreenName;
  }
  /**
   * @returns {?Array)}
   */
  ;

  _proto.routes = function routes() {
    return null;
  }
  /**
   * @returns {?Object}
   */
  ;

  _proto.__cross = function __cross() {
    return this.oCross;
  }
  /**
   * @returns {void}
   */
  ;

  _proto.__start = function __start() {
    var route = null,
        fMatcher = null;
    var routes = this.routes();

    if (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["isNonEmptyArray"])(routes)) {
      fMatcher = ___WEBPACK_IMPORTED_MODULE_1___default.a.bind(this.onRoute || Common_Utils__WEBPACK_IMPORTED_MODULE_3__["noop"], this);
      route = crossroads__WEBPACK_IMPORTED_MODULE_2___default.a.create();
      routes.forEach(function (item) {
        if (item && route) {
          route.addRoute(item[0], fMatcher).rules = item[1];
        }
      });
      this.oCross = route;
    }
  };

  return AbstractScreen;
}();

/***/ }),
/* 153 */
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js ***!
  \*****************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/trim */ 327);

/***/ }),
/* 154 */
/*!*****************************!*\
  !*** external "window.ssm" ***!
  \*****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = window.ssm;

/***/ }),
/* 155 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ 44);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 73);
var indexOf = __webpack_require__(/*! ../internals/array-includes */ 180).indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ 105);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 156 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 30);
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ 166);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 157 */
/*!***********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js ***!
  \***********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 53);
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ 249);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 90);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 80);
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ 158);
var has = __webpack_require__(/*! ../internals/has */ 54);
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ 186);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 158 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-primitive.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 50);

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 159 */
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-set-prototype-of.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 58);
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ 256);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 160 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-create.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 58);
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ 257);
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ 190);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ 143);
var html = __webpack_require__(/*! ../internals/html */ 191);
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ 138);
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ 140);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 161 */
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.dom-collections.iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es.array.iterator */ 201);
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ 281);
var global = __webpack_require__(/*! ../internals/global */ 31);
var classof = __webpack_require__(/*! ../internals/classof */ 92);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 52);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 76);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 38);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }
  Iterators[COLLECTION_NAME] = Iterators.Array;
}


/***/ }),
/* 162 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(/*! ./regexp-flags */ 202);
var stickyHelpers = __webpack_require__(/*! ./regexp-sticky-helpers */ 223);
var shared = __webpack_require__(/*! ./shared */ 104);

var nativeExec = RegExp.prototype.exec;
var nativeReplace = shared('native-string-replace', String.prototype.replace);

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
// eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 163 */,
/* 164 */
/*!************************************!*\
  !*** ./dev/Stores/Admin/Domain.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ 28);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ko */ 1);




var DomainAdminStore = function DomainAdminStore() {
  var _this = this;

  this.domains = ko__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].observableArray([]);
  this.domains.loading = ko__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].observable(false).extend({
    'throttle': 100
  });
  this.domainsWithoutAliases = ko__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].computed(function () {
    return _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(___WEBPACK_IMPORTED_MODULE_1___default.a).call(___WEBPACK_IMPORTED_MODULE_1___default.a, _this.domains(), function (item) {
      return item && !item.alias;
    });
  });
};

/* harmony default export */ __webpack_exports__["a"] = (new DomainAdminStore());

/***/ }),
/* 165 */
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 30);

module.exports = global;


/***/ }),
/* 166 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 78);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 167 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 42);
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ 241);
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ 112);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ 105);
var html = __webpack_require__(/*! ../internals/html */ 235);
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ 135);
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ 111);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 168 */
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ 44);
var toObject = __webpack_require__(/*! ../internals/to-object */ 89);
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ 111);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ 243);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 169 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ 66).f;
var has = __webpack_require__(/*! ../internals/has */ 44);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 39);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 170 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/indexed-object.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 43);
var classof = __webpack_require__(/*! ../internals/classof-raw */ 114);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 171 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ 217).charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),
/* 172 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-iteration.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ 116);
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ 170);
var toObject = __webpack_require__(/*! ../internals/to-object */ 117);
var toLength = __webpack_require__(/*! ../internals/to-length */ 91);
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ 286);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),
/* 173 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-array.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ 114);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 174 */
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-method-has-species-support.js ***!
  \*********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 43);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 38);
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ 148);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 175 */
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js ***!
  \*******************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/concat */ 337);

/***/ }),
/* 176 */
/*!************************************!*\
  !*** external "window.crossroads" ***!
  \************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = window.crossroads;

/***/ }),
/* 177 */
/*!*******************************************!*\
  !*** ./dev/Component/AbstractCheckbox.js ***!
  \*******************************************/
/*! exports provided: AbstractCheckbox, default */
/*! exports used: AbstractCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractCheckbox; });
/* unused harmony export default */
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Component_Abstract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Component/Abstract */ 32);





var AbstractCheckbox = /*#__PURE__*/function (_AbstractComponent) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(AbstractCheckbox, _AbstractComponent);

  /**
   * @param {Object} params = {}
   */
  function AbstractCheckbox(params) {
    var _this;

    if (params === void 0) {
      params = {};
    }

    _this = _AbstractComponent.call(this) || this;
    _this.value = params.value;

    if (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_2__["isUnd"])(_this.value) || !_this.value.subscribe) {
      _this.value = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Object(Common_Utils__WEBPACK_IMPORTED_MODULE_2__["isUnd"])(_this.value) ? false : !!_this.value);
    }

    _this.enable = params.enable;

    if (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_2__["isUnd"])(_this.enable) || !_this.enable.subscribe) {
      _this.enable = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Object(Common_Utils__WEBPACK_IMPORTED_MODULE_2__["isUnd"])(_this.enable) ? true : !!_this.enable);
    }

    _this.disable = params.disable;

    if (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_2__["isUnd"])(_this.disable) || !_this.disable.subscribe) {
      _this.disable = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Object(Common_Utils__WEBPACK_IMPORTED_MODULE_2__["isUnd"])(_this.disable) ? false : !!_this.disable);
    }

    _this.label = params.label || '';
    _this.inline = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_2__["isUnd"])(params.inline) ? false : params.inline;
    _this.readOnly = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_2__["isUnd"])(params.readOnly) ? false : !!params.readOnly;
    _this.inverted = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_2__["isUnd"])(params.inverted) ? false : !!params.inverted;
    _this.labeled = !Object(Common_Utils__WEBPACK_IMPORTED_MODULE_2__["isUnd"])(params.label);
    _this.labelAnimated = !!params.labelAnimated;
    return _this;
  }

  var _proto = AbstractCheckbox.prototype;

  _proto.click = function click() {
    if (!this.readOnly && this.enable() && !this.disable()) {
      this.value(!this.value());
    }
  };

  return AbstractCheckbox;
}(Component_Abstract__WEBPACK_IMPORTED_MODULE_3__[/* AbstractComponent */ "a"]);



/***/ }),
/* 178 */
/*!******************************************************************!*\
  !*** ./node_modules/emailjs-addressparser/dist/addressparser.js ***!
  \******************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = parse;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Parses structured e-mail addresses from an address field
 *
 * Example:
 *
 *    "Name <address@domain>"
 *
 * will be converted to
 *
 *     [{name: "Name", address: "address@domain"}]
 *
 * @param {String} str Address field
 * @return {Array} An array of address objects
 */
function parse(str) {
  var tokenizer = new Tokenizer(str);
  var tokens = tokenizer.tokenize();

  var addresses = [];
  var address = [];
  var parsedAddresses = [];

  tokens.forEach(function (token) {
    if (token.type === 'operator' && (token.value === ',' || token.value === ';')) {
      if (address.length) {
        addresses.push(address);
      }
      address = [];
    } else {
      address.push(token);
    }
  });

  if (address.length) {
    addresses.push(address);
  }

  addresses.forEach(function (address) {
    address = _handleAddress(address);
    if (address.length) {
      parsedAddresses = parsedAddresses.concat(address);
    }
  });

  return parsedAddresses;
};

/**
 * Converts tokens for a single address into an address object
 *
 * @param {Array} tokens Tokens object
 * @return {Object} Address object
 */
function _handleAddress(tokens) {
  var isGroup = false;
  var state = 'text';
  var address = void 0;
  var addresses = [];
  var data = {
    address: [],
    comment: [],
    group: [],
    text: []

    // Filter out <addresses>, (comments) and regular text
  };for (var i = 0, len = tokens.length; i < len; i++) {
    var token = tokens[i];

    if (token.type === 'operator') {
      switch (token.value) {
        case '<':
          state = 'address';
          break;
        case '(':
          state = 'comment';
          break;
        case ':':
          state = 'group';
          isGroup = true;
          break;
        default:
          state = 'text';
      }
    } else {
      if (token.value) {
        data[state].push(token.value);
      }
    }
  }

  // If there is no text but a comment, replace the two
  if (!data.text.length && data.comment.length) {
    data.text = data.comment;
    data.comment = [];
  }

  if (isGroup) {
    // http://tools.ietf.org/html/rfc2822#appendix-A.1.3
    data.text = data.text.join(' ');
    addresses.push({
      name: data.text || address && address.name,
      group: data.group.length ? parse(data.group.join(',')) : []
    });
  } else {
    // If no address was found, try to detect one from regular text
    if (!data.address.length && data.text.length) {
      for (var _i = data.text.length - 1; _i >= 0; _i--) {
        if (data.text[_i].match(/^[^@\s]+@[^@\s]+$/)) {
          data.address = data.text.splice(_i, 1);
          break;
        }
      }

      var _regexHandler = function _regexHandler(address) {
        if (!data.address.length) {
          data.address = [address.trim()];
          return ' ';
        } else {
          return address;
        }
      };

      // still no address
      if (!data.address.length) {
        for (var _i2 = data.text.length - 1; _i2 >= 0; _i2--) {
          data.text[_i2] = data.text[_i2].replace(/\s*\b[^@\s]+@[^@\s]+\b\s*/, _regexHandler).trim();
          if (data.address.length) {
            break;
          }
        }
      }
    }

    // If there's still is no text but a comment exixts, replace the two
    if (!data.text.length && data.comment.length) {
      data.text = data.comment;
      data.comment = [];
    }

    // Keep only the first address occurence, push others to regular text
    if (data.address.length > 1) {
      data.text = data.text.concat(data.address.splice(1));
    }

    // Join values with spaces
    data.text = data.text.join(' ');
    data.address = data.address.join(' ');

    if (!data.address && isGroup) {
      return [];
    } else {
      address = {
        address: data.address || data.text || '',
        name: data.text || data.address || ''
      };

      if (address.address === address.name) {
        if ((address.address || '').match(/@/)) {
          address.name = '';
        } else {
          address.address = '';
        }
      }

      addresses.push(address);
    }
  }

  return addresses;
};

/*
 * Operator tokens and which tokens are expected to end the sequence
 */
var OPERATORS = {
  '"': '"',
  '(': ')',
  '<': '>',
  ',': '',
  // Groups are ended by semicolons
  ':': ';',
  // Semicolons are not a legal delimiter per the RFC2822 grammar other
  // than for terminating a group, but they are also not valid for any
  // other use in this context.  Given that some mail clients have
  // historically allowed the semicolon as a delimiter equivalent to the
  // comma in their UI, it makes sense to treat them the same as a comma
  // when used outside of a group.
  ';': ''

  /**
   * Creates a Tokenizer object for tokenizing address field strings
   *
   * @constructor
   * @param {String} str Address field string
   */
};
var Tokenizer = function () {
  function Tokenizer(str) {
    _classCallCheck(this, Tokenizer);

    this.str = (str || '').toString();
    this.operatorCurrent = '';
    this.operatorExpecting = '';
    this.node = null;
    this.escaped = false;
    this.list = [];
  }

  /**
   * Tokenizes the original input string
   *
   * @return {Array} An array of operator|text tokens
   */


  _createClass(Tokenizer, [{
    key: 'tokenize',
    value: function tokenize() {
      var chr = void 0;
      var list = [];
      for (var i = 0, len = this.str.length; i < len; i++) {
        chr = this.str.charAt(i);
        this.checkChar(chr);
      }

      this.list.forEach(function (node) {
        node.value = (node.value || '').toString().trim();
        if (node.value) {
          list.push(node);
        }
      });

      return list;
    }

    /**
     * Checks if a character is an operator or text and acts accordingly
     *
     * @param {String} chr Character from the address field
     */

  }, {
    key: 'checkChar',
    value: function checkChar(chr) {
      if ((chr in OPERATORS || chr === '\\') && this.escaped) {
        this.escaped = false;
      } else if (this.operatorExpecting && chr === this.operatorExpecting) {
        this.node = {
          type: 'operator',
          value: chr
        };
        this.list.push(this.node);
        this.node = null;
        this.operatorExpecting = '';
        this.escaped = false;
        return;
      } else if (!this.operatorExpecting && chr in OPERATORS) {
        this.node = {
          type: 'operator',
          value: chr
        };
        this.list.push(this.node);
        this.node = null;
        this.operatorExpecting = OPERATORS[chr];
        this.escaped = false;
        return;
      }

      if (!this.escaped && chr === '\\') {
        this.escaped = true;
        return;
      }

      if (!this.node) {
        this.node = {
          type: 'text',
          value: ''
        };
        this.list.push(this.node);
      }

      if (this.escaped && chr !== '\\') {
        this.node.value += '\\';
      }

      this.node.value += chr;
      this.escaped = false;
    }
  }]);

  return Tokenizer;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hZGRyZXNzcGFyc2VyLmpzIl0sIm5hbWVzIjpbInBhcnNlIiwic3RyIiwidG9rZW5pemVyIiwiVG9rZW5pemVyIiwidG9rZW5zIiwidG9rZW5pemUiLCJhZGRyZXNzZXMiLCJhZGRyZXNzIiwicGFyc2VkQWRkcmVzc2VzIiwiZm9yRWFjaCIsInRva2VuIiwidHlwZSIsInZhbHVlIiwibGVuZ3RoIiwicHVzaCIsIl9oYW5kbGVBZGRyZXNzIiwiY29uY2F0IiwiaXNHcm91cCIsInN0YXRlIiwiZGF0YSIsImNvbW1lbnQiLCJncm91cCIsInRleHQiLCJpIiwibGVuIiwiam9pbiIsIm5hbWUiLCJtYXRjaCIsInNwbGljZSIsIl9yZWdleEhhbmRsZXIiLCJ0cmltIiwicmVwbGFjZSIsIk9QRVJBVE9SUyIsInRvU3RyaW5nIiwib3BlcmF0b3JDdXJyZW50Iiwib3BlcmF0b3JFeHBlY3RpbmciLCJub2RlIiwiZXNjYXBlZCIsImxpc3QiLCJjaHIiLCJjaGFyQXQiLCJjaGVja0NoYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O2tCQWN3QkEsSzs7OztBQWR4Qjs7Ozs7Ozs7Ozs7Ozs7QUFjZSxTQUFTQSxLQUFULENBQWdCQyxHQUFoQixFQUFxQjtBQUNsQyxNQUFNQyxZQUFZLElBQUlDLFNBQUosQ0FBY0YsR0FBZCxDQUFsQjtBQUNBLE1BQU1HLFNBQVNGLFVBQVVHLFFBQVYsRUFBZjs7QUFFQSxNQUFNQyxZQUFZLEVBQWxCO0FBQ0EsTUFBSUMsVUFBVSxFQUFkO0FBQ0EsTUFBSUMsa0JBQWtCLEVBQXRCOztBQUVBSixTQUFPSyxPQUFQLENBQWUsVUFBVUMsS0FBVixFQUFpQjtBQUM5QixRQUFJQSxNQUFNQyxJQUFOLEtBQWUsVUFBZixLQUE4QkQsTUFBTUUsS0FBTixLQUFnQixHQUFoQixJQUF1QkYsTUFBTUUsS0FBTixLQUFnQixHQUFyRSxDQUFKLEVBQStFO0FBQzdFLFVBQUlMLFFBQVFNLE1BQVosRUFBb0I7QUFDbEJQLGtCQUFVUSxJQUFWLENBQWVQLE9BQWY7QUFDRDtBQUNEQSxnQkFBVSxFQUFWO0FBQ0QsS0FMRCxNQUtPO0FBQ0xBLGNBQVFPLElBQVIsQ0FBYUosS0FBYjtBQUNEO0FBQ0YsR0FURDs7QUFXQSxNQUFJSCxRQUFRTSxNQUFaLEVBQW9CO0FBQ2xCUCxjQUFVUSxJQUFWLENBQWVQLE9BQWY7QUFDRDs7QUFFREQsWUFBVUcsT0FBVixDQUFrQixVQUFVRixPQUFWLEVBQW1CO0FBQ25DQSxjQUFVUSxlQUFlUixPQUFmLENBQVY7QUFDQSxRQUFJQSxRQUFRTSxNQUFaLEVBQW9CO0FBQ2xCTCx3QkFBa0JBLGdCQUFnQlEsTUFBaEIsQ0FBdUJULE9BQXZCLENBQWxCO0FBQ0Q7QUFDRixHQUxEOztBQU9BLFNBQU9DLGVBQVA7QUFDRDs7QUFFRDs7Ozs7O0FBTUEsU0FBU08sY0FBVCxDQUF5QlgsTUFBekIsRUFBaUM7QUFDL0IsTUFBSWEsVUFBVSxLQUFkO0FBQ0EsTUFBSUMsUUFBUSxNQUFaO0FBQ0EsTUFBSVgsZ0JBQUo7QUFDQSxNQUFNRCxZQUFZLEVBQWxCO0FBQ0EsTUFBTWEsT0FBTztBQUNYWixhQUFTLEVBREU7QUFFWGEsYUFBUyxFQUZFO0FBR1hDLFdBQU8sRUFISTtBQUlYQyxVQUFNOztBQUdSO0FBUGEsR0FBYixDQVFBLEtBQUssSUFBSUMsSUFBSSxDQUFSLEVBQVdDLE1BQU1wQixPQUFPUyxNQUE3QixFQUFxQ1UsSUFBSUMsR0FBekMsRUFBOENELEdBQTlDLEVBQW1EO0FBQ2pELFFBQU1iLFFBQVFOLE9BQU9tQixDQUFQLENBQWQ7O0FBRUEsUUFBSWIsTUFBTUMsSUFBTixLQUFlLFVBQW5CLEVBQStCO0FBQzdCLGNBQVFELE1BQU1FLEtBQWQ7QUFDRSxhQUFLLEdBQUw7QUFDRU0sa0JBQVEsU0FBUjtBQUNBO0FBQ0YsYUFBSyxHQUFMO0FBQ0VBLGtCQUFRLFNBQVI7QUFDQTtBQUNGLGFBQUssR0FBTDtBQUNFQSxrQkFBUSxPQUFSO0FBQ0FELG9CQUFVLElBQVY7QUFDQTtBQUNGO0FBQ0VDLGtCQUFRLE1BQVI7QUFaSjtBQWNELEtBZkQsTUFlTztBQUNMLFVBQUlSLE1BQU1FLEtBQVYsRUFBaUI7QUFDZk8sYUFBS0QsS0FBTCxFQUFZSixJQUFaLENBQWlCSixNQUFNRSxLQUF2QjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRDtBQUNBLE1BQUksQ0FBQ08sS0FBS0csSUFBTCxDQUFVVCxNQUFYLElBQXFCTSxLQUFLQyxPQUFMLENBQWFQLE1BQXRDLEVBQThDO0FBQzVDTSxTQUFLRyxJQUFMLEdBQVlILEtBQUtDLE9BQWpCO0FBQ0FELFNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0Q7O0FBRUQsTUFBSUgsT0FBSixFQUFhO0FBQ1g7QUFDQUUsU0FBS0csSUFBTCxHQUFZSCxLQUFLRyxJQUFMLENBQVVHLElBQVYsQ0FBZSxHQUFmLENBQVo7QUFDQW5CLGNBQVVRLElBQVYsQ0FBZTtBQUNiWSxZQUFNUCxLQUFLRyxJQUFMLElBQWNmLFdBQVdBLFFBQVFtQixJQUQxQjtBQUViTCxhQUFPRixLQUFLRSxLQUFMLENBQVdSLE1BQVgsR0FBb0JiLE1BQU1tQixLQUFLRSxLQUFMLENBQVdJLElBQVgsQ0FBZ0IsR0FBaEIsQ0FBTixDQUFwQixHQUFrRDtBQUY1QyxLQUFmO0FBSUQsR0FQRCxNQU9PO0FBQ0w7QUFDQSxRQUFJLENBQUNOLEtBQUtaLE9BQUwsQ0FBYU0sTUFBZCxJQUF3Qk0sS0FBS0csSUFBTCxDQUFVVCxNQUF0QyxFQUE4QztBQUM1QyxXQUFLLElBQUlVLEtBQUlKLEtBQUtHLElBQUwsQ0FBVVQsTUFBVixHQUFtQixDQUFoQyxFQUFtQ1UsTUFBSyxDQUF4QyxFQUEyQ0EsSUFBM0MsRUFBZ0Q7QUFDOUMsWUFBSUosS0FBS0csSUFBTCxDQUFVQyxFQUFWLEVBQWFJLEtBQWIsQ0FBbUIsbUJBQW5CLENBQUosRUFBNkM7QUFDM0NSLGVBQUtaLE9BQUwsR0FBZVksS0FBS0csSUFBTCxDQUFVTSxNQUFWLENBQWlCTCxFQUFqQixFQUFvQixDQUFwQixDQUFmO0FBQ0E7QUFDRDtBQUNGOztBQUVELFVBQUlNLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBVXRCLE9BQVYsRUFBbUI7QUFDckMsWUFBSSxDQUFDWSxLQUFLWixPQUFMLENBQWFNLE1BQWxCLEVBQTBCO0FBQ3hCTSxlQUFLWixPQUFMLEdBQWUsQ0FBQ0EsUUFBUXVCLElBQVIsRUFBRCxDQUFmO0FBQ0EsaUJBQU8sR0FBUDtBQUNELFNBSEQsTUFHTztBQUNMLGlCQUFPdkIsT0FBUDtBQUNEO0FBQ0YsT0FQRDs7QUFTQTtBQUNBLFVBQUksQ0FBQ1ksS0FBS1osT0FBTCxDQUFhTSxNQUFsQixFQUEwQjtBQUN4QixhQUFLLElBQUlVLE1BQUlKLEtBQUtHLElBQUwsQ0FBVVQsTUFBVixHQUFtQixDQUFoQyxFQUFtQ1UsT0FBSyxDQUF4QyxFQUEyQ0EsS0FBM0MsRUFBZ0Q7QUFDOUNKLGVBQUtHLElBQUwsQ0FBVUMsR0FBVixJQUFlSixLQUFLRyxJQUFMLENBQVVDLEdBQVYsRUFBYVEsT0FBYixDQUFxQiwyQkFBckIsRUFBa0RGLGFBQWxELEVBQWlFQyxJQUFqRSxFQUFmO0FBQ0EsY0FBSVgsS0FBS1osT0FBTCxDQUFhTSxNQUFqQixFQUF5QjtBQUN2QjtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUVEO0FBQ0EsUUFBSSxDQUFDTSxLQUFLRyxJQUFMLENBQVVULE1BQVgsSUFBcUJNLEtBQUtDLE9BQUwsQ0FBYVAsTUFBdEMsRUFBOEM7QUFDNUNNLFdBQUtHLElBQUwsR0FBWUgsS0FBS0MsT0FBakI7QUFDQUQsV0FBS0MsT0FBTCxHQUFlLEVBQWY7QUFDRDs7QUFFRDtBQUNBLFFBQUlELEtBQUtaLE9BQUwsQ0FBYU0sTUFBYixHQUFzQixDQUExQixFQUE2QjtBQUMzQk0sV0FBS0csSUFBTCxHQUFZSCxLQUFLRyxJQUFMLENBQVVOLE1BQVYsQ0FBaUJHLEtBQUtaLE9BQUwsQ0FBYXFCLE1BQWIsQ0FBb0IsQ0FBcEIsQ0FBakIsQ0FBWjtBQUNEOztBQUVEO0FBQ0FULFNBQUtHLElBQUwsR0FBWUgsS0FBS0csSUFBTCxDQUFVRyxJQUFWLENBQWUsR0FBZixDQUFaO0FBQ0FOLFNBQUtaLE9BQUwsR0FBZVksS0FBS1osT0FBTCxDQUFha0IsSUFBYixDQUFrQixHQUFsQixDQUFmOztBQUVBLFFBQUksQ0FBQ04sS0FBS1osT0FBTixJQUFpQlUsT0FBckIsRUFBOEI7QUFDNUIsYUFBTyxFQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0xWLGdCQUFVO0FBQ1JBLGlCQUFTWSxLQUFLWixPQUFMLElBQWdCWSxLQUFLRyxJQUFyQixJQUE2QixFQUQ5QjtBQUVSSSxjQUFNUCxLQUFLRyxJQUFMLElBQWFILEtBQUtaLE9BQWxCLElBQTZCO0FBRjNCLE9BQVY7O0FBS0EsVUFBSUEsUUFBUUEsT0FBUixLQUFvQkEsUUFBUW1CLElBQWhDLEVBQXNDO0FBQ3BDLFlBQUksQ0FBQ25CLFFBQVFBLE9BQVIsSUFBbUIsRUFBcEIsRUFBd0JvQixLQUF4QixDQUE4QixHQUE5QixDQUFKLEVBQXdDO0FBQ3RDcEIsa0JBQVFtQixJQUFSLEdBQWUsRUFBZjtBQUNELFNBRkQsTUFFTztBQUNMbkIsa0JBQVFBLE9BQVIsR0FBa0IsRUFBbEI7QUFDRDtBQUNGOztBQUVERCxnQkFBVVEsSUFBVixDQUFlUCxPQUFmO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPRCxTQUFQO0FBQ0Q7O0FBRUQ7OztBQUdBLElBQU0wQixZQUFZO0FBQ2hCLE9BQUssR0FEVztBQUVoQixPQUFLLEdBRlc7QUFHaEIsT0FBSyxHQUhXO0FBSWhCLE9BQUssRUFKVztBQUtoQjtBQUNBLE9BQUssR0FOVztBQU9oQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFLOztBQUdQOzs7Ozs7QUFoQmtCLENBQWxCO0lBc0JNN0IsUztBQUNKLHFCQUFhRixHQUFiLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtBLEdBQUwsR0FBVyxDQUFDQSxPQUFPLEVBQVIsRUFBWWdDLFFBQVosRUFBWDtBQUNBLFNBQUtDLGVBQUwsR0FBdUIsRUFBdkI7QUFDQSxTQUFLQyxpQkFBTCxHQUF5QixFQUF6QjtBQUNBLFNBQUtDLElBQUwsR0FBWSxJQUFaO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQWY7QUFDQSxTQUFLQyxJQUFMLEdBQVksRUFBWjtBQUNEOztBQUVEOzs7Ozs7Ozs7K0JBS1k7QUFDVixVQUFJQyxZQUFKO0FBQ0EsVUFBSUQsT0FBTyxFQUFYO0FBQ0EsV0FBSyxJQUFJZixJQUFJLENBQVIsRUFBV0MsTUFBTSxLQUFLdkIsR0FBTCxDQUFTWSxNQUEvQixFQUF1Q1UsSUFBSUMsR0FBM0MsRUFBZ0RELEdBQWhELEVBQXFEO0FBQ25EZ0IsY0FBTSxLQUFLdEMsR0FBTCxDQUFTdUMsTUFBVCxDQUFnQmpCLENBQWhCLENBQU47QUFDQSxhQUFLa0IsU0FBTCxDQUFlRixHQUFmO0FBQ0Q7O0FBRUQsV0FBS0QsSUFBTCxDQUFVN0IsT0FBVixDQUFrQixVQUFVMkIsSUFBVixFQUFnQjtBQUNoQ0EsYUFBS3hCLEtBQUwsR0FBYSxDQUFDd0IsS0FBS3hCLEtBQUwsSUFBYyxFQUFmLEVBQW1CcUIsUUFBbkIsR0FBOEJILElBQTlCLEVBQWI7QUFDQSxZQUFJTSxLQUFLeEIsS0FBVCxFQUFnQjtBQUNkMEIsZUFBS3hCLElBQUwsQ0FBVXNCLElBQVY7QUFDRDtBQUNGLE9BTEQ7O0FBT0EsYUFBT0UsSUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs4QkFLV0MsRyxFQUFLO0FBQ2QsVUFBSSxDQUFDQSxPQUFPUCxTQUFQLElBQW9CTyxRQUFRLElBQTdCLEtBQXNDLEtBQUtGLE9BQS9DLEVBQXdEO0FBQ3RELGFBQUtBLE9BQUwsR0FBZSxLQUFmO0FBQ0QsT0FGRCxNQUVPLElBQUksS0FBS0YsaUJBQUwsSUFBMEJJLFFBQVEsS0FBS0osaUJBQTNDLEVBQThEO0FBQ25FLGFBQUtDLElBQUwsR0FBWTtBQUNWekIsZ0JBQU0sVUFESTtBQUVWQyxpQkFBTzJCO0FBRkcsU0FBWjtBQUlBLGFBQUtELElBQUwsQ0FBVXhCLElBQVYsQ0FBZSxLQUFLc0IsSUFBcEI7QUFDQSxhQUFLQSxJQUFMLEdBQVksSUFBWjtBQUNBLGFBQUtELGlCQUFMLEdBQXlCLEVBQXpCO0FBQ0EsYUFBS0UsT0FBTCxHQUFlLEtBQWY7QUFDQTtBQUNELE9BVk0sTUFVQSxJQUFJLENBQUMsS0FBS0YsaUJBQU4sSUFBMkJJLE9BQU9QLFNBQXRDLEVBQWlEO0FBQ3RELGFBQUtJLElBQUwsR0FBWTtBQUNWekIsZ0JBQU0sVUFESTtBQUVWQyxpQkFBTzJCO0FBRkcsU0FBWjtBQUlBLGFBQUtELElBQUwsQ0FBVXhCLElBQVYsQ0FBZSxLQUFLc0IsSUFBcEI7QUFDQSxhQUFLQSxJQUFMLEdBQVksSUFBWjtBQUNBLGFBQUtELGlCQUFMLEdBQXlCSCxVQUFVTyxHQUFWLENBQXpCO0FBQ0EsYUFBS0YsT0FBTCxHQUFlLEtBQWY7QUFDQTtBQUNEOztBQUVELFVBQUksQ0FBQyxLQUFLQSxPQUFOLElBQWlCRSxRQUFRLElBQTdCLEVBQW1DO0FBQ2pDLGFBQUtGLE9BQUwsR0FBZSxJQUFmO0FBQ0E7QUFDRDs7QUFFRCxVQUFJLENBQUMsS0FBS0QsSUFBVixFQUFnQjtBQUNkLGFBQUtBLElBQUwsR0FBWTtBQUNWekIsZ0JBQU0sTUFESTtBQUVWQyxpQkFBTztBQUZHLFNBQVo7QUFJQSxhQUFLMEIsSUFBTCxDQUFVeEIsSUFBVixDQUFlLEtBQUtzQixJQUFwQjtBQUNEOztBQUVELFVBQUksS0FBS0MsT0FBTCxJQUFnQkUsUUFBUSxJQUE1QixFQUFrQztBQUNoQyxhQUFLSCxJQUFMLENBQVV4QixLQUFWLElBQW1CLElBQW5CO0FBQ0Q7O0FBRUQsV0FBS3dCLElBQUwsQ0FBVXhCLEtBQVYsSUFBbUIyQixHQUFuQjtBQUNBLFdBQUtGLE9BQUwsR0FBZSxLQUFmO0FBQ0QiLCJmaWxlIjoiYWRkcmVzc3BhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUGFyc2VzIHN0cnVjdHVyZWQgZS1tYWlsIGFkZHJlc3NlcyBmcm9tIGFuIGFkZHJlc3MgZmllbGRcbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgIFwiTmFtZSA8YWRkcmVzc0Bkb21haW4+XCJcbiAqXG4gKiB3aWxsIGJlIGNvbnZlcnRlZCB0b1xuICpcbiAqICAgICBbe25hbWU6IFwiTmFtZVwiLCBhZGRyZXNzOiBcImFkZHJlc3NAZG9tYWluXCJ9XVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgQWRkcmVzcyBmaWVsZFxuICogQHJldHVybiB7QXJyYXl9IEFuIGFycmF5IG9mIGFkZHJlc3Mgb2JqZWN0c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZSAoc3RyKSB7XG4gIGNvbnN0IHRva2VuaXplciA9IG5ldyBUb2tlbml6ZXIoc3RyKVxuICBjb25zdCB0b2tlbnMgPSB0b2tlbml6ZXIudG9rZW5pemUoKVxuXG4gIGNvbnN0IGFkZHJlc3NlcyA9IFtdXG4gIGxldCBhZGRyZXNzID0gW11cbiAgbGV0IHBhcnNlZEFkZHJlc3NlcyA9IFtdXG5cbiAgdG9rZW5zLmZvckVhY2goZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgaWYgKHRva2VuLnR5cGUgPT09ICdvcGVyYXRvcicgJiYgKHRva2VuLnZhbHVlID09PSAnLCcgfHwgdG9rZW4udmFsdWUgPT09ICc7JykpIHtcbiAgICAgIGlmIChhZGRyZXNzLmxlbmd0aCkge1xuICAgICAgICBhZGRyZXNzZXMucHVzaChhZGRyZXNzKVxuICAgICAgfVxuICAgICAgYWRkcmVzcyA9IFtdXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZHJlc3MucHVzaCh0b2tlbilcbiAgICB9XG4gIH0pXG5cbiAgaWYgKGFkZHJlc3MubGVuZ3RoKSB7XG4gICAgYWRkcmVzc2VzLnB1c2goYWRkcmVzcylcbiAgfVxuXG4gIGFkZHJlc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uIChhZGRyZXNzKSB7XG4gICAgYWRkcmVzcyA9IF9oYW5kbGVBZGRyZXNzKGFkZHJlc3MpXG4gICAgaWYgKGFkZHJlc3MubGVuZ3RoKSB7XG4gICAgICBwYXJzZWRBZGRyZXNzZXMgPSBwYXJzZWRBZGRyZXNzZXMuY29uY2F0KGFkZHJlc3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBwYXJzZWRBZGRyZXNzZXNcbn07XG5cbi8qKlxuICogQ29udmVydHMgdG9rZW5zIGZvciBhIHNpbmdsZSBhZGRyZXNzIGludG8gYW4gYWRkcmVzcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSB0b2tlbnMgVG9rZW5zIG9iamVjdFxuICogQHJldHVybiB7T2JqZWN0fSBBZGRyZXNzIG9iamVjdFxuICovXG5mdW5jdGlvbiBfaGFuZGxlQWRkcmVzcyAodG9rZW5zKSB7XG4gIGxldCBpc0dyb3VwID0gZmFsc2VcbiAgbGV0IHN0YXRlID0gJ3RleHQnXG4gIGxldCBhZGRyZXNzXG4gIGNvbnN0IGFkZHJlc3NlcyA9IFtdXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgYWRkcmVzczogW10sXG4gICAgY29tbWVudDogW10sXG4gICAgZ3JvdXA6IFtdLFxuICAgIHRleHQ6IFtdXG4gIH1cblxuICAvLyBGaWx0ZXIgb3V0IDxhZGRyZXNzZXM+LCAoY29tbWVudHMpIGFuZCByZWd1bGFyIHRleHRcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRva2Vucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHRva2VuID0gdG9rZW5zW2ldXG5cbiAgICBpZiAodG9rZW4udHlwZSA9PT0gJ29wZXJhdG9yJykge1xuICAgICAgc3dpdGNoICh0b2tlbi52YWx1ZSkge1xuICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICBzdGF0ZSA9ICdhZGRyZXNzJ1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJygnOlxuICAgICAgICAgIHN0YXRlID0gJ2NvbW1lbnQnXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnOic6XG4gICAgICAgICAgc3RhdGUgPSAnZ3JvdXAnXG4gICAgICAgICAgaXNHcm91cCA9IHRydWVcbiAgICAgICAgICBicmVha1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHN0YXRlID0gJ3RleHQnXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0b2tlbi52YWx1ZSkge1xuICAgICAgICBkYXRhW3N0YXRlXS5wdXNoKHRva2VuLnZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIHRoZXJlIGlzIG5vIHRleHQgYnV0IGEgY29tbWVudCwgcmVwbGFjZSB0aGUgdHdvXG4gIGlmICghZGF0YS50ZXh0Lmxlbmd0aCAmJiBkYXRhLmNvbW1lbnQubGVuZ3RoKSB7XG4gICAgZGF0YS50ZXh0ID0gZGF0YS5jb21tZW50XG4gICAgZGF0YS5jb21tZW50ID0gW11cbiAgfVxuXG4gIGlmIChpc0dyb3VwKSB7XG4gICAgLy8gaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjgyMiNhcHBlbmRpeC1BLjEuM1xuICAgIGRhdGEudGV4dCA9IGRhdGEudGV4dC5qb2luKCcgJylcbiAgICBhZGRyZXNzZXMucHVzaCh7XG4gICAgICBuYW1lOiBkYXRhLnRleHQgfHwgKGFkZHJlc3MgJiYgYWRkcmVzcy5uYW1lKSxcbiAgICAgIGdyb3VwOiBkYXRhLmdyb3VwLmxlbmd0aCA/IHBhcnNlKGRhdGEuZ3JvdXAuam9pbignLCcpKSA6IFtdXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiBubyBhZGRyZXNzIHdhcyBmb3VuZCwgdHJ5IHRvIGRldGVjdCBvbmUgZnJvbSByZWd1bGFyIHRleHRcbiAgICBpZiAoIWRhdGEuYWRkcmVzcy5sZW5ndGggJiYgZGF0YS50ZXh0Lmxlbmd0aCkge1xuICAgICAgZm9yIChsZXQgaSA9IGRhdGEudGV4dC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAoZGF0YS50ZXh0W2ldLm1hdGNoKC9eW15AXFxzXStAW15AXFxzXSskLykpIHtcbiAgICAgICAgICBkYXRhLmFkZHJlc3MgPSBkYXRhLnRleHQuc3BsaWNlKGksIDEpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgX3JlZ2V4SGFuZGxlciA9IGZ1bmN0aW9uIChhZGRyZXNzKSB7XG4gICAgICAgIGlmICghZGF0YS5hZGRyZXNzLmxlbmd0aCkge1xuICAgICAgICAgIGRhdGEuYWRkcmVzcyA9IFthZGRyZXNzLnRyaW0oKV1cbiAgICAgICAgICByZXR1cm4gJyAnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGFkZHJlc3NcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBzdGlsbCBubyBhZGRyZXNzXG4gICAgICBpZiAoIWRhdGEuYWRkcmVzcy5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGRhdGEudGV4dC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGRhdGEudGV4dFtpXSA9IGRhdGEudGV4dFtpXS5yZXBsYWNlKC9cXHMqXFxiW15AXFxzXStAW15AXFxzXStcXGJcXHMqLywgX3JlZ2V4SGFuZGxlcikudHJpbSgpXG4gICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUncyBzdGlsbCBpcyBubyB0ZXh0IGJ1dCBhIGNvbW1lbnQgZXhpeHRzLCByZXBsYWNlIHRoZSB0d29cbiAgICBpZiAoIWRhdGEudGV4dC5sZW5ndGggJiYgZGF0YS5jb21tZW50Lmxlbmd0aCkge1xuICAgICAgZGF0YS50ZXh0ID0gZGF0YS5jb21tZW50XG4gICAgICBkYXRhLmNvbW1lbnQgPSBbXVxuICAgIH1cblxuICAgIC8vIEtlZXAgb25seSB0aGUgZmlyc3QgYWRkcmVzcyBvY2N1cmVuY2UsIHB1c2ggb3RoZXJzIHRvIHJlZ3VsYXIgdGV4dFxuICAgIGlmIChkYXRhLmFkZHJlc3MubGVuZ3RoID4gMSkge1xuICAgICAgZGF0YS50ZXh0ID0gZGF0YS50ZXh0LmNvbmNhdChkYXRhLmFkZHJlc3Muc3BsaWNlKDEpKVxuICAgIH1cblxuICAgIC8vIEpvaW4gdmFsdWVzIHdpdGggc3BhY2VzXG4gICAgZGF0YS50ZXh0ID0gZGF0YS50ZXh0LmpvaW4oJyAnKVxuICAgIGRhdGEuYWRkcmVzcyA9IGRhdGEuYWRkcmVzcy5qb2luKCcgJylcblxuICAgIGlmICghZGF0YS5hZGRyZXNzICYmIGlzR3JvdXApIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRyZXNzID0ge1xuICAgICAgICBhZGRyZXNzOiBkYXRhLmFkZHJlc3MgfHwgZGF0YS50ZXh0IHx8ICcnLFxuICAgICAgICBuYW1lOiBkYXRhLnRleHQgfHwgZGF0YS5hZGRyZXNzIHx8ICcnXG4gICAgICB9XG5cbiAgICAgIGlmIChhZGRyZXNzLmFkZHJlc3MgPT09IGFkZHJlc3MubmFtZSkge1xuICAgICAgICBpZiAoKGFkZHJlc3MuYWRkcmVzcyB8fCAnJykubWF0Y2goL0AvKSkge1xuICAgICAgICAgIGFkZHJlc3MubmFtZSA9ICcnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkcmVzcy5hZGRyZXNzID0gJydcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhZGRyZXNzZXMucHVzaChhZGRyZXNzKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhZGRyZXNzZXNcbn07XG5cbi8qXG4gKiBPcGVyYXRvciB0b2tlbnMgYW5kIHdoaWNoIHRva2VucyBhcmUgZXhwZWN0ZWQgdG8gZW5kIHRoZSBzZXF1ZW5jZVxuICovXG5jb25zdCBPUEVSQVRPUlMgPSB7XG4gICdcIic6ICdcIicsXG4gICcoJzogJyknLFxuICAnPCc6ICc+JyxcbiAgJywnOiAnJyxcbiAgLy8gR3JvdXBzIGFyZSBlbmRlZCBieSBzZW1pY29sb25zXG4gICc6JzogJzsnLFxuICAvLyBTZW1pY29sb25zIGFyZSBub3QgYSBsZWdhbCBkZWxpbWl0ZXIgcGVyIHRoZSBSRkMyODIyIGdyYW1tYXIgb3RoZXJcbiAgLy8gdGhhbiBmb3IgdGVybWluYXRpbmcgYSBncm91cCwgYnV0IHRoZXkgYXJlIGFsc28gbm90IHZhbGlkIGZvciBhbnlcbiAgLy8gb3RoZXIgdXNlIGluIHRoaXMgY29udGV4dC4gIEdpdmVuIHRoYXQgc29tZSBtYWlsIGNsaWVudHMgaGF2ZVxuICAvLyBoaXN0b3JpY2FsbHkgYWxsb3dlZCB0aGUgc2VtaWNvbG9uIGFzIGEgZGVsaW1pdGVyIGVxdWl2YWxlbnQgdG8gdGhlXG4gIC8vIGNvbW1hIGluIHRoZWlyIFVJLCBpdCBtYWtlcyBzZW5zZSB0byB0cmVhdCB0aGVtIHRoZSBzYW1lIGFzIGEgY29tbWFcbiAgLy8gd2hlbiB1c2VkIG91dHNpZGUgb2YgYSBncm91cC5cbiAgJzsnOiAnJ1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBUb2tlbml6ZXIgb2JqZWN0IGZvciB0b2tlbml6aW5nIGFkZHJlc3MgZmllbGQgc3RyaW5nc1xuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBBZGRyZXNzIGZpZWxkIHN0cmluZ1xuICovXG5jbGFzcyBUb2tlbml6ZXIge1xuICBjb25zdHJ1Y3RvciAoc3RyKSB7XG4gICAgdGhpcy5zdHIgPSAoc3RyIHx8ICcnKS50b1N0cmluZygpXG4gICAgdGhpcy5vcGVyYXRvckN1cnJlbnQgPSAnJ1xuICAgIHRoaXMub3BlcmF0b3JFeHBlY3RpbmcgPSAnJ1xuICAgIHRoaXMubm9kZSA9IG51bGxcbiAgICB0aGlzLmVzY2FwZWQgPSBmYWxzZVxuICAgIHRoaXMubGlzdCA9IFtdXG4gIH1cblxuICAvKipcbiAgICogVG9rZW5pemVzIHRoZSBvcmlnaW5hbCBpbnB1dCBzdHJpbmdcbiAgICpcbiAgICogQHJldHVybiB7QXJyYXl9IEFuIGFycmF5IG9mIG9wZXJhdG9yfHRleHQgdG9rZW5zXG4gICAqL1xuICB0b2tlbml6ZSAoKSB7XG4gICAgbGV0IGNoclxuICAgIGxldCBsaXN0ID0gW11cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5zdHIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNociA9IHRoaXMuc3RyLmNoYXJBdChpKVxuICAgICAgdGhpcy5jaGVja0NoYXIoY2hyKVxuICAgIH1cblxuICAgIHRoaXMubGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBub2RlLnZhbHVlID0gKG5vZGUudmFsdWUgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpXG4gICAgICBpZiAobm9kZS52YWx1ZSkge1xuICAgICAgICBsaXN0LnB1c2gobm9kZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGxpc3RcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBjaGFyYWN0ZXIgaXMgYW4gb3BlcmF0b3Igb3IgdGV4dCBhbmQgYWN0cyBhY2NvcmRpbmdseVxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gY2hyIENoYXJhY3RlciBmcm9tIHRoZSBhZGRyZXNzIGZpZWxkXG4gICAqL1xuICBjaGVja0NoYXIgKGNocikge1xuICAgIGlmICgoY2hyIGluIE9QRVJBVE9SUyB8fCBjaHIgPT09ICdcXFxcJykgJiYgdGhpcy5lc2NhcGVkKSB7XG4gICAgICB0aGlzLmVzY2FwZWQgPSBmYWxzZVxuICAgIH0gZWxzZSBpZiAodGhpcy5vcGVyYXRvckV4cGVjdGluZyAmJiBjaHIgPT09IHRoaXMub3BlcmF0b3JFeHBlY3RpbmcpIHtcbiAgICAgIHRoaXMubm9kZSA9IHtcbiAgICAgICAgdHlwZTogJ29wZXJhdG9yJyxcbiAgICAgICAgdmFsdWU6IGNoclxuICAgICAgfVxuICAgICAgdGhpcy5saXN0LnB1c2godGhpcy5ub2RlKVxuICAgICAgdGhpcy5ub2RlID0gbnVsbFxuICAgICAgdGhpcy5vcGVyYXRvckV4cGVjdGluZyA9ICcnXG4gICAgICB0aGlzLmVzY2FwZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIGlmICghdGhpcy5vcGVyYXRvckV4cGVjdGluZyAmJiBjaHIgaW4gT1BFUkFUT1JTKSB7XG4gICAgICB0aGlzLm5vZGUgPSB7XG4gICAgICAgIHR5cGU6ICdvcGVyYXRvcicsXG4gICAgICAgIHZhbHVlOiBjaHJcbiAgICAgIH1cbiAgICAgIHRoaXMubGlzdC5wdXNoKHRoaXMubm9kZSlcbiAgICAgIHRoaXMubm9kZSA9IG51bGxcbiAgICAgIHRoaXMub3BlcmF0b3JFeHBlY3RpbmcgPSBPUEVSQVRPUlNbY2hyXVxuICAgICAgdGhpcy5lc2NhcGVkID0gZmFsc2VcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghdGhpcy5lc2NhcGVkICYmIGNociA9PT0gJ1xcXFwnKSB7XG4gICAgICB0aGlzLmVzY2FwZWQgPSB0cnVlXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubm9kZSkge1xuICAgICAgdGhpcy5ub2RlID0ge1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfVxuICAgICAgdGhpcy5saXN0LnB1c2godGhpcy5ub2RlKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmVzY2FwZWQgJiYgY2hyICE9PSAnXFxcXCcpIHtcbiAgICAgIHRoaXMubm9kZS52YWx1ZSArPSAnXFxcXCdcbiAgICB9XG5cbiAgICB0aGlzLm5vZGUudmFsdWUgKz0gY2hyXG4gICAgdGhpcy5lc2NhcGVkID0gZmFsc2VcbiAgfVxufVxuIl19

/***/ }),
/* 179 */
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),
/* 180 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 73);
var toLength = __webpack_require__(/*! ../internals/to-length */ 84);
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ 212);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 181 */
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 182 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 37);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 183 */
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ 99);
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ 74);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 39);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 184 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ 37);
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ 168);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 47);
var has = __webpack_require__(/*! ../internals/has */ 44);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 39);
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 98);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 185 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.timers.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 34);
var global = __webpack_require__(/*! ../internals/global */ 31);
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ 106);

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 186 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/ie8-dom-define.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 53);
var fails = __webpack_require__(/*! ../internals/fails */ 43);
var createElement = __webpack_require__(/*! ../internals/document-create-element */ 138);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 187 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-forced.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 43);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 188 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 86);
var store = __webpack_require__(/*! ../internals/shared-store */ 141);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 189 */
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/uid.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 190 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/enum-bug-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 191 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/html.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 75);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 192 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/native-symbol.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 43);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 193 */
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/native-promise-constructor.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 31);

module.exports = global.Promise;


/***/ }),
/* 194 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/inspect-source.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ 141);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 195 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 58);
var aFunction = __webpack_require__(/*! ../internals/a-function */ 70);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 38);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 196 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/task.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 31);
var fails = __webpack_require__(/*! ../internals/fails */ 43);
var bind = __webpack_require__(/*! ../internals/function-bind-context */ 116);
var html = __webpack_require__(/*! ../internals/html */ 191);
var createElement = __webpack_require__(/*! ../internals/document-create-element */ 138);
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ 197);
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ 118);

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),
/* 197 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-is-ios.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ 106);

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),
/* 198 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/promise-resolve.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 58);
var isObject = __webpack_require__(/*! ../internals/is-object */ 50);
var newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ 109);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 199 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/define-iterator.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 34);
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ 280);
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ 139);
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ 159);
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ 145);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 52);
var redefine = __webpack_require__(/*! ../internals/redefine */ 108);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 38);
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 86);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 76);
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ 200);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 200 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterators-core.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ 139);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 52);
var has = __webpack_require__(/*! ../internals/has */ 54);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 38);
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 86);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 201 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.iterator.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 80);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ 222);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 76);
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ 147);
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ 199);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 202 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ 42);

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 203 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ 149);
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ 242);
var anObject = __webpack_require__(/*! ../internals/an-object */ 42);
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 56);
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ 236);
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ 171);
var toLength = __webpack_require__(/*! ../internals/to-length */ 84);
var callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ 150);
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ 162);
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ 223);

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? S.slice(q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, UNSUPPORTED_Y);


/***/ }),
/* 204 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.link.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 65);
var createHTML = __webpack_require__(/*! ../internals/create-html */ 325);
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ 326);

// `String.prototype.link` method
// https://tc39.es/ecma262/#sec-string.prototype.link
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {
  link: function link(url) {
    return createHTML(this, 'a', 'href', url);
  }
});


/***/ }),
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 30);
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ 129);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 209 */
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ 44);
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ 210);
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 127);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 66);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 210 */
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 78);
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ 211);
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ 181);
var anObject = __webpack_require__(/*! ../internals/an-object */ 42);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 211 */
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ 155);
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ 112);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 212 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ 79);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 213 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ 137);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 214 */
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ 131);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 215 */
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(/*! ../internals/an-object */ 42);
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ 244);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 216 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ 99);
var classof = __webpack_require__(/*! ../internals/classof */ 183);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 217 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ 79);
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 56);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 218 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 219 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 73);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ 234);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 113);
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ 130);
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ 237);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 220 */
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-keys.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ 258);
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ 190);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 221 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-absolute-index.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ 142);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 222 */
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/add-to-unscopables.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 223 */
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(/*! ./fails */ 37);

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),
/* 224 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ 149);
var anObject = __webpack_require__(/*! ../internals/an-object */ 42);
var toLength = __webpack_require__(/*! ../internals/to-length */ 84);
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 56);
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ 171);
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ 150);

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 225 */
/*!***********************************!*\
  !*** ./dev/Component/Checkbox.js ***!
  \***********************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var Component_Abstract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Component/Abstract */ 32);
/* harmony import */ var Component_AbstractCheckbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Component/AbstractCheckbox */ 177);




var CheckboxComponent = /*#__PURE__*/function (_AbstractCheckbox) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(CheckboxComponent, _AbstractCheckbox);

  function CheckboxComponent() {
    return _AbstractCheckbox.apply(this, arguments) || this;
  }

  return CheckboxComponent;
}(Component_AbstractCheckbox__WEBPACK_IMPORTED_MODULE_2__[/* AbstractCheckbox */ "a"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(Component_Abstract__WEBPACK_IMPORTED_MODULE_1__[/* componentExportHelper */ "b"])(CheckboxComponent, 'CheckboxComponent'));

/***/ }),
/* 226 */
/*!**********************************!*\
  !*** ./dev/Common/HtmlEditor.js ***!
  \**********************************/
/*! exports provided: HtmlEditor, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlEditor", function() { return HtmlEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HtmlEditor; });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ 45);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ 59);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ 224);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set-timeout */ 33);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! window */ 4);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(window__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! $ */ 7);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n($__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var Common_Globals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Common/Globals */ 6);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Storage_Settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Storage/Settings */ 5);











var HtmlEditor = /*#__PURE__*/function () {
  /**
   * @param {Object} element
   * @param {Function=} onBlur
   * @param {Function=} onReady
   * @param {Function=} onModeChange
   */
  function HtmlEditor(element, onBlur, onReady, onModeChange) {
    if (onBlur === void 0) {
      onBlur = null;
    }

    if (onReady === void 0) {
      onReady = null;
    }

    if (onModeChange === void 0) {
      onModeChange = null;
    }

    this.editor = void 0;
    this.blurTimer = 0;
    this.__resizable = false;
    this.__inited = false;
    this.onBlur = null;
    this.onReady = null;
    this.onModeChange = null;
    this.element = void 0;
    this.$element = void 0;
    this.resize = void 0;
    this.onBlur = onBlur;
    this.onReady = onReady;
    this.onModeChange = onModeChange;
    this.element = element;
    this.$element = $__WEBPACK_IMPORTED_MODULE_6___default()(element);
    this.resize = ___WEBPACK_IMPORTED_MODULE_5___default.a.throttle(___WEBPACK_IMPORTED_MODULE_5___default.a.bind(this.resizeEditor, this), 100);
    this.init();
  }

  var _proto = HtmlEditor.prototype;

  _proto.runOnBlur = function runOnBlur() {
    if (this.onBlur) {
      this.onBlur();
    }
  };

  _proto.blurTrigger = function blurTrigger() {
    var _this = this;

    if (this.onBlur) {
      window__WEBPACK_IMPORTED_MODULE_4___default.a.clearTimeout(this.blurTimer);
      this.blurTimer = _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_3___default()(function () {
        _this.runOnBlur();
      }, Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Magics"].Time200ms);
    }
  };

  _proto.focusTrigger = function focusTrigger() {
    if (this.onBlur) {
      window__WEBPACK_IMPORTED_MODULE_4___default.a.clearTimeout(this.blurTimer);
    }
  }
  /**
   * @returns {boolean}
   */
  ;

  _proto.isHtml = function isHtml() {
    return this.editor ? 'wysiwyg' === this.editor.mode : false;
  }
  /**
   * @returns {void}
   */
  ;

  _proto.clearCachedSignature = function clearCachedSignature() {
    if (this.editor) {
      this.editor.execCommand('insertSignature', {
        clearCache: true
      });
    }
  }
  /**
   * @param {string} signature
   * @param {bool} html
   * @param {bool} insertBefore
   * @returns {void}
   */
  ;

  _proto.setSignature = function setSignature(signature, html, insertBefore) {
    if (insertBefore === void 0) {
      insertBefore = false;
    }

    if (this.editor) {
      this.editor.execCommand('insertSignature', {
        isHtml: html,
        insertBefore: insertBefore,
        signature: signature
      });
    }
  }
  /**
   * @returns {boolean}
   */
  ;

  _proto.checkDirty = function checkDirty() {
    return this.editor ? this.editor.checkDirty() : false;
  };

  _proto.resetDirty = function resetDirty() {
    if (this.editor) {
      this.editor.resetDirty();
    }
  }
  /**
   * @param {boolean=} wrapIsHtml = false
   * @returns {string}
   */
  ;

  _proto.getData = function getData(wrapIsHtml) {
    if (wrapIsHtml === void 0) {
      wrapIsHtml = false;
    }

    var result = '';

    if (this.editor) {
      try {
        if ('plain' === this.editor.mode && this.editor.plugins.plain && this.editor.__plain) {
          result = this.editor.__plain.getRawData();
        } else {
          result = wrapIsHtml ? '<div data-html-editor-font-wrapper="true" style="font-family: arial, sans-serif; font-size: 13px;">' + this.editor.getData() + '</div>' : this.editor.getData();
        }
      } catch (e) {} // eslint-disable-line no-empty

    }

    return result;
  }
  /**
   * @param {boolean=} wrapIsHtml = false
   * @returns {string}
   */
  ;

  _proto.getDataWithHtmlMark = function getDataWithHtmlMark(wrapIsHtml) {
    if (wrapIsHtml === void 0) {
      wrapIsHtml = false;
    }

    return (this.isHtml() ? ':HTML:' : '') + this.getData(wrapIsHtml);
  };

  _proto.modeToggle = function modeToggle(plain, resize) {
    if (this.editor) {
      try {
        if (plain) {
          if ('plain' === this.editor.mode) {
            this.editor.setMode('wysiwyg');
          }
        } else if ('wysiwyg' === this.editor.mode) {
          this.editor.setMode('plain');
        }
      } catch (e) {} // eslint-disable-line no-empty


      if (resize) {
        this.resize();
      }
    }
  };

  _proto.setHtmlOrPlain = function setHtmlOrPlain(text, focus) {
    if (':HTML:' === text.substr(0, 6)) {
      this.setHtml(text.substr(6), focus);
    } else {
      this.setPlain(text, focus);
    }
  };

  _proto.setHtml = function setHtml(html, focus) {
    if (this.editor && this.__inited) {
      this.clearCachedSignature();
      this.modeToggle(true);
      html = html.replace(/<p[^>]*><\/p>/gi, '');

      try {
        this.editor.setData(html);
      } catch (e) {} // eslint-disable-line no-empty


      if (focus) {
        this.focus();
      }
    }
  };

  _proto.replaceHtml = function replaceHtml(find, _replaceHtml) {
    if (this.editor && this.__inited && 'wysiwyg' === this.editor.mode) {
      try {
        this.editor.setData(this.editor.getData().replace(find, _replaceHtml));
      } catch (e) {} // eslint-disable-line no-empty

    }
  };

  _proto.setPlain = function setPlain(plain, focus) {
    if (this.editor && this.__inited) {
      this.clearCachedSignature();
      this.modeToggle(false);

      if ('plain' === this.editor.mode && this.editor.plugins.plain && this.editor.__plain) {
        this.editor.__plain.setRawData(plain);
      } else {
        try {
          this.editor.setData(plain);
        } catch (e) {} // eslint-disable-line no-empty

      }

      if (focus) {
        this.focus();
      }
    }
  };

  _proto.init = function init() {
    var _this2 = this;

    if (this.element && !this.editor) {
      var initFunc = function initFunc() {
        var config = Common_Globals__WEBPACK_IMPORTED_MODULE_7__["htmlEditorDefaultConfig"],
            language = Storage_Settings__WEBPACK_IMPORTED_MODULE_9__["settingsGet"]('Language'),
            allowSource = !!Storage_Settings__WEBPACK_IMPORTED_MODULE_9__["appSettingsGet"]('allowHtmlEditorSourceButton'),
            biti = !!Storage_Settings__WEBPACK_IMPORTED_MODULE_9__["appSettingsGet"]('allowHtmlEditorBitiButtons');

        if ((allowSource || !biti) && !config.toolbarGroups.__cfgInited) {
          config.toolbarGroups.__cfgInited = true;

          if (allowSource) {
            config.removeButtons = config.removeButtons.replace(',Source', '');
          }

          if (!biti) {
            config.removePlugins += (config.removePlugins ? ',' : '') + 'bidi';
          }
        }

        config.enterMode = window__WEBPACK_IMPORTED_MODULE_4___default.a.CKEDITOR.ENTER_BR;
        config.shiftEnterMode = window__WEBPACK_IMPORTED_MODULE_4___default.a.CKEDITOR.ENTER_P;
        config.language = Common_Globals__WEBPACK_IMPORTED_MODULE_7__["htmlEditorLangsMap"][(language || 'en').toLowerCase()] || 'en';

        if (window__WEBPACK_IMPORTED_MODULE_4___default.a.CKEDITOR.env) {
          window__WEBPACK_IMPORTED_MODULE_4___default.a.CKEDITOR.env.isCompatible = true;
        }

        _this2.editor = window__WEBPACK_IMPORTED_MODULE_4___default.a.CKEDITOR.appendTo(_this2.element, config);

        _this2.editor.on('key', function (event) {
          if (event && event.data && Common_Enums__WEBPACK_IMPORTED_MODULE_8__["EventKeyCode"].Tab === event.data.keyCode) {
            return false;
          }

          return true;
        });

        _this2.editor.on('blur', function () {
          _this2.blurTrigger();
        });

        _this2.editor.on('mode', function () {
          _this2.blurTrigger();

          if (_this2.onModeChange) {
            _this2.onModeChange('plain' !== _this2.editor.mode);
          }
        });

        _this2.editor.on('focus', function () {
          _this2.focusTrigger();
        });

        if (window__WEBPACK_IMPORTED_MODULE_4___default.a.FileReader) {
          _this2.editor.on('drop', function (event) {
            if (0 < event.data.dataTransfer.getFilesCount()) {
              var file = event.data.dataTransfer.getFile(0);

              if (file && window__WEBPACK_IMPORTED_MODULE_4___default.a.FileReader && event.data.dataTransfer.id && file.type && file.type.match(/^image/i)) {
                var id = event.data.dataTransfer.id,
                    imageId = "[img=" + id + "]",
                    reader = new window__WEBPACK_IMPORTED_MODULE_4___default.a.FileReader();

                reader.onloadend = function () {
                  if (reader.result) {
                    _this2.replaceHtml(imageId, "<img src=\"" + reader.result + "\" />");
                  }
                };

                reader.readAsDataURL(file);
                event.data.dataTransfer.setData('text/html', imageId);
              }
            }
          });
        }

        _this2.editor.on('instanceReady', function () {
          if (_this2.editor.removeMenuItem) {
            _this2.editor.removeMenuItem('cut');

            _this2.editor.removeMenuItem('copy');

            _this2.editor.removeMenuItem('paste');
          }

          _this2.__resizable = true;
          _this2.__inited = true;

          _this2.resize();

          if (_this2.onReady) {
            _this2.onReady();
          }
        });
      };

      if (window__WEBPACK_IMPORTED_MODULE_4___default.a.CKEDITOR) {
        initFunc();
      } else {
        window__WEBPACK_IMPORTED_MODULE_4___default.a.__initEditor = initFunc;
      }
    }
  };

  _proto.focus = function focus() {
    if (this.editor) {
      try {
        this.editor.focus();
      } catch (e) {} // eslint-disable-line no-empty

    }
  };

  _proto.hasFocus = function hasFocus() {
    if (this.editor) {
      try {
        return !!this.editor.focusManager.hasFocus;
      } catch (e) {} // eslint-disable-line no-empty

    }

    return false;
  };

  _proto.blur = function blur() {
    if (this.editor) {
      try {
        this.editor.focusManager.blur(true);
      } catch (e) {} // eslint-disable-line no-empty

    }
  };

  _proto.resizeEditor = function resizeEditor() {
    if (this.editor && this.__resizable) {
      try {
        this.editor.resize(this.$element.width(), this.$element.innerHeight());
      } catch (e) {} // eslint-disable-line no-empty

    }
  };

  _proto.setReadOnly = function setReadOnly(value) {
    if (this.editor) {
      try {
        this.editor.setReadOnly(!!value);
      } catch (e) {} // eslint-disable-line no-empty

    }
  };

  _proto.clear = function clear(focus) {
    this.setHtml('', focus);
  };

  return HtmlEditor;
}();



/***/ }),
/* 227 */
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js ***!
  \*******************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/reduce */ 344);

/***/ }),
/* 228 */
/*!*********************************!*\
  !*** ./dev/External/Opentip.js ***!
  \*********************************/
/*! exports provided: Opentip, default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Opentip */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Opentip; });
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! window */ 4);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(window__WEBPACK_IMPORTED_MODULE_0__);

var Opentip = window__WEBPACK_IMPORTED_MODULE_0___default.a.Opentip || {};
Opentip.styles = Opentip.styles || {};
Opentip.styles.rainloop = {
  'extends': 'standard',
  'fixed': true,
  'target': true,
  'delay': 0.2,
  'hideDelay': 0,
  'hideEffect': 'fade',
  'hideEffectDuration': 0.2,
  'showEffect': 'fade',
  'showEffectDuration': 0.2,
  'showOn': 'mouseover click',
  'removeElementsOnHide': true,
  'background': '#fff',
  'shadow': false,
  'borderColor': '#999',
  'borderRadius': 2,
  'borderWidth': 1
};
Opentip.styles.rainloopTip = {
  'extends': 'rainloop',
  'delay': 0.4,
  'group': 'rainloopTips'
};
Opentip.styles.rainloopErrorTip = {
  'extends': 'rainloop',
  'className': 'rainloopErrorTip'
};


/***/ }),
/* 229 */
/*!*****************************************!*\
  !*** ./node_modules/pikaday/pikaday.js ***!
  \*****************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/Pikaday/Pikaday
 */

(function (root, factory)
{
    'use strict';

    var moment;
    if (true) {
        // CommonJS module
        // Load moment.js as an optional dependency
        try { moment = __webpack_require__(/*! moment */ 100); } catch (e) {}
        module.exports = factory(moment);
    } else {}
}(this, function (moment)
{
    'use strict';

    /**
     * feature detection and helper functions
     */
    var hasMoment = typeof moment === 'function',

    hasEventListeners = !!window.addEventListener,

    document = window.document,

    sto = window.setTimeout,

    addEvent = function(el, e, callback, capture)
    {
        if (hasEventListeners) {
            el.addEventListener(e, callback, !!capture);
        } else {
            el.attachEvent('on' + e, callback);
        }
    },

    removeEvent = function(el, e, callback, capture)
    {
        if (hasEventListeners) {
            el.removeEventListener(e, callback, !!capture);
        } else {
            el.detachEvent('on' + e, callback);
        }
    },

    trim = function(str)
    {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g,'');
    },

    hasClass = function(el, cn)
    {
        return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
    },

    addClass = function(el, cn)
    {
        if (!hasClass(el, cn)) {
            el.className = (el.className === '') ? cn : el.className + ' ' + cn;
        }
    },

    removeClass = function(el, cn)
    {
        el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '));
    },

    isArray = function(obj)
    {
        return (/Array/).test(Object.prototype.toString.call(obj));
    },

    isDate = function(obj)
    {
        return (/Date/).test(Object.prototype.toString.call(obj)) && !isNaN(obj.getTime());
    },

    isWeekend = function(date)
    {
        var day = date.getDay();
        return day === 0 || day === 6;
    },

    isLeapYear = function(year)
    {
        // solution lifted from date.js (MIT license): https://github.com/datejs/Datejs
        return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
    },

    getDaysInMonth = function(year, month)
    {
        return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    },

    setToStartOfDay = function(date)
    {
        if (isDate(date)) date.setHours(0,0,0,0);
    },

    compareDates = function(a,b)
    {
        // weak date comparison (use setToStartOfDay(date) to ensure correct result)
        return a.getTime() === b.getTime();
    },

    extend = function(to, from, overwrite)
    {
        var prop, hasProp;
        for (prop in from) {
            hasProp = to[prop] !== undefined;
            if (hasProp && typeof from[prop] === 'object' && from[prop] !== null && from[prop].nodeName === undefined) {
                if (isDate(from[prop])) {
                    if (overwrite) {
                        to[prop] = new Date(from[prop].getTime());
                    }
                }
                else if (isArray(from[prop])) {
                    if (overwrite) {
                        to[prop] = from[prop].slice(0);
                    }
                } else {
                    to[prop] = extend({}, from[prop], overwrite);
                }
            } else if (overwrite || !hasProp) {
                to[prop] = from[prop];
            }
        }
        return to;
    },

    fireEvent = function(el, eventName, data)
    {
        var ev;

        if (document.createEvent) {
            ev = document.createEvent('HTMLEvents');
            ev.initEvent(eventName, true, false);
            ev = extend(ev, data);
            el.dispatchEvent(ev);
        } else if (document.createEventObject) {
            ev = document.createEventObject();
            ev = extend(ev, data);
            el.fireEvent('on' + eventName, ev);
        }
    },

    adjustCalendar = function(calendar) {
        if (calendar.month < 0) {
            calendar.year -= Math.ceil(Math.abs(calendar.month)/12);
            calendar.month += 12;
        }
        if (calendar.month > 11) {
            calendar.year += Math.floor(Math.abs(calendar.month)/12);
            calendar.month -= 12;
        }
        return calendar;
    },

    /**
     * defaults and localisation
     */
    defaults = {

        // bind the picker to a form field
        field: null,

        // automatically show/hide the picker on `field` focus (default `true` if `field` is set)
        bound: undefined,

        // data-attribute on the input field with an aria assistance text (only applied when `bound` is set)
        ariaLabel: 'Use the arrow keys to pick a date',

        // position of the datepicker, relative to the field (default to bottom & left)
        // ('bottom' & 'left' keywords are not used, 'top' & 'right' are modifier on the bottom/left position)
        position: 'bottom left',

        // automatically fit in the viewport even if it means repositioning from the position option
        reposition: true,

        // the default output format for `.toString()` and `field` value
        format: 'YYYY-MM-DD',

        // the toString function which gets passed a current date object and format
        // and returns a string
        toString: null,

        // used to create date object from current input string
        parse: null,

        // the initial date to view when first opened
        defaultDate: null,

        // make the `defaultDate` the initial selected value
        setDefaultDate: false,

        // first day of week (0: Sunday, 1: Monday etc)
        firstDay: 0,

        // minimum number of days in the week that gets week number one
        // default ISO 8601, week 01 is the week with the first Thursday (4)
        firstWeekOfYearMinDays: 4,

        // the default flag for moment's strict date parsing
        formatStrict: false,

        // the minimum/earliest date that can be selected
        minDate: null,
        // the maximum/latest date that can be selected
        maxDate: null,

        // number of years either side, or array of upper/lower range
        yearRange: 10,

        // show week numbers at head of row
        showWeekNumber: false,

        // Week picker mode
        pickWholeWeek: false,

        // used internally (don't config outside)
        minYear: 0,
        maxYear: 9999,
        minMonth: undefined,
        maxMonth: undefined,

        startRange: null,
        endRange: null,

        isRTL: false,

        // Additional text to append to the year in the calendar title
        yearSuffix: '',

        // Render the month after year in the calendar title
        showMonthAfterYear: false,

        // Render days of the calendar grid that fall in the next or previous month
        showDaysInNextAndPreviousMonths: false,

        // Allows user to select days that fall in the next or previous month
        enableSelectionDaysInNextAndPreviousMonths: false,

        // how many months are visible
        numberOfMonths: 1,

        // when numberOfMonths is used, this will help you to choose where the main calendar will be (default `left`, can be set to `right`)
        // only used for the first display or when a selected date is not visible
        mainCalendar: 'left',

        // Specify a DOM element to render the calendar in
        container: undefined,

        // Blur field when date is selected
        blurFieldOnSelect : true,

        // internationalization
        i18n: {
            previousMonth : 'Previous Month',
            nextMonth     : 'Next Month',
            months        : ['January','February','March','April','May','June','July','August','September','October','November','December'],
            weekdays      : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            weekdaysShort : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
        },

        // Theme Classname
        theme: null,

        // events array
        events: [],

        // callback function
        onSelect: null,
        onOpen: null,
        onClose: null,
        onDraw: null,

        // Enable keyboard input
        keyboardInput: true
    },


    /**
     * templating functions to abstract HTML rendering
     */
    renderDayName = function(opts, day, abbr)
    {
        day += opts.firstDay;
        while (day >= 7) {
            day -= 7;
        }
        return abbr ? opts.i18n.weekdaysShort[day] : opts.i18n.weekdays[day];
    },

    renderDay = function(opts)
    {
        var arr = [];
        var ariaSelected = 'false';
        if (opts.isEmpty) {
            if (opts.showDaysInNextAndPreviousMonths) {
                arr.push('is-outside-current-month');

                if(!opts.enableSelectionDaysInNextAndPreviousMonths) {
                    arr.push('is-selection-disabled');
                }

            } else {
                return '<td class="is-empty"></td>';
            }
        }
        if (opts.isDisabled) {
            arr.push('is-disabled');
        }
        if (opts.isToday) {
            arr.push('is-today');
        }
        if (opts.isSelected) {
            arr.push('is-selected');
            ariaSelected = 'true';
        }
        if (opts.hasEvent) {
            arr.push('has-event');
        }
        if (opts.isInRange) {
            arr.push('is-inrange');
        }
        if (opts.isStartRange) {
            arr.push('is-startrange');
        }
        if (opts.isEndRange) {
            arr.push('is-endrange');
        }
        return '<td data-day="' + opts.day + '" class="' + arr.join(' ') + '" aria-selected="' + ariaSelected + '">' +
                 '<button class="pika-button pika-day" type="button" ' +
                    'data-pika-year="' + opts.year + '" data-pika-month="' + opts.month + '" data-pika-day="' + opts.day + '">' +
                        opts.day +
                 '</button>' +
               '</td>';
    },

    isoWeek = function(date, firstWeekOfYearMinDays) {
        // Ensure we're at the start of the day.
        date.setHours(0, 0, 0, 0);

        // Thursday in current week decides the year because January 4th
        // is always in the first week according to ISO8601.
        var yearDay        = date.getDate(),
            weekDay        = date.getDay(),
            dayInFirstWeek = firstWeekOfYearMinDays,
            dayShift       = dayInFirstWeek - 1, // counting starts at 0
            daysPerWeek    = 7,
            prevWeekDay    = function(day) { return (day + daysPerWeek - 1) % daysPerWeek; };

        // Adjust to Thursday in week 1 and count number of weeks from date to week 1.
        date.setDate(yearDay + dayShift - prevWeekDay(weekDay));

        var jan4th      = new Date(date.getFullYear(), 0, dayInFirstWeek),
            msPerDay    = 24 * 60 * 60 * 1000,
            daysBetween = (date.getTime() - jan4th.getTime()) / msPerDay,
            weekNum     = 1 + Math.round((daysBetween - dayShift + prevWeekDay(jan4th.getDay())) / daysPerWeek);

        return weekNum;
    },

    renderWeek = function (d, m, y, firstWeekOfYearMinDays) {
        var date = new Date(y, m, d),
            week = hasMoment ? moment(date).isoWeek() : isoWeek(date, firstWeekOfYearMinDays);

        return '<td class="pika-week">' + week + '</td>';
    },

    renderRow = function(days, isRTL, pickWholeWeek, isRowSelected)
    {
        return '<tr class="pika-row' + (pickWholeWeek ? ' pick-whole-week' : '') + (isRowSelected ? ' is-selected' : '') + '">' + (isRTL ? days.reverse() : days).join('') + '</tr>';
    },

    renderBody = function(rows)
    {
        return '<tbody>' + rows.join('') + '</tbody>';
    },

    renderHead = function(opts)
    {
        var i, arr = [];
        if (opts.showWeekNumber) {
            arr.push('<th></th>');
        }
        for (i = 0; i < 7; i++) {
            arr.push('<th scope="col"><abbr title="' + renderDayName(opts, i) + '">' + renderDayName(opts, i, true) + '</abbr></th>');
        }
        return '<thead><tr>' + (opts.isRTL ? arr.reverse() : arr).join('') + '</tr></thead>';
    },

    renderTitle = function(instance, c, year, month, refYear, randId)
    {
        var i, j, arr,
            opts = instance._o,
            isMinYear = year === opts.minYear,
            isMaxYear = year === opts.maxYear,
            html = '<div id="' + randId + '" class="pika-title" role="heading" aria-live="assertive">',
            monthHtml,
            yearHtml,
            prev = true,
            next = true;

        for (arr = [], i = 0; i < 12; i++) {
            arr.push('<option value="' + (year === refYear ? i - c : 12 + i - c) + '"' +
                (i === month ? ' selected="selected"': '') +
                ((isMinYear && i < opts.minMonth) || (isMaxYear && i > opts.maxMonth) ? ' disabled="disabled"' : '') + '>' +
                opts.i18n.months[i] + '</option>');
        }

        monthHtml = '<div class="pika-label">' + opts.i18n.months[month] + '<select class="pika-select pika-select-month" tabindex="-1">' + arr.join('') + '</select></div>';

        if (isArray(opts.yearRange)) {
            i = opts.yearRange[0];
            j = opts.yearRange[1] + 1;
        } else {
            i = year - opts.yearRange;
            j = 1 + year + opts.yearRange;
        }

        for (arr = []; i < j && i <= opts.maxYear; i++) {
            if (i >= opts.minYear) {
                arr.push('<option value="' + i + '"' + (i === year ? ' selected="selected"': '') + '>' + (i) + '</option>');
            }
        }
        yearHtml = '<div class="pika-label">' + year + opts.yearSuffix + '<select class="pika-select pika-select-year" tabindex="-1">' + arr.join('') + '</select></div>';

        if (opts.showMonthAfterYear) {
            html += yearHtml + monthHtml;
        } else {
            html += monthHtml + yearHtml;
        }

        if (isMinYear && (month === 0 || opts.minMonth >= month)) {
            prev = false;
        }

        if (isMaxYear && (month === 11 || opts.maxMonth <= month)) {
            next = false;
        }

        if (c === 0) {
            html += '<button class="pika-prev' + (prev ? '' : ' is-disabled') + '" type="button">' + opts.i18n.previousMonth + '</button>';
        }
        if (c === (instance._o.numberOfMonths - 1) ) {
            html += '<button class="pika-next' + (next ? '' : ' is-disabled') + '" type="button">' + opts.i18n.nextMonth + '</button>';
        }

        return html += '</div>';
    },

    renderTable = function(opts, data, randId)
    {
        return '<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="' + randId + '">' + renderHead(opts) + renderBody(data) + '</table>';
    },


    /**
     * Pikaday constructor
     */
    Pikaday = function(options)
    {
        var self = this,
            opts = self.config(options);

        self._onMouseDown = function(e)
        {
            if (!self._v) {
                return;
            }
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (!target) {
                return;
            }

            if (!hasClass(target, 'is-disabled')) {
                if (hasClass(target, 'pika-button') && !hasClass(target, 'is-empty') && !hasClass(target.parentNode, 'is-disabled')) {
                    self.setDate(new Date(target.getAttribute('data-pika-year'), target.getAttribute('data-pika-month'), target.getAttribute('data-pika-day')));
                    if (opts.bound) {
                        sto(function() {
                            self.hide();
                            if (opts.blurFieldOnSelect && opts.field) {
                                opts.field.blur();
                            }
                        }, 100);
                    }
                }
                else if (hasClass(target, 'pika-prev')) {
                    self.prevMonth();
                }
                else if (hasClass(target, 'pika-next')) {
                    self.nextMonth();
                }
            }
            if (!hasClass(target, 'pika-select')) {
                // if this is touch event prevent mouse events emulation
                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                    return false;
                }
            } else {
                self._c = true;
            }
        };

        self._onChange = function(e)
        {
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (!target) {
                return;
            }
            if (hasClass(target, 'pika-select-month')) {
                self.gotoMonth(target.value);
            }
            else if (hasClass(target, 'pika-select-year')) {
                self.gotoYear(target.value);
            }
        };

        self._onKeyChange = function(e)
        {
            e = e || window.event;

            if (self.isVisible()) {

                switch(e.keyCode){
                    case 13:
                    case 27:
                        if (opts.field) {
                            opts.field.blur();
                        }
                        break;
                    case 37:
                        self.adjustDate('subtract', 1);
                        break;
                    case 38:
                        self.adjustDate('subtract', 7);
                        break;
                    case 39:
                        self.adjustDate('add', 1);
                        break;
                    case 40:
                        self.adjustDate('add', 7);
                        break;
                    case 8:
                    case 46:
                        self.setDate(null);
                        break;
                }
            }
        };

        self._parseFieldValue = function()
        {
            if (opts.parse) {
                return opts.parse(opts.field.value, opts.format);
            } else if (hasMoment) {
                var date = moment(opts.field.value, opts.format, opts.formatStrict);
                return (date && date.isValid()) ? date.toDate() : null;
            } else {
                return new Date(Date.parse(opts.field.value));
            }
        };

        self._onInputChange = function(e)
        {
            var date;

            if (e.firedBy === self) {
                return;
            }
            date = self._parseFieldValue();
            if (isDate(date)) {
              self.setDate(date);
            }
            if (!self._v) {
                self.show();
            }
        };

        self._onInputFocus = function()
        {
            self.show();
        };

        self._onInputClick = function()
        {
            self.show();
        };

        self._onInputBlur = function()
        {
            // IE allows pika div to gain focus; catch blur the input field
            var pEl = document.activeElement;
            do {
                if (hasClass(pEl, 'pika-single')) {
                    return;
                }
            }
            while ((pEl = pEl.parentNode));

            if (!self._c) {
                self._b = sto(function() {
                    self.hide();
                }, 50);
            }
            self._c = false;
        };

        self._onClick = function(e)
        {
            e = e || window.event;
            var target = e.target || e.srcElement,
                pEl = target;
            if (!target) {
                return;
            }
            if (!hasEventListeners && hasClass(target, 'pika-select')) {
                if (!target.onchange) {
                    target.setAttribute('onchange', 'return;');
                    addEvent(target, 'change', self._onChange);
                }
            }
            do {
                if (hasClass(pEl, 'pika-single') || pEl === opts.trigger) {
                    return;
                }
            }
            while ((pEl = pEl.parentNode));
            if (self._v && target !== opts.trigger && pEl !== opts.trigger) {
                self.hide();
            }
        };

        self.el = document.createElement('div');
        self.el.className = 'pika-single' + (opts.isRTL ? ' is-rtl' : '') + (opts.theme ? ' ' + opts.theme : '');

        addEvent(self.el, 'mousedown', self._onMouseDown, true);
        addEvent(self.el, 'touchend', self._onMouseDown, true);
        addEvent(self.el, 'change', self._onChange);

        if (opts.keyboardInput) {
            addEvent(document, 'keydown', self._onKeyChange);
        }

        if (opts.field) {
            if (opts.container) {
                opts.container.appendChild(self.el);
            } else if (opts.bound) {
                document.body.appendChild(self.el);
            } else {
                opts.field.parentNode.insertBefore(self.el, opts.field.nextSibling);
            }
            addEvent(opts.field, 'change', self._onInputChange);

            if (!opts.defaultDate) {
                opts.defaultDate = self._parseFieldValue();
                opts.setDefaultDate = true;
            }
        }

        var defDate = opts.defaultDate;

        if (isDate(defDate)) {
            if (opts.setDefaultDate) {
                self.setDate(defDate, true);
            } else {
                self.gotoDate(defDate);
            }
        } else {
            self.gotoDate(new Date());
        }

        if (opts.bound) {
            this.hide();
            self.el.className += ' is-bound';
            addEvent(opts.trigger, 'click', self._onInputClick);
            addEvent(opts.trigger, 'focus', self._onInputFocus);
            addEvent(opts.trigger, 'blur', self._onInputBlur);
        } else {
            this.show();
        }
    };


    /**
     * public Pikaday API
     */
    Pikaday.prototype = {


        /**
         * configure functionality
         */
        config: function(options)
        {
            if (!this._o) {
                this._o = extend({}, defaults, true);
            }

            var opts = extend(this._o, options, true);

            opts.isRTL = !!opts.isRTL;

            opts.field = (opts.field && opts.field.nodeName) ? opts.field : null;

            opts.theme = (typeof opts.theme) === 'string' && opts.theme ? opts.theme : null;

            opts.bound = !!(opts.bound !== undefined ? opts.field && opts.bound : opts.field);

            opts.trigger = (opts.trigger && opts.trigger.nodeName) ? opts.trigger : opts.field;

            opts.disableWeekends = !!opts.disableWeekends;

            opts.disableDayFn = (typeof opts.disableDayFn) === 'function' ? opts.disableDayFn : null;

            var nom = parseInt(opts.numberOfMonths, 10) || 1;
            opts.numberOfMonths = nom > 4 ? 4 : nom;

            if (!isDate(opts.minDate)) {
                opts.minDate = false;
            }
            if (!isDate(opts.maxDate)) {
                opts.maxDate = false;
            }
            if ((opts.minDate && opts.maxDate) && opts.maxDate < opts.minDate) {
                opts.maxDate = opts.minDate = false;
            }
            if (opts.minDate) {
                this.setMinDate(opts.minDate);
            }
            if (opts.maxDate) {
                this.setMaxDate(opts.maxDate);
            }

            if (isArray(opts.yearRange)) {
                var fallback = new Date().getFullYear() - 10;
                opts.yearRange[0] = parseInt(opts.yearRange[0], 10) || fallback;
                opts.yearRange[1] = parseInt(opts.yearRange[1], 10) || fallback;
            } else {
                opts.yearRange = Math.abs(parseInt(opts.yearRange, 10)) || defaults.yearRange;
                if (opts.yearRange > 100) {
                    opts.yearRange = 100;
                }
            }

            return opts;
        },

        /**
         * return a formatted string of the current selection (using Moment.js if available)
         */
        toString: function(format)
        {
            format = format || this._o.format;
            if (!isDate(this._d)) {
                return '';
            }
            if (this._o.toString) {
              return this._o.toString(this._d, format);
            }
            if (hasMoment) {
              return moment(this._d).format(format);
            }
            return this._d.toDateString();
        },

        /**
         * return a Moment.js object of the current selection (if available)
         */
        getMoment: function()
        {
            return hasMoment ? moment(this._d) : null;
        },

        /**
         * set the current selection from a Moment.js object (if available)
         */
        setMoment: function(date, preventOnSelect)
        {
            if (hasMoment && moment.isMoment(date)) {
                this.setDate(date.toDate(), preventOnSelect);
            }
        },

        /**
         * return a Date object of the current selection
         */
        getDate: function()
        {
            return isDate(this._d) ? new Date(this._d.getTime()) : null;
        },

        /**
         * set the current selection
         */
        setDate: function(date, preventOnSelect)
        {
            if (!date) {
                this._d = null;

                if (this._o.field) {
                    this._o.field.value = '';
                    fireEvent(this._o.field, 'change', { firedBy: this });
                }

                return this.draw();
            }
            if (typeof date === 'string') {
                date = new Date(Date.parse(date));
            }
            if (!isDate(date)) {
                return;
            }

            var min = this._o.minDate,
                max = this._o.maxDate;

            if (isDate(min) && date < min) {
                date = min;
            } else if (isDate(max) && date > max) {
                date = max;
            }

            this._d = new Date(date.getTime());
            setToStartOfDay(this._d);
            this.gotoDate(this._d);

            if (this._o.field) {
                this._o.field.value = this.toString();
                fireEvent(this._o.field, 'change', { firedBy: this });
            }
            if (!preventOnSelect && typeof this._o.onSelect === 'function') {
                this._o.onSelect.call(this, this.getDate());
            }
        },

        /**
         * clear and reset the date
         */
        clear: function()
        {
            this.setDate(null);
        },

        /**
         * change view to a specific date
         */
        gotoDate: function(date)
        {
            var newCalendar = true;

            if (!isDate(date)) {
                return;
            }

            if (this.calendars) {
                var firstVisibleDate = new Date(this.calendars[0].year, this.calendars[0].month, 1),
                    lastVisibleDate = new Date(this.calendars[this.calendars.length-1].year, this.calendars[this.calendars.length-1].month, 1),
                    visibleDate = date.getTime();
                // get the end of the month
                lastVisibleDate.setMonth(lastVisibleDate.getMonth()+1);
                lastVisibleDate.setDate(lastVisibleDate.getDate()-1);
                newCalendar = (visibleDate < firstVisibleDate.getTime() || lastVisibleDate.getTime() < visibleDate);
            }

            if (newCalendar) {
                this.calendars = [{
                    month: date.getMonth(),
                    year: date.getFullYear()
                }];
                if (this._o.mainCalendar === 'right') {
                    this.calendars[0].month += 1 - this._o.numberOfMonths;
                }
            }

            this.adjustCalendars();
        },

        adjustDate: function(sign, days) {

            var day = this.getDate() || new Date();
            var difference = parseInt(days)*24*60*60*1000;

            var newDay;

            if (sign === 'add') {
                newDay = new Date(day.valueOf() + difference);
            } else if (sign === 'subtract') {
                newDay = new Date(day.valueOf() - difference);
            }

            this.setDate(newDay);
        },

        adjustCalendars: function() {
            this.calendars[0] = adjustCalendar(this.calendars[0]);
            for (var c = 1; c < this._o.numberOfMonths; c++) {
                this.calendars[c] = adjustCalendar({
                    month: this.calendars[0].month + c,
                    year: this.calendars[0].year
                });
            }
            this.draw();
        },

        gotoToday: function()
        {
            this.gotoDate(new Date());
        },

        /**
         * change view to a specific month (zero-index, e.g. 0: January)
         */
        gotoMonth: function(month)
        {
            if (!isNaN(month)) {
                this.calendars[0].month = parseInt(month, 10);
                this.adjustCalendars();
            }
        },

        nextMonth: function()
        {
            this.calendars[0].month++;
            this.adjustCalendars();
        },

        prevMonth: function()
        {
            this.calendars[0].month--;
            this.adjustCalendars();
        },

        /**
         * change view to a specific full year (e.g. "2012")
         */
        gotoYear: function(year)
        {
            if (!isNaN(year)) {
                this.calendars[0].year = parseInt(year, 10);
                this.adjustCalendars();
            }
        },

        /**
         * change the minDate
         */
        setMinDate: function(value)
        {
            if(value instanceof Date) {
                setToStartOfDay(value);
                this._o.minDate = value;
                this._o.minYear  = value.getFullYear();
                this._o.minMonth = value.getMonth();
            } else {
                this._o.minDate = defaults.minDate;
                this._o.minYear  = defaults.minYear;
                this._o.minMonth = defaults.minMonth;
                this._o.startRange = defaults.startRange;
            }

            this.draw();
        },

        /**
         * change the maxDate
         */
        setMaxDate: function(value)
        {
            if(value instanceof Date) {
                setToStartOfDay(value);
                this._o.maxDate = value;
                this._o.maxYear = value.getFullYear();
                this._o.maxMonth = value.getMonth();
            } else {
                this._o.maxDate = defaults.maxDate;
                this._o.maxYear = defaults.maxYear;
                this._o.maxMonth = defaults.maxMonth;
                this._o.endRange = defaults.endRange;
            }

            this.draw();
        },

        setStartRange: function(value)
        {
            this._o.startRange = value;
        },

        setEndRange: function(value)
        {
            this._o.endRange = value;
        },

        /**
         * refresh the HTML
         */
        draw: function(force)
        {
            if (!this._v && !force) {
                return;
            }
            var opts = this._o,
                minYear = opts.minYear,
                maxYear = opts.maxYear,
                minMonth = opts.minMonth,
                maxMonth = opts.maxMonth,
                html = '',
                randId;

            if (this._y <= minYear) {
                this._y = minYear;
                if (!isNaN(minMonth) && this._m < minMonth) {
                    this._m = minMonth;
                }
            }
            if (this._y >= maxYear) {
                this._y = maxYear;
                if (!isNaN(maxMonth) && this._m > maxMonth) {
                    this._m = maxMonth;
                }
            }

            for (var c = 0; c < opts.numberOfMonths; c++) {
                randId = 'pika-title-' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2);
                html += '<div class="pika-lendar">' + renderTitle(this, c, this.calendars[c].year, this.calendars[c].month, this.calendars[0].year, randId) + this.render(this.calendars[c].year, this.calendars[c].month, randId) + '</div>';
            }

            this.el.innerHTML = html;

            if (opts.bound) {
                if(opts.field.type !== 'hidden') {
                    sto(function() {
                        opts.trigger.focus();
                    }, 1);
                }
            }

            if (typeof this._o.onDraw === 'function') {
                this._o.onDraw(this);
            }

            if (opts.bound) {
                // let the screen reader user know to use arrow keys
                opts.field.setAttribute('aria-label', opts.ariaLabel);
            }
        },

        adjustPosition: function()
        {
            var field, pEl, width, height, viewportWidth, viewportHeight, scrollTop, left, top, clientRect, leftAligned, bottomAligned;

            if (this._o.container) return;

            this.el.style.position = 'absolute';

            field = this._o.trigger;
            pEl = field;
            width = this.el.offsetWidth;
            height = this.el.offsetHeight;
            viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
            leftAligned = true;
            bottomAligned = true;

            if (typeof field.getBoundingClientRect === 'function') {
                clientRect = field.getBoundingClientRect();
                left = clientRect.left + window.pageXOffset;
                top = clientRect.bottom + window.pageYOffset;
            } else {
                left = pEl.offsetLeft;
                top  = pEl.offsetTop + pEl.offsetHeight;
                while((pEl = pEl.offsetParent)) {
                    left += pEl.offsetLeft;
                    top  += pEl.offsetTop;
                }
            }

            // default position is bottom & left
            if ((this._o.reposition && left + width > viewportWidth) ||
                (
                    this._o.position.indexOf('right') > -1 &&
                    left - width + field.offsetWidth > 0
                )
            ) {
                left = left - width + field.offsetWidth;
                leftAligned = false;
            }
            if ((this._o.reposition && top + height > viewportHeight + scrollTop) ||
                (
                    this._o.position.indexOf('top') > -1 &&
                    top - height - field.offsetHeight > 0
                )
            ) {
                top = top - height - field.offsetHeight;
                bottomAligned = false;
            }

            this.el.style.left = left + 'px';
            this.el.style.top = top + 'px';

            addClass(this.el, leftAligned ? 'left-aligned' : 'right-aligned');
            addClass(this.el, bottomAligned ? 'bottom-aligned' : 'top-aligned');
            removeClass(this.el, !leftAligned ? 'left-aligned' : 'right-aligned');
            removeClass(this.el, !bottomAligned ? 'bottom-aligned' : 'top-aligned');
        },

        /**
         * render HTML for a particular month
         */
        render: function(year, month, randId)
        {
            var opts   = this._o,
                now    = new Date(),
                days   = getDaysInMonth(year, month),
                before = new Date(year, month, 1).getDay(),
                data   = [],
                row    = [];
            setToStartOfDay(now);
            if (opts.firstDay > 0) {
                before -= opts.firstDay;
                if (before < 0) {
                    before += 7;
                }
            }
            var previousMonth = month === 0 ? 11 : month - 1,
                nextMonth = month === 11 ? 0 : month + 1,
                yearOfPreviousMonth = month === 0 ? year - 1 : year,
                yearOfNextMonth = month === 11 ? year + 1 : year,
                daysInPreviousMonth = getDaysInMonth(yearOfPreviousMonth, previousMonth);
            var cells = days + before,
                after = cells;
            while(after > 7) {
                after -= 7;
            }
            cells += 7 - after;
            var isWeekSelected = false;
            for (var i = 0, r = 0; i < cells; i++)
            {
                var day = new Date(year, month, 1 + (i - before)),
                    isSelected = isDate(this._d) ? compareDates(day, this._d) : false,
                    isToday = compareDates(day, now),
                    hasEvent = opts.events.indexOf(day.toDateString()) !== -1 ? true : false,
                    isEmpty = i < before || i >= (days + before),
                    dayNumber = 1 + (i - before),
                    monthNumber = month,
                    yearNumber = year,
                    isStartRange = opts.startRange && compareDates(opts.startRange, day),
                    isEndRange = opts.endRange && compareDates(opts.endRange, day),
                    isInRange = opts.startRange && opts.endRange && opts.startRange < day && day < opts.endRange,
                    isDisabled = (opts.minDate && day < opts.minDate) ||
                                 (opts.maxDate && day > opts.maxDate) ||
                                 (opts.disableWeekends && isWeekend(day)) ||
                                 (opts.disableDayFn && opts.disableDayFn(day));

                if (isEmpty) {
                    if (i < before) {
                        dayNumber = daysInPreviousMonth + dayNumber;
                        monthNumber = previousMonth;
                        yearNumber = yearOfPreviousMonth;
                    } else {
                        dayNumber = dayNumber - days;
                        monthNumber = nextMonth;
                        yearNumber = yearOfNextMonth;
                    }
                }

                var dayConfig = {
                        day: dayNumber,
                        month: monthNumber,
                        year: yearNumber,
                        hasEvent: hasEvent,
                        isSelected: isSelected,
                        isToday: isToday,
                        isDisabled: isDisabled,
                        isEmpty: isEmpty,
                        isStartRange: isStartRange,
                        isEndRange: isEndRange,
                        isInRange: isInRange,
                        showDaysInNextAndPreviousMonths: opts.showDaysInNextAndPreviousMonths,
                        enableSelectionDaysInNextAndPreviousMonths: opts.enableSelectionDaysInNextAndPreviousMonths
                    };

                if (opts.pickWholeWeek && isSelected) {
                    isWeekSelected = true;
                }

                row.push(renderDay(dayConfig));

                if (++r === 7) {
                    if (opts.showWeekNumber) {
                        row.unshift(renderWeek(i - before, month, year, opts.firstWeekOfYearMinDays));
                    }
                    data.push(renderRow(row, opts.isRTL, opts.pickWholeWeek, isWeekSelected));
                    row = [];
                    r = 0;
                    isWeekSelected = false;
                }
            }
            return renderTable(opts, data, randId);
        },

        isVisible: function()
        {
            return this._v;
        },

        show: function()
        {
            if (!this.isVisible()) {
                this._v = true;
                this.draw();
                removeClass(this.el, 'is-hidden');
                if (this._o.bound) {
                    addEvent(document, 'click', this._onClick);
                    this.adjustPosition();
                }
                if (typeof this._o.onOpen === 'function') {
                    this._o.onOpen.call(this);
                }
            }
        },

        hide: function()
        {
            var v = this._v;
            if (v !== false) {
                if (this._o.bound) {
                    removeEvent(document, 'click', this._onClick);
                }

                if (!this._o.container) {
                    this.el.style.position = 'static'; // reset
                    this.el.style.left = 'auto';
                    this.el.style.top = 'auto';
                }
                addClass(this.el, 'is-hidden');
                this._v = false;
                if (v !== undefined && typeof this._o.onClose === 'function') {
                    this._o.onClose.call(this);
                }
            }
        },

        /**
         * GAME OVER
         */
        destroy: function()
        {
            var opts = this._o;

            this.hide();
            removeEvent(this.el, 'mousedown', this._onMouseDown, true);
            removeEvent(this.el, 'touchend', this._onMouseDown, true);
            removeEvent(this.el, 'change', this._onChange);
            if (opts.keyboardInput) {
                removeEvent(document, 'keydown', this._onKeyChange);
            }
            if (opts.field) {
                removeEvent(opts.field, 'change', this._onInputChange);
                if (opts.bound) {
                    removeEvent(opts.trigger, 'click', this._onInputClick);
                    removeEvent(opts.trigger, 'focus', this._onInputFocus);
                    removeEvent(opts.trigger, 'blur', this._onInputBlur);
                }
            }
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
        }

    };

    return Pikaday;
}));


/***/ }),
/* 230 */
/*!************************************!*\
  !*** external "window.Autolinker" ***!
  \************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = window.Autolinker;

/***/ }),
/* 231 */
/*!****************************!*\
  !*** ./dev/Common/Mime.js ***!
  \****************************/
/*! exports provided: Mime, default */
/*! exports used: Mime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mime; });
/* unused harmony export default */
/* eslint key-spacing: 0 */

/* eslint quote-props: 0 */
var Mime = {
  'eml': 'message/rfc822',
  'mime': 'message/rfc822',
  'txt': 'text/plain',
  'text': 'text/plain',
  'def': 'text/plain',
  'list': 'text/plain',
  'in': 'text/plain',
  'ini': 'text/plain',
  'log': 'text/plain',
  'sql': 'text/plain',
  'cfg': 'text/plain',
  'conf': 'text/plain',
  'asc': 'text/plain',
  'rtx': 'text/richtext',
  'vcard': 'text/vcard',
  'vcf': 'text/vcard',
  'htm': 'text/html',
  'html': 'text/html',
  'csv': 'text/csv',
  'ics': 'text/calendar',
  'ifb': 'text/calendar',
  'xml': 'text/xml',
  'json': 'application/json',
  'swf': 'application/x-shockwave-flash',
  'hlp': 'application/winhlp',
  'wgt': 'application/widget',
  'chm': 'application/vnd.ms-htmlhelp',
  'p10': 'application/pkcs10',
  'p7c': 'application/pkcs7-mime',
  'p7m': 'application/pkcs7-mime',
  'p7s': 'application/pkcs7-signature',
  'torrent': 'application/x-bittorrent',
  // scripts
  'js': 'application/javascript',
  'pl': 'text/perl',
  'css': 'text/css',
  'asp': 'text/asp',
  'php': 'application/x-httpd-php',
  'php3': 'application/x-httpd-php',
  'php4': 'application/x-httpd-php',
  'php5': 'application/x-httpd-php',
  'phtml': 'application/x-httpd-php',
  // images
  'png': 'image/png',
  'jpg': 'image/jpeg',
  'jpeg': 'image/jpeg',
  'jpe': 'image/jpeg',
  'jfif': 'image/jpeg',
  'gif': 'image/gif',
  'bmp': 'image/bmp',
  'cgm': 'image/cgm',
  'ief': 'image/ief',
  'ico': 'image/x-icon',
  'tif': 'image/tiff',
  'tiff': 'image/tiff',
  'svg': 'image/svg+xml',
  'svgz': 'image/svg+xml',
  'djv': 'image/vnd.djvu',
  'djvu': 'image/vnd.djvu',
  'webp': 'image/webp',
  // archives
  'zip': 'application/zip',
  '7z': 'application/x-7z-compressed',
  'rar': 'application/x-rar-compressed',
  'exe': 'application/x-msdownload',
  'dll': 'application/x-msdownload',
  'scr': 'application/x-msdownload',
  'com': 'application/x-msdownload',
  'bat': 'application/x-msdownload',
  'msi': 'application/x-msdownload',
  'cab': 'application/vnd.ms-cab-compressed',
  'gz': 'application/x-gzip',
  'tgz': 'application/x-gzip',
  'bz': 'application/x-bzip',
  'bz2': 'application/x-bzip2',
  'deb': 'application/x-debian-package',
  // fonts
  'psf': 'application/x-font-linux-psf',
  'otf': 'application/x-font-otf',
  'pcf': 'application/x-font-pcf',
  'snf': 'application/x-font-snf',
  'ttf': 'application/x-font-ttf',
  'ttc': 'application/x-font-ttf',
  // audio
  'mp3': 'audio/mpeg',
  'amr': 'audio/amr',
  'aac': 'audio/x-aac',
  'aif': 'audio/x-aiff',
  'aifc': 'audio/x-aiff',
  'aiff': 'audio/x-aiff',
  'wav': 'audio/x-wav',
  'wma': 'audio/x-ms-wma',
  'wax': 'audio/x-ms-wax',
  'midi': 'audio/midi',
  'mp4a': 'audio/mp4',
  'ogg': 'audio/ogg',
  'weba': 'audio/webm',
  'ra': 'audio/x-pn-realaudio',
  'ram': 'audio/x-pn-realaudio',
  'rmp': 'audio/x-pn-realaudio-plugin',
  'm3u': 'audio/x-mpegurl',
  // video
  'flv': 'video/x-flv',
  'qt': 'video/quicktime',
  'mov': 'video/quicktime',
  'wmv': 'video/windows-media',
  'avi': 'video/x-msvideo',
  'mpg': 'video/mpeg',
  'mpeg': 'video/mpeg',
  'mpe': 'video/mpeg',
  'm1v': 'video/mpeg',
  'm2v': 'video/mpeg',
  '3gp': 'video/3gpp',
  '3g2': 'video/3gpp2',
  'h261': 'video/h261',
  'h263': 'video/h263',
  'h264': 'video/h264',
  'jpgv': 'video/jpgv',
  'mp4': 'video/mp4',
  'mp4v': 'video/mp4',
  'mpg4': 'video/mp4',
  'ogv': 'video/ogg',
  'webm': 'video/webm',
  'm4v': 'video/x-m4v',
  'asf': 'video/x-ms-asf',
  'asx': 'video/x-ms-asf',
  'wm': 'video/x-ms-wm',
  'wmx': 'video/x-ms-wmx',
  'wvx': 'video/x-ms-wvx',
  'movie': 'video/x-sgi-movie',
  // adobe
  'pdf': 'application/pdf',
  'psd': 'image/vnd.adobe.photoshop',
  'ai': 'application/postscript',
  'eps': 'application/postscript',
  'ps': 'application/postscript',
  // ms office
  'doc': 'application/msword',
  'dot': 'application/msword',
  'rtf': 'application/rtf',
  'xls': 'application/vnd.ms-excel',
  'ppt': 'application/vnd.ms-powerpoint',
  'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'dotx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
  'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  // open office
  'odt': 'application/vnd.oasis.opendocument.text',
  'ods': 'application/vnd.oasis.opendocument.spreadsheet'
};


/***/ }),
/* 232 */,
/* 233 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ 155);
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ 112);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 234 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 39);
var create = __webpack_require__(/*! ../internals/object-create */ 167);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 66);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 235 */
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 78);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 236 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 42);
var aFunction = __webpack_require__(/*! ../internals/a-function */ 131);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 39);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 237 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 65);
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ 246);
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ 168);
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ 215);
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ 169);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 47);
var redefine = __webpack_require__(/*! ../internals/redefine */ 69);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 39);
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 98);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 113);
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ 184);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 238 */
/*!*******************************!*\
  !*** ./dev/View/Popup/Ask.js ***!
  \*******************************/
/*! exports provided: AskPopupView, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskPopupView", function() { return AskPopupView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AskPopupView; });
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! key */ 21);
/* harmony import */ var key__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(key__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Common_Translator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Common/Translator */ 9);
/* harmony import */ var Knoin_Knoin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Knoin/Knoin */ 8);
/* harmony import */ var Knoin_AbstractViewNext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Knoin/AbstractViewNext */ 25);


var _dec, _class;








var AskPopupView = (_dec = Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_6__["popup"])({
  name: 'View/Popup/Ask',
  templateID: 'PopupsAsk'
}), _dec(_class = /*#__PURE__*/function (_AbstractViewNext) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(AskPopupView, _AbstractViewNext);

  function AskPopupView() {
    var _this;

    _this = _AbstractViewNext.call(this) || this;
    _this.askDesc = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable('');
    _this.yesButton = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable('');
    _this.noButton = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable('');
    _this.yesFocus = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(false);
    _this.noFocus = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(false);
    _this.fYesAction = null;
    _this.fNoAction = null;
    _this.bFocusYesOnShow = true;
    _this.bDisabeCloseOnEsc = true;
    _this.sDefaultKeyScope = Common_Enums__WEBPACK_IMPORTED_MODULE_3__["KeyState"].PopupAsk;
    return _this;
  }

  var _proto = AskPopupView.prototype;

  _proto.clearPopup = function clearPopup() {
    this.askDesc('');
    this.yesButton(Object(Common_Translator__WEBPACK_IMPORTED_MODULE_5__["i18n"])('POPUPS_ASK/BUTTON_YES'));
    this.noButton(Object(Common_Translator__WEBPACK_IMPORTED_MODULE_5__["i18n"])('POPUPS_ASK/BUTTON_NO'));
    this.yesFocus(false);
    this.noFocus(false);
    this.fYesAction = null;
    this.fNoAction = null;
  };

  _proto.yesClick = function yesClick() {
    this.cancelCommand();

    if (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["isFunc"])(this.fYesAction)) {
      this.fYesAction.call(null);
    }
  };

  _proto.noClick = function noClick() {
    this.cancelCommand();

    if (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["isFunc"])(this.fNoAction)) {
      this.fNoAction.call(null);
    }
  }
  /**
   * @param {string} sAskDesc
   * @param {Function=} fYesFunc
   * @param {Function=} fNoFunc
   * @param {string=} sYesButton
   * @param {string=} sNoButton
   * @param {boolean=} bFocusYesOnShow = true
   * @returns {void}
   */
  ;

  _proto.onShow = function onShow(askDesc, fYesFunc, fNoFunc, yesButton, noButton, isFocusYesOnShow) {
    if (fYesFunc === void 0) {
      fYesFunc = null;
    }

    if (fNoFunc === void 0) {
      fNoFunc = null;
    }

    if (yesButton === void 0) {
      yesButton = '';
    }

    if (noButton === void 0) {
      noButton = '';
    }

    if (isFocusYesOnShow === void 0) {
      isFocusYesOnShow = true;
    }

    this.clearPopup();
    this.fYesAction = fYesFunc || null;
    this.fNoAction = fNoFunc || null;
    this.askDesc(askDesc || '');

    if (yesButton) {
      this.yesButton(yesButton);
    }

    if (noButton) {
      this.noButton(noButton);
    }

    this.bFocusYesOnShow = !!isFocusYesOnShow;
  };

  _proto.onShowWithDelay = function onShowWithDelay() {
    if (this.bFocusYesOnShow) {
      this.yesFocus(true);
    }
  };

  _proto.onBuild = function onBuild() {
    var _this2 = this;

    key__WEBPACK_IMPORTED_MODULE_2___default()('tab, shift+tab, right, left', Common_Enums__WEBPACK_IMPORTED_MODULE_3__["KeyState"].PopupAsk, function () {
      if (_this2.yesFocus()) {
        _this2.noFocus(true);
      } else {
        _this2.yesFocus(true);
      }

      return false;
    });
    key__WEBPACK_IMPORTED_MODULE_2___default()('esc', Common_Enums__WEBPACK_IMPORTED_MODULE_3__["KeyState"].PopupAsk, function () {
      _this2.noClick();

      return false;
    });
  };

  return AskPopupView;
}(Knoin_AbstractViewNext__WEBPACK_IMPORTED_MODULE_7__[/* AbstractViewNext */ "a"])) || _class);


/***/ }),
/* 239 */,
/* 240 */,
/* 241 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 55);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 66);
var anObject = __webpack_require__(/*! ../internals/an-object */ 42);
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ 233);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 242 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 49);
var classof = __webpack_require__(/*! ../internals/classof-raw */ 74);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 39);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 243 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 37);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 244 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 49);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 245 */,
/* 246 */
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ 184).IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ 167);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 95);
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ 169);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 113);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 247 */
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 30);
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ 218);
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ 219);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 47);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 39);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),
/* 248 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/set-timeout.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.timers */ 185);
var path = __webpack_require__(/*! ../internals/path */ 51);

module.exports = path.setTimeout;


/***/ }),
/* 249 */
/*!******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-property-is-enumerable.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 250 */,
/* 251 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/promise/index.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/promise */ 252);

module.exports = parent;


/***/ }),
/* 252 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/es/promise/index.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.aggregate-error */ 253);
__webpack_require__(/*! ../../modules/es.object.to-string */ 264);
__webpack_require__(/*! ../../modules/es.promise */ 265);
__webpack_require__(/*! ../../modules/es.promise.all-settled */ 275);
__webpack_require__(/*! ../../modules/es.promise.any */ 276);
__webpack_require__(/*! ../../modules/es.promise.finally */ 277);
__webpack_require__(/*! ../../modules/es.string.iterator */ 278);
__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ 161);
var path = __webpack_require__(/*! ../../internals/path */ 51);

module.exports = path.Promise;


/***/ }),
/* 253 */
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.aggregate-error.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 34);
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ 139);
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ 159);
var create = __webpack_require__(/*! ../internals/object-create */ 160);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 52);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 90);
var iterate = __webpack_require__(/*! ../internals/iterate */ 107);

var $AggregateError = function AggregateError(errors, message) {
  var that = this;
  if (!(that instanceof $AggregateError)) return new $AggregateError(errors, message);
  if (setPrototypeOf) {
    // eslint-disable-next-line unicorn/error-message
    that = setPrototypeOf(new Error(undefined), getPrototypeOf(that));
  }
  if (message !== undefined) createNonEnumerableProperty(that, 'message', String(message));
  var errorsArray = [];
  iterate(errors, errorsArray.push, { that: errorsArray });
  createNonEnumerableProperty(that, 'errors', errorsArray);
  return that;
};

$AggregateError.prototype = create(Error.prototype, {
  constructor: createPropertyDescriptor(5, $AggregateError),
  message: createPropertyDescriptor(5, ''),
  name: createPropertyDescriptor(5, 'AggregateError')
});

// `AggregateError` constructor
// https://tc39.es/ecma262/#sec-aggregate-error-constructor
$({ global: true }, {
  AggregateError: $AggregateError
});


/***/ }),
/* 254 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-global.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 31);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 52);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 255 */
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/correct-prototype-getter.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 43);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 256 */
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-possible-prototype.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 50);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 257 */
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-define-properties.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 53);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 81);
var anObject = __webpack_require__(/*! ../internals/an-object */ 58);
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ 220);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 258 */
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-keys-internal.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ 54);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 80);
var indexOf = __webpack_require__(/*! ../internals/array-includes */ 259).indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ 143);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 259 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-includes.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 80);
var toLength = __webpack_require__(/*! ../internals/to-length */ 91);
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ 221);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 260 */
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-array-iterator-method.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 38);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 76);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 261 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/use-symbol-as-uid.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ 192);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 262 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ 92);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 76);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 38);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 263 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterator-close.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 58);

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),
/* 264 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.to-string.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 265 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.promise.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 34);
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 86);
var global = __webpack_require__(/*! ../internals/global */ 31);
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 75);
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ 193);
var redefine = __webpack_require__(/*! ../internals/redefine */ 108);
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ 266);
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ 145);
var setSpecies = __webpack_require__(/*! ../internals/set-species */ 268);
var isObject = __webpack_require__(/*! ../internals/is-object */ 50);
var aFunction = __webpack_require__(/*! ../internals/a-function */ 70);
var anInstance = __webpack_require__(/*! ../internals/an-instance */ 269);
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ 194);
var iterate = __webpack_require__(/*! ../internals/iterate */ 107);
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ 270);
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ 195);
var task = __webpack_require__(/*! ../internals/task */ 196).set;
var microtask = __webpack_require__(/*! ../internals/microtask */ 271);
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ 198);
var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ 273);
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ 109);
var perform = __webpack_require__(/*! ../internals/perform */ 146);
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ 147);
var isForced = __webpack_require__(/*! ../internals/is-forced */ 187);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 38);
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ 118);
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ 148);

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && !NATIVE_REJECTION_EVENT) return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 266 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/redefine-all.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ 108);

module.exports = function (target, src, options) {
  for (var key in src) {
    if (options && options.unsafe && target[key]) target[key] = src[key];
    else redefine(target, key, src[key], options);
  } return target;
};


/***/ }),
/* 267 */
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-to-string.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ 144);
var classof = __webpack_require__(/*! ../internals/classof */ 92);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 268 */
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-species.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 75);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 81);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 38);
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 53);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 269 */
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/an-instance.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),
/* 270 */
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/check-correctness-of-iteration.js ***!
  \*******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 38);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
/* 271 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/microtask.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 31);
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 157).f;
var macrotask = __webpack_require__(/*! ../internals/task */ 196).set;
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ 197);
var IS_WEBOS_WEBKIT = __webpack_require__(/*! ../internals/engine-is-webos-webkit */ 272);
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ 118);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),
/* 272 */
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-is-webos-webkit.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ 106);

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),
/* 273 */
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/host-report-errors.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 31);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),
/* 274 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/native-weak-map.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 31);
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ 194);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 275 */
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.promise.all-settled.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 34);
var aFunction = __webpack_require__(/*! ../internals/a-function */ 70);
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ 109);
var perform = __webpack_require__(/*! ../internals/perform */ 146);
var iterate = __webpack_require__(/*! ../internals/iterate */ 107);

// `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled
$({ target: 'Promise', stat: true }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'fulfilled', value: value };
          --remaining || resolve(values);
        }, function (error) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: error };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 276 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.promise.any.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 34);
var aFunction = __webpack_require__(/*! ../internals/a-function */ 70);
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 75);
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ 109);
var perform = __webpack_require__(/*! ../internals/perform */ 146);
var iterate = __webpack_require__(/*! ../internals/iterate */ 107);

var PROMISE_ANY_ERROR = 'No one promise resolved';

// `Promise.any` method
// https://tc39.es/ecma262/#sec-promise.any
$({ target: 'Promise', stat: true }, {
  any: function any(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aFunction(C.resolve);
      var errors = [];
      var counter = 0;
      var remaining = 1;
      var alreadyResolved = false;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyRejected = false;
        errors.push(undefined);
        remaining++;
        promiseResolve.call(C, promise).then(function (value) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyResolved = true;
          resolve(value);
        }, function (error) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyRejected = true;
          errors[index] = error;
          --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
        });
      });
      --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 277 */
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.promise.finally.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 34);
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 86);
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ 193);
var fails = __webpack_require__(/*! ../internals/fails */ 43);
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 75);
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ 195);
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ 198);
var redefine = __webpack_require__(/*! ../internals/redefine */ 108);

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromise && fails(function () {
  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = typeof onFinally == 'function';
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// patch native Promise.prototype for native async functions
if (!IS_PURE && typeof NativePromise == 'function' && !NativePromise.prototype['finally']) {
  redefine(NativePromise.prototype, 'finally', getBuiltIn('Promise').prototype['finally']);
}


/***/ }),
/* 278 */
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.string.iterator.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ 279).charAt;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ 147);
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ 199);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 279 */
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/string-multibyte.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ 142);
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 115);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 280 */
/*!****************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-iterator-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ 200).IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ 160);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 90);
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ 145);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 76);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 281 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/dom-iterables.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 282 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/get-substitution.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ 89);

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),
/* 283 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/set-interval.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.timers */ 185);
var path = __webpack_require__(/*! ../internals/path */ 51);

module.exports = path.setInterval;


/***/ }),
/* 284 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ 37);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 285 */
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/whitespaces.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 286 */
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-species-create.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 50);
var isArray = __webpack_require__(/*! ../internals/is-array */ 173);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 38);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 287 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-property.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ 158);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 81);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 90);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 288 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/reduce.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var reduce = __webpack_require__(/*! ../array/virtual/reduce */ 345);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.reduce;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.reduce) ? reduce : own;
};


/***/ }),
/* 289 */
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-method-is-strict.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ 43);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 290 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ 214);
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ 128);
var toObject = __webpack_require__(/*! ../internals/to-object */ 89);
var toLength = __webpack_require__(/*! ../internals/to-length */ 84);
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ 352);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),
/* 291 */
/*!*************************************!*\
  !*** ./dev/View/Popup/Languages.js ***!
  \*************************************/
/*! exports provided: LanguagesPopupView, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesPopupView", function() { return LanguagesPopupView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LanguagesPopupView; });
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ 17);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Knoin_Knoin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Knoin/Knoin */ 8);
/* harmony import */ var Knoin_AbstractViewNext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Knoin/AbstractViewNext */ 25);


var _dec, _class;




 // import {view, ViewType} from 'Knoin/Knoin';



var LanguagesPopupView = (_dec = Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_5__["popup"])({
  name: 'View/Popup/Languages',
  templateID: 'PopupsLanguages'
}), _dec(_class = /*#__PURE__*/function (_AbstractViewNext) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(LanguagesPopupView, _AbstractViewNext);

  function LanguagesPopupView() {
    var _this;

    _this = _AbstractViewNext.call(this) || this;
    _this.fLang = null;
    _this.userLanguage = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable('');
    _this.langs = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observableArray([]);
    _this.languages = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].computed(function () {
      var userLanguage = _this.userLanguage();

      return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(___WEBPACK_IMPORTED_MODULE_2___default.a).call(___WEBPACK_IMPORTED_MODULE_2___default.a, _this.langs(), function (language) {
        return {
          key: language,
          user: language === userLanguage,
          selected: ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(false),
          fullName: Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["convertLangName"])(language)
        };
      });
    });

    _this.langs.subscribe(function () {
      _this.setLanguageSelection();
    });

    return _this;
  }

  var _proto = LanguagesPopupView.prototype;

  _proto.languageTooltipName = function languageTooltipName(language) {
    return Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["convertLangName"])(language, true);
  };

  _proto.setLanguageSelection = function setLanguageSelection() {
    var currentLang = this.fLang ? ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].unwrap(this.fLang) : '';

    ___WEBPACK_IMPORTED_MODULE_2___default.a.each(this.languages(), function (item) {
      item.selected(item.key === currentLang);
    });
  };

  _proto.onBeforeShow = function onBeforeShow() {
    this.fLang = null;
    this.userLanguage('');
    this.langs([]);
  };

  _proto.onShow = function onShow(fLanguage, langs, userLanguage) {
    this.fLang = fLanguage;
    this.userLanguage(userLanguage || '');
    this.langs(langs);
  };

  _proto.changeLanguage = function changeLanguage(lang) {
    if (this.fLang) {
      this.fLang(lang);
    }

    this.cancelCommand();
  };

  return LanguagesPopupView;
}(Knoin_AbstractViewNext__WEBPACK_IMPORTED_MODULE_6__[/* AbstractViewNext */ "a"])) || _class);


/***/ }),
/* 292 */
/*!**************************!*\
  !*** ./dev/bootstrap.js ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set-timeout */ 33);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! window */ 4);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(window__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Common_Globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Common/Globals */ 6);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Common_Plugins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Common/Plugins */ 36);
/* harmony import */ var Common_Translator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Common/Translator */ 9);
/* harmony import */ var Model_Email__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Model/Email */ 82);








/* harmony default export */ __webpack_exports__["a"] = (function (App) {
  Common_Globals__WEBPACK_IMPORTED_MODULE_3__["data"].__APP__ = App;
  Common_Globals__WEBPACK_IMPORTED_MODULE_3__["$win"].on('keydown', Common_Utils__WEBPACK_IMPORTED_MODULE_2__["killCtrlACtrlS"]).on('unload', function () {
    Common_Globals__WEBPACK_IMPORTED_MODULE_3__["data"].bUnload = true;
  });
  Common_Globals__WEBPACK_IMPORTED_MODULE_3__["$html"].addClass(Common_Globals__WEBPACK_IMPORTED_MODULE_3__["bMobileDevice"] ? 'mobile' : 'no-mobile').on('click.dropdown.data-api', Common_Utils__WEBPACK_IMPORTED_MODULE_2__["detectDropdownVisibility"]);
  var rl = window__WEBPACK_IMPORTED_MODULE_1___default.a.rl || {};
  rl.i18n = Common_Translator__WEBPACK_IMPORTED_MODULE_6__["i18n"];
  rl.createCommand = Common_Utils__WEBPACK_IMPORTED_MODULE_2__["createCommandLegacy"];
  rl.addSettingsViewModel = Common_Plugins__WEBPACK_IMPORTED_MODULE_5__[/* addSettingsViewModel */ "b"];
  rl.addSettingsViewModelForAdmin = Common_Plugins__WEBPACK_IMPORTED_MODULE_5__[/* addSettingsViewModelForAdmin */ "c"];
  rl.addHook = Common_Plugins__WEBPACK_IMPORTED_MODULE_5__[/* addHook */ "a"];
  rl.settingsGet = Common_Plugins__WEBPACK_IMPORTED_MODULE_5__[/* mainSettingsGet */ "d"];
  rl.pluginSettingsGet = Common_Plugins__WEBPACK_IMPORTED_MODULE_5__[/* settingsGet */ "h"];
  rl.pluginRemoteRequest = Common_Plugins__WEBPACK_IMPORTED_MODULE_5__[/* remoteRequest */ "e"];
  rl.EmailModel = Model_Email__WEBPACK_IMPORTED_MODULE_7__["EmailModel"];
  rl.Enums = Common_Enums__WEBPACK_IMPORTED_MODULE_4__;
  window__WEBPACK_IMPORTED_MODULE_1___default.a.rl = rl;

  var start = function start() {
    _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_0___default()(function () {
      Common_Globals__WEBPACK_IMPORTED_MODULE_3__["$html"].removeClass('no-js rl-booted-trigger').addClass('rl-booted');
      App.bootstart();
    }, Common_Enums__WEBPACK_IMPORTED_MODULE_4__["Magics"].Time10ms);
  };

  window__WEBPACK_IMPORTED_MODULE_1___default.a.__APP_BOOT = function (fErrorCallback) {
    Object(Common_Utils__WEBPACK_IMPORTED_MODULE_2__["domReady"])(function () {
      _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_0___default()(function () {
        if (window__WEBPACK_IMPORTED_MODULE_1___default.a.document.getElementById('rainloop-templates-id')) {
          start();
        } else if (window__WEBPACK_IMPORTED_MODULE_1___default.a.rainloopTEMPLATES && window__WEBPACK_IMPORTED_MODULE_1___default.a.rainloopTEMPLATES[0]) {
          window__WEBPACK_IMPORTED_MODULE_1___default.a.document.getElementById('rl-templates').innerHTML = window__WEBPACK_IMPORTED_MODULE_1___default.a.rainloopTEMPLATES[0];
          start();
        } else {
          fErrorCallback();
        }

        window__WEBPACK_IMPORTED_MODULE_1___default.a.__APP_BOOT = null;
      }, Common_Enums__WEBPACK_IMPORTED_MODULE_4__["Magics"].Time10ms);
    });
  };
});

/***/ }),
/* 293 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/object/create */ 362);

/***/ }),
/* 294 */
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _setPrototypeOf; });
/* harmony import */ var _babel_runtime_corejs3_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/set-prototype-of */ 295);
/* harmony import */ var _babel_runtime_corejs3_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _babel_runtime_corejs3_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),
/* 295 */
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/object/set-prototype-of */ 365);

/***/ }),
/* 296 */
/*!***********************************!*\
  !*** ./dev/Stores/AbstractApp.js ***!
  \***********************************/
/*! exports provided: AbstractAppStore, default */
/*! exports used: AbstractAppStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractAppStore; });
/* unused harmony export default */
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Common_Globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Common/Globals */ 6);
/* harmony import */ var Storage_Settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Storage/Settings */ 5);




var AbstractAppStore = /*#__PURE__*/function () {
  function AbstractAppStore() {
    this.allowLanguagesOnSettings = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(true);
    this.allowLanguagesOnLogin = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(true);
    this.newMoveToFolder = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(true);
    this.interfaceAnimation = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(true);
    this.interfaceAnimation.subscribe(function (value) {
      var anim = Common_Globals__WEBPACK_IMPORTED_MODULE_1__["bMobileDevice"] || !value;
      Common_Globals__WEBPACK_IMPORTED_MODULE_1__["$html"].toggleClass('rl-anim', !anim).toggleClass('no-rl-anim', anim);
    });
    this.interfaceAnimation.valueHasMutated();
  }

  var _proto = AbstractAppStore.prototype;

  _proto.populate = function populate() {
    this.allowLanguagesOnLogin(!!Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["settingsGet"]('AllowLanguagesOnLogin'));
    this.allowLanguagesOnSettings(!!Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["settingsGet"]('AllowLanguagesOnSettings'));
    this.newMoveToFolder(!!Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["settingsGet"]('NewMoveToFolder'));
    this.interfaceAnimation(!!Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["settingsGet"]('InterfaceAnimation'));
  };

  return AbstractAppStore;
}();



/***/ }),
/* 297 */
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/instance/for-each.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/instance/for-each */ 368);

/***/ }),
/* 298 */
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/object/keys */ 374);

/***/ }),
/* 299 */
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/instance/reduce.js ***!
  \************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/instance/reduce */ 377);

/***/ }),
/* 300 */
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/instance/reverse.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/instance/reverse */ 378);

/***/ }),
/* 301 */
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/instance/slice.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/instance/slice */ 382);

/***/ }),
/* 302 */
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/object/define-property */ 386);

/***/ }),
/* 303 */
/*!************************************!*\
  !*** ./dev/Remote/AbstractAjax.js ***!
  \************************************/
/*! exports provided: AbstractAjaxRemote, default */
/*! exports used: AbstractAjaxRemote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractAjaxRemote; });
/* unused harmony export default */
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! window */ 4);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(window__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! $ */ 7);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n($__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Common_Consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Common/Consts */ 24);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Common_Globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Common/Globals */ 6);
/* harmony import */ var Common_Links__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Common/Links */ 15);
/* harmony import */ var Common_Plugins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Common/Plugins */ 36);
/* harmony import */ var Storage_Settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Storage/Settings */ 5);











var AbstractAjaxRemote = /*#__PURE__*/function () {
  function AbstractAjaxRemote() {
    this.oRequests = {};
  }
  /**
   * @param {?Function} fCallback
   * @param {string} sRequestAction
   * @param {string} sType
   * @param {?AjaxJsonDefaultResponse} oData
   * @param {boolean} bCached
   * @param {*=} oRequestParameters
   */


  var _proto = AbstractAjaxRemote.prototype;

  _proto.defaultResponse = function defaultResponse(fCallback, sRequestAction, sType, oData, bCached, oRequestParameters) {
    var fCall = function fCall() {
      if (Common_Enums__WEBPACK_IMPORTED_MODULE_4__["StorageResultType"].Success !== sType && Common_Globals__WEBPACK_IMPORTED_MODULE_6__["data"].bUnload) {
        sType = Common_Enums__WEBPACK_IMPORTED_MODULE_4__["StorageResultType"].Unload;
      }

      if (Common_Enums__WEBPACK_IMPORTED_MODULE_4__["StorageResultType"].Success === sType && oData && !oData.Result) {
        if (oData && -1 < Object(Common_Utils__WEBPACK_IMPORTED_MODULE_5__["inArray"])(oData.ErrorCode, [Common_Enums__WEBPACK_IMPORTED_MODULE_4__["Notification"].AuthError, Common_Enums__WEBPACK_IMPORTED_MODULE_4__["Notification"].AccessError, Common_Enums__WEBPACK_IMPORTED_MODULE_4__["Notification"].ConnectionError, Common_Enums__WEBPACK_IMPORTED_MODULE_4__["Notification"].DomainNotAllowed, Common_Enums__WEBPACK_IMPORTED_MODULE_4__["Notification"].AccountNotAllowed, Common_Enums__WEBPACK_IMPORTED_MODULE_4__["Notification"].MailServerError, Common_Enums__WEBPACK_IMPORTED_MODULE_4__["Notification"].UnknownNotification, Common_Enums__WEBPACK_IMPORTED_MODULE_4__["Notification"].UnknownError])) {
          Common_Globals__WEBPACK_IMPORTED_MODULE_6__["data"].iAjaxErrorCount += 1;
        }

        if (oData && Common_Enums__WEBPACK_IMPORTED_MODULE_4__["Notification"].InvalidToken === oData.ErrorCode) {
          Common_Globals__WEBPACK_IMPORTED_MODULE_6__["data"].iTokenErrorCount += 1;
        }

        if (Common_Consts__WEBPACK_IMPORTED_MODULE_3__[/* TOKEN_ERROR_LIMIT */ "q"] < Common_Globals__WEBPACK_IMPORTED_MODULE_6__["data"].iTokenErrorCount) {
          if (Common_Globals__WEBPACK_IMPORTED_MODULE_6__["data"].__APP__ && Common_Globals__WEBPACK_IMPORTED_MODULE_6__["data"].__APP__.loginAndLogoutReload) {
            Common_Globals__WEBPACK_IMPORTED_MODULE_6__["data"].__APP__.loginAndLogoutReload(false, true);
          }
        }

        if (oData.ClearAuth || oData.Logout || Common_Consts__WEBPACK_IMPORTED_MODULE_3__[/* AJAX_ERROR_LIMIT */ "a"] < Common_Globals__WEBPACK_IMPORTED_MODULE_6__["data"].iAjaxErrorCount) {
          if (Common_Globals__WEBPACK_IMPORTED_MODULE_6__["data"].__APP__ && Common_Globals__WEBPACK_IMPORTED_MODULE_6__["data"].__APP__.clearClientSideToken) {
            Common_Globals__WEBPACK_IMPORTED_MODULE_6__["data"].__APP__.clearClientSideToken();

            if (!oData.ClearAuth && Common_Globals__WEBPACK_IMPORTED_MODULE_6__["data"].__APP__.loginAndLogoutReload) {
              Common_Globals__WEBPACK_IMPORTED_MODULE_6__["data"].__APP__.loginAndLogoutReload(false, true);
            }
          }
        }
      } else if (Common_Enums__WEBPACK_IMPORTED_MODULE_4__["StorageResultType"].Success === sType && oData && oData.Result) {
        Common_Globals__WEBPACK_IMPORTED_MODULE_6__["data"].iAjaxErrorCount = 0;
        Common_Globals__WEBPACK_IMPORTED_MODULE_6__["data"].iTokenErrorCount = 0;
      }

      Object(Common_Plugins__WEBPACK_IMPORTED_MODULE_8__[/* runHook */ "f"])('ajax-default-response', [sRequestAction, Common_Enums__WEBPACK_IMPORTED_MODULE_4__["StorageResultType"].Success === sType ? oData : null, sType, bCached, oRequestParameters]);

      if (fCallback) {
        fCallback(sType, Common_Enums__WEBPACK_IMPORTED_MODULE_4__["StorageResultType"].Success === sType ? oData : null, bCached, sRequestAction, oRequestParameters);
      }
    };

    switch (sType) {
      case 'success':
        sType = Common_Enums__WEBPACK_IMPORTED_MODULE_4__["StorageResultType"].Success;
        break;

      case 'abort':
        sType = Common_Enums__WEBPACK_IMPORTED_MODULE_4__["StorageResultType"].Abort;
        break;

      default:
        sType = Common_Enums__WEBPACK_IMPORTED_MODULE_4__["StorageResultType"].Error;
        break;
    }

    if (Common_Enums__WEBPACK_IMPORTED_MODULE_4__["StorageResultType"].Error === sType) {
      ___WEBPACK_IMPORTED_MODULE_1___default.a.delay(fCall, 300);
    } else {
      fCall();
    }
  }
  /**
   * @param {?Function} fResultCallback
   * @param {Object} oParameters
   * @param {?number=} iTimeOut = 20000
   * @param {string=} sGetAdd = ''
   * @param {Array=} aAbortActions = []
   * @returns {jQuery.jqXHR}
   */
  ;

  _proto.ajaxRequest = function ajaxRequest(fResultCallback, params, iTimeOut, sGetAdd, abortActions) {
    var _this = this;

    if (iTimeOut === void 0) {
      iTimeOut = 20000;
    }

    if (sGetAdd === void 0) {
      sGetAdd = '';
    }

    if (abortActions === void 0) {
      abortActions = [];
    }

    var isPost = '' === sGetAdd,
        headers = {},
        start = new window__WEBPACK_IMPORTED_MODULE_0___default.a.Date().getTime();
    var action = '';
    params = params || {};
    action = params.Action || '';

    if (action && 0 < abortActions.length) {
      ___WEBPACK_IMPORTED_MODULE_1___default.a.each(abortActions, function (actionToAbort) {
        if (_this.oRequests[actionToAbort]) {
          _this.oRequests[actionToAbort].__aborted = true;

          if (_this.oRequests[actionToAbort].abort) {
            _this.oRequests[actionToAbort].abort();
          }

          _this.oRequests[actionToAbort] = null;
        }
      });
    }

    if (isPost) {
      params.XToken = Storage_Settings__WEBPACK_IMPORTED_MODULE_9__["appSettingsGet"]('token');
    }

    var oDefAjax = $__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
      type: isPost ? 'POST' : 'GET',
      url: Object(Common_Links__WEBPACK_IMPORTED_MODULE_7__[/* ajax */ "a"])(sGetAdd),
      async: true,
      dataType: 'json',
      data: isPost ? params : {},
      headers: headers,
      timeout: iTimeOut,
      global: true
    });
    oDefAjax.always(function (oData, sType) {
      var cached = false;

      if (oData && oData.Time) {
        cached = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_5__["pInt"])(oData.Time) > new window__WEBPACK_IMPORTED_MODULE_0___default.a.Date().getTime() - start;
      }

      if (oData && oData.UpdateToken) {
        if (Common_Globals__WEBPACK_IMPORTED_MODULE_6__["data"].__APP__ && Common_Globals__WEBPACK_IMPORTED_MODULE_6__["data"].__APP__.setClientSideToken) {
          Common_Globals__WEBPACK_IMPORTED_MODULE_6__["data"].__APP__.setClientSideToken(oData.UpdateToken);
        }
      }

      if (action && _this.oRequests[action]) {
        if (_this.oRequests[action].__aborted) {
          sType = 'abort';
        }

        _this.oRequests[action] = null;
      }

      _this.defaultResponse(fResultCallback, action, sType, oData, cached, params);
    });

    if (action && 0 < abortActions.length && -1 < Object(Common_Utils__WEBPACK_IMPORTED_MODULE_5__["inArray"])(action, abortActions)) {
      if (this.oRequests[action]) {
        this.oRequests[action].__aborted = true;

        if (this.oRequests[action].abort) {
          this.oRequests[action].abort();
        }

        this.oRequests[action] = null;
      }

      this.oRequests[action] = oDefAjax;
    } // eslint-disable-next-line no-console


    oDefAjax.catch(console.log);
    return oDefAjax;
  }
  /**
   * @param {?Function} fCallback
   * @param {string} sAction
   * @param {Object=} oParameters
   * @param {?number=} iTimeout
   * @param {string=} sGetAdd = ''
   * @param {Array=} aAbortActions = []
   */
  ;

  _proto.defaultRequest = function defaultRequest(fCallback, sAction, oParameters, iTimeout, sGetAdd, aAbortActions) {
    oParameters = oParameters || {};
    oParameters.Action = sAction;
    sGetAdd = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_5__["pString"])(sGetAdd);
    Object(Common_Plugins__WEBPACK_IMPORTED_MODULE_8__[/* runHook */ "f"])('ajax-default-request', [sAction, oParameters, sGetAdd]);
    return this.ajaxRequest(fCallback, oParameters, Object(Common_Utils__WEBPACK_IMPORTED_MODULE_5__["isUnd"])(iTimeout) ? Common_Consts__WEBPACK_IMPORTED_MODULE_3__[/* DEFAULT_AJAX_TIMEOUT */ "g"] : Object(Common_Utils__WEBPACK_IMPORTED_MODULE_5__["pInt"])(iTimeout), sGetAdd, aAbortActions);
  }
  /**
   * @param {?Function} fCallback
   */
  ;

  _proto.noop = function noop(fCallback) {
    this.defaultRequest(fCallback, 'Noop');
  }
  /**
   * @param {?Function} fCallback
   */
  ;

  _proto.getPublicKey = function getPublicKey(fCallback) {
    this.defaultRequest(fCallback, 'GetPublicKey');
  }
  /**
   * @param {?Function} fCallback
   * @param {string} sVersion
   */
  ;

  _proto.jsVersion = function jsVersion(fCallback, sVersion) {
    this.defaultRequest(fCallback, 'Version', {
      'Version': sVersion
    });
  };

  return AbstractAjaxRemote;
}();



/***/ }),
/* 304 */
/*!****************************************!*\
  !*** ./dev/Screen/AbstractSettings.js ***!
  \****************************************/
/*! exports provided: AbstractSettingsScreen, default */
/*! exports used: AbstractSettingsScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractSettingsScreen; });
/* unused harmony export default */
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ 12);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! $ */ 7);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n($__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Common_Globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Common/Globals */ 6);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Common_Links__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Common/Links */ 15);
/* harmony import */ var Knoin_Knoin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Knoin/Knoin */ 8);
/* harmony import */ var Knoin_AbstractScreen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Knoin/AbstractScreen */ 152);











var AbstractSettingsScreen = /*#__PURE__*/function (_AbstractScreen) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(AbstractSettingsScreen, _AbstractScreen);

  /**
   * @param {Array} viewModels
   */
  function AbstractSettingsScreen(viewModels) {
    var _this;

    _this = _AbstractScreen.call(this, 'settings', viewModels) || this;
    _this.menu = ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].observableArray([]);
    _this.oCurrentSubScreen = null;
    _this.oViewModelPlace = null;

    _this.setupSettings();

    return _this;
  }
  /**
   * @param {Function=} fCallback
   */


  var _proto = AbstractSettingsScreen.prototype;

  _proto.setupSettings = function setupSettings(fCallback) {
    if (fCallback === void 0) {
      fCallback = null;
    }

    if (fCallback) {
      fCallback();
    }
  };

  _proto.onRoute = function onRoute(subName) {
    var _this2 = this;

    var settingsScreen = null,
        RoutedSettingsViewModel = null,
        viewModelPlace = null,
        viewModelDom = null;
    RoutedSettingsViewModel = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(___WEBPACK_IMPORTED_MODULE_2___default.a).call(___WEBPACK_IMPORTED_MODULE_2___default.a, Common_Globals__WEBPACK_IMPORTED_MODULE_5__["VIEW_MODELS"].settings, function (SettingsViewModel) {
      return SettingsViewModel && SettingsViewModel.__rlSettingsData && subName === SettingsViewModel.__rlSettingsData.Route;
    });

    if (RoutedSettingsViewModel) {
      if (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(___WEBPACK_IMPORTED_MODULE_2___default.a).call(___WEBPACK_IMPORTED_MODULE_2___default.a, Common_Globals__WEBPACK_IMPORTED_MODULE_5__["VIEW_MODELS"]['settings-removed'], function (DisabledSettingsViewModel) {
        return DisabledSettingsViewModel && DisabledSettingsViewModel === RoutedSettingsViewModel;
      })) {
        RoutedSettingsViewModel = null;
      }

      if (RoutedSettingsViewModel && _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(___WEBPACK_IMPORTED_MODULE_2___default.a).call(___WEBPACK_IMPORTED_MODULE_2___default.a, Common_Globals__WEBPACK_IMPORTED_MODULE_5__["VIEW_MODELS"]['settings-disabled'], function (DisabledSettingsViewModel) {
        return DisabledSettingsViewModel && DisabledSettingsViewModel === RoutedSettingsViewModel;
      })) {
        RoutedSettingsViewModel = null;
      }
    }

    if (RoutedSettingsViewModel) {
      if (RoutedSettingsViewModel.__builded && RoutedSettingsViewModel.__vm) {
        settingsScreen = RoutedSettingsViewModel.__vm;
      } else {
        viewModelPlace = this.oViewModelPlace;

        if (viewModelPlace && 1 === viewModelPlace.length) {
          settingsScreen = new RoutedSettingsViewModel();
          viewModelDom = $__WEBPACK_IMPORTED_MODULE_3___default()('<div></div>').addClass('rl-settings-view-model').hide();
          viewModelDom.appendTo(viewModelPlace);
          settingsScreen.viewModelDom = viewModelDom;
          settingsScreen.__rlSettingsData = RoutedSettingsViewModel.__rlSettingsData;
          RoutedSettingsViewModel.__dom = viewModelDom;
          RoutedSettingsViewModel.__builded = true;
          RoutedSettingsViewModel.__vm = settingsScreen;
          var tmpl = {
            name: RoutedSettingsViewModel.__rlSettingsData.Template
          };
          ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].applyBindingAccessorsToNode(viewModelDom[0], {
            translatorInit: true,
            template: function template() {
              return tmpl;
            }
          }, settingsScreen);
          Object(Common_Utils__WEBPACK_IMPORTED_MODULE_6__["delegateRun"])(settingsScreen, 'onBuild', [viewModelDom]);
        } else {
          Object(Common_Utils__WEBPACK_IMPORTED_MODULE_6__["log"])('Cannot find sub settings view model position: SettingsSubScreen');
        }
      }

      if (settingsScreen) {
        ___WEBPACK_IMPORTED_MODULE_2___default.a.defer(function () {
          // hide
          if (_this2.oCurrentSubScreen) {
            Object(Common_Utils__WEBPACK_IMPORTED_MODULE_6__["delegateRun"])(_this2.oCurrentSubScreen, 'onHide');

            _this2.oCurrentSubScreen.viewModelDom.hide();
          } // --


          _this2.oCurrentSubScreen = settingsScreen; // show

          if (_this2.oCurrentSubScreen) {
            Object(Common_Utils__WEBPACK_IMPORTED_MODULE_6__["delegateRun"])(_this2.oCurrentSubScreen, 'onBeforeShow');

            _this2.oCurrentSubScreen.viewModelDom.show();

            Object(Common_Utils__WEBPACK_IMPORTED_MODULE_6__["delegateRun"])(_this2.oCurrentSubScreen, 'onShow');
            Object(Common_Utils__WEBPACK_IMPORTED_MODULE_6__["delegateRun"])(_this2.oCurrentSubScreen, 'onShowWithDelay', [], 200);

            ___WEBPACK_IMPORTED_MODULE_2___default.a.each(_this2.menu(), function (item) {
              item.selected(settingsScreen && settingsScreen.__rlSettingsData && item.route === settingsScreen.__rlSettingsData.Route);
            });

            $__WEBPACK_IMPORTED_MODULE_3___default()('#rl-content .b-settings .b-content .content').scrollTop(0);
          } // --


          Object(Common_Utils__WEBPACK_IMPORTED_MODULE_6__["windowResize"])();
        });
      }
    } else {
      Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_8__["setHash"])(Object(Common_Links__WEBPACK_IMPORTED_MODULE_7__[/* settings */ "z"])(), false, true);
    }
  };

  _proto.onHide = function onHide() {
    if (this.oCurrentSubScreen && this.oCurrentSubScreen.viewModelDom) {
      Object(Common_Utils__WEBPACK_IMPORTED_MODULE_6__["delegateRun"])(this.oCurrentSubScreen, 'onHide');
      this.oCurrentSubScreen.viewModelDom.hide();
    }
  };

  _proto.onBuild = function onBuild() {
    var _this3 = this;

    ___WEBPACK_IMPORTED_MODULE_2___default.a.each(Common_Globals__WEBPACK_IMPORTED_MODULE_5__["VIEW_MODELS"].settings, function (SettingsViewModel) {
      if (SettingsViewModel && SettingsViewModel.__rlSettingsData && !_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(___WEBPACK_IMPORTED_MODULE_2___default.a).call(___WEBPACK_IMPORTED_MODULE_2___default.a, Common_Globals__WEBPACK_IMPORTED_MODULE_5__["VIEW_MODELS"]['settings-removed'], function (RemoveSettingsViewModel) {
        return RemoveSettingsViewModel && RemoveSettingsViewModel === SettingsViewModel;
      })) {
        _this3.menu.push({
          route: SettingsViewModel.__rlSettingsData.Route,
          label: SettingsViewModel.__rlSettingsData.Label,
          selected: ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].observable(false),
          disabled: !!_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(___WEBPACK_IMPORTED_MODULE_2___default.a).call(___WEBPACK_IMPORTED_MODULE_2___default.a, Common_Globals__WEBPACK_IMPORTED_MODULE_5__["VIEW_MODELS"]['settings-disabled'], function (DisabledSettingsViewModel) {
            return DisabledSettingsViewModel && DisabledSettingsViewModel === SettingsViewModel;
          })
        });
      }
    });

    this.oViewModelPlace = $__WEBPACK_IMPORTED_MODULE_3___default()('#rl-content #rl-settings-subscreen');
  };

  _proto.routes = function routes() {
    var DefaultViewModel = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(___WEBPACK_IMPORTED_MODULE_2___default.a).call(___WEBPACK_IMPORTED_MODULE_2___default.a, Common_Globals__WEBPACK_IMPORTED_MODULE_5__["VIEW_MODELS"].settings, function (SettingsViewModel) {
      return SettingsViewModel && SettingsViewModel.__rlSettingsData && SettingsViewModel.__rlSettingsData.IsDefault;
    }),
        defaultRoute = DefaultViewModel && DefaultViewModel.__rlSettingsData ? DefaultViewModel.__rlSettingsData.Route : 'general',
        rules = {
      subname: /^(.*)$/,
      normalize_: function normalize_(rquest, vals) {
        vals.subname = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_6__["isUnd"])(vals.subname) ? defaultRoute : Object(Common_Utils__WEBPACK_IMPORTED_MODULE_6__["pString"])(vals.subname);
        return [vals.subname];
      }
    };

    return [['{subname}/', rules], ['{subname}', rules], ['', rules]];
  };

  return AbstractSettingsScreen;
}(Knoin_AbstractScreen__WEBPACK_IMPORTED_MODULE_9__[/* AbstractScreen */ "a"]);



/***/ }),
/* 305 */
/*!*****************************!*\
  !*** ./dev/App/Abstract.js ***!
  \*****************************/
/*! exports provided: AbstractApp, default */
/*! exports used: AbstractApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractApp; });
/* unused harmony export default */
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! window */ 4);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(window__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! $ */ 7);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n($__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var key__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! key */ 21);
/* harmony import */ var key__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(key__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ssm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ssm */ 154);
/* harmony import */ var ssm__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ssm__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var Common_Globals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Common/Globals */ 6);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Common_Links__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Common/Links */ 15);
/* harmony import */ var Common_Translator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Common/Translator */ 9);
/* harmony import */ var Common_Events__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Common/Events */ 23);
/* harmony import */ var Storage_Settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Storage/Settings */ 5);
/* harmony import */ var Stores_Language__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! Stores/Language */ 72);
/* harmony import */ var Stores_Theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! Stores/Theme */ 123);
/* harmony import */ var Stores_Social__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! Stores/Social */ 26);
/* harmony import */ var Knoin_Knoin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! Knoin/Knoin */ 8);
/* harmony import */ var Knoin_AbstractBoot__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! Knoin/AbstractBoot */ 306);




















var AbstractApp = /*#__PURE__*/function (_AbstractBoot) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(AbstractApp, _AbstractBoot);

  /**
   * @param {RemoteStorage|AdminRemoteStorage} Remote
   */
  function AbstractApp() {
    var _this;

    _this = _AbstractBoot.call(this) || this;
    _this.googlePreviewSupportedCache = null;
    _this.isLocalAutocomplete = true;
    _this.iframe = null;
    _this.lastErrorTime = 0;
    _this.iframe = $__WEBPACK_IMPORTED_MODULE_2___default()('<iframe class="internal-hiddden" />').appendTo('body');
    Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$win"].on('resize', function () {
      Common_Events__WEBPACK_IMPORTED_MODULE_12__[/* pub */ "a"]('window.resize');
    });
    Common_Events__WEBPACK_IMPORTED_MODULE_12__[/* sub */ "b"]('window.resize', ___WEBPACK_IMPORTED_MODULE_3___default.a.throttle(function () {
      var iH = Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$win"].height(),
          iW = Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$win"].height();

      if (Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$win"].__sizes[0] !== iH || Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$win"].__sizes[1] !== iW) {
        Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$win"].__sizes[0] = iH;
        Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$win"].__sizes[1] = iW;
        Common_Events__WEBPACK_IMPORTED_MODULE_12__[/* pub */ "a"]('window.resize.real');
      }
    }, Common_Enums__WEBPACK_IMPORTED_MODULE_9__["Magics"].Time50ms)); // DEBUG
    //		Events.sub({
    //			'window.resize': function() {
    //				window.console.log('window.resize');
    //			},
    //			'window.resize.real': function() {
    //				window.console.log('window.resize.real');
    //			}
    //		});

    Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$doc"].on('keydown', function (event) {
      if (event && event.ctrlKey) {
        Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$html"].addClass('rl-ctrl-key-pressed');
      }
    }).on('keyup', function (event) {
      if (event && !event.ctrlKey) {
        Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$html"].removeClass('rl-ctrl-key-pressed');
      }
    });
    Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$doc"].on('mousemove keypress click', ___WEBPACK_IMPORTED_MODULE_3___default.a.debounce(function () {
      Common_Events__WEBPACK_IMPORTED_MODULE_12__[/* pub */ "a"]('rl.auto-logout-refresh');
    }, Common_Enums__WEBPACK_IMPORTED_MODULE_9__["Magics"].Time5s));
    key__WEBPACK_IMPORTED_MODULE_5___default()('esc, enter', Common_Enums__WEBPACK_IMPORTED_MODULE_9__["KeyState"].All, function () {
      Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["detectDropdownVisibility"])();
    });
    return _this;
  }

  var _proto = AbstractApp.prototype;

  _proto.remote = function remote() {
    return null;
  };

  _proto.data = function data() {
    return null;
  };

  _proto.getApplicationConfiguration = function getApplicationConfiguration(name, default_) {
    return this.applicationConfiguration[name] || default_;
  }
  /**
   * @param {string} link
   * @returns {boolean}
   */
  ;

  _proto.download = function download(link) {
    if (Common_Globals__WEBPACK_IMPORTED_MODULE_7__["sUserAgent"] && (-1 < Common_Globals__WEBPACK_IMPORTED_MODULE_7__["sUserAgent"].indexOf('chrome') || -1 < Common_Globals__WEBPACK_IMPORTED_MODULE_7__["sUserAgent"].indexOf('chrome'))) {
      var oLink = window__WEBPACK_IMPORTED_MODULE_1___default.a.document.createElement('a');
      oLink.href = link;

      if (window__WEBPACK_IMPORTED_MODULE_1___default.a.document && window__WEBPACK_IMPORTED_MODULE_1___default.a.document.createEvent) {
        var oE = window__WEBPACK_IMPORTED_MODULE_1___default.a.document.createEvent.MouseEvents;

        if (oE && oE.initEvent && oLink.dispatchEvent) {
          oE.initEvent('click', true, true);
          oLink.dispatchEvent(oE);
          return true;
        }
      }
    }

    if (Common_Globals__WEBPACK_IMPORTED_MODULE_7__["bMobileDevice"]) {
      window__WEBPACK_IMPORTED_MODULE_1___default.a.open(link, '_self');
      window__WEBPACK_IMPORTED_MODULE_1___default.a.focus();
    } else {
      this.iframe.attr('src', link); // window.document.location.href = link;
    }

    return true;
  }
  /**
   * @returns {boolean}
   */
  ;

  _proto.googlePreviewSupported = function googlePreviewSupported() {
    if (null === this.googlePreviewSupportedCache) {
      this.googlePreviewSupportedCache = !!Storage_Settings__WEBPACK_IMPORTED_MODULE_13__["settingsGet"]('AllowGoogleSocial') && !!Storage_Settings__WEBPACK_IMPORTED_MODULE_13__["settingsGet"]('AllowGoogleSocialPreview');
    }

    return this.googlePreviewSupportedCache;
  }
  /**
   * @param {string} title
   */
  ;

  _proto.setWindowTitle = function setWindowTitle(title) {
    title = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["isNormal"])(title) && 0 < title.length ? '' + title : '';

    if (Storage_Settings__WEBPACK_IMPORTED_MODULE_13__["settingsGet"]('Title')) {
      title += (title ? ' - ' : '') + Storage_Settings__WEBPACK_IMPORTED_MODULE_13__["settingsGet"]('Title');
    }

    window__WEBPACK_IMPORTED_MODULE_1___default.a.document.title = title + ' ...';
    window__WEBPACK_IMPORTED_MODULE_1___default.a.document.title = title;
  };

  _proto.redirectToAdminPanel = function redirectToAdminPanel() {
    ___WEBPACK_IMPORTED_MODULE_3___default.a.delay(function () {
      window__WEBPACK_IMPORTED_MODULE_1___default.a.location.href = Object(Common_Links__WEBPACK_IMPORTED_MODULE_10__[/* rootAdmin */ "x"])();
    }, Common_Enums__WEBPACK_IMPORTED_MODULE_9__["Magics"].Time100ms);
  };

  _proto.clearClientSideToken = function clearClientSideToken() {
    if (window__WEBPACK_IMPORTED_MODULE_1___default.a.__rlah_clear) {
      window__WEBPACK_IMPORTED_MODULE_1___default.a.__rlah_clear();
    }
  }
  /**
   * @param {string} token
   */
  ;

  _proto.setClientSideToken = function setClientSideToken(token) {
    if (window__WEBPACK_IMPORTED_MODULE_1___default.a.__rlah_set) {
      window__WEBPACK_IMPORTED_MODULE_1___default.a.__rlah_set(token);

      Storage_Settings__WEBPACK_IMPORTED_MODULE_13__["settingsSet"]('AuthAccountHash', token);
      Object(Common_Links__WEBPACK_IMPORTED_MODULE_10__[/* populateAuthSuffix */ "v"])();
    }
  }
  /**
   * @param {boolean=} admin = false
   * @param {boolean=} logout = false
   * @param {boolean=} close = false
   */
  ;

  _proto.loginAndLogoutReload = function loginAndLogoutReload(admin, logout, close) {
    if (admin === void 0) {
      admin = false;
    }

    if (logout === void 0) {
      logout = false;
    }

    if (close === void 0) {
      close = false;
    }

    var inIframe = !!Storage_Settings__WEBPACK_IMPORTED_MODULE_13__["appSettingsGet"]('inIframe');
    var customLogoutLink = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["pString"])(Storage_Settings__WEBPACK_IMPORTED_MODULE_13__["appSettingsGet"]('customLogoutLink'));

    if (logout) {
      this.clearClientSideToken();
    }

    if (logout && close && window__WEBPACK_IMPORTED_MODULE_1___default.a.close) {
      window__WEBPACK_IMPORTED_MODULE_1___default.a.close();
    }

    customLogoutLink = customLogoutLink || (admin ? Object(Common_Links__WEBPACK_IMPORTED_MODULE_10__[/* rootAdmin */ "x"])() : Object(Common_Links__WEBPACK_IMPORTED_MODULE_10__[/* rootUser */ "y"])());

    if (logout && window__WEBPACK_IMPORTED_MODULE_1___default.a.location.href !== customLogoutLink) {
      ___WEBPACK_IMPORTED_MODULE_3___default.a.delay(function () {
        if (inIframe && window__WEBPACK_IMPORTED_MODULE_1___default.a.parent) {
          window__WEBPACK_IMPORTED_MODULE_1___default.a.parent.location.href = customLogoutLink;
        } else {
          window__WEBPACK_IMPORTED_MODULE_1___default.a.location.href = customLogoutLink;
        }

        Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$win"].trigger('rl.tooltips.diactivate');
      }, Common_Enums__WEBPACK_IMPORTED_MODULE_9__["Magics"].Time100ms);
    } else {
      Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_17__["routeOff"])();
      Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_17__["setHash"])(Object(Common_Links__WEBPACK_IMPORTED_MODULE_10__[/* root */ "w"])(), true);
      Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_17__["routeOff"])();

      ___WEBPACK_IMPORTED_MODULE_3___default.a.delay(function () {
        if (inIframe && window__WEBPACK_IMPORTED_MODULE_1___default.a.parent) {
          window__WEBPACK_IMPORTED_MODULE_1___default.a.parent.location.reload();
        } else {
          window__WEBPACK_IMPORTED_MODULE_1___default.a.location.reload();
        }

        Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$win"].trigger('rl.tooltips.diactivate');
      }, Common_Enums__WEBPACK_IMPORTED_MODULE_9__["Magics"].Time100ms);
    }
  };

  _proto.historyBack = function historyBack() {
    window__WEBPACK_IMPORTED_MODULE_1___default.a.history.back();
  };

  _proto.bootstart = function bootstart() {
    // log('Ps' + 'ss, hac' + 'kers! The' + 're\'s not' + 'hing inte' + 'resting :' + ')');
    Common_Events__WEBPACK_IMPORTED_MODULE_12__[/* pub */ "a"]('rl.bootstart');
    var mobile = Storage_Settings__WEBPACK_IMPORTED_MODULE_13__["appSettingsGet"]('mobile');
    ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].components.register('SaveTrigger', __webpack_require__(/*! Component/SaveTrigger */ 394).default);
    ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].components.register('Input', __webpack_require__(/*! Component/Input */ 395).default);
    ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].components.register('Select', __webpack_require__(/*! Component/Select */ 396).default);
    ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].components.register('Radio', __webpack_require__(/*! Component/Radio */ 397).default);
    ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].components.register('TextArea', __webpack_require__(/*! Component/TextArea */ 398).default);
    ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].components.register('Date', __webpack_require__(/*! Component/Date */ 399).default);
    ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].components.register('x-script', __webpack_require__(/*! Component/Script */ 400).default); // ko.components.register('svg-icon', require('Component/SvgIcon').default);

    if (Storage_Settings__WEBPACK_IMPORTED_MODULE_13__["appSettingsGet"]('materialDesign') && Common_Globals__WEBPACK_IMPORTED_MODULE_7__["bAnimationSupported"]) {
      ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].components.register('Checkbox', __webpack_require__(/*! Component/MaterialDesign/Checkbox */ 401).default);
      ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].components.register('CheckboxSimple', __webpack_require__(/*! Component/Checkbox */ 225).default);
    } else {
      // ko.components.register('Checkbox', require('Component/Classic/Checkbox').default);
      // ko.components.register('CheckboxSimple', require('Component/Classic/Checkbox').default);
      ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].components.register('Checkbox', __webpack_require__(/*! Component/Checkbox */ 225).default);
      ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].components.register('CheckboxSimple', __webpack_require__(/*! Component/Checkbox */ 225).default);
    }

    Object(Common_Translator__WEBPACK_IMPORTED_MODULE_11__["initOnStartOrLangChange"])(Common_Translator__WEBPACK_IMPORTED_MODULE_11__["initNotificationLanguage"]);

    ___WEBPACK_IMPORTED_MODULE_3___default.a.delay(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["windowResizeCallback"], Common_Enums__WEBPACK_IMPORTED_MODULE_9__["Magics"].Time1s);

    Common_Events__WEBPACK_IMPORTED_MODULE_12__[/* sub */ "b"]('ssm.mobile-enter', function () {
      Object(Common_Globals__WEBPACK_IMPORTED_MODULE_7__["leftPanelDisabled"])(true);
    });
    Common_Events__WEBPACK_IMPORTED_MODULE_12__[/* sub */ "b"]('ssm.mobile-leave', function () {
      Object(Common_Globals__WEBPACK_IMPORTED_MODULE_7__["leftPanelDisabled"])(false);
    });

    if (!mobile) {
      Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$html"].addClass('rl-desktop');
      ssm__WEBPACK_IMPORTED_MODULE_6___default.a.addState({
        id: 'mobile',
        query: '(max-width: 767px)',
        onEnter: function onEnter() {
          Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$html"].addClass('ssm-state-mobile');
          Common_Events__WEBPACK_IMPORTED_MODULE_12__[/* pub */ "a"]('ssm.mobile-enter');
        },
        onLeave: function onLeave() {
          Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$html"].removeClass('ssm-state-mobile');
          Common_Events__WEBPACK_IMPORTED_MODULE_12__[/* pub */ "a"]('ssm.mobile-leave');
        }
      });
      ssm__WEBPACK_IMPORTED_MODULE_6___default.a.addState({
        id: 'tablet',
        query: '(min-width: 768px) and (max-width: 999px)',
        onEnter: function onEnter() {
          Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$html"].addClass('ssm-state-tablet');
        },
        onLeave: function onLeave() {
          Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$html"].removeClass('ssm-state-tablet');
        }
      });
      ssm__WEBPACK_IMPORTED_MODULE_6___default.a.addState({
        id: 'desktop',
        query: '(min-width: 1000px) and (max-width: 1400px)',
        onEnter: function onEnter() {
          Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$html"].addClass('ssm-state-desktop');
        },
        onLeave: function onLeave() {
          Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$html"].removeClass('ssm-state-desktop');
        }
      });
      ssm__WEBPACK_IMPORTED_MODULE_6___default.a.addState({
        id: 'desktop-large',
        query: '(min-width: 1401px)',
        onEnter: function onEnter() {
          Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$html"].addClass('ssm-state-desktop-large');
        },
        onLeave: function onLeave() {
          Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$html"].removeClass('ssm-state-desktop-large');
        }
      });
    } else {
      Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$html"].addClass('ssm-state-mobile').addClass('rl-mobile');
      Common_Events__WEBPACK_IMPORTED_MODULE_12__[/* pub */ "a"]('ssm.mobile-enter');
    }

    Common_Globals__WEBPACK_IMPORTED_MODULE_7__["leftPanelDisabled"].subscribe(function (bValue) {
      Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$html"].toggleClass('rl-left-panel-disabled', bValue);
      Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$html"].toggleClass('rl-left-panel-enabled', !bValue);
    });
    Common_Globals__WEBPACK_IMPORTED_MODULE_7__["leftPanelType"].subscribe(function (sValue) {
      Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$html"].toggleClass('rl-left-panel-none', 'none' === sValue);
      Common_Globals__WEBPACK_IMPORTED_MODULE_7__["$html"].toggleClass('rl-left-panel-short', 'short' === sValue);
    });
    Common_Globals__WEBPACK_IMPORTED_MODULE_7__["leftPanelDisabled"].valueHasMutated();
    Stores_Language__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].populate();
    Stores_Theme__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].populate();
    Stores_Social__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"].populate();
  };

  return AbstractApp;
}(Knoin_AbstractBoot__WEBPACK_IMPORTED_MODULE_18__[/* AbstractBoot */ "a"]);



/***/ }),
/* 306 */
/*!***********************************!*\
  !*** ./dev/Knoin/AbstractBoot.js ***!
  \***********************************/
/*! exports provided: AbstractBoot */
/*! exports used: AbstractBoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractBoot; });
var AbstractBoot = /*#__PURE__*/function () {
  function AbstractBoot() {}

  var _proto = AbstractBoot.prototype;

  _proto.bootstart = function bootstart() {
    /* no-empty */
  };

  return AbstractBoot;
}();

/***/ }),
/* 307 */
/*!****************************************!*\
  !*** ./dev/Component/AbstractRadio.js ***!
  \****************************************/
/*! exports provided: AbstractRadio, default */
/*! exports used: AbstractRadio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractRadio; });
/* unused harmony export default */
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/assertThisInitialized */ 29);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/values */ 122);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ 17);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ 219);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ 85);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ 247);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Component_Abstract__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Component/Abstract */ 32);












var AbstractRadio = /*#__PURE__*/function (_AbstractComponent) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AbstractRadio, _AbstractComponent);

  /**
   * @param {Object} params
   */
  function AbstractRadio(params) {
    var _this;

    _this = _AbstractComponent.call(this) || this;
    _this.values = ko__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].observableArray([]);
    _this.value = params.value;

    if (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_9__["isUnd"])(_this.value) || !_this.value.subscribe) {
      _this.value = ko__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].observable('');
    }

    _this.inline = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_9__["isUnd"])(params.inline) ? false : params.inline;
    _this.readOnly = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_9__["isUnd"])(params.readOnly) ? false : !!params.readOnly;

    if (_babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_2___default()(params)) {
      _babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_2___default()(_this).call(_this, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(___WEBPACK_IMPORTED_MODULE_7___default.a).call(___WEBPACK_IMPORTED_MODULE_7___default.a, _babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_2___default()(params), function (label, value) {
        return {
          label: label,
          value: value
        };
      }));
    }

    _this.click = ___WEBPACK_IMPORTED_MODULE_7___default.a.bind(_this.click, Object(_babel_runtime_corejs3_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this));
    return _this;
  }

  var _proto = AbstractRadio.prototype;

  _proto.click = function click(value) {
    if (!this.readOnly && value) {
      this.value(value.value);
    }
  };

  return AbstractRadio;
}(Component_Abstract__WEBPACK_IMPORTED_MODULE_10__[/* AbstractComponent */ "a"]);



/***/ }),
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 65);
var $filter = __webpack_require__(/*! ../internals/array-iteration */ 290).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ 354);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 315 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ 149);
var anObject = __webpack_require__(/*! ../internals/an-object */ 42);
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 56);
var sameValue = __webpack_require__(/*! ../internals/same-value */ 356);
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ 150);

// @@search logic
fixRegExpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative(nativeSearch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/create-html.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 56);

var quot = /"/g;

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),
/* 326 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-html-forced.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 37);

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),
/* 327 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/trim.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/trim */ 328);

module.exports = parent;


/***/ }),
/* 328 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/trim.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var trim = __webpack_require__(/*! ../string/virtual/trim */ 329);

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.trim;
  return typeof it === 'string' || it === StringPrototype
    || (it instanceof String && own === StringPrototype.trim) ? trim : own;
};


/***/ }),
/* 329 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/es/string/virtual/trim.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.string.trim */ 330);
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ 71);

module.exports = entryVirtual('String').trim;


/***/ }),
/* 330 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.string.trim.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 34);
var $trim = __webpack_require__(/*! ../internals/string-trim */ 331).trim;
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ 332);

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),
/* 331 */
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/string-trim.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 115);
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ 285);

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),
/* 332 */
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/string-trim-forced.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 43);
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ 285);

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),
/* 333 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/find.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/find */ 334);

module.exports = parent;


/***/ }),
/* 334 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/find.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var find = __webpack_require__(/*! ../array/virtual/find */ 335);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.find;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.find) ? find : own;
};


/***/ }),
/* 335 */
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/find.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.find */ 336);
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ 71);

module.exports = entryVirtual('Array').find;


/***/ }),
/* 336 */
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.find.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 34);
var $find = __webpack_require__(/*! ../internals/array-iteration */ 172).find;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ 222);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 120);

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),
/* 337 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/concat.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/concat */ 338);

module.exports = parent;


/***/ }),
/* 338 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/concat.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var concat = __webpack_require__(/*! ../array/virtual/concat */ 339);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.concat;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.concat) ? concat : own;
};


/***/ }),
/* 339 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/concat.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.concat */ 340);
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ 71);

module.exports = entryVirtual('Array').concat;


/***/ }),
/* 340 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.concat.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 34);
var fails = __webpack_require__(/*! ../internals/fails */ 43);
var isArray = __webpack_require__(/*! ../internals/is-array */ 173);
var isObject = __webpack_require__(/*! ../internals/is-object */ 50);
var toObject = __webpack_require__(/*! ../internals/to-object */ 117);
var toLength = __webpack_require__(/*! ../internals/to-length */ 91);
var createProperty = __webpack_require__(/*! ../internals/create-property */ 287);
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ 286);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ 174);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 38);
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ 148);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),
/* 341 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/values.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ 161);
var values = __webpack_require__(/*! ../array/virtual/values */ 342);
var classof = __webpack_require__(/*! ../../internals/classof */ 92);
var ArrayPrototype = Array.prototype;

var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

module.exports = function (it) {
  var own = it.values;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.values)
    // eslint-disable-next-line no-prototype-builtins
    || DOMIterables.hasOwnProperty(classof(it)) ? values : own;
};


/***/ }),
/* 342 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/array/virtual/values.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../../es/array/virtual/values */ 343);

module.exports = parent;


/***/ }),
/* 343 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/values.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.iterator */ 201);
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ 71);

module.exports = entryVirtual('Array').values;


/***/ }),
/* 344 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/reduce.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/reduce */ 288);

module.exports = parent;


/***/ }),
/* 345 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/reduce.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.reduce */ 346);
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ 71);

module.exports = entryVirtual('Array').reduce;


/***/ }),
/* 346 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.reduce.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 34);
var $reduce = __webpack_require__(/*! ../internals/array-reduce */ 347).left;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ 289);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 120);
var CHROME_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ 148);
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ 118);

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 347 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-reduce.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ 70);
var toObject = __webpack_require__(/*! ../internals/to-object */ 117);
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ 170);
var toLength = __webpack_require__(/*! ../internals/to-length */ 91);

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),
/* 348 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/map.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/map */ 349);

module.exports = parent;


/***/ }),
/* 349 */
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/map.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var map = __webpack_require__(/*! ../array/virtual/map */ 350);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.map;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.map) ? map : own;
};


/***/ }),
/* 350 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/map.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.map */ 351);
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ 71);

module.exports = entryVirtual('Array').map;


/***/ }),
/* 351 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.map.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 34);
var $map = __webpack_require__(/*! ../internals/array-iteration */ 172).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ 174);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 120);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 352 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 49);
var isArray = __webpack_require__(/*! ../internals/is-array */ 353);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 39);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 353 */
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ 74);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 354 */
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 37);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 39);
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ 156);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 355 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ 290).forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ 284);

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),
/* 356 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),
/* 357 */
/*!**************************************!*\
  !*** ./dev/Html/PreviewMessage.html ***!
  \**************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\n<head>\n\t<meta charset=\"utf-8\" />\n\t<meta name=\"viewport\" content=\"user-scalable=no\" />\n\t<meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />\n\t<meta name=\"robots\" content=\"noindex, nofollow, noodp\" />\n\t<title>{{title}}</title>\n\t<style>\nhtml, body {\n\tbackground-color: #fff;\n\tfont-size: 13px;\n\tfont-family: arial, sans-serif;\n\tmargin: 0;\n\tpadding: 0;\n}\n\na {color: blue; text-decoration: underline}\na:visited {color: #609}\na:active {color: red}\nblockquote {border-left: 2px solid black; margin: 0; padding: 0px 10px}\n\npre {\n\tmargin: 0px;\n\tpadding: 0px;\n\tfont-family: Monaco, Menlo, Consolas, 'Courier New', monospace;\n\tbackground: #fff;\n\tborder: none;\n\twhite-space: pre-wrap;\n\tword-wrap: break-word;\n\tword-break: break-all;\n}\n\n.body-wrp {\n\tpadding: 10px;\n}\n\n.body-wrp.html pre {\n\tfont-family: Monaco, Menlo, Consolas, 'Courier New', monospace;\n\twhite-space: pre-wrap;\n\tword-wrap: break-word;\n\tword-break: normal;\n}\n\n.body-wrp.plain {\n\tpadding: 15px;\n\twhite-space: pre-wrap;\n\tfont-family: Monaco, Menlo, Consolas, 'Courier New', monospace;\n}\n\n.body-wrp.plain pre {\n\tmargin: 0px;\n\tpadding: 0px;\n\tbackground: #fff;\n\tborder: none;\n\tfont-family: Monaco, Menlo, Consolas, 'Courier New', monospace;\n\twhite-space: pre-wrap;\n\tword-wrap: break-word;\n\tword-break: normal;\n}\n\n.body-wrp.plain blockquote {\n\tborder-left: 2px solid blue;\n\tcolor: blue;\n}\n\n.body-wrp.plain blockquote blockquote {\n\tborder-left: 2px solid green;\n\tcolor: green;\n}\n\n.body-wrp.plain blockquote blockquote blockquote {\n\tborder-left: 2px solid red;\n\tcolor: red;\n}\n.rl-preview-subject {\n\tfont-size: 16px;\n\tfont-weight: bold;\n\tpadding: 15px;\n}\n.rl-preview-creds-from, .rl-preview-creds-to, .rl-preview-creds-cc {\n\tfont-size: 12px;\n\tpadding: 5px 15px;\n}\n.rl-preview-date {\n\tfloat: right;\n\tfont-size: 12px;\n\tpadding: 10px 15px;\n}\n.rl-preview-section {\n\tpadding: 0;\n\tmargin: 0;\n\tborder-bottom: 1px solid #ccc;\n}\n.rl-preview-hide {\n\tdisplay: none;\n}\n\t</style>\n</head>\n<body>\n\t<div class=\"rl-preview-section\">\n\t\t<div class=\"rl-preview-subject\">{{subject}}</div>\n\t</div>\n\t<div class=\"rl-preview-section\">\n\t\t<div class=\"rl-preview-date\">{{date}}</div>\n\t\t<div class=\"rl-preview-creds-from\">{{fromCreds}}</div>\n\t\t<div class=\"rl-preview-creds-to\">{{toLabel}}: {{toCreds}}</div>\n\t\t<div class=\"rl-preview-creds-cc {{ccClass}}\">{{ccLabel}}: {{ccCreds}}</div>\n\t</div>\n\t<div class=\"body-wrp {{bodyClass}}\">{{html}}</div>\n</body>\n</html>");

/***/ }),
/* 358 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/filter.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/filter */ 359);

module.exports = parent;


/***/ }),
/* 359 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/filter.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var filter = __webpack_require__(/*! ../array/virtual/filter */ 360);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.filter;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.filter) ? filter : own;
};


/***/ }),
/* 360 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/filter.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.filter */ 361);
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ 71);

module.exports = entryVirtual('Array').filter;


/***/ }),
/* 361 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.filter.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 34);
var $filter = __webpack_require__(/*! ../internals/array-iteration */ 172).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ 174);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 120);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 362 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/features/object/create.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/object/create */ 363);

module.exports = parent;


/***/ }),
/* 363 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/create.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.create */ 364);
var path = __webpack_require__(/*! ../../internals/path */ 51);

var Object = path.Object;

module.exports = function create(P, D) {
  return Object.create(P, D);
};


/***/ }),
/* 364 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.create.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 34);
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 53);
var create = __webpack_require__(/*! ../internals/object-create */ 160);

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  create: create
});


/***/ }),
/* 365 */
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/features/object/set-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/object/set-prototype-of */ 366);

module.exports = parent;


/***/ }),
/* 366 */
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/set-prototype-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.set-prototype-of */ 367);
var path = __webpack_require__(/*! ../../internals/path */ 51);

module.exports = path.Object.setPrototypeOf;


/***/ }),
/* 367 */
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.set-prototype-of.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 34);
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ 159);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),
/* 368 */
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/features/instance/for-each.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../stable/instance/for-each */ 369);

module.exports = parent;


/***/ }),
/* 369 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/for-each.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ 161);
var forEach = __webpack_require__(/*! ../array/virtual/for-each */ 370);
var classof = __webpack_require__(/*! ../../internals/classof */ 92);
var ArrayPrototype = Array.prototype;

var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

module.exports = function (it) {
  var own = it.forEach;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.forEach)
    // eslint-disable-next-line no-prototype-builtins
    || DOMIterables.hasOwnProperty(classof(it)) ? forEach : own;
};


/***/ }),
/* 370 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/array/virtual/for-each.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../../es/array/virtual/for-each */ 371);

module.exports = parent;


/***/ }),
/* 371 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/for-each.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.for-each */ 372);
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ 71);

module.exports = entryVirtual('Array').forEach;


/***/ }),
/* 372 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.for-each.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 34);
var forEach = __webpack_require__(/*! ../internals/array-for-each */ 373);

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),
/* 373 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-for-each.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ 172).forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ 289);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 120);

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),
/* 374 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/features/object/keys.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/object/keys */ 375);

module.exports = parent;


/***/ }),
/* 375 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/keys.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.keys */ 376);
var path = __webpack_require__(/*! ../../internals/path */ 51);

module.exports = path.Object.keys;


/***/ }),
/* 376 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.keys.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 34);
var toObject = __webpack_require__(/*! ../internals/to-object */ 117);
var nativeKeys = __webpack_require__(/*! ../internals/object-keys */ 220);
var fails = __webpack_require__(/*! ../internals/fails */ 43);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),
/* 377 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/features/instance/reduce.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/reduce */ 288);

module.exports = parent;


/***/ }),
/* 378 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/features/instance/reverse.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/reverse */ 379);

module.exports = parent;


/***/ }),
/* 379 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/reverse.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var reverse = __webpack_require__(/*! ../array/virtual/reverse */ 380);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.reverse;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.reverse) ? reverse : own;
};


/***/ }),
/* 380 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/reverse.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.reverse */ 381);
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ 71);

module.exports = entryVirtual('Array').reverse;


/***/ }),
/* 381 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.reverse.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 34);
var isArray = __webpack_require__(/*! ../internals/is-array */ 173);

var nativeReverse = [].reverse;
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign
    if (isArray(this)) this.length = this.length;
    return nativeReverse.call(this);
  }
});


/***/ }),
/* 382 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/features/instance/slice.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/slice */ 383);

module.exports = parent;


/***/ }),
/* 383 */
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/slice.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var slice = __webpack_require__(/*! ../array/virtual/slice */ 384);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.slice;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.slice) ? slice : own;
};


/***/ }),
/* 384 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/slice.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.slice */ 385);
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ 71);

module.exports = entryVirtual('Array').slice;


/***/ }),
/* 385 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.slice.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 34);
var isObject = __webpack_require__(/*! ../internals/is-object */ 50);
var isArray = __webpack_require__(/*! ../internals/is-array */ 173);
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ 221);
var toLength = __webpack_require__(/*! ../internals/to-length */ 91);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 80);
var createProperty = __webpack_require__(/*! ../internals/create-property */ 287);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 38);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ 174);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 120);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),
/* 386 */
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/features/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/object/define-property */ 387);

module.exports = parent;


/***/ }),
/* 387 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/define-property.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.define-property */ 388);
var path = __webpack_require__(/*! ../../internals/path */ 51);

var Object = path.Object;

var defineProperty = module.exports = function defineProperty(it, key, desc) {
  return Object.defineProperty(it, key, desc);
};

if (Object.defineProperty.sham) defineProperty.sham = true;


/***/ }),
/* 388 */
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.define-property.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 34);
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 53);
var objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ 81);

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),
/* 389 */
/*!********************************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/object/get-own-property-descriptor.js ***!
  \********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/object/get-own-property-descriptor */ 390);

module.exports = parent;


/***/ }),
/* 390 */
/*!****************************************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/get-own-property-descriptor.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.get-own-property-descriptor */ 391);
var path = __webpack_require__(/*! ../../internals/path */ 51);

var Object = path.Object;

var getOwnPropertyDescriptor = module.exports = function getOwnPropertyDescriptor(it, key) {
  return Object.getOwnPropertyDescriptor(it, key);
};

if (Object.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor.sham = true;


/***/ }),
/* 391 */
/*!************************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.get-own-property-descriptor.js ***!
  \************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 34);
var fails = __webpack_require__(/*! ../internals/fails */ 43);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 80);
var nativeGetOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 157).f;
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 53);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),
/* 392 */,
/* 393 */,
/* 394 */
/*!**************************************!*\
  !*** ./dev/Component/SaveTrigger.js ***!
  \**************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/assertThisInitialized */ 29);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ 12);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Component_Abstract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Component/Abstract */ 32);







var SaveTriggerComponent = /*#__PURE__*/function (_AbstractComponent) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(SaveTriggerComponent, _AbstractComponent);

  /**
   * @param {Object} params
   */
  function SaveTriggerComponent(params) {
    var _this;

    _this = _AbstractComponent.call(this) || this;
    _this.element = params.element || null;
    _this.value = params.value && params.value.subscribe ? params.value : null;

    if (_this.element) {
      if (_this.value) {
        _this.element.css('display', 'inline-block');

        if (params.verticalAlign) {
          _this.element.css('vertical-align', params.verticalAlign);
        }

        _this.setState(_this.value());

        _this.disposable.push(_this.value.subscribe(_this.setState, Object(_babel_runtime_corejs3_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this)));
      } else {
        _this.element.hide();
      }
    }

    return _this;
  }

  var _proto = SaveTriggerComponent.prototype;

  _proto.setState = function setState(value) {
    var _context, _context2, _context3, _context4, _context5, _context6, _context7, _context8;

    switch (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["pInt"])(value)) {
      case Common_Enums__WEBPACK_IMPORTED_MODULE_4__["SaveSettingsStep"].TrueResult:
        _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = this.element).call(_context2, '.animated,.error').hide().removeClass('visible').end()).call(_context, '.success').show().addClass('visible');

        break;

      case Common_Enums__WEBPACK_IMPORTED_MODULE_4__["SaveSettingsStep"].FalseResult:
        _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context4 = this.element).call(_context4, '.animated,.success').hide().removeClass('visible').end()).call(_context3, '.error').show().addClass('visible');

        break;

      case Common_Enums__WEBPACK_IMPORTED_MODULE_4__["SaveSettingsStep"].Animate:
        _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context5 = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context6 = this.element).call(_context6, '.error,.success').hide().removeClass('visible').end()).call(_context5, '.animated').show().addClass('visible');

        break;

      case Common_Enums__WEBPACK_IMPORTED_MODULE_4__["SaveSettingsStep"].Idle:
      default:
        _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context7 = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context8 = this.element).call(_context8, '.animated').hide().end()).call(_context7, '.error,.success').removeClass('visible');

        break;
    }
  };

  return SaveTriggerComponent;
}(Component_Abstract__WEBPACK_IMPORTED_MODULE_5__[/* AbstractComponent */ "a"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(Component_Abstract__WEBPACK_IMPORTED_MODULE_5__[/* componentExportHelper */ "b"])(SaveTriggerComponent, 'SaveTriggerComponent'));

/***/ }),
/* 395 */
/*!********************************!*\
  !*** ./dev/Component/Input.js ***!
  \********************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var Component_Abstract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Component/Abstract */ 32);
/* harmony import */ var Component_AbstractInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Component/AbstractInput */ 87);




var InputComponent = /*#__PURE__*/function (_AbstractInput) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(InputComponent, _AbstractInput);

  function InputComponent() {
    return _AbstractInput.apply(this, arguments) || this;
  }

  return InputComponent;
}(Component_AbstractInput__WEBPACK_IMPORTED_MODULE_2__[/* AbstractInput */ "a"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(Component_Abstract__WEBPACK_IMPORTED_MODULE_1__[/* componentExportHelper */ "b"])(InputComponent, 'InputComponent'));

/***/ }),
/* 396 */
/*!*********************************!*\
  !*** ./dev/Component/Select.js ***!
  \*********************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var Common_Translator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Common/Translator */ 9);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Component_Abstract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Component/Abstract */ 32);
/* harmony import */ var Component_AbstractInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Component/AbstractInput */ 87);






var SelectComponent = /*#__PURE__*/function (_AbstractInput) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(SelectComponent, _AbstractInput);

  /**
   * @param {Object} params
   */
  function SelectComponent(params) {
    var _this;

    _this = _AbstractInput.call(this, params) || this;
    _this.options = params.options || '';
    _this.optionsText = params.optionsText || null;
    _this.optionsValue = params.optionsValue || null;
    _this.optionsCaption = params.optionsCaption || null;

    if (_this.optionsCaption) {
      _this.optionsCaption = Object(Common_Translator__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_this.optionsCaption);
    }

    _this.defautOptionsAfterRender = Common_Utils__WEBPACK_IMPORTED_MODULE_2__["defautOptionsAfterRender"];
    return _this;
  }

  return SelectComponent;
}(Component_AbstractInput__WEBPACK_IMPORTED_MODULE_4__[/* AbstractInput */ "a"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(Component_Abstract__WEBPACK_IMPORTED_MODULE_3__[/* componentExportHelper */ "b"])(SelectComponent, 'SelectComponent'));

/***/ }),
/* 397 */
/*!********************************!*\
  !*** ./dev/Component/Radio.js ***!
  \********************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var Component_Abstract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Component/Abstract */ 32);
/* harmony import */ var Component_AbstractRadio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Component/AbstractRadio */ 307);




var RadioComponent = /*#__PURE__*/function (_AbstractRadio) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(RadioComponent, _AbstractRadio);

  function RadioComponent() {
    return _AbstractRadio.apply(this, arguments) || this;
  }

  return RadioComponent;
}(Component_AbstractRadio__WEBPACK_IMPORTED_MODULE_2__[/* AbstractRadio */ "a"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(Component_Abstract__WEBPACK_IMPORTED_MODULE_1__[/* componentExportHelper */ "b"])(RadioComponent, 'RadioComponent'));

/***/ }),
/* 398 */
/*!***********************************!*\
  !*** ./dev/Component/TextArea.js ***!
  \***********************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Component_Abstract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Component/Abstract */ 32);
/* harmony import */ var Component_AbstractInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Component/AbstractInput */ 87);




var DEFAULT_ROWS = 5;

var TextAreaComponent = /*#__PURE__*/function (_AbstractInput) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(TextAreaComponent, _AbstractInput);

  /**
   * @param {Object} params
   */
  function TextAreaComponent(params) {
    var _this;

    _this = _AbstractInput.call(this, params) || this;
    _this.rows = params.rows || DEFAULT_ROWS;
    _this.spellcheck = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_1__["isUnd"])(params.spellcheck) ? false : !!params.spellcheck;
    return _this;
  }

  return TextAreaComponent;
}(Component_AbstractInput__WEBPACK_IMPORTED_MODULE_3__[/* AbstractInput */ "a"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(Component_Abstract__WEBPACK_IMPORTED_MODULE_2__[/* componentExportHelper */ "b"])(TextAreaComponent, 'TextAreaComponent'));

/***/ }),
/* 399 */
/*!*******************************!*\
  !*** ./dev/Component/Date.js ***!
  \*******************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var Component_Abstract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Component/Abstract */ 32);
/* harmony import */ var Component_AbstractInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Component/AbstractInput */ 87);




var DateComponent = /*#__PURE__*/function (_AbstractInput) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(DateComponent, _AbstractInput);

  function DateComponent() {
    return _AbstractInput.apply(this, arguments) || this;
  }

  return DateComponent;
}(Component_AbstractInput__WEBPACK_IMPORTED_MODULE_2__[/* AbstractInput */ "a"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(Component_Abstract__WEBPACK_IMPORTED_MODULE_1__[/* componentExportHelper */ "b"])(DateComponent, 'DateComponent'));

/***/ }),
/* 400 */
/*!*********************************!*\
  !*** ./dev/Component/Script.js ***!
  \*********************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ 45);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ 59);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! $ */ 7);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n($__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Component_Abstract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Component/Abstract */ 32);






var ScriptComponent = /*#__PURE__*/function (_AbstractComponent) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(ScriptComponent, _AbstractComponent);

  /**
   * @param {Object} params
   */
  function ScriptComponent(params) {
    var _this;

    _this = _AbstractComponent.call(this) || this;

    if (params.component && params.component.templateNodes && params.element && params.element[0] && params.element[0].outerHTML) {
      var script = params.element[0].outerHTML;
      script = !script ? '' : script.replace(/<x-script/i, '<script').replace(/<b><\/b><\/x-script>/i, '</script>');

      if (script) {
        params.element.text('');
        params.element.replaceWith($__WEBPACK_IMPORTED_MODULE_3___default()(script).text(params.component.templateNodes[0] && params.component.templateNodes[0].nodeValue ? params.component.templateNodes[0].nodeValue : ''));
      } else {
        params.element.remove();
      }
    }

    return _this;
  }

  return ScriptComponent;
}(Component_Abstract__WEBPACK_IMPORTED_MODULE_4__[/* AbstractComponent */ "a"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(Component_Abstract__WEBPACK_IMPORTED_MODULE_4__[/* componentExportHelper */ "b"])(ScriptComponent, 'ScriptComponent'));

/***/ }),
/* 401 */
/*!**************************************************!*\
  !*** ./dev/Component/MaterialDesign/Checkbox.js ***!
  \**************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/assertThisInitialized */ 29);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Component_Abstract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Component/Abstract */ 32);
/* harmony import */ var Component_AbstractCheckbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Component/AbstractCheckbox */ 177);







var CheckboxMaterialDesignComponent = /*#__PURE__*/function (_AbstractCheckbox) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(CheckboxMaterialDesignComponent, _AbstractCheckbox);

  /**
   * @param {Object} params
   */
  function CheckboxMaterialDesignComponent(params) {
    var _this;

    _this = _AbstractCheckbox.call(this, params) || this;
    _this.animationBox = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(false).extend({
      falseTimeout: 200
    });
    _this.animationCheckmark = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(false).extend({
      falseTimeout: 200
    });
    _this.animationBoxSetTrue = ___WEBPACK_IMPORTED_MODULE_2___default.a.bind(_this.animationBoxSetTrue, Object(_babel_runtime_corejs3_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this));
    _this.animationCheckmarkSetTrue = ___WEBPACK_IMPORTED_MODULE_2___default.a.bind(_this.animationCheckmarkSetTrue, Object(_babel_runtime_corejs3_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this));

    _this.disposable.push(_this.value.subscribe(function (value) {
      _this.triggerAnimation(value);
    }, Object(_babel_runtime_corejs3_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this)));

    return _this;
  }

  var _proto = CheckboxMaterialDesignComponent.prototype;

  _proto.animationBoxSetTrue = function animationBoxSetTrue() {
    this.animationBox(true);
  };

  _proto.animationCheckmarkSetTrue = function animationCheckmarkSetTrue() {
    this.animationCheckmark(true);
  };

  _proto.triggerAnimation = function triggerAnimation(box) {
    if (box) {
      this.animationBoxSetTrue();

      ___WEBPACK_IMPORTED_MODULE_2___default.a.delay(this.animationCheckmarkSetTrue, 200);
    } else {
      this.animationCheckmarkSetTrue();

      ___WEBPACK_IMPORTED_MODULE_2___default.a.delay(this.animationBoxSetTrue, 200);
    }
  };

  return CheckboxMaterialDesignComponent;
}(Component_AbstractCheckbox__WEBPACK_IMPORTED_MODULE_5__[/* AbstractCheckbox */ "a"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(Component_Abstract__WEBPACK_IMPORTED_MODULE_4__[/* componentExportHelper */ "b"])(CheckboxMaterialDesignComponent, 'CheckboxMaterialDesignComponent'));

/***/ }),
/* 402 */,
/* 403 */
/*!**************************!*\
  !*** ./dev/App/Admin.js ***!
  \**************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ 17);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! window */ 4);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(window__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var progressJs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! progressJs */ 101);
/* harmony import */ var progressJs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(progressJs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var Common_Links__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Common/Links */ 15);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Storage_Settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Storage/Settings */ 5);
/* harmony import */ var Stores_Admin_App__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Stores/Admin/App */ 110);
/* harmony import */ var Stores_Admin_Capa__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Stores/Admin/Capa */ 88);
/* harmony import */ var Stores_Admin_Domain__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Stores/Admin/Domain */ 164);
/* harmony import */ var Stores_Admin_Plugin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Stores/Admin/Plugin */ 125);
/* harmony import */ var Stores_Admin_Package__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! Stores/Admin/Package */ 94);
/* harmony import */ var Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! Stores/Admin/Core */ 40);
/* harmony import */ var Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! Remote/Admin/Ajax */ 18);
/* harmony import */ var Screen_Admin_Settings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! Screen/Admin/Settings */ 469);
/* harmony import */ var Screen_Admin_Login__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! Screen/Admin/Login */ 482);
/* harmony import */ var Knoin_Knoin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! Knoin/Knoin */ 8);
/* harmony import */ var App_Abstract__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! App/Abstract */ 305);






















var AdminApp = /*#__PURE__*/function (_AbstractApp) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(AdminApp, _AbstractApp);

  function AdminApp() {
    return _AbstractApp.call(this, Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"]) || this;
  }

  var _proto = AdminApp.prototype;

  _proto.remote = function remote() {
    return Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"];
  };

  _proto.reloadDomainList = function reloadDomainList() {
    Stores_Admin_Domain__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].domains.loading(true);
    Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"].domainList(function (result, data) {
      Stores_Admin_Domain__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].domains.loading(false);

      if (Common_Enums__WEBPACK_IMPORTED_MODULE_7__["StorageResultType"].Success === result && data && data.Result) {
        Stores_Admin_Domain__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].domains(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(___WEBPACK_IMPORTED_MODULE_3___default.a).call(___WEBPACK_IMPORTED_MODULE_3___default.a, data.Result, function (_ref, name) {
          var enabled = _ref[0],
              alias = _ref[1];
          return {
            name: name,
            disabled: ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].observable(!enabled),
            alias: alias,
            deleteAccess: ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].observable(false)
          };
        }));
      }
    });
  };

  _proto.reloadPluginList = function reloadPluginList() {
    Stores_Admin_Plugin__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].plugins.loading(true);
    Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"].pluginList(function (result, data) {
      Stores_Admin_Plugin__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].plugins.loading(false);

      if (Common_Enums__WEBPACK_IMPORTED_MODULE_7__["StorageResultType"].Success === result && data && data.Result) {
        Stores_Admin_Plugin__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].plugins(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(___WEBPACK_IMPORTED_MODULE_3___default.a).call(___WEBPACK_IMPORTED_MODULE_3___default.a, data.Result, function (item) {
          return {
            name: item.Name,
            disabled: ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].observable(!item.Enabled),
            configured: ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].observable(!!item.Configured)
          };
        }));
      }
    });
  };

  _proto.reloadPackagesList = function reloadPackagesList() {
    Stores_Admin_Package__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].packages.loading(true);
    Stores_Admin_Package__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].packagesReal(true);
    Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"].packagesList(function (result, data) {
      Stores_Admin_Package__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].packages.loading(false);

      if (Common_Enums__WEBPACK_IMPORTED_MODULE_7__["StorageResultType"].Success === result && data && data.Result) {
        Stores_Admin_Package__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].packagesReal(!!data.Result.Real);
        Stores_Admin_Package__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].packagesMainUpdatable(!!data.Result.MainUpdatable);
        var list = [];
        var loading = {};

        ___WEBPACK_IMPORTED_MODULE_3___default.a.each(Stores_Admin_Package__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].packages(), function (item) {
          if (item && item.loading()) {
            loading[item.file] = item;
          }
        });

        if (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["isArray"])(data.Result.List)) {
          list = ___WEBPACK_IMPORTED_MODULE_3___default.a.compact(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(___WEBPACK_IMPORTED_MODULE_3___default.a).call(___WEBPACK_IMPORTED_MODULE_3___default.a, data.Result.List, function (item) {
            if (item) {
              item.loading = ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].observable(!Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["isUnd"])(loading[item.file]));
              return 'core' === item.type && !item.canBeInstalled ? null : item;
            }

            return null;
          }));
        }

        Stores_Admin_Package__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].packages(list);
      } else {
        Stores_Admin_Package__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].packagesReal(false);
      }
    });
  };

  _proto.updateCoreData = function updateCoreData() {
    Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreUpdating(true);
    Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"].updateCoreData(function (result, data) {
      Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreUpdating(false);
      Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreVersion('');
      Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreRemoteVersion('');
      Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreRemoteRelease('');
      Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreVersionCompare(-2);

      if (Common_Enums__WEBPACK_IMPORTED_MODULE_7__["StorageResultType"].Success === result && data && data.Result) {
        Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreReal(true);
        window__WEBPACK_IMPORTED_MODULE_2___default.a.location.reload();
      } else {
        Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreReal(false);
      }
    });
  };

  _proto.reloadCoreData = function reloadCoreData() {
    Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreChecking(true);
    Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreReal(true);
    Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"].coreData(function (result, data) {
      Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreChecking(false);

      if (Common_Enums__WEBPACK_IMPORTED_MODULE_7__["StorageResultType"].Success === result && data && data.Result) {
        Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreReal(!!data.Result.Real);
        Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreChannel(data.Result.Channel || 'stable');
        Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreType(data.Result.Type || 'stable');
        Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreUpdatable(!!data.Result.Updatable);
        Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreAccess(!!data.Result.Access);
        Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreWarning(!!data.Result.Warning);
        Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreVersion(data.Result.Version || '');
        Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreRemoteVersion(data.Result.RemoteVersion || '');
        Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreRemoteRelease(data.Result.RemoteRelease || '');
        Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreVersionCompare(Object(Common_Utils__WEBPACK_IMPORTED_MODULE_8__["pInt"])(data.Result.VersionCompare));
      } else {
        Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreReal(false);
        Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreChannel('stable');
        Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreType('stable');
        Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreWarning(false);
        Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreVersion('');
        Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreRemoteVersion('');
        Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreRemoteRelease('');
        Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].coreVersionCompare(-2);
      }
    });
  };

  _proto.bootend = function bootend(bootendCallback) {
    if (bootendCallback === void 0) {
      bootendCallback = null;
    }

    if (progressJs__WEBPACK_IMPORTED_MODULE_5___default.a) {
      progressJs__WEBPACK_IMPORTED_MODULE_5___default.a.end();
    }

    if (bootendCallback) {
      bootendCallback();
    }
  };

  _proto.bootstart = function bootstart() {
    _AbstractApp.prototype.bootstart.call(this);

    Stores_Admin_App__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].populate();
    Stores_Admin_Capa__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].populate();
    Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_19__["hideLoading"])();

    if (!Storage_Settings__WEBPACK_IMPORTED_MODULE_9__["appSettingsGet"]('allowAdminPanel')) {
      Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_19__["routeOff"])();
      Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_19__["setHash"])(Object(Common_Links__WEBPACK_IMPORTED_MODULE_6__[/* root */ "w"])(), true);
      Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_19__["routeOff"])();

      ___WEBPACK_IMPORTED_MODULE_3___default.a.defer(function () {
        window__WEBPACK_IMPORTED_MODULE_2___default.a.location.href = '/';
      });
    } else {
      if (Storage_Settings__WEBPACK_IMPORTED_MODULE_9__["settingsGet"]('Auth')) {
        Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_19__["startScreens"])([Screen_Admin_Settings__WEBPACK_IMPORTED_MODULE_17__[/* SettingsAdminScreen */ "a"]]);
      } else {
        Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_19__["startScreens"])([Screen_Admin_Login__WEBPACK_IMPORTED_MODULE_18__[/* LoginAdminScreen */ "a"]]);
      }
    }

    this.bootend();
  };

  return AdminApp;
}(App_Abstract__WEBPACK_IMPORTED_MODULE_20__[/* AbstractApp */ "a"]);

/* harmony default export */ __webpack_exports__["default"] = (new AdminApp());

/***/ }),
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */
/*!**********************************!*\
  !*** ./dev/View/Popup/Domain.js ***!
  \**********************************/
/*! exports provided: DomainPopupView, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainPopupView", function() { return DomainPopupView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DomainPopupView; });
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/applyDecoratedDescriptor */ 19);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ 20);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ 48);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ 45);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ 59);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Common_Consts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Common/Consts */ 24);
/* harmony import */ var Common_Globals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Common/Globals */ 6);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Common_Translator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Common/Translator */ 9);
/* harmony import */ var Stores_Admin_Capa__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Stores/Admin/Capa */ 88);
/* harmony import */ var Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! Remote/Admin/Ajax */ 18);
/* harmony import */ var Helper_Apps_Admin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! Helper/Apps/Admin */ 68);
/* harmony import */ var Knoin_Knoin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! Knoin/Knoin */ 8);
/* harmony import */ var Knoin_AbstractViewNext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! Knoin/AbstractViewNext */ 25);



var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2;

















var DomainPopupView = (_dec = Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_16__["popup"])({
  name: 'View/Popup/Domain',
  templateID: 'PopupsDomain'
}), _dec2 = Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_16__["command"])(function (self) {
  return self.canBeSaved();
}), _dec3 = Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_16__["command"])(function (self) {
  return self.canBeTested();
}), _dec4 = Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_16__["command"])(), _dec5 = Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_16__["command"])(), _dec6 = Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_16__["command"])(), _dec(_class = (_class2 = /*#__PURE__*/function (_AbstractViewNext) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(DomainPopupView, _AbstractViewNext);

  function DomainPopupView() {
    var _this;

    _this = _AbstractViewNext.call(this) || this;
    _this.edit = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(false);
    _this.saving = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(false);
    _this.savingError = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable('');
    _this.page = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable('main');
    _this.sieveSettings = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(false);
    _this.testing = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(false);
    _this.testingDone = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(false);
    _this.testingImapError = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(false);
    _this.testingSieveError = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(false);
    _this.testingSmtpError = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(false);
    _this.testingImapErrorDesc = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable('');
    _this.testingSieveErrorDesc = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable('');
    _this.testingSmtpErrorDesc = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable('');

    _this.testingImapError.subscribe(function (value) {
      if (!value) {
        _this.testingImapErrorDesc('');
      }
    });

    _this.testingSieveError.subscribe(function (value) {
      if (!value) {
        _this.testingSieveErrorDesc('');
      }
    });

    _this.testingSmtpError.subscribe(function (value) {
      if (!value) {
        _this.testingSmtpErrorDesc('');
      }
    });

    _this.imapServerFocus = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(false);
    _this.sieveServerFocus = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(false);
    _this.smtpServerFocus = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(false);
    _this.name = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable('');
    _this.name.focused = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(false);
    _this.imapServer = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable('');
    _this.imapPort = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable('' + Common_Consts__WEBPACK_IMPORTED_MODULE_9__[/* IMAP_DEFAULT_PORT */ "h"]);
    _this.imapSecure = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(Common_Enums__WEBPACK_IMPORTED_MODULE_8__["ServerSecure"].None);
    _this.imapShortLogin = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(false);
    _this.useSieve = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(false);
    _this.sieveAllowRaw = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(false);
    _this.sieveServer = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable('');
    _this.sievePort = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable('' + Common_Consts__WEBPACK_IMPORTED_MODULE_9__[/* SIEVE_DEFAULT_PORT */ "o"]);
    _this.sieveSecure = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(Common_Enums__WEBPACK_IMPORTED_MODULE_8__["ServerSecure"].None);
    _this.smtpServer = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable('');
    _this.smtpPort = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable('' + Common_Consts__WEBPACK_IMPORTED_MODULE_9__[/* SMTP_DEFAULT_PORT */ "p"]);
    _this.smtpSecure = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(Common_Enums__WEBPACK_IMPORTED_MODULE_8__["ServerSecure"].None);
    _this.smtpShortLogin = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(false);
    _this.smtpAuth = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(true);
    _this.smtpPhpMail = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(false);
    _this.whiteList = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable('');
    _this.aliasName = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable('');
    _this.enableSmartPorts = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(false);
    _this.allowSieve = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].computed(function () {
      return Stores_Admin_Capa__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].filters() && Stores_Admin_Capa__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].sieve();
    });
    _this.headerText = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].computed(function () {
      var name = _this.name(),
          aliasName = _this.aliasName();

      var result = '';

      if (_this.edit()) {
        result = Object(Common_Translator__WEBPACK_IMPORTED_MODULE_12__["i18n"])('POPUPS_DOMAIN/TITLE_EDIT_DOMAIN', {
          'NAME': name
        });

        if (aliasName) {
          result += ' ← ' + aliasName;
        }
      } else {
        result = '' === name ? Object(Common_Translator__WEBPACK_IMPORTED_MODULE_12__["i18n"])('POPUPS_DOMAIN/TITLE_ADD_DOMAIN') : Object(Common_Translator__WEBPACK_IMPORTED_MODULE_12__["i18n"])('POPUPS_DOMAIN/TITLE_ADD_DOMAIN_WITH_NAME', {
          'NAME': name
        });
      }

      return result;
    });
    _this.domainDesc = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].computed(function () {
      var name = _this.name();

      return !_this.edit() && name ? Object(Common_Translator__WEBPACK_IMPORTED_MODULE_12__["i18n"])('POPUPS_DOMAIN/NEW_DOMAIN_DESC', {
        'NAME': '*@' + name
      }) : '';
    });
    _this.domainIsComputed = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].computed(function () {
      var usePhpMail = _this.smtpPhpMail(),
          allowSieve = _this.allowSieve(),
          useSieve = _this.useSieve();

      return '' !== _this.name() && '' !== _this.imapServer() && '' !== _this.imapPort() && (allowSieve && useSieve ? '' !== _this.sieveServer() && '' !== _this.sievePort() : true) && ('' !== _this.smtpServer() && '' !== _this.smtpPort() || usePhpMail);
    });
    _this.canBeTested = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].computed(function () {
      return !_this.testing() && _this.domainIsComputed();
    });
    _this.canBeSaved = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].computed(function () {
      return !_this.saving() && _this.domainIsComputed();
    });

    _this.page.subscribe(function () {
      _this.sieveSettings(false);
    }); // smart form improvements


    _this.imapServerFocus.subscribe(function (value) {
      if (value && '' !== _this.name() && '' === _this.imapServer()) {
        _this.imapServer(_this.name().replace(/[.]?[*][.]?/g, ''));
      }
    });

    _this.sieveServerFocus.subscribe(function (value) {
      if (value && '' !== _this.imapServer() && '' === _this.sieveServer()) {
        _this.sieveServer(_this.imapServer());
      }
    });

    _this.smtpServerFocus.subscribe(function (value) {
      if (value && '' !== _this.imapServer() && '' === _this.smtpServer()) {
        _this.smtpServer(_this.imapServer().replace(/imap/gi, 'smtp'));
      }
    });

    _this.imapSecure.subscribe(function (value) {
      if (_this.enableSmartPorts()) {
        var port = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["pInt"])(_this.imapPort());

        switch (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["pString"])(value)) {
          case '0':
          case '2':
            if (Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Ports"].ImapSsl === port) {
              _this.imapPort(Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["pString"])(Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Ports"].Imap));
            }

            break;

          case '1':
            if (Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Ports"].Imap === port) {
              _this.imapPort(Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["pString"])(Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Ports"].ImapSsl));
            }

            break;
          // no default
        }
      }
    });

    _this.smtpSecure.subscribe(function (value) {
      if (_this.enableSmartPorts()) {
        var port = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["pInt"])(_this.smtpPort());

        switch (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["pString"])(value)) {
          case '0':
            if (Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Ports"].SmtpSsl === port || Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Ports"].SmtpStartTls === port) {
              _this.smtpPort(Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["pString"])(Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Ports"].Smtp));
            }

            break;

          case '1':
            if (Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Ports"].Smtp === port || Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Ports"].SmtpStartTls === port) {
              _this.smtpPort(Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["pString"])(Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Ports"].SmtpSsl));
            }

            break;

          case '2':
            if (Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Ports"].Smtp === port || Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Ports"].SmtpSsl === port) {
              _this.smtpPort(Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["pString"])(Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Ports"].SmtpStartTls));
            }

            break;
          // no default
        }
      }
    });

    return _this;
  }

  var _proto = DomainPopupView.prototype;

  _proto.createOrAddCommand = function createOrAddCommand() {
    this.saving(true);
    Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].createOrUpdateDomain(___WEBPACK_IMPORTED_MODULE_6___default.a.bind(this.onDomainCreateOrSaveResponse, this), !this.edit(), this.name(), this.imapServer(), Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["pInt"])(this.imapPort()), this.imapSecure(), this.imapShortLogin(), this.useSieve(), this.sieveAllowRaw(), this.sieveServer(), Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["pInt"])(this.sievePort()), this.sieveSecure(), this.smtpServer(), Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["pInt"])(this.smtpPort()), this.smtpSecure(), this.smtpShortLogin(), this.smtpAuth(), this.smtpPhpMail(), this.whiteList());
  };

  _proto.testConnectionCommand = function testConnectionCommand() {
    this.page('main');
    this.testingDone(false);
    this.testingImapError(false);
    this.testingSieveError(false);
    this.testingSmtpError(false);
    this.testing(true);
    Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].testConnectionForDomain(___WEBPACK_IMPORTED_MODULE_6___default.a.bind(this.onTestConnectionResponse, this), this.name(), this.imapServer(), Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["pInt"])(this.imapPort()), this.imapSecure(), this.useSieve(), this.sieveServer(), Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["pInt"])(this.sievePort()), this.sieveSecure(), this.smtpServer(), Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["pInt"])(this.smtpPort()), this.smtpSecure(), this.smtpAuth(), this.smtpPhpMail());
  };

  _proto.whiteListCommand = function whiteListCommand() {
    this.page('white-list');
  };

  _proto.backCommand = function backCommand() {
    this.page('main');
  };

  _proto.sieveCommand = function sieveCommand() {
    this.sieveSettings(!this.sieveSettings());
    this.clearTesting();
  };

  _proto.onTestConnectionResponse = function onTestConnectionResponse(sResult, oData) {
    this.testing(false);

    if (Common_Enums__WEBPACK_IMPORTED_MODULE_8__["StorageResultType"].Success === sResult && oData.Result) {
      var bImap = false,
          bSieve = false;
      this.testingDone(true);
      this.testingImapError(true !== oData.Result.Imap);
      this.testingSieveError(true !== oData.Result.Sieve);
      this.testingSmtpError(true !== oData.Result.Smtp);

      if (this.testingImapError() && oData.Result.Imap) {
        bImap = true;
        this.testingImapErrorDesc('');
        this.testingImapErrorDesc(oData.Result.Imap);
      }

      if (this.testingSieveError() && oData.Result.Sieve) {
        bSieve = true;
        this.testingSieveErrorDesc('');
        this.testingSieveErrorDesc(oData.Result.Sieve);
      }

      if (this.testingSmtpError() && oData.Result.Smtp) {
        this.testingSmtpErrorDesc('');
        this.testingSmtpErrorDesc(oData.Result.Smtp);
      }

      if (this.sieveSettings()) {
        if (!bSieve && bImap) {
          this.sieveSettings(false);
        }
      } else if (bSieve && !bImap) {
        this.sieveSettings(true);
      }
    } else {
      this.testingImapError(true);
      this.testingSieveError(true);
      this.testingSmtpError(true);
      this.sieveSettings(false);
    }
  };

  _proto.onDomainCreateOrSaveResponse = function onDomainCreateOrSaveResponse(sResult, oData) {
    this.saving(false);

    if (Common_Enums__WEBPACK_IMPORTED_MODULE_8__["StorageResultType"].Success === sResult && oData) {
      if (oData.Result) {
        Object(Helper_Apps_Admin__WEBPACK_IMPORTED_MODULE_15__[/* getApp */ "a"])().reloadDomainList();
        this.closeCommand();
      } else if (Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].DomainAlreadyExists === oData.ErrorCode) {
        this.savingError(Object(Common_Translator__WEBPACK_IMPORTED_MODULE_12__["i18n"])('ERRORS/DOMAIN_ALREADY_EXISTS'));
      }
    } else {
      this.savingError(Object(Common_Translator__WEBPACK_IMPORTED_MODULE_12__["i18n"])('ERRORS/UNKNOWN_ERROR'));
    }
  };

  _proto.clearTesting = function clearTesting() {
    this.testing(false);
    this.testingDone(false);
    this.testingImapError(false);
    this.testingSieveError(false);
    this.testingSmtpError(false);
  };

  _proto.onHide = function onHide() {
    this.page('main');
    this.sieveSettings(false);
  };

  _proto.onShow = function onShow(oDomain) {
    this.saving(false);
    this.page('main');
    this.sieveSettings(false);
    this.clearTesting();
    this.clearForm();

    if (oDomain) {
      this.enableSmartPorts(false);
      this.edit(true);
      this.name(Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["trim"])(oDomain.Name));
      this.imapServer(Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["trim"])(oDomain.IncHost));
      this.imapPort('' + Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["pInt"])(oDomain.IncPort));
      this.imapSecure(Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["trim"])(oDomain.IncSecure));
      this.imapShortLogin(!!oDomain.IncShortLogin);
      this.useSieve(!!oDomain.UseSieve);
      this.sieveAllowRaw(!!oDomain.SieveAllowRaw);
      this.sieveServer(Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["trim"])(oDomain.SieveHost));
      this.sievePort('' + Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["pInt"])(oDomain.SievePort));
      this.sieveSecure(Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["trim"])(oDomain.SieveSecure));
      this.smtpServer(Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["trim"])(oDomain.OutHost));
      this.smtpPort('' + Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["pInt"])(oDomain.OutPort));
      this.smtpSecure(Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["trim"])(oDomain.OutSecure));
      this.smtpShortLogin(!!oDomain.OutShortLogin);
      this.smtpAuth(!!oDomain.OutAuth);
      this.smtpPhpMail(!!oDomain.OutUsePhpMail);
      this.whiteList(Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["trim"])(oDomain.WhiteList));
      this.aliasName(Object(Common_Utils__WEBPACK_IMPORTED_MODULE_11__["trim"])(oDomain.AliasName));
      this.enableSmartPorts(true);
    }
  };

  _proto.onShowWithDelay = function onShowWithDelay() {
    if ('' === this.name() && !Common_Globals__WEBPACK_IMPORTED_MODULE_10__["bMobileDevice"]) {
      this.name.focused(true);
    }
  };

  _proto.clearForm = function clearForm() {
    this.edit(false);
    this.page('main');
    this.sieveSettings(false);
    this.enableSmartPorts(false);
    this.savingError('');
    this.name('');
    this.name.focused(false);
    this.imapServer('');
    this.imapPort('' + Common_Consts__WEBPACK_IMPORTED_MODULE_9__[/* IMAP_DEFAULT_PORT */ "h"]);
    this.imapSecure(Common_Enums__WEBPACK_IMPORTED_MODULE_8__["ServerSecure"].None);
    this.imapShortLogin(false);
    this.useSieve(false);
    this.sieveAllowRaw(false);
    this.sieveServer('');
    this.sievePort('' + Common_Consts__WEBPACK_IMPORTED_MODULE_9__[/* SIEVE_DEFAULT_PORT */ "o"]);
    this.sieveSecure(Common_Enums__WEBPACK_IMPORTED_MODULE_8__["ServerSecure"].None);
    this.smtpServer('');
    this.smtpPort('' + Common_Consts__WEBPACK_IMPORTED_MODULE_9__[/* SMTP_DEFAULT_PORT */ "p"]);
    this.smtpSecure(Common_Enums__WEBPACK_IMPORTED_MODULE_8__["ServerSecure"].None);
    this.smtpShortLogin(false);
    this.smtpAuth(true);
    this.smtpPhpMail(false);
    this.whiteList('');
    this.aliasName('');
    this.enableSmartPorts(true);
  };

  return DomainPopupView;
}(Knoin_AbstractViewNext__WEBPACK_IMPORTED_MODULE_17__[/* AbstractViewNext */ "a"]), (Object(_babel_runtime_corejs3_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_class2.prototype, "createOrAddCommand", [_dec2], _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class2.prototype, "createOrAddCommand"), _class2.prototype), Object(_babel_runtime_corejs3_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_class2.prototype, "testConnectionCommand", [_dec3], _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class2.prototype, "testConnectionCommand"), _class2.prototype), Object(_babel_runtime_corejs3_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_class2.prototype, "whiteListCommand", [_dec4], _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class2.prototype, "whiteListCommand"), _class2.prototype), Object(_babel_runtime_corejs3_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_class2.prototype, "backCommand", [_dec5], _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class2.prototype, "backCommand"), _class2.prototype), Object(_babel_runtime_corejs3_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_class2.prototype, "sieveCommand", [_dec6], _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class2.prototype, "sieveCommand"), _class2.prototype)), _class2)) || _class);


/***/ }),
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */
/*!**************************************!*\
  !*** ./dev/Screen/Admin/Settings.js ***!
  \**************************************/
/*! exports provided: SettingsAdminScreen, default */
/*! exports used: SettingsAdminScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsAdminScreen; });
/* unused harmony export default */
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var Knoin_Knoin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Knoin/Knoin */ 8);
/* harmony import */ var Common_Plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Common/Plugins */ 36);
/* harmony import */ var Screen_AbstractSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Screen/AbstractSettings */ 304);
/* harmony import */ var Settings_Admin_General__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Settings/Admin/General */ 470);
/* harmony import */ var Settings_Admin_Domains__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Settings/Admin/Domains */ 471);
/* harmony import */ var Settings_Admin_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Settings/Admin/Login */ 472);
/* harmony import */ var Settings_Admin_Contacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Settings/Admin/Contacts */ 473);
/* harmony import */ var Settings_Admin_Security__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Settings/Admin/Security */ 474);
/* harmony import */ var Settings_Admin_Social__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Settings/Admin/Social */ 475);
/* harmony import */ var Settings_Admin_Plugins__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Settings/Admin/Plugins */ 476);
/* harmony import */ var Settings_Admin_Packages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Settings/Admin/Packages */ 477);
/* harmony import */ var Settings_Admin_About__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Settings/Admin/About */ 478);
/* harmony import */ var Settings_Admin_Branding__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Settings/Admin/Branding */ 479);
/* harmony import */ var Helper_Apps_Admin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! Helper/Apps/Admin */ 68);
/* harmony import */ var View_Admin_Settings_Menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! View/Admin/Settings/Menu */ 480);
/* harmony import */ var View_Admin_Settings_Pane__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! View/Admin/Settings/Pane */ 481);


















var SettingsAdminScreen = /*#__PURE__*/function (_AbstractSettingsScre) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(SettingsAdminScreen, _AbstractSettingsScre);

  function SettingsAdminScreen() {
    return _AbstractSettingsScre.call(this, [View_Admin_Settings_Menu__WEBPACK_IMPORTED_MODULE_15__[/* MenuSettingsAdminView */ "a"], View_Admin_Settings_Pane__WEBPACK_IMPORTED_MODULE_16__[/* PaneSettingsAdminView */ "a"]]) || this;
  }
  /**
   * @param {Function=} fCallback = null
   */


  var _proto = SettingsAdminScreen.prototype;

  _proto.setupSettings = function setupSettings(fCallback) {
    if (fCallback === void 0) {
      fCallback = null;
    }

    Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_1__["addSettingsViewModel"])(Settings_Admin_General__WEBPACK_IMPORTED_MODULE_4__[/* GeneralAdminSettings */ "a"], 'AdminSettingsGeneral', 'TABS_LABELS/LABEL_GENERAL_NAME', 'general', true);
    Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_1__["addSettingsViewModel"])(Settings_Admin_Domains__WEBPACK_IMPORTED_MODULE_5__[/* DomainsAdminSettings */ "a"], 'AdminSettingsDomains', 'TABS_LABELS/LABEL_DOMAINS_NAME', 'domains');
    Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_1__["addSettingsViewModel"])(Settings_Admin_Login__WEBPACK_IMPORTED_MODULE_6__[/* LoginAdminSettings */ "a"], 'AdminSettingsLogin', 'TABS_LABELS/LABEL_LOGIN_NAME', 'login');
    Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_1__["addSettingsViewModel"])(Settings_Admin_Branding__WEBPACK_IMPORTED_MODULE_13__[/* BrandingAdminSettings */ "a"], 'AdminSettingsBranding', 'TABS_LABELS/LABEL_BRANDING_NAME', 'branding');
    Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_1__["addSettingsViewModel"])(Settings_Admin_Contacts__WEBPACK_IMPORTED_MODULE_7__[/* ContactsAdminSettings */ "a"], 'AdminSettingsContacts', 'TABS_LABELS/LABEL_CONTACTS_NAME', 'contacts');
    Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_1__["addSettingsViewModel"])(Settings_Admin_Security__WEBPACK_IMPORTED_MODULE_8__[/* SecurityAdminSettings */ "a"], 'AdminSettingsSecurity', 'TABS_LABELS/LABEL_SECURITY_NAME', 'security');
    Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_1__["addSettingsViewModel"])(Settings_Admin_Social__WEBPACK_IMPORTED_MODULE_9__[/* SocialAdminSettings */ "a"], 'AdminSettingsSocial', 'TABS_LABELS/LABEL_INTEGRATION_NAME', 'integrations');
    Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_1__["addSettingsViewModel"])(Settings_Admin_Plugins__WEBPACK_IMPORTED_MODULE_10__[/* PluginsAdminSettings */ "a"], 'AdminSettingsPlugins', 'TABS_LABELS/LABEL_PLUGINS_NAME', 'plugins');
    Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_1__["addSettingsViewModel"])(Settings_Admin_Packages__WEBPACK_IMPORTED_MODULE_11__[/* PackagesAdminSettings */ "a"], 'AdminSettingsPackages', 'TABS_LABELS/LABEL_PACKAGES_NAME', 'packages');
    Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_1__["addSettingsViewModel"])(Settings_Admin_About__WEBPACK_IMPORTED_MODULE_12__[/* AboutAdminSettings */ "a"], 'AdminSettingsAbout', 'TABS_LABELS/LABEL_ABOUT_NAME', 'about');
    Object(Common_Plugins__WEBPACK_IMPORTED_MODULE_2__[/* runSettingsViewModelHooks */ "g"])(true);

    if (fCallback) {
      fCallback();
    }
  };

  _proto.onShow = function onShow() {
    Object(Helper_Apps_Admin__WEBPACK_IMPORTED_MODULE_14__[/* getApp */ "a"])().setWindowTitle('');
  };

  return SettingsAdminScreen;
}(Screen_AbstractSettings__WEBPACK_IMPORTED_MODULE_3__[/* AbstractSettingsScreen */ "a"]);



/***/ }),
/* 470 */
/*!***************************************!*\
  !*** ./dev/Settings/Admin/General.js ***!
  \***************************************/
/*! exports provided: GeneralAdminSettings, default */
/*! exports used: GeneralAdminSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralAdminSettings; });
/* unused harmony export default */
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ 17);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ 77);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Common_Translator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Common/Translator */ 9);
/* harmony import */ var Common_Links__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Common/Links */ 15);
/* harmony import */ var Storage_Settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Storage/Settings */ 5);
/* harmony import */ var Knoin_Knoin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Knoin/Knoin */ 8);
/* harmony import */ var Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Remote/Admin/Ajax */ 18);
/* harmony import */ var Stores_Theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Stores/Theme */ 123);
/* harmony import */ var Stores_Language__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Stores/Language */ 72);
/* harmony import */ var Stores_Admin_App__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Stores/Admin/App */ 110);
/* harmony import */ var Stores_Admin_Capa__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! Stores/Admin/Capa */ 88);
















var GeneralAdminSettings = /*#__PURE__*/function () {
  function GeneralAdminSettings() {
    var _this = this;

    this.language = Stores_Language__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].language;
    this.languages = Stores_Language__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].languages;
    this.languageAdmin = Stores_Language__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].languageAdmin;
    this.languagesAdmin = Stores_Language__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].languagesAdmin;
    this.theme = Stores_Theme__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].theme;
    this.themes = Stores_Theme__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].themes;
    this.capaThemes = Stores_Admin_Capa__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].themes;
    this.capaUserBackground = Stores_Admin_Capa__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].userBackground;
    this.capaGravatar = Stores_Admin_Capa__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].gravatar;
    this.capaAdditionalAccounts = Stores_Admin_Capa__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].additionalAccounts;
    this.capaIdentities = Stores_Admin_Capa__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].identities;
    this.capaAttachmentThumbnails = Stores_Admin_Capa__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].attachmentThumbnails;
    this.capaTemplates = Stores_Admin_Capa__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].templates;
    this.allowLanguagesOnSettings = Stores_Admin_App__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].allowLanguagesOnSettings;
    this.weakPassword = Stores_Admin_App__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].weakPassword;
    this.newMoveToFolder = Stores_Admin_App__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].newMoveToFolder;
    this.dataFolderAccess = Stores_Admin_App__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].dataFolderAccess;
    this.mainAttachmentLimit = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["pInt"])(Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_8__["settingsGet"])('AttachmentLimit')) / (Common_Enums__WEBPACK_IMPORTED_MODULE_5__["Magics"].BitLength1024 * Common_Enums__WEBPACK_IMPORTED_MODULE_5__["Magics"].BitLength1024)).extend({
      posInterer: 25
    });
    this.uploadData = Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_8__["settingsGet"])('PhpUploadSizes');
    this.uploadDataDesc = this.uploadData && (this.uploadData.upload_max_filesize || this.uploadData.post_max_size) ? [this.uploadData.upload_max_filesize ? 'upload_max_filesize = ' + this.uploadData.upload_max_filesize + '; ' : '', this.uploadData.post_max_size ? 'post_max_size = ' + this.uploadData.post_max_size : ''].join('') : '';
    this.themesOptions = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].computed(function () {
      return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(___WEBPACK_IMPORTED_MODULE_2___default.a).call(___WEBPACK_IMPORTED_MODULE_2___default.a, _this.themes(), function (theme) {
        return {
          optValue: theme,
          optText: Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["convertThemeName"])(theme)
        };
      });
    });
    this.languageFullName = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].computed(function () {
      return Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["convertLangName"])(_this.language());
    });
    this.languageAdminFullName = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].computed(function () {
      return Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["convertLangName"])(_this.languageAdmin());
    });
    this.attachmentLimitTrigger = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(Common_Enums__WEBPACK_IMPORTED_MODULE_5__["SaveSettingsStep"].Idle);
    this.languageTrigger = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(Common_Enums__WEBPACK_IMPORTED_MODULE_5__["SaveSettingsStep"].Idle);
    this.languageAdminTrigger = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(Common_Enums__WEBPACK_IMPORTED_MODULE_5__["SaveSettingsStep"].Idle).extend({
      throttle: Common_Enums__WEBPACK_IMPORTED_MODULE_5__["Magics"].Time100ms
    });
    this.themeTrigger = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(Common_Enums__WEBPACK_IMPORTED_MODULE_5__["SaveSettingsStep"].Idle);
  }

  var _proto = GeneralAdminSettings.prototype;

  _proto.onBuild = function onBuild() {
    var _this2 = this;

    ___WEBPACK_IMPORTED_MODULE_2___default.a.delay(function () {
      var f1 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["settingsSaveHelperSimpleFunction"])(_this2.attachmentLimitTrigger, _this2),
          f2 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["settingsSaveHelperSimpleFunction"])(_this2.languageTrigger, _this2),
          f3 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["settingsSaveHelperSimpleFunction"])(_this2.themeTrigger, _this2),
          fReloadLanguageHelper = function fReloadLanguageHelper(saveSettingsStep) {
        return function () {
          _this2.languageAdminTrigger(saveSettingsStep);

          ___WEBPACK_IMPORTED_MODULE_2___default.a.delay(function () {
            return _this2.languageAdminTrigger(Common_Enums__WEBPACK_IMPORTED_MODULE_5__["SaveSettingsStep"].Idle);
          }, Common_Enums__WEBPACK_IMPORTED_MODULE_5__["Magics"].Time1s);
        };
      };

      _this2.mainAttachmentLimit.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].saveAdminConfig(f1, {
          'AttachmentLimit': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["pInt"])(value)
        });
      });

      _this2.language.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].saveAdminConfig(f2, {
          'Language': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["trim"])(value)
        });
      });

      _this2.languageAdmin.subscribe(function (value) {
        _this2.languageAdminTrigger(Common_Enums__WEBPACK_IMPORTED_MODULE_5__["SaveSettingsStep"].Animate);

        Object(Common_Translator__WEBPACK_IMPORTED_MODULE_6__["reload"])(true, value).then(fReloadLanguageHelper(Common_Enums__WEBPACK_IMPORTED_MODULE_5__["SaveSettingsStep"].TrueResult), fReloadLanguageHelper(Common_Enums__WEBPACK_IMPORTED_MODULE_5__["SaveSettingsStep"].FalseResult)).then(function () {
          Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].saveAdminConfig(null, {
            'LanguageAdmin': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["trim"])(value)
          });
        });
      });

      _this2.theme.subscribe(function (value) {
        Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["changeTheme"])(value, _this2.themeTrigger);
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].saveAdminConfig(f3, {
          'Theme': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["trim"])(value)
        });
      });

      _this2.capaAdditionalAccounts.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].saveAdminConfig(null, {
          'CapaAdditionalAccounts': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["boolToAjax"])(value)
        });
      });

      _this2.capaIdentities.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].saveAdminConfig(null, {
          'CapaIdentities': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["boolToAjax"])(value)
        });
      });

      _this2.capaTemplates.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].saveAdminConfig(null, {
          'CapaTemplates': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["boolToAjax"])(value)
        });
      });

      _this2.capaGravatar.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].saveAdminConfig(null, {
          'CapaGravatar': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["boolToAjax"])(value)
        });
      });

      _this2.capaAttachmentThumbnails.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].saveAdminConfig(null, {
          'CapaAttachmentThumbnails': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["boolToAjax"])(value)
        });
      });

      _this2.capaThemes.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].saveAdminConfig(null, {
          'CapaThemes': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["boolToAjax"])(value)
        });
      });

      _this2.capaUserBackground.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].saveAdminConfig(null, {
          'CapaUserBackground': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["boolToAjax"])(value)
        });
      });

      _this2.allowLanguagesOnSettings.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].saveAdminConfig(null, {
          'AllowLanguagesOnSettings': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["boolToAjax"])(value)
        });
      });

      _this2.newMoveToFolder.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].saveAdminConfig(null, {
          'NewMoveToFolder': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["boolToAjax"])(value)
        });
      });
    }, Common_Enums__WEBPACK_IMPORTED_MODULE_5__["Magics"].Time50ms);
  };

  _proto.selectLanguage = function selectLanguage() {
    Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_9__["showScreenPopup"])(__webpack_require__(/*! View/Popup/Languages */ 291), [this.language, this.languages(), Stores_Language__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].userLanguage()]);
  };

  _proto.selectLanguageAdmin = function selectLanguageAdmin() {
    Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_9__["showScreenPopup"])(__webpack_require__(/*! View/Popup/Languages */ 291), [this.languageAdmin, this.languagesAdmin(), Stores_Language__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].userLanguageAdmin()]);
  }
  /**
   * @returns {string}
   */
  ;

  _proto.phpInfoLink = function phpInfoLink() {
    return Object(Common_Links__WEBPACK_IMPORTED_MODULE_7__[/* phpInfo */ "u"])();
  };

  return GeneralAdminSettings;
}();



/***/ }),
/* 471 */
/*!***************************************!*\
  !*** ./dev/Settings/Admin/Domains.js ***!
  \***************************************/
/*! exports provided: DomainsAdminSettings, default */
/*! exports used: DomainsAdminSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomainsAdminSettings; });
/* unused harmony export default */
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ 48);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Knoin_Knoin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Knoin/Knoin */ 8);
/* harmony import */ var Stores_Admin_Domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Stores/Admin/Domain */ 164);
/* harmony import */ var Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Remote/Admin/Ajax */ 18);
/* harmony import */ var Helper_Apps_Admin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Helper/Apps/Admin */ 68);









var DomainsAdminSettings = /*#__PURE__*/function () {
  function DomainsAdminSettings() {
    var _this = this;

    this.domains = Stores_Admin_Domain__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].domains;
    this.visibility = ko__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].computed(function () {
      return _this.domains.loading() ? 'visible' : 'hidden';
    });
    this.domainForDeletion = ko__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].observable(null).deleteAccessHelper();
    this.onDomainListChangeRequest = ___WEBPACK_IMPORTED_MODULE_1___default.a.bind(this.onDomainListChangeRequest, this);
    this.onDomainLoadRequest = ___WEBPACK_IMPORTED_MODULE_1___default.a.bind(this.onDomainLoadRequest, this);
  }

  var _proto = DomainsAdminSettings.prototype;

  _proto.createDomain = function createDomain() {
    Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_4__["showScreenPopup"])(__webpack_require__(/*! View/Popup/Domain */ 432));
  };

  _proto.createDomainAlias = function createDomainAlias() {
    Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_4__["showScreenPopup"])(__webpack_require__(/*! View/Popup/DomainAlias */ 562));
  };

  _proto.deleteDomain = function deleteDomain(domain) {
    this.domains.remove(domain);
    Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].domainDelete(this.onDomainListChangeRequest, domain.name);
  };

  _proto.disableDomain = function disableDomain(domain) {
    domain.disabled(!domain.disabled());
    Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].domainDisable(this.onDomainListChangeRequest, domain.name, domain.disabled());
  };

  _proto.onBuild = function onBuild(oDom) {
    var self = this;
    oDom.on('click', '.b-admin-domains-list-table .e-item .e-action', function () {
      // eslint-disable-line prefer-arrow-callback
      var domainItem = ko__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].dataFor(this); // eslint-disable-line no-invalid-this

      if (domainItem) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].domain(self.onDomainLoadRequest, domainItem.name);
      }
    });
    Object(Helper_Apps_Admin__WEBPACK_IMPORTED_MODULE_7__[/* getApp */ "a"])().reloadDomainList();
  };

  _proto.onDomainLoadRequest = function onDomainLoadRequest(sResult, oData) {
    if (Common_Enums__WEBPACK_IMPORTED_MODULE_3__["StorageResultType"].Success === sResult && oData && oData.Result) {
      Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_4__["showScreenPopup"])(__webpack_require__(/*! View/Popup/Domain */ 432), [oData.Result]);
    }
  };

  _proto.onDomainListChangeRequest = function onDomainListChangeRequest() {
    Object(Helper_Apps_Admin__WEBPACK_IMPORTED_MODULE_7__[/* getApp */ "a"])().reloadDomainList();
  };

  return DomainsAdminSettings;
}();



/***/ }),
/* 472 */
/*!*************************************!*\
  !*** ./dev/Settings/Admin/Login.js ***!
  \*************************************/
/*! exports provided: LoginAdminSettings, default */
/*! exports used: LoginAdminSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginAdminSettings; });
/* unused harmony export default */
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Storage_Settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Storage/Settings */ 5);
/* harmony import */ var Stores_Admin_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Stores/Admin/App */ 110);
/* harmony import */ var Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Remote/Admin/Ajax */ 18);







var LoginAdminSettings = /*#__PURE__*/function () {
  function LoginAdminSettings() {
    this.determineUserLanguage = Stores_Admin_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].determineUserLanguage;
    this.determineUserDomain = Stores_Admin_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].determineUserDomain;
    this.defaultDomain = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_3__["settingsGet"])('LoginDefaultDomain')).idleTrigger();
    this.allowLanguagesOnLogin = Stores_Admin_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].allowLanguagesOnLogin;
    this.dummy = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(false);
  }

  var _proto = LoginAdminSettings.prototype;

  _proto.onBuild = function onBuild() {
    var _this = this;

    ___WEBPACK_IMPORTED_MODULE_0___default.a.delay(function () {
      var f1 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_2__["settingsSaveHelperSimpleFunction"])(_this.defaultDomain.trigger, _this);

      _this.determineUserLanguage.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfig(null, {
          'DetermineUserLanguage': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_2__["boolToAjax"])(value)
        });
      });

      _this.determineUserDomain.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfig(null, {
          'DetermineUserDomain': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_2__["boolToAjax"])(value)
        });
      });

      _this.allowLanguagesOnLogin.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfig(null, {
          'AllowLanguagesOnLogin': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_2__["boolToAjax"])(value)
        });
      });

      _this.defaultDomain.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfig(f1, {
          'LoginDefaultDomain': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_2__["trim"])(value)
        });
      });
    }, 50);
  };

  return LoginAdminSettings;
}();



/***/ }),
/* 473 */
/*!****************************************!*\
  !*** ./dev/Settings/Admin/Contacts.js ***!
  \****************************************/
/*! exports provided: ContactsAdminSettings, default */
/*! exports used: ContactsAdminSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsAdminSettings; });
/* unused harmony export default */
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/applyDecoratedDescriptor */ 19);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ 17);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ 20);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Common_Translator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Common/Translator */ 9);
/* harmony import */ var Storage_Settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Storage/Settings */ 5);
/* harmony import */ var Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Remote/Admin/Ajax */ 18);
/* harmony import */ var Knoin_Knoin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Knoin/Knoin */ 8);


var _dec, _class;











var ContactsAdminSettings = (_dec = Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_10__["command"])(function (self) {
  return '' !== self.pdoDsn() && '' !== self.pdoUser();
}), (_class = /*#__PURE__*/function () {
  function ContactsAdminSettings() {
    var _this = this;

    this.defautOptionsAfterRender = Common_Utils__WEBPACK_IMPORTED_MODULE_5__["defautOptionsAfterRender"];
    this.enableContacts = ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].observable(!!Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_8__["settingsGet"])('ContactsEnable'));
    this.contactsSync = ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].observable(!!Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_8__["settingsGet"])('ContactsSync'));

    var supportedTypes = [],
        types = ['sqlite', 'mysql', 'pgsql'],
        getTypeName = function getTypeName(name) {
      switch (name) {
        case 'sqlite':
          name = 'SQLite';
          break;

        case 'mysql':
          name = 'MySQL';
          break;

        case 'pgsql':
          name = 'PostgreSQL';
          break;
        // no default
      }

      return name;
    };

    if (Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_8__["settingsGet"])('SQLiteIsSupported')) {
      supportedTypes.push('sqlite');
    }

    if (Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_8__["settingsGet"])('MySqlIsSupported')) {
      supportedTypes.push('mysql');
    }

    if (Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_8__["settingsGet"])('PostgreSqlIsSupported')) {
      supportedTypes.push('pgsql');
    }

    this.contactsSupported = 0 < supportedTypes.length;
    this.contactsTypes = ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].observableArray([]);
    this.contactsTypesOptions = ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].computed(function () {
      return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(___WEBPACK_IMPORTED_MODULE_3___default.a).call(___WEBPACK_IMPORTED_MODULE_3___default.a, _this.contactsTypes(), function (value) {
        var disabled = -1 === Object(Common_Utils__WEBPACK_IMPORTED_MODULE_5__["inArray"])(value, supportedTypes);
        return {
          'id': value,
          'name': getTypeName(value) + (disabled ? ' (' + Object(Common_Translator__WEBPACK_IMPORTED_MODULE_7__["i18n"])('HINTS/NOT_SUPPORTED') + ')' : ''),
          'disabled': disabled
        };
      });
    });
    this.contactsTypes(types);
    this.contactsType = ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].observable('');
    this.mainContactsType = ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].computed({
      read: this.contactsType,
      write: function write(value) {
        if (value !== _this.contactsType()) {
          if (-1 < Object(Common_Utils__WEBPACK_IMPORTED_MODULE_5__["inArray"])(value, supportedTypes)) {
            _this.contactsType(value);
          } else if (0 < supportedTypes.length) {
            _this.contactsType('');
          }
        } else {
          _this.contactsType.valueHasMutated();
        }
      }
    }).extend({
      notify: 'always'
    });
    this.contactsType.subscribe(function () {
      _this.testContactsSuccess(false);

      _this.testContactsError(false);

      _this.testContactsErrorMessage('');
    });
    this.pdoDsn = ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].observable(Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_8__["settingsGet"])('ContactsPdoDsn'));
    this.pdoUser = ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].observable(Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_8__["settingsGet"])('ContactsPdoUser'));
    this.pdoPassword = ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].observable(Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_8__["settingsGet"])('ContactsPdoPassword'));
    this.pdoDsnTrigger = ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].observable(Common_Enums__WEBPACK_IMPORTED_MODULE_6__["SaveSettingsStep"].Idle);
    this.pdoUserTrigger = ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].observable(Common_Enums__WEBPACK_IMPORTED_MODULE_6__["SaveSettingsStep"].Idle);
    this.pdoPasswordTrigger = ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].observable(Common_Enums__WEBPACK_IMPORTED_MODULE_6__["SaveSettingsStep"].Idle);
    this.contactsTypeTrigger = ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].observable(Common_Enums__WEBPACK_IMPORTED_MODULE_6__["SaveSettingsStep"].Idle);
    this.testing = ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].observable(false);
    this.testContactsSuccess = ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].observable(false);
    this.testContactsError = ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].observable(false);
    this.testContactsErrorMessage = ko__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].observable('');
    this.contactsType(Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_8__["settingsGet"])('ContactsPdoType'));
    this.onTestContactsResponse = ___WEBPACK_IMPORTED_MODULE_3___default.a.bind(this.onTestContactsResponse, this);
  }

  var _proto = ContactsAdminSettings.prototype;

  _proto.testContactsCommand = function testContactsCommand() {
    this.testContactsSuccess(false);
    this.testContactsError(false);
    this.testContactsErrorMessage('');
    this.testing(true);
    Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].testContacts(this.onTestContactsResponse, {
      'ContactsPdoType': this.contactsType(),
      'ContactsPdoDsn': this.pdoDsn(),
      'ContactsPdoUser': this.pdoUser(),
      'ContactsPdoPassword': this.pdoPassword()
    });
  };

  _proto.onTestContactsResponse = function onTestContactsResponse(result, data) {
    this.testContactsSuccess(false);
    this.testContactsError(false);
    this.testContactsErrorMessage('');

    if (Common_Enums__WEBPACK_IMPORTED_MODULE_6__["StorageResultType"].Success === result && data && data.Result && data.Result.Result) {
      this.testContactsSuccess(true);
    } else {
      this.testContactsError(true);

      if (data && data.Result) {
        this.testContactsErrorMessage(data.Result.Message || '');
      } else {
        this.testContactsErrorMessage('');
      }
    }

    this.testing(false);
  };

  _proto.onShow = function onShow() {
    this.testContactsSuccess(false);
    this.testContactsError(false);
    this.testContactsErrorMessage('');
  };

  _proto.onBuild = function onBuild() {
    var _this2 = this;

    ___WEBPACK_IMPORTED_MODULE_3___default.a.delay(function () {
      var f1 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_5__["settingsSaveHelperSimpleFunction"])(_this2.pdoDsnTrigger, _this2),
          f3 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_5__["settingsSaveHelperSimpleFunction"])(_this2.pdoUserTrigger, _this2),
          f4 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_5__["settingsSaveHelperSimpleFunction"])(_this2.pdoPasswordTrigger, _this2),
          f5 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_5__["settingsSaveHelperSimpleFunction"])(_this2.contactsTypeTrigger, _this2);

      _this2.enableContacts.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].saveAdminConfig(null, {
          'ContactsEnable': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_5__["boolToAjax"])(value)
        });
      });

      _this2.contactsSync.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].saveAdminConfig(null, {
          'ContactsSync': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_5__["boolToAjax"])(value)
        });
      });

      _this2.contactsType.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].saveAdminConfig(f5, {
          'ContactsPdoType': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_5__["trim"])(value)
        });
      });

      _this2.pdoDsn.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].saveAdminConfig(f1, {
          'ContactsPdoDsn': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_5__["trim"])(value)
        });
      });

      _this2.pdoUser.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].saveAdminConfig(f3, {
          'ContactsPdoUser': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_5__["trim"])(value)
        });
      });

      _this2.pdoPassword.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].saveAdminConfig(f4, {
          'ContactsPdoPassword': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_5__["trim"])(value)
        });
      });

      _this2.contactsType(Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_8__["settingsGet"])('ContactsPdoType'));
    }, Common_Enums__WEBPACK_IMPORTED_MODULE_6__["Magics"].Time50ms);
  };

  return ContactsAdminSettings;
}(), (Object(_babel_runtime_corejs3_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_class.prototype, "testContactsCommand", [_dec], _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "testContactsCommand"), _class.prototype)), _class));


/***/ }),
/* 474 */
/*!****************************************!*\
  !*** ./dev/Settings/Admin/Security.js ***!
  \****************************************/
/*! exports provided: SecurityAdminSettings, default */
/*! exports used: SecurityAdminSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityAdminSettings; });
/* unused harmony export default */
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/applyDecoratedDescriptor */ 19);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ 20);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Common_Links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Common/Links */ 15);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Storage_Settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Storage/Settings */ 5);
/* harmony import */ var Stores_Admin_App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Stores/Admin/App */ 110);
/* harmony import */ var Stores_Admin_Capa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Stores/Admin/Capa */ 88);
/* harmony import */ var Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Remote/Admin/Ajax */ 18);
/* harmony import */ var Knoin_Knoin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Knoin/Knoin */ 8);


var _dec, _class;












var SecurityAdminSettings = (_dec = Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_11__["command"])(function (self) {
  return '' !== Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["trim"])(self.adminLogin()) && '' !== self.adminPassword();
}), (_class = /*#__PURE__*/function () {
  function SecurityAdminSettings() {
    var _this = this;

    this.useLocalProxyForExternalImages = Stores_Admin_App__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].useLocalProxyForExternalImages;
    this.weakPassword = Stores_Admin_App__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].weakPassword;
    this.capaOpenPGP = Stores_Admin_Capa__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].openPGP;
    this.capaTwoFactorAuth = Stores_Admin_Capa__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].twoFactorAuth;
    this.capaTwoFactorAuthForce = Stores_Admin_Capa__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].twoFactorAuthForce;
    this.capaTwoFactorAuth.subscribe(function (value) {
      if (!value) {
        _this.capaTwoFactorAuthForce(false);
      }
    });
    this.verifySslCertificate = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(!!Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_7__["settingsGet"])('VerifySslCertificate'));
    this.allowSelfSigned = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(!!Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_7__["settingsGet"])('AllowSelfSigned'));
    this.verifySslCertificate.subscribe(function (value) {
      if (!value) {
        _this.allowSelfSigned(true);
      }
    });
    this.isTwoFactorDropperShown = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(false);
    this.twoFactorDropperUser = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable('');
    this.twoFactorDropperUser.focused = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(false);
    this.adminLogin = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_7__["settingsGet"])('AdminLogin'));
    this.adminLoginError = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(false);
    this.adminPassword = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable('');
    this.adminPasswordNew = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable('');
    this.adminPasswordNew2 = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable('');
    this.adminPasswordNewError = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(false);
    this.adminPasswordUpdateError = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(false);
    this.adminPasswordUpdateSuccess = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(false);
    this.adminPassword.subscribe(function () {
      _this.adminPasswordUpdateError(false);

      _this.adminPasswordUpdateSuccess(false);
    });
    this.adminLogin.subscribe(function () {
      _this.adminLoginError(false);
    });
    this.adminPasswordNew.subscribe(function () {
      _this.adminPasswordUpdateError(false);

      _this.adminPasswordUpdateSuccess(false);

      _this.adminPasswordNewError(false);
    });
    this.adminPasswordNew2.subscribe(function () {
      _this.adminPasswordUpdateError(false);

      _this.adminPasswordUpdateSuccess(false);

      _this.adminPasswordNewError(false);
    });
    this.onNewAdminPasswordResponse = ___WEBPACK_IMPORTED_MODULE_2___default.a.bind(this.onNewAdminPasswordResponse, this);
  }

  var _proto = SecurityAdminSettings.prototype;

  _proto.saveNewAdminPasswordCommand = function saveNewAdminPasswordCommand() {
    if ('' === Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["trim"])(this.adminLogin())) {
      this.adminLoginError(true);
      return false;
    }

    if (this.adminPasswordNew() !== this.adminPasswordNew2()) {
      this.adminPasswordNewError(true);
      return false;
    }

    this.adminPasswordUpdateError(false);
    this.adminPasswordUpdateSuccess(false);
    Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].saveNewAdminPassword(this.onNewAdminPasswordResponse, {
      'Login': this.adminLogin(),
      'Password': this.adminPassword(),
      'NewPassword': this.adminPasswordNew()
    });
    return true;
  };

  _proto.showTwoFactorDropper = function showTwoFactorDropper() {
    var _this2 = this;

    this.twoFactorDropperUser('');
    this.isTwoFactorDropperShown(true);

    ___WEBPACK_IMPORTED_MODULE_2___default.a.delay(function () {
      _this2.twoFactorDropperUser.focused(true);
    }, Common_Enums__WEBPACK_IMPORTED_MODULE_6__["Magics"].Time50ms);
  };

  _proto.onNewAdminPasswordResponse = function onNewAdminPasswordResponse(result, data) {
    if (Common_Enums__WEBPACK_IMPORTED_MODULE_6__["StorageResultType"].Success === result && data && data.Result) {
      this.adminPassword('');
      this.adminPasswordNew('');
      this.adminPasswordNew2('');
      this.adminPasswordUpdateSuccess(true);
      this.weakPassword(!!data.Result.Weak);
    } else {
      this.adminPasswordUpdateError(true);
    }
  };

  _proto.onBuild = function onBuild() {
    this.capaOpenPGP.subscribe(function (value) {
      Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].saveAdminConfig(null, {
        'CapaOpenPGP': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["boolToAjax"])(value)
      });
    });
    this.capaTwoFactorAuth.subscribe(function (value) {
      Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].saveAdminConfig(null, {
        'CapaTwoFactorAuth': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["boolToAjax"])(value)
      });
    });
    this.capaTwoFactorAuthForce.subscribe(function (value) {
      Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].saveAdminConfig(null, {
        'CapaTwoFactorAuthForce': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["boolToAjax"])(value)
      });
    });
    this.useLocalProxyForExternalImages.subscribe(function (value) {
      Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].saveAdminConfig(null, {
        'UseLocalProxyForExternalImages': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["boolToAjax"])(value)
      });
    });
    this.verifySslCertificate.subscribe(function (value) {
      Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].saveAdminConfig(null, {
        'VerifySslCertificate': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["boolToAjax"])(value)
      });
    });
    this.allowSelfSigned.subscribe(function (value) {
      Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].saveAdminConfig(null, {
        'AllowSelfSigned': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_4__["boolToAjax"])(value)
      });
    });
  };

  _proto.onHide = function onHide() {
    this.adminPassword('');
    this.adminPasswordNew('');
    this.adminPasswordNew2('');
    this.isTwoFactorDropperShown(false);
    this.twoFactorDropperUser('');
    this.twoFactorDropperUser.focused(false);
  }
  /**
   * @returns {string}
   */
  ;

  _proto.phpInfoLink = function phpInfoLink() {
    return Object(Common_Links__WEBPACK_IMPORTED_MODULE_5__[/* phpInfo */ "u"])();
  };

  return SecurityAdminSettings;
}(), (Object(_babel_runtime_corejs3_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_class.prototype, "saveNewAdminPasswordCommand", [_dec], _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(_class.prototype, "saveNewAdminPasswordCommand"), _class.prototype)), _class));


/***/ }),
/* 475 */
/*!**************************************!*\
  !*** ./dev/Settings/Admin/Social.js ***!
  \**************************************/
/*! exports provided: SocialAdminSettings, default */
/*! exports used: SocialAdminSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialAdminSettings; });
/* unused harmony export default */
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Stores_Social__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Stores/Social */ 26);
/* harmony import */ var Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Remote/Admin/Ajax */ 18);







var SocialAdminSettings = /*#__PURE__*/function () {
  function SocialAdminSettings() {
    this.googleEnable = Stores_Social__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].google.enabled;
    this.googleEnableAuth = Stores_Social__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].google.capa.auth;
    this.googleEnableAuthGmail = Stores_Social__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].google.capa.authGmail;
    this.googleEnableDrive = Stores_Social__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].google.capa.drive;
    this.googleEnablePreview = Stores_Social__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].google.capa.preview;
    this.googleEnableRequireClientSettings = Stores_Social__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].google.require.clientSettings;
    this.googleEnableRequireApiKey = Stores_Social__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].google.require.apiKeySettings;
    this.googleClientID = Stores_Social__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].google.clientID;
    this.googleClientSecret = Stores_Social__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].google.clientSecret;
    this.googleApiKey = Stores_Social__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].google.apiKey;
    this.googleTrigger1 = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Common_Enums__WEBPACK_IMPORTED_MODULE_2__["SaveSettingsStep"].Idle);
    this.googleTrigger2 = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Common_Enums__WEBPACK_IMPORTED_MODULE_2__["SaveSettingsStep"].Idle);
    this.googleTrigger3 = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Common_Enums__WEBPACK_IMPORTED_MODULE_2__["SaveSettingsStep"].Idle);
    this.facebookSupported = Stores_Social__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].facebook.supported;
    this.facebookEnable = Stores_Social__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].facebook.enabled;
    this.facebookAppID = Stores_Social__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].facebook.appID;
    this.facebookAppSecret = Stores_Social__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].facebook.appSecret;
    this.facebookTrigger1 = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Common_Enums__WEBPACK_IMPORTED_MODULE_2__["SaveSettingsStep"].Idle);
    this.facebookTrigger2 = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Common_Enums__WEBPACK_IMPORTED_MODULE_2__["SaveSettingsStep"].Idle);
    this.twitterEnable = Stores_Social__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].twitter.enabled;
    this.twitterConsumerKey = Stores_Social__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].twitter.consumerKey;
    this.twitterConsumerSecret = Stores_Social__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].twitter.consumerSecret;
    this.twitterTrigger1 = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Common_Enums__WEBPACK_IMPORTED_MODULE_2__["SaveSettingsStep"].Idle);
    this.twitterTrigger2 = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Common_Enums__WEBPACK_IMPORTED_MODULE_2__["SaveSettingsStep"].Idle);
    this.dropboxEnable = Stores_Social__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].dropbox.enabled;
    this.dropboxApiKey = Stores_Social__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].dropbox.apiKey;
    this.dropboxTrigger1 = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Common_Enums__WEBPACK_IMPORTED_MODULE_2__["SaveSettingsStep"].Idle);
  }

  var _proto = SocialAdminSettings.prototype;

  _proto.onBuild = function onBuild() {
    var _this = this;

    ___WEBPACK_IMPORTED_MODULE_0___default.a.delay(function () {
      var f1 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["settingsSaveHelperSimpleFunction"])(_this.facebookTrigger1, _this),
          f2 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["settingsSaveHelperSimpleFunction"])(_this.facebookTrigger2, _this),
          f3 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["settingsSaveHelperSimpleFunction"])(_this.twitterTrigger1, _this),
          f4 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["settingsSaveHelperSimpleFunction"])(_this.twitterTrigger2, _this),
          f5 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["settingsSaveHelperSimpleFunction"])(_this.googleTrigger1, _this),
          f6 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["settingsSaveHelperSimpleFunction"])(_this.googleTrigger2, _this),
          f7 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["settingsSaveHelperSimpleFunction"])(_this.googleTrigger3, _this),
          f8 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["settingsSaveHelperSimpleFunction"])(_this.dropboxTrigger1, _this);

      _this.facebookEnable.subscribe(function (value) {
        if (_this.facebookSupported()) {
          Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfig(null, {
            'FacebookEnable': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["boolToAjax"])(value)
          });
        }
      });

      _this.facebookAppID.subscribe(function (value) {
        if (_this.facebookSupported()) {
          Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfig(f1, {
            'FacebookAppID': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["trim"])(value)
          });
        }
      });

      _this.facebookAppSecret.subscribe(function (value) {
        if (_this.facebookSupported()) {
          Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfig(f2, {
            'FacebookAppSecret': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["trim"])(value)
          });
        }
      });

      _this.twitterEnable.subscribe(Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfigHelper('TwitterEnable', Common_Utils__WEBPACK_IMPORTED_MODULE_3__["boolToAjax"]));

      _this.twitterConsumerKey.subscribe(Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfigHelper('TwitterConsumerKey', Common_Utils__WEBPACK_IMPORTED_MODULE_3__["trim"], f3));

      _this.twitterConsumerSecret.subscribe(Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfigHelper('TwitterConsumerSecret', Common_Utils__WEBPACK_IMPORTED_MODULE_3__["trim"], f4));

      _this.googleEnable.subscribe(Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfigHelper('GoogleEnable', Common_Utils__WEBPACK_IMPORTED_MODULE_3__["boolToAjax"]));

      _this.googleEnableAuth.subscribe(Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfigHelper('GoogleEnableAuth', Common_Utils__WEBPACK_IMPORTED_MODULE_3__["boolToAjax"]));

      _this.googleEnableAuthGmail.subscribe(Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfigHelper('GoogleEnableAuthGmail', Common_Utils__WEBPACK_IMPORTED_MODULE_3__["boolToAjax"]));

      _this.googleEnableDrive.subscribe(Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfigHelper('GoogleEnableDrive', Common_Utils__WEBPACK_IMPORTED_MODULE_3__["boolToAjax"]));

      _this.googleEnablePreview.subscribe(Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfigHelper('GoogleEnablePreview', Common_Utils__WEBPACK_IMPORTED_MODULE_3__["boolToAjax"]));

      _this.googleClientID.subscribe(Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfigHelper('GoogleClientID', Common_Utils__WEBPACK_IMPORTED_MODULE_3__["trim"], f5));

      _this.googleClientSecret.subscribe(Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfigHelper('GoogleClientSecret', Common_Utils__WEBPACK_IMPORTED_MODULE_3__["trim"], f6));

      _this.googleApiKey.subscribe(Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfigHelper('GoogleApiKey', Common_Utils__WEBPACK_IMPORTED_MODULE_3__["trim"], f7));

      _this.dropboxEnable.subscribe(Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfigHelper('DropboxEnable', Common_Utils__WEBPACK_IMPORTED_MODULE_3__["boolToAjax"]));

      _this.dropboxApiKey.subscribe(Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfigHelper('DropboxApiKey', Common_Utils__WEBPACK_IMPORTED_MODULE_3__["trim"], f8));
    }, Common_Enums__WEBPACK_IMPORTED_MODULE_2__["Magics"].Time50ms);
  };

  return SocialAdminSettings;
}();



/***/ }),
/* 476 */
/*!***************************************!*\
  !*** ./dev/Settings/Admin/Plugins.js ***!
  \***************************************/
/*! exports provided: PluginsAdminSettings, default */
/*! exports used: PluginsAdminSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluginsAdminSettings; });
/* unused harmony export default */
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ 48);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Common_Translator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Common/Translator */ 9);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Storage_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Storage/Settings */ 5);
/* harmony import */ var Knoin_Knoin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Knoin/Knoin */ 8);
/* harmony import */ var Stores_Admin_Plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Stores/Admin/Plugin */ 125);
/* harmony import */ var Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Remote/Admin/Ajax */ 18);
/* harmony import */ var Helper_Apps_Admin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Helper/Apps/Admin */ 68);












var PluginsAdminSettings = /*#__PURE__*/function () {
  function PluginsAdminSettings() {
    this.enabledPlugins = ko__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].observable(!!Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_6__["settingsGet"])('EnabledPlugins'));
    this.plugins = Stores_Admin_Plugin__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].plugins;
    this.pluginsError = Stores_Admin_Plugin__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].plugins.error;
    this.visibility = ko__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].computed(function () {
      return Stores_Admin_Plugin__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].plugins.loading() ? 'visible' : 'hidden';
    });
    this.onPluginLoadRequest = ___WEBPACK_IMPORTED_MODULE_1___default.a.bind(this.onPluginLoadRequest, this);
    this.onPluginDisableRequest = ___WEBPACK_IMPORTED_MODULE_1___default.a.bind(this.onPluginDisableRequest, this);
  }

  var _proto = PluginsAdminSettings.prototype;

  _proto.disablePlugin = function disablePlugin(plugin) {
    plugin.disabled(!plugin.disabled());
    Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].pluginDisable(this.onPluginDisableRequest, plugin.name, plugin.disabled());
  };

  _proto.configurePlugin = function configurePlugin(plugin) {
    Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].plugin(this.onPluginLoadRequest, plugin.name);
  };

  _proto.onBuild = function onBuild(oDom) {
    var self = this;
    oDom.on('click', '.e-item .configure-plugin-action', function () {
      // eslint-disable-line prefer-arrow-callback
      var plugin = ko__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].dataFor(this); // eslint-disable-line no-invalid-this

      if (plugin) {
        self.configurePlugin(plugin);
      }
    }).on('click', '.e-item .disabled-plugin', function () {
      // eslint-disable-line prefer-arrow-callback
      var plugin = ko__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].dataFor(this); // eslint-disable-line no-invalid-this

      if (plugin) {
        self.disablePlugin(plugin);
      }
    });
    this.enabledPlugins.subscribe(function (value) {
      Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].saveAdminConfig(null, {
        'EnabledPlugins': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_5__["boolToAjax"])(value)
      });
    });
  };

  _proto.onShow = function onShow() {
    Stores_Admin_Plugin__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].plugins.error('');
    Object(Helper_Apps_Admin__WEBPACK_IMPORTED_MODULE_10__[/* getApp */ "a"])().reloadPluginList();
  };

  _proto.onPluginLoadRequest = function onPluginLoadRequest(result, data) {
    if (Common_Enums__WEBPACK_IMPORTED_MODULE_3__["StorageResultType"].Success === result && data && data.Result) {
      Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_7__["showScreenPopup"])(__webpack_require__(/*! View/Popup/Plugin */ 563), [data.Result]);
    }
  };

  _proto.onPluginDisableRequest = function onPluginDisableRequest(result, data) {
    if (Common_Enums__WEBPACK_IMPORTED_MODULE_3__["StorageResultType"].Success === result && data) {
      if (!data.Result && data.ErrorCode) {
        if (Common_Enums__WEBPACK_IMPORTED_MODULE_3__["Notification"].UnsupportedPluginPackage === data.ErrorCode && data.ErrorMessage && '' !== data.ErrorMessage) {
          Stores_Admin_Plugin__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].plugins.error(data.ErrorMessage);
        } else {
          Stores_Admin_Plugin__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].plugins.error(Object(Common_Translator__WEBPACK_IMPORTED_MODULE_4__["getNotification"])(data.ErrorCode));
        }
      }
    }

    Object(Helper_Apps_Admin__WEBPACK_IMPORTED_MODULE_10__[/* getApp */ "a"])().reloadPluginList();
  };

  return PluginsAdminSettings;
}();



/***/ }),
/* 477 */
/*!****************************************!*\
  !*** ./dev/Settings/Admin/Packages.js ***!
  \****************************************/
/*! exports provided: PackagesAdminSettings, default */
/*! exports used: PackagesAdminSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackagesAdminSettings; });
/* unused harmony export default */
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ 28);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! window */ 4);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(window__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Common_Translator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Common/Translator */ 9);
/* harmony import */ var Stores_Admin_Package__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Stores/Admin/Package */ 94);
/* harmony import */ var Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Remote/Admin/Ajax */ 18);
/* harmony import */ var Helper_Apps_Admin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Helper/Apps/Admin */ 68);










var PackagesAdminSettings = /*#__PURE__*/function () {
  function PackagesAdminSettings() {
    var _this = this;

    this.packagesError = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable('');
    this.packages = Stores_Admin_Package__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].packages;
    this.packagesReal = Stores_Admin_Package__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].packagesReal;
    this.packagesMainUpdatable = Stores_Admin_Package__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].packagesMainUpdatable;
    this.packagesCurrent = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].computed(function () {
      return _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(___WEBPACK_IMPORTED_MODULE_2___default.a).call(___WEBPACK_IMPORTED_MODULE_2___default.a, _this.packages(), function (item) {
        return item && '' !== item.installed && !item.compare;
      });
    });
    this.packagesAvailableForUpdate = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].computed(function () {
      return _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(___WEBPACK_IMPORTED_MODULE_2___default.a).call(___WEBPACK_IMPORTED_MODULE_2___default.a, _this.packages(), function (item) {
        return item && '' !== item.installed && !!item.compare;
      });
    });
    this.packagesAvailableForInstallation = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].computed(function () {
      return _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(___WEBPACK_IMPORTED_MODULE_2___default.a).call(___WEBPACK_IMPORTED_MODULE_2___default.a, _this.packages(), function (item) {
        return item && '' === item.installed;
      });
    });
    this.visibility = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].computed(function () {
      return Stores_Admin_Package__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].packages.loading() ? 'visible' : 'hidden';
    });
  }

  var _proto = PackagesAdminSettings.prototype;

  _proto.onShow = function onShow() {
    this.packagesError('');
  };

  _proto.onBuild = function onBuild() {
    Object(Helper_Apps_Admin__WEBPACK_IMPORTED_MODULE_8__[/* getApp */ "a"])().reloadPackagesList();
  };

  _proto.requestHelper = function requestHelper(packageToRequest, install) {
    var _this2 = this;

    return function (result, data) {
      if (Common_Enums__WEBPACK_IMPORTED_MODULE_4__["StorageResultType"].Success !== result || !data || !data.Result) {
        if (data && data.ErrorCode) {
          _this2.packagesError(Object(Common_Translator__WEBPACK_IMPORTED_MODULE_5__["getNotification"])(data.ErrorCode));
        } else {
          _this2.packagesError(Object(Common_Translator__WEBPACK_IMPORTED_MODULE_5__["getNotification"])(install ? Common_Enums__WEBPACK_IMPORTED_MODULE_4__["Notification"].CantInstallPackage : Common_Enums__WEBPACK_IMPORTED_MODULE_4__["Notification"].CantDeletePackage));
        }
      }

      ___WEBPACK_IMPORTED_MODULE_2___default.a.each(_this2.packages(), function (item) {
        if (item && packageToRequest && item.loading && item.loading() && packageToRequest.file === item.file) {
          packageToRequest.loading(false);
          item.loading(false);
        }
      });

      if (Common_Enums__WEBPACK_IMPORTED_MODULE_4__["StorageResultType"].Success === result && data && data.Result && data.Result.Reload) {
        window__WEBPACK_IMPORTED_MODULE_1___default.a.location.reload();
      } else {
        Object(Helper_Apps_Admin__WEBPACK_IMPORTED_MODULE_8__[/* getApp */ "a"])().reloadPackagesList();
      }
    };
  };

  _proto.deletePackage = function deletePackage(packageToDelete) {
    if (packageToDelete) {
      packageToDelete.loading(true);
      Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].packageDelete(this.requestHelper(packageToDelete, false), packageToDelete);
    }
  };

  _proto.installPackage = function installPackage(packageToInstall) {
    if (packageToInstall) {
      packageToInstall.loading(true);
      Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].packageInstall(this.requestHelper(packageToInstall, true), packageToInstall);
    }
  };

  return PackagesAdminSettings;
}();



/***/ }),
/* 478 */
/*!*************************************!*\
  !*** ./dev/Settings/Admin/About.js ***!
  \*************************************/
/*! exports provided: AboutAdminSettings, default */
/*! exports used: AboutAdminSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutAdminSettings; });
/* unused harmony export default */
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Common_Translator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Common/Translator */ 9);
/* harmony import */ var Storage_Settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Storage/Settings */ 5);
/* harmony import */ var Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Stores/Admin/Core */ 40);
/* harmony import */ var Helper_Apps_Admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Helper/Apps/Admin */ 68);






var AboutAdminSettings = /*#__PURE__*/function () {
  function AboutAdminSettings() {
    var _this = this;

    this.version = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["appSettingsGet"])('version'));
    this.access = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable(!!Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_2__["settingsGet"])('CoreAccess'));
    this.errorDesc = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].observable('');
    this.coreReal = Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].coreReal;
    this.coreChannel = Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].coreChannel;
    this.coreType = Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].coreType;
    this.coreUpdatable = Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].coreUpdatable;
    this.coreAccess = Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].coreAccess;
    this.coreChecking = Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].coreChecking;
    this.coreUpdating = Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].coreUpdating;
    this.coreWarning = Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].coreWarning;
    this.coreVersion = Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].coreVersion;
    this.coreRemoteVersion = Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].coreRemoteVersion;
    this.coreRemoteRelease = Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].coreRemoteRelease;
    this.coreVersionCompare = Stores_Admin_Core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].coreVersionCompare;
    this.coreRemoteVersionHtmlDesc = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].computed(function () {
      Object(Common_Translator__WEBPACK_IMPORTED_MODULE_1__["trigger"])();
      return Object(Common_Translator__WEBPACK_IMPORTED_MODULE_1__["i18n"])('TAB_ABOUT/HTML_NEW_VERSION', {
        'VERSION': _this.coreRemoteVersion()
      });
    });
    this.statusType = ko__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].computed(function () {
      var type = '';

      var versionToCompare = _this.coreVersionCompare(),
          isChecking = _this.coreChecking(),
          isUpdating = _this.coreUpdating(),
          isReal = _this.coreReal();

      if (isChecking) {
        type = 'checking';
      } else if (isUpdating) {
        type = 'updating';
      } else if (isReal && 0 === versionToCompare) {
        type = 'up-to-date';
      } else if (isReal && -1 === versionToCompare) {
        type = 'available';
      } else if (!isReal) {
        type = 'error';

        _this.errorDesc('Cannot access the repository at the moment.');
      }

      return type;
    });
  }

  var _proto = AboutAdminSettings.prototype;

  _proto.onBuild = function onBuild() {
    if (this.access()) {
      Object(Helper_Apps_Admin__WEBPACK_IMPORTED_MODULE_4__[/* getApp */ "a"])().reloadCoreData();
    }
  };

  _proto.updateCoreData = function updateCoreData() {
    if (!this.coreUpdating()) {
      Object(Helper_Apps_Admin__WEBPACK_IMPORTED_MODULE_4__[/* getApp */ "a"])().updateCoreData();
    }
  };

  return AboutAdminSettings;
}();



/***/ }),
/* 479 */
/*!****************************************!*\
  !*** ./dev/Settings/Admin/Branding.js ***!
  \****************************************/
/*! exports provided: BrandingAdminSettings, default */
/*! exports used: BrandingAdminSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandingAdminSettings; });
/* unused harmony export default */
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Common_Translator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Common/Translator */ 9);
/* harmony import */ var Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Remote/Admin/Ajax */ 18);
/* harmony import */ var Storage_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Storage/Settings */ 5);








var BrandingAdminSettings = /*#__PURE__*/function () {
  function BrandingAdminSettings() {
    this.title = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_6__["settingsGet"])('Title')).idleTrigger();
    this.loadingDesc = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_6__["settingsGet"])('LoadingDescription')).idleTrigger();
    this.faviconUrl = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_6__["settingsGet"])('FaviconUrl')).idleTrigger();
    this.loginLogo = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_6__["settingsGet"])('LoginLogo') || '').idleTrigger();
    this.loginBackground = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_6__["settingsGet"])('LoginBackground') || '').idleTrigger();
    this.userLogo = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_6__["settingsGet"])('UserLogo') || '').idleTrigger();
    this.userLogoMessage = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_6__["settingsGet"])('UserLogoMessage') || '').idleTrigger();
    this.userIframeMessage = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_6__["settingsGet"])('UserIframeMessage') || '').idleTrigger();
    this.userLogoTitle = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_6__["settingsGet"])('UserLogoTitle') || '').idleTrigger();
    this.loginDescription = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_6__["settingsGet"])('LoginDescription')).idleTrigger();
    this.loginCss = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_6__["settingsGet"])('LoginCss')).idleTrigger();
    this.userCss = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_6__["settingsGet"])('UserCss')).idleTrigger();
    this.welcomePageUrl = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_6__["settingsGet"])('WelcomePageUrl')).idleTrigger();
    this.welcomePageDisplay = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].observable(Object(Storage_Settings__WEBPACK_IMPORTED_MODULE_6__["settingsGet"])('WelcomePageDisplay')).idleTrigger();
    this.welcomePageDisplay.options = ko__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].computed(function () {
      Object(Common_Translator__WEBPACK_IMPORTED_MODULE_4__["trigger"])();
      return [{
        optValue: 'none',
        optText: Object(Common_Translator__WEBPACK_IMPORTED_MODULE_4__["i18n"])('TAB_BRANDING/OPTION_WELCOME_PAGE_DISPLAY_NONE')
      }, {
        optValue: 'once',
        optText: Object(Common_Translator__WEBPACK_IMPORTED_MODULE_4__["i18n"])('TAB_BRANDING/OPTION_WELCOME_PAGE_DISPLAY_ONCE')
      }, {
        optValue: 'always',
        optText: Object(Common_Translator__WEBPACK_IMPORTED_MODULE_4__["i18n"])('TAB_BRANDING/OPTION_WELCOME_PAGE_DISPLAY_ALWAYS')
      }];
    });
  }

  var _proto = BrandingAdminSettings.prototype;

  _proto.onBuild = function onBuild() {
    var _this = this;

    ___WEBPACK_IMPORTED_MODULE_0___default.a.delay(function () {
      var f1 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["settingsSaveHelperSimpleFunction"])(_this.title.trigger, _this),
          f2 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["settingsSaveHelperSimpleFunction"])(_this.loadingDesc.trigger, _this),
          f3 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["settingsSaveHelperSimpleFunction"])(_this.faviconUrl.trigger, _this);

      _this.title.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfig(f1, {
          'Title': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["trim"])(value)
        });
      });

      _this.loadingDesc.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfig(f2, {
          'LoadingDescription': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["trim"])(value)
        });
      });

      _this.faviconUrl.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfig(f3, {
          'FaviconUrl': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["trim"])(value)
        });
      });
    }, Common_Enums__WEBPACK_IMPORTED_MODULE_2__["Magics"].Time50ms);

    ___WEBPACK_IMPORTED_MODULE_0___default.a.delay(function () {
      var f1 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["settingsSaveHelperSimpleFunction"])(_this.loginLogo.trigger, _this),
          f2 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["settingsSaveHelperSimpleFunction"])(_this.loginDescription.trigger, _this),
          f3 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["settingsSaveHelperSimpleFunction"])(_this.loginCss.trigger, _this),
          f4 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["settingsSaveHelperSimpleFunction"])(_this.userLogo.trigger, _this),
          f5 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["settingsSaveHelperSimpleFunction"])(_this.userLogoTitle.trigger, _this),
          f6 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["settingsSaveHelperSimpleFunction"])(_this.loginBackground.trigger, _this),
          f7 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["settingsSaveHelperSimpleFunction"])(_this.userCss.trigger, _this),
          f8 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["settingsSaveHelperSimpleFunction"])(_this.welcomePageUrl.trigger, _this),
          f9 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["settingsSaveHelperSimpleFunction"])(_this.welcomePageDisplay.trigger, _this),
          f10 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["settingsSaveHelperSimpleFunction"])(_this.userLogoMessage.trigger, _this),
          f11 = Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["settingsSaveHelperSimpleFunction"])(_this.userIframeMessage.trigger, _this);

      _this.loginLogo.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfig(f1, {
          'LoginLogo': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["trim"])(value)
        });
      });

      _this.loginDescription.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfig(f2, {
          'LoginDescription': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["trim"])(value)
        });
      });

      _this.loginCss.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfig(f3, {
          'LoginCss': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["trim"])(value)
        });
      });

      _this.userLogo.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfig(f4, {
          'UserLogo': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["trim"])(value)
        });
      });

      _this.userLogoTitle.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfig(f5, {
          'UserLogoTitle': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["trim"])(value)
        });
      });

      _this.userLogoMessage.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfig(f10, {
          'UserLogoMessage': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["trim"])(value)
        });
      });

      _this.userIframeMessage.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfig(f11, {
          'UserIframeMessage': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["trim"])(value)
        });
      });

      _this.loginBackground.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfig(f6, {
          'LoginBackground': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["trim"])(value)
        });
      });

      _this.userCss.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfig(f7, {
          'UserCss': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["trim"])(value)
        });
      });

      _this.welcomePageUrl.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfig(f8, {
          'WelcomePageUrl': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["trim"])(value)
        });
      });

      _this.welcomePageDisplay.subscribe(function (value) {
        Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].saveAdminConfig(f9, {
          'WelcomePageDisplay': Object(Common_Utils__WEBPACK_IMPORTED_MODULE_3__["trim"])(value)
        });
      });
    }, Common_Enums__WEBPACK_IMPORTED_MODULE_2__["Magics"].Time50ms);
  };

  return BrandingAdminSettings;
}();



/***/ }),
/* 480 */
/*!*****************************************!*\
  !*** ./dev/View/Admin/Settings/Menu.js ***!
  \*****************************************/
/*! exports provided: MenuSettingsAdminView, default */
/*! exports used: MenuSettingsAdminView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuSettingsAdminView; });
/* unused harmony export default */
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ 204);
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! $ */ 7);
/* harmony import */ var $__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n($__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! key */ 21);
/* harmony import */ var key__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(key__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Common_Globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Common/Globals */ 6);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Knoin_Knoin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Knoin/Knoin */ 8);
/* harmony import */ var Knoin_AbstractViewNext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Knoin/AbstractViewNext */ 25);


var _dec, _class;








var MenuSettingsAdminView = (_dec = Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_6__["view"])({
  name: 'View/Admin/Settings/Menu',
  type: Knoin_Knoin__WEBPACK_IMPORTED_MODULE_6__["ViewType"].Left,
  templateID: 'AdminMenu'
}), _dec(_class = /*#__PURE__*/function (_AbstractViewNext) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(MenuSettingsAdminView, _AbstractViewNext);

  /**
   * @param {?} screen
   */
  function MenuSettingsAdminView(screen) {
    var _this;

    _this = _AbstractViewNext.call(this) || this;
    _this.leftPanelDisabled = Common_Globals__WEBPACK_IMPORTED_MODULE_4__["leftPanelDisabled"];
    _this.menu = screen.menu;
    return _this;
  }

  var _proto = MenuSettingsAdminView.prototype;

  _proto.link = function link(route) {
    return '#/' + route;
  };

  _proto.onBuild = function onBuild(dom) {
    key__WEBPACK_IMPORTED_MODULE_3___default()('up, down', Common_Enums__WEBPACK_IMPORTED_MODULE_5__["KeyState"].Settings, Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_6__["settingsMenuKeysHandler"])($__WEBPACK_IMPORTED_MODULE_2___default()('.b-admin-menu .e-item', dom)));
  };

  return MenuSettingsAdminView;
}(Knoin_AbstractViewNext__WEBPACK_IMPORTED_MODULE_7__[/* AbstractViewNext */ "a"])) || _class);


/***/ }),
/* 481 */
/*!*****************************************!*\
  !*** ./dev/View/Admin/Settings/Pane.js ***!
  \*****************************************/
/*! exports provided: PaneSettingsAdminView, default */
/*! exports used: PaneSettingsAdminView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaneSettingsAdminView; });
/* unused harmony export default */
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ 77);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Storage_Settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Storage/Settings */ 5);
/* harmony import */ var Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Remote/Admin/Ajax */ 18);
/* harmony import */ var Stores_Admin_Domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Stores/Admin/Domain */ 164);
/* harmony import */ var Stores_Admin_Plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Stores/Admin/Plugin */ 125);
/* harmony import */ var Stores_Admin_Package__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Stores/Admin/Package */ 94);
/* harmony import */ var Helper_Apps_Admin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Helper/Apps/Admin */ 68);
/* harmony import */ var Knoin_Knoin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Knoin/Knoin */ 8);
/* harmony import */ var Knoin_AbstractViewNext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Knoin/AbstractViewNext */ 25);


var _dec, _class;











var PaneSettingsAdminView = (_dec = Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_9__["view"])({
  name: 'View/Admin/Settings/Pane',
  type: Knoin_Knoin__WEBPACK_IMPORTED_MODULE_9__["ViewType"].Right,
  templateID: 'AdminPane'
}), _dec(_class = /*#__PURE__*/function (_AbstractViewNext) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(PaneSettingsAdminView, _AbstractViewNext);

  function PaneSettingsAdminView() {
    var _this;

    _this = _AbstractViewNext.call(this) || this;
    _this.adminDomain = ko__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].observable(Storage_Settings__WEBPACK_IMPORTED_MODULE_3__["settingsGet"]('AdminDomain'));
    _this.version = ko__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].observable(Storage_Settings__WEBPACK_IMPORTED_MODULE_3__["appSettingsGet"]('version'));
    _this.adminManLoading = ko__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].computed(function () {
      return '000' !== [Stores_Admin_Domain__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].domains.loading() ? '1' : '0', Stores_Admin_Plugin__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].plugins.loading() ? '1' : '0', Stores_Admin_Package__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].packages.loading() ? '1' : '0'].join('');
    });
    _this.adminManLoadingVisibility = ko__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].computed(function () {
      return _this.adminManLoading() ? 'visible' : 'hidden';
    }).extend({
      rateLimit: 300
    });
    return _this;
  }

  var _proto = PaneSettingsAdminView.prototype;

  _proto.logoutClick = function logoutClick() {
    Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].adminLogout(function () {
      Object(Helper_Apps_Admin__WEBPACK_IMPORTED_MODULE_8__[/* getApp */ "a"])().loginAndLogoutReload(true, true);
    });
  };

  return PaneSettingsAdminView;
}(Knoin_AbstractViewNext__WEBPACK_IMPORTED_MODULE_10__[/* AbstractViewNext */ "a"])) || _class);


/***/ }),
/* 482 */
/*!***********************************!*\
  !*** ./dev/Screen/Admin/Login.js ***!
  \***********************************/
/*! exports provided: LoginAdminScreen, default */
/*! exports used: LoginAdminScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginAdminScreen; });
/* unused harmony export default */
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var Knoin_AbstractScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Knoin/AbstractScreen */ 152);
/* harmony import */ var Helper_Apps_Admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Helper/Apps/Admin */ 68);
/* harmony import */ var View_Admin_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! View/Admin/Login */ 483);





var LoginAdminScreen = /*#__PURE__*/function (_AbstractScreen) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(LoginAdminScreen, _AbstractScreen);

  function LoginAdminScreen() {
    return _AbstractScreen.call(this, 'login', [View_Admin_Login__WEBPACK_IMPORTED_MODULE_3__[/* LoginAdminView */ "a"]]) || this;
  }

  var _proto = LoginAdminScreen.prototype;

  _proto.onShow = function onShow() {
    Object(Helper_Apps_Admin__WEBPACK_IMPORTED_MODULE_2__[/* getApp */ "a"])().setWindowTitle('');
  };

  return LoginAdminScreen;
}(Knoin_AbstractScreen__WEBPACK_IMPORTED_MODULE_1__[/* AbstractScreen */ "a"]);



/***/ }),
/* 483 */
/*!*********************************!*\
  !*** ./dev/View/Admin/Login.js ***!
  \*********************************/
/*! exports provided: LoginAdminView, default */
/*! exports used: LoginAdminView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginAdminView; });
/* unused harmony export default */
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/applyDecoratedDescriptor */ 19);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ 20);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Common_Translator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Common/Translator */ 9);
/* harmony import */ var Common_Globals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Common/Globals */ 6);
/* harmony import */ var Storage_Settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Storage/Settings */ 5);
/* harmony import */ var Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Remote/Admin/Ajax */ 18);
/* harmony import */ var Helper_Apps_Admin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Helper/Apps/Admin */ 68);
/* harmony import */ var Knoin_Knoin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Knoin/Knoin */ 8);
/* harmony import */ var Knoin_AbstractViewNext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Knoin/AbstractViewNext */ 25);



var _dec, _dec2, _class, _class2;













var LoginAdminView = (_dec = Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_12__["view"])({
  name: 'View/Admin/Login',
  type: Knoin_Knoin__WEBPACK_IMPORTED_MODULE_12__["ViewType"].Center,
  templateID: 'AdminLogin'
}), _dec2 = Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_12__["command"])(function (self) {
  return !self.submitRequest();
}), _dec(_class = (_class2 = /*#__PURE__*/function (_AbstractViewNext) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(LoginAdminView, _AbstractViewNext);

  function LoginAdminView() {
    var _this;

    _this = _AbstractViewNext.call(this) || this;
    _this.mobile = !!Storage_Settings__WEBPACK_IMPORTED_MODULE_9__["appSettingsGet"]('mobile');
    _this.mobileDevice = !!Storage_Settings__WEBPACK_IMPORTED_MODULE_9__["appSettingsGet"]('mobileDevice');
    _this.hideSubmitButton = !!Storage_Settings__WEBPACK_IMPORTED_MODULE_9__["appSettingsGet"]('hideSubmitButton');
    _this.login = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable('');
    _this.password = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable('');
    _this.loginError = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(false);
    _this.passwordError = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(false);
    _this.loginErrorAnimation = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(false).extend({
      'falseTimeout': 500
    });
    _this.passwordErrorAnimation = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(false).extend({
      'falseTimeout': 500
    });
    _this.loginFocus = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(false);
    _this.formHidden = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(false);
    _this.formError = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].computed(function () {
      return _this.loginErrorAnimation() || _this.passwordErrorAnimation();
    });

    _this.login.subscribe(function () {
      return _this.loginError(false);
    });

    _this.password.subscribe(function () {
      return _this.passwordError(false);
    });

    _this.loginError.subscribe(function (v) {
      return _this.loginErrorAnimation(!!v);
    });

    _this.passwordError.subscribe(function (v) {
      _this.passwordErrorAnimation(!!v);
    });

    _this.submitRequest = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable(false);
    _this.submitError = ko__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].observable('');
    return _this;
  }

  var _proto = LoginAdminView.prototype;

  _proto.submitCommand = function submitCommand() {
    var _this2 = this;

    Object(Common_Utils__WEBPACK_IMPORTED_MODULE_5__["triggerAutocompleteInputChange"])();
    this.loginError(false);
    this.passwordError(false);
    this.loginError('' === Object(Common_Utils__WEBPACK_IMPORTED_MODULE_5__["trim"])(this.login()));
    this.passwordError('' === Object(Common_Utils__WEBPACK_IMPORTED_MODULE_5__["trim"])(this.password()));

    if (this.loginError() || this.passwordError()) {
      return false;
    }

    this.submitRequest(true);
    Common_Globals__WEBPACK_IMPORTED_MODULE_8__["$win"].trigger('rl.tooltips.diactivate');
    Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].adminLogin(function (sResult, oData) {
      Common_Globals__WEBPACK_IMPORTED_MODULE_8__["$win"].trigger('rl.tooltips.diactivate');
      Common_Globals__WEBPACK_IMPORTED_MODULE_8__["$win"].trigger('rl.tooltips.activate');

      if (Common_Enums__WEBPACK_IMPORTED_MODULE_6__["StorageResultType"].Success === sResult && oData && 'AdminLogin' === oData.Action) {
        if (oData.Result) {
          Object(Helper_Apps_Admin__WEBPACK_IMPORTED_MODULE_11__[/* getApp */ "a"])().loginAndLogoutReload(true);
        } else if (oData.ErrorCode) {
          _this2.submitRequest(false);

          _this2.submitError(Object(Common_Translator__WEBPACK_IMPORTED_MODULE_7__["getNotification"])(oData.ErrorCode));
        }
      } else {
        _this2.submitRequest(false);

        _this2.submitError(Object(Common_Translator__WEBPACK_IMPORTED_MODULE_7__["getNotification"])(Common_Enums__WEBPACK_IMPORTED_MODULE_6__["Notification"].UnknownError));
      }
    }, this.login(), this.password());
    return true;
  };

  _proto.onShow = function onShow() {
    var _this3 = this;

    Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_12__["routeOff"])();

    ___WEBPACK_IMPORTED_MODULE_4___default.a.delay(function () {
      _this3.loginFocus(true);
    }, Common_Enums__WEBPACK_IMPORTED_MODULE_6__["Magics"].Time100ms);
  };

  _proto.onHide = function onHide() {
    this.loginFocus(false);
  };

  _proto.onBuild = function onBuild() {
    Object(Common_Utils__WEBPACK_IMPORTED_MODULE_5__["triggerAutocompleteInputChange"])(true);
  };

  _proto.submitForm = function submitForm() {
    this.submitCommand();
  };

  return LoginAdminView;
}(Knoin_AbstractViewNext__WEBPACK_IMPORTED_MODULE_13__[/* AbstractViewNext */ "a"]), (Object(_babel_runtime_corejs3_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_class2.prototype, "submitCommand", [_dec2], _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class2.prototype, "submitCommand"), _class2.prototype)), _class2)) || _class);


/***/ }),
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */
/*!**********************!*\
  !*** ./dev/admin.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ 292);
/* harmony import */ var App_Admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! App/Admin */ 403);


Object(bootstrap__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(App_Admin__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),
/* 562 */
/*!***************************************!*\
  !*** ./dev/View/Popup/DomainAlias.js ***!
  \***************************************/
/*! exports provided: DomainAliasPopupView, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainAliasPopupView", function() { return DomainAliasPopupView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DomainAliasPopupView; });
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/assertThisInitialized */ 29);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/applyDecoratedDescriptor */ 19);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ 17);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ 20);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ 48);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Common_Globals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Common/Globals */ 6);
/* harmony import */ var Common_Translator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Common/Translator */ 9);
/* harmony import */ var Stores_Admin_Domain__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Stores/Admin/Domain */ 164);
/* harmony import */ var Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Remote/Admin/Ajax */ 18);
/* harmony import */ var Helper_Apps_Admin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Helper/Apps/Admin */ 68);
/* harmony import */ var Knoin_Knoin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! Knoin/Knoin */ 8);
/* harmony import */ var Knoin_AbstractViewNext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! Knoin/AbstractViewNext */ 25);




var _dec, _dec2, _class, _class2;














var DomainAliasPopupView = (_dec = Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_14__["popup"])({
  name: 'View/Popup/DomainAlias',
  templateID: 'PopupsDomainAlias'
}), _dec2 = Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_14__["command"])(function (self) {
  return self.canBeSaved();
}), _dec(_class = (_class2 = /*#__PURE__*/function (_AbstractViewNext) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(DomainAliasPopupView, _AbstractViewNext);

  function DomainAliasPopupView() {
    var _this;

    _this = _AbstractViewNext.call(this) || this;
    _this.saving = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(false);
    _this.savingError = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable('');
    _this.name = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable('');
    _this.name.focused = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(false);
    _this.alias = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable('');
    _this.domains = Stores_Admin_Domain__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].domainsWithoutAliases;
    _this.domainsOptions = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].computed(function () {
      return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(___WEBPACK_IMPORTED_MODULE_6___default.a).call(___WEBPACK_IMPORTED_MODULE_6___default.a, _this.domains(), function (item) {
        return {
          optValue: item.name,
          optText: item.name
        };
      });
    });
    _this.canBeSaved = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].computed(function () {
      return !_this.saving() && '' !== _this.name() && '' !== _this.alias();
    });
    _this.onDomainAliasCreateOrSaveResponse = ___WEBPACK_IMPORTED_MODULE_6___default.a.bind(_this.onDomainAliasCreateOrSaveResponse, Object(_babel_runtime_corejs3_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this));
    return _this;
  }

  var _proto = DomainAliasPopupView.prototype;

  _proto.createCommand = function createCommand() {
    this.saving(true);
    Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].createDomainAlias(this.onDomainAliasCreateOrSaveResponse, this.name(), this.alias());
  };

  _proto.onDomainAliasCreateOrSaveResponse = function onDomainAliasCreateOrSaveResponse(result, data) {
    this.saving(false);

    if (Common_Enums__WEBPACK_IMPORTED_MODULE_8__["StorageResultType"].Success === result && data) {
      if (data.Result) {
        Object(Helper_Apps_Admin__WEBPACK_IMPORTED_MODULE_13__[/* getApp */ "a"])().reloadDomainList();
        this.closeCommand();
      } else if (Common_Enums__WEBPACK_IMPORTED_MODULE_8__["Notification"].DomainAlreadyExists === data.ErrorCode) {
        this.savingError(Object(Common_Translator__WEBPACK_IMPORTED_MODULE_10__["i18n"])('ERRORS/DOMAIN_ALREADY_EXISTS'));
      }
    } else {
      this.savingError(Object(Common_Translator__WEBPACK_IMPORTED_MODULE_10__["i18n"])('ERRORS/UNKNOWN_ERROR'));
    }
  };

  _proto.onShow = function onShow() {
    this.clearForm();
  };

  _proto.onShowWithDelay = function onShowWithDelay() {
    if ('' === this.name() && !Common_Globals__WEBPACK_IMPORTED_MODULE_9__["bMobileDevice"]) {
      this.name.focused(true);
    }
  };

  _proto.clearForm = function clearForm() {
    this.saving(false);
    this.savingError('');
    this.name('');
    this.name.focused(false);
    this.alias('');
  };

  return DomainAliasPopupView;
}(Knoin_AbstractViewNext__WEBPACK_IMPORTED_MODULE_15__[/* AbstractViewNext */ "a"]), (Object(_babel_runtime_corejs3_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_class2.prototype, "createCommand", [_dec2], _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(_class2.prototype, "createCommand"), _class2.prototype)), _class2)) || _class);


/***/ }),
/* 563 */
/*!**********************************!*\
  !*** ./dev/View/Popup/Plugin.js ***!
  \**********************************/
/*! exports provided: PluginPopupView, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginPopupView", function() { return PluginPopupView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PluginPopupView; });
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/assertThisInitialized */ 29);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/inheritsLoose */ 10);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/applyDecoratedDescriptor */ 19);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ 17);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ 20);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ 48);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! _ */ 3);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ko__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ko */ 1);
/* harmony import */ var key__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! key */ 21);
/* harmony import */ var key__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(key__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var Common_Enums__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Common/Enums */ 0);
/* harmony import */ var Common_Utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Common/Utils */ 2);
/* harmony import */ var Common_Translator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Common/Translator */ 9);
/* harmony import */ var Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Remote/Admin/Ajax */ 18);
/* harmony import */ var Knoin_Knoin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Knoin/Knoin */ 8);
/* harmony import */ var Knoin_AbstractViewNext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! Knoin/AbstractViewNext */ 25);




var _dec, _dec2, _class, _class2;













var PluginPopupView = (_dec = Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_13__["popup"])({
  name: 'View/Popup/Plugin',
  templateID: 'PopupsPlugin'
}), _dec2 = Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_13__["command"])(function (self) {
  return self.hasConfiguration();
}), _dec(_class = (_class2 = /*#__PURE__*/function (_AbstractViewNext) {
  Object(_babel_runtime_corejs3_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(PluginPopupView, _AbstractViewNext);

  function PluginPopupView() {
    var _this;

    _this = _AbstractViewNext.call(this) || this;
    _this.onPluginSettingsUpdateResponse = ___WEBPACK_IMPORTED_MODULE_6___default.a.bind(_this.onPluginSettingsUpdateResponse, Object(_babel_runtime_corejs3_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this));
    _this.saveError = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable('');
    _this.name = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable('');
    _this.readme = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable('');
    _this.configures = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observableArray([]);
    _this.hasReadme = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].computed(function () {
      return '' !== _this.readme();
    });
    _this.hasConfiguration = ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].computed(function () {
      return 0 < _this.configures().length;
    });
    _this.readmePopoverConf = {
      'placement': 'right',
      'trigger': 'hover',
      'title': Object(Common_Translator__WEBPACK_IMPORTED_MODULE_11__["i18n"])('POPUPS_PLUGIN/TOOLTIP_ABOUT_TITLE'),
      'container': 'body',
      'html': true,
      'content': function content() {
        return "<pre>" + _this.readme() + "</pre>";
      }
    };
    _this.bDisabeCloseOnEsc = true;
    _this.sDefaultKeyScope = Common_Enums__WEBPACK_IMPORTED_MODULE_9__["KeyState"].All;
    _this.tryToClosePopup = ___WEBPACK_IMPORTED_MODULE_6___default.a.debounce(___WEBPACK_IMPORTED_MODULE_6___default.a.bind(_this.tryToClosePopup, Object(_babel_runtime_corejs3_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this)), Common_Enums__WEBPACK_IMPORTED_MODULE_9__["Magics"].Time200ms);
    return _this;
  }

  var _proto = PluginPopupView.prototype;

  _proto.saveCommand = function saveCommand() {
    var list = {};
    list.Name = this.name();

    ___WEBPACK_IMPORTED_MODULE_6___default.a.each(this.configures(), function (oItem) {
      var value = oItem.value();

      if (false === value || true === value) {
        value = value ? '1' : '0';
      }

      list['_' + oItem.Name] = value;
    });

    this.saveError('');
    Remote_Admin_Ajax__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].pluginSettingsUpdate(this.onPluginSettingsUpdateResponse, list);
  };

  _proto.onPluginSettingsUpdateResponse = function onPluginSettingsUpdateResponse(result, data) {
    if (Common_Enums__WEBPACK_IMPORTED_MODULE_9__["StorageResultType"].Success === result && data && data.Result) {
      this.cancelCommand();
    } else {
      this.saveError('');

      if (data && data.ErrorCode) {
        this.saveError(Object(Common_Translator__WEBPACK_IMPORTED_MODULE_11__["getNotification"])(data.ErrorCode));
      } else {
        this.saveError(Object(Common_Translator__WEBPACK_IMPORTED_MODULE_11__["getNotification"])(Common_Enums__WEBPACK_IMPORTED_MODULE_9__["Notification"].CantSavePluginSettings));
      }
    }
  };

  _proto.onShow = function onShow(oPlugin) {
    this.name();
    this.readme();
    this.configures([]);

    if (oPlugin) {
      this.name(oPlugin.Name);
      this.readme(oPlugin.Readme);
      var config = oPlugin.Config;

      if (Object(Common_Utils__WEBPACK_IMPORTED_MODULE_10__["isNonEmptyArray"])(config)) {
        this.configures(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(___WEBPACK_IMPORTED_MODULE_6___default.a).call(___WEBPACK_IMPORTED_MODULE_6___default.a, config, function (item) {
          return {
            'value': ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(item[0]),
            'placeholder': ko__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].observable(item[6]),
            'Name': item[1],
            'Type': item[2],
            'Label': item[3],
            'Default': item[4],
            'Desc': item[5]
          };
        }));
      }
    }
  };

  _proto.tryToClosePopup = function tryToClosePopup() {
    var _this2 = this;

    var PopupsAskViewModel = __webpack_require__(/*! View/Popup/Ask */ 238);

    if (!Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_13__["isPopupVisible"])(PopupsAskViewModel)) {
      Object(Knoin_Knoin__WEBPACK_IMPORTED_MODULE_13__["showScreenPopup"])(PopupsAskViewModel, [Object(Common_Translator__WEBPACK_IMPORTED_MODULE_11__["i18n"])('POPUPS_ASK/DESC_WANT_CLOSE_THIS_WINDOW'), function () {
        if (_this2.modalVisibility()) {
          Object(Common_Utils__WEBPACK_IMPORTED_MODULE_10__["delegateRun"])(_this2, 'cancelCommand');
        }
      }]);
    }
  };

  _proto.onBuild = function onBuild() {
    var _this3 = this;

    key__WEBPACK_IMPORTED_MODULE_8___default()('esc', Common_Enums__WEBPACK_IMPORTED_MODULE_9__["KeyState"].All, function () {
      if (_this3.modalVisibility()) {
        _this3.tryToClosePopup();
      }

      return false;
    });
  };

  return PluginPopupView;
}(Knoin_AbstractViewNext__WEBPACK_IMPORTED_MODULE_14__[/* AbstractViewNext */ "a"]), (Object(_babel_runtime_corejs3_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_class2.prototype, "saveCommand", [_dec2], _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(_class2.prototype, "saveCommand"), _class2.prototype)), _class2)) || _class);


/***/ })
/******/ ]);