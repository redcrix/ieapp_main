cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js",
        "id": "cordova-plugin-statusbar.StatusBarProxy",
        "pluginId": "cordova-plugin-statusbar",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
        "id": "cordova-plugin-ionic-webview.IonicWebView",
        "pluginId": "cordova-plugin-ionic-webview",
        "clobbers": [
            "Ionic.WebView"
        ]
    },
    {
        "file": "plugins/cordova-plugin-ms-adal/www/utility.js",
        "id": "cordova-plugin-ms-adal.utility",
        "pluginId": "cordova-plugin-ms-adal",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-ms-adal/www/AuthenticationContext.js",
        "id": "cordova-plugin-ms-adal.AuthenticationContext",
        "pluginId": "cordova-plugin-ms-adal",
        "clobbers": [
            "Microsoft.ADAL.AuthenticationContext"
        ]
    },
    {
        "file": "plugins/cordova-plugin-ms-adal/www/CordovaBridge.js",
        "id": "cordova-plugin-ms-adal.CordovaBridge",
        "pluginId": "cordova-plugin-ms-adal"
    },
    {
        "file": "plugins/cordova-plugin-ms-adal/www/AuthenticationResult.js",
        "id": "cordova-plugin-ms-adal.AuthenticationResult",
        "pluginId": "cordova-plugin-ms-adal"
    },
    {
        "file": "plugins/cordova-plugin-ms-adal/www/TokenCache.js",
        "id": "cordova-plugin-ms-adal.TokenCache",
        "pluginId": "cordova-plugin-ms-adal"
    },
    {
        "file": "plugins/cordova-plugin-ms-adal/www/TokenCacheItem.js",
        "id": "cordova-plugin-ms-adal.TokenCacheItem",
        "pluginId": "cordova-plugin-ms-adal"
    },
    {
        "file": "plugins/cordova-plugin-ms-adal/www/UserInfo.js",
        "id": "cordova-plugin-ms-adal.UserInfo",
        "pluginId": "cordova-plugin-ms-adal"
    },
    {
        "file": "plugins/cordova-plugin-ms-adal/www/LogItem.js",
        "id": "cordova-plugin-ms-adal.LogItem",
        "pluginId": "cordova-plugin-ms-adal"
    },
    {
        "file": "plugins/cordova-plugin-ms-adal/www/AuthenticationSettings.js",
        "id": "cordova-plugin-ms-adal.AuthenticationSettings",
        "pluginId": "cordova-plugin-ms-adal",
        "clobbers": [
            "Microsoft.ADAL.AuthenticationSettings"
        ]
    },
    {
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "pluginId": "cordova-sqlite-storage",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-telerik-imagepicker/www/imagepicker.js",
        "id": "cordova-plugin-telerik-imagepicker.ImagePicker",
        "pluginId": "cordova-plugin-telerik-imagepicker",
        "clobbers": [
            "plugins.imagePicker"
        ]
    },
    {
        "file": "plugins/cordova-plugin-crop/www/crop.js",
        "id": "cordova-plugin-crop.CropPlugin",
        "pluginId": "cordova-plugin-crop",
        "clobbers": [
            "plugins.crop"
        ]
    },
    {
        "file": "plugins/com-badrit-base64/www/Base64.js",
        "id": "com-badrit-base64.Base64",
        "pluginId": "com-badrit-base64",
        "clobbers": [
            "navigator.Base64"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
        "id": "cordova-plugin-file.DirectoryEntry",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.DirectoryEntry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
        "id": "cordova-plugin-file.DirectoryReader",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.DirectoryReader"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Entry.js",
        "id": "cordova-plugin-file.Entry",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Entry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/File.js",
        "id": "cordova-plugin-file.File",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.File"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileEntry.js",
        "id": "cordova-plugin-file.FileEntry",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileEntry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileError.js",
        "id": "cordova-plugin-file.FileError",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileReader.js",
        "id": "cordova-plugin-file.FileReader",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileReader"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileSystem.js",
        "id": "cordova-plugin-file.FileSystem",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
        "id": "cordova-plugin-file.FileUploadOptions",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileUploadOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
        "id": "cordova-plugin-file.FileUploadResult",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileUploadResult"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileWriter.js",
        "id": "cordova-plugin-file.FileWriter",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileWriter"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Flags.js",
        "id": "cordova-plugin-file.Flags",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Flags"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
        "id": "cordova-plugin-file.LocalFileSystem",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.LocalFileSystem"
        ],
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Metadata.js",
        "id": "cordova-plugin-file.Metadata",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Metadata"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
        "id": "cordova-plugin-file.ProgressEvent",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.ProgressEvent"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/fileSystems.js",
        "id": "cordova-plugin-file.fileSystems",
        "pluginId": "cordova-plugin-file"
    },
    {
        "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
        "id": "cordova-plugin-file.requestFileSystem",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.requestFileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
        "id": "cordova-plugin-file.resolveLocalFileSystemURI",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
        "id": "cordova-plugin-file.isChrome",
        "pluginId": "cordova-plugin-file",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/browser/Preparing.js",
        "id": "cordova-plugin-file.Preparing",
        "pluginId": "cordova-plugin-file",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/src/browser/FileProxy.js",
        "id": "cordova-plugin-file.browserFileProxy",
        "pluginId": "cordova-plugin-file",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
        "id": "cordova-plugin-file.fileSystemPaths",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "cordova"
        ],
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/browser/FileSystem.js",
        "id": "cordova-plugin-file.firefoxFileSystem",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "window.FileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-globalization/www/GlobalizationError.js",
        "id": "cordova-plugin-globalization.GlobalizationError",
        "pluginId": "cordova-plugin-globalization",
        "clobbers": [
            "window.GlobalizationError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-globalization/www/globalization.js",
        "id": "cordova-plugin-globalization.globalization",
        "pluginId": "cordova-plugin-globalization",
        "clobbers": [
            "navigator.globalization"
        ]
    },
    {
        "file": "plugins/cordova-plugin-globalization/www/browser/moment.js",
        "id": "cordova-plugin-globalization.moment",
        "pluginId": "cordova-plugin-globalization",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-globalization/src/browser/GlobalizationProxy.js",
        "id": "cordova-plugin-globalization.GlobalizationProxy",
        "pluginId": "cordova-plugin-globalization",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file-transfer/www/FileTransferError.js",
        "id": "cordova-plugin-file-transfer.FileTransferError",
        "pluginId": "cordova-plugin-file-transfer",
        "clobbers": [
            "window.FileTransferError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file-transfer/www/FileTransfer.js",
        "id": "cordova-plugin-file-transfer.FileTransfer",
        "pluginId": "cordova-plugin-file-transfer",
        "clobbers": [
            "window.FileTransfer"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file-transfer/www/browser/FileTransfer.js",
        "id": "cordova-plugin-file-transfer.BrowserFileTransfer",
        "pluginId": "cordova-plugin-file-transfer",
        "clobbers": [
            "window.FileTransfer"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/src/browser/InAppBrowserProxy.js",
        "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
        "pluginId": "cordova-plugin-inappbrowser",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-appavailability/www/AppAvailability.js",
        "id": "cordova-plugin-appavailability.AppAvailability",
        "pluginId": "cordova-plugin-appavailability",
        "clobbers": [
            "appAvailability"
        ]
    },
    {
        "file": "plugins/cordova-plugin-youtube-video-player/plugins/com.bunkerpalace.cordova.YoutubeVideoPlayer/www/YoutubeVideoPlayer.js",
        "id": "cordova-plugin-youtube-video-player.YoutubeVideoPlayer",
        "pluginId": "cordova-plugin-youtube-video-player",
        "clobbers": [
            "YoutubeVideoPlayer"
        ]
    },
    {
        "file": "plugins/cordova-plugin-email-composer/www/email_composer.js",
        "id": "cordova-plugin-email-composer.EmailComposer",
        "pluginId": "cordova-plugin-email-composer",
        "clobbers": [
            "cordova.plugins.email"
        ]
    },
    {
        "file": "plugins/cordova-plugin-email-composer/src/browser/EmailComposerProxy.js",
        "id": "cordova-plugin-email-composer.EmailComposerProxy",
        "pluginId": "cordova-plugin-email-composer",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "id": "cordova-plugin-camera.Camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "id": "cordova-plugin-camera.camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/src/browser/CameraProxy.js",
        "id": "cordova-plugin-camera.CameraProxy",
        "pluginId": "cordova-plugin-camera",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-nativegeocoder/www/NativeGeocoder.js",
        "id": "cordova-plugin-nativegeocoder.NativeGeocoder",
        "pluginId": "cordova-plugin-nativegeocoder",
        "clobbers": [
            "nativegeocoder"
        ]
    },
    {
        "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/common.js",
        "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.Common",
        "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
        "clobbers": [
            "launchnavigator"
        ]
    },
    {
        "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/localforage.v1.5.0.min.js",
        "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.LocalForage",
        "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
        "clobbers": [
            "localforage"
        ]
    },
    {
        "file": "plugins/call-number/www/CallNumber.js",
        "id": "call-number.CallNumber",
        "pluginId": "call-number",
        "clobbers": [
            "call"
        ]
    },
    {
        "file": "plugins/cordova-plugin-calendar/www/Calendar.js",
        "id": "cordova-plugin-calendar.Calendar",
        "pluginId": "cordova-plugin-calendar",
        "clobbers": [
            "Calendar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/cookie-handler.js",
        "id": "cordova-plugin-advanced-http.cookie-handler",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/global-configs.js",
        "id": "cordova-plugin-advanced-http.global-configs",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/helpers.js",
        "id": "cordova-plugin-advanced-http.helpers",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/js-util.js",
        "id": "cordova-plugin-advanced-http.js-util",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/local-storage-store.js",
        "id": "cordova-plugin-advanced-http.local-storage-store",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/lodash.js",
        "id": "cordova-plugin-advanced-http.lodash",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/messages.js",
        "id": "cordova-plugin-advanced-http.messages",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/public-interface.js",
        "id": "cordova-plugin-advanced-http.public-interface",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/umd-tough-cookie.js",
        "id": "cordova-plugin-advanced-http.tough-cookie",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/url-util.js",
        "id": "cordova-plugin-advanced-http.url-util",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/advanced-http.js",
        "id": "cordova-plugin-advanced-http.http",
        "pluginId": "cordova-plugin-advanced-http",
        "clobbers": [
            "cordova.plugin.http"
        ]
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/src/browser/cordova-http-plugin.js",
        "id": "cordova-plugin-advanced-http.http-proxy",
        "pluginId": "cordova-plugin-advanced-http",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-splashscreen": "5.0.3",
    "cordova-plugin-ionic-webview": "4.1.1",
    "cordova-plugin-ionic-keyboard": "2.1.3",
    "cordova-plugin-compat": "1.2.0",
    "cordova-plugin-ms-adal": "0.10.1",
    "cordova-sqlite-storage": "3.3.0",
    "cordova-plugin-telerik-imagepicker": "2.3.3",
    "cordova-plugin-crop": "0.3.1",
    "cordova-plugin-datepicker": "0.9.3",
    "com-badrit-base64": "0.2.0",
    "cordova-plugin-file": "6.0.2",
    "cordova-plugin-globalization": "1.11.0",
    "cordova-plugin-file-transfer": "1.7.1",
    "cordova-plugin-inappbrowser": "3.1.0",
    "cordova-plugin-appavailability": "0.4.2",
    "cordova-plugin-youtube-video-player": "2.3.0",
    "cordova-plugin-email-composer": "0.9.2",
    "cordova-plugin-camera": "4.1.0",
    "cordova-plugin-nativegeocoder": "3.2.2",
    "uk.co.workingedge.phonegap.plugin.launchnavigator": "5.0.4",
    "cordova-plugin-geolocation": "4.0.2",
    "call-number": "0.0.2",
    "cordova-plugin-calendar": "5.1.4",
    "cordova-plugin-advanced-http": "2.1.1"
}
// BOTTOM OF METADATA
});