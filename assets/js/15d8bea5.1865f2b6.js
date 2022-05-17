"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[378],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,a(a({ref:e},c),{},{components:r})):n.createElement(f,a({ref:e},c))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9509:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={sidebar_label:"Project initialization (1 min)"},s="Project initialization",p={unversionedId:"tutorials/project-initialization",id:"tutorials/project-initialization",title:"Project initialization",description:"To create a new project run:",source:"@site/docs/tutorials/03-project-initialization.md",sourceDirName:"tutorials",slug:"/tutorials/project-initialization",permalink:"/protostar/docs/tutorials/project-initialization",editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/tutorials/03-project-initialization.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Project initialization (1 min)"},sidebar:"tutorials",previous:{title:"Installation (1 min)",permalink:"/protostar/docs/tutorials/installation"},next:{title:"Compilation (1 min)",permalink:"/protostar/docs/tutorials/guides/compiling"}},c={},u=[{value:"Adapting an existing project to the Protostar project",id:"adapting-an-existing-project-to-the-protostar-project",level:3},{value:"<code>protostar.toml</code>",id:"protostartoml",level:2}],m={toc:u};function d(t){var e=t.components,r=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"project-initialization"},"Project initialization"),(0,i.kt)("p",null,"To create a new project run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"protostar init\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Protostar configuration step."',title:'"Protostar',configuration:!0,'step."':!0},"libraries directory name (lib):\n")),(0,i.kt)("h3",{id:"adapting-an-existing-project-to-the-protostar-project"},"Adapting an existing project to the Protostar project"),(0,i.kt)("p",null,"Protostar project must be a git repository and have ",(0,i.kt)("inlineCode",{parentName:"p"},"protostar.toml")," file. You can adapt your project manually or by running ",(0,i.kt)("inlineCode",{parentName:"p"},"protostar init --existing"),"."),(0,i.kt)("h1",{id:"project-structure"},"Project structure"),(0,i.kt)("p",null,"The result of running ",(0,i.kt)("inlineCode",{parentName:"p"},"protostar init")," is a configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},"protostar.toml"),", example files, and the following 3 directories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src")," \u2014 A directory for your code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lib")," \u2014 A default directory for an external dependencies."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tests")," \u2014 A directory storing tests.")),(0,i.kt)("h2",{id:"protostartoml"},(0,i.kt)("inlineCode",{parentName:"h2"},"protostar.toml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="protostar.toml"',title:'"protostar.toml"'},'["protostar.config"]\nprotostar_version = "0.1.0"\n\n["protostar.project"]\nlibs_path = "./lib"         # a path to the dependency directory\n\n# This section is explained in the "Project compilation" guide.\n["protostar.contracts"]\nmain = [\n  "./src/main.cairo",\n]\n\n')),(0,i.kt)("p",null,"Protostar's commands can be configured in the ",(0,i.kt)("inlineCode",{parentName:"p"},"protostar.toml"),". This is number of arguments you would have to provide in the CLI otherwise. Protostar expects a section ",(0,i.kt)("inlineCode",{parentName:"p"},'["protostar.COMMAND_NAME"]')," and a argument name with underscores (",(0,i.kt)("inlineCode",{parentName:"p"},"_"),") in place of dashes (",(0,i.kt)("inlineCode",{parentName:"p"},"-"),"), for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="protostar.toml"',title:'"protostar.toml"'},'# ...\n\n["protostar.build"]\ncairo_path = ["./lib/cairo_contracts/src"]\n')),(0,i.kt)("p",null,"If you want configure an argument that is not tied to any command or an argument that is shared across many commands (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"cairo-path"),"), specify configuration in the ",(0,i.kt)("inlineCode",{parentName:"p"},'["protostar.shared_command_configs"]')," section. This is useful if you want to specify the same ",(0,i.kt)("inlineCode",{parentName:"p"},"cairo-path")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," commands as demonstrated on the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="protostar.toml"',title:'"protostar.toml"'},'# ...\n\n["protostar.shared_command_configs"]\ncairo_path = ["./lib/cairo_contracts/src"]\n')))}d.isMDXComponent=!0}}]);