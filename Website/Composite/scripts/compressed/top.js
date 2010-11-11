var IAcceptable=new function(){
this.dragAccept="type1 type2 type3";
this.accept=function(_1){
};
};
var IActionListener=new function(){
this.handleAction=function(_2){
};
};
var IActivatable=new function(){
this.isActivatable=true;
this.activate=function(){
};
this.deActivate=function(){
};
};
var IActivationAware=new function(){
this.isActivationAware=true;
this.isActivated=false;
this.onActivate=function(){
};
this.onDeactivate=function(){
};
};
var IBroadcastListener=new function(){
this.handleBroadcast=function(_3,_4){
};
};
var ICrawlerHandler=new function(){
this.handleCrawler=function(_5){
};
};
var IData=new function(){
this.isFocusable=true;
this.validate=function(){
};
this.manifest=function(){
};
this.dirty=function(){
};
this.clean=function(){
};
this.focus=function(){
};
this.blur=function(){
};
this.getName=function(){
};
this.getValue=function(){
};
this.setValue=function(_6){
};
this.getResult=function(){
};
this.setResult=function(_7){
};
};
var IDialogResponseHandler=new function(){
this.handleDialogResponse=function(){
response,result;
};
};
var IDOMHandler=new function(){
this.fireOnDOM=function(){
};
};
var IDraggable=new function(){
this.dragType="type";
this.getImage=function(){
};
};
var IDragHandler=new function(){
this.onDragStart=function(_8){
};
this.onDrag=function(_9){
};
this.onDragStop=function(_a){
};
};
var IEditorControlBinding=new function(){
this.isEditorControlBinding=true;
};
var IEventListener=new function(){
this.handleEvent=function(e){
};
};
var IFit=new function(){
this.isFit=true;
this.fit=function(){
return true;
};
};
var IFlexible=new function(){
this.flex=function(){
};
};
var IFocusable=new function(){
this.isFocusable=true;
this.isFocused=false;
this.focus=function(){
this.dispatchAction(Binding.ACTION_FOCUSED);
};
this.blur=function(){
this.dispatchAction(Binding.ACTION_BLURRED);
};
};
var IImageProfile=new function(){
this.getDefaultImage=function(){
};
this.getHoverImage=function(){
};
this.getActiveImage=function(){
};
this.getDisabledImage=function(){
};
};
var IKeyEventHandler=new function(){
this.handleKeyEvent=function(){
};
};
var ILabel=new function(){
this.getLabel=function(){
};
this.getImage=function(){
};
this.getToolTip=function(){
};
};
var ILoadHandler=new function(){
this.fireOnLoad=function(){
};
};
var IMenuContainer=new function(){
this.isOpen=function(){
};
this.setOpenElement=function(_c){
};
};
var IResizeHandler=new function(){
this.fireOnResize=function(){
};
};
var ISourceEditorComponent=new function(){
this.initializeSourceEditorComponent=function(_d,_e,_f){
};
};
var IUpdateHandler=new function(){
this.handleElement=function(_10,_11){
};
this.updateElement=function(_12,_13){
};
};
var IWysiwygEditorComponent=new function(){
this.initializeComponent=function(_14,_15,_16,_17){
};
};
var IWysiwygEditorContentChangeHandler=new function(){
this.handleContentChange=function(){
};
};
var IWysiwygEditorNodeChangeHandler=new function(){
this.handleNodeChange=function(_18){
};
};
function List(arg){
this._index=0;
this._array=[];
this.isDisposed=false;
if(arg){
this.init(arg);
}
return this;
}
List.prototype.init=function(_1a){
var _1b=(_1a!==undefined&&_1a.splice!==undefined);
if(_1b){
this._array=_1a;
}else{
var i=0,_1d;
while((_1d=_1a[i++])!=null){
this._array.push(_1d);
}
}
this.reset();
};
List.prototype.add=function(_1e){
this._array.push(_1e);
return _1e;
};
List.prototype.addFirst=function(_1f){
this._array.unshift(_1f);
return _1f;
};
List.prototype.get=function(_20){
var _21=null;
if(this._array[_20]){
_21=this._array[_20];
}
return _21;
};
List.prototype.set=function(_22,_23){
this._array[_22]=_23;
};
List.prototype.del=function(_24){
this._array.splice(_24,1);
};
List.prototype.has=function(_25){
var _26=false;
var i=0,e;
while((e=this._array[i++])!==undefined){
if(e==_25){
_26=true;
break;
}
}
return _26;
};
List.prototype.getLength=function(){
return this._array.length;
};
List.prototype.hasEntries=function(){
return this.getLength()>0;
};
List.prototype.hasNext=function(){
var _29=false;
if(this._array!=null){
_29=this._index<this._array.length;
}else{
SystemLogger.getLogger("List").error("Mysterious List#hasNext exception in IE");
}
return _29;
};
List.prototype.getNext=function(){
var _2a=null;
if(this.hasNext()){
_2a=this._array[this._index++];
}
return _2a;
};
List.prototype.getFollowing=function(_2b){
var _2c=null;
var i=0,e=null;
while((e=this._array[i])!=null&&!_2c){
if(e==_2b&&this._array[i+1]){
_2c=this._array[i+1];
}
i++;
}
return _2c;
};
List.prototype.getPreceding=function(_2f){
var _30=null;
var i=1,e=null;
while((e=this._array[i])!=null&&!_30){
if(e==_2f&&this._array[i-1]){
_30=this._array[i-1];
}
i++;
}
return _30;
};
List.prototype.getIndex=function(_33){
var _34=-1;
if(this._array.indexOf!=null){
_34=this._array.indexOf(_33);
}else{
var _35=0;
this.each(function(e){
var res=true;
if(e==_33){
_34=_35;
res=false;
}
_35++;
return res;
});
}
return _34;
};
List.prototype.reset=function(){
this._index=0;
return this;
};
List.prototype.clear=function(){
this._array=[];
return this.reset();
};
List.prototype.each=function(_38,_39){
this.reset();
var _3a,is=true;
while(is!=false&&this.hasNext()){
if(_39===undefined){
_39=null;
}
var _3c=this._index;
var _3d=this.getNext();
is=_38.call(_39,_3d,_3c);
}
this.reset();
};
List.prototype.copy=function(){
return new List(this._array);
};
List.prototype.reverse=function(){
this._array.reverse();
return this;
};
List.prototype.extractFirst=function(){
return this._array.shift();
};
List.prototype.extractLast=function(){
return this._array.pop();
};
List.prototype.getFirst=function(){
return this.get(0);
};
List.prototype.getLast=function(){
return this.get(this.getLength()-1);
};
List.prototype.toString=function(){
return this._array.toString();
};
List.prototype.toArray=function(){
return this._array.concat([]);
};
List.prototype.merge=function(_3e){
_3e.reset();
while(_3e.hasNext()){
this.add(_3e.getNext());
}
return this;
};
List.prototype.dispose=function(){
var i=this._array.length-1;
while(i>=0){
this._array[i--]=null;
}
this._array=null;
this._index=null;
this._isDisposed=true;
};
function Map(map){
this._map={};
if(map!=null){
for(var key in map){
this.set(key,map[key]);
}
}
}
Map.prototype._map={};
Map.prototype.get=function(key){
var _43=null;
if(this.has(key)){
_43=this._map[key];
}else{
var cry="Map: Invalid key: "+key;
SystemLogger.getLogger("Map").error(cry);
SystemDebug.stack(arguments);
if(Application.isDeveloperMode){
alert(cry);
}
}
return _43;
};
Map.prototype.set=function(key,_46){
this._map[key]=_46;
};
Map.prototype.del=function(key){
delete this._map[key];
};
Map.prototype.has=function(key){
return typeof this._map[key]!="undefined";
};
Map.prototype.each=function(_49){
for(var key in this._map){
var _4b=_49(key,this._map[key]);
if(_4b==false){
break;
}
}
};
Map.prototype.hasEntries=function(){
var _4c=false;
for(var key in this._map){
_4c=true;
break;
}
return _4c;
};
Map.prototype.countEntries=function(){
var _4e=0;
for(var key in this._map){
_4e++;
}
return _4e;
};
Map.prototype.toList=function(_50){
var _51=new List();
for(var key in this._map){
_51.add(_50?key:this._map[key]);
}
return _51;
};
Map.prototype.copy=function(){
var map=new Map();
for(var key in this._map){
map.set(key,this._map[key]);
}
return map;
};
Map.prototype.inverse=function(){
var map=new Map();
for(var key in this._map){
map.set(this._map[key],key);
}
return map;
};
Map.prototype.empty=function(){
for(var key in this._map){
delete this._map[key];
}
};
Map.prototype.dispose=function(){
for(var key in this._map){
this._map[key]=null;
}
};
function _BroadcastMessages(){
}
_BroadcastMessages.prototype={APPLICATION_STARTUP:"application startup",APPLICATION_LOGIN:"application login",APPLICATION_LOGOUT:"application logout",APPLICATION_OPERATIONAL:"application operational",APPLICATION_ONSHUTDOWN:"application onshutdown",APPLICATION_SHUTDOWN:"application shutdown",APPLICATION_ERROR:"application error",APPLICATION_BLURRED:"application blurred",APPLICATION_FOCUSED:"application focused",APPLICATION_KICKSTART:"application kickstart",BESPIN_LOADED:"bespin loaded",MOUSEEVENT_MOUSEDOWN:"mouseevent mousedown",MOUSEEVENT_MOUSEUP:"mouseevent mouseup",MOUSEEVENT_MOUSEMOVE:"mouseevent mousemove",$WINKEY_LOADED:"${windowkey} loaded",$WINKEY_UNLOADED:"${windowkey} unloaded",$WINKEY_EVALUATED:"${windowkey} evaluated",$WINKEY_RESIZED:"${windowkey} resized",$WINKEY_HRESIZED:"${windowkey} horizontally resized",$WINKEY_VRESIZED:"${windowkey} vertically resized",LOADED_NAVIGATOR:"navigator loaded",LOADED_MAINSTAGE:"mainstage loaded",LOCALSTORE_INITIALIZED:"localstore initialized",PERSISTANCE_INITIALIZED:"persistance initialized",AUDIO_INITIALIZED:"audio initialized",STAGE_INITIALIZED:"stage initialized",KEY_SHIFT_DOWN:"shiftkeydown",KEY_SHIFT_UP:"shiftkeyup",KEY_CONTROL_DOWN:"controlkeydown",KEY_CONTROL_UP:"controlkeyup",KEY_ARROW:"arrowkey",KEY_ENTER:"enterkeydown",KEY_ESCAPE:"escapekeydown",KEY_SPACE:"spacekeydown",KEY_TAB:"tabkeydown",KEY_ALT:"altkeydown",KEY_CONTROLTAB:"controltabkeysdown",TYPEDRAG_START:"typedrag start",TYPEDRAG_STOP:"typedrag stop",TYPEDRAG_PAUSE:"typedrag pause",DOCK_MAXIMIZED:"dockmaximized",DOCK_MINIMIZED:"dockminimized",DOCK_NORMALIZED:"docknormalized",DOCKTABBINDING_SELECT:"docktab select",SYSTEMTREEBINDING_REFRESH:"systemtree refresh",SYSTEMTREEBINDING_REFRESHALL:"systemtree refresh all",SYSTEMTREEBINDING_REFRESHING:"systemtree refreshing",SYSTEMTREEBINDING_REFRESHED:"systemtree refreshed",SYSTEMTREEBINDING_CUT:"systemtree cut",SYSTEMTREEBINDING_COPY:"systemtree copy",SYSTEMTREEBINDING_PASTE:"systemtree paste",SYSTEMTREEBINDING_COLLAPSEALL:"systemtree collapse all",SYSTEMTREENODEBINDING_FOCUS:"systemtreenode focus",SYSTEMTREEBINDING_LOCKTOEDITOR:"systemtreenode lock to editor",SYSTEMTREENODEBINDING_FORCE_OPEN:"systemtreenode force open",SYSTEMTREENODEBINDING_FORCING_OPEN:"systemtreenode forcing open",SYSTEMTREENODEBINDING_FORCED_OPEN:"systemtreenode forced open",START_COMPOSITE:"startcomposite",STOP_COMPOSITE:"stopcomposite",COMPOSITE_START:"compositestart",COMPOSITE_STOP:"compositestop",VIEW_OPENING:"view opening",VIEW_OPENED:"view opened",VIEW_COMPLETED:"view completed",CLOSE_VIEW:"close view",CLOSE_VIEWS:"close views",VIEW_CLOSED:"view closed",TINYMCE_INITIALIZED:"tinymce initialized",CODEPRESS_INITIALIZED:"codepress initialized",VISUALEDITOR_FOCUSED:"visualeditor focused",VISUALEDITOR_BLURRED:"visualditor blurred",VISUALEDITOR_HACKED:"visualeditor hacked",PERSPECTIVE_CHANGED:"perspective changed",PERSPECTIVES_NONE:"no perspectives",SYSTEMLOG_OPENED:"systemlog opened",SYSTEMLOG_CLOSED:"systemlog closed",SYSTEMACTION_INVOKE:"systemaction invoke",SYSTEMACTION_INVOKED:"systemaction invoked",SYSTEM_ACTIONPROFILE_PUBLISHED:"system actionprofile published",NAVIGATOR_TREENODE_SELECTED:"navigator treenode selected",MODAL_DIALOG_OPENED:"modal dialog invoked",MODAL_DIALOG_CLOSED:"modal dialog closed",COVERBINDING_MOUSEDOWN:"userinterfacecoverbinding mousedown",SERVER_OFFLINE:"server offline",SERVER_ONLINE:"server online",OFFLINE_FLASH_INITIALIZED:"offline flash initialized",CLOSE_CURRENT:"close current",CLOSE_ALL:"close all",CLOSE_ALL_DONE:"close all done",SAVE_CURRENT:"save current",CURRENT_SAVED:"current saved",SAVE_ALL:"save all",SAVE_ALL_DONE:"save all done",DOCKTAB_DIRTY:"docktab dirty",DOCKTAB_CLEAN:"docktab clean",BINDING_RELATE:"binding relate",LOCALIZATION_CHANGED:"localization changed",XHTML_MARKUP_ON:"xhtml markup on",XHTML_MARKUP_OFF:"xhtml markup off",XHTML_MARKUP_ACTIVATE:"xhtml markup activate",XHTML_MARKUP_DEACTIVATE:"xhtml markup deactivate",HIGHLIGHT_KEYWORDS:"highlight keywords",BIND_TOKEN_TO_VIEW:"bind entitytoken to view",STAGEDIALOG_OPENED:"stage dialog opened",INVOKE_DEFAULT_ACTION:"invoke default action",LANGUAGES_UPDATED:"LocalesUpdated",FROMLANGUAGE_UPDATED:"ForeignLocaleChanged",TOLANGUAGE_UPDATED:"ActiveLocaleChanged",MESSAGEQUEUE_REQUESTED:"messagequeue requested",MESSAGEQUEUE_EVALUATED:"messagequeue evaluated",UPDATE_LANGUAGES:"update languages"};
var BroadcastMessages=new _BroadcastMessages();
function _EventBroadcaster(){
}
_EventBroadcaster.prototype={_broadcasts:{},subscribe:function(_59,_5a){
if(_59!=null){
if(!Interfaces.isImplemented(IBroadcastListener,_5a,true)){
throw ("IBroadcastListener not implemented: "+_59);
}else{
if(!this._broadcasts[_59]){
this._broadcasts[_59]=[_5a];
}else{
this._broadcasts[_59].push(_5a);
}
}
}else{
SystemDebug.stack(arguments);
throw "Undefined broadcast: "+_5a;
}
},unsubscribe:function(_5b,_5c){
if(_5b!=null){
if(Interfaces.isImplemented(IBroadcastListener,_5c)){
var i=0,_5e,_5f=this._broadcasts[_5b];
if(_5f){
while(i<_5f.length){
_5e=_5f[i];
if(_5e==_5c){
_5f.splice(i,1);
break;
}
i++;
}
}
}
}else{
throw "Undefined broadcast"+_5c;
}
},hasSubscribers:function(_60){
var _61=this._broadcasts[_60];
return _61!=null&&_61.length>0;
},broadcast:function(_62,_63){
if(_62!=null){
var i=0,_65=this._broadcasts[_62];
var _66=[];
if(_65!=null){
var _67=new List();
while(i<_65.length){
_66.push(_65[i++]);
}
i=0;
while(i<_66.length){
var _68=_66[i];
try{
_68.handleBroadcast(_62,_63);
}
catch(exception){
_67.add(_68);
var cry="Exception in "+new String(_68)+" on broadcast '"+_62+"':"+new String(exception);
SystemLogger.getLogger("EventBroadcaster").error(cry);
SystemDebug.stack(arguments);
if(Application.isDeveloperMode){
alert(cry);
throw (exception);
}
}
i++;
}
if(_67.hasEntries()){
_67.each(function(_6a){
EventBroadcaster.unsubscribe(_62,_6a);
});
}
}
}else{
SystemDebug.stack(arguments);
throw "Undefined broadcast";
}
}};
var EventBroadcaster=new _EventBroadcaster();
function _Constants(){
}
var temppath=document.location.pathname;
var temproot=temppath.substring(0,temppath.lastIndexOf("/"));
_Constants.prototype={COMPOSITE_HOME:"http://www.composite.net",DUMMY_LINK:"javascript:void(false);",APPROOT:temproot,CONFIGROOT:temproot.replace("Composite","Frontend")+"/Config/VisualEditor/",TEMPLATESROOT:temproot+"/templates",SKINROOT:temproot+"/skins/system",TINYMCEROOT:temproot+"/content/misc/editors/wysiwygeditor/tiny_mce",TINYROOT:temproot+"/content/misc/editors/visualeditor/tiny_mce",URL_WSDL_SETUPSERVICE:temproot+"/services/Setup/SetupService.asmx?WSDL",URL_WSDL_CONFIGURATION:temproot+"/services/Configuration/ConfigurationService.asmx?WSDL",URL_WSDL_LOGINSERVICE:temproot+"/services/Login/Login.asmx?WSDL",URL_WSDL_INSTALLSERVICE:temproot+"/services/Installation/InstallationService.asmx?WSDL",URL_WSDL_MESSAGEQUEUE:temproot+"/services/ConsoleMessageQueue/ConsoleMessageQueueServices.asmx?WSDL",URL_WSDL_EDITORCONFIG:temproot+"/services/WysiwygEditor/ConfigurationServices.asmx?WSDL",URL_WSDL_FLOWCONTROLLER:temproot+"/services/FlowController/FlowControllerServices.asmx?WSDL",URL_WSDL_STRINGSERVICE:temproot+"/services/StringResource/StringService.asmx?WSDL",URL_WSDL_TREESERVICE:temproot+"/services/Tree/TreeServices.asmx?WSDL",URL_WSDL_XHTMLTRANSFORM:temproot+"/services/WysiwygEditor/XhtmlTransformations.asmx?WSDL",URL_WSDL_SECURITYSERVICE:temproot+"/services/Tree/SecurityServices.asmx?WSDL",URL_WSDL_READYSERVICE:temproot+"/services/Ready/ReadyService.asmx?WSDL",URL_WSDL_LOCALIZATION:temproot+"/services/Localization/LocalizationService.asmx?WSDL",URL_WSDL_SOURCEVALIDATION:temproot+"/services/SourceEditor/SourceValidationService.asmx?WSDL",URL_WSDL_MARKUPFORMAT:temproot+"/services/SourceEditor/MarkupFormatService.asmx?WSDL",URL_WSDL_SEOSERVICE:temproot+"/services/SearchEngineOptimizationKeyword/SearchEngineOptimizationKeyword.asmx?WSDL",URL_WSDL_PAGESERVICE:temproot+"/services/Page/PageService.asmx?WSDL",URL_WSDL_DIFFSERVICE:temproot+"/services/StringResource/DiffService.asmx?WSDL",NS_XHTML:"http://www.w3.org/1999/xhtml",NS_UI:"http://www.w3.org/1999/xhtml",NX_XUL:"http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",NS_XBL:"http://www.mozilla.org/xbl",NS_WSDL:"http://schemas.xmlsoap.org/wsdl/",NS_SOAP:"http://schemas.xmlsoap.org/wsdl/soap/",NS_ENVELOPE:"http://schemas.xmlsoap.org/soap/envelope/",NS_ENCODING:"http://schemas.xmlsoap.org/soap/encoding/",NS_SCHEMA:"http://www.w3.org/2001/XMLSchema",NS_SCHEMA_INSTANCE:"http://www.w3.org/1999/XMLSchema-instance",NS_DOMPARSEERROR:"http://www.mozilla.org/newlayout/xml/parsererror.xml",NS_NS:"http://www.w3.org/2000/xmlns/",NS_PERSISTANCE:"http://www.composite.net/ns/localstore/persistance",NS_FUNCTION:"http://www.composite.net/ns/function/1.0",SCROLLBAR_DIMENSION_HARDCODED_VALUE:19};
var Constants=new _Constants();
temppath=null;
temproot=null;
function _Client(){
var _6b=navigator.userAgent.toLowerCase();
var _6c=navigator.platform.toLowerCase();
var _6d=typeof document.createTreeWalker!="undefined";
var _6e=_6d&&(_6b.indexOf("webrunner")>-1||_6b.indexOf("prism")>-1);
var _6f=history.pushState!=null;
this.isMozilla=_6d;
this.isWebKit=_6b.indexOf("webkit")>-1;
this.isExplorer=!_6d;
this.isExplorer6=this.isExplorer&&(_6b.indexOf("msie 6.0")>-1||_6b.indexOf("msie 6.1")>-1);
this.isExplorer8=this.isExplorer&&window.XDomainRequest!=null;
this.isPrism=_6e;
this.isWindows=_6c.indexOf("win")>-1;
this.isVista=this.isWindows&&_6b.indexOf("windows nt 6")>-1;
var _70=this._getFlashVersion();
this.hasFlash=(_70&&_70>=9);
this.hasTransitions=_6f;
return this;
}
_Client.prototype={isExplorer:false,isMozilla:false,isPrism:false,hasFlash:false,isWindows:false,isVista:false,hasTransitions:false,_getFlashVersion:function(){
var _71=null;
var _72=10;
try{
if(this.isMozilla==true){
if(typeof navigator.plugins["Shockwave Flash"]!="undefined"){
var _73=navigator.plugins["Shockwave Flash"];
if(_73){
var _74=_73.description;
if(_74!=null){
_71=_74.charAt(_74.indexOf(".")-1);
}
}
}
}else{
for(var i=2;i<=_72;i++){
try{
new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+i);
_71=i;
}
catch(exception){
continue;
}
}
}
}
catch(exception){
}
return _71;
},qualifies:function(){
var _76=true;
var _77=false;
if(this.isMozilla&&!this.isWebKit){
_77=(document.documentElement.mozMatchesSelector===undefined);
}
if(window.opera!=null||_77||this.isExplorer6){
_76=false;
}
return _76;
}};
var Client=new _Client();
SystemLogger.TAB_SEQUENCE="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;";
SystemLogger.LEVEL_INFO="info";
SystemLogger.LEVEL_DEBUG="debug";
SystemLogger.LEVEL_ERROR="error";
SystemLogger.LEVEL_WARN="warn";
SystemLogger.LEVEL_FATAL="fatal";
SystemLogger.LEVEL_FINE="fine";
SystemLogger.isFlushing=false;
function SystemLogger(_78){
this.identifier=_78;
}
SystemLogger.prototype.info=function(_79){
SystemLogger.log(this.identifier,SystemLogger.LEVEL_INFO,_79);
};
SystemLogger.prototype.debug=function(_7a){
if(_7a=="page"){
alert(arguments.caller.callee);
}
SystemLogger.log(this.identifier,SystemLogger.LEVEL_DEBUG,_7a);
};
SystemLogger.prototype.error=function(_7b){
SystemLogger.log(this.identifier,SystemLogger.LEVEL_ERROR,_7b);
};
SystemLogger.prototype.warn=function(_7c){
SystemLogger.log(this.identifier,SystemLogger.LEVEL_WARN,_7c);
};
SystemLogger.prototype.fatal=function(_7d){
SystemLogger.log(this.identifier,SystemLogger.LEVEL_FATAL,_7d);
};
SystemLogger.prototype.fine=function(_7e){
SystemLogger.log(this.identifier,SystemLogger.LEVEL_FINE,_7e);
};
SystemLogger.loggers={};
SystemLogger.buffer=new List();
SystemLogger.suspend=function(){
SystemLogger.outputWindow=null;
SystemLogger.outputDocument=null;
SystemLogger.outputElement=null;
SystemLogger.log=SystemLogger.bufferLog;
};
SystemLogger.unsuspend=function(win){
SystemLogger.outputWindow=win;
SystemLogger.outputDocument=win.document;
SystemLogger.outputElement=win.document.body;
SystemLogger.log=SystemLogger.outputLog;
SystemLogger.flushBuffer();
};
SystemLogger.getLogger=function(_80){
var _81=SystemLogger.loggers[_80];
if(!_81){
_81=new SystemLogger(_80);
SystemLogger.loggers[_80]=_81;
}
return _81;
};
SystemLogger.flushBuffer=function(){
SystemLogger.buffer.reset();
SystemLogger.isFlushing=true;
if(SystemLogger.buffer.hasEntries()){
while(SystemLogger.buffer.hasNext()){
var _82=SystemLogger.buffer.getNext();
this.log(_82.identifier,_82.level,_82.message);
}
}
SystemLogger.isFlushing=false;
};
SystemLogger.bufferLog=function(_83,_84,_85){
_85=String(_85);
SystemLogger.buffer.add({identifier:_83,level:_84,message:_85});
};
SystemLogger.outputLog=function(_86,_87,_88){
_88=String(_88);
if(!SystemLogger.isFlushing){
SystemLogger.bufferLog(_86,_87,_88);
}
var win=SystemLogger.outputWindow;
var doc=SystemLogger.outputDocument;
var elm=SystemLogger.outputElement;
var div=doc.createElement("div");
var _8d=doc.createElement("span");
var pre=doc.createElement("pre");
if(Client.isExplorer){
_88=_88.replace(/</g,"&lt;");
_88=_88.replace(/>/g,"&gt;");
_88=_88.replace(/\n/g,"<br/>");
_88=_88.replace(/\t/g,SystemLogger.TAB_SEQUENCE);
pre.innerHTML=_88;
}else{
pre.textContent=_88;
}
div.className=_87;
_8d.innerHTML=_86;
div.appendChild(_8d);
div.appendChild(pre);
elm.insertBefore(div,elm.firstChild);
win.scrollTo(0,0);
};
SystemLogger.log=SystemLogger.bufferLog;
SystemLogger.clear=function(){
SystemLogger.buffer=new List();
var doc=SystemLogger.outputDocument;
if(doc){
doc.body.innerHTML="";
}
};
SystemTimer.getTimer=function(_90){
return new SystemTimer(_90.toString());
};
function SystemTimer(id){
this.logger=SystemLogger.getLogger("SystemTimer");
this._id=id;
this._time=new Date().getTime();
}
SystemTimer.prototype.reset=function(){
this._time=new Date().getTime();
};
SystemTimer.prototype.report=function(_92){
this.logger.debug(this._id+": "+this.getTime()+(_92?": "+_92:""));
};
SystemTimer.prototype.getTime=function(){
return new Date().getTime()-this._time;
};
function _SystemDebug(){
}
_SystemDebug.prototype={_logger:SystemLogger.getLogger("SystemDebug"),_stacklength:parseInt(5),stack:function(_93,_94){
this._stackMozilla(_93,_94);
},_stackMozilla:function(_95,_96){
_96=_96?_96:this._stacklength;
if(Client.isMozilla&&_95.callee||_95.caller){
var _97=Client.isMozilla?_95.callee.caller:_95.caller.callee;
var _98="";
var i=0;
while(_97!=null&&i++<_96){
_98+="\n#"+i+"\n";
_98+=_97.toString();
_97=_97.caller;
_98+="\n";
}
this._logger.error(_98);
}else{
this._logger.error("(Error stack unreachable!)");
}
}};
var SystemDebug=new _SystemDebug;
function _Interfaces(){
var _9a=SystemLogger.getLogger("Interfaces");
this.isImplemented=function(_9b,_9c,_9d){
var _9e=true;
for(var _9f in _9b){
if(typeof _9c[_9f]==Types.UNDEFINED){
_9e=false;
}else{
if(typeof _9b[_9f]!=typeof _9c[_9f]){
_9e=false;
}
}
if(!_9e){
break;
}
}
if(!_9e){
if(_9d){
_9a.fine(_9c+" invalid. Interface check abandoned at: "+_9f);
}
}
return _9e;
};
}
var Interfaces=new _Interfaces;
function _Types(){
}
_Types.prototype={_logger:SystemLogger.getLogger("Types"),BOOLEAN:"boolean",STRING:"string",NUMBER:"number",FUNCTION:"function",UNDEFINED:"undefined",castFromString:function(_a0){
var _a1=_a0;
if(parseInt(_a1).toString()===_a1){
_a1=parseInt(_a1);
}else{
if(parseFloat(_a1).toString()===_a1){
_a1=parseFloat(_a1);
}else{
if(_a1==="true"||_a1==="false"){
_a1=(_a1==="true");
}
}
}
return _a1;
},isDefined:function(arg){
return typeof arg!=Types.UNDEFINED;
},isFunction:function(arg){
return typeof arg==Types.FUNCTION;
}};
var Types=new _Types();
var MimeTypes={JPG:"image/jpeg",GIF:"image/gif",PNG:"image/png",CSS:"text/css",JAVASCRIPT:"text/javascript",TEXT:"text/plain",HTML:"text/html",XHTML:"applcication/xhtml+xml",FLASH:"application/x-shockwave-flash",QUICKTIME:"video/quicktime",SHOCKWAVE:"application/x-director",WINMEDIA:"application/x-mplayer2",COMPOSITEPAGES:"application/x-composite-page",COMPOSITEFUNCTION:"application/x-composite-function"};
window.SearchTokens=new function(){
var _a4={"MediaFileElementProvider.WebImages":null,"MediaFileElementProvider.EmbeddableMedia":null,"AllFunctionsElementProvider.XhtmlDocument":null,"AllFunctionsElementProvider.XsltFunctionCall":null};
this.getToken=function(key){
var _a6=null;
if(this.hasToken(key)){
_a6=_a4[key];
}else{
throw "Unknown search token key: "+key;
}
return _a6;
};
this.hasToken=function(key){
return typeof _a4[key]!=Types.UNDEFINED;
};
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_LOGIN,{handleBroadcast:function(){
new List(TreeService.GetSearchTokens(true)).each(function(_a8){
if(SearchTokens.hasToken(_a8.Key)){
_a4[_a8.Key]=_a8.Value;
}else{
alert("SearchTokens need updating!");
}
});
}});
};
window.StringBundle=new function(){
var _a9=SystemLogger.getLogger("StringBundle");
this.UI="Composite.Management";
var _aa={};
function resolve(_ab,_ac){
var _ad=new List(StringService.GetLocalisation(_ab));
if(_ad.hasEntries()){
_ad.each(function(_ae){
_ac[_ae.Key]=_ae.Value;
});
}else{
throw "No strings from provider: "+_ab;
}
}
this.getString=function(_af,_b0){
var _b1=null;
if(window.StringService!=null){
try{
if(_af=="ui"){
_af=StringBundle.UI;
}
if(!_aa[_af]){
var _b2=_aa[_af]={};
resolve(_af,_b2);
}
if(_aa[_af]){
_b1=_aa[_af][_b0];
}
if(!_b1){
throw "No such string: "+_b0;
}
}
catch(exception){
var cry="StringBundle exception in string "+_af+":"+_b0;
_a9.error(cry);
if(Application.isDeveloperMode){
alert(cry);
}
}
}
return _b1;
};
};
function _KeyMaster(){
}
_KeyMaster.prototype={_uniqueKeys:{},getUniqueKey:function(){
var key=new String("key"+Math.random().toString().split(".")[1]);
if(this._uniqueKeys[key]!=null){
return this.getUniqueKey();
}
this._uniqueKeys[key]=true;
return key;
},hasKey:function(key){
var _b6=false;
if(this._uniqueKeys[key]){
_b6=true;
}
return _b6;
}};
var KeyMaster=new _KeyMaster();
function _ImageProvider(){
}
_ImageProvider.prototype={_logger:SystemLogger.getLogger("ImageProvider"),SERVICE_URL:"services/Icon/GetIcon.ashx",UI:"Composite.Icons",getImageURL:function(_b7,_b8){
var _b9=null;
var url=Constants.APPROOT+"/"+this.SERVICE_URL+"?resourceName=${name}&resourceNamespace=${hash}&size=${size}";
var _bb=_b7.ResourceNamespace;
var _bc=_b7.ResourceName;
_b8=_b8?_b8:"DEFAULT";
if(_bc!=null&&_bb!=null){
_b9=url.replace("${name}",_bc).replace("${hash}",_bb).replace("${size}",_b8);
if(_b8=="DEFAULT"){
_b9=_b9.split("&size=DEFAULT")[0];
}
}else{
throw "Could not compute image URL.";
}
return _b9;
},toGrayScaleURL:function(_bd){
var _be=document.createElement("canvas");
var ctx=_be.getContext("2d");
var _bd=new Image();
var _c0=_bd.width;
var _c1=_bd.height;
_be.width=_c0;
_be.height=_c1;
ctx.drawImage(_bd,0,0);
var _c2=ctx.getImageData(0,0,_c0,_c1);
for(j=0;j<_c2.height;i++){
for(i=0;i<_c2.width;j++){
var _c3=(i*4)*_c2.width+(j*4);
var red=_c2.data[_c3];
var _c5=_c2.data[_c3+1];
var _c6=_c2.data[_c3+2];
var _c7=_c2.data[_c3+3];
var _c8=(red+_c5+_c6)/3;
_c2.data[_c3]=_c8;
_c2.data[_c3+1]=_c8;
_c2.data[_c3+2]=_c8;
_c2.data[_c3+3]=_c7;
}
}
return _be.toDataURL();
}};
var ImageProvider=new _ImageProvider();
function _Resolver(){
}
_Resolver.prototype={_logger:SystemLogger.getLogger("Resolver"),resolve:function(_c9){
if(typeof _c9!=Types.UNDEFINED){
_c9=String(_c9);
_c9=_c9.replace("${root}",Constants.APPROOT);
_c9=_c9.replace("${skin}",Constants.SKINROOT);
_c9=_c9.replace("${tinymce}",Constants.TINYMCEROOT);
_c9=_c9.replace("${tiny}",Constants.TINYROOT);
if(_c9.indexOf("${icon:")>-1){
_c9=this._resolveImage(_c9);
}else{
if(_c9.indexOf("${string:")>-1){
_c9=this._resolveString(_c9);
}
}
}
return _c9;
},resolveVars:function(_ca,_cb){
var i=0;
while(i<_cb.length){
_ca=_ca.replace("{"+i+"}",_cb[i]);
i++;
}
return _ca;
},_resolveString:function(_cd){
var _ce=null;
var _cf=null;
var key=_cd.split("${string:")[1].split("}")[0];
if(key.indexOf(":")>-1){
_cf=key.split(":")[0];
key=key.split(":")[1];
}else{
_cf=StringBundle.UI;
}
_ce=StringBundle.getString(_cf,key);
if(!_ce){
_ce="(?)";
}
return _ce;
},_resolveImage:function(_d1){
var _d2=null;
var _d3=null;
var _d4=null;
var _d5=null;
_d4=_d1.split("${icon:")[1].split("}")[0];
if(_d4.indexOf(":")>-1){
_d3=_d4.split(":")[0];
_d4=_d4.split(":")[1];
}else{
_d3=ImageProvider.UI;
}
if(_d4.indexOf("(")>-1){
_d5=_d4.split("(")[1].split(")")[0];
_d4=_d4.split("(")[0];
}
_d2=ImageProvider.getImageURL({ResourceNamespace:_d3,ResourceName:_d4},_d5);
return _d2;
}};
var Resolver=new _Resolver();
function _Download(){
}
_Download.prototype.init=function(url){
var win=top.app.bindingMap.downloadwindow;
win.setURL(url);
};
var Download=new _Download();
function _Cookies(){
}
var Cookies=new _Cookies();
_Cookies.prototype={createCookie:function(_d8,_d9,_da){
var _db="";
if(_da){
var _dc=new Date();
_dc.setTime(_dc.getTime()+(_da*24*60*60*1000));
_db="; expires="+_dc.toGMTString();
}
document.cookie=_d8+"="+escape(_d9)+_db+"; path=/";
return this.readCookie(_d8);
},readCookie:function(_dd){
var _de=null;
var _df=_dd+"=";
var ca=document.cookie.split(";");
for(var i=0;i<ca.length;i++){
var c=ca[i];
while(c.charAt(0)==" "){
c=c.substring(1,c.length);
}
if(c.indexOf(_df)==0){
_de=unescape(c.substring(_df.length,c.length));
}
}
return _de;
},eraseCookie:function(_e3){
this.createCookie(_e3,"",-1);
}};
function _StatusBar(){
this.AUTOCLEAR_TIMEOUT=5*1000;
this.GROUP_LANGUAGETOOLS="languagetools";
this.document=null;
this.state=null;
this.ERROR="error";
this.WARN="warn";
this.BUSY="busy";
this.READY="ready";
this._groups=new Map();
var _e4=SystemLogger.getLogger("StatusBar");
var _e5=null;
var _e6="${icon:error}";
var _e7="${icon:warning}";
var _e8="${icon:loading}";
var _e9="${icon:message}";
var _ea=null;
var _eb=null;
var _ec=null;
var _ed=null;
this.initialize=function(_ee){
_ea=StringBundle.getString("ui","Website.App.StatusBar.Error");
_eb=StringBundle.getString("ui","Website.App.StatusBar.Warn");
_ec=StringBundle.getString("ui","Website.App.StatusBar.Busy");
_ed=StringBundle.getString("ui","Website.App.StatusBar.Ready");
_e5=_ee;
this.document=_ee.bindingDocument;
};
this.error=function(_ef,_f0){
this.state=StatusBar.ERROR;
_ef=_ef?_ef:_ea;
show(_ef,_e6,_f0,false);
};
this.warn=function(_f1,_f2){
this.state=StatusBar.WARN;
_f1=_f1?_f1:_eb;
show(_f1,_e7,_f2,false);
};
this.busy=function(_f3,_f4){
this.state=StatusBar.BUSY;
_f3=_f3?_f3:_ec;
show(_f3,_e8,_f4,false);
};
this.ready=function(_f5,_f6){
this.state=StatusBar.READY;
_f5=_f5?_f5:_ed;
show(_f5,_e9,_f6,true);
};
this.report=function(_f7,_f8,_f9,_fa){
this.state=null;
show(_f7,_f8,_f9,_fa);
};
this.clear=function(){
this.state=null;
if(_e5){
_e5.clear();
}
};
function show(_fb,_fc,_fd,_fe){
if(_fd){
_fb=Resolver.resolveVars(_fb,_fd);
}
if(_e5){
_e5.setLabel(_fb);
_e5.setImage(_fc);
if(_fe){
_e5.startFadeOut(StatusBar.AUTOCLEAR_TIMEOUT);
}
}else{
_e4.error("Message not initialized for display: "+_fb);
}
}
this.addToGroup=function(_ff,_100){
if(!this._groups.has(_ff)){
this._groups.set(_ff,_e5.addRight(ToolBarGroupBinding.newInstance(this.document)));
}
this._groups.get(_ff).add(_100);
};
}
var StatusBar=new _StatusBar();
function _Localization(){
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_LOGIN,this);
EventBroadcaster.subscribe(BroadcastMessages.LANGUAGES_UPDATED,this);
EventBroadcaster.subscribe(BroadcastMessages.FROMLANGUAGE_UPDATED,this);
}
_Localization.prototype={languages:null,source:null,target:null,handleBroadcast:function(_101,arg){
switch(_101){
case BroadcastMessages.APPLICATION_LOGIN:
case BroadcastMessages.LANGUAGES_UPDATED:
var _103=LocalizationService.GetActiveLocales(true);
if(_103.length>=1){
this.languages=new List(_103);
}else{
this.languages=null;
}
EventBroadcaster.broadcast(BroadcastMessages.UPDATE_LANGUAGES,this.languages);
break;
}
switch(_101){
case BroadcastMessages.APPLICATION_LOGIN:
case BroadcastMessages.FROMLANGUAGE_UPDATED:
var _104=LocalizationService.GetLocales(true);
this.source=_104.ForeignLocaleName;
this.target=_104.ActiveLocaleName;
EventBroadcaster.broadcast(BroadcastMessages.LOCALIZATION_CHANGED,{source:_104.ForeignLocaleName,target:_104.ActiveLocaleName});
break;
}
}};
var Localization=new _Localization();
function _Validator(){
}
_Validator.prototype={validate:function(_105,key,_107){
var _108=true;
var _109=SourceValidationService.ValidateSource(_105,key);
if(_109!="True"){
if(_107==true){
this._dialog(_109);
}
_108=false;
}
return _108;
},validateInformed:function(_10a,key){
return this.validate(_10a,key,true);
},_dialog:function(_10c){
setTimeout(function(){
Dialog.error("Source Invalid",_10c);
},0);
}};
var Validator=new _Validator();
function _DOMEvents(){
}
_DOMEvents.prototype={_logger:SystemLogger.getLogger("DOMEvents"),MOUSEDOWN:"mousedown",MOUSEUP:"mouseup",MOUSEOVER:"mouseover",MOUSEOUT:"mouseout",MOUSEMOVE:"mousemove",CLICK:"click",DOUBLECLICK:"dblclick",KEYPRESS:"keypress",KEYDOWN:"keydown",KEYUP:"keyup",CONTEXTMENU:"contextmenu",SCROLL:"scroll",LOAD:"load",BEFOREUNLOAD:"beforeunload",UNLOAD:"unload",RESIZE:"resize",FOCUS:"focus",BLUR:"blur",SUBMIT:"submit",CUT:"cut",COPY:"copy",PASTE:"paste",DOM:"DOMContentLoaded",ACTIVATE:"activate",DEACTIVATE:"deactivate",MOUSEENTER:"mouseenter",MOUSELEAVE:"mouseleave",SELECTSTART:"selectstart",FOCUSIN:"focusin",FOCUSOUT:"focusout",BEFOREUPDATE:"beforeupdate",AFTERUPDATE:"afterupdate",ERRORUPDATE:"errorupdate",_count:0,addEventListener:function(_10d,_10e,_10f,_110){
this._count++;
this._eventListener(true,_10d,_10e,_10f,_110);
if(_10d&&typeof _10d.nodeType!=Types.UNDEFINED){
if(_10d.nodeType==Node.ELEMENT_NODE){
var win=DOMUtil.getParentWindow(_10d);
if(win){
var _112={handleEvent:function(){
DOMEvents.removeEventListener(_10d,_10e,_10f,_110);
DOMEvents.removeEventListener(win,DOMEvents.UNLOAD,_112);
}};
DOMEvents.addEventListener(win,DOMEvents.UNLOAD,_112);
}
}
}
},removeEventListener:function(_113,_114,_115,_116){
this._count--;
this._eventListener(false,_113,_114,_115,_116);
},getTarget:function(e){
return e?(e.target?e.target:e.srcElement):null;
},stopPropagation:function(e){
try{
if(e.stopPropagation!=null){
e.stopPropagation();
}else{
e.cancelBubble=true;
}
}
catch(exception){
if(Application.isDeveloperMode==true){
this._logger.error(exception);
}
}
},preventDefault:function(e){
try{
if(e.preventDefault){
e.preventDefault();
}else{
e.returnValue=false;
}
}
catch(exception){
if(Application.isDeveloperMode==true){
this._logger.error(exception);
}
}
},isRightButton:function(e){
return e.button==2?true:false;
},cleanupEventListeners:function(_11b){
this._deleteWrappedHandler(_11b);
},isCurrentTarget:function(e){
var _11d=false;
if(Client.isMozilla==true){
_11d=e.target==e.currentTarget;
}
return true;
},_isChildOf:function(_11e,_11f){
var _120=true;
if(_11e==_11f){
_120=false;
}
if(_120==true){
while(_11f!=null&&_11f.nodeType!=Node.DOCUMENT_NODE&&_11f!=_11e){
_11f=_11f.parentNode;
}
_120=(_11f==_11e);
}
return _120;
},_eventListener:function(_121,_122,_123,_124,_125,_126){
if(Interfaces.isImplemented(IEventListener,_124,true)){
if(typeof _123!=Types.UNDEFINED){
if(Client.isExplorer==true){
_124=this._getWrappedHandler(_122,_123,_124,_126);
_122[this._getAction(_121)]("on"+_123,_124);
}else{
switch(_123){
case DOMEvents.MOUSEENTER:
case DOMEvents.MOUSELEAVE:
_123=_123==DOMEvents.MOUSEENTER?DOMEvents.MOUSEOVER:DOMEvents.MOUSEOUT;
_122[this._getAction(_121)](_123,{handleEvent:function(e){
var rel=e.relatedTarget;
if(e.currentTarget==rel||DOMEvents._isChildOf(e.currentTarget,rel)){
}else{
_124.handleEvent(e);
}
}},_125?true:false);
break;
default:
_122[this._getAction(_121)](_123,_124,_125?true:false);
break;
}
}
}else{
throw "No such event allowed!";
}
}
},_getAction:function(_129){
var _12a=null;
switch(_129){
case true:
_12a=Client.isMozilla==true?"addEventListener":"attachEvent";
break;
case false:
_12a=Client.isMozilla==true?"removeEventListener":"detachEvent";
break;
}
return _12a;
},_getWrappedHandler:function(_12b,_12c,_12d,_12e){
var _12f=null;
try{
if(!_12d._domEventHandlers){
_12d._domEventHandlers={};
}
if(!_12d._domEventHandlers[_12b]){
_12d._domEventHandlers[_12b]={};
}
if(!_12d._domEventHandlers[_12b][_12c]){
var win=_12b.nodeType?DOMUtil.getParentWindow(_12b):_12b;
if(win){
_12d._domEventHandlers[_12b][_12c]=function(){
if(win.event!=null&&_12d!=null){
_12d.handleEvent(win.event);
}
};
}
}
_12f=_12d._domEventHandlers[_12b][_12c];
}
catch(exception){
this._report(_12b,_12c,_12d,_12e);
}
return _12f;
},_deleteWrappedHandler:function(_131){
for(var _132 in _131._domEventHandlers){
if(_132){
for(var _133 in _131._domEventHandlers[_132]){
if(_133){
delete _131._domEventHandlers[_132][_133];
}
}
}
delete _131._domEventHandlers[_132];
}
},_report:function(_134,_135,_136,_137){
alert("DOMEvents.getWrappedHandler malfunction.\n\n"+"\ttarget: "+(_134?_134.nodeName:_134)+"\n"+"\tevent: "+_135+"\n"+"\thandler: "+_136+"\n\n"+"Offending invoker: "+(_137.callee?_137.callee.toString():_137.constructor));
}};
var DOMEvents=new _DOMEvents();
function _DOMSerializer(){
}
_DOMSerializer.prototype={_serializer:(Client.isMozilla?new XMLSerializer():null),serialize:function(node,_139){
var _13a=null;
var _13b=node;
if(node.nodeType==Node.DOCUMENT_NODE){
_13b=node.documentElement;
}
if(Client.isMozilla==true){
if(_139==true){
_13b=_13b.cloneNode(true);
_13b=DOMFormatter.format(_13b,DOMFormatter.INDENTED_TYPE_RESULT);
}
_13a=this._serializer.serializeToString(_13b);
}else{
_13a=_13b.xml;
}
return _13a;
}};
var DOMSerializer=new _DOMSerializer();
window.DOMFormatter=new function(){
var TAB="\t";
var NEW="\n";
var _13e=new RegExp(/[^\t\n\r ]/);
this.ignoreCDATASections=false;
function indent(_13f){
var doc=_13f.ownerDocument;
var _141=function(node,_143){
if(node.hasChildNodes()&&node.firstChild.nodeType!=Node.TEXT_NODE){
var _144="",i=0;
while(i++<_143){
_144+=TAB;
}
var _146=node.firstChild;
while(_146){
switch(_146.nodeType){
case Node.ELEMENT_NODE:
if(_146==node.lastChild){
node.appendChild(doc.createTextNode(NEW+_144));
}
node.insertBefore(doc.createTextNode(NEW+_144+TAB),_146);
_141(_146,_143+1);
break;
case Node.COMMENT_NODE:
case Node.PROCESSING_INSTRUCTION_NODE:
case Node.CDATA_SECTION_NODE:
node.insertBefore(doc.createTextNode(NEW+_144+TAB),_146);
break;
}
if(_146.nodeType==Node.CDATA_SECTION_NODE){
if(!this.ignoreCDATASections){
formatCDATASection(_146,_144+TAB);
}
}
_146=_146.nextSibling;
}
}
};
_141(_13f,0);
}
function strip(_147){
var _148=[];
var _149={acceptNode:function(_14a){
return (!_13e.test(_14a.nodeValue))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;
}};
var _14b=_147.ownerDocument.createTreeWalker(_147,NodeFilter.SHOW_TEXT,_149,true);
while(_14b.nextNode()){
_148.push(_14b.currentNode);
}
var i=0,_14d;
while((_14d=_148[i++])!=null){
_14d.parentNode.removeChild(_14d);
}
}
function formatCDATASection(node,_14f){
if(node.textContent.indexOf(NEW)>-1){
var _150=node.textContent.split(NEW);
var _151="",line,_153=0,_154=true;
while((line=_150.shift())!=null){
if(_153==0&&line.charAt(0)==TAB){
while(line.charAt(_153++)==TAB){
}
}
line=line.substring(_153,line.length);
if(_150.length>0){
_151+=_14f+TAB+line;
_151+=_154?"":"\n";
}else{
_151+=_14f+line;
_14f=_14f.slice(1,_14f.length);
node.parentNode.appendChild(doc.createTextNode(NEW+_14f));
}
_154=false;
}
node.textContent=_151;
}
}
this.format=function(_155,_156){
var _157=1;
if(document.createTreeWalker){
try{
strip(_155);
if(_156!=_157){
indent(_155);
}
}
catch(exception){
throw new Error(exception);
}
}
return (_155);
};
};
DOMFormatter.INDENTED_TYPE_RESULT=0;
DOMFormatter.STRIPPED_TYPE_RESULT=1;
function _DOMUtil(){
}
_DOMUtil.prototype={_logger:SystemLogger.getLogger("DOMUtil"),MSXML_MAXVERSION:6,MSXML_MINVERSION:1,MSXML_HTTPREQUEST:"MSXML2.XMLHTTP.{$version}.0",MSXML_DOMDOCUMENT:"MSXML2.DOMDocument.{$version}.0",MSXML_FREETHREADED:"MSXML2.FreeThreadedDOMDocument.{$version}.0",MSXML_XSLTEMPLATE:"MSXML2.XSLTemplate.{$version}.0",getMSComponent:function(_158){
var sig,_15a=null,_15b=this.MSXML_MAXVERSION;
while(!_15a&&_15b>=this.MSXML_MINVERSION){
try{
sig=_158.replace("{$version}",_15b);
_15a=new ActiveXObject(sig);
}
catch(exception){
}
_15b--;
}
return _15a;
},getXMLHTTPRequest:function(){
var _15c=null;
if(Client.isExplorer){
_15c=this.getMSComponent(this.MSXML_HTTPREQUEST);
}else{
_15c=new XMLHttpRequest();
}
return _15c;
},getDOMDocument:function(_15d){
var _15e=null;
if(Client.isExplorer){
_15e=this.getMSComponent(_15d?this.MSXML_FREETHREADED:this.MSXML_DOMDOCUMENT);
}else{
var doc=XMLParser.parse("<?xml version=\"1.0\" encoding=\"UTF-8\"?><ROOT/>");
doc.removeChild(doc.documentElement);
_15e=doc;
}
return _15e;
},getMSXMLXSLTemplate:function(){
var _160=null;
if(Client.isExplorer){
_160=this.getMSComponent(this.MSXML_XSLTEMPLATE);
}
return _160;
},getLocalName:function(_161){
var _162=null;
if(_161.localName){
_162=_161.localName;
}else{
if(_161.baseName){
_162=_161.baseName;
}else{
_162=_161.nodeName.toLowerCase();
}
}
return _162;
},getComputedStyle:function(_163,_164){
var _165=null;
if(Client.isExplorer){
if(_163.currentStyle!=null){
_165=_163.currentStyle[_164];
}else{
this._logger.error("Could not compute style for element "+_163.nodeName);
SystemDebug.stack(arguments);
}
}else{
_165=_163.ownerDocument.defaultView.getComputedStyle(_163,null).getPropertyValue(_164);
}
return _165;
},getMaxIndex:function(doc){
var max=0,_168=new List(doc.getElementsByTagName("*"));
_168.each(function(_169){
var _16a=CSSComputer.getZIndex(_169);
if(_16a>max){
max=_16a;
}
});
return max;
},getOrdinalPosition:function(_16b,_16c){
var _16d=null;
var _16e=-1;
var _16f=this.getLocalName(_16b);
var _170=new List(_16b.parentNode.childNodes);
while(_170.hasNext()){
var _171=_170.getNext();
if(_171.nodeType==Node.ELEMENT_NODE){
if(!_16c||this.getLocalName(_171)==_16f){
_16e++;
if(_171==_16b||(_171.id!=""&&_171.id==_16b.id)){
_16d=_16e;
break;
}
}
}
}
return _16d;
},isFirstElement:function(_172,_173){
return (this.getOrdinalPosition(_172,_173)==0);
},isLastElement:function(_174,_175){
var _176=_174.parentNode.getElementsByTagName(_175?this.getLocalName(_174):"*");
return (this.getOrdinalPosition(_174)==_176.length);
},getParentWindow:function(node){
var doc=node.nodeType==Node.DOCUMENT_NODE?node:node.ownerDocument;
return doc.defaultView?doc.defaultView:doc.parentWindow;
},getTextContent:function(node){
var _17a=null;
if(node.textContent){
_17a=node.textContent;
}else{
if(node.text){
_17a=node.text;
}else{
_17a=node.innerText;
}
}
return _17a;
},setTextContent:function(node,text){
text=String(text);
if(node.textContent){
node.textContent=text;
}else{
if(node.text){
node.text=text;
}else{
node.innerText=text;
}
}
},getAncestorByLocalName:function(_17d,node,_17f){
var _180=null;
while(_180==null){
node=node.parentNode;
if(node.nodeType==Node.DOCUMENT_NODE){
if(_17f==true){
var win=this.getParentWindow(node);
node=win.frameElement;
}else{
break;
}
}
if(this.getLocalName(node)==_17d){
_180=node;
}
}
return _180;
},contains:function(_182,node){
return _182.contains?_182!=node&&_182.contains(node):!!(_182.compareDocumentPosition(node)&16);
},createElementNS:function(_184,_185,_186){
var _187=null;
if(_186==null){
alert("DOMUtil#createElementNS : Missing argument (DOMDocument)");
}else{
if(Client.isMozilla){
_187=_186.createElementNS(_184,_185);
}else{
if(_186.xml!=null){
_187=_186.createNode(Node.ELEMENT_NODE,_185,_184);
}else{
_187=_186.createElement(_185);
}
}
}
return _187;
},getElementsByTagName:function(node,_189){
var _18a=null;
if(Client.isMozilla){
_18a=node.getElementsByTagNameNS(Constants.NS_XHTML,_189);
}else{
_18a=node.getElementsByTagName(_189);
}
return _18a;
},getNextElementSibling:function(_18b){
return Client.isExplorer?_18b.nextSibling:_18b.nextElementSibling;
},getPreviousElementSibling:function(_18c){
return Client.isExplorer?_18c.previousSibling:_18c.previousElementSibling;
},cloneNode:function(node){
var _18e=null;
if(Client.isMozilla==true){
_18e=XMLParser.parse(DOMSerializer.serialize(node));
}else{
_18e=node.cloneNode(true);
}
return _18e;
},getLocalPosition:function(_18f){
var _190=new Point(_18f.offsetLeft,_18f.offsetTop);
if(Client.isExplorer&&_18f.parentNode&&_18f.parentNode.currentStyle){
if(_18f.parentNode.currentStyle.position=="static"){
var _191=this.getLocalPosition(_18f.parentNode);
_190.x+=_191.x;
_190.y+=_191.y;
}
}
return _190;
},getGlobalPosition:function(_192){
return this._getPosition(_192,false);
},getUniversalPosition:function(_193){
return this._getPosition(_193,true);
},_getPosition:function(_194,_195){
var _196=null;
if(typeof _194.getBoundingClientRect!=Types.UNDEFINED){
var rect=_194.getBoundingClientRect();
_196={x:rect.left,y:rect.top};
if(Client.isMozilla){
_196.x-=_194.scrollLeft;
_196.y-=_194.scrollTop;
}
}else{
_196={x:_194.offsetLeft-_194.scrollLeft,y:_194.offsetTop-_194.scrollTop};
while(_194.offsetParent){
_194=_194.offsetParent;
_196.x+=(_194.offsetLeft-_194.scrollLeft);
_196.y+=(_194.offsetTop-_194.scrollTop);
}
}
if(_195){
var win=DOMUtil.getParentWindow(_194);
if(win){
var _199=win.frameElement;
if(_199){
var add=DOMUtil.getUniversalPosition(_199);
_196.x+=add.x;
_196.y+=add.y;
}
}
}
return new Point(_196.x,_196.y);
},getGlobalMousePosition:function(e){
return this._getMousePosition(e,false);
},getUniversalMousePosition:function(e){
return this._getMousePosition(e,true);
},_getMousePosition:function(e,_19e){
var _19f=DOMEvents.getTarget(e);
var _1a0={x:e.pageX?e.pageX:e.clientX,y:e.pageY?e.pageY:e.clientY};
if(Client.isMozilla){
var doc=_19f.ownerDocument;
var win=this.getParentWindow(doc);
_1a0.x-=win.pageXOffset;
_1a0.y-=win.pageYOffset;
}
if(_19e){
var _1a3=this.getParentWindow(_19f).frameElement;
if(_1a3){
var add=this.getUniversalPosition(_1a3);
_1a0.x+=add.x;
_1a0.y+=add.y;
}
}
return _1a0;
}};
var DOMUtil=new _DOMUtil();
function _XMLParser(){
}
_XMLParser.prototype={_logger:SystemLogger.getLogger("XMLParser"),_domParser:(window.DOMParser!=null?new DOMParser():null),parse:function(xml,_1a6){
var doc=null;
if(xml!=null){
if(this._domParser!=null){
try{
doc=this._domParser.parseFromString(xml,"text/xml");
}
catch(e){
alert(xml);
}
if(doc.documentElement.namespaceURI==Constants.NS_DOMPARSEERROR){
if(!_1a6){
this._logger.error(DOMSerializer.serialize(doc.documentElement,true));
if(Application.isDeveloperMode){
alert("XMLParser failed: \n\n"+DOMSerializer.serialize(doc.documentElement,true));
}
}
doc=null;
}
}else{
doc=DOMUtil.getDOMDocument();
doc.loadXML(xml);
if(doc.parseError.errorCode!=0){
if(!_1a6){
this._logger.error("XMLParser failed!");
if(Application.isDeveloperMode){
alert("XMLParser failed!");
}
}
doc=null;
}
}
}else{
throw "XMLParser: No XML input to parse!";
}
return doc;
},isWellFormedDocument:function(xml,_1a9){
var _1aa=true;
var dec="<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
if(xml.indexOf("<?xml ")==-1){
xml=dec+xml;
}
var _1ac=SourceValidationService.IsWellFormedDocument(xml);
if(_1ac!="True"){
_1aa=false;
if(_1a9==true){
this._illFormedDialog(_1ac);
}
}
return _1aa;
},isWellFormedFragment:function(xml,_1ae){
var _1af=true;
var _1b0=SourceValidationService.IsWellFormedFragment(xml);
if(_1b0!="True"){
_1af=false;
if(_1ae==true){
this._illFormedDialog(_1b0);
}
}
return _1af;
},_illFormedDialog:function(_1b1){
setTimeout(function(){
Dialog.error("Not well-formed",_1b1);
},0);
}};
var XMLParser=new _XMLParser();
function XPathResolver(){
this.logger=SystemLogger.getLogger("XPathResolver");
this._evaluator=window.XPathEvaluator?new XPathEvaluator():null;
this._nsResolver=null;
}
XPathResolver.prototype.setNamespacePrefixResolver=function(_1b2){
if(this._evaluator){
this._nsResolver={lookupNamespaceURI:function(_1b3){
return _1b2[_1b3];
}};
}else{
this._nsResolver=_1b2;
}
};
XPathResolver.prototype.resolve=function(_1b4,node,_1b6){
var _1b7=null;
try{
if(this._evaluator){
_1b7=this._evaluateDOMXpath(_1b4,node,_1b6?true:false);
}else{
_1b7=this._evaluateMSXpath(_1b4,node,_1b6?true:false);
}
}
catch(exception){
alert("XPathResolver#resolve: "+exception);
if(exception.stack){
alert(exception.stack);
}else{
alert(arguments.caller.callee.toString());
}
throw exception;
}
return _1b7;
};
XPathResolver.prototype.resolveAll=function(_1b8,node){
return this.resolve(_1b8,node,true);
};
XPathResolver.prototype._evaluateDOMXpath=function(_1ba,node,_1bc){
var _1bd=null;
if(node){
var _1bd=this._evaluator.evaluate(_1ba,node,this._nsResolver,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);
if(_1bc){
var list=new List();
while((node=_1bd.iterateNext())!=null){
list.add(node);
}
_1bd=list;
}else{
_1bd=_1bd.iterateNext();
}
}else{
var cry="XPathResolver#_evaluateDOMXpath: No DOMNode to evaluate!";
if(Application.isDeveloperMode){
alert(cry);
}else{
this.logger.fatal(cry);
}
}
return _1bd;
};
XPathResolver.prototype._evaluateMSXpath=function(_1c0,node,_1c2){
var doc=(node.nodeType==Node.DOCUMENT_NODE?node:node.ownerDocument);
var _1c4="";
for(var _1c5 in this._nsResolver){
_1c4+="xmlns:"+_1c5+"=\""+this._nsResolver[_1c5]+"\" ";
}
doc.setProperty("SelectionNamespaces",_1c4);
if(_1c2){
var list=new List();
var i=0,_1c8=node.selectNodes(_1c0);
while(i<_1c8.length){
list.add(_1c8.item(i++));
}
result=list;
}else{
result=node.selectSingleNode(_1c0);
}
return result;
};
function XSLTransformer(){
this.logger=SystemLogger.getLogger("XSLTransformer");
this._processor=null;
this._cache=null;
}
XSLTransformer.prototype.importStylesheet=function(url){
var _1ca=this._import(Resolver.resolve(url));
if(Client.isMozilla){
this._processor=new XSLTProcessor();
this._processor.importStylesheet(_1ca);
}else{
this._cache=DOMUtil.getMSXMLXSLTemplate();
this._cache.stylesheet=_1ca;
}
};
XSLTransformer.prototype._import=function(url){
var _1cc=null;
if(Client.isMozilla){
var _1cd=DOMUtil.getXMLHTTPRequest();
_1cd.open("get",Resolver.resolve(url),false);
_1cd.send(null);
_1cc=_1cd.responseXML;
}else{
var _1cc=DOMUtil.getDOMDocument(true);
_1cc.async=false;
_1cc.load(url);
}
return _1cc;
};
XSLTransformer.prototype.transformToDocument=function(dom){
var _1cf=null;
if(Client.isMozilla){
_1cf=this._processor.transformToDocument(dom);
}else{
alert("TODO!");
}
return _1cf;
};
XSLTransformer.prototype.transformToString=function(dom,_1d1){
var _1d2=null;
if(Client.isMozilla){
var doc=this.transformToDocument(dom);
_1d2=DOMSerializer.serialize(doc,_1d1);
}else{
var proc=this._cache.createProcessor();
proc.input=dom;
proc.transform();
_1d2=proc.output;
}
return _1d2;
};
function _CSSUtil(){
}
_CSSUtil.prototype={_getCurrent:function(_1d5){
var _1d6=_1d5.style?_1d5.className:_1d5.getAttribute("class");
_1d6=_1d6?_1d6:"";
return _1d6;
},_contains:function(_1d7,sub){
return _1d7.indexOf(sub)>-1;
},_attach:function(_1d9,sub){
return _1d9+(_1d9==""?"":" ")+sub;
},_detach:function(_1db,sub){
if(this._contains(_1db," "+sub)){
sub=" "+sub;
}
return _1db.replace(sub,"");
},attachClassName:function(_1dd,_1de){
if(_1dd.classList!=null){
if(!_1dd.classList.contains(_1de)){
_1dd.classList.add(_1de);
}
}else{
var _1df=this._getCurrent(_1dd);
if(!this._contains(_1df,_1de)){
_1df=this._attach(_1df,_1de);
}
if(_1dd.style!=null){
_1dd.className=_1df;
}else{
_1dd.setAttribute("class",_1df);
}
}
},detachClassName:function(_1e0,_1e1){
if(_1e0.classList!=null){
if(_1e0.classList.contains(_1e1)){
_1e0.classList.remove(_1e1);
}
}else{
var _1e2=this._getCurrent(_1e0);
if(this._contains(_1e2,_1e1)){
_1e2=this._detach(_1e2,_1e1);
}
if(_1e0.style!=null){
_1e0.className=_1e2;
}else{
if(_1e2==""){
_1e0.removeAttribute("class");
}else{
_1e0.setAttribute("class",_1e2);
}
}
}
},hasClassName:function(_1e3,_1e4){
var _1e5=false;
if(_1e3.classList!=null){
_1e5=_1e3.classList.contains(_1e4);
}else{
_1e5=this._contains(this._getCurrent(_1e3),_1e4);
}
return _1e5;
}};
var CSSUtil=new _CSSUtil();
function _CSSComputer(){
}
_CSSComputer.prototype={_margins:{top:Client.isExplorer?"marginTop":"margin-top",right:Client.isExplorer?"marginRight":"margin-right",bottom:Client.isExplorer?"marginBottom":"margin-bottom",left:Client.isExplorer?"marginLeft":"margin-left"},_paddings:{top:Client.isExplorer?"paddingTop":"padding-top",right:Client.isExplorer?"paddingRight":"padding-right",bottom:Client.isExplorer?"paddingBottom":"padding-bottom",left:Client.isExplorer?"paddingLeft":"padding-left"},_borders:{top:Client.isExplorer?"borderTopWidth":"border-top-width",right:Client.isExplorer?"borderRightWidth":"border-right-width",bottom:Client.isExplorer?"borderBottomWidth":"border-bottom-width",left:Client.isExplorer?"borderLeftWidth":"border-left-width"},_getComplexResult:function(_1e6,_1e7){
var _1e8={};
for(var _1e9 in _1e6){
var ent=parseInt(DOMUtil.getComputedStyle(_1e7,_1e6[_1e9]));
_1e8[_1e9]=isNaN(ent)?0:ent;
}
return _1e8;
},_getMargin:function(_1eb){
return this._getComplexResult(this._margins,_1eb);
},getPadding:function(_1ec){
return this._getComplexResult(this._paddings,_1ec);
},getBorder:function(_1ed){
return this._getComplexResult(this._borders,_1ed);
},getPosition:function(_1ee){
return DOMUtil.getComputedStyle(_1ee,"position");
},getFloat:function(_1ef){
return DOMUtil.getComputedStyle(_1ef,Client.isExplorer?"styleFloat":"float");
},getZIndex:function(_1f0){
return parseInt(DOMUtil.getComputedStyle(_1f0,Client.isExplorer?"zIndex":"z-index"));
},getBackgroundColor:function(_1f1){
return DOMUtil.getComputedStyle(_1f1,Client.isExplorer?"backgroundColor":"background-color");
}};
var CSSComputer=new _CSSComputer();
var System=new function(){
var _1f2=SystemLogger.getLogger("System");
var root=null;
this.hasActivePerspectives=false;
this.getRootNode=function(){
if(root==null){
root=new SystemNode(TreeService.GetRootElements("")[0]);
}
return root;
};
this.getPerspectiveNodes=function(){
var _1f4=new List();
var _1f5=TreeService.GetActivePerspectiveElements("dummy");
var list=new List(_1f5);
if(list.hasEntries()){
this.hasActivePerspectives=true;
list.each(function(_1f7){
_1f4.add(new SystemNode(_1f7));
});
}else{
EventBroadcaster.broadcast(BroadcastMessages.PERSPECTIVES_NONE);
}
return _1f4;
};
this.getChildNodes=function(node,_1f9){
var _1fa=new List();
var _1fb=null;
if(_1f9){
if(SearchTokens.hasToken(_1f9)){
_1f9=SearchTokens.getToken(_1f9);
}
_1fb=TreeService.GetElementsBySearchToken(node.getData(),_1f9);
}else{
_1fb=TreeService.GetElements(node.getData());
}
new List(_1fb).each(function(_1fc){
var _1fd=new SystemNode(_1fc);
if(_1f9){
_1fd.searchToken=_1f9;
}
_1fa.add(_1fd);
});
return _1fa;
};
this.getDescendantBranch=function(_1fe){
var map=new Map();
var arg=[];
_1fe.each(function(node){
arg.push({ProviderName:node.getProviderName(),EntityToken:node.getEntityToken(),Piggybag:node.getPiggyBag()});
});
var _202=TreeService.GetMultipleChildren(arg);
var _203=new List(_202);
while(_203.hasNext()){
this._listNodesInMap(_203.getNext(),map);
}
return map;
};
this.getInvisibleBranch=function(_204,_205,_206){
var map=new Map();
var arg=[];
_206.each(function(node){
arg.push({ProviderName:node.getProviderName(),EntityToken:node.getEntityToken(),Piggybag:node.getPiggyBag()});
});
var _20a=TreeService.FindEntityToken(_204,_205,arg);
if(_20a instanceof SOAPFault){
_1f2.error(_20a.getFaultString());
if(Application.isDeveloperMode){
alert(_20a.getFaultString());
}
map=null;
}else{
var _20b=new List(_20a);
while(_20b.hasNext()){
this._listNodesInMap(_20b.getNext(),map);
}
}
return map;
};
this._listNodesInMap=function(_20c,map){
var list=new List();
var key=_20c.ElementKey;
var _210=new List(_20c.ClientElements);
map.set(key,list);
while(_210.hasNext()){
var _211=_210.getNext();
list.add(new SystemNode(_211));
}
};
this.getChildNodesBySearchToken=function(node,_213){
return this.getChildNodes(node,_213);
};
this.getNamedRoots=function(key,_215){
var _216=new List();
var _217=null;
if(_215){
if(SearchTokens.hasToken(_215)){
_215=SearchTokens.getToken(_215);
}
_217=TreeService.GetNamedRootsBySearchToken(key,_215);
}else{
_217=TreeService.GetNamedRoots(key);
}
new List(_217).each(function(_218){
var node=new SystemNode(_218);
if(_215){
node.searchToken=_215;
}
_216.add(node);
});
return _216;
};
this.getNamedRootsBySearchToken=function(key,_21b){
return this.getNamedRoots(key,_21b);
};
function compileActionList(node,_21d,_21e){
var _21f=_21d.ClientElementActionGroupId;
if(_21f!=null){
var _220=_21e.get(_21f).ClientElementActionGroupItems;
if(_220&&_220.length>0){
node.setActionList(new List(_220));
}
}
}
};
SystemNode.dispose=function(node){
for(var prop in node){
node[prop]=null;
}
};
SystemNode.taggedNodes=new Map();
function SystemNode(data){
this.logger=SystemLogger.getLogger("SystemNode");
this._data=data;
this._actionProfile=null;
this._propertyBag=null;
this._registerSystemActions();
this.searchToken=null;
if(this._data.TagValue!=null){
SystemNode.taggedNodes.set(this._data.TagValue,this);
}
}
SystemNode.prototype.toString=function(){
return "[SystemNode]";
};
SystemNode.prototype._registerSystemActions=function(){
var self=this;
new List(this._data.ActionKeys).each(function(key){
if(!SystemAction.actionMap.has(key)){
new List(self._data.Actions).each(function(_226){
var _227=_226.ActionCategory.Name;
if(SystemAction.hasCategory(_227)){
var _228=new SystemAction(_226);
SystemAction.actionMap.set(_226.ActionKey,_228);
}else{
throw "No such action category: "+_227;
}
});
}
});
};
SystemNode.prototype.getData=function(){
return this._data;
};
SystemNode.prototype.getChildren=function(){
var _229=null;
if(this.searchToken){
_229=System.getChildNodesBySearchToken(this,this.searchToken);
}else{
_229=System.getChildNodes(this);
}
return _229;
};
SystemNode.prototype.getDescendantBranch=function(list){
return System.getDescendantBranch(list);
};
SystemNode.prototype.getLabel=function(){
return this._data.Label;
};
SystemNode.prototype.getProviderName=function(){
return this._data.ProviderName;
};
SystemNode.prototype.getEntityToken=function(){
return this._data.EntityToken;
};
SystemNode.prototype.getPiggyBag=function(){
var _22b=this._data.Piggybag;
if(_22b==null){
_22b="";
}
return _22b;
};
SystemNode.prototype.getHandle=function(){
return this._data.ElementKey;
};
SystemNode.prototype.getTag=function(){
return this._data.TagValue;
};
SystemNode.prototype.getImageProfile=function(size){
return new ImageProfile({image:ImageProvider.getImageURL(this._data.Icon,size),imageActive:ImageProvider.getImageURL(this._data.OpenedIcon?this._data.OpenedIcon:this._data.Icon,size)});
};
SystemNode.prototype.getToolTip=function(){
var _22d=null;
if(typeof this._data.ToolTip!="undefined"){
_22d=this._data.ToolTip;
}
return _22d;
};
SystemNode.prototype.getPropertyBag=function(){
if(!this._propertyBag&&this._data.PropertyBag&&this._data.PropertyBag.length!=0){
var map={};
new List(this._data.PropertyBag).each(function(_22f){
map[_22f.Key]=_22f.Value;
});
this._propertyBag=map;
}
return this._propertyBag;
};
SystemNode.prototype.hasChildren=function(){
return this._data.HasChildren;
};
SystemNode.prototype.getActionProfile=function(){
if(this._actionProfile==null&&this._data.ActionKeys!=null&&this._data.ActionKeys.length>0){
var map=new Map();
var self=this;
new List(this._data.ActionKeys).each(function(key){
if(SystemAction.actionMap.has(key)){
var _233=SystemAction.actionMap.get(key);
var _234=true;
if(_233.getCategory()==SystemAction.categories.DeveloperMode){
if(!Application.isDeveloperMode){
_234=false;
}
}
if(_234){
var id=_233.getGroupID();
if(!map.has(id)){
map.set(id,new List());
}
var list=map.get(id);
list.add(_233);
}
}else{
throw "No details for action key: "+key;
}
});
this._actionProfile=map;
}
return this._actionProfile;
};
SystemNode.prototype.hasDragType=function(){
return this._data.DragType!=null;
};
SystemNode.prototype.getDragType=function(){
return this._data.DragType;
};
SystemNode.prototype.hasDragAccept=function(){
return this._data.DropTypeAccept!=null;
};
SystemNode.prototype.getDragAccept=function(){
return new List(this._data.DropTypeAccept);
};
SystemNode.prototype.hasDetailedDropSupport=function(){
return this._data.DetailedDropSupported==true;
};
SystemNode.prototype.isDisabled=function(){
return this._data.IsDisabled==true;
};
SystemNode.prototype.isTreeLockEnabled=function(){
return this._data.TreeLockEnabled==true;
};
SystemNode.prototype.dispose=function(){
SystemNode.dispose(this);
};
SystemAction.OPEN_DOCUMENT="OpenDocument";
SystemAction.OPEN_MODAL_DIALOG="OpenModalDialog";
SystemAction.TAG_CHANGEFROMLANGUAGE="ChangeFromLocale";
SystemAction.categories={Edit:"Edit",Add:"Add",Delete:"Delete",Other:"Other",DeveloperMode:"DeveloperMode"};
SystemAction.taggedActions=new Map();
SystemAction.actionMap=new Map();
SystemAction.invoke=function(_237,arg){
var node=arg;
if(node instanceof SystemNode){
Application.lock(SystemAction);
_237.logger.debug("Execute \""+_237.getLabel()+"\" on \""+node.getLabel()+"\".");
setTimeout(function(){
TreeService.ExecuteSingleElementAction(node.getData(),_237.getHandle(),Application.CONSOLE_ID);
MessageQueue.update();
Application.unlock(SystemAction);
},0);
}else{
throw "Multiple actiontargets not supported.";
}
};
SystemAction.invokeTagged=function(_23a,_23b){
action=SystemAction.taggedActions.get(_23a);
node=SystemNode.taggedNodes.get(_23b);
SystemAction.invoke(action,node);
};
SystemAction.hasCategory=function(_23c){
return SystemAction.categories[_23c]?true:false;
};
function SystemAction(_23d){
this.logger=SystemLogger.getLogger("SystemAction");
this._data=_23d;
if(this._data.TagValue!=null){
SystemAction.taggedActions.set(this._data.TagValue,this);
}
}
SystemAction.prototype.toString=function(){
return "[SystemAction]";
};
SystemAction.prototype.getHandle=function(){
return this._data.ActionToken;
};
SystemAction.prototype.getKey=function(){
return this._data.ActionKey;
};
SystemAction.prototype.getLabel=function(){
return this._data.Label;
};
SystemAction.prototype.getImage=function(){
return ImageProvider.getImageURL(this._data.Icon);
};
SystemAction.prototype.getDisabledImage=function(){
return null;
};
SystemAction.prototype.getToolTip=function(){
return this._data.ToolTip;
};
SystemAction.prototype.getCategory=function(){
return this._data.ActionCategory.Name;
};
SystemAction.prototype.getGroupID=function(){
return this._data.ActionCategory.GroupId;
};
SystemAction.prototype.isInToolBar=function(){
return this._data.ActionCategory.IsInToolbar;
};
SystemAction.prototype.isInFolder=function(){
return this._data.ActionCategory.IsInFolder;
};
SystemAction.prototype.getFolderName=function(){
var _23e=null;
if(this.isInFolder()){
_23e=this._data.ActionCategory.FolderName;
}
return _23e;
};
SystemAction.prototype.isDisabled=function(){
return this._data.Disabled;
};
SystemAction.prototype.isCheckBox=function(){
return typeof this._data.CheckboxStatus!=Types.UNDEFINED;
};
SystemAction.prototype.getTag=function(){
var _23f=null;
if(typeof this._data.TagValue!="undefined"){
_23f=this._data.TagValue;
}
return _23f;
};
SystemAction.prototype.isChecked=function(){
var _240=null;
if(this.isCheckBox()){
_240=this._data.CheckboxStatus=="Checked";
}else{
throw "Not a checkbox!";
}
return _240;
};
function _UpdateManager(){
var _241=null;
if(!window.UpdateManager){
this._construct();
_241=this;
}
return _241;
}
_UpdateManager.prototype={version:"0.1",CLASSNAME_FORM:"updateform",CLASSNAME_ZONE:"updatezone",CLASSNAME_GONE:"updategone",EVENT_BEFOREUPDATE:"beforeupdate",EVENT_AFTERUPDATE:"afterupdate",EVENT_ERRORUPDATE:"errorupdate",xhtml:null,summary:null,isEnabled:true,isDebugging:false,isUpdating:false,hasSoftAttributes:false,hasSoftSiblings:false,pendingResponse:null,currentDOM:null,errormessage:null,_assistant:null,_updates:null,_replaced:null,_dotnetnames:["__VIEWSTATE","__EVENTVALIDATION","__EVENTTARGET","__EVENTARGUMENT","__LASTFOCUS"],plugins:[],toString:function(){
return "[object UpdateManager]";
},_construct:function(_242){
var root=document.documentElement;
var _244=root.namespaceURI;
if(_244==null){
_244=new String(root.getAttribute("xmlns"));
}
if(_244=="http://www.w3.org/1999/xhtml"){
this._addListener(window,"load");
this._addListener(window,"unload");
}else{
this.error("Not an XHTML document!");
}
},_setup:function(){
if(this.isEnabled){
this.isEnabled=this.setupForms();
if(this.isEnabled){
if(this.xhtml!=null){
if(typeof this.xhtml=="string"){
var _245=decodeURIComponent(this.xhtml);
this.currentDOM=UpdateAssistant.parse(_245);
}else{
throw new TypeError();
}
}else{
var _246=this;
UpdateAssistant.getXMLHttpRequest("get",window.location.toString(),{handleResponse:function(dom){
_246.currentDOM=dom;
}}).send(null);
}
}
}
},setupForms:function(){
var _248=false;
Array.forEach(document.forms,function(form){
if(form.className.indexOf(this.CLASSNAME_FORM)>-1){
if(!form.__isSetup){
this._setupForm(form);
form.__isSetup=true;
}
_248=true;
}
},this);
return _248;
},_setupForm:function(form){
var _24b=this;
this._addListener(form,"submit");
form.__submit=form.submit;
form.submit=function(){
if(_24b.isEnabled){
_24b._submit(form);
}else{
form.__submit();
}
return false;
};
},_addListener:function(_24c,type){
if(_24c.addEventListener!=null){
_24c.addEventListener(type,this,false);
}else{
var _24e=this;
_24c.attachEvent("on"+type,function(){
_24e.handleEvent(window.event);
});
}
},handleEvent:function(e){
switch(e.type){
case "load":
if(this.isEnabled){
this._setup();
}
break;
case "unload":
this.isEnabled=false;
break;
case "submit":
if(this.isEnabled){
if(document.all){
e.returnValue=false;
}else{
e.preventDefault();
}
var form=e.target?e.target:e.srcElement;
this._submit(form);
}
break;
}
},_submit:function(form){
if(!this.isUpdating){
this.isUpdating=true;
UpdateAssistant.dispatchEvent(document.documentElement,this.EVENT_BEFOREUPDATE);
this._postRequest(form);
}
},handleResponse:function(dom){
if(this.isEnabled){
this.summary=new String("");
this.errors=new String("");
if(dom!=null){
var _253=UpdateAssistant.getUpdateZones(dom);
var _254=UpdateAssistant.getUpdateZones(this.currentDOM);
this._updates=[];
this._replaced={};
_253.forEach(function(_255,_256){
var _257=_254[_256];
this._crawl(_255,_257);
},this);
this._updates.forEach(function(_258,_259){
_258.update();
_258.dispose();
},this);
this._dotnetnames.forEach(function(name){
this._fixdotnet(dom,name);
},this);
this.currentDOM=dom;
}
}
this.isUpdating=false;
UpdateAssistant.dispatchEvent(document.documentElement,this.EVENT_AFTERUPDATE);
},handleSimilarResponse:function(){
UpdateAssistant.dispatchEvent(document.documentElement,this.EVENT_AFTERUPDATE);
},_crawl:function(_25b,_25c,_25d,id){
var _25f=true;
var _260=_25c.getAttribute("class");
if(_260==null||_260.indexOf(this.CLASSNAME_GONE)==-1){
if(_25c.nodeType==Node.ELEMENT_NODE){
var _261=_25c.getAttribute("id");
if(_261!=null){
_25d=_25b;
id=_261;
}
}
if(_25f=this._check(_25b,_25c,_25d,id)){
var _262=_25b.firstChild;
var _263=_25c.firstChild;
while(_262!=null&&_263!=null&&!this._replaced[id]){
switch(_262.nodeType){
case Node.TEXT_NODE:
_25f=this._check(_262,_263,_25d,id);
break;
case Node.DOCUMENT_NODE:
case Node.ELEMENT_NODE:
_25f=this._crawl(_262,_263,_25d,id);
break;
}
if(this._replaced[id]){
_25f=false;
}else{
_262=_262.nextSibling;
_263=_263.nextSibling;
}
}
}
}
return _25f;
},_check:function(_264,_265,_266,id){
var _268=true;
var _269=null;
var _26a=false;
var _26b=false;
if((_264!=null&&_265==null)||(_264==null&&_265!=null)){
_268=false;
}else{
if(_268=_264.nodeType==_265.nodeType){
switch(_265.nodeType){
case Node.ELEMENT_NODE:
if(_264.namespaceURI!=_265.namespaceURI||_264.nodeName!=_265.nodeName){
_268=false;
}else{
if(_268=(_264.nodeName==_265.nodeName)){
var _26c=_265.getAttribute("id");
var _26d=_264.getAttribute("id");
if(_26c!=null&&_26d!=null){
if(_26c!=_26d){
_268=false;
}else{
if((_269=this._getPlugin(_264,_265))!=null){
if(_269.updateElement(_264,_265)){
_26b=true;
_268=false;
}
}
}
}
if(_268){
if(_268=this._checkAttributes(_264,_265)){
if(this.hasSoftSiblings&&this._hasSoftChildren(_264)&&this._hasSoftChildren(_265)){
if(this._validateSoftChildren(_264,_265)){
this._updateSoftChildren(_264,_265);
_26a=true;
}
_268=false;
}else{
_268=_264.childNodes.length==_265.childNodes.length;
}
}
}
}
}
break;
case Node.TEXT_NODE:
if(_264.data.trim()!=_265.data.trim()){
_268=false;
}
break;
}
}
}
if(_268==false&&!_26a&&!_26b){
if(id!=null&&_266!=null){
this.addUpdate(new ReplaceUpdate(id,_266));
}
}
return _268;
},_checkAttributes:function(_26e,_26f){
var _270=true;
var _271=false;
var _272=_26e.attributes;
var _273=_26f.attributes;
if(_272.length!=_273.length){
_271=true;
}else{
_271=!Array.every(_272,function(att1,i){
var att2=_273.item(i);
return att1.nodeName==att2.nodeName&&att1.nodeValue==att2.nodeValue;
});
}
if(_271){
var _277=_26e.getAttribute("id");
var _278=_26f.getAttribute("id");
if(this.hasSoftAttributes&&_277!=null&&_277==_278){
this.addUpdate(new AttributesUpdate(_278,_26e,_26f));
}else{
_270=false;
}
}
return _270;
},_hasSoftChildren:function(_279){
var _27a=true;
if(_279.hasChildNodes()){
_27a=Array.every(_279.childNodes,function(node){
var res=true;
switch(node.nodeType){
case Node.TEXT_NODE:
res=!/[^\t\n\r ]/.test(node.nodeValue);
break;
case Node.ELEMENT_NODE:
res=node.getAttribute("id")!=null;
break;
}
return res;
});
}
return _27a;
},_validateSoftChildren:function(_27d,_27e){
var _27f=true;
var _280=-1;
var _281=-1;
var _282=-1;
var news=this._toMap(_27d.childNodes,true);
var olds=this._toMap(_27e.childNodes,true);
for(var id in olds){
if(_27f){
var _286=olds[id];
_27f=_286>=_280;
if(news[id]!=null){
_282=news[id];
_27f=_282>=_281;
}
}
_280=_286;
if(_282>-1){
_281=_282;
}
}
return _27f;
},_updateSoftChildren:function(_287,_288){
var news=this._toMap(_287.childNodes);
var olds=this._toMap(_288.childNodes);
for(var id in olds){
if(news[id]==null){
this.addUpdate(new SiblingUpdate(Update.TYPE_REMOVE,id,null,null));
}else{
this._crawl(news[id],olds[id]);
}
}
var _28c=null;
for(id in news){
if(olds[id]==null){
var _28d=news[id];
if(_28c==null){
var _28e=_288.getAttribute("id");
this.addUpdate(new SiblingUpdate(Update.TYPE_INSERT,_28e,_28d,true));
}else{
this.addUpdate(new SiblingUpdate(Update.TYPE_INSERT,_28c,_28d,false));
}
}
_28c=id;
}
},addUpdate:function(_28f){
this._updates.push(_28f);
if(_28f instanceof ReplaceUpdate){
this._replaced[_28f.id]=true;
}
},_getPlugin:function(_290,_291){
var _292=null;
this.plugins.every(function(_293){
if(_293.handleElement(_290,_291)){
_292=_293;
}
return _292==null;
});
return _292;
},_toMap:function(_294,_295){
var _296={};
Array.forEach(_294,function(node,_298){
if(node.nodeType==Node.ELEMENT_NODE){
_296[node.getAttribute("id")]=_295?_298:node;
}
});
return _296;
},_getPost:function(form){
var _29a=new String("");
if(form!=null){
var last="";
Array.forEach(form.elements,function(_29c){
var name=_29c.name;
var _29e=encodeURIComponent(_29c.value);
switch(_29c.type){
case "button":
case "submit":
var _29f=UpdateAssistant.getActiveElement();
if(_29c==_29f&&name!=""){
_29a+=name+"="+_29e+"&";
}
break;
case "radio":
if(_29c.checked){
_29a+=name+"="+_29e+"&";
}
break;
case "checkbox":
if(_29c.checked){
if(_29c.name==last){
if(_29a.lastIndexOf("&")==_29a.length-1){
_29a=_29a.substr(0,_29a.length-1);
}
_29a+=","+_29e;
}else{
_29a+=name+"="+_29c.value;
}
last=name;
_29a+="&";
}
break;
case "text":
case "hidden":
case "password":
case "textarea":
case "select-one":
_29a+=name+"="+_29e+"&";
break;
}
});
}
return _29a.substr(0,_29a.length-1);
},_postRequest:function(form){
var _2a1=form.method!=""?form.method:"get";
var _2a2=form.action!=""?form.action:window.location.toString();
var _2a3=this._getPost(form);
if(_2a1=="get"){
if(_2a2.indexOf("?")>-1){
_2a2=_2a2+"&"+_2a3;
}else{
_2a2+"?"+_2a3;
}
}
var _2a4=this;
var _2a5=UpdateAssistant.getXMLHttpRequest(_2a1,_2a2,this);
if(_2a1=="post"){
_2a5.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
}
_2a5.send(_2a1=="post"?_2a3:null);
},_fixdotnet:function(dom,id){
var _2a8=document.getElementById(id);
if(_2a8!=null){
var _2a9=UpdateAssistant.getElementById(dom,id);
if(_2a9!=null){
var _2aa=_2a9.getAttribute("value");
if(_2aa!==_2a8.value){
_2a8.value=_2aa;
}
}
}
},debug:function(out){
if(this.isDebugging){
alert("UpdateManager dysfunction. \n\n"+out);
}
},error:function(out){
this.errorsmessage=out;
UpdateAssistant.dispatchEvent(document.documentElement,UpdateManager.EVENT_ERRORUPDATE);
this.debug(out);
},report:function(_2ad){
this.summary+=_2ad+"\n";
}};
var UpdateManager=new _UpdateManager();
function _UpdateAssistant(){
var _2ae=null;
if(!window.UpdateAssistant){
this._construct();
_2ae=this;
}
return _2ae;
}
_UpdateAssistant.prototype={_serializer:window.XMLSerializer!=null?new XMLSerializer():null,_parser:window.DOMParser!=null?new DOMParser():null,_activeElement:null,_construct:function(){
if(!window.Node){
window.Node={ELEMENT_NODE:1,TEXT_NODE:3,DOCUMENT_NODE:9};
}
if(!Array.every){
Array.every=function(_2af,fun){
var _2b1=true;
var len=_2af.length>>>0;
if(typeof fun!="function"){
throw new TypeError();
}else{
var _2b3=arguments[2];
for(var i=0;i<len;i++){
if(typeof _2af[i]!="undefined"){
if(!fun.call(_2b3,_2af[i],i,_2af)){
_2b1=false;
break;
}
}
}
}
return _2b1;
};
}
if(!Array.prototype.every){
Array.prototype.every=function(fun){
var _2b6=arguments[1];
return Array.every(this,fun,_2b6);
};
}
if(!Array.forEach){
Array.forEach=function(_2b7,fun){
var len=_2b7.length>>>0;
if(typeof fun!="function"){
throw new TypeError();
}else{
var _2ba=arguments[2];
for(var i=0;i<len;i++){
if(typeof _2b7[i]!="undefined"){
fun.call(_2ba,_2b7[i],i,_2b7);
}
}
}
};
}
if(!Array.prototype.forEach){
Array.prototype.forEach=function(fun){
var _2bd=arguments[1];
Array.forEach(this,fun,_2bd);
};
}
if(!String.prototype.trim){
String.prototype.trim=function(){
return this.replace(/^\s*/,"").replace(/\s*$/,"");
};
}
if(document.addEventListener!=null){
document.addEventListener("focus",this,false);
document.addEventListener("blur",this,false);
document.addEventListener("mousedown",this,false);
}
},handleEvent:function(e){
switch(e.type){
case "focus":
case "mousedown":
this._activeElement=e.target;
break;
case "blur":
if(this._activeElement==e.target){
this._activeElement=null;
}
break;
}
},getXMLHttpRequest:function(_2bf,_2c0,_2c1){
var _2c2=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Msxml2.XMLHTTP.3.0");
if(_2c2!=null){
_2c2.open(_2bf,_2c0,(_2c1!=null?true:false));
if(_2c1!=null){
function action(){
if(_2c2.readyState==4){
var text=_2c2.responseText;
UpdateManager.pendingResponse=text;
var dom=UpdateAssistant.parse(text);
if(dom!=null){
_2c1.handleResponse(dom);
}
}
}
if(_2c2.addEventListener!=null){
_2c2.addEventListener("readystatechange",{handleEvent:function(){
action();
}},false);
}else{
_2c2.onreadystatechange=action;
}
}
}
return _2c2;
},dispatchEvent:function(_2c5,name){
var _2c7=true;
if(_2c5.fireEvent!=null){
_2c7=_2c5.fireEvent("on"+name);
}else{
var _2c8=document.createEvent("UIEvents");
_2c8.initEvent(name,true,true);
_2c7=_2c5.dispatchEvent(_2c8);
}
return _2c7;
},getUpdateZones:function(dom){
var _2ca="//*[@id and contains(@class,'updatezone')]";
var _2cb=[];
var _2cc=null;
var _2cd=null;
if(window.XPathResult!=null){
var type=XPathResult.ORDERED_NODE_ITERATOR_TYPE;
_2cc=dom.evaluate(_2ca,dom,null,type,null);
while((_2cd=_2cc.iterateNext())!=null){
_2cb.push(_2cd);
}
}else{
_2cc=dom.documentElement.selectNodes(_2ca);
Array.forEach(_2cc,function(_2cf){
_2cb.push(_2cf);
});
}
return _2cb;
},getElementById:function(dom,id){
var _2d2="//*[@id='"+id+"']";
var _2d3=null;
var _2d4=null;
if(window.XPathResult!=null){
var type=XPathResult.FIRST_ORDERED_NODE_TYPE;
_2d3=dom.evaluate(_2d2,dom,null,type,null);
_2d4=_2d3.singleNodeValue;
}else{
_2d4=dom.documentElement.selectNodes(_2d2)[0];
}
return _2d4;
},_getIds:function(dom){
var _2d7="//*[@id]";
var _2d8=null;
var _2d9=[];
if(window.XPathResult!=null){
var type=XPathResult.ORDERED_NODE_ITERATOR_TYPE;
_2d8=dom.evaluate(_2d7,dom,null,type,null);
while((element=_2d8.iterateNext())!=null){
_2d9.push(element.getAttribute("id"));
}
}else{
_2d8=dom.documentElement.selectNodes(_2d7);
Array.forEach(_2d8,function(_2db){
_2d9.push(_2db.getAttribute("id"));
});
}
return _2d9;
},toHTMLElement:function(_2dc){
var _2dd=this.serialize(_2dc);
var temp=document.createElement("temp");
temp.innerHTML=_2dd;
return temp.firstChild;
},getActiveElement:function(){
var _2df=document.activeElement;
if(_2df==null||_2df==document.body){
_2df=this._activeElement;
}
return _2df;
},serialize:function(_2e0){
var _2e1=null;
if(this._serializer!=null){
_2e1=this._serializer.serializeToString(_2e0);
}else{
_2e1=_2e0.xml;
}
return _2e1;
},hasDifferences:function(_2e2,_2e3){
var s1=null;
var s2=null;
if(this._serializer!=null){
s1=this._serializer.serializeToString(_2e2);
s2=this._serializer.serializeToString(_2e3);
}else{
s1=_2e2.xml;
s2=_2e3.xml;
}
return s1!=s2;
},parse:function(_2e6){
var _2e7=null;
if(this._parser!=null){
_2e7=this._parser.parseFromString(_2e6,"text/xml");
}else{
_2e7=new ActiveXObject("Msxml2.DOMDocument.3.0");
_2e7.setProperty("SelectionLanguage","XPath");
_2e7.loadXML(_2e6);
}
return this._validate(_2e7);
},_validate:function(dom){
var out=null;
if(dom.parseError!=null&&dom.parseError.errorCode!=0){
out=dom.parseError.reason;
}else{
var _2ea=dom.getElementsByTagName("parsererror").item(0);
if(_2ea!=null){
out=_2ea.textContent.replace(/\^/g,"").replace(/\-/g,"");
}
}
if(out==null){
var has={},ids=this._getIds(dom);
ids.every(function(id){
var _2ee=!has[id];
has[id]=true;
if(!_2ee){
out="Element \""+id+"\" encountered twice.";
}
return _2ee;
});
}
if(out!=null){
UpdateManager.error(out);
dom=null;
}
return dom;
}};
var UpdateAssistant=new _UpdateAssistant();
function UpdatePlugin(){
this.handleElement=function(_2ef,_2f0){
var _2f1=false;
switch(_2ef.nodeName.toLowerCase()){
case "input":
case "textarea":
switch(_2ef.getAttribute("id")){
case "__EVENTTARGET":
case "__EVENTARGUMENT":
case "__VIEWSTATE":
case "__EVENTVALIDATION":
_2f1=false;
break;
}
break;
}
return _2f1;
};
this.updateElement=function(_2f2,_2f3){
var id=_2f2.getAttribute("id");
var _2f5=document.getElementById(id);
if(_2f5!=null){
var _2f6=null;
switch(_2f5.nodeName.toLowerCase()){
case "input":
_2f6=_2f2.getAttribute("value");
break;
case "textarea":
_2f6=_2f2.textContent?_2f2.textContent:_2f2.text;
break;
}
if(_2f6==null){
_2f6="";
}
if(_2f6!=_2f5.value){
_2f5.value=_2f6;
UpdateManager.report("Property [value] updated on field \""+id+"\"");
}
}
return true;
};
}
UpdateManager.plugins.push(new UpdatePlugin());
Update.TYPE_REPLACE="replace";
Update.TYPE_ATTRIBUTES="attributes";
Update.TYPE_REMOVE="remove";
Update.TYPE_INSERT="insert";
Update.EVENT_BEFOREUPDATE="beforeupdate";
Update.EVENT_AFTERUPDATE="afterupdate";
function Update(){
return this;
}
Update.prototype={type:null,key:null,id:null,element:null,update:function(){
},dispose:function(){
this.element=null;
},_beforeUpdate:function(_2f7){
var _2f8=true;
if(_2f7!=null){
_2f7.__updateType=this.type;
_2f8=UpdateAssistant.dispatchEvent(_2f7,Update.EVENT_BEFOREUPDATE);
}
return _2f8;
},_afterUpdate:function(_2f9){
var _2fa=true;
if(_2f9!=null){
_2f9.__updateType=this.type;
_2fa=UpdateAssistant.dispatchEvent(_2f9,Update.EVENT_AFTERUPDATE);
}
return _2fa;
}};
ReplaceUpdate.prototype=new Update();
ReplaceUpdate.superclass=Update.prototype;
function ReplaceUpdate(id,_2fc){
this.type=Update.TYPE_REPLACE;
this.id=id;
this.element=_2fc;
return this;
}
ReplaceUpdate.prototype.update=function(){
var _2fd,_2fe,_2ff=UpdateAssistant.toHTMLElement(this.element);
if((_2fd=document.getElementById(this.id))!=null){
if((_2fe=_2fd.parentNode)!=null){
if(this._beforeUpdate(_2fd)){
_2fe.replaceChild(_2ff,_2fd);
this._afterUpdate(_2ff);
}
}
}else{
UpdateManager.error("Element null point: "+this.id);
}
};
ReplaceUpdate.prototype._afterUpdate=function(_300){
var _301=ReplaceUpdate.superclass._afterUpdate.call(this,_300);
UpdateManager.report("Replaced element id=\""+this.id+"\"");
if(_300.nodeName=="form"||_300.getElementsByTagName("form").item(0)!=null){
UpdateManager.setupForms();
}
return _301;
};
SiblingUpdate.prototype=new Update();
SiblingUpdate.superclass=Update.prototype;
function SiblingUpdate(type,id,_304,_305){
this.type=type;
this.id=id;
this.element=_304;
this.isFirst=_305;
return this;
}
SiblingUpdate.prototype.update=function(){
var _306=document.getElementById(this.id);
switch(this.type){
case Update.TYPE_REMOVE:
this._remove(_306);
break;
case Update.TYPE_INSERT:
this._insert(this.element,_306);
break;
}
};
SiblingUpdate.prototype._remove=function(_307){
var _308=_307.parentNode;
if(_308!=null){
if(this._beforeUpdate(_307)){
_308.removeChild(_307);
this._afterUpdate(_308);
}
}
};
SiblingUpdate.prototype._insert=function(_309,_30a){
var _30b=UpdateAssistant.toHTMLElement(_309);
if(this.isFirst){
var _30c=_30a;
if(_30c!=null){
if(this._beforeUpdate(_30c)){
_30c.insertBefore(_30b,_30c.firstChild);
this._afterUpdate(_30b);
}
}
}else{
var _30c=_30a.parentNode;
if(_30c!=null){
if(this._beforeUpdate(_30c)){
_30c.insertBefore(_30b,_30a.nextSibling);
this._afterUpdate(_30b);
}
}
}
};
SiblingUpdate.prototype._beforeUpdate=function(_30d){
var _30e=SiblingUpdate.superclass._beforeUpdate.call(this,_30d);
if(this.type==Update.TYPE_REMOVE){
UpdateManager.report("Removed element id=\""+_30d.id+"\"");
}
return _30e;
};
SiblingUpdate.prototype._afterUpdate=function(_30f){
var _310=true;
if(_30f!=null){
_310=SiblingUpdate.superclass._afterUpdate.call(this,_30f);
if(this.type==Update.TYPE_INSERT){
UpdateManager.report("Inserted element id=\""+_30f.id+"\"");
if(_30f.nodeName=="form"||_30f.getElementsByTagName("form").item(0)!=null){
UpdateManager.setupForms();
}
}
}
return _310;
};
AttributesUpdate.prototype=new Update();
AttributesUpdate.superclass=Update.prototype;
AttributesUpdate.prototype.currentElement=null;
function AttributesUpdate(id,_312,_313){
this.type=type=Update.TYPE_ATTRIBUTES;
this.id=id;
this.element=_312;
this.currentElement=_313;
this._summary=[];
return this;
}
AttributesUpdate.prototype.update=function(){
var _314=document.getElementById(this.id);
if(this._beforeUpdate(_314)){
this._updateAttributes(_314);
this._afterUpdate(_314);
}
};
AttributesUpdate.prototype._updateAttributes=function(_315){
Array.forEach(this.element.attributes,function(_316){
var _317=this.currentElement.getAttribute(_316.nodeName);
if(_317==null||_317!=_316.nodeValue){
this._setAttribute(_315,_316.nodeName,_316.nodeValue);
this._summary.push("@"+_316.nodeName);
}
},this);
Array.forEach(this.currentElement.attributes,function(_318){
if(this.element.getAttribute(_318.nodeName)==null){
this._setAttribute(_315,_318.nodeName,null);
this._summary.push("@"+_318.nodeName);
}
},this);
};
AttributesUpdate.prototype._setAttribute=function(_319,name,_31b){
if(_319==null){
alert(this.id+": "+document.getElementById(this.id)+"\n\n"+name+"="+_31b);
SystemLogger.getLogger("AttributesUpdate").fine(document.body.innerHTML);
}
var _31c=(_31b==null);
if(_31c){
_319.removeAttribute(name);
}else{
_319.setAttribute(name,_31b);
}
if(document.all!=null){
if(_31c){
_31b="";
}
switch(name.toLowerCase()){
case "class":
_319.className=_31b;
break;
case "disabled":
_319.disabled=!_31c;
break;
case "checked":
_319.checked=!_31c;
break;
case "readonly":
_319.readOnly=!_31c;
break;
}
}
};
AttributesUpdate.prototype._afterUpdate=function(_31d){
AttributesUpdate.superclass._afterUpdate.call(this,_31d);
UpdateManager.report("Attributes updated on element id=\""+this.id+"\": "+this._summary.toString());
};
AttributesUpdate.prototype.dispose=function(){
Update.prototype.dispose.call(this);
this.currentElement=null;
};
if(!window.Node){
window.Node={ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12};
}
window.KeyEventCodes={VK_BACK:8,VK_TAB:9,VK_ENTER:13,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:null,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_INSERT:null,VK_DELETE:127,VK_PLUS:187,VK_MINUS:189,VK_NUMPLUS:107,VK_NUMMINUS:109,VK_F1:112};
if(window==top){
window.app=this;
}else{
window.app=top.app;
}
window.bindingMap={};
window.standardEventHandler=null;
if(window!=window.top){
top.Application.declareTopLocal(window);
}
function _WindowManager(){
this._construct(KeyMaster.getUniqueKey());
}
_WindowManager.prototype={WINDOW_LOADED_BROADCAST:null,WINDOW_UNLOADED_BROADCAST:null,WINDOW_EVALUATED_BROADCAST:null,WINDOW_RESIZED_BROADCAST:null,isWindowLoaded:false,_logger:SystemLogger.getLogger("WindowManager ["+document.title+"]"),_ondomstatements:new List(),_onloadstatements:new List(),_onresizestatements:new List(),_currentDimensions:null,_newDimensions:null,_broadcastTimeout:null,_isHorizontalResize:false,_isVerticalResize:false,_broadcastTimeout:null,_compute:function(_31e,key){
return _31e.replace("${windowkey}",document.location+":"+key);
},_construct:function(key){
this.WINDOW_LOADED_BROADCAST=this._compute(BroadcastMessages.$WINKEY_LOADED,key);
this.WINDOW_UNLOADED_BROADCAST=this._compute(BroadcastMessages.$WINKEY_UNLOADED,key);
this.WINDOW_EVALUATED_BROADCAST=this._compute(BroadcastMessages.$WINKEY_EVALUATED,key);
this.WINDOW_RESIZED_BROADCAST=this._compute(BroadcastMessages.$WINKEY_RESIZED,key);
DOMEvents.addEventListener(window,DOMEvents.DOM,this);
DOMEvents.addEventListener(window,DOMEvents.LOAD,this);
DOMEvents.addEventListener(window,DOMEvents.UNLOAD,this);
},handleEvent:function(e){
switch(e.type){
case DOMEvents.DOM:
this.onDOMContentLoaded();
break;
case DOMEvents.LOAD:
if(!this.isWindowLoaded){
this.isWindowLoaded=true;
EventBroadcaster.broadcast(this.WINDOW_LOADED_BROADCAST,this);
while(this._onloadstatements.hasNext()){
this._onloadstatements.getNext().fireOnLoad();
}
this._currentDimensions=this.getWindowDimensions();
DOMEvents.addEventListener(window,DOMEvents.RESIZE,this);
EventBroadcaster.broadcast(this.WINDOW_EVALUATED_BROADCAST,this);
DOMEvents.removeEventListener(window,DOMEvents.LOAD,this);
DOMEvents.stopPropagation(e);
}
break;
case DOMEvents.RESIZE:
if(window==top){
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEDOWN,document.body);
}
this._onresizestatements.reset();
while(this._onresizestatements.hasNext()){
this._onresizestatements.getNext().fireOnResize();
}
this._newDimensions=WindowManager.getWindowDimensions();
var _322=this._newDimensions.w!=this._currentDimensions.w;
var _323=this._newDimensions.h!=this._currentDimensions.h;
if(_322||_323){
if(this._broadcastTimeout!=null){
clearTimeout(this._broadcastTimeout);
this._broadcastTimeout=null;
}
var self=this;
this._broadcastTimeout=setTimeout(function(){
self._broadcastResizeEvent();
},250);
}
break;
case DOMEvents.UNLOAD:
EventBroadcaster.broadcast(this.WINDOW_UNLOADED_BROADCAST);
break;
}
},_broadcastResizeEvent:function(){
clearTimeout(this._broadcastTimeout);
this._broadcastTimeout=null;
EventBroadcaster.broadcast(this.WINDOW_RESIZED_BROADCAST);
this._currentDimensions=this._newDimensions;
},fireOnDOM:function(_325){
if(Interfaces.isImplemented(IDOMHandler,_325,true)){
this._ondomstatements.add(_325);
}
},fireOnLoad:function(_326){
if(Interfaces.isImplemented(ILoadHandler,_326,true)){
this._onloadstatements.add(_326);
}
},fireOnResize:function(_327){
if(Interfaces.isImplemented(IResizeHandler,_327,true)){
this._onresizestatements.add(_327);
}
},onDOMContentLoaded:function(){
while(this._ondomstatements.hasNext()){
this._ondomstatements.getNext().fireOnDOM();
}
},getWindowDimensions:function(){
return new Dimension(Client.isMozilla?window.innerWidth:document.body.clientWidth,Client.isMozilla?window.innerHeight:document.body.clientHeight);
},evaluate:function(_328){
return eval(_328);
}};
var WindowManager=new _WindowManager();
new function WindowAssistant(){
if(Client.isExplorer){
WindowManager.onDOMContentLoaded();
}
};
top.app=null;
function _Application(){
this._construct();
}
_Application.prototype={CONSOLE_ID:KeyMaster.getUniqueKey(),_TIMEOUT_LOSTFOCUS:250,logger:SystemLogger.getLogger("Application"),timer:SystemTimer.getTimer("Application"),isDeveloperMode:false,isLocalHost:false,hasExternalConnection:false,isLoggedIn:false,isLoggedOut:false,isLocked:false,hasStartPage:true,isMalFunctional:false,isOperational:false,isShuttingDown:false,isOffLine:false,isFocused:true,isBlurred:false,_isMousePositionTracking:false,_mousePosition:null,_cursorStartPoint:null,_isDragging:false,_isShutDownAllowed:true,_lockers:0,_lockthings:{},_isRegistered:null,_activeBinding:null,_activatedBindings:new List(),_dirtyTabs:new Map(),_topLevelClasses:typeof topLevelClassNames!="undefined"?new List(topLevelClassNames):null,_construct:function(){
EventBroadcaster.subscribe(WindowManager.WINDOW_EVALUATED_BROADCAST,{handleBroadcast:function(){
try{
Application.initialize();
}
catch(exception){
SystemDebug.stack(arguments);
throw (exception);
}
}});
EventBroadcaster.subscribe(BroadcastMessages.SYSTEMLOG_OPENED,{handleBroadcast:function(_329,_32a){
SystemLogger.unsuspend(_32a);
}});
EventBroadcaster.subscribe(BroadcastMessages.SYSTEMLOG_CLOSED,{handleBroadcast:function(){
SystemLogger.suspend();
}});
EventBroadcaster.subscribe(BroadcastMessages.STAGE_INITIALIZED,{handleBroadcast:function(){
if(Application.isDeveloperMode){
StageBinding.handleViewPresentation("Composite.Management.SystemLog");
StageBinding.handleViewPresentation("Composite.Management.Developer");
}
setTimeout(function(){
ProgressBarBinding.notch(4);
Application.isOperational=true;
EventBroadcaster.broadcast(BroadcastMessages.APPLICATION_OPERATIONAL);
},PageBinding.TIMEOUT);
}});
EventBroadcaster.subscribe(BroadcastMessages.KEY_ESCAPE,{handleBroadcast:function(){
if(Application.isLocked){
Application.unlock(Application,true);
}
}});
EventBroadcaster.subscribe(BroadcastMessages.SERVER_OFFLINE,{handleBroadcast:function(){
Application.isOffLine=true;
}});
EventBroadcaster.subscribe(BroadcastMessages.SERVER_ONLINE,{handleBroadcast:function(){
Application.isOffLine=false;
}});
EventBroadcaster.subscribe(BroadcastMessages.DOCKTAB_DIRTY,{handleBroadcast:function(_32b,arg){
var list=Application._dirtyTabs;
list.set(arg.key,arg);
if(list.countEntries()==1){
var _32e=top.app.bindingMap.broadcasterHasDirtyTabs;
_32e.enable();
}
}});
EventBroadcaster.subscribe(BroadcastMessages.DOCKTAB_CLEAN,{handleBroadcast:function(_32f,arg){
var list=Application._dirtyTabs;
list.del(arg.key);
if(list.countEntries()==0){
var _332=top.app.bindingMap.broadcasterHasDirtyTabs;
_332.disable();
}
}});
},toString:function(){
return "[Application]";
},login:function(){
this.isLoggedIn=true;
ConfigurationService=WebServiceProxy.createProxy(Constants.URL_WSDL_CONFIGURATION);
ConsoleMessageQueueService=WebServiceProxy.createProxy(Constants.URL_WSDL_MESSAGEQUEUE);
EditorConfigurationService=WebServiceProxy.createProxy(Constants.URL_WSDL_EDITORCONFIG);
FlowControllerService=WebServiceProxy.createProxy(Constants.URL_WSDL_FLOWCONTROLLER);
StringService=WebServiceProxy.createProxy(Constants.URL_WSDL_STRINGSERVICE);
TreeService=WebServiceProxy.createProxy(Constants.URL_WSDL_TREESERVICE);
SecurityService=WebServiceProxy.createProxy(Constants.URL_WSDL_SECURITYSERVICE);
XhtmlTransformationsService=WebServiceProxy.createProxy(Constants.URL_WSDL_XHTMLTRANSFORM);
LocalizationService=WebServiceProxy.createProxy(Constants.URL_WSDL_LOCALIZATION);
SourceValidationService=WebServiceProxy.createProxy(Constants.URL_WSDL_SOURCEVALIDATION);
MarkupFormatService=WebServiceProxy.createProxy(Constants.URL_WSDL_MARKUPFORMAT);
PageService=WebServiceProxy.createProxy(Constants.URL_WSDL_PAGESERVICE);
ProgressBarBinding.notch(4);
function next(){
EventBroadcaster.broadcast(BroadcastMessages.APPLICATION_LOGIN);
}
if(Client.isWebKit){
setTimeout(function(){
next();
},0);
}else{
next();
}
},logout:function(){
var _333=false;
if(this.isLoggedIn){
this.isLoggedIn=false;
this.isLoggedOut=true;
_333=LoginService.Logout(true);
if(!_333){
alert("Logout failed.");
}
}
return _333;
},lock:function(_334){
if(_334!=null){
this._lockthings[_334]=true;
if(top.bindingMap.mastercover!=null){
if(this._lockers>=0){
this._lockers++;
if(this._lockers==1){
this.isLocked=true;
top.bindingMap.mastercover.show();
if(top.app!=null&&top.app.bindingMap.throbber!=null){
top.app.bindingMap.throbber.play();
}
}
}
}
}else{
throw "Application: No locker specified.";
}
},unlock:function(_335,_336){
if(_335!=null){
delete this._lockthings[_335];
if(top.bindingMap.mastercover!=null){
if(_336||this._lockers>0){
if(_336){
var out="Unlocked by "+new String(_335)+"\n";
for(var _338 in this._lockthings){
out+="Locked by "+new String(_338)+". ";
}
this.logger.debug(out);
this._lockers=0;
}else{
this._lockers--;
}
if(this._lockers==0){
this.isLocked=false;
top.bindingMap.mastercover.hide();
if(top.app!=null&&top.app.bindingMap.throbber!=null){
setTimeout(function(){
top.app.bindingMap.throbber.stop();
},250);
}
}
}
}
}else{
throw "Application: No unlocker specified.";
}
},hasLock:function(_339){
return this._lockthings[_339]==true;
},activate:function(_33a){
var _33b=this._activeBinding;
this._activeBinding=_33a;
this._activatedBindings.add(_33a);
if(_33b&&_33b.isActive){
_33b.deActivate();
}
},deActivate:function(_33c){
var _33d=null;
var _33e=null;
if(_33c==this._activeBinding){
while(!_33e&&this._activatedBindings.hasEntries()){
_33d=this._activatedBindings.extractLast();
if(_33d!=_33c&&_33d.isActivatable){
_33e=_33d;
}
}
if(!_33e){
_33e=app.bindingMap.explorerdock;
}
_33e.activate();
}
},focused:function(_33f){
this.isFocused=_33f;
if(_33f){
if(this.isBlurred){
this.isBlurred=false;
EventBroadcaster.broadcast(BroadcastMessages.APPLICATION_FOCUSED);
}
}else{
setTimeout(function(){
if(!Application.isFocused){
Application.isBlurred=true;
EventBroadcaster.broadcast(BroadcastMessages.APPLICATION_BLURRED);
}
},Application._TIMEOUT_LOSTFOCUS);
}
},initialize:function(){
DOMEvents.addEventListener(top,DOMEvents.UNLOAD,{handleEvent:function(e){
EventBroadcaster.broadcast(BroadcastMessages.APPLICATION_ONSHUTDOWN);
EventBroadcaster.broadcast(BroadcastMessages.APPLICATION_SHUTDOWN);
if(!Application.isShuttingDown){
Application.isShuttingDown=true;
if(FlowControllerService!=null){
FlowControllerService.ReleaseAllConsoleResources(Application.CONSOLE_ID);
}
}
if(this.isLoggedIn&&!Application.isDeveloperMode){
Application.logout();
}
}});
EventBroadcaster.broadcast(BroadcastMessages.APPLICATION_STARTUP);
},cancelShutDown:function(){
this._isShutDownAllowed=false;
},framework:function(doc){
var win=DOMUtil.getParentWindow(doc);
if(win!=null){
if(!win.standardEventHandler){
win.standardEventHandler=new StandardEventHandler(doc);
}else{
}
}
},normalize:function(doc){
},handleAction:function(_344){
switch(_344.type){
case Application.REFRESH:
this.refresh();
break;
}
},declareTopLocal:function(win){
var _346=Resolver.resolve("/scripts/source/top/");
if(this._topLevelClasses==null){
this._topLevelClasses=new List();
var self=this;
new List(DOMUtil.getElementsByTagName(document,"script")).each(function(_348){
var src=_348.src;
if(src.indexOf(_346)>-1){
var name=src.substring(src.lastIndexOf("/")+1,src.lastIndexOf(".js"));
self._topLevelClasses.add(name);
}
});
}
this._topLevelClasses.each(function(name){
if(window[name]!=null){
win[name]=window[name];
}
});
},trackMousePosition:function(e){
var _34d=false;
if(this._isMousePositionTracking){
_34d=true;
if(Client.isExplorer&&e.button!=1){
_34d=false;
}
if(_34d){
this._mousePosition=DOMUtil.getUniversalMousePosition(e);
}
}
return _34d;
},enableMousePositionTracking:function(e){
if(e){
this._isMousePositionTracking=true;
this._mousePosition=DOMUtil.getUniversalMousePosition(e);
}else{
throw new Error("Application: MouseEvent undefined.");
}
},disableMousePositionTracking:function(){
this._isMousePositionTracking=false;
this._mouseposition=null;
},getMousePosition:function(){
return this._mousePosition;
},onDragStart:function(_34f){
var _350=BindingDragger.draggedBinding;
if(Interfaces.isImplemented(IDraggable,_350,true)==true){
if(!this._isDragging){
app.bindingMap.dragdropcursor.setImage(_350.getImage());
this._cursorStartPoint=_34f;
app.bindingMap.dragdropcursor.setPosition(this._cursorStartPoint);
CursorBinding.fadeIn(app.bindingMap.dragdropcursor);
if(_350.showDrag){
_350.showDrag();
}
EventBroadcaster.broadcast(BroadcastMessages.TYPEDRAG_START,_350.dragType);
this._isDragging=true;
}
}
},onDrag:function(diff){
if(this._isDragging){
var _352=new Point(this._cursorStartPoint.x+diff.x,this._cursorStartPoint.y+diff.y);
app.bindingMap.dragdropcursor.setPosition(_352);
}
},onDragStop:function(diff){
if(this._isDragging){
var _354=BindingDragger.draggedBinding;
if(_354.hideDrag){
_354.hideDrag();
}
EventBroadcaster.broadcast(BroadcastMessages.TYPEDRAG_STOP,_354.dragType);
this._isDragging=false;
_354=BindingAcceptor.acceptingBinding;
if(_354!=null){
if(Interfaces.isImplemented(IAcceptable,_354,true)==true){
_354.accept(BindingDragger.draggedBinding);
}else{
throw new Error("Application: IAcceptable not implemented "+_354);
}
BindingAcceptor.acceptingBinding=null;
CursorBinding.fadeOut(app.bindingMap.dragdropcursor);
}else{
app.bindingMap.dragdropcursor.hide();
}
}
},reload:function(_355){
if(this.isDeveloperMode||_355){
if(this.isDeveloperMode&&Client.isPrism){
Prism.clearCache();
}
Application.lock(Application);
setTimeout(function(){
top.window.location.reload(true);
},0);
}else{
if(Application.isOperational){
Dialog.question(StringBundle.getString("ui","Website.Application.DialogReload.Title"),StringBundle.getString("ui","Website.Application.DialogReload.Text"),Dialog.BUTTONS_ACCEPT_CANCEL,{handleDialogResponse:function(_356){
if(_356==Dialog.RESPONSE_ACCEPT){
Application.reload(true);
}
}});
}else{
Application.reload(true);
}
}
},quit:function(){
Application.isShuttingDown=true;
if(FlowControllerService!=null){
FlowControllerService.ReleaseAllConsoleResources(Application.CONSOLE_ID);
}
if(this.logout()){
top.close();
top.bindingMap.logoutcover.show();
}
},hasDirtyDockTabs:function(){
return this._dirtyTabs.countEntries()>0;
},getDirtyDockTabsTabs:function(){
return this._dirtyTabs;
}};
var Application=new _Application();
function _Installation(){
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_KICKSTART,this);
}
_Installation.prototype={versionString:null,versionPrettyString:null,installationID:null,handleBroadcast:function(_357){
switch(_357){
case BroadcastMessages.APPLICATION_KICKSTART:
var list=new List(InstallationService.GetInstallationInfo(true));
list.each(function(_359){
switch(_359.Key){
case "ProductVersion":
this.versionString=_359.Value;
break;
case "ProductTitle":
this.versionPrettyString=_359.Value;
break;
case "InstallationId":
this.installationID=_359.Value;
break;
}
},this);
break;
}
}};
var Installation=new _Installation();
function _Keyboard(){
}
_Keyboard.prototype={_logger:SystemLogger.getLogger("Keyboard"),isShiftPressed:false,isControlPressed:false,keyEnter:function(){
EventBroadcaster.broadcast(BroadcastMessages.KEY_ENTER);
},keyEscape:function(){
EventBroadcaster.broadcast(BroadcastMessages.KEY_ESCAPE);
},keySpace:function(){
EventBroadcaster.broadcast(BroadcastMessages.KEY_SPACE);
},keyShift:function(){
this.isShiftPressed=true;
EventBroadcaster.broadcast(BroadcastMessages.KEY_SHIFT_DOWN);
},keyControl:function(){
this.isControlPressed=true;
EventBroadcaster.broadcast(BroadcastMessages.KEY_CONTROL_DOWN);
},keyArrow:function(key){
EventBroadcaster.broadcast(BroadcastMessages.KEY_ARROW,key);
},keyAlt:function(){
EventBroadcaster.broadcast(BroadcastMessages.KEY_ALT);
},keyTab:function(){
EventBroadcaster.broadcast(BroadcastMessages.KEY_TAB);
},keyUp:function(e){
if(this.isShiftPressed&&e.keyCode==window.KeyEventCodes.VK_SHIFT){
this.isShiftPressed=false;
EventBroadcaster.broadcast(BroadcastMessages.KEY_SHIFT_UP);
}else{
if(this.isControlPressed&&e.keyCode==window.KeyEventCodes.VK_CONTROL){
this.isControlPressed=false;
EventBroadcaster.broadcast(BroadcastMessages.KEY_CONTROL_UP);
}
}
}};
var Keyboard=new _Keyboard();
function _Audio(){
this._construct();
}
_Audio.prototype={SPLASH:"${root}/audio/splash.mp3",LOGIN:"${root}/audio/login.mp3",FATAL:"${root}/audio/fatal.mp3",_logger:SystemLogger.getLogger("Audio"),_audio:null,isInitialized:false,isEnabled:false,_construct:function(){
if(!Client.hasFlash){
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_KICKSTART,{handleBroadcast:function(){
Audio.initialize(null);
}});
}
},initialize:function(_35c){
if(!this.isInitialized){
this.isInitialized=true;
if(_35c){
this._audio=_35c;
this.isEnabled=true;
}
EventBroadcaster.broadcast(BroadcastMessages.AUDIO_INITIALIZED);
}
},play:function(url){
var _35e=false;
if(this.isEnabled&&Preferences.getPref("audio")){
this._audio.fromURL(Resolver.resolve(url));
_35e=true;
}
return _35e;
}};
var Audio=new _Audio();
window.Preferences=new function(){
var _35f=SystemLogger.getLogger("Preferences");
this.AUDIO="audio";
this.LOGIN="login";
var _360={"audio":true,"login":true};
EventBroadcaster.subscribe(BroadcastMessages.LOCALSTORE_INITIALIZED,{handleBroadcast:function(){
if(LocalStore.isEnabled){
var _361=LocalStore.getProperty(LocalStore.PREFERENCES);
if(_361){
for(var key in _361){
_360[key]=_361[key];
}
debug(true);
}else{
debug(false);
}
}else{
debug(false);
}
}});
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_SHUTDOWN,{handleBroadcast:function(){
if(LocalStore.isEnabled){
LocalStore.setProperty(LocalStore.PREFERENCES,_360);
}
}});
this.getPref=function(key){
var _364=null;
if(key){
_364=_360[key];
}else{
throw "No such preference.";
}
return _364;
};
this.setPref=function(key,_366){
if(key){
_360[key]=_366;
}else{
throw "No such preference.";
}
};
function debug(_367){
var _368=_367?"Persisted preferences":"No persisted preferences. Using defaults";
_368+=":\n";
for(var key in _360){
var pref=_360[key];
_368+="\n\t"+key+": "+pref+" ["+typeof pref+"]";
}
_35f.fine(_368);
}
};
function _Persistance(){
}
_Persistance.prototype={_logger:SystemLogger.getLogger("Persistance"),_persistance:null,_isEnabled:false,isInitialized:false,isEnabled:false,getPersistedProperty:function(id,prop){
var _36d=null;
if(this.isInitialized==true){
if(this._persistance){
var _36e=this._persistance[id];
if(_36e){
_36d=_36e[prop];
}
}
}else{
throw "Persistance not initialized!";
}
return _36d;
},setPersistedProperty:function(id,prop,_371){
if(this.isInitialized==true){
if(this._persistance){
if(_371!=null){
if(!this._persistance[id]){
this._persistance[id]={};
}
this._persistance[id][prop]=String(_371);
}else{
this._logger.error("Cannot persist "+prop+" with value: null");
}
}
}else{
throw "Persistance not initialized!";
}
},clearAllPersistedProperties:function(){
this._logger.debug("TODO: clearAllPersistedProperties");
},handleBroadcast:function(_372){
switch(_372){
case BroadcastMessages.APPLICATION_SHUTDOWN:
var _373=top.bindingMap.persistance;
_373.persist(this._persistance);
break;
}
},initialize:function(){
if(!this.isInitialized){
this.isInitialized=true;
if(this._isEnabled==true){
var _374=top.bindingMap.persistance;
var map=_374.getPersistanceMap();
if(map){
this.isEnabled=true;
this._persistance=map;
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_SHUTDOWN,this);
}
}else{
this.isEnabled=false;
}
EventBroadcaster.broadcast(BroadcastMessages.PERSISTANCE_INITIALIZED);
}
}};
var Persistance=new _Persistance();
var LocalStore=new function(){
this.isInitialized=true;
this.isEnabled=false;
};
StandardEventHandler.isBackAllowed=false;
function StandardEventHandler(doc,_377){
this.logger=SystemLogger.getLogger("StandardEventHandler ["+doc.title+"]");
this._contextDocument=doc;
this._contextWindow=DOMUtil.getParentWindow(doc);
this.hasNativeKeys=false;
this._isAllowTabs=false;
this._isMouseHandlerOnly=_377;
this._addListeners();
}
StandardEventHandler.prototype._addListeners=function(){
var doc=this._contextDocument;
var _379=this._contextWindow.bespin!=undefined;
DOMEvents.addEventListener(doc,DOMEvents.MOUSEDOWN,this,_379);
DOMEvents.addEventListener(doc,DOMEvents.MOUSEUP,this);
DOMEvents.addEventListener(doc,DOMEvents.MOUSEMOVE,this);
if(_379){
DOMEvents.addEventListener(doc,DOMEvents.CLICK,{handleEvent:function(e){
if(DOMEvents.isRightButton(e)){
DOMEvents.stopPropagation(e);
DOMEvents.preventDefault(e);
}
}},true);
}
if(Client.isExplorer){
function supress(){
return false;
}
this._contextDocument.onhelp=supress;
this._contextWindow.onhelp=supress;
}
if(!this._isMouseHandlerOnly){
DOMEvents.addEventListener(doc,DOMEvents.KEYDOWN,this);
DOMEvents.addEventListener(doc,DOMEvents.KEYUP,this);
if(this._contextWindow.WindowManager==null){
if(Client.isExplorer){
DOMEvents.addEventListener(doc,DOMEvents.FOCUSIN,this);
DOMEvents.addEventListener(doc,DOMEvents.FOCUSOUT,this);
}else{
if(this._contextDocument.designMode!="on"){
DOMEvents.addEventListener(doc,DOMEvents.FOCUS,this,true);
DOMEvents.addEventListener(doc,DOMEvents.BLUR,this,true);
}
}
}
var _37b={handleEvent:function(e){
switch(e.type){
case DOMEvents.BLUR:
Application.focused(false);
break;
case DOMEvents.FOCUS:
Application.focused(true);
break;
}
}};
DOMEvents.addEventListener(this._contextWindow,DOMEvents.BLUR,_37b);
DOMEvents.addEventListener(this._contextWindow,DOMEvents.FOCUS,_37b);
}
if(Client.isMozilla){
doc.addEventListener(DOMEvents.KEYDOWN,{handleEvent:function(e){
var s=83;
if(e.ctrlKey&&e.keyCode==s){
e.preventDefault();
}
}},true);
}
};
StandardEventHandler.prototype.handleEvent=function(e){
switch(e.type){
case DOMEvents.MOUSEDOWN:
this._handleMouseDown(e);
break;
case DOMEvents.MOUSEUP:
this._handleMouseUp(e);
break;
case DOMEvents.MOUSEMOVE:
this._handleMouseMove(e);
break;
case DOMEvents.KEYDOWN:
this._handleKeyDown(e);
break;
case DOMEvents.KEYUP:
this._handleKeyUp(e);
break;
case DOMEvents.FOCUS:
case DOMEvents.BLUR:
case DOMEvents.FOCUSIN:
case DOMEvents.FOCUSOUT:
this._handleFocus(e);
break;
}
};
StandardEventHandler.prototype._handleMouseDown=function(e){
Application.trackMousePosition(e);
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEDOWN,e);
if(e.button!=ButtonStateManager.RIGHT_BUTTON){
var node=DOMEvents.getTarget(e);
while(node!=null){
switch(node.nodeType){
case Node.ELEMENT_NODE:
var _382=UserInterface.getBinding(node);
if(_382!=null){
_382.dispatchAction(Binding.ACTION_ACTIVATED);
}
node=_382!=null?null:node.parentNode;
break;
case Node.DOCUMENT_NODE:
node=DOMUtil.getParentWindow(node).frameElement;
break;
default:
node=null;
break;
}
}
}
};
StandardEventHandler.prototype._handleMouseUp=function(e){
Application.trackMousePosition(e);
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEUP,e);
};
StandardEventHandler.prototype._handleMouseMove=function(e){
try{
var _385=Application.trackMousePosition(e);
if(_385){
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEMOVE,e);
}
}
catch(exception){
DOMEvents.removeEventListener(this._contextDocument,DOMEvents.MOUSEMOVE,this);
throw (exception);
}
};
StandardEventHandler.prototype._handleKeyDown=function(e,_387){
if(e.keyCode==KeyEventCodes.VK_TAB){
if(!this._isAllowTabs){
if(!_387){
this._handleTab(e);
DOMEvents.preventDefault(e);
}
}else{
if(e.shiftKey||e.ctrlKey){
DOMEvents.preventDefault(e);
}
}
_387=true;
}
if(!this.hasNativeKeys&&!e.shiftKey&&!e.ctrlKey){
switch(e.keyCode){
case KeyEventCodes.VK_UP:
case KeyEventCodes.VK_DOWN:
case KeyEventCodes.VK_LEFT:
case KeyEventCodes.VK_RIGHT:
case KeyEventCodes.VK_SPACE:
case KeyEventCodes.VK_PAGE_UP:
case KeyEventCodes.VK_PAGE_DOWN:
if(!Client.isWebKit){
DOMEvents.preventDefault(e);
}
break;
}
}
if(e.keyCode==KeyEventCodes.VK_BACK){
if(!StandardEventHandler.isBackAllowed){
DOMEvents.preventDefault(e);
}
}
var _388=KeySetBinding.handleKey(this._contextDocument,e);
if(!_388){
switch(e.keyCode){
case KeyEventCodes.VK_PAGE_UP:
case KeyEventCodes.VK_PAGE_DOWN:
break;
default:
var _389=this._contextWindow.frameElement;
if(_389!=null){
var _38a=DOMUtil.getParentWindow(_389);
if(_38a.standardEventHandler!=null){
_38a.standardEventHandler._handleKeyDown(e,_387);
}
}
break;
}
}
};
StandardEventHandler.prototype._handleTab=function(e){
if(!this._isAllowTabs){
if(!e.ctrlKey){
if(e.shiftKey){
FocusBinding.navigatePrevious();
}else{
FocusBinding.navigateNext();
}
}
}
};
StandardEventHandler.prototype._handleFocus=function(e){
var _38d=false;
var _38e=DOMEvents.getTarget(e);
var name=_38e.nodeName.toLowerCase();
switch(name){
case "input":
case "textarea":
case "select":
_38d=(e.type==DOMEvents.FOCUS||e.type==DOMEvents.FOCUSIN);
if(name=="input"||name=="textarea"){
StandardEventHandler.isBackAllowed=_38d;
}
if(_38d){
if(!this.hasNativeKeys){
this.enableNativeKeys();
}
}else{
if(this.hasNativeKeys){
this.disableNativeKeys();
}
}
break;
}
};
StandardEventHandler.prototype._handleKeyUp=function(e){
Keyboard.keyUp(e);
};
StandardEventHandler.prototype.enableNativeKeys=function(_391){
this._isAllowTabs=(_391==true?true:false);
var self=this;
top.setTimeout(function(){
self.hasNativeKeys=true;
StandardEventHandler.isBackAllowed=true;
},0);
};
StandardEventHandler.prototype.disableNativeKeys=function(){
this._isAllowTabs=false;
this.hasNativeKeys=false;
StandardEventHandler.isBackAllowed=false;
};
Action.isValid=function(type){
return typeof type!=Types.UNDEFINED;
};
function Action(_394,type){
this.target=_394;
this.type=type;
this.listener=null;
this.isConsumed=false;
this.isCancelled=false;
}
Action.prototype.consume=function(){
this.isConsumed=true;
};
Action.prototype.cancel=function(){
this.isCancelled=true;
};
Animation.DEFAULT_TIME=parseInt(250);
function Animation(_396){
this.id=KeyMaster.getUniqueKey();
this.interval=25;
this.iterator=0;
this.modifier=1;
this.endcount=90;
for(var _397 in _396){
this[_397]=_396[_397];
}
}
Animation.prototype.play=function(){
if(!this.isPlaying){
var self=this;
this._nextframe=function(){
window[this.id]=setTimeout(function(){
self.play();
},this.interval);
};
this.onstart(this.iterator);
this._nextframe();
this.isPlaying=true;
}else{
if(this.modifier>0?this.iterator>=this.endcount:this.iterator<=this.endcount){
this.stop();
}else{
var it1=this.iterator;
var it2=this.onstep(this.iterator);
if(it2&&it2!=it1){
this.iterator=it2;
}else{
this.iterator+=this.modifier;
}
this._nextframe();
}
}
};
Animation.prototype.stop=function(){
this.onstop(this.iterator);
this.isPlaying=false;
};
Animation.prototype.onstart=function(_39b){
};
Animation.prototype.onstep=function(_39c){
};
Animation.prototype.onstop=function(_39d){
};
Point.isEqual=function(p1,p2){
var _3a0=false;
if(p1&&p2){
_3a0=(p1.x==p2.x)&&(p1.y==p2.y);
}
return _3a0;
};
function Point(x,y){
this.x=x;
this.y=y;
}
Point.prototype={x:0,y:0};
Dimension.isEqual=function(dim1,dim2){
var _3a5=false;
if(dim1&&dim2){
_3a5=(dim1.w==dim2.w)&&(dim1.h==dim2.h);
}
return _3a5;
};
function Dimension(w,h){
this.w=w;
this.h=h;
}
Dimension.prototype={w:0,h:0};
function Geometry(x,y,w,h){
this.x=x;
this.y=y;
this.w=w;
this.h=h;
}
BindingAcceptor.acceptingBinding=null;
function BindingAcceptor(_3ac){
this.logger=SystemLogger.getLogger("BindingDragger");
this._binding=_3ac;
this._acceptedList={};
this._isAccepting=false;
this._corsor=null;
this._initialize();
return this;
}
BindingAcceptor.prototype._initialize=function(){
EventBroadcaster.subscribe(BroadcastMessages.TYPEDRAG_START,this);
EventBroadcaster.subscribe(BroadcastMessages.TYPEDRAG_STOP,this);
if(this._binding.dragAccept){
EventBroadcaster.subscribe(BroadcastMessages.TYPEDRAG_PAUSE,this);
var _3ad=new List(this._binding.dragAccept.split(" "));
while(_3ad.hasNext()){
var type=_3ad.getNext();
this._acceptedList[type]=true;
}
}
};
BindingAcceptor.prototype.handleBroadcast=function(_3af,arg){
var type=arg;
try{
switch(_3af){
case BroadcastMessages.TYPEDRAG_START:
if(this._cursor==null){
this._cursor=app.bindingMap.dragdropcursor;
}
this._binding.addEventListener(DOMEvents.MOUSEENTER,this);
this._binding.addEventListener(DOMEvents.MOUSELEAVE,this);
if(this.isAccepting(type)){
this._isAccepting=true;
this._startAccepting();
}
break;
case BroadcastMessages.TYPEDRAG_STOP:
this._binding.removeEventListener(DOMEvents.MOUSEENTER,this);
this._binding.removeEventListener(DOMEvents.MOUSELEAVE,this);
if(this.isAccepting(type)){
this._isAccepting=false;
this._stopAccepting();
}
break;
case BroadcastMessages.TYPEDRAG_PAUSE:
if(this.isAccepting(type)){
this._pauseAccepting();
}
break;
}
}
catch(exception){
this.logger.debug(exception);
}
};
BindingAcceptor.prototype.isAccepting=function(type){
return Types.isDefined(this._acceptedList[type]);
};
BindingAcceptor.prototype._startAccepting=function(){
if(Types.isFunction(this._binding.showGeneralAcceptance)){
this._binding.showGeneralAcceptance();
}
};
BindingAcceptor.prototype._pauseAccepting=function(){
if(this._binding.hideAcceptance){
this._binding.hideAcceptance();
}
this._cursor.hideAcceptance();
BindingAcceptor.acceptingBinding=null;
};
BindingAcceptor.prototype._stopAccepting=function(){
if(this._binding.hideGeneralAcceptance){
this._binding.hideGeneralAcceptance();
}
if(this._binding.hideAcceptance){
this._binding.hideAcceptance();
}
};
BindingAcceptor.prototype.handleEvent=function(e){
switch(e.type){
case DOMEvents.MOUSEENTER:
case DOMEvents.MOUSEOVER:
if(this._isAccepting){
if(BindingAcceptor.acceptingBinding!=this._binding){
BindingAcceptor.acceptingBinding=this._binding;
this._cursor.showAcceptance();
if(Types.isFunction(this._binding.showAcceptance)){
this._binding.showAcceptance();
}
}
}else{
EventBroadcaster.broadcast(BroadcastMessages.TYPEDRAG_PAUSE);
DOMEvents.stopPropagation(e);
}
break;
case DOMEvents.MOUSELEAVE:
case DOMEvents.MOUSEOUT:
if(this._isAccepting){
BindingAcceptor.acceptingBinding=null;
this._cursor.hideAcceptance();
if(Types.isFunction(this._binding.hideAcceptance)){
this._binding.hideAcceptance();
}
}else{
DOMEvents.stopPropagation(e);
}
break;
}
DOMEvents.stopPropagation(e);
};
BindingAcceptor.prototype.dispose=function(){
EventBroadcaster.unsubscribe(BroadcastMessages.TYPEDRAG_START,this);
EventBroadcaster.unsubscribe(BroadcastMessages.TYPEDRAG_STOP,this);
};
function BindingBoxObject(_3b4){
this._domElement=_3b4.getBindingElement();
}
BindingBoxObject.prototype.getUniversalPosition=function(){
return DOMUtil.getUniversalPosition(this._domElement);
};
BindingBoxObject.prototype.getGlobalPosition=function(){
return DOMUtil.getGlobalPosition(this._domElement);
};
BindingBoxObject.prototype.getLocalPosition=function(){
return DOMUtil.getLocalPosition(this._domElement);
};
BindingBoxObject.prototype.getDimension=function(){
var rect=this._domElement.getBoundingClientRect();
return new Dimension(rect.right-rect.left,rect.bottom-rect.top);
};
BindingBoxObject.prototype.dispose=function(){
this._domElement=null;
};
BindingDragger.isDragging=false;
BindingDragger.draggedBinding=null;
BindingDragger.bindingDragger=null;
function BindingDragger(_3b6){
this.logger=SystemLogger.getLogger("BindingDragger");
this.binding=_3b6;
this.isDragReady=false;
this.isDragging=false;
this.startPoint=null;
this.currentEvent=null;
}
BindingDragger.prototype.handleEvent=function(e){
if(e.type==DOMEvents.MOUSEUP){
this.isDragReady=false;
}else{
if(!BindingDragger.isDragging){
switch(e.type){
case DOMEvents.MOUSEDOWN:
if(!DOMEvents.isRightButton(e)){
this.isDragReady=true;
DOMEvents.preventDefault(e);
}
break;
case DOMEvents.MOUSEMOVE:
if(this.isDragReady==true){
this.binding.dispatchAction(Binding.ACTION_DRAG);
if(this.handler){
this.onDragStart(e);
}
this.isDragReady=false;
}
break;
}
}
}
};
BindingDragger.prototype.registerHandler=function(_3b8){
if(Interfaces.isImplemented(IDragHandler,_3b8)==true){
this.handler=_3b8;
}else{
throw new Error("BindingDragger: Interface IDraghandler not implemented.");
}
};
BindingDragger.prototype.onDragStart=function(e){
if(!this.isDragging){
Application.enableMousePositionTracking(e);
this.startPoint=Application.getMousePosition();
this.isDragging=true;
BindingDragger.isDragging=true;
BindingDragger.draggedBinding=this.binding;
this.handler.onDragStart(this.startPoint);
EventBroadcaster.subscribe(BroadcastMessages.MOUSEEVENT_MOUSEMOVE,this);
EventBroadcaster.subscribe(BroadcastMessages.MOUSEEVENT_MOUSEUP,this);
}
};
BindingDragger.prototype.onDrag=function(e){
if(this.isDragging==true){
var _3bb=e.button==(e.target?0:1);
if(_3bb){
this.handler.onDrag(this.getDiff());
}else{
this.onDragStop(e);
}
}
};
BindingDragger.prototype.onDragStop=function(e){
if(this.isDragging==true){
Application.disableMousePositionTracking();
this.handler.onDragStop(this.getDiff());
this.isDragging=false;
BindingDragger.isDragging=false;
BindingDragger.draggedBinding=null;
EventBroadcaster.unsubscribe(BroadcastMessages.MOUSEEVENT_MOUSEMOVE,this);
EventBroadcaster.unsubscribe(BroadcastMessages.MOUSEEVENT_MOUSEUP,this);
}
};
BindingDragger.prototype.getDiff=function(){
var _3bd=Application.getMousePosition();
var dx=_3bd.x-this.startPoint.x;
var dy=_3bd.y-this.startPoint.y;
return new Point(dx,dy);
};
BindingDragger.prototype.handleBroadcast=function(_3c0,e){
switch(_3c0){
case BroadcastMessages.MOUSEEVENT_MOUSEMOVE:
this.onDrag(e);
break;
case BroadcastMessages.MOUSEEVENT_MOUSEUP:
this.onDragStop(e);
break;
}
};
BindingDragger.prototype.dispose=function(){
this.binding=null;
};
BindingParser.XML="<div xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:ui=\"http://www.w3.org/1999/xhtml\">${markup}</div>";
function BindingParser(_3c2){
this.logger=SystemLogger.getLogger("BindingParser");
this._ownerDocument=_3c2;
this._rootElement=null;
}
BindingParser.prototype.parseFromString=function(_3c3){
var _3c4=new List();
var xml=BindingParser.XML.replace("${markup}",_3c3);
var doc=XMLParser.parse(_3c3);
if(doc){
var _3c7=DOMUtil.createElementNS(Constants.NS_XHTML,"div",this._ownerDocument);
this._iterate(doc.documentElement,_3c7);
var node=_3c7.firstChild;
while(node){
if(node.nodeType==Node.ELEMENT_NODE){
_3c4.add(node);
}
node=node.nextSibling;
}
}
return _3c4;
};
BindingParser.prototype._iterate=function(_3c9,_3ca){
var _3cb=null;
switch(_3c9.nodeType){
case Node.ELEMENT_NODE:
_3cb=this._cloneElement(_3c9);
UserInterface.registerBinding(_3cb);
break;
case Node.TEXT_NODE:
_3cb=this._ownerDocument.createTextNode(_3c9.nodeValue);
break;
}
if(_3cb){
_3ca.appendChild(_3cb);
}
if(_3cb&&_3c9.hasChildNodes()){
var _3cc=_3c9.firstChild;
while(_3cc){
this._iterate(_3cc,_3cb);
_3cc=_3cc.nextSibling;
}
}
};
BindingParser.prototype._cloneElement=function(_3cd){
var _3ce=DOMUtil.createElementNS(_3cd.namespaceURI?_3cd.namespaceURI:Constants.NS_XHTML,_3cd.nodeName,this._ownerDocument);
var i=0;
while(i<_3cd.attributes.length){
var attr=_3cd.attributes.item(i++);
_3ce.setAttribute(attr.nodeName,String(attr.nodeValue));
}
return _3ce;
};
BindingSerializer.activeInstance=null;
BindingSerializer.KEYPOINTER="bindingserializerkeypointer";
BindingSerializer.includeShadowTreeBindings=false;
BindingSerializer.filter=function(_3d1){
var _3d2=null;
var _3d3=false;
var _3d4=_3d1.parentNode.getAttribute(BindingSerializer.KEYPOINTER);
if(UserInterface.hasBinding(_3d1)){
var _3d5=UserInterface.getBinding(_3d1);
_3d3=BindingSerializer.activeInstance.indexBinding(_3d5);
if(_3d3){
_3d2=_3d5.key;
_3d1.setAttribute(BindingSerializer.KEYPOINTER,_3d2);
}
}
_3d2=_3d2?_3d2:_3d4;
var _3d6=new List(_3d1.childNodes);
_3d6.each(function(_3d7){
if(_3d7.nodeType==Node.ELEMENT_NODE){
_3d7.setAttribute(BindingSerializer.KEYPOINTER,_3d2);
}
});
if(_3d3){
BindingSerializer.activeInstance.append(_3d2,_3d4);
}
};
function BindingSerializer(){
this.logger=SystemLogger.getLogger("BindingSerializer");
this._dom=DOMUtil.getDOMDocument();
alert("BindingSerializer: Convert to Crawler!");
this._pointers=[];
}
BindingSerializer.prototype.serializeBinding=function(_3d8,_3d9){
BindingSerializer.includeShadowTreeBindings=_3d9?true:false;
BindingSerializer.activeInstance=this;
_3d8.bindingWindow.ElementIterator.iterate(_3d8.bindingElement,BindingSerializer.filter);
return DOMSerializer.serialize(this._dom,true);
};
BindingSerializer.prototype.indexBinding=function(_3da){
var _3db=false;
var _3dc=_3da.serialize();
if(_3dc!=false){
_3db=true;
var _3dd="ui:"+DOMUtil.getLocalName(_3da.bindingElement);
var _3de=DOMUtil.createElementNS(Constants.NS_UI,_3dd,this._dom);
this._pointers[_3da.key]=_3de;
for(var prop in _3dc){
if(_3dc[prop]!=null){
_3de.setAttribute(prop,String(_3dc[prop]));
}
}
}
return _3db;
};
BindingSerializer.prototype.append=function(_3e0,_3e1){
var _3e2=this._pointers[_3e0];
var _3e3=_3e1?this._pointers[_3e1]:this._dom;
_3e3.appendChild(_3e2);
};
function ImageProfile(_3e4){
this._default=_3e4.image;
this._hover=_3e4.imageHover;
this._active=_3e4.imageActive;
this._disabled=_3e4.imageDisabled;
}
ImageProfile.prototype.getDefaultImage=function(){
return this._default;
};
ImageProfile.prototype.setDefaultImage=function(_3e5){
this._default=_3e5;
};
ImageProfile.prototype.getHoverImage=function(){
return this._hover;
};
ImageProfile.prototype.setHoverImage=function(_3e6){
this._hover=_3e6;
};
ImageProfile.prototype.getActiveImage=function(){
return this._active;
};
ImageProfile.prototype.setActiveImage=function(_3e7){
this._active=_3e7;
};
ImageProfile.prototype.getDisabledImage=function(){
return this._disabled;
};
ImageProfile.prototype.setDisabledImage=function(_3e8){
this._disabled=_3e8;
};
function _BindingFinder(){
}
_BindingFinder.prototype={getDescendantBindingsByLocalName:function(_3e9,_3ea,_3eb){
var _3ec=null;
if(_3e9.isAttached){
_3ec=new List();
var _3ed=_3eb?_3e9.getChildElementsByLocalName(_3ea):_3e9.getDescendantElementsByLocalName(_3ea);
_3ed.each(function(_3ee){
var _3ef=UserInterface.getBinding(_3ee);
if(_3ef){
_3ec.add(_3ef);
}
});
}else{
var ouch="Could not resolve descendants of unattached binding "+_3e9.toString();
if(Application.isDeveloperMode){
throw ouch;
}
}
return _3ec;
},getAncestorBindingByType:function(_3f1,impl,_3f3){
var _3f4=null;
if(Binding.exists(_3f1)){
var node=_3f1.bindingElement;
while(_3f4==null&&node!=null){
node=node.parentNode;
if(node!=null){
if(UserInterface.hasBinding(node)){
var _3f6=UserInterface.getBinding(node);
if(_3f6 instanceof impl){
_3f4=_3f6;
}
}else{
if(_3f3&&node.nodeType==Node.DOCUMENT_NODE){
var win=DOMUtil.getParentWindow(node);
if(win!=null){
node=win.frameElement;
}else{
SystemDebug.stack(arguments);
break;
}
}
}
}
}
}
return _3f4;
},getAncestorBindingByLocalName:function(_3f8,_3f9,_3fa){
var _3fb=null;
if(_3f9=="*"){
var node=_3f8.bindingElement;
while(!_3fb&&(node=node.parentNode)!=null){
if(UserInterface.hasBinding(node)){
_3fb=UserInterface.getBinding(node);
}
}
}else{
_3fb=UserInterface.getBinding(DOMUtil.getAncestorByLocalName(_3f9,_3f8.bindingElement,_3fa));
}
return _3fb;
},getChildElementsByLocalName:function(_3fd,_3fe){
var _3ff=new List();
var _400=new List(_3fd.bindingElement.childNodes);
_400.each(function(_401){
if(_401.nodeType==Node.ELEMENT_NODE){
if(_3fe=="*"||DOMUtil.getLocalName(_401)==_3fe){
_3ff.add(_401);
}
}
});
return _3ff;
},getChildBindingByType:function(_402,impl){
var _404=null;
_402.getChildElementsByLocalName("*").each(function(_405){
var _406=UserInterface.getBinding(_405);
if(_406!=null&&_406 instanceof impl){
_404=_406;
return false;
}else{
return true;
}
});
return _404;
},getDescendantBindingByType:function(_407,impl){
var _409=null;
_407.getDescendantElementsByLocalName("*").each(function(_40a){
var _40b=UserInterface.getBinding(_40a);
if(_40b!=null&&_40b instanceof impl){
_409=_40b;
return false;
}else{
return true;
}
});
return _409;
},getDescendantBindingsByType:function(_40c,impl){
var _40e=new List();
_40c.getDescendantElementsByLocalName("*").each(function(_40f){
var _410=UserInterface.getBinding(_40f);
if(_410!=null&&_410 instanceof impl){
_40e.add(_410);
}
return true;
});
return _40e;
},getNextBindingByLocalName:function(_411,name){
var _413=null;
var _414=_411.bindingElement;
while((_414=DOMUtil.getNextElementSibling(_414))!=null&&DOMUtil.getLocalName(_414)!=name){
}
if(_414!=null){
_413=UserInterface.getBinding(_414);
}
return _413;
},getPreviousBindingByLocalName:function(_415,name){
var _417=null;
var _418=_415.bindingElement;
while((_418=DOMUtil.getPreviousElementSibling(_418))!=null&&DOMUtil.getLocalName(_418)!=name){
}
if(_418!=null){
_417=UserInterface.getBinding(_418);
}
return _417;
}};
var BindingFinder=new _BindingFinder();
NodeCrawler.NORMAL=1;
NodeCrawler.SKIP_NODE=2;
NodeCrawler.SKIP_CHILDREN=4;
NodeCrawler.STOP_CRAWLING=8;
NodeCrawler.TYPE_DESCENDING="descending";
NodeCrawler.TYPE_ASCENDING="ascending";
function NodeCrawler(){
this._construct();
return this;
}
NodeCrawler.prototype={logger:SystemLogger.getLogger("NodeCrawler"),type:NodeCrawler.TYPE_DESCENDING,currentNode:null,previousNode:null,contextDocument:null,_filters:null,_construct:function(){
this.currentNode=null,this.previousNode=null;
this.nextNode=null;
this._filters=new List();
this.type=NodeCrawler.TYPE_DESCENDING;
},addFilter:function(_419){
this._filters.add(_419);
},removeFilter:function(_41a){
var _41b=-1;
this._filters.each(function(fil){
_41b++;
var _41d=true;
if(fil==_41a){
_41d=false;
}
return _41d;
});
if(_41b>-1){
this._filters.del(_41b);
}
},_applyFilters:function(node,arg){
var _420=null;
var stop=NodeCrawler.STOP_CRAWLING;
var skip=NodeCrawler.SKIP_NODE;
var _423=NodeCrawler.SKIP_CHILDREN;
this._filters.reset();
var _424=true;
while(this._filters.hasNext()&&_424==true){
var _425=this._filters.getNext();
var res=_425.call(this,node,arg);
if(res!=null){
_420=res;
switch(res){
case stop:
case skip:
case skip+_423:
_424=false;
break;
}
}
}
return _420;
},crawl:function(_427,arg){
this.contextDocument=_427.ownerDocument;
this.onCrawlStart();
var _429=this.type==NodeCrawler.TYPE_ASCENDING;
var _42a=this._applyFilters(_427,arg);
if(_42a!=NodeCrawler.STOP_CRAWLING){
if(_429&&_42a==NodeCrawler.SKIP_CHILDREN){
}else{
var next=null;
if(this.nextNode!=null){
next=this.nextNode;
this.nextNode=null;
}else{
next=_429?_427.parentNode:_427;
}
this._crawl(next,arg);
}
}
this.onCrawlStop();
},onCrawlStart:function(){
},onCrawlStop:function(){
},_crawl:function(_42c,arg){
var _42e=null;
switch(this.type){
case NodeCrawler.TYPE_DESCENDING:
_42e=this._crawlDescending(_42c,arg);
break;
case NodeCrawler.TYPE_ASCENDING:
_42e=this._crawlAscending(_42c,arg);
break;
}
return _42e;
},_crawlDescending:function(_42f,arg){
var skip=NodeCrawler.SKIP_NODE;
var _432=NodeCrawler.SKIP_CHILDREN;
var stop=NodeCrawler.STOP_CRAWLING;
var _434=null;
if(_42f.hasChildNodes()){
var node=_42f.firstChild;
while(node!=null&&_434!=stop){
this.currentNode=node;
_434=this._applyFilters(node,arg);
switch(_434){
case stop:
case _432:
case skip+_432:
break;
default:
if(node.nodeType==Node.ELEMENT_NODE){
if(this.nextNode==null){
var res=this._crawl(node,arg);
if(res==stop){
_434=stop;
break;
}
}
}
if(_434!=stop&&_434!=skip){
this.previousNode=node;
}
break;
}
if(_434!=stop){
node=this.nextNode?this.nextNode:node.nextSibling;
this.nextNode=null;
}
}
}
return _434;
},_crawlAscending:function(_437,arg){
var _439=null;
var skip=NodeCrawler.SKIP_CHILDREN;
var stop=NodeCrawler.STOP_CRAWLING;
if(_437!=null){
this.currentNode=_437;
_439=this._applyFilters(_437,arg);
if(_439!=stop){
var next=this.nextNode?this.nextNode:_437.parentNode;
this.nextNode=null;
if(next&&next.nodeType!=Node.DOCUMENT_NODE){
this.previousNode=_437;
_439=this._crawl(next,arg);
}
}
}else{
_439=stop;
}
return _439;
}};
NodeCrawler.prototype.dispose=function(){
this._filters.dispose();
for(var _43d in this){
this[_43d]=null;
}
};
ElementCrawler.prototype=new NodeCrawler;
ElementCrawler.prototype.constructor=ElementCrawler;
ElementCrawler.superclass=NodeCrawler.prototype;
function ElementCrawler(){
this._construct();
return this;
}
ElementCrawler.prototype._construct=function(){
ElementCrawler.superclass._construct.call(this);
this.addFilter(function(node,arg){
var _440=null;
if(node.nodeType!=Node.ELEMENT_NODE){
_440=NodeCrawler.SKIP_NODE;
}
return _440;
});
};
BindingCrawler.prototype=new ElementCrawler;
BindingCrawler.prototype.constructor=BindingCrawler;
BindingCrawler.superclass=ElementCrawler.prototype;
function BindingCrawler(){
this._construct();
return this;
}
BindingCrawler.prototype._construct=function(){
BindingCrawler.superclass._construct.call(this);
this.addFilter(function(_441,arg){
var _443=null;
if(!UserInterface.hasBinding(_441)){
_443=NodeCrawler.SKIP_NODE;
}
return _443;
});
};
Crawler.prototype=new BindingCrawler;
Crawler.prototype.constructor=Crawler;
Crawler.superclass=BindingCrawler.prototype;
function Crawler(){
this.id=null;
this.response=null;
this._construct();
return this;
}
Crawler.prototype._construct=function(){
Crawler.superclass._construct.call(this);
this.response=null;
var self=this;
this.addFilter(function(_445,arg){
var _447=null;
var _448=UserInterface.getBinding(_445);
if(Interfaces.isImplemented(ICrawlerHandler,_448)==true){
self.response=null;
_448.handleCrawler(self);
_447=self.response;
}
return _447;
});
};
FlexBoxCrawler.prototype=new Crawler;
FlexBoxCrawler.prototype.constructor=FlexBoxCrawler;
FlexBoxCrawler.superclass=Crawler.prototype;
FlexBoxCrawler.ID="flexboxcrawler";
FlexBoxCrawler.MODE_FORCE="force";
FlexBoxCrawler.MODE_NORMAL="normal";
function FlexBoxCrawler(){
this.id=FlexBoxCrawler.ID;
this.mode=FlexBoxCrawler.MODE_NORMAL;
this.startBinding=null;
this._construct();
return this;
}
FlexBoxCrawler.prototype._construct=function(){
FlexBoxCrawler.superclass._construct.call(this);
var self=this;
this.addFilter(function(_44a,list){
var _44c=null;
var _44d=UserInterface.getBinding(_44a);
if(Interfaces.isImplemented(IFlexible,_44d)==true){
switch(self.mode){
case FlexBoxCrawler.MODE_FORCE:
list.add(_44d);
break;
case FlexBoxCrawler.MODE_NORMAL:
if(_44d.isFlexSuspended==true){
_44c=NodeCrawler.SKIP_CHILDREN;
}else{
list.add(_44d);
}
break;
}
}
return _44c;
});
};
FocusCrawler.prototype=new Crawler;
FocusCrawler.prototype.constructor=FocusCrawler;
FocusCrawler.superclass=Crawler.prototype;
FocusCrawler.ID="focuscrawler";
FocusCrawler.MODE_INDEX="index";
FocusCrawler.MODE_FOCUS="focus";
FocusCrawler.MODE_BLUR="blur";
function FocusCrawler(){
this.id=FocusCrawler.ID;
this._construct();
return this;
}
FocusCrawler.prototype._construct=function(){
FocusCrawler.superclass._construct.call(this);
this.addFilter(function(_44e,list){
var _450=null;
var _451=UserInterface.getBinding(_44e);
if(_451.isAttached==true){
if(Interfaces.isImplemented(IFocusable,_451)==true){
if(_451.isFocusable&&_451.isVisible){
switch(this.mode){
case FocusCrawler.MODE_INDEX:
list.add(_451);
break;
case FocusCrawler.MODE_FOCUS:
if(!_451.isFocused){
_451.focus();
}
_450=NodeCrawler.STOP_CRAWLING;
break;
case FocusCrawler.MODE_BLUR:
if(_451.isFocused==true){
_451.blur();
_450=NodeCrawler.STOP_CRAWLING;
}
break;
}
}
}
}
return _450;
});
};
FitnessCrawler.prototype=new Crawler;
FitnessCrawler.prototype.constructor=FitnessCrawler;
FitnessCrawler.superclass=Crawler.prototype;
FitnessCrawler.ID="fitnesscrawler";
FitnessCrawler.MODE_BRUTAL="brutal fitness";
FitnessCrawler.MODE_TRAINING="train fitness";
function FitnessCrawler(){
this.id=FitnessCrawler.ID;
this.mode=FitnessCrawler.MODE_TRAINING;
this._construct();
return this;
}
FitnessCrawler.prototype._construct=function(){
FitnessCrawler.superclass._construct.call(this);
this.addFilter(function(_452,list){
var _454=null;
var _455=UserInterface.getBinding(_452);
if(!_455.isVisible){
_454=NodeCrawler.SKIP_NODE+NodeCrawler.SKIP_CHILDREN;
}
return _454;
});
this.addFilter(function(_456,list){
var _458=null;
var _459=UserInterface.getBinding(_456);
if(_459.isAttached){
if(Interfaces.isImplemented(IFit,_459)){
if(!_459.isFit||this.mode==FitnessCrawler.MODE_BRUTAL){
list.add(_459);
}
}
}
return null;
});
};
function _DocumentUpdatePlugin(){
if(window.UpdateManager!=null){
UpdateManager.plugins.push(this);
this._setup();
}
}
_DocumentUpdatePlugin.prototype={toString:function(){
return "[DocumentUpdatePlugin]";
},_logger:SystemLogger.getLogger("DocumentUpdatePlugin ["+document.title+"]"),_isUpdating:false,_attributesbuffer:null,_elementsbuffer:null,isDebugging:Application.isDeveloperMode,_oldDOM:null,_focusID:null,_setup:function(){
UpdateManager.isDebugging=Application.isDeveloperMode;
UpdateManager.hasSoftAttributes=true;
UpdateManager.hasSoftSiblings=true;
DOMEvents.addEventListener(document,DOMEvents.BEFOREUPDATE,this);
DOMEvents.addEventListener(document,DOMEvents.AFTERUPDATE,this);
DOMEvents.addEventListener(document,DOMEvents.ERRORUPDATE,this);
DOMEvents.addEventListener(window,DOMEvents.UNLOAD,this);
if(Client.isMozilla){
UpdateAssistant.serialize=function(_45a){
_45a=_45a.cloneNode(true);
_45a.setAttributeNS(Constants.NS_NS,"xmlns",Constants.NS_XHTML);
_45a.setAttributeNS(Constants.NS_NS,"xmlns:ui",Constants.NS_UI);
return this._serializer.serializeToString(_45a);
};
}
},handleEvent:function(e){
var _45c=DOMEvents.getTarget(e);
switch(e.type){
case DOMEvents.BEFOREUPDATE:
this._beforeUpdate(_45c);
break;
case DOMEvents.AFTERUPDATE:
this._afterUpdate(_45c);
break;
case DOMEvents.ERRORUPDATE:
this._errorUpdate();
break;
case DOMEvents.UNLOAD:
if(Application.hasLock(this)){
Application.unlock(this);
}
break;
}
},_beforeUpdate:function(_45d){
var _45e=(_45d==document.documentElement);
if(_45e){
this._elementsbuffer=new List();
this._isUpdating=true;
Application.lock(this);
var root=UserInterface.getBinding(document.body);
if(root!=null){
var page=root.getDescendantBindingByType(PageBinding);
if(page!=null){
page.onBeforeUpdates();
}
}
var _461=FocusBinding.focusedBinding;
if(_461!=null){
this._focusID=_461.getID();
}
if(this.isDebugging){
this._oldDOM=DOMSerializer.serialize(UpdateManager.currentDOM,true);
}
}else{
switch(_45d.__updateType){
case Update.TYPE_REPLACE:
case Update.TYPE_REMOVE:
DocumentManager.detachBindings(_45d);
break;
case Update.TYPE_ATTRIBUTES:
this._backupattributes(_45d,false);
break;
}
}
},_afterUpdate:function(_462){
var _463=(_462==document.documentElement);
if(_463){
var _464=this._elementsbuffer;
if(_464.hasEntries()){
_464.each(function(_465){
DocumentManager.attachBindings(_465);
});
}
this._isUpdating=false;
Application.unlock(this);
var root=UserInterface.getBinding(document.body);
if(root!=null){
var page=root.getDescendantBindingByType(PageBinding);
if(page!=null){
page.onAfterUpdates();
}
}
var _468=FocusBinding.focusedBinding;
if(_468==null){
var _469=document.getElementById(this._focusID);
if(_469!=null){
var _468=UserInterface.getBinding(_469);
if(_468!=null){
_468.focus();
}
}
}
this._focusID=null;
if(UpdateManager.summary!=""){
if(this.isDebugging){
var _46a=DOMSerializer.serialize(UpdateManager.currentDOM,true);
var _46b="NEW DOM: "+document.title+"\n\n"+_46a+"\n\n";
_46b+="OLD DOM: "+document.title+"\n\n"+this._oldDOM;
this._logger.debug(_46b);
this._oldDOM=null;
}
this._logger.fine(UpdateManager.summary);
}
}else{
switch(_462.__updateType){
case Update.TYPE_REPLACE:
case Update.TYPE_INSERT:
this._elementsbuffer.add(_462);
break;
case Update.TYPE_ATTRIBUTES:
this._backupattributes(_462,true);
break;
}
switch(_462.id){
case "__VIEWSTATE":
case "__EVENTTARGET":
case "__EVENTARGUMENT":
case "__EVENTVALIDATION":
case "__LASTFOCUS":
case "__REQUEST":
case "__RESPONSE":
case "__CONSOLEID":
break;
default:
var _468=UserInterface.getBinding(_462);
while(_468==null&&_462!=null){
_468=UserInterface.getBinding(_462);
_462=_462.parentNode;
}
if(_468!=null){
_468.dispatchAction(Binding.ACTION_UPDATED);
}
break;
}
}
},_errorUpdate:function(){
Application.unlock(this);
var cry="UpdateManager dysfunction:\n\n"+UpdateManager.errorsmessage;
this._logger.error(cry+"\n\n"+UpdateManager.pendingResponse);
if(Application.isDeveloperMode){
alert(cry);
}
},_backupattributes:function(_46d,_46e){
var _46f=UserInterface.getBinding(_46d);
if(_46f!=null){
if(_46e){
var _470=this._attributesbuffer;
var map=new Map();
_470.each(function(name,old){
var now=_46d.getAttribute(name);
if(now!=null){
if(now!=old){
map.set(name,Types.castFromString(now));
}
}else{
map.set(name,null);
}
});
new List(_46d.attributes).each(function(att){
if(att.specified){
if(!_470.has(att.nodeName)){
map.set(att.nodeName,Types.castFromString(att.nodeValue));
}
}
});
map.each(function(name,_477){
var _478=_46f.propertyMethodMap[name];
if(_478!=null){
_478.call(_46f,_477);
}
});
}else{
var map=new Map();
new List(_46d.attributes).each(function(att){
if(att.specified){
map.set(att.nodeName,att.nodeValue);
}
});
this._attributesbuffer=map;
}
}
},handleElement:function(_47a,_47b){
var _47c=window.bindingMap[_47a.getAttribute("id")];
if(_47c!=null){
return _47c.handleElement(_47a,_47b);
}
},updateElement:function(_47d,_47e){
var _47f=window.bindingMap[_47d.getAttribute("id")];
if(_47f!=null){
return _47f.updateElement(_47d,_47e);
}
}};
var DocumentUpdatePlugin=new _DocumentUpdatePlugin();
DocumentCrawler.prototype=new ElementCrawler;
DocumentCrawler.prototype.constructor=DocumentCrawler;
DocumentCrawler.superclass=ElementCrawler.prototype;
DocumentCrawler.ID="documentcrawler";
DocumentCrawler.MODE_REGISTER="register";
DocumentCrawler.MODE_ATTACH="attach";
DocumentCrawler.MODE_DETACH="detach";
function DocumentCrawler(){
this.mode=DocumentCrawler.MODE_REGISTER;
this.id=DocumentCrawler.ID;
this._construct();
return this;
}
DocumentCrawler.prototype._construct=function(){
DocumentCrawler.superclass._construct.call(this);
var self=this;
this.addFilter(function(_481,list){
var _483=UserInterface.getBinding(_481);
var _484=null;
switch(self.mode){
case DocumentCrawler.MODE_REGISTER:
if(_483==null){
UserInterface.registerBinding(_481);
}
break;
case DocumentCrawler.MODE_ATTACH:
if(_483!=null){
if(!_483.isAttached){
list.add(_483);
}
if(_483.isLazy==true){
_484=NodeCrawler.SKIP_CHILDREN;
}
}
break;
case DocumentCrawler.MODE_DETACH:
if(_483!=null){
list.add(_483);
}
break;
}
return _484;
});
};
function _DocumentManager(){
this._construct();
}
_DocumentManager.prototype={_logger:SystemLogger.getLogger("DocumentManager ["+document.title+"]"),_maxIndex:-1,customUserInterfaceMapping:null,isDocumentSelectable:false,hasNativeContextMenu:false,_construct:function(){
Application.framework(document);
EventBroadcaster.subscribe(WindowManager.WINDOW_LOADED_BROADCAST,this);
if(Client.isExplorer){
DOMEvents.addEventListener(document,DOMEvents.CLICK,this);
}
},handleBroadcast:function(_485,arg){
if(!this.isDocumentSelectable){
this._makeDocumentUnselectable();
}
if(!this.hasNativeContextMenu){
DOMEvents.addEventListener(document,DOMEvents.CONTEXTMENU,this);
}
if(!Application.isMalFunctional){
this._resolveCustomBindingMappings();
this.attachBindings(document.documentElement);
}
},handleEvent:function(e){
var _488=DOMEvents.getTarget(e);
switch(e.type){
case DOMEvents.SELECTSTART:
case DOMEvents.CONTEXTMENU:
if(!this._isTextInputElement(_488)){
DOMEvents.preventDefault(e);
}
break;
case DOMEvents.CLICK:
if(Client.isExplorer){
if(_488!=null){
if(_488.href!=null&&_488.href.indexOf(Constants.DUMMY_LINK)>-1){
DOMEvents.preventDefault(e);
}
}
}
break;
}
},_resolveCustomBindingMappings:function(){
var _489=DOMUtil.getElementsByTagName(document.documentElement,"bindingmappingset").item(0);
if(_489!=null){
var map={};
var _48b=DOMUtil.getElementsByTagName(_489,"bindingmapping");
new List(_48b).each(function(_48c){
var _48d=_48c.getAttribute("element");
var _48e=_48c.getAttribute("binding");
map[_48d]=eval(_48e);
});
this.setCustomUserInterfaceMapping(new UserInterfaceMapping(map));
}
},setCustomUserInterfaceMapping:function(_48f){
if(this.customUserInterfaceMapping==null){
this.customUserInterfaceMapping=_48f;
}else{
this.customUserInterfaceMapping.merge(_48f);
}
},_registerBindings:function(_490){
var _491=new DocumentCrawler();
_491.mode=DocumentCrawler.MODE_REGISTER;
_491.crawl(_490);
_491.dispose();
},_attachBindings:function(_492){
var _493=new DocumentCrawler();
_493.mode=DocumentCrawler.MODE_ATTACH;
var list=new List();
_493.crawl(_492,list);
var _495=false;
while(list.hasNext()){
var _496=list.getNext();
if(!_496.isAttached){
_496.onBindingAttach();
if(!_496.memberDependencies){
_496.onBindingInitialize();
}
if(Interfaces.isImplemented(IData,_496)){
_495=true;
}
}
}
if(_495){
var root=UserInterface.getBinding(document.body);
if(root!=null){
setTimeout(function(){
if(Binding.exists(root)){
root.dispatchAction(FocusBinding.ACTION_UPDATE);
}
},250);
}
}
_493.dispose();
list.dispose();
},attachBindings:function(_498){
this._registerBindings(_498);
this._attachBindings(_498);
},detachBindings:function(_499,_49a){
var _49b=new DocumentCrawler();
_49b.mode=DocumentCrawler.MODE_DETACH;
var list=new List();
_49b.crawl(_499,list);
if(_49a==true){
list.extractFirst();
}
var _49d=false;
list.reverse().each(function(_49e){
if(Interfaces.isImplemented(IData,_49e)){
_49d=true;
}
_49e.dispose(true);
});
if(_49d){
var root=UserInterface.getBinding(document.body);
if(root!=null){
setTimeout(function(){
if(Binding.exists(root)){
root.dispatchAction(FocusBinding.ACTION_UPDATE);
}
},250);
}
}
_49b.dispose();
list.dispose();
},detachAllBindings:function(){
this.detachBindings(document.documentElement);
},computeMaxIndex:function(){
if(this._maxIndex==-1){
this._maxIndex=DOMUtil.getMaxIndex(document);
}
return this._maxIndex++;
},_isTextInputElement:function(_4a0){
return (/textarea|input/.test(DOMUtil.getLocalName(_4a0)));
},_makeDocumentUnselectable:function(){
if(Client.isExplorer){
DOMEvents.addEventListener(document,DOMEvents.SELECTSTART,this);
}else{
}
}};
var DocumentManager=new _DocumentManager();
function _DataManager(){
}
_DataManager.prototype={isPostBackFun:false,_logger:SystemLogger.getLogger("DataManager ["+document.title+"]"),_dataBindings:{},isDirty:false,dirty:function(_4a1){
this.isDirty=true;
var _4a2=false;
if(_4a1!=null&&!_4a1.isDirty){
_4a1.isDirty=true;
_4a1.dispatchAction(Binding.ACTION_DIRTY);
_4a2=true;
}
return _4a2;
},clean:function(_4a3){
if(_4a3.isDirty){
_4a3.isDirty=false;
}
},registerDataBinding:function(name,_4a5){
if(Interfaces.isImplemented(IData,_4a5,true)){
if(this._dataBindings[name]!=null){
throw "no proper support for checkbox multiple values! "+name;
}else{
this._dataBindings[name]=_4a5;
}
}else{
throw "Invalid DataBinding: "+_4a5;
}
},unRegisterDataBinding:function(name){
if(this._dataBindings[name]!=null){
delete this._dataBindings[name];
}
},getDataBinding:function(name){
var _4a8=null;
if(this._dataBindings[name]!=null){
_4a8=this._dataBindings[name];
}
return _4a8;
},getAllDataBindings:function(_4a9){
var list=new List();
for(var name in this._dataBindings){
var _4ac=this._dataBindings[name];
list.add(_4ac);
if(_4a9&&_4ac instanceof WindowBinding){
var _4ad=_4ac.getContentWindow().DataManager;
if(_4ad!=null){
list.merge(_4ad.getAllDataBindings());
}
}
}
return list;
},hasDataBindings:function(){
var _4ae=false;
for(var name in this._dataBindings){
_4ae=true;
break;
}
return _4ae;
},populateDataBindings:function(map){
if(map instanceof DataBindingMap){
map.each(function(name,_4b2){
var _4b3=this._dataBindings[name];
if(_4b3!=null){
switch(map.type){
case DataBindingMap.TYPE_RESULT:
try{
_4b3.setResult(_4b2);
}
catch(exception){
if(Application.isDeveloperMode){
alert(_4b3);
}
throw exception;
}
break;
case DataBindingMap.TYPE_VALUE:
throw "Not implemented!";
}
}
});
}
},getDataBindingValueMap:function(){
var _4b4=new DataBindingMap();
_4b4.type=DataBindingMap.TYPE_VALUE;
for(var name in this._dataBindings){
var _4b6=this._dataBindings[name];
if(_4b6 instanceof DataDialogBinding){
throw "DataDialogBinding valuemap not supported!";
}
_4b4[name]=_4b6.getValue();
}
return _4b4;
},getDataBindingResultMap:function(){
var _4b7=new DataBindingMap();
_4b7.type=DataBindingMap.TYPE_RESULT;
for(var name in this._dataBindings){
var _4b9=this._dataBindings[name];
var res=_4b9.getResult();
if(res instanceof DataBindingMap){
res.each(function(name,_4bc){
_4b7.set(name,_4bc);
});
}else{
_4b7.set(name,res);
}
}
return _4b7;
},getPostBackString:function(){
var _4bd="";
var form=document.forms[0];
if(form!=null){
var _4bf="";
new List(form.elements).each(function(_4c0){
var name=_4c0.name;
var _4c2=encodeURIComponent(_4c0.value);
switch(_4c0.type){
case "text":
case "hidden":
case "password":
case "textarea":
case "select-one":
_4bd+=name+"="+_4c2+"&";
break;
case "submit":
if(document.activeElement==_4c0){
_4bd+=name+"="+_4c2+"&";
}
break;
case "radio":
if(_4c0.checked){
_4bd+=name+"="+_4c2+"&";
}
break;
case "checkbox":
if(_4c0.checked){
if(_4c0.name==_4bf){
if(_4bd.lastIndexOf("&")==_4bd.length-1){
_4bd=_4bd.substr(0,_4bd.length-1);
}
_4bd+=","+_4c2;
}else{
_4bd+=name+"="+_4c0.value;
}
_4bf=name;
_4bd+="&";
}
break;
}
});
}
return _4bd.substr(0,_4bd.length-1);
}};
var DataManager=new _DataManager();
function _Templates(){
}
_Templates.prototype={_logger:SystemLogger.getLogger("Templates"),_cache:{},_mode:null,_modes:{MODE_PLAINTEXT:0,MODE_DOCUMENT:1,MODE_ELEMENT:2,MODE_DOCUMENTTEXT:3,MODE_ELEMENTTEXT:4},getTemplateDocument:function(name){
this._mode=this._modes.MODE_DOCUMENT;
return this._getIt(name);
},getTemplateElement:function(name){
this._mode=this._modes.MODE_ELEMENT;
return this._getIt(name);
},getTemplateDocumentText:function(name){
this._mode=this._modes.MODE_DOCUMENTTEXT;
return this._getIt(name);
},getTemplateElementText:function(name){
this._mode=this._modes.MODE_ELEMENTTEXT;
return this._getIt(name);
},getTemplateBodyText:function(name){
var tmp=this.getTemplateDocumentText(name);
tmp=tmp.split("<body>")[1].split("</body>")[0];
return tmp;
},getPlainText:function(name){
this._mode=this._modes.MODE_PLAINTEXT;
return this._getIt(name);
},_getIt:function(name){
var _4cb=null;
var _4cc=null;
var _4cd=false;
if(!this._cache[name]){
_4cd=true;
var uri=Constants.TEMPLATESROOT+"/"+name;
var _4cf=DOMUtil.getXMLHTTPRequest();
_4cf.open("get",uri,false);
_4cf.setRequestHeader("Content-Type","text/xml; charset=UTF-8");
_4cf.send(null);
switch(this._mode){
case this._modes.MODE_PLAINTEXT:
_4cc=_4cf.responseText;
break;
default:
_4cc=_4cf.responseXML;
break;
}
if(_4cc==null){
throw new Error("Templates: Could not read template. Malformed XML?");
}else{
this._cache[name]=_4cc;
}
}
_4cc=this._cache[name];
switch(this._mode){
case this._modes.MODE_PLAINTEXT:
_4cb=_4cc;
break;
case this._modes.MODE_DOCUMENT:
_4cb=DOMUtil.cloneNode(_4cc,true);
break;
case this._modes.MODE_ELEMENT:
_4cb=DOMUtil.cloneNode(_4cc.documentElement,true);
break;
case this._modes.MODE_DOCUMENTTEXT:
_4cb=DOMSerializer.serialize(_4cc,true);
break;
case this._modes.MODE_ELEMENTTEXT:
_4cb=DOMSerializer.serialize(_4cc.documentElement,true);
break;
}
if(_4cd&&Application.isDeveloperMode){
this._logger.fine(new String("Import \""+name+"\":\n\n"+_4cb));
}
return _4cb;
}};
var Templates=new _Templates();
function DialogButton(obj){
this.label=null;
this.image=null;
this.response=null;
this.isFocusable=true;
this.isDefault=false;
this.isFocused=false;
if(obj){
for(var prop in obj){
if(typeof this[prop]!="undefined"){
this[prop]=obj[prop];
}
}
}
}
function _Dialog(){
this._construct();
}
_Dialog.prototype={_logger:SystemLogger.getLogger("Dialog"),_URL_STANDARDDIALOG:"${root}/content/dialogs/standard/standard.aspx",MODAL:"modal",NON_MODAL:"nonmodal",URL_TREESELECTOR:"${root}/content/dialogs/treeselector/treeselector.aspx",URL_TREESEARCH:"${root}/content/dialogs/treesearch/treeSearchForm.aspx",URL_IMAGESELECTOR:"${root}/content/dialogs/treeselector/special/imageselector.aspx",URL_SERVICEFAULT:"${root}/content/dialogs/webservices/error.aspx",BUTTONS_YES_NO_CANCEL:["yes:default","no","cancel"],BUTTONS_ACCEPT_CANCEL:["accept:default","cancel"],BUTTONS_ACCEPT:["accept:default"],RESPONSE_YES:"yes",RESPONSE_NO:"no",RESPONSE_ACCEPT:"accept",RESPONSE_CANCEL:"cancel",RESPONSE_DEFAULT:"default",_TYPE_WARNING:"warning",_TYPE_MESSAGE:"message",_TYPE_ERROR:"error",_TYPE_QUESTION:"question",_dialogImages:{"warning":"${icon:warning}","message":"${icon:message}","error":"${icon:error}","question":"${icon:question}"},_construct:function(){
this._dialogButtons={"yes":new DialogButton({label:"Yes",response:this.RESPONSE_YES}),"no":new DialogButton({label:"No",response:this.RESPONSE_NO}),"accept":new DialogButton({label:"OK",response:this.RESPONSE_ACCEPT}),"cancel":new DialogButton({label:"Cancel",response:this.RESPONSE_CANCEL})};
},invoke:function(url,_4d3,_4d4){
this._logger.error("Not implemented");
},invokeModal:function(url,_4d6,_4d7){
var _4d8=new DialogViewDefinition({handle:KeyMaster.getUniqueKey(),position:Dialog.MODAL,url:url,handler:_4d6,argument:_4d7});
StageBinding.presentViewDefinition(_4d8);
return _4d8;
},invokeDefinition:function(_4d9){
if(_4d9 instanceof DialogViewDefinition){
StageBinding.presentViewDefinition(_4d9);
}
return _4d9;
},question:function(_4da,text,_4dc,_4dd){
if(!_4dc){
_4dc=this.BUTTONS_ACCEPT_CANCEL;
}
this._standardDialog(this._TYPE_QUESTION,_4da,text,_4dc,_4dd);
},message:function(_4de,text,_4e0,_4e1){
if(!_4e0){
_4e0=this.BUTTONS_ACCEPT;
}
this._standardDialog(this._TYPE_MESSAGE,_4de,text,_4e0,_4e1);
},error:function(_4e2,text,_4e4,_4e5){
if(!_4e4){
_4e4=this.BUTTONS_ACCEPT;
}
this._standardDialog(this._TYPE_ERROR,_4e2,text,_4e4,_4e5);
},warning:function(_4e6,text,_4e8,_4e9){
if(!_4e8){
_4e8=this.BUTTONS_ACCEPT;
}
this._standardDialog(this._TYPE_WARNING,_4e6,text,_4e8,_4e9);
},_standardDialog:function(type,_4eb,text,_4ed,_4ee){
var _4ef=null;
if(!_4ed){
_4ef=new List(Dialog.BUTTONS_ACCEPT);
}else{
_4ef=new List();
new List(_4ed).each(function(_4f0){
var _4f1=null;
switch(typeof _4f0){
case "object":
_4f1=_4f0;
break;
case "string":
var _4f2=false;
if(_4f0.indexOf(":")>-1){
_4f0=_4f0.split(":")[0];
_4f2=true;
}
_4f1=Dialog._dialogButtons[_4f0];
if(_4f2){
_4f1.isDefault=true;
}
break;
}
_4ef.add(_4f1);
});
}
var _4f3={title:_4eb,text:text,type:type,image:this._dialogImages[type],buttons:_4ef};
var _4f4=new DialogViewDefinition({handle:"standarddialog:"+type,position:Dialog.MODAL,url:this._URL_STANDARDDIALOG,handler:_4ee,argument:_4f3});
StageBinding.presentViewDefinition(_4f4);
}};
var Dialog=new _Dialog();
function _Commands(){
this._construct();
}
_Commands.prototype={_URL_ABOUTDIALOG:"${root}/content/dialogs/about/about.aspx",_URL_PREFERENCES:"${root}/content/dialogs/preferences/preferences.aspx",_construct:function(){
var self=this;
EventBroadcaster.subscribe(BroadcastMessages.SAVE_ALL,{handleBroadcast:function(_4f6,arg){
self.saveAll(arg);
}});
},about:function(){
this._dialog(this._URL_ABOUTDIALOG);
},preferences:function(){
this._dialog(this._URL_PREFERENCES);
},_dialog:function(url){
if(Client.hasTransitions){
setTimeout(function(){
Dialog.invokeModal(url);
},Animation.DEFAULT_TIME);
}else{
Dialog.invokeModal(url);
}
},close:function(){
EventBroadcaster.broadcast(BroadcastMessages.CLOSE_CURRENT);
},closeAll:function(){
this.saveAll(true);
},save:function(){
EventBroadcaster.broadcast(BroadcastMessages.SAVE_CURRENT);
},saveAll:function(_4f9){
var self=this;
var _4fb=Application.getDirtyDockTabsTabs();
if(_4fb.hasEntries()){
Dialog.invokeModal("${root}/content/dialogs/save/saveall.aspx",{handleDialogResponse:function(_4fc,_4fd){
switch(_4fc){
case Dialog.RESPONSE_ACCEPT:
self._handleSaveAllResult(_4fd,_4f9);
break;
case Dialog.RESPONSE_CANCEL:
EventBroadcaster.broadcast(BroadcastMessages.SAVE_ALL_DONE);
break;
}
}},_4fb);
}else{
if(_4f9){
EventBroadcaster.broadcast(BroadcastMessages.CLOSE_ALL);
}
}
},_handleSaveAllResult:function(_4fe,_4ff){
var _500=false;
var list=new List();
_4fe.each(function(name,tab){
if(tab!=false){
list.add(tab);
}
});
if(list.hasEntries()){
_500=true;
var _504=list.getLength();
var _505={handleBroadcast:function(_506,tab){
if(--_504==0){
EventBroadcaster.unsubscribe(BroadcastMessages.DOCKTAB_CLEAN,this);
EventBroadcaster.broadcast(BroadcastMessages.SAVE_ALL_DONE);
if(_4ff){
EventBroadcaster.broadcast(BroadcastMessages.CLOSE_ALL);
}
}
}};
EventBroadcaster.subscribe(BroadcastMessages.DOCKTAB_CLEAN,_505);
list.each(function(tab){
tab.saveContainedEditor();
});
}else{
EventBroadcaster.broadcast(BroadcastMessages.SAVE_ALL_DONE);
}
return _500;
},systemLog:function(){
if(Application.isOperational){
StageBinding.handleViewPresentation("Composite.Management.SystemLog");
}else{
var win=window.open(Constants.APPROOT+"/content/views/dev/systemlog/systemlogoutput.html");
win.onload=function(){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMLOG_OPENED,this);
};
}
},help:function(){
var _50a="Composite.Management.Help";
if(!StageBinding.isViewOpen(_50a)){
StageBinding.handleViewPresentation(_50a);
}
}};
var Commands=new _Commands();
function _Prism(){
}
_Prism.prototype={_logger:SystemLogger.getLogger("Prism"),clearCache:function(){
this._logger.fine("Clearing the cache");
this._dispatchToPrism("contenttochrome-clearcache");
},disableCache:function(){
this._logger.fine("Disabling cache");
this._dispatchToPrism("contenttochrome-cache-disable");
},enableCache:function(){
this._logger.fine("Enabling cache");
this._dispatchToPrism("contenttochrome-cache-enable");
},_dispatchToPrism:function(type){
if(Client.isPrism){
var _50c=document.createEvent("Events");
_50c.initEvent(type,true,true);
window.dispatchEvent(_50c);
}else{
this._logger.warn("Prism methods should only be invoked in Prism! ("+type+")");
}
}};
var Prism=new _Prism();
ViewDefinition.DEFAULT_URL="${root}/blank.aspx";
ViewDefinition.clone=function(_50d,_50e){
var _50f=null;
var _510=ViewDefinitions[_50d];
if(_510.isMutable){
var impl=null;
if(_510 instanceof DialogViewDefinition){
impl=DialogViewDefinition;
}else{
impl=HostedViewDefinition;
}
if(_50e!=null&&impl!=null){
var def=new impl();
for(var prop in _510){
def[prop]=_510[prop];
}
def.handle=_50e;
_50f=def;
}else{
throw "Cannot clone without newhandle";
}
}else{
throw "Cannot clone non-mutable definition";
}
return _50f;
};
function ViewDefinition(){
}
ViewDefinition.prototype={url:ViewDefinition.DEFAULT_URL,argument:null,handle:null,entityToken:null,flowHandle:null,label:null,image:null,toolTip:null};
SystemViewDefinition.prototype=new ViewDefinition;
SystemViewDefinition.prototype.constructor=SystemViewDefinition;
SystemViewDefinition.superclass=ViewDefinition.prototype;
SystemViewDefinition.DEFAULT_URL="${root}/content/views/systemview/systemview.aspx";
function SystemViewDefinition(node){
this.node=node;
this.argument=node;
this.url=SystemViewDefinition.DEFAULT_URL;
this.handle=node.getHandle();
this.label=node.getLabel();
this.image=node.getImageProfile().getDefaultImage();
this.toolTip=node.getToolTip();
}
HostedViewDefinition.prototype=new ViewDefinition;
HostedViewDefinition.prototype.constructor=HostedViewDefinition;
HostedViewDefinition.superclass=ViewDefinition.prototype;
HostedViewDefinition.POSTBACK_URL="${root}/postback.aspx";
function HostedViewDefinition(arg){
this.position=DockBinding.MAIN;
this.perspective=null;
this.entityToken=null;
this.label=null;
this.image=null;
if(arg){
for(var prop in arg){
if(this[prop]||this.prop==null){
this[prop]=arg[prop];
if(this.url){
this.url=Resolver.resolve(this.url);
}
}else{
throw "Property not recognized: "+prop;
}
}
}
}
DialogViewDefinition.prototype=new ViewDefinition;
DialogViewDefinition.prototype.constructor=HostedViewDefinition;
DialogViewDefinition.superclass=ViewDefinition.prototype;
function DialogViewDefinition(arg){
this.handler=null;
this.position=Dialog.MODAL;
this.label=null;
this.image=null;
this.width=null;
this.height=null;
if(arg){
for(var prop in arg){
if(this[prop]||this.prop==null){
this[prop]=arg[prop];
if(this.url){
this.url=Resolver.resolve(this.url);
}
if(this.handler){
if(!Interfaces.isImplemented(IDialogResponseHandler,this.handler)){
throw "IDialogResponseHandler not implemented";
}
}
}else{
throw "Property not recognized: "+prop;
}
}
}
}
Binding.prototype.constructor=Binding;
Binding.CALLBACKID="callbackid";
Binding.CALLBACKARG="callbackarg";
Binding.CLASSNAME_CLEARFLOAT="clearfloatelement";
Binding.CLASSNAME_FOCUSED="focused";
Binding.SNOOZE=Client.isMozilla==true?125:250;
Binding.ACTION_DRAG="bindingdrag";
Binding.ACTION_DROP="bindingdrop";
Binding.ACTION_DIRTY="bindingdirty";
Binding.ACTION_VALID="bindingvalid";
Binding.ACTION_UPDATED="bindingupdated";
Binding.ACTION_INVALID="bindinginvalid";
Binding.ACTION_RESIZED="bindingresized";
Binding.ACTION_FOCUSED="bindingfocused";
Binding.ACTION_BLURRED="bindingblurred";
Binding.ACTION_ATTACHED="bindingattached";
Binding.ACTION_DETACHED="bindingdetached";
Binding.ACTION_DISPOSED="bindingdisposed";
Binding.ACTION_MOVETOTOP="bindingmovetotop";
Binding.ACTION_ACTIVATED="bindingactivated";
Binding.ACTION_REGISTERED="bindingregistered";
Binding.ACTION_MOVEDONTOP="bindingmovedontop";
Binding.ACTION_INITIALIZED="bindinginitialized";
Binding.ACTION_FORCE_REFLEX="bindingforcereflex";
Binding.ACTION_POSITIONCHANGED="bindingpositionchanged";
Binding.ACTION_DIMENSIONCHANGED="bindingdimensionchanged";
Binding.ACTION_VISIBILITYCHANGED="bindingvisibilitychanged";
Binding.ABSTRACT_METHOD=function(){
SystemDebug.stack(arguments);
throw (this.toString()+" abstract method not implemented");
};
Binding.evaluate=function(_519,_51a){
var _51b=null;
var _51c=_51a.bindingWindow.WindowManager;
if(_51c!=null){
var _51d=Binding.parseScriptStatement(_519,_51a.key);
_51b=_51c.evaluate(_51d);
}
return _51b;
};
Binding.parseScriptStatement=function(_51e,key){
if(_51e!=null&&key!=null){
var _520="UserInterface.getBindingByKey ( \""+key+"\" )";
_51e=_51e.replace(/(\W|^)this(,| +|\)|;)/g,_520);
_51e=_51e.replace(/(\W|^)this(\.)/g,_520+".");
}
return _51e;
};
Binding.exists=function(_521){
var _522=false;
try{
if(_521&&_521.bindingElement&&_521.bindingElement.nodeType&&_521.isDisposed==false){
_522=true;
}
}
catch(accessDeniedException){
_522=false;
}
finally{
return _522;
}
};
Binding.destroy=function(_523){
if(!_523.isDisposed){
if(_523.acceptor!=null){
_523.acceptor.dispose();
}
if(_523.dragger!=null){
_523.disableDragging();
}
if(_523.boxObject!=null){
_523.boxObject.dispose();
}
if(_523._domEventHandlers!=null){
DOMEvents.cleanupEventListeners(_523);
}
for(var _524 in _523.shadowTree){
var _525=_523.shadowTree[_524];
if(_525 instanceof Binding&&Binding.exists(_525)){
_525.dispose(true);
}
_523.shadowTree[_524]=null;
}
_523.isDisposed=true;
_523=null;
}
};
Binding.dotnetify=function(_526,_527){
var _528=_526.getCallBackID();
if(_528!=null){
var _529=DOMUtil.createElementNS(Constants.NS_XHTML,"input",_526.bindingDocument);
_529.type="hidden";
_529.id=_528;
_529.name=_528;
_529.value=_527!=null?_527:"";
_526.bindingElement.appendChild(_529);
_526.shadowTree.dotnetinput=_529;
}else{
throw _526.toString()+": Missing callback ID";
}
};
Binding.imageProfile=function(_52a){
var _52b=_52a.getProperty("image");
var _52c=_52a.getProperty("image-hover");
var _52d=_52a.getProperty("image-active");
var _52e=_52a.getProperty("image-disabled");
if(_52a.imageProfile==null){
if(_52a.image==null&&_52b!=null){
_52a.image=_52b;
}
if(_52a.imageHover==null&&_52c!=null){
_52a.imageHover=_52b;
}
if(_52a.imageActive==null&&_52d!=null){
_52a.imageActive=_52d;
}
if(_52a.imageDisabled==null&&_52e!=null){
_52a.imageDisabled=_52e;
}
if(_52a.image||_52a.imageHover||_52a.imageActive||_52a.imageDisabled){
_52a.imageProfile=new ImageProfile(_52a);
}
}
};
function Binding(){
this.logger=SystemLogger.getLogger("binding");
this.key=null;
this.bindingElement=null;
this.bindingDocument=null;
this.bindingWindow=null;
this.shadowTree=null;
this.actionListeners=null;
this.contextMenuBinding=null;
this.isRegistered=false;
this.isAttached=false;
this.isInitialized=false;
this.isDisposed=false;
this.isDraggable=false;
this.dragger=null;
this.isShadowBinding=false;
this.memberDependencies=null;
this.dependentBindings=null;
this.propertyMethodMap=null;
this.isBlockingActions=false;
this.isVisible=true;
this.boxObject=null;
this.dragType=null;
this.dragAccept=null;
this.dragReject=false;
this.acceptor=null;
this.isLazy=false;
this._persist=null;
this.isBindingBuild=false;
this._hasActivationAwareness=false;
this.isFlexSuspended=false;
this.crawlerFilters=null;
this._subscriptions=null;
}
Binding.prototype.toString=function(){
return "[Binding]";
};
Binding.prototype.onBindingRegister=function(){
if(!this.isRegistered){
this.bindingElement=UserInterface.getElement(this);
this.bindingDocument=this.bindingElement.ownerDocument;
this.bindingWindow=DOMUtil.getParentWindow(this.bindingDocument);
this.shadowTree={};
this.actionListeners={};
this.propertyMethodMap={};
this.isRegistered=true;
this._subscriptions=new Map();
this._updateBindingMap(true);
if(this.getProperty("lazy")){
this.isLazy=true;
}
}
};
Binding.prototype.onBindingAttach=function(){
if(!this.isAttached){
if(!this.bindingElement.parentNode){
alert(this+" onBindingAttach: Binding must be positioned in document structure before attachment can be invoked.");
}else{
this.boxObject=new BindingBoxObject(this);
this._initializeBindingPersistanceFeatures();
this._initializeBindingGeneralFeatures();
this._initializeBindingDragAndDropFeatures();
this._updateBindingMap(true);
this.isAttached=true;
}
}
};
Binding.prototype.onBindingInitialize=function(){
if(this.dependentBindings!=null){
for(var key in this.dependentBindings){
var _530=this.dependentBindings[key];
_530.onMemberInitialize(this);
}
}
this.isInitialized=true;
};
Binding.prototype.onMemberInitialize=function(_531){
if(_531){
this.memberDependencies[_531.key]=true;
var _532=true;
for(var key in this.memberDependencies){
if(this.memberDependencies[key]==false){
_532=false;
break;
}
}
if(_532){
this.onBindingInitialize();
}
}else{
throw new Error(this+" onMemberInitialize: Expected argument.");
}
};
Binding.prototype.attach=function(){
if(!this.isAttached){
this.onBindingAttach();
if(this.memberDependencies==null){
this.onBindingInitialize();
}
}
return this;
};
Binding.prototype.attachRecursive=function(){
this.bindingWindow.DocumentManager.attachBindings(this.bindingElement);
};
Binding.prototype.detachRecursive=function(_534){
if(_534==null){
_534=false;
}
this.bindingWindow.DocumentManager.detachBindings(this.bindingElement,!_534);
};
Binding.prototype.addMember=function(_535){
if(!this.isAttached){
throw "Cannot add members to unattached binding";
}else{
if(!_535.isInitialized){
if(!this.memberDependencies){
this.memberDependencies={};
}
this.memberDependencies[_535.key]=false;
_535.registerDependentBinding(this);
}
}
return _535;
};
Binding.prototype.addMembers=function(_536){
while(_536.hasNext()){
var _537=_536.getNext();
if(!_537.isInitialized){
this.addMember(_537);
}
}
return _536;
};
Binding.prototype.registerDependentBinding=function(_538){
if(!this.dependentBindings){
this.dependentBindings={};
}
this.dependentBindings[_538.key]=_538;
};
Binding.prototype._initializeBindingPersistanceFeatures=function(){
var _539=this.getProperty("persist");
if(_539&&Persistance.isEnabled){
var id=this.bindingElement.id;
if(!KeyMaster.hasKey(id)){
this._persist={};
var _53b=new List(_539.split(" "));
while(_53b.hasNext()){
var prop=_53b.getNext();
var _53d=Persistance.getPersistedProperty(id,prop);
if(_53d!=null){
this._persist[prop]=_53d;
this.setProperty(prop,_53d);
}else{
_53d=this.getProperty(prop);
if(_53d!=null){
this._persist[prop]=_53d;
}
}
}
}else{
throw "Persistable bindings must have a specified ID.";
}
}
};
Binding.prototype._initializeBindingGeneralFeatures=function(){
var _53e=this.getProperty("disabled");
var _53f=this.getProperty("contextmenu");
var _540=this.getProperty("observes");
var _541=this.getProperty("onattach");
var _542=this.getProperty("hidden");
var _543=this.getProperty("blockactionevents");
if(_542==true&&this.isVisible==true){
this.hide();
}
if(_53e&&this.logger!=null){
this.logger.error("The 'disabled' property has been renamed 'isdisbaled'");
}
if(_53f){
this.setContextMenu(_53f);
}
if(_540){
this.observe(this.getBindingForArgument(_540));
}
if(_543==true){
this.isBlockingActions=true;
}
if(this.isActivationAware==true){
var root=UserInterface.getBinding(this.bindingDocument.body);
root.makeActivationAware(this);
this._hasActivationAwareness=true;
}
if(_541!=null){
Binding.evaluate(_541,this);
}
};
Binding.prototype._initializeBindingDragAndDropFeatures=function(){
var _545=this.getProperty("draggable");
var _546=this.getProperty("dragtype");
var _547=this.getProperty("dragaccept");
var _548=this.getProperty("dragreject");
if(_545!=null){
this.isDraggable=_545;
}
if(_546!=null){
this.dragType=_546;
if(_545!=false){
this.isDraggable=true;
}
}
if(_547!=null){
this.dragAccept=_547;
}
if(_548!=null){
this.dragReject=_548;
}
if(this.isDraggable){
this.enableDragging();
}
if(this.dragger!=null&&this.dragType!=null){
this.dragger.registerHandler(Application);
}
if(this.dragAccept!=null&&this.dragReject==true){
throw new Error("Binding cannot both accept and reject "+this);
}else{
if(this.dragAccept!=null||this.dragReject!=null){
this.acceptor=new BindingAcceptor(this);
}
}
};
Binding.prototype._updateBindingMap=function(_549){
try{
if(this.bindingWindow!=null){
var id=this.bindingElement.id;
var map=this.bindingWindow.bindingMap;
var _54c=null;
if(_549){
_54c=map[id];
if(_54c!=null&&_54c!=this){
var cry=this.toString()+" duplicate binding ID: "+id;
this.logger.error(cry);
if(Application.isDeveloperMode){
throw (cry);
}
}else{
map[id]=this;
}
}else{
_54c=map[id];
if(_54c!=null&&_54c==this){
delete map[id];
}
}
}else{
var _54e=new String("Binding#_updateBindingMap odd dysfunction: "+this.toString()+": "+_549);
if(Application.isDeveloperMode==true){
alert(_54e);
}else{
this.logger.error(_54e);
}
}
}
catch(exception){
this.logger.error(exception);
}
};
Binding.prototype.handleEvent=function(e){
};
Binding.prototype.handleAction=function(_550){
};
Binding.prototype.handleBroadcast=function(_551,arg){
};
Binding.prototype.handleElement=function(_553){
return false;
};
Binding.prototype.updateElement=function(_554){
return false;
};
Binding.prototype.getBindingForArgument=function(arg){
var _556=null;
switch(typeof arg){
case "object":
_556=arg;
break;
case "string":
_556=this.bindingDocument.getElementById(arg);
if(_556==null){
_556=Binding.evaluate(arg,this);
}
break;
}
if(_556!=null&&_556.nodeType!=null){
_556=UserInterface.getBinding(_556);
}
return _556;
};
Binding.prototype.serialize=function(){
var _557={};
var id=this.bindingElement.id;
if(id&&id!=this.key){
_557.id=id;
}
var _559=this.getProperty("binding");
if(_559){
_557.binding=_559;
}
if(!BindingSerializer.includeShadowTreeBindings){
var _55a=this.getAncestorBindingByLocalName("*");
if(_55a){
if(_55a.isShadowBinding){
this.isShadowBinding=true;
_557=false;
}else{
var tree=_55a.shadowTree;
for(var key in tree){
var _55d=tree[key];
if(_55d==this){
this.isShadowBinding=true;
_557=false;
}
}
}
}
}
return _557;
};
Binding.prototype.serializeToString=function(_55e){
var _55f=null;
if(this.isAttached){
_55f=new BindingSerializer().serializeBinding(this,_55e);
}else{
throw "cannot serialize unattached binding";
}
return _55f;
};
Binding.prototype.subTreeFromString=function(_560){
this.detachRecursive();
this.bindingElement.innerHTML=_560;
this.attachRecursive();
};
Binding.prototype.getProperty=function(_561){
var _562=this.bindingElement.getAttribute(_561);
if(_562){
_562=Types.castFromString(_562);
}
return _562;
};
Binding.prototype.setProperty=function(prop,_564){
if(_564!=null){
_564=_564.toString();
if(String(this.bindingElement.getAttribute(prop))!=_564){
this.bindingElement.setAttribute(prop,_564);
if(this.isAttached==true){
if(Persistance.isEnabled&&_564!=null){
if(this._persist!=null&&this._persist[prop]){
this._persist[prop]=_564;
Persistance.setPersistedProperty(this.bindingElement.id,prop,_564);
}
}
var _565=this.propertyMethodMap[prop];
if(_565){
_565.call(this,this.getProperty(prop));
}
}
}
}else{
this.deleteProperty(prop);
}
};
Binding.prototype.deleteProperty=function(prop){
this.bindingElement.removeAttribute(prop);
};
Binding.prototype.getID=function(){
var _567=null;
if(Binding.exists(this)){
_567=this.bindingElement.id;
}else{
SystemDebug.stack(arguments);
}
return _567;
};
Binding.prototype.attachClassName=function(_568){
CSSUtil.attachClassName(this.bindingElement,_568);
};
Binding.prototype.detachClassName=function(_569){
CSSUtil.detachClassName(this.bindingElement,_569);
};
Binding.prototype.hasClassName=function(_56a){
return CSSUtil.hasClassName(this.bindingElement,_56a);
};
Binding.prototype.addActionListener=function(type,_56c){
_56c=_56c!=null?_56c:this;
if(Action.isValid(type)){
if(Interfaces.isImplemented(IActionListener,_56c)){
if(!this.actionListeners[type]){
this.actionListeners[type]=[];
}
this.actionListeners[type].push(_56c);
}else{
throw new Error("Could not add action-event listener. Method handleAction not implemented.");
}
}else{
alert(this+"\nCould not add undefined Action ("+_56c+")");
}
};
Binding.prototype.removeActionListener=function(type,_56e){
_56e=_56e?_56e:this;
if(Action.isValid(type)){
var _56f=this.actionListeners[type];
if(_56f){
var i=0,_571;
while((_571=_56f[i])!=null){
if(_571==_56e){
_56f.splice(i,1);
break;
}
i++;
}
}
}
};
Binding.prototype.addEventListener=function(type,_573){
_573=_573?_573:this;
DOMEvents.addEventListener(this.bindingElement,type,_573);
};
Binding.prototype.removeEventListener=function(type,_575){
_575=_575?_575:this;
DOMEvents.removeEventListener(this.bindingElement,type,_575);
};
Binding.prototype.subscribe=function(_576){
if(!this.hasSubscription(_576)){
this._subscriptions.set(_576,true);
EventBroadcaster.subscribe(_576,this);
}else{
this.logger.error("Dubplicate subscription aborted:"+_576);
}
};
Binding.prototype.unsubscribe=function(_577){
if(this.hasSubscription(_577)){
this._subscriptions.del(_577);
EventBroadcaster.unsubscribe(_577,this);
}
};
Binding.prototype.hasSubscription=function(_578){
return this._subscriptions.has(_578);
};
Binding.prototype.observe=function(_579,_57a){
_579.addObserver(this,_57a);
};
Binding.prototype.unObserve=function(_57b,_57c){
_57b.removeObserver(this,_57c);
};
Binding.prototype.setContextMenu=function(arg){
this.contextMenuBinding=this.getBindingForArgument(arg);
if(this.contextMenuBinding){
var self=this;
var menu=this.contextMenuBinding;
this.addEventListener(DOMEvents.CONTEXTMENU,{handleEvent:function(e){
if(Interfaces.isImplemented(IActionListener,self)==true){
var _581={handleAction:function(){
menu.removeActionListener(MenuItemBinding.ACTION_COMMAND,self);
menu.removeActionListener(PopupBinding.ACTION_HIDE,_581);
}};
menu.addActionListener(MenuItemBinding.ACTION_COMMAND,self);
menu.addActionListener(PopupBinding.ACTION_HIDE,_581);
}
menu.snapToMouse(e);
}});
}else{
throw "No such contextmenu: "+arg;
}
};
Binding.prototype.getContextMenu=function(){
return this.contextMenuBinding;
};
Binding.prototype.dispatchAction=function(arg){
var _583=null;
var _584=null;
var _585=false;
if(arg instanceof Action){
_583=arg;
}else{
if(Action.isValid(arg)){
_583=new Action(this,arg);
_585=true;
}
}
if(_583!=null&&Action.isValid(_583.type)==true){
if(_583.isConsumed==true){
_584=_583;
}else{
var _586=this.actionListeners[_583.type];
if(_586!=null){
_583.listener=this;
var i=0,_588;
while((_588=_586[i++])!=null){
if(_588&&_588.handleAction){
_588.handleAction(_583);
}
}
}
var _589=true;
if(this.isBlockingActions==true){
switch(_583.type){
case Binding.ACTION_FOCUSED:
case Binding.ACTION_BLURRED:
case Binding.ACTION_ACTIVATED:
case Binding.ACTION_FORCE_REFLEX:
case DockTabBinding.ACTION_UPDATE_VISUAL:
case PageBinding.ACTION_DOPOSTBACK:
break;
default:
if(!_585){
_589=false;
}
break;
}
}
if(_589){
_584=this.migrateAction(_583);
}else{
_584=_583;
}
}
}
return _584;
};
Binding.prototype.migrateAction=function(_58a){
var _58b=null;
var _58c=null;
var node=this.getMigrationParent();
if(node){
while(node&&!_58b&&node.nodeType!=Node.DOCUMENT_NODE){
_58b=UserInterface.getBinding(node);
node=node.parentNode;
}
if(_58b){
_58c=_58b.dispatchAction(_58a);
}else{
_58c=_58a;
}
}
return _58c;
};
Binding.prototype.reflex=function(_58e){
if(Application.isOperational==true){
FlexBoxBinding.reflex(this,_58e);
}
};
Binding.prototype.getMigrationParent=function(){
var _58f=null;
if(true){
try{
var _590=this.bindingElement.parentNode;
if(_590!=null){
_58f=_590;
}
}
catch(wtfException){
this.logger.error("Binding#getMigrationParent exception");
SystemDebug.stack(arguments);
_58f=null;
}
}
return _58f;
};
Binding.prototype.add=function(_591){
if(_591.bindingDocument==this.bindingDocument){
this.bindingElement.appendChild(_591.bindingElement);
}else{
throw "Could not add "+_591.toString()+" of different document origin.";
}
return _591;
};
Binding.prototype.addFirst=function(_592){
if(_592.bindingDocument==this.bindingDocument){
this.bindingElement.insertBefore(_592.bindingElement,this.bindingElement.firstChild);
}else{
throw "Could not add "+_592.toString()+" of different document origin.";
}
return _592;
};
Binding.prototype.getAncestorBindingByLocalName=function(_593,_594){
return BindingFinder.getAncestorBindingByLocalName(this,_593,_594);
};
Binding.prototype.getAncestorBindingByType=function(impl,_596){
return BindingFinder.getAncestorBindingByType(this,impl,_596);
};
Binding.prototype.getChildBindingByType=function(impl){
return BindingFinder.getChildBindingByType(this,impl);
};
Binding.prototype.getChildElementsByLocalName=function(_598){
return BindingFinder.getChildElementsByLocalName(this,_598);
};
Binding.prototype.getChildElementByLocalName=function(_599){
return this.getChildElementsByLocalName(_599).getFirst();
};
Binding.prototype.getDescendantElementsByLocalName=function(_59a){
return new List(DOMUtil.getElementsByTagName(this.bindingElement,_59a));
};
Binding.prototype.getChildBindingsByLocalName=function(_59b){
return this.getDescendantBindingsByLocalName(_59b,true);
};
Binding.prototype.getChildBindingByLocalName=function(_59c){
return this.getChildBindingsByLocalName(_59c).getFirst();
};
Binding.prototype.getDescendantBindingsByLocalName=function(_59d,_59e){
return BindingFinder.getDescendantBindingsByLocalName(this,_59d,_59e);
};
Binding.prototype.getDescendantBindingByLocalName=function(_59f){
return this.getDescendantBindingsByLocalName(_59f,false).getFirst();
};
Binding.prototype.getDescendantBindingsByType=function(impl){
return BindingFinder.getDescendantBindingsByType(this,impl);
};
Binding.prototype.getDescendantBindingByType=function(impl){
return BindingFinder.getDescendantBindingByType(this,impl);
};
Binding.prototype.getNextBindingByLocalName=function(_5a2){
return BindingFinder.getNextBindingByLocalName(this,_5a2);
};
Binding.prototype.getPreviousBindingByLocalName=function(_5a3){
return BindingFinder.getPreviousBindingByLocalName(this,_5a3);
};
Binding.prototype.getBindingElement=function(){
return this.bindingDocument.getElementById(this.bindingElement.id);
};
Binding.prototype.getOrdinalPosition=function(_5a4){
return DOMUtil.getOrdinalPosition(this.bindingElement,_5a4);
};
Binding.prototype.isFirstBinding=function(_5a5){
return (this.getOrdinalPosition(_5a5)==0);
};
Binding.prototype.isLastBinding=function(_5a6){
return DOMUtil.isLastElement(this.bindingElement,_5a6);
};
Binding.prototype.hasCallBackID=function(){
return this.getProperty(Binding.CALLBACKID)!=null;
};
Binding.prototype.getCallBackID=function(){
return this.getProperty(Binding.CALLBACKID);
};
Binding.prototype.setCallBackID=function(id){
this.setProperty(Binding.CALLBACKID,id);
};
Binding.prototype.hasCallBackArg=function(){
return this.getCallBackArg()!=null;
};
Binding.prototype.getCallBackArg=function(){
return this.getProperty(Binding.CALLBACKARG);
};
Binding.prototype.setCallBackArg=function(_5a8){
this.setProperty(Binding.CALLBACKARG,_5a8);
};
Binding.prototype.dispose=function(_5a9){
if(!this.isDisposed){
if(!_5a9){
this.bindingWindow.DocumentManager.detachBindings(this.bindingElement);
var _5aa=this.bindingDocument.getElementById(this.bindingElement.id);
if(_5aa){
if(Client.isExplorer){
_5aa.outerHTML="";
}else{
_5aa.parentNode.removeChild(_5aa);
}
}
}else{
if(this._subscriptions.hasEntries()){
var self=this;
var list=new List();
this._subscriptions.each(function(_5ad){
list.add(_5ad);
});
list.each(function(_5ae){
self.unsubscribe(_5ae);
});
}
this.onBindingDispose();
UserInterface.unRegisterBinding(this);
}
}
};
Binding.prototype.onBindingDispose=function(){
if(this._hasActivationAwareness){
var root=UserInterface.getBinding(this.bindingDocument.body);
root.makeActivationAware(this,false);
this._hasActivationAwareness=false;
}
this._updateBindingMap(false);
};
Binding.prototype.enableDragging=function(){
if(this.dragger==null){
this.dragger=new BindingDragger(this);
this.addEventListener(DOMEvents.MOUSEDOWN,this.dragger);
this.addEventListener(DOMEvents.MOUSEMOVE,this.dragger);
this.addEventListener(DOMEvents.MOUSEUP,this.dragger);
}
this.isDraggable=true;
};
Binding.prototype.disableDragging=function(){
if(this.dragger!=null){
this.removeEventListener(DOMEvents.MOUSEDOWN,this.dragger);
this.removeEventListener(DOMEvents.MOUSEMOVE,this.dragger);
this.removeEventListener(DOMEvents.MOUSEUP,this.dragger);
this.dragger.dispose();
this.dragger=null;
}
this.isDraggable=false;
};
Binding.prototype.show=function(){
if(!this.isVisible){
this.bindingElement.style.display="block";
this.setProperty("hidden",true);
this.isVisible=true;
}
};
Binding.prototype.hide=function(){
if(this.isVisible==true){
this.bindingElement.style.display="none";
this.deleteProperty("hidden");
this.isVisible=false;
}
};
Binding.prototype.wakeUp=function(_5b0,_5b1){
_5b1=_5b1?_5b1:Binding.SNOOZE;
if(this.isLazy==true){
this.deleteProperty("lazy");
this.isLazy=false;
Application.lock(this);
this.dispatchAction(FocusBinding.ACTION_UPDATE);
var self=this;
setTimeout(function(){
self.attachRecursive();
setTimeout(function(){
if(_5b0!==undefined){
self[_5b0]();
}
LazyBindingBinding.wakeUp(self);
Application.unlock(self);
},_5b1);
},0);
}
};
Binding.prototype.handleCrawler=function(_5b3){
if(_5b3.response==null&&this.isLazy==true){
if(_5b3.id==DocumentCrawler.ID&&_5b3.mode==DocumentCrawler.MODE_REGISTER){
_5b3.response=NodeCrawler.NORMAL;
}else{
_5b3.response=NodeCrawler.SKIP_CHILDREN;
}
}
if(_5b3.response==null&&this.crawlerFilters!=null){
if(this.crawlerFilters.has(_5b3.id)){
_5b3.response=NodeCrawler.SKIP_CHILDREN;
}
}
if(_5b3.response==null){
switch(_5b3.id){
case FlexBoxCrawler.ID:
case FocusCrawler.ID:
if(!this.isVisible){
_5b3.response=NodeCrawler.SKIP_CHILDREN;
}
break;
}
}
};
Binding.newInstance=function(_5b4){
var _5b5=DOMUtil.createElementNS(Constants.NS_UI,"ui:binding",_5b4);
return UserInterface.registerBinding(_5b5,Binding);
};
DataBinding.prototype=new Binding;
DataBinding.prototype.constructor=DataBinding;
DataBinding.superclass=Binding.prototype;
DataBinding.AUTOGENERATED="autogenerateddatabindingname";
DataBinding.TYPE_NUMBER="number";
DataBinding.TYPE_INTEGER="integer";
DataBinding.TYPE_STRING="string";
DataBinding.CLASSNAME_INVALID="invalid";
DataBinding.CLASSNAME_WARNING="warning";
DataBinding.CLASSNAME_FOCUSED="focused";
DataBinding.CLASSNAME_DISABLED="disabled";
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_LOGIN,{handleBroadcast:function(){
var _5b6=new List(ConfigurationService.GetValidatingRegularExpressions("dummy"));
_5b6.each(function(_5b7){
DataBinding.expressions[_5b7.Key]=new RegExp(_5b7.Value);
});
}});
DataBinding.expressions={};
DataBinding.warnings={"required":"Required","number":"Numbers only","integer":"Integers only","programmingidentifier":"Invalid identifier","programmingnamespace":"Invalid namespace","url":"Invalid URL","minlength":"${count} characters minimum","maxlength":"${count} characters maximum","currency":"Invalid notation","email":"Invalid e-mail","guid":"Invalid GUID"};
DataBinding.errors={"programmingidentifier":"An identifier must not contain spaces or special characters. Only characters a-z, A-Z and 0-9 are allowed. An identifier must begin with a letter (not a number).","programmingnamespace":"A namespace must take the form Example.Name.Space where only characters a-z, A-Z, 0-9 and dots (.) are allowed. Each part of the namespace must begin with a letter (not a number).","url":"A valid URL must begin with a forward slash, designating the site root, or an URL scheme name such as http://. Simpliefied addresses such as www.example.com cannot be resolved reliably by the browser. Relative URLs are not supported."};
DataBinding.getAssociatedLabel=function(_5b8){
var _5b9=null;
var _5ba=_5b8.getAncestorBindingByLocalName("field");
if(_5ba&&_5ba instanceof FieldBinding){
var desc=_5ba.getDescendantBindingByLocalName("fielddesc");
if(desc&&desc instanceof FieldDescBinding){
_5b9=desc.getLabel();
}
}
return _5b9;
};
function DataBinding(){
this.logger=SystemLogger.getLogger("DataBinding");
this._name=null;
this.isDirty=false;
this.isFocusable=true;
this.isFocused=false;
this.error=null;
return this;
}
DataBinding.prototype.toString=function(){
return "[DataBinding]";
};
DataBinding.prototype.onBindingRegister=function(){
DataBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["isdisabled"]=this.setDisabled;
var name=this._name?this._name:this.getProperty("name");
if(name==null){
name=DataBinding.AUTOGENERATED+KeyMaster.getUniqueKey();
}
this.setName(name);
};
DataBinding.prototype.onBindingAttach=function(){
DataBinding.superclass.onBindingAttach.call(this);
if(this.getProperty("error")){
this.error=this.getProperty("error");
}
};
DataBinding.prototype.onBindingDispose=function(){
DataBinding.superclass.onBindingDispose.call(this);
if(this.isFocused==true){
this.blur();
}
var _5bd=this.bindingWindow.DataManager;
_5bd.unRegisterDataBinding(this._name);
};
DataBinding.prototype.setName=function(name){
var _5bf=this.bindingWindow.DataManager;
if(_5bf.getDataBinding(name)){
_5bf.unRegisterDataBinding(name);
}
_5bf.registerDataBinding(name,this);
this.setProperty("name",name);
this._name=name;
};
DataBinding.prototype.getName=function(){
return this._name;
};
DataBinding.prototype.focus=function(){
if(this.isFocusable&&!this.isFocused){
this.isFocused=true;
this.dispatchAction(Binding.ACTION_FOCUSED);
this.attachClassName(DataBinding.CLASSNAME_FOCUSED);
}
};
DataBinding.prototype.blur=function(){
if(this.isFocused){
this.isFocused=false;
this.dispatchAction(Binding.ACTION_BLURRED);
this.detachClassName(DataBinding.CLASSNAME_FOCUSED);
}
};
DataBinding.prototype.dirty=function(){
this.bindingWindow.DataManager.dirty(this);
};
DataBinding.prototype.clean=function(){
this.bindingWindow.DataManager.clean(this);
};
DataBinding.prototype.validate=Binding.ABSTRACT_METHOD;
DataBinding.prototype.manifest=Binding.ABSTRACT_METHOD;
DataBinding.prototype.getValue=Binding.ABSTRACT_METHOD;
DataBinding.prototype.setValue=Binding.ABSTRACT_METHOD;
DataBinding.prototype.getResult=Binding.ABSTRACT_METHOD;
DataBinding.prototype.setResult=Binding.ABSTRACT_METHOD;
RootBinding.prototype=new Binding;
RootBinding.prototype.constructor=RootBinding;
RootBinding.superclass=Binding.prototype;
RootBinding.ACTION_PHASE_1="root init phase 1";
RootBinding.ACTION_PHASE_2="root init phase 2";
RootBinding.ACTION_PHASE_3="root init phase 3";
RootBinding.ACTION_ACTIVATED="root activated";
RootBinding.ACTION_DEACTIVATED="root deactivated";
function RootBinding(){
this.logger=SystemLogger.getLogger("RootBinding");
this.isActivationAware=false;
this.isActivated=false;
this._activationawares=null;
return this;
}
RootBinding.prototype.toString=function(){
return "[RootBinding]";
};
RootBinding.prototype.onBindingRegister=function(){
RootBinding.superclass.onBindingRegister.call(this);
this.logger=SystemLogger.getLogger(this.bindingDocument.title.toString());
if(this.bindingWindow.WindowManager){
this.subscribe(this.bindingWindow.WindowManager.WINDOW_EVALUATED_BROADCAST);
}
this._activationawares=new List();
this.isActivated=false;
this._setupActivationAwareness(true);
};
RootBinding.prototype.onBindingDispose=function(){
RootBinding.superclass.onBindingDispose.call(this);
this._setupActivationAwareness(false);
EventBroadcaster.unsubscribe(this.bindingWindow.WindowManager.WINDOW_EVALUATED_BROADCAST,this);
};
RootBinding.prototype.handleBroadcast=function(_5c0,arg){
RootBinding.superclass.handleBroadcast.call(this,_5c0,arg);
var _5c2=this.bindingWindow.WindowManager.WINDOW_EVALUATED_BROADCAST;
switch(_5c0){
case _5c2:
this.dispatchAction(RootBinding.ACTION_PHASE_1);
this.dispatchAction(RootBinding.ACTION_PHASE_2);
this.dispatchAction(RootBinding.ACTION_PHASE_3);
this.unsubscribe(_5c2);
break;
}
};
RootBinding.prototype.onActivate=function(){
this._onActivationChanged(true);
};
RootBinding.prototype.onDeactivate=function(){
this._onActivationChanged(false);
};
RootBinding.prototype._onActivationChanged=function(_5c3){
var _5c4=_5c3?RootBinding.ACTION_ACTIVATED:RootBinding.ACTION_DEACTIVATED;
if(_5c3!=this.isActivated){
this.isActivated=_5c3;
this.dispatchAction(_5c4);
var _5c5=new List();
var self=this;
this._activationawares.each(function(_5c7){
if(_5c7.isActivationAware){
try{
if(_5c3){
if(!_5c7.isActivated){
_5c7.onActivate();
}
}else{
if(_5c7.isActivated){
_5c7.onDeactivate();
}
}
}
catch(exception){
self.logger.error(exception);
_5c5.add(_5c7);
}
}
});
_5c5.each(function(_5c8){
this._activationawares.del(_5c8);
});
_5c5.dispose();
}else{
var _5c9="Activation dysfunction: "+this.bindingDocument.title;
if(Application.isDeveloperMode==true){
this.logger.error(_5c9);
}else{
this.logger.error(_5c9);
}
}
};
RootBinding.prototype.makeActivationAware=function(_5ca,_5cb){
if(Interfaces.isImplemented(IActivationAware,_5ca,true)==true){
if(_5cb==false){
this._activationawares.del(_5ca);
}else{
this._activationawares.add(_5ca);
if(this.isActivated==true){
_5ca.onActivate();
}
}
}else{
if(Application.isDeveloperMode==true){
alert("RootBinding: IActivationAware not implemented ("+_5ca+")");
}
}
};
RootBinding.prototype._setupActivationAwareness=function(_5cc){
var _5cd=this.getMigrationParent();
if(_5cd!=null){
var root=_5cd.ownerDocument.body;
var _5cf=UserInterface.getBinding(root);
if(_5cf!=null){
_5cf.makeActivationAware(this,_5cc);
}
}
};
RootBinding.prototype.handleCrawler=function(_5d0){
RootBinding.superclass.handleCrawler.call(this,_5d0);
if(_5d0.type==NodeCrawler.TYPE_ASCENDING){
_5d0.nextNode=this.bindingWindow.frameElement;
}
};
RootBinding.prototype.getMigrationParent=function(){
var _5d1=null;
if(this.bindingWindow.parent){
_5d1=this.bindingWindow.frameElement;
}
return _5d1;
};
MatrixBinding.prototype=new Binding;
MatrixBinding.prototype.constructor=MatrixBinding;
MatrixBinding.superclass=Binding.prototype;
MatrixBinding.CLASSNAME_MANIFESTER="matrixbindingmanifester";
MatrixBinding.CENTER="c";
MatrixBinding.NORTH="n";
MatrixBinding.SOUTH="s";
MatrixBinding.EAST="e";
MatrixBinding.WEST="w";
MatrixBinding.NORTHEAST="ne";
MatrixBinding.NORTHWEST="nw";
MatrixBinding.SOUTHEAST="se";
MatrixBinding.SOUTHWEST="sw";
MatrixBinding.markup=null;
function MatrixBinding(){
this.logger=SystemLogger.getLogger("MatrixBinding");
this.hasMatrix=true;
this.template="matrixbindingelement.xml";
this._isTableIndexed=false;
return this;
}
MatrixBinding.prototype.toString=function(){
return "[MatrixBinding]";
};
MatrixBinding.prototype.onBindingAttach=function(){
MatrixBinding.superclass.onBindingAttach.call(this);
if(this.hasMatrix){
if(this.bindingElement.hasChildNodes()){
throw new Error("MatrixBinding: No support for childnodes!");
}else{
this.bindingElement.innerHTML=Templates.getTemplateElementText(this.template);
this.shadowTree.table=this.bindingElement.firstChild;
}
}
};
MatrixBinding.prototype._indexTable=function(){
var _5d2=new List(DOMUtil.getElementsByTagName(this.bindingElement,"td"));
while(_5d2.hasNext()){
var cell=_5d2.getNext();
this.shadowTree[cell.className]=cell;
}
};
MatrixBinding.prototype.add=function(_5d4){
var _5d5=null;
if(this.hasMatrix){
if(!this._isTableIndexed){
this._indexTable();
}
this.shadowTree[MatrixBinding.CENTER].appendChild(_5d4.bindingElement);
_5d5=_5d4;
}else{
_5d5=MatrixBinding.superclass.add.call(this,_5d4);
}
return _5d5;
};
MatrixBinding.prototype.addFirst=function(_5d6){
var _5d7=null;
if(this.hasMatrix){
if(!this._isTableIndexed){
this._indexTable();
}
var _5d8=this.shadowTree[MatrixBinding.CENTER];
_5d8.insertBefore(_5d6.bindingElement,_5d8.firstChild);
_5d7=_5d6;
}else{
_5d7=MatrixBinding.superclass.addFirst.call(this,_5d6);
}
return _5d6;
};
MatrixBinding.prototype.manifest=function(){
if(!this._isTableIndexed){
this._indexTable();
}
var div=this.bindingDocument.createElement("div");
div.appendChild(this.bindingDocument.createTextNode("!"));
div.className=MatrixBinding.CLASSNAME_MANIFESTER;
this.shadowTree[MatrixBinding.CENTER].appendChild(div);
};
MatrixBinding.newInstance=function(_5da){
var _5db=DOMUtil.createElementNS(Constants.NS_UI,"ui:matrix",_5da);
return UserInterface.registerBinding(_5db,MatrixBinding);
};
FlexBoxBinding.prototype=new Binding;
FlexBoxBinding.prototype.constructor=FlexBoxBinding;
FlexBoxBinding.superclass=Binding.prototype;
FlexBoxBinding.CLASSNAME="flexboxelement";
FlexBoxBinding.TIMEOUT=250;
FlexBoxBinding.reflex=function(_5dc,_5dd){
var list=new List();
var _5df=new FlexBoxCrawler();
_5df.mode=_5dd?FlexBoxCrawler.MODE_FORCE:FlexBoxCrawler.MODE_NORMAL;
_5df.startBinding=_5dc;
_5df.crawl(_5dc.bindingElement,list);
list.each(function(_5e0){
_5e0.flex();
});
if(Client.isExplorer){
setTimeout(function(){
list.each(function(_5e1){
if(Binding.exists(_5e1)){
_5e1.flex();
}
});
},0.5*FlexBoxBinding.TIMEOUT);
}
setTimeout(function(){
list.each(function(_5e2){
if(Binding.exists(_5e2)){
_5e2.isFlexSuspended=false;
}
});
list.dispose();
},FlexBoxBinding.TIMEOUT);
_5df.dispose();
};
function FlexBoxBinding(){
this.logger=SystemLogger.getLogger("FlexBoxBinding");
this.isFlexSuspended=false;
this.isFlexible=true;
this.isFit=true;
return this;
}
FlexBoxBinding.prototype.toString=function(){
return "[FlexBoxBinding]";
};
FlexBoxBinding.prototype.onBindingRegister=function(){
FlexBoxBinding.superclass.onBindingRegister.call(this);
if(this.getProperty("flex")==false){
this.isFlexible=false;
}
if(Client.isMozilla){
if(this.isFlexible){
this.attachClassName(FlexBoxBinding.CLASSNAME);
}
}
};
FlexBoxBinding.prototype.onBindingAttach=function(){
FlexBoxBinding.superclass.onBindingAttach.call(this);
this.addActionListener(Binding.ACTION_UPDATED);
if(Client.isExplorer){
if(this.isFlexible){
this.attachClassName(FlexBoxBinding.CLASSNAME);
}
}
};
FlexBoxBinding.prototype.handleAction=function(_5e3){
FlexBoxBinding.superclass.handleAction.call(this,_5e3);
switch(_5e3.type){
case Binding.ACTION_UPDATED:
this.isFit=false;
break;
}
};
FlexBoxBinding.prototype._getSiblingsSpan=function(_5e4){
var _5e5=0;
var _5e6=new List(this.bindingElement.parentNode.childNodes);
while(_5e6.hasNext()){
var _5e7=_5e6.getNext();
if(_5e7.nodeType==Node.ELEMENT_NODE&&_5e7!=this.bindingElement){
if(!this._isOutOfFlow(_5e7)){
var rect=_5e7.getBoundingClientRect();
if(_5e4){
height+=(rect.right-rect.left);
}else{
_5e5+=(rect.bottom-rect.top);
}
}
}
}
return _5e5;
};
FlexBoxBinding.prototype._isOutOfFlow=function(_5e9){
var _5ea=CSSComputer.getPosition(_5e9);
var _5eb=CSSComputer.getFloat(_5e9);
return (_5ea=="absolute"||_5eb!="none"?true:false);
};
FlexBoxBinding.prototype._getCalculatedHeight=function(){
var _5ec=this.bindingElement.parentNode;
var rect=_5ec.getBoundingClientRect();
var _5ee=rect.bottom-rect.top;
var _5ef=CSSComputer.getPadding(_5ec);
var _5f0=CSSComputer.getBorder(_5ec);
_5ee-=(_5ef.top+_5ef.bottom);
_5ee-=(_5f0.top+_5f0.bottom);
return _5ee;
};
FlexBoxBinding.prototype._getCalculatedWidth=function(){
var _5f1=this.bindingElement.parentNode;
var rect=_5f1.getBoundingClientRect();
var _5f3=rect.right-rect.left;
var _5f4=CSSComputer.getPadding(_5f1);
var _5f5=CSSComputer.getBorder(_5f1);
_5f3-=(_5f4.left+_5f4.right);
_5f3-=(_5f5.left+_5f5.right);
return _5f3;
};
FlexBoxBinding.prototype.setFlexibility=function(_5f6){
if(_5f6!=this.isFlexible){
if(_5f6){
this.attachClassName(FlexBoxBinding.CLASSNAME);
this.deleteProperty("flex");
}else{
this.detachClassName(FlexBoxBinding.CLASSNAME);
this.setProperty("flex",false);
}
this.isFlexible=_5f6;
}
};
FlexBoxBinding.prototype.flex=function(){
if(Binding.exists(this)){
if(this.isFlexible==true){
var _5f7=this._getSiblingsSpan();
_5f7=this._getCalculatedHeight()-_5f7;
if(!isNaN(_5f7)&&_5f7>=0){
if(_5f7!=this.bindingElement.offsetHeight){
this.bindingElement.style.height=String(_5f7)+"px";
}
}
}
}
};
FlexBoxBinding.prototype.fit=function(_5f8){
if(!this.isFit||_5f8){
var _5f9=0;
new List(this.bindingElement.childNodes).each(function(_5fa){
if(_5fa.nodeType==Node.ELEMENT_NODE){
if(!this._isOutOfFlow(_5fa)){
var rect=_5fa.getBoundingClientRect();
_5f9+=(rect.bottom-rect.top);
}
}
},this);
this._setFitnessHeight(_5f9);
this.isFit=true;
}
};
FlexBoxBinding.prototype._setFitnessHeight=function(_5fc){
var _5fd=CSSComputer.getPadding(this.bindingElement);
var _5fe=CSSComputer.getBorder(this.bindingElement);
_5fc+=_5fd.top+_5fd.bottom;
_5fc+=_5fe.top+_5fe.bottom;
this.bindingElement.style.height=_5fc+"px";
};
ScrollBoxBinding.prototype=new FlexBoxBinding;
ScrollBoxBinding.prototype.constructor=ScrollBoxBinding;
ScrollBoxBinding.superclass=FlexBoxBinding.prototype;
function ScrollBoxBinding(){
this.logger=SystemLogger.getLogger("ScrollBoxBinding");
}
ScrollBoxBinding.prototype.toString=function(){
return "[ScrollBoxBinding]";
};
ScrollBoxBinding.prototype.onBindingRegister=function(){
ScrollBoxBinding.superclass.onBindingRegister.call(this);
this.addActionListener(BalloonBinding.ACTION_INITIALIZE);
};
ScrollBoxBinding.prototype.handleAction=function(_5ff){
ScrollBoxBinding.superclass.handleAction.call(this,_5ff);
switch(_5ff.type){
case BalloonBinding.ACTION_INITIALIZE:
_5ff.consume();
break;
}
};
ScrollBoxBinding.prototype.setPosition=function(_600){
this.bindingElement.scrollLeft=_600.x;
this.bindingElement.scrollTop=_600.y;
};
ScrollBoxBinding.prototype.getPosition=function(){
return new Point(this.bindingElement.scrollLeft,this.bindingElement.scrollTop);
};
LabelBinding.prototype=new Binding;
LabelBinding.prototype.constructor=LabelBinding;
LabelBinding.superclass=Binding.prototype;
LabelBinding.DIALOG_INDECATOR_SUFFIX=String.fromCharCode(8230);
LabelBinding.DEFAULT_IMAGE="${root}/images/blank.png";
LabelBinding.EXPLORER_IMAGE_FILTER="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${url}',sizingMethod='crop');";
LabelBinding.CLASSNAME_TEXTOVERFLOW="textoverflow";
LabelBinding.CLASSNAME_GRAYTEXT="graytext";
LabelBinding.CLASSNAME_FLIPPED="flipped";
function LabelBinding(){
this.logger=SystemLogger.getLogger("LabelBinding");
this.hasImage=false;
this.hasLabel=false;
this.isFlipped=false;
this.crawlerFilters=new List([DocumentCrawler.ID,FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
LabelBinding.prototype.toString=function(){
return "[LabelBinding]";
};
LabelBinding.prototype.onBindingRegister=function(){
LabelBinding.superclass.onBindingRegister.call(this);
if(this.isBindingBuild){
this.shadowTree.labelBody=this._getBuildElement("labelbody");
}else{
this.shadowTree.labelBody=DOMUtil.createElementNS(Constants.NS_UI,"ui:labelbody",this.bindingDocument);
this.bindingElement.appendChild(this.shadowTree.labelBody);
}
};
LabelBinding.prototype.onBindingAttach=function(){
LabelBinding.superclass.onBindingAttach.call(this);
if(this.isBindingBuild){
var _601=this._getBuildElement("labeltext");
if(_601){
this.shadowTree.labelText=_601;
this.shadowTree.text=_601.firstChild;
this.hasLabel=true;
}
}else{
var _602=this.getProperty("label");
var _603=this.getProperty("image");
var _604=this.getProperty("tooltip");
if(_602){
this.setLabel(_602,false);
}
if(_603){
this.setImage(_603,false);
}
if(_604){
this.setToolTip(_604);
}
this.buildClassName();
}
};
LabelBinding.prototype.setLabel=function(_605,_606){
_605=_605?_605:"";
if(!this.hasLabel){
this.buildLabel();
}
this.shadowTree.text.data=Resolver.resolve(_605);
this.setProperty("label",_605);
if(!_606){
this.buildClassName();
}
};
LabelBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
LabelBinding.prototype.setImage=function(url,_608){
if(url!=false){
url=url?url:LabelBinding.DEFAULT_IMAGE;
this.setAlphaTransparentBackdrop(Resolver.resolve(url));
this.setProperty("image",url);
this.hasImage=true;
if(!_608){
this.buildClassName();
}
}else{
this.setAlphaTransparentBackdrop(false);
this.deleteProperty("image");
this.hasImage=false;
this.buildClassName();
}
};
LabelBinding.prototype.setDefaultImage=function(url){
this.setImage(LabelBinding.DEFAULT_IMAGE);
};
LabelBinding.prototype.setAlphaTransparentBackdrop=function(url){
if(this.shadowTree.labelBody){
if(url!=false){
url=Resolver.resolve(url);
if(Client.isExplorer6){
this.shadowTree.labelBody.style.filter=LabelBinding.EXPLORER_IMAGE_FILTER.replace("${url}",url);
}else{
this.shadowTree.labelBody.style.backgroundImage="url("+url+")";
}
}else{
if(Client.isExplorer6){
this.shadowTree.labelBody.style.filter="none";
}else{
this.shadowTree.labelBody.style.backgroundImage="none";
}
}
}
};
LabelBinding.prototype.getImage=function(){
return this.getProperty("image");
};
LabelBinding.prototype.setToolTip=function(_60b){
this.setProperty("tooltip",_60b);
if(_60b!=this.getLabel()){
this.setProperty("title",Resolver.resolve(_60b));
}
};
LabelBinding.prototype.getToolTip=function(_60c){
return this.getProperty("tooltip");
};
LabelBinding.prototype.flip=function(_60d){
_60d=_60d==null?true:_60d;
var _60e=LabelBinding.CLASSNAME_FLIPPED;
if(!Client.isExplorer6){
this.isFlipped=_60d;
if(_60d){
this.attachClassName(_60e);
}else{
this.detachClassName(_60e);
}
}
};
LabelBinding.prototype.buildLabel=function(){
if(!this.hasLabel){
this.shadowTree.labelText=DOMUtil.createElementNS(Constants.NS_UI,"ui:labeltext",this.bindingDocument);
this.shadowTree.text=this.bindingDocument.createTextNode("");
this.shadowTree.labelText.appendChild(this.shadowTree.text);
this.shadowTree.labelBody.appendChild(this.shadowTree.labelText);
this.hasLabel=true;
}
};
LabelBinding.prototype.buildClassName=function(){
if(Client.isMozilla){
}
var _60f="textonly";
var _610="imageonly";
var _611="both";
if(this.hasLabel&&this.hasImage){
this.detachClassName(_60f);
this.detachClassName(_610);
this.attachClassName(_611);
}else{
if(this.hasLabel){
this.detachClassName(_611);
this.detachClassName(_610);
this.attachClassName(_60f);
}else{
if(this.hasImage){
this.detachClassName(_611);
this.detachClassName(_60f);
this.attachClassName(_610);
}
}
}
};
LabelBinding.prototype._buildOverflowClassName=function(){
if(Client.isMozilla&&this.isAttached&&this.getLabel()){
if(this.isAttached&&this.shadowTree.labelText){
this.detachClassName(LabelBinding.CLASSNAME_TEXTOVERFLOW);
if(this.shadowTree.labelText.offsetWidth>this.shadowTree.labelBody.offsetWidth){
this.attachClassName(LabelBinding.CLASSNAME_TEXTOVERFLOW);
}
}
}
};
LabelBinding.newInstance=function(_612){
var _613=DOMUtil.createElementNS(Constants.NS_UI,"ui:labelbox",_612);
return UserInterface.registerBinding(_613,LabelBinding);
};
TextBinding.prototype=new Binding;
TextBinding.prototype.constructor=TextBinding;
TextBinding.superclass=Binding.prototype;
function TextBinding(){
this.logger=SystemLogger.getLogger("TextBinding");
this.crawlerFilters=new List([DocumentCrawler.ID,FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
TextBinding.prototype.toString=function(){
return "[TextBinding]";
};
TextBinding.prototype.onBindingAttach=function(){
TextBinding.superclass.onBindingAttach.call(this);
var _614=this.getProperty("label");
if(!_614){
_614=DOMUtil.getTextContent(this.bindingElement);
}
var text=this.bindingDocument.createTextNode(Resolver.resolve(_614));
this.bindingElement.parentNode.replaceChild(text,this.bindingElement);
this.dispose();
};
TextBinding.prototype.setLabel=function(_616){
this.setProperty("label",_616);
};
TextBinding.newInstance=function(_617){
var _618=DOMUtil.createElementNS(Constants.NS_UI,"ui:text",_617);
return UserInterface.registerBinding(_618,TextBinding);
};
BroadcasterSetBinding.prototype=new Binding;
BroadcasterSetBinding.prototype.constructor=BroadcasterSetBinding;
BroadcasterSetBinding.superclass=Binding.prototype;
function BroadcasterSetBinding(){
this.logger=SystemLogger.getLogger("BroadcasterSetBinding");
}
BroadcasterSetBinding.prototype.toString=function(){
return "[BroadcasterSetBinding]";
};
BroadcasterBinding.prototype=new Binding;
BroadcasterBinding.prototype.constructor=BroadcasterBinding;
BroadcasterBinding.superclass=Binding.prototype;
function BroadcasterBinding(){
this.logger=SystemLogger.getLogger("BroadcasterBinding");
this._observers=null;
}
BroadcasterBinding.prototype.toString=function(){
return "[BroadcasterBinding]";
};
BroadcasterBinding.prototype.onBindingRegister=function(){
BroadcasterBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["isdisabled"]=this.setDisabled;
this._observers=new List();
};
BroadcasterBinding.prototype.setProperty=function(_619,_61a){
BroadcasterBinding.superclass.setProperty.call(this,_619,_61a);
function update(list){
if(list){
list.each(function(_61c){
_61c.setProperty(_619,_61a);
});
}
}
if(this._observers["*"]!=null){
update(this._observers["*"]);
}
var _61d=this._observers[_619];
if(_61d){
update(_61d);
}
};
BroadcasterBinding.prototype.deleteProperty=function(_61e){
BroadcasterBinding.superclass.deleteProperty.call(this,_61e);
function update(list){
if(list){
list.each(function(_620){
_620.deleteProperty(_61e);
});
}
}
if(this._observers["*"]!=null){
update(this._observers["*"]);
}
var _621=this._observers[_61e];
if(_621){
update(_621);
}
};
BroadcasterBinding.prototype.addObserver=function(_622,_623){
_623=_623?_623:"*";
_623=new List(_623.split(" "));
while(_623.hasNext()){
var _624=_623.getNext();
switch(_624){
case "*":
this._setAllProperties(_622);
break;
default:
var _625=this.getProperty(_624);
_622.setProperty(_624,_625);
break;
}
if(!this._observers[_624]){
this._observers[_624]=new List();
}
this._observers[_624].add(_622);
}
};
BroadcasterBinding.prototype._setAllProperties=function(_626){
var atts=new List(this.bindingElement.attributes);
while(atts.hasNext()){
var att=atts.getNext();
if(att.specified){
var _629=att.nodeName;
switch(_629){
case "id":
case "key":
break;
default:
var _62a=this.getProperty(_629);
_626.setProperty(_629,_62a);
break;
}
}
}
};
BroadcasterBinding.prototype.removeObserver=function(_62b,_62c){
_62c=_62c?_62c:"*";
_62c=new List(_62c.split(" "));
while(_62c.hasNext()){
var list=this._observers[_62c.getNext()];
if(list){
while(list.hasNext()){
var _62e=list.getNext();
if(_62e==_62b){
list.del(_62e);
}
}
}
}
};
BroadcasterBinding.prototype.disable=function(){
this.setDisabled(true);
};
BroadcasterBinding.prototype.enable=function(){
this.setDisabled(false);
};
BroadcasterBinding.prototype.setDisabled=function(_62f){
this.setProperty("isdisabled",_62f);
};
BroadcasterBinding.prototype.isDisabled=function(){
return this.getProperty("isdisabled")==true;
};
ButtonBinding.prototype=new MatrixBinding;
ButtonBinding.prototype.constructor=ButtonBinding;
ButtonBinding.superclass=MatrixBinding.prototype;
ButtonBinding.ACTION_COMMAND="buttoncommand";
ButtonBinding.ACTION_RADIOBUTTON_ATTACHED="radiobutton attached";
ButtonBinding.TYPE_CHECKBUTTON="checkbox";
ButtonBinding.TYPE_RADIOBUTTON="radio";
ButtonBinding.CLASSNAME_FOCUSABLE="focusable";
ButtonBinding.CLASSNAME_FOCUSED="focused";
ButtonBinding.CLASSNAME_DEFAULT="default";
function ButtonBinding(){
this.logger=SystemLogger.getLogger("ButtonBinding");
this.isCheckButton=false;
this.isRadioButton=false;
this.isCheckBox=false;
this.isActive=false;
this.isChecked=false;
this.isDisabled=false;
this.isFocusable=false;
this._isFocusableButton=false;
this.isFocused=false;
this.isDefault=false;
this.popupBinding=null;
this.labelBinding=null;
this.image=null;
this.imageHover=null;
this.imageActive=null;
this.imageDisabled=null;
this.imageProfile=null;
this._stateManager=null;
this.response=null;
this.popupBindingTargetElement=null;
this.commandAction=ButtonBinding.ACTION_COMMAND;
this.isFlipped=false;
this.isDirty=false;
this.crawlerFilters=new List([DocumentCrawler.ID,FlexBoxCrawler.ID,FocusCrawler.ID,FitnessCrawler.ID]);
}
ButtonBinding.prototype.toString=function(){
return "[ButtonBinding]";
};
ButtonBinding.prototype.onBindingRegister=function(){
ButtonBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["isdisabled"]=this.setDisabled;
};
ButtonBinding.prototype.onBindingAttach=function(){
ButtonBinding.superclass.onBindingAttach.call(this);
this.parseDOMProperties();
this.buildDOMContent();
if(this.isRadioButton==true){
this.dispatchAction(ButtonBinding.ACTION_RADIOBUTTON_ATTACHED);
}
};
ButtonBinding.prototype.onBindingDispose=function(){
ButtonBinding.superclass.onBindingDispose.call(this);
if(this._stateManager!=null){
this._stateManager.dispose();
this._stateManager=null;
}
};
ButtonBinding.prototype.parseDOMProperties=function(){
Binding.imageProfile(this);
};
ButtonBinding.prototype.buildDOMContent=function(){
var tree=this.shadowTree;
var _631=this.getProperty("width");
var _632=this.getProperty("label");
var type=this.getProperty("type");
var _634=this.getProperty("popup");
var _635=this.getProperty("tooltip");
var _636=this.getProperty("isdisabled");
var _637=this.getProperty("response");
var _638=this.getProperty("oncommand");
var _639=this.getProperty("value");
var _63a=this.getProperty("ischecked");
var _63b=this.getProperty("callbackid");
var _63c=this.getProperty("focusable");
var _63d=this.getProperty("focused");
var _63e=this.getProperty("default");
var url=this.getProperty("url");
var _640=this.getProperty("flip");
this.labelBinding=LabelBinding.newInstance(this.bindingDocument);
this.add(this.labelBinding);
this.labelBinding.attach();
this.shadowTree.labelBinding=this.labelBinding;
if(_640){
this.flip(true);
}
if(!this._stateManager){
this._stateManager=new ButtonStateManager(this);
}
if(this.imageProfile!=null&&this.imageProfile.getDefaultImage()!=null){
this.setImage(this.imageProfile.getDefaultImage());
}
if(_632!=null){
this.setLabel(_632);
}
if(type!=null){
this.setType(type);
}
if(_635!=null){
this.setToolTip(_635);
}
if(_631!=null){
this.setWidth(_631);
}
if(_634!=null){
this.setPopup(_634);
}
if(_637!=null){
this.response=_637;
}
if(_63a==true){
if(this.isCheckButton||this.isRadioButton){
this.check(true);
}
}
if(_638!=null&&this.oncommand==null){
this.oncommand=function(){
Binding.evaluate(_638,this);
};
}
if(_63c||this.isFocusable){
this._makeFocusable();
if(_63e||this.isDefault){
this.isDefault=true;
}
if(_63d){
this.focus();
}
}
if(_636==true){
this.disable();
}
if(url!=null){
this.setURL(url);
}
if(_63b!=null){
this.bindingWindow.DataManager.registerDataBinding(_63b,this);
if(_639!=null){
Binding.dotnetify(this,_639);
}
if(this.oncommand==null){
this.oncommand=function(){
this.dirty();
if(this.getProperty("validate")==true){
this.dispatchAction(PageBinding.ACTION_DOVALIDATEDPOSTBACK);
}else{
this.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
}
};
}
}
};
ButtonBinding.prototype._makeFocusable=function(){
this.isFocusable=true;
this.attachClassName(ButtonBinding.CLASSNAME_FOCUSABLE);
this._isFocusableButton=true;
};
ButtonBinding.prototype.setImage=function(_641){
if(this.isAttached){
this.labelBinding.setImage(_641);
}
this.setProperty("image",_641);
};
ButtonBinding.prototype.getImage=function(){
return this.getProperty("image");
};
ButtonBinding.prototype.setLabel=function(_642){
if(this.isAttached){
this.labelBinding.setLabel(_642);
}
this.setProperty("label",_642);
};
ButtonBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
ButtonBinding.prototype.setType=function(type){
switch(type){
case ButtonBinding.TYPE_CHECKBUTTON:
this.isCheckButton=true;
break;
case ButtonBinding.TYPE_RADIOBUTTON:
this.isRadioButton=true;
break;
}
this.setProperty("type",type);
};
ButtonBinding.prototype.setToolTip=function(_644){
this.setProperty("tooltip",_644);
if(this.isAttached==true){
this.setProperty("title",Resolver.resolve(_644));
}
};
ButtonBinding.prototype.getToolTip=function(){
return this.getProperty("tooltip");
};
ButtonBinding.prototype.setImageProfile=function(_645){
this.imageProfile=new _645(this);
};
ButtonBinding.prototype.setPopup=function(arg){
this.popupBinding=this.getBindingForArgument(arg);
if(this.popupBinding){
this.setType(ButtonBinding.TYPE_CHECKBUTTON);
if(!this.popupBindingTargetElement){
this.popupBindingTargetElement=this.bindingElement;
}
var self=this;
this.popupBinding.addActionListener(PopupBinding.ACTION_HIDE,{handleAction:function(){
if(self.isChecked==true){
self.uncheck(true);
}
}});
}
};
ButtonBinding.prototype.setURL=function(url){
if(this.isAttached==true){
if(!this.shadowTree.buttonurl){
var a=this.bindingDocument.createElement("a");
a.className="buttonurl";
a.target="_blank";
this.shadowTree.buttonurl=a;
this.bindingElement.appendChild(a);
}
this.shadowTree.buttonurl.href=url;
}
this.setProperty("url",url);
};
ButtonBinding.prototype.getURL=function(){
return this.getProperty("url");
};
ButtonBinding.prototype.flip=function(_64a){
_64a=_64a==null?true:_64a;
this.isFlipped=_64a;
this.setProperty("flip",_64a);
if(this.isAttached){
this.labelBinding.flip(_64a);
}
};
ButtonBinding.prototype.fireCommand=function(){
if(!this.isDisabled){
if(this.oncommand!=null){
this.oncommand();
}
this.dispatchAction(this.commandAction);
if(this.popupBinding){
if(!this.isCheckButton||this.isChecked){
this.popupBinding.snapTo(this.popupBindingTargetElement);
this.popupBinding.show();
this.popupBinding.grabKeyboard();
}else{
this.popupBinding.hide();
this.popupBinding.releaseKeyboard();
}
}
}
};
ButtonBinding.prototype.oncommand=null;
ButtonBinding.prototype.invoke=function(){
if(!this.isCheckButton){
this.fireCommand();
}else{
if(this.isChecked){
this.uncheck();
}else{
this.check();
}
}
};
ButtonBinding.prototype.check=function(_64b){
if((this.isCheckButton||this.isRadioButton)&&!this.isChecked){
if(this.isAttached==true){
this._check();
if(!_64b==true){
this.fireCommand();
}
}
this.setProperty("ischecked",true);
}
};
ButtonBinding.prototype._check=function(_64c){
this.isActive=true;
this.isChecked=true;
if(!_64c){
this._stateManager.invokeActiveState();
}
};
ButtonBinding.prototype.uncheck=function(_64d){
if((this.isCheckButton||this.isRadioButton)&&this.isChecked){
if(this.isAttached==true){
this._uncheck();
if(!_64d==true){
this.fireCommand();
}
}
this.setProperty("ischecked",false);
}
};
ButtonBinding.prototype._uncheck=function(_64e){
this.isActive=false;
this.isChecked=false;
if(!_64e){
this._stateManager.invokeNormalState();
}
};
ButtonBinding.prototype.setChecked=function(_64f,_650){
if(_64f==null){
_64f==false;
}
if(this.isCheckButton||this.isRadioButton){
switch(_64f){
case true:
this.check(_650);
break;
case false:
this.uncheck(_650);
break;
}
}
};
ButtonBinding.prototype.setDisabled=function(bool){
if(bool==null){
bool=false;
}
this.isDisabled=bool;
switch(bool){
case true:
this.bindingElement.setAttribute("title","");
this.setProperty("isdisabled",true);
if(this._stateManager!=null){
this._stateManager.invokeDisabledState();
}
break;
case false:
this.deleteProperty("isdisabled");
var _652=this.getProperty("tooltip");
if(_652){
this.setToolTip(_652);
}
if(this._stateManager!=null){
this._stateManager.invokeNormalState();
}
break;
}
if(this._isFocusableButton==true){
this.isFocusable=!this.isDisabled;
this.dispatchAction(FocusBinding.ACTION_UPDATE);
}
};
ButtonBinding.prototype.disable=function(){
this.setDisabled(true);
};
ButtonBinding.prototype.enable=function(){
this.setDisabled(false);
};
ButtonBinding.prototype.focus=function(){
if(this.isFocusable&&!this.isFocused){
this.isFocused=true;
FocusBinding.focusElement(this.bindingElement);
this.dispatchAction(Binding.ACTION_FOCUSED);
}
};
ButtonBinding.prototype.blur=function(){
if(this.isFocusable&&this.isFocused){
this.isFocused=false;
this.dispatchAction(Binding.ACTION_BLURRED);
}
};
ButtonBinding.prototype.onMouseDown=function(){
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEDOWN,this);
this.dispatchAction(Binding.ACTION_ACTIVATED);
};
ButtonBinding.prototype.onMouseUp=function(){
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEUP,this);
};
ButtonBinding.prototype.getEqualSizeWidth=function(){
var _653=null;
if(this.isAttached==true){
this.labelBinding.bindingElement.style.marginLeft="0";
this.labelBinding.bindingElement.style.marginRight="0";
_653=this.labelBinding.bindingElement.offsetWidth;
}else{
throw "ButtonBinding: getEqualSizeWidth failed for non-attached button.";
}
return _653;
};
ButtonBinding.prototype.setEqualSizeWidth=function(goal){
if(this.isAttached==true){
var _655=this.getEqualSizeWidth();
if(goal>_655){
var diff=goal-_655;
var marg=Math.floor(diff*0.5);
this.labelBinding.bindingElement.style.marginLeft=marg+"px";
this.labelBinding.bindingElement.style.marginRight=marg+"px";
}
}
};
ButtonBinding.prototype.getWidth=function(){
var _658=null;
if(this.isAttached==true){
var _659=CSSComputer.getPadding(this.bindingElement);
var _65a=CSSComputer.getPadding(this.bindingElement);
_658=this.shadowTree.c.offsetWidth+this.shadowTree.e.offsetWidth+this.shadowTree.w.offsetWidth;
_658=_658+_659.left+_659.right;
_658=_658+_65a.left+_65a.right;
}else{
throw "ButtonBinding: getWidth failed for non-attached button.";
}
return _658;
};
ButtonBinding.prototype.setWidth=function(_65b){
if(this.isAttached==true){
var _65c=this.shadowTree.e.offsetWidth+this.shadowTree.w.offsetWidth;
var _65d=CSSComputer.getPadding(this.shadowTree.c);
var _65e=_65b-_65c;
_65e=_65e-_65d.left-_65d.right;
this.shadowTree.c.style.width=String(_65e)+"px";
if(this.getProperty("centered")){
this.labelBinding.bindingElement.style.marginLeft=String(0.5*(_65e-this.labelBinding.bindingElement.offsetWidth))+"px";
}
}
this.setProperty("width",_65b);
};
ButtonBinding.prototype.validate=function(){
return true;
};
ButtonBinding.prototype.manifest=function(){
};
ButtonBinding.prototype.dirty=DataBinding.prototype.dirty;
ButtonBinding.prototype.clean=DataBinding.prototype.clean;
ButtonBinding.prototype.getName=function(){
};
ButtonBinding.prototype.getValue=function(){
return this.shadowTree.dotnetinput.value;
};
ButtonBinding.prototype.setValue=function(_65f){
this.shadowTree.dotnetinput.value=_65f;
};
ButtonBinding.prototype.getResult=function(){
return this.getValue();
};
ButtonBinding.prototype.setResult=function(_660){
this.setValue(_660);
};
ButtonStateManager.STATE_NORMAL=0;
ButtonStateManager.STATE_HOVER=1;
ButtonStateManager.STATE_ACTIVE=2;
ButtonStateManager.RIGHT_BUTTON=2;
function ButtonStateManager(_661){
this.logger=SystemLogger.getLogger("ButtonStateManager");
this.binding=_661;
this.imageProfile=_661.imageProfile;
this.assignDOMEvents(true);
}
ButtonStateManager.prototype.assignDOMEvents=function(_662){
var _663=_662?"addEventListener":"removeEventListener";
this.binding[_663](DOMEvents.MOUSEENTER,this);
this.binding[_663](DOMEvents.MOUSELEAVE,this);
this.binding[_663](DOMEvents.MOUSEDOWN,this);
this.binding[_663](DOMEvents.MOUSEUP,this);
};
ButtonStateManager.prototype.dispose=function(){
this.assignDOMEvents(false);
this.binding=null;
this.imageProfile=null;
};
ButtonStateManager.prototype.handleEvent=function(e){
if(Binding.exists(this.binding)&&!this.binding.isDisabled&&!BindingDragger.isDragging){
var _665=false,_666=null;
if(e.button==ButtonStateManager.RIGHT_BUTTON){
}else{
if(this.binding.isCheckBox){
switch(e.type){
case DOMEvents.MOUSEENTER:
case DOMEvents.MOUSEOVER:
_666=ButtonStateManager.STATE_HOVER;
break;
case DOMEvents.MOUSELEAVE:
case DOMEvents.MOUSEOUT:
_666=this.binding.isChecked?ButtonStateManager.STATE_ACTIVE:ButtonStateManager.STATE_NORMAL;
break;
case DOMEvents.MOUSEDOWN:
_666=ButtonStateManager.STATE_HOVER;
break;
case DOMEvents.MOUSEUP:
this.binding.isChecked=!this.binding.isChecked;
_666=this.binding.isChecked?ButtonStateManager.STATE_ACTIVE:ButtonStateManager.STATE_NORMAL;
if(_666==ButtonStateManager.STATE_ACTIVE){
this.binding._check(true);
}else{
this.binding._uncheck(true);
}
_665=true;
break;
}
}else{
if(this.binding.isCheckButton||this.binding.isRadioButton){
switch(e.type){
case DOMEvents.MOUSEENTER:
case DOMEvents.MOUSEOVER:
if(!this.binding.isChecked){
_666=ButtonStateManager.STATE_HOVER;
}
break;
case DOMEvents.MOUSELEAVE:
case DOMEvents.MOUSEOUT:
if(!this.binding.isChecked){
_666=ButtonStateManager.STATE_NORMAL;
}
break;
case DOMEvents.MOUSEDOWN:
_666=ButtonStateManager.STATE_ACTIVE;
break;
case DOMEvents.MOUSEUP:
if(this.binding.isCheckButton||!this.binding.isChecked){
this.binding.isChecked=!this.binding.isChecked;
_666=this.binding.isChecked?ButtonStateManager.STATE_ACTIVE:ButtonStateManager.STATE_NORMAL;
if(_666==ButtonStateManager.STATE_ACTIVE){
this.binding._check(true);
}else{
this.binding._uncheck(true);
}
_665=true;
}
break;
}
}else{
switch(e.type){
case DOMEvents.MOUSEENTER:
case DOMEvents.MOUSEOVER:
_666=ButtonStateManager.STATE_HOVER;
break;
case DOMEvents.MOUSELEAVE:
case DOMEvents.MOUSEOUT:
_666=ButtonStateManager.STATE_NORMAL;
break;
case DOMEvents.MOUSEDOWN:
_666=ButtonStateManager.STATE_ACTIVE;
break;
case DOMEvents.MOUSEUP:
_666=ButtonStateManager.STATE_NORMAL;
_665=true;
break;
}
}
}
}
switch(_666){
case ButtonStateManager.STATE_NORMAL:
this.invokeNormalState();
break;
case ButtonStateManager.STATE_HOVER:
this.invokeHoverState();
break;
case ButtonStateManager.STATE_ACTIVE:
this.invokeActiveState();
break;
}
if(_665){
this.binding.fireCommand();
}
if(Binding.exists(this.binding)==true){
DOMEvents.stopPropagation(e);
switch(e.type){
case DOMEvents.MOUSEDOWN:
this.binding.onMouseDown();
break;
case DOMEvents.MOUSEUP:
this.binding.onMouseUp();
break;
}
}
}
};
ButtonStateManager.prototype.invokeNormalState=function(){
this.binding.detachClassName("hover");
this.binding.detachClassName("active");
this.binding.detachClassName("isdisabled");
if(this.imageProfile){
var url=this.imageProfile.getDefaultImage();
if(url){
this.binding.setImage(url);
}
}
};
ButtonStateManager.prototype.invokeHoverState=function(){
this.binding.attachClassName("hover");
this.binding.detachClassName("active");
if(this.imageProfile){
var url=this.imageProfile.getHoverImage();
if(url){
this.binding.setImage(url);
}
}
};
ButtonStateManager.prototype.invokeActiveState=function(){
this.binding.attachClassName("active");
this.binding.detachClassName("hover");
if(this.imageProfile){
var url=this.imageProfile.getActiveImage();
if(url){
this.binding.setImage(url);
}
}
};
ButtonStateManager.prototype.invokeDisabledState=function(){
this.binding.detachClassName("hover");
this.binding.detachClassName("active");
this.binding.attachClassName("isdisabled");
if(this.imageProfile){
var _66a=this.imageProfile.getDisabledImage();
if(_66a){
this.binding.setImage(_66a);
}
}
};
ClickButtonBinding.prototype=new ButtonBinding;
ClickButtonBinding.prototype.constructor=ClickButtonBinding;
ClickButtonBinding.superclass=ButtonBinding.prototype;
function ClickButtonBinding(){
this.logger=SystemLogger.getLogger("ClickButtonBinding");
}
ClickButtonBinding.prototype.toString=function(){
return "[ClickButtonBinding]";
};
ClickButtonBinding.newInstance=function(_66b){
var _66c=DOMUtil.createElementNS(Constants.NS_UI,"ui:clickbutton",_66b);
return UserInterface.registerBinding(_66c,ClickButtonBinding);
};
RadioButtonBinding.prototype=new ButtonBinding;
RadioButtonBinding.prototype.constructor=RadioButtonBinding;
RadioButtonBinding.superclass=ButtonBinding.prototype;
RadioButtonBinding.IMG_DEFAULT="${skin}/buttons/radiobutton-default.png";
RadioButtonBinding.IMG_HOVER="${skin}/buttons/radiobutton-hover.png";
RadioButtonBinding.IMG_ACTIVE="${skin}/buttons/radiobutton-active.png";
RadioButtonBinding.IMG_DISABLED="${skin}/buttons/radiobutton-disabled.png";
function RadioButtonBinding(){
this.logger=SystemLogger.getLogger("RadioButtonBinding");
this.isRadioButton=true;
this.hasMatrix=false;
this.imageProfile=new ImageProfile({image:RadioButtonBinding.IMG_DEFAULT,imageHover:RadioButtonBinding.IMG_HOVER,imageActive:RadioButtonBinding.IMG_ACTIVE,imageDisabled:RadioButtonBinding.IMG_DISABLED});
return this;
}
RadioButtonBinding.prototype.toString=function(){
return "[RadioButtonBinding]";
};
RadioButtonBinding.newInstance=function(_66d){
var _66e=DOMUtil.createElementNS(Constants.NS_UI,"ui:radiobutton",_66d);
return UserInterface.registerBinding(_66e,RadioButtonBinding);
};
CheckButtonBinding.prototype=new ButtonBinding;
CheckButtonBinding.prototype.constructor=CheckButtonBinding;
CheckButtonBinding.superclass=ButtonBinding.prototype;
function CheckButtonBinding(){
this.logger=SystemLogger.getLogger("CheckButtonBinding");
this.isCheckButton=true;
this.isCheckBox=true;
this.hasMatrix=false;
this.imageProfile=new CheckButtonImageProfile(this);
}
CheckButtonBinding.prototype.toString=function(){
return "[CheckButtonBinding]";
};
CheckButtonBinding.newInstance=function(_66f){
var _670=DOMUtil.createElementNS(Constants.NS_UI,"ui:checkbutton",_66f);
return UserInterface.registerBinding(_670,CheckButtonBinding);
};
CheckButtonImageProfile.IMG_DEFAULT="${skin}/buttons/checkbutton-default.png";
CheckButtonImageProfile.IMG_HOVER="${skin}/buttons/checkbutton-hover.png";
CheckButtonImageProfile.IMG_ACTIVE="${skin}/buttons/checkbutton-active.png";
CheckButtonImageProfile.IMG_ACTIVE_HOVER="${skin}/buttons/checkbutton-active-hover.png";
CheckButtonImageProfile.IMG_DISABLED=null;
CheckButtonImageProfile.IMG_DISABLED_ON=null;
function CheckButtonImageProfile(_671){
this._binding=_671;
}
CheckButtonImageProfile.prototype.getDefaultImage=function(){
return CheckButtonImageProfile.IMG_DEFAULT;
};
CheckButtonImageProfile.prototype.getHoverImage=function(){
return this._binding.isChecked?CheckButtonImageProfile.IMG_ACTIVE_HOVER:CheckButtonImageProfile.IMG_HOVER;
};
CheckButtonImageProfile.prototype.getActiveImage=function(){
return CheckButtonImageProfile.IMG_ACTIVE;
};
CheckButtonImageProfile.prototype.getDisabledImage=function(){
return this._binding.isChecked?CheckButtonImageProfile.IMG_DISABLED:CheckButtonImageProfile.IMG_DISABLED_ON;
};
ViewButtonBinding.prototype=new ButtonBinding;
ViewButtonBinding.prototype.constructor=ViewButtonBinding;
ViewButtonBinding.superclass=ButtonBinding.prototype;
function ViewButtonBinding(){
return this;
}
ViewButtonBinding.prototype.toString=function(){
return "[ViewButtonBinding]";
};
ViewButtonBinding.prototype.oncommand=function(){
alert(this);
};
ControlGroupBinding.prototype=new Binding;
ControlGroupBinding.prototype.constructor=ControlGroupBinding;
ControlGroupBinding.superclass=Binding.prototype;
function ControlGroupBinding(){
this.logger=SystemLogger.getLogger("ControlGroupBinding");
this.crawlerFilters=new List([FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
ControlGroupBinding.prototype.toString=function(){
return "[ControlGroupBinding]";
};
ControlGroupBinding.prototype.onBindingAttach=function(){
ControlGroupBinding.superclass.onBindingAttach.call(this);
this.assignDOMEvents();
};
ControlGroupBinding.prototype.assignDOMEvents=function(){
this.addEventListener(DOMEvents.MOUSEDOWN);
this.addEventListener(DOMEvents.MOUSEUP);
};
ControlGroupBinding.prototype.onActivate=function(){
var _672=this.getDescendantBindingsByLocalName("control");
_672.each(function(_673){
_673.setControlType(_673.controlType);
});
};
ControlGroupBinding.prototype.onDeactivate=ControlGroupBinding.prototype.onActivate;
ControlGroupBinding.prototype.handleEvent=function(e){
ControlGroupBinding.superclass.handleEvent.call(this,e);
DOMEvents.stopPropagation(e);
switch(e.type){
case DOMEvents.MOUSEDOWN:
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEDOWN,e);
this.dispatchAction(Binding.ACTION_ACTIVATED);
break;
case DOMEvents.MOUSEUP:
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEUP,e);
break;
}
};
ControlGroupBinding.newInstance=function(_675){
var _676=DOMUtil.createElementNS(Constants.NS_UI,"ui:controlgroup",_675);
return UserInterface.registerBinding(_676,ControlGroupBinding);
};
ControlBinding.prototype=new ButtonBinding;
ControlBinding.prototype.constructor=ControlBinding;
ControlBinding.superclass=ButtonBinding.prototype;
ControlBinding.ACTION_COMMAND="controlcommand";
ControlBinding.TYPE_MINIMIZE="minimize";
ControlBinding.TYPE_MAXIMIZE="maximize";
ControlBinding.TYPE_UNMAXIMIZE="unmaximize";
ControlBinding.TYPE_UNMINIMIZE="unminimize";
ControlBinding.TYPE_CLOSE="close";
ControlBinding.TOOLTIP={"minimize":"${string:Website.App.ToolTipMinimize}","maximize":"${string:Website.App.ToolTipMaximize}","unmaximize":"${string:Website.App.ToolTipUnMaximize}","unminimize":"${string:Website.App.ToolTipUnMinimize}","close":"${string:Website.App.ToolTipClose}"};
function ControlBinding(){
this.logger=SystemLogger.getLogger("ControlBinding");
this.controlType=null;
this.commandAction=ControlBinding.ACTION_COMMAND;
this.imageProfile=true;
this.containingControlBoxBinding=null;
this.isVisible=true;
this.isGhostable=false;
this.crawlerFilters=new List([DocumentCrawler.ID,FlexBoxCrawler.ID,FocusCrawler.ID]);
}
ControlBinding.prototype.toString=function(){
return "[ControlBinding]";
};
ControlBinding.prototype.onBindingAttach=function(){
this.controlType=this.getProperty("controltype");
this.setProperty("tooltip",ControlBinding.TOOLTIP[this.controlType]);
if(!this.isAttached){
if(this.controlType){
this.containingControlBoxBinding=this.getAncestorBindingByType(ControlBoxBinding);
if(this.containingControlBoxBinding){
this.containingControlBoxBinding.addActionListener(ControlBoxBinding.ACTION_STATECHANGE,this);
}
ControlBinding.superclass.onBindingAttach.call(this);
this.addEventListener(DOMEvents.MOUSEDOWN);
this.setImage(this.imageProfile.getDefaultImage());
}else{
throw "ControlBinding: type not specified.";
}
}
};
ControlBinding.prototype.handleEvent=function(e){
ControlBinding.superclass.handleEvent.call(this,e);
switch(e.type){
case DOMEvents.MOUSEDOWN:
DOMEvents.stopPropagation(e);
break;
}
};
ControlBinding.prototype.setControlType=function(type){
this.controlType=type;
this.setProperty("controltype",type);
this.setToolTip(ControlBinding.TOOLTIP[type]);
if(this.isAttached){
this.setImage(this.imageProfile.getDefaultImage());
}
};
ControlBinding.prototype.handleAction=function(_679){
ControlBinding.superclass.handleAction.call(this,_679);
switch(_679.type){
case ControlBoxBinding.ACTION_STATECHANGE:
this._handleStateChange();
break;
}
};
ControlBinding.prototype._handleStateChange=function(){
switch(this.containingControlBoxBinding.getState()){
case ControlBoxBinding.STATE_MAXIMIZED:
if(this.controlType==ControlBinding.TYPE_MAXIMIZE){
this.setControlType(ControlBinding.TYPE_UNMAXIMIZE);
}
if(this.controlType==ControlBinding.TYPE_UNMINIMIZE){
this.setControlType(ControlBinding.TYPE_MINIMIZE);
}
break;
case ControlBoxBinding.STATE_MINIMIZED:
if(this.controlType==ControlBinding.TYPE_MINIMIZE){
this.setControlType(ControlBinding.TYPE_UNMINIMIZE);
}
if(this.controlType==ControlBinding.TYPE_UNMAXIMIZE){
this.setControlType(ControlBinding.TYPE_MAXIMIZE);
}
break;
case ControlBoxBinding.STATE_NORMAL:
if(this.controlType==ControlBinding.TYPE_UNMAXIMIZE){
this.setControlType(ControlBinding.TYPE_MAXIMIZE);
}
if(this.controlType==ControlBinding.TYPE_UNMINIMIZE){
this.setControlType(ControlBinding.TYPE_MINIMIZE);
}
break;
}
};
ControlBinding.prototype.onMouseDown=function(){
};
ControlBinding.prototype.onMouseUp=function(){
};
ControlImageProfile.IMAGE_MINIMIZE=null;
ControlImageProfile.IMAGE_MAXIMIZE=null;
ControlImageProfile.IMAGE_RESTORE=null;
ControlImageProfile.IMAGE_CLOSE=null;
function ControlImageProfile(_67a){
this.binding=_67a;
}
ControlImageProfile.prototype._getImage=function(_67b){
var _67c=null;
switch(this.binding.controlType){
case ControlBinding.TYPE_MINIMIZE:
_67c=this.constructor.IMAGE_MINIMIZE;
break;
case ControlBinding.TYPE_MAXIMIZE:
_67c=this.constructor.IMAGE_MAXIMIZE;
break;
case ControlBinding.TYPE_UNMAXIMIZE:
case ControlBinding.TYPE_UNMINIMIZE:
_67c=this.constructor.IMAGE_RESTORE;
break;
case ControlBinding.TYPE_CLOSE:
_67c=this.constructor.IMAGE_CLOSE;
break;
}
return _67c.replace("${string}",_67b);
};
ControlImageProfile.prototype.getDefaultImage=function(){
var _67d=true;
if(this.binding.isGhostable&&this.binding.containingControlBoxBinding){
_67d=this.binding.containingControlBoxBinding.isActive?true:false;
}
return _67d?this._getImage("default"):this._getImage("ghosted");
};
ControlImageProfile.prototype.getHoverImage=function(){
return this._getImage("hover");
};
ControlImageProfile.prototype.getActiveImage=function(){
return this._getImage("active");
};
ControlBoxBinding.prototype=new FlexBoxBinding;
ControlBoxBinding.prototype.constructor=ControlBoxBinding;
ControlBoxBinding.superclass=FlexBoxBinding.prototype;
ControlBoxBinding.STATE_NORMAL="normal";
ControlBoxBinding.STATE_MAXIMIZED="maximized";
ControlBoxBinding.STATE_MINIMIZED="minimized";
ControlBoxBinding.ACTION_NORMALIZE="controlbox normalizeaction";
ControlBoxBinding.ACTION_MAXIMIZE="controlbox maximizeaction";
ControlBoxBinding.ACTION_MINIMIZE="controlbox minimizeaction";
ControlBoxBinding.ACTION_STATECHANGE="controlbox statechangeacton";
function ControlBoxBinding(){
this.logger=SystemLogger.getLogger("ControlBoxBinding");
this.isNormalized=true;
this.isMaximized=false;
this.isMinimized=false;
}
ControlBoxBinding.prototype.toString=function(){
return "[ControlBoxBinding]";
};
ControlBoxBinding.prototype.onBindingAttach=function(){
ControlBoxBinding.superclass.onBindingAttach.call(this);
this.addActionListener(ControlBinding.ACTION_COMMAND,this);
this.attachClassName(ControlBoxBinding.STATE_NORMAL);
};
ControlBoxBinding.prototype.handleAction=function(_67e){
ControlBoxBinding.superclass.handleAction.call(this,_67e);
switch(_67e.type){
case ControlBinding.ACTION_COMMAND:
var _67f=_67e.target;
Application.lock(this);
var self=this;
setTimeout(function(){
self.handleInvokedControl(_67f);
Application.unlock(self);
},0);
_67e.consume();
break;
}
};
ControlBoxBinding.prototype.handleInvokedControl=function(_681){
switch(_681.controlType){
case ControlBinding.TYPE_MAXIMIZE:
this.maximize();
break;
case ControlBinding.TYPE_MINIMIZE:
this.minimize();
break;
case ControlBinding.TYPE_UNMAXIMIZE:
case ControlBinding.TYPE_UNMINIMIZE:
this.normalize();
break;
}
};
ControlBoxBinding.prototype.maximize=function(){
this.dispatchAction(ControlBoxBinding.ACTION_MAXIMIZE);
this.setState(ControlBoxBinding.STATE_MAXIMIZED);
this.isNormalized=false;
this.isMaximized=true;
this.isMinimized=false;
};
ControlBoxBinding.prototype.minimize=function(){
this.dispatchAction(ControlBoxBinding.ACTION_MINIMIZE);
this.setState(ControlBoxBinding.STATE_MINIMIZED);
this.isNormalized=false;
this.isMaximized=false;
this.isMinimized=true;
};
ControlBoxBinding.prototype.normalize=function(){
this.dispatchAction(ControlBoxBinding.ACTION_NORMALIZE);
this.setState(ControlBoxBinding.STATE_NORMAL);
this.isNormalized=true;
this.isMaximized=false;
this.isMinimized=false;
};
ControlBoxBinding.prototype.setState=function(_682){
var _683=this.getState();
this.setProperty("state",_682);
this.detachClassName(_683);
this.attachClassName(_682);
this.dispatchAction(ControlBoxBinding.ACTION_STATECHANGE);
};
ControlBoxBinding.prototype.getState=function(){
var _684=this.getProperty("state");
if(!_684){
_684=ControlBoxBinding.STATE_NORMAL;
}
return _684;
};
MenuContainerBinding.prototype=new Binding;
MenuContainerBinding.prototype.constructor=MenuContainerBinding;
MenuContainerBinding.superclass=Binding.prototype;
function MenuContainerBinding(){
this.logger=SystemLogger.getLogger("MenuContainerBinding");
this._isOpen=false;
this._openElement=null;
this.menuContainerBinding=null;
this.menuPopupBinding=null;
}
MenuContainerBinding.prototype.toString=function(){
return "[MenuContainerBinding]";
};
MenuContainerBinding.prototype.isOpen=function(_685){
var _686=null;
if(!_685){
_686=this._isOpen;
}else{
_686=(_685==this._openElement);
}
return _686;
};
MenuContainerBinding.prototype.setOpenElement=function(_687){
if(_687){
if(this._openElement){
this._openElement.hide();
}
this._openElement=_687;
this._isOpen=true;
}else{
this._openElement=null;
this._isOpen=false;
}
};
MenuContainerBinding.prototype.getMenuContainerBinding=function(){
if(!this.menuContainerBinding){
this.menuContainerBinding=this.getAncestorBindingByType(MenuContainerBinding);
}
return this.menuContainerBinding;
};
MenuContainerBinding.prototype.getMenuPopupBinding=function(){
var _688=this.getChildBindingByLocalName("menupopup");
if(_688&&_688!=this.menuPopupBinding){
this.menuPopupBinding=_688;
this.menuPopupBinding.addActionListener(PopupBinding.ACTION_HIDE,this);
}
return this.menuPopupBinding;
};
MenuContainerBinding.prototype.show=function(){
var _689=this.getMenuContainerBinding();
_689.setOpenElement(this);
var _68a=this.getMenuPopupBinding();
_68a.snapTo(this.bindingElement);
_68a.show();
};
MenuContainerBinding.prototype.hide=function(){
this.reset();
this.getMenuPopupBinding().hide();
if(this._isOpen){
this._openElement.hide();
}
};
MenuContainerBinding.prototype.reset=Binding.ABSTRACT_METHOD;
MenuContainerBinding.prototype.handleAction=function(_68b){
MenuContainerBinding.superclass.handleAction.call(this,_68b);
if(_68b.type==PopupBinding.ACTION_HIDE){
var _68c=this.getMenuContainerBinding();
_68c.setOpenElement(false);
this.reset();
_68b.consume();
}
};
MenuBarBinding.prototype=new MenuContainerBinding;
MenuBarBinding.prototype.constructor=MenuBarBinding;
MenuBarBinding.superclass=MenuContainerBinding.prototype;
function MenuBarBinding(){
this.logger=SystemLogger.getLogger("MenuBarBinding");
this.crawlerFilters=new List([FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
MenuBarBinding.prototype.toString=function(){
return "[MenuBarBinding]";
};
MenuBarBinding.prototype.onBindingRegister=function(){
MenuBarBinding.superclass.onBindingRegister.call(this);
this.addActionListener(MenuBodyBinding.ACTION_UNHANDLED_LEFTRIGHTKEY);
this.attachClassName(Binding.CLASSNAME_CLEARFLOAT);
};
MenuBarBinding.prototype.handleAction=function(_68d){
MenuBarBinding.superclass.handleAction.call(this,_68d);
switch(_68d.type){
case MenuBodyBinding.ACTION_UNHANDLED_LEFTRIGHTKEY:
var _68e=_68d.target;
var _68f=this.getChildBindingsByLocalName("menu");
while(_68f.hasNext()){
var menu=_68f.getNext();
}
switch(_68e.arrowKey){
case KeyEventCodes.VK_LEFT:
this.logger.debug("LEFTG");
break;
case KeyEventCodes.VK_RIGHT:
this.logger.debug("RIGHT");
break;
}
break;
}
};
MenuBinding.prototype=new MenuContainerBinding;
MenuBinding.prototype.constructor=MenuBinding;
MenuBinding.superclass=MenuContainerBinding.prototype;
function MenuBinding(){
this.logger=SystemLogger.getLogger("MenuBinding");
this.labelBinding=null;
this.isFocused=false;
}
MenuBinding.prototype.toString=function(){
return "[MenuBinding]";
};
MenuBinding.prototype.onBindingAttach=function(){
MenuBinding.superclass.onBindingAttach.call(this);
this.buildDOMContent();
this.assignDOMEvents();
};
MenuBinding.prototype.buildDOMContent=function(){
var _691=this.getProperty("image");
var _692=this.getProperty("label");
var _693=this.getProperty("tooltip");
this.labelBinding=LabelBinding.newInstance(this.bindingDocument);
this.labelBinding.attachClassName("menulabel");
this.add(this.labelBinding);
if(_692){
this.setLabel(_692);
}
if(_691){
this.setImage(_691);
}
if(_693){
this.setToolTip(_693);
}
};
MenuBinding.prototype.reset=function(){
this.detachClassName("hover");
};
MenuBinding.prototype.setImage=function(url){
this.setProperty("image",url);
if(this.isAttached){
this.labelBinding.setImage(Resolver.resolve(url));
}
};
MenuBinding.prototype.setLabel=function(_695){
this.setProperty("label",_695);
if(this.isAttached){
this.labelBinding.setLabel(Resolver.resolve(_695));
}
};
MenuBinding.prototype.setToolTip=function(_696){
this.setProperty("tooltip",_696);
if(this.isAttached){
this.labelBinding.setToolTip(Resolver.resolve(_696));
}
};
MenuBinding.prototype.getImage=function(){
return this.getProperty("image");
};
MenuBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
MenuBinding.prototype.getToolTip=function(){
return this.getProperty("tooltip");
};
MenuBinding.prototype.assignDOMEvents=function(){
this.addEventListener(DOMEvents.MOUSEDOWN);
this.addEventListener(DOMEvents.MOUSEOVER);
this.addEventListener(DOMEvents.MOUSEOUT);
this.addEventListener(DOMEvents.MOUSEUP);
};
MenuBinding.prototype.handleEvent=function(e){
MenuBinding.superclass.handleEvent.call(this,e);
var _698=this.getMenuContainerBinding();
if(!BindingDragger.isDragging){
switch(e.type){
case DOMEvents.MOUSEDOWN:
if(_698.isOpen(this)){
DOMEvents.stopPropagation(e);
}
break;
case DOMEvents.MOUSEOVER:
if(_698.isOpen()&&!_698.isOpen(this)){
this.show();
this.menuPopupBinding.grabKeyboard();
}
this.attachClassName("hover");
this.isFocused=true;
break;
case DOMEvents.MOUSEOUT:
if(!_698.isOpen()){
this.hide();
}
this.isFocused=false;
break;
case DOMEvents.MOUSEUP:
if(!_698.isOpen(this)){
this.show();
this.menuPopupBinding.grabKeyboard();
}
DOMEvents.stopPropagation(e);
break;
}
}
DOMEvents.stopPropagation(e);
};
MenuBodyBinding.prototype=new Binding;
MenuBodyBinding.prototype.constructor=MenuBodyBinding;
MenuBodyBinding.superclass=Binding.prototype;
MenuBodyBinding.CLASSNAME_CHECKBOXED="checkboxed";
MenuBodyBinding.ACTION_UNHANDLED_LEFTRIGHTKEY="menubody unhandled arrowkey";
MenuBodyBinding.activeInstance=null;
MenuBodyBinding.handleBroadcast=function(_699,arg){
var body=MenuBodyBinding.activeInstance;
var key=arg;
if(body){
switch(_699){
case BroadcastMessages.KEY_ARROW:
body.handleArrowKey(key);
break;
case BroadcastMessages.KEY_ENTER:
body.handleEnterKey();
break;
}
}
};
EventBroadcaster.subscribe(BroadcastMessages.KEY_ARROW,MenuBodyBinding);
EventBroadcaster.subscribe(BroadcastMessages.KEY_ENTER,MenuBodyBinding);
EventBroadcaster.subscribe(BroadcastMessages.KEY_ESCAPE,MenuBodyBinding);
function MenuBodyBinding(){
this.logger=SystemLogger.getLogger("MenuBodyBinding");
this._containingPopupBinding=null;
this._focused=null;
this._lastFocused=null;
this._showSubMenuTimeout=null;
this.arrowKey=null;
this.isDirty=true;
this._hasImageLayout=false;
this._hasCheckBoxLayout=false;
}
MenuBodyBinding.prototype.toString=function(){
return "[MenuBodyBinding]";
};
MenuBodyBinding.prototype.onBindingAttach=function(){
MenuBodyBinding.superclass.onBindingAttach.call(this);
this._focused={};
this.addEventListener(DOMEvents.MOUSEDOWN);
this.addEventListener(DOMEvents.MOUSEOVER);
this.addEventListener(DOMEvents.MOUSEOUT);
this.addEventListener(DOMEvents.MOUSEUP);
var self=this;
this.addActionListener(MenuBodyBinding.ACTION_UNHANDLED_LEFTRIGHTKEY,{handleAction:function(_69e){
switch(_69e.target){
case self:
self.releaseKeyboard();
self._containingPopupBinding.hide();
break;
default:
var _69f=null;
var _6a0=true;
self._lastFocused.focus();
self.grabKeyboard();
_69e.consume();
break;
}
}});
this._containingPopupBinding=UserInterface.getBinding(this.bindingElement.parentNode);
this._containingPopupBinding.addActionListener(PopupBinding.ACTION_HIDE,{handleAction:function(){
self.resetFocusedItems(true);
self.releaseKeyboard();
}});
};
MenuBodyBinding.prototype.onBindingDispose=function(){
MenuBodyBinding.superclass.onBindingDispose.call(this);
if(MenuBodyBinding.activeInstance==this){
MenuBodyBinding.activeInstance=null;
}
};
MenuBodyBinding.prototype.handleEvent=function(e){
MenuBodyBinding.superclass.handleEvent.call(this,e);
if(e.type==DOMEvents.MOUSEOUT){
this.resetFocusedItems();
}
switch(e.type){
case DOMEvents.MOUSEDOWN:
case DOMEvents.MOUSEOVER:
case DOMEvents.MOUSEOUT:
case DOMEvents.MOUSEUP:
DOMEvents.stopPropagation(e);
break;
}
};
MenuBodyBinding.prototype.handleFocusedItem=function(_6a2){
for(var key in this._focused){
if(key!=_6a2.key){
var item=this._focused[key];
item.blur();
}
}
this._focused[_6a2.key]=_6a2;
this._lastFocused=_6a2;
if(MenuBodyBinding.activeInstance!=this){
this.grabKeyboard();
}
};
MenuBodyBinding.prototype.handleBlurredItem=function(_6a5){
delete this._focused[_6a5.key];
};
MenuBodyBinding.prototype.resetFocusedItems=function(_6a6){
for(var key in this._focused){
var item=this._focused[key];
item.blur(_6a6);
}
if(_6a6){
this._lastFocused=null;
}
};
MenuBodyBinding.prototype.refreshMenuGroups=function(){
if(!this.isAttached){
throw "refreshMenuGroups: MenuBodyBinding not attached!";
}else{
var _6a9=this.getChildBindingsByLocalName("menugroup");
var _6aa=null;
var _6ab=null;
while(_6a9.hasNext()){
var _6ac=_6a9.getNext();
if(!_6ac.isDefaultContent){
_6ac.setLayout(MenuGroupBinding.LAYOUT_DEFAULT);
if(!_6aa&&_6ac.isVisible){
_6aa=_6ac;
}
if(_6ac.isVisible){
_6ab=_6ac;
}
}
}
if(_6aa&&_6ab){
_6aa.setLayout(MenuGroupBinding.LAYOUT_FIRST);
_6ab.setLayout(MenuGroupBinding.LAYOUT_LAST);
}
}
};
MenuBodyBinding.prototype.grabKeyboard=function(_6ad){
MenuBodyBinding.activeInstance=this;
if(_6ad){
var _6ae=this._getMenuItems().getFirst();
if(_6ae){
_6ae.focus();
}
}
};
MenuBodyBinding.prototype.releaseKeyboard=function(){
if(MenuBodyBinding.activeInstance==this){
MenuBodyBinding.activeInstance=null;
}
};
MenuBodyBinding.prototype.handleEnterKey=function(){
var _6af=this._lastFocused;
if((_6af!=null)&&(!_6af.isMenuContainer)){
_6af.fireCommand();
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEDOWN);
}
};
MenuBodyBinding.prototype.handleArrowKey=function(key){
this.arrowKey=key;
var _6b1=this._getMenuItems();
var _6b2=null;
var next=null;
if(this._lastFocused){
_6b2=this._lastFocused;
switch(key){
case KeyEventCodes.VK_UP:
next=_6b1.getPreceding(_6b2);
break;
case KeyEventCodes.VK_DOWN:
next=_6b1.getFollowing(_6b2);
break;
case KeyEventCodes.VK_LEFT:
this.dispatchAction(MenuBodyBinding.ACTION_UNHANDLED_LEFTRIGHTKEY);
break;
case KeyEventCodes.VK_RIGHT:
if(this._lastFocused.isMenuContainer){
this.releaseKeyboard();
this._lastFocused.show();
this._lastFocused.menuPopupBinding.grabKeyboard(true);
}else{
this.dispatchAction(MenuBodyBinding.ACTION_UNHANDLED_LEFTRIGHTKEY);
}
break;
}
}else{
next=_6b1.getFirst();
}
if(next){
next.focus();
}
};
MenuBodyBinding.prototype._getMenuItems=function(){
if(!this._menuItemsList||this.isDirty){
var list=new List();
var _6b5=null;
this.getChildBindingsByLocalName("menugroup").each(function(_6b6){
_6b5=_6b6.getChildBindingsByLocalName("menuitem");
_6b5.each(function(item){
list.add(item);
});
});
_6b5=this.getChildBindingsByLocalName("menuitem");
_6b5.each(function(item){
list.add(item);
});
this._menuItemsList=list;
this.isDirty=false;
}
return this._menuItemsList;
};
MenuBodyBinding.prototype.invokeCheckBoxLayout=function(){
if(!this.hasClassName(MenuBodyBinding.CLASSNAME_CHECKBOXED)){
this.attachClassName(MenuBodyBinding.CLASSNAME_CHECKBOXED);
}
};
MenuBodyBinding.prototype.invokeImageLayout=function(){
if(!this._hasImageLayout){
this.detachClassName(ToolBarBinding.CLASSNAME_TEXTONLY);
this._hasImageLayout=true;
}
};
MenuBodyBinding.prototype.setDimension=function(dim){
this.getBindingElement().style.width=new String(dim.w)+"px";
};
MenuBodyBinding.newInstance=function(_6ba){
var _6bb=DOMUtil.createElementNS(Constants.NS_UI,"ui:menubody",_6ba);
return UserInterface.registerBinding(_6bb,MenuBodyBinding);
};
MenuGroupBinding.prototype=new Binding;
MenuGroupBinding.prototype.constructor=MenuGroupBinding;
MenuGroupBinding.superclass=Binding.prototype;
MenuGroupBinding.LAYOUT_DEFAULT=0;
MenuGroupBinding.LAYOUT_FIRST=1;
MenuGroupBinding.LAYOUT_LAST=2;
function MenuGroupBinding(){
this.logger=SystemLogger.getLogger("MenuGroupBinding");
this.isVisible=true;
}
MenuGroupBinding.prototype.toString=function(){
return "[MenuGroupBinding]";
};
MenuGroupBinding.prototype.setLayout=function(_6bc){
switch(_6bc){
case MenuGroupBinding.LAYOUT_DEFAULT:
this.detachClassName("first");
this.detachClassName("last");
break;
case MenuGroupBinding.LAYOUT_FIRST:
this.attachClassName("first");
break;
case MenuGroupBinding.LAYOUT_LAST:
this.attachClassName("last");
break;
}
};
MenuGroupBinding.prototype.show=function(){
if(!this.isVisible){
this.bindingElement.style.display="block";
this.bindingElement.style.visibility="visible";
this.isVisible=true;
}
};
MenuGroupBinding.prototype.hide=function(){
if(this.isVisible){
this.bindingElement.style.display="none";
this.bindingElement.style.visibility="hidden";
this.isVisible=false;
}
};
MenuGroupBinding.newInstance=function(_6bd){
var _6be=DOMUtil.createElementNS(Constants.NS_UI,"ui:menugroup",_6bd);
return UserInterface.registerBinding(_6be,MenuGroupBinding);
};
MenuItemBinding.prototype=new MenuContainerBinding;
MenuItemBinding.prototype.constructor=MenuItemBinding;
MenuItemBinding.superclass=MenuContainerBinding.prototype;
MenuItemBinding.ACTION_COMMAND="menuitemcommand";
MenuItemBinding.TYPE_CHECKBOX="checkbox";
MenuItemBinding.TYPE_MENUCONTAINER="menucontainer";
MenuItemBinding.CLASSNAME_CHECKBOX="checkboxindicator";
MenuItemBinding.CLASSNAME_SUBMENU="submenuindicator";
MenuItemBinding.CLASSNAME_HOVER="hover";
MenuItemBinding.CHAR_CHECKBOX="V";
MenuItemBinding.CHAR_SUBMENU=String.fromCharCode(9658);
MenuItemBinding.TIMEOUT=150;
function MenuItemBinding(){
this.logger=SystemLogger.getLogger("MenuItemBinding");
this.type=null;
this.oncommand=null;
this.isDisabled=false;
this.labelBinding=null;
this.image=null;
this.imageHover=null;
this.imageActive=null;
this.imageDisabled=null;
this.imageProfile=null;
this.isMenuContainer=false;
this.isTypeSet=false;
this.isChecked=false;
this.isFocused=false;
this._containingMenuBodyBinding=null;
}
MenuItemBinding.prototype.toString=function(){
return "[MenuItemBinding]";
};
MenuItemBinding.prototype.onBindingRegister=function(){
MenuItemBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["isdisabled"]=this.setDisabled;
if(this.type){
this.setProperty("type",this.type);
}
};
MenuItemBinding.prototype.onBindingAttach=function(){
MenuItemBinding.superclass.onBindingAttach.call(this);
this._containingMenuBodyBinding=this.getAncestorBindingByLocalName("menubody");
this._containingMenuBodyBinding.isDirty=true;
this.parseDOMProperties();
this.buildDOMContent();
this.assignDOMEvents();
this.dispatchAction(Binding.ACTION_ATTACHED);
};
MenuItemBinding.prototype.parseDOMProperties=function(){
var _6bf=this.getProperty("image");
var _6c0=this.getProperty("image-hover");
var _6c1=this.getProperty("image-active");
var _6c2=this.getProperty("image-disabled");
if(!this.image&&_6bf){
this.image=_6bf;
}
if(!this.imageHover&&_6c0){
this.imageHover=_6bf;
}
if(!this.imageActive&&_6c1){
this.imageActive=_6c1;
}
if(!this.imageDisabled&&_6c2){
this.imageDisabled=_6c2;
}
};
MenuItemBinding.prototype.buildDOMContent=function(){
var _6c3=this.getProperty("label");
var _6c4=this.getProperty("tooltip");
var type=this.getProperty("type");
var _6c6=this.getProperty("isdisabled");
var _6c7=this.getProperty("image");
var _6c8=this.getProperty("image-hover");
var _6c9=this.getProperty("image-active");
var _6ca=this.getProperty("image-disabled");
this.labelBinding=LabelBinding.newInstance(this.bindingDocument);
this.labelBinding.attachClassName("menuitemlabel");
this.add(this.labelBinding);
var _6cb=this.getMenuPopupBinding();
if(_6cb){
this.isMenuContainer=true;
this.setType(MenuItemBinding.TYPE_MENUCONTAINER);
}
if(!this.imageProfile){
if(!this.image&&_6c7){
this.image=_6c7;
}
if(!this.imageHover&&_6c8){
this.imageHover=_6c7;
}
if(!this.imageActive&&_6c9){
this.imageActive=_6c9;
}
if(!this.imageDisabled&&_6ca){
this.imageDisabled=_6ca;
}
if(this.image||this.imageHover||this.imageActive||this.imageDisabled){
this.imageProfile=new ImageProfile(this);
}
}
if(this.imageProfile){
this.setImage(this.imageProfile.getDefaultImage());
}else{
this.setImage(null);
}
if(_6c3){
this.setLabel(_6c3);
}
if(_6c4){
this.setToolTip(_6c4);
}
if(type){
this.setType(type);
}
if(this.type==MenuItemBinding.TYPE_CHECKBOX){
if(this.getProperty("ischecked")==true){
this.check(true);
}
}
if(_6c6==true){
this.disable();
}
var _6cc=this.getProperty("oncommand");
if(_6cc){
if(this.isMenuContainer){
throw new Error("MenuItemBinding with contained menuitems cannot fire commands.");
}else{
this.oncommand=function(){
this.bindingWindow.eval(_6cc);
};
}
}
};
MenuItemBinding.prototype.assignDOMEvents=function(){
this.addEventListener(DOMEvents.MOUSEOVER);
this.addEventListener(DOMEvents.MOUSEUP);
};
MenuItemBinding.prototype.handleEvent=function(e){
MenuItemBinding.superclass.handleEvent.call(this,e);
if(!this.isDisabled&&!BindingDragger.isDragging){
switch(e.type){
case DOMEvents.MOUSEOVER:
this.focus(e);
break;
case DOMEvents.MOUSEUP:
DOMEvents.stopPropagation(e);
if(!this.isMenuContainer){
if(this.type==MenuItemBinding.TYPE_CHECKBOX){
this.setChecked(!this.isChecked);
}else{
this.fireCommand();
}
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEUP,this);
}
break;
}
}
};
MenuItemBinding.prototype.fireCommand=function(){
if(!this.isMenuContainer){
if(this.oncommand){
this.oncommand();
}
this.dispatchAction(MenuItemBinding.ACTION_COMMAND);
}
};
MenuItemBinding.prototype.setImage=function(url){
url=url?url:LabelBinding.DEFAULT_IMAGE;
this.setProperty("image",url);
if(this.isAttached){
this.labelBinding.setImage(Resolver.resolve(url));
}
};
MenuItemBinding.prototype.setLabel=function(_6cf){
this.setProperty("label",_6cf);
if(this.isAttached){
this.labelBinding.setLabel(Resolver.resolve(_6cf));
}
};
MenuItemBinding.prototype.setToolTip=function(_6d0){
this.setProperty("tooltip",_6d0);
if(this.isAttached){
this.labelBinding.setToolTip(Resolver.resolve(_6d0));
}
};
MenuItemBinding.prototype.reset=function(){
if(this.labelBinding.hasClassName("hover")){
this.labelBinding.detachClassName("hover");
}
};
MenuItemBinding.prototype.setType=function(type){
if(this.isAttached){
if(!this.isTypeSet){
switch(type){
case MenuItemBinding.TYPE_CHECKBOX:
if(!this.isMenuContainer){
this._containingMenuBodyBinding.invokeCheckBoxLayout();
var _6d2=this.bindingDocument.createElement("div");
_6d2.className=MenuItemBinding.CLASSNAME_CHECKBOX;
_6d2.appendChild(this.bindingDocument.createTextNode(MenuItemBinding.CHAR_CHECKBOX));
var _6d3=this.labelBinding.bindingElement;
_6d3.insertBefore(_6d2,_6d3.firstChild);
_6d2.style.display="none";
this.shadowTree.checkBoxIndicator=_6d2;
}else{
throw new Error("MenuItemBinding: checkboxes cannot contain menus");
}
break;
case MenuItemBinding.TYPE_MENUCONTAINER:
var _6d2=this.bindingDocument.createElement("div");
_6d2.className=MenuItemBinding.CLASSNAME_SUBMENU;
_6d2.appendChild(this.bindingDocument.createTextNode(MenuItemBinding.CHAR_SUBMENU));
var _6d3=this.labelBinding.bindingElement;
_6d3.insertBefore(_6d2,_6d3.firstChild);
break;
}
this.type=type;
this.isTypeSet=true;
}else{
throw new Error("MenuItemBinding: Cannot set type twice.");
}
}
this.setProperty("type",type);
};
MenuItemBinding.prototype.getImage=function(){
return this.getProperty("image");
};
MenuItemBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
MenuItemBinding.prototype.getToolTip=function(){
return this.getProperty("tooltip");
};
MenuItemBinding.prototype.disable=function(){
this.setDisabled(true);
};
MenuItemBinding.prototype.enable=function(){
this.setDisabled(false);
};
MenuItemBinding.prototype.setDisabled=function(bool){
this.isDisabled=bool;
if(this.isDisabled){
this.setProperty("isdisabled",true);
}else{
this.deleteProperty("isdisabled");
}
if(this.isAttached){
if(this.isDisabled){
this.labelBinding.detachClassName("hover");
this.attachClassName("isdisabled");
if(this.imageProfile){
var _6d5=this.imageProfile.getDisabledImage();
if(_6d5){
this.setImage(_6d5);
}
}
}else{
this.detachClassName("isdisabled");
if(this.imageProfile){
var _6d5=this.imageProfile.getDefaultImage();
if(_6d5){
this.setImage(_6d5);
}
}
}
}
};
MenuItemBinding.prototype.focus=function(e){
this.labelBinding.attachClassName(MenuItemBinding.CLASSNAME_HOVER);
var _6d7=this.getMenuContainerBinding();
if(_6d7.isOpen()&&!_6d7.isOpen(this)){
_6d7._openElement.hide();
_6d7.setOpenElement(false);
}
if(this.isMenuContainer&&e&&e.type==DOMEvents.MOUSEOVER){
var _6d7=this.getMenuContainerBinding();
if(!_6d7.isOpen(this)){
var self=this;
this._showSubMenuTimeout=window.setTimeout(function(){
self.show();
self._showSubMenuTimeout=null;
},MenuItemBinding.TIMEOUT);
}
}
if(!e||e.type!=DOMEvents.MOUSEOVER){
if(this.bindingElement.tabIndex!=-1){
if(Client.isMozilla){
FocusBinding.focusElement(this.bindingElement);
}else{
var self=this;
setTimeout(function(){
FocusBinding.focusElement(self.bindingElement);
},0);
}
}
}
this.isFocused=true;
this._containingMenuBodyBinding.handleFocusedItem(this);
};
MenuItemBinding.prototype.blur=function(_6d9){
if(this._showSubMenuTimeout){
window.clearTimeout(this._showSubMenuTimeout);
this._showSubMenuTimeout=null;
}
if(this.isFocused){
var _6da=this.getMenuContainerBinding();
if(!_6da||!_6da.isOpen(this)||_6d9){
this.labelBinding.detachClassName(MenuItemBinding.CLASSNAME_HOVER);
this.isFocused=false;
this._containingMenuBodyBinding.handleBlurredItem(this);
}
}
};
MenuItemBinding.prototype.check=function(_6db){
this.setChecked(true,_6db);
};
MenuItemBinding.prototype.uncheck=function(_6dc){
this.setChecked(false,_6dc);
};
MenuItemBinding.prototype.show=function(){
this.menuPopupBinding.position=PopupBinding.POSITION_RIGHT;
MenuItemBinding.superclass.show.call(this);
};
MenuItemBinding.prototype.setChecked=function(_6dd,_6de){
this.setProperty("ischecked",_6dd);
if(this.isAttached){
if(this.type==MenuItemBinding.TYPE_CHECKBOX){
if(this.isChecked!=_6dd){
this.isChecked=_6dd;
this.shadowTree.checkBoxIndicator.style.display=_6dd?"block":"none";
if(!_6de){
this.fireCommand();
}
}
}
}
};
MenuItemBinding.newInstance=function(_6df){
var _6e0=DOMUtil.createElementNS(Constants.NS_UI,"ui:menuitem",_6df);
UserInterface.registerBinding(_6e0,MenuItemBinding);
return UserInterface.getBinding(_6e0);
};
PopupSetBinding.prototype=new MenuContainerBinding;
PopupSetBinding.prototype.constructor=PopupSetBinding;
PopupSetBinding.superclass=MenuContainerBinding.prototype;
function PopupSetBinding(){
this.logger=SystemLogger.getLogger("PopupSetBinding");
this.crawlerFilters=new List([FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
PopupSetBinding.prototype.toString=function(){
return "[PopupSetBinding]";
};
PopupBinding.prototype=new Binding;
PopupBinding.prototype.constructor=PopupBinding;
PopupBinding.superclass=Binding.prototype;
PopupBinding.ACTION_SHOW="popupshow";
PopupBinding.ACTION_HIDE="popuphide";
PopupBinding.POSITION_TOP="top";
PopupBinding.POSITION_RIGHT="right";
PopupBinding.POSITION_BOTTOM="bottom";
PopupBinding.POSITION_LEFT="left";
PopupBinding.TYPE_NORMAL="normal";
PopupBinding.TYPE_FIXED="fixed";
PopupBinding.FIXED_MAX=12;
PopupBinding.CLASSNAME_OVERFLOW="overflow";
PopupBinding.activeInstances=new Map();
PopupBinding.hasActiveInstances=function(){
return PopupBinding.activeInstances.hasEntries();
};
PopupBinding.handleBroadcast=function(_6e1,arg){
switch(_6e1){
case BroadcastMessages.MOUSEEVENT_MOUSEDOWN:
case BroadcastMessages.MOUSEEVENT_MOUSEUP:
if(PopupBinding.activeInstances.hasEntries()){
var list=new List();
PopupBinding.activeInstances.each(function(key){
var _6e5=PopupBinding.activeInstances.get(key);
var _6e6=(arg&&arg instanceof ButtonBinding&&arg.popupBinding==_6e5);
if(!_6e6){
list.add(_6e5);
}
});
list.each(function(_6e7){
_6e7.hide();
});
}
break;
case BroadcastMessages.KEY_ESCAPE:
if(PopupBinding.activeInstances.hasEntries()){
PopupBinding.activeInstances.each(function(key){
var _6e9=PopupBinding.activeInstances.get(key);
_6e9.hide();
});
}
break;
}
};
EventBroadcaster.subscribe(BroadcastMessages.MOUSEEVENT_MOUSEDOWN,PopupBinding);
EventBroadcaster.subscribe(BroadcastMessages.MOUSEEVENT_MOUSEUP,PopupBinding);
EventBroadcaster.subscribe(BroadcastMessages.KEY_ESCAPE,PopupBinding);
function PopupBinding(){
this.logger=SystemLogger.getLogger("PopupBinding");
this._bodyBinding=null;
this._shadowBinding=null;
this.position=null;
this.isVisible=false;
this.onshow=null;
this.onhide=null;
this.geometry=null;
this._menuItems=null;
this._menuGroups=null;
this._menuItemCount=0;
this.type=PopupBinding.TYPE_NORMAL;
this._isOverflow=false;
return this;
}
PopupBinding.prototype.toString=function(){
return "[PopupBinding]";
};
PopupBinding.prototype.onBindingAttach=function(){
PopupBinding.superclass.onBindingAttach.call(this);
this.addActionListener(Binding.ACTION_ATTACHED);
this.geometry={x:0,y:0,w:0,h:0};
this.buildDOMContent();
this.parseDOMProperties();
this.assignDOMEvents();
if(Client.isExplorer){
this.buildShadowBinding();
}
};
PopupBinding.prototype.onBindingDispose=function(){
PopupBinding.superclass.onBindingDispose.call(this);
if(PopupBinding.activeInstances.has(this.key)){
PopupBinding.activeInstances.del(this.key);
}
if(this._shadowBinding!=null){
this._shadowBinding.dispose();
}
};
PopupBinding.prototype.buildDOMContent=function(){
var _6ea=DOMUtil.getElementsByTagName(this.bindingElement,"menubody").item(0);
var _6eb=DOMUtil.getElementsByTagName(this.bindingElement,"popupbody").item(0);
if(_6ea){
this._bodyBinding=UserInterface.getBinding(_6ea);
}else{
if(_6eb){
this._bodyBinding=UserInterface.getBinding(_6eb);
}else{
if(this.bindingElement.hasChildNodes()){
throw new Error(this+": DOM structure invalid.");
}else{
this._bodyBinding=this.add(MenuBodyBinding.newInstance(this.bindingDocument)).attach();
}
}
}
if(Client.hasTransitions){
this.bindingElement.style.opacity="0";
}
};
PopupBinding.prototype.parseDOMProperties=function(){
if(!this.position){
var _6ec=this.getProperty("position");
this.position=_6ec?_6ec:PopupBinding.POSITION_BOTTOM;
}
};
PopupBinding.prototype.buildShadowBinding=function(){
this._shadowBinding=ShadowBinding.newInstance(this.bindingDocument);
this._shadowBinding.attachClassName("popupshadow");
this._shadowBinding.offset=3;
this._shadowBinding.expand=6;
this._shadowBinding.shadow(this);
this._shadowBinding.attach();
this.shadowTree.shadow=this._shadowBinding;
};
PopupBinding.prototype.assignDOMEvents=function(){
this.addEventListener(DOMEvents.MOUSEDOWN);
this.addEventListener(DOMEvents.MOUSEUP);
};
PopupBinding.prototype.add=function(_6ed){
var _6ee=null;
if(this._bodyBinding){
this._bodyBinding.add(_6ed);
_6ee=_6ed;
}else{
_6ee=PopupBinding.superclass.add.call(this,_6ed);
}
return _6ee;
};
PopupBinding.prototype.addFirst=function(_6ef){
var _6f0=null;
if(this._bodyBinding){
this._bodyBinding.addFirst(_6ef);
_6f0=_6ef;
}else{
_6f0=PopupBinding.superclass.addFirst.call(this,_6ef);
}
return _6f0;
};
PopupBinding.prototype.handleAction=function(_6f1){
PopupBinding.superclass.handleAction.call(this,_6f1);
var _6f2=_6f1.target;
switch(_6f1.type){
case Binding.ACTION_ATTACHED:
if(_6f2 instanceof MenuItemBinding){
this._count(true);
_6f1.consume();
}
break;
case Binding.ACTION_DETACHED:
if(_6f2 instanceof MenuItemBinding){
this._count(false);
_6f1.consume();
}
break;
}
};
PopupBinding.prototype._count=function(_6f3){
if(this.type==PopupBinding.TYPE_FIXED){
this._menuItemCount=this._menuItemCount+(_6f3?1:-1);
if(!this._isOverflow){
if(this._menuItemCount>=PopupBinding.FIXED_MAX){
this.attachClassName(PopupBinding.CLASSNAME_OVERFLOW);
this._isOverflow=true;
}
}else{
if(this._menuItemCount<PopupBinding.FIXED_MAX){
this.bindingElement.style.height="auto";
this.detachClassName(PopupBinding.CLASSNAME_OVERFLOW);
this._isOverflow=false;
}
}
}
};
PopupBinding.prototype.snapTo=function(_6f4){
var _6f5=this._getElementPosition(_6f4);
switch(this.position){
case PopupBinding.POSITION_TOP:
_6f5.y-=this.bindingElement.offsetHeight;
break;
case PopupBinding.POSITION_RIGHT:
_6f5.x+=_6f4.offsetWidth;
break;
case PopupBinding.POSITION_BOTTOM:
_6f5.y+=_6f4.offsetHeight;
break;
case PopupBinding.POSITION_LEFT:
_6f5.x-=this.bindingElement.offsetWidth;
break;
}
this.targetElement=_6f4;
this.bindingElement.style.display="block";
this.setPosition(_6f5.x,_6f5.y);
};
PopupBinding.prototype.snapToMouse=function(e){
this.snapToPoint(this._getMousePosition(e));
};
PopupBinding.prototype.snapToPoint=function(_6f7){
this.bindingElement.style.display="block";
this.setPosition(_6f7.x,_6f7.y);
this.show();
};
PopupBinding.prototype.setPosition=function(x,y){
this.geometry.x=x;
this.geometry.y=y;
this.bindingElement.style.left=this.geometry.x+"px";
this.bindingElement.style.top=this.geometry.y+"px";
};
PopupBinding.prototype.getPosition=function(x,y){
return new Point(this.geometry.x,this.geometry.y);
};
PopupBinding.prototype.getDimension=function(){
return new Dimension(this.bindingElement.offsetWidth,this.bindingElement.offsetHeight);
};
PopupBinding.prototype._getElementPosition=function(_6fc){
return _6fc.ownerDocument==this.bindingDocument?DOMUtil.getGlobalPosition(_6fc):DOMUtil.getUniversalPosition(_6fc);
};
PopupBinding.prototype._getMousePosition=function(e){
var _6fe=DOMEvents.getTarget(e);
return _6fe.ownerDocument==this.bindingDocument?DOMUtil.getGlobalMousePosition(e):DOMUtil.getUniversalMousePosition(e);
};
PopupBinding.prototype.show=function(){
if(this.isVisible==true){
this.hide();
}
if(!this.isVisible){
PopupBinding.activeInstances.set(this.key,this);
this.bindingElement.style.display="block";
this.dispatchAction(PopupBinding.ACTION_SHOW);
this.fitOnScreen();
this._makeVisible(true);
if(this._bodyBinding instanceof MenuBodyBinding){
this._bodyBinding.refreshMenuGroups();
}
if(Client.isExplorer){
this._bodyBinding.setDimension(this.getDimension());
}
this._enableTab(true);
this.dispatchAction(Binding.ACTION_VISIBILITYCHANGED);
this.dispatchAction(Binding.ACTION_POSITIONCHANGED);
this.dispatchAction(Binding.ACTION_DIMENSIONCHANGED);
}
};
PopupBinding.prototype._makeVisible=function(_6ff){
var _700=this.bindingElement;
if(_6ff){
if(Client.hasTransitions){
_700.style.visibility="visible";
_700.style.opacity="1";
}else{
_700.style.visibility="visible";
}
}else{
_700.style.visibility="hidden";
_700.style.display="none";
if(Client.hasTransitions){
_700.style.opacity="0";
}
}
this.isVisible=_6ff;
};
PopupBinding.prototype._enableTab=function(_701){
var self=this;
var _703=this.getDescendantBindingsByLocalName("menuitem");
setTimeout(function(){
if(Binding.exists(self)==true){
_703.each(function(_704){
_704.bindingElement.tabIndex=_701?0:-1;
});
}
},0);
};
PopupBinding.prototype.hide=function(){
this.releaseKeyboard();
if(this.isVisible){
this._makeVisible(false);
this.targetElement=null;
this.dispatchAction(Binding.ACTION_VISIBILITYCHANGED);
this.dispatchAction(PopupBinding.ACTION_HIDE);
this._enableTab(false);
var self=this;
setTimeout(function(){
if(!self.isVisible){
PopupBinding.activeInstances.del(self.key);
}
},0);
}
};
PopupBinding.prototype.fitOnScreen=function(){
var x=this.bindingElement.offsetLeft;
var y=this.bindingElement.offsetTop;
var w=this.bindingElement.offsetWidth;
var h=this.bindingElement.offsetHeight;
var dim=this.bindingWindow.WindowManager.getWindowDimensions();
var pos=this.boxObject.getUniversalPosition();
if(this.targetElement!=null){
if(pos.y+h>=dim.h){
switch(CSSComputer.getPosition(this.bindingElement.offsetParent)){
case "absolute":
y=y-h-this.targetElement.offsetHeight;
if(y<0){
y=0;
}
break;
case "relative":
y=y-h+this.targetElement.offsetHeight+9;
break;
}
}
if(pos.x+w>=dim.w){
x-=w;
switch(this.position){
case PopupBinding.POSITION_RIGHT:
x-=this.targetElement.offsetWidth;
break;
case PopupBinding.POSITION_BOTTOM:
x+=this.targetElement.offsetWidth;
break;
}
}
}else{
if(pos.y+h>=dim.h){
y-=h;
if(y<0){
y=0;
}
}
if(pos.x+w>=dim.w){
x-=w;
if(x<0){
x=0;
}
}
}
this.setPosition(x,y);
};
PopupBinding.prototype.handleEvent=function(e){
PopupBinding.superclass.handleEvent.call(this,e);
DOMEvents.stopPropagation(e);
};
PopupBinding.prototype.empty=function(){
this._bodyBinding.detachRecursive();
this._bodyBinding.bindingElement.innerHTML="";
};
PopupBinding.prototype.grabKeyboard=function(_70d){
};
PopupBinding.prototype.releaseKeyboard=function(){
if(this._bodyBinding!=null&&this._bodyBinding instanceof MenuBodyBinding){
this._bodyBinding.releaseKeyboard();
}
};
PopupBinding.prototype._indexMenuContent=function(){
this._menuItems={};
this._menuGroups={};
var list=this.getDescendantBindingsByLocalName("menugroup");
while(list.hasNext()){
var item=list.getNext();
var rel=item.getProperty("rel");
if(rel){
if(!this._menuGroups[rel]){
this._menuGroups[rel]=new List();
}
this._menuGroups[rel].add(item);
}
}
list=this.getDescendantBindingsByLocalName("menuitem");
while(list.hasNext()){
var item=list.getNext();
var cmd=item.getProperty("cmd");
this._menuItems[cmd]=item;
}
};
PopupBinding.prototype.getMenuItemForCommand=function(cmd){
var _713=null;
if(this._menuItems){
if(this._menuItems[cmd]){
_713=this._menuItems[cmd];
}else{
throw "PopupBinding.getMenuItemForCommand: No binding for command "+cmd;
}
}else{
throw "Must invoke _indexMenuContent method first!";
}
return _713;
};
PopupBinding.prototype.clear=function(){
var _714=this._bodyBinding;
if(_714){
_714.detachRecursive();
_714.bindingElement.innerHTML="";
}
this._menuItemCount=0;
};
PopupBinding.newInstance=function(_715){
var _716=DOMUtil.createElementNS(Constants.NS_UI,"ui:popup",_715);
return UserInterface.registerBinding(_716,PopupBinding);
};
PopupBodyBinding.prototype=new Binding;
PopupBodyBinding.prototype.constructor=PopupBodyBinding;
PopupBodyBinding.superclass=Binding.prototype;
function PopupBodyBinding(){
this.logger=SystemLogger.getLogger("PopupBodyBinding");
}
PopupBodyBinding.prototype.toString=function(){
return "[PopupBodyBinding]";
};
PopupBodyBinding.prototype.setDimension=function(dim){
this.getBindingElement().style.width=new String(dim.w)+"px";
};
PopupBodyBinding.newInstance=function(_718){
var _719=DOMUtil.createElementNS(Constants.NS_UI,"ui:popupbody",_718);
return UserInterface.registerBinding(_719,PopupBodyBinding);
};
MenuPopupBinding.prototype=new PopupBinding;
MenuPopupBinding.prototype.constructor=MenuPopupBinding;
MenuPopupBinding.superclass=PopupBinding.prototype;
function MenuPopupBinding(){
this.logger=SystemLogger.getLogger("MenuPopupBinding");
return this;
}
MenuPopupBinding.prototype.toString=function(){
return "[MenuPopupBinding]";
};
MenuPopupBinding.prototype._getElementPosition=function(_71a){
return new Point(_71a.offsetLeft,0);
};
MenuPopupBinding.newInstance=function(_71b){
var _71c=DOMUtil.createElementNS(Constants.NS_UI,"ui:menupopup",_71b);
return UserInterface.registerBinding(_71c,MenuPopupBinding);
};
DialogBinding.prototype=new ControlBoxBinding;
DialogBinding.prototype.constructor=DialogBinding;
DialogBinding.superclass=ControlBoxBinding.prototype;
DialogBinding.MODE_DRAGGING="dialogdragging";
DialogBinding.MODE_RESIZING="dialogresizing";
DialogBinding.ACTION_OPEN="dialogopen";
DialogBinding.ACTION_CLOSE="dialogclose";
DialogBinding.DEFAULT_WIDTH=540;
DialogBinding.DEFAULT_HEIGHT=100;
function DialogBinding(){
this.logger=SystemLogger.getLogger("DialogBinding");
this.isFlexible=false;
this._matrix=null;
this._head=null;
this._body=null;
this._cover=null;
this._titlebar=null;
this._border=null;
this.shadowBinding=null;
this.startPoint=null;
this.geometry=null;
this.isActive=false;
this.isActivatable=false;
this.isVisible=false;
this._isResizable=true;
this.isDialogResizable=true;
this.isModal=false;
this.mode=null;
this.controlBindings={};
this._index=null;
this._hasTransitions=false;
return this;
}
DialogBinding.prototype.toString=function(){
return "[DialogBinding]";
};
DialogBinding.prototype.onBindingRegister=function(){
DialogBinding.superclass.onBindingRegister.call(this);
this.addActionListener(Binding.ACTION_DRAG,this);
this.addActionListener(FocusBinding.ACTION_ACTIVATED);
this.subscribe(this.bindingWindow.WindowManager.WINDOW_RESIZED_BROADCAST);
this.buildDescendantBindings();
};
DialogBinding.prototype.onBindingAttach=function(){
DialogBinding.superclass.onBindingAttach.call(this);
this.geometry=this.computeDefaultGeometry();
this.parseDOMProperties();
this.buildControlBindings();
this.buildBorderBindings();
this.attachRecursive();
if(Client.isExplorer){
this.buildShadowBinding();
}
if(this._isResizable){
this.attachClassName("resizable");
}
if(this._hasTransitions){
this.bindingElement.style.opacity="0";
}
this.setPosition(new Point(0,0));
this.setDimension(new Dimension(DialogBinding.DEFAULT_WIDTH,DialogBinding.DEFAULT_HEIGHT));
if(this.getProperty("open")){
this.open();
}
};
DialogBinding.prototype.buildDescendantBindings=function(){
this._matrix=DialogMatrixBinding.newInstance(this.bindingDocument);
this._head=DialogHeadBinding.newInstance(this.bindingDocument);
this._titlebar=DialogTitleBarBinding.newInstance(this.bindingDocument);
this.add(this._matrix);
this.addFirst(this._head);
this._head.add(this._titlebar);
var _71d=DOMUtil.getElementsByTagName(this.bindingElement,"dialogbody").item(0);
if(_71d){
this._body=UserInterface.getBinding(_71d);
}else{
this._body=DialogBodyBinding.newInstance(this.bindingDocument);
this.add(this._body);
}
};
DialogBinding.prototype.buildBorderBindings=function(){
var _71e=new List([DialogBorderBinding.TYPE_NORTH,DialogBorderBinding.TYPE_SOUTH,DialogBorderBinding.TYPE_EAST,DialogBorderBinding.TYPE_WEST]);
while(_71e.hasNext()){
var _71f=DialogBorderBinding.newInstance(this.bindingDocument);
_71f.setType(_71e.getNext());
this.add(_71f);
}
};
DialogBinding.prototype.buildShadowBinding=function(){
this.shadowBinding=ShadowBinding.newInstance(this.bindingDocument);
this.shadowBinding.attachClassName("dialogshadow");
this.shadowBinding.shadow(this);
this.shadowBinding.attach();
};
DialogBinding.prototype.buildControlBindings=function(){
var _720=this.getProperty("controls");
if(_720){
var _721=new List(_720.split(" "));
while(_721.hasNext()){
var type=_721.getNext();
switch(type){
case ControlBinding.TYPE_MAXIMIZE:
case ControlBinding.TYPE_MINIMIZE:
case ControlBinding.TYPE_CLOSE:
var _723=DialogControlBinding.newInstance(this.bindingDocument);
_723.setControlType(type);
this._titlebar.addControl(_723);
this.controlBindings[type]=_723;
break;
default:
throw new Error("DialogBinding: Control not added: "+type);
break;
}
}
}
};
DialogBinding.prototype.buildDialogCoverBinding=function(){
this._cover=DialogCoverBinding.newInstance(this.bindingDocument);
this.getAncestorBindingByLocalName("dialogset").add(this._cover);
this._cover.cover(this);
};
DialogBinding.prototype.parseDOMProperties=function(){
var _724=this.getProperty("image");
var _725=this.getProperty("label");
var _726=this.getProperty("draggable");
var _727=this.getProperty("resizable");
var _728=this.getProperty("modal");
if(_724){
this.setImage(_724);
}
if(_725){
this.setLabel(_725);
}
if(_726==false){
this.isDialogDraggable=false;
}
if(_727==false){
this.isPanelResizable=false;
}
if(_728==true){
this.setModal(true);
}
};
DialogBinding.prototype.setModal=function(_729){
this.isModal=_729;
};
DialogBinding.prototype.setLabel=function(_72a){
this.setProperty("label",_72a);
if(this.isAttached==true){
this._titlebar.setLabel(Resolver.resolve(_72a));
}
};
DialogBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
DialogBinding.prototype.setImage=function(url){
this.setProperty("image",url);
if(this.isAttached){
this._titlebar.setImage(Resolver.resolve(url));
}
};
DialogBinding.prototype.handleAction=function(_72c){
DialogBinding.superclass.handleAction.call(this,_72c);
switch(_72c.type){
case Binding.ACTION_DRAG:
var _72d=_72c.target;
if(this.getState()==ControlBoxBinding.STATE_NORMAL){
switch(_72d.constructor){
case DialogTitleBarBinding:
this.mode=DialogBinding.MODE_DRAGGING;
_72d.dragger.registerHandler(this);
break;
case DialogBorderBinding:
if(this._isResizable){
this.mode=DialogBinding.MODE_RESIZING;
this._border=_72d;
_72d.dragger.registerHandler(this);
}
break;
}
}
_72c.consume();
break;
case Binding.ACTION_ACTIVATED:
if(!this.isActive){
this.activate();
}
_72c.consume();
break;
}
};
DialogBinding.prototype.handleBroadcast=function(_72e,arg){
DialogBinding.superclass.handleBroadcast.call(this,_72e,arg);
switch(_72e){
case this.bindingWindow.WindowManager.WINDOW_RESIZED_BROADCAST:
this.startPoint=this.getPosition();
this._setComputedPosition(new Point(0,0));
break;
}
};
DialogBinding.prototype.handleInvokedControl=function(_730){
DialogBinding.superclass.handleInvokedControl.call(this,_730);
switch(_730.controlType){
case ControlBinding.TYPE_CLOSE:
this.close();
break;
}
};
DialogBinding.prototype.open=function(_731){
if(this.isModal&&this._cover==null){
this.buildDialogCoverBinding();
}
if(!this.isVisible){
this.setProperty("open","true");
this.isVisible=true;
this.isActivatable=true;
this.activate();
if(_731){
}else{
this.centerOnScreen();
this.reflex(true);
}
this.bindingElement.style.marginTop="0";
this.dispatchAction(DialogBinding.ACTION_OPEN);
this.dispatchAction(Binding.ACTION_VISIBILITYCHANGED);
if(this._hasTransitions){
this.bindingElement.style.opacity="1";
}
}
};
DialogBinding.prototype.close=function(){
if(this.isVisible){
this.isActivatable=false;
this.deActivate();
var self=this;
function doit(){
self.isVisible=false;
self.deleteProperty("open");
if(self.shadowBinding!=null){
self.dispatchAction(Binding.ACTION_VISIBILITYCHANGED);
}
self.bindingElement.style.marginTop="-10000px";
self.dispatchAction(DialogBinding.ACTION_CLOSE);
}
if(!this._hasTransitions){
doit();
}else{
var _733=self.bindingElement;
setTimeout(function(){
_733.style.opacity="0";
setTimeout(function(){
doit();
},Animation.DEFAULT_TIME);
},Animation.DEFAULT_TIME);
}
}
};
DialogBinding.prototype.activate=function(){
if(!this.isActive){
this.isActive=true;
this.attachClassName("active");
this.moveToTop();
this._titlebar.onActivate();
Application.activate(this);
}
};
DialogBinding.prototype.deActivate=function(){
if(this.isActive==true){
this.isActive=false;
this.detachClassName("active");
this._titlebar.onDeactivate();
Application.deActivate(this);
}
};
DialogBinding.prototype.moveToTop=function(){
this.dispatchAction(Binding.ACTION_MOVETOTOP);
this.dispatchAction(Binding.ACTION_MOVEDONTOP);
};
DialogBinding.prototype.getZIndex=function(){
return CSSComputer.getZIndex(this.bindingElement);
};
DialogBinding.prototype.setZIndex=function(_734){
this.bindingElement.style.zIndex=new String(_734);
};
DialogBinding.prototype.onDragStart=function(_735){
switch(this.mode){
case DialogBinding.MODE_DRAGGING:
case DialogBinding.MODE_RESIZING:
this.startPoint=new Point(this.bindingElement.offsetLeft,this.bindingElement.offsetTop);
this.startDimension=new Dimension(this.bindingElement.offsetWidth,this.bindingElement.offsetHeight);
break;
}
};
DialogBinding.prototype.onDrag=function(diff){
switch(this.mode){
case DialogBinding.MODE_DRAGGING:
this._setComputedPosition(diff);
break;
case DialogBinding.MODE_RESIZING:
switch(this._border.getType()){
case DialogBorderBinding.TYPE_NORTH:
this.resizeNorth(diff);
break;
case DialogBorderBinding.TYPE_SOUTH:
this.resizeSouth(diff);
break;
case DialogBorderBinding.TYPE_EAST:
this.resizeEast(diff);
break;
case DialogBorderBinding.TYPE_WEST:
this.resizeWest(diff);
break;
}
this.reflex(true);
break;
}
};
DialogBinding.prototype.onDragStop=function(diff){
switch(this.mode){
case DialogBinding.MODE_DRAGGING:
this._setComputedPosition(diff);
break;
case DialogBinding.MODE_RESIZING:
break;
}
this.mode=null;
};
DialogBinding.prototype.resizeNorth=function(diff){
this.setPosition(new Point(this.startPoint.x,this.startPoint.y+diff.y));
this.setDimension(new Dimension(this.startDimension.w,this.startDimension.h-diff.y));
};
DialogBinding.prototype.resizeSouth=function(diff){
this.setDimension(new Dimension(this.startDimension.w,this.startDimension.h+diff.y));
};
DialogBinding.prototype.resizeEast=function(diff){
this.setDimension(new Dimension(this.startDimension.w+diff.x,this.startDimension.h));
};
DialogBinding.prototype.resizeWest=function(diff){
this.setPosition(new Point(this.startPoint.x+diff.x,this.startPoint.y));
this.setDimension(new Dimension(this.startDimension.w-diff.x,this.startDimension.h));
};
DialogBinding.prototype._setComputedPosition=function(diff){
var win=this.bindingWindow.WindowManager.getWindowDimensions();
var dim=this.getDimension();
var x=this.startPoint.x+diff.x;
var y=this.startPoint.y+diff.y;
x=x<0?0:x+dim.w>win.w?win.w-dim.w:x;
y=y<0?0:y+dim.h>win.h?win.h-dim.h:y;
this.setPosition(new Point(x,y));
};
DialogBinding.prototype.setPosition=function(p){
var x=p.x;
var y=p.y;
x=Math.round(x);
this.bindingElement.style.left=x+"px";
this.geometry.x=x;
y=Math.round(y);
this.bindingElement.style.top=y+"px";
this.geometry.y=y;
if(this.shadowBinding!=null){
this.dispatchAction(Binding.ACTION_POSITIONCHANGED);
}
};
DialogBinding.prototype.getPosition=function(){
return new Point(this.geometry.x,this.geometry.y);
};
DialogBinding.prototype.setDimension=function(dim){
if(!dim){
SystemDebug.stack(arguments);
}
var w=dim.w;
var h=dim.h;
w=Math.round(w);
this.bindingElement.style.width=w+"px";
this.geometry.w=w;
h=Math.round(h);
this.bindingElement.style.height=h+"px";
this.geometry.h=h;
if(this.shadowBinding!=null){
this.dispatchAction(Binding.ACTION_DIMENSIONCHANGED);
}
};
DialogBinding.prototype.getDimension=function(){
return new Dimension(this.geometry.w,this.geometry.h);
};
DialogBinding.prototype.setResizable=function(_747){
if(this._isResizable!=_747){
if(_747){
this.attachClassName("resizable");
}else{
this.detachClassName("resizable");
}
this._isResizable=_747;
}
};
DialogBinding.prototype.computeDefaultGeometry=function(){
var _748=null;
var _749=this.bindingDocument.body.offsetWidth;
var _74a=this.bindingDocument.body.offsetHeight;
_748={x:0.125*_749,y:0.125*_74a,w:0.75*_749,h:0.5*_74a};
return _748;
};
DialogBinding.prototype.centerOnScreen=function(){
var _74b=this.bindingWindow.WindowManager.getWindowDimensions();
var dim=this.getDimension();
this.setPosition(new Point(0.5*(_74b.w-dim.w),0.5*(_74b.h-dim.h)));
};
DialogBinding.prototype.alert=function(){
var _74d=this;
var i=0;
function blink(){
if(i%2==0){
_74d.detachClassName("active");
}else{
_74d.attachClassName("active");
}
if(i++<7){
setTimeout(blink,50);
}
}
blink();
};
DialogBinding.prototype.setControls=function(list){
for(var type in this.controlBindings){
this.controlBindings[type].dispose();
}
var _751="";
while(list.hasNext()){
var type=list.getNext();
_751+=type+list.hasNext()?" ":"";
}
this.setProperty("controls",_751);
if(this.isAttached){
this.buildControlBindings();
}
};
DialogBinding.newInstance=function(_752){
var _753=DOMUtil.createElementNS(Constants.NS_UI,"ui:dialog",_752);
return UserInterface.registerBinding(_753,DialogBinding);
};
DialogHeadBinding.prototype=new Binding;
DialogHeadBinding.prototype.constructor=DialogHeadBinding;
DialogHeadBinding.superclass=Binding.prototype;
function DialogHeadBinding(){
this.logger=SystemLogger.getLogger("DialogHeadBinding");
}
DialogHeadBinding.prototype.toString=function(){
return "[DialogHeadBinding]";
};
DialogHeadBinding.newInstance=function(_754){
var _755=DOMUtil.createElementNS(Constants.NS_UI,"ui:dialoghead",_754);
return UserInterface.registerBinding(_755,DialogHeadBinding);
};
DialogBodyBinding.prototype=new FlexBoxBinding;
DialogBodyBinding.prototype.constructor=DialogBodyBinding;
DialogBodyBinding.superclass=FlexBoxBinding.prototype;
function DialogBodyBinding(){
this.logger=SystemLogger.getLogger("DialogBodyBinding");
this.panelBinding=null;
this.isVisible=true;
this._dialogBinding=null;
}
DialogBodyBinding.prototype.toString=function(){
return "[DialogBodyBinding]";
};
DialogBodyBinding.prototype.onBindingAttach=function(){
DialogBodyBinding.superclass.onBindingAttach.call(this);
this._dialogBinding=UserInterface.getBinding(this.bindingElement.parentNode);
};
DialogBodyBinding.prototype.getPosition=function(){
var pos=this._dialogBinding.getPosition();
return new Position(pos.x+this.offsetLeft+DialogBorderBinding.DIMENSION,pos.y+this.offsetTop);
};
DialogBodyBinding.prototype.getDimension=function(){
var dim=this.boxObject.getDimension();
return new Dimension(dim.w-2*DialogBorderBinding.DIMENSION,dim.h-DialogBorderBinding.DIMENSION);
};
DialogBodyBinding.newInstance=function(_758){
var _759=DOMUtil.createElementNS(Constants.NS_UI,"ui:dialogbody",_758);
return UserInterface.registerBinding(_759,DialogBodyBinding);
};
DialogMatrixBinding.prototype=new MatrixBinding;
DialogMatrixBinding.prototype.constructor=DialogMatrixBinding;
DialogMatrixBinding.superclass=MatrixBinding.prototype;
function DialogMatrixBinding(){
this.logger=SystemLogger.getLogger("DialogMatrixBinding");
this.isDraggable=true;
this._type=null;
}
DialogMatrixBinding.prototype.toString=function(){
return "[DialogMatrixBinding]";
};
DialogMatrixBinding.prototype.onBindingAttach=function(){
DialogMatrixBinding.superclass.onBindingAttach.call(this);
this.shadowTree.table.className="matrix dialogmatrix";
this._indexTable();
this.shadowTree[MatrixBinding.CENTER].appendChild(this.bindingDocument.createTextNode("."));
};
DialogMatrixBinding.newInstance=function(_75a){
var _75b=DOMUtil.createElementNS(Constants.NS_UI,"ui:dialogmatrix",_75a);
return UserInterface.registerBinding(_75b,DialogMatrixBinding);
};
DialogSetBinding.prototype=new Binding;
DialogSetBinding.prototype.constructor=DialogSetBinding;
DialogSetBinding.superclass=Binding.prototype;
function DialogSetBinding(){
this.logger=SystemLogger.getLogger("DialogSetBinding");
}
DialogSetBinding.prototype.toString=function(){
return "[DialogSetBinding]";
};
DialogSetBinding.prototype.onBindingAttach=function(){
DialogSetBinding.superclass.onBindingAttach.call(this);
this.addActionListener(Binding.ACTION_MOVETOTOP,this);
this.addActionListener(Binding.ACTION_MOVEDONTOP,this);
};
DialogSetBinding.prototype.handleAction=function(_75c){
DialogSetBinding.superclass.handleAction.call(this,_75c);
var _75d=_75c.target;
switch(_75c.type){
case Binding.ACTION_MOVETOTOP:
if(_75d instanceof DialogBinding){
this._moveToTop(_75d);
}
break;
case Binding.ACTION_MOVEDONTOP:
_75c.consume();
break;
}
};
DialogSetBinding.prototype._moveToTop=function(_75e){
var _75f=0;
var _760=this.getChildBindingsByLocalName("dialog");
_760.each(function(_761){
var _762=_761.getZIndex();
_75f=_762>_75f?_762:_75f;
});
_75e.setZIndex(_75f+2);
};
DialogBorderBinding.prototype=new Binding;
DialogBorderBinding.prototype.constructor=DialogBorderBinding;
DialogBorderBinding.superclass=Binding.prototype;
DialogBorderBinding.TYPE_NORTH="n";
DialogBorderBinding.TYPE_SOUTH="s";
DialogBorderBinding.TYPE_EAST="e";
DialogBorderBinding.TYPE_WEST="w";
DialogBorderBinding.DIMENSION=4;
function DialogBorderBinding(){
this.logger=SystemLogger.getLogger("DialogBorderBinding");
this.isDraggable=true;
this._type=null;
}
DialogBorderBinding.prototype.toString=function(){
return "[DialogBorderBinding]";
};
DialogBorderBinding.prototype.setType=function(type){
this.attachClassName(type);
this._type=type;
};
DialogBorderBinding.prototype.getType=function(){
return this._type;
};
DialogBorderBinding.newInstance=function(_764){
var _765=DOMUtil.createElementNS(Constants.NS_UI,"ui:dialogborder",_764);
return UserInterface.registerBinding(_765,DialogBorderBinding);
};
DialogCoverBinding.prototype=new Binding;
DialogCoverBinding.prototype.constructor=DialogCoverBinding;
DialogCoverBinding.superclass=Binding.prototype;
function DialogCoverBinding(){
this.logger=SystemLogger.getLogger("DialogCoverBinding");
this._dialogBinding=null;
}
DialogCoverBinding.prototype.toString=function(){
return "[DialogCoverBinding]";
};
DialogCoverBinding.prototype.cover=function(_766){
this._dialogBinding=_766;
this._dialogBinding.addActionListener(DialogBinding.ACTION_OPEN,this);
this._dialogBinding.addActionListener(DialogBinding.ACTION_CLOSE,this);
this._dialogBinding.addActionListener(Binding.ACTION_MOVEDONTOP,this);
this.addEventListener(DOMEvents.MOUSEDOWN);
};
DialogCoverBinding.prototype.handleEvent=function(e){
DialogCoverBinding.superclass.handleEvent.call(this,e);
this._dialogBinding.alert();
};
DialogCoverBinding.prototype.handleAction=function(_768){
DialogCoverBinding.superclass.handleAction.call(this,_768);
var _769=_768.target;
if(this._dialogBinding.isModal){
switch(_768.type){
case DialogBinding.ACTION_OPEN:
this.show();
break;
case DialogBinding.ACTION_CLOSE:
this.hide();
break;
case Binding.ACTION_MOVEDONTOP:
if(_769==this._dialogBinding){
this.bindingElement.style.zIndex=new String(_769.getZIndex()-1);
}
break;
}
}
};
DialogCoverBinding.prototype.handleBroadcast=function(_76a,arg){
DialogCoverBinding.superclass.handleBroadcast.call(this,_76a,arg);
switch(_76a){
case this.bindingWindow.WindowManager.WINDOW_RESIZED_BROADCAST:
this._max();
break;
}
};
DialogCoverBinding.prototype._max=function(){
var dim=this.bindingWindow.WindowManager.getWindowDimensions();
this.bindingElement.style.width=dim.w+"px";
this.bindingElement.style.height=dim.h+"px";
};
DialogCoverBinding.prototype.show=function(){
this._max();
var _76d=this.bindingWindow.WindowManager.WINDOW_RESIZED_BROADCAST;
this.subscribe(_76d);
DialogCoverBinding.superclass.show.call(this);
};
DialogCoverBinding.prototype.hide=function(){
var _76e=this.bindingWindow.WindowManager.WINDOW_RESIZED_BROADCAST;
this.unsubscribe(_76e);
DialogCoverBinding.superclass.hide.call(this);
};
DialogCoverBinding.newInstance=function(_76f){
var _770=DOMUtil.createElementNS(Constants.NS_UI,"ui:dialogcover",_76f);
return UserInterface.registerBinding(_770,DialogCoverBinding);
};
DialogTitleBarBinding.prototype=new Binding;
DialogTitleBarBinding.prototype.constructor=DialogTitleBarBinding;
DialogTitleBarBinding.superclass=Binding.prototype;
function DialogTitleBarBinding(){
this.logger=SystemLogger.getLogger("DialogTitleBarBinding");
this.bodyBinding=null;
this.labelBinding=null;
this._controlGroupBinding=null;
this.isDraggable=true;
}
DialogTitleBarBinding.prototype.toString=function(){
return "[DialogTitleBarBinding]";
};
DialogTitleBarBinding.prototype.onBindingRegister=function(){
DialogTitleBarBinding.superclass.onBindingRegister.call(this);
this.bodyBinding=this.add(DialogTitleBarBodyBinding.newInstance(this.bindingDocument));
this.labelBinding=this.bodyBinding.add(LabelBinding.newInstance(this.bindingDocument));
this.labelBinding.attachClassName("dialogtitle");
};
DialogTitleBarBinding.prototype.onBindingAttach=function(){
DialogTitleBarBinding.superclass.onBindingAttach.call(this);
var _771=this.getProperty("image");
if(_771){
this.setImage(_771);
}
var _772=this.getProperty("label");
if(_772){
this.setLabel(_772);
}
};
DialogTitleBarBinding.prototype.setLabel=function(_773){
if(this.isAttached){
this.labelBinding.setLabel(_773);
}
this.setProperty("label",_773);
};
DialogTitleBarBinding.prototype.setImage=function(url){
if(this.isAttached&&Client.isWindows){
this.labelBinding.setImage(url);
}
this.setProperty("image",url);
};
DialogTitleBarBinding.prototype.addControl=function(_775){
if(!this._controlGroupBinding){
this._controlGroupBinding=this.bodyBinding.addFirst(ControlGroupBinding.newInstance(this.bindingDocument));
}
this._controlGroupBinding.add(_775);
};
DialogTitleBarBinding.prototype.onActivate=function(){
if(this._controlGroupBinding){
this._controlGroupBinding.onActivate();
}
};
DialogTitleBarBinding.prototype.onDeactivate=function(){
if(this._controlGroupBinding){
this._controlGroupBinding.onDeactivate();
}
};
DialogTitleBarBinding.newInstance=function(_776){
var _777=DOMUtil.createElementNS(Constants.NS_UI,"ui:titlebar",_776);
return UserInterface.registerBinding(_777,DialogTitleBarBinding);
};
DialogTitleBarBodyBinding.prototype=new Binding;
DialogTitleBarBodyBinding.prototype.constructor=DialogTitleBarBodyBinding;
DialogTitleBarBodyBinding.superclass=Binding.prototype;
function DialogTitleBarBodyBinding(){
this.logger=SystemLogger.getLogger("DialogTitleBarBodyBinding");
}
DialogTitleBarBodyBinding.prototype.toString=function(){
return "[DialogTitleBarBodyBinding]";
};
DialogTitleBarBodyBinding.prototype.onBindingRegister=function(){
DialogTitleBarBodyBinding.superclass.onBindingRegister.call(this);
this.attachClassName(Binding.CLASSNAME_CLEARFLOAT);
};
DialogTitleBarBodyBinding.newInstance=function(_778){
var _779=DOMUtil.createElementNS(Constants.NS_UI,"ui:titlebarbody",_778);
return UserInterface.registerBinding(_779,DialogTitleBarBodyBinding);
};
DialogControlBinding.prototype=new ControlBinding;
DialogControlBinding.prototype.constructor=DialogControlBinding;
DialogControlBinding.superclass=ControlBinding.prototype;
DialogControlBinding.CLASSNAME="dialogcontrol";
function DialogControlBinding(){
this.logger=SystemLogger.getLogger("DialogControlBinding");
this.hasMatrix=false;
this.isGhostable=true;
}
DialogControlBinding.prototype.toString=function(){
return "[DialogControlBinding]";
};
DialogControlBinding.prototype.onBindingRegister=function(){
DialogControlBinding.superclass.onBindingRegister.call(this);
this.setImageProfile(DialogControlImageProfile);
this.attachClassName(DialogControlBinding.CLASSNAME);
};
DialogControlBinding.newInstance=function(_77a){
var _77b=DOMUtil.createElementNS(Constants.NS_UI,"ui:control",_77a);
return UserInterface.registerBinding(_77b,DialogControlBinding);
};
DialogControlImageProfile.prototype=new ControlImageProfile;
DialogControlImageProfile.prototype.constructor=DialogControlImageProfile;
DialogControlImageProfile.superclass=ControlImageProfile.prototype;
var os=Client.isVista?"vista/":(!Client.isWindows?"osx/":"");
DialogControlImageProfile.IMAGE_MINIMIZE="${root}/skins/system/controls/"+os+"control-minimize-${string}.png";
DialogControlImageProfile.IMAGE_MAXIMIZE="${root}/skins/system/controls/"+os+"control-maximize-${string}.png";
DialogControlImageProfile.IMAGE_RESTORE="${root}/skins/system/controls/"+os+"control-restore-${string}.png";
DialogControlImageProfile.IMAGE_CLOSE="${root}/skins/system/controls/"+os+"control-close-${string}.png";
function DialogControlImageProfile(_77c){
this.binding=_77c;
}
DialogTitleBarPopupBinding.prototype=new PopupBinding;
DialogTitleBarPopupBinding.prototype.constructor=DialogTitleBarPopupBinding;
DialogTitleBarPopupBinding.superclass=PopupBinding.prototype;
DialogTitleBarPopupBinding.CMD_RESTORE="restore";
DialogTitleBarPopupBinding.CMD_MINIMIZE="minimize";
DialogTitleBarPopupBinding.CMD_MAXIMIZE="maximize";
DialogTitleBarPopupBinding.CMD_REFRESH="refreshview";
DialogTitleBarPopupBinding.CMD_CLOSE="closedialog";
DialogTitleBarPopupBinding.CMD_VIEWSOURCE="viewsource";
DialogTitleBarPopupBinding.CMD_VIEWGENERATED="viewgenerated";
DialogTitleBarPopupBinding.CMD_VIEWSERIALIZED="viewserialized";
function DialogTitleBarPopupBinding(){
this.logger=SystemLogger.getLogger("DialogTitleBarPopupBinding");
}
DialogTitleBarPopupBinding.prototype.toString=function(){
return "[DialogTitleBarPopupBinding]";
};
DialogTitleBarPopupBinding.prototype.onBindingAttach=function(){
DialogTitleBarPopupBinding.superclass.onBindingAttach.call(this);
this._indexMenuContent();
};
WindowBindingHighlightNodeCrawler.prototype=new NodeCrawler;
WindowBindingHighlightNodeCrawler.prototype.constructor=WindowBindingHighlightNodeCrawler;
WindowBindingHighlightNodeCrawler.superclass=NodeCrawler.prototype;
WindowBindingHighlightNodeCrawler.CLASSNAME_HIGHLIGHT="compositec1generatedhighlight";
function WindowBindingHighlightNodeCrawler(){
this._keywords=null;
this._map=new Map();
this._textnodes=null;
this._construct();
return this;
}
WindowBindingHighlightNodeCrawler.prototype._construct=function(){
ElementCrawler.superclass._construct.call(this);
this.addFilter(function(node,arg){
var _77f=null;
if(node.nodeType==Node.ELEMENT_NODE){
var _780=node.nodeName.toLowerCase();
switch(_780){
case "script":
case "style":
case "textarea":
_77f=NodeCrawler.SKIP_NODE+NodeCrawler.SKIP_CHILDREN;
break;
}
}
return _77f;
});
var self=this;
this.addFilter(function(node,arg){
if(node.nodeType==Node.TEXT_NODE){
var text=node.nodeValue.toLowerCase();
self._map.each(function(key,exp){
var _787=true;
if(exp.test(text)){
self._textnodes.add(node);
_787=false;
}
return _787;
});
}
});
};
WindowBindingHighlightNodeCrawler.prototype.crawl=function(_788,arg){
this._textnodes=new List();
WindowBindingHighlightNodeCrawler.superclass.crawl.call(this,_788,arg);
};
WindowBindingHighlightNodeCrawler.prototype.setKeys=function(list){
list.reset();
this._map.empty();
while(list.hasNext()){
var key=list.getNext();
var _78c=key.toLowerCase().replace(/ /g,"\\W");
var exp=new RegExp("("+_78c+")");
this._map.set(key,exp);
}
};
WindowBindingHighlightNodeCrawler.prototype.onCrawlStop=function(){
var self=this;
if(this._textnodes.hasEntries()){
this._textnodes.each(function(node){
var div=self.contextDocument.createElement("div");
var frag=self.contextDocument.createDocumentFragment();
div.innerHTML=self._getMarkup(node.nodeValue);
while(div.hasChildNodes()){
frag.appendChild(div.firstChild);
}
node.parentNode.replaceChild(frag,node);
});
}
};
WindowBindingHighlightNodeCrawler.prototype._getMarkup=function(_792){
var _793="";
var _794="<span class=\""+WindowBindingHighlightNodeCrawler.CLASSNAME_HIGHLIGHT+"\" style=\"background-color:yellow;color:black;\">";
var _795="</span>";
var self=this;
function iterate(_797){
var _798=-1;
var _799=null;
self._map.each(function(key,exp){
var low=_797.toLowerCase();
var _79d=low.search(exp);
if(_79d>-1){
if(_798==-1){
_798=_79d;
}
if(_79d<=_798){
_798=_79d;
_799=key;
}
}
});
if(_798>-1&&_799!=null){
var pre=_797.substring(0,_798);
var hit=_797.substring(_798,_798+_799.length);
var pst=_797.substring(_798+_799.length,_797.length);
_793+=pre+_794+hit+_795;
iterate(pst);
}else{
_793+=_797;
}
}
iterate(_792);
return _793;
};
WindowBindingHighlightNodeCrawler.prototype.reset=function(_7a1){
var _7a2=new List(_7a1.getElementsByTagName("span"));
_7a2.each(function(span){
if(span.className==WindowBindingHighlightNodeCrawler.CLASSNAME_HIGHLIGHT){
var node=_7a1.ownerDocument.createTextNode(DOMUtil.getTextContent(span));
span.parentNode.replaceChild(node,span);
}
});
};
WindowBinding.prototype=new FlexBoxBinding;
WindowBinding.prototype.constructor=WindowBinding;
WindowBinding.superclass=FlexBoxBinding.prototype;
WindowBinding.ACTION_LOADED="window loaded";
WindowBinding.ACTION_ONLOAD="alien window loaded";
WindowBinding.DEFAULT_URL="${root}/blank.aspx";
WindowBinding.DEFAULT_TITLE="Composite.Management.Blank";
WindowBinding.POSTBACK_URL="${root}/postback.aspx";
WindowBinding.POSTBACK_TITLE="Composite.Management.DefaultPostBack";
WindowBinding.getMarkup=function(_7a5){
var _7a6=null;
if(_7a5.isAttached){
var doc=_7a5.getContentDocument();
if(doc!=null){
var root=doc.getElementsByTagName("html").item(0);
var html="<html xmlns=\""+Constants.NS_XHTML+"\">"+root.innerHTML+"</html>";
WebServiceProxy.isFaultHandler=false;
_7a6=top.MarkupFormatService.HtmlToXhtml(html);
WebServiceProxy.isFaultHandler=true;
if(_7a6 instanceof SOAPFault){
_7a6=null;
}
}
}
return _7a6;
};
WindowBinding.highlightKeywords=function(_7aa,list){
if(WindowBinding._highlightcrawler==null){
WindowBinding._highlightcrawler=new WindowBindingHighlightNodeCrawler();
}
if(_7aa.isAttached){
var doc=_7aa.getContentDocument();
if(doc!=null){
var _7ad=WindowBinding._highlightcrawler;
_7ad.reset(doc.body);
if(list!=null){
_7ad.setKeys(list);
_7ad.crawl(doc.body);
}
}
}
};
WindowBinding._highlightcrawler=null;
function WindowBinding(){
this.logger=SystemLogger.getLogger("WindowBinding");
this._target=null;
this._parameterMap=null;
this._pageBinding=null;
this._isReloading=false;
this._onloadHandler=null;
this._unloadHandler=null;
this._hasLoadActionFired=false;
return this;
}
WindowBinding.prototype.toString=function(){
return "[WindowBinding]";
};
WindowBinding.prototype.serialize=function(){
var _7ae=WindowBinding.superclass.serialize.call(this);
if(_7ae){
_7ae.url=this.getURL();
}
return _7ae;
};
WindowBinding.prototype.onBindingRegister=function(){
WindowBinding.superclass.onBindingRegister.call(this);
this.addActionListener(RootBinding.ACTION_PHASE_3);
this.addActionListener(PageBinding.ACTION_INITIALIZED);
this.addActionListener(RootBinding.ACTION_ACTIVATED);
this.addActionListener(RootBinding.ACTION_DEACTIVATED);
};
WindowBinding.prototype.onBindingAttach=function(){
this.buildDOMContent();
WindowBinding.superclass.onBindingAttach.call(this);
this.setURL(this.getURL());
};
WindowBinding.prototype.onBindingDispose=function(){
WindowBinding.superclass.onBindingDispose.call(this);
this._disposeContentDocument();
};
WindowBinding.prototype._disposeContentDocument=function(){
if(this._pageBinding!=null){
var win=this.getContentWindow();
if(win!=null){
var _7b0=this.getContentWindow().DocumentManager;
if(_7b0!=null){
_7b0.detachAllBindings();
this._pageBinding=null;
}
}
}
};
WindowBinding.prototype.handleAction=function(_7b1){
WindowBinding.superclass.handleAction.call(this,_7b1);
var _7b2=_7b1.target;
switch(_7b1.type){
case RootBinding.ACTION_PHASE_3:
if(_7b2.bindingDocument==this.getContentDocument()){
if(this._isReloading==true){
this._isReloading=false;
if(Client.isPrism==true){
Prism.enableCache();
}
}
this.dispatchAction(WindowBinding.ACTION_LOADED);
}
break;
case PageBinding.ACTION_INITIALIZED:
this._onPageInitialize(_7b2);
break;
case RootBinding.ACTION_ACTIVATED:
case RootBinding.ACTION_DEACTIVATED:
_7b1.consume();
break;
}
};
WindowBinding.prototype.fit=function(_7b3){
if(!this.isFit||_7b3){
if(this._pageBinding!=null){
this.setHeight(this._pageBinding.getHeight());
this.isFit=true;
}
}
};
WindowBinding.prototype._onPageInitialize=function(_7b4){
if(this._pageBinding==null){
if(_7b4.bindingWindow==this.getContentWindow()){
this._pageBinding=_7b4;
}
}
};
WindowBinding.prototype.buildDOMContent=function(){
this.shadowTree.iframe=DOMUtil.createElementNS(Constants.NS_XHTML,"iframe",this.bindingDocument);
this.shadowTree.iframe.setAttribute("frameborder","0");
this.shadowTree.iframe.frameBorder=0;
this.bindingElement.appendChild(this.shadowTree.iframe);
this._registerOnloadListener(true);
};
WindowBinding.prototype._registerOnloadListener=function(_7b5){
var _7b6=this.shadowTree.iframe;
var _7b7=_7b5?"addEventListener":"removeEventListener";
if(this._onloadHandler==null){
var self=this;
this._onloadHandler={handleEvent:function(e){
var _7ba=true;
if(Client.isExplorer){
_7ba=_7b6.readyState=="complete";
}
if(_7ba==true){
if(self.getURL()!=WindowBinding.DEFAULT_URL){
if(!self._hasLoadActionFired){
self.onWindowLoaded(self.getContentWindow());
}
}
}
}};
}
DOMEvents[_7b7](this.shadowTree.iframe,Client.isExplorer==true?"readystatechange":DOMEvents.LOAD,this._onloadHandler);
};
WindowBinding.prototype._registerUnloadListener=function(_7bb){
var _7bc=_7bb?"addEventListener":"removeEventListener";
if(this._unloadHandler==null){
var self=this;
this._unloadHandler={handleEvent:function(){
self._disposeContentDocument();
self._hasLoadActionFired=false;
}};
}
DOMEvents[_7bc](this.getContentWindow(),DOMEvents.UNLOAD,this._unloadHandler);
};
WindowBinding.prototype.onWindowLoaded=function(win){
if(win==null){
this.logger.error("WindowBinding#onWindowLoaded: Bad argument: "+this.getURL());
}else{
if(this.getURL()!=WindowBinding.DEFAULT_URL){
if(!this._hasLoadActionFired){
if(win!=null&&win.document!=null&&win.document.body!=null){
win.document.body.style.border="none";
if(win.WindowManager==undefined){
Application.framework(win.document);
}
if(this._isReloading==true){
this._isReloading=false;
if(Client.isPrism){
Prism.enableCache();
}
}
}
this._registerUnloadListener(true);
this.dispatchAction(WindowBinding.ACTION_ONLOAD);
this._hasLoadActionFired=true;
}
}
}
};
WindowBinding.prototype.setURL=function(url){
this.setProperty("url",url);
this._hasLoadActionFired=false;
if(this.isAttached==true){
this._disposeContentDocument();
this.getFrameElement().src=Resolver.resolve(url);
}
};
WindowBinding.prototype.getURL=function(){
var _7c0=WindowBinding.DEFAULT_URL;
var url=this.getProperty("url");
if(url){
_7c0=url;
}
return _7c0;
};
WindowBinding.prototype.reload=function(_7c2){
this._disposeContentDocument();
if(Client.isPrism){
Prism.disableCache();
}
this._isReloading=true;
this.getContentDocument().location.reload();
};
WindowBinding.prototype.getFrameElement=function(){
var _7c3=null;
if(this.shadowTree.iframe!=null){
_7c3=this.shadowTree.iframe;
}
return _7c3;
};
WindowBinding.prototype.getContentWindow=function(){
var _7c4=null,_7c5=this.getFrameElement();
if(_7c5!==null){
try{
_7c4=_7c5.contentWindow;
}
catch(e){
this.logger.error("WindowBinding#getContentWindow: strange IE9 error");
}
}
return _7c4;
};
WindowBinding.prototype.getContentDocument=function(){
var _7c6=null,win=this.getContentWindow();
if(win){
_7c6=win.document;
}
return _7c6;
};
WindowBinding.prototype.getRootBinding=function(){
var _7c8=null,doc=this.getContentDocument();
if(doc&&doc.body){
_7c8=UserInterface.getBinding(doc.body);
}
return _7c8;
};
WindowBinding.prototype.getPageBinding=function(){
return this._pageBinding;
};
WindowBinding.prototype.setHeight=function(_7ca){
this.bindingElement.style.height=_7ca+"px";
};
WindowBinding.prototype.hide=function(){
if(this.isVisible==true){
this.bindingElement.style.visibility="hidden";
this.isVisible=false;
}
};
WindowBinding.prototype.show=function(){
if(!this.isVisible){
this.bindingElement.style.visibility="visible";
this.isVisible=true;
}
};
WindowBinding.prototype.handleCrawler=function(_7cb){
WindowBinding.superclass.handleCrawler.call(this,_7cb);
if(_7cb.type==NodeCrawler.TYPE_DESCENDING){
var root=this.getRootBinding();
if(root!=null){
_7cb.nextNode=root.bindingElement;
}else{
_7cb.response=NodeCrawler.SKIP_CHILDREN;
}
}
};
WindowBinding.prototype.post=function(list,url){
var win=this.getContentWindow();
if(win.isPostBackDocument){
win.submit(list,url);
}else{
throw "Post aborted";
}
};
WindowBinding.newInstance=function(_7d0){
var _7d1=DOMUtil.createElementNS(Constants.NS_UI,"ui:window",_7d0);
var _7d2=UserInterface.registerBinding(_7d1,WindowBinding);
return _7d2;
};
PreviewWindowBinding.prototype=new WindowBinding;
PreviewWindowBinding.prototype.constructor=PreviewWindowBinding;
PreviewWindowBinding.superclass=WindowBinding.prototype;
PreviewWindowBinding.URL_FULL_STOP="${root}/content/misc/preview/stop.aspx";
PreviewWindowBinding.URL_ERROR="${root}/content/misc/preview/error.aspx";
PreviewWindowBinding.ACTION_RETURN="return";
PreviewWindowBinding.TIMEOUT_RETURN=parseInt(2300);
function PreviewWindowBinding(){
this.logger=SystemLogger.getLogger("PreviewWindowBinding");
this._postBackList=null;
this._postBackURL=null;
this._coverBinding=null;
this._windowBinding=null;
this._errorBinding=null;
this._hasFullStop=false;
this._isReturning=false;
this._loadhandler=null;
this._timeout=null;
return this;
}
PreviewWindowBinding.prototype.toString=function(){
return "[PreviewWindowBinding]";
};
PreviewWindowBinding.prototype.onBindingAttach=function(){
PreviewWindowBinding.superclass.onBindingAttach.call(this);
this.bindingElement.style.backgroundColor="white";
this._coverBinding=this.add(CoverBinding.newInstance(this.bindingDocument));
this._coverBinding.attach();
};
PreviewWindowBinding.prototype.onWindowLoaded=function(win){
if(this.getURL()!=WindowBinding.DEFAULT_URL){
if(!this._hasFullStop){
if(win.isPostBackDocument){
if(this._isReturning){
win.submit(this._postBackList,this._postBackURL);
this._isReturning=false;
}
}else{
this._coverBinding.hide();
}
if(!win.isDefaultDocument){
var self=this;
this._loadhandler={handleEvent:function(e){
self._coverBinding.show();
if(win.isPostBackDocument){
self._postBackList=win.postBackList;
self._postBackURL=win.postBackURL;
}else{
if(!win.isDefaultDocument){
self._fullStop();
}
}
}};
DOMEvents.addEventListener(win,DOMEvents.BEFOREUNLOAD,this._loadhandler);
}
}
}
PreviewWindowBinding.superclass.onWindowLoaded.call(this,win);
};
PreviewWindowBinding.prototype._fullStop=function(){
this._coverBinding.show();
if(this._windowBinding==null){
this._windowBinding=this._getWindowBinding();
this._windowBinding.setURL(PreviewWindowBinding.URL_FULL_STOP);
this._windowBinding.hide();
this._windowBinding.attach();
this._windowBinding.addActionListener(WindowBinding.ACTION_LOADED,{handleAction:function(_7d6){
_7d6.target.show();
_7d6.consume();
}});
}else{
this._windowBinding.show();
}
this._hasFullStop=true;
this.addActionListener(PreviewWindowBinding.ACTION_RETURN);
this.setURL(WindowBinding.DEFAULT_URL);
var self=this;
this._timeout=setTimeout(function(){
self._return();
},PreviewWindowBinding.TIMEOUT_RETURN);
};
PreviewWindowBinding.prototype.error=function(){
this._coverBinding.show();
if(this._errorBinding==null){
this._errorBinding=this._getWindowBinding();
this._errorBinding.setURL(PreviewWindowBinding.URL_ERROR);
this._errorBinding.hide();
this._errorBinding.attach();
this._errorBinding.addActionListener(WindowBinding.ACTION_LOADED,{handleAction:function(_7d8){
_7d8.target.show();
_7d8.consume();
}});
}else{
this._errorBinding.show();
}
this._hasError=true;
this.setURL(WindowBinding.DEFAULT_URL);
};
PreviewWindowBinding.prototype._getWindowBinding=function(){
var win=this._coverBinding.add(WindowBinding.newInstance(this.bindingDocument));
win.isFlexible=false;
win.bindingElement.style.position="absolute";
win.bindingElement.style.width="100%";
win.bindingElement.style.height="100%";
return win;
};
PreviewWindowBinding.prototype.handleAction=function(_7da){
PreviewWindowBinding.superclass.handleAction.call(this,_7da);
switch(_7da.type){
case PreviewWindowBinding.ACTION_RETURN:
this._return();
break;
}
};
PreviewWindowBinding.prototype._return=function(){
clearTimeout(this._timeout);
this._timeout=null;
this.removeActionListener(PreviewWindowBinding.ACTION_RETURN);
this._windowBinding.hide();
this._hasFullStop=false;
this._isReturning=true;
this.setURL(WindowBinding.POSTBACK_URL);
};
PreviewWindowBinding.prototype.reset=function(){
if(this._timeout!=null){
clearTimeout(this._timeout);
this._timeout=null;
}
if(this._errorBinding!=null){
if(this._errorBinding.isVisible){
this._errorBinding.hide();
}
}
if(this._windowBinding!=null){
if(this._windowBinding.isVisible){
this._windowBinding.hide();
}
}
if(this._loadhandler!=null){
if(this.getURL()!=WindowBinding.DEFAULT_URL){
DOMEvents.removeEventListener(this.getContentWindow(),DOMEvents.BEFOREUNLOAD,this._loadhandler);
this._loadhandler=null;
}
}
this._hasError=false;
this._hasFullStop=false;
this._isReturning=false;
this._coverBinding.show();
this.setURL(WindowBinding.DEFAULT_URL);
};
RadioGroupBinding.prototype=new Binding;
RadioGroupBinding.prototype.constructor=RadioGroupBinding;
RadioGroupBinding.superclass=Binding.prototype;
RadioGroupBinding.ACTION_SELECTIONCHANGED="radiogroupselectionchanged";
function RadioGroupBinding(){
this.logger=SystemLogger.getLogger("RadioGroupBinding");
this._checkedRadioBinding=null;
this._radioButtonBindings=null;
this._isUpToDate=false;
return this;
}
RadioGroupBinding.prototype.toString=function(){
return "[RadioGroupBinding]";
};
RadioGroupBinding.prototype.onBindingRegister=function(){
RadioGroupBinding.superclass.onBindingRegister.call(this);
this.addActionListener(ButtonBinding.ACTION_RADIOBUTTON_ATTACHED,this);
this.addActionListener(ButtonBinding.ACTION_COMMAND,this);
};
RadioGroupBinding.prototype.onBindingInitialize=function(){
var _7db=null;
this._getRadioButtonBindings().each(function(_7dc){
if(_7dc.getProperty("ischecked")){
_7db=_7dc;
return false;
}else{
return true;
}
});
if(_7db){
this._checkedRadioBinding=_7db;
}
RadioGroupBinding.superclass.onBindingInitialize.call(this);
};
RadioGroupBinding.prototype.handleAction=function(_7dd){
RadioGroupBinding.superclass.handleAction.call(this,_7dd);
var _7de=_7dd.target;
switch(_7dd.type){
case ButtonBinding.ACTION_RADIOBUTTON_ATTACHED:
this._isUpToDate=false;
_7dd.consume();
break;
case ButtonBinding.ACTION_COMMAND:
if(_7de.isRadioButton&&!_7de.isDisabled){
if(this._checkedRadioBinding){
this._unCheckRadioBindingsExcept(_7de);
}
this._checkedRadioBinding=_7de;
this.dispatchAction(RadioGroupBinding.ACTION_SELECTIONCHANGED);
_7dd.consume();
}
break;
}
};
RadioGroupBinding.prototype.setCheckedButtonBinding=function(_7df,_7e0){
if(_7df instanceof RadioDataBinding){
_7df=_7df.getButton();
}
if(_7df.isRadioButton){
switch(_7e0){
case true:
this._unCheckRadioBindingsExcept(_7df);
this._checkedRadioBinding=_7df;
_7df.check(true);
break;
default:
_7df.check();
break;
}
}
};
RadioGroupBinding.prototype.getCheckedButtonBinding=function(){
return this._checkedRadioBinding;
};
RadioGroupBinding.prototype._unCheckRadioBindingsExcept=function(_7e1){
var _7e2=this._getRadioButtonBindings();
_7e2.each(function(_7e3){
if(_7e3.isChecked&&_7e3!=_7e1){
_7e3.uncheck(true);
}
});
};
RadioGroupBinding.prototype._getRadioButtonBindings=function(){
if(this._radioButtonBindings===null||!this._isUpToDate){
var _7e4=new Crawler();
var list=new List();
_7e4.addFilter(function(_7e6){
var _7e7=true;
var _7e8=UserInterface.getBinding(_7e6);
if(_7e8 instanceof RadioGroupBinding){
_7e7=NodeCrawler.SKIP_CHILDREN;
}else{
if(_7e8 instanceof ButtonBinding&&_7e8.isRadioButton){
list.add(_7e8);
}
}
return _7e7;
});
_7e4.crawl(this.bindingElement);
this._radioButtonBindings=list;
}
return this._radioButtonBindings;
};
RadioGroupBinding.newInstance=function(_7e9){
var _7ea=DOMUtil.createElementNS(Constants.NS_UI,"ui:radiogroup",_7e9);
return UserInterface.registerBinding(_7ea,RadioGroupBinding);
};
DataBindingMap.prototype=new Map;
DataBindingMap.prototype.constructor=DataBindingMap;
DataBindingMap.superclass=Map.prototype;
DataBindingMap.TYPE_VALUE="databindingmap valuetype";
DataBindingMap.TYPE_RESULT="databindingmap resulttype";
function DataBindingMap(map){
this._map=map?map:{};
this.type=DataBindingMap.TYPE_RESULT;
}
DataInputBinding.prototype=new DataBinding;
DataInputBinding.prototype.constructor=DataInputBinding;
DataInputBinding.superclass=DataBinding.prototype;
function DataInputBinding(){
this.logger=SystemLogger.getLogger("DataInputBinding");
this.type=null;
this.isRequired=false;
this.expression=null;
this.isPassword=false;
this._value=null;
this._isValid=true;
this._isInvalidBecauseRequired=false;
this._isInvalidBecauseMinLength==true;
this._isInvalidBecauseMinLength==true;
this._isInvalidBecauseMaxLength==true;
this._sessionResult=null;
this.isDisabled=false;
this.isReadOnly=false;
this._dirtyinterval=null;
this._isAutoSelect=false;
this.minlength=null;
this.maxlength=null;
this._isAutoPost=false;
this._timeout=null;
this._time=1500;
this.crawlerFilters=new List([DocumentCrawler.ID,FocusCrawler.ID]);
return this;
}
DataInputBinding.prototype.toString=function(){
return "[DataInputBinding]";
};
DataInputBinding.prototype.onBindingRegister=function(){
DataInputBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["value"]=this.setValue;
};
DataInputBinding.prototype.onBindingAttach=function(){
DataInputBinding.superclass.onBindingAttach.call(this);
this._parseDOMProperties();
this._buildDOMContent();
this._attachDOMEvents();
};
DataInputBinding.prototype.onBindingDispose=function(){
DataInputBinding.superclass.onBindingDispose.call(this);
if(Client.isExplorer&&this.isFocused){
this.unsubscribe(BroadcastMessages.MOUSEEVENT_MOUSEDOWN,this);
}
if(this._dirtyinterval){
window.clearInterval(this._dirtyinterval);
}
if(!this._isValid){
this.dispatchAction(Binding.ACTION_VALID);
}
};
DataInputBinding.prototype._parseDOMProperties=function(){
this.type=this.getProperty("type");
this.isRequired=this.getProperty("required");
this.isPassword=this.getProperty("password")==true;
this.minlength=this.getProperty("minlength");
this.maxlength=this.getProperty("maxlength");
this._isAutoPost=this.getProperty("autopost")==true;
var _7ec=this.getProperty("regexrule");
if(_7ec!=null){
this.expression=new RegExp(_7ec);
}
var _7ed=this.getProperty("onbindingblur");
if(_7ed!=null){
this.onblur=function(){
Binding.evaluate(_7ed,this);
};
}
var _7ee=this.getProperty("onvaluechange");
if(_7ee!=null){
this.onValueChange=function(){
Binding.evaluate(_7ee,this);
};
}
if(this.error==null&&this.type!=null){
var _7ef=DataBinding.errors[this.type];
if(_7ef!=null){
this.error=_7ef;
}
}
};
DataInputBinding.prototype._buildDOMContent=function(){
this.shadowTree.input=this._getInputElement();
this.shadowTree.box=DOMUtil.createElementNS(Constants.NS_UI,"ui:box",this.bindingDocument);
if(Client.isExplorer==true){
this.bindingElement.hideFocus=true;
}
var _7f0=this.getProperty("value");
if(_7f0!=null){
this.setValue(String(_7f0));
}
var name=this.getProperty("name");
if(name!=null){
this.setName(name);
}
var _7f2=this.getProperty("isdisabled");
if(_7f2==true){
this.setDisabled(true);
}
var _7f3=this.getProperty("readonly");
if(_7f3==true){
this.setReadOnly(true);
}
var _7f4=this.getProperty("autoselect");
if(_7f4==true){
this._isAutoSelect=true;
}
this.shadowTree.box.appendChild(this.shadowTree.input);
this.bindingElement.appendChild(this.shadowTree.box);
this.shadowTree.input.setAttribute("spellcheck","false");
if(this.hasCallBackID()){
}else{
if(this._isAutoPost){
this.logger.warn("Autopost "+this.toString()+" without a callbackid?");
}
}
};
DataInputBinding.prototype._getInputElement=function(){
var _7f5=DOMUtil.createElementNS(Constants.NS_XHTML,"input",this.bindingDocument);
_7f5.type=this.isPassword==true?"password":"text";
_7f5.tabIndex=-1;
return _7f5;
};
DataInputBinding.prototype._attachDOMEvents=function(){
DOMEvents.addEventListener(this.shadowTree.input,DOMEvents.FOCUS,this);
DOMEvents.addEventListener(this.shadowTree.input,DOMEvents.BLUR,this);
DOMEvents.addEventListener(this.shadowTree.input,DOMEvents.KEYDOWN,this);
DOMEvents.addEventListener(this.shadowTree.input,DOMEvents.KEYPRESS,this);
};
DataInputBinding.prototype.handleEvent=function(e){
DataInputBinding.superclass.handleEvent.call(this,e);
if(this.isFocusable==true){
switch(e.type){
case DOMEvents.FOCUS:
case DOMEvents.BLUR:
this._handleFocusAndBlur(e.type==DOMEvents.FOCUS);
break;
case DOMEvents.KEYPRESS:
switch(e.keyCode){
case KeyEventCodes.VK_BACK:
case KeyEventCodes.VK_INSERT:
case KeyEventCodes.VK_DELETE:
this._testDirty();
break;
}
break;
case DOMEvents.KEYDOWN:
this._testDirty();
switch(e.keyCode){
case KeyEventCodes.VK_ENTER:
this._handleEnterKey(e);
break;
case KeyEventCodes.VK_ESCAPE:
DOMEvents.preventDefault(e);
break;
}
if(this.isFocusable&&this._isAutoPost){
if(this._timeout!=null){
top.window.clearTimeout(this._timeout);
}
var self=this;
this._timeout=top.window.setTimeout(function(){
if(Binding.exists(self)){
self.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
}
},this._time);
}
break;
}
}
};
DataInputBinding.prototype._handleFocusAndBlur=function(_7f8){
if(_7f8){
this.focus(true);
this.bindingWindow.standardEventHandler.enableNativeKeys();
if(Client.isExplorer==true){
var self=this;
setTimeout(function(){
if(Binding.exists(self)==true){
self.subscribe(BroadcastMessages.MOUSEEVENT_MOUSEDOWN);
}
},0);
}
}else{
this.blur(true);
this.bindingWindow.standardEventHandler.disableNativeKeys();
if(Client.isExplorer==true){
this.unsubscribe(BroadcastMessages.MOUSEEVENT_MOUSEDOWN);
}
}
};
DataInputBinding.prototype._handleEnterKey=function(e){
DOMEvents.preventDefault(e);
DOMEvents.stopPropagation(e);
EventBroadcaster.broadcast(BroadcastMessages.KEY_ENTER);
};
DataInputBinding.prototype.handleBroadcast=function(_7fb,arg){
DataInputBinding.superclass.handleBroadcast.call(this,_7fb,arg);
var self=this;
switch(_7fb){
case BroadcastMessages.MOUSEEVENT_MOUSEDOWN:
if(Client.isExplorer==true){
var _7fe=DOMEvents.getTarget(arg);
if(_7fe!=this.shadowTree.input){
setTimeout(function(){
if(Binding.exists(self)==true){
if(self.isFocused==true){
self.blur();
}
}
},100);
}
}
break;
}
};
DataInputBinding.prototype.focus=function(_7ff){
if(!this.isFocused&&!this.isReadOnly&&!this.isDisabled){
DataInputBinding.superclass.focus.call(this);
if(this.isFocused==true){
this._focus();
if(this._isAutoSelect==true){
if(_7ff){
var self=this,_801=this.bindingElement,_802={handleEvent:function(){
self.select();
DOMEvents.removeEventListener(_801,DOMEvents.MOUSEUP,this);
}};
DOMEvents.addEventListener(_801,DOMEvents.MOUSEUP,_802);
}else{
this.select();
}
}
this.onfocus();
if(!_7ff){
var _803=this.shadowTree.input;
setTimeout(function(){
FocusBinding.focusElement(_803);
},0);
}
}
}
};
DataInputBinding.prototype.select=function(){
var _804=this.shadowTree.input;
setTimeout(function(){
if(Client.isExplorer==true){
var _805=_804.createTextRange();
_805.moveStart("character",0);
_805.moveEnd("character",_804.value.length);
_805.select();
}else{
_804.setSelectionRange(0,_804.value.length);
}
},0);
};
DataInputBinding.prototype.blur=function(_806){
if(this.isFocused==true){
DataInputBinding.superclass.blur.call(this);
if(!_806){
this.shadowTree.input.blur();
}
this._blur();
}
};
DataInputBinding.prototype._focus=function(){
if(!this._isValid){
if(this.isPassword){
if(Client.isMozilla){
this.shadowTree.input.type="password";
this.setValue(this._value);
}
}else{
this.setValue(this._value);
}
this.shadowTree.input.className="";
}
this._sessionResult=this.getResult();
var self=this;
this._dirtyinterval=window.setInterval(function(){
if(Binding.exists(self)==true){
self.checkDirty();
if(!self._isValid){
self.validate(true);
}
}else{
window.clearInterval(self._dirtyinterval);
self._dirtyinterval=null;
}
},500);
};
DataInputBinding.prototype._blur=function(){
if(this._dirtyinterval){
window.clearInterval(this._dirtyinterval);
this._dirtyinterval=null;
}
this.checkDirty();
this.validate(true);
if(Types.isFunction(this.onblur)){
this.onblur();
}
if(this._isValid){
if(this.getResult()!=this._sessionResult){
this.onValueChange();
}
}
};
DataInputBinding.prototype.onfocus=function(){
};
DataInputBinding.prototype.onblur=function(){
};
DataInputBinding.prototype.checkDirty=function(){
if(!this.isDirty){
if(this.getResult()!=this._sessionResult){
this.dirty();
}
}
};
DataInputBinding.prototype._testDirty=function(){
var val=this.getValue();
var self=this;
setTimeout(function(){
if(Binding.exists(self)){
if(self.getValue()!=val){
self.dirty();
}
}
},0);
};
DataInputBinding.prototype.onValueChange=function(){
};
DataInputBinding.prototype.validate=function(_80a){
if(_80a==true||this._isValid){
var _80b=this.isValid();
if(_80b!=this._isValid){
this._isValid=_80b;
if(!_80b){
this.attachClassName(DataBinding.CLASSNAME_INVALID);
this._value=this.getValue();
this.dispatchAction(Binding.ACTION_INVALID);
if(!this.isFocused){
var _80c=null;
if(this._isInvalidBecauseRequired==true){
_80c=DataBinding.warnings["required"];
}else{
if(this._isInvalidBecauseMinLength==true){
_80c=DataBinding.warnings["minlength"];
_80c=_80c.replace("${count}",String(this.minlength));
}else{
if(this._isInvalidBecauseMaxLength==true){
_80c=DataBinding.warnings["maxlength"];
_80c=_80c.replace("${count}",String(this.maxlength));
}else{
_80c=DataBinding.warnings[this.type];
}
}
}
this.shadowTree.input.className=DataBinding.CLASSNAME_WARNING;
if(_80c!=null){
if(this.isPassword){
if(Client.isMozilla){
this.shadowTree.input.type="text";
this.setValue(_80c);
}else{
alert(_80c);
}
}else{
this.setValue(_80c);
}
}
}
}else{
this._normalizeToValid();
}
}
}
return this._isValid;
};
DataInputBinding.prototype._normalizeToValid=function(){
if(this._isValid){
if(this._timeout!=null){
top.window.clearTimeout(this._timeout);
}
if(this.hasClassName(DataBinding.CLASSNAME_INVALID)){
this.detachClassName(DataBinding.CLASSNAME_INVALID);
}
this.shadowTree.input.className="";
this.dispatchAction(Binding.ACTION_VALID);
}
};
DataInputBinding.prototype.isValid=function(){
var _80d=true;
this._isInvalidBecauseRequired=false;
this._isInvalidBecauseMinLength=false;
this._isInvalidaBecuaseMaxLength=false;
var _80e=this.getValue();
if(_80e==""){
if(this.isRequired==true){
_80d=false;
this._isInvalidBecauseRequired=true;
}
}else{
if(this.type!=null){
var _80f=DataBinding.expressions[this.type];
if(!_80f.test(_80e)){
_80d=false;
}
}else{
if(this.expression!=null){
if(!this.expression.test(_80e)){
_80d=false;
}
}
}
}
if(_80d&&this.minlength!=null){
if(_80e.length<this.minlength){
this._isInvalidBecauseMinLength=true;
_80d=false;
}
}
if(_80d&&this.maxlength!=null){
if(_80e.length>this.maxlength){
this._isInvalidBecauseMaxLength=true;
_80d=false;
}
}
return _80d;
};
DataInputBinding.prototype.setDisabled=function(_810){
if(_810!=this.isDisabled){
if(_810){
this.attachClassName("isdisabled");
}else{
this.detachClassName("isdisabled");
}
var _811=this.shadowTree.input;
if(_810){
this._disabledHandler={handleEvent:function(e){
DOMEvents.preventDefault(e);
DOMEvents.stopPropagation(e);
}};
DOMEvents.addEventListener(_811,DOMEvents.MOUSEDOWN,this._disabledHandler);
}else{
DOMEvents.removeEventListener(_811,DOMEvents.MOUSEDOWN,this._disabledHandler);
this._disabledHandler=null;
}
if(Client.isExplorer){
this.shadowTree.input.disabled=_810;
this.shadowTree.input.unselectable=_810?"on":"off";
}
this.isDisabled=_810;
this.isFocusable=!_810;
this.dispatchAction(FocusBinding.ACTION_UPDATE);
}
};
DataInputBinding.prototype.setReadOnly=function(_813){
if(_813!=this.isReadOnly){
if(_813){
this.attachClassName("readonly");
}else{
this.detachClassName("readonly");
}
this.shadowTree.input.readOnly=_813;
this.isReadOnly=_813;
}
};
DataInputBinding.prototype.disable=function(){
if(!this.isDisabled){
this.setDisabled(true);
}
};
DataInputBinding.prototype.enable=function(){
if(this.isDisabled){
this.setDisabled(false);
}
};
DataInputBinding.prototype.handleElement=function(_814){
return true;
};
DataInputBinding.prototype.updateElement=function(_815){
var _816=_815.getAttribute("value");
var _817=_815.getAttribute("type");
var _818=_815.getAttribute("maxlength");
var _819=_815.getAttribute("minlength");
if(_816==null){
_816="";
}
var _81a=this.bindingWindow.UpdateManager;
if(this.getValue()!=_816){
_81a.report("Property [value] updated on binding \""+this.getID()+"\"");
this.setValue(_816);
}
if(this.type!=_817){
_81a.report("Property [type] updated on binding \""+this.getID()+"\"");
this.type=_817;
}
if(this.maxlength!=_818){
_81a.report("Property [maxlength] updated on binding \""+this.getID()+"\"");
this.maxlength=_818;
}
if(this.minlength!=_819){
_81a.report("Property [minlength] updated on binding \""+this.getID()+"\"");
this.minlength=_819;
}
return true;
};
DataInputBinding.prototype.manifest=function(){
if(!this._isValid){
this.setValue("");
this._isValid=true;
this._normalizeToValid();
}
};
DataInputBinding.prototype.clean=function(){
DataInputBinding.superclass.clean.call(this);
this._sessionResult=this.getResult();
};
DataInputBinding.prototype.setValue=function(_81b){
if(_81b===null){
_81b="";
}
if(_81b!=this.getValue()){
this.setProperty("value",_81b);
if(this.shadowTree.input!=null){
this.shadowTree.input.value=String(_81b);
}
}
};
DataInputBinding.prototype.getValue=function(){
var _81c=null;
if(this.shadowTree.input!=null){
_81c=this.shadowTree.input.value;
}else{
_81c=this.getProperty("value");
}
return _81c;
};
DataInputBinding.prototype.setName=function(name){
DataInputBinding.superclass.setName.call(this,name);
if(this.isAttached==true){
this.shadowTree.input.name=name;
}
};
DataInputBinding.prototype.getResult=function(){
var _81e=this.getValue();
switch(this.type){
case DataBinding.TYPE_NUMBER:
case DataBinding.TYPE_INTEGER:
_81e=Number(_81e);
break;
}
return _81e;
};
DataInputBinding.prototype.setResult=DataInputBinding.prototype.setValue;
DataInputBinding.newInstance=function(_81f){
var _820=DOMUtil.createElementNS(Constants.NS_UI,"ui:datainput",_81f);
return UserInterface.registerBinding(_820,DataInputBinding);
};
TextBoxBinding.prototype=new DataInputBinding;
TextBoxBinding.prototype.constructor=TextBoxBinding;
TextBoxBinding.superclass=DataInputBinding.prototype;
function TextBoxBinding(){
this.logger=SystemLogger.getLogger("TextBoxBinding");
this._hasWordWrap=true;
return this;
}
TextBoxBinding.prototype.toString=function(){
return "[TextBoxBinding]";
};
TextBoxBinding.prototype._buildDOMContent=function(){
var _821=DOMUtil.getElementsByTagName(this.bindingElement,"textarea").item(0);
if(_821!=null){
this.setValue(_821.value);
_821.parentNode.removeChild(_821);
}
TextBoxBinding.superclass._buildDOMContent.call(this);
this.shadowTree.input.setAttribute("spellcheck","false");
if(!this._hasWordWrap){
this.shadowTree.input.setAttribute("wrap","off");
}
};
TextBoxBinding.prototype._getInputElement=function(){
var _822=DOMUtil.createElementNS(Constants.NS_XHTML,"textarea",this.bindingDocument);
_822.tabIndex=-1;
return _822;
};
TextBoxBinding.prototype.handleElement=function(_823){
return true;
};
TextBoxBinding.prototype.updateElement=function(_824){
var _825,area=_824.getElementsByTagName("textarea").item(0);
if(area!=null&&area.hasChildNodes()){
_825=DOMUtil.getTextContent(area);
}
if(_825==null){
_825="";
}
var _827=this.bindingWindow.UpdateManager;
if(this.getValue()!=_825){
_827.report("Property [value] updated on binding \""+this.getID()+"\"");
this.setValue(_825);
}
var _828=_824.getAttribute("type");
if(this.type!=_828){
_827.report("Property [type] updated on binding \""+this.getID()+"\"");
this.type=_828;
}
return true;
};
TextBoxBinding.prototype._handleEnterKey=function(e){
DOMEvents.stopPropagation(e);
};
EditorTextBoxBinding.prototype=new TextBoxBinding;
EditorTextBoxBinding.prototype.constructor=EditorTextBoxBinding;
EditorTextBoxBinding.superclass=TextBoxBinding.prototype;
function EditorTextBoxBinding(){
this.logger=SystemLogger.getLogger("EditorTextBoxBinding");
this._hasWordWrap=false;
}
EditorTextBoxBinding.prototype.toString=function(){
return "[EditorTextBoxBinding]";
};
EditorTextBoxBinding.prototype.handleEvent=function(e){
if(this.isFocusable==true){
switch(e.type){
case DOMEvents.FOCUS:
case DOMEvents.BLUR:
this._handleFocusAndBlur(e.type==DOMEvents.FOCUS);
break;
case DOMEvents.KEYDOWN:
this._handleKeyEvent(e);
break;
}
}
};
EditorTextBoxBinding.prototype._handleKeyEvent=function(e){
switch(e.keyCode){
case KeyEventCodes.VK_TAB:
this._handleTabKey(e.shiftKey);
DOMEvents.stopPropagation(e);
DOMEvents.preventDefault(e);
break;
case KeyEventCodes.VK_ENTER:
this._handleEnterKey();
DOMEvents.stopPropagation(e);
DOMEvents.preventDefault(e);
break;
case KeyEventCodes.VK_ESCAPE:
DOMEvents.preventDefault(e);
break;
}
};
EditorTextBoxBinding.prototype._handleTabKey=Binding.ABSTRACT_METHOD;
EditorTextBoxBinding.prototype._handleEnterKey=Binding.ABSTRACT_METHOD;
IEEditorTextBoxBinding.prototype=new EditorTextBoxBinding;
IEEditorTextBoxBinding.prototype.constructor=IEEditorTextBoxBinding;
IEEditorTextBoxBinding.superclass=EditorTextBoxBinding.prototype;
function IEEditorTextBoxBinding(){
this.logger=SystemLogger.getLogger("IEEditorTextBoxBinding");
}
IEEditorTextBoxBinding.prototype.toString=function(){
return "[IEEditorTextBoxBinding]";
};
IEEditorTextBoxBinding.prototype._handleTabKey=function(_82c){
var _82d=this.bindingDocument.selection.createRange();
var _82e=_82d.text=="";
if(_82e&&!_82c){
_82d.text="\t";
}else{
var text="";
var _830=_82d.text.length;
while((_82d.moveStart("word",-1)&&_82d.text.charAt(1)!="\n")){
}
_82d.moveStart("character",1);
var _831=0;
var i=0,line,_834=_82d.text.split("\n");
while((line=_834[i++])!=null){
if(_82c){
line=line.replace(/^(\s)/mg,"");
_831++;
}else{
line=line.replace(/^(.)/mg,"\t$1");
}
text+=line+(_834[i+1]?"\n":"");
}
_82d.text=text;
_82d.moveStart("character",-_830);
if(_82c){
_82d.moveStart("character",2*_834.length-2);
}
_82d.select();
}
};
IEEditorTextBoxBinding.prototype._handleEnterKey=function(){
var _835=this.bindingDocument.selection.createRange();
var _836=_835.duplicate();
while((_836.moveStart("word",-1)&&_836.text.indexOf("\n")==-1)){
}
_836.moveStart("character",1);
_835.text="\n"+_836.text.match(/^(\s)*/)[0]+"!";
_835.moveStart("character",-1);
_835.select();
_835.text="";
_835.select();
};
MozEditorTextBoxBinding.prototype=new EditorTextBoxBinding;
MozEditorTextBoxBinding.prototype.constructor=MozEditorTextBoxBinding;
MozEditorTextBoxBinding.superclass=EditorTextBoxBinding.prototype;
function MozEditorTextBoxBinding(){
this.logger=SystemLogger.getLogger("MozEditorTextBoxBinding");
return this;
}
MozEditorTextBoxBinding.prototype.toString=function(){
return "[MozEditorTextBoxBinding]";
};
MozEditorTextBoxBinding.prototype._handleTabKey=function(_837){
var _838;
var _839;
var oss;
var osy;
var i;
var fnd;
var _83e=this._getSelectedText();
var el=this.shadowTree.input;
_838=el.scrollLeft;
_839=el.scrollTop;
if(!_83e.match(/\n/)){
oss=el.selectionStart;
el.value=el.value.substr(0,el.selectionStart)+"\t"+el.value.substr(el.selectionEnd);
el.selectionStart=oss+1;
el.selectionEnd=oss+1;
}else{
oss=el.selectionStart;
osy=el.selectionEnd;
fnd=0;
for(i=oss-1;i>=0;i--){
if(el.value.charAt(i)=="\n"){
oss=i+1;
fnd=1;
break;
}
}
if(fnd==0){
oss=0;
}
fnd=0;
for(i=osy;i<el.value.length;i++){
if(el.value.charAt(i)=="\n"){
osy=i;
fnd=1;
break;
}
}
if(fnd==0){
osy=el.value.length;
}
el.selectionStart=oss;
el.selectionEnd=osy;
_83e=this._getSelectedText();
if(_837){
ntext=_83e.replace(/^(\s)/mg,"");
}else{
ntext=_83e.replace(/^(.)/mg,"\t$1");
}
el.value=el.value.substr(0,el.selectionStart)+ntext+el.value.substr(el.selectionEnd);
el.selectionStart=oss;
el.selectionEnd=osy+(ntext.length-_83e.length);
}
el.scrollLeft=_838;
el.scrollTop=_839;
};
MozEditorTextBoxBinding.prototype._handleEnterKey=function(){
var _840;
var _841;
var oss;
var osy;
var el=this.shadowTree.input;
_840=el.scrollLeft;
_841=el.scrollTop;
oss=el.selectionStart;
osy=el.selectionEnd;
var bfs=el.value.substr(0,el.selectionStart);
var bfsm=bfs.split(/\r|\n/g);
var spm=bfsm[bfsm.length-1].match(/^(\s)*/);
el.value=el.value.substr(0,el.selectionStart)+"\n"+spm[0]+el.value.substr(el.selectionEnd);
el.selectionStart=oss+1+spm[0].length;
el.selectionEnd=oss+1+spm[0].length;
el.scrollLeft=_840;
el.scrollTop=_841;
};
MozEditorTextBoxBinding.prototype._getSelectedText=function(){
var _848=this.shadowTree.input.value;
var _849=this.shadowTree.input.selectionStart;
var end=this.shadowTree.input.selectionEnd;
return _848.substr(_849,end-_849);
};
SelectorBinding.prototype=new DataBinding;
SelectorBinding.prototype.constructor=SelectorBinding;
SelectorBinding.superclass=DataBinding.prototype;
SelectorBinding.INDICATOR_IMAGE=Resolver.resolve("${skin}/fields/selectorindicator.png");
SelectorBinding.ACTION_SELECTIONCHANGED="selectorselectionchanged";
SelectorBinding.ACTION_COMMAND="selectorcommand";
SelectorBinding.CLASSNAME_POPUP="selectorpopup";
function SelectorBinding(){
this.logger=SystemLogger.getLogger("SelectorBinding");
this.type=null;
this._buttonBinding=null;
this._popupBinding=null;
this._menuBodyBinding=null;
this._selectionValue=null;
this.selections=null;
this.isDisabled=false;
this.label=null;
this.value=null;
this.width=null;
this.defaultSelection=null;
this.image=null;
this.imageHover=null;
this.imageActive=null;
this.imageDisabled=null;
this.isDirty=false;
this._isUpToDate=false;
this._hasKeyboard=false;
this.BUTTON_IMPLEMENTATION=ClickButtonBinding;
this.MENUITEM_IMPLEMENTATION=MenuItemBinding;
this._isImageLayout=true;
this.isRequired=false;
this._isValid=true;
this.crawlerFilters=new List([DocumentCrawler.ID,FocusCrawler.ID]);
}
SelectorBinding.prototype.toString=function(){
return "[SelectorBinding]";
};
SelectorBinding.prototype.onBindingAttach=function(){
SelectorBinding.superclass.onBindingAttach.call(this);
this.selections=new List();
this.parseDOMProperties();
this.buildDOMContent();
this.addEventListener(DOMEvents.FOCUS);
this.addActionListener(ButtonBinding.ACTION_COMMAND);
var _84b=this.getProperty("isdisabled");
if(this.isDisabled||_84b){
this.disable();
}
};
SelectorBinding.prototype.onBindingDispose=function(){
SelectorBinding.superclass.onBindingDispose.call(this);
if(this._popupBinding&&Binding.exists(this._popupBinding)){
this._popupBinding.dispose();
}
if(this._hasKeyboard==true){
this._releaseKeyboard();
}
};
SelectorBinding.prototype.parseDOMProperties=function(){
var type=this.getProperty("type");
var _84d=this.getProperty("label");
var _84e=this.getProperty("value");
var _84f=this.getProperty("width");
var _850=this.getProperty("onchange");
var _851=this.getProperty("required")==true;
if(!this.type&&type){
this.type=type;
}
if(!this.label&&_84d!=null){
this.label=_84d;
}
if(!this.value&&_84e!=null){
this.value=_84e;
}
if(!this.width&&_84f){
this.width=_84f;
}
if(_851){
this.isRequired=true;
}
if(_850){
this.onValueChange=function(){
Binding.evaluate(_850,this);
};
}
this._computeImageProfile();
};
SelectorBinding.prototype._computeImageProfile=function(){
Binding.imageProfile(this);
};
SelectorBinding.prototype.buildDOMContent=function(){
this.buildButton();
this.buildIndicator();
this.buildPopup();
this.buildSelections();
this.bindingElement.tabIndex=0;
if(Client.isExplorer==true){
this.bindingElement.hideFocus=true;
}
};
SelectorBinding.prototype.buildFormField=function(){
var _852=DOMUtil.createElementNS(Constants.NS_XHTML,"input",this.bindingDocument);
_852.name=this.getName();
_852.value=this.getValue();
_852.type="hidden";
if(this.hasCallBackID()){
_852.id=this.getCallBackID();
}
this.shadowTree.input=_852;
this.bindingElement.appendChild(_852);
};
SelectorBinding.prototype.buildButton=function(){
var _853=this.BUTTON_IMPLEMENTATION;
var _854=this.add(_853.newInstance(this.bindingDocument));
if(this.imageProfile!=null){
_854.imageProfile=this.imageProfile;
}
if(this.width!=null){
_854.setWidth(this.width);
}
this._buttonBinding=_854;
this.shadowTree.button=_854;
_854.attach();
};
SelectorBinding.prototype.buildIndicator=function(){
var img=this.bindingDocument.createElement("img");
img.src=SelectorBinding.INDICATOR_IMAGE;
img.className="selectorindicatorimage";
this._buttonBinding.bindingElement.appendChild(img);
this.shadowTree.selectorindicatorimage=img;
};
SelectorBinding.prototype.buildPopup=function(){
var _856=top.app.bindingMap.selectorpopupset;
var doc=_856.bindingDocument;
var _858=_856.add(PopupBinding.newInstance(doc));
var _859=_858.add(MenuBodyBinding.newInstance(doc));
this._popupBinding=_858;
this._menuBodyBinding=_859;
this._popupBinding.attachClassName(SelectorBinding.CLASSNAME_POPUP);
this._popupBinding.attachRecursive();
this._popupBinding.type=PopupBinding.TYPE_FIXED;
_858.attachClassName("selectorpopup");
_858.addActionListener(PopupBinding.ACTION_SHOW,this);
_858.addActionListener(MenuItemBinding.ACTION_COMMAND,this);
_858.addActionListener(PopupBinding.ACTION_HIDE,this);
this._buttonBinding.setPopup(_858);
};
SelectorBinding.prototype.buildSelections=function(){
if(this.defaultSelection==null&&(this.label||this.value)){
this.defaultSelection=new SelectorBindingSelection(this.label,this.value,true,null);
}
var list=this._getSelectionsList();
this.populateFromList(list);
};
SelectorBinding.prototype._getSelectionsList=function(){
var list=new List();
var _85c=DOMUtil.getElementsByTagName(this.bindingElement,"selection");
new List(_85c).each(function(_85d){
var _85e=_85d.getAttribute("label");
var _85f=_85d.getAttribute("value");
var _860=_85d.getAttribute("selected");
var _861=_85d.getAttribute("image");
var _862=_85d.getAttribute("image-hover");
var _863=_85d.getAttribute("image-active");
var _864=_85d.getAttribute("image-disabled");
var _865=null;
if(_861||_862||_863||_864){
_865=new ImageProfile({image:_861,imageHover:_862,imageActive:_863,imageDisabled:_864});
}
list.add(new SelectorBindingSelection(_85e?_85e:null,_85f?_85f:null,_860&&_860=="true",_865));
});
return list;
};
SelectorBinding.prototype.populateFromList=function(list){
if(this.isAttached){
this.clear();
if(list.hasEntries()){
var _867=null;
while(list.hasNext()){
var _868=list.getNext();
var item=this.addSelection(_868);
if(!_867){
_867=item;
}
}
if(!this._selectedItemBinding){
this.select(_867,true);
}
this.shadowTree.selectorindicatorimage.style.display="block";
}else{
this.shadowTree.selectorindicatorimage.style.display="none";
}
}else{
throw "Could not populate unattached selector";
}
};
SelectorBinding.prototype.addSelection=function(_86a,_86b){
var _86c=this.MENUITEM_IMPLEMENTATION;
var _86d=this._menuBodyBinding;
var _86e=_86d.bindingDocument;
var _86f=_86c.newInstance(_86e);
_86f.imageProfile=_86a.imageProfile;
_86f.setLabel(_86a.label);
_86f.selectionValue=_86a.value;
if(_86a.isSelected){
this.select(_86f,true);
}
_86a.menuItemBinding=_86f;
if(_86b){
_86d.addFirst(_86f);
this.selections.addFirst(_86a);
}else{
_86d.add(_86f);
this.selections.add(_86a);
}
this._isUpToDate=false;
return _86f;
};
SelectorBinding.prototype.addSelectionFirst=function(_870){
return this.addSelection(_870,true);
};
SelectorBinding.prototype.clear=function(_871){
this._selectedItemBinding=null;
if(this._popupBinding){
this._popupBinding.clear();
this.selections.clear();
if(!_871&&this.defaultSelection!=null){
var _872=this.addSelection(this.defaultSelection);
this.select(_872,true);
}
}
};
SelectorBinding.prototype.clearAll=function(){
this.clear(true);
};
SelectorBinding.prototype.disable=function(){
this.setDisabled(true);
};
SelectorBinding.prototype.enable=function(){
this.setDisabled(false);
};
SelectorBinding.prototype.focus=function(){
if(!this.isFocused){
DataBinding.prototype.focus.call(this);
if(this.isFocused==true){
FocusBinding.focusElement(this.bindingElement);
this._grabKeyboard();
}
}
};
SelectorBinding.prototype.blur=function(){
if(this.isFocused==true){
DataBinding.prototype.blur.call(this);
this._releaseKeyboard();
if(this._popupBinding.isVisible){
this._popupBinding.hide();
}
}
};
SelectorBinding.prototype._grabKeyboard=function(){
if(!this._hasKeyboard){
this.subscribe(BroadcastMessages.KEY_ARROW);
this._hasKeyboard=true;
}
};
SelectorBinding.prototype._releaseKeyboard=function(){
if(this._hasKeyboard==true){
this.unsubscribe(BroadcastMessages.KEY_ARROW);
this._hasKeyboard=false;
}
};
SelectorBinding.prototype.setDisabled=function(_873){
if(this.isAttached==true){
var _874=this._buttonBinding;
this.shadowTree.selectorindicatorimage.style.display=_873?"none":"block";
_874.setDisabled(_873);
}
if(_873){
this.setProperty("isdisabled",true);
}else{
this.deleteProperty("isdisabled");
}
};
SelectorBinding.prototype.reset=function(_875){
if(this.defaultSelection!=null){
this.selectByValue(this.defaultSelection.value,_875);
}
};
SelectorBinding.prototype.handleAction=function(_876){
SelectorBinding.superclass.handleAction.call(this,_876);
switch(_876.type){
case ButtonBinding.ACTION_COMMAND:
this._onButtonCommand();
_876.consume();
break;
case PopupBinding.ACTION_SHOW:
this._onPopupShowing();
_876.consume();
break;
case MenuItemBinding.ACTION_COMMAND:
this._onMenuItemCommand(_876.target);
_876.consume();
break;
case PopupBinding.ACTION_HIDE:
var self=this;
setTimeout(function(){
if(self.isFocused){
self._grabKeyboard();
}
},0);
_876.consume();
break;
}
};
SelectorBinding.prototype._onButtonCommand=function(){
this.focus();
this._attachSelections();
this._restoreSelection();
this.dispatchAction(SelectorBinding.ACTION_COMMAND);
};
SelectorBinding.prototype._onPopupShowing=function(){
this._fitMenuToSelector();
this._releaseKeyboard();
};
SelectorBinding.prototype._onMenuItemCommand=function(_878){
this.select(_878);
FocusBinding.focusElement(this.bindingElement);
this._grabKeyboard();
};
SelectorBinding.prototype._restoreSelection=function(){
if(this._selectedItemBinding){
this._selectedItemBinding.focus();
}
};
SelectorBinding.prototype._fitMenuToSelector=function(){
var _879=this._buttonBinding.bindingElement.offsetWidth+"px";
var _87a=this._popupBinding.bindingElement;
if(Client.isMozilla==true){
_87a.style.minWidth=_879;
}else{
_87a.style.width=_879;
}
};
SelectorBinding.prototype.handleEvent=function(e){
SelectorBinding.superclass.handleEvent.call(this,e);
switch(e.type){
case DOMEvents.FOCUS:
this.focus();
break;
}
};
SelectorBinding.prototype.handleBroadcast=function(_87c,arg){
SelectorBinding.superclass.handleBroadcast.call(this,_87c,arg);
switch(_87c){
case BroadcastMessages.KEY_ARROW:
this.logger.debug(this._buttonBinding.getLabel());
this._handleArrowKey(arg);
break;
}
};
SelectorBinding.prototype._handleArrowKey=function(key){
if(!this._popupBinding.isVisible){
switch(key){
case KeyEventCodes.VK_DOWN:
case KeyEventCodes.VK_UP:
this._buttonBinding.check();
break;
}
}
};
SelectorBinding.prototype.select=function(_87f,_880){
var _881=false;
if(_87f!=this._selectedItemBinding){
this._selectedItemBinding=_87f;
_881=true;
var _882=this._buttonBinding;
this._selectionValue=_87f.selectionValue;
_882.setLabel(_87f.getLabel());
if(_87f.imageProfile!=null){
_882.imageProfile=_87f.imageProfile;
}
if(_882.imageProfile!=null){
_882.setImage(this.isDisabled==true?_882.imageProfile.getDisabledImage():_882.imageProfile.getDefaultImage());
}
this._updateImageLayout();
if(!_880){
this.onValueChange();
this.dispatchAction(SelectorBinding.ACTION_SELECTIONCHANGED);
this.dirty();
}
if(!this._isValid||(this.isRequired&&!_880)){
this.validate();
}
}
return _881;
};
SelectorBinding.prototype._relate=function(){
var _883=this.getProperty("relate");
if(_883){
var _884=this.bindingDocument.getElementById(_883);
if(_884){
var _885=UserInterface.getBinding(_884);
if(_885){
if(this.isChecked){
_885.show();
}else{
_885.hide();
}
}
}
}
};
SelectorBinding.prototype._updateImageLayout=function(){
if(this._buttonBinding.getImage()==null){
if(this._isImageLayout==true){
this._buttonBinding.attachClassName(ToolBarBinding.CLASSNAME_TEXTONLY);
this._isImageLayout=false;
}
}else{
if(!this._isImageLayout){
this._buttonBinding.detachClassName(ToolBarBinding.CLASSNAME_TEXTONLY);
this._isImageLayout=true;
}
}
};
SelectorBinding.prototype.onValueChange=function(){
};
SelectorBinding.prototype.selectByValue=function(_886,_887){
var _888=false;
var _889=this._menuBodyBinding;
var _88a=_889.getDescendantElementsByLocalName("menuitem");
while(_88a.hasNext()){
var _88b=UserInterface.getBinding(_88a.getNext());
if(_88b.selectionValue==_886){
_888=this.select(_88b,_887);
break;
}
}
return _888;
};
SelectorBinding.prototype.getValue=function(){
var _88c=this._selectionValue;
if(_88c!=null){
_88c=String(_88c);
}
return _88c;
};
SelectorBinding.prototype.setValue=function(_88d){
this.selectByValue(String(_88d),true);
};
SelectorBinding.prototype.getResult=function(){
var _88e=this._selectionValue;
if(_88e=="null"){
_88e=null;
}
if(_88e){
switch(this.type){
case DataBinding.TYPE_NUMBER:
case DataBinding.TYPE_INTEGER:
_88e=Number(_88e);
break;
}
}
return _88e;
};
SelectorBinding.prototype.setResult=function(_88f){
this.selectByValue(_88f,true);
};
SelectorBinding.prototype.validate=function(){
var _890=true;
if(this.isRequired==true&&this.defaultSelection!=null){
var _891=this.getValue();
if(_891==this.defaultSelection.value){
_890=false;
}
if(_890!=this._isValid){
if(_890){
this.dispatchAction(Binding.ACTION_VALID);
this.detachClassName(DataBinding.CLASSNAME_INVALID);
}else{
this.dispatchAction(Binding.ACTION_INVALID);
this.attachClassName(DataBinding.CLASSNAME_INVALID);
this._buttonBinding.setLabel(DataBinding.warnings["required"]);
}
}
this._isValid=_890;
}
return _890;
};
SelectorBinding.prototype.manifest=function(){
if(this.isAttached==true){
if(this.getResult()){
if(!this.shadowTree.input){
this.buildFormField();
}
this.shadowTree.input.value=this.getValue();
}else{
if(this.shadowTree.input){
this.shadowTree.input.parentNode.removeChild(this.shadowTree.input);
this.shadowTree.input=null;
}
}
}
};
SelectorBinding.prototype._attachSelections=function(){
var _892=this._popupBinding;
if(!this._isUpToDate){
_892.attachRecursive();
this._isUpToDate=true;
}
};
SelectorBinding.prototype.handleElement=function(){
return true;
};
SelectorBinding.prototype.updateElement=function(_893,_894){
this.bindingWindow.UpdateManager.addUpdate(new this.bindingWindow.ReplaceUpdate(this.getID(),_893));
return true;
};
SelectorBinding.newInstance=function(_895){
var _896=DOMUtil.createElementNS(Constants.NS_UI,"ui:selector",_895);
return UserInterface.registerBinding(_896,SelectorBinding);
};
SimpleSelectorBinding.prototype=new DataBinding;
SimpleSelectorBinding.prototype.constructor=SimpleSelectorBinding;
SimpleSelectorBinding.superclass=DataBinding.prototype;
function SimpleSelectorBinding(){
this.logger=SystemLogger.getLogger("SimpleSelectorBinding");
this._select=null;
this.isRequired=false;
this._isValid=true;
this._cachewidth=0;
return this;
}
SimpleSelectorBinding.prototype.toString=function(){
return "[SimpleSelectorBinding]";
};
SimpleSelectorBinding.prototype.onBindingRegister=function(){
SimpleSelectorBinding.superclass.onBindingRegister.call(this);
var name=this.getProperty("name");
if(name!=null){
this.setName(name);
}
};
SimpleSelectorBinding.prototype.onBindingAttach=function(){
SimpleSelectorBinding.superclass.onBindingAttach.call(this);
this._select=this.getChildElementByLocalName("select");
var name=this.getName();
if(name!=null){
this._select.name=name;
}
this._parseDOMProperties();
this._buildDOMContent();
};
SimpleSelectorBinding.prototype._parseDOMProperties=function(){
var _899=this.getProperty("onchange");
this.isRequired=this.getProperty("required")==true;
if(this.hasCallBackID()){
this._select.id=this.getCallBackID();
}
if(_899){
this.onValueChange=function(){
Binding.evaluate(_899,this);
};
}
};
SimpleSelectorBinding.prototype._buildDOMContent=function(){
this.bindingElement.tabIndex=0;
if(Client.isExplorer==true){
this.bindingElement.hideFocus=true;
}
var self=this;
this._select.onchange=function(){
self.onValueChange();
self.dirty();
if(!self._isValid){
self.validate();
}
};
this._select.onfocus=function(){
self.focus(true);
};
if(Client.isExplorer){
this._buildDOMContentIE();
}
};
SimpleSelectorBinding.prototype._buildDOMContentIE=function(){
if(Client.isExplorer){
this.bindingElement.style.height=this.bindingElement.offsetHeight+"px";
this._cachewidth=this._select.offsetWidth;
this._select.style.position="absolute";
var self=this;
this._select.onmouseover=function(){
if(!self.isFocused){
self._hack(true);
}
};
this._select.onmouseout=function(){
if(!self.isFocused){
self._hack(false);
}
};
}
};
SimpleSelectorBinding.prototype.onValueChange=function(){
};
SimpleSelectorBinding.prototype.focus=function(_89c){
SimpleSelectorBinding.superclass.focus.call(this);
if(this.isFocused){
if(!_89c){
FocusBinding.focusElement(this._select);
if(Client.isExplorer){
this._hack(true);
}
}
this.bindingWindow.standardEventHandler.enableNativeKeys(false);
}
};
SimpleSelectorBinding.prototype.blur=function(){
SimpleSelectorBinding.superclass.blur.call(this);
if(!this.isFocused){
this._select.blur();
this.bindingWindow.standardEventHandler.disableNativeKeys();
if(Client.isExplorer){
this._hack(false);
}
if(this.isRequired){
this.validate();
}
}
};
SimpleSelectorBinding.prototype._hack=function(_89d){
if(Client.isExplorer){
this._select.style.width=_89d?"auto":this._cachewidth+"px";
if(_89d){
if(this._select.offsetWidth<=this._cachewidth){
this._hack(false);
}
}
}
};
SimpleSelectorBinding.prototype.validate=function(){
var _89e=true;
if(this.isRequired){
if(this.getValue()==null){
_89e=false;
}
}
if(_89e!=this._isValid){
if(_89e){
this.detachClassName(DataBinding.CLASSNAME_INVALID);
}else{
this.attachClassName(DataBinding.CLASSNAME_INVALID);
var _89f=this._select;
var _8a0=_89f.options[_89f.selectedIndex];
var text=DOMUtil.getTextContent(_8a0);
_89f.blur();
_89f.style.color="#A40000";
_89f.style.fontWeight="bold";
if(!Client.isExplorer6){
DOMUtil.setTextContent(_8a0,DataBinding.warnings["required"]);
}
_89f.onfocus=function(){
this.style.color="black";
this.style.fontWeight="normal";
this.onfocus=null;
if(!Client.isExplorer6){
DOMUtil.setTextContent(_8a0,text);
}
};
}
this._isValid=_89e;
}
return _89e;
};
SimpleSelectorBinding.prototype.manifest=function(){
};
SimpleSelectorBinding.prototype.getValue=function(){
var _8a2=null;
var _8a3=this._select;
var _8a4=_8a3.options[_8a3.selectedIndex];
var _8a5=true;
if(Client.isExplorer){
var html=_8a4.outerHTML.toLowerCase();
if(html.indexOf("value=")==-1){
_8a5=false;
}
}
if(_8a5){
_8a2=_8a4.getAttribute("value");
}
return _8a2;
};
SimpleSelectorBinding.prototype.setValue=function(_8a7){
};
SimpleSelectorBinding.prototype.getResult=function(){
return this.getValue();
};
SimpleSelectorBinding.prototype.setResult=function(_8a8){
this.setValue(_8a8);
};
SimpleSelectorBinding.newInstance=function(_8a9){
var _8aa=DOMUtil.createElementNS(Constants.NS_XHTML,"select",_8a9);
return UserInterface.registerBinding(_8aa,SimpleSelectorBinding);
};
function SelectorBindingSelection(_8ab,_8ac,_8ad,_8ae){
this._init(_8ab,_8ac,_8ad,_8ae);
}
SelectorBindingSelection.prototype={label:null,value:null,isSelected:null,imageProfile:null,menuItemBinding:null,_init:function(_8af,_8b0,_8b1,_8b2){
if(_8af!=null){
this.label=String(_8af);
}
if(_8b0!=null){
this.value=String(_8b0);
}
if(_8b2!=null){
this.imageProfile=_8b2;
}
this.isSelected=_8b1?true:false;
}};
DataInputSelectorBinding.prototype=new DataInputBinding;
DataInputSelectorBinding.prototype.constructor=DataInputSelectorBinding;
DataInputSelectorBinding.superclass=DataInputBinding.prototype;
DataInputSelectorBinding.INDICATOR_IMAGE=Resolver.resolve("${skin}/fields/selectorindicator.png");
DataInputSelectorBinding.ACTION_SELECTIONCHANGED="datainputselectorselectionchanged";
function DataInputSelectorBinding(){
this.logger=SystemLogger.getLogger("DataInputSelectorBinding");
this._buttonBinding=null;
this._popupBinding=null;
this._menuBodyBinding=null;
this._selectionValue=null;
this.isDirty=false;
this._hasKeyboard=false;
this._isUpToDate=false;
this._selectedItemBinding=null;
this.crawlerFilters=new List([DocumentCrawler.ID,FocusCrawler.ID]);
}
DataInputSelectorBinding.prototype.toString=function(){
return "[DataInputSelectorBinding]";
};
DataInputSelectorBinding.prototype.onBindingDispose=SelectorBinding.prototype.onBindingDispose;
DataInputSelectorBinding.prototype._buildDOMContent=function(){
DataInputSelectorBinding.superclass._buildDOMContent.call(this);
this.buildButton();
this.buildPopup();
this.buildSelections();
};
DataInputSelectorBinding.prototype.buildButton=function(){
var _8b3=this.addFirst(ToolBarButtonBinding.newInstance(this.bindingDocument));
_8b3.popupBindingTargetElement=this.shadowTree.input;
_8b3.setImage(DataInputSelectorBinding.INDICATOR_IMAGE);
_8b3.attach();
var self=this;
_8b3.oncommand=function(){
self._attachSelections();
};
this._buttonBinding=_8b3;
};
DataInputSelectorBinding.prototype.buildPopup=SelectorBinding.prototype.buildPopup;
DataInputSelectorBinding.prototype.buildSelections=function(){
var list=new List();
var _8b6=DOMUtil.getElementsByTagName(this.bindingElement,"selection");
new List(_8b6).each(function(_8b7){
if(_8b7.getAttribute("label")){
throw "label not supported - use value property!";
}else{
var _8b8=_8b7.getAttribute("value");
var _8b9=_8b7.getAttribute("selected");
var _8ba=_8b7.getAttribute("tooltip");
list.add({value:_8b8?_8b8:null,toolTip:_8ba?_8ba:null,isSelected:(_8b9&&_8b9=="true")?true:false});
}
});
if(list.hasEntries()){
this.populateFromList(list);
}
};
DataInputSelectorBinding.prototype.populateFromList=function(list){
var _8bc=this._menuBodyBinding;
var _8bd=_8bc.bindingDocument;
while(_8bc.bindingElement.hasChildNodes()){
var node=_8bc.bindingElement.lastChild;
if(node.nodeType==Node.ELEMENT_NODE&&UserInterface.hasBinding(node)){
UserInterface.getBinding(node).dispose();
}else{
_8bc.removeChild(node);
}
}
if(list.hasEntries()){
this._isUpToDate=false;
if(!this._buttonBinding.isVisible){
this._buttonBinding.show();
}
while(list.hasNext()){
var _8bf=list.getNext();
var _8c0=MenuItemBinding.newInstance(_8bd);
_8c0.setLabel(_8bf.value);
_8c0.selectionValue=_8bf.value;
if(_8bf.toolTip){
_8c0.setToolTip(_8bf.toolTip);
}
if(_8bf.isSelected){
this.select(_8c0,true);
}
_8bc.add(_8c0);
}
}else{
this._buttonBinding.hide();
}
};
DataInputSelectorBinding.prototype.handleAction=SelectorBinding.prototype.handleAction;
DataInputSelectorBinding.prototype._onButtonCommand=function(){
this.focus();
this._restoreSelection();
this.dispatchAction(SelectorBinding.ACTION_COMMAND);
};
DataInputSelectorBinding.prototype._onPopupShowing=function(){
this._fitMenuToSelector();
this._restoreSelection();
this._releaseKeyboard();
};
DataInputSelectorBinding.prototype._onMenuItemCommand=function(_8c1){
this.select(_8c1);
FocusBinding.focusElement(this.bindingElement);
this._grabKeyboard();
};
DataInputSelectorBinding.prototype.handleBroadcast=function(_8c2,arg){
SelectorBinding.prototype.handleBroadcast.call(this,_8c2,arg);
switch(_8c2){
case BroadcastMessages.MOUSEEVENT_MOUSEDOWN:
if(arg!=this._buttonBinding){
DataInputSelectorBinding.superclass.handleBroadcast.call(this,_8c2,arg);
}
break;
}
};
DataInputSelectorBinding.prototype._grabKeyboard=SelectorBinding.prototype._grabKeyboard;
DataInputSelectorBinding.prototype._releaseKeyboard=SelectorBinding.prototype._releaseKeyboard;
DataInputSelectorBinding.prototype._handleArrowKey=SelectorBinding.prototype._handleArrowKey;
DataInputSelectorBinding.prototype.focus=function(_8c4){
if(!this.isFocused){
DataInputSelectorBinding.superclass.focus.call(this,_8c4);
if(this.isFocused==true){
this._grabKeyboard();
}
}
};
DataInputSelectorBinding.prototype.blur=function(_8c5){
if(this.isFocused==true){
DataInputSelectorBinding.superclass.blur.call(this,_8c5);
this._releaseKeyboard();
if(this._popupBinding.isVisible){
this._popupBinding.hide();
}
}
};
DataInputSelectorBinding.prototype._fitMenuToSelector=function(){
var _8c6=this.bindingElement.offsetWidth+"px";
var _8c7=this._popupBinding.bindingElement;
if(Client.isMozilla){
_8c7.style.minWidth=_8c6;
}else{
_8c7.style.width=_8c6;
}
};
DataInputSelectorBinding.prototype._restoreSelection=function(){
if(!this._isUpToDate){
this._attachSelections();
}
var _8c8=this._menuBodyBinding.getDescendantBindingsByLocalName("menuitem");
var _8c9=this.getValue();
var _8ca=null;
_8c8.each(function(item){
if(item.getLabel()==_8c9){
_8ca=item;
}
});
if(_8ca){
_8ca.focus();
}
};
DataInputSelectorBinding.prototype.select=function(item,_8cd){
if(item!=this._selectedItemBinding){
this._selectedItemBinding=item;
this.setValue(item.selectionValue);
if(!_8cd){
this.dirty();
this.dispatchAction(DataInputSelectorBinding.ACTION_SELECTIONCHANGED);
}
}
this.shadowTree.input.focus();
};
DataInputSelectorBinding.prototype._attachSelections=SelectorBinding.prototype._attachSelections;
DataInputSelectorBinding.prototype.setResult=DataInputSelectorBinding.prototype.setValue;
DataInputDialogBinding.prototype=new DataInputBinding;
DataInputDialogBinding.prototype.constructor=DataInputDialogBinding;
DataInputDialogBinding.superclass=DataInputBinding.prototype;
function DataInputDialogBinding(){
this.logger=SystemLogger.getLogger("DataInputDialogBinding");
this._handle=null;
this._dialogButtonBinding=null;
this._isButtonClicked=false;
}
DataInputDialogBinding.prototype.toString=function(){
return "[DataInputDialogBinding]";
};
DataInputDialogBinding.prototype._buildDOMContent=function(){
DataInputSelectorBinding.superclass._buildDOMContent.call(this);
this.buildButton();
};
DataInputDialogBinding.prototype.buildButton=function(){
var _8ce=ToolBarButtonBinding.newInstance(this.bindingDocument);
_8ce.setImage("${icon:popup}");
this.addFirst(_8ce);
_8ce.attach();
var self=this;
_8ce.oncommand=function(){
self._isButtonClicked=true;
setTimeout(function(){
self._isButtonClicked=false;
},1000);
var _8d0=self.getProperty("handle");
var _8d1=ViewDefinitions[_8d0];
if(_8d1 instanceof DialogViewDefinition){
_8d1.handler={handleDialogResponse:function(_8d2,_8d3){
self._isButtonClicked=false;
if(_8d2==Dialog.RESPONSE_ACCEPT){
self.logger.debug("Usecase scenario was hardcoded into DataInputDialogBinding#buildButton");
var _8d4=_8d3.getFirst();
self.setValue(_8d4);
self.validate(true);
}
self.focus();
}};
_8d1.argument.selectedResult=self.getValue();
StageBinding.presentViewDefinition(_8d1);
}else{
throw "Definition was either undefine or of a non-dialog type.";
}
};
DOMEvents.addEventListener(_8ce.getBindingElement(),DOMEvents.MOUSEDOWN,{handleEvent:function(e){
self._isButtonClicked=true;
}});
this._dialogButtonBinding=_8ce;
};
DataInputDialogBinding.prototype.oncommand=function(){
var _8d6=this._dialogButtonBinding;
if(_8d6!=null){
_8d6.oncommand();
}
};
DataInputDialogBinding.prototype.validate=function(arg){
var _8d8=true;
if(this._isButtonClicked==true){
this._isButtonClicked=false;
}else{
_8d8=DataInputDialogBinding.superclass.validate.call(this,arg);
}
return _8d8;
};
DataDialogBinding.prototype=new DataBinding;
DataDialogBinding.prototype.constructor=DataDialogBinding;
DataDialogBinding.superclass=DataBinding.prototype;
DataDialogBinding.ACTION_COMMAND="datadialog command";
function DataDialogBinding(){
this.logger=SystemLogger.getLogger("DataDialogBinding");
this._buttonBinding=null;
this._handler=null;
this._map=null;
this._dialogViewHandle=null;
this._hasKeyboard=false;
this._hasFocus=false;
}
DataDialogBinding.prototype.toString=function(){
return "[DataDialogBinding]";
};
DataDialogBinding.prototype.onBindingRegister=function(){
DataDialogBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["image"]=this.setImage;
this.propertyMethodMap["label"]=this.setLabel;
this.propertyMethodMap["tooltip"]=this.setToolTip;
this.propertyMethodMap["handle"]=this.setHandle;
this.propertyMethodMap["url"]=this.setURL;
this.propertyMethodMap["value"]=this.setValue;
};
DataDialogBinding.prototype.onBindingAttach=function(){
DataDialogBinding.superclass.onBindingAttach.call(this);
Binding.imageProfile(this);
this._buildButton();
if(this.getProperty("handle")!=null||this.getProperty("url")){
this._buildIndicator();
}
this.bindingElement.tabIndex=0;
if(Client.isExplorer){
this.bindingElement.hideFocus=true;
}
};
DataDialogBinding.prototype._buildButton=function(){
var _8d9=this.getProperty("label");
var _8da=this.getProperty("tooltip");
this._buttonBinding=this.add(ClickButtonBinding.newInstance(this.bindingDocument));
if(_8d9!=null){
if(this.getProperty("handle")!=null||this.getProperty("url")!=null){
this._buttonBinding.setLabel(_8d9+LabelBinding.DIALOG_INDECATOR_SUFFIX);
}else{
this._buttonBinding.setLabel(_8d9);
}
}
if(this.imageProfile){
this._buttonBinding.imageProfile=this.imageProfile;
}
if(_8da!=null){
this._buttonBinding.setToolTip(_8da);
}
this._buttonBinding.addActionListener(ButtonBinding.ACTION_COMMAND,this);
this._buttonBinding.attach();
};
DataDialogBinding.prototype._buildIndicator=function(){
var img=this.bindingDocument.createElement("img");
img.src=Resolver.resolve("${icon:popup}");
img.className="dialogindicatorimage";
this._buttonBinding.bindingElement.appendChild(img);
this.shadowTree.indicatorimage=img;
};
DataDialogBinding.prototype.handleAction=function(_8dc){
DataDialogBinding.superclass.handleAction.call(this,_8dc);
var _8dd=_8dc.target;
var self=this;
switch(_8dc.type){
case ButtonBinding.ACTION_COMMAND:
if(this._handler==null){
this._handler={handleDialogResponse:function(_8df,_8e0){
if(_8df==Dialog.RESPONSE_ACCEPT){
if(_8e0 instanceof DataBindingMap){
self._map=_8e0;
}else{
throw "Invalid dialog result";
}
}
}};
}
if(_8dd==this._buttonBinding){
_8dc.consume();
this.focus();
this.fireCommand();
}
break;
}
};
DataDialogBinding.prototype.handleBroadcast=function(_8e1,arg){
DataDialogBinding.superclass.handleBroadcast.call(this,_8e1,arg);
switch(_8e1){
case BroadcastMessages.KEY_SPACE:
this.fireCommand();
break;
}
};
DataDialogBinding.prototype.fireCommand=function(def){
this.dispatchAction(this.constructor.ACTION_COMMAND);
var _8e4=this.getProperty("handle");
var url=this.getURL();
var _8e6=null;
if(_8e4!=null||def!=null){
if(_8e4!=null){
_8e6=ViewDefinitions[_8e4];
}else{
_8e6=def;
}
if(_8e6 instanceof DialogViewDefinition){
_8e6.handler=this._handler;
if(this._map!=null){
_8e6.argument=this._map;
}
StageBinding.presentViewDefinition(_8e6);
}
}else{
if(url!=null){
_8e6=Dialog.invokeModal(url,this._handler,this._map);
}
}
if(_8e6!=null){
this._dialogViewHandle=_8e6.handle;
this._releaseKeyboard();
}
};
DataDialogBinding.prototype.setLabel=function(_8e7){
this.setProperty("label",_8e7);
if(this.isAttached){
this._buttonBinding.setLabel(_8e7+LabelBinding.DIALOG_INDECATOR_SUFFIX);
}
};
DataDialogBinding.prototype.setImage=function(_8e8){
this.setProperty("image",_8e8);
if(this.imageProfile!=null){
this.imageProfile.setDefaultImage(_8e8);
if(this._buttonBinding!=null){
this._buttonBinding.imageProfile=this.imageProfile;
this._buttonBinding.setImage(this._buttonBinding.imageProfile.getDefaultImage());
}
}
};
DataDialogBinding.prototype.setToolTip=function(_8e9){
this.setProperty("tooltip",_8e9);
if(this.isAttached){
this._buttonBinding.setToolTip(_8e9);
}
};
DataDialogBinding.prototype.setHandle=function(_8ea){
this.setProperty("handle",_8ea);
};
DataDialogBinding.prototype.setURL=function(url){
this.setProperty("url",url);
};
DataDialogBinding.prototype.getURL=function(){
return this.getProperty("url");
};
DataDialogBinding.prototype.setHandler=function(_8ec){
this._handler=_8ec;
};
DataDialogBinding.prototype.focus=function(){
if(!this.isFocused){
DataBinding.prototype.focus.call(this);
FocusBinding.focusElement(this.bindingElement);
if(this.isFocused){
this._grabKeyboard();
}
}
};
DataDialogBinding.prototype.blur=function(){
if(this.isFocused){
DataBinding.prototype.blur.call(this);
if(this._hasKeyboard){
this._releaseKeyboard();
}
}
};
DataDialogBinding.prototype._grabKeyboard=function(){
if(!this._hasKeyboard){
this.subscribe(BroadcastMessages.KEY_SPACE);
this._hasKeyboard=true;
}
};
DataDialogBinding.prototype._releaseKeyboard=function(){
if(this._hasKeyboard){
this.unsubscribe(BroadcastMessages.KEY_SPACE);
this._hasKeyboard=false;
}
};
DataDialogBinding.prototype.validate=function(){
return true;
};
DataDialogBinding.prototype.manifest=function(){
};
DataDialogBinding.prototype.getValue=function(){
return null;
};
DataDialogBinding.prototype.getResult=function(){
return this._map;
};
DataDialogBinding.prototype.setResult=function(map){
if(map instanceof DataBindingMap){
this._map=map;
}else{
throw "Invalid argument";
}
};
DataDialogBinding.newInstance=function(_8ee){
var _8ef=DOMUtil.createElementNS(Constants.NS_UI,"ui:datadialog",_8ee);
return UserInterface.registerBinding(_8ef,DataDialogBinding);
};
PostBackDataDialogBinding.prototype=new DataDialogBinding;
PostBackDataDialogBinding.prototype.constructor=PostBackDataDialogBinding;
PostBackDataDialogBinding.superclass=DataDialogBinding.prototype;
PostBackDataDialogBinding.ACTION_COMMAND="postbackdialog command";
function PostBackDataDialogBinding(){
this.input=null;
return this;
}
PostBackDataDialogBinding.prototype.onBindingAttach=function(){
PostBackDataDialogBinding.superclass.onBindingAttach.call(this);
Binding.dotnetify(this);
var self=this;
this._handler={handleDialogResponse:function(_8f1,_8f2){
if(_8f1==Dialog.RESPONSE_ACCEPT){
self._onDialogAccept(_8f2);
}else{
self._onDialogCancel();
}
}};
};
PostBackDataDialogBinding.prototype._onDialogAccept=function(_8f3){
_8f3=new String(_8f3);
this.dirty();
this.setValue(encodeURIComponent(_8f3));
var self=this;
setTimeout(function(){
if(self.ondialogaccept!=null){
self.ondialogaccept();
}
self.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
},0);
};
PostBackDataDialogBinding.prototype._onDialogCancel=function(){
if(this.ondialogcancel!=null){
this.ondialogcancel();
}
};
PostBackDataDialogBinding.prototype.getURL=function(){
var url=this.getProperty("url");
var suf=this.getValue();
return new String(url+suf);
};
PostBackDataDialogBinding.prototype.manifest=function(){
var _8f7=this.getValue();
if(_8f7==null){
_8f7="";
}
this.shadowTree.dotnetinput.value=_8f7;
};
PostBackDataDialogBinding.prototype.setValue=function(_8f8){
this.setProperty("value",_8f8);
};
PostBackDataDialogBinding.prototype.getValue=function(){
return this.getProperty("value");
};
PostBackDataDialogBinding.prototype.getResult=function(){
return null;
};
PostBackDataDialogBinding.prototype.setResult=function(_8f9){
};
PostBackDataDialogBinding.newInstance=function(_8fa){
var _8fb=DOMUtil.createElementNS(Constants.NS_UI,"ui:postbackdialog",_8fa);
return UserInterface.registerBinding(_8fb,PostBackDataDialogBinding);
};
ViewDefinitionPostBackDataDialogBinding.prototype=new PostBackDataDialogBinding;
ViewDefinitionPostBackDataDialogBinding.prototype.constructor=ViewDefinitionPostBackDataDialogBinding;
ViewDefinitionPostBackDataDialogBinding.superclass=PostBackDataDialogBinding.prototype;
function ViewDefinitionPostBackDataDialogBinding(){
this.logger=SystemLogger.getLogger("ViewDefinitionPostBackDataDialogBinding");
return this;
}
ViewDefinitionPostBackDataDialogBinding.prototype.toString=function(){
return "[ViewDefinitionPostBackDataDialogBinding]";
};
ViewDefinitionPostBackDataDialogBinding.prototype.fireCommand=function(){
var _8fc=this.getProperty("dialoglabel");
var _8fd=this.getProperty("providersearch");
var key=this.getProperty("providerkey");
var _8ff=this.getProperty("handle");
if(_8ff!=null){
var def=ViewDefinition.clone(_8ff,"Generated.ViewDefinition.Handle."+KeyMaster.getUniqueKey());
if(_8fc!=null){
if(def.argument==null){
def.argument={};
}
def.argument.label=_8fc;
}
if(_8fd!=null){
if(def.argument==null){
def.argument={};
}
if(def.argument.nodes==null){
def.argument.nodes=[];
}
def.argument.nodes[0].search=_8fd;
}
if(key!=null){
if(def.argument==null){
def.argument={};
}
if(def.argument.nodes==null){
def.argument.nodes=[];
}
def.argument.nodes[0].key=key;
}
ViewDefinitionPostBackDataDialogBinding.superclass.fireCommand.call(this,def);
}else{
throw "Attribute \"handle\" required.";
}
};
ViewDefinitionPostBackDataDialogBinding.newInstance=function(_901){
var _902=DOMUtil.createElementNS(Constants.NS_UI,"ui:postbackdialog",_901);
return UserInterface.registerBinding(_902,ViewDefinitionPostBackDataDialogBinding);
};
NullPostBackDataDialogBinding.prototype=new DataBinding;
NullPostBackDataDialogBinding.prototype.constructor=NullPostBackDataDialogBinding;
NullPostBackDataDialogBinding.superclass=DataBinding.prototype;
NullPostBackDataDialogBinding.LABEL_NULL="(No selection)";
NullPostBackDataDialogBinding.LABEL_DEFAULT="Select";
NullPostBackDataDialogBinding.VALUE_NULL="null";
NullPostBackDataDialogBinding.VALUE_SELECTED="selected";
NullPostBackDataDialogBinding.ACTION_COMMAND="nullpostbackdatadialog command";
function NullPostBackDataDialogBinding(){
this.logger=SystemLogger.getLogger("NullPostBackDataDialogBinding");
this._datathing=null;
this._selector=null;
return this;
}
NullPostBackDataDialogBinding.prototype.toString=function(){
return "[NullPostBackDataDialogBinding]";
};
NullPostBackDataDialogBinding.prototype.onBindingAttach=function(){
NullPostBackDataDialogBinding.superclass.onBindingAttach.call(this);
this.propertyMethodMap["label"]=this.setLabel;
var self=this;
this.propertyMethodMap["value"]=function(_904){
self._datathing.setValue(_904);
};
this.propertyMethodMap["selectorlabel"]=function(){
if(Application.isDeveloperMode){
alert("Selectorlabel property not supported yet!");
}
};
this.addActionListener(PageBinding.ACTION_DOPOSTBACK);
this._buildDataDialog();
this._buildSelector();
};
NullPostBackDataDialogBinding.prototype._buildDataDialog=function(){
this._datathing=this.add(ViewDefinitionPostBackDataDialogBinding.newInstance(this.bindingDocument));
new List(["callbackid","handle","name","providersearch","providerkey","value"]).each(function(prop){
this._datathing.setProperty(prop,this.getProperty(prop));
this.setProperty(prop,null);
},this);
var self=this;
this._datathing.ondialogcancel=function(){
var _907=self.getValue();
if(_907==""||_907==null){
self._selector.setLabel(NullPostBackDataDialogBinding.LABEL_NULL);
}else{
self._selector.setLabel(self.getLabel());
}
};
this._datathing.hide();
this._datathing.attach();
};
NullPostBackDataDialogBinding.prototype._buildSelector=function(){
this._selector=this.add(NullPostBackDataDialogSelectorBinding.newInstance(this.bindingDocument));
var _908=this.getProperty("value");
var _909=this.getProperty("selectorlabel");
if(_909==null){
_909=NullPostBackDataDialogBinding.LABEL_DEFAULT;
}
var list=new List();
list.add(new SelectorBindingSelection(NullPostBackDataDialogBinding.LABEL_NULL,NullPostBackDataDialogBinding.VALUE_NULL,_908==null));
list.add(new SelectorBindingSelection(_909+LabelBinding.DIALOG_INDECATOR_SUFFIX,NullPostBackDataDialogBinding.VALUE_SELECTED,_908!=null,new ImageProfile({image:"${icon:popup}"})));
this._selector.master=this;
this._selector.attach();
this._selector.populateFromList(list);
var _908=this.getValue();
if(_908==""||_908==null){
this._selector.setLabel(NullPostBackDataDialogBinding.LABEL_NULL);
}else{
this._selector.setLabel(this.getLabel());
}
};
NullPostBackDataDialogBinding.prototype.handleAction=function(_90b){
NullPostBackDataDialogBinding.superclass.handleAction.call(this,_90b);
switch(_90b.type){
case PageBinding.ACTION_DOPOSTBACK:
if(_90b.target==this._datathing){
var _90c=this.getProperty("label");
this._selector.setLabel("");
this.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
var self=this;
setTimeout(function(){
if(self.getProperty("label")==_90c){
self._selector.setLabel(_90c);
}
},500);
_90b.consume();
}
break;
}
};
NullPostBackDataDialogBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
NullPostBackDataDialogBinding.prototype.setLabel=function(_90e){
this.setProperty("label",_90e);
if(this._selector!=null){
this._selector.setLabel(_90e);
}
};
NullPostBackDataDialogBinding.prototype.getValue=function(){
return this._datathing.getValue();
};
NullPostBackDataDialogBinding.prototype.setValue=function(_90f){
this._datathing.setValue(_90f);
this.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
};
NullPostBackDataDialogBinding.prototype.action=function(){
this._datathing.fireCommand();
};
NullPostBackDataDialogBinding.prototype.validate=function(){
return true;
};
NullPostBackDataDialogBinding.prototype.manifest=function(){
};
NullPostBackDataDialogBinding.prototype.getResult=function(){
};
NullPostBackDataDialogBinding.prototype.setResult=function(){
};
NullPostBackDataDialogSelectorBinding.prototype=new SelectorBinding;
NullPostBackDataDialogSelectorBinding.prototype.constructor=NullPostBackDataDialogSelectorBinding;
NullPostBackDataDialogSelectorBinding.superclass=SelectorBinding.prototype;
function NullPostBackDataDialogSelectorBinding(){
this.logger=SystemLogger.getLogger("NullPostBackDataDialogSelectorBinding");
this.master=null;
return this;
}
NullPostBackDataDialogSelectorBinding.prototype.toString=function(){
return "[NullPostBackDataDialogSelectorBinding]";
};
NullPostBackDataDialogSelectorBinding.prototype.select=function(_910,_911){
if(NullPostBackDataDialogSelectorBinding.superclass.select.call(this,_910,_911)){
this._buttonBinding.setImage(null);
this._updateImageLayout();
if(this._selectionValue==NullPostBackDataDialogBinding.VALUE_SELECTED){
if(this.master.getValue()!=null){
}
}
}
};
NullPostBackDataDialogSelectorBinding.prototype.setLabel=function(_912){
this._buttonBinding.setLabel(_912);
};
NullPostBackDataDialogSelectorBinding.prototype.setToolTip=function(_913){
this._buttonBinding.setToolTip(_913);
};
NullPostBackDataDialogSelectorBinding.prototype.handleAction=function(_914){
NullPostBackDataDialogSelectorBinding.superclass.handleAction.call(this,_914);
switch(_914.type){
case MenuItemBinding.ACTION_COMMAND:
var _915=_914.target;
var _916=this.master;
if(_915.selectionValue==NullPostBackDataDialogBinding.VALUE_SELECTED){
this.setLabel(_915.getLabel());
setTimeout(function(){
_916.action();
},0);
}else{
this.master.setValue("");
}
_916.dirty();
break;
}
};
NullPostBackDataDialogSelectorBinding.prototype.manifest=function(){
};
NullPostBackDataDialogSelectorBinding.newInstance=function(_917){
var _918=DOMUtil.createElementNS(Constants.NS_UI,"ui:selector",_917);
return UserInterface.registerBinding(_918,NullPostBackDataDialogSelectorBinding);
};
MultiSelectorBinding.prototype=new DataBinding;
MultiSelectorBinding.prototype.constructor=MultiSelectorBinding;
MultiSelectorBinding.superclass=DataBinding.prototype;
MultiSelectorBinding.DISPLAY_SELECTED="selected";
MultiSelectorBinding.DISPLAY_UNSELECTED="unselected";
MultiSelectorBinding.ACTION_COMMAND="multiselector command";
MultiSelectorBinding.ACTION_SELECTIONCHANGED="multiselector selection changed";
function MultiSelectorBinding(){
this.logger=SystemLogger.getLogger("MultiSelectorBinding");
this.isEditable=true;
this.isSelectable=false;
this._dataDialogBinding=null;
this.selections=null;
this._selectionMap=null;
this._display=MultiSelectorBinding.DISPLAY_SELECTED;
this._lastSelectedElement=null;
this.crawlerFilters=new List([DocumentCrawler.ID,FocusCrawler.ID]);
}
MultiSelectorBinding.prototype.toString=function(){
return "[MultiSelectorBinding]";
};
MultiSelectorBinding.prototype.onBindingAttach=function(){
MultiSelectorBinding.superclass.onBindingAttach.call(this);
this.selections=this._getSelectionsList();
this.addActionListener(DataDialogBinding.ACTION_COMMAND);
this.addActionListener(MultiSelectorDataDialogBinding.ACTION_RESULT);
this.addEventListener(DOMEvents.MOUSEDOWN);
this._buildDOMContent();
this._parseDOMProperties();
this.populateFromList(this.selections);
var _919=this._dataDialogBinding;
if(_919!=null){
DOMEvents.addEventListener(this.shadowTree.box,DOMEvents.DOUBLECLICK,{handleEvent:function(){
_919.fireCommand();
}});
}
};
MultiSelectorBinding.prototype._buildDOMContent=function(){
this.shadowTree.box=DOMUtil.createElementNS(Constants.NS_UI,"ui:box",this.bindingDocument);
this.bindingElement.appendChild(this.shadowTree.box);
};
MultiSelectorBinding.prototype._parseDOMProperties=function(){
var _91a=this.getProperty("editable");
var _91b=this.getProperty("selectable");
var _91c=this.getProperty("display");
if(_91a!=false){
this._buildEditorButton();
}else{
this.isEditable=false;
}
if(_91b){
this.isSelectable=true;
this._selectionMap=new Map();
}
if(_91c){
this._display=_91c;
}
};
MultiSelectorBinding.prototype._buildEditorButton=function(){
if(this.isEditable){
var _91d=MultiSelectorDataDialogBinding.newInstance(this.bindingDocument);
_91d.selections=this.selections;
this.add(_91d);
_91d.attach();
this._dataDialogBinding=_91d;
this.shadowTree.datadialog=_91d;
}
};
MultiSelectorBinding.prototype.populateFromList=function(list){
list.reset();
var _91f=false;
this.shadowTree.box.innerHTML="";
while(list.hasNext()){
var _920=list.getNext();
switch(this._display){
case MultiSelectorBinding.DISPLAY_SELECTED:
_91f=_920.isSelected;
break;
case MultiSelectorBinding.DISPLAY_UNSELECTED:
_91f=_920.isSelected!=true;
break;
}
if(_91f){
this.shadowTree.box.appendChild(this._getElementForSelection(_920));
}
}
this.selections=list;
if(this._dataDialogBinding){
this._dataDialogBinding.selections=this.selections;
}
};
MultiSelectorBinding.prototype.cumulateFromList=function(list,_922){
var box=this.shadowTree.box;
var _924=false;
if(list.hasEntries()){
list.reverse().reset();
while(list.hasNext()){
var _925=list.getNext();
if(_922){
_925.isSelected=this._display==MultiSelectorBinding.DISPLAY_SELECTED;
_924=true;
}else{
switch(this._display){
case MultiSelectorBinding.DISPLAY_SELECTED:
_924=_925.isSelected;
break;
case MultiSelectorBinding.DISPLAY_UNSELECTED:
_924=_925.isSelected!=true;
break;
}
}
if(_924){
var _926=this._getElementForSelection(_925);
box.insertBefore(_926,box.firstChild);
CSSUtil.attachClassName(_926,"selected");
this._selectionMap.set(_925.value,_926);
}
}
this.dispatchAction(MultiSelectorBinding.ACTION_SELECTIONCHANGED);
}
};
MultiSelectorBinding.prototype._getElementForSelection=function(_927){
var _928=DOMUtil.createElementNS(Constants.NS_XHTML,"div",this.bindingDocument);
_928.appendChild(this.bindingDocument.createTextNode(_927.label));
_928.setAttribute("label",_927.label);
_928.setAttribute("value",_927.value);
return _928;
};
MultiSelectorBinding.prototype.hasHighlight=function(){
return this._selectionMap&&this._selectionMap.hasEntries();
};
MultiSelectorBinding.prototype.handleEvent=function(e){
MultiSelectorBinding.superclass.handleEvent.call(this,e);
switch(e.type){
case DOMEvents.MOUSEDOWN:
if(!this.isFocused){
this.focus();
}
if(this.isSelectable){
var _92a=DOMEvents.getTarget(e);
var _92b=DOMUtil.getLocalName(_92a);
if(_92b=="div"){
this._handleMouseDown(_92a);
this.dispatchAction(MultiSelectorBinding.ACTION_SELECTIONCHANGED);
}
}
break;
}
};
MultiSelectorBinding.prototype._handleMouseDown=function(_92c){
if(Keyboard.isShiftPressed&&this._lastSelectedElement){
var _92d=this._getElements();
var _92e=_92c.getAttribute("value");
var _92f=this._lastSelectedElement.getAttribute("value");
var _930=false;
while(_92d.hasNext()){
var el=_92d.getNext();
switch(el.getAttribute("value")){
case _92e:
case _92f:
_930=!_930;
break;
}
if(_930){
this._hilite(el);
}else{
this._unhilite(el);
}
this._hilite(this._lastSelectedElement);
this._hilite(_92c);
}
}else{
if(Keyboard.isControlPressed&&this._isHilited(_92c)){
this._unhilite(_92c);
}else{
this._hilite(_92c);
}
if(!Keyboard.isControlPressed){
var self=this;
this._getElements().each(function(el){
if(el!=_92c){
self._unhilite(el);
}
});
}
}
this._lastSelectedElement=_92c;
};
MultiSelectorBinding.prototype._hilite=function(_934){
var _935=_934.getAttribute("value");
if(!this._selectionMap.has(_935)){
CSSUtil.attachClassName(_934,"selected");
this._selectionMap.set(_935,_934);
}
};
MultiSelectorBinding.prototype._unhilite=function(_936){
var _937=_936.getAttribute("value");
if(this._selectionMap.has(_937)){
CSSUtil.detachClassName(_936,"selected");
this._selectionMap.del(_937);
}
};
MultiSelectorBinding.prototype._isHilited=function(_938){
return CSSUtil.hasClassName(_938,"selected");
};
MultiSelectorBinding.prototype.handleAction=function(_939){
MultiSelectorBinding.superclass.handleAction.call(this,_939);
var _93a=_939.target;
switch(_939.type){
case DataDialogBinding.ACTION_COMMAND:
if(_93a==this._dataDialogBinding){
if(!this.isFocused){
this.focus();
}
this.dispatchAction(MultiSelectorBinding.ACTION_COMMAND);
_939.consume();
}
break;
case MultiSelectorDataDialogBinding.ACTION_RESULT:
this.populateFromList(_93a.result);
this.dirty();
_93a.result=null;
_939.consume();
break;
}
};
MultiSelectorBinding.prototype.extractSelected=function(){
var _93b=null;
if(this.isSelectable){
_93b=new List();
if(this._selectionMap&&this._selectionMap.hasEntries()){
var self=this;
this._getElements().each(function(_93d){
if(self._isHilited(_93d)){
_93d.parentNode.removeChild(_93d);
_93b.add(new SelectorBindingSelection(_93d.getAttribute("label"),_93d.getAttribute("value"),true));
}
});
this._selectionMap=new Map();
this.dispatchAction(MultiSelectorBinding.ACTION_SELECTIONCHANGED);
}
}
return _93b;
};
MultiSelectorBinding.prototype.reposition=function(isUp){
var _93f=this._getElements();
if(!isUp){
_93f.reverse();
}
var _940=true;
while(_940&&_93f.hasNext()){
var _941=_93f.getNext();
if(this._isHilited(_941)){
switch(isUp){
case true:
if(_941.previousSibling){
_941.parentNode.insertBefore(_941,_941.previousSibling);
}else{
_940=false;
}
break;
case false:
if(_941.nextSibling){
_941.parentNode.insertBefore(_941,_941.nextSibling.nextSibling);
}else{
_940=false;
}
break;
}
}
}
};
MultiSelectorBinding.prototype.toSelectionList=function(){
var _942=new List();
var _943=this._display==MultiSelectorBinding.DISPLAY_SELECTED;
var self=this;
this._getElements().each(function(_945){
var _946=new SelectorBindingSelection(_945.getAttribute("label"),_945.getAttribute("value"),_943);
_946.isHighlighted=self._isHilited(_945);
_942.add(_946);
});
return _942;
};
MultiSelectorBinding.prototype._getElements=function(){
return new List(DOMUtil.getElementsByTagName(this.shadowTree.box,"div"));
};
MultiSelectorBinding.prototype._getSelectionsList=SelectorBinding.prototype._getSelectionsList;
MultiSelectorBinding.prototype.validate=function(){
return true;
};
MultiSelectorBinding.prototype.manifest=function(){
var _947=new List(DOMUtil.getElementsByTagName(this.bindingElement,"input"));
if(_947.hasEntries()){
_947.each(function(_948){
_948.parentNode.removeChild(_948);
});
}
this.selections.reset();
while(this.selections.hasNext()){
var _949=this.selections.getNext();
if(_949.isSelected){
var _94a=DOMUtil.createElementNS(Constants.NS_XHTML,"input",this.bindingDocument);
_94a.name=this._name;
_94a.value=_949.value;
this.bindingElement.appendChild(_94a);
}
}
};
MultiSelectorBinding.prototype.getValue=function(){
return "HEJ!";
};
MultiSelectorBinding.prototype.setValue=function(_94b){
alert(_94b);
};
MultiSelectorBinding.prototype.getResult=function(){
alert("TODO: MultiSelectorBinding#getResult");
return new Array();
};
MultiSelectorBinding.prototype.setResult=function(_94c){
alert("TODO: MultiSelectorBinding#setResult");
};
HTMLDataDialogBinding.prototype=new PostBackDataDialogBinding;
HTMLDataDialogBinding.prototype.constructor=HTMLDataDialogBinding;
HTMLDataDialogBinding.superclass=PostBackDataDialogBinding.prototype;
function HTMLDataDialogBinding(){
this.logger=SystemLogger.getLogger("HTMLDataDialogBinding");
}
HTMLDataDialogBinding.prototype.toString=function(){
return "[HTMLDataDialogBinding]";
};
HTMLDataDialogBinding.prototype.onBindingAttach=function(){
if(this.getProperty("label")==null){
this.setProperty("label","Edit HTML");
}
HTMLDataDialogBinding.superclass.onBindingAttach.call(this);
};
HTMLDataDialogBinding.prototype.fireCommand=function(){
this.dispatchAction(DataDialogBinding.ACTION_COMMAND);
var _94d={label:DataBinding.getAssociatedLabel(this),value:decodeURIComponent(this.getValue()),configuration:{"formattingconfiguration":this.getProperty("formattingconfiguration"),"elementclassconfiguration":this.getProperty("elementclassconfiguration"),"configurationstylesheet":this.getProperty("configurationstylesheet"),"presentationstylesheet":this.getProperty("presentationstylesheet"),"embedablefieldstypenames":this.getProperty("embedablefieldstypenames")}};
var _94e=ViewDefinitions["Composite.Management.VisualEditorDialog"];
_94e.handler=this._handler;
_94e.argument=_94d;
StageBinding.presentViewDefinition(_94e);
this._releaseKeyboard();
};
MultiSelectorDataDialogBinding.prototype=new DataDialogBinding;
MultiSelectorDataDialogBinding.prototype.constructor=MultiSelectorDataDialogBinding;
MultiSelectorDataDialogBinding.superclass=DataDialogBinding.prototype;
MultiSelectorDataDialogBinding.ACTION_RESULT="multiselectordatadialog result";
function MultiSelectorDataDialogBinding(){
this.logger=SystemLogger.getLogger("MultiSelectorDataDialogBinding");
this._dialogViewHandle="Composite.Management.MultiSelectorDialog";
this.isFocusable=false;
this.selections=null;
return this;
}
MultiSelectorDataDialogBinding.prototype.toString=function(){
return "[MultiSelectorDataDialogBinding]";
};
MultiSelectorDataDialogBinding.prototype.onBindingAttach=function(){
this.setProperty("label",StringBundle.getString("ui","Website.Misc.MultiSelector.LabelEditSelections"));
MultiSelectorDataDialogBinding.superclass.onBindingAttach.call(this);
};
MultiSelectorDataDialogBinding.prototype.fireCommand=function(){
this.dispatchAction(DataDialogBinding.ACTION_COMMAND);
var _94f={label:DataBinding.getAssociatedLabel(this),selections:this.selections};
var self=this;
var _951={handleDialogResponse:function(_952,_953){
if(_952==Dialog.RESPONSE_ACCEPT){
self.result=_953;
self.dispatchAction(MultiSelectorDataDialogBinding.ACTION_RESULT);
}
}};
var _954=ViewDefinitions[this._dialogViewHandle];
_954.handler=_951;
_954.argument=_94f;
StageBinding.presentViewDefinition(_954);
};
MultiSelectorDataDialogBinding.newInstance=function(_955){
var _956=DOMUtil.createElementNS(Constants.NS_UI,"ui:datadialog",_955);
return UserInterface.registerBinding(_956,MultiSelectorDataDialogBinding);
};
LazyBindingSetBinding.prototype=new Binding;
LazyBindingSetBinding.prototype.constructor=LazyBindingSetBinding;
LazyBindingSetBinding.superclass=Binding.prototype;
function LazyBindingSetBinding(){
this.logger=SystemLogger.getLogger("LazyBindingSetBinding");
}
LazyBindingSetBinding.prototype.toString=function(){
return "[LazyBindingSetBinding]";
};
LazyBindingBinding.prototype=new DataBinding;
LazyBindingBinding.prototype.constructor=LazyBindingBinding;
LazyBindingBinding.superclass=DataBinding.prototype;
LazyBindingBinding.ID_APPENDIX="lazybinding";
LazyBindingBinding.wakeUp=function(_957){
var id=_957.bindingElement.id+LazyBindingBinding.ID_APPENDIX;
var _959=_957.bindingDocument.getElementById(id);
if(_959!=null){
var _95a=UserInterface.getBinding(_959);
_95a.setResult(true);
}
};
function LazyBindingBinding(){
this.logger=SystemLogger.getLogger("LazyBindingBinding");
this.isFocusable=false;
this._isLazy=false;
}
LazyBindingBinding.prototype.toString=function(){
return "[LazyBindingBinding]";
};
LazyBindingBinding.prototype.onBindingRegister=function(){
LazyBindingBinding.superclass.onBindingRegister.call(this);
var id=this.getProperty("bindingid");
if(id!=null){
var _95c=this.bindingDocument.getElementById(id);
if(_95c!=null){
var _95d=UserInterface.getBinding(_95c);
if(_95d&&!_95d.isAttached){
_95d.isLazy=true;
}else{
_95c.setAttribute("lazy",true);
}
}
}
};
LazyBindingBinding.prototype.validate=function(){
return true;
};
LazyBindingBinding.prototype.manifest=function(){
if(this.isAttached){
if(this.shadowTree.input==null){
this.shadowTree.input=DOMUtil.createElementNS(Constants.NS_XHTML,"input",this.bindingDocument);
this.shadowTree.input.type="hidden";
this.shadowTree.input.name=this.getName();
this.bindingElement.appendChild(this.shadowTree.input);
}
this.shadowTree.input.value=this.getValue();
}
};
LazyBindingBinding.prototype.getValue=function(){
return String(this._isLazy);
};
LazyBindingBinding.prototype.setValue=function(){
throw "Not implemented";
};
LazyBindingBinding.prototype.getResult=function(){
return this._isLazy;
};
LazyBindingBinding.prototype.setResult=function(_95e){
this._isLazy=_95e;
};
EditorDataBinding.prototype=new WindowBinding;
EditorDataBinding.prototype.constructor=EditorDataBinding;
EditorDataBinding.superclass=WindowBinding.prototype;
function EditorDataBinding(){
this.logger=SystemLogger.getLogger("EditorDataBinding");
this.isFocusable=false;
this._url=WindowBinding.DEFAULT_URL;
this.isDirty=false;
return this;
}
EditorDataBinding.prototype.toString=function(){
return "[EditorDataBinding]";
};
EditorDataBinding.prototype.onBindingRegister=function(){
EditorDataBinding.superclass.onBindingRegister.call(this);
DataBinding.prototype.onBindingRegister.call(this);
this._coverBinding=this.add(CoverBinding.newInstance(this.bindingDocument)).attach();
var url=this._url;
var _960=this.getProperty("stateprovider");
var _961=this.getProperty("handle");
if(_960!=null&&_961!=null){
url=url.replace("${stateprovider}",_960).replace("${handle}",_961);
}else{
url=url.split("?")[0];
}
this.logger.debug("Loading URL: "+url);
this.setURL(url);
};
EditorDataBinding.prototype.onBindingAttach=function(){
EditorDataBinding.superclass.onBindingAttach.call(this);
this.addActionListener(Binding.ACTION_DIRTY);
Application.lock(this);
};
EditorDataBinding.prototype._onPageInitialize=function(_962){
EditorDataBinding.superclass._onPageInitialize.call(this,_962);
if(this._pageBinding!=null){
Application.unlock(this);
this._coverBinding.hide();
}
};
EditorDataBinding.prototype.setName=DataBinding.prototype.setName;
EditorDataBinding.prototype.validate=function(){
return this._pageBinding.validateAllDataBindings();
};
EditorDataBinding.prototype.handleAction=function(_963){
EditorDataBinding.superclass.handleAction.call(this,_963);
switch(_963.type){
case Binding.ACTION_DIRTY:
if(_963.target!=this){
if(!this.isDirty){
this.dirty();
}
_963.consume();
}
break;
}
};
EditorDataBinding.prototype.manifest=function(){
};
EditorDataBinding.prototype.dirty=function(){
if(!this.isDirty){
this.isDirty=true;
this.dispatchAction(Binding.ACTION_DIRTY);
}
};
EditorDataBinding.prototype.clean=function(){
this._pageBinding.cleanAllDataBindings();
DataBinding.prototype.clean.call(this);
};
EditorDataBinding.prototype.focus=function(){
};
EditorDataBinding.prototype.blur=function(){
};
EditorDataBinding.prototype.getName=function(){
};
EditorDataBinding.prototype.getValue=function(){
};
EditorDataBinding.prototype.setValue=function(_964){
};
EditorDataBinding.prototype.getResult=function(){
return null;
};
EditorDataBinding.prototype.setResult=function(_965){
};
FunctionEditorDataBinding.prototype=new EditorDataBinding;
FunctionEditorDataBinding.prototype.constructor=FunctionEditorDataBinding;
FunctionEditorDataBinding.superclass=EditorDataBinding.prototype;
function FunctionEditorDataBinding(){
this.logger=SystemLogger.getLogger("FunctionEditorDataBinding");
this._url="${root}/content/misc/editors/functioncalleditor/functioncalleditor.aspx?StateProvider=${stateprovider}&Handle=${handle}";
return this;
}
FunctionEditorDataBinding.prototype.toString=function(){
return "[FunctionEditorDataBinding]";
};
ParameterEditorDataBinding.prototype=new EditorDataBinding;
ParameterEditorDataBinding.prototype.constructor=ParameterEditorDataBinding;
ParameterEditorDataBinding.superclass=EditorDataBinding.prototype;
function ParameterEditorDataBinding(){
this.logger=SystemLogger.getLogger("ParameterEditorDataBinding");
this._url="${root}/controls/FormsControls/FormUiControlTemplates/DeveloperTools/FunctionParameterEditor.aspx?StateProvider=${stateprovider}&handle=${handle}";
return this;
}
ParameterEditorDataBinding.prototype.toString=function(){
return "[ParameterEditorDataBinding]";
};
ParameterEditorDataBinding.prototype.getValue=function(){
return Math.random();
};
FilePickerBinding.prototype=new DataBinding;
FilePickerBinding.prototype.constructor=FilePickerBinding;
FilePickerBinding.superclass=DataBinding.prototype;
function FilePickerBinding(){
this.logger=SystemLogger.getLogger("FilePickerBinding");
this.isReadOnly=true;
this._isValid=true;
return this;
}
FilePickerBinding.prototype.toString=function(){
return "[FilePickerBinding]";
};
FilePickerBinding.prototype.onBindingAttach=function(){
FilePickerBinding.superclass.onBindingAttach.call(this);
var real=this.getDescendantElementsByLocalName("input").getLast();
var fake=this.getDescendantBindingByLocalName("datainput");
fake.isFocusable=false;
var self=this;
real.onchange=function(){
fake.setValue(this.value);
self.dirty();
if(!self._isValid){
self.validate();
}
};
};
FilePickerBinding.prototype.validate=function(){
var _969=true;
if(this.getProperty("required")){
var fake=this.getDescendantBindingByLocalName("datainput");
_969=fake.getValue()!="";
}
if(!_969&&this._isValid){
this._isValid=false;
this.dispatchAction(Binding.ACTION_INVALID);
}else{
if(_969&&!this._isValid){
this.dispatchAction(Binding.ACTION_VALID);
}
}
return _969;
};
FilePickerBinding.prototype.focus=function(){
FilePickerBinding.superclass.focus.call(this);
if(this.isFocused){
var fake=this.getDescendantBindingByLocalName("datainput");
if(fake!=null){
fake.attachClassName(DataBinding.CLASSNAME_FOCUSED);
}
}
};
FilePickerBinding.prototype.blur=function(){
FilePickerBinding.superclass.blur.call(this);
if(!this.isFocused){
var fake=this.getDescendantBindingByLocalName("datainput");
if(fake!=null){
fake.detachClassName(DataBinding.CLASSNAME_FOCUSED);
}
}
};
FilePickerBinding.prototype.manifest=function(){
};
FilePickerBinding.prototype.getValue=function(){
};
FilePickerBinding.prototype.setValue=function(){
};
FilePickerBinding.prototype.getResult=function(){
};
FilePickerBinding.prototype.setResult=function(){
};
RequestBinding.prototype=new Binding;
RequestBinding.prototype.constructor=RequestBinding;
RequestBinding.superclass=Binding.prototype;
RequestBinding.CALLBACK_ID="__REQUEST";
RequestBinding.INPUT_ID="__CONSOLEID";
function RequestBinding(){
this.logger=SystemLogger.getLogger("RequestBinding");
return this;
}
RequestBinding.prototype.toString=function(){
return "[RequestBinding]";
};
RequestBinding.prototype.onBindingAttach=function(){
RequestBinding.superclass.onBindingAttach.call(this);
this.setCallBackID(RequestBinding.CALLBACK_ID);
Binding.dotnetify(this);
var _96d=this.bindingDocument.getElementById(RequestBinding.INPUT_ID);
if(_96d!=null){
_96d.value=Application.CONSOLE_ID;
}
};
RequestBinding.prototype.postback=function(_96e){
_96e=_96e!=null?_96e:EditorPageBinding.message;
this.shadowTree.dotnetinput.value=_96e;
this.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
};
FieldGroupBinding.prototype=new Binding;
FieldGroupBinding.prototype.constructor=FieldGroupBinding;
FieldGroupBinding.superclass=Binding.prototype;
FieldGroupBinding.CENTER="group-c";
FieldGroupBinding.NORTH="group-n";
FieldGroupBinding.SOUTH="group-s";
FieldGroupBinding.EAST="group-e";
FieldGroupBinding.WEST="group-w";
FieldGroupBinding.NORTHEAST="group-ne";
FieldGroupBinding.NORTHWEST="group-nw";
FieldGroupBinding.SOUTHEAST="group-se";
FieldGroupBinding.SOUTHWEST="group-sw";
FieldGroupBinding.ACTION_HIDE="fieldgrouphide";
FieldGroupBinding.CLASSNAME_NOLABEL="nolabel";
FieldGroupBinding.CLASSNAME_FIRST="first";
function FieldGroupBinding(){
this.logger=SystemLogger.getLogger("FieldGroupBinding");
}
FieldGroupBinding.prototype.toString=function(){
return "[FieldGroupBinding]";
};
FieldGroupBinding.prototype.onBindingRegister=function(){
FieldGroupBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["label"]=this.setLabel;
this._innerHTML();
this._buildDOMContent();
};
FieldGroupBinding.prototype._innerHTML=function(){
var _96f=Templates.getTemplateElementText("fieldgroupmatrix.xml");
var _970=_96f.replace("MARKUP",this.bindingElement.innerHTML);
try{
this.bindingElement.innerHTML=_970;
}
catch(exception1){
this.logger.error("Exeption in innerHTML!");
_970=_970.replace(/\&nbsp;/g,"");
this.bindingElement.innerHTML=_970;
}
var self=this;
var _972=DOMUtil.getElementsByTagName(this.bindingElement,"table").item(0);
new List(_972.rows).each(function(row){
new List(row.cells).each(function(cell){
self.shadowTree[cell.className]=cell;
});
});
};
FieldGroupBinding.prototype._buildDOMContent=function(){
var _975=this.getProperty("label");
if(_975){
this.setLabel(_975);
}else{
this.attachClassName(FieldGroupBinding.CLASSNAME_NOLABEL);
}
};
FieldGroupBinding.prototype.setLabel=function(_976){
this.setProperty("label",_976);
if(this.shadowTree.labelBinding==null){
var _977=LabelBinding.newInstance(this.bindingDocument);
var cell=this.shadowTree[FieldGroupBinding.NORTH];
_977.attachClassName("fieldgrouplabel");
cell.insertBefore(_977.bindingElement,cell.getElementsByTagName("div").item(1));
_977.attach();
this.shadowTree.labelBinding=_977;
}
this.shadowTree.labelBinding.setLabel(Resolver.resolve(_976));
};
FieldGroupBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
FieldGroupBinding.prototype.add=function(_979){
this.shadowTree[FieldGroupBinding.CENTER].appendChild(_979.bindingElement);
return _979;
};
FieldGroupBinding.prototype.addFirst=function(_97a){
var _97b=this.shadowTree[FieldGroupBinding.CENTER];
_97b.insertBefore(_97a.bindingElement,_97b.firstChild);
return _97a;
};
FieldBinding.prototype=new Binding;
FieldBinding.prototype.constructor=FieldBinding;
FieldBinding.superclass=Binding.prototype;
function FieldBinding(){
this.logger=SystemLogger.getLogger("FieldBinding");
this.bindingRelation=null;
return this;
}
FieldBinding.prototype.toString=function(){
return "[FieldBinding]";
};
FieldBinding.prototype.onBindingRegister=function(){
FieldBinding.superclass.onBindingRegister.call(this);
this.attachClassName(Binding.CLASSNAME_CLEARFLOAT);
var _97c=this.getProperty("relation");
if(_97c!=null){
this.bindingRelation=_97c;
this.subscribe(BroadcastMessages.BINDING_RELATE);
this.hide();
}
};
FieldBinding.prototype.handleBroadcast=function(_97d,arg){
FieldBinding.superclass.handleBroadcast.call(this,_97d,arg);
switch(_97d){
case BroadcastMessages.BINDING_RELATE:
if(arg.relate==this.bindingRelation&&arg.origin==this.bindingDocument){
if(arg.result==true){
if(!this.isVisible){
this.show();
this.dispatchAction(Binding.ACTION_UPDATED);
}
}else{
if(this.isVisible){
this.hide();
this.dispatchAction(Binding.ACTION_UPDATED);
}
}
}
break;
}
};
FieldBinding.newInstance=function(_97f){
var _980=DOMUtil.createElementNS(Constants.NS_UI,"ui:field",_97f);
return UserInterface.registerBinding(_980,FieldBinding);
};
FieldsBinding.prototype=new Binding;
FieldsBinding.prototype.constructor=FieldsBinding;
FieldsBinding.superclass=Binding.prototype;
FieldsBinding.ACTION_LAYOUT_UPDATED="fieldslayoutupdated";
function FieldsBinding(){
this.logger=SystemLogger.getLogger("FieldsBinding");
this._invalidCount=0;
this._invalidFieldLabels=null;
this.crawlerFilters=new List([FlexBoxCrawler.ID,FitnessCrawler.ID]);
return this;
}
FieldsBinding.prototype.toString=function(){
return "[FieldsBinding]";
};
FieldsBinding.prototype.onBindingRegister=function(){
FieldsBinding.superclass.onBindingRegister.call(this);
this.addActionListener(Binding.ACTION_INVALID);
this.addActionListener(Binding.ACTION_VALID);
this.addActionListener(FieldGroupBinding.ACTION_HIDE);
this._invalidFieldLabels=new Map();
};
FieldsBinding.prototype.onBindingInitialize=function(){
FieldsBinding.superclass.onBindingInitialize.call(this);
this.bindingElement.style.display="block";
var _981=this.getDescendantBindingByLocalName("fieldgroup");
if(_981!=null){
_981.attachClassName(FieldGroupBinding.CLASSNAME_FIRST);
}
};
FieldsBinding.prototype.onBindingDispose=function(){
FieldsBinding.superclass.onBindingDispose.call(this);
if(this._invalidCount>0){
this.dispatchAction(Binding.ACTION_VALID);
}
};
FieldsBinding.prototype.validate=function(){
var _982=true;
var _983=this.getDescendantBindingsByLocalName("*");
while(_983.hasNext()){
var _984=_983.getNext();
if(Interfaces.isImplemented(IData,_984)){
var _985=_984.validate();
if(_982&&!_985){
_982=false;
}
}
}
return _982;
};
FieldsBinding.prototype.handleAction=function(_986){
FieldsBinding.superclass.handleAction.call(this,_986);
var _987=_986.target;
if(_987!=this){
switch(_986.type){
case Binding.ACTION_INVALID:
var _988=DataBinding.getAssociatedLabel(_987);
if(_988){
this._invalidFieldLabels.set(_987.key,_988);
}
if(_987.error){
if(!_987.isInvalidBecauseRequired){
ErrorBinding.presentError({text:_987.error},_987);
}
}
if(this._invalidCount==0){
this.dispatchAction(Binding.ACTION_INVALID);
}
this._invalidCount++;
_986.consume();
break;
case Binding.ACTION_VALID:
if(this._invalidFieldLabels.has(_987.key)){
this._invalidFieldLabels.del(_987.key);
}
this._invalidCount--;
if(this._invalidCount==0){
this.dispatchAction(Binding.ACTION_VALID);
}
_986.consume();
break;
}
}
};
FieldsBinding.prototype.getInvalidLabels=function(){
var _989=null;
if(this._invalidFieldLabels.hasEntries()){
_989=this._invalidFieldLabels.toList();
}
return _989;
};
FieldsBinding.newInstance=function(_98a){
var _98b=DOMUtil.createElementNS(Constants.NS_UI,"ui:fields",_98a);
return UserInterface.registerBinding(_98b,FieldsBinding);
};
FieldDescBinding.prototype=new Binding;
FieldDescBinding.prototype.constructor=FieldDescBinding;
FieldDescBinding.superclass=Binding.prototype;
function FieldDescBinding(){
this.logger=SystemLogger.getLogger("FieldDescBinding");
return this;
}
FieldDescBinding.prototype.toString=function(){
return "[FieldDescBinding]";
};
FieldDescBinding.prototype.onBindingAttach=function(){
Binding.prototype.onBindingAttach.call(this);
this.buildDOMContent();
this.attachDOMEvents();
};
FieldDescBinding.prototype.buildDOMContent=function(){
var _98c=this.getProperty("image");
if(_98c){
this.setImage(_98c);
}
var _98d=this.getProperty("tooltip");
if(_98d){
this.setToolTip(_98d);
}
var _98e=this.getProperty("label");
if(_98e){
this.setLabel(_98e);
}
};
FieldDescBinding.prototype.attachDOMEvents=function(){
this.addEventListener(DOMEvents.CLICK);
};
FieldDescBinding.prototype.handleEvent=function(e){
FieldDescBinding.superclass.handleEvent.call(this,e);
switch(e.type){
case DOMEvents.CLICK:
var _990=this.getAncestorBindingByLocalName("field");
if(_990){
var _991=true;
_990.getDescendantBindingsByLocalName("*").each(function(_992){
if(Interfaces.isImplemented(IData,_992)){
_992.focus();
_991=false;
}
return _991;
});
}
break;
}
};
FieldDescBinding.prototype.setLabel=function(_993){
this.setProperty("label",_993);
if(this.isAttached){
this.bindingElement.innerHTML=Resolver.resolve(_993);
}
};
FieldDescBinding.prototype.getLabel=function(){
var _994=this.getProperty("label");
if(!_994){
var node=this.bindingElement.firstChild;
if(node&&node.nodeType==Node.TEXT_NODE){
_994=node.data;
}
}
return _994;
};
FieldDescBinding.prototype.setImage=function(_996){
this.setProperty("image",_996);
if(this.isAttached){
throw "FieldDescBinding: Images not suppoerted!";
}
};
FieldDescBinding.prototype.setToolTip=function(_997){
this.setProperty("tooltip",_997);
if(this.isAttached){
this.bindingElement.title=_997;
}
};
FieldDescBinding.newInstance=function(_998){
var _999=DOMUtil.createElementNS(Constants.NS_UI,"ui:fielddesc",_998);
return UserInterface.registerBinding(_999,FieldDescBinding);
};
FieldDataBinding.prototype=new Binding;
FieldDataBinding.prototype.constructor=FieldDataBinding;
FieldDataBinding.superclass=Binding.prototype;
function FieldDataBinding(){
this.logger=SystemLogger.getLogger("FieldDataBinding");
return this;
}
FieldDataBinding.prototype.toString=function(){
return "[FieldDataBinding]";
};
FieldDataBinding.newInstance=function(_99a){
var _99b=DOMUtil.createElementNS(Constants.NS_UI,"ui:fielddata",_99a);
return UserInterface.registerBinding(_99b,FieldDataBinding);
};
FieldHelpBinding.prototype=new Binding;
FieldHelpBinding.prototype.constructor=FieldHelpBinding;
FieldHelpBinding.superclass=Binding.prototype;
FieldHelpBinding.INDICATOR_IMAGE="${skin}/fields/fieldhelpindicator.png";
function FieldHelpBinding(){
this.logger=SystemLogger.getLogger("FieldHelpBinding");
return this;
}
FieldHelpBinding.prototype.toString=function(){
return "[FieldHelpBinding]";
};
FieldHelpBinding.prototype.onBindingAttach=function(){
FieldHelpBinding.superclass.onBindingAttach.call(this);
this.buildPopupBinding();
this.buildPopupButton();
};
FieldHelpBinding.prototype.onBindingDispose=function(){
FieldHelpBinding.superclass.onBindingDispose.call(this);
var _99c=this._fieldHelpPopupBinding;
if(_99c){
_99c.dispose();
}
};
FieldHelpBinding.prototype.buildPopupBinding=function(){
var _99d=app.bindingMap.fieldhelpopupset;
var doc=_99d.bindingDocument;
var _99f=_99d.add(PopupBinding.newInstance(doc));
var _9a0=_99f.add(PopupBodyBinding.newInstance(doc));
_99f.position=PopupBinding.POSITION_RIGHT;
_99f.attachClassName("fieldhelppopup");
if(this.bindingElement.hasChildNodes()){
_9a0.bindingElement.innerHTML=this.bindingElement.innerHTML;
}else{
var _9a1=this.getProperty("label");
if(_9a1){
_9a0.bindingElement.innerHTML=Resolver.resolve(_9a1);
}
}
this.bindingElement.innerHTML="";
this._fieldHelpPopupBinding=_99f;
};
FieldHelpBinding.prototype.buildPopupButton=function(){
var _9a2=this.getAncestorBindingByLocalName("field");
if(_9a2){
_9a2.attachClassName("fieldhelp");
var _9a3=ClickButtonBinding.newInstance(this.bindingDocument);
_9a3.attachClassName("fieldhelp");
_9a3.setImage(FieldHelpBinding.INDICATOR_IMAGE);
this.add(_9a3);
_9a3.attach();
var self=this;
_9a3.oncommand=function(){
self.attachPopupBinding();
};
_9a3.setPopup(this._fieldHelpPopupBinding);
this._fieldHelpButton=_9a3;
}
};
FieldHelpBinding.prototype.attachPopupBinding=function(){
var _9a5=this._fieldHelpPopupBinding;
if(_9a5&&!_9a5.isAttached){
_9a5.attachRecursive();
}
};
RadioDataGroupBinding.prototype=new RadioGroupBinding;
RadioDataGroupBinding.prototype.constructor=RadioDataGroupBinding;
RadioDataGroupBinding.superclass=RadioGroupBinding.prototype;
function RadioDataGroupBinding(){
this.logger=SystemLogger.getLogger("RadioDataGroupBinding");
this._name=null;
this.isDirty=false;
this._hasFocus=false;
this.isFocusable=true;
this.isFocused=false;
}
RadioDataGroupBinding.prototype.toString=function(){
return "[RadioDataGroupBinding]";
};
RadioDataGroupBinding.prototype.onBindingRegister=function(){
RadioDataGroupBinding.superclass.onBindingRegister.call(this);
DataBinding.prototype.onBindingRegister.call(this);
this.addActionListener(RadioGroupBinding.ACTION_SELECTIONCHANGED,this);
};
RadioDataGroupBinding.prototype.onBindingAttach=function(){
RadioDataGroupBinding.superclass.onBindingAttach.call(this);
this.bindingElement.tabIndex=0;
if(Client.isExplorer){
this.bindingElement.hideFocus=true;
}
var self=this;
DOMEvents.addEventListener(this.bindingElement,DOMEvents.FOCUS,{handleEvent:function(){
self.focus(true);
}});
};
RadioDataGroupBinding.prototype.onBindingDispose=function(){
RadioDataGroupBinding.superclass.onBindingDispose.call(this);
DataBinding.prototype.onBindingDispose.call(this);
};
RadioDataGroupBinding.prototype.handleAction=function(_9a7){
RadioDataGroupBinding.superclass.handleAction.call(this,_9a7);
switch(_9a7.type){
case RadioGroupBinding.ACTION_SELECTIONCHANGED:
this.dirty();
break;
}
};
RadioDataGroupBinding.prototype.handleEvent=function(e){
RadioDataGroupBinding.superclass.handleEvent.call(this,e);
if(e.type==DOMEvents.KEYDOWN){
switch(e.keyCode){
case KeyEventCodes.VK_DOWN:
case KeyEventCodes.VK_UP:
DOMEvents.stopPropagation(e);
DOMEvents.preventDefault(e);
Keyboard.keyArrow(e.keyCode);
break;
}
}
};
RadioDataGroupBinding.prototype.handleBroadcast=function(_9a9,arg){
RadioDataGroupBinding.superclass.handleBroadcast.call(this,_9a9,arg);
switch(_9a9){
case BroadcastMessages.KEY_ARROW:
var _9ab=null;
var next=null;
var _9ad=null;
switch(arg){
case KeyEventCodes.VK_DOWN:
case KeyEventCodes.VK_UP:
_9ad=this.getChildBindingsByLocalName("radio");
while(!_9ab&&_9ad.hasNext()){
var _9ae=_9ad.getNext();
if(_9ae.getProperty("ischecked")){
_9ab=_9ae;
}
}
break;
}
if(_9ab){
switch(arg){
case KeyEventCodes.VK_DOWN:
next=_9ad.getFollowing(_9ab);
while(next!=null&&next.isDisabled){
next=_9ad.getFollowing(next);
}
break;
case KeyEventCodes.VK_UP:
next=_9ad.getPreceding(_9ab);
while(next!=null&&next.isDisabled){
next=_9ad.getPreceding(next);
}
break;
}
}
if(next!=null){
this.setCheckedButtonBinding(next);
}
break;
}
};
RadioDataGroupBinding.prototype.setName=DataBinding.prototype.setName;
RadioDataGroupBinding.prototype.getName=DataBinding.prototype.getName;
RadioDataGroupBinding.prototype.dirty=DataBinding.prototype.dirty;
RadioDataGroupBinding.prototype.clean=DataBinding.prototype.clean;
RadioDataGroupBinding.prototype.focus=function(_9af){
if(!this.isFocused){
DataBinding.prototype.focus.call(this);
if(this.isFocused){
if(!_9af){
FocusBinding.focusElement(this.bindingElement);
}
this.addEventListener(DOMEvents.KEYDOWN);
this.subscribe(BroadcastMessages.KEY_ARROW);
}
}
};
RadioDataGroupBinding.prototype.blur=function(){
if(this.isFocused){
DataBinding.prototype.blur.call(this);
this.removeEventListener(DOMEvents.KEYDOWN);
this.unsubscribe(BroadcastMessages.KEY_ARROW);
}
};
RadioDataGroupBinding.prototype.validate=function(){
return true;
};
RadioDataGroupBinding.prototype.manifest=function(){
if(this.isAttached){
if(!this.shadowTree.input){
var _9b0=DOMUtil.createElementNS(Constants.NS_XHTML,"input",this.bindingDocument);
_9b0.type="hidden";
_9b0.name=this._name;
this.bindingElement.appendChild(_9b0);
this.shadowTree.input=_9b0;
}
this.shadowTree.input.value=this.getValue();
}
};
RadioDataGroupBinding.prototype.getValue=function(){
var _9b1=null;
var _9b2=this.getChildBindingsByLocalName("radio");
while(!_9b1&&_9b2.hasNext()){
var _9b3=_9b2.getNext();
if(_9b3.isChecked){
_9b1=_9b3.getProperty("value");
}
}
return _9b1;
};
RadioDataGroupBinding.prototype.getResult=RadioDataGroupBinding.prototype.getValue;
RadioDataGroupBinding.prototype.setValue=function(_9b4){
};
RadioDataGroupBinding.prototype.setResult=function(_9b5){
};
RadioDataBinding.prototype=new Binding;
RadioDataBinding.prototype.constructor=RadioDataBinding;
RadioDataBinding.superclass=Binding.prototype;
function RadioDataBinding(){
this.logger=SystemLogger.getLogger("RadioDataBinding");
this.isRadioButton=false;
this.isChecked=false;
this._result=null;
this.bindingRelate=null;
return this;
}
RadioDataBinding.prototype.toString=function(){
return "[RadioDataBinding]";
};
RadioDataBinding.prototype.onBindingRegister=function(){
RadioDataBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["checked"]=function(_9b6){
if(_9b6!=this.isChecked){
this.setChecked(_9b6,true);
}
};
this.propertyMethodMap["checksum"]=function(){
var _9b7=this.getProperty("ischecked");
if(_9b7!=this.isChecked){
this.setChecked(_9b7,true);
}
};
this._buttonBinding=this.add(RadioButtonBinding.newInstance(this.bindingDocument));
this._hack();
if(this.getProperty("ischecked")==true){
this.check(true);
}
};
RadioDataBinding.prototype.onBindingAttach=function(){
RadioDataBinding.superclass.onBindingAttach.call(this);
this.attachClassName(Binding.CLASSNAME_CLEARFLOAT);
this._buttonBinding.attach();
this._buildDOMContent();
};
RadioDataBinding.prototype._buildDOMContent=function(){
var _9b8=this.getProperty("relate");
var _9b9=this.getProperty("oncommand");
if(_9b8){
this.bindingRelate=_9b8;
this.relate();
}
if(_9b9){
this.oncommand=function(){
Binding.evaluate(_9b9,this);
};
}
if(this.hasCallBackID()){
Binding.dotnetify(this);
}
this._buildLabelText();
};
RadioDataBinding.prototype.relate=function(){
if(this.bindingRelate!=null){
this.logger.warn("Relations not properly implemented!");
EventBroadcaster.broadcast(BroadcastMessages.BINDING_RELATE,{relate:this.bindingRelate,origin:this.bindingDocument,result:this.isChecked});
}
};
RadioDataBinding.prototype.getButton=function(){
return this._buttonBinding;
};
RadioDataBinding.prototype._hack=function(){
var self=this;
var _9bb=this.getCallBackID();
this._buttonBinding.check=function(_9bc){
RadioButtonBinding.prototype.check.call(this,_9bc);
self.setProperty("ischecked",true);
self.isChecked=true;
self.relate();
};
this._buttonBinding.uncheck=function(_9bd){
RadioButtonBinding.prototype.uncheck.call(this,_9bd);
self.deleteProperty("ischecked");
self.isChecked=false;
self.relate();
};
this._buttonBinding.oncommand=function(){
self.isChecked=this.isChecked;
self.relate();
if(Types.isFunction(self.oncommand)){
self.oncommand();
}
};
};
RadioDataBinding.prototype.setChecked=function(_9be,_9bf){
this._buttonBinding.setChecked(_9be,_9bf);
if(this.bindingRelate!=null){
this.relate();
}
this.setProperty("ischecked",_9be);
};
RadioDataBinding.prototype.check=function(_9c0){
this.setChecked(true,_9c0);
};
RadioDataBinding.prototype.uncheck=function(_9c1){
this.setChecked(false,_9c1);
};
RadioDataBinding.prototype.setDisabled=function(_9c2){
if(_9c2!=this.isDisabled){
this.isDisabled=_9c2;
this._buttonBinding.setDisabled(_9c2);
if(_9c2){
this.attachClassName(DataBinding.CLASSNAME_DISABLED);
}else{
this.detachClassName(DataBinding.CLASSNAME_DISABLED);
}
}
};
RadioDataBinding.prototype.disable=function(){
if(!this.isDisabled){
this.setDisabled(true);
}
};
RadioDataBinding.prototype.enable=function(){
if(this.isDisabled){
this.setDisabled(false);
}
};
RadioDataBinding.prototype.handleEvent=function(e){
RadioDataBinding.superclass.handleEvent.call(this,e);
if(e.type==DOMEvents.CLICK){
var _9c4=DOMEvents.getTarget(e);
switch(_9c4){
case this.shadowTree.labelText:
if(!this.isChecked&&!this.isDisabled){
this.check();
}
break;
}
}
};
RadioDataBinding.prototype._buildLabelText=function(){
var _9c5=this.getProperty("label");
if(_9c5){
this.shadowTree.labelText=DOMUtil.createElementNS(Constants.NS_UI,"ui:datalabeltext",this.bindingDocument);
this.shadowTree.labelText.appendChild(this.bindingDocument.createTextNode(Resolver.resolve(_9c5)));
DOMEvents.addEventListener(this.shadowTree.labelText,DOMEvents.CLICK,this);
this.bindingElement.appendChild(this.shadowTree.labelText);
}
};
RadioDataBinding.prototype.setLabel=function(_9c6){
if(this.shadowTree.labelText!=null){
this.shadowTree.labelText.firstChild.data=_9c6;
}
this.setProperty("label",_9c6);
};
CheckBoxBinding.prototype=new Binding;
CheckBoxBinding.prototype.constructor=CheckBoxBinding;
CheckBoxBinding.superclass=Binding.prototype;
CheckBoxBinding.ACTION_COMMAND="checkbox command";
function CheckBoxBinding(){
this.logger=SystemLogger.getLogger("CheckBoxBinding");
this._buttonBinding=null;
this._name=null;
this.isDirty=false;
this.isChecked=false;
this._result=null;
this.isFocusable=true;
this.isFocused=false;
}
CheckBoxBinding.prototype.toString=function(){
return "[CheckBoxBinding]";
};
CheckBoxBinding.prototype.onBindingRegister=function(){
CheckBoxBinding.superclass.onBindingRegister.call(this);
DataBinding.prototype.onBindingRegister.call(this);
this._buildButtonBinding();
this.propertyMethodMap["checked"]=function(_9c7){
if(_9c7!=this.isChecked){
this.setChecked(_9c7,true);
}
};
this.propertyMethodMap["checksum"]=function(){
var _9c8=this.getProperty("ischecked");
if(_9c8!=this.isChecked){
this.setChecked(_9c8,true);
}
};
};
CheckBoxBinding.prototype.onBindingAttach=function(){
CheckBoxBinding.superclass.onBindingAttach.call(this);
this.attachClassName(Binding.CLASSNAME_CLEARFLOAT);
this.bindingElement.tabIndex=0;
if(Client.isExplorer){
this.bindingElement.hideFocus=true;
}
this._buildDOMContent();
};
CheckBoxBinding.prototype.onBindingDispose=function(){
CheckBoxBinding.superclass.onBindingRegister.call(this);
DataBinding.prototype.onBindingDispose.call(this);
};
CheckBoxBinding.prototype._buildDOMContent=RadioDataBinding.prototype._buildDOMContent;
CheckBoxBinding.prototype.handleEvent=function(e){
CheckBoxBinding.superclass.handleEvent.call(this,e);
if(e.type==DOMEvents.CLICK){
var _9ca=DOMEvents.getTarget(e);
switch(_9ca){
case this.shadowTree.labelText:
this.setChecked(!this.isChecked);
break;
}
}
};
CheckBoxBinding.prototype.relate=RadioDataBinding.prototype.relate;
CheckBoxBinding.prototype.handleBroadcast=function(_9cb,arg){
CheckBoxBinding.superclass.handleBroadcast.call(this,_9cb,arg);
switch(_9cb){
case BroadcastMessages.KEY_SPACE:
this.setChecked(!this.isChecked);
break;
}
};
CheckBoxBinding.prototype._buildButtonBinding=function(){
this._buttonBinding=this.add(CheckButtonBinding.newInstance(this.bindingDocument));
var self=this;
this._buttonBinding.addActionListener(ButtonBinding.ACTION_COMMAND,{handleAction:function(_9ce){
_9ce.consume();
self.dispatchAction(CheckBoxBinding.ACTION_COMMAND);
}});
this._hack();
this._buttonBinding.attach();
if(this.getProperty("ischecked")){
this.check(true);
}
};
CheckBoxBinding.prototype._hack=function(){
var self=this;
var _9d0=this.getCallBackID();
this._buttonBinding.check=function(_9d1){
ButtonBinding.prototype.check.call(this,_9d1);
self.setProperty("ischecked",true);
self.isChecked=true;
self.relate();
if(!_9d1){
self.focus();
}
};
this._buttonBinding.uncheck=function(_9d2){
ButtonBinding.prototype.uncheck.call(this,_9d2);
self.setProperty("ischecked",false);
self.isChecked=false;
self.relate();
};
this._buttonBinding.oncommand=function(){
self.isChecked=this.isChecked;
self.focus();
self.relate();
if(self.oncommand){
self.oncommand();
}
self.dirty();
if(_9d0!=null){
self.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
}
};
};
CheckBoxBinding.prototype.setChecked=RadioDataBinding.prototype.setChecked;
CheckBoxBinding.prototype.check=RadioDataBinding.prototype.check;
CheckBoxBinding.prototype.uncheck=RadioDataBinding.prototype.uncheck;
CheckBoxBinding.prototype._buildLabelText=RadioDataBinding.prototype._buildLabelText;
CheckBoxBinding.prototype.setLabel=RadioDataBinding.prototype.setLabel;
CheckBoxBinding.prototype.setName=DataBinding.prototype.setName;
CheckBoxBinding.prototype.getName=DataBinding.prototype.getName;
CheckBoxBinding.prototype.dirty=DataBinding.prototype.dirty;
CheckBoxBinding.prototype.clean=DataBinding.prototype.clean;
CheckBoxBinding.prototype.focus=function(){
if(!this.isFocused){
DataBinding.prototype.focus.call(this);
if(this.isFocused){
FocusBinding.focusElement(this.bindingElement);
this.subscribe(BroadcastMessages.KEY_SPACE);
}
}
};
CheckBoxBinding.prototype.blur=function(){
if(this.isFocused){
DataBinding.prototype.blur.call(this);
this.unsubscribe(BroadcastMessages.KEY_SPACE);
}
};
CheckBoxBinding.prototype.validate=function(){
var _9d3=true;
var _9d4=this.bindingElement.parentNode;
if(_9d4){
var _9d5=UserInterface.getBinding(_9d4);
if(_9d5&&_9d5 instanceof CheckBoxGroupBinding){
if(_9d5.isRequired){
if(_9d5.isValid){
_9d3=_9d5.validate();
}else{
_9d3=false;
}
}
}
}
return _9d3;
};
CheckBoxBinding.prototype.manifest=function(){
if(this.isAttached){
switch(this.isChecked){
case true:
if(!this.shadowTree.input){
var _9d6=DOMUtil.createElementNS(Constants.NS_XHTML,"input",this.bindingDocument);
_9d6.type="hidden";
_9d6.name=this._name;
_9d6.style.display="none";
this.bindingElement.appendChild(_9d6);
this.shadowTree.input=_9d6;
}
this.shadowTree.input.value=this.getValue();
break;
case false:
if(this.shadowTree.input){
this.bindingElement.removeChild(this.shadowTree.input);
this.shadowTree.input=null;
}
break;
}
}
};
CheckBoxBinding.prototype.getValue=function(){
var _9d7=null;
var _9d8=this.getProperty("value");
if(this.isChecked){
_9d7=_9d8?_9d8:"on";
}
return _9d7;
};
CheckBoxBinding.prototype.setValue=function(_9d9){
if(_9d9==this.getValue()||_9d9=="on"){
this.check(true);
}else{
if(_9d9!="on"){
this.setPropety("value",_9d9);
}
}
};
CheckBoxBinding.prototype.getResult=function(){
var _9da=false;
if(this.isChecked){
_9da=this._result!=null?this._result:true;
}
return _9da;
};
CheckBoxBinding.prototype.setResult=function(_9db){
if(typeof _9db=="boolean"){
this.setChecked(_9db,true);
}else{
this._result=_9db;
}
};
CheckBoxBinding.newInstance=function(_9dc){
var _9dd=DOMUtil.createElementNS(Constants.NS_UI,"ui:checkbox",_9dc);
return UserInterface.registerBinding(_9dd,CheckBoxBinding);
};
CheckBoxGroupBinding.prototype=new Binding;
CheckBoxGroupBinding.prototype.constructor=CheckBoxGroupBinding;
CheckBoxGroupBinding.superclass=Binding.prototype;
function CheckBoxGroupBinding(){
this.logger=SystemLogger.getLogger("CheckBoxGroupBinding");
this.isRequired=false;
this.isValid=true;
}
CheckBoxGroupBinding.prototype.toString=function(){
return "[CheckBoxGroupBinding]";
};
CheckBoxGroupBinding.prototype.onBindingAttach=function(){
CheckBoxGroupBinding.superclass.onBindingAttach.call(this);
this.isRequired=this.getProperty("required")==true;
};
CheckBoxGroupBinding.prototype.validate=function(){
var _9de=true;
if(this.isRequired){
var _9df=this.getDescendantBindingsByLocalName("checkbox");
if(_9df.hasEntries()){
_9de=false;
while(_9df.hasNext()&&!_9de){
if(_9df.getNext().isChecked){
_9de=true;
}
}
}
if(_9de==false){
this._showWarning(true);
this.dispatchAction(Binding.ACTION_INVALID);
this.addActionListener(CheckBoxBinding.ACTION_COMMAND);
}
}
return _9de;
};
CheckBoxGroupBinding.prototype._showWarning=function(_9e0){
if(_9e0){
if(!this._labelBinding){
var _9e1=LabelBinding.newInstance(this.bindingDocument);
_9e1.attachClassName("invalid");
_9e1.setImage("${icon:error}");
_9e1.setLabel("Selection required");
this._labelBinding=this.addFirst(_9e1);
this._labelBinding.attach();
}
}else{
if(this._labelBinding){
this._labelBinding.dispose();
this._labelBinding=null;
}
}
};
CheckBoxGroupBinding.prototype.handleAction=function(_9e2){
CheckBoxGroupBinding.superclass.handleAction.call(this,_9e2);
switch(_9e2.type){
case CheckBoxBinding.ACTION_COMMAND:
this._showWarning(false);
this.dispatchAction(Binding.ACTION_VALID);
this.removeActionListener(CheckBoxBinding.ACTION_COMMAND);
break;
}
};
CheckBoxGroupBinding.newInstance=function(_9e3){
var _9e4=DOMUtil.createElementNS(Constants.NS_UI,"ui:checkboxgroup",_9e3);
return UserInterface.registerBinding(_9e4,CheckBoxGroupBinding);
};
BalloonSetBinding.prototype=new Binding;
BalloonSetBinding.prototype.constructor=BalloonSetBinding;
BalloonSetBinding.superclass=Binding.prototype;
function BalloonSetBinding(){
this.logger=SystemLogger.getLogger("BalloonSetBinding");
}
BalloonSetBinding.prototype.toString=function(){
return "[BalloonSetBinding]";
};
BalloonBinding.prototype=new MatrixBinding;
BalloonBinding.prototype.constructor=BalloonBinding;
BalloonBinding.superclass=MatrixBinding.prototype;
BalloonBinding.TIMEOUT=parseInt(200);
BalloonBinding.OFFSET_X=parseInt(14);
BalloonBinding.OFFSET_Y=parseInt(6);
BalloonBinding.ACTION_SNAP="balloon snap";
BalloonBinding.CLASSNAME_LEFT="left";
BalloonBinding.ACTION_INITIALIZE="ballon initialize";
function BalloonBinding(){
this.logger=SystemLogger.getLogger("BalloonBinding");
this._snapTargetBinding=null;
this._environmentBinding=null;
return this;
}
BalloonBinding.prototype.toString=function(){
return "[BalloonBinding]";
};
BalloonBinding.prototype.onBindingAttach=function(){
BalloonBinding.superclass.onBindingAttach.call(this);
this.addActionListener(Binding.ACTION_ACTIVATED);
this.addActionListener(ControlBinding.ACTION_COMMAND);
this._controlGroupBinding=this.add(ControlGroupBinding.newInstance(this.bindingDocument));
var _9e5=DialogControlBinding.newInstance(this.bindingDocument);
_9e5.setControlType(ControlBinding.TYPE_CLOSE);
this._controlGroupBinding.add(_9e5);
this._controlGroupBinding.attachRecursive();
var _9e6=DOMUtil.createElementNS(Constants.NS_UI,"ui:balloonspeak",this.bindingDocument);
this.bindingElement.appendChild(_9e6);
var _9e7=this.getLabel();
if(_9e7!=null){
this.setLabel(_9e7);
}
};
BalloonBinding.prototype.onBindingDispose=function(){
BalloonBinding.superclass.onBindingDispose.call(this);
if(this._updateInterval){
window.clearInterval(this._updateInterval);
this._updateInterval=null;
}
var _9e8=this._snapTargetBinding;
if(Binding.exists(_9e8)==true){
_9e8.removeActionListener(Binding.ACTION_BLURRED,this);
_9e8.removeActionListener(Binding.ACTION_VALID,this);
}
};
BalloonBinding.prototype.snapTo=function(_9e9){
if(Interfaces.isImplemented(IData,_9e9)){
this._snapTargetBinding=_9e9;
var _9ea=_9e9.dispatchAction(BalloonBinding.ACTION_INITIALIZE);
if(_9ea&&_9ea.isConsumed){
this._environmentBinding=_9ea.listener;
}
if(this._environmentBinding){
_9e9.addActionListener(Binding.ACTION_BLURRED,this);
_9e9.addActionListener(Binding.ACTION_VALID,this);
this.subscribe(BroadcastMessages.VIEW_CLOSED);
var self=this;
this._updateInterval=window.setInterval(function(){
if(Binding.exists(_9e9)==true){
self._updatePosition();
}else{
self.dispose();
}
},BalloonBinding.TIMEOUT);
_9e9.dispatchAction(BalloonBinding.ACTION_SNAP);
}else{
throw "No environment fit for balloons!";
}
}
};
BalloonBinding.prototype._updatePosition=function(){
var _9ec=this._snapTargetBinding;
var _9ed=this._environmentBinding;
var root=UserInterface.getBinding(_9ec.bindingDocument.body);
if(Binding.exists(_9ec)&&Binding.exists(_9ed)){
if(!root.isActivated){
if(this.isVisible==true){
this.hide();
}
}else{
if(_9ec.isAttached&&_9ed.isAttached){
var _9ef=_9ec.boxObject.getUniversalPosition();
var _9f0=_9ed.boxObject.getUniversalPosition();
_9f0.y+=_9ed.bindingElement.scrollTop;
_9f0.x+=_9ed.bindingElement.scrollLeft;
var tDim=_9ec.boxObject.getDimension();
var eDim=_9ed.boxObject.getDimension();
var _9f3=false;
if(_9ef.y+tDim.h<_9f0.y){
_9f3=true;
}else{
if(_9ef.x+tDim.w<_9f0.x){
_9f3=true;
}else{
if(_9ef.y>_9f0.y+eDim.h){
_9f3=true;
}else{
if(_9ef.x>_9f0.x+eDim.w){
_9f3=true;
}
}
}
}
if(!_9f3){
this._setComputedPosition(_9ef,_9f0,tDim,eDim);
if(!this.isVisible){
this.show();
}
}else{
if(this.isVisible==true){
this.hide();
}
}
}
}
}else{
this.dispose();
}
};
BalloonBinding.prototype._setComputedPosition=function(_9f4,_9f5,tDim,eDim){
var wDim=WindowManager.getWindowDimensions();
var bDim=this._getDimension();
var _9fa=_9f4;
var _9fb=false;
if(_9f4.x+tDim.w+bDim.w+BalloonBinding.OFFSET_X>=wDim.w){
_9fb=true;
}else{
if(_9f4.x+tDim.w>=_9f5.x+eDim.w){
_9fb=true;
}
}
if(_9fb){
_9fa.x-=(bDim.w+BalloonBinding.OFFSET_X);
this.attachClassName(BalloonBinding.CLASSNAME_LEFT);
}else{
_9fa.x+=tDim.w+BalloonBinding.OFFSET_X;
this.detachClassName(BalloonBinding.CLASSNAME_LEFT);
}
_9fa.y-=(bDim.h);
_9fa.y+=BalloonBinding.OFFSET_Y;
this._setPosition(_9fa);
};
BalloonBinding.prototype.handleBroadcast=function(_9fc,arg){
BalloonBinding.superclass.handleBroadcast.call(this,_9fc,arg);
switch(_9fc){
case BroadcastMessages.VIEW_CLOSED:
if(this._isAssociatedView(arg)==true){
this.dispose();
}
break;
}
};
BalloonBinding.prototype._isAssociatedView=function(_9fe){
var _9ff=false;
if(this._snapTargetBinding){
var view=this._snapTargetBinding.getAncestorBindingByType(ViewBinding,true);
if(view&&view.getHandle()==_9fe){
_9ff=true;
}
}
return _9ff;
};
BalloonBinding.prototype._setPosition=function(_a01){
var _a02=false;
var pos=this.boxObject.getLocalPosition();
if(this._point!=null){
if(pos.x!=this._point.x||pos.y!=this._point.y){
_a02=true;
}
}
if(!_a02){
this.bindingElement.style.left=_a01.x+"px";
this.bindingElement.style.top=_a01.y+"px";
this._point=_a01;
}
};
BalloonBinding.prototype._getPosition=function(){
return new Point(this.bindingElement.offsetLeft,this.bindingElement.offsetTop);
};
BalloonBinding.prototype._getDimension=function(){
return new Dimension(this.bindingElement.offsetWidth,this.bindingElement.offsetHeight);
};
BalloonBinding.prototype.hide=function(){
if(this.isVisible){
this.bindingElement.style.visibility="hidden";
this.isVisible=false;
}
};
BalloonBinding.prototype.show=function(){
if(!this.isVisible){
this.bindingElement.style.visibility="visible";
this.isVisible=true;
}
};
BalloonBinding.prototype.handleAction=function(_a04){
BalloonBinding.superclass.handleAction.call(this,_a04);
var _a05=_a04.target;
switch(_a04.type){
case Binding.ACTION_ACTIVATED:
if(this._snapTargetBinding){
this._snapTargetBinding.dispatchAction(Binding.ACTION_ACTIVATED);
_a04.consume();
}
case Binding.ACTION_BLURRED:
case Binding.ACTION_VALID:
if(_a05==this._snapTargetBinding){
var self=this;
setTimeout(function(){
if(!Binding.exists(_a05)){
self.dispose();
}else{
if(_a05.validate()){
var _a07=true;
if(_a04.type==Binding.ACTION_BLURRED){
var root=_a05.bindingDocument.body;
var bind=UserInterface.getBinding(root);
if(!root.isActivated){
_a07=false;
}
}
if(_a07){
self.dispose();
}
}
}
},0);
}
break;
case ControlBinding.ACTION_COMMAND:
this.dispose();
break;
}
};
BalloonBinding.prototype.setLabel=function(_a0a){
if(this.isAttached==true){
if(!this._isTableIndexed){
this._indexTable();
}
var _a0b=DOMUtil.createElementNS(Constants.NS_UI,"ui:balloontext",this.bindingDocument);
var text=this.bindingDocument.createTextNode(_a0a);
_a0b.appendChild(text);
this.shadowTree[MatrixBinding.CENTER].appendChild(_a0b);
}
this.setProperty("label",_a0a);
};
BalloonBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
BalloonBinding.newInstance=function(_a0d){
var _a0e=DOMUtil.createElementNS(Constants.NS_UI,"ui:balloon",_a0d);
var _a0f=UserInterface.registerBinding(_a0e,BalloonBinding);
_a0f.hide();
return _a0f;
};
ErrorBinding.prototype=new Binding;
ErrorBinding.prototype.constructor=ErrorBinding;
ErrorBinding.superclass=Binding.prototype;
ErrorBinding.ACTION_INITIALIZE="error initialize";
ErrorBinding.presentError=function(_a10,_a11){
if(Interfaces.isImplemented(IData,_a11)==true){
var _a12,_a13=_a11.dispatchAction(ErrorBinding.ACTION_INITIALIZE);
if(_a13&&_a13.isConsumed){
switch(_a13.listener.constructor){
case StageBinding:
_a12=false;
break;
case StageDialogBinding:
_a12=true;
break;
}
}
var _a14=_a12?top.app.bindingMap.dialogballoonset:top.app.bindingMap.balloonset;
var _a15=_a14.add(BalloonBinding.newInstance(top.app.document));
_a15.setLabel(_a10.text);
_a15.snapTo(_a11);
_a15.attach();
}
};
function ErrorBinding(){
this.logger=SystemLogger.getLogger("ErrorBinding");
return this;
}
ErrorBinding.prototype.toString=function(){
return "[ErrorBinding]";
};
ErrorBinding.prototype.onBindingAttach=function(){
ErrorBinding.superclass.onBindingAttach.call(this);
var _a16=this.bindingWindow.DataManager;
var text=this.getProperty("text");
var name=this.getProperty("targetname");
var _a19=_a16.getDataBinding(name);
if(_a19){
ErrorBinding.presentError({text:text},_a19);
}else{
alert("ErrorBinding dysfunction: No such DataBinding!\n"+name);
if(name.indexOf("_")>-1){
alert("Name contaings '_' - replace with '$' ?");
}
}
this.dispose();
};
FocusBinding.prototype=new FlexBoxBinding;
FocusBinding.prototype.constructor=FocusBinding;
FocusBinding.superclass=FlexBoxBinding.prototype;
FocusBinding.MARKER="focusbindingcurrentfocus";
FocusBinding.ACTION_ACTIVATED="focusmanager activated";
FocusBinding.ACTION_ATTACHED="focusmanager attached";
FocusBinding.ACTION_UPDATE="focusmanager update required";
FocusBinding.ACTION_FOCUS="focusmanager focus";
FocusBinding.ACTION_BLUR="focusmanager blur";
FocusBinding.focusElement=function(_a1a){
var _a1b=true;
try{
_a1a.focus();
Application.focused(true);
}
catch(exception){
var _a1c=UserInterface.getBinding(_a1a);
var _a1d=SystemLogger.getLogger("FocusBinding.focusElement");
_a1d.warn("Could not focus "+(_a1c?_a1c.toString():String(_a1a)));
_a1b=false;
}
return _a1b;
};
FocusBinding.focusedBinding=null;
FocusBinding.activeInstance=null;
FocusBinding.getCachedFocus=function(_a1e){
var win=_a1e.bindingWindow;
var id=_a1e.bindingElement.id;
return {getBinding:function(){
var _a21=null;
try{
if(Binding.exists(_a1e)){
_a21=win.bindingMap[id];
}
}
catch(exception){
}
return _a21;
}};
};
FocusBinding.navigateNext=function(_a22){
if(Binding.exists(FocusBinding.activeInstance)){
FocusBinding.activeInstance.focusNext(_a22);
}
};
FocusBinding.navigatePrevious=function(){
FocusBinding.navigateNext(true);
};
function FocusBinding(){
this.logger=SystemLogger.getLogger("FocusManangerBinding");
this._focusableList=null;
this._isUpToDate=false;
this._isFocusManager=true;
this.isStrongFocusManager=true;
this._cachedFocus=null;
this.isFlexible=false;
return this;
}
FocusBinding.prototype.toString=function(){
return "[FocusManangerBinding]";
};
FocusBinding.prototype.onBindingAttach=function(){
if(this.getProperty("focusmanager")==false){
this._isFocusManager=false;
}else{
if(this.getProperty("strongfocusmanager")==false){
this.isStrongFocusManager=false;
}
if(this._isFocusManager){
var _a23=this.dispatchAction(FocusBinding.ACTION_ATTACHED);
if(_a23&&_a23.isConsumed){
if(_a23.listener.isStrongFocusManager){
this._isFocusManager=false;
}
}
if(this._isFocusManager){
this.addActionListener(Binding.ACTION_ACTIVATED);
this.addActionListener(Binding.ACTION_FOCUSED);
this.addActionListener(Binding.ACTION_BLURRED);
this.addActionListener(FocusBinding.ACTION_UPDATE);
this.addActionListener(FocusBinding.ACTION_FOCUS);
this.addActionListener(FocusBinding.ACTION_BLUR);
this.addActionListener(FocusBinding.ACTION_ATTACHED);
}
}
}
FocusBinding.superclass.onBindingAttach.call(this);
};
FocusBinding.prototype.onBindingDispose=function(){
FocusBinding.superclass.onBindingDispose.call(this);
if(FocusBinding.activeInstance==this){
FocusBinding.activeInstance=null;
}
};
FocusBinding.prototype.handleAction=function(_a24){
FocusBinding.superclass.handleAction.call(this,_a24);
var _a25=_a24.target;
var _a26=null;
if(this._isFocusManager){
switch(_a24.type){
case FocusBinding.ACTION_ATTACHED:
if(_a25!=this){
this._isUpToDate=false;
}
_a24.consume();
break;
case FocusBinding.ACTION_UPDATE:
if(_a25!=this){
this._isUpToDate=false;
_a24.consume();
}
break;
case FocusBinding.ACTION_BLUR:
if(Application.isOperational){
_a26=new FocusCrawler();
_a26.mode=FocusCrawler.MODE_BLUR;
_a26.crawl(_a25.bindingElement);
if(this._cachedFocus!=null){
this._cachedFocus=null;
}
}
_a24.consume();
break;
case FocusBinding.ACTION_FOCUS:
if(Application.isOperational&&_a25!=this){
_a26=new FocusCrawler();
_a26.mode=FocusCrawler.MODE_FOCUS;
_a26.crawl(_a25.bindingElement);
}
_a24.consume();
break;
case Binding.ACTION_FOCUSED:
if(Interfaces.isImplemented(IFocusable,_a25)){
this.claimFocus();
this._onFocusableFocused(_a25);
}
_a24.consume();
break;
case Binding.ACTION_BLURRED:
if(Interfaces.isImplemented(IFocusable,_a25)){
this._onFocusableBlurred(_a25);
}
_a24.consume();
break;
}
}
};
FocusBinding.prototype.focusNext=function(_a27){
var _a28=null;
var list=this._getFocusableList();
if(list.reset().hasEntries()){
while(_a28==null&&list.hasNext()){
var _a2a=list.getNext();
if(this._cachedFocus&&_a2a==this._cachedFocus.getBinding()){
_a28=_a2a;
}
}
if(_a28!=null){
if(_a2a.isFocused){
var next=_a27?list.getPreceding(_a28):list.getFollowing(_a28);
if(!next){
next=_a27?list.getLast():list.getFirst();
}
next.focus();
}else{
_a28.focus();
}
}else{
list.getFirst().focus();
}
}
};
FocusBinding.prototype.claimFocus=function(){
FocusBinding.activeInstance=this;
};
FocusBinding.prototype._getFocusableList=function(){
if(!this._isUpToDate){
var _a2c=new FocusCrawler();
var list=new List();
_a2c.mode=FocusCrawler.MODE_INDEX;
_a2c.crawl(this.bindingElement,list);
this._focusableList=list;
this._isUpToDate=true;
}
return this._focusableList;
};
FocusBinding.prototype._focusFirstFocusable=function(){
if(this._isFocusManager&&this.isActivated){
try{
var win=this.bindingWindow;
win.focus();
}
catch(exception){
}
var list=this._getFocusableList();
if(list!=null){
if(list.hasEntries()){
list.getFirst().focus();
}
}else{
this.logger.warn("Could not compute focusable list.");
}
}
};
FocusBinding.prototype._focusPreviouslyFocused=function(){
if(this._cachedFocus){
var _a30=this._cachedFocus.getBinding();
if(_a30&&!_a30.isFocused){
_a30.focus();
}
}
};
FocusBinding.prototype._onFocusableFocused=function(_a31){
if(_a31!=FocusBinding.focusedBinding){
if(FocusBinding.focusedBinding!=null){
if(Binding.exists(FocusBinding.focusedBinding)){
FocusBinding.focusedBinding.blur();
}
}
FocusBinding.focusedBinding=_a31;
_a31.setProperty(FocusBinding.MARKER,true);
this._cachedFocus=FocusBinding.getCachedFocus(_a31);
}
};
FocusBinding.prototype._onFocusableBlurred=function(_a32){
_a32.deleteProperty(FocusBinding.MARKER);
if(_a32==FocusBinding.focusedBinding){
FocusBinding.focusedBinding=null;
}
};
TabsButtonBinding.prototype=new ButtonBinding;
TabsButtonBinding.prototype.constructor=TabsButtonBinding;
TabsButtonBinding.superclass=ButtonBinding.prototype;
TabsButtonBinding.RESERVED_SPACE=36;
TabsButtonBinding.NODENAME_TABBOX="tabbox";
TabsButtonBinding.CHAR_INDICATOR=String.fromCharCode(187);
function TabsButtonBinding(){
this.logger=SystemLogger.getLogger("TabsButtonBinding");
this.hiddenTabBindings=null;
this.menuItemBindings=null;
this.containingTabBoxBinding=null;
this.selectedTabBinding=null;
this.isVisible=false;
this.snapshotWindowWidth=null;
}
TabsButtonBinding.prototype.toString=function(){
return "[TabsButtonBinding]";
};
TabsButtonBinding.prototype.onBindingRegister=function(){
TabsButtonBinding.superclass.onBindingRegister.call(this);
this.hiddenTabBindings=new List();
this.menuItemBindings=new List();
};
TabsButtonBinding.prototype.buildDOMContent=function(){
TabsButtonBinding.superclass.buildDOMContent.call(this);
this.containingTabBoxBinding=this.getAncestorBindingByLocalName(this.constructor.NODENAME_TABBOX);
var span=this.bindingDocument.createElement("span");
span.appendChild(this.bindingDocument.createTextNode(TabsButtonBinding.CHAR_INDICATOR));
span.className="arrow";
this.labelBinding.bindingElement.appendChild(span);
};
TabsButtonBinding.prototype.show=function(_a34){
this.bindingElement.style.left=_a34+"px";
this.setLabel(this.hiddenTabBindings.getLength().toString());
TabsButtonBinding.superclass.show.call(this);
};
TabsButtonBinding.prototype.reset=function(){
if(this.menuItemBindings.hasEntries()){
while(this.menuItemBindings.hasNext()){
this.menuItemBindings.getNext().dispose();
}
}
this.hiddenTabBindings.clear();
this.menuItemBindings.clear();
this.selectedTabBinding=null;
this.isPopulated=false;
};
TabsButtonBinding.prototype.registerHiddenTabBinding=function(_a35){
this.hiddenTabBindings.add(_a35);
};
TabsButtonBinding.prototype.fireCommand=function(){
if(this.isChecked&&!this.isPopulated){
this.hiddenTabBindings.reset();
while(this.hiddenTabBindings.hasNext()){
var _a36=this.hiddenTabBindings.getNext();
var item=MenuItemBinding.newInstance(this.popupBinding.bindingDocument);
item.setLabel(_a36.getLabel());
item.setImage(_a36.getImage());
item.associatedTabBinding=_a36;
var self=this;
item.oncommand=function(){
self.selectedTabBinding=this.associatedTabBinding;
};
this.popupBinding.add(item);
this.menuItemBindings.add(item);
this.popupBinding.attachRecursive();
}
this.isPopulated=true;
}
this.popupBinding.addActionListener(PopupBinding.ACTION_HIDE,this);
TabsButtonBinding.superclass.fireCommand.call(this);
};
TabsButtonBinding.prototype.handleAction=function(_a39){
TabsButtonBinding.superclass.handleAction.call(this,_a39);
switch(_a39.type){
case PopupBinding.ACTION_HIDE:
this.popupBinding.removeActionListener(PopupBinding.ACTION_HIDE,this);
var _a3a=this.selectedTabBinding;
if(_a3a){
this.containingTabBoxBinding.moveToOrdinalPosition(_a3a,0);
this.containingTabBoxBinding.select(_a3a);
}
_a39.consume();
break;
}
};
TabsButtonBinding.newInstance=function(_a3b){
var _a3c=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbarbutton",_a3b);
_a3c.setAttribute("type","checkbox");
_a3c.setAttribute("popup","app.bindingMap.tabsbuttonpopup");
_a3c.className="tabbutton";
return UserInterface.registerBinding(_a3c,TabsButtonBinding);
};
TabBoxBinding.prototype=new FlexBoxBinding;
TabBoxBinding.prototype.constructor=TabBoxBinding;
TabBoxBinding.superclass=FlexBoxBinding.prototype;
TabBoxBinding.ASSOCIATION_KEY="tabboxkey";
TabBoxBinding.ACTION_ATTACHED="tabbox attached";
TabBoxBinding.ACTION_SELECTED="tabbox selected";
TabBoxBinding.ACTION_UNSELECTED="tabbox unselected";
TabBoxBinding.ACTION_UPDATED="tabbox updated";
TabBoxBinding.UPDATE_ORDINAL="tabbox ordinalupdate";
TabBoxBinding.UPDATE_ATTACH="tabbox attachupdate";
TabBoxBinding.UPDATE_DETACH="tabbox detachupdate";
TabBoxBinding.INVALID_TAB_IMAGE="${icon:error}";
TabBoxBinding.BALLOON_TAB_IMAGE="${icon:balloon}";
EventBroadcaster.subscribe(BroadcastMessages.KEY_TAB,{handleBroadcast:function(){
if(Keyboard.isControlPressed){
var _a3d=TabBoxBinding.currentActiveInstance;
if(_a3d!=null&&Binding.exists(_a3d)){
}
}
}});
TabBoxBinding.currentActiveInstance=null;
function TabBoxBinding(){
this.logger=SystemLogger.getLogger("TabBoxBinding");
this._tabBoxPairs={};
this._selectedTabElement=null;
this._selectedTabBinding=null;
this._tabsElement=null;
this._tabPanelsElement=null;
this._attachedMemberCount=0;
this._isMembersAttached=false;
this.isEqualSize=false;
this._nodename_tab="tab";
this._nodename_tabs="tabs";
this._nodename_tabpanel="tabpanel";
this._nodename_tabpanels="tabpanels";
this._impl_tab=TabBinding;
this._impl_tabs=TabsBinding;
this._impl_tabpanel=TabPanelBinding;
this._impl_tabpanels=TabPanelsBinding;
this.updateType=null;
this._hasBastardUpdates=false;
return this;
}
TabBoxBinding.prototype.toString=function(){
return "[TabBoxBinding]";
};
TabBoxBinding.prototype.onBindingRegister=function(){
TabBoxBinding.superclass.onBindingRegister.call(this);
this.addActionListener(Binding.ACTION_ATTACHED);
this.addActionListener(Binding.ACTION_DETACHED);
this.addActionListener(Binding.ACTION_ACTIVATED);
this.addActionListener(Binding.ACTION_FOCUSED);
this.addActionListener(PageBinding.ACTION_INITIALIZED);
DOMEvents.addEventListener(this.bindingDocument.documentElement,DOMEvents.AFTERUPDATE,this);
DOMEvents.addEventListener(this.bindingElement,DOMEvents.AFTERUPDATE,this);
};
TabBoxBinding.prototype.onBindingAttach=function(){
TabBoxBinding.superclass.onBindingAttach.call(this);
TabBoxBinding.currentActiveInstance=this;
this._tabsElement=this.getTabsElement();
this._tabPanelsElement=this.getTabPanelsElement();
var _a3e=this.getTabElements().getLength();
var _a3f=this.getTabPanelElements().getLength();
if(!this._tabsElement||!this._tabPanelsElement){
throw new Error(this.toString()+" DOM subtree invalid.");
}else{
if(_a3e!=_a3f){
throw new Error(this.toString()+" DOM subtree invalid.");
}else{
if(this.getProperty("type")=="boxed"){
this.setFlexibility(false);
this.attachClassName("boxed");
}
this.buildDOMContent();
this._TEMPNAME();
if(this.getProperty("equalsize")==true){
this.dispatchAction(PageBinding.ACTION_BLOCK_INIT);
this.setFlexibility(false);
this.attachClassName("equalsize");
this.isEqualSize=true;
this.addMembers(this.getDescendantBindingsByLocalName("*"));
}else{
this.addMember(this.getTabsBinding());
this.addMember(this.getTabPanelsBinding());
this.addMembers(this.getTabBindings());
this.addMembers(this.getTabPanelBindings());
}
}
}
};
TabBoxBinding.prototype.onBindingInitialize=function(){
var _a40=this.getTabPanelElements();
while(_a40.hasNext()){
this._setupWarningSystem(UserInterface.getBinding(_a40.getNext()));
}
if(this.isEqualSize){
this.enforceEqualSize();
this.dispatchAction(PageBinding.ACTION_UNBLOCK_INIT);
}
this.dispatchAction(TabBoxBinding.ACTION_ATTACHED);
TabBoxBinding.superclass.onBindingInitialize.call(this);
};
TabBoxBinding.prototype.buildDOMContent=function(){
var _a41=DOMUtil.getOrdinalPosition(this._tabsElement);
var _a42=DOMUtil.getOrdinalPosition(this._tabPanelsElement);
var _a43=_a41>_a42?"tabsbelow":"tabsontop";
this.attachClassName(_a43);
};
TabBoxBinding.prototype._TEMPNAME=function(){
var tabs=this.getTabElements();
var _a45=this.getTabPanelElements();
var _a46=null;
var _a47=this.getProperty("selectedindex");
if(_a47!=null){
if(_a47>tabs.getLength()-1){
throw "Selectedindex out of range";
}
}
if(tabs.hasEntries()){
var _a48=0;
while(tabs.hasNext()){
var tab=tabs.getNext();
var _a4a=_a45.getNext();
this.registerTabBoxPair(tab,_a4a);
if(_a47&&_a48==_a47){
tab.setAttribute("selected","true");
}else{
if(tab.getAttribute("selected")=="true"){
_a46=tab;
}
}
_a48++;
}
if(!_a46){
_a46=tabs.getFirst();
_a46.setAttribute("selected","true");
}
}
};
TabBoxBinding.prototype.enforceEqualSize=function(_a4b){
var _a4c=null;
var _a4d=null;
if(this.isEqualSize){
var _a4e=CSSComputer.getPadding(this._tabPanelsElement);
var max=0,_a50=this.getTabPanelElements();
_a50.each(function(_a51){
max=_a51.offsetHeight>max?_a51.offsetHeight:max;
});
_a4d=max+_a4e.top+_a4e.bottom;
if(_a4b&&this._tabPanelsElement.style.height!=null){
_a4c=this._tabPanelsElement.offsetHeight;
}
if(_a4c!=null||_a4d>_a4c){
this._tabPanelsElement.style.height=_a4d+"px";
}
}
};
TabBoxBinding.prototype._setupWarningSystem=function(_a52){
_a52._invalidCount=0;
_a52.addActionListener(Binding.ACTION_INVALID,this);
_a52.addActionListener(Binding.ACTION_VALID,this);
_a52.addActionListener(BalloonBinding.ACTION_SNAP,this);
};
TabBoxBinding.prototype.handleAction=function(_a53){
TabBoxBinding.superclass.handleAction.call(this,_a53);
var _a54=_a53.target;
var _a55=_a53.listener;
switch(_a53.type){
case Binding.ACTION_ATTACHED:
break;
case Binding.ACTION_DETACHED:
if(_a54.constructor==this._impl_tab){
this.updateType=TabBoxBinding.UPDATE_DETACH;
this.dispatchAction(TabBoxBinding.ACTION_UPDATED);
_a53.consume();
}
break;
case PageBinding.ACTION_INITIALIZED:
if(_a54.isDialogSubPage&&this.isEqualSize){
this.enforceEqualSize();
}
break;
case Binding.ACTION_INVALID:
_a55._invalidCount++;
if(_a55._invalidCount==1){
var self=this;
setTimeout(function(){
if(!_a55.isSelected){
self._showWarning(_a55,true);
}
},0);
}
break;
case Binding.ACTION_VALID:
if(_a55._invalidCount>0){
_a55._invalidCount--;
if(_a55._invalidCount==0){
if(_a55.isSelected){
this._showWarning(_a55,false);
}
}
}
break;
case BalloonBinding.ACTION_SNAP:
this._showBalloon(_a55,true);
break;
case Binding.ACTION_ACTIVATED:
case Binding.ACTION_FOCUSED:
if(_a53._tabboxstamp==null){
TabBoxBinding.currentActiveInstance=this;
_a53._tabboxstamp="stamped";
}
break;
}
};
TabBoxBinding.prototype.handleEvent=function(e){
TabBoxBinding.superclass.handleEvent.call(this,e);
switch(e.type){
case DOMEvents.AFTERUPDATE:
var _a58=DOMEvents.getTarget(e);
if(_a58==this.bindingDocument.documentElement){
if(this._hasBastardUpdates){
this._hasBastardUpdates=false;
var tabs=this.getTabElements();
var _a5a=this.getTabPanelElements();
tabs.each(function(tab,_a5c){
if(tab.getAttribute(TabBoxBinding.ASSOCIATION_KEY)==null){
var _a5d=_a5a.get(_a5c);
this.registerTabBoxPair(tab,_a5d);
}
},this);
var _a5e=this._tabBoxPairs;
for(var key in _a5e){
var tab=_a5e[key].tab;
if(tab.parentNode==null){
this.unRegisterTabBoxPair(tab);
}
}
}
}else{
if(!this._hasBastardUpdates){
var name=DOMUtil.getLocalName(_a58);
switch(_a58.__updateType){
case Update.TYPE_INSERT:
switch(name){
case this._nodename_tab:
case this._nodename_tabpanel:
var _a62=_a58.parentNode;
if(_a62==this._tabsElement||_a62==this._tabPanelsElement){
this._hasBastardUpdates=true;
}
break;
}
break;
case Update.TYPE_REMOVE:
switch(name){
case this._nodename_tabs:
case this._nodename_tabpanels:
if(_a58==this._tabsElement||_a58==this._tabPanelsElement){
this._hasBastardUpdates=true;
}
break;
}
break;
}
}
}
break;
}
};
TabBoxBinding.prototype.select=function(arg,_a64){
var _a65=this.getBindingForArgument(arg);
if(_a65!=null&&!_a65.isSelected){
if(this._selectedTabBinding!=null){
this._selectedTabBinding.unselect();
this.getTabPanelBinding(this._selectedTabBinding).unselect();
}
this.dispatchAction(TabBoxBinding.ACTION_UNSELECTED);
_a65.select(_a64);
this.getTabPanelBinding(_a65).select(_a64);
var _a66=this.getProperty("selectedindex");
if(_a66!=null){
this.setProperty("selectedindex",DOMUtil.getOrdinalPosition(_a65.bindingElement,true));
}
this._selectedTabBinding=_a65;
this.dispatchAction(TabBoxBinding.ACTION_SELECTED);
this.dispatchAction(FocusBinding.ACTION_UPDATE);
if(_a65.getImage()==TabBoxBinding.BALLOON_TAB_IMAGE){
var _a67=this.getTabPanelBinding(_a65);
this._showBalloon(_a67,false);
}
}
};
TabBoxBinding.prototype.registerTabBoxPair=function(tab,_a69){
var key=KeyMaster.getUniqueKey();
tab.setAttribute(TabBoxBinding.ASSOCIATION_KEY,key);
_a69.setAttribute(TabBoxBinding.ASSOCIATION_KEY,key);
this._tabBoxPairs[key]={tab:tab,tabPanel:_a69};
};
TabBoxBinding.prototype.unRegisterTabBoxPair=function(tab){
var key=tab.getAttribute(TabBoxBinding.ASSOCIATION_KEY);
delete this._tabBoxPairs[key];
};
TabBoxBinding.prototype.getTabPanelBinding=function(_a6d){
var _a6e=null;
try{
var key=_a6d.getProperty(TabBoxBinding.ASSOCIATION_KEY);
var _a70=this._tabBoxPairs[key].tabPanel;
_a6e=UserInterface.getBinding(_a70);
}
catch(exception){
this.logger.error(exception);
SystemDebug.stack(arguments);
}
return _a6e;
};
TabBoxBinding.prototype.getTabBinding=function(_a71){
var key=_a71.getProperty(TabBoxBinding.ASSOCIATION_KEY);
var _a73=this._tabBoxPairs[key].tab;
return UserInterface.getBinding(_a73);
};
TabBoxBinding.prototype.summonTabBinding=function(){
return TabBinding.newInstance(this.bindingDocument);
};
TabBoxBinding.prototype.summonTabPanelBinding=function(){
var _a74=this._impl_tabpanel.newInstance(this.bindingDocument);
this._setupWarningSystem(_a74);
return _a74;
};
TabBoxBinding.prototype.appendTabByBindings=function(_a75,_a76){
var _a77=_a75.bindingElement;
_a75.setProperty("selected",true);
var _a78=this.summonTabPanelBinding();
var _a79=_a78.bindingElement;
if(_a76){
_a79.appendChild(_a76 instanceof Binding?_a76.bindingElement:_a76);
}
this.registerTabBoxPair(_a77,_a79);
UserInterface.getBinding(this._tabsElement).add(_a75);
this._tabPanelsElement.appendChild(_a79);
_a75.attach();
UserInterface.getBinding(_a79).attachRecursive();
this.updateType=TabBoxBinding.UPDATE_ATTACH;
this.dispatchAction(TabBoxBinding.ACTION_UPDATED);
return _a75;
};
TabBoxBinding.prototype.importTabBinding=function(_a7a){
var that=_a7a.containingTabBoxBinding;
var _a7c=that.getTabPanelBinding(_a7a);
var _a7d=_a7c.getBindingElement();
var _a7e=_a7a.getBindingElement();
that.dismissTabBinding(_a7a);
this._tabsElement.appendChild(_a7e);
this._tabPanelsElement.appendChild(_a7d);
this.registerTabBoxPair(_a7e,_a7d);
_a7a.containingTabBoxBinding=this;
this.select(_a7a);
this.dispatchAction(Binding.ACTION_ACTIVATED);
this.dispatchAction(TabBoxBinding.ACTION_UPDATED);
};
TabBoxBinding.prototype.removeTab=function(_a7f){
var _a80=null;
if(_a7f.isSelected){
_a80=this.getBestTab(_a7f);
this._selectedTabBinding=null;
}
var _a81=this.getTabPanelBinding(_a7f);
this.unRegisterTabBoxPair(_a7f.bindingElement);
_a7f.dispose();
_a81.dispose();
if(_a80!=null){
this.select(_a80);
}
this.updateType=TabBoxBinding.UPDATE_DETACH;
this.dispatchAction(TabBoxBinding.ACTION_UPDATED);
};
TabBoxBinding.prototype.dismissTabBinding=function(_a82){
if(_a82.isSelected){
this.selectBestTab(_a82);
}
};
TabBoxBinding.prototype.selectBestTab=function(_a83){
var _a84=this.getBestTab(_a83);
if(_a84){
this.select(_a84);
}else{
this._selectedTabBinding=null;
}
};
TabBoxBinding.prototype.getBestTab=function(_a85){
var _a86=null;
var _a87=_a85.getOrdinalPosition(true);
var _a88=this.getTabBindings();
var _a89=_a88.getLength();
var _a8a=_a89-1;
if(_a89==1){
_a86=null;
}else{
if(_a87==_a8a){
_a86=_a88.get(_a87-1);
}else{
_a86=_a88.get(_a87+1);
}
}
return _a86;
};
TabBoxBinding.prototype.moveToOrdinalPosition=function(_a8b,_a8c){
var _a8d=this.bindingDocument.getElementById(_a8b.bindingElement.id);
var tab=this.getTabElements().get(_a8c);
this._tabsElement.insertBefore(_a8d,tab);
this.updateType=TabBoxBinding.UPDATE_ORDINAL;
this.dispatchAction(TabBoxBinding.ACTION_UPDATED);
};
TabBoxBinding.prototype.getTabsElement=function(){
return DOMUtil.getElementsByTagName(this.bindingElement,this._nodename_tabs).item(0);
};
TabBoxBinding.prototype.getTabPanelsElement=function(){
return DOMUtil.getElementsByTagName(this.bindingElement,this._nodename_tabpanels).item(0);
};
TabBoxBinding.prototype.getTabElements=function(){
var _a8f=this._nodename_tab;
var _a90=new List(this._tabsElement.childNodes);
var _a91=new List();
while(_a90.hasNext()){
var _a92=_a90.getNext();
if(_a92.nodeType==Node.ELEMENT_NODE&&DOMUtil.getLocalName(_a92)==_a8f){
_a91.add(_a92);
}
}
return _a91;
};
TabBoxBinding.prototype.getTabPanelElements=function(){
var _a93=this._nodename_tabpanel;
var _a94=new List(this._tabPanelsElement.childNodes);
var _a95=new List();
_a94.each(function(_a96){
if(_a96.nodeType==Node.ELEMENT_NODE&&DOMUtil.getLocalName(_a96)==_a93){
_a95.add(_a96);
}
});
return _a95;
};
TabBoxBinding.prototype.getTabsBinding=function(){
return this.getChildBindingByLocalName(this._nodename_tabs);
};
TabBoxBinding.prototype.getTabPanelsBinding=function(){
return this.getChildBindingByLocalName(this._nodename_tabpanels);
};
TabBoxBinding.prototype.getTabBindings=function(){
var _a97=new List();
var _a98=this.getTabElements();
_a98.each(function(_a99){
_a97.add(UserInterface.getBinding(_a99));
});
return _a97;
};
TabBoxBinding.prototype.getTabPanelBindings=function(){
var _a9a=new List();
this.getTabPanelElements().each(function(_a9b){
_a9a.add(UserInterface.getBinding(_a9b));
});
return _a9a;
};
TabBoxBinding.prototype.getSelectedTabBinding=function(){
return this._selectedTabBinding;
};
TabBoxBinding.prototype.getSelectedTabPanelBinding=function(){
var _a9c=null;
if(this._selectedTabBinding){
_a9c=this.getTabPanelBinding(this._selectedTabBinding);
}
return _a9c;
};
TabBoxBinding.prototype._showWarning=function(_a9d,_a9e){
var _a9f=this.getTabBinding(_a9d);
if(_a9e){
if(_a9f.labelBinding.hasImage){
_a9f._backupImage=_a9f.getImage();
}
_a9f.setImage(TabBoxBinding.INVALID_TAB_IMAGE);
}else{
if(_a9f._backupImage){
_a9f.setImage(_a9f._backupImage);
}else{
_a9f.setImage(false);
}
}
};
TabBoxBinding.prototype._showBalloon=function(_aa0,_aa1){
var _aa2=this.getTabBinding(_aa0);
if((_aa1&&!_aa2.isSelected)||!_aa1){
if(_aa2.getImage()!=TabBoxBinding.INVALID_TAB_IMAGE){
if(_aa1){
if(_aa2.labelBinding.hasImage){
_aa2._backupImage=_aa2.getImage();
}
_aa2.setImage(TabBoxBinding.BALLOON_TAB_IMAGE);
}else{
if(_aa2._backupImage!=null){
_aa2.setImage(_aa2._backupImage);
}else{
_aa2.setImage(false);
}
}
}
}
};
TabBoxBinding.prototype.advanceSelection=function(_aa3){
var tab=this.getSelectedTabBinding();
var tabs=this.getTabBindings();
var _aa6=tab.getOrdinalPosition(true);
var next=null;
var _aa8=new List();
tabs.each(function(t){
if(t.isVisible){
_aa8.add(t);
}
});
if(_aa8.getLength()>1){
if(_aa6==0&&!_aa3){
next=_aa8.getLast();
}else{
if(_aa6==_aa8.getLength()-1&&_aa3){
next=_aa8.getFirst();
}else{
if(_aa3){
next=tab.getNextBindingByLocalName(this._nodename_tab);
}else{
next=tab.getPreviousBindingByLocalName(this._nodename_tab);
}
}
}
if(next!=null){
this.select(next);
}
}
};
TabsBinding.prototype=new Binding;
TabsBinding.prototype.constructor=TabsBinding;
TabsBinding.superclass=Binding.prototype;
TabsBinding.NODENAME_TABBOX="tabbox";
TabsBinding.TABBUTTON_IMPLEMENTATION=TabsButtonBinding;
function TabsBinding(){
this.logger=SystemLogger.getLogger("TabsBinding");
this.containingTabBoxBinding=null;
this.tabsButtonBinding=null;
this._cachedOffsetWidth=parseInt(0);
this.isManaging=false;
this.crawlerFilters=new List([FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
TabsBinding.prototype.toString=function(){
return "[TabsBinding]";
};
TabsBinding.prototype.onBindingRegister=function(){
TabsBinding.superclass.onBindingRegister.call(this);
this.attachClassName(Binding.CLASSNAME_CLEARFLOAT);
};
TabsBinding.prototype.onBindingAttach=function(){
TabsBinding.superclass.onBindingAttach.call(this);
this.containingTabBoxBinding=this.getAncestorBindingByType(TabBoxBinding);
this.containingTabBoxBinding.addActionListener(TabBoxBinding.ACTION_UPDATED,this);
this.buildDOMContent();
this.dispatchAction(Binding.ACTION_ATTACHED);
};
TabsBinding.prototype.buildDOMContent=function(){
var div=this.bindingDocument.createElement("div");
div.className="tabliner";
this.bindingElement.insertBefore(div,this.bindingElement.firstChild);
this.shadowTree.tabManager=this.bindingDocument.createElement("div");
this.shadowTree.tabManager.className="tabmanager";
var _aab=this.constructor.TABBUTTON_IMPLEMENTATION;
this.tabsButtonBinding=_aab.newInstance(this.bindingDocument);
this.shadowTree.tabsButton=this.tabsButtonBinding;
this.add(this.tabsButtonBinding);
this.tabsButtonBinding.attach();
};
TabsBinding.prototype.handleAction=function(_aac){
TabsBinding.superclass.handleAction.call(this,_aac);
switch(_aac.type){
case TabBoxBinding.ACTION_UPDATED:
if(!this.isManaging){
var self=this;
function manage(){
self.manage();
}
setTimeout(manage,0);
}
break;
}
};
TabsBinding.prototype.flex=function(){
if(this.isAttached==true){
var self=this;
function manage(){
if(Binding.exists(self)==true){
var _aaf=self.bindingElement.offsetWidth;
if(_aaf!=self._cachedOffsetWidth){
self.manage();
}
self._cachedOffsetWidth=_aaf;
}
}
setTimeout(manage,0);
}
};
TabsBinding.prototype.add=function(_ab0){
if(_ab0 instanceof TabBinding){
if(this.tabsButtonBinding&&this.tabsButtonBinding.isVisible){
this.tabsButtonBinding.hide();
}
}
return TabsBinding.superclass.add.call(this,_ab0);
};
TabsBinding.prototype.manage=function(){
if(Binding.exists(this)==true&&this.isVisible){
this.isManaging=true;
var _ab1=false;
var _ab2,tab,tabs=this.containingTabBoxBinding.getTabElements();
var _ab5=this.constructor.TABBUTTON_IMPLEMENTATION;
var _ab6=this.bindingElement.offsetWidth-_ab5.RESERVED_SPACE;
var _ab7=null;
var sum=0,_ab9=0;
var _aba=true;
if(tabs.hasEntries()){
this.tabsButtonBinding.reset();
while(tabs.hasNext()&&_aba){
tab=tabs.getNext();
_ab2=UserInterface.getBinding(tab);
if(!_ab7){
_ab7=_ab2;
}
sum+=tab.offsetWidth;
if(sum>=_ab6){
_ab1=true;
if(_ab2.isSelected){
if(!DOMUtil.isFirstElement(_ab2.bindingElement,true)){
this.isManaging=false;
if(_ab7){
_ab7.hide();
if(this.tabsButtonBinding.isVisible){
this.tabsButtonBinding.hide();
}
}
this.containingTabBoxBinding.moveToOrdinalPosition(_ab2,_ab9-1);
_aba=false;
}
}else{
_ab2.hide();
this.tabsButtonBinding.registerHiddenTabBinding(_ab2);
}
}else{
_ab2.show();
_ab7=_ab2;
_ab9++;
}
}
if(_aba){
if(_ab1&&this.tabsButtonBinding.hiddenTabBindings.hasEntries()){
var _abb=_ab7.getBindingElement();
var _abc=_abb.offsetLeft+_abb.offsetWidth;
var _abd=this.tabsButtonBinding;
setTimeout(function(){
_abd.show(_abc+4);
},50);
}else{
this.tabsButtonBinding.hide();
}
}
}
this.isManaging=false;
}
};
TabBinding.prototype=new MatrixBinding;
TabBinding.prototype.constructor=TabBinding;
TabBinding.superclass=MatrixBinding.prototype;
TabBinding.ACTION_SELECTED="tabselected";
TabBinding.ACTION_UNSELECTED="tabunselected";
TabBinding.NODENAME_TABBOX="tabbox";
function TabBinding(){
this.logger=SystemLogger.getLogger("TabBinding");
this.tabboxkey=null;
this.isSelected=false;
this.labelBinding=null;
this.containingTabBoxBinding=null;
this.crawlerFilters=new List([DocumentCrawler.ID,FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
TabBinding.prototype.toString=function(){
return "[TabBinding]";
};
TabBinding.prototype.serialize=function(){
var _abe=TabBinding.superclass.serialize.call(this);
if(_abe){
_abe.label=this.getLabel();
_abe.image=this.getImage();
_abe.tooltip=this.getToolTip();
}
return _abe;
};
TabBinding.prototype.onBindingAttach=function(){
TabBinding.superclass.onBindingAttach.call(this);
this.defaultElementPosition=DOMUtil.getComputedStyle(this.bindingElement,"position");
this.defaultElementLeft=DOMUtil.getComputedStyle(this.bindingElement,"left");
this.containingTabBoxBinding=this.getAncestorBindingByType(TabBoxBinding);
this.buildDOMContent();
this.assignDOMEvents();
this.dispatchAction(Binding.ACTION_ATTACHED);
if(this.getProperty("selected")==true){
this.containingTabBoxBinding.select(this);
}
};
TabBinding.prototype.buildDOMContent=function(){
var _abf=this.bindingElement.getAttribute("image");
var _ac0=this.bindingElement.getAttribute("label");
var _ac1=this.bindingElement.getAttribute("tooltip");
this.bindingElement.className="default";
this.labelBinding=LabelBinding.newInstance(this.bindingDocument);
this.shadowTree.labelBinding=this.labelBinding;
this.labelBinding.attachClassName("tablabel");
this.add(this.labelBinding);
if(_ac0){
this.setLabel(_ac0);
}
if(_abf){
this.setImage(_abf);
}
if(_ac1){
this.setToolTip(_ac1);
}
};
TabBinding.prototype.setImage=function(url){
this.setProperty("image",url);
if(this.isAttached){
this.labelBinding.setImage(url);
}
};
TabBinding.prototype.getImage=function(){
return this.getProperty("image");
};
TabBinding.prototype.setLabel=function(_ac3){
if(_ac3!=null){
this.setProperty("label",_ac3);
if(this.isAttached){
this.labelBinding.setLabel(_ac3);
}
}
};
TabBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
TabBinding.prototype.setToolTip=function(_ac4){
if(_ac4){
this.setProperty("tooltip",_ac4);
if(this.isAttached){
this.labelBinding.setToolTip(_ac4);
}
}
};
TabBinding.prototype.getToolTip=function(){
return this.getProperty("tooltip");
};
TabBinding.prototype.assignDOMEvents=function(){
this.addEventListener(DOMEvents.MOUSEDOWN);
this.addEventListener(DOMEvents.MOUSEENTER);
this.addEventListener(DOMEvents.MOUSELEAVE);
};
TabBinding.prototype.handleEvent=function(e){
TabBinding.superclass.handleEvent.call(this,e);
if(!this.isSelected){
var _ac6=false;
if(Client.isMozilla==true){
}
if(!_ac6){
switch(e.type){
case DOMEvents.MOUSEENTER:
case DOMEvents.MOUSEOVER:
if(!this.isSelected){
this.bindingElement.className="hover";
}
break;
case DOMEvents.MOUSELEAVE:
case DOMEvents.MOUSEOUT:
if(!this.isSelected){
this.bindingElement.className="default";
}
break;
case DOMEvents.MOUSEDOWN:
if(!DOMEvents.isRightButton(e)){
this.containingTabBoxBinding.select(this);
}
break;
}
}
}
};
TabBinding.prototype.select=function(_ac7){
this.show();
this.isSelected=true;
this.setProperty("selected",true);
this.bindingElement.className="selected";
};
TabBinding.prototype.unselect=function(){
this.isSelected=false;
this.deleteProperty("selected");
this.bindingElement.className="default";
};
TabBinding.prototype.hide=function(){
if(this.isVisible){
this.bindingElement.style.position="absolute";
this.bindingElement.style.left="-1000px";
this.isVisible=false;
}
};
TabBinding.prototype.show=function(){
if(!this.isVisible){
this.bindingElement.style.position=this.defaultElementPosition;
this.bindingElement.style.left=this.defaultElementLeft;
this.isVisible=true;
}
};
TabBinding.newInstance=function(_ac8){
var _ac9=DOMUtil.createElementNS(Constants.NS_UI,"ui:tab",_ac8);
return UserInterface.registerBinding(_ac9,TabBinding);
};
TabPanelsBinding.prototype=new FlexBoxBinding;
TabPanelsBinding.prototype.constructor=TabPanelsBinding;
TabPanelsBinding.superclass=FlexBoxBinding.prototype;
function TabPanelsBinding(){
this.logger=SystemLogger.getLogger("TabPanelsBinding");
this.containingTabBoxBinding=null;
this._lastKnownDimension=null;
}
TabPanelsBinding.prototype.toString=function(){
return "[TabPanelsBinding]";
};
TabPanelsBinding.prototype.onBindingRegister=function(){
TabPanelsBinding.superclass.onBindingRegister.call(this);
this._lastKnownDimension=new Dimension(0,0);
};
TabPanelsBinding.prototype.hasDimensionsChanged=function(){
var _aca=false;
var dim1=this.boxObject.getDimension();
var dim2=this._lastKnownDimension;
if(dim2==null||!Dimension.isEqual(dim1,dim2)){
_aca=true;
this._lastKnownDimension=dim1;
}
return _aca;
};
TabPanelsBinding.prototype.onBindingAttach=function(){
TabPanelsBinding.superclass.onBindingAttach.call(this);
this.containingTabBoxBinding=this.getAncestorBindingByType(TabBoxBinding);
this.setFlexibility(this.containingTabBoxBinding.isFlexible);
this.dispatchAction(Binding.ACTION_ATTACHED);
};
TabPanelBinding.prototype=new Binding;
TabPanelBinding.prototype.constructor=TabPanelBinding;
TabPanelBinding.superclass=Binding.prototype;
function TabPanelBinding(){
this.logger=SystemLogger.getLogger("TabPanelBinding");
this.tabboxkey=null;
this.isVisible=false;
this._focusedBinding=null;
return this;
}
TabPanelBinding.prototype.toString=function(){
return "[TabPanelBinding]";
};
TabPanelBinding.prototype.onBindingAttach=function(){
TabPanelBinding.superclass.onBindingAttach.call(this);
this.dispatchAction(Binding.ACTION_ATTACHED);
this.addActionListener(BalloonBinding.ACTION_INITIALIZE);
};
TabPanelBinding.prototype.select=function(_acd){
if(!this.isSelected){
if(this.isLazy){
this.wakeUp("select");
}else{
this.isSelected=true;
this.isVisible=true;
this.bindingElement.style.position="static";
this._invokeManagedRecursiveFlex();
if(_acd!=true){
this.dispatchAction(FocusBinding.ACTION_FOCUS);
}
}
}
};
TabPanelBinding.prototype.unselect=function(){
if(this.isSelected){
this.dispatchAction(FocusBinding.ACTION_BLUR);
this.isSelected=false;
this.isVisible=false;
this.bindingElement.style.position="absolute";
}
};
TabPanelBinding.prototype._invokeManagedRecursiveFlex=function(){
this.reflex(true);
};
TabPanelBinding.prototype.handleAction=function(_ace){
TabPanelBinding.superclass.handleAction.call(this,_ace);
var _acf=_ace.target;
switch(_ace.type){
case BalloonBinding.ACTION_INITIALIZE:
_ace.consume();
break;
}
};
TabPanelBinding.newInstance=function(_ad0){
var _ad1=DOMUtil.createElementNS(Constants.NS_UI,"ui:tabpanel",_ad0);
UserInterface.registerBinding(_ad1,TabPanelBinding);
return UserInterface.getBinding(_ad1);
};
SplitBoxBinding.prototype=new FlexBoxBinding;
SplitBoxBinding.prototype.constructor=SplitBoxBinding;
SplitBoxBinding.superclass=FlexBoxBinding.prototype;
SplitBoxBinding.ORIENT_HORIZONTAL="horizontal";
SplitBoxBinding.ORIENT_VERTICAL="vertical";
function SplitBoxBinding(){
this.logger=SystemLogger.getLogger("SplitBoxBinding");
this._orient=SplitBoxBinding.ORIENT_HORIZONTAL;
this.isLayoutInitialized=false;
this._isFirstLayout=true;
return this;
}
SplitBoxBinding.prototype.toString=function(){
return "[SplitBoxBinding]";
};
SplitBoxBinding.prototype.serialize=function(){
var _ad2=SplitBoxBinding.superclass.serialize.call(this);
if(_ad2){
_ad2.orient=this.getOrient();
_ad2.layout=this.getLayout();
}
return _ad2;
};
SplitBoxBinding.prototype.onBindingAttach=function(){
SplitBoxBinding.superclass.onBindingAttach.call(this);
this.addActionListener(SplitterBinding.ACTION_DRAGGED,this);
this.addActionListener(SplitterBinding.ACTION_COLLAPSE,this);
this.addActionListener(SplitterBinding.ACTION_UNCOLLAPSE,this);
this._initializeLayout();
this._initializeOrient();
this._initializeSplitters();
};
SplitBoxBinding.prototype._initializeLayout=function(){
var _ad3=this.getSplitPanelElements();
if(_ad3.hasEntries()){
var _ad4=new List(this.getLayout().split(":"));
if(_ad4.getLength()!=_ad3.getLength()){
throw new Error(this+" DOM subree invalid");
}else{
_ad3.each(function(_ad5){
_ad5.setAttribute("ratio",_ad4.getNext());
});
}
}
this.isLayoutInitialized=true;
};
SplitBoxBinding.prototype._initializeOrient=function(){
var _ad6=this.getProperty("orient");
if(_ad6){
this._orient=_ad6;
}
this.attachClassName(this._orient);
};
SplitBoxBinding.prototype._initializeSplitters=function(){
var _ad7=this.getSplitterBindings();
while(_ad7.hasNext()){
var _ad8=_ad7.getNext();
if(_ad8&&_ad8.getProperty("collapsed")==true){
_ad8.collapse();
}
}
};
SplitBoxBinding.prototype.handleAction=function(_ad9){
SplitBoxBinding.superclass.handleAction.call(this,_ad9);
switch(_ad9.type){
case SplitterBinding.ACTION_DRAGGED:
this.refreshLayout();
_ad9.consume();
break;
case SplitterBinding.ACTION_COLLAPSE:
this.collapse(_ad9.target);
_ad9.consume();
break;
case SplitterBinding.ACTION_UNCOLLAPSE:
this.unCollapse(_ad9.target);
_ad9.consume();
break;
}
};
SplitBoxBinding.prototype.flex=function(){
SplitBoxBinding.superclass.flex.call(this);
if(this.isAttached==true){
this.invokeLayout(true);
}
};
SplitBoxBinding.prototype.collapse=function(_ada){
this._getSplitPanelBindingForSplitter(_ada).collapse();
this.invokeLayout();
};
SplitBoxBinding.prototype.unCollapse=function(_adb){
this._getSplitPanelBindingForSplitter(_adb).unCollapse();
this.invokeLayout();
};
SplitBoxBinding.prototype._getSplitPanelBindingForSplitter=function(_adc){
var _add=DOMUtil.getOrdinalPosition(_adc.bindingElement,true);
var _ade,_adf=this.getSplitPanelElements();
switch(_adc.getCollapseDirection()){
case SplitterBinding.COLLAPSE_BEFORE:
_ade=_adf.get(_add);
break;
case SplitterBinding.COLLAPSE_AFTER:
_ade=_adf.get(_add+1);
break;
}
return UserInterface.getBinding(_ade);
};
SplitBoxBinding.prototype.invokeLayout=function(_ae0){
var _ae1=this.isHorizontalOrient();
var _ae2=this.getSplitPanelBindings();
var _ae3=this.getSplitterBindings();
var _ae4=new List();
var _ae5,sum=0;
var _ae7=0;
_ae2.each(function(_ae8){
if(_ae8.isFixed==true){
if(!_ae2.hasNext()){
_ae7+=_ae8.getFix();
}
_ae4.add(0);
sum+=0;
}else{
_ae5=_ae8.getRatio();
_ae4.add(_ae5);
sum+=_ae5;
}
});
if(sum==0){
this.logger.warn("Division by zero was hacked");
sum=1;
}
if(_ae4.getLength()!=_ae2.getLength()){
throw new Error(this+" Invalid property (ratio)");
}else{
var _ae9=_ae1?this.getWidth():this.getHeight();
_ae9-=_ae7;
_ae3.each(function(_aea){
if(_aea.isVisible){
_ae9-=SplitterBinding.DIMENSION;
}
});
var unit=_ae9/sum;
var _aec=0;
var self=this;
_ae2.each(function(_aee){
var span=0;
var _af0=_ae4.getNext();
if(_aee.isFixed){
span=_aee.getFix();
}else{
span=Math.round(unit*_af0);
if(isNaN(span)){
alert("isNaN ( span ) ["+this.getProperty("layout")+"]");
}
}
_aec+=span;
while(_aec>_ae9){
_aec--;
span--;
}
if(!_aee.isFixed){
if(_ae1){
_aee.setWidth(span);
}else{
_aee.setHeight(span);
}
}
});
}
if(_ae0!=true){
this.reflex();
}
if(this._persist&&this._persist.layout){
var _af1=this.getLayout();
if(_af1){
this.setProperty("layout",_af1);
}
}
};
SplitBoxBinding.prototype.computeLayout=function(){
var _af2=this.isHorizontalOrient();
var _af3=this.getSplitPanelBindings();
var _af4=this.getSplitterBindings();
var _af5=null;
var _af6=null;
var unit=null;
var _af8=null;
var span=null;
_af3.each(function(_afa){
if(!unit){
unit=_af2?_afa.getWidth():_afa.getHeight();
}
span=_af2?_afa.getWidth():_afa.getHeight();
if(_af8){
span-=_af8;
_af8=null;
}
_af5=_af4.getNext();
if(_af5&&_af5.offset){
_af8=_af5.offset;
span+=_af8;
}
_afa.setRatio(span/unit);
});
};
SplitBoxBinding.prototype.refreshLayout=function(){
this.computeLayout();
this.invokeLayout();
};
SplitBoxBinding.prototype.setLayout=function(_afb){
this.logger.debug(_afb);
this.setProperty("layout",_afb);
this._initializeLayout();
this.invokeLayout();
};
SplitBoxBinding.prototype.getLayout=function(){
if(!this.isLayoutInitialized){
if(!this.getProperty("layout")){
this.setProperty("layout",this.getDefaultLayout());
}
}else{
var _afc="",_afd=this.getSplitPanelBindings();
_afd.each(function(_afe){
_afc+=_afe.getRatio().toString();
_afc+=_afd.hasNext()?":":"";
});
this.setProperty("layout",_afc);
}
return new String(this.getProperty("layout"));
};
SplitBoxBinding.prototype.getDefaultLayout=function(){
var _aff=this.getSplitPanelElements();
_aff.each(function(_b00){
layout+="1"+(_aff.hasNext()?":":"");
});
this.setProperty("layout",layout);
};
SplitBoxBinding.prototype.setWidth=function(_b01){
this.bindingElement.style.width=_b01+"px";
};
SplitBoxBinding.prototype.getWidth=function(){
return this.bindingElement.offsetWidth;
};
SplitBoxBinding.prototype.setHeight=function(_b02){
this.bindingElement.style.height=_b02+"px";
};
SplitBoxBinding.prototype.getHeight=function(){
return this.bindingElement.offsetHeight;
};
SplitBoxBinding.prototype.getOrient=function(){
return this.getProperty("orient");
};
SplitBoxBinding.prototype.isHorizontalOrient=function(){
return this._orient==SplitBoxBinding.ORIENT_HORIZONTAL;
};
SplitBoxBinding.prototype.getSplitPanelElements=function(){
return this.getChildElementsByLocalName("splitpanel");
};
SplitBoxBinding.prototype.getSplitPanelBindings=function(){
return this.getChildBindingsByLocalName("splitpanel");
};
SplitBoxBinding.prototype.getSplitterElements=function(){
return this.getChildElementsByLocalName("splitter");
};
SplitBoxBinding.prototype.getSplitterBindings=function(){
return this.getChildBindingsByLocalName("splitter");
};
SplitBoxBinding.prototype.fit=function(_b03){
if(!this.isFit||_b03){
if(this.isHorizontalOrient()){
var max=0;
var _b05=this.getSplitPanelBindings();
_b05.each(function(_b06){
var _b07=_b06.bindingElement.offsetHeight;
max=_b07>max?_b07:max;
});
this._setFitnessHeight(max);
}else{
throw "SplitBoxBinding enforceFitness not supported vertically!";
}
this.isFit=true;
}
};
SplitBoxBinding.newInstance=function(_b08){
var _b09=DOMUtil.createElementNS(Constants.NS_UI,"ui:splitbox",_b08);
return UserInterface.registerBinding(_b09,SplitBoxBinding);
};
SplitPanelBinding.prototype=new ControlBoxBinding;
SplitPanelBinding.prototype.constructor=SplitPanelBinding;
SplitPanelBinding.superclass=ControlBoxBinding.prototype;
function SplitPanelBinding(){
this.logger=SystemLogger.getLogger("SplitPanelBinding");
this._containingSplitBoxBinding=null;
this.isCollapsed=false;
this.isFixed=false;
this.isVisible=true;
this._fixedSpan=null;
this.isFlexible=true;
return this;
}
SplitPanelBinding.prototype.toString=function(){
return "[SplitPanelBinding]";
};
SplitPanelBinding.prototype.onBindingAttach=function(){
SplitPanelBinding.superclass.onBindingAttach.call(this);
this._containingSplitBoxBinding=this.getAncestorBindingByLocalName("splitbox");
this.attachClassName(this._containingSplitBoxBinding.getOrient());
this.parseDOMProperties();
};
SplitPanelBinding.prototype.parseDOMProperties=function(){
var type=this.getProperty("type");
if(type){
this.attachClassName(type);
}
var fix=this.getProperty("fix");
if(fix){
this.setFix(fix);
}
var _b0c=this.getProperty("hidden");
if(_b0c){
this.hide();
}
};
SplitPanelBinding.prototype.collapse=function(){
this.hide();
this.isCollapsed=true;
this.setProperty("collapsed","true");
};
SplitPanelBinding.prototype.unCollapse=function(){
this.show();
this.isCollapsed=false;
this.deleteProperty("collapsed");
};
SplitPanelBinding.prototype.hide=function(){
if(this.isVisible==true){
this.setProperty("ratiocache",this.getRatio());
this.setRatio(0);
this.bindingElement.style.display="none";
this.setProperty("hidden",true);
this.isVisible=false;
}
};
SplitPanelBinding.prototype.show=function(){
if(!this.isVisible){
var _b0d=this.getProperty("ratiocache");
if(_b0d){
this.setRatio(_b0d);
this.deleteProperty("ratiocache");
}else{
this._containingSplitBoxBinding.computeLayout();
}
this.bindingElement.style.display="block";
this.deleteProperty("hidden");
this.isVisible=true;
}
};
SplitPanelBinding.prototype.setWidth=function(_b0e){
if(!this.isFixed){
if(_b0e!=this.getWidth()){
if(_b0e<0){
_b0e=this.getWidth();
this.logger.warn("SplitPanelBinding#setWidth bug in Internet Explorer!");
}
try{
this.bindingElement.style.width=_b0e+"px";
}
catch(exception){
alert("SplitPanelBinding#setWidth: Occult width: "+_b0e);
alert(arguments.caller.callee);
}
}
}
};
SplitPanelBinding.prototype.getWidth=function(){
var _b0f=null;
if(this.isFixed){
_b0f=this.getFix();
}else{
_b0f=this.bindingElement.offsetWidth;
}
return _b0f;
};
SplitPanelBinding.prototype.setHeight=function(_b10){
if(!this.isFixed){
if(_b10!=this.getHeight()){
try{
this.bindingElement.style.height=_b10+"px";
}
catch(exception){
alert("SplitPanelBinding.prototype.setHeight"+arguments.caller.callee);
}
}
}
};
SplitPanelBinding.prototype.getHeight=function(){
var _b11=null;
if(this.isFixed){
_b11=this.getFix();
}else{
_b11=this.bindingElement.offsetHeight;
}
return _b11;
};
SplitPanelBinding.prototype.setRatio=function(_b12){
this.setProperty("ratio",_b12);
};
SplitPanelBinding.prototype.getRatio=function(){
return this.getProperty("ratio");
};
SplitPanelBinding.prototype.setFix=function(_b13){
if(_b13){
this._fixedSpan=_b13;
switch(this._containingSplitBoxBinding.getOrient()){
case SplitBoxBinding.ORIENT_HORIZONTAL:
this.logger.warn("Fix not properly supported on horizontal splitboxes!");
this.setWidth(_b13);
break;
case SplitBoxBinding.ORIENT_VERTICAL:
this.setHeight(_b13);
break;
}
this.isFixed=true;
}else{
this._fixedSpan=null;
this.isFixed=false;
}
};
SplitPanelBinding.prototype.getFix=function(){
return this._fixedSpan;
};
SplitPanelBinding.newInstance=function(_b14){
var _b15=DOMUtil.createElementNS(Constants.NS_UI,"ui:splitpanel",_b14);
return UserInterface.registerBinding(_b15,SplitPanelBinding);
};
SplitterBinding.prototype=new Binding;
SplitterBinding.prototype.constructor=SplitterBinding;
SplitterBinding.superclass=Binding.prototype;
SplitterBinding.DIMENSION=8;
SplitterBinding.BUFFER=30;
SplitterBinding.COLLAPSE_AFTER="after";
SplitterBinding.COLLAPSE_BEFORE="before";
SplitterBinding.ACTION_DRAGSTART="splitter dragstart";
SplitterBinding.ACTION_DRAGGED="splitter dragged";
SplitterBinding.ACTION_COLLAPSE="splitter collapse";
SplitterBinding.ACTION_UNCOLLAPSE="splitter uncollapse";
SplitterBinding.CLASSNAME_ACTIVE="active";
SplitterBinding.CLASSNAME_HOVER="hover";
function SplitterBinding(){
this.logger=SystemLogger.getLogger("SplitterBinding");
this.isDraggable=true;
this.isDragging=false;
this.isCollapsed=false;
this.isDisabled=true;
this._containingSplitBoxBinding=null;
this._collapseDirection=SplitterBinding.COLLAPSE_AFTER;
this.offset=null;
return this;
}
SplitterBinding.prototype.toString=function(){
return "[SplitterBinding]";
};
SplitterBinding.prototype.serialize=function(){
var _b16=SplitBoxBinding.superclass.serialize.call(this);
if(_b16){
_b16.collapse=this.getProperty("collapse");
_b16.collapsed=this.getProperty("collapsed");
_b16.disabled=this.getProperty("isdisabled");
}
return _b16;
};
SplitterBinding.prototype.onBindingAttach=function(){
SplitterBinding.superclass.onBindingAttach.call(this);
this.addActionListener(Binding.ACTION_DRAG);
this._containingSplitBoxBinding=this.getAncestorBindingByLocalName("splitbox");
this.attachClassName(this._containingSplitBoxBinding.getOrient());
this._collapseDirection=this.getProperty("collapse");
this.buildDOMContent();
this.attachDOMEvents();
var _b17=this.getProperty("hidden");
if(_b17){
this.hide();
}
};
SplitterBinding.prototype.buildDOMContent=function(){
this.shadowTree.splitterBody=DOMUtil.createElementNS(Constants.NS_UI,"ui:splitterbody",this.bindingDocument);
this.bindingElement.appendChild(this.shadowTree.splitterBody);
if(Client.isMozilla==true){
var text=this.bindingDocument.createTextNode("!");
this.bindingElement.appendChild(text);
}
};
SplitterBinding.prototype.attachDOMEvents=function(){
this.addEventListener(DOMEvents.MOUSEOVER);
this.addEventListener(DOMEvents.MOUSEOUT);
};
SplitterBinding.prototype.collapse=function(){
if(!this.isCollapsed){
this.hide();
this.setProperty("collapsed","true");
this.isCollapsed=true;
this.dispatchAction(SplitterBinding.ACTION_COLLAPSE);
}
};
SplitterBinding.prototype.unCollapse=function(){
if(this.isCollapsed==true){
this.show();
this.deleteProperty("collapsed");
this.isCollapsed=false;
this.dispatchAction(SplitterBinding.ACTION_UNCOLLAPSE);
}
};
SplitterBinding.prototype.getCollapseDirection=function(){
return this._collapseDirection;
};
SplitterBinding.prototype.setCollapseDirection=function(_b19){
this.setProperty("collapse",_b19);
this._collapseDirection=_b19;
};
SplitterBinding.prototype.handleAction=function(_b1a){
SplitterBinding.superclass.handleAction.call(this,_b1a);
switch(_b1a.type){
case Binding.ACTION_DRAG:
this.dragger.registerHandler(this);
_b1a.consume();
break;
}
};
SplitterBinding.prototype.handleEvent=function(e){
SplitterBinding.superclass.handleEvent.call(this,e);
var _b1c=this;
if(!this.isDragging&&!this.isDisabled){
switch(e.type){
case DOMEvents.MOUSEOVER:
window.splitterTimeout=window.setTimeout(function(){
_b1c.shadowTree.splitterBody.className=SplitterBinding.CLASSNAME_HOVER;
},250);
break;
case DOMEvents.MOUSEOUT:
if(window.splitterTimeout){
window.clearTimeout(window.splitterTimeout);
}
if(_b1c.shadowTree.splitterBody.className==SplitterBinding.CLASSNAME_HOVER){
this.shadowTree.splitterBody.className="";
}
break;
}
}
};
SplitterBinding.prototype.onDragStart=function(_b1d){
this.attachClassName(SplitterBinding.CLASSNAME_ACTIVE);
this.shadowTree.splitterBody.className=SplitterBinding.CLASSNAME_ACTIVE;
this.isDragging=true;
};
SplitterBinding.prototype.onDrag=function(diff){
diff=this.getEvaluatedDiff(diff);
if(this._containingSplitBoxBinding.isHorizontalOrient()){
this.shadowTree.splitterBody.style.left=diff.x+"px";
}else{
this.shadowTree.splitterBody.style.top=diff.y+"px";
}
};
SplitterBinding.prototype.onDragStop=function(diff){
diff=this.getEvaluatedDiff(diff);
this.offset=this._containingSplitBoxBinding.isHorizontalOrient()?diff.x:diff.y;
this.dispatchAction(SplitterBinding.ACTION_DRAGGED);
this.offset=null;
this.detachClassName(SplitterBinding.CLASSNAME_ACTIVE);
this.shadowTree.splitterBody.className="";
this.isDragging=false;
if(this._containingSplitBoxBinding.isHorizontalOrient()){
this.shadowTree.splitterBody.style.left="0";
}else{
this.shadowTree.splitterBody.style.top="0";
}
};
SplitterBinding.prototype.getEvaluatedDiff=function(diff){
switch(this._containingSplitBoxBinding.getOrient()){
case SplitBoxBinding.ORIENT_HORIZONTAL:
var x=this.bindingElement.offsetLeft;
var w=this.bindingElement.offsetWidth;
var t=this.bindingElement.parentNode.offsetWidth;
var min=-x+SplitterBinding.BUFFER;
var max=t-x-w-SplitterBinding.BUFFER;
diff.x=diff.x<=min?min:diff.x;
diff.x=diff.x>=max?max:diff.x;
break;
case SplitBoxBinding.ORIENT_VERTICAL:
var y=this.bindingElement.offsetTop;
var h=this.bindingElement.offsetHeight;
var t=this.bindingElement.parentNode.offsetHeight;
var min=-y+SplitterBinding.BUFFER;
var max=t-y-h-SplitterBinding.BUFFER;
diff.y=diff.y<=min?min:diff.y;
diff.y=diff.y>=max?max:diff.y;
break;
}
return diff;
};
SplitterBinding.prototype.disable=function(){
if(!this.isDisabled){
alert("disable");
this.isDisabled=true;
this.disableDragging();
this.setProperty("isdisabled",true);
}
};
SplitterBinding.prototype.enable=function(){
if(this.isDisabled==true){
this.isDisabled=false;
this.enableDragging();
this.deleteProperty("isdisabled");
}
};
SplitterBinding.newInstance=function(_b28){
var _b29=DOMUtil.createElementNS(Constants.NS_UI,"ui:splitter",_b28);
return UserInterface.registerBinding(_b29,SplitterBinding);
};
DecksBinding.prototype=new FlexBoxBinding;
DecksBinding.prototype.constructor=DecksBinding;
DecksBinding.superclass=FlexBoxBinding.prototype;
DecksBinding.ACTION_SELECTED="decks deck selected";
DecksBinding.NODENAME_DECK="deck";
function DecksBinding(){
this.logger=SystemLogger.getLogger("DecksBinding");
this._selectedDeckBinding=null;
this._lastKnownDimension=null;
}
DecksBinding.prototype.toString=function(){
return "[DecksBinding]";
};
DecksBinding.prototype.onBindingRegister=function(){
DecksBinding.superclass.onBindingRegister.call(this);
this._lastKnownDimension=new Dimension(0,0);
this.attachClassName("deckselement");
};
DecksBinding.prototype.onBindingAttach=function(){
DecksBinding.superclass.onBindingAttach.call(this);
var _b2a=this.getProperty("selectedindex");
var _b2b=this.getDeckElements();
if(_b2b.hasEntries()){
var _b2c=false;
var _b2d=0;
while(_b2b.hasNext()){
var deck=_b2b.getNext();
if(_b2a&&_b2d==_b2a){
deck.setAttribute("selected","true");
_b2c=true;
}else{
if(deck.getAttribute("selected")=="true"){
_b2c=true;
}
}
_b2d++;
}
if(!_b2c){
_b2b.getFirst().setAttribute("selected","true");
}
}
};
DecksBinding.prototype.getDeckElements=function(){
return this.getChildElementsByLocalName(this.constructor.NODENAME_DECK);
};
DecksBinding.prototype.select=function(arg){
var _b30=this.getBindingForArgument(arg);
if(_b30!=null){
if(_b30!=this._selectedDeckBinding){
if(this._selectedDeckBinding){
this._selectedDeckBinding.unselect();
}
_b30.select();
this._selectedDeckBinding=_b30;
var _b31=this.getProperty("selectedindex");
if(_b31!=null){
this.setProperty("selectedindex",DOMUtil.getOrdinalPosition(_b30.bindingElement,true));
}
this.dispatchAction(DecksBinding.ACTION_SELECTED);
this.dispatchAction(FocusBinding.ACTION_UPDATE);
}
}else{
throw "No deck for argument "+arg;
}
};
DecksBinding.prototype.hasDimensionsChanged=function(){
var _b32=false;
var dim1=this.boxObject.getDimension();
var dim2=this._lastKnownDimension;
if(!Dimension.isEqual(dim1,dim2)){
_b32=true;
this._lastKnownDimension=dim1;
}
return _b32;
};
DecksBinding.prototype.getSelectedDeckBinding=function(){
return this._selectedDeckBinding;
};
DecksBinding.newInstance=function(_b35){
var _b36=DOMUtil.createElementNS(Constants.NS_UI,"ui:decks",_b35);
return UserInterface.registerBinding(_b36,DecksBinding);
};
DeckBinding.prototype=new FlexBoxBinding;
DeckBinding.prototype.constructor=DeckBinding;
DeckBinding.superclass=FlexBoxBinding.prototype;
DeckBinding.ACTION_SELECTED="deck selected";
DeckBinding.ACTION_UNSELECTED="deck unselected";
DeckBinding.NODENAME_DECKS="decks";
DeckBinding.CLASSNAME="deckelement";
function DeckBinding(){
this.logger=SystemLogger.getLogger("DeckBinding");
this.isSelected=false;
this.isVisible=false;
this.containingDecksBinding=null;
return this;
}
DeckBinding.prototype.toString=function(){
return "[DeckBinding]";
};
DeckBinding.prototype.onBindingRegister=function(){
DeckBinding.superclass.onBindingRegister.call(this);
this.addActionListener(BalloonBinding.ACTION_INITIALIZE);
this.attachClassName(DeckBinding.CLASSNAME);
};
DeckBinding.prototype.onBindingAttach=function(){
DeckBinding.superclass.onBindingAttach.call(this);
this.containingDecksBinding=this.getAncestorBindingByLocalName(this.constructor.NODENAME_DECKS);
if(this.getProperty("selected")==true){
this.containingDecksBinding.select(this);
}
};
DeckBinding.prototype.handleAction=function(_b37){
DeckBinding.superclass.handleAction.call(this,_b37);
var _b38=_b37.target;
switch(_b37.type){
case BalloonBinding.ACTION_INITIALIZE:
_b37.consume();
break;
}
};
DeckBinding.prototype.select=function(){
if(!this.isSelected){
if(this.isLazy==true){
this.wakeUp("select");
}else{
this.isSelected=true;
this.isVisible=true;
this.setProperty("selected","true");
this.bindingElement.style.position="static";
this._invokeManagedRecursiveFlex();
this.dispatchAction(DeckBinding.ACTION_SELECTED);
var root=UserInterface.getBinding(this.bindingDocument.body);
if(root.isActivated){
this.dispatchAction(FocusBinding.ACTION_FOCUS);
}
}
}
};
DeckBinding.prototype.unselect=function(){
if(this.isSelected){
this.dispatchAction(FocusBinding.ACTION_BLUR);
this.deleteProperty("selected");
this.isSelected=false;
this.isVisible=false;
this.bindingElement.style.position="absolute";
this.dispatchAction(DeckBinding.ACTION_UNSELECTED);
}
};
DeckBinding.prototype._invokeManagedRecursiveFlex=function(){
this.reflex(true);
};
DeckBinding.newInstance=function(_b3a){
var _b3b=DOMUtil.createElementNS(Constants.NS_UI,"ui:deck",_b3a);
return UserInterface.registerBinding(_b3b,DeckBinding);
};
ToolBarBinding.prototype=new Binding;
ToolBarBinding.prototype.constructor=ToolBarBinding;
ToolBarBinding.superclass=Binding.prototype;
ToolBarBinding.TYPE_TEXTONLY="textonly";
ToolBarBinding.TYPE_IMAGESONLY="imagesonly";
ToolBarBinding.TYPE_DEFAULT="imagesandtext";
ToolBarBinding.CLASSNAME_TEXTONLY="textonly";
ToolBarBinding.CLASSNAME_IMAGESONLY="imagesonly";
ToolBarBinding.CLASSNAME_IMAGESIZELARGE="imagesizelarge";
ToolBarBinding.CLASSNAME_IMAGESIZEXLARGE="imagesizexlarge";
ToolBarBinding.IMAGESIZE_NORMAL="normal";
ToolBarBinding.IMAGESIZE_LARGE="large";
ToolBarBinding.IMAGESIZE_XLARGE="xlarge";
function ToolBarBinding(){
this.logger=SystemLogger.getLogger("ToolBarBinding");
this.hasImages=true;
this.hasText=true;
this._imageSize=ToolBarBinding.IMAGESIZE_NORMAL;
this.type=ToolBarBinding.TYPE_DEFAULT;
this._hasDefaultContent=true;
this._toolBarBodyRight=null;
this._toolBarBodyLeft=null;
this.crawlerFilters=new List([FlexBoxCrawler.ID,FocusCrawler.ID,FitnessCrawler.ID]);
this._hasDOMContent=false;
return this;
}
ToolBarBinding.prototype.toString=function(){
return "[ToolBarBinding]";
};
ToolBarBinding.prototype.onBindingRegister=function(){
ToolBarBinding.superclass.onBindingRegister.call(this);
this.attachClassName(Binding.CLASSNAME_CLEARFLOAT);
};
ToolBarBinding.prototype.onBindingAttach=function(){
ToolBarBinding.superclass.onBindingAttach.call(this);
this.parseDOMProperties();
this.buildDOMContent();
this.addMembers(this.getChildBindingsByLocalName("toolbarbody"));
};
ToolBarBinding.prototype.onMemberInitialize=function(_b3c){
if(_b3c instanceof ToolBarBodyBinding){
if(_b3c.isRightAligned){
if(!this._toolBarBodyRight){
this._toolBarBodyRight=_b3c;
}
}else{
if(!this._toolBarBodyLeft){
this._toolBarBodyLeft=_b3c;
}
}
}
ToolBarBinding.superclass.onMemberInitialize.call(this,_b3c);
};
ToolBarBinding.prototype.parseDOMProperties=function(){
var _b3d=this.getProperty("imagesize");
var type=this.getProperty("type");
if(_b3d){
this.setImageSize(_b3d);
}
if(type){
this.setType(type);
}else{
this.setType(this.type);
}
};
ToolBarBinding.prototype.buildDOMContent=function(){
if(this._hasDefaultContent==true&&!this._hasDOMContent){
var _b3f=ToolBarGroupBinding.newInstance(this.bindingDocument);
_b3f.add(ToolBarButtonBinding.newInstance(this.bindingDocument));
_b3f.isDefaultContent=true;
this.add(_b3f);
_b3f.attachRecursive();
this._hasDOMContent=true;
}
};
ToolBarBinding.prototype.flex=function(){
var left=this._toolBarBodyLeft;
var _b41=this._toolBarBodyRight;
if(left!=null&&left.hasClassName("max")){
this._maxToolBarGroup(left,_b41);
}
if(_b41!=null&&_b41.hasClassName("max")){
this._maxToolBarGroup(_b41,left);
}
};
ToolBarBinding.prototype._maxToolBarGroup=function(max,_b43){
var _b44=this.boxObject.getDimension().w;
var _b45=CSSComputer.getPadding(this.bindingElement);
_b44-=(_b45.left+_b45.right);
if(_b43!=null){
_b44-=_b43.boxObject.getDimension().w;
if(!Client.isWindows){
_b44-=1;
}
if(Client.isExplorer){
_b44-=15;
}
}
max.bindingElement.style.width=_b44+"px";
};
ToolBarBinding.prototype.getToolBarGroupByIndex=function(_b46){
return this.getDescendantBindingsByLocalName("toolbargroup").get(_b46);
};
ToolBarBinding.prototype.addLeft=function(_b47,_b48){
var _b49=null;
if(this._toolBarBodyLeft!=null){
_b49=this._toolBarBodyLeft.add(_b47,_b48);
}else{
throw new Error("No left toolbarbody");
}
return _b49;
};
ToolBarBinding.prototype.addLeftFirst=function(_b4a,_b4b){
var _b4c=null;
if(this._toolBarBodyLeft){
_b4c=this._toolBarBodyLeft.addFirst(_b4a,_b4b);
}else{
throw new Error("No left toolbarbody");
}
return _b4c;
};
ToolBarBinding.prototype.addRight=function(_b4d){
var _b4e=null;
if(this._toolBarBodyRight){
_b4e=this._toolBarBodyRight.add(_b4d);
}else{
throw new Error("No left toolbarbody");
}
return _b4e;
};
ToolBarBinding.prototype.empty=function(){
this.emptyLeft();
this.emptyRight();
};
ToolBarBinding.prototype.emptyLeft=function(){
if(this._toolBarBodyLeft){
this._toolBarBodyLeft.empty();
}
};
ToolBarBinding.prototype.emptyRight=function(){
if(this._toolBarBodyRight){
this._toolBarBodyRight.empty();
}
};
ToolBarBinding.prototype.setImageSize=function(size){
switch(size){
case ToolBarBinding.IMAGESIZE_LARGE:
this.attachClassName(ToolBarBinding.CLASSNAME_IMAGESIZELARGE);
this.detachClassName(ToolBarBinding.CLASSNAME_IMAGESIZEXLARGE);
break;
case ToolBarBinding.IMAGESIZE_XLARGE:
this.attachClassName(ToolBarBinding.CLASSNAME_IMAGESIZEXLARGE);
this.detachClassName(ToolBarBinding.CLASSNAME_IMAGESIZELARGE);
break;
default:
this.detachClassName(ToolBarBinding.CLASSNAME_IMAGESIZELARGE);
this.detachClassName(ToolBarBinding.CLASSNAME_IMAGESIZEXLARGE);
break;
}
this._imageSize=size;
this.setProperty("imagesize",size);
};
ToolBarBinding.prototype.getImageSize=function(){
return this._imageSize;
};
ToolBarBinding.prototype.showImagesOnly=function(){
this.detachClassName(ToolBarBinding.CLASSNAME_TEXTONLY);
this.attachClassName(ToolBarBinding.CLASSNAME_IMAGESONLY);
this.hasImages=true;
this.hasText=false;
};
ToolBarBinding.prototype.showTextOnly=function(){
this.detachClassName(ToolBarBinding.CLASSNAME_IMAGESONLY);
this.attachClassName(ToolBarBinding.CLASSNAME_TEXTONLY);
this.hasImages=false;
this.hasText=true;
};
ToolBarBinding.prototype.showBoth=function(){
this.detachClassName(ToolBarBinding.CLASSNAME_IMAGESONLY);
this.detachClassName(ToolBarBinding.CLASSNAME_TEXTONLY);
this.hasImages=true;
this.hasText=true;
};
ToolBarBinding.prototype.setType=function(type){
switch(type){
case ToolBarBinding.TYPE_TEXTONLY:
this.showTextOnly();
break;
case ToolBarBinding.TYPE_IMAGESONLY:
this.showImagesOnly();
break;
default:
this.showBoth();
break;
}
this.setProperty("type",type);
};
ToolBarBinding.newInstance=function(_b51){
var _b52=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbar",_b51);
return UserInterface.registerBinding(_b52,ToolBarBinding);
};
ToolBarBodyBinding.prototype=new Binding;
ToolBarBodyBinding.prototype.constructor=ToolBarBodyBinding;
ToolBarBodyBinding.superclass=Binding.prototype;
function ToolBarBodyBinding(){
this.logger=SystemLogger.getLogger("ToolBarBodyBinding");
this.isRightAligned=false;
return this;
}
ToolBarBodyBinding.prototype.toString=function(){
return "[ToolBarBodyBinding]";
};
ToolBarBodyBinding.prototype.onBindingAttach=function(){
ToolBarBodyBinding.superclass.onBindingAttach.call(this);
this.addMembers(this.getChildBindingsByLocalName("toolbargroup"));
if(this.getProperty("align")=="right"||this.isRightAligned){
this.alignRight();
}
};
ToolBarBodyBinding.prototype.onBindingInitialize=function(){
this.refreshToolBarGroups();
ToolBarBodyBinding.superclass.onBindingInitialize.call(this);
};
ToolBarBodyBinding.prototype.alignRight=function(){
this.attachClassName("alignright");
this.setProperty("align","right");
this.isRightAligned=true;
};
ToolBarBodyBinding.prototype.refreshToolBarGroups=function(){
var _b53=this.getDescendantBindingsByLocalName("toolbargroup");
var _b54=new List();
var _b55=true;
_b53.each(function(_b56){
if(_b56.isVisible&&!_b56.isDefaultContent){
_b54.add(_b56);
}
});
while(_b54.hasNext()){
var _b57=_b54.getNext();
_b57.setLayout(ToolBarGroupBinding.LAYOUT_DEFAULT);
if(_b55){
_b57.setLayout(ToolBarGroupBinding.LAYOUT_FIRST);
_b55=false;
}
if(!_b54.hasNext()){
_b57.setLayout(ToolBarGroupBinding.LAYOUT_LAST);
}
}
if(this.getProperty("equalsize")){
this.enforceEqualSize();
}
};
ToolBarBodyBinding.prototype.enforceEqualSize=function(){
var max=0,list=this.getDescendantBindingsByLocalName("clickbutton");
while(list.hasNext()){
var _b5a=list.getNext();
var _b5b=_b5a.getEqualSizeWidth();
if(_b5b>max){
max=_b5b;
}
}
if(max!=0){
list.reset();
while(list.hasNext()){
var _b5a=list.getNext();
_b5a.setEqualSizeWidth(max);
}
}
};
ToolBarBodyBinding.prototype.empty=function(){
this.detachRecursive();
this.bindingElement.innerHTML="";
};
ToolBarBodyBinding.prototype.add=function(_b5c,_b5d){
var _b5e=ToolBarBinding.superclass.add.call(this,_b5c);
if(!_b5d){
if(_b5c instanceof ToolBarGroupBinding&&this.isAttached){
this.refreshToolBarGroups();
}
}
return _b5e;
};
ToolBarBodyBinding.prototype.addFirst=function(_b5f,_b60){
var _b61=ToolBarBinding.superclass.addFirst.call(this,_b5f);
if(!_b60){
if(_b5f instanceof ToolBarGroupBinding&&this.isAttached){
this.refreshToolBarGroups();
}
}
return _b61;
};
ToolBarBodyBinding.newInstance=function(_b62){
var _b63=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbarbody",_b62);
return UserInterface.registerBinding(_b63,ToolBarBodyBinding);
};
ToolBarGroupBinding.prototype=new RadioGroupBinding;
ToolBarGroupBinding.prototype.constructor=ToolBarGroupBinding;
ToolBarGroupBinding.superclass=RadioGroupBinding.prototype;
ToolBarGroupBinding.LAYOUT_DEFAULT=0;
ToolBarGroupBinding.LAYOUT_FIRST=1;
ToolBarGroupBinding.LAYOUT_LAST=2;
ToolBarGroupBinding.CLASSNAME_DEFAULTCONTENT="defaultcontent";
function ToolBarGroupBinding(){
this.logger=SystemLogger.getLogger("ToolBarGroupBinding");
this.isDefaultContent=false;
}
ToolBarGroupBinding.prototype.toString=function(){
return "[ToolBarGroupBinding]";
};
ToolBarGroupBinding.prototype.onBindingAttach=function(){
ToolBarGroupBinding.superclass.onBindingAttach.call(this);
this.addMembers(this.getDescendantBindingsByLocalName("toolbarbutton"));
this.addMembers(this.getDescendantBindingsByLocalName("toolbarlabel"));
this.addMembers(this.getDescendantBindingsByLocalName("clickbutton"));
if(this.isDefaultContent==true){
this.attachClassName(ToolBarGroupBinding.CLASSNAME_DEFAULTCONTENT);
}
};
ToolBarGroupBinding.prototype.setLayout=function(_b64){
switch(_b64){
case ToolBarGroupBinding.LAYOUT_DEFAULT:
this.detachClassName("first");
this.detachClassName("last");
break;
case ToolBarGroupBinding.LAYOUT_FIRST:
this.attachClassName("first");
break;
case ToolBarGroupBinding.LAYOUT_LAST:
this.attachClassName("last");
break;
}
};
ToolBarGroupBinding.prototype.show=function(){
ToolBarGroupBinding.superclass.show.call(this);
var _b65=this.bindingElement.parentNode;
if(DOMUtil.getLocalName(_b65)=="toolbarbody"){
UserInterface.getBinding(_b65).refreshToolBarGroups();
}
};
ToolBarGroupBinding.prototype.hide=function(){
ToolBarGroupBinding.superclass.hide.call(this);
var _b66=this.bindingElement.parentNode;
if(DOMUtil.getLocalName(_b66)=="toolbarbody"){
UserInterface.getBinding(_b66).refreshToolBarGroups();
}
};
ToolBarGroupBinding.newInstance=function(_b67){
var _b68=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbargroup",_b67);
return UserInterface.registerBinding(_b68,ToolBarGroupBinding);
};
ToolBarButtonBinding.prototype=new ButtonBinding;
ToolBarButtonBinding.prototype.constructor=ToolBarButtonBinding;
ToolBarButtonBinding.superclass=ButtonBinding.prototype;
function ToolBarButtonBinding(){
this.logger=SystemLogger.getLogger("ToolBarButtonBinding");
}
ToolBarButtonBinding.prototype.toString=function(){
return "[ToolBarButtonBinding]";
};
ToolBarButtonBinding.newInstance=function(_b69){
var _b6a=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbarbutton",_b69);
return UserInterface.registerBinding(_b6a,ToolBarButtonBinding);
};
ToolBarLabelBinding.prototype=new Binding;
ToolBarLabelBinding.prototype.constructor=ToolBarLabelBinding;
ToolBarLabelBinding.superclass=Binding.prototype;
function ToolBarLabelBinding(){
this.logger=SystemLogger.getLogger("ToolBarLabelBinding");
}
ToolBarLabelBinding.prototype.toString=function(){
return "[ToolBarLabelBinding]";
};
ToolBarLabelBinding.prototype.onBindingAttach=function(){
ToolBarLabelBinding.superclass.onBindingAttach.call(this);
this._labelBinding=this.add(LabelBinding.newInstance(this.bindingDocument));
this.shadowTree.label=this._labelBinding;
var _b6b=this.getProperty("label");
var _b6c=this.getProperty("image");
if(_b6b){
this.setLabel(_b6b);
}
if(_b6c){
this.setImage(_b6c);
}
};
ToolBarLabelBinding.prototype.setLabel=function(_b6d,_b6e){
if(this.isAttached){
this._labelBinding.setLabel(_b6d,_b6e);
}
this.setProperty("label",_b6d);
};
ToolBarLabelBinding.prototype.setImage=function(_b6f,_b70){
if(this.isAttached){
this._labelBinding.setImage(_b6f,_b70);
}
this.setProperty("image",_b6f);
};
ToolBarLabelBinding.newInstance=function(_b71){
var _b72=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbarlabel",_b71);
return UserInterface.registerBinding(_b72,ToolBarLabelBinding);
};
DialogToolBarBinding.prototype=new ToolBarBinding;
DialogToolBarBinding.prototype.constructor=DialogToolBarBinding;
DialogToolBarBinding.superclass=ToolBarBinding.prototype;
function DialogToolBarBinding(){
this.logger=SystemLogger.getLogger("DialogToolBarBinding");
this._buttons=null;
this._defaultButton=null;
this._focusedButton=null;
this._isListening=false;
this.crawlerFilters=new List([FlexBoxCrawler.ID]);
return this;
}
DialogToolBarBinding.prototype.toString=function(){
return "[DialogToolBarBinding]";
};
DialogToolBarBinding.prototype.onBindingRegister=function(){
DialogToolBarBinding.superclass.onBindingRegister.call(this);
this.addActionListener(Binding.ACTION_FOCUSED);
this.addActionListener(Binding.ACTION_BLURRED);
};
DialogToolBarBinding.prototype.onBindingDispose=function(){
DialogToolBarBinding.superclass.onBindingDispose.call(this);
if(this._isListening==true){
this.unsubscribe(BroadcastMessages.KEY_ENTER);
}
};
DialogToolBarBinding.prototype.onBindingInitialize=function(){
this.indexDialogButtons();
DialogToolBarBinding.superclass.onBindingInitialize.call(this);
};
DialogToolBarBinding.prototype.indexDialogButtons=function(){
var _b73=this.getDescendantBindingsByLocalName("clickbutton");
if(_b73.hasEntries()){
while(_b73.hasNext()){
var _b74=_b73.getNext();
if(_b74.isDefault){
this._defaultButton=_b74;
_b74.attachClassName(ButtonBinding.CLASSNAME_DEFAULT);
}
if(!this._isListening&&_b74.isFocusable){
this.subscribe(BroadcastMessages.KEY_ENTER);
this._isListening=true;
}
}
this._buttons=_b73;
}
};
DialogToolBarBinding.prototype.handleBroadcast=function(_b75,arg){
DialogToolBarBinding.superclass.handleBroadcast.call(this,_b75,arg);
switch(_b75){
case BroadcastMessages.KEY_ENTER:
if(!PopupBinding.hasActiveInstances()&&!EditorBinding.isActive){
if(Binding.exists(this)){
var _b77=this.getAncestorBindingByType(DialogBinding,true);
if(_b77!=null&&_b77.isActive){
if(this._focusedButton!=null){
if(!this._focusedButton.isDisabled){
this.unsubscribe(BroadcastMessages.KEY_ENTER);
this._focusedButton.fireCommand();
}
}else{
if(!this._defaultButton.isDisabled){
this.unsubscribe(BroadcastMessages.KEY_ENTER);
this._defaultButton.fireCommand();
}
}
}
}else{
this.logger.error("Ouch: DialogToolBarBinding#handleBroadcast");
}
}
break;
}
};
DialogToolBarBinding.prototype.handleAction=function(_b78){
DialogToolBarBinding.superclass.handleAction.call(this,_b78);
var _b79=_b78.target;
var _b7a=false;
var _b7b=this._buttons.reset();
if(_b79 instanceof ClickButtonBinding){
switch(_b78.type){
case Binding.ACTION_FOCUSED:
_b79.attachClassName(ButtonBinding.CLASSNAME_FOCUSED);
this._focusedButton=_b79;
if(this._defaultButton){
this._defaultButton.detachClassName(ButtonBinding.CLASSNAME_DEFAULT);
}
break;
case Binding.ACTION_BLURRED:
_b79.detachClassName(ButtonBinding.CLASSNAME_FOCUSED);
break;
}
}
if(this._defaultButton){
while(!_b7a&&_b7b.hasNext()){
var _b7c=_b7b.getNext();
_b7a=_b7c.isFocused;
}
if(!_b7a){
this._defaultButton.attachClassName(ButtonBinding.CLASSNAME_DEFAULT);
this._focusedButton=null;
}
}
};
ToolBoxToolBarButtonBinding.prototype=new ToolBarButtonBinding;
ToolBoxToolBarButtonBinding.prototype.constructor=ToolBoxToolBarButtonBinding;
ToolBoxToolBarButtonBinding.superclass=ToolBarButtonBinding.prototype;
function ToolBoxToolBarButtonBinding(){
this.logger=SystemLogger.getLogger("ToolBoxToolBarButtonBinding");
this._views=new Map();
this._lastGeneratedPerspective=null;
return this;
}
ToolBoxToolBarButtonBinding.prototype.toString=function(){
return "[ToolBoxToolBarButtonBinding]";
};
ToolBoxToolBarButtonBinding.prototype.onBindingAttach=function(){
ToolBoxToolBarButtonBinding.superclass.onBindingAttach.call(this);
if(System.hasActivePerspectives){
this.subscribe(BroadcastMessages.PERSPECTIVE_CHANGED);
var _b7d=this._views;
for(var _b7e in ViewDefinitions){
var def=ViewDefinitions[_b7e];
var key=def.perspective;
if(key!=null){
if(!_b7d.has(key)){
_b7d.set(key,new List());
}
var list=_b7d.get(key);
list.add(def);
}
}
}else{
this.hide();
}
};
ToolBoxToolBarButtonBinding.prototype.handleBroadcast=function(_b82,arg){
ToolBoxToolBarButtonBinding.superclass.handleBroadcast.call(this,_b82,arg);
switch(_b82){
case BroadcastMessages.PERSPECTIVE_CHANGED:
var tag=arg;
if(this._views.has(tag)){
if(tag!=this._lastGeneratedPerspective){
this._lastGeneratedPerspective=tag;
var list=this._views.get(tag);
var _b86=this.bindingWindow.bindingMap.toolboxpopup;
_b86.empty();
list.each(function(def){
var item=_b86.add(StageViewMenuItemBinding.newInstance(_b86.bindingDocument));
item.setType(MenuItemBinding.TYPE_CHECKBOX);
item.setHandle(def.handle);
item.setLabel(def.label);
item.setImage(def.image);
item.setToolTip(def.toolTip);
item.attach();
});
}
this.enable();
}else{
this.disable();
}
break;
}
};
TreeBinding.prototype=new FlexBoxBinding;
TreeBinding.prototype.constructor=TreeBinding;
TreeBinding.superclass=FlexBoxBinding.prototype;
TreeBinding.ACTION_SELECTIONCHANGED="tree selection changed";
TreeBinding.ACTION_NOSELECTION="tree selection none";
TreeBinding.SELECTIONTYPE_SINGLE="single";
TreeBinding.SELECTIONTYPE_MULTIPLE="multiple";
TreeBinding.grid=function(_b89){
var _b8a=TreeNodeBinding.HEIGHT;
var ceil=Math.ceil(_b89);
var _b8c=_b89%_b8a;
if(_b8c>0){
_b89=_b89-_b8c+_b8a;
}
return _b89+TreeBodyBinding.PADDING_TOP;
};
function TreeBinding(){
this.logger=SystemLogger.getLogger("TreeBinding");
this.isFocusable=true;
this.isFocused=false;
this._treeBodyBinding=null;
this._positionIndicatorBinding=null;
this._treeNodeBuffer=null;
this._treeNodeBindings=null;
this._focusedTreeNodeBindings=null;
this._isFocusable=true;
this._isSelectable=false;
this._selectionProperty=null;
this._selectonValue=null;
this._selectedTreeNodeBindings=null;
this._selectionType=TreeBinding.SELECTIONTYPE_SINGLE;
this._acceptingPosition=null;
this._acceptingDimension=null;
this._acceptingTreeNodeBinding=null;
this._acceptingPositions=null;
this.crawlerFilters=new List([FlexBoxCrawler.ID,FocusCrawler.ID,FitnessCrawler.ID]);
this._hasKeyboard=false;
this._yposition=0;
this._openTreeNodesBackupMap=null;
return this;
}
TreeBinding.prototype.toString=function(){
return "[TreeBinding]";
};
TreeBinding.prototype.onBindingRegister=function(){
TreeBinding.superclass.onBindingRegister.call(this);
this._treeNodeBindings=new Map();
this._treeNodeBuffer=new List();
this._focusedTreeNodeBindings=new List();
};
TreeBinding.prototype.onBindingAttach=function(){
TreeBinding.superclass.onBindingAttach.call(this);
var _b8d=this.getProperty("focusable");
if(_b8d!=null){
this._isFocusable=_b8d;
}
if(!this._treeBodyBinding){
this._treeBodyBinding=this.addMember(this.getChildBindingByLocalName("treebody"));
}
if(!this._treeBodyBinding){
var cry="TreeBinding structure invalid. Missing TreeBodyBinding.";
this.logger.error(cry);
if(Application.isDeveloperMode){
alert(cry);
}
}else{
this.addActionListener(Binding.ACTION_ACTIVATED);
this.addActionListener(TreeNodeBinding.ACTION_OPEN);
this.addActionListener(TreeNodeBinding.ACTION_CLOSE);
this.addActionListener(TreeNodeBinding.ACTION_DISPOSE);
if(this._isFocusable){
this.addActionListener(TreeNodeBinding.ACTION_ONFOCUS);
this.addActionListener(TreeNodeBinding.ACTION_ONMULTIFOCUS);
this.addActionListener(TreeNodeBinding.ACTION_BLUR);
}
this.subscribe(BroadcastMessages.TYPEDRAG_START);
this.subscribe(BroadcastMessages.TYPEDRAG_STOP);
this.addEventListener(DOMEvents.BEFOREUPDATE);
this.addEventListener(DOMEvents.AFTERUPDATE);
}
};
TreeBinding.prototype.onBindingInitialize=function(){
TreeBinding.superclass.onBindingInitialize.call(this);
this._setupTreeSelection();
var _b8f=this.getProperty("builder");
if(_b8f){
this._buildFromTextArea(_b8f);
}else{
if(this._treeNodeBuffer.hasEntries()){
while(this._treeNodeBuffer.hasNext()){
this.add(this._treeNodeBuffer.getNext());
}
}
}
};
TreeBinding.prototype._setupTreeSelection=function(){
var _b90=this.getProperty("selectable");
var _b91=this.getProperty("selectionproperty");
var _b92=this.getProperty("selectionvalue");
if(_b90){
this.setSelectable(true);
if(_b91){
this.setSelectionProperty(_b91);
}
if(_b92){
this.setSelectionValue(_b92);
}
}
this._positionIndicatorBinding=this.add(TreePositionIndicatorBinding.newInstance(this.bindingDocument));
this.shadowTree.positionIndicator=this._positionIndicatorBinding;
this._positionIndicatorBinding.attach();
};
TreeBinding.prototype._buildFromTextArea=function(id){
var area=this.bindingDocument.getElementById(id);
if(area!=null){
var _b95=UserInterface.getBinding(area);
var _b96=this._treeBodyBinding;
function build(){
_b96.subTreeFromString(area.value);
}
_b95.addActionListener(Binding.ACTION_UPDATED,{handleAction:function(){
build();
}});
setTimeout(build,0);
}
};
TreeBinding.prototype.registerTreeNodeBinding=function(_b97){
var _b98=_b97.getHandle();
if(this._treeNodeBindings.has(_b98)){
throw "Duplicate treenodehandles registered: "+_b97.getLabel();
}else{
this._treeNodeBindings.set(_b98,_b97);
var map=this._openTreeNodesBackupMap;
if(map!=null&&map.has(_b98)){
_b97.open();
}
}
};
TreeBinding.prototype.unRegisterTreeNodeBinding=function(_b9a){
this._treeNodeBindings.del(_b9a.getHandle());
};
TreeBinding.prototype.getTreeNodeBindingByHandle=function(_b9b){
var _b9c=null;
if(this._treeNodeBindings.has(_b9b)){
_b9c=this._treeNodeBindings.get(_b9b);
}else{
throw "No such treenode: "+_b9b;
}
return _b9c;
};
TreeBinding.prototype.handleAction=function(_b9d){
TreeBinding.superclass.handleAction.call(this,_b9d);
var _b9e=_b9d.target;
switch(_b9d.type){
case TreeNodeBinding.ACTION_OPEN:
_b9d.consume();
break;
case TreeNodeBinding.ACTION_CLOSE:
this._blurDescendantBindings(_b9e);
_b9d.consume();
break;
case TreeNodeBinding.ACTION_ONFOCUS:
this._nodePrimary=_b9e;
this.focusSingleTreeNodeBinding(_b9e);
if(!this.isFocused){
this.focus();
}
_b9d.consume();
break;
case TreeNodeBinding.ACTION_ONMULTIFOCUS:
switch(this._selectionType){
case TreeBinding.SELECTIONTYPE_SINGLE:
this._nodePrimary=_b9e;
this.focusSingleTreeNodeBinding(_b9e);
break;
case TreeBinding.SELECTIONTYPE_SINGLE:
this._nodeSecondary=_b9e;
if(!this._nodePrimary||this._nodeSecondary==this._nodePrimary){
this._nodePrimary=_b9e;
this.focusSingleTreeNodeBinding(_b9e);
}else{
this.focusMultipeTreeNodeBindings(this._getVisibleTreeNodeBindingsInRange(this._nodePrimary,this._nodeSecondary));
}
break;
}
if(!this.isFocused){
this.focus();
}
_b9d.consume();
break;
case TreeNodeBinding.ACTION_DISPOSE:
if(_b9e.isFocused){
this.blurSelectedTreeNodes();
}
_b9d.consume();
break;
case TreeNodeBinding.ACTION_BLUR:
break;
case Binding.ACTION_ACTIVATED:
if(!this.isFocused){
this.focus();
}
break;
}
};
TreeBinding.prototype._getVisibleTreeNodeBindingsInRange=function(_b9f,_ba0){
alert("TreeBinding#_getVisibleTreeNodeBindingsInRange");
};
TreeBinding.prototype.focusSingleTreeNodeBinding=function(_ba1){
if(_ba1!=null&&!_ba1.isFocused){
this.blurSelectedTreeNodes();
this._focusedTreeNodeBindings.add(_ba1);
_ba1.invokeManagedFocus();
if(this._isSelectable){
this._manageSelections();
}
}
};
TreeBinding.prototype.focusMultipeTreeNodeBindings=function(_ba2){
this.blurSelectedTreeNodes();
while(_ba2.hasNext()){
var _ba3=_ba2.getNext();
this._focusedTreeNodeBindings.add(_ba3);
_ba3.invokeManagedFocus();
}
if(this._isSelectable){
this._manageSelections();
}
};
TreeBinding.prototype._manageSelections=function(){
var _ba4=this._selectedTreeNodeBindings;
this._selectedTreeNodeBindings={};
var _ba5=false;
var _ba6=null;
this._focusedTreeNodeBindings.reset();
while(this._focusedTreeNodeBindings.hasNext()){
var _ba7=this._focusedTreeNodeBindings.getNext();
var _ba8=_ba7.getProperty(this._selectionProperty);
if(_ba8!=null){
if(!this._selectionValue||this._selectionValue[_ba8]){
_ba6=(this._selectedTreeNodeBindings[_ba7.key]=_ba7);
var _ba9=_ba4[_ba7.key];
if(!_ba9||_ba9!=_ba6){
_ba5=true;
}
}
}
}
if(_ba6){
if(_ba5){
this.dispatchAction(TreeBinding.ACTION_SELECTIONCHANGED);
}
}else{
if(_ba4){
for(var key in _ba4){
this.dispatchAction(TreeBinding.ACTION_NOSELECTION);
break;
}
}
}
};
TreeBinding.prototype.getSelectedTreeNodeBindings=function(){
var _bab=new List();
for(var key in this._selectedTreeNodeBindings){
_bab.add(this._selectedTreeNodeBindings[key]);
}
return _bab;
};
TreeBinding.prototype.blurSelectedTreeNodes=function(){
this._focusedTreeNodeBindings.reset().each(function(_bad){
_bad.blur();
});
this._focusedTreeNodeBindings.clear();
};
TreeBinding.prototype._blurDescendantBindings=function(_bae){
var _baf=_bae.getDescendantBindingsByLocalName("treenode");
var _bb0=true;
var self=this;
_baf.each(function(desc){
if(desc.isFocused){
desc.blur();
self._focusedTreeNodeBindings.del(self._focusedTreeNodeBindings.getIndex(desc));
}
return _bb0;
});
};
TreeBinding.prototype.getFocusedTreeNodeBindings=function(){
return this._focusedTreeNodeBindings.reset();
};
TreeBinding.prototype.focus=function(){
if(!this.isFocused){
this.isFocused=true;
FocusBinding.focusElement(this.bindingElement);
this.attachClassName(Binding.CLASSNAME_FOCUSED);
this.dispatchAction(Binding.ACTION_FOCUSED);
if(!this.getFocusedTreeNodeBindings().hasEntries()){
if(this.isFocusable){
this._focusDefault();
}
}
this._grabKeyboard();
}
};
TreeBinding.prototype._focusDefault=function(){
var _bb3=this._treeBodyBinding.getChildBindingByLocalName("treenode");
if(_bb3!=null){
this.focusSingleTreeNodeBinding(_bb3);
_bb3.callback();
}
};
TreeBinding.prototype.blur=function(){
if(this.isFocused){
this.isFocused=false;
this.detachClassName(Binding.CLASSNAME_FOCUSED);
this.dispatchAction(Binding.ACTION_BLURRED);
this._releaseKeyboard();
}
};
TreeBinding.prototype._grabKeyboard=function(){
this.subscribe(BroadcastMessages.KEY_ARROW);
this.subscribe(BroadcastMessages.KEY_ENTER);
this._hasKeyboard=true;
};
TreeBinding.prototype._releaseKeyboard=function(){
this.unsubscribe(BroadcastMessages.KEY_ARROW);
this.unsubscribe(BroadcastMessages.KEY_ENTER);
this._hasKeyboard=false;
};
TreeBinding.prototype.add=function(_bb4){
var _bb5=null;
if(this._treeBodyBinding){
_bb5=this._treeBodyBinding.add(_bb4);
}else{
this._treeNodeBuffer.add(_bb4);
_bb5=_bb4;
}
return _bb5;
};
TreeBinding.prototype.addFirst=function(_bb6){
throw new Error("Not implemented");
};
TreeBinding.prototype.empty=function(){
this._treeBodyBinding.detachRecursive();
var _bb7=this._treeBodyBinding.bindingElement;
_bb7.innerHTML="";
};
TreeBinding.prototype.isEmpty=function(){
return this._treeNodeBindings.hasEntries()==false;
};
TreeBinding.prototype.collapse=function(){
this.blurSelectedTreeNodes();
this._treeNodeBindings.each(function(_bb8,_bb9){
if(_bb9.isContainer&&_bb9.isOpen){
_bb9.close();
}
});
};
TreeBinding.prototype.setSelectable=function(_bba){
this._isSelectable=_bba;
if(_bba){
this._selectedTreeNodeBindings={};
}else{
this._selectedTreeNodeBindings=null;
this._selectionProperty=null;
this._selectionValue=null;
}
};
TreeBinding.prototype.setSelectionProperty=function(_bbb){
this._selectionProperty=_bbb;
};
TreeBinding.prototype.setSelectionValue=function(_bbc){
if(_bbc){
var list=new List(_bbc.split(" "));
this._selectionValue={};
while(list.hasNext()){
this._selectionValue[list.getNext()]=true;
}
}
};
TreeBinding.prototype.handleBroadcast=function(_bbe,arg){
TreeBinding.superclass.handleBroadcast.call(this,_bbe,arg);
switch(_bbe){
case BroadcastMessages.TYPEDRAG_START:
this.addEventListener(DOMEvents.MOUSEMOVE);
this._yposition=this.boxObject.getGlobalPosition().y;
break;
case BroadcastMessages.TYPEDRAG_STOP:
this.removeEventListener(DOMEvents.MOUSEMOVE);
this._positionIndicatorBinding.hide();
this._yposition=-1;
break;
case BroadcastMessages.KEY_ARROW:
this._navigateByKey(arg);
break;
case BroadcastMessages.KEY_ENTER:
var _bc0=this.getFocusedTreeNodeBindings();
if(_bc0.hasEntries()){
var node=_bc0.getFirst();
if(node.isContainer){
if(node.isOpen){
node.close();
}else{
node.open();
}
}else{
node.fireCommand();
}
}
break;
}
};
TreeBinding.prototype._navigateByKey=function(key){
var _bc3=this.getFocusedTreeNodeBindings();
if(_bc3.hasEntries()){
var node=_bc3.getFirst();
var next=null;
switch(key){
case KeyEventCodes.VK_UP:
next=node.getPreviousBindingByLocalName("treenode");
if(next!=null){
while(next.isContainer&&next.hasChildren()&&next.isOpen){
next=next.getChildBindingsByLocalName("treenode").getLast();
}
}
if(next==null){
next=node.getAncestorBindingByLocalName("treenode");
}
break;
case KeyEventCodes.VK_DOWN:
if(node.isContainer&&node.hasChildren()&&node.isOpen){
next=node.getChildBindingByLocalName("treenode");
}else{
next=node.getNextBindingByLocalName("treenode");
if(next==null){
var _bc6=null;
while(next==null&&(_bc6=node.getAncestorBindingByLocalName("treenode"))!=null){
if(_bc6!=null){
next=_bc6.getNextBindingByLocalName("treenode");
}
node=_bc6;
}
}
}
break;
case KeyEventCodes.VK_RIGHT:
if(node.isContainer){
if(!node.isOpen){
node.open();
}else{
if(node.hasChildren()){
next=node.getChildBindingByLocalName("treenode");
}
}
}
break;
case KeyEventCodes.VK_LEFT:
if(node.isContainer&&node.isOpen){
node.close();
}
break;
}
if(next!=null){
this.focusSingleTreeNodeBinding(next);
}
}
};
TreeBinding.prototype.handleEvent=function(e){
TreeBinding.superclass.handleEvent.call(this,e);
var _bc8=DOMEvents.getTarget(e);
switch(e.type){
case DOMEvents.MOUSEMOVE:
try{
this._updatePositionIndicator(e);
}
catch(exception){
this.removeEventListener(DOMEvents.MOUSEMOVE);
throw (exception);
}
break;
case DOMEvents.BEFOREUPDATE:
var _bc9=new TreeCrawler();
var list=new List();
_bc9.mode=TreeCrawler.MODE_GETOPEN;
_bc9.crawl(this.bindingElement,list);
var map=new Map();
if(list.hasEntries()){
while(list.hasNext()){
var _bcc=list.getNext();
map.set(_bcc.getHandle(),true);
}
this._openTreeNodesBackupMap=map;
}
break;
case DOMEvents.AFTERUPDATE:
this._openTreeNodesBackupMap=null;
break;
}
};
TreeBinding.prototype._updatePositionIndicator=function(e){
var y=e.clientY-this._yposition;
var pos=this._acceptingPosition;
var dim=this._acceptingDimension;
var _bd1=this._positionIndicatorBinding;
if(this._acceptingTreeNodeBinding){
var miny=pos.y;
var maxy=pos.y+dim.h;
if(y>=miny&&y<=maxy){
y=y<miny+TreeNodeBinding.HEIGHT?miny+TreeNodeBinding.HEIGHT:y;
y=y-TreeNodeBinding.HEIGHT;
y=TreeBinding.grid(y);
while(!this._acceptingPositions[y]){
y+=TreeNodeBinding.HEIGHT;
}
if(y!=_bd1.getPosition().y){
_bd1.setPosition(new Point(this._acceptingPosition.x+TreeNodeBinding.INDENT,y));
}
if(!_bd1.isVisible){
_bd1.show();
}
}else{
if(_bd1.isVisible){
_bd1.hide();
}
}
}else{
if(_bd1.isVisible){
_bd1.hide();
}
}
};
TreeBinding.prototype.enablePositionIndicator=function(_bd4){
this._acceptingTreeNodeBinding=_bd4;
this._acceptingPosition=_bd4.boxObject.getLocalPosition();
this._acceptingDimension=_bd4.boxObject.getDimension();
this._acceptingPositions=this._getChildPositions(_bd4);
};
TreeBinding.prototype.disablePositionIndicator=function(){
this._acceptingTreeNodeBinding=null;
this._acceptingPosition=null;
this._acceptingDimension=null;
};
TreeBinding.prototype._getChildPositions=function(_bd5){
var map={};
var _bd7=_bd5.getChildBindingsByLocalName("treenode");
var _bd8,pos,dim,y;
y=TreeBinding.grid(_bd5.boxObject.getLocalPosition().y);
map[y]=true;
while(_bd7.hasNext()){
_bd8=_bd7.getNext();
pos=_bd8.boxObject.getLocalPosition();
dim=_bd8.boxObject.getDimension();
y=TreeBinding.grid(pos.y+dim.h)-TreeNodeBinding.HEIGHT;
map[y]=true;
}
return map;
};
TreeBinding.prototype.getDropIndex=function(){
var y=this._positionIndicatorBinding.getPosition().y;
var drop=0;
for(var _bde in this._acceptingPositions){
if(_bde==y){
break;
}else{
drop++;
}
}
return Number(drop);
};
TreeBinding.prototype.getRootTreeNodeBindings=function(){
return this._treeBodyBinding.getChildBindingsByLocalName("treenode");
};
TreeBinding.newInstance=function(_bdf){
var _be0=DOMUtil.createElementNS(Constants.NS_UI,"ui:tree",_bdf);
var _be1=UserInterface.registerBinding(_be0,TreeBinding);
_be1.treeBodyBinding=TreeBodyBinding.newInstance(_bdf);
return _be1;
};
TreeBodyBinding.prototype=new FlexBoxBinding;
TreeBodyBinding.prototype.constructor=TreeBodyBinding;
TreeBodyBinding.superclass=FlexBoxBinding.prototype;
TreeBodyBinding.PADDING_TOP=8;
function TreeBodyBinding(){
this.logger=SystemLogger.getLogger("TreeBodyBinding");
this.containingTreeBinding=null;
return this;
}
TreeBodyBinding.prototype.toString=function(){
return "[TreeBodyBinding]";
};
TreeBodyBinding.prototype.onBindingAttach=function(){
TreeBodyBinding.superclass.onBindingAttach.call(this);
this.addActionListener(TreeNodeBinding.ACTION_FOCUSED);
this.containingTreeBinding=UserInterface.getBinding(this.bindingElement.parentNode);
};
TreeBodyBinding.prototype.accept=function(_be2){
if(_be2 instanceof TreeNodeBinding){
this.logger.debug(_be2);
}
};
TreeBodyBinding.prototype.handleAction=function(_be3){
TreeBodyBinding.superclass.handleAction.call(this,_be3);
switch(_be3.type){
case TreeNodeBinding.ACTION_FOCUSED:
this._scrollIntoView(_be3.target);
_be3.consume();
break;
}
};
TreeBodyBinding.prototype._scrollIntoView=function(_be4){
var a=this.boxObject.getDimension().h;
var y=_be4.boxObject.getLocalPosition().y;
var h=_be4.boxObject.getDimension().h;
var t=this.bindingElement.scrollTop;
var l=this.bindingElement.scrollLeft;
var _bea=_be4.labelBinding.bindingElement;
if(y-t<0){
_bea.scrollIntoView(true);
}else{
if(y-t+h>a){
_bea.scrollIntoView(false);
}
}
try{
top.document.documentElement.scrollTop=0;
top.document.body.scrollTop=0;
top.app.document.documentElement.scrollTop=0;
top.app.document.body.scrollTop=0;
}
catch(exception){
}
if(Client.isExplorer){
this.bindingElement.scrollLeft=l;
}
};
TreeBodyBinding.newInstance=function(_beb){
var _bec=DOMUtil.createElementNS(Constants.NS_UI,"ui:treebody",_beb);
return UserInterface.registerBinding(_bec,TreeBodyBinding);
};
TreeNodeBinding.prototype=new Binding;
TreeNodeBinding.prototype.constructor=TreeNodeBinding;
TreeNodeBinding.superclass=Binding.prototype;
TreeNodeBinding.DEFAULT_FOLDER_CLOSED="${icon:folder}";
TreeNodeBinding.DEFAULT_FOLDER_OPEN="${icon:folder_active}";
TreeNodeBinding.DEFAULT_FOLDER_DISABLED="${icon:default}";
TreeNodeBinding.DEFAULT_ITEM="${root}/images/icons/harmony/composite/default_16.png";
TreeNodeBinding.DEFAULT_ITEM_DISABLED="${icon:default}";
TreeNodeBinding.ACTION_OPEN="treenodeopen";
TreeNodeBinding.ACTION_CLOSE="treenodeclose";
TreeNodeBinding.ACTION_ONFOCUS="treenodeonfocus";
TreeNodeBinding.ACTION_ONMULTIFOCUS="treenodeonmultifocus";
TreeNodeBinding.ACTION_FOCUSED="treenodefocused";
TreeNodeBinding.ACTION_BLUR="treenodeblur";
TreeNodeBinding.ACTION_COMMAND="treenodecommand";
TreeNodeBinding.ACTION_DISPOSE="treenodedisposed";
TreeNodeBinding.CLASSNAME_DRAGGED="dragged";
TreeNodeBinding.HEIGHT=19;
TreeNodeBinding.INDENT=16+18;
function TreeNodeBinding(){
this.logger=SystemLogger.getLogger("TreeNodeBinding");
this.hasBeenOpened=false;
this.isDisabled=false;
this.isFocused=false;
this.isOpen=false;
this.isContainer=false;
this.imageProfile=null;
this.image=null;
this.imageHover=null;
this.imageActive=null;
this.imageDisabled=null;
this.containingTreeBinding=null;
return this;
}
TreeNodeBinding.prototype.toString=function(){
return "[TreeNodeBinding]";
};
TreeNodeBinding.prototype.serialize=function(){
var _bed=TreeNodeBinding.superclass.serialize.call(this);
if(_bed){
_bed.label=this.getLabel();
_bed.image=this.getImage();
var _bee=this.getHandle();
if(_bee&&_bee!=this.key){
_bed.handle=_bee;
}
if(this.isOpen){
_bed.open=true;
}
if(this.isDisabled){
_bed.disabled=true;
}
if(this.dragType){
_bed.dragtype=this.dragType;
}
if(this.dragAccept){
_bed.dragaccept=this.dragAccept;
}
}
return _bed;
};
TreeNodeBinding.prototype.onBindingRegister=function(){
TreeNodeBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["label"]=this.setLabel;
this.propertyMethodMap["image"]=this.setImage;
this.propertyMethodMap["tooltip"]=this.setToolTip;
};
TreeNodeBinding.prototype.onBindingAttach=function(){
TreeBinding.superclass.onBindingAttach.call(this);
this.isOpen=this.isOpen?true:this.getProperty("open");
if(!this.isContainer){
this.isContainer=this.hasChildren();
}
this.buildDOMContent();
this.assignDOMEvents();
if(this.isDisabled){
this.labelBinding.attachClassName(LabelBinding.CLASSNAME_GRAYTEXT);
}
this.addActionListener(TreeNodeBinding.ACTION_FOCUSED);
this.addEventListener(UpdateManager.EVENT_AFTERUPDATE);
this._registerWithAncestorTreeBinding();
};
TreeNodeBinding.prototype.onBindingDispose=function(){
if(this.isAttached){
if(this.dragger!=null){
this.labelBinding.removeEventListener(DOMEvents.MOUSEDOWN,this.dragger);
this.labelBinding.removeEventListener(DOMEvents.MOUSEMOVE,this.dragger);
this.labelBinding.removeEventListener(DOMEvents.MOUSEUP,this.dragger);
this.disableDragging();
this.dragger.dispose();
}
this.dispatchAction(TreeNodeBinding.ACTION_DISPOSE);
this.containingTreeBinding.unRegisterTreeNodeBinding(this);
this.labelBinding.dispose();
}
TreeNodeBinding.superclass.onBindingDispose.call(this);
};
TreeNodeBinding.prototype._registerWithAncestorTreeBinding=function(){
var node=this.bindingElement;
while((node=node.parentNode)!=null&&!this.containingTreeBinding){
var _bf0=UserInterface.getBinding(node);
if(_bf0&&_bf0.containingTreeBinding){
this.containingTreeBinding=_bf0.containingTreeBinding;
}
}
if(this.containingTreeBinding){
this.containingTreeBinding.registerTreeNodeBinding(this);
}else{
alert(this.bindingElement.parentNode.nodeName);
throw "TreeNodeBinding attached outside TreeBodyBinding";
}
};
TreeNodeBinding.prototype.getHandle=function(){
var _bf1=this.key;
var _bf2=this.getProperty("handle");
if(_bf2){
_bf1=_bf2;
}
return _bf1;
};
TreeNodeBinding.prototype.setHandle=function(_bf3){
this.setProperty("handle",_bf3);
};
TreeNodeBinding.prototype.buildDOMContent=function(){
var url=this.getProperty("url");
var _bf5=this.getProperty("label");
var _bf6=this.getProperty("tooltip");
var _bf7=this.getProperty("oncommand");
var _bf8=this.getProperty("onbindingfocus");
var _bf9=this.getProperty("onbindingblur");
var _bfa=this.getProperty("focused");
var _bfb=this.getProperty("callbackid");
if(url){
var link=DOMUtil.createElementNS(Constants.NS_XHTML,"a",this.bindingDocument);
link.href=url;
this.bindingElement.appendChild(link);
this.shadowTree.link=link;
}
this.labelBinding=LabelBinding.newInstance(this.bindingDocument);
if(url){
this.shadowTree.link.appendChild(this.labelBinding.bindingElement);
}else{
this.addFirst(this.labelBinding);
}
this.shadowTree.label=this.labelBinding;
if(this.dragger!=null){
this.removeEventListener(DOMEvents.MOUSEDOWN,this.dragger);
this.removeEventListener(DOMEvents.MOUSEMOVE,this.dragger);
this.removeEventListener(DOMEvents.MOUSEUP,this.dragger);
this.labelBinding.addEventListener(DOMEvents.MOUSEDOWN,this.dragger);
this.labelBinding.addEventListener(DOMEvents.MOUSEMOVE,this.dragger);
this.labelBinding.addEventListener(DOMEvents.MOUSEUP,this.dragger);
}
if(this.isContainer&&!this.dragAccept){
this.acceptor=new BindingAcceptor(this);
}
if(_bf5!=null){
this.setLabel(_bf5);
}
if(_bf6!=null){
this.setToolTip(_bf6);
}
if(!this.imageProfile){
this._computeImageProfile();
}
this.setImage(this.computeImage());
if(this.isContainer){
this.updateClassNames();
}
var _bfd=this.bindingWindow.WindowManager;
if(_bf7!=null){
this.oncommand=function(){
Binding.evaluate(_bf7,this);
};
}
if(_bf8!=null){
this.onfocus=function(){
Binding.evaluate(_bf8,this);
};
}
if(_bf9!=null){
this.onblur=function(){
Binding.evaluate(_bf9,this);
};
}
if(_bfa==true){
this.focus();
}
if(_bfb!=null){
Binding.dotnetify(this,_bfb);
}
};
TreeNodeBinding.prototype.handleAction=function(_bfe){
TreeNodeBinding.superclass.handleAction.call(this,_bfe);
switch(_bfe.type){
case TreeNodeBinding.ACTION_FOCUSED:
if(_bfe.target!=this){
if(this.isContainer&&!this.isOpen){
this.open();
}
}
break;
}
};
TreeNodeBinding.prototype.enableDragging=function(){
};
TreeNodeBinding.prototype.disableDragging=function(){
this.isDraggable=false;
};
TreeNodeBinding.prototype.accept=function(_bff,_c00){
var _c01=true;
if(_bff instanceof TreeNodeBinding){
var _c02=false;
var _c03=this.bindingElement;
var _c04=this.containingTreeBinding.bindingElement;
while(!_c02&&_c03!=_c04){
if(_c03==_bff.getBindingElement()){
_c02=true;
}else{
_c03=_c03.parentNode;
}
}
if(_c02){
Dialog.error("Not Allowed","You cannot move a folder into itself.");
_c01=false;
}else{
this.acceptTreeNodeBinding(_bff,_c00);
}
}else{
_c01=false;
}
return _c01;
};
TreeNodeBinding.prototype.acceptTreeNodeBinding=function(_c05,_c06){
var _c07=_c05.serializeToString();
var _c08=new BindingParser(this.bindingDocument);
var _c09=_c08.parseFromString(_c07).getFirst();
_c06=_c06?_c06:this.containingTreeBinding.getDropIndex();
var _c0a=this.getChildElementsByLocalName("treenode");
this.bindingElement.insertBefore(_c09,_c0a.get(_c06));
this.bindingWindow.DocumentManager.attachBindings(this.bindingElement);
_c05.dispose();
};
TreeNodeBinding.prototype.showAcceptance=function(){
this.containingTreeBinding.enablePositionIndicator(this);
};
TreeNodeBinding.prototype.hideAcceptance=function(){
this.containingTreeBinding.disablePositionIndicator();
};
TreeNodeBinding.prototype._computeImageProfile=function(){
var _c0b=this.getProperty("image");
var _c0c=this.getProperty("image-active");
var _c0d=this.getProperty("image-disabled");
_c0c=_c0c?_c0c:this.isContainer?_c0b?_c0b:TreeNodeBinding.DEFAULT_FOLDER_OPEN:_c0b?_c0b:TreeNodeBinding.DEFAULT_ITEM;
_c0d=_c0d?_c0d:this.isContainer?_c0b?_c0b:TreeNodeBinding.DEFAULT_FOLDER_DISABLED:_c0b?_c0b:TreeNodeBinding.DEFAULT_ITEM_DISABLED;
_c0b=_c0b?_c0b:this.isContainer?TreeNodeBinding.DEFAULT_FOLDER_CLOSED:TreeNodeBinding.DEFAULT_ITEM;
this.imageProfile=new ImageProfile({image:_c0b,imageHover:null,imageActive:_c0c,imageDisabled:_c0d});
};
TreeNodeBinding.prototype.assignDOMEvents=function(){
this.labelBinding.addEventListener(DOMEvents.DOUBLECLICK,this);
this.labelBinding.addEventListener(DOMEvents.MOUSEDOWN,this);
this.labelBinding.addEventListener(DOMEvents.MOUSEOVER,this);
this.labelBinding.addEventListener(DOMEvents.MOUSEOUT,this);
};
TreeNodeBinding.prototype.setImage=function(url){
this.setProperty("image",url);
if(this.isAttached){
this.labelBinding.setImage(url);
}
};
TreeNodeBinding.prototype.setLabel=function(_c0f){
this.setProperty("label",String(_c0f));
if(this.isAttached){
this.labelBinding.setLabel(String(_c0f));
}
};
TreeNodeBinding.prototype.setToolTip=function(_c10){
this.setProperty("tooltip",String(_c10));
if(this.isAttached){
this.labelBinding.setToolTip(String(_c10));
}
};
TreeNodeBinding.prototype.getImage=function(){
return this.getProperty("image");
};
TreeNodeBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
TreeNodeBinding.prototype.getToolTip=function(){
return this.getProperty("tooltip");
};
TreeNodeBinding.prototype.computeImage=function(){
var _c11=this.imageProfile.getDefaultImage();
var _c12=this.imageProfile.getActiveImage();
_c12=_c12?_c12:_c11;
return this.isOpen?_c12:_c11;
};
TreeNodeBinding.prototype.handleEvent=function(e){
TreeNodeBinding.superclass.handleEvent.call(this,e);
var _c14=DOMEvents.getTarget(e);
var _c15=this.labelBinding.bindingElement;
var _c16=this.labelBinding.shadowTree.labelBody;
var _c17=this.labelBinding.shadowTree.labelText;
switch(e.type){
case DOMEvents.MOUSEDOWN:
switch(_c14){
case _c15:
this._onAction(e);
break;
case _c16:
case _c17:
if(!this.isDisabled){
this._onFocus(e);
}
break;
}
break;
case DOMEvents.DOUBLECLICK:
this._onAction(e);
break;
case UpdateManager.EVENT_AFTERUPDATE:
if(_c14.parentNode==this.bindingElement&&_c14.__updateType==Update.TYPE_INSERT){
var _c15=this.labelBinding.bindingElement;
if(DOMUtil.getLocalName(_c14)=="treenode"){
if(_c14==this.bindingElement.firstChild){
this.bindingElement.insertBefore(_c14,_c15.nextSibling);
}
}
break;
}
break;
}
if(BindingDragger.isDragging&&this.isContainer&&!this.isOpen){
switch(e.type){
case DOMEvents.MOUSEOVER:
case DOMEvents.MOUSEOUT:
switch(_c14){
case _c15:
case _c16:
case _c17:
this._folderDragOverTimeout(e);
break;
}
break;
}
}
};
TreeNodeBinding.prototype._folderDragOverTimeout=function(e){
var self=this;
switch(e.type){
case DOMEvents.MOUSEOVER:
this._dragTimeout=this.bindingWindow.setTimeout(function(){
self.open();
},500);
break;
case DOMEvents.MOUSEOUT:
this.bindingWindow.clearTimeout(this._dragTimeout);
break;
}
};
TreeNodeBinding.prototype._onAction=function(e){
var _c1b=true;
if(e.type=="mousedown"){
var _c1c=e.button==(e.target?0:1);
if(!_c1c){
_c1b=false;
}
}
if(_c1b){
if(this.isContainer){
if(!this.isOpen){
this.open();
}else{
this.close();
}
}else{
this.fireCommand();
}
}
};
TreeNodeBinding.prototype.fireCommand=function(){
if(this.oncommand){
this.oncommand();
}
this.dispatchAction(TreeNodeBinding.ACTION_COMMAND);
};
TreeNodeBinding.prototype._onFocus=function(e){
var _c1e=false;
if(e!=null){
_c1e=e.shiftKey;
}
this.dispatchAction(_c1e?TreeNodeBinding.ACTION_ONMULTIFOCUS:TreeNodeBinding.ACTION_ONFOCUS);
if(e!=null){
this.stopPropagation(e);
}
if(this.onfocus!=null){
this.onfocus();
}
if(e!=null){
if(this.hasCallBackID()){
this.callback();
}
}
};
TreeNodeBinding.prototype.callback=function(){
if(this.hasCallBackID()){
var self=this;
setTimeout(function(){
self.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
},0);
}
};
TreeNodeBinding.prototype.invokeManagedFocus=function(){
if(!this.isFocused){
this.isFocused=true;
this.setProperty("focused",true);
this.labelBinding.attachClassName("focused");
this.dispatchAction(TreeNodeBinding.ACTION_FOCUSED);
}
};
TreeNodeBinding.prototype.focus=function(){
this.setProperty("focused",true);
if(this.isAttached){
this._onFocus();
}
};
TreeNodeBinding.prototype.blur=function(){
if(this.isFocused){
this.isFocused=false;
this.deleteProperty("focused");
this.labelBinding.detachClassName("focused");
if(this.onblur){
this.onblur();
}
this.dispatchAction(TreeNodeBinding.ACTION_BLUR);
}
};
TreeNodeBinding.prototype.stopPropagation=function(e){
if(e.type=="mousedown"){
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEDOWN,e);
this.dispatchAction(Binding.ACTION_ACTIVATED);
}
DOMEvents.stopPropagation(e);
};
TreeNodeBinding.prototype.open=function(){
if(this.isContainer&&!this.isOpen){
this.isOpen=true;
this.setProperty("open",true);
this.dispatchAction(TreeNodeBinding.ACTION_OPEN);
this.setImage(this.computeImage());
this.updateClassNames();
this.hasBeenOpened=true;
}
};
TreeNodeBinding.prototype.close=function(){
if(this.isContainer&&this.isOpen){
this.isOpen=false;
this.setProperty("open",false);
this.dispatchAction(TreeNodeBinding.ACTION_CLOSE);
this.setImage(this.computeImage());
this.updateClassNames();
}
};
TreeNodeBinding.prototype.updateClassNames=function(){
if(this.isContainer){
if(!this.hasClassName("container")){
this.attachClassName("container");
}
if(this.isOpen){
this.detachClassName("closed");
this.attachClassName("open");
this.labelBinding.detachClassName("closed");
this.labelBinding.attachClassName("open");
}else{
this.detachClassName("open");
this.attachClassName("closed");
this.labelBinding.detachClassName("open");
this.labelBinding.attachClassName("closed");
}
}else{
if(this.hasClassName("container")){
this.detachClassName("container");
this.labelBinding.detachClassName("closed");
this.labelBinding.detachClassName("open");
}
}
};
TreeNodeBinding.prototype.empty=function(){
var _c21=this.getDescendantBindingsByLocalName("treenode");
_c21.each(function(_c22){
_c22.dispose();
});
};
TreeNodeBinding.prototype.showDrag=function(){
this.attachClassName(TreeNodeBinding.CLASSNAME_DRAGGED);
};
TreeNodeBinding.prototype.hideDrag=function(){
this.detachClassName(TreeNodeBinding.CLASSNAME_DRAGGED);
};
TreeNodeBinding.prototype.hasChildren=function(){
return this.bindingElement.hasChildNodes();
};
TreeNodeBinding.prototype.handleElement=function(_c23){
var _c24=_c23.getAttribute("focused");
if(_c24=="true"){
if(!this.isFocused){
this.focus();
}
}
return false;
};
TreeNodeBinding.newInstance=function(_c25){
var _c26=DOMUtil.createElementNS(Constants.NS_UI,"ui:treenode",_c25);
return UserInterface.registerBinding(_c26,TreeNodeBinding);
};
TreeContentBinding.prototype=new Binding;
TreeContentBinding.prototype.constructor=TreeContentBinding;
TreeContentBinding.superclass=Binding.prototype;
function TreeContentBinding(){
this.logger=SystemLogger.getLogger("TreeContentBinding");
return this;
}
TreeContentBinding.prototype.toString=function(){
return "[TreeContentBinding]";
};
TreeContentBinding.newInstance=function(_c27){
var _c28=DOMUtil.createElementNS(Constants.NS_UI,"ui:treecontent",_c27);
return UserInterface.registerBinding(_c28,TreeContentBinding);
};
TreePositionIndicatorBinding.prototype=new Binding;
TreePositionIndicatorBinding.prototype.constructor=TreePositionIndicatorBinding;
TreePositionIndicatorBinding.superclass=Binding.prototype;
function TreePositionIndicatorBinding(){
this.logger=SystemLogger.getLogger("TreePositionIndicatorBinding");
this._geometry={x:0,y:0};
}
TreePositionIndicatorBinding.prototype.toString=function(){
return "[TreePositionIndicatorBinding]";
};
TreePositionIndicatorBinding.prototype.onBindingAttach=function(){
TreePositionIndicatorBinding.superclass.onBindingAttach.call(this);
this.hide();
};
TreePositionIndicatorBinding.prototype.setPosition=function(_c29){
this.bindingElement.style.left=_c29.x+"px";
this.bindingElement.style.top=_c29.y+"px";
this._geometry.x=_c29.x;
this._geometry.y=_c29.y;
};
TreePositionIndicatorBinding.prototype.getPosition=function(){
return new Point(this._geometry.x,this._geometry.y);
};
TreePositionIndicatorBinding.newInstance=function(_c2a){
var _c2b=DOMUtil.createElementNS(Constants.NS_UI,"ui:treepositionindicator",_c2a);
return UserInterface.registerBinding(_c2b,TreePositionIndicatorBinding);
};
TreeCrawler.prototype=new BindingCrawler;
TreeCrawler.prototype.constructor=TreeCrawler;
TreeCrawler.superclass=BindingCrawler.prototype;
TreeCrawler.ID="treecrawler";
TreeCrawler.MODE_GETOPEN="get open treenodes";
function TreeCrawler(){
this.mode=TreeCrawler.MODE_GETOPEN;
this.id=TreeCrawler.ID;
this._construct();
return this;
}
TreeCrawler.prototype._construct=function(){
TreeCrawler.superclass._construct.call(this);
var self=this;
this.addFilter(function(_c2d){
var _c2e=UserInterface.getBinding(_c2d);
var _c2f=null;
var _c2f=null;
if(!_c2e instanceof TreeNodeBinding){
_c2f=NodeCrawler.SKIP_NODE;
}
return _c2f;
});
this.addFilter(function(_c30,list){
var _c32=UserInterface.getBinding(_c30);
var _c33=null;
switch(self.mode){
case TreeCrawler.MODE_GETOPEN:
if(_c32.isOpen){
list.add(_c32);
}
break;
}
return _c33;
});
};
ShadowBinding.prototype=new MatrixBinding;
ShadowBinding.prototype.constructor=ShadowBinding;
ShadowBinding.superclass=MatrixBinding.prototype;
function ShadowBinding(){
this.logger=SystemLogger.getLogger("ShadowBinding");
this.targetBinding=null;
this.offset=4;
this.expand=14;
this.isVisible=true;
this.crawlerFilters=new List([DocumentCrawler.ID,FlexBoxCrawler.ID,FocusCrawler.ID]);
}
ShadowBinding.prototype.toString=function(){
return "[ShadowBinding]";
};
ShadowBinding.prototype.onBindingRegister=function(){
ShadowBinding.superclass.onBindingRegister.call(this);
this.hide();
};
ShadowBinding.prototype.shadow=function(_c34){
this.targetBinding=_c34;
_c34.addActionListener(Binding.ACTION_POSITIONCHANGED,this);
_c34.addActionListener(Binding.ACTION_DIMENSIONCHANGED,this);
_c34.addActionListener(Binding.ACTION_VISIBILITYCHANGED,this);
_c34.bindingElement.parentNode.appendChild(this.bindingElement);
if(_c34.isVisible){
this.show();
this.setPosition(_c34.getPosition());
this.setDimension(_c34.getDimension());
}else{
this.hide();
}
};
ShadowBinding.prototype.handleAction=function(_c35){
ShadowBinding.superclass.handleAction.call(this,_c35);
var _c36=_c35.target;
if(_c36==this.targetBinding){
switch(_c35.type){
case Binding.ACTION_POSITIONCHANGED:
this.setPosition(this.targetBinding.getPosition());
_c35.consume();
break;
case Binding.ACTION_DIMENSIONCHANGED:
this.setDimension(this.targetBinding.getDimension());
break;
case Binding.ACTION_VISIBILITYCHANGED:
if(_c36.isVisible){
this.show();
this.setPosition(_c36.getPosition());
this.setDimension(_c36.getDimension());
}else{
this.hide();
}
break;
}
}
};
ShadowBinding.prototype.setPosition=function(_c37){
var _c38=this.offset-this.expand;
this.bindingElement.style.left=new String(_c37.x+_c38)+"px";
this.bindingElement.style.top=new String(_c37.y+_c38)+"px";
};
ShadowBinding.prototype.setDimension=function(dim){
this.bindingElement.style.width=new String(dim.w+2*this.expand)+"px";
this.bindingElement.style.height=new String(dim.h+2*this.expand)+"px";
};
ShadowBinding.newInstance=function(_c3a){
var _c3b=DOMUtil.createElementNS(Constants.NS_UI,"ui:shadow",_c3a);
return UserInterface.registerBinding(_c3b,ShadowBinding);
};
DockControlImageProfile.prototype=new ControlImageProfile;
DockControlImageProfile.prototype.constructor=DockControlImageProfile;
DockControlImageProfile.superclass=ControlImageProfile.prototype;
DockControlImageProfile.IMAGE_MINIMIZE=Resolver.resolve("${skin}/docks/control-minimize-${string}.png");
DockControlImageProfile.IMAGE_MAXIMIZE=Resolver.resolve("${skin}/docks/control-maximize-${string}.png");
DockControlImageProfile.IMAGE_RESTORE=Resolver.resolve("${skin}/docks/control-restore-${string}.png");
DockControlImageProfile.IMAGE_CLOSE=null;
function DockControlImageProfile(_c3c){
this.binding=_c3c;
}
DockControlImageProfile.prototype.getHoverImage=function(){
return null;
};
DockControlImageProfile.prototype.getActiveImage=function(){
return null;
};
DockTabsButtonBinding.prototype=new TabsButtonBinding;
DockTabsButtonBinding.prototype.constructor=DockTabsButtonBinding;
DockTabsButtonBinding.superclass=TabsButtonBinding.prototype;
DockTabsButtonBinding.RESERVED_SPACE=50;
DockTabsButtonBinding.NODENAME_TABBOX="dock";
function DockTabsButtonBinding(){
this.logger=SystemLogger.getLogger("DockTabsButtonBinding");
}
DockTabsButtonBinding.prototype.toString=function(){
return "[DockTabsButtonBinding]";
};
DockTabsButtonBinding.newInstance=function(_c3d){
var _c3e=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbarbutton",_c3d);
_c3e.setAttribute("type","checkbox");
_c3e.setAttribute("popup","app.bindingMap.tabsbuttonpopup");
_c3e.className="tabbutton";
return UserInterface.registerBinding(_c3e,DockTabsButtonBinding);
};
DockBinding.prototype=new TabBoxBinding;
DockBinding.prototype.constructor=DockBinding;
DockBinding.superclass=TabBoxBinding.prototype;
DockBinding.START="start";
DockBinding.EXPLORER="explorer";
DockBinding.MAIN="main";
DockBinding.BOTTOMLEFT="bottomleft";
DockBinding.BOTTOMRIGHT="bottomright";
DockBinding.RIGHTTOP="righttop";
DockBinding.RIGHTBOTTOM="rightbottom";
DockBinding.ABSBOTTOMLEFT="absbottomleft";
DockBinding.ABSBOTTOMRIGHT="absbottomright";
DockBinding.ABSRIGHTTOP="absrighttop";
DockBinding.ABSRIGHTBOTTOM="absrightbottom";
DockBinding.TYPE_START="start";
DockBinding.TYPE_EXPLORER="explorer";
DockBinding.TYPE_EDITORS="editors";
DockBinding.TYPE_TOOLS="tools";
DockBinding.ACTION_OPENED="dockopened";
DockBinding.ACTION_EMPTIED="dockemptied";
DockBinding.CLASSNAME_ACTIVE="active";
function DockBinding(){
this.logger=SystemLogger.getLogger("DockBinding");
this.isActive=false;
this.isActivatable=true;
this.type=null;
this.reference=null;
this.isCollapsed=false;
this.isEmpty=true;
this._containingSplitPanelBinding=null;
this._viewBindingList=null;
this.perspectiveNode=null;
this._nodename_tab="docktab";
this._nodename_tabs="docktabs";
this._nodename_tabpanel="dockpanel";
this._nodename_tabpanels="dockpanels";
this._impl_tab=DockTabBinding;
this._impl_tabs=DockTabsBinding;
this._impl_tabpanel=DockPanelBinding;
this._impl_tabpanels=DockPanelsBinding;
}
DockBinding.prototype.toString=function(){
return "[DockBinding]";
};
DockBinding.prototype.serialize=function(){
var _c3f=DockBinding.superclass.serialize.call(this);
if(_c3f){
_c3f.active=this.isActive?true:null;
_c3f.collapsed=this.isCollapsed?true:null;
}
return _c3f;
};
DockBinding.prototype.onBindingRegister=function(){
DockBinding.superclass.onBindingRegister.call(this);
this.addActionListener(Binding.ACTION_ACTIVATED,this);
this.addActionListener(TabBoxBinding.ACTION_UPDATED,this);
this.addActionListener(ViewBinding.ACTION_LOADED);
this.addActionListener(ViewBinding.ACTION_CLOSED);
this.subscribe(BroadcastMessages.SYSTEMTREENODEBINDING_FOCUS);
this._viewBindingList=new List();
this.reference=this.getProperty("reference");
};
DockBinding.prototype.onBindingAttach=function(){
DockBinding.superclass.onBindingAttach.call(this);
this._containingSplitPanelBinding=this.getAncestorBindingByLocalName("splitpanel");
if(this.getTabBindings().hasEntries()){
this.isEmpty=false;
this.isActivatable=true;
}else{
this.dispatchAction(DockBinding.ACTION_EMPTIED);
}
};
DockBinding.prototype.onBindingInitialize=function(){
if(this.type==DockBinding.TYPE_EDITORS){
this.showControls(false);
}
DockBinding.superclass.onBindingInitialize.call(this);
};
DockBinding.prototype.buildDOMContent=function(){
var _c40=UserInterface.getBinding(this.bindingElement.parentNode);
var _c41=MatrixBinding.newInstance(this.bindingDocument);
_c41.attachClassName("dockliner");
this.shadowTree.dockLiner=_c41;
_c40.add(_c41);
_c41.attach();
_c41.manifest();
var type=this.getProperty("type");
this.type=type?type:DockBinding.TYPE_TOOLS;
this.attachClassName(this.type);
if(this.getProperty("active")==true){
this.activate();
}
};
DockBinding.prototype.interceptDisplayChange=function(_c43){
var _c44=this.getSelectedTabPanelBinding();
if(_c44){
_c44.isVisible=_c43;
_c44.dispatchAction(Binding.ACTION_VISIBILITYCHANGED);
}
};
DockBinding.prototype.prepareNewView=function(_c45){
var _c46=this._getBindingForDefinition(_c45);
var _c47=DockTabBinding.newInstance(this.bindingDocument);
_c47.setHandle(_c45.handle);
_c47.setLabel(this.type==DockBinding.TYPE_EDITORS?null:_c45.label);
_c47.setImage(_c45.image);
_c47.setToolTip(_c45.toolTip);
_c47.setEntityToken(_c45.entityToken);
_c47.setAssociatedView(_c46);
this.appendTabByBindings(_c47,null);
this._setupPageBindingListeners(_c47);
var _c48=this.getTabPanelBinding(_c47);
_c46.snapToBinding(_c48);
var _c49=this.bindingWindow.bindingMap.views;
_c49.add(_c46);
if(!this.isActive){
this.activate();
}
_c46.attach();
};
DockBinding.prototype.prepareOpenView=function(_c4a,_c4b){
this.logger.debug("DockBinding.prototype.prepareOpenView: _setupDirtyStuff required?");
_c4b.setLabel(_c4a.label);
_c4b.setImage(_c4a.image);
_c4b.setToolTip(_c4a.toolTip);
this._setupPageBindingListeners(_c4b);
var _c4c=this.getTabPanelBinding(_c4b);
var _c4d=this._getBindingForDefinition(_c4a);
_c4b.setAssociatedView(_c4d);
_c4d.snapToBinding(_c4c);
UserInterface.getBinding(this.bindingDocument.body).add(_c4d);
_c4d.attach();
};
DockBinding.prototype._getBindingForDefinition=function(_c4e){
var _c4f=this.bindingWindow.bindingMap.views;
var view=ViewBinding.newInstance(_c4f.bindingDocument);
view.setDefinition(_c4e);
return view;
};
DockBinding.prototype._setupPageBindingListeners=function(_c51){
var _c52=this.getTabPanelBinding(_c51);
var self=this;
var _c54={handleAction:function(_c55){
var _c56=_c55.target;
switch(_c55.type){
case PageBinding.ACTION_ATTACHED:
TabBoxBinding.currentActiveInstance=self;
break;
case PageBinding.ACTION_INITIALIZED:
_c56.reflex(true);
var view=_c51.getAssociatedView();
if(_c56.bindingWindow==view.getContentWindow()){
_c51.updateDisplay(_c56);
EventBroadcaster.broadcast(BroadcastMessages.VIEW_COMPLETED,view.getHandle());
if(StatusBar.state==StatusBar.BUSY){
StatusBar.clear();
}
}
_c51.onPageInitialize(_c56);
_c55.consume();
break;
case DockTabBinding.ACTION_UPDATE_VISUAL:
_c51.updateDisplay(_c56);
_c55.consume();
break;
case DockTabBinding.ACTION_UPDATE_TOKEN:
_c51.updateEntityToken(_c56);
_c55.consume();
break;
case EditorPageBinding.ACTION_DIRTY:
_c51.setDirty(true);
break;
case EditorPageBinding.ACTION_SAVE:
_c51.onSaveStart();
break;
case ViewBinding.ACTION_ONCLOSE:
self.closeTab(_c51);
_c55.consume();
break;
case ViewBinding.ACTION_ONCLOSE_FORCE:
self.closeTab(_c51,true);
_c55.consume();
break;
case DockPanelBinding.ACTION_FORCE_SELECT:
self.select(_c51);
break;
case Binding.ACTION_FORCE_REFLEX:
_c52.reflex(true);
_c55.consume();
break;
case DockTabBinding.ACTION_FORCE_CLEAN:
case EditorPageBinding.ACTION_CLEAN:
if(_c51.isDirty){
_c51.setDirty(false);
}
break;
case WindowBinding.ACTION_ONLOAD:
alert("HWEJ");
break;
}
}};
new List([DockTabBinding.ACTION_UPDATE_VISUAL,DockTabBinding.ACTION_UPDATE_TOKEN,PageBinding.ACTION_ATTACHED,PageBinding.ACTION_INITIALIZED,EditorPageBinding.ACTION_DIRTY,EditorPageBinding.ACTION_CLEAN,EditorPageBinding.ACTION_SAVE,ViewBinding.ACTION_ONCLOSE,ViewBinding.ACTION_ONCLOSE_FORCE,DockPanelBinding.ACTION_FORCE_SELECT,Binding.ACTION_FORCE_REFLEX,DockTabBinding.ACTION_FORCE_CLEAN,WindowBinding.ACTION_ONLOAD]).each(function(_c58){
_c52.addActionListener(_c58,_c54);
});
};
DockBinding.prototype.summonTabPanelBinding=function(){
return DockPanelBinding.newInstance(this.bindingDocument);
};
DockBinding.prototype.handleAction=function(_c59){
DockBinding.superclass.handleAction.call(this,_c59);
var _c5a=_c59.target;
switch(_c59.type){
case Binding.ACTION_ACTIVATED:
if(!this.isActive){
this.activate();
}
_c59.consume();
break;
case TabBoxBinding.ACTION_UPDATED:
if(_c5a instanceof DockBinding){
if(_c5a.updateType==TabBoxBinding.UPDATE_DETACH){
if(!this.getTabElements().hasEntries()){
this.isEmpty=true;
this.isActivatable=false;
if(this.isActive==true){
this.deActivate();
}
this.dispatchAction(DockBinding.ACTION_EMPTIED);
}
}
}
break;
case ViewBinding.ACTION_LOADED:
this._viewBindingList.add(_c5a);
if(this.isActive){
_c5a.onActivate();
}
break;
case ViewBinding.ACTION_CLOSED:
this._viewBindingList.del(_c5a);
break;
}
};
DockBinding.prototype.handleBroadcast=function(_c5b,arg){
DockBinding.superclass.handleBroadcast.call(this,_c5b,arg);
switch(_c5b){
case BroadcastMessages.SYSTEMTREENODEBINDING_FOCUS:
var _c5d=arg;
if(_c5d.perspectiveNode==this.perspectiveNode){
this._selectTabByEntityToken(_c5d.node.getEntityToken());
}
break;
}
};
DockBinding.prototype._selectTabByEntityToken=function(_c5e){
var tabs=this.getTabBindings();
var _c60=false;
while(tabs.hasNext()&&!_c60){
var tab=tabs.getNext();
var _c62=tab.getEntityToken();
if(_c62!=null&&_c62==_c5e){
if(!tab.isSelected){
this.select(tab,true);
_c60=true;
}
}
}
};
DockBinding.prototype.collapse=function(_c63){
this._handleCollapse(true,_c63);
};
DockBinding.prototype.unCollapse=function(_c64){
this._handleCollapse(false,_c64);
};
DockBinding.prototype._handleCollapse=function(_c65,_c66){
var _c67=this.getChildBindingByLocalName("dockpanels");
var _c68=this.getAncestorBindingByLocalName("splitbox");
if(_c65){
_c67.hide();
this.bindingElement.style.height="auto";
this.isFlexible=false;
this.isActivatable=false;
this.setProperty("collapsed",true);
if(_c66&&_c68.hasBothPanelsVisible()){
this.setWidth(200);
}
}else{
_c67.show();
this.isFlexible=true;
this.isActivatable=true;
this.deleteProperty("collapsed");
if(_c66){
this.setWidth(false);
}
}
this.interceptDisplayChange(!_c65);
this.isCollapsed=_c65;
};
DockBinding.prototype.activate=function(){
if(!this.isActive){
this.isActive=true;
this.attachClassName(DockBinding.CLASSNAME_ACTIVE);
this.setProperty("active",true);
if(this._containingSplitPanelBinding){
this._containingSplitPanelBinding.isActive=true;
}
this.getTabBindings().each(function(tab){
tab.onActivate();
});
this._viewBindingList.each(function(view){
view.onActivate();
});
Application.activate(this);
}
};
DockBinding.prototype.deActivate=function(){
if(this.isActive==true){
this.isActive=false;
this.detachClassName(DockBinding.CLASSNAME_ACTIVE);
this.deleteProperty("active");
if(this._containingSplitPanelBinding){
this._containingSplitPanelBinding.isActive=false;
}
this.getTabBindings().each(function(tab){
tab.onDeactivate();
});
this._viewBindingList.each(function(view){
view.onDeactivate();
});
Application.deActivate(this);
}
};
DockBinding.prototype.closeTab=function(_c6d,_c6e){
if(_c6d.isDirty&&!_c6e){
var _c6f=Resolver.resolve(_c6d.getLabel());
var self=this;
Dialog.question(StringBundle.getString("ui","WebSite.Application.DialogSaveResource.Title"),StringBundle.getString("ui","WebSite.Application.DialogSaveResource.Text").replace("${resourcename}",_c6f),Dialog.BUTTONS_YES_NO_CANCEL,{handleDialogResponse:function(_c71){
switch(_c71){
case Dialog.RESPONSE_YES:
setTimeout(function(){
self.saveContainedEditor(_c6d);
},0);
break;
case Dialog.RESPONSE_NO:
self.removeTab(_c6d);
break;
}
}});
}else{
this.removeTab(_c6d);
}
};
DockBinding.prototype.closeTabsExcept=function(_c72){
var tabs=this.getTabBindings();
while(tabs.hasNext()){
var tab=tabs.getNext();
if(tab!=_c72){
this.closeTab(tab);
}
}
};
DockBinding.prototype.saveContainedEditor=function(_c75){
var _c76=_c75.getAssociatedView();
_c76.saveContainedEditor();
var self=this;
var _c78={handleBroadcast:function(_c79,arg){
switch(_c79){
case BroadcastMessages.CURRENT_SAVED:
if(arg.handle==_c76.getHandle()){
EventBroadcaster.unsubscribe(BroadcastMessages.CURRENT_SAVED,_c78);
if(arg.isSuccess){
self.removeTab(_c75);
}
}
break;
}
}};
EventBroadcaster.subscribe(BroadcastMessages.CURRENT_SAVED,_c78);
};
DockBinding.prototype.appendTabByBindings=function(_c7b,_c7c){
if(this.isEmpty){
this.isEmpty=false;
this.isActivatable=true;
this.setWidth(false);
this.dispatchAction(DockBinding.ACTION_OPENED);
}
DockBinding.superclass.appendTabByBindings.call(this,_c7b,_c7c);
};
DockBinding.prototype.getHeight=function(){
return this.bindingElement.offsetHeight;
};
DockBinding.prototype.getWidth=function(){
return this.bindingElement.offsetWidth;
};
DockBinding.prototype.setWidth=function(_c7d){
_c7d=_c7d?_c7d+"px":"100%";
this.bindingElement.style.width=_c7d;
};
DockBinding.prototype.show=function(){
if(this.isVisible){
DockBinding.superclass.show.call(this);
this.isFlexible=true;
this.shadowTree.dockLiner.style.display="block";
}
};
DockBinding.prototype.hide=function(){
if(!this.isVisible){
DockBinding.superclass.hide.call(this);
this.shadowTree.dockLiner.style.display="none";
this.isFlexible=false;
if(this.isActive){
this.deActivate();
}
}
};
DockBinding.prototype.showControls=function(_c7e){
var tabs=this.getChildBindingByLocalName(this._nodename_tabs);
if(_c7e){
tabs.controlGroupBinding.show();
}else{
tabs.controlGroupBinding.hide();
}
};
DockTabsBinding.prototype=new TabsBinding;
DockTabsBinding.prototype.constructor=DockTabsBinding;
DockTabsBinding.superclass=TabsBinding.prototype;
DockTabsBinding.NODENAME_TABBOX="dock";
DockTabsBinding.TABBUTTON_IMPLEMENTATION=DockTabsButtonBinding;
function DockTabsBinding(){
this.logger=SystemLogger.getLogger("DockTabsBinding");
}
DockTabsBinding.prototype.toString=function(){
return "[DockTabsBinding]";
};
DockTabsBinding.prototype.buildDOMContent=function(){
DockTabsBinding.superclass.buildDOMContent.call(this);
if(this.containingTabBoxBinding.type!=DockBinding.TYPE_EXPLORER){
this.controlGroupBinding=this.add(ControlGroupBinding.newInstance(this.bindingDocument));
this.controlGroupBinding.attachClassName("docktabscontrolgroup");
this.controlGroupBinding.add(this.getControlBinding(ControlBinding.TYPE_MAXIMIZE));
this.controlGroupBinding.attachRecursive();
}
};
DockTabsBinding.prototype.getControlBinding=function(type){
var _c81=DockControlBinding.newInstance(this.bindingDocument);
_c81.setControlType(type);
return _c81;
};
DockTabsBinding.prototype.flex=function(){
if(Client.isExplorer&&this.containingTabBoxBinding!=null){
var self=this;
function fix(){
var _c83=self.containingTabBoxBinding.getWidth();
if(!isNaN(_c83)){
_c83=_c83>0?_c83-1:0;
self.bindingElement.style.width=new String(_c83)+"px";
}
}
setTimeout(fix,250);
fix();
}
DockTabsBinding.superclass.flex.call(this);
};
DockTabsBinding.prototype.handleCrawler=function(_c84){
DockTabsBinding.superclass.handleCrawler.call(this,_c84);
switch(_c84.id){
case FlexBoxCrawler.ID:
this._explorerFlexHack();
break;
}
};
DockTabsBinding.prototype._explorerFlexHack=function(){
if(Client.isExplorer&&this.containingTabBoxBinding!=null){
var self=this;
function fix(){
var _c86=self.containingTabBoxBinding.getWidth();
if(!isNaN(_c86)){
_c86=_c86>0?_c86-1:0;
self.bindingElement.style.width=new String(_c86)+"px";
}
}
setTimeout(fix,250);
fix();
}
};
DockTabsBinding.newInstance=function(_c87){
var _c88=DOMUtil.createElementNS(Constants.NS_UI,"ui:docktabs",_c87);
return UserInterface.registerBinding(_c88,DockTabsBinding);
};
DockTabBinding.prototype=new TabBinding;
DockTabBinding.prototype.constructor=DockTabBinding;
DockTabBinding.superclass=TabBinding.prototype;
DockTabBinding.ACTION_FORCE_CLEAN="docktab force clean";
DockTabBinding.ACTION_UPDATE_VISUAL="docktab update visual";
DockTabBinding.ACTION_UPDATE_TOKEN="docktab update token";
DockTabBinding.NODENAME_TABBOX="dock";
DockTabBinding.LABEL_TABLOADING="${string:Website.App.LabelLoading}";
DockTabBinding.LABEL_TABDEFAULT="${string:Website.App.LabelLoaded}";
DockTabBinding.LABEL_TABSAVED="${string:Website.App.LabelSaved}";
DockTabBinding.IMG_TABLOADING="${icon:loading}";
DockTabBinding.IMG_TABDEFAULT="${icon:default}";
function DockTabBinding(){
this.logger=SystemLogger.getLogger("DockTabBinding");
this.perspectiveNode=null;
this._controlGroupBinding=null;
this._viewBinding=null;
this.isDirty=false;
this.isInitiallyHidden=true;
this._entityToken=null;
this._canUpdateTree=true;
return this;
}
DockTabBinding.prototype.toString=function(){
return "[DockTabBinding]";
};
DockTabBinding.prototype.onBindingAttach=function(){
DockTabBinding.superclass.onBindingAttach.call(this);
this.subscribe(BroadcastMessages.BIND_TOKEN_TO_VIEW);
this.perspectiveNode=this.containingTabBoxBinding.perspectiveNode;
this.addActionListener(ControlBinding.ACTION_COMMAND,this);
if(this.containingTabBoxBinding.type!=DockBinding.EXPLORER){
this.setContextMenu(top.app.bindingMap.docktabpopup);
}
};
DockTabBinding.prototype.setAssociatedView=function(_c89){
this._viewBinding=_c89;
};
DockTabBinding.prototype.getAssociatedView=function(){
return this._viewBinding;
};
DockTabBinding.prototype.serialize=function(){
var _c8a=DockTabBinding.superclass.serialize.call(this);
if(_c8a){
_c8a.label=null;
_c8a.image=null;
_c8a.handle=this.getHandle();
}
return _c8a;
};
DockTabBinding.prototype.setHandle=function(_c8b){
this.setProperty("handle",_c8b);
};
DockTabBinding.prototype.getHandle=function(){
return this.getProperty("handle");
};
DockTabBinding.prototype.setEntityToken=function(_c8c){
if(this._entityToken==null){
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_LOCKTOEDITOR);
}
this._entityToken=_c8c;
if(this.isAttached){
if(this.isSelected){
this._updateTree(true);
}
}
};
DockTabBinding.prototype.getEntityToken=function(){
return this._entityToken;
};
DockTabBinding.prototype.buildDOMContent=function(){
DockTabBinding.superclass.buildDOMContent.call(this);
this._controlGroupBinding=this.labelBinding.add(ControlGroupBinding.newInstance(this.bindingDocument));
var _c8d=DialogControlBinding.newInstance(this.bindingDocument);
_c8d.setControlType(ControlBinding.TYPE_CLOSE);
this._controlGroupBinding.add(_c8d);
this._controlGroupBinding.attachRecursive();
};
DockTabBinding.prototype.setDirty=function(_c8e){
if(this.containingTabBoxBinding.type==DockBinding.TYPE_EDITORS){
if(this.isDirty!=_c8e){
this.isDirty=_c8e;
if(Binding.exists(this.labelBinding)){
var _c8f=this.labelBinding.getLabel();
if(_c8f!=null){
this.labelBinding.setLabel(_c8e?"*"+_c8f:_c8f.slice(1,_c8f.length));
}else{
this.labelBinding.setLabel(_c8e?"*":"");
}
}
}
var _c90=top.app.bindingMap.broadcasterCurrentTabDirty;
if(this.isDirty==true){
this.subscribe(BroadcastMessages.SAVE_CURRENT);
EventBroadcaster.broadcast(BroadcastMessages.DOCKTAB_DIRTY,this);
_c90.enable();
}else{
this.unsubscribe(BroadcastMessages.SAVE_CURRENT);
EventBroadcaster.broadcast(BroadcastMessages.DOCKTAB_CLEAN,this);
_c90.disable();
}
}else{
Dialog.warning("Dirty denied","Only editor docks should invoke the dirty state!");
}
};
DockTabBinding.prototype.updateDisplay=function(_c91){
this.setLabel(_c91.getLabel());
this.setImage(_c91.getImage());
this.setToolTip(_c91.getToolTip());
};
DockTabBinding.prototype.updateEntityToken=function(_c92){
this.setEntityToken(_c92.getEntityToken());
};
DockTabBinding.prototype.handleAction=function(_c93){
DockTabBinding.superclass.handleAction.call(this,_c93);
var _c94=_c93.target;
switch(_c93.type){
case ControlBinding.ACTION_COMMAND:
if(_c94.controlType==ControlBinding.TYPE_CLOSE){
this.close();
}
break;
case MenuItemBinding.ACTION_COMMAND:
if(_c93.listener==this.contextMenuBinding){
this._handleContextMenuItemBinding(_c94);
}
break;
}
};
DockTabBinding.prototype._handleContextMenuItemBinding=function(_c95){
var cmd=_c95.getProperty("cmd");
switch(cmd){
case DockTabPopupBinding.CMD_REFRESH:
if(this.containingTabBoxBinding.type!=DockBinding.TYPE_TOOLS){
this.setLabel(DockTabBinding.LABEL_TABLOADING);
}
this.setImage(DockTabBinding.IMG_TABLOADING);
this._viewBinding.reload(Application.isDeveloperMode);
this.isDirty=false;
break;
case DockTabPopupBinding.CMD_MAKEDIRTY:
this.setDirty(true);
break;
case DockTabPopupBinding.CMD_VIEWSOURCE:
case DockTabPopupBinding.CMD_VIEWGENERATED:
case DockTabPopupBinding.CMD_VIEWSERIALIZED:
this._viewSource(cmd);
break;
case DockTabPopupBinding.CMD_CLOSETAB:
this.close();
break;
case DockTabPopupBinding.CMD_CLOSEOTHERS:
this.containingTabBoxBinding.closeTabsExcept(this);
break;
default:
alert("TODO!");
break;
}
};
DockTabBinding.prototype.setLabel=function(_c97){
if(!_c97){
if(!this.getLabel()){
_c97=DockTabBinding.LABEL_TABLOADING;
}else{
if(this.getLabel()==DockTabBinding.LABEL_TABLOADING){
_c97=DockTabBinding.LABEL_TABDEFAULT;
}
}
}
DockTabBinding.superclass.setLabel.call(this,_c97);
};
DockTabBinding.prototype.setImage=function(_c98){
if(!_c98){
if(!this.getImage()){
_c98=DockTabBinding.IMG_TABLOADING;
}else{
if(this.getImage()==DockTabBinding.IMG_TABLOADING){
_c98=DockTabBinding.IMG_TABDEFAULT;
}
}
}
DockTabBinding.superclass.setImage.call(this,_c98);
};
DockTabBinding.prototype._viewSource=function(cmd){
var def=ViewDefinitions["Composite.Management.SourceCodeViewer"];
def.argument={action:cmd,doc:this._viewBinding.windowBinding.getContentDocument()};
var _c9b=Resolver.resolve(this.getLabel());
switch(cmd){
case DockTabPopupBinding.CMD_VIEWSOURCE:
def.label="Source: "+_c9b;
break;
case DockTabPopupBinding.CMD_VIEWGENERATED:
def.label="Generated: "+_c9b;
break;
case DockTabPopupBinding.CMD_VIEWSERIALIZED:
def.label="Serialized: "+_c9b;
break;
}
StageBinding.presentViewDefinition(def);
};
DockTabBinding.prototype.onActivate=function(){
this._updateBroadcasters();
if(this.isSelected){
this._updateTree();
}
if(this._controlGroupBinding){
this._controlGroupBinding.onActivate();
}
if(this.isSelected){
this._updateGlobalEntityToken();
}
};
DockTabBinding.prototype.onDeactivate=function(){
if(this._controlGroupBinding){
this._controlGroupBinding.onDeactivate();
}
};
DockTabBinding.prototype.onPageInitialize=function(page){
this._updateBroadcasters();
if(this._isEditorDockTab()){
if(!this.hasSubscription(BroadcastMessages.CLOSE_ALL)){
this.subscribe(BroadcastMessages.CLOSE_CURRENT);
this.subscribe(BroadcastMessages.CLOSE_ALL);
}
}
};
DockTabBinding.prototype.saveContainedEditor=function(){
if(this._isEditorDockTab()&&this.isDirty==true){
this._viewBinding.saveContainedEditor();
}
};
DockTabBinding.prototype.show=function(){
DockTabBinding.superclass.show.call(this);
if(this.isVisible&&this.isInitiallyHidden&&Binding.exists(this)){
this.isInitiallyHidden=false;
var _c9d=this.bindingElement;
setTimeout(function(){
_c9d.style.bottom="auto";
},25);
}
};
DockTabBinding.prototype.handleBroadcast=function(_c9e,arg){
DockTabBinding.superclass.handleBroadcast.call(this,_c9e,arg);
var body=this._viewBinding.getContentDocument().body;
var root=UserInterface.getBinding(body);
switch(_c9e){
case BroadcastMessages.SAVE_CURRENT:
if(this.isDirty&&this.isSelected&&root.isActivated){
this.saveContainedEditor();
}
break;
case BroadcastMessages.CURRENT_SAVED:
if(arg.handle==this.getAssociatedView().getHandle()){
this.unsubscribe(BroadcastMessages.CURRENT_SAVED);
if(arg.isSuccess){
this._onSaveSuccess();
}else{
this._onSaveFailure();
}
}
break;
case BroadcastMessages.CLOSE_CURRENT:
if(this._isEditorDockTab()){
if(this.isSelected&&root.isActivated){
this.close();
}
}
break;
case BroadcastMessages.CLOSE_ALL:
if(this._isEditorDockTab()){
this.close();
}
break;
case BroadcastMessages.SYSTEMTREEBINDING_LOCKTOEDITOR:
if(this.isSelected){
if(UserInterface.isBindingVisible(this)){
this._updateTree();
}
}
break;
case BroadcastMessages.BIND_TOKEN_TO_VIEW:
if(arg.handle==this._viewBinding.getDefinition().handle){
this.setEntityToken(arg.entityToken);
if(this.isSelected){
this._updateTree();
}
}
break;
}
};
DockTabBinding.prototype.onSaveStart=function(){
this.subscribe(BroadcastMessages.CURRENT_SAVED);
};
DockTabBinding.prototype._onSaveSuccess=function(){
var page=this._viewBinding.getPageBinding();
if(page!=null&&page instanceof EditorPageBinding){
page.onSaveSuccess();
}
};
DockTabBinding.prototype._onSaveFailure=function(){
};
DockTabBinding.prototype.select=function(_ca3){
DockTabBinding.superclass.select.call(this,_ca3);
this._updateBroadcasters();
if(_ca3!=true){
this._updateTree();
}
this._updateGlobalEntityToken();
};
DockTabBinding.prototype.close=function(){
this.containingTabBoxBinding.closeTab(this);
};
DockTabBinding.prototype._updateBroadcasters=function(){
if(this.isSelected){
var _ca4=top.app.bindingMap.broadcasterCurrentTabDirty;
var _ca5=top.app.bindingMap.broadcasterCurrentIsEditor;
if(this._isEditorDockTab()){
_ca5.enable();
if(this.isDirty){
_ca4.enable();
}else{
_ca4.disable();
}
}else{
_ca5.disable();
_ca4.disable();
}
}
};
DockTabBinding.prototype._updateTree=function(_ca6){
if(this._canUpdateTree||_ca6){
EventBroadcaster.broadcast(BroadcastMessages.DOCKTABBINDING_SELECT,this);
}
};
DockTabBinding.prototype._isEditorDockTab=function(){
var _ca7=false;
if(this._viewBinding!=null){
var win=this._viewBinding.getContentWindow();
if(win!=null&&win.bindingMap!=null){
var _ca9=win.bindingMap.savebutton;
if(_ca9!=null){
_ca7=true;
}
}
}
return _ca7;
};
DockTabBinding.prototype._updateGlobalEntityToken=function(){
StageBinding.entityToken=this._entityToken;
};
DockTabBinding.newInstance=function(_caa){
var _cab=DOMUtil.createElementNS(Constants.NS_UI,"ui:docktab",_caa);
return UserInterface.registerBinding(_cab,DockTabBinding);
};
DockPanelsBinding.prototype=new TabPanelsBinding;
DockPanelsBinding.prototype.constructor=DockPanelsBinding;
DockPanelsBinding.superclass=TabPanelsBinding.prototype;
function DockPanelsBinding(){
this.logger=SystemLogger.getLogger("DockPanelsBinding");
this.isVisible=true;
return this;
}
DockPanelsBinding.prototype.toString=function(){
return "[DockPanelsBinding]";
};
DockPanelsBinding.newInstance=function(_cac){
var _cad=DOMUtil.createElementNS(Constants.NS_UI,"ui:dockpanels",_cac);
return UserInterface.registerBinding(_cad,DockPanelsBinding);
};
DockPanelBinding.prototype=new TabPanelBinding;
DockPanelBinding.prototype.constructor=DockPanelBinding;
DockPanelBinding.superclass=TabPanelBinding.prototype;
DockPanelBinding.ACTION_FORCE_SELECT="dockpanel force select";
function DockPanelBinding(){
this.logger=SystemLogger.getLogger("DockPanelBinding");
this.viewBinding=null;
return this;
}
DockPanelBinding.prototype.toString=function(){
return "[DockPanelBinding]";
};
DockPanelBinding.prototype.onBindingDispose=function(){
DockPanelBinding.superclass.onBindingDispose.call(this);
this.dispatchAction(Binding.ACTION_DISPOSED);
};
DockPanelBinding.prototype.select=function(_cae){
DockPanelBinding.superclass.select.call(this,_cae);
this.dispatchAction(Binding.ACTION_VISIBILITYCHANGED);
};
DockPanelBinding.prototype.unselect=function(){
DockPanelBinding.superclass.unselect.call(this);
this.dispatchAction(Binding.ACTION_VISIBILITYCHANGED);
};
DockPanelBinding.prototype.flex=function(){
this.dispatchAction(Binding.ACTION_DIMENSIONCHANGED);
};
DockPanelBinding.prototype.handleCrawler=function(_caf){
DockPanelBinding.superclass.handleCrawler.call(this,_caf);
if(_caf.response==null){
if(_caf.type==NodeCrawler.TYPE_DESCENDING){
if(this.viewBinding!=null){
if(_caf.id==FocusCrawler.ID){
_caf.nextNode=this.viewBinding.bindingElement;
}
}
}
}
};
DockPanelBinding.newInstance=function(_cb0){
var _cb1=DOMUtil.createElementNS(Constants.NS_UI,"ui:dockpanel",_cb0);
return UserInterface.registerBinding(_cb1,DockPanelBinding);
};
DockControlBinding.prototype=new ControlBinding;
DockControlBinding.prototype.constructor=DockControlBinding;
DockControlBinding.superclass=ControlBinding.prototype;
function DockControlBinding(){
this.logger=SystemLogger.getLogger("DockControlBinding");
}
DockControlBinding.prototype.toString=function(){
return "[DockControlBinding]";
};
DockControlBinding.prototype.onBindingRegister=function(){
DockControlBinding.superclass.onBindingRegister.call(this);
this.setImageProfile(DockControlImageProfile);
};
DockControlBinding.newInstance=function(_cb2){
var _cb3=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbarbutton",_cb2);
return UserInterface.registerBinding(_cb3,DockControlBinding);
};
DockTabPopupBinding.prototype=new PopupBinding;
DockTabPopupBinding.prototype.constructor=DockTabPopupBinding;
DockTabPopupBinding.superclass=PopupBinding.prototype;
DockTabPopupBinding.CMD_RESTORE="restore";
DockTabPopupBinding.CMD_MINIMIZE="minimize";
DockTabPopupBinding.CMD_MAXIMIZE="maximize";
DockTabPopupBinding.CMD_REFRESH="refreshview";
DockTabPopupBinding.CMD_MAKEDIRTY="makedirty";
DockTabPopupBinding.CMD_CLOSETAB="closetab";
DockTabPopupBinding.CMD_CLOSEOTHERS="closeothers";
DockTabPopupBinding.CMD_CLOSEALL="closeall";
DockTabPopupBinding.CMD_VIEWSOURCE="viewsource";
DockTabPopupBinding.CMD_VIEWGENERATED="viewgenerated";
DockTabPopupBinding.CMD_VIEWSERIALIZED="viewserialized";
function DockTabPopupBinding(){
this.logger=SystemLogger.getLogger("DockTabPopupBinding");
}
DockTabPopupBinding.prototype.toString=function(){
return "[DockTabPopupBinding]";
};
DockTabPopupBinding.prototype.onBindingAttach=function(){
DockTabPopupBinding.superclass.onBindingAttach.call(this);
this._indexMenuContent();
};
ViewSetBinding.prototype=new Binding;
ViewSetBinding.prototype.constructor=ViewSetBinding;
ViewSetBinding.superclass=Binding.prototype;
function ViewSetBinding(){
this.logger=SystemLogger.getLogger("ViewSetBinding");
this.crawlerFilters=new List([FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
ViewSetBinding.prototype.toString=function(){
return "[ViewSetBinding]";
};
ViewBinding.prototype=new FlexBoxBinding;
ViewBinding.prototype.constructor=ViewBinding;
ViewBinding.superclass=FlexBoxBinding.prototype;
ViewBinding.ACTION_LOADED="view loaded";
ViewBinding.ACTION_ONCLOSE="view onclose";
ViewBinding.ACTION_ONCLOSE_FORCE="view onclose force";
ViewBinding.ACTION_CLOSED="view closed";
ViewBinding.ACTION_DETACH="view detach";
ViewBinding.HORIZONTAL_ADJUST=1;
ViewBinding.VERTICAL_ADJUST=1;
ViewBinding.TYPE_EXPLORERVIEW="explorerview";
ViewBinding.TYPE_DOCKVIEW="dockview";
ViewBinding.TYPE_DIALOGVIEW="dialogview";
ViewBinding.CLASSNAME_ACTIVE="active";
ViewBinding.TIMEOUT=15;
ViewBinding._instances=new Map();
ViewBinding.getInstance=function(_cb4){
var _cb5=ViewBinding._instances.get(_cb4);
if(!_cb5){
var cry="ViewBinding.getInstance: No such instance: "+_cb4;
SystemLogger.getLogger("ViewBinding [static]").error(cry);
SystemDebug.stack(arguments);
if(Application.isDeveloperMode){
alert(cry);
}
}
return _cb5;
};
function ViewBinding(){
this.logger=SystemLogger.getLogger("ViewBinding");
this._viewDefinition=null;
this.isVisible=false;
this._isViewBindingInitialized=false;
this._snapBinding=null;
this.isFreeFloating=false;
this.windowBinding=null;
this._coverBinding=null;
this._isLoaded=false;
this._isFirstShow=true;
this._type=ViewBinding.TYPE_DOCKVIEW;
this._pageBinding=null;
this._lastknownposition=null;
this._lastknowndimension=null;
this.isActivated=false;
return this;
}
ViewBinding.prototype.toString=function(){
return "[ViewBinding]";
};
ViewBinding.prototype.onBindingRegister=function(){
ViewBinding.superclass.onBindingRegister.call(this);
this.addActionListener(RootBinding.ACTION_PHASE_1);
this.addActionListener(RootBinding.ACTION_PHASE_2);
this.addActionListener(RootBinding.ACTION_PHASE_3);
this.addActionListener(WindowBinding.ACTION_LOADED);
this.addActionListener(WindowBinding.ACTION_ONLOAD);
this.addActionListener(PageBinding.ACTION_ATTACHED);
this.addActionListener(PageBinding.ACTION_INITIALIZED);
this.addActionListener(ViewBinding.ACTION_DETACH);
this.addActionListener(WizardPageBinding.ACTION_NAVIGATE_NEXT);
this.addActionListener(WizardPageBinding.ACTION_NAVIGATE_PREVIOUS);
this.addActionListener(WizardPageBinding.ACTION_FINISH);
this.subscribe(BroadcastMessages.CLOSE_VIEW);
this.subscribe(BroadcastMessages.APPLICATION_SHUTDOWN);
};
ViewBinding.prototype.onBindingAttach=function(){
ViewBinding.superclass.onBindingAttach.call(this);
this.attachClassName(this._type);
if(Client.isExplorer==true){
this._coverBinding=this.add(CoverBinding.newInstance(this.bindingDocument));
this._coverBinding.attach();
}
this.windowBinding.attach();
};
ViewBinding.prototype.updatePositionDimension=function(){
var snap=this._snapBinding;
var _cb8=!System.hasActivePerspectives&&Client.isExplorer;
if(this.isFreeFloating==true&&!_cb8){
if(snap.isVisible==true){
if(snap.isAttached==true){
var _cb9=snap.boxObject.getGlobalPosition();
var _cba=snap.boxObject.getDimension();
if(!Point.isEqual(_cb9,this._lastknownposition)){
this.setPosition(_cb9);
this._lastknownposition=_cb9;
}
if(!Dimension.isEqual(_cba,this._lastknowndimension)){
this.setDimension(_cba);
this._lastknowndimension=_cba;
var _cbb=_cba.h-ViewBinding.VERTICAL_ADJUST;
_cbb=_cbb<0?0:_cbb;
this.windowBinding.getBindingElement().style.height=new String(_cbb)+"px";
this.windowBinding.reflex();
}else{
throw "Could not snap to unattached binding!";
}
}
}
}
};
ViewBinding.prototype.onBindingDispose=function(){
ViewBinding.superclass.onBindingDispose.call(this);
if(this._viewDefinition!=null){
var _cbc=this._viewDefinition.flowHandle;
if(_cbc!=null){
FlowControllerService.CancelFlow(_cbc);
}
}
if(this._viewDefinition!=null){
var _cbd=this._viewDefinition.handle;
EventBroadcaster.broadcast(BroadcastMessages.VIEW_CLOSED,_cbd);
this.logger.fine("ViewBinding closed: \""+_cbd+"\"");
}
this.dispatchAction(ViewBinding.ACTION_CLOSED);
};
ViewBinding.prototype.setType=function(type){
this._type=type;
if(type==ViewBinding.TYPE_DIALOGVIEW){
this.windowBinding.isFlexible=true;
}else{
this.windowBinding.isFlexible=false;
}
};
ViewBinding.prototype.getType=function(){
return this._type;
};
ViewBinding.prototype.getHandle=function(){
var _cbf=null;
if(this._viewDefinition!=null){
_cbf=this._viewDefinition.handle;
}
return _cbf;
};
ViewBinding.prototype.initialize=function(){
if(!this._isViewBindingInitialized){
this._isViewBindingInitialized=true;
this.windowBinding.setURL(this._viewDefinition.url);
EventBroadcaster.broadcast(BroadcastMessages.VIEW_OPENING,this.getHandle());
}else{
throw ("Somehow ViewBinding got initialized twice: "+this.getHandle());
}
};
ViewBinding.prototype.setDefinition=function(_cc0){
this._viewDefinition=_cc0;
if(_cc0.flowHandle!=null){
this.subscribe(BroadcastMessages.CLOSE_VIEWS);
}
};
ViewBinding.prototype.getDefinition=function(){
return this._viewDefinition;
};
ViewBinding.prototype.handleAction=function(_cc1){
ViewBinding.superclass.handleAction.call(this,_cc1);
var _cc2=_cc1.target;
switch(_cc1.type){
case RootBinding.ACTION_PHASE_1:
case RootBinding.ACTION_PHASE_2:
case RootBinding.ACTION_PHASE_3:
if(_cc1.type==RootBinding.ACTION_PHASE_1){
if(this.isActivated&&!_cc2.isActivated){
_cc2.onActivate();
}
}
_cc1.consume();
break;
case Binding.ACTION_DIMENSIONCHANGED:
if(this.isFreeFloating==true){
if(_cc2==this._snapBinding){
if(this.isVisible==true){
this.updatePositionDimension();
_cc1.consume();
}
}
}
break;
case Binding.ACTION_VISIBILITYCHANGED:
if(this.isFreeFloating==true){
if(_cc2==this._snapBinding){
if(_cc2.isVisible==true){
this.show();
}else{
this.hide();
}
}
}
break;
case WindowBinding.ACTION_LOADED:
case WindowBinding.ACTION_ONLOAD:
if(_cc2.getContentWindow().isPostBackDocument){
if(_cc1.type==WindowBinding.ACTION_ONLOAD){
var arg=this._viewDefinition.argument;
if(arg!=null&&arg.list!=null&&arg.url!=null){
_cc2.post(arg.list,arg.url);
arg.list=null;
arg.url=null;
}
}
}else{
if(Client.isExplorer==true){
if(_cc2==this.windowBinding){
var self=this;
DOMEvents.addEventListener(_cc2.getContentWindow(),DOMEvents.UNLOAD,{handleEvent:function(e){
if(Binding.exists(self._coverBinding)==true){
self._coverBinding.show();
}
}});
}
if(_cc1.type==WindowBinding.ACTION_ONLOAD){
if(this._coverBinding){
this._coverBinding.hide();
}
}
}
}
if(_cc1.type==WindowBinding.ACTION_ONLOAD){
var win=_cc2.getContentWindow();
if(win.WindowManager==null){
if(!this._isLoaded){
this._onLoadingCompleted(_cc2);
}
}
}
_cc1.consume();
break;
case PageBinding.ACTION_ATTACHED:
if(!_cc2.label&&this._viewDefinition.label){
_cc2.label=this._viewDefinition.label;
}
if(!_cc2.image&&this._viewDefinition.image){
_cc2.image=this._viewDefinition.image;
}
if(_cc2.bindingWindow==this.getContentWindow()){
this._pageBinding=_cc2;
this._injectPageArgument();
}
case PageBinding.ACTION_INITIALIZED:
if(_cc2.bindingWindow==this.getContentWindow()){
if(Client.isExplorer&&this._coverBinding){
this._coverBinding.hide();
}
if(!this._isLoaded){
this._onLoadingCompleted();
}
}
break;
case Binding.ACTION_DISPOSED:
if(this.isFreeFloating&&_cc2==this._snapBinding){
this.removeActionListener(Binding.ACTION_DISPOSED);
this.dispose();
_cc1.consume();
}
break;
case WizardPageBinding.ACTION_NAVIGATE_NEXT:
case WizardPageBinding.ACTION_NAVIGATE_PREVIOUS:
case WizardPageBinding.ACTION_FINISH:
EventBroadcaster.broadcast(BroadcastMessages.VIEW_OPENING,this.getHandle());
_cc1.consume();
break;
case ViewBinding.ACTION_DETACH:
this.setDefinition(ViewDefinitions["Composite.Management.Null"]);
ViewBinding._instances.set(this._viewDefinition.handle,this);
break;
}
};
ViewBinding.prototype.handleBroadcast=function(_cc7,arg){
ViewBinding.superclass.handleBroadcast.call(this,_cc7,arg);
switch(_cc7){
case BroadcastMessages.CLOSE_VIEW:
if(arg==this._viewDefinition.handle){
this.dispatchAction(ViewBinding.ACTION_ONCLOSE);
}
break;
case BroadcastMessages.CLOSE_VIEWS:
if(this._viewDefinition.flowHandle!=null){
this.dispatchAction(ViewBinding.ACTION_ONCLOSE_FORCE);
}
break;
case BroadcastMessages.APPLICATION_SHUTDOWN:
this.dispose();
break;
}
};
ViewBinding.prototype._onLoadingCompleted=function(){
if(!this._isLoaded){
this._open();
this._isLoaded=true;
}
};
ViewBinding.prototype._open=function(){
ViewBinding._instances.set(this._viewDefinition.handle,this);
this.dispatchAction(ViewBinding.ACTION_LOADED);
EventBroadcaster.broadcast(BroadcastMessages.VIEW_OPENED,this._viewDefinition.handle);
this.show();
this.logger.fine("ViewBinding opened: \""+this._viewDefinition.handle+"\"");
};
ViewBinding.prototype.update=function(){
this.dispatchAction(Binding.ACTION_ACTIVATED);
this._injectPageArgument();
};
ViewBinding.prototype._injectPageArgument=function(){
var page=this._pageBinding;
var def=this._viewDefinition;
if(page!=null){
var _ccb=def.argument;
if(_ccb!=null){
page.setPageArgument(_ccb);
}
var _ccc=def.width;
if(_ccc!=null){
page.width=_ccc;
}
var _ccd=def.height;
if(_ccd!=null){
page.height=_ccd;
}
}
};
ViewBinding.prototype.handleCrawler=function(_cce){
ViewBinding.superclass.handleCrawler.call(this,_cce);
switch(_cce.type){
case NodeCrawler.TYPE_DESCENDING:
if(this.isFreeFloating==true){
if(_cce.id==FocusCrawler.ID){
if(_cce.previousNode!=this._snapBinding.bindingElement){
_cce.response=NodeCrawler.SKIP_NODE;
}
}
}
break;
case NodeCrawler.TYPE_ASCENDING:
if(this.isFreeFloating==true){
_cce.nextNode=this._snapBinding.bindingElement;
}
break;
}
};
ViewBinding.prototype.show=function(){
if(!this.isVisible){
if(this.isFreeFloating==true){
if(this._type==ViewBinding.TYPE_DOCKVIEW&&this.windowBinding!=null){
this.windowBinding.getBindingElement().style.position="static";
}
this.updatePositionDimension();
this.isVisible=true;
}else{
ViewBinding.superclass.show.call(this);
}
}
};
ViewBinding.prototype.hide=function(){
if(this.isVisible==true){
if(this.isFreeFloating==true){
if(this.windowBinding){
this.windowBinding.getBindingElement().style.position="absolute";
}
this.bindingElement.style.top="-10000px";
this.isVisible=false;
}else{
ViewBinding.superclass.hide.call(this);
}
}
};
ViewBinding.prototype.setPosition=function(_ccf){
_ccf.x+=ViewBinding.HORIZONTAL_ADJUST;
this.bindingElement.style.left=_ccf.x+"px";
this.bindingElement.style.top=_ccf.y+"px";
};
ViewBinding.prototype.setDimension=function(_cd0){
_cd0.h-=ViewBinding.VERTICAL_ADJUST;
_cd0.w-=ViewBinding.HORIZONTAL_ADJUST;
_cd0.w-=1;
if(_cd0.h<0){
_cd0.h=0;
}
if(_cd0.w<0){
_cd0.w=0;
}
this.bindingElement.style.width=String(_cd0.w)+"px";
this.bindingElement.style.height=String(_cd0.h)+"px";
};
ViewBinding.prototype.snapToBinding=function(_cd1){
this.isFlexBoxBehavior=false;
_cd1.addActionListener(Binding.ACTION_DIMENSIONCHANGED,this);
_cd1.addActionListener(Binding.ACTION_POSITIONCHANGED,this);
_cd1.addActionListener(Binding.ACTION_VISIBILITYCHANGED,this);
_cd1.addActionListener(Binding.ACTION_DISPOSED,this);
if(this._snapBinding){
this._snapBinding.removeActionListener(Binding.ACTION_DIMENSIONCHANGED,this);
this._snapBinding.removeActionListener(Binding.ACTION_POSITIONCHANGED,this);
this._snapBinding.removeActionListener(Binding.ACTION_VISIBILITYCHANGED,this);
this._snapBinding.removeActionListener(Binding.ACTION_DISPOSED,this);
this._snapBinding.viewBinding=null;
}
this._snapBinding=_cd1;
this._snapBinding.viewBinding=this;
this.isFreeFloating=true;
if(!this._isViewBindingInitialized){
this.initialize();
}
};
ViewBinding.prototype.getMigrationParent=function(){
var _cd2=null;
if(this.isFreeFloating==true){
_cd2=this._snapBinding.getBindingElement();
}else{
_cd2=ViewBinding.superclass.getMigrationParent.call(this);
}
return _cd2;
};
ViewBinding.prototype.getContentWindow=function(){
return this.windowBinding.getContentWindow();
};
ViewBinding.prototype.getContentDocument=function(){
return this.windowBinding.getContentDocument();
};
ViewBinding.prototype.getRootBinding=function(){
return this.windowBinding.getRootBinding();
};
ViewBinding.prototype.getPageBinding=function(){
return this._pageBinding;
};
ViewBinding.prototype.reload=function(_cd3){
this._isLoaded=false;
this.windowBinding.reload(_cd3);
EventBroadcaster.broadcast(BroadcastMessages.VIEW_OPENING,this.getHandle());
};
ViewBinding.prototype.saveContainedEditor=function(){
var _cd4=false;
var page=this._pageBinding;
if(page!=null&&page instanceof EditorPageBinding){
if(page.canSave()){
page.doSave();
_cd4=true;
}
}
if(!_cd4){
this.logger.error("saveContainedEditor failed");
}
};
ViewBinding.prototype.onActivate=function(){
if(!this.isActivated){
this.isActivated=true;
var root=this.getRootBinding();
if(root!=null){
root.onActivate();
}
}
};
ViewBinding.prototype.onDeactivate=function(){
if(this.isActivated==true){
this.isActivated=false;
var root=this.getRootBinding();
if(root!=null){
this.getRootBinding().onDeactivate();
}
}
};
ViewBinding.newInstance=function(_cd8){
var _cd9=DOMUtil.createElementNS(Constants.NS_UI,"ui:view",_cd8);
var _cda=UserInterface.registerBinding(_cd9,ViewBinding);
_cda.windowBinding=_cda.add(WindowBinding.newInstance(_cd8));
_cda.windowBinding.isFlexible=false;
return _cda;
};
PageBinding.prototype=new FocusBinding;
PageBinding.prototype.constructor=Binding;
PageBinding.superclass=FocusBinding.prototype;
PageBinding.ACTION_ATTACHED="page attached";
PageBinding.ACTION_DETACHED="page detached";
PageBinding.ACTION_INITIALIZED="page initialized";
PageBinding.ACTION_DOPOSTBACK="page do postback";
PageBinding.ACTION_VALIDATE="page validate";
PageBinding.ACTION_DOVALIDATEDPOSTBACK="page do validated postback";
PageBinding.ACTION_BLOCK_INIT="page block init";
PageBinding.ACTION_UNBLOCK_INIT="page unblock init";
PageBinding.ACTION_UPDATING="page updating";
PageBinding.ACTION_UPDATED="page updated";
PageBinding.ACTION_GETMESSAGES="page poll messagequeue";
PageBinding.CLASSNAME_SUBPAGE="dialogsubpage";
PageBinding.TIMEOUT=250;
function PageBinding(){
this.logger=SystemLogger.getLogger("PageBinding");
this.label=null;
this.image=null;
this.toolTip=null;
this._isPageBindingInitialized=false;
this.pageArgument=null;
this.isDialogSubPage=false;
this.isFitAsDialogSubPage=true;
this._initBlockers=null;
this._isReadyForInitialize=false;
this.isActivationAware=false;
this.isActivated=false;
this._canPostBack=true;
this._responseResolver=null;
this._isUpdating=false;
}
PageBinding.prototype.toString=function(){
return "[PageBinding]";
};
PageBinding.prototype.onBindingRegister=function(){
PageBinding.superclass.onBindingRegister.call(this);
var root=UserInterface.getBinding(this.bindingDocument.body);
root.addActionListener(RootBinding.ACTION_PHASE_3,this);
this.addActionListener(PageBinding.ACTION_DOPOSTBACK);
this.addActionListener(PageBinding.ACTION_DOVALIDATEDPOSTBACK);
this.addActionListener(BalloonBinding.ACTION_INITIALIZE);
this.addActionListener(PageBinding.ACTION_BLOCK_INIT);
this.addActionListener(PageBinding.ACTION_UNBLOCK_INIT);
this.addActionListener(PageBinding.ACTION_GETMESSAGES);
this.subscribe(BroadcastMessages.MESSAGEQUEUE_REQUESTED);
};
PageBinding.prototype.onBindingAttach=function(){
PageBinding.superclass.onBindingAttach.call(this);
Application.lock(this);
this.parseDOMProperties();
this.dispatchAction(PageBinding.ACTION_ATTACHED);
};
PageBinding.prototype.onBindingDispose=function(){
var root=UserInterface.getBinding(this.bindingDocument.body);
root.removeActionListener(RootBinding.ACTION_PHASE_3,this);
this.dispatchAction(PageBinding.ACTION_DETACHED);
};
PageBinding.prototype.parseDOMProperties=function(){
this.label=this.getProperty("label");
this.image=this.getProperty("image");
this.toolTip=this.getProperty("tooltip");
if(this.getProperty("fitasdialogsubpage")==false){
this.isFitAsDialogSubPage=false;
}
};
PageBinding.prototype.setPageArgument=function(arg){
if(Application.isOperational){
this.dispatchAction(DockPanelBinding.ACTION_FORCE_SELECT);
}
this.pageArgument=arg;
};
PageBinding.prototype.onBeforePageInitialize=function(){
this._isReadyForInitialize=true;
if(this._initBlockers==null){
this.onPageInitialize();
}
};
PageBinding.prototype.onPageInitialize=function(){
if(!this._isPageBindingInitialized){
this._isPageBindingInitialized=true;
if(this._isDotNet()){
this._setupDotNet();
}
if(this.pageArgument&&this.pageArgument instanceof DataBindingMap){
this.bindingWindow.DataManager.populateDataBindings(this.pageArgument);
}
var self=this;
setTimeout(function(){
try{
if(Binding.exists(self)==true){
self.bindingElement.style.visibility="visible";
self.dispatchAction(PageBinding.ACTION_INITIALIZED);
self.onAfterPageInitialize();
}else{
Application.unlock(Application,true);
SystemLogger.getLogger("PageBinding").warn("Premature PageBinding dispose? Please consult your developer.");
}
}
catch(exception){
self.logger.error(exception);
SystemDebug.stack(arguments);
throw exception;
}
},PageBinding.TIMEOUT);
}else{
if(Client.isExplorer==true){
this.logger.error("PageBinding: Somehow initialized twice");
this.logger.error(arguments.caller.callee.toString());
}else{
throw "PageBinding: Somehow initialized twice";
}
}
};
PageBinding.prototype.onAfterPageInitialize=function(){
this.removeActionListener(PageBinding.ACTION_BLOCK_INIT);
this.removeActionListener(PageBinding.ACTION_UNBLOCK_INIT);
Application.unlock(this);
this.isActivationAware=true;
var root=UserInterface.getBinding(this.bindingDocument.body);
root.makeActivationAware(this);
if(UserInterface.isBindingVisible(this)){
this.dispatchAction(FocusBinding.ACTION_FOCUS);
}
};
PageBinding.prototype.onBeforeUpdates=function(){
this._isUpdating=true;
this.dispatchAction(PageBinding.ACTION_UPDATING);
};
PageBinding.prototype.onAfterUpdates=function(){
this._isUpdating=false;
this.dispatchAction(PageBinding.ACTION_UPDATED);
};
PageBinding.prototype.makeDialogSubPage=function(){
if(this.isFitAsDialogSubPage){
if(Client.isExplorer){
this.setFlexibility(true);
}
this.attachClassName(PageBinding.CLASSNAME_SUBPAGE);
this.isDialogSubPage=true;
}
};
PageBinding.prototype._setupDotNet=function(){
var self=this;
var form=this.bindingDocument.forms[0];
var _ce2=this.bindingWindow.__doPostBack;
var _ce3=false;
if(!form.__isSetup){
DOMEvents.addEventListener(this.bindingWindow,DOMEvents.UNLOAD,{handleEvent:function(){
if(_ce3){
Application.unlock(self);
}
}});
}
this.bindingWindow.__doPostBack=function(_ce4,_ce5){
if(!form.__isSetup){
Application.lock(self);
_ce3=true;
}
self.manifestAllDataBindings();
_ce2(_ce4,_ce5);
if(Application.isDeveloperMode){
self._debugDotNetPostback();
}
};
};
PageBinding.prototype.postMessage=function(_ce6,list){
var _ce8=this.bindingWindow.bindingMap.__REQUEST;
if(_ce8!=null&&this._isDotNet()){
switch(_ce6){
case EditorPageBinding.MESSAGE_SAVE:
case EditorPageBinding.MESSAGE_PERSIST:
if(this.bindingWindow.DataManager.isDirty){
if(this.validateAllDataBindings()){
if(list!=null){
list.add(this);
}
_ce8.postback(_ce6);
}
}
break;
default:
_ce8.postback(_ce6);
break;
}
}
if(list!=null){
this._postMessageToDescendants(_ce6,list);
}
};
PageBinding.prototype._postMessageToDescendants=function(_ce9,list){
var _ceb=this.getDescendantBindingsByType(WindowBinding);
_ceb.each(function(win){
var page=win.getPageBinding();
if(page!=null){
page.postMessage(_ce9,list);
}
});
};
PageBinding.prototype._debugDotNetPostback=function(){
var list=new List();
new List(this.bindingDocument.forms[0].elements).each(function(_cef){
list.add({name:_cef.name,value:_cef.value});
});
var out="";
list.each(function(_cf1){
out+=_cf1.name+": "+_cf1.value+"\n";
});
this.logger.debug(out);
};
PageBinding.prototype.handleAction=function(_cf2){
PageBinding.superclass.handleAction.call(this,_cf2);
var _cf3=_cf2.target;
switch(_cf2.type){
case RootBinding.ACTION_PHASE_3:
if(_cf3==UserInterface.getBinding(this.bindingDocument.body)){
_cf3.removeActionListener(RootBinding.ACTION_PHASE_3,this);
if(!this._isPageBindingInitialized){
try{
this.onBeforePageInitialize();
}
catch(exception){
alert(exception);
SystemDebug.stack(arguments);
throw exception;
}
}
}
break;
case PageBinding.ACTION_DOPOSTBACK:
if(this._isDotNet()){
this.doPostBack(_cf3);
}
_cf2.consume();
break;
case PageBinding.ACTION_DOVALIDATEDPOSTBACK:
if(this._isDotNet()){
var _cf4=this.validateAllDataBindings();
if(_cf4){
this.doPostBack(_cf3);
}
}
_cf2.consume();
break;
case BalloonBinding.ACTION_INITIALIZE:
_cf2.consume();
break;
case PageBinding.ACTION_BLOCK_INIT:
if(this._initBlockers==null){
this._initBlockers=new Map();
}
this._initBlockers.set(_cf3.key,true);
break;
case PageBinding.ACTION_UNBLOCK_INIT:
if(this._initBlockers!=null){
if(this._initBlockers.has(_cf3.key)){
this._initBlockers.del(_cf3.key);
if(!this._initBlockers.hasEntries()){
this._initBlockers=null;
if(this._isReadyForInitialize==true){
var self=this;
setTimeout(function(){
self.onBeforePageInitialize();
},0);
}
}
}
}
break;
case PageBinding.ACTION_GETMESSAGES:
if(UpdateMananger.isUpdating){
var self=this;
var _cf6={handleAction:function(_cf7){
if(_cf7.target==self){
self.removeActionListener(PageBinding.ACTION_UPDATED,_cf6);
MessageQueue.udpdate();
}
}};
this.addActionListener(PageBinding.ACTION_UPDATED,_cf6);
}else{
MessageQueue.udpdate();
}
_cf2.consume();
break;
}
};
PageBinding.prototype.handleBroadcast=function(_cf8,arg){
PageBinding.superclass.handleBroadcast.call(this,_cf8,arg);
switch(_cf8){
case BroadcastMessages.MESSAGEQUEUE_REQUESTED:
var _cfa=arg;
if(!this._canPostBack&&!_cfa){
this._canPostBack=true;
Application.unlock(this);
}
break;
}
};
PageBinding.prototype._isDotNet=function(){
var form=this.bindingDocument.forms[0];
return (form!=null&&typeof this.bindingWindow.__doPostBack!="undefined");
};
PageBinding.prototype.doPostBack=function(_cfc){
if(this._canPostBack){
if(_cfc!=null&&this._isDotNet()){
var _cfd=_cfc.getCallBackID();
var _cfe=_cfc.getCallBackArg();
if(_cfd!=null){
_cfd=_cfd.replace(/_/g,"$");
}else{
_cfd="";
}
if(_cfe==null){
_cfe="";
}
this.bindingWindow.__doPostBack(_cfd,_cfe);
}
}
};
PageBinding.prototype.validateAllDataBindings=function(){
var _cff=true;
var _d00=this.bindingWindow.DataManager.getAllDataBindings();
while(_d00.hasNext()&&_cff){
var _d01=_d00.getNext();
if(_d01.isAttached){
var _d02=_d01.validate();
if(_cff&&!_d02){
_cff=false;
this.logger.debug("Invalid DataBinding: "+_d01.toString()+" ("+_d01.getName()+")");
break;
}
}
}
return _cff;
};
PageBinding.prototype.manifestAllDataBindings=function(){
var list=new List();
var _d04=this.bindingWindow.DataManager.getAllDataBindings();
while(_d04.hasNext()){
var _d05=_d04.getNext();
if(_d05.isAttached){
var _d06=_d05.manifest();
if(_d06!=null){
list.add(_d06);
}
}
}
return list;
};
PageBinding.prototype.cleanAllDataBindings=function(){
var _d07=this.bindingWindow.DataManager.getAllDataBindings();
while(_d07.hasNext()){
var _d08=_d07.getNext();
if(_d08.isAttached){
_d08.clean();
}
}
};
PageBinding.prototype.getLabel=function(){
return this.label;
};
PageBinding.prototype.getImage=function(){
return this.image;
};
PageBinding.prototype.getToolTip=function(){
return this.toolTip;
};
PageBinding.prototype.getHeight=function(){
return this.bindingElement.offsetHeight;
};
PageBinding.prototype.onActivate=function(){
if(Binding.exists(this)){
if(!this.isActivated){
this.isActivated=true;
if(this._isFocusManager){
if(UserInterface.isBindingVisible(this)){
if(this._cachedFocus!=null){
var self=this;
setTimeout(function(){
if(FocusBinding.focusedBinding==null){
self._focusPreviouslyFocused();
}
},0);
}else{
this._focusFirstFocusable();
}
}
}
}
}
};
PageBinding.prototype.onDeactivate=function(){
if(this.isActivated==true){
this.isActivated=false;
if(this._cachedFocus!=null){
var _d0a=this._cachedFocus.getBinding();
if(_d0a){
_d0a.blur();
}
}
if(FocusBinding.activeInstance==this){
FocusBinding.activeInstance=null;
}
}
};
DialogPageBinding.prototype=new PageBinding;
DialogPageBinding.prototype.constructor=DialogPageBinding;
DialogPageBinding.superclass=PageBinding.prototype;
DialogPageBinding.DEFAULT_WIDTH=443;
DialogPageBinding.DEFAULT_TABBOXED_WIDTH=476;
DialogPageBinding.DEFAULT_HEIGHT="auto";
DialogPageBinding.DEFAULT_CONTROLS="close";
DialogPageBinding.DEFAULT_RESIZABLE=false;
DialogPageBinding.ACTION_RESPONSE="dialogpageresponse";
DialogPageBinding.ACTION_LAYOUT_D="dialoglayoutd";
DialogPageBinding.CLASSNAME_TABBOXED="tabboxed";
function DialogPageBinding(){
this.logger=SystemLogger.getLogger("DialogPageBinding");
this.response=null;
this.result=null;
this.width=null;
this.height=null;
this.minheight=null;
this.controls=null;
this.isResizable=null;
this.isAutoHeightLayoutMode=false;
}
DialogPageBinding.prototype.toString=function(){
return "[DialogPageBinding]";
};
DialogPageBinding.prototype.onBindingRegister=function(){
DialogPageBinding.superclass.onBindingRegister.call(this);
this.addActionListener(PageBinding.ACTION_ATTACHED);
this.addActionListener(Binding.ACTION_DIRTY);
this.addActionListener(Binding.ACTION_VALID);
this.addActionListener(Binding.ACTION_INVALID);
this.addActionListener(ButtonBinding.ACTION_COMMAND);
};
DialogPageBinding.prototype.parseDOMProperties=function(){
DialogPageBinding.superclass.parseDOMProperties.call(this);
if(this.width==null){
var _d0b=this.getProperty("width");
if(!_d0b){
_d0b=this.hasClassName(DialogPageBinding.CLASSNAME_TABBOXED)?DialogPageBinding.DEFAULT_TABBOXED_WIDTH:DialogPageBinding.DEFAULT_WIDTH;
}
this.width=_d0b;
}
if(this.height==null){
var _d0c=this.getProperty("height");
this.height=_d0c?_d0c:DialogPageBinding.DEFAULT_HEIGHT;
}
if(this.minheight==null){
var _d0d=this.getProperty("minheight");
if(_d0d!=null){
this.minheight=_d0d;
}
}
if(this.controls==null){
var _d0e=this.getProperty("controls");
this.controls=_d0e?_d0e:DialogPageBinding.DEFAULT_CONTROLS;
}
if(!this.isResizable){
var _d0f=this.getProperty("resizable");
this.isResizable=_d0f?_d0f:DialogPageBinding.DEFAULT_RESIZABLE;
}
if(this.height=="auto"){
this.enableAutoHeightLayoutMode(true);
}
};
DialogPageBinding.prototype.enableAutoHeightLayoutMode=function(_d10){
if(_d10!=this.isAutoHeightLayoutMode){
if(_d10){
this.attachClassName("auto");
}else{
this.detachClassName("auto");
}
this.isAutoHeightLayoutMode=_d10;
}
};
DialogPageBinding.prototype.handleAction=function(_d11){
DialogPageBinding.superclass.handleAction.call(this,_d11);
var _d12=_d11.target;
switch(_d11.type){
case PageBinding.ACTION_ATTACHED:
if(_d12!=this&&_d12.isFitAsDialogSubPage){
_d12.makeDialogSubPage();
}
break;
case ButtonBinding.ACTION_COMMAND:
_d11.consume();
if(_d12.response!=null){
this.response=_d12.response;
switch(_d12.response){
case Dialog.RESPONSE_ACCEPT:
if(this.validateAllDataBindings()==true){
this.onDialogAccept();
}else{
this.onDialogInvalid();
}
break;
case Dialog.RESPONSE_CANCEL:
this.onDialogCancel();
break;
default:
this.onDialogResponse();
break;
}
}
break;
case Binding.ACTION_INVALID:
this._disableAcceptButton(true);
break;
case Binding.ACTION_VALID:
this._disableAcceptButton(false);
break;
}
};
DialogPageBinding.prototype._disableAcceptButton=function(_d13){
var _d14=this.bindingWindow.bindingMap.buttonAccept;
if(_d14!=null){
_d14.setDisabled(_d13);
}
};
DialogPageBinding.prototype.onDialogAccept=function(){
if(this.result===null){
try{
this.result=this.bindingWindow.DataManager.getDataBindingResultMap();
}
catch(exception){
alert(exception);
throw exception;
}
}
this.onDialogResponse();
};
DialogPageBinding.prototype.onDialogInvalid=function(){
};
DialogPageBinding.prototype.onDialogCancel=function(){
this.onDialogResponse();
};
DialogPageBinding.prototype.onDialogResponse=function(){
this.dispatchAction(DialogPageBinding.ACTION_RESPONSE);
};
DialogPageBodyBinding.prototype=new FlexBoxBinding;
DialogPageBodyBinding.prototype.constructor=DialogPageBodyBinding;
DialogPageBodyBinding.superclass=FlexBoxBinding.prototype;
function DialogPageBodyBinding(){
this.logger=SystemLogger.getLogger("DialogPageBodyBinding");
}
DialogPageBodyBinding.prototype.toString=function(){
return "[DialogPageBodyBinding]";
};
DialogPageBodyBinding.prototype._setFitnessHeight=function(_d15){
var _d16=CSSComputer.getPadding(this.bindingElement);
var _d17=CSSComputer.getBorder(this.bindingElement);
_d15+=_d16.top+_d16.bottom;
_d15+=_d17.top+_d17.bottom;
if(_d15>this.bindingElement.offsetHeight){
this.bindingElement.style.height=_d15+"px";
}
};
EditorPageBinding.prototype=new PageBinding;
EditorPageBinding.prototype.constructor=EditorPageBinding;
EditorPageBinding.superclass=PageBinding.prototype;
EditorPageBinding.ACTION_ATTACHED="editorpage attached";
EditorPageBinding.ACTION_DIRTY="editorpage dirty";
EditorPageBinding.ACTION_CLEAN="editorpage clean";
EditorPageBinding.ACTION_SAVE="editorpage save";
EditorPageBinding.ID_SAVEASBUTTON="saveasbutton";
EditorPageBinding.ID_PREVIEWTAB="previewtab";
EditorPageBinding.ID_MAINTABBOX="maintabbox";
EditorPageBinding.ID_PREVIEWWINDOW="previewwindow";
EditorPageBinding.MESSAGE_SAVE="save";
EditorPageBinding.MESSAGE_PERSIST="persist";
EditorPageBinding.MESSAGE_REFRESH="refresh";
EditorPageBinding.message=null;
EditorPageBinding.isTabbing=false;
EditorPageBinding._registry=new Map();
EditorPageBinding.register=function(page){
var map=EditorPageBinding._registry;
if(!map.hasEntries()){
top.app.bindingMap.broadcasterHasOpenEditors.enable();
}
map.set(page.key,page);
};
EditorPageBinding.unregister=function(page){
var map=EditorPageBinding._registry;
map.del(page.key);
if(!map.hasEntries()){
top.app.bindingMap.broadcasterHasOpenEditors.disable();
}
};
function EditorPageBinding(){
this.logger=SystemLogger.getLogger("EditorPageBinding");
this.isDirty=false;
this._tabBoxBinding=null;
this._tabBinding=null;
this._windowBinding=null;
this._isGeneratingPreview=false;
this._isPreviewWindowVisible=false;
this._message=null;
this._messages=null;
this._messengers=null;
this._isWaitingForPreview=false;
this._isPreviewing=false;
}
EditorPageBinding.prototype.toString=function(){
return "[EditorPageBinding]";
};
EditorPageBinding.prototype.onBindingRegister=function(){
EditorPageBinding.superclass.onBindingRegister.call(this);
this.addActionListener(Binding.ACTION_DIRTY);
this.addActionListener(Binding.ACTION_VALID);
this.addActionListener(Binding.ACTION_INVALID);
this.addActionListener(EditorPageBinding.ACTION_SAVE);
this.addActionListener(ResponseBinding.ACTION_SUCCESS);
this.addActionListener(ResponseBinding.ACTION_FAILURE);
this.addActionListener(ResponseBinding.ACTION_OOOOKAY);
EditorPageBinding.register(this);
this._invalidBindings=new Map();
this._messengers=new List();
this._messages=new List();
};
EditorPageBinding.prototype.onBindingDispose=function(){
this.dispatchAction(EditorPageBinding.ACTION_CLEAN);
if(this._isPreviewWindowVisible==true){
setTimeout(function(){
EventBroadcaster.broadcast(BroadcastMessages.XHTML_MARKUP_OFF);
},250);
}
EditorPageBinding.unregister(this);
EditorPageBinding.superclass.onBindingDispose.call(this);
};
EditorPageBinding.prototype.onBeforePageInitialize=function(){
this._setupPreviewListeners();
EditorPageBinding.superclass.onBeforePageInitialize.call(this);
};
EditorPageBinding.prototype.onPageInitialize=function(){
EditorPageBinding.superclass.onPageInitialize.call(this);
this.enableSaveAs();
};
EditorPageBinding.prototype._setupPreviewListeners=function(){
var box=this.bindingDocument.getElementById(EditorPageBinding.ID_MAINTABBOX);
var tab=this.bindingDocument.getElementById(EditorPageBinding.ID_PREVIEWTAB);
var win=this.bindingDocument.getElementById(EditorPageBinding.ID_PREVIEWWINDOW);
if(box!=null){
this._tabBoxBinding=UserInterface.getBinding(box);
this._tabBoxBinding.addActionListener(TabBoxBinding.ACTION_SELECTED,this);
this._tabBoxBinding.addActionListener(TabBoxBinding.ACTION_UNSELECTED,this);
if(tab!=null&&win!=null){
this._tabBinding=UserInterface.getBinding(tab);
this._windowBinding=UserInterface.getBinding(win);
this._windowBinding.addActionListener(WindowBinding.ACTION_LOADED,this);
this._windowBinding.addActionListener(WindowBinding.ACTION_ONLOAD,this);
this.subscribe(BroadcastMessages.HIGHLIGHT_KEYWORDS);
if(this._tabBinding.isSelected){
this._startPreview();
}
}
}
};
EditorPageBinding.prototype.onSaveSuccess=function(){
this.enableSave(false);
this.enableSaveAs();
this.cleanAllDataBindings();
this.isDirty=false;
EditorPageBinding.message=null;
this.dispatchAction(EditorPageBinding.ACTION_CLEAN);
};
EditorPageBinding.prototype.handleAction=function(_d1f){
EditorPageBinding.superclass.handleAction.call(this,_d1f);
var _d20=_d1f.target;
switch(_d1f.type){
case EditorPageBinding.ACTION_SAVE:
this.postMessage(EditorPageBinding.MESSAGE_SAVE);
break;
case ResponseBinding.ACTION_OOOOKAY:
if(Application.isDeveloperMode){
}
break;
case ResponseBinding.ACTION_SUCCESS:
if(Application.isDeveloperMode){
}
if(this._messengers.hasEntries()){
var _d21=-1;
this._messengers.each(function(page){
var res=page.bindingWindow==_d20.bindingWindow;
if(res){
page.bindingWindow.DataManager.isDirty=false;
if(_d21==-1){
_d21=0;
}
}else{
_d21++;
}
return res;
});
if(_d21>-1){
this._messengers.del(_d21);
}
if(!this._messengers.hasEntries()){
switch(this._message){
case EditorPageBinding.MESSAGE_SAVE:
this._saveEditorPage();
break;
case EditorPageBinding.MESSAGE_PERSIST:
this._refresh();
this._message=null;
if(this._isWaitingForPreview){
this._isWaitingForPreview=false;
this._startPreview();
}
break;
}
}
}else{
this._refresh();
this._message=null;
}
break;
case ResponseBinding.ACTION_FAILURE:
if(Application.isDeveloperMode){
}
this._message=null;
this._messengers=new List();
break;
case Binding.ACTION_DIRTY:
if(this.canSave()){
if(!this.isDirty){
this.enableSave(true);
this.isDirty=true;
this.dispatchAction(EditorPageBinding.ACTION_DIRTY);
}
}
_d1f.consume();
break;
case Binding.ACTION_INVALID:
this.enableSave(false);
this._invalidBindings.set(_d20.key,_d20);
if(_d20 instanceof FieldsBinding){
this._updateStatusBar();
}
break;
case Binding.ACTION_VALID:
this._invalidBindings.del(_d20.key);
if(_d20 instanceof FieldsBinding){
this._updateStatusBar();
}
if(!this._invalidBindings.hasEntries()){
this.enableSave(true);
}
break;
case TabBoxBinding.ACTION_SELECTED:
if(_d20==this._tabBoxBinding){
if(this._windowBinding!=null){
var tab=_d20.getSelectedTabBinding();
if(tab.getID()==EditorPageBinding.ID_PREVIEWTAB){
this._isPreviewing=true;
if(this._messengers.hasEntries()){
this._isWaitingForPreview=true;
}else{
this._startPreview();
}
}else{
if(this._isPreviewing){
this._isPreviewing=false;
this._stopPreview();
}
}
}
}
_d1f.consume();
break;
case TabBoxBinding.ACTION_UNSELECTED:
if(_d20==this._tabBoxBinding){
this.postMessage(EditorPageBinding.MESSAGE_PERSIST);
}
_d1f.consume();
break;
case WindowBinding.ACTION_LOADED:
if(_d20==this._windowBinding){
if(this._isGeneratingPreview==true){
this._generatePreview();
this._isGeneratingPreview=false;
}
_d1f.consume();
}
break;
case WindowBinding.ACTION_ONLOAD:
if(_d20==this._windowBinding){
if(_d20.getContentWindow().isPostBackDocument!=true){
if(Client.isPrism){
Prism.enableCache();
}
var self=this;
setTimeout(function(){
Application.unlock(self);
},100);
if(EventBroadcaster.hasSubscribers(BroadcastMessages.XHTML_MARKUP_ON)){
var _d26=WindowBinding.getMarkup(this._windowBinding);
if(_d26!=null){
EventBroadcaster.broadcast(BroadcastMessages.XHTML_MARKUP_ON,_d26);
}
}
}
}
break;
}
};
EditorPageBinding.prototype.canSave=function(){
return this.bindingWindow.bindingMap.savebutton!=null;
};
EditorPageBinding.prototype.doSave=function(){
var _d27=this.bindingWindow.bindingMap.savebutton;
if(_d27!=null&&!_d27.isDisabled){
_d27.fireCommand();
}
};
EditorPageBinding.prototype._saveEditorPage=function(){
if(Application.isDeveloperMode){
}
if(this.validateAllDataBindings()){
this.bindingWindow.DataManager.isDirty=false;
var _d28=this.bindingWindow.bindingMap.__REQUEST;
if(_d28!=null){
_d28.postback(EditorPageBinding.MESSAGE_SAVE);
}else{
this.logger.error("Save aborted: Could not locate RequestBinding");
}
}
};
EditorPageBinding.prototype._refresh=function(){
if(Application.isDeveloperMode){
}
this.postMessage(EditorPageBinding.MESSAGE_REFRESH);
};
EditorPageBinding.prototype.postMessage=function(_d29){
this._message=null;
switch(_d29){
case EditorPageBinding.MESSAGE_SAVE:
this._postMessageToDescendants(_d29,this._messengers);
if(!this._messengers.hasEntries()){
this._saveEditorPage();
}else{
this._message=_d29;
}
break;
case EditorPageBinding.MESSAGE_PERSIST:
this._message=_d29;
EditorPageBinding.superclass.postMessage.call(this,_d29,this._messengers);
break;
case EditorPageBinding.MESSAGE_REFRESH:
EditorPageBinding.superclass.postMessage.call(this,_d29,this._messengers);
break;
}
};
EditorPageBinding.prototype.handleBroadcast=function(_d2a,arg){
EditorPageBinding.superclass.handleBroadcast.call(this,_d2a,arg);
switch(_d2a){
case BroadcastMessages.HIGHLIGHT_KEYWORDS:
var _d2c=arg;
if(UserInterface.isBindingVisible(this._windowBinding)){
WindowBinding.highlightKeywords(this._windowBinding,_d2c);
}
break;
}
};
EditorPageBinding.prototype.onActivate=function(){
EditorPageBinding.superclass.onActivate.call(this);
if(this._isPreviewWindowVisible==true){
EventBroadcaster.broadcast(BroadcastMessages.XHTML_MARKUP_ACTIVATE);
}
};
EditorPageBinding.prototype.onDeactivate=function(){
EditorPageBinding.superclass.onDeactivate.call(this);
if(this._isPreviewWindowVisible==true){
EventBroadcaster.broadcast(BroadcastMessages.XHTML_MARKUP_DEACTIVATE);
}
};
EditorPageBinding.prototype._updateStatusBar=function(){
var _d2d=new List();
this._invalidBindings.each(function(key,_d2f){
var list=_d2f.getInvalidLabels();
if(list){
list.each(function(_d31){
_d2d.add(_d31);
});
}
});
if(_d2d.hasEntries()){
var _d32="";
while(_d2d.hasNext()){
_d32+=_d2d.getNext().toLowerCase();
if(_d2d.hasNext()){
_d32+=", ";
}else{
_d32+=".";
}
}
var _d33=StringBundle.getString("ui","Website.App.StatusBar.ErrorInField");
StatusBar.error(_d33+" "+_d32);
}else{
StatusBar.clear();
}
};
EditorPageBinding.prototype._startPreview=function(){
Application.lock(this);
this._isGeneratingPreview=true;
if(Client.isPrism){
Prism.disableCache();
}
this._windowBinding.setURL(WindowBinding.POSTBACK_URL);
};
EditorPageBinding.prototype._stopPreview=function(){
this._windowBinding.reset();
if(Application.isLocked){
Application.unlock(this);
}
};
EditorPageBinding.prototype.enableSave=function(_d34){
var _d35=this.bindingDocument.getElementById("broadcasterCanSave");
if(_d35){
var _d36=UserInterface.getBinding(_d35);
if(_d34){
_d36.enable();
}else{
_d36.disable();
}
}else{
throw new Error("A required BroadcasterBinding could not be located.");
}
};
EditorPageBinding.prototype.enableSaveAs=function(){
var _d37=this.bindingDocument.getElementById(EditorPageBinding.ID_SAVEASBUTTON);
if(_d37!=null){
UserInterface.getBinding(_d37).enable();
}
};
EditorPageBinding.prototype.handleInvalidData=function(){
this.logger.error("INVALID DATA :(");
if(this._isGeneratingPreview){
this._isGeneratingPreview=false;
this._windowBinding.error();
this._message=null;
this._messengers=new List();
Application.unlock(this);
}
};
EditorPageBinding.prototype._generatePreview=function(){
var _d38=this._windowBinding.getContentDocument().title;
if(_d38==WindowBinding.POSTBACK_TITLE){
if(this.validateAllDataBindings()){
this.manifestAllDataBindings();
var _d39=this._tabBinding.getCallBackID();
var list=new List();
new List(this.bindingDocument.forms[0].elements).each(function(_d3b){
if(_d3b.name=="__EVENTTARGET"&&_d39){
_d3b.value=_d39;
}
list.add({name:_d3b.name,value:_d3b.value});
});
var url=String(this.bindingDocument.location);
this._windowBinding.getContentWindow().submit(list,url);
this._latestPostbackList=list.reset();
}else{
this.handleInvalidData();
}
}
};
WizardPageBinding.prototype=new DialogPageBinding;
WizardPageBinding.prototype.constructor=WizardPageBinding;
WizardPageBinding.superclass=DialogPageBinding.prototype;
WizardPageBinding.ID_NEXTBUTTON="nextbutton";
WizardPageBinding.ID_PREVIOUSBUTTON="previousbutton";
WizardPageBinding.ID_FINISHBUTTON="finishbutton";
WizardPageBinding.ACTION_NAVIGATE_NEXT="wizardnavigatenext";
WizardPageBinding.ACTION_NAVIGATE_PREVIOUS="wizardnavigateprevious";
WizardPageBinding.ACTION_FINISH="wizardfinish";
function WizardPageBinding(){
this.logger=SystemLogger.getLogger("WizardPageBinding");
return this;
}
WizardPageBinding.prototype.toString=function(){
return "[WizardPageBinding]";
};
WizardPageBinding.prototype.onPageInitialize=function(){
WizardPageBinding.superclass.onPageInitialize.call(this);
this.addActionListener(WizardPageBinding.ACTION_NAVIGATE_NEXT,this);
this.addActionListener(WizardPageBinding.ACTION_NAVIGATE_PREVIOUS,this);
this.addActionListener(WizardPageBinding.ACTION_FINISH,this);
};
WizardPageBinding.prototype.handleAction=function(_d3d){
WizardPageBinding.superclass.handleAction.call(this,_d3d);
var _d3e=_d3d.target;
switch(_d3d.type){
case WizardPageBinding.ACTION_NAVIGATE_NEXT:
case WizardPageBinding.ACTION_FINISH:
if(this.validateAllDataBindings()==true){
this.doPostBack(_d3e);
}else{
_d3d.consume();
}
break;
case WizardPageBinding.ACTION_NAVIGATE_PREVIOUS:
this.doPostBack(_d3e);
break;
case Binding.ACTION_INVALID:
this._enableNextAndFinish(false);
_d3d.consume();
break;
case Binding.ACTION_VALID:
this._enableNextAndFinish(true);
_d3d.consume();
break;
}
};
WizardPageBinding.prototype._enableNextAndFinish=function(_d3f){
var next=this.bindingWindow.bindingMap.nextbutton;
var _d41=this.bindingWindow.bindingMap.finishbutton;
if(next){
next.setDisabled(!_d3f);
}
if(_d41){
_d41.setDisabled(!_d3f);
}
};
MarkupAwarePageBinding.prototype=new PageBinding;
MarkupAwarePageBinding.prototype.constructor=MarkupAwarePageBinding;
MarkupAwarePageBinding.superclass=PageBinding.prototype;
function MarkupAwarePageBinding(){
this.logger=SystemLogger.getLogger("MarkupAwarePageBinding");
this._isActivated=false;
this._isWaiting=false;
return this;
}
MarkupAwarePageBinding.prototype.toString=function(){
return "[MarkupAwarePageBinding]";
};
MarkupAwarePageBinding.prototype.onBeforePageInitialize=function(){
MarkupAwarePageBinding.superclass.onBeforePageInitialize.call(this);
this.subscribe(BroadcastMessages.XHTML_MARKUP_ON);
this.subscribe(BroadcastMessages.XHTML_MARKUP_OFF);
this.subscribe(BroadcastMessages.XHTML_MARKUP_ACTIVATE);
this.subscribe(BroadcastMessages.XHTML_MARKUP_DEACTIVATE);
};
MarkupAwarePageBinding.prototype.handleBroadcast=function(_d42,arg){
MarkupAwarePageBinding.superclass.handleBroadcast.call(this,_d42,arg);
var self=this;
switch(_d42){
case BroadcastMessages.XHTML_MARKUP_ON:
this._activate(true);
if(arg!=null){
this._handleMarkup(arg);
}
break;
case BroadcastMessages.XHTML_MARKUP_OFF:
this._activate(false);
break;
case BroadcastMessages.XHTML_MARKUP_ACTIVATE:
this._isWaiting=true;
this._activate(true);
setTimeout(function(){
self._isWaiting=false;
},20);
break;
case BroadcastMessages.XHTML_MARKUP_DEACTIVATE:
setTimeout(function(){
if(!self._isActivated){
self._activate(false);
}
},0);
break;
}
};
MarkupAwarePageBinding.prototype.onActivate=function(){
MarkupAwarePageBinding.superclass.onActivate.call(this);
this._activate(true);
this._isActivated=true;
};
MarkupAwarePageBinding.prototype.onDeactivate=function(){
MarkupAwarePageBinding.superclass.onDeactivate.call(this);
this._isActivated=false;
var self=this;
setTimeout(function(){
if(!self._isWaiting){
self._activate(false);
}
},0);
};
MarkupAwarePageBinding.prototype._handleMarkup=function(_d46){
};
MarkupAwarePageBinding.prototype._activate=function(_d47){
};
SystemToolBarBinding.prototype=new ToolBarBinding;
SystemToolBarBinding.prototype.constructor=SystemToolBarBinding;
SystemToolBarBinding.superclass=ToolBarBinding.prototype;
function SystemToolBarBinding(){
this.logger=SystemLogger.getLogger("SystemToolBarBinding");
this._currentProfileKey=null;
this._actionFolderNames={};
this._actionProfile=null;
this._moreActionsWidth=0;
this._moreActions=null;
return this;
}
SystemToolBarBinding.prototype.toString=function(){
return "[SystemToolBarBinding]";
};
SystemToolBarBinding.prototype.onBindingAttach=function(){
SystemToolBarBinding.superclass.onBindingAttach.call(this);
if(System.hasActivePerspectives){
this.subscribe(BroadcastMessages.SYSTEM_ACTIONPROFILE_PUBLISHED);
this.subscribe(this.bindingWindow.WindowManager.WINDOW_RESIZED_BROADCAST);
this.subscribe(BroadcastMessages.INVOKE_DEFAULT_ACTION);
this.addActionListener(ButtonBinding.ACTION_COMMAND);
}else{
this.hide();
}
};
SystemToolBarBinding.prototype.onBindingInitialize=function(){
var _d48=this.bindingWindow.bindingMap.moreactionstoolbargroup;
this._moreActionsWidth=_d48.boxObject.getDimension().w;
_d48.hide();
var _d49=this.boxObject.getDimension().h;
this.bindingElement.style.height=_d49+"px";
var self=this;
var _d4b=this.bindingWindow.bindingMap.moreactionsbutton;
_d4b.addActionListener(ButtonBinding.ACTION_COMMAND,{handleAction:function(_d4c){
self._showMoreActions();
_d4c.consume();
}});
var _d4d=this.bindingWindow.bindingMap.moreactionspopup;
_d4d.addActionListener(MenuItemBinding.ACTION_COMMAND,{handleAction:function(_d4e){
var item=_d4e.target;
self._handleSystemAction(item.associatedSystemAction);
}});
SystemToolBarBinding.superclass.onBindingInitialize.call(this);
};
SystemToolBarBinding.prototype.handleBroadcast=function(_d50,arg){
SystemToolBarBinding.superclass.handleBroadcast.call(this,_d50,arg);
switch(_d50){
case BroadcastMessages.SYSTEM_ACTIONPROFILE_PUBLISHED:
var self=this;
if(arg!=null){
this._actionProfile=arg;
var key=this._getProfileKey();
if(key!=this._currentProfileKey){
setTimeout(function(){
self.emptyLeft();
self._actionFolderNames={};
self.buildLeft();
self._currentProfileKey=key;
},0);
}
}else{
setTimeout(function(){
self.emptyLeft();
self._actionFolderNames={};
self._currentProfileKey=null;
var _d54=self.bindingWindow.bindingMap.moreactionstoolbargroup;
if(_d54!=null){
_d54.hide();
}
},0);
}
break;
case this.bindingWindow.WindowManager.WINDOW_RESIZED_BROADCAST:
var _d55=this.bindingWindow.WindowManager;
this._toolBarBodyLeft.refreshToolBarGroups();
this._containAllButtons();
break;
case BroadcastMessages.INVOKE_DEFAULT_ACTION:
var self=this;
setTimeout(function(){
self._invokeDefaultAction();
},0);
break;
}
};
SystemToolBarBinding.prototype._getProfileKey=function(){
var _d56=new String("");
this._actionProfile.each(function(_d57,list){
list.each(function(_d59){
_d56+=_d59.getHandle()+";";
});
});
return _d56;
};
SystemToolBarBinding.prototype.handleAction=function(_d5a){
SystemToolBarBinding.superclass.handleAction.call(this,_d5a);
switch(_d5a.type){
case ButtonBinding.ACTION_COMMAND:
var _d5b=_d5a.target;
this._handleSystemAction(_d5b.associatedSystemAction);
break;
}
};
SystemToolBarBinding.prototype._handleSystemAction=function(_d5c){
if(_d5c!=null){
var list=ExplorerBinding.getFocusedTreeNodeBindings();
if(list.hasEntries()){
var _d5e=list.getFirst();
var _d5f=_d5e.node;
}
SystemAction.invoke(_d5c,_d5f);
}
};
SystemToolBarBinding.prototype.buildLeft=function(){
if(this.isInitialized&&this._actionProfile!=null&&this._actionProfile.hasEntries()){
var doc=this.bindingDocument;
var self=this;
this._actionProfile.each(function(_d62,list){
var _d64=new List();
list.reset();
while(list.hasNext()){
var _d65=list.getNext();
var _d66=null;
if(_d65.isInToolBar()){
if(_d65.isInFolder()){
alert("IsInFolder not implemented!");
}else{
_d66=self.getToolBarButtonBinding(_d65);
}
}
if(_d66!=null){
_d64.add(_d66);
}
}
if(_d64.hasEntries()){
var _d67=ToolBarGroupBinding.newInstance(doc);
_d64.each(function(_d68){
_d67.add(_d68);
});
self.addLeft(_d67);
}
});
this.attachRecursive();
this._containAllButtons();
}
};
SystemToolBarBinding.prototype._containAllButtons=function(){
var _d69=this.bindingWindow.bindingMap.toolsbutton;
var _d6a=this.bindingWindow.bindingMap.moreactionstoolbargroup;
var _d6b=_d69.bindingElement.offsetLeft-this._moreActionsWidth;
var _d6c=0;
var _d6d=new List();
var _d6e,_d6f=this._toolBarBodyLeft.getDescendantBindingsByLocalName("toolbarbutton");
while((_d6e=_d6f.getNext())!=null){
if(!_d6e.isVisible){
_d6e.show();
}
_d6c+=_d6e.boxObject.getDimension().w;
if(_d6c>=_d6b){
_d6d.add(_d6e);
_d6e.hide();
}
}
if(_d6d.hasEntries()){
var _d70=_d6d.getFirst().bindingElement.parentNode;
UserInterface.getBinding(_d70).setLayout(ToolBarGroupBinding.LAYOUT_LAST);
this._moreActions=new List();
while((_d6e=_d6d.getNext())!=null){
this._moreActions.add(_d6e.associatedSystemAction);
}
_d6a.show();
}else{
this._moreActions=null;
_d6a.hide();
}
};
SystemToolBarBinding.prototype._showMoreActions=function(){
if(this._moreActions!=null){
var _d71=this.bindingWindow.bindingMap.moreactionspopup;
_d71.empty();
while((action=this._moreActions.getNext())!=null){
var item=MenuItemBinding.newInstance(_d71.bindingDocument);
item.setLabel(action.getLabel());
item.setToolTip(action.getToolTip());
item.imageProfile=new ImageProfile({image:action.getImage(),imageDisabled:action.getDisabledImage()});
if(action.isDisabled()){
item.disable();
}
item.associatedSystemAction=action;
_d71.add(item);
}
_d71.attachRecursive();
this._moreActions=null;
}
};
SystemToolBarBinding.prototype.getToolBarButtonBinding=function(_d73){
var _d74=ToolBarButtonBinding.newInstance(this.bindingDocument);
var _d75=_d73.getLabel();
var _d76=_d73.getToolTip();
var _d77=_d73.getImage();
var _d78=_d73.isDisabled();
if(_d77&&_d77.indexOf("size=")==-1){
_d77=_d77+"&size="+this.getImageSize();
_d74.imageProfile=new ImageProfile({image:_d77});
}
if(_d75){
_d74.setLabel(_d75);
}
if(_d76){
_d74.setToolTip(_d76);
}
if(_d73.isDisabled()){
_d74.disable();
}
_d74.associatedSystemAction=_d73;
return _d74;
};
SystemToolBarBinding.prototype._invokeDefaultAction=function(){
var _d79=this.getDescendantBindingByLocalName("toolbarbutton");
if(_d79!=null){
_d79.fireCommand();
}
};
SystemToolBarBinding.newInstance=function(_d7a){
var _d7b=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbar",_d7a);
return UserInterface.registerBinding(_d7b,SystemToolBarBinding);
};
SystemTreeBinding.prototype=new TreeBinding;
SystemTreeBinding.prototype.constructor=SystemTreeBinding;
SystemTreeBinding.superclass=TreeBinding.prototype;
SystemTreeBinding.HAS_NO_MEMORY=false;
SystemTreeBinding.clipboard=null;
SystemTreeBinding.clipboardOperation=null;
SystemTreeBinding.URL_DIALOG_DETAILEDPASTE="${root}/content/dialogs/systemtrees/detailedpaste.aspx";
function SystemTreeBinding(){
this.logger=SystemLogger.getLogger("SystemTreeBinding");
this.perspectiveNode=null;
this._defaultTreeNode=null;
this._isActionProfileAware=true;
this._backupfocushandle=null;
this._tempSelectedNode=null;
this._tempSelectionTimeout=false;
this._entityTokenRegistry=null;
this._refreshingTreeNodes=null;
this._refreshToken=null;
this.isLockedToEditor=true;
this.isLockFeatureFocus=false;
this._restorableFocusHandle=null;
}
SystemTreeBinding.prototype.toString=function(){
return "[SystemTreeBinding]";
};
SystemTreeBinding.prototype.onBindingRegister=function(){
SystemTreeBinding.superclass.onBindingRegister.call(this);
this.perspectiveNode=StageBinding.perspectiveNode;
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESH);
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_CUT);
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_COPY);
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_PASTE);
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_COLLAPSEALL);
this.subscribe(BroadcastMessages.DOCKTABBINDING_SELECT);
this.subscribe(BroadcastMessages.STAGEDIALOG_OPENED);
this.addActionListener(SystemTreeNodeBinding.ACTION_REFRESHED_YEAH);
this.addActionListener(TreeNodeBinding.ACTION_COMMAND);
this._entityTokenRegistry=new Map();
this._refreshingTreeNodes=new Map();
if(this.getProperty("actionaware")==false){
this._isActionProfileAware=false;
}else{
this.setContextMenu(top.app.bindingMap.systemtreepopup);
}
if(this.getProperty("locktoeditor")!=null){
this.isLockedToEditor=this.getProperty("locktoeditor");
}
};
SystemTreeBinding.prototype.add=function(_d7c){
var _d7d=SystemTreeBinding.superclass.add.call(this,_d7c);
if(!this._defaultTreeNode){
if(_d7c instanceof SystemTreeNodeBinding){
this._defaultTreeNode=_d7c;
}
}
return _d7d;
};
SystemTreeBinding.prototype.handleAction=function(_d7e){
SystemTreeBinding.superclass.handleAction.call(this,_d7e);
var _d7f=_d7e.target;
switch(_d7e.type){
case TreeNodeBinding.ACTION_ONFOCUS:
case TreeNodeBinding.ACTION_ONMULTIFOCUS:
this._restorableFocusHandle=null;
this._handleSystemTreeFocus();
break;
case SystemTreeNodeBinding.ACTION_REFRESHED_YEAH:
this._updateRefreshingTrees(_d7f.key);
_d7e.consume();
break;
case TreeNodeBinding.ACTION_DISPOSE:
case TreeNodeBinding.ACTION_BLUR:
var self=this;
setTimeout(function(){
if(!self._focusedTreeNodeBindings.hasEntries()){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEM_ACTIONPROFILE_PUBLISHED,null);
}
},0);
if(_d7e.type==TreeNodeBinding.ACTION_BLUR){
this._restorableFocusHandle=_d7f.getHandle();
}
break;
case TreeNodeBinding.ACTION_COMMAND:
EventBroadcaster.broadcast(BroadcastMessages.INVOKE_DEFAULT_ACTION);
_d7e.consume();
break;
}
};
SystemTreeBinding.prototype.focus=function(){
SystemTreeBinding.superclass.focus.call(this);
if(this.isFocused){
this._handleSystemTreeFocus();
}
};
SystemTreeBinding.prototype._focusDefault=function(){
this._attemptRestorableFocus();
if(!this.getFocusedTreeNodeBindings().hasEntries()){
SystemTreeBinding.superclass._focusDefault.call(this);
}
};
SystemTreeBinding.prototype._attemptRestorableFocus=function(){
if(this._treeNodeBindings.has(this._restorableFocusHandle)){
var _d81=this._treeNodeBindings.get(this._restorableFocusHandle);
this.focusSingleTreeNodeBinding(_d81);
}
this._restorableFocusHandle=null;
};
SystemTreeBinding.prototype._handleSystemTreeFocus=function(){
if(this.getFocusedTreeNodeBindings().hasEntries()){
this._computeClipboardSetup();
this._computeRefreshSetup();
if(this._isActionProfileAware){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEM_ACTIONPROFILE_PUBLISHED,this.getCompiledActionProfile());
}
}
};
SystemTreeBinding.prototype.registerTreeNodeBinding=function(_d82){
SystemTreeBinding.superclass.registerTreeNodeBinding.call(this,_d82);
var reg=this._entityTokenRegistry;
var _d84=_d82.node.getEntityToken();
if(reg.has(_d84)){
reg.get(_d84).add(_d82);
}else{
reg.set(_d84,new List([_d82]));
}
var _d85=null;
if(this.isLockedToEditor){
if(_d84==StageBinding.entityToken){
if(_d82.node.isTreeLockEnabled()){
_d85=_d82;
}
}
}else{
if(this._backupfocushandle!=null){
if(this._backupfocushandle==_d82.node.getHandle()){
_d85=_d82;
}
}
}
if(_d85!=null){
this.focusSingleTreeNodeBinding(_d85);
}
};
SystemTreeBinding.prototype.unRegisterTreeNodeBinding=function(_d86){
SystemTreeBinding.superclass.unRegisterTreeNodeBinding.call(this,_d86);
var reg=this._entityTokenRegistry;
var _d88=_d86.node.getEntityToken();
if(reg.has(_d88)){
var list=reg.get(_d88);
list.del(_d86);
if(!list.hasEntries()){
reg.del(_d88);
}
}else{
this.logger.fatal("SystemTreeBinding out of synch: unRegisterTreeNodeBinding");
if(Application.isDeveloperMode){
Dialog.error("Attention Developer","Tree is out of synch. Please reproduce this bug and file a report.");
}
}
if(_d86.isRefreshing){
this._updateRefreshingTrees(binding.key);
}
if(!this.isLockedToEditor){
if(_d86.isFocused&&this._backupfocushandle==null){
this._backupfocushandle=_d86.node.getHandle();
var self=this;
setTimeout(function(){
self._backupfocushandle=null;
},200);
}
}
};
SystemTreeBinding.prototype._updateRefreshingTrees=function(key){
var _d8c=this._refreshingTreeNodes;
if(_d8c.hasEntries()&&_d8c.has(key)){
_d8c.del(key);
if(!_d8c.hasEntries()){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED,this._refreshToken);
this._refreshToken=null;
this._attemptRestorableFocus();
}
}
};
SystemTreeBinding.prototype._computeClipboardSetup=function(){
var _d8d=false;
var _d8e=this.getFocusedTreeNodeBindings();
if(_d8e.hasEntries()){
_d8d=true;
while(_d8d&&_d8e.hasNext()){
var _d8f=_d8e.getNext();
if(!_d8f.isDraggable){
_d8d=false;
}
}
}
SystemTreePopupBinding.isCutAllowed=_d8d;
};
SystemTreeBinding.prototype._computeRefreshSetup=function(){
SystemTreePopupBinding.isRefreshAllowed=SystemTreeBinding.clipboard===null;
};
SystemTreeBinding.prototype.handleBroadcast=function(_d90,arg){
SystemTreeBinding.superclass.handleBroadcast.call(this,_d90,arg);
switch(_d90){
case BroadcastMessages.SYSTEMTREEBINDING_REFRESH:
if(arg!=null||this.isFocused){
this._handleCommandBroadcast(_d90,arg);
}
break;
case BroadcastMessages.SYSTEMTREEBINDING_CUT:
case BroadcastMessages.SYSTEMTREEBINDING_COPY:
case BroadcastMessages.SYSTEMTREEBINDING_PASTE:
if(this.isFocused){
this._handleCommandBroadcast(_d90);
}
break;
case BroadcastMessages.SYSTEMTREEBINDING_COLLAPSEALL:
this.collapse(true);
break;
case BroadcastMessages.DOCKTABBINDING_SELECT:
if(this.isLockedToEditor){
var tab=arg;
if(tab.getHandle()!="Composite.Management.Explorer"){
this._handleDockTabSelect(tab);
}
}
break;
case BroadcastMessages.STAGEDIALOG_OPENED:
if(this.isLockedToEditor){
this.blurSelectedTreeNodes();
EventBroadcaster.broadcast(BroadcastMessages.SYSTEM_ACTIONPROFILE_PUBLISHED,null);
}
break;
}
};
SystemTreeBinding.prototype._handleDockTabSelect=function(tab){
var _d94=tab.perspectiveNode==null;
if(!_d94){
_d94=tab.perspectiveNode==this.perspectiveNode;
}
if(_d94){
var self=this,_d96=tab.getEntityToken();
setTimeout(function(){
if(_d96==null){
self.blurSelectedTreeNodes();
}else{
self._focusTreeNodeByEntityToken(_d96);
}
},250);
}
};
SystemTreeBinding.prototype._focusTreeNodeByEntityToken=function(_d97,_d98){
this.isLockFeatureFocus=true;
var _d99=null;
if(this._entityTokenRegistry.has(_d97)){
var list=this._entityTokenRegistry.get(_d97);
list.each(function(tn){
var _d9c=true;
if(tn.node.isTreeLockEnabled()){
_d99=tn;
_d9c=false;
}
return _d9c;
});
if(_d99!=null){
if(!_d99.isFocused){
this.focusSingleTreeNodeBinding(_d99,true);
}else{
_d99.dispatchAction(TreeNodeBinding.ACTION_FOCUSED);
}
}
}
this.isLockFeatureFocus=false;
if(_d99==null&&_d98!=true){
Application.lock(this);
StatusBar.busy();
var self=this;
setTimeout(function(){
if(Binding.exists(self)){
self._fetchTreeForEntityToken(_d97);
self._focusTreeNodeByEntityToken(_d97,true);
}
Application.unlock(self);
StatusBar.clear();
},0);
}
};
SystemTreeBinding.prototype._fetchTreeForEntityToken=function(_d9e){
var _d9f=StageBinding.perspectiveNode.getEntityToken();
var _da0=this.getOpenSystemNodes();
var map=System.getInvisibleBranch(_d9f,_d9e,_da0);
if(map==null){
this.isLockedToEditor=false;
if(Application.isDeveloperMode){
Dialog.warning("Ouch!","Because the web service failed, tree has disabled the lock-tree-to-editor "+"feature. Otherwise, re-focus would fire the error indefinitely. Please try again.");
}
}else{
if(map.hasEntries()){
var self=this;
var _da3=this._treeNodeBindings;
var _da4=new Map();
function fix(_da5,list){
if(!_da5.hasBeenOpened){
if(list.hasEntries()){
list.each(function(node){
if(!_da3.has(node.getHandle())){
var _da8=SystemTreeNodeBinding.newInstance(node,self.bindingDocument);
_da4.set(node.getHandle(),_da8);
_da5.add(_da8);
}
});
_da5.attachRecursive();
}
}
_da5.open(true);
}
map.each(function(_da9,list){
if(_da3.has(_da9)){
var _dab=_da3.get(_da9);
fix(_dab,list);
}else{
if(_da4.has(_da9)){
var _dac=_da4.get(_da9);
fix(_dac,list);
}else{
}
}
});
}
}
};
SystemTreeBinding.prototype._handleCommandBroadcast=function(_dad,arg){
switch(_dad){
case BroadcastMessages.SYSTEMTREEBINDING_REFRESH:
var _daf=arg;
if(_daf!=null){
this._invokeServerRefresh(_daf);
}else{
this._invokeManualRefresh();
}
break;
case BroadcastMessages.SYSTEMTREEBINDING_CUT:
if(SystemTreeBinding.clipboard!=null){
SystemTreeBinding.clipboard.hideDrag();
}
var _db0=this.getFocusedTreeNodeBindings().getFirst();
SystemTreeBinding.clipboardOperation=SystemTreePopupBinding.CMD_CUT;
SystemTreeBinding.clipboard=_db0;
_db0.showDrag();
break;
case BroadcastMessages.SYSTEMTREEBINDING_COPY:
var _db0=this.getFocusedTreeNodeBindings().getFirst();
SystemTreeBinding.clipboardOperation=SystemTreePopupBinding.CMD_COPY;
SystemTreeBinding.clipboard=_db0;
break;
case BroadcastMessages.SYSTEMTREEBINDING_PASTE:
this._handlePaste();
break;
}
};
SystemTreeBinding.prototype._invokeServerRefresh=function(_db1){
if(_db1!=null&&_db1=="null"){
if(Application.isDeveloperMode){
alert("Saa har vi balladen.");
}
}
if(this._entityTokenRegistry.has(_db1)){
var list=this._entityTokenRegistry.get(_db1).reset();
this._refreshToken=_db1;
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESHING,this._refreshToken);
while(list.hasNext()){
var _db3=list.getNext();
this._refreshingTreeNodes.set(_db3.key,true);
setTimeout(function(){
_db3.refresh(true);
},0);
}
}
};
SystemTreeBinding.prototype._invokeManualRefresh=function(){
var _db4=this.getFocusedTreeNodeBindings().getFirst();
if(_db4){
var _db5=_db4.getLabel();
var _db6=_db4.getAncestorBindingByLocalName("treenode");
if(_db6){
_db4=_db6;
}
this._refreshToken=null;
this._refreshingTreeNodes.set(_db4.key,true);
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESHING,null);
if(!StatusBar.state){
var _db7=StringBundle.getString("ui","Website.App.StatusBar.Refreshing");
StatusBar.busy(_db7,[_db5]);
}
_db4.refresh();
}
};
SystemTreeBinding.prototype._handlePaste=function(){
var _db8=SystemTreeBinding.clipboard;
if(_db8){
var type=_db8.dragType;
var _dba=this.getFocusedTreeNodeBindings().getFirst();
if(_dba.dragAccept){
if(_dba.acceptor.isAccepting(type)){
this._performPaste(_dba);
}else{
Dialog.message(StringBundle.getString("ui","Website.Misc.Trees.DialogTitle.PasteTypeNotAllowed"),StringBundle.getString("ui","Website.Misc.Trees.DialogText.PasteTypeNotAllowed"));
}
}else{
Dialog.message(StringBundle.getString("ui","Website.Misc.Trees.DialogTitle.PasteNotAllowed"),StringBundle.getString("ui","Website.Misc.Trees.DialogText.PasteNotAllowed"));
}
}
};
SystemTreeBinding.prototype._performPaste=function(_dbb){
var self=this;
function update(){
MessageQueue.update();
Application.unlock(self);
}
if(_dbb.node.hasDetailedDropSupport()){
if(_dbb.node.hasChildren()){
var _dbd=_dbb.node.getChildren();
Dialog.invokeModal(SystemTreeBinding.URL_DIALOG_DETAILEDPASTE,{handleDialogResponse:function(_dbe,_dbf){
if(_dbe==Dialog.RESPONSE_ACCEPT){
Application.lock(self);
var _dc0=_dbf.get("switch");
var _dc1=_dbf.get("sibling");
if(_dc0=="after"){
_dc1++;
}
var _dc2=_dbb.accept(SystemTreeBinding.clipboard,_dc1);
if(_dc2){
SystemTreeBinding.clipboard=null;
SystemTreeBinding.clipboardOperation=null;
setTimeout(update,0);
}else{
update();
}
}
}},_dbd);
}else{
Application.lock(self);
var _dc3=_dbb.accept(SystemTreeBinding.clipboard,0);
if(_dc3){
SystemTreeBinding.clipboard=null;
SystemTreeBinding.clipboardOperation=null;
setTimeout(update,0);
}else{
update();
}
}
}else{
Application.lock(self);
var _dc3=_dbb.accept(SystemTreeBinding.clipboard,0);
if(_dc3){
SystemTreeBinding.clipboard=null;
SystemTreeBinding.clipboardOperation=null;
}
update();
}
};
SystemTreeBinding.prototype.selectDefault=function(){
if(this._defaultTreeNode){
this._defaultTreeNode.focus();
this._defaultTreeNode=null;
}
};
SystemTreeBinding.prototype.collapse=function(_dc4){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEM_ACTIONPROFILE_PUBLISHED,null);
if(_dc4){
this.blurSelectedTreeNodes();
var _dc5=this.getRootTreeNodeBindings();
_dc5.each(function(_dc6){
if(_dc6.isContainer&&_dc6.isOpen){
_dc6.close();
_dc6.hasBeenOpened=false;
_dc6.empty();
}
});
}else{
SystemTreeBinding.superclass.collapse.call(this);
}
};
SystemTreeBinding.prototype.setLockToEditor=function(_dc7){
if(_dc7!=this.isLockedToEditor){
this.isLockedToEditor=_dc7;
if(_dc7){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_LOCKTOEDITOR);
}
}
};
SystemTreeBinding.prototype.getOpenSystemNodes=function(){
var list=new List([StageBinding.perspectiveNode]);
var _dc9=this.getRootTreeNodeBindings();
_dc9.each(function(_dca){
var _dcb=_dca.getOpenSystemNodes();
if(_dcb!=null&&_dcb.hasEntries()){
list.merge(_dcb);
}
});
return list;
};
SystemTreeBinding.prototype.focusSingleTreeNodeBinding=function(_dcc){
SystemTreeBinding.superclass.focusSingleTreeNodeBinding.call(this,_dcc);
if(_dcc!=null){
this._handleSystemTreeFocus();
}
};
SystemTreeBinding.prototype.getCompiledActionProfile=function(){
var temp={};
var _dce=new Map();
var _dcf=this.getFocusedTreeNodeBindings();
_dce=_dcf.getFirst().node.getActionProfile();
return _dce;
};
SystemTreePopupBinding.prototype=new PopupBinding;
SystemTreePopupBinding.prototype.constructor=SystemTreePopupBinding;
SystemTreePopupBinding.superclass=PopupBinding.prototype;
SystemTreePopupBinding.CMD_CUT="cut";
SystemTreePopupBinding.CMD_COPY="copy";
SystemTreePopupBinding.CMD_PASTE="paste";
SystemTreePopupBinding.CMD_REFRESH="refresh";
SystemTreePopupBinding.isCutAllowed=false;
SystemTreePopupBinding.isRefreshAllowed=true;
function SystemTreePopupBinding(){
this.logger=SystemLogger.getLogger("SystemTreePopupBinding");
this._currentProfileKey=null;
this._actionProfile=null;
this.selectedTreeNodeBinding=null;
}
SystemTreePopupBinding.prototype.onBindingRegister=function(){
SystemTreePopupBinding.superclass.onBindingRegister.call(this);
this.subscribe(BroadcastMessages.SYSTEM_ACTIONPROFILE_PUBLISHED);
this.addActionListener(MenuItemBinding.ACTION_COMMAND,this);
};
SystemTreePopupBinding.prototype.onBindingAttach=function(){
SystemTreePopupBinding.superclass.onBindingAttach.call(this);
this._indexMenuContent();
};
SystemTreePopupBinding.prototype.handleBroadcast=function(_dd0,arg){
SystemTreePopupBinding.superclass.handleBroadcast.call(this,_dd0,arg);
switch(_dd0){
case BroadcastMessages.SYSTEM_ACTIONPROFILE_PUBLISHED:
if(arg!=null){
this._actionProfile=arg;
}else{
this._currentProfileKey=null;
}
break;
}
};
SystemTreePopupBinding.prototype._getProfileKey=SystemToolBarBinding.prototype._getProfileKey;
SystemTreePopupBinding.prototype.show=function(){
var key=this._getProfileKey();
if(key!=this._currentProfileKey){
this.disposeContent();
this.constructContent();
this._currentProfileKey=key;
}
this._setupClipboardItems();
this._setupRefreshItem();
SystemTreePopupBinding.superclass.show.call(this);
};
SystemTreePopupBinding.prototype._setupClipboardItems=function(){
var cut=this.getMenuItemForCommand(SystemTreePopupBinding.CMD_CUT);
var copy=this.getMenuItemForCommand(SystemTreePopupBinding.CMD_COPY);
var _dd5=this.getMenuItemForCommand(SystemTreePopupBinding.CMD_PASTE);
cut.setDisabled(!SystemTreePopupBinding.isCutAllowed);
copy.setDisabled(!SystemTreePopupBinding.isCutAllowed);
_dd5.setDisabled(SystemTreeBinding.clipboard==null);
};
SystemTreePopupBinding.prototype._setupRefreshItem=function(){
var _dd6=this.getMenuItemForCommand(SystemTreePopupBinding.CMD_REFRESH);
_dd6.setDisabled(!SystemTreePopupBinding.isRefreshAllowed);
};
SystemTreePopupBinding.prototype.handleAction=function(_dd7){
SystemTreePopupBinding.superclass.handleAction.call(this,_dd7);
switch(_dd7.type){
case MenuItemBinding.ACTION_COMMAND:
var _dd8=_dd7.target;
var _dd9=_dd8.associatedSystemAction;
if(_dd9){
var list=ExplorerBinding.getFocusedTreeNodeBindings();
if(list.hasEntries()){
var _ddb=list.getFirst();
var _ddc=_ddb.node;
}
SystemAction.invoke(_dd9,_ddc);
}else{
var cmd=_dd8.getProperty("cmd");
if(cmd){
this._handleCommand(cmd);
}
}
break;
}
};
SystemTreePopupBinding.prototype._handleCommand=function(cmd){
var _ddf=null;
switch(cmd){
case SystemTreePopupBinding.CMD_CUT:
_ddf=BroadcastMessages.SYSTEMTREEBINDING_CUT;
break;
case SystemTreePopupBinding.CMD_COPY:
_ddf=BroadcastMessages.SYSTEMTREEBINDING_COPY;
break;
case SystemTreePopupBinding.CMD_PASTE:
_ddf=BroadcastMessages.SYSTEMTREEBINDING_PASTE;
break;
case SystemTreePopupBinding.CMD_REFRESH:
_ddf=BroadcastMessages.SYSTEMTREEBINDING_REFRESH;
break;
}
if(_ddf){
setTimeout(function(){
EventBroadcaster.broadcast(_ddf);
},0);
}
};
SystemTreePopupBinding.prototype.disposeContent=function(){
var _de0=new List(DOMUtil.getElementsByTagName(this.bindingElement,"menugroup"));
while(_de0.hasNext()){
var _de1=UserInterface.getBinding(_de0.getNext());
if(!_de1.getProperty("rel")){
_de1.dispose();
}
}
};
SystemTreePopupBinding.prototype.constructContent=function(){
if(this._actionProfile!=null){
var doc=this.bindingDocument;
var _de3=new List();
var self=this;
this._actionProfile.each(function(_de5,list){
var _de7=MenuGroupBinding.newInstance(doc);
list.each(function(_de8){
var _de9=self.getMenuItemBinding(_de8);
_de7.add(_de9);
});
_de3.add(_de7);
});
_de3.reverse();
while(_de3.hasNext()){
this._bodyBinding.addFirst(_de3.getNext());
}
this._bodyBinding.attachRecursive();
}
};
SystemTreePopupBinding.prototype.getMenuItemBinding=function(_dea){
var _deb=MenuItemBinding.newInstance(this.bindingDocument);
var _dec=_dea.getLabel();
var _ded=_dea.getToolTip();
var _dee=_dea.getImage();
var _def=_dea.getDisabledImage();
var _df0=_dea.isCheckBox();
if(_dec){
_deb.setLabel(_dec);
}
if(_ded){
_deb.setToolTip(_ded);
}
if(_dee){
_deb.imageProfile=new ImageProfile({image:_dee,imageDisabled:_def});
}
if(_df0){
_deb.setType(MenuItemBinding.TYPE_CHECKBOX);
if(_dea.isChecked()){
_deb.check(true);
}
}
if(_dea.isDisabled()){
_deb.disable();
}
_deb.associatedSystemAction=_dea;
return _deb;
};
SystemTreePopupBinding.prototype.snapToMouse=function(e){
var node=e.target?e.target:e.srcElement;
var name=DOMUtil.getLocalName(node);
var _df4=null;
if(name!="tree"){
switch(name){
case "treenode":
break;
default:
node=DOMUtil.getAncestorByLocalName("treenode",node);
if(node!=null){
_df4=UserInterface.getBinding(node);
if(_df4.isDisabled){
_df4=null;
}
}
break;
}
if(_df4!=null&&_df4.node!=null&&_df4.node.getActionProfile()!=null){
SystemTreePopupBinding.superclass.snapToMouse.call(this,e);
}
}
};
SystemTreeNodeBinding.prototype=new TreeNodeBinding;
SystemTreeNodeBinding.prototype.constructor=SystemTreeNodeBinding;
SystemTreeNodeBinding.superclass=TreeNodeBinding.prototype;
SystemTreeNodeBinding.ACTION_REFRESHED="systemtreenoderefreshed";
SystemTreeNodeBinding.ACTION_REFRESHED_YEAH="systemtreenoderefreshedyeah!";
SystemTreeNodeBinding.MAX_CHILD_IMPORT=10000;
function SystemTreeNodeBinding(){
this.logger=SystemLogger.getLogger("SystemTreeNodeBinding");
this.perspectiveNode=null;
this._isForcedOpen=false;
this.node=null;
}
SystemTreeNodeBinding.prototype.onBindingAttach=function(){
this.addActionListener(SystemTreeNodeBinding.ACTION_REFRESHED);
this.subscribe(BroadcastMessages.SYSTEMTREENODEBINDING_FORCE_OPEN);
this.isDisabled=this.node.isDisabled();
var _df5=this.node.getLabel();
if(_df5){
this.setLabel(_df5);
}
var _df6=this.node.getToolTip();
if(_df6){
this.setToolTip(_df6);
}
var _df7=this.node.getHandle();
if(_df7){
this.setHandle(_df7);
}
var bag=this.node.getPropertyBag();
if(bag){
for(var key in bag){
switch(key.toLowerCase()){
case "id":
case "key":
throw new Error("Illegal propertybag key: "+key);
break;
default:
this.setProperty(key,bag[key]);
break;
}
}
}
SystemTreeNodeBinding.superclass.onBindingAttach.call(this);
this.perspectiveNode=this.containingTreeBinding.perspectiveNode;
};
SystemTreeNodeBinding.prototype._initializeBindingDragAndDropFeatures=function(){
if(this.node.hasDragType()){
this.setProperty("dragtype",this.node.getDragType());
}
if(this.node.hasDragAccept()){
var _dfa="";
var list=this.node.getDragAccept();
while(list.hasNext()){
_dfa+=list.getNext();
if(list.hasNext()){
_dfa+=" ";
}
}
this.setProperty("dragaccept",_dfa);
}
SystemTreeNodeBinding.superclass._initializeBindingDragAndDropFeatures.call(this);
};
SystemTreeNodeBinding.prototype.handleAction=function(_dfc){
SystemTreeNodeBinding.superclass.handleAction.call(this,_dfc);
switch(_dfc.type){
case SystemTreeNodeBinding.ACTION_REFRESHED:
if(_dfc.target==this){
if(!this.isOpen){
this.hasBeenOpened=false;
_dfc.consume();
}
}
break;
}
};
SystemTreeNodeBinding.prototype.handleBroadcast=function(_dfd,arg){
SystemTreeNodeBinding.superclass.handleBroadcast.call(this,_dfd,arg);
switch(_dfd){
case BroadcastMessages.SYSTEMTREENODEBINDING_FORCE_OPEN:
if(arg==this.node.getEntityToken()){
if(this.isContainer&&!this.isOpen){
this._isForcedOpen=true;
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREENODEBINDING_FORCING_OPEN,this);
var self=this;
setTimeout(function(){
self.open();
},0);
}
}
break;
}
};
SystemTreeNodeBinding.prototype._computeImageProfile=function(){
};
SystemTreeNodeBinding.prototype.computeImage=function(){
var _e00=null;
var _e01=this.node.getImageProfile();
if(_e01){
if(this.isOpen){
_e00=_e01.getActiveImage();
}else{
_e00=_e01.getDefaultImage();
}
}
if(!_e00){
_e00=SystemTreeNodeBinding.superclass.computeImage.call(this);
}
return _e00;
};
SystemTreeNodeBinding.prototype.open=function(_e02){
var _e03=this.isContainer&&!this.isOpen;
var _e04=!this.hasBeenOpened;
SystemTreeNodeBinding.superclass.open.call(this);
if(_e03&&(_e04||SystemTreeBinding.HAS_NO_MEMORY)&&_e02!=true){
this.refresh();
if(this._isForcedOpen){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREENODEBINDING_FORCED_OPEN,this);
this._isForcedOpen=false;
}
}
};
SystemTreeNodeBinding.prototype.refresh=function(){
var _e05=null;
if(this.isContainer){
_e05=this.getOpenSystemNodes();
}
this.isRefreshing=true;
Application.lock(this);
StatusBar.busy();
var self=this;
setTimeout(function(){
if(Binding.exists(self)){
self._performRefresh(_e05);
Application.unlock(self);
StatusBar.clear();
}
},0);
};
SystemTreeNodeBinding.prototype._performRefresh=function(_e07){
if(_e07!=null){
this._refreshBranch(_e07);
}else{
this._refreshChildren();
}
this.isRefreshing=false;
this.isContainer=DOMUtil.getElementsByTagName(this.bindingElement,"treenode").item(0)!=null;
this.updateClassNames();
this.dispatchAction(SystemTreeNodeBinding.ACTION_REFRESHED);
this.dispatchAction(SystemTreeNodeBinding.ACTION_REFRESHED_YEAH);
};
SystemTreeNodeBinding.prototype._refreshChildren=function(){
var _e08=new List();
var _e09=this.node.getChildren();
this.empty();
if(_e09.hasEntries()){
this._insertTreeNodesRegulated(_e09);
}
};
SystemTreeNodeBinding.prototype._insertTreeNodesRegulated=function(_e0a){
var _e0b=0;
while(_e0a.hasEntries()&&_e0b<=SystemTreeNodeBinding.MAX_CHILD_IMPORT){
var _e0c=SystemTreeNodeBinding.newInstance(_e0a.extractFirst(),this.bindingDocument);
this.add(_e0c);
_e0c.attach();
_e0b++;
}
if(_e0a.hasEntries()){
this._insertBufferTreeNode(_e0a);
}
};
SystemTreeNodeBinding.prototype._insertBufferTreeNode=function(_e0d){
alert("Max treenode count reached. This is not handled!");
alert("TODO: SystemTreeNodeBinding#._insertBufferTreeNode");
};
SystemTreeNodeBinding.prototype._refreshBranch=function(list){
var _e0f=this.node.getDescendantBranch(list);
if(_e0f.hasEntries()){
this.XXX(_e0f);
}
};
SystemTreeNodeBinding.prototype.XXX=function(_e10){
var self=this;
var map=new Map();
this.empty();
_e10.each(function(key,_e14){
if(_e14.hasEntries()){
_e14.each(function(node){
var _e16=SystemTreeNodeBinding.newInstance(node,self.bindingDocument);
map.set(node.getHandle(),_e16);
if(map.has(key)){
var _e17=map.get(key);
_e17.add(_e16);
_e17.isOpen=true;
_e17.hasBeenOpened=true;
}else{
if(key==self.node.getHandle()){
self.add(_e16);
}else{
}
}
});
}
});
this.attachRecursive();
_e10.dispose();
map.dispose();
};
SystemTreeNodeBinding.prototype.getOpenDescendants=function(){
var _e18=new TreeCrawler();
var _e19=new List();
_e18.mode=TreeCrawler.MODE_GETOPEN;
_e18.crawl(this.bindingElement,_e19);
if(_e19.hasEntries()){
_e19.extractFirst();
}
_e18.dispose();
return _e19;
};
SystemTreeNodeBinding.prototype.getOpenSystemNodes=function(){
var _e1a=null;
var list=this.getOpenDescendants();
if(list.hasEntries()){
_e1a=new List([this.node]);
list.each(function(_e1c){
_e1a.add(_e1c.node);
});
}
return _e1a;
};
SystemTreeNodeBinding.prototype.updateClassNames=function(){
if(!this.isRefreshing){
SystemTreeNodeBinding.superclass.updateClassNames.call(this);
}
};
SystemTreeNodeBinding.prototype.acceptTreeNodeBinding=function(_e1d,_e1e){
var _e1f=(SystemTreeBinding.clipboardOperation==SystemTreePopupBinding.CMD_COPY);
if(_e1d instanceof SystemTreeNodeBinding){
if(TreeService.ExecuteDropElementAction){
TreeService.ExecuteDropElementAction(_e1d.node.getData(),this.node.getData(),_e1e?_e1e:this.containingTreeBinding.getDropIndex(),Application.CONSOLE_ID,_e1f);
}
}
};
SystemTreeNodeBinding.prototype.invokeManagedFocus=function(e){
if(!this.isFocused){
SystemTreeNodeBinding.superclass.invokeManagedFocus.call(this);
var tree=this.containingTreeBinding;
if(tree.isLockedToEditor&&!tree.isLockFeatureFocus){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREENODEBINDING_FOCUS,this);
}
}
};
SystemTreeNodeBinding.prototype.hasChildren=function(){
return this.node.hasChildren();
};
SystemTreeNodeBinding.newInstance=function(node,_e23){
var _e24=DOMUtil.createElementNS(Constants.NS_UI,"ui:treenode",_e23);
var _e25=UserInterface.registerBinding(_e24,SystemTreeNodeBinding);
_e25.node=node;
return _e25;
};
SystemPageBinding.prototype=new PageBinding;
SystemPageBinding.prototype.constructor=SystemPageBinding;
SystemPageBinding.superclass=PageBinding.prototype;
function SystemPageBinding(){
this.logger=SystemLogger.getLogger("SystemPageBinding");
this.node=null;
this._tree=null;
}
SystemPageBinding.prototype.toString=function(){
return "[SystemPageBinding]";
};
SystemPageBinding.prototype.onBindingRegister=function(){
SystemPageBinding.superclass.onBindingRegister.call(this);
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESH);
this.addActionListener(ButtonBinding.ACTION_COMMAND);
};
SystemPageBinding.prototype.setPageArgument=function(_e26){
this.node=_e26;
SystemPageBinding.superclass.setPageArgument.call(this,_e26);
};
SystemPageBinding.prototype.onBeforePageInitialize=function(){
if(this.node){
this._tree=this.bindingWindow.bindingMap.tree;
if(this._tree){
this._buildTree();
}else{
throw "SystemPageBinding requires a SystemTreeBinding";
}
}else{
throw "SystemPageBinding requires a SystemNode";
}
SystemPageBinding.superclass.onBeforePageInitialize.call(this);
};
SystemPageBinding.prototype._buildTree=function(){
var _e27=this.node.getChildren();
if(_e27.hasEntries()){
while(_e27.hasNext()){
var node=SystemTreeNodeBinding.newInstance(_e27.getNext(),this.bindingDocument);
this._tree.add(node);
node.attach();
}
}
};
SystemPageBinding.prototype._refreshTree=function(){
var _e29=this._tree._treeBodyBinding.getChildBindingsByLocalName("treenode");
_e29.each(function(root){
if(!root.isContainer){
root.isOpen=true;
}
});
var _e2b=new TreeCrawler();
var _e2c=new List();
_e2b.mode=TreeCrawler.MODE_GETOPEN;
_e2b.crawl(this.bindingElement,_e2c);
_e2b.dispose();
var list=new List([this.node]);
_e2c.each(function(_e2e){
list.add(_e2e.node);
});
this._tree.empty();
var _e2f=this.node.getDescendantBranch(list);
if(_e2f.hasEntries()){
var self=this;
var map=new Map();
_e2f.each(function(key,_e33){
_e33.each(function(node){
var _e35=SystemTreeNodeBinding.newInstance(node,self.bindingDocument);
map.set(node.getHandle(),_e35);
if(map.has(key)){
var _e36=map.get(key);
_e36.add(_e35);
_e36.isOpen=true;
}else{
if(key==self.node.getHandle()){
self._tree.add(_e35);
}
}
});
});
this._tree.attachRecursive();
}
};
SystemPageBinding.prototype.onAfterPageInitialize=function(){
SystemPageBinding.superclass.onAfterPageInitialize.call(this);
this._tree.selectDefault();
};
SystemPageBinding.prototype.handleAction=function(_e37){
SystemPageBinding.superclass.handleAction.call(this,_e37);
switch(_e37.type){
case ButtonBinding.ACTION_COMMAND:
var _e38=_e37.target;
switch(_e38.getID()){
case "locktreebutton":
this._tree.setLockToEditor(_e38.isChecked);
break;
case "collapsebutton":
this._tree.collapse();
break;
}
break;
}
};
SystemPageBinding.prototype.handleBroadcast=function(_e39,arg){
SystemPageBinding.superclass.handleBroadcast.call(this,_e39,arg);
switch(_e39){
case BroadcastMessages.SYSTEMTREEBINDING_REFRESH:
var _e3b=arg;
if(this.node&&this.node.getEntityToken()==_e3b){
try{
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESHING,_e3b);
var self=this;
Application.lock(this);
setTimeout(function(){
self._refreshTree();
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED,_e3b);
Application.unlock(self);
},0);
}
catch(exception){
alert(exception);
SystemDebug.stack(arguments);
}
}
break;
}
};
StageContainerBinding.prototype=new FlexBoxBinding;
StageContainerBinding.prototype.constructor=StageContainerBinding;
StageContainerBinding.superclass=FlexBoxBinding.prototype;
function StageContainerBinding(){
this.logger=SystemLogger.getLogger("StageContainerBinding");
}
StageContainerBinding.prototype.toString=function(){
return "[StageContainerBinding]";
};
StageContainerBinding.prototype.onBindingAttach=function(){
StageContainerBinding.superclass.onBindingAttach.call(this);
this.subscribe(BroadcastMessages.APPLICATION_OPERATIONAL);
};
StageContainerBinding.prototype.handleBroadcast=function(_e3d,arg){
StageContainerBinding.superclass.handleBroadcast.call(this,_e3d,arg);
var _e3f=this.bindingWindow.WindowManager;
switch(_e3d){
case BroadcastMessages.APPLICATION_OPERATIONAL:
this.subscribe(_e3f.WINDOW_RESIZED_BROADCAST);
this._fit();
this.reflex();
break;
case _e3f.WINDOW_RESIZED_BROADCAST:
if(Client.isMozilla==true){
this._fit();
this.reflex();
}else{
Application.lock(this);
var self=this;
setTimeout(function(){
self._fit();
self.reflex();
Application.unlock(self);
},0);
}
break;
}
};
StageContainerBinding.prototype._fit=function(){
var _e41=this.bindingWindow.WindowManager;
this.bindingElement.style.width=_e41.getWindowDimensions().w+"px";
};
StageBinding.prototype=new FocusBinding;
StageBinding.prototype.constructor=StageBinding;
StageBinding.superclass=FocusBinding.prototype;
StageBinding.bindingInstance=null;
StageBinding.perspectiveNode=null;
StageBinding.entityToken=null;
StageBinding.handleViewPresentation=function(_e42){
if(StageBinding.isViewOpen(_e42)){
EventBroadcaster.broadcast(BroadcastMessages.CLOSE_VIEW,_e42);
}else{
var _e43=ViewDefinitions[_e42];
StageBinding.presentViewDefinition(_e43);
}
};
StageBinding.isViewOpen=function(_e44){
return StageBinding.bindingInstance._activeViewDefinitions[_e44]!=null;
};
StageBinding.presentViewDefinition=function(_e45){
if(_e45.label!=null){
var _e46=StringBundle.getString("ui","Website.App.StatusBar.Opening");
StatusBar.busy(_e46,[_e45.label]);
}else{
StatusBar.busy();
}
StageBinding.bindingInstance._presentViewDefinition(_e45);
};
function StageBinding(){
this.logger=SystemLogger.getLogger("StageBinding");
this._activeViewDefinitions={};
this._decksBinding=null;
this._explorerBinding=null;
this._isStageReady=false;
this._isExplorerReady=false;
this._isDecksReady=false;
this._dockBindings=new Map();
this._isShowingStart=false;
this._isShowingDefaultStart=false;
this.isActivationAware=false;
return this;
}
StageBinding.prototype.toString=function(){
return "[StageBinding]";
};
StageBinding.prototype.onBindingRegister=function(){
StageBinding.superclass.onBindingRegister.call(this);
StageBinding.bindingInstance=this;
StageBoxHandlerAbstraction.onBindingRegister.call(this);
this.addActionListener(ExplorerBinding.ACTION_INITIALIZED);
this.addActionListener(StageDecksBinding.ACTION_INITIALIZED);
this.addActionListener(ExplorerMenuBinding.ACTION_SELECTIONCHANGED);
this.addActionListener(TabBoxBinding.ACTION_ATTACHED);
this.addActionListener(TabBoxBinding.ACTION_SELECTED);
this.addActionListener(WindowBinding.ACTION_LOADED);
this.addActionListener(ExplorerBinding.ACTION_DECK_LOADED);
this.addActionListener(StageDeckBinding.ACTION_LOADED);
this.addActionListener(ErrorBinding.ACTION_INITIALIZE);
this.subscribe(BroadcastMessages.VIEW_CLOSED);
this.subscribe(BroadcastMessages.VIEW_OPENED);
this.subscribe(BroadcastMessages.COMPOSITE_START);
this.subscribe(BroadcastMessages.COMPOSITE_STOP);
this.subscribe(BroadcastMessages.DOCK_MAXIMIZED);
this.subscribe(BroadcastMessages.DOCK_NORMALIZED);
var root=System.getRootNode();
this._initializeRootActions(root);
EventBroadcaster.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESH,{handleBroadcast:function(_e48,arg){
if(arg==root.getEntityToken()){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESHALL);
}
}});
var _e4a=System.getPerspectiveNodes();
if(_e4a.hasEntries()){
this._initializeSystemViewDefinitions(_e4a);
}else{
top.app.bindingMap.stagecontainer.hide();
this._onStageReady();
Dialog.message(StringBundle.getString("ui","Website.Dialogs.NoAccessTitle"),StringBundle.getString("ui","Website.Dialogs.NoAccessText"));
}
};
StageBinding.prototype._renameThisMethod=function(){
if(LocalStore.isInitialized){
this._initializeWorkbenchLayout();
}else{
var self=this;
EventBroadcaster.subscribe(BroadcastMessages.LOCALSTORE_INITIALIZED,{handleBroadcast:function(){
self._initializeWorkbenchLayout();
}});
}
};
StageBinding.prototype._initializeWorkbenchLayout=function(){
if(this._explorerBinding){
var _e4c=null;
if(LocalStore.isEnabled){
_e4c=LocalStore.getProperty(LocalStore.SELECTED_PERSPECTIVE_HANDLE);
}
if(_e4c&&ViewDefinitions[_e4c]){
alert("StageBinding#_initializeWorkbenchLayout !!!!");
this._explorerBinding.setSelectionByHandle(unescape(_e4c));
}else{
this._explorerBinding.setSelectionDefault();
}
}else{
this._onStageReady();
}
};
StageBinding.prototype._onStageReady=function(){
if(!this._isStageReady){
if(!Application.hasStartPage||!Application.hasExternalConnection){
top.app.bindingMap.defaultstartdeck.select();
this._isShowingDefaultStart=true;
}
EventBroadcaster.broadcast(BroadcastMessages.STAGE_INITIALIZED);
this._isStageReady=true;
}
};
StageBinding.prototype._initializeRootActions=function(root){
var _e4e=root.getActionProfile();
if(_e4e&&_e4e.hasEntries()){
var _e4f=top.app.bindingMap.toolsmenugroup;
if(_e4f){
_e4e.each(function(_e50,list){
list.each(function(_e52){
var item=MenuItemBinding.newInstance(_e4f.bindingDocument);
item.setLabel(_e52.getLabel());
item.setToolTip(_e52.getToolTip());
item.setImage(_e52.getImage());
item.setDisabled(_e52.isDisabled());
item.associatedSystemAction=_e52;
var _e54=_e4f;
var tag=_e52.getTag();
if(tag!=null){
switch(tag){
case SystemAction.TAG_CHANGEFROMLANGUAGE:
_e54=top.app.bindingMap.translationsmenugroup;
break;
}
}
_e54.add(item);
});
});
_e4f.attachRecursive();
}
}
};
StageBinding.prototype._initializeSystemViewDefinitions=function(_e56){
while(_e56.hasNext()){
var node=_e56.getNext();
var _e58=node.getHandle();
ViewDefinitions[_e58]=new SystemViewDefinition(node);
}
};
StageBinding.prototype.handleAction=function(_e59){
StageBinding.superclass.handleAction.call(this,_e59);
var _e5a=_e59.target;
switch(_e59.type){
case StageDecksBinding.ACTION_INITIALIZED:
if(!Application.isOperational){
ProgressBarBinding.notch(4);
}
this._decksBinding=_e5a;
this._inflateBinding(_e5a);
_e59.consume();
break;
case ExplorerBinding.ACTION_INITIALIZED:
if(!Application.isOperational){
ProgressBarBinding.notch(4);
}
this._explorerBinding=_e5a;
this._inflateBinding(_e5a);
_e59.consume();
break;
case ExplorerMenuBinding.ACTION_SELECTIONCHANGED:
if(!Application.isOperational){
ProgressBarBinding.notch(5);
}
this.handlePerspectiveChange(_e5a);
_e59.consume();
break;
case TabBoxBinding.ACTION_ATTACHED:
if(_e5a instanceof DockBinding){
switch(_e5a.reference){
case DockBinding.START:
case DockBinding.ABSBOTTOMLEFT:
case DockBinding.ABSBOTTOMRIGHT:
case DockBinding.ABSRIGHTTOP:
case DockBinding.ABSRIGHTBOTTOM:
this._dockBindings.set(_e5a.reference,_e5a);
break;
}
this.handleAttachedDock(_e5a);
_e59.consume();
}
break;
case TabBoxBinding.ACTION_SELECTED:
if(_e5a instanceof DockBinding){
this.handleSelectedDockTab(_e5a.getSelectedTabBinding());
_e59.consume();
}
break;
case WindowBinding.ACTION_LOADED:
break;
case ExplorerBinding.ACTION_DECK_LOADED:
this._isExplorerReady=true;
if(this._isDecksReady==true){
if(!this._isStageReady){
ProgressBarBinding.notch(3);
this._onStageReady();
}
}
break;
case StageSplitPanelBinding.ACTION_LAYOUTUPDATE:
if(!this._isFlexAbort&&Application.isOperational){
this._isFlexAbort=true;
this.reflex(true);
var self=this;
setTimeout(function(){
if(Client.isMozilla==true){
self.reflex(true);
}
self._isFlexAbort=false;
},0);
}
_e59.consume();
break;
case StageDeckBinding.ACTION_LOADED:
this._isDecksReady=true;
if(this._isExplorerReady==true){
if(!this._isStageReady){
this._onStageReady();
}
}
break;
case ErrorBinding.ACTION_INITIALIZE:
_e59.consume();
break;
}
StageBoxHandlerAbstraction.handleAction.call(this,_e59);
};
StageBinding.prototype.handleBroadcast=function(_e5c,arg){
StageBinding.superclass.handleBroadcast.call(this,_e5c,arg);
switch(_e5c){
case BroadcastMessages.VIEW_OPENED:
Application.unlock(this);
break;
case BroadcastMessages.VIEW_CLOSED:
var _e5e=arg;
this._dontView(_e5e);
break;
case BroadcastMessages.COMPOSITE_START:
this._showStart(true);
break;
case BroadcastMessages.COMPOSITE_STOP:
this._showStart(false);
break;
case BroadcastMessages.DOCK_MAXIMIZED:
this._stabilizeExplorer();
if(this._isShowingStart){
EventBroadcaster.broadcast(BroadcastMessages.STOP_COMPOSITE);
}
break;
case BroadcastMessages.DOCK_NORMALIZED:
this._stabilizeExplorer();
break;
}
};
StageBinding.prototype._stabilizeExplorer=function(){
if(Client.isExplorer==true){
var self=this;
if(Client.isExplorer==true){
setTimeout(function(){
self.reflex(true);
},0);
}
}
};
StageBinding.prototype._showStart=function(_e60){
if(_e60!=this._isShowingStart){
var view=ViewBinding.getInstance("Composite.Management.Start");
var dock=this._dockBindings.get(DockBinding.START);
var _e63=this.bindingWindow.bindingMap.maindecks;
if(_e60){
_e63.select("startdeck");
view.show();
}else{
view.hide();
_e63.select("stagedeck");
if(dock!=null&&dock.isActive){
dock.deActivate();
}
}
this._isShowingStart=_e60;
}
};
StageBinding.prototype._inflateBinding=function(_e64){
for(var _e65 in ViewDefinitions){
var _e66=ViewDefinitions[_e65];
if(_e66 instanceof SystemViewDefinition){
_e64.mountDefinition(_e66);
}
}
var _e67=(this._decksBinding!=null&&this._explorerBinding!=null);
if(_e67){
var self=this;
setTimeout(function(){
self._renameThisMethod();
},0);
}
};
StageBinding.prototype.iterateContainedStageBoxBindings=function(mode){
var _e6a=new StageCrawler();
_e6a.mode=mode;
_e6a.crawl(this.bindingElement);
_e6a.dispose();
};
StageBinding.prototype.handlePerspectiveChange=function(_e6b){
var _e6c=_e6b.getSelectionHandle();
this._decksBinding.setSelectionByHandle(_e6c);
if(LocalStore.isEnabled){
LocalStore.setProperty(LocalStore.SELECTED_PERSPECTIVE_HANDLE,escape(_e6c));
}
};
StageBinding.prototype.handleAttachedDock=function(_e6d){
var _e6e=_e6d.getTabBindings();
if(_e6e.hasEntries()){
while(_e6e.hasNext()){
var _e6f=_e6e.getNext();
var _e70=_e6f.getHandle();
if(_e70){
if(_e70=="Composite.Management.Start"&&(!Application.hasStartPage||!Application.hasExternalConnection)){
}else{
var _e71=ViewDefinitions[_e70];
if(_e71){
this._view(_e6d,_e6f,_e71,false);
}else{
alert("StageBinding: no such predefined viewdefinition ("+_e70+")");
}
}
}
}
}
};
StageBinding.prototype._presentViewDefinition=function(_e72){
var _e73=null;
var _e74=false;
switch(_e72.position){
case Dialog.MODAL:
_e73=app.bindingMap.masterdialogset.getModalInstance();
break;
case Dialog.NON_MODAL:
_e73=app.bindingMap.masterdialogset.getInstance();
break;
default:
if(this._dockBindings.hasEntries()){
switch(_e72.position){
case DockBinding.ABSBOTTOMLEFT:
case DockBinding.ABSBOTTOMRIGHT:
case DockBinding.ABSRIGHTTOP:
case DockBinding.ABSRIGHTBOTTOM:
_e73=this._dockBindings.get(_e72.position);
break;
default:
var _e75=this._decksBinding.getSelectedDeckBinding();
_e73=_e75.getDockBindingByReference(_e72.position);
if(this._isShowingStart){
EventBroadcaster.broadcast(BroadcastMessages.STOP_COMPOSITE);
}else{
if(this._isShowingDefaultStart){
var _e76=this.bindingWindow.bindingMap.maindecks;
_e76.select("stagedeck");
this._isShowingDefaultStart=false;
}
}
break;
}
}else{
_e74=true;
}
break;
}
if(!_e74){
if(_e73!=null){
this._view(_e73,null,_e72,true);
}else{
throw "StageBinding: Could not position view: "+_e72.handle;
}
}
};
StageBinding.prototype._view=function(_e77,_e78,_e79,_e7a){
var _e7b=_e79.handle;
if(_e79.isMutable){
_e7b+=KeyMaster.getUniqueKey();
}
if(this._activeViewDefinitions[_e7b]){
var _e7c=ViewBinding.getInstance(_e7b);
if(_e7c!=null){
_e7c.update();
}else{
this.logger.error("Could not update ViewBinding (declared open): \n"+_e7b);
}
}else{
this._activeViewDefinitions[_e7b]=_e79;
Application.lock(this);
switch(_e77.constructor){
case DockBinding:
if(_e7a){
_e77.prepareNewView(_e79);
}else{
_e77.prepareOpenView(_e79,_e78);
}
break;
case StageDialogBinding:
if(_e7a){
_e77.prepareNewView(_e79);
}
break;
}
}
};
StageBinding.prototype._dontView=function(_e7d){
if(this._activeViewDefinitions[_e7d]!=null){
delete this._activeViewDefinitions[_e7d];
}else{
this.logger.debug("Could not unregister active view: "+_e7d);
}
};
StageBinding.prototype.handleSelectedDockTab=function(_e7e){
};
StageCrawler.prototype=new BindingCrawler;
StageCrawler.prototype.constructor=StageCrawler;
StageCrawler.superclass=BindingCrawler.prototype;
StageCrawler.ID="stagecrawler";
StageCrawler.MODE_MAXIMIZE="maximize";
StageCrawler.MODE_UNMAXIMIZE="minimize";
function StageCrawler(){
this.mode=StageCrawler.MODE_MAXIMIZE;
this.id=StageCrawler.ID;
this._construct();
return this;
}
StageCrawler.prototype._construct=function(){
StageCrawler.superclass._construct.call(this);
var self=this;
this.addFilter(function(_e80){
var _e81=UserInterface.getBinding(_e80);
var _e82=null;
if(_e81){
switch(_e81.constructor){
case StageSplitBoxBinding:
case StageSplitPanelBinding:
case StageSplitterBinding:
switch(self.mode){
case StageCrawler.MODE_MAXIMIZE:
_e81.handleMaximization();
break;
case StageCrawler.MODE_UNMAXIMIZE:
_e81.handleUnMaximization();
break;
}
break;
case DockBinding:
_e82=NodeCrawler.SKIP_NODE;
break;
}
}
return _e82;
});
};
StageDialogSetBinding.prototype=new DialogSetBinding;
StageDialogSetBinding.prototype.constructor=StageDialogSetBinding;
StageDialogSetBinding.superclass=DialogSetBinding.prototype;
function StageDialogSetBinding(){
this.logger=SystemLogger.getLogger("StageDialogSetBinding");
this._dialogs=new List();
}
StageDialogSetBinding.prototype.toString=function(){
return "[StageDialogSetBinding]";
};
StageDialogSetBinding.prototype.getInstance=function(){
var _e83=null;
this._dialogs.each(function(_e84){
if(!_e84.isVisible){
_e83=_e84;
}
return _e83!=null;
});
if(!_e83){
this._newInstance();
_e83=this._dialogs.getLast();
}
_e83.setModal(false);
return _e83;
};
StageDialogSetBinding.prototype.getModalInstance=function(){
var _e85=this.getInstance();
_e85.setModal(true);
return _e85;
};
StageDialogSetBinding.prototype._newInstance=function(){
var _e86=this.add(StageDialogBinding.newInstance(this.bindingDocument));
this._dialogs.add(_e86);
_e86.attach();
};
StageDialogBinding.prototype=new DialogBinding;
StageDialogBinding.prototype.constructor=StageDialogBinding;
StageDialogBinding.superclass=DialogBinding.prototype;
function StageDialogBinding(){
this.logger=SystemLogger.getLogger("StageDialogBinding");
this._viewBinding=null;
this._pageBinding=null;
this._dialogResponseHandler=null;
this._isFirstPage=true;
return this;
}
StageDialogBinding.prototype.toString=function(){
return "[StageDialogBinding]";
};
StageDialogBinding.prototype.onBindingRegister=function(){
StageDialogBinding.superclass.onBindingRegister.call(this);
this.addActionListener(PageBinding.ACTION_INITIALIZED);
this.addActionListener(PageBinding.ACTION_DETACHED);
this.addActionListener(DialogPageBinding.ACTION_RESPONSE);
this.addActionListener(Binding.ACTION_INVALID);
this.addActionListener(Binding.ACTION_VALID);
this.addActionListener(ViewBinding.ACTION_LOADED);
this.addActionListener(ViewBinding.ACTION_ONCLOSE);
this.addActionListener(ViewBinding.ACTION_CLOSED);
this.addActionListener(ErrorBinding.ACTION_INITIALIZE);
this.addActionListener(PageBinding.ACTION_UPDATING);
this.addActionListener(PageBinding.ACTION_UPDATED);
this.addActionListener(DialogBinding.ACTION_CLOSE);
this.subscribe(BroadcastMessages.KEY_ESCAPE);
};
StageDialogBinding.prototype.onBindingAttach=function(){
StageDialogBinding.superclass.onBindingAttach.call(this);
this.defaultSetup();
};
StageDialogBinding.prototype.prepareNewView=function(_e87){
if(_e87 instanceof DialogViewDefinition){
var _e88=ViewBinding.newInstance(this.bindingDocument);
_e88.setDefinition(_e87);
_e88.setType(ViewBinding.TYPE_DIALOGVIEW);
if(_e87.handler){
if(Interfaces.isImplemented(IDialogResponseHandler,_e87.handler)){
this._dialogResponseHandler=_e87.handler;
}else{
throw "IDialogResponseHandler not implemented";
}
}
this._viewBinding=_e88;
this._body.add(_e88);
_e88.attach();
_e88.initialize();
}
};
StageDialogBinding.prototype.handleAction=function(_e89){
StageDialogBinding.superclass.handleAction.call(this,_e89);
var _e8a=_e89.target;
switch(_e89.type){
case PageBinding.ACTION_INITIALIZED:
this._handleInitializedPageBinding(_e8a);
_e89.consume();
break;
case PageBinding.ACTION_DETACHED:
if(_e8a.bindingDocument==this._viewBinding.getContentDocument()){
this._pageBinding=null;
}
_e89.consume();
break;
case DialogPageBinding.ACTION_RESPONSE:
if(_e8a.response){
this._handleDialogPageResponse(_e8a);
}
_e89.consume();
break;
case Binding.ACTION_INVALID:
this._disableDialogAcceptButton(true);
_e89.consume();
break;
case Binding.ACTION_VALID:
this._disableDialogAcceptButton(false);
_e89.consume();
break;
case ViewBinding.ACTION_ONCLOSE:
this.close();
_e8a.dispose();
_e89.consume();
break;
case ViewBinding.ACTION_CLOSED:
this._isFirstPage=true;
_e89.consume();
break;
case ErrorBinding.ACTION_INITIALIZE:
_e89.consume();
break;
case PageBinding.ACTION_UPDATING:
this._isUpdating=true;
_e89.consume();
break;
case PageBinding.ACTION_UPDATED:
if(this._isUpdating){
this._isUpdating=false;
this._fit();
}
_e89.consume();
break;
case Binding.ACTION_UPDATED:
if(!this._isUpdating){
this._fit();
}
_e89.consume();
break;
case DialogBinding.ACTION_CLOSE:
if(_e8a==this){
this._viewBinding.dispose();
this.defaultSetup();
}
break;
}
};
StageDialogBinding.prototype.handleBroadcast=function(_e8b,arg){
StageDialogBinding.superclass.handleBroadcast.call(this,_e8b,arg);
switch(_e8b){
case BroadcastMessages.KEY_ESCAPE:
if(this.isVisible==true){
if(!PopupBinding.hasActiveInstances()){
this._defaultClose();
}
}
break;
}
};
StageDialogBinding.prototype._fit=function(_e8d){
var _e8e=new FitnessCrawler();
var list=new List();
if(_e8d){
_e8e.mode=FitnessCrawler.MODE_BRUTAL;
}
_e8e.crawl(this.bindingElement,list);
_e8e.dispose();
if(list.hasEntries()){
list.reverse();
list.each(function(_e90){
_e90.fit(_e8d);
});
list.dispose();
this._fitMe();
}
};
StageDialogBinding.prototype._fitMe=function(){
if(this._pageBinding!=null){
this._pageBinding.enableAutoHeightLayoutMode(true);
this._fixAutoHeight(this._pageBinding);
this._pageBinding.enableAutoHeightLayoutMode(false);
var _e91=this.getDimension().h;
this.reflex(true);
var self=this;
if(this.getDimension().h==_e91){
var self=this;
setTimeout(function(){
self.reflex(true);
},0);
}
}
};
StageDialogBinding.prototype._handleContextMenuItemBinding=function(_e93){
var cmd=_e93.getProperty("cmd");
switch(cmd){
case DialogTitleBarPopupBinding.CMD_CLOSE:
this._defaultClose();
break;
case DialogTitleBarPopupBinding.CMD_REFRESH:
this._titlebar.setLabel(DockTabBinding.LABEL_TABLOADING);
this._titlebar.setImage(DockTabBinding.IMG_TABLOADING);
this._pageBinding=null;
this._viewBinding.reload(Application.isDeveloperMode);
break;
case DialogTitleBarPopupBinding.CMD_VIEWSOURCE:
case DialogTitleBarPopupBinding.CMD_VIEWGENERATED:
case DialogTitleBarPopupBinding.CMD_VIEWSERIALIZED:
this._viewSource(cmd);
break;
default:
alert("TODO!");
break;
}
};
StageDialogBinding.prototype._viewSource=DockTabBinding.prototype._viewSource;
StageDialogBinding.prototype._handleInitializedPageBinding=function(_e95){
if(_e95.bindingDocument==this._viewBinding.getContentDocument()){
if(_e95 instanceof DialogPageBinding){
if(this._pageBinding==null){
this._parsePageBinding(_e95);
}
this._pageBinding=_e95;
if(_e95.height=="auto"){
_e95.enableAutoHeightLayoutMode(true);
this._fixAutoHeight(_e95);
_e95.enableAutoHeightLayoutMode(false);
this.reflex(true);
}
}
if(StatusBar.state==StatusBar.BUSY){
StatusBar.clear();
}
if(this._isFirstPage){
EventBroadcaster.broadcast(BroadcastMessages.VIEW_COMPLETED,this._viewBinding.getHandle());
EventBroadcaster.broadcast(BroadcastMessages.STAGEDIALOG_OPENED);
}
}else{
if(_e95.isDialogSubPage){
this._pageBinding.enableAutoHeightLayoutMode(true);
this._fixAutoHeight(_e95);
this._pageBinding.enableAutoHeightLayoutMode(false);
this._fit(true);
this.reflex(true);
}
}
this._isFirstPage=false;
};
StageDialogBinding.prototype._disableDialogAcceptButton=function(_e96){
var _e97=this._viewBinding.getContentDocument().getElementById("dialogacceptbutton");
if(_e97){
var _e98=UserInterface.getBinding(_e97);
_e98.setDisabled(_e96);
}
};
StageDialogBinding.prototype._handleDialogPageResponse=function(_e99){
if(this._dialogResponseHandler!=null){
this._dialogResponseHandler.handleDialogResponse(_e99.response,_e99.result!=null?_e99.result:null);
}
this.close();
};
StageDialogBinding.prototype.handleInvokedControl=function(_e9a){
if(_e9a.controlType==ControlBinding.TYPE_CLOSE){
this._defaultClose();
}
StageDialogBinding.superclass.handleInvokedControl.call(this,_e9a);
};
StageDialogBinding.prototype.buildDescendantBindings=function(){
StageDialogBinding.superclass.buildDescendantBindings.call(this);
this._titlebar.setContextMenu(app.bindingMap.dialogtitlebarpopup);
var self=this;
this._titlebar.handleAction=function(_e9c){
switch(_e9c.type){
case MenuItemBinding.ACTION_COMMAND:
if(_e9c.listener==this.contextMenuBinding){
self._handleContextMenuItemBinding(_e9c.target);
}
break;
}
};
};
StageDialogBinding.prototype._parsePageBinding=function(_e9d){
var _e9e=_e9d.label;
var _e9f=_e9d.image;
var _ea0=_e9d.width;
var _ea1=_e9d.height;
var _ea2=_e9d.controls;
var _ea3=_e9d.isResizable;
if(_e9e){
this.setLabel(_e9e);
}
if(_e9f){
this.setImage(_e9f);
}
if(_ea0||_ea1){
var old=this.getDimension();
var nev=new Dimension();
if(this._isFirstPage){
nev.w=_ea0?_ea0:old.w;
}else{
nev.w=old.w;
}
nev.h=(_ea1!=null&&_ea1!="auto")?_ea1:old.h;
this.setDimension(nev);
}
if(_ea2){
this.controlBindings[ControlBinding.TYPE_MAXIMIZE].hide();
this.controlBindings[ControlBinding.TYPE_MINIMIZE].hide();
this.controlBindings[ControlBinding.TYPE_CLOSE].hide();
var type,_ea7=new List(_ea2.split(" "));
while((type=_ea7.getNext())!=null){
this.controlBindings[type].show();
}
}
if(_ea3!=this._isResizable){
this.setResizable(_ea3);
}
if(_ea1=="auto"){
this._fixAutoHeight(_e9d);
}
if(_e9d==this._pageBinding){
this.centerOnScreen();
}
if(!this.isOpen){
this.reflex(true);
this.open(true);
}
};
StageDialogBinding.prototype._fixAutoHeight=function(_ea8){
var dim=this.getDimension();
var _eaa=0;
var _eab=0;
if(_ea8.isDialogSubPage){
_ea8=this._pageBinding;
}
if(this._isFirstPage){
_eaa=_ea8.width!=null?_ea8.width:dim.w;
}else{
_eaa=dim.w;
}
_eab=_ea8.bindingElement.offsetHeight;
_eab+=this._titlebar.bindingElement.offsetHeight;
_eab+=4;
if(_eab<dim.h){
_eab=dim.h;
}
if(_ea8.minheight!=null){
if(_eab<_ea8.minheight){
_eab=_ea8.minheight;
}
}
this.setDimension(new Dimension(_eaa,_eab));
};
StageDialogBinding.prototype._defaultClose=function(){
if(this._dialogResponseHandler!=null){
this._dialogResponseHandler.handleDialogResponse(Dialog.RESPONSE_CANCEL);
}
this.close();
};
StageDialogBinding.prototype.open=function(){
StageDialogBinding.superclass.open.call(this);
if(this.isVisible==true){
this._viewBinding.onActivate();
}
};
StageDialogBinding.prototype.defaultSetup=function(){
this.setImage(LabelBinding.DEFAULT_IMAGE);
this.setLabel("");
this.setDimension(new Dimension(DialogBinding.DEFAULT_WIDTH,DialogBinding.DEFAULT_HEIGHT));
this.controlBindings[ControlBinding.TYPE_MAXIMIZE].hide();
this.controlBindings[ControlBinding.TYPE_MINIMIZE].hide();
this.controlBindings[ControlBinding.TYPE_CLOSE].show();
this._pageBinding=null;
this._dialogResponseHandler=null;
if(!this._isResizable){
this.setResizable(true);
}
};
StageDialogBinding.prototype.setPosition=function(p){
StageDialogBinding.superclass.setPosition.call(this,p);
this._body.dispatchAction(Binding.ACTION_POSITIONCHANGED);
};
StageDialogBinding.prototype.setDimension=function(dim){
if(!Client.isWindows){
dim.w-=6;
}
StageDialogBinding.superclass.setDimension.call(this,dim);
this._body.dispatchAction(Binding.ACTION_DIMENSIONCHANGED);
};
StageDialogBinding.prototype.activate=function(){
if(!this.isActive){
StageDialogBinding.superclass.activate.call(this);
this._viewBinding.onActivate();
}
};
StageDialogBinding.prototype.deActivate=function(){
if(this.isActive==true){
StageDialogBinding.superclass.deActivate.call(this);
this._viewBinding.onDeactivate();
}
};
StageDialogBinding.newInstance=function(_eae){
var _eaf=DOMUtil.createElementNS(Constants.NS_UI,"ui:dialog",_eae);
var _eb0=UserInterface.registerBinding(_eaf,StageDialogBinding);
_eb0.setProperty("controls","minimize maximize close");
return _eb0;
};
FitnessCrawler.prototype=new Crawler;
FitnessCrawler.prototype.constructor=FitnessCrawler;
FitnessCrawler.superclass=Crawler.prototype;
FitnessCrawler.ID="fitnesscrawler";
FitnessCrawler.MODE_BRUTAL="brutal fitness";
FitnessCrawler.MODE_TRAINING="train fitness";
function FitnessCrawler(){
this.id=FitnessCrawler.ID;
this.mode=FitnessCrawler.MODE_TRAINING;
this._construct();
return this;
}
FitnessCrawler.prototype._construct=function(){
FitnessCrawler.superclass._construct.call(this);
this.addFilter(function(_eb1,list){
var _eb3=null;
var _eb4=UserInterface.getBinding(_eb1);
if(!_eb4.isVisible){
_eb3=NodeCrawler.SKIP_NODE+NodeCrawler.SKIP_CHILDREN;
}
return _eb3;
});
this.addFilter(function(_eb5,list){
var _eb7=null;
var _eb8=UserInterface.getBinding(_eb5);
if(_eb8.isAttached){
if(Interfaces.isImplemented(IFit,_eb8)){
if(!_eb8.isFit||this.mode==FitnessCrawler.MODE_BRUTAL){
list.add(_eb8);
}
}
}
return null;
});
};
StageDecksBinding.prototype=new DecksBinding;
StageDecksBinding.prototype.constructor=StageDecksBinding;
StageDecksBinding.superclass=DecksBinding.prototype;
StageDecksBinding.NODENAME_DECK="stagedeck";
StageDecksBinding.ACTION_INITIALIZED="stagedecks initialized";
function StageDecksBinding(){
this.logger=SystemLogger.getLogger("StageDecksBinding");
this._decks={};
}
StageDecksBinding.prototype.toString=function(){
return "[StageDecksBinding]";
};
StageDecksBinding.prototype.onBindingInitialize=function(){
StageDecksBinding.superclass.onBindingInitialize.call(this);
this.dispatchAction(StageDecksBinding.ACTION_INITIALIZED);
};
StageDecksBinding.prototype.mountDefinition=function(_eb9){
var _eba=StageDeckBinding.newInstance(this.bindingDocument);
_eba.handle=_eb9.handle;
_eba.perspectiveNode=_eb9.node;
this._decks[_eba.handle]=_eba;
this.add(_eba);
_eba.attach();
};
StageDecksBinding.prototype.setSelectionByHandle=function(_ebb){
var _ebc=this._decks[_ebb];
StageBinding.perspectiveNode=_ebc.perspectiveNode;
this.select(_ebc);
};
StageDeckBinding.prototype=new DeckBinding;
StageDeckBinding.prototype.constructor=StageDeckBinding;
StageDeckBinding.superclass=DeckBinding.prototype;
StageDeckBinding.ACTION_LOADED="stagedeck loaded";
StageDeckBinding.NODENAME_DECKS="stagedecks";
StageDeckBinding.DEFAULT_URL="${root}/content/misc/stage/stagedeck.aspx";
StageDeckBinding.CLASSNAME_TOOLS_OPEN="toolsopen";
function StageDeckBinding(){
this.logger=SystemLogger.getLogger("StageDeckBinding");
this.handle=null;
this.perspectiveNode=null;
this.isReady=false;
this._isStageDeckBindingInitialized=false;
this._dockBindings=null;
this._dockBindingCount=0;
this.windowBinding=null;
this.isSubPanelMaximized=false;
}
StageDeckBinding.prototype.toString=function(){
return "[StageDeckBinding]";
};
StageDeckBinding.prototype.onBindingRegister=function(){
StageDeckBinding.superclass.onBindingRegister.call(this);
StageBoxHandlerAbstraction.onBindingRegister.call(this);
this._dockBindings=new Map();
this.addActionListener(WindowBinding.ACTION_LOADED);
this.addActionListener(TabBoxBinding.ACTION_ATTACHED);
};
StageDeckBinding.prototype.handleAction=function(_ebd){
StageDeckBinding.superclass.handleAction.call(this,_ebd);
var _ebe=_ebd.target;
switch(_ebd.type){
case WindowBinding.ACTION_LOADED:
if(_ebe==this.windowBinding){
top.app.bindingMap.stagedeckscover.hide();
this.removeActionListener(WindowBinding.ACTION_LOADED);
this.addActionListener(StageSplitBoxBinding.ACTION_DOCK_EMPTIED);
this.addActionListener(StageSplitBoxBinding.ACTION_DOCK_OPENED);
this.dispatchAction(StageDeckBinding.ACTION_LOADED);
_ebd.consume();
}
break;
case TabBoxBinding.ACTION_ATTACHED:
if(_ebe instanceof DockBinding){
this._dockBindings.set(_ebe.reference,_ebe);
_ebe.perspectiveNode=this.perspectiveNode;
}
break;
case StageSplitBoxBinding.ACTION_DOCK_OPENED:
this._dockBindingCount++;
if(this._dockBindingCount==2){
this._dockBindings.get("main").showControls(true);
}
_ebd.consume();
break;
case StageSplitBoxBinding.ACTION_DOCK_EMPTIED:
this._dockBindingCount--;
if(this._dockBindingCount==1){
this._dockBindings.get("main").showControls(false);
}
_ebd.consume();
break;
}
StageBoxHandlerAbstraction.handleAction.call(this,_ebd);
StageDeckBinding.superclass.handleAction.call(this,_ebd);
};
StageDeckBinding.prototype.iterateContainedStageBoxBindings=function(mode){
var _ec0=new StageCrawler();
_ec0.mode=mode;
_ec0.crawl(this.windowBinding.getContentDocument().body);
_ec0.dispose();
};
StageDeckBinding.prototype.select=function(){
if(!this._isStageDeckBindingInitialized){
this.initialize();
}
StageDeckBinding.superclass.select.call(this);
};
StageDeckBinding.prototype.getDockBindingByReference=function(_ec1){
return this._dockBindings.get(_ec1);
};
StageDeckBinding.prototype.initialize=function(){
if(!this._isStageDeckBindingInitialized){
top.app.bindingMap.stagedeckscover.show();
this.windowBinding=this.add(WindowBinding.newInstance(this.bindingDocument));
var url=StageDeckBinding.DEFAULT_URL+"?handle="+this.handle;
this.windowBinding.setURL(url);
this.windowBinding.attach();
this._isStageDeckBindingInitialized=true;
}
};
StageDeckBinding.newInstance=function(_ec3){
var _ec4=DOMUtil.createElementNS(Constants.NS_UI,"ui:stagedeck",_ec3);
var _ec5=UserInterface.registerBinding(_ec4,StageDeckBinding);
return _ec5;
};
StageDeckRootBinding.prototype=new RootBinding;
StageDeckRootBinding.prototype.constructor=StageDeckRootBinding;
StageDeckRootBinding.superclass=RootBinding.prototype;
StageDeckRootBinding.DEFAULT_TEMPLATE="defaultstagedeck.xml";
function StageDeckRootBinding(){
this.logger=SystemLogger.getLogger("StageDeckRootBinding");
}
StageDeckRootBinding.prototype.toString=function(){
return "[StageDeckRootBinding]";
};
StageSplitBoxBinding.prototype=new SplitBoxBinding;
StageSplitBoxBinding.prototype.constructor=StageSplitBoxBinding;
StageSplitBoxBinding.superclass=SplitBoxBinding.prototype;
StageSplitBoxBinding.ACTION_HIDE="stagesplitboxbinding hide";
StageSplitBoxBinding.ACTION_SHOW="stagesplitboxbinding show";
StageSplitBoxBinding.ACTION_DOCK_EMPTIED="stagesplitbox says dock emptied";
StageSplitBoxBinding.ACTION_DOCK_OPENED="stagesplitbox says dock opened";
function StageSplitBoxBinding(){
this.logger=SystemLogger.getLogger("StageSplitBoxBinding");
this.isMaximizePrepared=false;
this.isMaximizedForReal=null;
this.isMinimizedForReal=null;
return this;
}
StageSplitBoxBinding.prototype.toString=function(){
return "[StageSplitBoxBinding]";
};
StageSplitBoxBinding.prototype.onBindingRegister=function(){
StageSplitBoxBinding.superclass.onBindingRegister.call(this);
StageBoxAbstraction.onBindingRegister.call(this);
this.addActionListener(DockBinding.ACTION_EMPTIED,this);
this.addActionListener(DockBinding.ACTION_OPENED,this);
this.addActionListener(StageSplitBoxBinding.ACTION_SHOW,this);
this.addActionListener(StageSplitBoxBinding.ACTION_HIDE,this);
};
StageSplitBoxBinding.prototype.handleAction=function(_ec6){
StageSplitBoxBinding.superclass.handleAction.call(this,_ec6);
StageBoxAbstraction.handleAction.call(this,_ec6);
var _ec7=_ec6.target;
var _ec8=null;
var _ec9=null;
switch(_ec6.type){
case DockBinding.ACTION_EMPTIED:
_ec9=this.getChildBindingByLocalName("splitter");
if(_ec9.isVisible){
_ec9.hide();
}
_ec8=this.getDescendantBindingsByLocalName("dock");
if(_ec8.getFirst().isEmpty&&_ec8.getLast().isEmpty){
if(_ec8.getFirst().type!=DockBinding.TYPE_EDITORS){
this.dispatchAction(StageSplitBoxBinding.ACTION_HIDE);
this.hide();
}
}else{
this.flex();
this.invokeLayout();
}
this.dispatchAction(StageSplitBoxBinding.ACTION_DOCK_EMPTIED);
_ec6.consume();
break;
case DockBinding.ACTION_OPENED:
_ec8=this.getDescendantBindingsByLocalName("dock");
if(!_ec8.getFirst().isEmpty&&!_ec8.getLast().isEmpty){
_ec9=this.getChildBindingByLocalName("splitter");
if(!_ec9.isVisible){
_ec9.show();
}
}
if(!this.isVisible){
this.show();
this.dispatchAction(StageSplitBoxBinding.ACTION_SHOW);
}
this.flex();
this.invokeLayout();
this.dispatchAction(StageSplitBoxBinding.ACTION_DOCK_OPENED);
_ec6.consume();
break;
case StageSplitBoxBinding.ACTION_HIDE:
if(_ec7!=this){
_ec9=this.getChildBindingByLocalName("splitter");
if(_ec9.isVisible){
_ec9.hide();
}
this.invokeLayout();
_ec6.consume();
}
break;
case StageSplitBoxBinding.ACTION_SHOW:
if(_ec7!=this){
var _eca=this.getChildBindingsByLocalName("splitpanel");
if(_eca.getFirst().isVisible&&_eca.getLast().isVisible){
_ec9=this.getChildBindingByLocalName("splitter");
if(!_ec9.isVisible){
_ec9.show();
}
}
this.invokeLayout();
_ec6.consume();
}
break;
}
};
StageSplitBoxBinding.prototype.handleMaximization=function(){
StageBoxAbstraction.handleMaximization.call(this);
};
StageSplitBoxBinding.prototype.handleUnMaximization=function(){
StageBoxAbstraction.handleUnMaximization.call(this);
};
StageSplitBoxBinding.prototype.flex=function(){
if(this.isMaximizedForReal==null){
StageSplitBoxBinding.superclass.flex.call(this);
}
};
StageSplitBoxBinding.prototype.handleCrawler=function(_ecb){
StageSplitBoxBinding.superclass.handleCrawler.call(this,_ecb);
switch(_ecb.id){
case FlexBoxCrawler.ID:
if(this.isMaximizedForReal==false){
_ecb.response=NodeCrawler.SKIP_CHILDREN;
}
break;
}
};
StageSplitBoxBinding.prototype.hasBothPanelsVisible=function(){
var _ecc=this.getChildBindingsByLocalName("splitpanel");
return _ecc.getFirst().isVisible&&_ecc.getLast().isVisible;
};
StageSplitBoxBinding.prototype.hasBothPanelsFixed=function(){
var _ecd=this.getChildBindingsByLocalName("splitpanel");
return _ecd.getFirst().isFixed&&_ecd.getLast().isFixed;
};
StageSplitPanelBinding.prototype=new SplitPanelBinding;
StageSplitPanelBinding.prototype.constructor=StageSplitPanelBinding;
StageSplitPanelBinding.superclass=SplitPanelBinding.prototype;
StageSplitPanelBinding.ACTION_LAYOUTUPDATE="stagesplitpanel layout changed";
function StageSplitPanelBinding(){
this.logger=SystemLogger.getLogger("StageSplitPanelBinding");
this.isMaximizePrepared=false;
this.isMaximizedForReal=null;
this.isMinimizedForReal=null;
this._isInvisibilized=false;
this.isActive=true;
this.isFixed=false;
}
StageSplitPanelBinding.prototype.toString=function(){
return "[StageSplitPanelBinding]";
};
StageSplitPanelBinding.prototype.onBindingRegister=function(){
StageSplitPanelBinding.superclass.onBindingRegister.call(this);
StageBoxAbstraction.onBindingRegister.call(this);
this.addActionListener(DockBinding.ACTION_OPENED,this);
this.addActionListener(DockBinding.ACTION_EMPTIED,this);
this.addActionListener(StageSplitBoxBinding.ACTION_HIDE,this);
this.addActionListener(StageSplitBoxBinding.ACTION_SHOW,this);
this.addActionListener(StageSplitPanelBinding.ACTION_LAYOUTUPDATE,this);
};
StageSplitPanelBinding.prototype.handleAction=function(_ece){
StageSplitPanelBinding.superclass.handleAction.call(this,_ece);
StageBoxAbstraction.handleAction.call(this,_ece);
switch(_ece.type){
case DockBinding.ACTION_EMPTIED:
case StageSplitBoxBinding.ACTION_HIDE:
if(this.isMaximized==true){
this.normalize();
}
var dock=this.getContainedDock();
if(dock&&dock.type==DockBinding.TYPE_EDITORS){
this._invisibilize(true);
if(_ece.type==StageSplitBoxBinding.ACTION_HIDE){
_ece.consume();
}
}else{
this.hide();
if(this.isFixed==true){
this.setFix(false);
}
}
if(_ece.type==DockBinding.ACTION_EMPTIED){
var self=this;
setTimeout(function(){
self.dispatchAction(StageSplitPanelBinding.ACTION_LAYOUTUPDATE);
},0);
}
break;
case DockBinding.ACTION_OPENED:
case StageSplitBoxBinding.ACTION_SHOW:
var dock=this.getContainedDock();
if(dock&&dock.type==DockBinding.TYPE_EDITORS){
this._invisibilize(false);
if(_ece.type==StageSplitBoxBinding.ACTION_SHOW){
_ece.consume();
}
}else{
this.show();
if(this.isFixed==true){
this.setFix(false);
}
}
break;
case StageSplitPanelBinding.ACTION_LAYOUTUPDATE:
var _ed1=_ece.target;
if(_ed1!=this&&_ed1.getContainedDock()){
if(this._containingSplitBoxBinding.getOrient()==SplitBoxBinding.ORIENT_VERTICAL){
var _ed2=_ed1._containingSplitBoxBinding;
if(_ed2.getOrient()==SplitBoxBinding.ORIENT_HORIZONTAL){
var _ed3=_ed2.getChildBindingsByLocalName("splitpanel");
var _ed4=_ed3.getFirst();
var _ed5=_ed3.getLast();
if(this.isFixed==true){
if(!_ed4.isFixed||!_ed5.isFixed||(!_ed2.hasBothPanelsVisible()&&_ed1.isMinimizedForReal)){
this.setFix(false);
_ece.consume();
this.dispatchAction(StageSplitPanelBinding.ACTION_LAYOUTUPDATE);
}
}else{
if(_ed2.hasBothPanelsFixed()||(!_ed2.hasBothPanelsVisible()&&_ed1.isMinimizedForReal)){
this.setFix(_ed1.getContainedDock().getHeight());
_ece.consume();
this.dispatchAction(StageSplitPanelBinding.ACTION_LAYOUTUPDATE);
}
}
}
}else{
}
}
break;
}
};
StageSplitPanelBinding.prototype.handleMaximization=function(){
StageBoxAbstraction.handleMaximization.call(this);
var _ed6=this.getContainedDock();
if(_ed6){
if(this.isMaximizePrepared==true){
}else{
_ed6.interceptDisplayChange(false);
}
}
};
StageSplitPanelBinding.prototype.handleUnMaximization=function(){
StageBoxAbstraction.handleUnMaximization.call(this);
var _ed7=this.getContainedDock();
if(_ed7){
if(_ed7.type==DockBinding.TYPE_EDITORS){
if(_ed7.isEmpty){
this._invisibilize(true);
}
}
if(this.isMaximized==true){
this.normalize();
}else{
_ed7.interceptDisplayChange(true);
}
}
};
StageSplitPanelBinding.prototype.maximize=function(){
if(this.isMinimized==true){
this.normalize(true);
}
StageSplitPanelBinding.superclass.maximize.call(this);
this.dispatchAction(StageSplitPanelBinding.ACTION_LAYOUTUPDATE);
var _ed8=this.getContainedDock();
if(_ed8){
_ed8.activate();
EventBroadcaster.broadcast(BroadcastMessages.DOCK_MAXIMIZED,_ed8);
}
};
StageSplitPanelBinding.prototype.minimize=function(){
var _ed9=this._containingSplitBoxBinding.getOrient()==SplitBoxBinding.ORIENT_HORIZONTAL;
var _eda=this.getContainedDock();
if(_eda){
_eda.collapse(_ed9);
if(!_ed9){
this.setFix(_eda.getHeight());
}else{
this.setFix(_eda.getWidth());
}
}
if(this.isMaximized==true){
this.normalize(true);
}
StageSplitPanelBinding.superclass.minimize.call(this);
this.dispatchAction(StageSplitPanelBinding.ACTION_LAYOUTUPDATE);
if(_eda&&_eda.isActive){
_eda.deActivate();
EventBroadcaster.broadcast(BroadcastMessages.DOCK_MINIMIZED,_eda);
}
};
StageSplitPanelBinding.prototype.normalize=function(_edb){
var _edc=this._containingSplitBoxBinding.getOrient()==SplitBoxBinding.ORIENT_HORIZONTAL;
var _edd=this.getContainedDock();
if(_edd){
if(this.isMinimized==true){
_edd.unCollapse(_edc);
this.setFix(false);
}
}
StageSplitPanelBinding.superclass.normalize.call(this);
if(!_edb){
this.dispatchAction(StageSplitPanelBinding.ACTION_LAYOUTUPDATE);
if(_edd){
_edd.activate();
EventBroadcaster.broadcast(BroadcastMessages.DOCK_NORMALIZED,_edd);
}
}
};
StageSplitPanelBinding.prototype.getContainedDock=function(){
return this.getChildBindingByLocalName("dock");
};
StageSplitPanelBinding.prototype.invisibilize=function(_ede){
var _edf=true;
var dock=this.getContainedDock();
if(dock!=null&&dock.type==DockBinding.TYPE_EDITORS){
if(dock.isEmpty==true){
_edf=false;
}
}
if(_edf==true){
this._invisibilize(_ede);
}
};
StageSplitPanelBinding.prototype._invisibilize=function(_ee1){
if(_ee1!=this._isInvisibilized){
if(_ee1){
this.bindingElement.style.visibility="hidden";
}else{
this.bindingElement.style.visibility="visible";
}
this._isInvisibilized=!this._isInvisibilized;
}
};
StageSplitterBinding.prototype=new SplitterBinding;
StageSplitterBinding.prototype.constructor=StageSplitterBinding;
StageSplitterBinding.superclass=SplitterBinding.prototype;
function StageSplitterBinding(){
this.logger=SystemLogger.getLogger("StageSplitterBinding");
this._wasHidden=null;
}
StageSplitterBinding.prototype.toString=function(){
return "[StageSplitterBinding]";
};
StageSplitterBinding.prototype.handleMaximization=function(){
this._wasHidden=!this.isVisible;
this.bindingElement.style.display="none";
};
StageSplitterBinding.prototype.handleUnMaximization=function(){
if(!this._wasHidden){
this.bindingElement.style.display="block";
this._wasHidden=null;
}
};
StageSplitterBinding.prototype.onDragStart=function(_ee2){
var _ee3=top.app.bindingMap.stagesplittercover;
var _ee4=this._containingSplitBoxBinding.getOrient();
switch(_ee4){
case SplitBoxBinding.ORIENT_HORIZONTAL:
_ee3.bindingElement.style.cursor="e-resize";
break;
case SplitBoxBinding.ORIENT_VERTICAL:
_ee3.bindingElement.style.cursor="n-resize";
break;
}
_ee3.show();
var body=top.app.bindingMap.stagesplitterbody;
body.setPosition(this.getPosition());
body.setDimension(this.getDimension());
body.setOrient(_ee4);
body.show();
this.isDragging=true;
};
StageSplitterBinding.prototype.onDrag=function(diff){
this._updateSplitterBodyPosition(this.getEvaluatedDiff(diff));
};
StageSplitterBinding.prototype.onDragStop=function(diff){
this._updateSplitterBodyPosition(this.getEvaluatedDiff(diff));
top.app.bindingMap.stagesplitterbody.hide();
top.app.bindingMap.stagesplittercover.hide();
this.isDragging=false;
this.offset=this._containingSplitBoxBinding.isHorizontalOrient()?diff.x:diff.y;
this.dispatchAction(SplitterBinding.ACTION_DRAGGED);
};
StageSplitterBinding.prototype._updateSplitterBodyPosition=function(diff){
var pos=this.getPosition();
pos.x+=diff.x;
pos.y+=diff.y;
app.bindingMap.stagesplitterbody.setPosition(pos);
};
StageSplitterBinding.prototype.getPosition=function(){
return DOMUtil.getUniversalPosition(this.bindingElement);
};
StageSplitterBinding.prototype.getDimension=function(){
return new Dimension(this.bindingElement.offsetWidth,this.bindingElement.offsetHeight);
};
StageSplitterBodyBinding.prototype=new Binding;
StageSplitterBodyBinding.prototype.constructor=StageSplitterBodyBinding;
StageSplitterBodyBinding.superclass=Binding.prototype;
function StageSplitterBodyBinding(){
this.logger=SystemLogger.getLogger("StageSplitterBodyBinding");
this._orient=null;
}
StageSplitterBodyBinding.prototype.toString=function(){
return "[StageSplitterBodyBinding]";
};
StageSplitterBodyBinding.prototype.setOrient=function(_eea){
this._orient=_eea;
this.attachClassName(_eea);
};
StageSplitterBodyBinding.prototype.setPosition=function(pos){
var _eec=true;
var _eed=true;
switch(this._orient){
case SplitBoxBinding.ORIENT_HORIZONTAL:
_eed=false;
break;
case SplitBoxBinding.ORIENT_VERTICAL:
_eec=false;
break;
}
if(_eec){
this.bindingElement.style.left=pos.x+"px";
}
if(_eed){
this.bindingElement.style.top=pos.y+"px";
}
};
StageSplitterBodyBinding.prototype.setDimension=function(dim){
this.bindingElement.style.width=dim.w+"px";
this.bindingElement.style.height=dim.h+"px";
};
StageSplitterBodyBinding.prototype.show=function(){
this.bindingElement.style.display="block";
};
StageSplitterBodyBinding.prototype.hide=function(){
this.bindingElement.style.display="none";
this.detachClassName(SplitBoxBinding.ORIENT_HORIZONTAL);
this.detachClassName(SplitBoxBinding.ORIENT_VERTICAL);
this._orient=null;
};
StageBoxAbstraction.ACTION_HIDDENSTUFF_UPDATED="hidden stagebox stuff updated";
function StageBoxAbstraction(){
this.isMaximizePrepared=false;
this.isMaximizedForReal=null;
this.isMinimizedForReal=null;
this.isHiddenForReal=null;
}
StageBoxAbstraction.onBindingRegister=function(){
this.addActionListener(ControlBoxBinding.ACTION_MAXIMIZE);
this.addActionListener(ControlBoxBinding.ACTION_MINIMIZE);
this.addActionListener(ControlBoxBinding.ACTION_NORMALIZE);
this.addActionListener(TabBoxBinding.ACTION_UPDATED);
};
StageBoxAbstraction.handleAction=function(_eef){
switch(_eef.type){
case ControlBoxBinding.ACTION_MAXIMIZE:
this.isMaximizePrepared=true;
break;
case ControlBoxBinding.ACTION_MINIMIZE:
this.isMinimizedForReal=true;
break;
case ControlBoxBinding.ACTION_NORMALIZE:
this.isMaximizePrepared=false;
this.isMinimizedForReal=null;
break;
case TabBoxBinding.ACTION_UPDATED:
if(_eef.target instanceof DockBinding){
if(this.isHiddenForReal){
this.dispatchAction(StageBoxAbstraction.ACTION_HIDDENSTUFF_UPDATED);
}else{
if(this.isMinimizedForReal){
this.normalize();
}
}
}
_eef.consume();
break;
}
};
StageBoxAbstraction.handleMaximization=function(){
if(this.isMaximizePrepared==true){
this.isMaximizedForReal=true;
this.isHiddenForReal=false;
this.isFlexible=false;
if(Client.isMozilla==true){
var _ef0=this.bindingElement.style;
_ef0.position="absolute";
_ef0.width="100%";
_ef0.height="100%";
_ef0.top="0";
_ef0.left="0";
}else{
this.attachClassName("maximized");
if(this instanceof StageSplitPanelBinding){
StageBoxAbstraction._emulateBasicCSS(this,true);
}
}
}else{
this.isMaximizedForReal=false;
this.isHiddenForReal=true;
if(this instanceof StageSplitPanelBinding){
this.invisibilize(true);
}
}
};
StageBoxAbstraction.handleUnMaximization=function(){
if(this.isMaximizedForReal==true){
this.isFlexible=true;
if(Client.isMozilla==true){
var _ef1=this.bindingElement.style;
_ef1.position="relative";
_ef1.width="auto";
_ef1.height="auto";
_ef1.top="auto";
_ef1.left="auto";
}else{
this.detachClassName("maximized");
if(this instanceof StageSplitPanelBinding){
StageBoxAbstraction._emulateBasicCSS(this,false);
}
}
}else{
if(this instanceof StageSplitPanelBinding){
this.invisibilize(false);
}
}
this.isMaximizePrepared=false;
this.isMaximizedForReal=null;
this.isHiddenForReal=null;
};
StageBoxAbstraction._emulateBasicCSS=function(_ef2,_ef3){
var _ef4=_ef2.bindingElement.style;
var _ef5=_ef2.bindingElement.parentNode;
var box=_ef2._containingSplitBoxBinding;
if(Client.isExplorer==true){
if(_ef3){
_ef2._unmodifiedFlexMethod=_ef2.flex;
_ef2.flex=function(){
_ef4.width=_ef5.offsetWidth+"px";
_ef4.height=_ef5.offsetHeight+"px";
};
}else{
_ef4.width="100%";
_ef4.height="100%";
if(!box.isHorizontalOrient()){
setTimeout(function(){
_ef4.width="auto";
_ef4.height="auto";
box.reflex(true);
},0);
}
_ef2.flex=_ef2._unmodifiedFlexMethod;
_ef2._unmodifiedFlexMethod=null;
}
}
};
function StageBoxHandlerAbstraction(){
this.isSubPanelMaximized=false;
}
StageBoxHandlerAbstraction.onBindingRegister=function(){
this.addActionListener(ControlBoxBinding.ACTION_MAXIMIZE,this);
this.addActionListener(ControlBoxBinding.ACTION_NORMALIZE,this);
this.addActionListener(StageBoxAbstraction.ACTION_HIDDENSTUFF_UPDATED,this);
this.addActionListener(StageSplitPanelBinding.ACTION_LAYOUTUPDATE,this);
};
StageBoxHandlerAbstraction.handleAction=function(_ef7){
var _ef8=_ef7.target;
switch(_ef7.type){
case ControlBoxBinding.ACTION_MAXIMIZE:
case ControlBoxBinding.ACTION_NORMALIZE:
if(_ef8 instanceof StageSplitPanelBinding){
StageBoxHandlerAbstraction.handleControlBoxAction.call(this,_ef7);
_ef7.consume();
}
break;
case StageBoxAbstraction.ACTION_HIDDENSTUFF_UPDATED:
if(this.isSubPanelMaximized){
this.iterateContainedStageBoxBindings(StageCrawler.MODE_UNMAXIMIZE);
this.isSubPanelMaximized=false;
}
_ef7.consume();
break;
case StageSplitPanelBinding.ACTION_LAYOUTUPDATE:
break;
}
};
StageBoxHandlerAbstraction.handleControlBoxAction=function(_ef9){
var mode=null;
switch(_ef9.type){
case ControlBoxBinding.ACTION_MAXIMIZE:
if(!this.isSubPanelMaximized){
mode=StageCrawler.MODE_MAXIMIZE;
this.isSubPanelMaximized=true;
}
break;
case ControlBoxBinding.ACTION_NORMALIZE:
if(this.isSubPanelMaximized){
mode=StageCrawler.MODE_UNMAXIMIZE;
this.isSubPanelMaximized=false;
}
break;
}
if(mode!=null){
this.iterateContainedStageBoxBindings(mode);
}
};
StageMenuBarBinding.prototype=new MenuBarBinding;
StageMenuBarBinding.prototype.constructor=StageMenuBarBinding;
StageMenuBarBinding.superclass=MenuBarBinding.prototype;
function StageMenuBarBinding(){
this.logger=SystemLogger.getLogger("StageMenuBarBinding");
this._rootNode=null;
}
StageMenuBarBinding.prototype.toString=function(){
return "[StageMenuBarBinding]";
};
StageMenuBarBinding.prototype.onBindingAttach=function(){
StageMenuBarBinding.superclass.onBindingAttach.call(this);
if(System.hasActivePerspectives){
this.addActionListener(MenuItemBinding.ACTION_COMMAND);
}else{
Binding.prototype.hide.call(this);
}
};
StageMenuBarBinding.prototype.handleAction=function(_efb){
StageMenuBarBinding.superclass.handleAction.call(this,_efb);
switch(_efb.type){
case MenuItemBinding.ACTION_COMMAND:
var _efc=_efb.target.associatedSystemAction;
if(Application.isLoggedIn){
if(!this._rootNode){
this._rootNode=System.getRootNode();
}
if(_efc){
SystemAction.invoke(_efc,this._rootNode);
}
}
_efb.consume();
break;
}
};
StageViewMenuItemBinding.prototype=new MenuItemBinding;
StageViewMenuItemBinding.prototype.constructor=StageViewMenuItemBinding;
StageViewMenuItemBinding.superclass=MenuItemBinding.prototype;
function StageViewMenuItemBinding(){
this.logger=SystemLogger.getLogger("StageViewMenuItemBinding");
this._handle=null;
}
StageViewMenuItemBinding.prototype.toString=function(){
return "[StageViewMenuItemBinding]";
};
StageViewMenuItemBinding.prototype.onBindingAttach=function(){
StageViewMenuItemBinding.superclass.onBindingAttach.call(this);
if(this.type==MenuItemBinding.TYPE_CHECKBOX){
this.subscribe(BroadcastMessages.VIEW_OPENED);
this.subscribe(BroadcastMessages.VIEW_CLOSED);
this.subscribe(BroadcastMessages.STAGE_INITIALIZED);
}
};
StageViewMenuItemBinding.prototype.buildDOMContent=function(){
StageViewMenuItemBinding.superclass.buildDOMContent.call(this);
var _efd=this.getProperty("handle");
if(_efd){
this._handle=_efd;
if(StageBinding.isViewOpen(_efd)){
if(this.type==MenuItemBinding.TYPE_CHECKBOX){
this.check(true);
}
}
this.oncommand=function(){
var self=this;
Application.lock(self);
setTimeout(function(){
StageBinding.handleViewPresentation(_efd);
Application.unlock(self);
},Client.hasTransitions?Animation.DEFAULT_TIME:0);
};
}else{
throw new Error("StageViewMenuItemBinding: missing handle");
}
};
StageViewMenuItemBinding.prototype.setHandle=function(_eff){
this.setProperty("handle",_eff);
};
StageViewMenuItemBinding.prototype.handleBroadcast=function(_f00,arg){
StageViewMenuItemBinding.superclass.handleBroadcast.call(this,_f00,arg);
if(this.type==MenuItemBinding.TYPE_CHECKBOX){
switch(_f00){
case BroadcastMessages.STAGE_INITIALIZED:
if(this.isChecked){
this.fireCommand();
}
break;
case BroadcastMessages.VIEW_OPENED:
if(arg==this._handle){
this.check(true);
}
break;
case BroadcastMessages.VIEW_CLOSED:
if(arg==this._handle){
this.uncheck(true);
}
break;
}
}
};
StageViewMenuItemBinding.newInstance=function(_f02){
var _f03=DOMUtil.createElementNS(Constants.NS_UI,"ui:menuitem",_f02);
UserInterface.registerBinding(_f03,StageViewMenuItemBinding);
return UserInterface.getBinding(_f03);
};
StageStatusBarBinding.prototype=new ToolBarBinding;
StageStatusBarBinding.prototype.constructor=StageStatusBarBinding;
StageStatusBarBinding.superclass=ToolBarBinding.prototype;
function StageStatusBarBinding(){
this.logger=SystemLogger.getLogger("StageStatusBarBinding");
this._label=null;
}
StageStatusBarBinding.prototype.toString=function(){
return "[StageStatusBarBinding]";
};
StageStatusBarBinding.prototype.onBindingInitialize=function(){
this._label=this.bindingWindow.bindingMap.statusbarlabel;
StatusBar.initialize(this);
StageStatusBarBinding.superclass.onBindingInitialize.call(this);
};
StageStatusBarBinding.prototype.setLabel=function(_f04){
this._label.setLabel(_f04);
};
StageStatusBarBinding.prototype.setImage=function(_f05){
this._label.setImage(_f05);
};
StageStatusBarBinding.prototype.clear=function(){
this._label.setLabel(null);
this._label.setImage(false);
};
StageStatusBarBinding.prototype.startFadeOut=function(_f06){
this.logger.debug("START FADEOUT");
};
ExplorerBinding.prototype=new FlexBoxBinding;
ExplorerBinding.prototype.constructor=ExplorerBinding;
ExplorerBinding.superclass=FlexBoxBinding.prototype;
ExplorerBinding.ACTION_INITIALIZED="explorer initialized";
ExplorerBinding.ACTION_DECK_LOADED="explorer deck loaded";
ExplorerBinding.PERSPECTIVE_CONTENT="Content";
ExplorerBinding.PERSPECTIVE_MEDIA="Media";
ExplorerBinding.PERSPECTIVE_DATA="Datas";
ExplorerBinding.PERSPECTIVE_DESIGN="Design";
ExplorerBinding.PERSPECTIVE_FUNCTIONS="Functions";
ExplorerBinding.PERSPECTIVE_USERS="Users";
ExplorerBinding.PERSPECTIVE_SYSTEM="System";
ExplorerBinding.bindingInstance=null;
ExplorerBinding.getFocusedTreeNodeBindings=function(){
var _f07=ExplorerBinding.bindingInstance.getSelectedDeckBinding();
var _f08=_f07.getAssociatedView();
var _f09=_f08.getContentWindow().bindingMap.tree;
return _f09.getFocusedTreeNodeBindings();
};
function ExplorerBinding(){
this.logger=SystemLogger.getLogger("ExplorerBinding");
this._decksBinding=null;
this._menuBinding=null;
this._splitterBinding=null;
this._dragStart=0;
this._dragSlot=0;
this._dragHeight=0;
return this;
}
ExplorerBinding.prototype.toString=function(){
return "[ExplorerBinding]";
};
ExplorerBinding.prototype.onBindingAttach=function(){
ExplorerBinding.superclass.onBindingAttach.call(this);
this.addActionListener(ExplorerMenuBinding.ACTION_SELECTIONCHANGED);
this.addActionListener(ViewBinding.ACTION_LOADED);
this.addActionListener(Binding.ACTION_DRAG);
this._decksBinding=this.addMember(this.getDescendantBindingByLocalName("explorerdecks"));
this._splitterBinding=this.addMember(this.getDescendantBindingByLocalName("explorersplitter"));
this._menuBinding=this.addMember(this.getDescendantBindingByLocalName("explorermenu"));
};
ExplorerBinding.prototype.onBindingInitialize=function(){
ExplorerBinding.bindingInstance=this;
ExplorerBinding.superclass.onBindingInitialize.call(this);
this.dispatchAction(ExplorerBinding.ACTION_INITIALIZED);
};
ExplorerBinding.prototype.handleAction=function(_f0a){
ExplorerBinding.superclass.handleAction.call(this,_f0a);
var _f0b=_f0a.target;
switch(_f0a.type){
case ExplorerMenuBinding.ACTION_SELECTIONCHANGED:
this._decksBinding.setSelectionByHandle(this._menuBinding.getSelectionHandle());
var tag=this._menuBinding.getSelectionTag();
EventBroadcaster.broadcast(BroadcastMessages.PERSPECTIVE_CHANGED,tag);
break;
case ViewBinding.ACTION_LOADED:
this.dispatchAction(ExplorerBinding.ACTION_DECK_LOADED);
_f0a.consume();
break;
case Binding.ACTION_DRAG:
if(_f0b instanceof ExplorerSplitterBinding){
_f0b.dragger.registerHandler(this);
}
_f0a.consume();
}
};
ExplorerBinding.prototype.setSelectionByHandle=function(_f0d){
this._menuBinding.setSelectionByHandle(_f0d);
};
ExplorerBinding.prototype.setSelectionDefault=function(){
this._menuBinding.setSelectionDefault();
};
ExplorerBinding.prototype.getSelectedDeckBinding=function(){
return this._decksBinding.getSelectedDeckBinding();
};
ExplorerBinding.prototype.mountDefinition=function(_f0e){
if(_f0e instanceof SystemViewDefinition){
this._decksBinding.mountDefinition(_f0e);
this._menuBinding.mountDefinition(_f0e);
}
};
ExplorerBinding.prototype.onDragStart=function(_f0f){
var _f10=this._menuBinding.getDescendantBindingsByLocalName("explorertoolbarbutton");
if(_f10.hasEntries()){
var _f11=_f10.getFirst();
this._dragStart=_f11.boxObject.getLocalPosition().y;
this._dragSlot=0;
if(this._dragHeight==0){
this._dragHeight=_f11.boxObject.getDimension().h;
}
this.bindingWindow.bindingMap.explorercover.show();
}
};
ExplorerBinding.prototype.onDrag=function(diff){
var y=this._dragStart+diff.y;
if(y>this._dragStart+this._dragSlot+this._dragHeight){
if(this._menuBinding.showLess()){
this._decksBinding.expandBy(this._dragHeight);
this._dragSlot+=this._dragHeight;
}
}
if(y<this._dragStart+this._dragSlot){
if(this._menuBinding.showMore()){
this._decksBinding.expandBy(-this._dragHeight);
this._dragSlot-=this._dragHeight;
}
}
};
ExplorerBinding.prototype.onDragStop=function(diff){
this.bindingWindow.bindingMap.explorercover.hide();
};
ExplorerDecksBinding.prototype=new DecksBinding;
ExplorerDecksBinding.prototype.constructor=ExplorerDecksBinding;
ExplorerDecksBinding.superclass=DecksBinding.prototype;
ExplorerDecksBinding.NODENAME_DECK="explorerdeck";
function ExplorerDecksBinding(){
this.logger=SystemLogger.getLogger("ExplorerDecksBinding");
this._decks={};
return this;
}
ExplorerDecksBinding.prototype.onBindingAttach=function(){
ExplorerDecksBinding.superclass.onBindingAttach.call(this);
this.addActionListener(PageBinding.ACTION_ATTACHED);
};
ExplorerDecksBinding.prototype.toString=function(){
return "[ExplorerDecksBinding]";
};
ExplorerDecksBinding.prototype.mountDefinition=function(_f15){
if(_f15 instanceof SystemViewDefinition){
var _f16=ViewBinding.newInstance(this.bindingDocument);
_f16.setType(ViewBinding.TYPE_EXPLORERVIEW);
_f16.setDefinition(_f15);
var _f17=ExplorerDeckBinding.newInstance(this.bindingDocument);
_f17.setAssociatedView(_f16);
this._decks[_f15.handle]=_f17;
_f17.add(_f16);
this.add(_f17);
function attach(){
_f17.attach();
_f16.attach();
}
if(Client.isWebKit){
setTimeout(function(){
attach();
},0);
}else{
attach();
}
}
};
ExplorerDecksBinding.prototype.setSelectionByHandle=function(_f18){
var _f19=this._decks[_f18];
this.select(_f19);
};
DecksBinding.prototype.expandBy=function(_f1a){
var deck=this.getSelectedDeckBinding();
if(deck){
var _f1c=this.bindingElement.offsetHeight+_f1a;
var view=deck.getAssociatedView();
this.bindingElement.style.height=_f1c+"px";
this.reflex(true);
}
};
ExplorerDecksBinding.newInstance=function(_f1e){
var _f1f=DOMUtil.createElementNS(Constants.NS_UI,"ui:explorerdecks",_f1e);
return UserInterface.registerBinding(_f1f,ExplorerDecksBinding);
};
ExplorerDeckBinding.prototype=new DeckBinding;
ExplorerDeckBinding.prototype.constructor=ExplorerDeckBinding;
ExplorerDeckBinding.superclass=DeckBinding.prototype;
ExplorerDeckBinding.NODENAME_DECKS="explorerdecks";
function ExplorerDeckBinding(){
this.logger=SystemLogger.getLogger("ExplorerDeckBinding");
this._entityToken=null;
this._isRefreshRequired=false;
this._viewBinding=null;
this._isExplorerDeckBindingInitialized=false;
return this;
}
ExplorerDeckBinding.prototype.toString=function(){
return "[ExplorerDeckBinding]";
};
ExplorerDeckBinding.prototype.onBindingRegister=function(){
ExplorerDeckBinding.superclass.onBindingRegister.call(this);
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHALL);
};
ExplorerDeckBinding.prototype.setAssociatedView=function(_f20){
this._viewBinding=_f20;
};
ExplorerDeckBinding.prototype.getAssociatedView=function(){
return this._viewBinding;
};
ExplorerDeckBinding.prototype.select=function(){
if(!this._isExplorerDeckBindingInitialized){
Application.lock(this);
var _f21=StringBundle.getString("ui","Website.App.StatusBar.Loading");
var _f22=this._viewBinding.getDefinition().label;
StatusBar.busy(_f21,[_f22]);
this.bindingWindow.bindingMap.explorerdeckscover.show();
this.addActionListener(PageBinding.ACTION_INITIALIZED);
this._viewBinding.initialize();
}
if(this._isRefreshRequired==true){
this._refreshTree();
this._isRefreshRequired=false;
}else{
ExplorerDeckBinding.superclass.select.call(this);
this.dispatchAction(DockTabBinding.ACTION_UPDATE_VISUAL);
}
};
ExplorerDeckBinding.prototype.handleAction=function(_f23){
ExplorerDeckBinding.superclass.handleAction.call(this,_f23);
var _f24=_f23.target;
switch(_f23.type){
case PageBinding.ACTION_INITIALIZED:
if(_f24 instanceof SystemPageBinding){
this._isExplorerDeckBindingInitialized=true;
this._entityToken=_f24.node.getEntityToken();
this.removeActionListener(PageBinding.ACTION_INITIALIZED);
this.bindingWindow.bindingMap.explorerdeckscover.hide();
this.dispatchAction(DockTabBinding.ACTION_UPDATE_VISUAL);
Application.unlock(this);
if(StatusBar.state==StatusBar.BUSY){
StatusBar.clear();
}
}
break;
}
};
ExplorerDeckBinding.prototype.handleBroadcast=function(_f25,arg){
ExplorerDeckBinding.superclass.handleBroadcast.call(this,_f25,arg);
switch(_f25){
case BroadcastMessages.SYSTEMTREEBINDING_REFRESHALL:
if(this.isSelected==true){
this._refreshTree();
}else{
if(this._entityToken!=null){
this._isRefreshRequired=true;
}
}
break;
case BroadcastMessages.SYSTEMTREEBINDING_REFRESHED:
this.unsubscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED);
this.select();
break;
}
};
ExplorerDeckBinding.prototype._refreshTree=function(){
if(this._entityToken!=null){
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED);
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESH,this._entityToken);
}
};
ExplorerDeckBinding.prototype._collapseTree=function(){
alert("ExplorerDeckBinding: collapse tree!");
};
ExplorerDeckBinding.prototype.getLabel=function(){
var _f27=null;
if(this._isExplorerDeckBindingInitialized){
_f27=this._viewBinding.getDefinition().label;
}else{
_f27=DockTabBinding.LABEL_TABLOADING;
}
return _f27;
};
ExplorerDeckBinding.prototype.getImage=function(){
var _f28=null;
if(this._isExplorerDeckBindingInitialized){
_f28=this._viewBinding.getDefinition().image;
}else{
_f28=DockTabBinding.IMG_TABLOADING;
}
return _f28;
};
ExplorerDeckBinding.prototype.getToolTip=function(){
var _f29=null;
if(this._isExplorerDeckBindingInitialized){
_f29=this._viewBinding.getDefinition().toolTip;
}
return _f29;
};
ExplorerDeckBinding.newInstance=function(_f2a){
var _f2b=DOMUtil.createElementNS(Constants.NS_UI,"ui:explorerdeck",_f2a);
return UserInterface.registerBinding(_f2b,ExplorerDeckBinding);
};
ExplorerSplitterBinding.prototype=new Binding;
ExplorerSplitterBinding.prototype.constructor=ExplorerSplitterBinding;
ExplorerSplitterBinding.superclass=Binding.prototype;
function ExplorerSplitterBinding(){
this.logger=SystemLogger.getLogger("ExplorerSplitterBinding");
this.isDraggable=true;
return this;
}
ExplorerSplitterBinding.prototype.toString=function(){
return "[ExplorerSplitterBinding]";
};
ExplorerMenuBinding.prototype=new Binding;
ExplorerMenuBinding.prototype.constructor=ExplorerMenuBinding;
ExplorerMenuBinding.superclass=Binding.prototype;
ExplorerMenuBinding.ACTION_SELECTIONCHANGED="explorermenu selectionchanged";
function ExplorerMenuBinding(){
this.logger=SystemLogger.getLogger("ExplorerMenuBinding");
this._maxButtons=new Map();
this._maxList=new List();
this._minButtons=new Map();
this._minList=new List();
this._index=-1;
this._maxGroup=null;
this._minGroup=null;
this._selectedHandle=null;
this._selectedTag=null;
}
ExplorerMenuBinding.prototype.toString=function(){
return "[ExplorerMenuBinding]";
};
ExplorerMenuBinding.prototype.onBindingRegister=function(){
ExplorerMenuBinding.superclass.onBindingRegister.call(this);
this.addActionListener(RadioGroupBinding.ACTION_SELECTIONCHANGED,this);
};
ExplorerMenuBinding.prototype.onBindingAttach=function(){
ExplorerMenuBinding.superclass.onBindingAttach.call(this);
this.addMember(this.getChildBindingByLocalName("explorertoolbar"));
this.addMember(this.getChildBindingByLocalName("toolbar"));
};
ExplorerMenuBinding.prototype.onMemberInitialize=function(_f2c){
switch(_f2c.constructor){
case ExplorerToolBarBinding:
this._maxGroup=_f2c.getToolBarGroupByIndex(0);
break;
case ToolBarBinding:
this._minGroup=_f2c.getToolBarGroupByIndex(0);
break;
}
ExplorerMenuBinding.superclass.onMemberInitialize.call(this,_f2c);
};
ExplorerMenuBinding.prototype.mountDefinition=function(_f2d){
this._maxButtons.set(_f2d.handle,this._mountMaxButton(_f2d));
this._minButtons.set(_f2d.handle,this._mountMinButton(_f2d));
this._index++;
};
ExplorerMenuBinding.prototype._mountMaxButton=function(_f2e){
var _f2f=ExplorerToolBarButtonBinding.newInstance(this.bindingDocument,ExplorerToolBarButtonBinding.TYPE_LARGE);
_f2f.setLabel(_f2e.label);
_f2f.setToolTip(_f2e.toolTip);
_f2f.handle=_f2e.handle;
_f2f.node=_f2e.node;
this._maxGroup.add(_f2f);
this._maxList.add(_f2f);
_f2f.attach();
return _f2f;
};
ExplorerMenuBinding.prototype._mountMinButton=function(_f30){
var _f31=ExplorerToolBarButtonBinding.newInstance(this.bindingDocument,ExplorerToolBarButtonBinding.TYPE_NORMAL);
_f31.setLabel(_f30.label);
_f31.setToolTip(_f30.label);
_f31.handle=_f30.handle;
_f31.node=_f30.node;
this._minGroup.addFirst(_f31);
this._minList.add(_f31);
_f31.attach();
_f31.hide();
return _f31;
};
ExplorerMenuBinding.prototype.handleAction=function(_f32){
ExplorerMenuBinding.superclass.handleAction.call(this,_f32);
switch(_f32.type){
case RadioGroupBinding.ACTION_SELECTIONCHANGED:
var _f33=_f32.target;
var _f34=_f33.getCheckedButtonBinding();
var _f35=_f34.handle;
switch(_f33){
case this._maxGroup:
this._minGroup.setCheckedButtonBinding(this._minButtons.get(_f35),true);
break;
case this._minGroup:
this._maxGroup.setCheckedButtonBinding(this._maxButtons.get(_f35),true);
break;
}
this._selectedHandle=_f35;
this._selectedTag=_f34.node.getTag();
this.dispatchAction(ExplorerMenuBinding.ACTION_SELECTIONCHANGED);
_f32.consume();
break;
}
};
ExplorerMenuBinding.prototype.setSelectionByHandle=function(_f36){
var _f37=this._maxButtons.get(_f36);
if(_f37){
_f37.check();
}else{
this.setSelectionDefault();
}
};
ExplorerMenuBinding.prototype.getSelectionHandle=function(){
return this._selectedHandle;
};
ExplorerMenuBinding.prototype.getSelectionTag=function(){
return this._selectedTag;
};
ExplorerMenuBinding.prototype.setSelectionDefault=function(){
if(this._maxList.hasEntries()){
this._maxList.getFirst().check();
}
};
ExplorerMenuBinding.prototype.showMore=function(){
var _f38=false;
var max=this._maxList.getLength()-1;
if(!this._maxList.get(max).isVisible){
this._index++;
this._maxList.get(this._index).show();
this._minList.get(this._index).hide();
_f38=true;
}
return _f38;
};
ExplorerMenuBinding.prototype.showLess=function(){
var _f3a=false;
if(this._maxList.get(0).isVisible){
this._maxList.get(this._index).hide();
this._minList.get(this._index).show();
this._index--;
_f3a=true;
}
return _f3a;
};
ExplorerToolBarBinding.prototype=new ToolBarBinding;
ExplorerToolBarBinding.prototype.constructor=ExplorerToolBarBinding;
ExplorerToolBarBinding.superclass=ToolBarBinding.prototype;
function ExplorerToolBarBinding(){
this.logger=SystemLogger.getLogger("ExplorerToolBarBinding");
this._hasDefaultContent=false;
}
ExplorerToolBarBinding.prototype.toString=function(){
return "[ExplorerToolBarBinding]";
};
ExplorerToolBarBinding.prototype.onBindingRegister=function(){
ExplorerToolBarBinding.superclass.onBindingRegister.call(this);
this.setImageSize(ToolBarBinding.IMAGESIZE_LARGE);
};
ExplorerToolBarBinding.newInstance=function(_f3b){
var _f3c=DOMUtil.createElementNS(Constants.NS_UI,"ui:explorertoolbar",_f3b);
return UserInterface.registerBinding(_f3c,ExplorerToolBarBinding);
};
ExplorerToolBarButtonBinding.prototype=new ToolBarButtonBinding;
ExplorerToolBarButtonBinding.prototype.constructor=ExplorerToolBarButtonBinding;
ExplorerToolBarButtonBinding.superclass=ToolBarButtonBinding.prototype;
ExplorerToolBarButtonBinding.TYPE_NORMAL="normal";
ExplorerToolBarButtonBinding.TYPE_LARGE="large";
function ExplorerToolBarButtonBinding(){
this.logger=SystemLogger.getLogger("ExplorerToolBarButtonBinding");
this.isRadioButton=true;
this.explorerToolBarButtonType=null;
this.node=null;
}
ExplorerToolBarButtonBinding.prototype.toString=function(){
return "[ExplorerToolBarButtonBinding]";
};
ExplorerToolBarButtonBinding.prototype.onBindingAttach=function(){
var _f3d=this.explorerToolBarButtonType==ExplorerToolBarButtonBinding.TYPE_LARGE;
var _f3e=_f3d?ToolBarBinding.IMAGESIZE_LARGE:ToolBarBinding.IMAGESIZE_NORMAL;
this.imageProfile=this.node.getImageProfile(_f3e);
ExplorerToolBarButtonBinding.superclass.onBindingAttach.call(this);
};
ExplorerToolBarButtonBinding.newInstance=function(_f3f,_f40){
var _f41=(_f40==ExplorerToolBarButtonBinding.TYPE_LARGE?"ui:explorertoolbarbutton":"ui:toolbarbutton");
var _f42=DOMUtil.createElementNS(Constants.NS_UI,_f41,_f3f);
var _f43=UserInterface.registerBinding(_f42,ExplorerToolBarButtonBinding);
_f43.explorerToolBarButtonType=_f40;
return _f43;
};
EditorBinding.prototype=new WindowBinding;
EditorBinding.prototype.constructor=EditorBinding;
EditorBinding.superclass=WindowBinding.prototype;
EditorBinding.isActive=false;
EditorBinding.ACTION_ATTACHED=null;
EditorBinding.URL_DIALOG_MOZ_CONFIGURE="${root}/content/dialogs/wysiwygeditor/mozsecuritynote/mozsecuritynote.aspx";
EditorBinding.ABSURD_NUMBER=-999999999;
EditorBinding.LINE_BREAK_ENTITY_HACK="C1.LINE.BREAK.ENTITY.HACK";
EditorBinding._components=new Map();
EditorBinding._editors=new Map();
EditorBinding.registerComponent=function(_f44,_f45){
var _f46=EditorBinding._components;
var _f47=EditorBinding._editors;
var key=_f45.key;
var _f49=Interfaces.isImplemented(IWysiwygEditorComponent,_f44);
if(!_f49){
_f49=Interfaces.isImplemented(ISourceEditorComponent,_f44);
}
if(_f49){
if(_f47.has(key)){
_f47.get(key).initializeEditorComponent(_f44);
}else{
if(!_f46.has(key)){
_f46.set(key,new List());
}
_f46.get(key).add(_f44);
}
}else{
throw "Editor component interface not implemented: "+_f44;
}
};
EditorBinding.claimComponents=function(_f4a,_f4b){
var _f4c=EditorBinding._components;
var _f4d=EditorBinding._editors;
var key=_f4b.key;
_f4d.set(key,_f4a);
var list=null;
if(_f4c.has(key)){
list=_f4c.get(key).copy();
_f4c.del(key);
}
return list;
};
function EditorBinding(){
this.logger=SystemLogger.getLogger("EditorBinding");
this.action_initialized=null;
this.url_default=null;
this._popupBinding=null;
this._startContent=null;
this._explorerBookmark=null;
this.isDirty=false;
this.isDialogMode=false;
this.isFocusable=true;
this.isFocused=false;
this._isActivated=false;
this._Binding=null;
this._url=null;
this.isBlockingActions=true;
this._isFinalized=false;
this._bookmark=null;
this._checksum=null;
this.crawlerFilters=new List([FocusCrawler.ID,FitnessCrawler.ID]);
}
EditorBinding.prototype.toString=function(){
return "[EditorBinding]";
};
EditorBinding.prototype.onBindingRegister=function(){
EditorBinding.superclass.onBindingRegister.call(this);
this._url=this.url_default;
this._coverBinding=this.add(CoverBinding.newInstance(this.bindingDocument));
};
EditorBinding.prototype.onBindingAttach=function(){
Application.lock(this);
if(this.hasCallBackID()){
Binding.dotnetify(this);
}
this._setup();
this.setURL(this._url);
this.addActionListener(Binding.ACTION_DIRTY);
EditorBinding.superclass.onBindingAttach.call(this);
};
EditorBinding.prototype._setup=function(){
var name=this.getProperty("name");
if(name==null||name==""){
name="generated"+KeyMaster.getUniqueKey();
}
this._registerWithDataManager(name);
var _f51=this.getProperty("value");
if(_f51!=null){
_f51=decodeURIComponent(_f51);
this._startContent=_f51;
}
};
EditorBinding.prototype.onBindingDispose=function(){
EditorBinding.superclass.onBindingDispose.call(this);
var name=this.getProperty("name");
if(name!=null){
var _f53=this.bindingWindow.DataManager;
_f53.unRegisterDataBinding(name);
}
};
EditorBinding.prototype._initialize=function(){
this.subscribe(BroadcastMessages.APPLICATION_BLURRED);
this.subscribe(BroadcastMessages.MOUSEEVENT_MOUSEUP);
if(this._startContent==null){
this._startContent=new String("");
}
this.addEditorEvents();
var self=this;
setTimeout(function(){
self._finalize();
},0);
};
EditorBinding.prototype._finalize=function(){
this.resetUndoRedo();
this._popupBinding=this.getEditorPopupBinding();
Application.unlock(this);
this._isFinalized=true;
this.dispatchAction(this.action_initialized);
};
EditorBinding.prototype.initializeEditorComponents=function(_f55){
var _f56=EditorBinding.claimComponents(this,_f55);
if(_f56!=null){
while(_f56.hasNext()){
this.initializeEditorComponent(_f56.getNext());
}
}
};
EditorBinding.prototype._registerWithDataManager=function(name){
if(name&&name!=""){
var _f58=this.bindingWindow.DataManager;
if(_f58.getDataBinding(name)){
_f58.unRegisterDataBinding(name);
}
_f58.registerDataBinding(name,this);
}
};
EditorBinding.prototype.addEditorEvents=function(){
var _f59=this.getEditorDocument();
if(_f59!=null){
Application.framework(_f59);
DOMEvents.addEventListener(_f59,DOMEvents.CONTEXTMENU,this);
DOMEvents.addEventListener(_f59,DOMEvents.KEYPRESS,this);
DOMEvents.addEventListener(_f59,DOMEvents.MOUSEDOWN,this);
DOMEvents.addEventListener(_f59,DOMEvents.MOUSEMOVE,this);
}
DOMEvents.addEventListener(this.bindingElement,DOMEvents.MOUSEDOWN,{handleEvent:function(e){
DOMEvents.stopPropagation(e);
DOMEvents.preventDefault(e);
}});
};
EditorBinding.prototype.checkForDirty=function(_f5b){
if(!this.isDirty){
if(_f5b==true){
this.dispatchAction(Binding.ACTION_DIRTY);
this.isDirty=true;
}else{
var self=this;
setTimeout(function(){
self._checkForRealDirty();
},0);
}
}
};
EditorBinding.prototype._checkForRealDirty=function(){
var _f5d=this.getCheckSum();
if(_f5d!=this._checksum){
this.dispatchAction(Binding.ACTION_DIRTY);
this.isDirty=true;
this._checksum=_f5d;
}
};
EditorBinding.prototype.getCheckSum=function(){
var _f5e=null;
if(Binding.exists(this._pageBinding)){
_f5e=this._pageBinding.getCheckSum(this._checksum);
}
return _f5e;
};
EditorBinding.prototype.handleEvent=function(e){
EditorBinding.superclass.handleEvent.call(this,e);
var _f60=DOMEvents.getTarget(e);
switch(e.type){
case DOMEvents.CONTEXTMENU:
DOMEvents.preventDefault(e);
this._popupBinding.editorBinding=this;
this.handleContextMenu(e);
break;
case DOMEvents.KEYPRESS:
this.checkForDirty();
if(!this._isActivated){
this._activateEditor(true);
}
break;
case DOMEvents.MOUSEDOWN:
if(this instanceof BespinEditorBinding){
if(_f60==this._bespinElement){
this.dispatchAction(Binding.ACTION_ACTIVATED);
if(!this._isActivated){
this._activateEditor(true);
}
if(DOMEvents.isRightButton(e)){
DOMEvents.stopPropagation(e);
DOMEvents.preventDefault(e);
}
}
}else{
if(_f60.ownerDocument==this.getEditorDocument()){
if(!this._isActivated){
this._activateEditor(true);
}
}
}
break;
case DOMEvents.MOUSEMOVE:
if(Client.isExplorer){
if(Application.isBlurred){
if(!this._isActivated){
this.getContentWindow().focus();
}
}
}
break;
}
};
EditorBinding.prototype.handleContextMenu=function(e){
this.createBookmark();
this._popupBinding.snapToMouse(e);
};
EditorBinding.prototype.handleBroadcast=function(_f62,arg){
EditorBinding.superclass.handleBroadcast.call(this,_f62,arg);
var _f64=null;
switch(_f62){
case BroadcastMessages.APPLICATION_BLURRED:
if(this._isActivated){
this._activateEditor(false);
}
break;
case BroadcastMessages.MOUSEEVENT_MOUSEUP:
if(!this.isDialogMode){
try{
var _f65=true;
if(arg instanceof Binding){
if(Interfaces.isImplemented(IEditorControlBinding,arg)==true){
if(arg.isEditorControlBinding){
_f65=false;
}
}
}else{
_f64=DOMEvents.getTarget(arg);
if(this instanceof BespinEditorBinding){
if(_f64==this._bespinElement){
_f65=false;
}
}else{
if(_f64&&_f64.ownerDocument==this.getEditorDocument()){
_f65=false;
}
}
}
if(_f65){
if(this._isActivated){
this._activateEditor(false);
}
}
}
catch(exception){
this.unsubscribe(BroadcastMessages.MOUSEEVENT_MOUSEUP);
throw exception;
}
}
break;
}
};
EditorBinding.prototype._activateEditor=function(_f66){
if(_f66!=this._isActivated){
this._isActivated=_f66;
EditorBinding.isActive=_f66;
var _f67=this.getEditorWindow().standardEventHandler;
var _f68=this.getContentWindow().bindingMap.broadcasterIsActive;
if(_f68!=null){
if(_f66){
if(this.hasBookmark()){
this.deleteBookmark();
}
_f68.enable();
if(Client.isExplorer){
this._sanitizeExplorer();
}
this.focus();
_f67.enableNativeKeys(true);
}else{
_f68.disable();
_f67.disableNativeKeys();
this.blur();
}
}else{
throw "Required broadcaster not found";
}
}
};
EditorBinding.prototype._sanitizeExplorer=function(){
if(Client.isExplorer){
var _f69=this.getEditorDocument().selection.createRange();
_f69.select();
}
};
EditorBinding.prototype._sanitizeMozilla=function(){
};
EditorBinding.prototype.hasSelection=function(){
var _f6a=false;
try{
if(!Client.isExplorer){
var _f6b=this.getEditorWindow().getSelection();
if(_f6b!=null){
_f6a=_f6b.toString().length>0;
if(!_f6a){
var _f6c=_f6b.getRangeAt(0);
var frag=_f6c.cloneContents();
var _f6e=this.getEditorDocument().createElement("element");
while(frag.hasChildNodes()){
_f6e.appendChild(frag.firstChild);
}
var img=_f6e.getElementsByTagName("img").item(0);
if(img!=null){
if(!CSSUtil.hasClassName(img,VisualEditorBinding.FUNCTION_CLASSNAME)){
_f6a=true;
}
}
}
}
}else{
var _f6c=this.getEditorDocument().selection.createRange();
_f6a=(_f6c&&_f6c.text)&&_f6c.text.length>0;
}
}
catch(exception){
}
return _f6a;
};
EditorBinding.prototype.isCommandEnabled=function(_f70){
var _f71=true;
switch(_f70){
case "Cut":
case "Copy":
case "Paste":
_f71=this.getEditorDocument().queryCommandEnabled(_f70);
break;
}
return _f71;
};
EditorBinding.prototype.handleCommand=function(cmd,gui,val){
var _f75=false;
this.restoreBookmark();
switch(cmd){
case "Cut":
case "Copy":
case "Paste":
var _f76=null;
if(cmd=="Paste"){
_f76=null;
}else{
_f76=this.hasSelection();
}
try{
this.getEditorDocument().execCommand(cmd,gui,_f76);
}
catch(mozillaSecurityException){
if(Client.isMozilla==true){
Dialog.invokeModal(EditorBinding.URL_DIALOG_MOZ_CONFIGURE);
}else{
throw "Clipboard operation malfunction. Contact your developer.";
}
}
finally{
_f75=true;
}
break;
}
return _f75;
};
EditorBinding.prototype.getButtonForCommand=function(cmd){
var _f78=this.getContentWindow().bindingMap.toolbar;
var _f79=_f78.getButtonForCommand(cmd);
if(!_f79){
throw "No button for command "+cmd;
}
return _f79;
};
EditorBinding.prototype.getName=function(){
return this.getProperty("name");
};
EditorBinding.prototype.dirty=DataBinding.prototype.dirty;
EditorBinding.prototype.clean=function(){
this.isDirty=false;
this._checksum=this.getCheckSum();
};
EditorBinding.prototype.enableDialogMode=function(){
if(!this.isDialogMode){
this.isDialogMode=true;
if(!this.hasBookmark()){
this.createBookmark();
}
var self=this;
setTimeout(function(){
self._activateEditor(false);
},0);
}
};
EditorBinding.prototype.disableDialogMode=function(){
if(this.isDialogMode){
if(this.hasBookmark()){
this.restoreBookmark();
}
var self=this;
setTimeout(function(){
self.isDialogMode=false;
self.blurEditor();
},100);
}
};
EditorBinding.prototype.blurEditor=function(){
var _f7c=this.getContentDocument().getElementById("focusableinput");
if(_f7c!=null){
_f7c.style.display="block";
FocusBinding.focusElement(_f7c);
_f7c.style.display="none";
}else{
throw "Required element not found: focusableinput";
}
};
EditorBinding.prototype.handleAction=function(_f7d){
EditorBinding.superclass.handleAction.call(this,_f7d);
var _f7e=_f7d.target;
var self=this;
var _f80=this.shadowTree.iframe;
switch(_f7d.type){
case Binding.ACTION_DIRTY:
if(_f7d.target!=this){
this.checkForDirty();
}
break;
}
};
EditorBinding.prototype._onPageInitialize=function(_f81){
if(this._pageBinding==null){
this.reflex();
if(this._coverBinding!=null&&this._coverBinding.isVisible){
this._coverBinding.hide();
}
}
EditorBinding.superclass._onPageInitialize.call(this,_f81);
};
EditorBinding.prototype.handleElement=function(_f82){
return true;
};
EditorBinding.prototype.updateElement=function(_f83){
return true;
};
EditorBinding.prototype.focus=DataBinding.prototype.focus;
EditorBinding.prototype.blur=DataBinding.prototype.blur;
EditorBinding.prototype.manifest=function(){
this.shadowTree.dotnetinput.value=encodeURIComponent(this.getValue());
};
EditorBinding.prototype.getEditorWindow=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.getEditorDocument=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.getEditorPopupBinding=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.createBookmark=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.restoreBookmark=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.hasBookmark=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.deleteBookmark=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.resetUndoRedo=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.validate=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.getValue=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.getResult=Binding.ABSTRACT_METHOD;
EditorPopupBinding.prototype=new PopupBinding;
EditorPopupBinding.prototype.constructor=EditorPopupBinding;
EditorPopupBinding.superclass=PopupBinding.prototype;
EditorPopupBinding.CONTENT_TEMPLATE=null;
function EditorPopupBinding(){
this.logger=SystemLogger.getLogger("EditorPopupBinding");
this._isEditorPopupBindingInitialized=false;
this.editorBinding=null;
}
EditorPopupBinding.prototype.toString=function(){
return "[EditorPopupBinding]";
};
EditorPopupBinding.prototype.show=function(){
if(!this._isEditorPopupBindingInitialized){
var self=this;
Application.lock(this);
setTimeout(function(){
self._initialize();
Application.unlock(self);
},0);
}else{
EditorPopupBinding.superclass.show.call(this);
}
};
EditorPopupBinding.prototype._initialize=function(){
if(!this._isEditorPopupBindingInitialized){
this.subTreeFromString(Templates.getTemplateElementText(this.constructor.CONTENT_TEMPLATE));
this._bodyBinding=this.getChildBindingByLocalName("menubody");
this.addActionListener(MenuItemBinding.ACTION_COMMAND,this);
this._indexMenuContent();
this._isEditorPopupBindingInitialized=true;
this._onInitialize();
}
};
EditorPopupBinding.prototype._onInitialize=function(){
this._configure();
this.show();
};
EditorPopupBinding.prototype.configure=function(){
if(this._isEditorPopupBindingInitialized){
this._configure();
}
};
EditorPopupBinding.prototype._configure=Binding.ABSTRACT_METHOD;
EditorPopupBinding.prototype._showMenuGroups=function(rel){
this._menuGroups[rel].each(function(_f86){
_f86.show();
});
};
EditorPopupBinding.prototype._hideMenuGroups=function(rel){
this._menuGroups[rel].each(function(_f88){
_f88.hide();
});
};
EditorPopupBinding.prototype.handleAction=function(_f89){
EditorPopupBinding.superclass.handleAction.call(this,_f89);
var _f8a=_f89.target;
if(_f89.type==MenuItemBinding.ACTION_COMMAND){
this.hide();
var cmd=_f8a.getProperty("cmd");
var gui=_f8a.getProperty("gui");
var val=_f8a.getProperty("val");
this.handleCommand(cmd,gui,val);
}
};
EditorPopupBinding.prototype.handleCommand=Binding.ABSTRACT_METHOD;
EditorClickButtonBinding.prototype=new ClickButtonBinding;
EditorClickButtonBinding.prototype.constructor=EditorClickButtonBinding;
EditorClickButtonBinding.superclass=ClickButtonBinding.prototype;
function EditorClickButtonBinding(){
this.logger=SystemLogger.getLogger("EditorClickButtonBinding");
this._editorBinding=null;
this.isEditorControlBinding=true;
this.isEditorSimpleControl=true;
this.cmd=null;
this.val=null;
this.gui=null;
this._tinyEngine=null;
this._tinyInstance=null;
this._tinyTheme=null;
this._codePressFrame=null;
this._codePressEngine=null;
}
EditorClickButtonBinding.prototype.toString=function(){
return "[EditorClickButtonBinding]";
};
EditorClickButtonBinding.prototype.onBindingAttach=function(){
EditorClickButtonBinding.superclass.onBindingAttach.call(this);
this._setupEditorButton();
};
EditorClickButtonBinding.prototype._setupEditorButton=function(){
this.cmd=this.getProperty("cmd");
this.val=this.getProperty("val");
this.gui=this.getProperty("gui");
if(this.getProperty("editorcontrol")==false){
this.isEditorControlBinding=false;
}
var _f8e=this.bindingWindow.bindingMap.tinywindow;
var _f8f=this.bindingWindow.bindingMap.codepresswindow;
if(_f8e){
EditorBinding.registerComponent(this,_f8e);
}else{
if(_f8f){
EditorBinding.registerComponent(this,_f8f);
}
}
};
EditorClickButtonBinding.prototype.buildDOMContent=function(){
EditorClickButtonBinding.superclass.buildDOMContent.call(this);
this._buildDesignModeSanitizer();
};
EditorClickButtonBinding.prototype.initializeComponent=function(_f90,_f91,_f92,_f93){
this._editorBinding=_f90;
this._tinyEngine=_f91;
this._tinyInstance=_f92;
this._tinyTheme=_f93;
this._setupEditorBookmarking();
};
EditorClickButtonBinding.prototype.initializeSourceEditorComponent=function(_f94,_f95,_f96){
this._editorBinding=_f94;
this._codePressFrame=_f95;
this._codePressEngine=_f96;
};
EditorClickButtonBinding.prototype._buildDesignModeSanitizer=function(){
if(Client.isExplorer){
var img=this.bindingDocument.createElement("img");
img.className="designmodesanitizer";
img.src=Resolver.resolve("${root}/images/blank.png");
this.shadowTree.designmodesanitizer=img;
this.bindingElement.appendChild(img);
}
};
EditorClickButtonBinding.prototype._setupEditorBookmarking=function(){
var _f98=this._editorBinding;
if(_f98!=null){
var self=this;
var _f9a={handleEvent:function(e){
switch(e.type){
case DOMEvents.MOUSEDOWN:
if(!_f98.hasBookmark()){
_f98.createBookmark();
}
break;
case DOMEvents.MOUSEUP:
if(self.isEditorSimpleControl){
if(self.popupBinding==null){
if(_f98.hasBookmark()){
_f98.restoreBookmark();
}
}
}
break;
}
}};
DOMEvents.addEventListener(this.bindingElement,DOMEvents.MOUSEDOWN,_f9a);
DOMEvents.addEventListener(this.bindingElement,DOMEvents.MOUSEUP,_f9a);
}
};
EditorClickButtonBinding.newInstance=function(_f9c){
var _f9d=DOMUtil.createElementNS(Constants.NS_UI,"ui:clickbutton",_f9c);
return UserInterface.registerBinding(_f9d,EditorClickButtonBinding);
};
EditorToolBarButtonBinding.prototype=new ToolBarButtonBinding;
EditorToolBarButtonBinding.prototype.constructor=EditorToolBarButtonBinding;
EditorToolBarButtonBinding.superclass=ToolBarButtonBinding.prototype;
function EditorToolBarButtonBinding(){
this.logger=SystemLogger.getLogger("EditorToolBarButtonBinding");
this._editorBinding=null;
this._tinyEngine=null;
this._tinyInstance=null;
this._tinyTheme=null;
this.isEditorSimpleControl=true;
this.isEditorControlBinding=true;
this.cmd=null;
this.val=null;
this.gui=null;
}
EditorToolBarButtonBinding.prototype.toString=function(){
return "[EditorToolBarButtonBinding]";
};
EditorToolBarButtonBinding.prototype.onBindingAttach=function(){
EditorToolBarButtonBinding.superclass.onBindingAttach.call(this);
this._setupEditorButton();
};
EditorToolBarButtonBinding.prototype._setupEditorButton=EditorClickButtonBinding.prototype._setupEditorButton;
EditorToolBarButtonBinding.prototype.buildDOMContent=function(){
EditorToolBarButtonBinding.superclass.buildDOMContent.call(this);
this._buildDesignModeSanitizer();
};
EditorToolBarButtonBinding.prototype.initializeComponent=EditorClickButtonBinding.prototype.initializeComponent;
EditorToolBarButtonBinding.prototype.initializeSourceEditorComponent=EditorClickButtonBinding.prototype.initializeSourceEditorComponent;
EditorToolBarButtonBinding.prototype._buildDesignModeSanitizer=EditorClickButtonBinding.prototype._buildDesignModeSanitizer;
EditorToolBarButtonBinding.prototype._setupEditorBookmarking=EditorClickButtonBinding.prototype._setupEditorBookmarking;
EditorToolBarButtonBinding.newInstance=function(_f9e){
var _f9f=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbarbutton",_f9e);
return UserInterface.registerBinding(_f9f,EditorToolBarButtonBinding);
};
EditorSelectorBinding.prototype=new SelectorBinding;
EditorSelectorBinding.prototype.constructor=EditorSelectorBinding;
EditorSelectorBinding.superclass=SelectorBinding.prototype;
function EditorSelectorBinding(){
this.logger=SystemLogger.getLogger("EditorSelectorBinding");
this._editorBinding=null;
this._tinyEngine=null;
this._tinyInstance=null;
this._tinyTheme=null;
this.BUTTON_IMPLEMENTATION=EditorClickButtonBinding;
this.MENUITEM_IMPLEMENTATION=EditorMenuItemBinding;
this.isFocusable=false;
this.isEditorControlBinding=true;
}
EditorSelectorBinding.prototype.toString=function(){
return "[EditorSelectorBinding]";
};
EditorSelectorBinding.prototype.onBindingAttach=function(){
if(this.getProperty("editorcontrol")==false){
this.isEditorControlBinding=false;
this.BUTTON_IMPLEMENTATION=ClickButtonBinding;
this.MENUITEM_IMPLEMENTATION=MenuItemBinding;
}
var _fa0=this.bindingWindow.bindingMap.tinywindow;
EditorBinding.registerComponent(this,_fa0);
EditorSelectorBinding.superclass.onBindingAttach.call(this);
};
EditorSelectorBinding.prototype.buildButton=function(){
EditorSelectorBinding.superclass.buildButton.call(this);
this._buttonBinding.isEditorSimpleControl=false;
if(this.isEditorControlBinding==false){
this._buttonBinding.isEditorControlBinding=false;
}
};
EditorSelectorBinding.prototype.initializeComponent=function(_fa1,_fa2,_fa3,_fa4){
this._editorBinding=_fa1;
this._tinyEngine=_fa2;
this._tinyInstance=_fa3;
this._tinyTheme=_fa4;
};
EditorSelectorBinding.prototype.handleAction=function(_fa5){
EditorSelectorBinding.superclass.handleAction.call(this,_fa5);
switch(_fa5.type){
case MenuItemBinding.ACTION_COMMAND:
if(this._editorBinding.hasBookmark()){
var self=this;
setTimeout(function(){
if(!self._editorBinding.isDialogMode){
self._editorBinding.restoreBookmark();
}
},0);
}
break;
}
EditorSelectorBinding.superclass.handleAction.call(this,_fa5);
};
EditorSelectorBinding.prototype._grabKeyboard=function(){
};
EditorSelectorBinding.prototype._releaseKeyboard=function(){
};
EditorMenuItemBinding.prototype=new MenuItemBinding;
EditorMenuItemBinding.prototype.constructor=EditorMenuItemBinding;
EditorMenuItemBinding.superclass=MenuItemBinding.prototype;
function EditorMenuItemBinding(){
this.logger=SystemLogger.getLogger("EditorMenuItemBinding");
this.isEditorControlBinding=true;
}
EditorMenuItemBinding.prototype.toString=function(){
return "[EditorMenuItemBinding]";
};
EditorMenuItemBinding.prototype.buildDOMContent=function(){
EditorMenuItemBinding.superclass.buildDOMContent.call(this);
if(Client.isExplorer){
this._buildDesignModeSanitizer();
}
};
EditorMenuItemBinding.prototype._buildDesignModeSanitizer=function(){
if(Client.isExplorer){
var img=this.bindingDocument.createElement("img");
img.className="designmodesanitizer";
img.src=Resolver.resolve("${root}/images/blank.png");
this.shadowTree.designmodesanitizer=img;
this.bindingElement.appendChild(img);
}
};
EditorMenuItemBinding.newInstance=function(_fa8){
var _fa9=DOMUtil.createElementNS(Constants.NS_UI,"ui:menuitem",_fa8);
return UserInterface.registerBinding(_fa9,EditorMenuItemBinding);
};
VisualEditorBinding.prototype=new EditorBinding;
VisualEditorBinding.prototype.constructor=VisualEditorBinding;
VisualEditorBinding.superclass=EditorBinding.prototype;
VisualEditorBinding.FUNCTION_CLASSNAME="compositeFunctionWysiwygRepresentation";
VisualEditorBinding.FIELD_CLASSNAME="compositeFieldReferenceWysiwygRepresentation";
VisualEditorBinding.ACTION_INITIALIZED="visualeditor initialized";
VisualEditorBinding.DEFAULT_CONTENT="<p><br/></p>";
VisualEditorBinding.URL_DIALOG_CONTENTERROR="${root}/content/dialogs/wysiwygeditor/errors/contenterror.aspx";
VisualEditorBinding.XHTML="<html xmlns=\"http://www.w3.org/1999/xhtml\">\n\t<head>${head}</head>\n\t<body>\n${body}\n\t</body>\n</html>";
VisualEditorBinding.getTinyLessClassName=function(_faa){
var i=0,_fac,_fad="",_fae=_faa.split(" ");
while((_fac=_fae[i])!=null){
if(_fac.length>=3&&_fac.substring(0,3)=="mce"){
_fac="";
}else{
if(_fac.length>=14&&_fac.substring(0,14)=="compositemedia"){
_fac="";
}
}
_fad+=_fac;
if(_fae[i+1]){
_fad+=" ";
}
i++;
}
return _fad;
};
VisualEditorBinding.getStructuredContent=function(_faf){
var _fb0=null;
WebServiceProxy.isFaultHandler=false;
var soap=XhtmlTransformationsService.TinyContentToStructuredContent(_faf);
if(soap instanceof SOAPFault){
}else{
_fb0=soap.XhtmlFragment;
if(!_fb0){
_fb0="";
}
}
WebServiceProxy.isFaultHandler=true;
return _fb0;
};
VisualEditorBinding.getTinyContent=function(_fb2,_fb3){
var _fb4=null;
if(_fb2==null||_fb2==""){
_fb2=VisualEditorBinding.DEFAULT_CONTENT;
}
WebServiceProxy.isFaultHandler=false;
var soap=XhtmlTransformationsService.StructuredContentToTinyContent(_fb2);
if(soap instanceof SOAPFault){
var _fb6=soap;
var _fb7={handleDialogResponse:function(){
_fb3.dispatchAction(Binding.ACTION_VALID);
}};
Dialog.invokeModal(VisualEditorBinding.URL_DIALOG_CONTENTERROR,_fb7,_fb6);
}else{
_fb4=soap.XhtmlFragment;
if(_fb4==null){
_fb4=new String("");
}
}
WebServiceProxy.isFaultHandler=true;
return _fb4;
};
VisualEditorBinding.extractByIndex=function(html,_fb9){
var _fba=null;
var doc=XMLParser.parse(html);
if(doc!=null){
var _fbc=new List(doc.documentElement.childNodes);
var _fbd=new List();
_fbc.each(function(_fbe){
if(_fbe.nodeType==Node.ELEMENT_NODE){
_fbd.add(_fbe);
}
});
var _fbf=_fbd.get(_fb9);
if(_fbf==null){
if(Application.isDeveloperMode){
alert("VisualEditorBinding: Bad HTML!"+"\n\n"+html);
}
}else{
if(_fbf.hasChildNodes()){
var frag=doc.createDocumentFragment();
while(_fbf.hasChildNodes()){
frag.appendChild(_fbf.firstChild);
}
doc.removeChild(doc.documentElement);
doc.appendChild(DOMUtil.createElementNS(Constants.NS_XHTML,"ROOT",doc));
doc.documentElement.appendChild(frag);
_fba=DOMSerializer.serialize(doc.documentElement);
_fba=_fba.substring(_fba.indexOf(">")+1,_fba.length);
_fba=_fba.substring(0,_fba.lastIndexOf("<"));
}
}
}
if(_fba==null){
_fba=new String("");
}
return _fba;
};
function VisualEditorBinding(){
this.logger=SystemLogger.getLogger("VisualEditorBinding");
this.action_initialized=VisualEditorBinding.ACTION_INITIALIZED;
this.url_default="${root}/content/misc/editors/visualeditor/visualeditor.aspx";
this._tinyEngine=null;
this._tinyInstance=null;
this._tinyTheme=null;
this.embedableFieldConfiguration=null;
this._head=null;
return this;
}
VisualEditorBinding.prototype.onBindingRegister=function(){
VisualEditorBinding.superclass.onBindingRegister.call(this);
StringBundle.getString("Composite.Web.VisualEditor","Preload.Key");
var _fc1=this.getProperty("embedablefieldstypenames");
if(_fc1!=null){
this.embedableFieldConfiguration=VisualEditorFieldGroupConfiguration.getConfiguration(_fc1);
}
var _fc2=this.getProperty("formattingconfiguration");
if(_fc2!=null){
this._url+="?config="+_fc2;
}
};
VisualEditorBinding.prototype.onBindingAttach=function(){
VisualEditorBinding.superclass.onBindingAttach.call(this);
this.subscribe(BroadcastMessages.TINYMCE_INITIALIZED);
this.subscribe(BroadcastMessages.VISUALEDITOR_HACKED);
};
VisualEditorBinding.prototype.toString=function(){
return "[VisualEditorBinding]";
};
VisualEditorBinding.prototype.handleBroadcast=function(_fc3,arg){
VisualEditorBinding.superclass.handleBroadcast.call(this,_fc3,arg);
var _fc5=this.getContentWindow().bindingMap.tinywindow;
var _fc6=_fc5.getContentWindow();
switch(_fc3){
case BroadcastMessages.VISUALEDITOR_HACKED:
if(arg.broadcastWindow==_fc6){
this._startContent=this.normalizeToDocument(this._startContent);
this.extractHead(this._startContent);
this._startContent=this.extractBody(this._startContent);
arg.textareaElement.value=VisualEditorBinding.getTinyContent(this._startContent);
this.unsubscribe(BroadcastMessages.VISUALEDITOR_HACKED);
}
break;
case BroadcastMessages.TINYMCE_INITIALIZED:
if(arg.broadcastWindow==_fc6){
this._tinyEngine=arg.tinyEngine;
this._tinyInstance=arg.tinyInstance;
this._tinyTheme=arg.tinyTheme;
this._tinyTheme.initC1(this,this._tinyEngine,this._tinyInstance);
this.initializeEditorComponents(_fc5);
this._initialize();
this.unsubscribe(BroadcastMessages.TINYMCE_INITIALIZED);
}
break;
}
};
VisualEditorBinding.prototype.initializeEditorComponent=function(_fc7){
_fc7.initializeComponent(this,this._tinyEngine,this._tinyInstance,this._tinyTheme);
};
VisualEditorBinding.prototype._finalize=function(){
VisualEditorBinding.superclass._finalize.call(this);
this._maybeShowEditor();
};
VisualEditorBinding.prototype._onPageInitialize=function(_fc8){
VisualEditorBinding.superclass._onPageInitialize.call(this,_fc8);
this._maybeShowEditor();
};
VisualEditorBinding.prototype._maybeShowEditor=function(){
if(this._isFinalized&&this._pageBinding!=null){
this._checksum=this.getCheckSum();
this._pageBinding.showEditor(true);
}
};
VisualEditorBinding.prototype.extractHead=function(html){
this._head=VisualEditorBinding.extractByIndex(html,0);
};
VisualEditorBinding.prototype.extractBody=function(html){
return VisualEditorBinding.extractByIndex(html,1);
};
VisualEditorBinding.prototype.normalizeToDocument=function(_fcb){
var _fcc=_fcb;
if(!this._isNormalizedDocument(_fcb)){
_fcb="\t\t"+_fcb.replace(/\n/g,"\n\t\t");
_fcc=VisualEditorBinding.XHTML.replace("${head}",this._getHeadSection()).replace("${body}",_fcb);
}
return _fcc;
};
VisualEditorBinding.prototype._isNormalizedDocument=function(_fcd){
var _fce=false;
var doc=XMLParser.parse(_fcd,true);
if(doc!=null){
if(doc.documentElement.nodeName=="html"){
_fce=true;
}
}
return _fce;
};
VisualEditorBinding.prototype._getHeadSection=function(){
return this._head!=null?this._head:new String("");
};
VisualEditorBinding.prototype.handleCommand=function(cmd,gui,val){
var _fd3=VisualEditorBinding.superclass.handleCommand.call(this,cmd,gui,val);
if(!_fd3){
try{
this._tinyInstance.execCommand(cmd,gui,val);
this.checkForDirty();
}
catch(e){
SystemDebug.stack(arguments);
}
_fd3=true;
}
return _fd3;
};
VisualEditorBinding.prototype.handleContextMenu=function(e){
var _fd5=DOMEvents.getTarget(e);
this._popupBinding.configure(this._tinyInstance,this._tinyEngine,_fd5);
VisualEditorBinding.superclass.handleContextMenu.call(this,e);
};
VisualEditorBinding.prototype.getEditorWindow=function(){
return DOMUtil.getParentWindow(this.getEditorDocument());
};
VisualEditorBinding.prototype.getEditorDocument=function(){
return this._tinyInstance.getDoc();
};
VisualEditorBinding.prototype.getEditorPopupBinding=function(){
return app.bindingMap.visualeditorpopup;
};
VisualEditorBinding.prototype.createBookmark=function(){
this._bookmark=this._tinyInstance.selection.getBookmark(true);
};
VisualEditorBinding.prototype.restoreBookmark=function(){
if(this.hasBookmark()){
this._tinyInstance.selection.moveToBookmark(this._bookmark);
this.deleteBookmark();
}
};
VisualEditorBinding.prototype.hasBookmark=function(){
return this._bookmark!=null;
};
VisualEditorBinding.prototype.deleteBookmark=function(){
this._bookmark=null;
};
VisualEditorBinding.prototype.resetUndoRedo=function(){
this._tinyInstance.undoManager.clear();
if(this._pageBinding!=null){
this._pageBinding.updateUndoBroadcasters();
}
};
VisualEditorBinding.prototype.validate=function(){
return this._pageBinding.validate();
};
VisualEditorBinding.prototype.getValue=function(){
return this._pageBinding.getContent();
};
VisualEditorBinding.prototype.setValue=function(_fd6){
if(this._isFinalized){
if(Binding.exists(this._pageBinding)){
this._pageBinding.setContent(_fd6);
}
}else{
if(this._startContent==null){
this._startContent=_fd6;
}
}
};
VisualEditorBinding.prototype.getResult=function(){
};
VisualEditorBinding.prototype.clean=function(){
VisualEditorBinding.superclass.clean.call(this);
if(this._pageBinding!=null){
this._pageBinding.clean();
}
};
VisualEditorBinding.prototype.setResult=function(_fd7){
};
VisualEditorPopupBinding.prototype=new EditorPopupBinding;
VisualEditorPopupBinding.prototype.constructor=VisualEditorPopupBinding;
VisualEditorPopupBinding.superclass=EditorPopupBinding.prototype;
VisualEditorPopupBinding.CONTENT_TEMPLATE="wysiwygeditor/popup.xml";
function VisualEditorPopupBinding(){
this.logger=SystemLogger.getLogger("VisualEditorPopupBinding");
this.tinyElement=null;
this.tinyEngine=null;
this.tinyInstance=null;
this.hasSelection=false;
this._isRenderingSelected=false;
}
VisualEditorPopupBinding.prototype.toString=function(){
return "[VisualEditorPopupBinding]";
};
VisualEditorPopupBinding.prototype.configure=function(_fd8,_fd9,_fda){
var _fdb=this.editorBinding.hasSelection();
this.tinyInstance=_fd8;
this.tinyEngine=_fd9;
this.tinyElement=_fda;
this.hasSelection=_fdb;
VisualEditorPopupBinding.superclass.configure.call(this);
};
VisualEditorPopupBinding.prototype.handleCommand=function(cmd,gui,val){
this.editorBinding.blurEditor();
this.editorBinding.handleCommand(cmd,gui?gui:false,val);
};
VisualEditorPopupBinding.prototype._configure=function(){
if(this._isEditorPopupBindingInitialized){
this._configureLinkGroup();
this._configureInsertGroup();
this._configureTableGroup();
this._configureRenderingGroup();
this._configureFieldGroup();
this._configureImageGroup();
}
};
VisualEditorPopupBinding.prototype._configureLinkGroup=function(){
var _fdf=false;
if(this.hasSelection){
_fdf=true;
}else{
if(this.tinyElement){
if(this.tinyElement.nodeName=="A"&&!this.tinyElement.getAttribute("name")){
_fdf=true;
}else{
if(this.tinyElement.nodeName=="IMG"){
_fdf=true;
}
}
}
}
if(_fdf){
this._showMenuGroups("link");
this._configureLinkGroupDetails();
}else{
this._hideMenuGroups("link");
}
};
VisualEditorPopupBinding.prototype._configureLinkGroupDetails=function(){
var _fe0=this.getMenuItemForCommand("compositeInsertLink");
var _fe1=this.getMenuItemForCommand("unlink");
var _fe2=this.editorBinding.getButtonForCommand("compositeInsertLink");
var _fe3=this.editorBinding.getButtonForCommand("unlink");
_fe1.setDisabled(_fe3.isDisabled);
if(_fe1.isDisabled){
_fe0.setLabel("Link");
}else{
_fe0.setLabel("Link properties");
}
};
VisualEditorPopupBinding.prototype._configureInsertGroup=function(){
var _fe4=this.editorBinding.embedableFieldConfiguration;
var item=this.getMenuItemForCommand("compositeInsertFieldParent");
var doc=this.bindingDocument;
if(item){
item.dispose();
}
item=MenuItemBinding.newInstance(doc);
item.setLabel("Field");
item.image="${icon:fields}";
item.imageDisabled="${icon:fields-disabled}";
item.setProperty("cmd","compositeInsertFieldParent");
if(_fe4){
var _fe7=_fe4.getGroupNames();
if(_fe7.hasEntries()){
var _fe8=MenuPopupBinding.newInstance(doc);
var body=_fe8.add(MenuBodyBinding.newInstance(doc));
var _fea=body.add(MenuGroupBinding.newInstance(doc));
_fe7.each(function(_feb){
var _fec=_fe4.getFieldNames(_feb);
_fec.each(function(_fed){
var i=_fea.add(MenuItemBinding.newInstance(doc));
i.setLabel(_fed);
i.setImage("${icon:field}");
i.setProperty("cmd","compositeInsertField");
i.setProperty("val",_feb+":"+_fed);
_fea.add(i);
});
});
item.add(_fe8);
}
}else{
item.disable();
}
this._menuGroups["insertions"].getFirst().add(item);
item.attachRecursive();
this._menuItems["compositeInsertFieldParent"]=item;
};
VisualEditorPopupBinding.prototype._configureTableGroup=function(){
var _fef=this.tinyInstance.dom.getParent(this.tinyElement,"table,td");
var _ff0=null;
var _ff1=null;
if(_fef){
if(_fef.nodeName=="TD"){
_ff0=_fef.getAttribute("colspan");
_ff1=_fef.getAttribute("rowspan");
}
this._menuItems["mceTableSplitCells"].setDisabled(_ff0=="1"&&_ff1=="1");
this._menuItems["mceTablePasteRowBefore"].setDisabled(this.tinyInstance.tableRowClipboard==null);
this._menuItems["mceTablePasteRowAfter"].setDisabled(this.tinyInstance.tableRowClipboard==null);
}
if(_fef){
this._showMenuGroups("table");
}else{
this._hideMenuGroups("table");
}
};
VisualEditorPopupBinding.prototype._configureRenderingGroup=function(){
var _ff2=this._isRendering();
if(_ff2){
this._showMenuGroups("rendering");
}else{
this._hideMenuGroups("rendering");
}
this._isRenderingSelected=_ff2;
};
VisualEditorPopupBinding.prototype._configureFieldGroup=function(){
var _ff3=this._isField();
if(_ff3){
this._showMenuGroups("field");
}else{
this._hideMenuGroups("field");
}
this._isFieldSelected=_ff3;
};
VisualEditorPopupBinding.prototype._configureImageGroup=function(){
if(this._isImage()&&!this._isRenderingSelected&&!this._isFieldSelected){
this._showMenuGroups("image");
}else{
this._hideMenuGroups("image");
}
};
VisualEditorPopupBinding.prototype._isImage=function(){
var _ff4=false;
if(!this.hasSelection){
_ff4=this.tinyElement&&this.tinyElement.nodeName=="IMG";
}
return _ff4;
};
VisualEditorPopupBinding.prototype._isRendering=function(){
return this._isImage()&&CSSUtil.hasClassName(this.tinyElement,VisualEditorBinding.FUNCTION_CLASSNAME);
};
VisualEditorPopupBinding.prototype._isField=function(){
return this._isImage()&&CSSUtil.hasClassName(this.tinyElement,VisualEditorBinding.FIELD_CLASSNAME);
};
VisualEditorElementClassConfiguration._configurations=new Map();
VisualEditorElementClassConfiguration.getConfiguration=function(_ff5){
var _ff6=VisualEditorElementClassConfiguration._configurations;
if(!_ff6.has(_ff5)){
_ff6.set(_ff5,new VisualEditorElementClassConfiguration(EditorConfigurationService.GetElementClassConfiguration(_ff5)));
}
return _ff6.get(_ff5);
};
function VisualEditorElementClassConfiguration(doc){
this.logger=SystemLogger.getLogger("VisualEditorElementClassConfiguration");
this._elements={};
var _ff8=new XPathResolver();
var _ff9=_ff8.resolveAll("elements/element",doc);
while(_ff9.hasNext()){
var _ffa=_ff9.getNext();
var _ffb=_ffa.getAttribute("name");
this._elements[_ffb]=new List();
var _ffc=_ff8.resolveAll("class",_ffa);
while(_ffc.hasNext()){
var _ffd=_ffc.getNext().getAttribute("name");
this._elements[_ffb].add(_ffd);
}
}
}
VisualEditorElementClassConfiguration.prototype.getClassNamesForElement=function(name){
var _fff=null;
if(this._elements[name]){
_fff=this._elements[name].copy();
}else{
_fff=new List();
}
return _fff;
};
VisualEditorFormattingConfiguration._configurations=new Map();
VisualEditorFormattingConfiguration._options=null;
VisualEditorFormattingConfiguration.getConfiguration=function(_1000){
var _1001=VisualEditorFormattingConfiguration._configurations;
if(!_1001.has(_1000)){
_1001.set(_1000,new VisualEditorFormattingConfiguration());
}
return _1001.get(_1000);
};
VisualEditorFormattingConfiguration._getOptions=function(){
if(VisualEditorFormattingConfiguration._options==null){
var p="Composite.Web.VisualEditor";
VisualEditorFormattingConfiguration._options={"p":StringBundle.getString(p,"FormatSelector.LabelParagraph"),"address":StringBundle.getString(p,"FormatSelector.LabelAddress"),"blockquote":StringBundle.getString(p,"FormatSelector.LabelBlockQuote"),"div":StringBundle.getString(p,"FormatSelector.LabelDivision"),"h1":StringBundle.getString(p,"FormatSelector.LabelHeading1"),"h2":StringBundle.getString(p,"FormatSelector.LabelHeading2"),"h3":StringBundle.getString(p,"FormatSelector.LabelHeading3"),"h4":StringBundle.getString(p,"FormatSelector.LabelHeading4"),"h5":StringBundle.getString(p,"FormatSelector.LabelHeading5"),"h6":StringBundle.getString(p,"FormatSelector.LabelHeading6")};
}
return VisualEditorFormattingConfiguration._options;
};
function VisualEditorFormattingConfiguration(_1003){
this._options=VisualEditorFormattingConfiguration._getOptions();
}
VisualEditorFormattingConfiguration.prototype.getFormattingOptions=function(){
return this._options;
};
VisualEditorFieldGroupConfiguration._configurations=new Map();
VisualEditorFieldGroupConfiguration.getConfiguration=function(_1004){
var _1005=null;
var _1006=VisualEditorFieldGroupConfiguration._configurations;
if(!_1006.has(_1004)){
_1006.set(_1004,new VisualEditorFieldGroupConfiguration(EditorConfigurationService.GetEmbedableFieldGroupConfigurations(_1004)));
}
return _1006.get(_1004);
};
function VisualEditorFieldGroupConfiguration(_1007){
var _1008=new Map();
new List(_1007).each(function(group){
var map=new Map();
new List(group.Fields).each(function(field){
map.set(field.Name,{xhtml:field.XhtmlRepresentation,xml:field.XhtmlRepresentation});
});
_1008.set(group.GroupName,map);
});
this._groups=_1008;
}
VisualEditorFieldGroupConfiguration.prototype.getGroupNames=function(){
return this._groups.toList(true);
};
VisualEditorFieldGroupConfiguration.prototype.getFieldNames=function(_100c){
return this._groups.get(_100c).toList(true);
};
VisualEditorFieldGroupConfiguration.prototype.getTinyMarkup=function(_100d,_100e){
return this._groups.get(_100d).get(_100e).xhtml;
};
VisualEditorFieldGroupConfiguration.prototype.getStructuredMarkup=function(name){
return this._groups.get(groupname).get(fieldname).xml;
};
VisualMultiEditorBinding.prototype=new VisualEditorBinding;
VisualMultiEditorBinding.prototype.constructor=VisualMultiEditorBinding;
VisualMultiEditorBinding.superclass=VisualEditorBinding.prototype;
function VisualMultiEditorBinding(){
this.logger=SystemLogger.getLogger("VisualMultiEditorBinding");
this._hasPlaceHolders=false;
this._textareaname=null;
this._textareas=null;
this._heads=null;
return this;
}
VisualMultiEditorBinding.prototype.toString=function(){
return "[VisualMultiEditorBinding]";
};
VisualMultiEditorBinding.prototype._maybeShowEditor=function(){
if(this._hasPlaceHolders){
VisualMultiEditorBinding.superclass._maybeShowEditor.call(this);
}
};
VisualMultiEditorBinding.prototype._setup=function(){
this._heads=new Map();
var _1010=this.getDescendantElementsByLocalName("textarea");
while(_1010.hasNext()){
var _1011=_1010.getNext();
if(_1011.getAttribute("selected")=="true"){
this._startContent=_1011.value;
this._textareaname=_1011.getAttribute("placeholderid");
}
}
if(this._startContent==null){
this._startContent=VisualEditorBinding.DEFAULT_CONTENT;
}
};
VisualMultiEditorBinding.prototype._initialize=function(){
var self=this;
this._registerWithDataManager("generated"+KeyMaster.getUniqueKey());
var _1013=this.getContentWindow().bindingMap.templatetree;
_1013.addActionListener(TreeBinding.ACTION_SELECTIONCHANGED,{handleAction:function(_1014){
var _1015=_1013.getSelectedTreeNodeBindings().getFirst();
self._placeHolderSelected(_1015.textareaname);
_1014.consume();
}});
_1013.addActionListener(Binding.ACTION_FOCUSED,{handleAction:function(_1016){
self._activateEditor(false);
}});
this._updatePlaceHolders();
var _1017=this.getContentWindow().bindingMap.toolsplitter;
_1017.unCollapse();
VisualMultiEditorBinding.superclass._initialize.call(this);
};
VisualMultiEditorBinding.prototype._updatePlaceHolders=function(){
templatetree=this.getContentWindow().bindingMap.templatetree;
var _1018=this.getDescendantElementsByLocalName("textarea");
templatetree.empty();
if(_1018.hasEntries()){
this._hasPlaceHolders=true;
this._parsePlaceHolders(_1018);
if(this._isFinalized){
this._pageBinding.showEditor(true);
}
}else{
this._hasPlaceHolders=false;
this._noPlaceHolders();
if(this._isFinalized){
this._pageBinding.showEditor(false);
}
}
};
VisualMultiEditorBinding.prototype._parsePlaceHolders=function(_1019){
this._textareas=new Map();
while(_1019.hasNext()){
var _101a=_1019.getNext();
var _101b=_101a.getAttribute("placeholderid");
this._textareas.set(_101b,{placeholderid:_101b,placeholdername:_101a.getAttribute("placeholdername"),placeholdermarkup:_101a.value,textareaelement:_101a,isSelected:_101a.getAttribute("selected")=="true"});
}
var _101c=new Map();
this._textareas.each(function(name,_101e){
var _101f=templatetree.add(TreeNodeBinding.newInstance(templatetree.bindingDocument));
_101f.setLabel(_101e.placeholdername);
_101f.setImage("${icon:placeholder}");
_101f.setProperty("placeholder",true);
_101f.textareaname=name;
_101c.set(_101e.placeholdername,_101f);
if(_101e.isSelected){
selected=_101f;
}
});
templatetree.attachRecursive();
if(selected!=null){
var _1020=this._textareas.get(selected.textareaname);
this._textareaname=selected.textareaname;
this._placeholdername=_1020.placeholdername;
this._setContentFromPlaceHolder(selected.textareaname);
selected.focus();
}
};
VisualMultiEditorBinding.prototype._noPlaceHolders=function(){
var _1021=this.getContentWindow().bindingMap.templatetree;
var _1022=_1021.add(TreeNodeBinding.newInstance(_1021.bindingDocument));
_1022.setLabel(StringBundle.getString("Composite.Web.VisualEditor","TemplateTree.NoTemplateWarning"));
_1022.setImage("${icon:warning}");
_1022.attach();
var _1023=this.getContentWindow().bindingMap.statusbar;
_1023.setPlaceHolderName(null);
};
VisualMultiEditorBinding.prototype._setContentFromPlaceHolder=function(name){
if(this._isFinalized==true){
var _1025=this._textareas.get(name);
var _1026=_1025.placeholdermarkup;
this.setValue(this.normalizeToDocument(_1026));
this.resetUndoRedo();
}
};
VisualMultiEditorBinding.prototype._placeHolderSelected=function(_1027){
if(this._isFinalized==true){
if(this._textareaname&&this._textareas.has(this._textareaname)){
this._textareas.get(this._textareaname).placeholdermarkup=this.getValue();
}
}
this._textareaname=_1027;
this._placeholdername=this._textareas.get(this._textareaname).placeholdername;
var _1028=this.getContentWindow().bindingMap.statusbar;
_1028.setPlaceHolderName(this._placeholdername);
if(this._isFinalized==true){
var self=this;
Application.lock(self);
setTimeout(function(){
self._setContentFromPlaceHolder(_1027);
Application.unlock(self);
},0);
}
};
VisualMultiEditorBinding.prototype.extractHead=function(html){
VisualMultiEditorBinding.superclass.extractHead.call(this,html);
this._heads.set(this._textareaname,this._head);
};
VisualMultiEditorBinding.prototype._getHeadSection=function(){
var _102b="";
if(this._heads.has(this._textareaname)){
_102b=this._heads.get(this._textareaname);
if(_102b==null){
_102b=new String("");
}
}
return _102b;
};
VisualMultiEditorBinding.prototype.manifest=function(){
if(this._textareas!=null&&this._textareas.hasEntries()){
this._textareas.get(this._textareaname).placeholdermarkup=this.getValue();
this._textareas.each(function(name,_102d){
_102d.textareaelement.value=_102d.placeholdermarkup;
});
}
};
VisualMultiEditorBinding.prototype.updateElement=function(_102e,_102f){
var _1030=_102e.getElementsByTagName("div").item(0);
var _1031=_102f.getElementsByTagName("div").item(0);
var _1032=new List(_1030.getElementsByTagName("textarea"));
var _1033=new List(_1031.getElementsByTagName("textarea"));
var _1034=false;
if(_1032.getLength()!=_1033.getLength()){
_1034=true;
}else{
var index=0;
_1032.each(function(_1036,index){
var _1038=_1033.get(index);
var newid=_1036.getAttribute("placeholderid");
var oldid=_1038.getAttribute("placeholderid");
var _103b=_1036.getAttribute("placeholdername");
var _103c=_1038.getAttribute("placeholdername");
if(newid!=oldid||_103b!=_103c){
_1034=true;
}
return !_1034;
});
}
if(_1034){
var html=null;
if(_1030.innerHTML!=null){
html=_1030.innerHTML;
}else{
html=DOMSerializer.serialize(_1030);
html=html.substring(html.indexOf(">")+1,html.length);
html=html.substring(0,html.lastIndexOf("<"));
}
var div=this.bindingElement.getElementsByTagName("div").item(0);
if(div!=null){
div.innerHTML=html;
}
this._updatePlaceHolders();
}
return true;
};
VisualMultiTemplateEditorBinding.prototype=new VisualMultiEditorBinding;
VisualMultiTemplateEditorBinding.prototype.constructor=VisualMultiTemplateEditorBinding;
VisualMultiTemplateEditorBinding.superclass=VisualMultiEditorBinding.prototype;
function VisualMultiTemplateEditorBinding(){
this.logger=SystemLogger.getLogger("VisualMultiTemplateEditorBinding");
this._oldtextareas=null;
return this;
}
VisualMultiTemplateEditorBinding.prototype.toString=function(){
return "[VisualMultiTemplateEditorBinding]";
};
VisualMultiTemplateEditorBinding.prototype.onBindingAttach=function(){
VisualMultiTemplateEditorBinding.superclass.onBindingAttach.call(this);
this._oldtextareas=new Map();
};
VisualMultiTemplateEditorBinding.prototype._initialize=function(){
var self=this;
var _1040=this.getDescendantBindingByLocalName("selector");
_1040.attach();
this._populateTemplateSelector();
var _1041=this.getContentWindow().bindingMap.templateselector;
_1041.addActionListener(SelectorBinding.ACTION_SELECTIONCHANGED,{handleAction:function(){
setTimeout(function(){
self._onTemplateSelectionChanged();
},0);
}});
this.getContentWindow().bindingMap.templatetoolbar.show();
VisualMultiTemplateEditorBinding.superclass._initialize.call(this);
};
VisualMultiTemplateEditorBinding.prototype._populateTemplateSelector=function(){
var _1042=this.getDescendantBindingByLocalName("selector");
var _1043=this.getContentWindow().bindingMap.templateselector;
_1042.selections.each(function(_1044){
_1044.imageProfile=new ImageProfile({image:"${icon:page-template-template}"});
});
_1043.populateFromList(_1042.selections);
};
VisualMultiTemplateEditorBinding.prototype._onTemplateSelectionChanged=function(){
var _1045=this.getDescendantBindingByLocalName("selector");
var _1046=this.getContentWindow().bindingMap.templateselector;
_1045.selectByValue(_1046.getValue());
_1045.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
this.checkForDirty(true);
};
VisualMultiTemplateEditorBinding.prototype._parsePlaceHolders=function(_1047){
var nev=this._textareas;
var old=this._oldtextareas;
if(nev!=null){
nev.each(function(key,value){
old.set(key,value);
});
}
this._textareas=new Map();
function compute(_104c,_104d){
var _104e=_104d;
if(old.has(_104c)){
_104e=old.get(_104c).placeholdermarkup;
}
return _104e;
}
while(_1047.hasNext()){
var _104f=_1047.getNext();
var _1050=_104f.getAttribute("placeholderid");
this._textareas.set(_1050,{placeholderid:_1050,placeholdername:_104f.getAttribute("placeholdername"),placeholdermarkup:compute(_1050,_104f.value),textareaelement:_104f,isSelected:_104f.getAttribute("selected")=="true"});
}
var _1051=null;
var _1052=this.getContentWindow().bindingMap.templatetree;
var _1053=new Map();
this._textareas.each(function(name,_1055){
var _1056=_1052.add(TreeNodeBinding.newInstance(_1052.bindingDocument));
_1056.setLabel(_1055.placeholdername);
_1056.setImage("${icon:placeholder}");
_1056.setProperty("placeholder",true);
_1056.textareaname=name;
_1053.set(_1055.placeholdername,_1056);
if(_1055.isSelected){
_1051=_1056;
}
});
_1052.attachRecursive();
if(_1051!=null){
var _1057=true;
if(this._oldtextareas.hasEntries()){
_1057=false;
var map=new Map();
this._textareas.each(function(id,_105a){
map.set(_105a.placeholdername,true);
});
if(!map.has(this._placeholdername)){
_1057=true;
}
}
if(_1057){
var _105b=this._textareas.get(_1051.textareaname);
this._textareaname=_1051.textareaname;
this._placeholdername=_105b.placeholdername;
this._setContentFromPlaceHolder(_1051.textareaname);
_1051.focus();
}else{
var _105c=_1053.get(this._placeholdername);
this._textareaname=_105c.textareaname;
_105c.focus();
}
}
};
VisualMultiTemplateEditorBinding.prototype.updateElement=function(_105d,_105e){
var _105f=_105d.getElementsByTagName("ui:selector").item(0);
var _1060=_105e.getElementsByTagName("ui:selector").item(0);
var _1061=false;
if(_105f!=null&&_1060!=null){
var _1062=new List(_105f.getElementsByTagName("ui:selection"));
var _1063=new List(_1060.getElementsByTagName("ui:selection"));
if(_1062.getLength()!=_1063.getLength()){
_1061=true;
}else{
_1062.each(function(_1064,index){
var _1066=_1064.getAttribute("value");
var _1067=_1063.get(index).getAttribute("value");
if(_1066!=_1067){
_1061=true;
}
return !_1061;
});
}
}
if(_1061){
var div=this.bindingElement.getElementsByTagName("div").item(1);
this.bindingWindow.DocumentManager.detachBindings(div,true);
div.innerHTML=DOMSerializer.serialize(_105f);
this.bindingWindow.DocumentManager.attachBindings(div);
this._populateTemplateSelector();
}
return VisualMultiTemplateEditorBinding.superclass.updateElement.call(this,_105d,_105e);
};
BespinEditorPopupBinding.prototype=new EditorPopupBinding;
BespinEditorPopupBinding.prototype.constructor=BespinEditorPopupBinding;
BespinEditorPopupBinding.superclass=EditorPopupBinding.prototype;
BespinEditorPopupBinding.CONTENT_TEMPLATE="sourceeditor/popup.xml";
function BespinEditorPopupBinding(){
this.logger=SystemLogger.getLogger("BespinEditorPopupBinding");
this._editorBinding=null;
this._codePressFrame=null;
this._codePressEngine=null;
}
BespinEditorPopupBinding.prototype.toString=function(){
return "[BespinEditorPopupBinding]";
};
BespinEditorPopupBinding.prototype.configure=function(_1069,frame,_106b){
this._editorBinding=_1069;
this._codePressFrame=frame;
this._codePressEngine=_106b;
WysiwygEditorPopupBinding.superclass.configure.call(this);
};
BespinEditorPopupBinding.prototype._configure=function(){
switch(this._editorBinding.syntax){
case SourceEditorBinding.syntax.XML:
case SourceEditorBinding.syntax.XSL:
case SourceEditorBinding.syntax.HTML:
this._showMenuGroups("xml");
break;
default:
this._hideMenuGroups("xml");
break;
}
};
BespinEditorPopupBinding.prototype.handleCommand=function(cmd,gui,val){
var win=this._editorBinding.getContentWindow();
var but=null;
switch(cmd){
case "compositeInsert":
but=win.bindingMap.insertbutton;
break;
case "compositeFormat":
but=win.bindingMap.formatbutton;
break;
}
if(but!=null){
but.handleCommand(cmd,gui,val);
}
};
BespinEditorBinding.prototype=new EditorBinding;
BespinEditorBinding.prototype.constructor=BespinEditorBinding;
BespinEditorBinding.superclass=EditorBinding.prototype;
BespinEditorBinding.ACTION_INITIALIZED="bespineditor initialized";
BespinEditorBinding.syntax={TEXT:"text",XML:"xml",XSL:"xsl",HTML:"html",CSS:"css",JAVASCRIPT:"js",CSHARP:"cs",SQL:"sql"};
function BespinEditorBinding(){
this.logger=SystemLogger.getLogger("BespinEditorBinding");
this.action_initialized=BespinEditorBinding.ACTION_INITIALIZED;
this.url_default="${root}/content/misc/editors/bespineditor/bespineditor.aspx";
this._editorWindowBinding=null;
this._bespinWindow=null;
this._bespinEditor=null;
this._bespinEnvelope=null;
this._bespinElement=null;
this.syntax=new String(BespinEditorBinding.syntax.TEXT);
this._isPlainEditMode=false;
this.isFocusable=true;
this._isEmbedded=false;
this._hasStrictValidation=false;
this._validator=null;
this._startContent="";
return this;
}
BespinEditorBinding.prototype.toString=function(){
return "[BespinEditorBinding]";
};
BespinEditorBinding.prototype.onBindingRegister=function(){
BespinEditorBinding.superclass.onBindingRegister.call(this);
StringBundle.getString("Composite.Web.SourceEditor","Preload.Key");
};
BespinEditorBinding.prototype.onBindingAttach=function(){
if(Client.isMozilla==true){
this.subscribe(BroadcastMessages.BESPIN_LOADED);
}
if(this.getProperty("embedded")==true){
this._isEmbedded=true;
}
var _1071=this.getProperty("validate");
if(_1071==true){
this._hasStrictValidation=true;
}
var _1072=this.getProperty("validator");
if(_1072!=null){
this._validator=_1072;
}
this.syntax=this.getProperty("syntax");
switch(this.syntax){
case BespinEditorBinding.syntax.XML:
case BespinEditorBinding.syntax.XSL:
this.syntax=BespinEditorBinding.syntax.HTML;
break;
}
if(this.getProperty("debug")){
this._startContent=Templates.getPlainText("sourcecodeeditor/"+this.syntax+".txt");
}
BespinEditorBinding.superclass.onBindingAttach.call(this);
};
BespinEditorBinding.prototype.handleBroadcast=function(_1073,arg){
BespinEditorBinding.superclass.handleBroadcast.call(this,_1073,arg);
switch(_1073){
case BroadcastMessages.BESPIN_LOADED:
var _1075=this.getContentWindow().bindingMap.bespinwindow;
if(_1075!=null){
var _1076=_1075.getContentWindow();
if(arg.broadcastWindow==_1076){
this._bespinWindow=_1076;
this._bespinEnvelope=arg.bespinEnvelope;
this._bespinEditor=arg.bespinEditor;
this._bespinElement=this._bespinEditor.textView.domNode;
this._bespinEditor.syntax=this.syntax;
this._bespinEnvelope.settings.set("theme","white");
this._bespinEnvelope.settings.set("fontface","monospace");
this._bespinEnvelope.settings.set("fontsize",13);
this._bespinEnvelope.settings.set("tabstop",4);
this.initializeEditorComponents(_1075);
this._bespinElement.addEventListener(DOMEvents.MOUSEDOWN,this,false);
var self=this;
this._bespinEditor.textChanged.add(function(_1078,_1079,_107a){
self.checkForDirty();
});
if(this._pageBinding!=null){
this._initialize();
}
this.unsubscribe(_1073);
}
}
break;
}
};
BespinEditorBinding.prototype._onPageInitialize=function(_107b){
BespinEditorBinding.superclass._onPageInitialize.call(this,_107b);
if(Client.isExplorer||this._bespinEditor!=null){
this._initialize();
}
};
BespinEditorBinding.prototype._activateEditor=function(_107c){
if(_107c!=this._isActivated){
this._isActivated=_107c;
EditorBinding.isActive=_107c;
var _107d=this.getContentWindow().standardEventHandler;
if(_107c){
_107d.enableNativeKeys(true);
}else{
_107d.disableNativeKeys();
}
var _107e=this.getContentWindow().bindingMap.broadcasterIsActive;
if(_107e!=null){
if(_107c){
_107e.enable();
}else{
_107e.disable();
}
}
if(_107c){
this.focus();
var _107f=this._bespinEditor;
}else{
this.blur();
}
}
};
BespinEditorBinding.prototype.handleCommand=function(cmd,gui,val){
var _1083=BespinEditorBinding.superclass.handleCommand.call(this,cmd,val);
return _1083;
};
BespinEditorBinding.prototype._finalize=function(){
this.setContent(this._startContent);
BespinEditorBinding.superclass._finalize.call(this);
};
BespinEditorBinding.prototype.initializeEditorComponent=function(_1084){
_1084.initializeSourceEditorComponent(this,this._bespinEditor);
};
BespinEditorBinding.prototype.clean=function(){
BespinEditorBinding.superclass.clean.call(this);
this.getContentWindow().bindingMap.editorpage.clean();
};
BespinEditorBinding.prototype.handleContextMenu=function(e){
alert("BespinEditorBinding.prototype.handleContextMenu");
};
BespinEditorBinding.prototype.getEditorPopupBinding=function(){
return top.app.bindingMap.sourcecodeeditorpopup;
};
BespinEditorBinding.prototype.getEditorWindow=function(){
return this._bespinWindow;
};
BespinEditorBinding.prototype.getEditorDocument=function(){
return this._bespinWindow.document;
};
BespinEditorBinding.prototype.setContent=function(_1086){
if(!this._isFinalized){
if(_1086!=this._startContent){
this._startContent=_1086;
}
}
if(this.isInitialized&&this.getContentWindow().bindingMap!=null){
this.getContentWindow().bindingMap.editorpage.setContent(_1086);
this.resetUndoRedo();
this._checksum=this.getCheckSum();
}
return true;
};
BespinEditorBinding.prototype.getContent=function(){
var _1087=this.getContentWindow().bindingMap.editorpage.getContent();
return _1087?_1087:"";
};
BespinEditorBinding.prototype.resetUndoRedo=function(){
};
BespinEditorBinding.prototype.cover=function(_1088){
if(this._pageBinding!=null){
this._pageBinding.cover(_1088);
}
};
BespinEditorBinding.prototype.updateElement=function(_1089){
if(_1089!=null&&this.shadowTree.dotnetinput!=null){
var value=_1089.getAttribute("value");
if(value!=null&&value!=this.shadowTree.dotnetinput.value){
this.setValue(decodeURIComponent(value));
}
}
return true;
};
BespinEditorBinding.prototype.addEditorEvents=function(){
};
BespinEditorBinding.prototype.blurEditor=function(){
};
BespinEditorBinding.prototype.validate=function(){
var _108b=true;
var _108c=this.getContent();
if(this._validator!=null){
_108b=Validator.validateInformed(_108c,this._validator);
}else{
switch(this.syntax){
case BespinEditorBinding.syntax.XML:
case BespinEditorBinding.syntax.XSL:
case BespinEditorBinding.syntax.HTML:
_108b=XMLParser.isWellFormedDocument(_108c,true);
if(_108b==true&&this._hasStrictValidation){
switch(this.syntax){
case BespinEditorBinding.syntax.HTML:
_108b=this._isValidHTML(_108c);
break;
}
}
break;
}
}
return _108b;
};
BespinEditorBinding.prototype._isValidHTML=function(xml){
var _108e=true;
var doc=XMLParser.parse(xml);
var _1090=new List();
if(doc!=null){
var root=doc.documentElement;
if(root.nodeName!="html"){
_1090.add("MissingHtml");
}
if(root.namespaceURI!=Constants.NS_XHTML){
_1090.add("NamespaceURI");
}
var head=null,body=null;
var _1094=new List(root.childNodes);
while(_1094.hasNext()){
var child=_1094.getNext();
if(child.nodeType==Node.ELEMENT_NODE){
switch(child.nodeName){
case "head":
if(head!=null){
_1090.add("MultipleHead");
}
if(body!=null){
_1090.add("HeadBodyIndex");
}
head=child;
break;
case "body":
if(body!=null){
_1090.add("MultipleBody");
}
body=child;
break;
}
}
}
if(head==null){
_1090.add("MissingHead");
}
if(body==null){
_1090.add("MissingBody");
}
}
if(_1090.hasEntries()){
_108e=false;
Dialog.error(StringBundle.getString("Composite.Web.SourceEditor","Invalid.HTML.DialogTitle"),StringBundle.getString("Composite.Web.SourceEditor","Invalid.HTML."+_1090.getFirst()));
}
return _108e;
};
BespinEditorBinding.prototype._isValidXSL=function(){
return true;
};
BespinEditorBinding.prototype.getValue=BespinEditorBinding.prototype.getContent;
BespinEditorBinding.prototype.setValue=BespinEditorBinding.prototype.setContent;
BespinEditorBinding.prototype.getResult=BespinEditorBinding.prototype.getContent;
BespinEditorBinding.prototype.setResult=BespinEditorBinding.prototype.setContent;
BespinEditorBinding.prototype.createBookmark=function(){
};
BespinEditorBinding.prototype.restoreBookmark=function(){
};
BespinEditorBinding.prototype.hasBookmark=function(){
};
BespinEditorBinding.prototype.deleteBookmark=function(){
};
BespinEditorBinding.prototype.getCheckSum=function(){
var _1096=null;
var page=this._pageBinding;
if(page!=null){
_1096=page.getCheckSum();
}
return _1096;
};
AudioWindowBinding.prototype=new WindowBinding;
AudioWindowBinding.prototype.constructor=AudioWindowBinding;
AudioWindowBinding.superclass=WindowBinding.prototype;
AudioWindowBinding.URL="${root}/content/misc/audioloader/audio.aspx";
function AudioWindowBinding(){
this.isFlexible=false;
return this;
}
AudioWindowBinding.prototype.toString=function(){
return "[AudioWindowBinding]";
};
AudioWindowBinding.prototype.onBindingRegister=function(){
AudioWindowBinding.superclass.onBindingRegister.call(this);
if(Client.hasFlash==true){
this.setURL(AudioWindowBinding.URL);
}
};
ThrobberBinding.prototype=new Binding;
ThrobberBinding.prototype.constructor=ThrobberBinding;
ThrobberBinding.superclass=Binding.prototype;
ThrobberBinding.URL_DEFAULT=Resolver.resolve("${skin}/throbber/throbber.gif");
ThrobberBinding.URL_ACTIVATE=Resolver.resolve("${skin}/throbber/throbber_activate.gif");
ThrobberBinding.URL_DEACTIVATE=Resolver.resolve("${skin}/throbber/throbber_deactivate.gif");
function ThrobberBinding(){
this.logger=SystemLogger.getLogger("ThrobberBinding");
this._isPlaying=false;
return this;
}
ThrobberBinding.prototype.toString=function(){
return "[ThrobberBinding]";
};
ThrobberBinding.prototype.onBindingRegister=function(){
ThrobberBinding.superclass.onBindingRegister.call(this);
this._setImage(ThrobberBinding.URL_DEFAULT);
if(Application.hasStartPage&&Application.hasExternalConnection){
this.subscribe(BroadcastMessages.COMPOSITE_START);
this.subscribe(BroadcastMessages.COMPOSITE_STOP);
this.subscribe(BroadcastMessages.START_COMPOSITE);
this.bindingElement.title=" Composite Start ";
this.attachClassName("active");
this.addEventListener(DOMEvents.CLICK,{handleEvent:function(){
EventBroadcaster.broadcast(BroadcastMessages.START_COMPOSITE);
}});
}
};
ThrobberBinding.prototype.handleBroadcast=function(_1098,arg){
ThrobberBinding.superclass.handleBroadcast.call(this,_1098,arg);
switch(_1098){
case BroadcastMessages.COMPOSITE_START:
case BroadcastMessages.START_COMPOSITE:
this.hide();
break;
case BroadcastMessages.COMPOSITE_STOP:
this.show();
break;
}
};
ThrobberBinding.prototype.play=function(){
if(!this._isPlaying){
this._setImage(ThrobberBinding.URL_ACTIVATE);
this._isPlaying=true;
}
};
ThrobberBinding.prototype.stop=function(){
if(this._isPlaying==true){
this._setImage(ThrobberBinding.URL_DEACTIVATE?ThrobberBinding.URL_DEACTIVATE:ThrobberBinding.URL_DEFAULT);
this._isPlaying=false;
}
};
ThrobberBinding.prototype.hide=function(){
if(this.isVisible==true){
this.bindingElement.style.visibility="hidden";
this.isVisible=false;
}
};
ThrobberBinding.prototype.show=function(){
if(!this.isVisible){
this.bindingElement.style.visibility="visible";
this.isVisible=true;
}
};
ThrobberBinding.prototype._setImage=function(url){
this.bindingElement.style.backgroundImage="url(\""+url+"\")";
};
ProgressBarBinding.prototype=new Binding;
ProgressBarBinding.prototype.constructor=ProgressBarBinding;
ProgressBarBinding.superclass=Binding.prototype;
ProgressBarBinding.WIDTH=190;
ProgressBarBinding.NOTCH=9;
ProgressBarBinding._bindingInstance=null;
ProgressBarBinding.notch=function(_109b){
var bar=ProgressBarBinding._bindingInstance;
if(bar!=null){
bar.notch(_109b);
}
};
function ProgressBarBinding(){
this.logger=SystemLogger.getLogger("ProgressBarBinding");
this._cover=null;
return this;
}
ProgressBarBinding.prototype.toString=function(){
return "[ProgressBarBinding]";
};
ProgressBarBinding.prototype.onBindingAttach=function(){
ProgressBarBinding.superclass.onBindingAttach.call(this);
ProgressBarBinding._bindingInstance=this;
this._cover=this.add(CoverBinding.newInstance(this.bindingDocument));
this._cover.setBusy(false);
this._cover.setWidth(ProgressBarBinding.WIDTH);
this.shadowTree.cover=this._cover;
};
ProgressBarBinding.prototype.notch=function(_109d){
_109d=_109d?_109d:1;
var width=this._cover.getWidth()-(ProgressBarBinding.NOTCH*_109d);
this._cover.setWidth(width>=0?width:0);
};
StartMenuItemBinding.prototype=new MenuItemBinding;
StartMenuItemBinding.prototype.constructor=StartMenuItemBinding;
StartMenuItemBinding.superclass=MenuItemBinding.prototype;
function StartMenuItemBinding(){
this.logger=SystemLogger.getLogger("StartMenuItemBinding");
this.type=MenuItemBinding.TYPE_CHECKBOX;
}
StartMenuItemBinding.prototype.toString=function(){
return "[StartMenuItemBinding]";
};
StartMenuItemBinding.prototype.onBindingRegister=function(){
StartMenuItemBinding.superclass.onBindingRegister.call(this);
this.subscribe(BroadcastMessages.COMPOSITE_START);
this.subscribe(BroadcastMessages.COMPOSITE_STOP);
};
StartMenuItemBinding.prototype.handleBroadcast=function(_109f,arg){
StartMenuItemBinding.superclass.handleBroadcast.call(this,_109f,arg);
switch(_109f){
case BroadcastMessages.COMPOSITE_START:
if(!this.isChecked){
this.check(true);
}
break;
case BroadcastMessages.COMPOSITE_STOP:
if(this.isChecked){
this.uncheck(true);
}
break;
}
};
StartMenuItemBinding.prototype.setChecked=function(_10a1,_10a2){
StartMenuItemBinding.superclass.setChecked.call(this,_10a1,_10a2);
if(!_10a2){
if(this.isChecked){
EventBroadcaster.broadcast(BroadcastMessages.START_COMPOSITE);
}else{
EventBroadcaster.broadcast(BroadcastMessages.STOP_COMPOSITE);
}
}
};
KeySetBinding.prototype=new Binding;
KeySetBinding.prototype.constructor=KeySetBinding;
KeySetBinding.superclass=Binding.prototype;
KeySetBinding.keyEventHandlers={};
KeySetBinding.registerKeyEventHandler=function(doc,key,_10a5,_10a6){
var _10a7=KeySetBinding.keyEventHandlers;
if(Interfaces.isImplemented(IKeyEventHandler,_10a6,true)==true){
if(_10a5!="*"){
_10a5=KeySetBinding._sanitizeKeyModifiers(_10a5);
}
var code=window.KeyEventCodes[key];
if(!code){
code=key.charCodeAt(0);
}
if(!_10a7[doc]){
_10a7[doc]={};
}
if(!_10a7[doc][code]){
_10a7[doc][code]={};
}
_10a7[doc][code][_10a5]=_10a6;
}
};
KeySetBinding.handleKey=function(doc,e){
var _10ab=false;
var code=e.keyCode;
var _10ad=KeySetBinding.keyEventHandlers;
if(_10ad[doc]&&_10ad[doc][code]){
var _10ae="[default]";
_10ae+=code!=KeyEventCodes.VK_SHIFT?e.shiftKey?" shift":"":"";
_10ae+=code!=KeyEventCodes.VK_CONTROL?e.ctrlKey?" control":"":"";
var _10af=_10ad[doc][code][_10ae];
if(_10af==null){
_10af=_10ad[doc][code]["*"];
}
if(_10af!=null){
_10af.handleKeyEvent(e);
_10ab=true;
}
}
return _10ab;
};
KeySetBinding._sanitizeKeyModifiers=function(_10b0){
var _10b1="[default]";
var mods={};
if(_10b0){
new List(_10b0.split(" ")).each(function(_10b3){
mods[_10b3]=true;
});
function check(_10b4){
if(mods[_10b4]){
_10b1+=" "+_10b4;
}
}
check("shift");
check("control");
}
return _10b1;
};
function KeySetBinding(){
this.logger=SystemLogger.getLogger("KeySetBinding");
this.crawlerFilters=new List([DocumentCrawler.ID,FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
KeySetBinding.prototype.toString=function(){
return "[KeySetBinding]";
};
KeySetBinding.prototype.onBindingAttach=function(){
KeySetBinding.superclass.onBindingAttach.call(this);
var self=this;
var keys=new List(DOMUtil.getElementsByTagName(this.bindingElement,"key"));
keys.each(function(key){
var _10b8=key.getAttribute("oncommand");
var _10b9=key.getAttribute("preventdefault")=="true";
KeySetBinding.registerKeyEventHandler(self.bindingDocument,key.getAttribute("key"),key.getAttribute("modifiers"),{handleKeyEvent:function(e){
DOMEvents.stopPropagation(e);
if(_10b9){
DOMEvents.preventDefault(e);
}
var _10bb=self.bindingWindow.WindowManager;
top.setTimeout(function(){
Binding.evaluate(_10b8,self);
},0);
}});
});
};
CursorBinding.prototype=new Binding;
CursorBinding.prototype.constructor=CursorBinding;
CursorBinding.superclass=Binding.prototype;
CursorBinding.fadeIn=function(_10bc){
if(_10bc instanceof CursorBinding){
_10bc.setOpacity(0);
_10bc.show();
new Animation({modifier:Client.isExplorer?18:9,onstep:function(_10bd){
_10bc.setOpacity(Math.sin(_10bd*Math.PI/180));
},onstop:function(){
_10bc.setOpacity(1);
}}).play();
}
};
CursorBinding.fadeOut=function(_10be){
if(_10be instanceof CursorBinding){
new Animation({modifier:Client.isExplorer?18:9,onstep:function(_10bf){
_10be.setOpacity(Math.cos(_10bf*Math.PI/180));
},onstop:function(){
_10be.hide();
}}).play();
}
};
CursorBinding.moveOut=function(_10c0,_10c1,_10c2){
if(_10c0 instanceof CursorBinding){
_10c2.x-=16;
_10c2.y-=16;
new Animation({modifier:3,onstep:function(_10c3){
var tal=Math.sin(_10c3*Math.PI/180);
_10c0.setPosition(new Point(((1-tal)*_10c1.x)+((0+tal)*_10c2.x),((1-tal)*_10c1.y)+((0+tal)*_10c2.y)));
},onstop:function(){
CursorBinding.fadeOut(_10c0);
}}).play();
}
};
function CursorBinding(){
this.logger=SystemLogger.getLogger("CursorBinding");
this._labelBinding=null;
this._opacity=1;
this.isAccepting=true;
return this;
}
CursorBinding.prototype.toString=function(){
return "[CursorBinding]";
};
CursorBinding.prototype.onBindingAttach=function(){
CursorBinding.superclass.onBindingAttach.call(this);
this._labelBinding=this.add(LabelBinding.newInstance(this.bindingDocument));
var image=this.getProperty("image");
if(image!=null){
this.setImage(image);
}
this._stopIndicatorBinding=this.add(LabelBinding.newInstance(this.bindingDocument));
this._stopIndicatorBinding.attachClassName("indicator");
this._stopIndicatorBinding.setImage("${icon:cancel}");
this.hide();
this._stopIndicatorBinding.hide();
};
CursorBinding.prototype.setImage=function(url){
this._labelBinding.setImage(url);
};
CursorBinding.prototype.showAcceptance=function(){
this.isAccepting=true;
if(Client.isMozilla){
this._stopIndicatorBinding.hide();
}else{
var self=this;
setTimeout(function(){
if(self.isAccepting){
self._stopIndicatorBinding.hide();
}
},0);
}
};
CursorBinding.prototype.hideAcceptance=function(){
this.isAccepting=false;
if(Client.isMozilla){
this._stopIndicatorBinding.show();
}else{
var self=this;
setTimeout(function(){
if(!self.isAccepting){
self._stopIndicatorBinding.show();
}
},0);
}
};
CursorBinding.prototype.show=function(){
CursorBinding.superclass.show.call(this);
};
CursorBinding.prototype.setOpacity=function(_10c9){
if(Client.isMozilla){
this.bindingElement.style.MozOpacity=new String(_10c9);
}else{
this.bindingElement.style.filter="progid:DXImageTransform.Microsoft.Alpha(opacity="+new String(_10c9*100)+")";
}
this._opacity=_10c9;
};
CursorBinding.prototype.getOpacity=function(){
return this._opacity;
};
CursorBinding.prototype.setPosition=function(pos){
this.bindingElement.style.left=pos.x+"px";
this.bindingElement.style.top=pos.y+"px";
};
CursorBinding.prototype.getPosition=function(){
return new Point(this.bindingElement.offsetLeft,this.bindingElement.offsetTop);
};
CursorBinding.prototype.fadeIn=function(){
CursorBinding.fadeIn(this);
};
CursorBinding.prototype.fadeOut=function(){
CursorBinding.fadeOut(this);
};
CoverBinding.prototype=new Binding;
CoverBinding.prototype.constructor=CoverBinding;
CoverBinding.superclass=Binding.prototype;
CoverBinding.CLASSNAME_TRANSPARENT="transparent";
CoverBinding.fadeOut=function(cover){
function setOpacity(_10cc){
if(Client.isMozilla){
cover.bindingElement.style.opacity=new String(_10cc);
}else{
cover.bindingElement.style.filter="progid:DXImageTransform.Microsoft.Alpha(opacity="+new String(_10cc*100)+")";
}
}
if(cover instanceof CoverBinding){
new Animation({modifier:Client.isExplorer?30:18,onstep:function(_10cd){
if(Binding.exists(cover)){
setOpacity(Math.cos(_10cd*Math.PI/180));
}
},onstop:function(){
if(Binding.exists(cover)){
cover.hide();
}
}}).play();
}
};
CoverBinding.fadeIn=function(cover){
function setOpacity(_10cf){
if(Client.isMozilla){
cover.bindingElement.style.MozOpacity=new String(_10cf);
}else{
cover.bindingElement.style.filter="progid:DXImageTransform.Microsoft.Alpha(opacity="+new String(_10cf*100)+")";
}
}
if(cover instanceof CoverBinding){
new Animation({modifier:Client.isExplorer?30:18,onstart:function(){
if(Binding.exists(cover)){
setOpacity(0);
cover.show();
}
},onstep:function(_10d0){
if(Binding.exists(cover)){
setOpacity(Math.sin(_10d0*Math.PI/180));
}
},onstop:function(){
setOpacity(1);
}}).play();
}
};
function CoverBinding(){
this.logger=SystemLogger.getLogger("CoverBinding");
this._isBusy=true;
this._isTransparent=false;
this._position=null;
return this;
}
CoverBinding.prototype.toString=function(){
return "[CoverBinding]";
};
CoverBinding.prototype.onBindingRegister=function(){
CoverBinding.superclass.onBindingRegister.call(this);
if(this.getProperty("blockevents")){
this.addEventListener(DOMEvents.MOUSEDOWN);
this.addEventListener(DOMEvents.MOUSEUP);
this.addEventListener(DOMEvents.MOUSEMOVE);
this.addEventListener(DOMEvents.CLICK);
this.addEventListener(DOMEvents.DOUBLECLICK);
}
if(this.getProperty("transparent")==true){
this.setTransparent(true);
}
if(this.getProperty("busy")==false){
this._isBusy=false;
}
if(this._isBusy){
this.bindingElement.style.cursor="wait";
}
};
CoverBinding.prototype.show=function(){
CoverBinding.superclass.show.call(this);
if(this._isBusy&&this.isVisible){
this.addEventListener(DOMEvents.MOUSEMOVE);
}
};
CoverBinding.prototype.hide=function(){
CoverBinding.superclass.hide.call(this);
if(this._isBusy&&!this.isVisible&&this._position){
UncoverBinding.uncover(this._position);
this.removeEventListener(DOMEvents.MOUSEMOVE);
}
};
CoverBinding.prototype.handleEvent=function(e){
CoverBinding.superclass.handleEvent.call(this,e);
DOMEvents.stopPropagation(e);
switch(e.type){
case DOMEvents.MOUSEMOVE:
this._position=DOMUtil.getUniversalMousePosition(e);
break;
}
};
CoverBinding.prototype.setBusy=function(_10d2){
if(_10d2!=this._isBusy){
if(_10d2){
this.bindingElement.style.cursor="wait";
}else{
this.bindingElement.style.cursor="default";
}
this._isBusy=_10d2;
}
};
CoverBinding.prototype.setTransparent=function(_10d3){
if(_10d3!=this._isTransparent){
if(_10d3){
this.attachClassName(CoverBinding.CLASSNAME_TRANSPARENT);
}else{
this.detachClassName(CoverBinding.CLASSNAME_TRANSPARENT);
}
this._isTransparent=_10d3;
}
};
CoverBinding.prototype.setWidth=function(width){
if(width>=0){
this.bindingElement.style.width=new String(width+"px");
}
};
CoverBinding.prototype.getWidth=function(){
return this.bindingElement.offsetWidth;
};
CoverBinding.prototype.setHeight=function(_10d5){
if(_10d5>=0){
this.bindingElement.style.height=new String(_10d5+"px");
}
};
CoverBinding.prototype.getHeight=function(){
return this.bindingElement.offsetHeight;
};
CoverBinding.newInstance=function(_10d6){
var _10d7=DOMUtil.createElementNS(Constants.NS_UI,"ui:cover",_10d6);
return UserInterface.registerBinding(_10d7,CoverBinding);
};
UncoverBinding.prototype=new Binding;
UncoverBinding.prototype.constructor=UncoverBinding;
UncoverBinding.superclass=Binding.prototype;
UncoverBinding._bindingInstance=null;
UncoverBinding.uncover=function(pos){
var _10d9=UncoverBinding._bindingInstance;
if(Binding.exists(_10d9)){
_10d9.setPosition(pos);
}
};
function UncoverBinding(){
this.logger=SystemLogger.getLogger("UncoverBinding");
UncoverBinding._bindingInstance=this;
}
UncoverBinding.prototype.toString=function(){
return "[UncoverBinding]";
};
UncoverBinding.prototype.setPosition=function(pos){
this.bindingElement.style.display="block";
var dim=this.boxObject.getDimension();
pos.x-=0.5*dim.w;
pos.y-=0.5*dim.h;
pos.x=pos.x<0?0:pos.x;
pos.y=pos.y<0?0:pos.y;
this.bindingElement.style.left=String(pos.x)+"px";
this.bindingElement.style.top=String(pos.y)+"px";
this.bindingElement.style.cursor="wait";
var self=this;
setTimeout(function(){
self.bindingElement.style.cursor="default";
self.bindingElement.style.display="none";
},0);
};
TheatreBinding.prototype=new Binding;
TheatreBinding.prototype.constructor=TheatreBinding;
TheatreBinding.superclass=Binding.prototype;
TheatreBinding.CLASSNAME_INITIALIZED="initialized";
function TheatreBinding(){
this._isPlaying=false;
this._isFading=false;
this._canvas=null;
return this;
}
TheatreBinding.prototype.toString=function(){
return "[TheatreBinding]";
};
TheatreBinding.prototype.onBindingAttach=function(){
TheatreBinding.superclass.onBindingAttach.call(this);
this._canvas=document.createElement("canvas");
if(Client.isExplorer){
this._canvas.style.filter="progid:DXImageTransform.Microsoft.Fade(duration=30) progid:DXImageTransform.Microsoft.Alpha(opacity=50)";
}
this.bindingElement.appendChild(this._canvas);
};
TheatreBinding.prototype.play=function(_10dd){
this._isFading=_10dd==true;
if(!this._isPlaying){
Application.lock(this);
this.show();
this._isPlaying=true;
if(this._isFading){
this._fade();
}
}
};
TheatreBinding.prototype._fade=function(){
if(Client.isMozilla){
var _10de=this._canvas.getContext("2d");
var alpha=parseInt(0);
TheatreBinding._interval=top.setInterval(function(){
if(alpha<0.5){
_10de.fillStyle="rgba(0,0,0,"+new String(alpha)+")";
_10de.clearRect(0,0,300,150);
_10de.fillRect(0,0,300,150);
alpha+=0.002;
}else{
top.clearInterval(TheatreBinding._interval);
TheatreBinding._interval=null;
}
},50);
}else{
this._canvas.filters[0].Apply();
this._canvas.style.backgroundColor="black";
this._canvas.filters[0].Play();
}
};
TheatreBinding.prototype.stop=function(){
if(this._isPlaying){
if(this._isFading){
if(TheatreBinding._interval!=null){
top.clearInterval(TheatreBinding._interval);
}
if(Client.isExplorer){
this._canvas.style.backgroundColor="transparent";
}else{
var _10e0=this._canvas.getContext("2d");
_10e0.clearRect(0,0,300,150);
}
}
Application.unlock(this,true);
this.hide();
this._isPlaying=false;
}
};
SourceCodeViewerBinding.prototype=new WindowBinding;
SourceCodeViewerBinding.prototype.constructor=SourceCodeViewerBinding;
SourceCodeViewerBinding.superclass=WindowBinding.prototype;
SourceCodeViewerBinding.ACTION_INITIALIZED="sourcecodeviewer initialized";
SourceCodeViewerBinding.URL_DEFAULT="${root}/content/misc/viewers/sourcecodeviewer/viewsourcecontent.aspx";
SourceCodeViewerBinding.syntax={XML:"xml"};
SourceCodeViewerBinding.stylesheets={"xml":Resolver.resolve("${root}/transformations/viewsource-xml.xsl")};
function SourceCodeViewerBinding(){
this.logger=SystemLogger.getLogger("SourceCodeViewerBinding");
this._syntax=null;
this._transformer=null;
}
SourceCodeViewerBinding.prototype.toString=function(){
return "[SourceCodeViewerBinding]";
};
SourceCodeViewerBinding.prototype.onBindingAttach=function(){
this._syntax=this.getProperty("syntax");
switch(this._syntax){
case SourceCodeViewerBinding.syntax.XML:
var _10e1=SourceCodeViewerBinding.stylesheets[this._syntax];
this._transformer=new XSLTransformer();
this._transformer.importStylesheet(_10e1);
break;
default:
throw "SourceCodeViewer: Syntax error!";
this._syntax=null;
break;
}
var _10e2=DOMUtil.getElementsByTagName(this.bindingElement,"textarea").item(0);
if(_10e2){
this._startcontent=_10e2.value;
}
this.setURL(SourceCodeViewerBinding.URL_DEFAULT);
this.addActionListener(WindowBinding.ACTION_ONLOAD);
SourceCodeViewerBinding.superclass.onBindingAttach.call(this);
};
SourceCodeViewerBinding.prototype.handleAction=function(_10e3){
SourceCodeViewerBinding.superclass.handleAction.call(this,_10e3);
switch(_10e3.type){
case WindowBinding.ACTION_ONLOAD:
if(_10e3.target==this){
if(this._startcontent){
this.view(this._startcontent);
}
this.dispatchAction(SourceCodeViewerBinding.ACTION_INITIALIZED);
_10e3.consume();
}
break;
}
SourceCodeViewerBinding.superclass.handleAction.call(this,_10e3);
};
SourceCodeViewerBinding.prototype.view=function(arg){
switch(this._syntax){
case SourceCodeViewerBinding.syntax.XML:
this._viewXML(arg);
break;
}
};
SourceCodeViewerBinding.prototype._viewXML=function(arg){
var doc=null;
if(arg){
if(typeof arg==Types.STRING){
doc=XMLParser.parse(arg);
}else{
if(arg.nodeType&&arg.nodeType==Node.DOCUMENT_NODE){
doc=object;
}
}
}
if(doc){
var _10e7=this._transformer.transformToString(doc);
this._inject(_10e7);
}
};
SourceCodeViewerBinding.prototype._viewHTML=function(arg){
};
SourceCodeViewerBinding.prototype._viewJavascript=function(arg){
};
SourceCodeViewerBinding.prototype._inject=function(_10ea){
this.getContentDocument().body.innerHTML=_10ea;
};
PersistanceBinding.prototype=new Binding;
PersistanceBinding.prototype.constructor=PersistanceBinding;
PersistanceBinding.superclass=Binding.prototype;
PersistanceBinding.USERDATAKEY="persistance";
PersistanceBinding.GLOBALSTOREKEY=document.location.host;
PersistanceBinding.TEMPLATE="storagetemplates/persistance.xml";
function PersistanceBinding(){
this.logger=SystemLogger.getLogger("PersistanceBinding");
this._resolver=null;
return this;
}
PersistanceBinding.prototype.toString=function(){
return "[PersistanceBinding]";
};
PersistanceBinding.prototype.getPersistanceMap=function(){
var doc=null;
var map=null;
if(Client.isExplorer==true){
doc=this._getDocExplorer();
}else{
doc=this._getDocMozilla();
}
if(doc!=null){
this._document=doc;
this.logger.fine(DOMSerializer.serialize(doc,true));
map=this._getPersistanceMap(this._document);
}
return map;
};
PersistanceBinding.prototype.persist=function(map){
var doc=this._getPersistanceDoc(map);
alert(DOMSerializer.serialize(doc,true));
if(Client.isExplorer==true){
this._persistDocExplorer(doc);
}else{
this._persistDocMozilla(doc);
}
};
PersistanceBinding.prototype._getPersistanceMap=function(doc){
var map={};
if(this._resolver==null){
this._resolver=new XPathResolver();
this._resolver.setNamespacePrefixResolver({"p":Constants.NS_PERSISTANCE});
}
var list=this._resolver.resolveAll("p:persist",doc.documentElement);
while(list.hasNext()){
var _10f2=list.getNext();
var id=_10f2.getAttribute("id");
map[id]={};
var atts=this._resolver.resolveAll("p:att",_10f2);
while(atts.hasNext()){
var att=atts.getNext();
var name=att.getAttribute("name");
var value=att.getAttribute("value");
map[id][name]=value;
}
}
return map;
};
PersistanceBinding.prototype._getPersistanceDoc=function(map){
var doc=this._document;
var elm=doc.documentElement;
elm.setAttribute("version",Installation.versionString);
while(elm.hasChildNodes()){
elm.removeChild(elm.lastChild);
}
for(var id in map){
var _10fc=DOMUtil.createElementNS(Constants.NS_PERSISTANCE,"persist",doc);
_10fc.setAttribute("id",id);
for(var name in map[id]){
var att=DOMUtil.createElementNS(Constants.NS_PERSISTANCE,"att",doc);
att.setAttribute("name",name);
att.setAttribute("value",map[id][name]);
_10fc.appendChild(att);
}
elm.appendChild(_10fc);
}
return doc;
};
PersistanceBinding.prototype._getDocExplorer=function(){
this.bindingElement.load(PersistanceBinding.USERDATAKEY);
var doc=this.bindingElement.XMLDocument;
if(doc.documentElement.namespaceURI==""){
var file=PersistanceBinding.TEMPLATE;
var text=Templates.getTemplateElementText(file);
doc.loadXML(text);
var elm=doc.documentElement;
while(elm.hasChildNodes()){
elm.removeChild(elm.firstChild);
}
}
return doc;
};
PersistanceBinding.prototype._persistDocExplorer=function(doc){
var text=DOMSerializer.serialize(doc,true);
this.bindingElement.XMLDocument.loadXML(text);
this.bindingElement.save(PersistanceBinding.USERDATAKEY);
};
PersistanceBinding.prototype._getDocMozilla=function(){
delete window.globalStorage[PersistanceBinding.GLOBALSTOREKEY].persistance;
var doc=null;
var _1106=window.globalStorage[PersistanceBinding.GLOBALSTOREKEY].persistance;
if(_1106){
doc=XMLParser.parse(_1106);
}else{
var file=PersistanceBinding.TEMPLATE;
doc=Templates.getTemplateDocument(file);
var elm=doc.documentElement;
while(elm.hasChildNodes()){
elm.removeChild(elm.lastChild);
}
}
return doc;
};
PersistanceBinding.prototype._persistDocMozilla=function(doc){
var _110a=DOMSerializer.serialize(doc,true);
window.globalStorage[PersistanceBinding.GLOBALSTOREKEY].persistance=_110a;
};
LocalizationSelectorBinding.prototype=new SelectorBinding;
LocalizationSelectorBinding.prototype.constructor=LocalizationSelectorBinding;
LocalizationSelectorBinding.superclass=SelectorBinding.prototype;
function LocalizationSelectorBinding(){
this.logger=SystemLogger.getLogger("LocalizationSelectorBinding");
return this;
}
LocalizationSelectorBinding.prototype.toString=function(){
return "[LocalizationSelectorBinding]";
};
LocalizationSelectorBinding.prototype.onBindingAttach=function(){
LocalizationSelectorBinding.superclass.onBindingAttach.call(this);
this.subscribe(BroadcastMessages.UPDATE_LANGUAGES);
this._populateFromLanguages(Localization.languages);
};
LocalizationSelectorBinding.prototype.handleBroadcast=function(_110b,arg){
LocalizationSelectorBinding.superclass.handleBroadcast.call(this,_110b,arg);
switch(_110b){
case BroadcastMessages.UPDATE_LANGUAGES:
this._populateFromLanguages(arg);
break;
case BroadcastMessages.SAVE_ALL_DONE:
this.unsubscribe(BroadcastMessages.SAVE_ALL_DONE);
EventBroadcaster.broadcast(BroadcastMessages.CLOSE_VIEWS);
this._invokeAction();
break;
}
};
LocalizationSelectorBinding.prototype._populateFromLanguages=function(list){
if(list!=null&&list.hasEntries()&&list.getLength()>1){
var _110e=new List();
list.each(function(lang){
_110e.add(new SelectorBindingSelection(lang.Name,lang.SerializedActionToken,lang.IsCurrent,null));
});
this.populateFromList(_110e);
this.show();
}else{
this.hide();
}
};
LocalizationSelectorBinding.prototype.populateFromList=function(list){
LocalizationSelectorBinding.superclass.populateFromList.call(this,list);
this._backupSelectionValue=this._selectionValue;
};
LocalizationSelectorBinding.prototype.onValueChange=function(){
var self=this;
Dialog.warning(StringBundle.getString(StringBundle.UI,"UserElementProvider.ChangeOtherActiveLocaleDialogTitle"),StringBundle.getString(StringBundle.UI,"UserElementProvider.ChangeOtherActiveLocaleDialogText"),Dialog.BUTTONS_ACCEPT_CANCEL,{handleDialogResponse:function(_1112){
switch(_1112){
case Dialog.RESPONSE_ACCEPT:
if(Application.hasDirtyDockTabs()){
self.subscribe(BroadcastMessages.SAVE_ALL_DONE);
EventBroadcaster.broadcast(BroadcastMessages.SAVE_ALL);
}else{
EventBroadcaster.broadcast(BroadcastMessages.CLOSE_VIEWS);
self._invokeAction();
}
self._backupSelectionValue=self.getValue();
break;
case Dialog.RESPONSE_CANCEL:
self.selectByValue(self._backupSelectionValue);
break;
}
}});
};
LocalizationSelectorBinding.prototype._invokeAction=function(){
var token=this.getValue();
var root=SystemNode.taggedNodes.get("Root");
var _1115=new SystemAction({Label:"Generated Action: Change Locale",ActionToken:token});
SystemAction.invoke(_1115,root);
};
ResponseBinding.prototype=new Binding;
ResponseBinding.prototype.constructor=ResponseBinding;
ResponseBinding.superclass=Binding.prototype;
ResponseBinding.ACTION_SUCCESS="response success";
ResponseBinding.ACTION_OOOOKAY="response ooookay";
ResponseBinding.ACTION_FAILURE="response failure";
function ResponseBinding(){
this.logger=SystemLogger.getLogger("ResponseBinding");
return this;
}
ResponseBinding.prototype.toString=function(){
return "[ResponseBinding]";
};
ResponseBinding.prototype.onBindingAttach=function(){
ResponseBinding.superclass.onBindingAttach.call(this);
this.propertyMethodMap["checksum"]=this._update;
this._update();
};
ResponseBinding.prototype._update=function(){
var _1116=this.getProperty("status");
if(_1116!=null){
switch(_1116){
case "success":
this.dispatchAction(ResponseBinding.ACTION_SUCCESS);
break;
case "failure":
this.dispatchAction(ResponseBinding.ACTION_FAILURE);
break;
case "ooookay":
this.dispatchAction(ResponseBinding.ACTION_OOOOKAY);
break;
}
}
var index=this.getProperty("messagequeueindex");
if(index!=null){
if(index>MessageQueue.index){
MessageQueue.update();
}
}
};
function UserInterfaceMapping(map){
this.logger=SystemLogger.getLogger("UserInterfaceMapping");
this.map=map;
}
UserInterfaceMapping.prototype.merge=function(_1119){
for(var _111a in _1119.map){
this.map[_111a]=_1119.getBindingImplementation(_111a);
}
};
UserInterfaceMapping.prototype.getBindingImplementation=function(_111b){
var _111c=null;
var name=_111b.nodeName;
if(Client.isExplorer){
var small=name.toLowerCase();
if(name==small){
name="ui:"+name;
}else{
name=small;
}
}
if(this.map[name]){
_111c=this.map[name];
}
return _111c;
};
var UserInterface=new function(){
var _111f=(Client.isMozilla?MozEditorTextBoxBinding:IEEditorTextBoxBinding);
var _1120=new UserInterfaceMapping({"body":RootBinding,"ui:binding":Binding,"ui:box":Binding,"ui:dialog":DialogBinding,"ui:dialoghead":DialogHeadBinding,"ui:dialogbody":DialogBodyBinding,"ui:dialogmatrix":DialogMatrixBinding,"ui:dialogset":DialogSetBinding,"ui:dialogborder":DialogBorderBinding,"ui:dialogcover":DialogCoverBinding,"ui:titlebar":DialogTitleBarBinding,"ui:titlebarbody":DialogTitleBarBodyBinding,"ui:window":WindowBinding,"ui:controlgroup":ControlGroupBinding,"ui:control":ControlBinding,"ui:menubar":MenuBarBinding,"ui:menu":MenuBinding,"ui:menubody":MenuBodyBinding,"ui:menugroup":MenuGroupBinding,"ui:menuitem":MenuItemBinding,"ui:menupopup":MenuPopupBinding,"ui:tabbox":TabBoxBinding,"ui:tabs":TabsBinding,"ui:tab":TabBinding,"ui:tabpanels":TabPanelsBinding,"ui:tabpanel":TabPanelBinding,"ui:splitbox":SplitBoxBinding,"ui:splitpanel":SplitPanelBinding,"ui:splitter":SplitterBinding,"ui:decks":DecksBinding,"ui:deck":DeckBinding,"ui:toolbar":ToolBarBinding,"ui:toolbargroup":ToolBarGroupBinding,"ui:toolbarbody":ToolBarBodyBinding,"ui:toolbarbutton":ToolBarButtonBinding,"ui:toolbarlabel":ToolBarLabelBinding,"ui:labelbox":LabelBinding,"ui:text":TextBinding,"ui:clickbutton":ClickButtonBinding,"ui:tree":TreeBinding,"ui:treebody":TreeBodyBinding,"ui:treenode":TreeNodeBinding,"ui:flexbox":FlexBoxBinding,"ui:scrollbox":ScrollBoxBinding,"ui:popupset":PopupSetBinding,"ui:popup":PopupBinding,"ui:shadow":ShadowBinding,"ui:matrix":MatrixBinding,"ui:sourceeditor":BespinEditorBinding,"ui:visualeditor":VisualEditorBinding,"ui:visualmultieditor":VisualMultiEditorBinding,"ui:visualmultitemplateeditor":VisualMultiTemplateEditorBinding,"ui:wysiwygeditortoolbarbutton":EditorToolBarButtonBinding,"ui:dock":DockBinding,"ui:docktabs":DockTabsBinding,"ui:docktab":DockTabBinding,"ui:dockpanels":DockPanelsBinding,"ui:dockpanel":DockPanelBinding,"ui:page":PageBinding,"ui:editorpage":EditorPageBinding,"ui:dialogpage":DialogPageBinding,"ui:pagebody":DialogPageBodyBinding,"ui:wizardpage":WizardPageBinding,"ui:explorer":ExplorerBinding,"ui:explorerdecks":ExplorerDecksBinding,"ui:explorerdeck":ExplorerDeckBinding,"ui:explorersplitter":ExplorerSplitterBinding,"ui:explorermenu":ExplorerMenuBinding,"ui:explorertoolbar":ExplorerToolBarBinding,"ui:explorertoolbarbutton":ExplorerToolBarButtonBinding,"ui:stagecontainer":StageContainerBinding,"ui:stage":StageBinding,"ui:stagedecks":StageDecksBinding,"ui:stagedeck":StageDeckBinding,"ui:viewset":ViewSetBinding,"ui:view":ViewBinding,"ui:broadcasterset":BroadcasterSetBinding,"ui:broadcaster":BroadcasterBinding,"ui:fields":FieldsBinding,"ui:fieldgroup":FieldGroupBinding,"ui:field":FieldBinding,"ui:fielddesc":FieldDescBinding,"ui:fielddata":FieldDataBinding,"ui:fieldhelp":FieldHelpBinding,"ui:datainput":DataInputBinding,"ui:selector":SelectorBinding,"ui:simpleselector":SimpleSelectorBinding,"ui:multiselector":MultiSelectorBinding,"ui:datainputselector":DataInputSelectorBinding,"ui:datainputdialog":DataInputDialogBinding,"ui:textbox":TextBoxBinding,"ui:editortextbox":_111f,"ui:radiodatagroup":RadioDataGroupBinding,"ui:radio":RadioDataBinding,"ui:checkbutton":CheckButtonBinding,"ui:checkbox":CheckBoxBinding,"ui:checkboxgroup":CheckBoxGroupBinding,"ui:datadialog":DataDialogBinding,"ui:postbackdialog":PostBackDataDialogBinding,"ui:nullpostbackdialog":NullPostBackDataDialogBinding,"ui:htmldatadialog":HTMLDataDialogBinding,"ui:functioneditor":FunctionEditorDataBinding,"ui:parametereditor":ParameterEditorDataBinding,"ui:keyset":KeySetBinding,"ui:cover":CoverBinding,"ui:uncover":UncoverBinding,"ui:cursor":CursorBinding,"ui:dialogtoolbar":DialogToolBarBinding,"ui:focus":FocusBinding,"ui:balloonset":BalloonSetBinding,"ui:balloon":BalloonBinding,"ui:error":ErrorBinding,"ui:throbber":ThrobberBinding,"ui:progressbar":ProgressBarBinding,"ui:lazybinding":LazyBindingBinding,"ui:sourcecodeviewer":SourceCodeViewerBinding,"ui:theatre":TheatreBinding,"ui:persistance":PersistanceBinding,"ui:filepicker":FilePickerBinding,"ui:request":RequestBinding,"ui:response":ResponseBinding});
var _1121=SystemLogger.getLogger("UserInterface");
var keys={};
this.registerBinding=function(_1123,impl){
var _1125=null;
if(!this.hasBinding(_1123)){
var _1126=DOMUtil.getParentWindow(_1123);
if(DOMUtil.getLocalName(_1123)!="bindingmapping"){
if(!impl&&_1123.getAttribute("binding")!=null){
var _1127=_1123.getAttribute("binding");
impl=_1126[_1127];
if(impl==null){
throw "No such binding in scope: "+_1127;
}
}
if(!impl){
var _1128=_1126.DocumentManager;
if(_1128){
var _1129=_1128.customUserInterfaceMapping;
if(_1129){
impl=_1129.getBindingImplementation(_1123);
}
}
}
if(!impl){
impl=_1120.getBindingImplementation(_1123);
}
if(impl!=null&&!Application.isMalFunctional){
try{
_1125=new impl();
}
catch(exception){
Application.isMalFunctional=true;
alert("No such binding!\n"+exception.message+(exception.stack?"\n"+exception.stack:""));
throw (exception);
}
}
if(_1125){
var key=KeyMaster.getUniqueKey();
_1123.setAttribute("key",key);
_1125.key=key;
if(!_1123.id){
_1123.id=key;
}
keys[key]={element:_1123,binding:_1125};
_1125.onBindingRegister();
}
}
}
return _1125;
};
this.unRegisterBinding=function(_112b){
terminate(_112b);
};
function terminate(_112c){
if(Binding.exists(_112c)==true){
var key=_112c.key;
Binding.destroy(_112c);
if(key){
if(keys[key]){
keys[key].binding=null;
keys[key].element=null;
delete keys[key];
_112c=null;
}else{
_1121.error("URGH: "+key);
}
}
}
}
this.getElement=function(_112e){
var _112f=null;
if(keys[_112e.key]){
_112f=keys[_112e.key].element;
}
return _112f;
};
this.getBinding=function(_1130){
var _1131=null;
if(_1130&&_1130.nodeType==Node.ELEMENT_NODE){
try{
var key=_1130.getAttribute("key");
if(key&&keys[key]){
_1131=keys[key].binding;
}
}
catch(exception){
alert("getBinding exception occured on element:\n\n\t\t"+_1130);
if(exception.stack){
alert(exception.stack);
}
}
}
return _1131;
};
this.getBindingByKey=function(key){
var _1134=null;
if(keys[key]){
_1134=keys[key].binding;
}
return _1134;
};
this.hasBinding=function(_1135){
return this.getBinding(_1135)!=null;
};
this.isBindingVisible=function(_1136){
var _1137=Application.isOperational;
if(_1137==true){
var _1138=new Crawler();
_1138.type=NodeCrawler.TYPE_ASCENDING;
_1138.id="visibilitycrawler";
_1138.addFilter(function(_1139){
var b=UserInterface.getBinding(_1139);
var res=0;
if(!b.isVisible){
_1137=false;
res=NodeCrawler.STOP_CRAWLING;
}
return res;
});
_1138.crawl(_1136.bindingElement);
_1138.dispose();
}
return _1137;
};
var _113c=null;
this.getBindingCount=function(){
var count=0;
for(var key in keys){
count++;
}
return count;
};
this.setPoint=function(){
_113c={};
for(var key in keys){
_113c[key]=true;
}
};
this.getPoint=function(){
var _1140=null;
if(_113c){
_1140=new List();
for(var key in keys){
if(!_113c[key]){
_1140.add(key);
}
}
}
return _1140;
};
this.clearPoint=function(){
_113c=null;
};
this.trackUndisposedBindings=function(){
var _1142=null;
for(var key in keys){
var entry=keys[key];
if(!entry.binding||!entry.element||!Binding.exists(entry.binding)){
if(!_1142){
_1142="Bindings illdisposed: ";
}
_1142+=entry.binding+" ";
}
}
if(_1142!=null){
_1121.error(_1142);
}
};
this.autoTrackDisposedBindings=function(_1145){
if(_1145){
if(!window.disposedbindingtrackinterval){
window.disposedbindingtrackinterval=window.setInterval(UserInterface.trackUndisposedBindings,10000);
this.trackUndisposedBindings();
}
}else{
if(window.disposedbindingtrackinterval){
window.clearInterval(window.disposedbindingtrackinterval);
window.disposedbindingtrackinterval=null;
}
}
};
};
function SOAPMessage(){
}
SOAPMessage.prototype={document:null,envelope:null,header:null,body:null,fault:null};
SOAPRequest.prototype=new SOAPMessage;
SOAPRequest.prototype.constructor=SOAPRequest;
SOAPRequest.superclass=SOAPMessage.prototype;
SOAPRequest.resolver=new XPathResolver();
SOAPRequest.resolver.setNamespacePrefixResolver({"soap":Constants.NS_ENVELOPE,"xhtml":Constants.NS_XHTML});
SOAPRequest.newInstance=function(_1146,_1147){
var _1148=_1146+"/"+_1147;
var _1149=new SOAPRequest(_1148);
var _114a=SOAPRequest.resolver;
_1149.document=Templates.getTemplateDocument("soapenvelope.xml");
_1149.envelope=_114a.resolve("soap:Envelope",_1149.document);
_1149.header=_114a.resolve("soap:Header",_1149.envelope);
_1149.body=_114a.resolve("soap:Body",_1149.envelope);
return _1149;
};
SOAPRequest._parseResponse=function(_114b){
var _114c=null;
var _114d=false;
var doc=_114b.responseXML;
if(doc!=null&&doc.documentElement!=null){
switch(doc.documentElement.namespaceURI){
case Constants.NS_ENVELOPE:
_114c=SOAPRequestResponse.newInstance(_114b.responseXML);
if(Application.isOffLine){
EventBroadcaster.broadcast(BroadcastMessages.SERVER_ONLINE);
}
break;
case Constants.NS_XHTML:
if(!Application.isOffLine){
var body=SOAPRequest.resolver.resolve("xhtml:html/xhtml:body",_114b.responseXML);
if(body&&body.getAttribute("id")=="offline"){
_114d=true;
}
}
break;
case Constants.NS_DOMPARSEERROR:
var cry=DOMSerializer.serialize(doc);
SystemLogger.getLogger("SOAPRequest._parseResponse (static)").error(cry);
if(Application.isDeveloperMode){
alert("SOAPRequest parseerror! \n\n"+cry);
}
break;
default:
if(Application.isDeveloperMode){
alert("SOAPRequest: "+doc.documentElement.namespaceURI);
}
break;
}
}else{
if(!Application.isOffLine&&!Application.isLoggedOut){
var text=_114b.responseText;
if(text.indexOf("id=\"offline\"")>-1){
_114d=true;
}else{
var cry="Invalid SOAP response: \n\n"+_114b.responseText;
SystemLogger.getLogger("SOAPRequest._parseResponse (static)").error(cry);
if(Application.isDeveloperMode){
alert("Invalid SOAP response");
window.open("about:blank").document.write(_114b.responseText);
}
}
}
}
if(_114d==true){
EventBroadcaster.broadcast(BroadcastMessages.SERVER_OFFLINE);
}
return _114c;
};
function SOAPRequest(_1152){
this.logger=SystemLogger.getLogger("SOAPRequest");
this.action=_1152;
return this;
}
SOAPRequest.prototype.invoke=function(url){
var _1154=DOMUtil.getXMLHTTPRequest();
var _1155=null;
_1154.open("post",url,false);
_1154.setRequestHeader("Content-Type","text/xml; charset=UTF-8");
_1154.setRequestHeader("SOAPAction",this.action);
try{
_1154.send(this.document);
_1155=SOAPRequest._parseResponse(_1154);
}
catch(exception){
var error="Dysfuntion in SOAP invoke: "+url;
if(this.document!=null){
error+="\n"+DOMSerializer.serialize(this.document,true);
}
this.logger.error(error);
throw exception;
}
_1154=null;
return _1155;
};
SOAPRequest.prototype.dispose=function(){
for(var _1157 in this){
this[_1157]=null;
}
};
SOAPRequestResponse.prototype=new SOAPMessage;
SOAPRequestResponse.prototype.constructor=SOAPRequestResponse;
SOAPRequestResponse.superclass=SOAPMessage.prototype;
function SOAPRequestResponse(){
}
SOAPRequestResponse.logger=SystemLogger.getLogger("SOAPRequestResponse");
SOAPRequestResponse.resolver=new XPathResolver();
SOAPRequestResponse.resolver.setNamespacePrefixResolver({"soap":Constants.NS_ENVELOPE});
SOAPRequestResponse.newInstance=function(doc){
var _1159=null;
if(doc&&doc.documentElement){
_1159=new SOAPRequestResponse();
var _115a=SOAPRequestResponse.resolver;
_1159.document=doc;
_1159.envelope=_115a.resolve("soap:Envelope",_1159.document);
_1159.header=_115a.resolve("soap:Header",_1159.envelope);
_1159.body=_115a.resolve("soap:Body",_1159.envelope);
var fault=_115a.resolve("soap:Fault",_1159.body);
if(fault){
SOAPRequestResponse.logger.fatal(DOMSerializer.serialize(fault,true));
_1159.fault={element:fault,faultNamespaceURI:fault.namespaceURI,faultCode:DOMUtil.getTextContent(_115a.resolve("faultcode",fault)),faultString:DOMUtil.getTextContent(_115a.resolve("faultstring",fault)),detail:fault.getElementsByTagName("detail").item(0)};
}
}
return _1159;
};
function SOAPFault(_115c,_115d,_115e){
this._operationName=_115c;
this._operationAddress=_115d;
this._faultString=_115e;
}
SOAPFault.prototype.getOperationName=function(){
return this._operationName;
};
SOAPFault.prototype.getOperationAddress=function(){
return this._operationAddress;
};
SOAPFault.prototype.getFaultString=function(){
return this._faultString;
};
SOAPFault.newInstance=function(_115f,fault){
return new SOAPFault(_115f.name,_115f.address,fault.faultString);
};
function SOAPEncoder(wsdl,_1162){
this.logger=SystemLogger.getLogger("SOAPEncoder");
this._wsdl=wsdl;
this._operation=_1162;
this._namespace=wsdl.getTargetNamespace();
}
SOAPEncoder.prototype.encode=function(args){
var _1164=SOAPRequest.newInstance(this._namespace,this._operation);
var root=this._appendElement(_1164.body,this._operation);
var _1166=this._wsdl.getSchema();
var _1167=_1166.lookup(this._operation);
var _1168=_1167.getListedDefinitions();
while(_1168.hasNext()){
var def=_1168.getNext();
var elm=this._appendElement(root,def.name);
var val=args.getNext();
this._resolve(elm,def,val);
}
return _1164;
};
SOAPEncoder.prototype._resolve=function(_116c,_116d,value){
var _116f=this._wsdl.getSchema();
if(_116d.isSimpleValue){
this._appendText(_116c,value,_116d.type=="string");
}else{
var _1170=_116f.lookup(_116d.type);
if(_1170 instanceof SchemaSimpleType){
alert("SOAPEncoder: SchemaSimpleType support not implemented!");
}else{
var defs=_1170.getListedDefinitions();
if(_1170.isArray){
var _1172=new List(value);
var def=defs.getNext();
while(_1172.hasNext()){
var elm=this._appendElement(_116c,def.name);
var val=_1172.getNext();
this._resolve(elm,def,val);
}
}else{
while(defs.hasNext()){
try{
var def=defs.getNext();
var elm=this._appendElement(_116c,def.name);
var val=value[def.name];
this._resolve(elm,def,val);
}
catch(exception){
this.logger.error("Mysterius malfunction in "+this._operation+":\n\n"+def.name+": "+value);
}
}
}
}
}
};
SOAPEncoder.prototype._appendElement=function(node,name){
var child=DOMUtil.createElementNS(this._namespace,name,node.ownerDocument);
node.appendChild(child);
return child;
};
SOAPEncoder.prototype._appendText=function(_1179,value,_117b){
if(value!=null){
value=new String(value);
var safe=new String("");
var chars=value.split("");
var _117e=false;
var i=0,c;
while(c=chars[i++]){
var _1181=true;
var code=c.charCodeAt(0);
switch(code){
case 9:
case 10:
case 13:
_1181=false;
break;
default:
if((code>=32&&code<=55295)||(code>=57344&&code<=65533)||(code>=65536&&code<=1114111)){
_1181=false;
}
break;
}
if(!_1181){
safe+=c;
}else{
_117e=true;
}
}
if(_117e){
this.logger.debug("Illegal XML character(s) was deleted from the string: "+value);
}
_1179.appendChild(_1179.ownerDocument.createTextNode(safe));
}
};
function SOAPDecoder(wsdl,_1184){
this._wsdl=wsdl;
this._operation=_1184;
this._resolver=new XPathResolver();
this._resolver.setNamespacePrefixResolver({"result":wsdl.getTargetNamespace()});
}
SOAPDecoder.prototype.resolve=function(xpath,node){
return this._resolver.resolve("result:"+xpath,node);
};
SOAPDecoder.prototype.resolveAll=function(xpath,node){
return this._resolver.resolveAll("result:"+xpath,node);
};
SOAPDecoder.prototype.decode=function(_1189){
var _118a=null;
var _118b=this._wsdl.getSchema();
var id=this._operation+"Response";
var _118d=this.resolve(id,_1189.body);
var _118e=_118b.lookup(id);
var _118f=_118e.getListedDefinitions();
while(!_118a&&_118f.hasNext()){
var def=_118f.getNext();
var elm=this.resolve(def.name,_118d);
if(def.type==SchemaDefinition.TYPE_XML_DOCUMENT){
_118a=DOMUtil.getDOMDocument();
var e=elm.getElementsByTagName("*").item(0);
if(typeof _118a.importNode!=Types.UNDEFINED){
_118a.appendChild(_118a.importNode(e,true));
}else{
_118a.loadXML(DOMSerializer.serialize(e));
}
}else{
_118a=this._compute(elm,def);
}
}
return _118a;
};
SOAPDecoder.prototype._compute=function(_1193,_1194){
var _1195=null;
var _1196=this._wsdl.getSchema();
if(_1194.isSimpleValue){
_1195=this._getSimpleValue(_1193,_1194.type);
}else{
var _1197=_1196.lookup(_1194.type);
if(_1197 instanceof SchemaSimpleType){
_1195=this._getSimpleValue(_1193,_1197.restrictionType);
}else{
var defs=_1197.getListedDefinitions();
if(_1197.isArray){
_1195=[];
var def=defs.getNext();
var elms=this.resolveAll(def.type,_1193);
while(elms.hasNext()){
var elm=elms.getNext();
_1195.push(this._compute(elm,def));
}
}else{
_1195={};
defs.reset();
while(defs.hasNext()){
var def=defs.getNext();
var elm=this.resolve(def.name,_1193);
if(elm){
_1195[def.name]=this._compute(elm,def);
}else{
if(def.isRequired){
throw new Error("SOAPDecoder: invalid SOAP response.");
}
}
}
}
}
}
return _1195;
};
SOAPDecoder.prototype._getSimpleValue=function(_119c,type){
var _119e=null;
if(_119c.firstChild&&_119c.firstChild.nodeType==Node.TEXT_NODE){
if(Client.isMozilla&&_119c.childNodes.length>1){
_119c.normalize();
}
_119e=_119c.firstChild.data;
switch(type){
case Schema.types.STRING:
_119e=_119e;
break;
case Schema.types.INT:
case Schema.types.FLOAT:
case Schema.types.DOUBLE:
_119e=Number(_119e);
break;
case Schema.types.BOOLEAN:
_119e=_119e=="true";
break;
default:
throw ("SOAPDecoder: schema type \""+type+"\" not handled.");
break;
}
}
return _119e;
};
Schema.prototype=new XPathResolver;
Schema.prototype.constructor=Schema;
Schema.superclass=XPathResolver.prototype;
Schema.types={STRING:"string",INT:"int",FLOAT:"float",DOUBLE:"double",BOOLEAN:"boolean"};
Schema.notSupportedException=new Error("Schema: Schema structure not supported!");
function Schema(_119f){
this.logger=SystemLogger.getLogger("Schema");
this._map=this._parseSchema(_119f);
}
Schema.prototype._parseSchema=function(_11a0){
this.setNamespacePrefixResolver({"wsdl":Constants.NS_WSDL,"soap":Constants.NS_SOAP,"s":Constants.NS_SCHEMA});
var _11a1={};
var entry=null;
var rules=this.resolveAll("s:*[@name]",_11a0);
while(rules.hasNext()){
var rule=rules.getNext();
switch(DOMUtil.getLocalName(rule)){
case "element":
entry=new SchemaElementType(this,rule);
break;
case "complexType":
entry=new SchemaComplexType(this,rule);
break;
case "simpleType":
entry=new SchemaSimpleType(this,rule);
break;
}
_11a1[rule.getAttribute("name")]=entry;
}
return _11a1;
};
Schema.prototype.lookup=function(name){
return this._map[name];
};
SchemaDefinition.TYPE_XML_DOCUMENT="xmldocument";
function SchemaDefinition(_11a6){
this.logger=SystemLogger.getLogger("SchemaDefinition");
this.isRequired=null;
this.type=null;
this._parse(_11a6);
}
SchemaDefinition.prototype._parse=function(_11a7){
var min=_11a7.getAttribute("minOccurs");
var max=_11a7.getAttribute("maxOccurs");
var type=_11a7.getAttribute("type");
this.name=_11a7.getAttribute("name");
this.isRequired=min!="0";
if(type){
var split=type.split(":");
var sort=split[0];
var _11ad=split[1];
this.isSimpleValue=sort!="tns";
this.type=_11ad;
}else{
var elm=_11a7.getElementsByTagName("*").item(0);
if(elm&&DOMUtil.getLocalName(elm)=="complexType"&&elm.getAttribute("mixed")=="true"){
elm=elm.getElementsByTagName("*").item(0);
if(elm&&DOMUtil.getLocalName(elm)=="sequence"){
elm=elm.getElementsByTagName("*").item(0);
if(DOMUtil.getLocalName(elm)=="any"){
this.type=SchemaDefinition.TYPE_XML_DOCUMENT;
}
}
}
}
};
function SchemaType(){
}
SchemaType.prototype={};
SchemaElementType.prototype=new SchemaType;
SchemaElementType.prototype.constructor=SchemaElementType;
SchemaElementType.superclass=SchemaType.prototype;
function SchemaElementType(_11af,_11b0){
this.logger=SystemLogger.getLogger("SchemaElementType");
this._definitions=new List();
this._parseListedDefinitions(_11af,_11b0);
}
SchemaElementType.prototype._parseListedDefinitions=function(_11b1,_11b2){
var els=_11b1.resolveAll("s:complexType/s:sequence/s:element",_11b2);
if(els.hasEntries()){
while(els.hasNext()){
this._definitions.add(new SchemaDefinition(els.getNext()));
}
}else{
this.logger.warn("SchemaElementType: Unparsed SchemaDefinition encountered.");
throw Schema.notSupportedException;
}
};
SchemaElementType.prototype.getListedDefinitions=function(){
return this._definitions.copy();
};
SchemaComplexType.prototype=new SchemaType;
SchemaComplexType.prototype.constructor=SchemaComplexType;
SchemaComplexType.superclass=SchemaType.prototype;
function SchemaComplexType(_11b4,_11b5){
this._definitions=new List();
this._parseListedDefinitions(_11b4,_11b5);
this.isArray=_11b5.getAttribute("name").indexOf("ArrayOf")>-1;
}
SchemaComplexType.prototype._parseListedDefinitions=function(_11b6,_11b7){
var els=_11b6.resolveAll("s:sequence/s:element",_11b7);
if(els.hasEntries()){
while(els.hasNext()){
var el=els.getNext();
this._definitions.add(new SchemaDefinition(el));
}
}else{
throw Schema.notSupportedException;
}
};
SchemaComplexType.prototype.getListedDefinitions=function(){
return this._definitions.copy();
};
SchemaSimpleType.prototype=new SchemaType;
SchemaSimpleType.prototype.constructor=SchemaSimpleType;
SchemaSimpleType.superclass=SchemaType.prototype;
function SchemaSimpleType(_11ba,_11bb){
this.restrictionType=null;
this._parse(_11ba,_11bb);
}
SchemaSimpleType.prototype._parse=function(_11bc,_11bd){
var _11be=_11bc.resolve("s:restriction",_11bd);
if(_11be){
this.restrictionType=_11be.getAttribute("base").split(":")[1];
}else{
throw Schema.notSupportedException;
}
};
WebServiceResolver.prototype=new XPathResolver;
WebServiceResolver.prototype.constructor=WebServiceResolver;
WebServiceResolver.superclass=XPathResolver.prototype;
function WebServiceResolver(url){
this.logger=SystemLogger.getLogger("WebServiceResolver");
this._root=this._getDocumentElement(url);
this._schema=null;
if(this._root){
this.setNamespacePrefixResolver({"wsdl":Constants.NS_WSDL,"soap":Constants.NS_SOAP,"s":Constants.NS_SCHEMA});
this._schema=new Schema(this.resolve("wsdl:types/s:schema",this._root));
}
this._WSDLURL=url;
}
WebServiceResolver.prototype._getDocumentElement=function(url){
var _11c1=null;
var _11c2=DOMUtil.getXMLHTTPRequest();
_11c2.open("get",url,false);
_11c2.send(null);
if(_11c2.responseXML){
_11c1=_11c2.responseXML.documentElement;
}else{
alert(_11c2.responseText);
throw new Error("WebServiceResolver: Could not read WSDL: "+url);
}
return _11c1;
};
WebServiceResolver.prototype.getPortAddress=function(){
return this._WSDLURL.split("?WSDL")[0];
};
WebServiceResolver.prototype.getTargetNamespace=function(){
return this._root.getAttribute("targetNamespace");
};
WebServiceResolver.prototype.getOperations=function(){
var _11c3=new List();
var _11c4=this.resolveAll("wsdl:portType/wsdl:operation",this._root);
if(_11c4.hasEntries()){
while(_11c4.hasNext()){
var _11c5=_11c4.getNext();
var name=_11c5.getAttribute("name");
_11c3.add(new WebServiceOperation(name,this.getPortAddress(),new SOAPEncoder(this,name),new SOAPDecoder(this,name)));
}
}else{
throw new Error("WebServiceResolver: No portType found.");
}
return _11c3;
};
WebServiceResolver.prototype.getSchema=function(){
return this._schema;
};
function WebServiceOperation(name,_11c8,_11c9,_11ca){
this.name=name;
this.address=_11c8;
this.encoder=_11c9;
this.decoder=_11ca;
}
WebServiceOperation.prototype={name:null,address:null,encoder:null,decoder:null};
WebServiceProxy.isLoggingEnabled=true;
WebServiceProxy.isDOMResult=false;
WebServiceProxy.isFaultHandler=true;
function WebServiceProxy(){
this.logger=SystemLogger.getLogger("WebServiceProxy");
}
WebServiceProxy.createProxy=function(url){
var wsdl=new WebServiceResolver(url);
var proxy=new WebServiceProxy();
var _11ce=wsdl.getOperations();
_11ce.each(function(_11cf){
proxy[_11cf.name]=WebServiceProxy.createProxyOperation(_11cf);
});
return proxy;
};
WebServiceProxy.prototype._log=function(_11d0,_11d1){
if(WebServiceProxy.isLoggingEnabled&&Application.isDeveloperMode&&_11d1){
var log=_11d1 instanceof SOAPRequest?"SOAPRequest for ":"SOAPResponse from ";
log+=_11d0.address+": "+_11d0.name+"\n\n";
log+=DOMSerializer.serialize(_11d1.document,true);
this.logger.fine(log);
}
};
WebServiceProxy.createProxyOperation=function(_11d3){
return function(){
var _11d4=null,_11d5=_11d3.encoder.encode(new List(arguments));
this._log(_11d3,_11d5);
var _11d6=_11d5.invoke(_11d3.address);
this._log(_11d3,_11d6);
if(_11d6){
if(_11d6.fault){
_11d4=SOAPFault.newInstance(_11d3,_11d6.fault);
if(WebServiceProxy.isFaultHandler){
WebServiceProxy.handleFault(_11d4,_11d5,_11d6);
}
}else{
if(WebServiceProxy.isDOMResult){
_11d4=_11d6.document;
}else{
_11d4=_11d3.decoder.decode(_11d6);
}
}
}
_11d5.dispose();
return _11d4;
};
};
WebServiceProxy.handleFault=function(_11d7,_11d8,_11d9){
try{
Dialog.invokeModal(Dialog.URL_SERVICEFAULT,null,{soapFault:_11d7,soapRequest:_11d8,soapResponse:_11d9});
}
catch(exception){
alert(_11d7.getFaultString());
}
};
var ConfigurationService=null;
var ConsoleMessageQueueService=null;
var EditorConfigurationService=null;
var FlowControllerService=null;
var InstallationService=null;
var LocalizationService=null;
var LoginService=null;
var MarkupFormatService=null;
var PageService=null;
var ReadyService=null;
var SecurityService=null;
var SEOService=null;
var SourceValidationService=null;
var StringService=null;
var TreeService=null;
var XhtmlTransformationsService=null;
window.MessageQueue=new function(){
this.INTERVAL_ONLINE=15*1000;
this.INTERVAL_OFFLINE=4*1000;
this._actions=new List();
this._index={};
this.index=0;
var _11da=SystemLogger.getLogger("MessageQueue");
var _11db=null;
var _11dc=0;
var _11dd=null;
var _11de=new Map();
var _11df=new Map();
var _11e0=false;
var _11e1=false;
var _11e2={"Main":DockBinding.MAIN,"BottomLeft":DockBinding.BOTTOMLEFT,"BottomRight":DockBinding.BOTTOMRIGHT,"RightTop":DockBinding.RIGHTTOP,"RightBottom":DockBinding.RIGHTBOTTOM,"AbsBottomLeft":DockBinding.ABSBOTTOMLEFT,"AbsBottomRight":DockBinding.ABSBOTTOMRIGHT};
this.initialize=function(){
_11db=ConsoleMessageQueueService;
_11dc=_11db.GetCurrentSequenceNumber("dummyparam!");
this.index=_11dc;
EventBroadcaster.subscribe(BroadcastMessages.VIEW_COMPLETED,this);
EventBroadcaster.subscribe(BroadcastMessages.VIEW_CLOSED,this);
EventBroadcaster.subscribe(BroadcastMessages.SERVER_OFFLINE,this);
EventBroadcaster.subscribe(BroadcastMessages.SERVER_ONLINE,this);
window.messageQueueInterval=window.setInterval(MessageQueue._autoupdate,MessageQueue.INTERVAL_ONLINE);
};
this._autoupdate=function(){
if(!_11e0){
if(!MessageQueue._actions.hasEntries()){
var _11e3=WebServiceProxy.isLoggingEnabled;
if(Application.isLoggedIn){
_11e1=true;
WebServiceProxy.isLoggingEnabled=false;
MessageQueue.update();
WebServiceProxy.isLoggingEnabled=_11e3;
_11e1=false;
}
}
}
};
this._pokeserver=function(){
if(_11e0==true){
if(ReadyService.IsServerReady(true)){
MessageQueue._lockSystem(false);
}
}
};
this.update=function(){
if(Application.isLoggedIn){
EventBroadcaster.broadcast(BroadcastMessages.MESSAGEQUEUE_REQUESTED,_11e1);
var _11e4=_11db.GetMessages(Application.CONSOLE_ID,this.index);
if(_11e4!=null){
if(Types.isDefined(_11e4.CurrentSequenceNumber)){
var _11e5=_11e4.CurrentSequenceNumber;
if(_11e5<this.index){
_11da.debug("SERVER WAS RESTARTED! old messagequeue index: "+this.index+", new messagequeue index: "+_11e5);
}
this.index=_11e5;
var _11e6=new List(_11e4.ConsoleActions);
if(_11e6.hasEntries()){
this.evaluate(_11e6);
}else{
if(!this._actions.hasEntries()){
broadcastUpdateEvaluated();
}
}
}else{
_11da.error("No sequencenumber in MessageQueue response!");
}
}
}
};
this.evaluate=function(_11e7){
var _11e8=new List();
if(_11e7.hasEntries()){
_11e7.each(function(_11e9){
if(this._index[_11e9.Id]!=true){
_11e8.add(_11e9);
}
this._index[_11e9.Id]=true;
},this);
if(_11e8.hasEntries()){
if(this._actions.hasEntries()){
this._actions.merge(_11e8);
}else{
this._actions=_11e8;
}
this._nextAction();
}
}
};
this._closeAllViews=function(_11ea){
var _11eb="(No reason)";
if(_11ea!=null){
_11eb=_11ea.Reason;
}
var title="Warning";
var text="The server has requested a close of all active editors for the following reason: \"${reason}\". It is recommended that you accept this request by clicking OK.";
text=text.replace("${reason}",_11eb);
var self=this;
Dialog.warning(title,text,Dialog.BUTTONS_ACCEPT_CANCEL,{handleDialogResponse:function(_11ef){
if(_11ef==Dialog.RESPONSE_ACCEPT){
EventBroadcaster.broadcast(BroadcastMessages.CLOSE_VIEWS);
}
self._nextAction();
}});
};
this._nextAction=function(){
var _11f0=null;
if(this._actions.hasEntries()){
var _11f1=this._actions.extractFirst();
_11dc=_11f1.SequenceNumber;
_11da.debug("MessageQueue action: "+_11f1.ActionType+" > QUEUE-MAX-SEQNUM: "+this.index+" > CURRENT SEQNUM: "+_11dc+" > ACTIONS-LEFT: "+this._actions.getLength());
switch(_11f1.ActionType){
case "OpenView":
_11f0=_11f1.OpenViewParams;
if(_11f0.ViewType=="ModalDialog"){
openDialogView(_11f0);
}else{
_11dd=_11f0.ViewId;
openView(_11f0);
}
break;
case "CloseView":
_11f0=_11f1.CloseViewParams;
_11dd=_11f0.ViewId;
closeView(_11f0);
break;
case "RefreshTree":
EventBroadcaster.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHING,this);
EventBroadcaster.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED,this);
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESH,_11f1.RefreshTreeParams.EntityToken);
var debug="REFRESHING TREES: "+_11de.countEntries()+"\n";
_11de.each(function(token){
debug+="\n\tTOKEN: "+token;
});
_11da.debug(debug);
if(!_11de.hasEntries()){
EventBroadcaster.unsubscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHING,this);
EventBroadcaster.unsubscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED,this);
this._nextAction();
}
break;
case "MessageBox":
openMessageBox(_11f1.MessageBoxParams);
break;
case "OpenViewDefinition":
_11f0=_11f1.OpenViewDefinitionParams;
_11dd=_11f0.Handle;
openViewDefinition(_11f0);
break;
case "LogEntry":
logEntry(_11f1.LogEntryParams);
this._nextAction();
break;
case "Reboot":
Application.reload(true);
break;
case "LockSystem":
MessageQueue._lockSystem(true);
break;
case "BroadcastMessage":
_11f0=_11f1.BroadcastMessageParams;
_11da.debug("Server says: EventBroadcaster.broadcast ( \""+_11f0.Name+"\", "+_11f0.Value+" )");
EventBroadcaster.broadcast(_11f0.Name,_11f0.Value);
this._nextAction();
break;
case "CollapseAndRefresh":
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_COLLAPSEALL);
EventBroadcaster.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHING,this);
EventBroadcaster.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED,this);
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESHALL);
if(!_11de.hasEntries()){
EventBroadcaster.unsubscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHING,this);
EventBroadcaster.unsubscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED,this);
this._nextAction();
}
break;
case "CloseAllViews":
this._closeAllViews(_11f1.CloseAllViewsParams);
break;
case "SaveStatus":
saveStatus(_11f1.SaveStatusParams);
this._nextAction();
break;
case "DownloadFile":
Download.init(_11f1.DownloadFileParams.Url);
this._nextAction();
break;
case "ExpandTreeNode":
this._nextAction();
break;
case "BindEntityTokenToView":
_11f0=_11f1.BindEntityTokenToViewParams;
EventBroadcaster.broadcast(BroadcastMessages.BIND_TOKEN_TO_VIEW,{handle:_11f0.ViewId,entityToken:_11f0.EntityToken});
this._nextAction();
break;
case "OpenGenericView":
_11f0=_11f1.OpenGenericViewParams;
openGenericView(_11f0);
break;
default:
Dialog.error("Dysfunction","Unhandled action: "+_11f1.ActionType);
break;
}
}else{
broadcastUpdateEvaluated();
}
};
function broadcastUpdateEvaluated(){
EventBroadcaster.broadcast(BroadcastMessages.MESSAGEQUEUE_EVALUATED,_11e1);
}
function logEntry(_11f4){
var _11f5=_11f4.Level.toLowerCase();
SystemLogger.getLogger(_11f4.SenderId)[_11f5](_11f4.Message);
}
function openView(_11f6){
var list=paramsToList(_11f6.Argument);
if(list.hasEntries()){
var def=ViewDefinition.clone("Composite.Management.PostBackView",_11f6.ViewId);
def.entityToken=_11f6.EntityToken;
def.flowHandle=_11f6.FlowHandle;
def.position=_11e2[_11f6.ViewType],def.label=_11f6.Label;
def.image=_11f6.Image;
def.toolTip=_11f6.ToolTip;
def.argument={"url":_11f6.Url,"list":list};
StageBinding.presentViewDefinition(def);
}else{
StageBinding.presentViewDefinition(new HostedViewDefinition({handle:_11f6.ViewId,entityToken:_11f6.EntityToken,flowHandle:_11f6.FlowHandle,position:_11e2[_11f6.ViewType],url:_11f6.Url,label:_11f6.Label,image:_11f6.Image,toolTip:_11f6.ToolTip}));
}
}
function openDialogView(_11f9){
StageBinding.presentViewDefinition(new DialogViewDefinition({handle:_11f9.ViewId,flowHandle:_11f9.FlowHandle,position:Dialog.MODAL,url:_11f9.Url,handler:{handleDialogResponse:function(){
setTimeout(function(){
MessageQueue._nextAction();
},250);
}}}));
}
function openMessageBox(_11fa){
var _11fb=_11fa.DialogType.toLowerCase();
if(_11fb=="question"){
throw "Not supported!";
}else{
Dialog[_11fb](_11fa.Title,_11fa.Message,null,{handleDialogResponse:function(){
setTimeout(function(){
MessageQueue._nextAction();
},250);
}});
}
}
function openViewDefinition(_11fc){
var map={};
var _11fe=false;
new List(_11fc.Argument).each(function(entry){
map[entry.Key]=entry.Value;
_11fe=true;
});
var proto=ViewDefinitions[_11fc.Handle];
if(proto!=null){
var def=null;
if(proto.isMutable==false){
def=proto;
}else{
def=new HostedViewDefinition();
for(var prop in proto){
def[prop]=proto[prop];
}
def.handle=_11fc.ViewId;
}
def.argument=_11fe?map:null;
StageBinding.presentViewDefinition(def);
}else{
throw "Unknown ViewDefinition: "+param.Handle;
}
}
function openGenericView(_1203){
var def=ViewBinding.clone("Composite.Management.GenericView",_1203.ViewId);
def.label=_1203.Label;
def.toolTip=_1203.ToolTip;
def.image=_1203.Image;
def.argument={"url":_1203.Url,"list":paramsToList(_1203.UrlPostArguments)};
StageBinding.presentViewDefinition(def);
}
function closeView(_1205){
if(StageBinding.isViewOpen(_1205.ViewId)){
EventBroadcaster.broadcast(BroadcastMessages.CLOSE_VIEW,_1205.ViewId);
}else{
MessageQueue._nextAction();
}
}
function saveStatus(_1206){
EventBroadcaster.broadcast(BroadcastMessages.CURRENT_SAVED,{handle:_1206.ViewId,isSuccess:_1206.Succeeded});
}
this._lockSystem=function(_1207){
var _1208=top.bindingMap.offlinetheatre;
if(_1207){
_1208.play(true);
window.clearInterval(window.messageQueueInterval);
window.messageQueueInterval=window.setInterval(MessageQueue._pokeserver,MessageQueue.INTERVAL_OFFLINE);
}else{
_1208.stop();
window.clearInterval(window.messageQueueInterval);
window.messageQueueInterval=window.setInterval(MessageQueue._autoupdate,MessageQueue.INTERVAL_ONLINE);
var self=this;
setTimeout(function(){
if(self._actions.hasEntries()){
self._nextAction();
}
},0);
}
_11e0=_1207;
};
this.handleBroadcast=function(_120a,arg){
switch(_120a){
case BroadcastMessages.APPLICATION_LOGIN:
this.initialize();
break;
case BroadcastMessages.VIEW_COMPLETED:
case BroadcastMessages.VIEW_CLOSED:
if(_11dd!=null&&arg==_11dd){
_11dd=null;
this._nextAction();
}
break;
case BroadcastMessages.SYSTEMTREEBINDING_REFRESHING:
if(arg!=null){
_11de.set(arg,true);
}else{
_11da.debug("Saa har vi balladen!");
}
break;
case BroadcastMessages.SYSTEMTREEBINDING_REFRESHED:
if(_11de.hasEntries()){
_11de.del(arg);
_11da.debug("Refreshed tree: "+arg+"\n("+_11de.countEntries()+" trees left!)");
if(!_11de.hasEntries()){
EventBroadcaster.unsubscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHING,this);
EventBroadcaster.unsubscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED,this);
setTimeout(function(){
MessageQueue._nextAction();
},0);
}
}
break;
case BroadcastMessages.SYSTEMTREENODEBINDING_FORCING_OPEN:
_11df.set(arg,true);
break;
case BroadcastMessages.SYSTEMTREENODEBINDING_FORCED_OPEN:
if(_11df.hasEntries()==true){
_11df.del(arg);
if(!_11df.hasEntries()){
EventBroadcaster.unsubscribe(BroadcastMessages.SYSTEMTREENODEBINDING_FORCING_OPEN,this);
EventBroadcaster.unsubscribe(BroadcastMessages.SYSTEMTREENODEBINDING_FORCED_OPEN,this);
MessageQueue._nextAction();
}
}
break;
case BroadcastMessages.SERVER_OFFLINE:
MessageQueue._lockSystem(true);
break;
case BroadcastMessages.SERVER_ONLINE:
MessageQueue._lockSystem(false);
break;
}
};
function paramsToList(_120c){
var list=new List();
new List(_120c).each(function(entry){
list.add({name:entry.Key,value:entry.Value});
});
return list;
}
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_LOGIN,this);
};
var ViewDefinitions={"Composite.Management.Null":new HostedViewDefinition({isMutable:true,handle:"Composite.Management.Null"}),"Composite.Management.PostBackDialog":new DialogViewDefinition({handle:"Composite.Management.PostBackDialog",isMutable:true,position:Dialog.MODAL,url:"${root}/content/dialogs/postback/postbackdialog.aspx",argument:{"url":null,"list":null}}),"Composite.Management.PostBackView":new HostedViewDefinition({handle:"Composite.Management.PostBackView",isMutable:true,position:DockBinding.MAIN,url:"${root}/postback.aspx",argument:{"url":null,"list":null}}),"Composite.Management.GenericView":new HostedViewDefinition({handle:"Composite.Management.GenericView",isMutable:true,position:DockBinding.MAIN,url:"${root}/content/views/generic/generic.aspx",label:null,image:null,toolTip:null,argument:{"url":null,"list":null}}),"Composite.Management.Start":new HostedViewDefinition({handle:"Composite.Management.Start",position:DockBinding.START,label:"Welcome Travellers",url:"${root}/content/views/start/start.aspx"}),"Composite.Management.About":new DialogViewDefinition({handle:"Composite.Management.About",position:Dialog.MODAL,url:"${root}/content/dialogs/about/about.aspx"}),"Composite.Management.PermissionEditor":new HostedViewDefinition({isMutable:true,handle:"Composite.Management.PermissionEditor",position:DockBinding.MAIN,url:"${root}/content/views/editors/permissioneditor/permissioneditor.aspx",argument:{serializedEntityToken:"entityTokenType='Composite\\.Plugins\\.Elements\\.ElementProviders\\.VirtualElementProvider\\.VirtualElementProviderEntityToken,Composite'entityToken='_EntityToken_Type_=\\'Composite\\\\\\.Plugins\\\\\\.Elements\\\\\\.ElementProviders\\\\\\.VirtualElementProvider\\\\\\.VirtualElementProviderEntityToken,Composite\\'_EntityToken_Source_=\\'VirtualElementProvider\\'_EntityToken_Id_=\\'DesignPerspective\\''\""}}),"Composite.Management.SystemLog":new HostedViewDefinition({handle:"Composite.Management.SystemLog",position:DockBinding.ABSBOTTOMLEFT,label:"System Log",url:"${root}/content/views/dev/systemlog/systemlog.aspx"}),"Composite.Management.Developer":new HostedViewDefinition({handle:"Composite.Management.Developer",position:DockBinding.ABSBOTTOMRIGHT,label:"Developer",url:"${root}/content/views/dev/developer/developer.aspx"}),"Composite.Management.IconPack.System":new HostedViewDefinition({handle:"Composite.Management.IconPack.System",position:DockBinding.ABSBOTTOMLEFT,label:"Freja",image:"${icon:icon}",url:"${root}/content/views/dev/icons/system/Default.aspx"}),"Composite.Management.IconPack.Republic":new HostedViewDefinition({handle:"Composite.Management.IconPack.Republic",position:DockBinding.ABSBOTTOMLEFT,label:"Republic",image:"${icon:icon}",url:"${root}/content/views/dev/icons/files/republic.aspx"}),"Composite.Management.IconPack.Harmony":new HostedViewDefinition({handle:"Composite.Management.IconPack.Harmony",position:DockBinding.ABSBOTTOMLEFT,label:"Harmony",image:"${icon:icon}",url:"${root}/content/views/dev/icons/files/harmony.aspx"}),"Composite.Management.Explorer":new HostedViewDefinition({handle:"Composite.Management.Explorer",position:DockBinding.EXPLORER,url:"${root}/content/views/explorer/explorer.aspx",label:"Explorer"}),"Composite.Management.Options":new DialogViewDefinition({handle:"Composite.Management.Options",position:Dialog.MODAL,url:"${root}/content/dialogs/options/options.aspx",label:"Options"}),"Composite.Management.VisualEditorDialog":new DialogViewDefinition({isMutable:true,handle:"Composite.Management.VisualEditorDialog",position:Dialog.MODAL,url:"${root}/content/dialogs/wysiwygeditor/wysiwygeditordialog.aspx",width:600,argument:{"formattingconfiguration":null,"elementclassconfiguration":null,"configurationstylesheet":null,"presentationstylesheet":null,"embedablefieldstypenames":null}}),"Composite.Management.MultiSelectorDialog":new DialogViewDefinition({isMutable:true,handle:"Composite.Management.MultiSelectorDialog",position:Dialog.MODAL,url:"${root}/content/dialogs/multiselector/multiselectordialog.aspx"}),"Composite.Management.Search":new HostedViewDefinition({handle:"Composite.Management.Search",position:DockBinding.RIGHTBOTTOM,url:"${root}/content/views/search/search.aspx",label:"Search",image:"${icon:view_search}",argument:null}),"Composite.Management.Browser":new HostedViewDefinition({isMutable:false,handle:"Composite.Management.Browser",position:DockBinding.MAIN,perspective:ExplorerBinding.PERSPECTIVE_CONTENT,label:"Page Browser",image:"${icon:page-view-administrated-scope}",toolTip:"Browse unpublished pages",url:"${root}/content/views/browser/browser.aspx",argument:{"URL":null}}),"Composite.Management.SEOAssistant":new HostedViewDefinition({handle:"Composite.Management.SEOAssistant",position:DockBinding.RIGHTTOP,perspective:ExplorerBinding.PERSPECTIVE_CONTENT,url:"${root}/content/views/seoassist/seoassist.aspx",label:"${string:Composite.Web.SEOAssistant:SEOAssistant}",image:"${icon:seoassistant}",toolTip:"Search engine optimization"}),"Composite.Management.SourceCodeViewer":new HostedViewDefinition({isMutable:true,handle:"Composite.Management.SourceCodeViewer",position:DockBinding.ABSBOTTOMLEFT,url:"${root}/content/views/dev/viewsource/viewsource.aspx",argument:{"action":null,"viewBinding":null}}),"Composite.User.SourceCodeViewer":new HostedViewDefinition({isMutable:true,handle:"Composite.User.SourceCodeViewer",position:DockBinding.BOTTOMLEFT,url:"${root}/content/views/dev/viewsource/viewsource.aspx",argument:{"action":null,"viewBinding":null}}),"Composite.Management.Help":new HostedViewDefinition({label:"Help",image:"${icon:help}",handle:"Composite.Management.Help",position:DockBinding.ABSRIGHTTOP,url:"${root}/content/views/help/help.aspx"}),"Composite.Management.Dialog.Translations":new DialogViewDefinition({handle:"Composite.Management.TranslationsDialog",position:Dialog.MODAL,url:"${root}/content/dialogs/translations/translations.aspx",label:"Translations",image:"${icon:users-changepublicculture}"}),"Composite.Management.ImageSelectorDialog":new DialogViewDefinition({isMutable:true,handle:"Composite.Management.ImageSelectorDialog",position:Dialog.MODAL,url:Dialog.URL_IMAGESELECTOR,argument:{label:"Select Image",image:"${icon:image}",selectionProperty:"ElementType",selectionValue:"image/jpeg image/gif image/png image/bmp image/tiff",selectionResult:"Uri",nodes:[{key:"MediaFileElementProvider",search:"MediaFileElementProvider.WebImages"}]}}),"Composite.Management.EmbeddableMediaSelectorDialog":new DialogViewDefinition({isMutable:true,handle:"Composite.Management.EmbeddableMediaSelectorDialog",position:Dialog.MODAL,url:Dialog.URL_TREESELECTOR,argument:{label:"Select Media",image:"${icon:media}",selectionProperty:"ElementType",selectionValue:null,selectionResult:"Uri",nodes:[{key:"MediaFileElementProvider",search:null}]}}),"Composite.Management.FrontendFileSelectorDialog":new DialogViewDefinition({handle:"Composite.Management.EmbeddableMediaSelectorDialog",position:Dialog.MODAL,url:Dialog.URL_TREESELECTOR,argument:{label:"Select Frontend File",image:"${icon:media}",selectionProperty:"ElementType",selectionValue:null,selectionResult:"Uri",nodes:[{key:"LayoutFileElementProvider"}]}}),"Composite.Management.PageSelectorDialog":new DialogViewDefinition({handle:"Composite.Management.PageSelectorDialog",position:Dialog.MODAL,url:Dialog.URL_TREESELECTOR,argument:{label:"Select Page",image:"${icon:page}",selectionProperty:"Uri",selectionValue:null,selectionResult:"Uri",nodes:[{key:"PageElementProvider"}]}}),"Composite.Management.PageIdSelectorDialog":new DialogViewDefinition({handle:"Composite.Management.PageIdSelectorDialog",isMutable:true,position:Dialog.MODAL,url:Dialog.URL_TREESELECTOR,argument:{label:"Select Page",image:"${icon:page}",selectionProperty:"DataId",selectionValue:null,selectionResult:"DataId",nodes:[{key:"PageElementProvider"}]}}),"Composite.Management.LinkableSelectorDialog":new DialogViewDefinition({handle:"Composite.Management.LinkableSelectorDialog",position:Dialog.MODAL,url:Dialog.URL_TREESELECTOR,argument:{label:"Select Page or File",image:"${icon:link}",selectionProperty:"Uri",selectionValue:null,selectionResult:"Uri",nodes:[{key:"PageElementProvider"},{key:"MediaFileElementProvider"}]}}),"Composite.Management.MediaSelectorDialog":new DialogViewDefinition({handle:"Composite.Management.MediaSelectorDialog",position:Dialog.MODAL,url:Dialog.URL_TREESELECTOR,argument:{label:"Select Page or File",image:"${icon:link}",selectionProperty:"Uri",selectionValue:null,selectionResult:"Uri",nodes:[{key:"MediaFileElementProvider"}]}}),"Composite.Management.FunctionSelectorDialog":new DialogViewDefinition({handle:"Composite.Management.FunctionSelectorDialog",isMutable:true,position:Dialog.MODAL,url:Dialog.URL_TREESELECTOR,argument:{label:"Select Function",image:"${icon:functioncall}",selectionProperty:"ElementType",selectionValue:MimeTypes.COMPOSITEFUNCTION,selectionResult:"ElementId",nodes:[{key:"AllFunctionsElementProvider"}]}}),"Composite.Management.WidgetFunctionSelectorDialog":new DialogViewDefinition({handle:"Composite.Management.WidgetFunctionSelectorDialog",position:Dialog.MODAL,url:Dialog.URL_TREESELECTOR,argument:{label:"Select Widget",image:"${icon:functioncall}",selectionProperty:"ElementType",selectionValue:MimeTypes.COMPOSITEFUNCTION,selectionResult:"ElementId",nodes:[{key:"AllWidgetFunctionsElementProvider"}]}}),"Composite.Management.XhtmlDocumentFunctionSelectorDialog":new DialogViewDefinition({handle:"Composite.Management.XhtmlDocumentFunctionSelectorDialog",position:Dialog.MODAL,url:Dialog.URL_TREESELECTOR,argument:{label:"Select Function",image:"${icon:functioncall}",selectionProperty:"ElementType",selectionValue:MimeTypes.COMPOSITEFUNCTION,selectionResult:"ElementId",nodes:[{key:"AllFunctionsElementProvider",search:"AllFunctionsElementProvider.XhtmlDocument"}]}})};
var KickStart=new function(){
var _120f=false;
var _1210=false;
var _1211=null;
var _1212=false;
var _1213=Client.qualifies();
var _1214="admin";
var _1215="123456";
this.fireOnLoad=function(){
if(_1213){
Application.lock(this);
fileEventBroadcasterSubscriptions(true);
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_SHUTDOWN,this);
SetupService=WebServiceProxy.createProxy(Constants.URL_WSDL_SETUPSERVICE);
ReadyService=WebServiceProxy.createProxy(Constants.URL_WSDL_READYSERVICE);
LoginService=WebServiceProxy.createProxy(Constants.URL_WSDL_LOGINSERVICE);
InstallationService=WebServiceProxy.createProxy(Constants.URL_WSDL_INSTALLSERVICE);
EventBroadcaster.broadcast(BroadcastMessages.APPLICATION_KICKSTART);
}else{
document.location="unsupported.aspx";
}
};
this.handleBroadcast=function(_1216){
switch(_1216){
case BroadcastMessages.AUDIO_INITIALIZED:
case BroadcastMessages.PERSISTANCE_INITIALIZED:
kickStart(_1216);
break;
case BroadcastMessages.APPLICATION_STARTUP:
break;
case BroadcastMessages.KEY_ENTER:
this.login();
break;
case BroadcastMessages.APPLICATION_LOGIN:
var _1217=window.bindingMap.appwindow;
_1217.setURL("app.aspx");
break;
case BroadcastMessages.APPLICATION_OPERATIONAL:
showWorkbench();
break;
case BroadcastMessages.APPLICATION_SHUTDOWN:
if(bindingMap.decks!=null){
bindingMap.decks.select("shutdowndeck");
}
bindingMap.cover.show();
break;
}
};
function fileEventBroadcasterSubscriptions(_1218){
new List([BroadcastMessages.AUDIO_INITIALIZED,BroadcastMessages.PERSISTANCE_INITIALIZED,BroadcastMessages.APPLICATION_STARTUP,BroadcastMessages.APPLICATION_LOGIN,BroadcastMessages.APPLICATION_OPERATIONAL]).each(function(_1219){
if(_1218){
EventBroadcaster.subscribe(_1219,KickStart);
}else{
EventBroadcaster.unsubscribe(_1219,KickStart);
}
});
}
function kickStart(_121a){
switch(_121a){
case BroadcastMessages.AUDIO_INITIALIZED:
_1210=true;
setTimeout(function(){
Persistance.initialize();
},0);
break;
case BroadcastMessages.PERSISTANCE_INITIALIZED:
_120f=true;
break;
}
if(_120f&&_1210){
if(bindingMap.decks!=null&&LoginService.IsLoggedIn(true)){
accessGranted();
}else{
if(bindingMap.decks!=null){
splashScreenData();
showLogin();
}else{
showWelcome();
}
}
}
}
function splashScreenData(){
var ver=document.getElementById("version");
ver.firstChild.data=ver.firstChild.data.replace("${version}",Installation.versionPrettyString);
var build=document.getElementById("build");
build.firstChild.data=build.firstChild.data.replace("${build}",Installation.versionString);
}
function showWelcome(){
Application.unlock(KickStart);
if(window.Welcome!=null){
Welcome.test();
}
}
function showLogin(){
EventBroadcaster.subscribe(BroadcastMessages.KEY_ENTER,KickStart);
Application.unlock(KickStart);
bindingMap.decks.select("logindeck");
setTimeout(function(){
if(Application.isDeveloperMode&&Application.isLocalHost){
DataManager.getDataBinding("username").setValue(_1214);
DataManager.getDataBinding("password").setValue(_1215);
}
setTimeout(function(){
DataManager.getDataBinding("username").focus();
},250);
},0);
}
function watchProgress(){
window.progressOnRegistrationInterval=window.setInterval(function(){
if(ReadyService.IsServerReady(true)){
window.clearInterval(window.progressOnRegistrationInterval);
window.progressOnRegistrationInterval=null;
splashScreenData();
showLogin();
}
},2000);
}
function showWorkbench(){
setTimeout(function(){
bindingMap.cover.hide();
fileEventBroadcasterSubscriptions(false);
Application.unlock(KickStart);
},PageBinding.TIMEOUT);
}
this.login=function(){
Application.lock(KickStart);
setTimeout(function(){
if(bindingMap.toppage.validateAllDataBindings()){
KickStart.doLogin(DataManager.getDataBinding("username").getResult(),DataManager.getDataBinding("password").getResult());
}else{
Application.unlock(KickStart);
}
},25);
};
this.doLogin=function(_121d,_121e){
var _121f=WebServiceProxy.isLoggingEnabled;
WebServiceProxy.isLoggingEnabled=false;
WebServiceProxy.isFaultHandler=false;
var _1220=false;
var _1221=LoginService.ValidateAndLogin(_121d,_121e);
if(_1221 instanceof SOAPFault){
alert(_1221.getFaultString());
}else{
_1220=_1221;
}
if(_1220){
EventBroadcaster.unsubscribe(BroadcastMessages.KEY_ENTER,KickStart);
accessGranted();
}else{
Application.unlock(KickStart);
if(bindingMap.decks!=null){
accesssDenied();
}
}
WebServiceProxy.isFaultHandler=true;
if(_121f){
WebServiceProxy.isLoggingEnabled=true;
}
};
function accessGranted(){
setTimeout(function(){
if(bindingMap.decks!=null){
bindingMap.decks.select("loadingdeck");
}
setTimeout(function(){
Application.login();
},0);
},0);
}
function accesssDenied(){
var _1222=DataManager.getDataBinding("username");
var _1223=DataManager.getDataBinding("password");
_1222.blur();
_1223.blur();
_1222.setValue("");
_1223.setValue("");
_1222.clean();
_1223.clean();
_1222.focus();
document.getElementById("loginerror").style.display="block";
var _1224={handleAction:function(_1225){
document.getElementById("loginerror").style.display="none";
_1225.target.removeActionListener(Binding.ACTION_DIRTY,_1224);
}};
bindingMap.loginfields.addActionListener(Binding.ACTION_DIRTY,_1224);
}
WindowManager.fireOnLoad(this);
if(!_1213){
UpdateManager.isEnabled=false;
}
};

