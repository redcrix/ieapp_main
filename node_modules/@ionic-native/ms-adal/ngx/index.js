var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordovaInstance, instancePropertyGet, instancePropertySet, checkAvailability } from '@ionic-native/core';
var MSAdal = /** @class */ (function (_super) {
    __extends(MSAdal, _super);
    function MSAdal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MSAdal.prototype.createAuthenticationContext = function (authority, validateAuthority) {
        if (validateAuthority === void 0) { validateAuthority = true; }
        var authContext;
        if (checkAvailability(MSAdal.getPluginRef(), null, MSAdal.getPluginName()) ===
            true) {
            authContext = new (MSAdal.getPlugin()).AuthenticationContext(authority, validateAuthority);
        }
        return new AuthenticationContext(authContext);
    };
    MSAdal.pluginName = "MSADAL";
    MSAdal.plugin = "cordova-plugin-ms-adal";
    MSAdal.pluginRef = "Microsoft.ADAL";
    MSAdal.repo = "https://github.com/AzureAD/azure-activedirectory-library-for-cordova";
    MSAdal.platforms = ["Android", "iOS", "Windows"];
    MSAdal = __decorate([
        Injectable()
    ], MSAdal);
    return MSAdal;
}(IonicNativePlugin));
export { MSAdal };
var AuthenticationContext = /** @class */ (function () {
    function AuthenticationContext(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    AuthenticationContext.prototype.acquireTokenAsync = function (resourceUrl, clientId, redirectUrl, userId, extraQueryParameters) { return cordovaInstance(this, "acquireTokenAsync", { "otherPromise": true }, arguments); };
    AuthenticationContext.prototype.acquireTokenSilentAsync = function (resourceUrl, clientId, userId) { return cordovaInstance(this, "acquireTokenSilentAsync", { "otherPromise": true }, arguments); };
    Object.defineProperty(AuthenticationContext.prototype, "authority", {
        get: function () { return instancePropertyGet(this, "authority"); },
        set: function (value) { instancePropertySet(this, "authority", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationContext.prototype, "validateAuthority", {
        get: function () { return instancePropertyGet(this, "validateAuthority"); },
        set: function (value) { instancePropertySet(this, "validateAuthority", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationContext.prototype, "tokenCache", {
        get: function () { return instancePropertyGet(this, "tokenCache"); },
        set: function (value) { instancePropertySet(this, "tokenCache", value); },
        enumerable: true,
        configurable: true
    });
    return AuthenticationContext;
}());
export { AuthenticationContext };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21zLWFkYWwvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sZ0ZBQWdFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBK0Z6RiwwQkFBaUI7Ozs7SUFFM0MsNENBQTJCLEdBQTNCLFVBQTRCLFNBQWlCLEVBQUUsaUJBQXdCO1FBQXhCLGtDQUFBLEVBQUEsd0JBQXdCO1FBQ3JFLElBQUksV0FBZ0IsQ0FBQztRQUNyQixJQUNFLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3RFLElBQUksRUFDSjtZQUNBLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMscUJBQXFCLENBQzFELFNBQVMsRUFDVCxpQkFBaUIsQ0FDbEIsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7OztJQWRVLE1BQU07UUFEbEIsVUFBVSxFQUFFO09BQ0EsTUFBTTtpQkFoR25CO0VBZ0c0QixpQkFBaUI7U0FBaEMsTUFBTTs7SUErQmpCLCtCQUFvQixlQUFvQjtRQUFwQixvQkFBZSxHQUFmLGVBQWUsQ0FBSztJQUN4QyxDQUFDO0lBaUJELGlEQUFpQixhQUFDLFdBQW1CLEVBQUUsUUFBZ0IsRUFBRSxXQUFtQixFQUFFLE1BQWUsRUFBRSxvQkFBMEI7SUFpQnpILHVEQUF1QixhQUFDLFdBQW1CLEVBQUUsUUFBZ0IsRUFBRSxNQUFlOzBCQTNDOUUsNENBQVM7Ozs7OzswQkFHVCxvREFBaUI7Ozs7OzswQkFHakIsNkNBQVU7Ozs7OztnQ0E3SFoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4sIGNoZWNrQXZhaWxhYmlsaXR5IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBdXRoZW50aWNhdGlvblJlc3VsdCB7XG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG4gIGFjY2Vzc1Rva2VuVHlwZTogc3RyaW5nO1xuICBleHBpcmVzT246IERhdGU7XG4gIGlkVG9rZW46IHN0cmluZztcbiAgaXNNdWx0aXBsZVJlc291cmNlUmVmcmVzaFRva2VuOiBib29sZWFuO1xuICBzdGF0dXM6IHN0cmluZztcbiAgc3RhdHVzQ29kZTogbnVtYmVyO1xuICB0ZW5hbnRJZDogc3RyaW5nO1xuICB1c2VySW5mbzogVXNlckluZm87XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYXV0aG9yaXphdGlvbiBoZWFkZXIgZm9yIHdlYiByZXF1ZXN0cy5cbiAgICogQHJldHVybnMge1N0cmluZ30gVGhlIGF1dGhvcml6YXRpb24gaGVhZGVyLlxuICAgKi9cbiAgY3JlYXRlQXV0aG9yaXphdGlvbkhlYWRlcigpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5DYWNoZSB7XG4gIGNsZWFyKCk6IHZvaWQ7XG5cbiAgcmVhZEl0ZW1zKCk6IFByb21pc2U8VG9rZW5DYWNoZUl0ZW1bXT47XG5cbiAgZGVsZXRlSXRlbShpdGVtOiBUb2tlbkNhY2hlSXRlbSk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5DYWNoZUl0ZW0ge1xuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuICBhdXRob3JpdHk6IHN0cmluZztcbiAgY2xpZW50SWQ6IHN0cmluZztcbiAgZGlzcGxheWFibGVJZDogc3RyaW5nO1xuICBleHBpcmVzT246IERhdGU7XG4gIGlzTXVsdGlwbGVSZXNvdXJjZVJlZnJlc2hUb2tlbjogYm9vbGVhbjtcbiAgcmVzb3VyY2U6IHN0cmluZztcbiAgdGVuYW50SWQ6IHN0cmluZztcbiAgdXNlckluZm86IFVzZXJJbmZvO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJJbmZvIHtcbiAgZGlzcGxheWFibGVJZDogc3RyaW5nO1xuICB1c2VySWQ6IHN0cmluZztcbiAgZmFtaWx5TmFtZTogc3RyaW5nO1xuICBnaXZlbk5hbWU6IHN0cmluZztcbiAgaWRlbnRpdHlQcm92aWRlcjogc3RyaW5nO1xuICBwYXNzd29yZENoYW5nZVVybDogc3RyaW5nO1xuICBwYXNzd29yZEV4cGlyZXNPbjogRGF0ZTtcbiAgdW5pcXVlSWQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBNUyBBREFMXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFjdGl2ZSBEaXJlY3RvcnkgQXV0aGVudGljYXRpb24gTGlicmFyeSAoQURBTCkgcGx1Z2luLlxuICogQWN0aXZlIERpcmVjdG9yeSBBdXRoZW50aWNhdGlvbiBMaWJyYXJ5IChbQURBTF0oaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvZG90bmV0L2FwaS9taWNyb3NvZnQuaWRlbnRpdHltb2RlbC5jbGllbnRzLmFjdGl2ZWRpcmVjdG9yeT92aWV3PWF6dXJlLWRvdG5ldCkpXG4gKiBwbHVnaW4gcHJvdmlkZXMgZWFzeSB0byB1c2UgYXV0aGVudGljYXRpb24gZnVuY3Rpb25hbGl0eSBmb3IgeW91ciBBcGFjaGUgQ29yZG92YSBhcHBzIGJ5IHRha2luZyBhZHZhbnRhZ2Ugb2ZcbiAqIFdpbmRvd3MgU2VydmVyIEFjdGl2ZSBEaXJlY3RvcnkgYW5kIFdpbmRvd3MgQXp1cmUgQWN0aXZlIERpcmVjdG9yeS4gSGVyZSB5b3UgY2FuIGZpbmQgdGhlIHNvdXJjZSBjb2RlIGZvciB0aGUgbGlicmFyeS5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTVNBZGFsLCBBdXRoZW50aWNhdGlvbkNvbnRleHQsIEF1dGhlbnRpY2F0aW9uUmVzdWx0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9tcy1hZGFsL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbXNBZGFsOiBNU0FkYWwpIHt9XG4gKlxuICogLi4uXG4gKlxuICogbGV0IGF1dGhDb250ZXh0OiBBdXRoZW50aWNhdGlvbkNvbnRleHQgPSB0aGlzLm1zQWRhbC5jcmVhdGVBdXRoZW50aWNhdGlvbkNvbnRleHQoJ2h0dHBzOi8vbG9naW4ud2luZG93cy5uZXQvY29tbW9uJyk7XG4gKlxuICogYXV0aENvbnRleHQuYWNxdWlyZVRva2VuQXN5bmMoJ2h0dHBzOi8vZ3JhcGgud2luZG93cy5uZXQnLCAnYTVkOTI0OTMtYWU1YS00YTlmLWJjYmYtOWYxZDM1NDA2N2QzJywgJ2h0dHA6Ly9NeURpcmVjdG9yeVNlYXJjaGVyQXBwJylcbiAqICAgLnRoZW4oKGF1dGhSZXNwb25zZTogQXV0aGVudGljYXRpb25SZXN1bHQpID0+IHtcbiAqICAgICBjb25zb2xlLmxvZygnVG9rZW4gaXMnICwgYXV0aFJlc3BvbnNlLmFjY2Vzc1Rva2VuKTtcbiAqICAgICBjb25zb2xlLmxvZygnVG9rZW4gd2lsbCBleHBpcmUgb24nLCBhdXRoUmVzcG9uc2UuZXhwaXJlc09uKTtcbiAqICAgfSlcbiAqICAgLmNhdGNoKChlOiBhbnkpID0+IGNvbnNvbGUubG9nKCdBdXRoZW50aWNhdGlvbiBmYWlsZWQnLCBlKSk7XG4gKlxuICpcbiAqIGBgYFxuICpcbiAqIEBjbGFzc2VzXG4gKiBBdXRoZW50aWNhdGlvbkNvbnRleHRcbiAqIEBpbnRlcmZhY2VzXG4gKiBBdXRoZW50aWNhdGlvblJlc3VsdFxuICogVG9rZW5DYWNoZVxuICogVG9rZW5DYWNoZUl0ZW1cbiAqIFVzZXJJbmZvXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTVNBREFMJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbXMtYWRhbCcsXG4gIHBsdWdpblJlZjogJ01pY3Jvc29mdC5BREFMJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9BenVyZUFEL2F6dXJlLWFjdGl2ZWRpcmVjdG9yeS1saWJyYXJ5LWZvci1jb3Jkb3ZhJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNU0FkYWwgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgY3JlYXRlQXV0aGVudGljYXRpb25Db250ZXh0KGF1dGhvcml0eTogc3RyaW5nLCB2YWxpZGF0ZUF1dGhvcml0eSA9IHRydWUpIHtcbiAgICBsZXQgYXV0aENvbnRleHQ6IGFueTtcbiAgICBpZiAoXG4gICAgICBjaGVja0F2YWlsYWJpbGl0eShNU0FkYWwuZ2V0UGx1Z2luUmVmKCksIG51bGwsIE1TQWRhbC5nZXRQbHVnaW5OYW1lKCkpID09PVxuICAgICAgdHJ1ZVxuICAgICkge1xuICAgICAgYXV0aENvbnRleHQgPSBuZXcgKE1TQWRhbC5nZXRQbHVnaW4oKSkuQXV0aGVudGljYXRpb25Db250ZXh0KFxuICAgICAgICBhdXRob3JpdHksXG4gICAgICAgIHZhbGlkYXRlQXV0aG9yaXR5XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEF1dGhlbnRpY2F0aW9uQ29udGV4dChhdXRoQ29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkNvbnRleHQge1xuXG4gIEBJbnN0YW5jZVByb3BlcnR5KClcbiAgYXV0aG9yaXR5OiBzdHJpbmc7XG5cbiAgQEluc3RhbmNlUHJvcGVydHkoKVxuICB2YWxpZGF0ZUF1dGhvcml0eTogYm9vbGVhbjtcblxuICBASW5zdGFuY2VQcm9wZXJ0eSgpXG4gIHRva2VuQ2FjaGU6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XG4gIH1cblxuICAvKipcbiAgICogQWNxdWlyZXMgdG9rZW4gdXNpbmcgaW50ZXJhY3RpdmUgZmxvdy4gSXQgYWx3YXlzIHNob3dzIFVJIGFuZCBza2lwcyB0b2tlbiBmcm9tIGNhY2hlLlxuICAgKlxuICAgKiBAcGFyYW0gICB7U3RyaW5nfSAgcmVzb3VyY2VVcmwgUmVzb3VyY2UgaWRlbnRpZmllclxuICAgKiBAcGFyYW0gICB7U3RyaW5nfSAgY2xpZW50SWQgICAgQ2xpZW50IChhcHBsaWNhdGlvbikgaWRlbnRpZmllclxuICAgKiBAcGFyYW0gICB7U3RyaW5nfSAgcmVkaXJlY3RVcmwgUmVkaXJlY3QgdXJsIGZvciB0aGlzIGFwcGxpY2F0aW9uXG4gICAqIEBwYXJhbSAgIHtTdHJpbmd9ICB1c2VySWQgICAgICBVc2VyIGlkZW50aWZpZXIgKG9wdGlvbmFsKVxuICAgKiBAcGFyYW0gICB7U3RyaW5nfSAgZXh0cmFRdWVyeVBhcmFtZXRlcnNcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4dHJhIHF1ZXJ5IHBhcmFtZXRlcnMgKG9wdGlvbmFsKVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFyYW1ldGVycyBzaG91bGQgYmUgZXNjYXBlZCBiZWZvcmUgcGFzc2luZyB0byB0aGlzIG1ldGhvZCAoZS5nLiB1c2luZyAnZW5jb2RlVVJJKCknKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSBlaXRoZXIgZnVsZmlsbGVkIHdpdGggQXV0aGVudGljYXRpb25SZXN1bHQgb2JqZWN0IG9yIHJlamVjdGVkIHdpdGggZXJyb3JcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIG90aGVyUHJvbWlzZTogdHJ1ZVxuICB9KVxuICBhY3F1aXJlVG9rZW5Bc3luYyhyZXNvdXJjZVVybDogc3RyaW5nLCBjbGllbnRJZDogc3RyaW5nLCByZWRpcmVjdFVybDogc3RyaW5nLCB1c2VySWQ/OiBzdHJpbmcsIGV4dHJhUXVlcnlQYXJhbWV0ZXJzPzogYW55KTogUHJvbWlzZTxBdXRoZW50aWNhdGlvblJlc3VsdD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3F1aXJlcyB0b2tlbiBXSVRIT1VUIHVzaW5nIGludGVyYWN0aXZlIGZsb3cuIEl0IGNoZWNrcyB0aGUgY2FjaGUgdG8gcmV0dXJuIGV4aXN0aW5nIHJlc3VsdFxuICAgKiBpZiBub3QgZXhwaXJlZC4gSXQgdHJpZXMgdG8gdXNlIHJlZnJlc2ggdG9rZW4gaWYgYXZhaWxhYmxlLiBJZiBpdCBmYWlscyB0byBnZXQgdG9rZW4gd2l0aG91dFxuICAgKiBkaXNwbGF5aW5nIFVJIGl0IHdpbGwgZmFpbC4gVGhpcyBtZXRob2QgZ3VhcmFudGVlcyB0aGF0IG5vIFVJIHdpbGwgYmUgc2hvd24gdG8gdXNlci5cbiAgICpcbiAgICogQHBhcmFtICAge1N0cmluZ30gIHJlc291cmNlVXJsIFJlc291cmNlIGlkZW50aWZpZXJcbiAgICogQHBhcmFtICAge1N0cmluZ30gIGNsaWVudElkICAgIENsaWVudCAoYXBwbGljYXRpb24pIGlkZW50aWZpZXJcbiAgICogQHBhcmFtICAge1N0cmluZ30gIHVzZXJJZCAgICAgIFVzZXIgaWRlbnRpZmllciAob3B0aW9uYWwpXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGVpdGhlciBmdWxmaWxsZWQgd2l0aCBBdXRoZW50aWNhdGlvblJlc3VsdCBvYmplY3Qgb3IgcmVqZWN0ZWQgd2l0aCBlcnJvclxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgb3RoZXJQcm9taXNlOiB0cnVlXG4gIH0pXG4gIGFjcXVpcmVUb2tlblNpbGVudEFzeW5jKHJlc291cmNlVXJsOiBzdHJpbmcsIGNsaWVudElkOiBzdHJpbmcsIHVzZXJJZD86IHN0cmluZyk6IFByb21pc2U8QXV0aGVudGljYXRpb25SZXN1bHQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19