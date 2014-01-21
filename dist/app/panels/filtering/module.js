/*! kibana - v3.0.0pre-milestone5 - 2014-01-21
 * Copyright (c) 2014 Rashid Khan; Licensed Apache License */

define("panels/filtering/module",["angular","app","underscore"],function(a,b,c){var d=a.module("kibana.panels.filtering",[]);b.useModule(d),d.controller("filtering",["$scope","filterSrv","$rootScope","dashboard",function(a,b,d,e){a.panelMeta={status:"Stable",description:"A controllable list of all filters currently applied to the dashboard. You almost certainly want one of these on your dashboard somewhere."};var f={};c.defaults(a.panel,f),a.$on("filter",function(){a.row.notice=!0}),a.init=function(){a.filterSrv=b},a.remove=function(a){b.remove(a)},a.toggle=function(a){b.list[a].active=!b.list[a].active,e.refresh()},a.add=function(a){a=a||"*",b.set({editing:!0,type:"querystring",query:a,mandate:"must"},void 0,!0)},a.refresh=function(){e.refresh()},a.render=function(){d.$broadcast("render")},a.show_key=function(a){return!c.contains(["type","id","alias","mandate","active","editing"],a)},a.getFilterClass=function(a){if(a.active!==!0)return"muted";switch(a.mandate){case"must":return"text-success";case"mustNot":return"text-error";case"either":return"text-warning";default:return"text-info"}},a.isEditable=function(a){var b=["time"];return c.contains(b,a.type)?!1:!0}}])});