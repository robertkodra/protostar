"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[684],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,k=u["".concat(c,".").concat(m)]||u[m]||s[m]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5001:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return s}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),o=["components"],r={},c="CLI Reference",p={unversionedId:"cli-reference",id:"cli-reference",title:"CLI Reference",description:"Common flags",source:"@site/docs/cli-reference.md",sourceDirName:".",slug:"/cli-reference",permalink:"/protostar/docs/cli-reference",editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/cli-reference.md",tags:[],version:"current",frontMatter:{}},d={},s=[{value:"Common flags",id:"common-flags",level:2},{value:"<code>--no-color</code>",id:"--no-color",level:4},{value:"<code>-p</code> <code>--profile STRING</code>",id:"-p---profile-string",level:4},{value:"CI configuration",id:"ci-configuration",level:4},{value:"Deployment configuration",id:"deployment-configuration",level:4},{value:"<code>-v</code> <code>--version</code>",id:"-v---version",level:4},{value:"Commands",id:"commands",level:2},{value:"<code>build</code>",id:"build",level:3},{value:"<code>--account-contract</code>",id:"--account-contract",level:4},{value:"<code>--cairo-path DIRECTORY[]</code>",id:"--cairo-path-directory",level:4},{value:"<code>--disable-hint-validation</code>",id:"--disable-hint-validation",level:4},{value:"<code>-o</code> <code>--output PATH=build</code>",id:"-o---output-pathbuild",level:4},{value:"<code>deploy</code>",id:"deploy",level:3},{value:"<code>contract PATH</code>",id:"contract-path",level:4},{value:"<code>--gateway-url STRING</code>",id:"--gateway-url-string",level:4},{value:"<code>-i</code> <code>--inputs STRING[]</code>",id:"-i---inputs-string",level:4},{value:"<code>-n</code> <code>--network STRING</code>",id:"-n---network-string",level:4},{value:"<code>--salt STRING</code>",id:"--salt-string",level:4},{value:"<code>--token STRING</code>",id:"--token-string",level:4},{value:"<code>init</code>",id:"init",level:3},{value:"<code>--existing</code>",id:"--existing",level:4},{value:"<code>install</code>",id:"install",level:3},{value:"<code>package STRING</code>",id:"package-string",level:4},{value:"<code>--name STRING</code>",id:"--name-string",level:4},{value:"<code>remove</code>",id:"remove",level:3},{value:"<code>package STRING</code>",id:"package-string-1",level:4},{value:"<code>test</code>",id:"test",level:3},{value:"<code>target STRING[]=[&#39;tests&#39;]</code>",id:"target-stringtests",level:4},{value:"<code>--account-contract</code>",id:"--account-contract-1",level:4},{value:"<code>--cairo-path DIRECTORY[]</code>",id:"--cairo-path-directory-1",level:4},{value:"<code>--disable-hint-validation</code>",id:"--disable-hint-validation-1",level:4},{value:"<code>-i</code> <code>--ignore STRING[]</code>",id:"-i---ignore-string",level:4},{value:"<code>update</code>",id:"update",level:3},{value:"<code>package STRING</code>",id:"package-string-2",level:4},{value:"<code>upgrade</code>",id:"upgrade",level:3}],u={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cli-reference"},"CLI Reference"),(0,l.kt)("h2",{id:"common-flags"},"Common flags"),(0,l.kt)("h4",{id:"--no-color"},(0,l.kt)("inlineCode",{parentName:"h4"},"--no-color")),(0,l.kt)("p",null,"Disable colors."),(0,l.kt)("h4",{id:"-p---profile-string"},(0,l.kt)("inlineCode",{parentName:"h4"},"-p")," ",(0,l.kt)("inlineCode",{parentName:"h4"},"--profile STRING")),(0,l.kt)("p",null,"Specifies active profile configuration. This argument can't be configured in ",(0,l.kt)("inlineCode",{parentName:"p"},"protostar.toml"),"."),(0,l.kt)("h4",{id:"ci-configuration"},"CI configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="protostar.toml"',title:'"protostar.toml"'},"[profile.ci.protostar.shared_command_configs]\nno_color=true\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"protostar -p ci test")),(0,l.kt)("h4",{id:"deployment-configuration"},"Deployment configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="protostar.toml"',title:'"protostar.toml"'},'[profile.devnet.protostar.deploy]\ngateway_url="http://127.0.0.1:5050/"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"protostar -p devnet deploy ...")),(0,l.kt)("h4",{id:"-v---version"},(0,l.kt)("inlineCode",{parentName:"h4"},"-v")," ",(0,l.kt)("inlineCode",{parentName:"h4"},"--version")),(0,l.kt)("p",null,"Show Protostar and Cairo-lang version."),(0,l.kt)("h2",{id:"commands"},"Commands"),(0,l.kt)("h3",{id:"build"},(0,l.kt)("inlineCode",{parentName:"h3"},"build")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ protostar build\n")),(0,l.kt)("p",null,"Compile contracts."),(0,l.kt)("h4",{id:"--account-contract"},(0,l.kt)("inlineCode",{parentName:"h4"},"--account-contract")),(0,l.kt)("p",null,"Compile as account contract."),(0,l.kt)("h4",{id:"--cairo-path-directory"},(0,l.kt)("inlineCode",{parentName:"h4"},"--cairo-path DIRECTORY[]")),(0,l.kt)("p",null,"Additional directories to look for sources."),(0,l.kt)("h4",{id:"--disable-hint-validation"},(0,l.kt)("inlineCode",{parentName:"h4"},"--disable-hint-validation")),(0,l.kt)("p",null,"Disable validation of hints when building the contracts."),(0,l.kt)("h4",{id:"-o---output-pathbuild"},(0,l.kt)("inlineCode",{parentName:"h4"},"-o")," ",(0,l.kt)("inlineCode",{parentName:"h4"},"--output PATH=build")),(0,l.kt)("p",null,"An output directory used to put the compiled contracts in."),(0,l.kt)("h3",{id:"deploy"},(0,l.kt)("inlineCode",{parentName:"h3"},"deploy")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"protostar deploy ./build/main.json --network alpha-goerli\n")),(0,l.kt)("p",null,"Deploys contracts."),(0,l.kt)("h4",{id:"contract-path"},(0,l.kt)("inlineCode",{parentName:"h4"},"contract PATH")),(0,l.kt)("p",null,"Required."),(0,l.kt)("p",null,"The path to the compiled contract."),(0,l.kt)("h4",{id:"--gateway-url-string"},(0,l.kt)("inlineCode",{parentName:"h4"},"--gateway-url STRING")),(0,l.kt)("p",null,"The URL of a StarkNet gateway. It is required unless ",(0,l.kt)("inlineCode",{parentName:"p"},"--network")," is provided."),(0,l.kt)("h4",{id:"-i---inputs-string"},(0,l.kt)("inlineCode",{parentName:"h4"},"-i")," ",(0,l.kt)("inlineCode",{parentName:"h4"},"--inputs STRING[]")),(0,l.kt)("p",null,"The inputs to the constructor. Calldata arguments may be of any type that does not contain pointers.\n",(0,l.kt)("a",{parentName:"p",href:"https://www.cairo-lang.org/docs/hello_starknet/more_features.html#array-arguments-in-calldata"},"Read more about representing Cairo data types in the CLI.")),(0,l.kt)("h4",{id:"-n---network-string"},(0,l.kt)("inlineCode",{parentName:"h4"},"-n")," ",(0,l.kt)("inlineCode",{parentName:"h4"},"--network STRING")),(0,l.kt)("p",null,"The name of the StarkNet network.\nIt is required unless ",(0,l.kt)("inlineCode",{parentName:"p"},"--gateway-url")," is provided."),(0,l.kt)("p",null,"Supported StarkNet networks:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"alpha-goerli")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"alpha-mainnet"))),(0,l.kt)("h4",{id:"--salt-string"},(0,l.kt)("inlineCode",{parentName:"h4"},"--salt STRING")),(0,l.kt)("p",null,"An optional salt controlling where the contract will be deployed. The contract deployment address is determined by the hash of contract, salt and caller. If the salt is not supplied, the contract will be deployed with a random salt."),(0,l.kt)("h4",{id:"--token-string"},(0,l.kt)("inlineCode",{parentName:"h4"},"--token STRING")),(0,l.kt)("p",null,"Used for deploying contracts in Alpha MainNet."),(0,l.kt)("h3",{id:"init"},(0,l.kt)("inlineCode",{parentName:"h3"},"init")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ protostar init\n")),(0,l.kt)("p",null,"Create a Protostar project."),(0,l.kt)("h4",{id:"--existing"},(0,l.kt)("inlineCode",{parentName:"h4"},"--existing")),(0,l.kt)("p",null,"Adapt current directory to a Protostar project."),(0,l.kt)("h3",{id:"install"},(0,l.kt)("inlineCode",{parentName:"h3"},"install")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ protostar install https://github.com/OpenZeppelin/cairo-contracts\n")),(0,l.kt)("p",null,"Install a dependency as a git submodule."),(0,l.kt)("h4",{id:"package-string"},(0,l.kt)("inlineCode",{parentName:"h4"},"package STRING")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GITHUB_ACCOUNT_NAME/REPO_NAME[@TAG]"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OpenZeppelin/cairo-contracts@0.1.0")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"URL_TO_THE_REPOSITORY"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"https://github.com/OpenZeppelin/cairo-contracts")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SSH_URI"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"git@github.com:OpenZeppelin/cairo-contracts.git"))))),(0,l.kt)("h4",{id:"--name-string"},(0,l.kt)("inlineCode",{parentName:"h4"},"--name STRING")),(0,l.kt)("p",null,"A custom package name. Use it to resolve name conflicts."),(0,l.kt)("h3",{id:"remove"},(0,l.kt)("inlineCode",{parentName:"h3"},"remove")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ protostar remove cairo-contracts\n")),(0,l.kt)("p",null,"Remove a dependency."),(0,l.kt)("h4",{id:"package-string-1"},(0,l.kt)("inlineCode",{parentName:"h4"},"package STRING")),(0,l.kt)("p",null,"Required."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GITHUB_ACCOUNT_NAME/REPO_NAME[@TAG]"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OpenZeppelin/cairo-contracts@0.1.0")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"URL_TO_THE_REPOSITORY"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"https://github.com/OpenZeppelin/cairo-contracts")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SSH_URI"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"git@github.com:OpenZeppelin/cairo-contracts.git")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PACKAGE_DIRECTORY_NAME"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cairo_contracts"),", if the package location is ",(0,l.kt)("inlineCode",{parentName:"li"},"lib/cairo_contracts"))))),(0,l.kt)("h3",{id:"test"},(0,l.kt)("inlineCode",{parentName:"h3"},"test")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ protostar test\n")),(0,l.kt)("p",null,"Execute tests."),(0,l.kt)("h4",{id:"target-stringtests"},(0,l.kt)("inlineCode",{parentName:"h4"},"target STRING[]=['tests']")),(0,l.kt)("p",null,"A glob or globs to a directory or a test suite, for example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tests/**/*_main*::*_balance")," \u2014 find test cases, which names ends with ",(0,l.kt)("inlineCode",{parentName:"li"},"_balance")," in test suites with the ",(0,l.kt)("inlineCode",{parentName:"li"},"_main")," in filenames in the ",(0,l.kt)("inlineCode",{parentName:"li"},"tests")," directory"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"::test_increase_balance")," \u2014 find ",(0,l.kt)("inlineCode",{parentName:"li"},"test_increase_balance")," test_cases in any test suite within the project ")),(0,l.kt)("h4",{id:"--account-contract-1"},(0,l.kt)("inlineCode",{parentName:"h4"},"--account-contract")),(0,l.kt)("p",null,"Compile as account contract."),(0,l.kt)("h4",{id:"--cairo-path-directory-1"},(0,l.kt)("inlineCode",{parentName:"h4"},"--cairo-path DIRECTORY[]")),(0,l.kt)("p",null,"Additional directories to look for sources."),(0,l.kt)("h4",{id:"--disable-hint-validation-1"},(0,l.kt)("inlineCode",{parentName:"h4"},"--disable-hint-validation")),(0,l.kt)("p",null,"Disable hint validation in contracts declared by the ",(0,l.kt)("inlineCode",{parentName:"p"},"declare")," cheatcode or deployed by ",(0,l.kt)("inlineCode",{parentName:"p"},"deploy_contract")," cheatcode."),(0,l.kt)("h4",{id:"-i---ignore-string"},(0,l.kt)("inlineCode",{parentName:"h4"},"-i")," ",(0,l.kt)("inlineCode",{parentName:"h4"},"--ignore STRING[]")),(0,l.kt)("p",null,"A glob or globs to a directory or a test suite, which should be ignored."),(0,l.kt)("h3",{id:"update"},(0,l.kt)("inlineCode",{parentName:"h3"},"update")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ protostar update cairo-contracts\n")),(0,l.kt)("p",null,"Update a dependency or dependencies. If the default branch of a dependency's repository uses tags, Protostar will pull a commit marked with the newest tag. Otherwise, Protostar will pull a recent commit from the default branch."),(0,l.kt)("h4",{id:"package-string-2"},(0,l.kt)("inlineCode",{parentName:"h4"},"package STRING")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GITHUB_ACCOUNT_NAME/REPO_NAME[@TAG]"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OpenZeppelin/cairo-contracts@0.1.0")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"URL_TO_THE_REPOSITORY"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"https://github.com/OpenZeppelin/cairo-contracts")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SSH_URI"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"git@github.com:OpenZeppelin/cairo-contracts.git")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PACKAGE_DIRECTORY_NAME"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cairo_contracts"),", if the package location is ",(0,l.kt)("inlineCode",{parentName:"li"},"lib/cairo_contracts"))))),(0,l.kt)("h3",{id:"upgrade"},(0,l.kt)("inlineCode",{parentName:"h3"},"upgrade")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ protostar upgrade\n")),(0,l.kt)("p",null,"Upgrade Protostar."))}m.isMDXComponent=!0}}]);