webpackJsonp([0],{"9hiA":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(t,e){return t.length<e?1:0},n=function(t,e){return t.length>e?1:0},r=function(t){return/^[0-9a-zA-Z\_]+$/.test(t)?0:1},i=function(t){return""===t?1:0},c={data:function(){return{state:"",errorMsg:""}},props:["placeholder"],methods:{validate:function(t){return this.state="",this.errorMsg="",i(t.trim())?(this.errorMsg="Cannot be empty!",this.state="is-danger",!1):s(t.trim(),1)?(this.errorMsg="No shorter than 1!",this.state="is-danger",!1):n(t.trim(),16)?(this.errorMsg="No longer than 16!",this.state="is-danger",!1):r(t.trim())?(this.errorMsg='Only capital or lower-case letter, number and "_" are permitted!',this.state="is-danger",!1):(this.state="is-success",!0)},handleChange:function(t){var e=this.validate(t.target.value);this.$emit("change",t.target.value,e)}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"channel-wrapper control has-icons-left"},[s("input",{staticClass:"ag-rounded input",class:t.state,attrs:{id:"account Name",type:"text",placeholder:t.placeholder},on:{input:t.handleChange}}),t._v(" "),s("span",{staticClass:"icon is-small is-left"},[s("img",{attrs:{src:a("BbJn"),alt:""}})]),t._v(" "),s("span",{staticClass:"validate-icon"},[t.state?s("i",{staticClass:"ag-icon",class:{"ag-icon-valid":"is-success"===t.state,"ag-icon-invalid":"is-danger"===t.state}}):t._e()]),t._v(" "),s("div",{staticClass:"validate-msg"},[t._v("\n\t\t"+t._s(t.errorMsg)+"\n\t")])])},staticRenderFns:[]};var o=a("VU/8")(c,l,!1,function(t){a("qBwS")},"data-v-2b589f63",null);e.default=o.exports},BbJn:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAPCAYAAAGega+EAAAABGdBTUEAALGPC/xhBQAAASFJREFUOBHNk71qAkEUhR3jDwGFpLGSCBaCjZB0VoEQErAWHyMvYKFWiiD4LFaWFmmCnW9gmyZlcCBsvqM7G2aDu9p54XDn3HPu3ZnZ3UyGCIJgBG60GIQFa1QV+Qsnuwrc7tcSwAcYgpJ6Jyg750zPaplhuwZ3YK3NzJP60L+zGL6STGhXMhVTTPlIZ2wnIizgNce1yUfIkyvE8q0x5k0d/ZjgUfSy9lTwqv/JTqbUONl0eFXH5xV1uhf0dui5J1fBBmyB5XRj8iEwt9xaGd5zXJNeIQswBGknxeJFA9bkaQ+aOgCxD9EzJxJ6LSicdEuJk0Lx8gbl2NkKLHVW8rmX/UxPnsu2hoUXDOxSmIIf8A4qQH/1J9D3UQczmvW3R/ELvLZ7YNQHvpUAAAAASUVORK5CYII="},qBwS:function(t,e){}});
//# sourceMappingURL=0.cd947271f53ef1edb7a7.js.map