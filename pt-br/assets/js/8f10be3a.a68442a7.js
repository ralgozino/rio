"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[8967],{9087:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var t=n(5893),a=n(1151);const o={layout:"post",title:"Settings UI, Welcome UI, Adaptive theme, crates.io and more",date:"2023-09-19 13:53",description:"Crates.io, Alpine Linux, openSUSE, Nix home manager, adaptive theme, settings UI, welcome UI, blinking cursor, plain navigation mode ...",categories:"windows macos linux webassembly"},r=void 0,s={permalink:"/rio/pt-br/blog/2023/09/19/release-0.0.19",editUrl:"https://github.com/raphamorim/rio/tree/main/docs/blog/2023-09-19-release-0.0.19.md",source:"@site/blog/2023-09-19-release-0.0.19.md",title:"Settings UI, Welcome UI, Adaptive theme, crates.io and more",description:"Crates.io, Alpine Linux, openSUSE, Nix home manager, adaptive theme, settings UI, welcome UI, blinking cursor, plain navigation mode ...",date:"2023-09-19T13:53:00.000Z",formattedDate:"19 de setembro de 2023",tags:[],readingTime:4.045,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Settings UI, Welcome UI, Adaptive theme, crates.io and more",date:"2023-09-19 13:53",description:"Crates.io, Alpine Linux, openSUSE, Nix home manager, adaptive theme, settings UI, welcome UI, blinking cursor, plain navigation mode ...",categories:"windows macos linux webassembly"},unlisted:!1,nextItem:{title:"New font configuration API and native tabs",permalink:"/rio/pt-br/blog/2023/08/29/release-0.0.17"}},l={authorsImageUrls:[]},h=[{value:"Highlight #1: New window API (breaking change)",id:"highlight-1-new-window-api-breaking-change",level:3},{value:"Highlight #2: crates.io",id:"highlight-2-cratesio",level:2},{value:"Highlight #3: Alpine Linux, openSUSE and Nix home manager.",id:"highlight-3-alpine-linux-opensuse-and-nix-home-manager",level:2},{value:"Highlight #4: Welcome screen and default creation of configuration file",id:"highlight-4-welcome-screen-and-default-creation-of-configuration-file",level:2},{value:"Highlight #5: Settings UI",id:"highlight-5-settings-ui",level:2},{value:"Highlight #6: Error handling",id:"highlight-6-error-handling",level:2},{value:"Highlight #7: Adaptive theme",id:"highlight-7-adaptive-theme",level:2},{value:"Highlight #8: Blinking cursor",id:"highlight-8-blinking-cursor",level:2},{value:"Highlight #9: Navigation mode called &quot;Plain&quot;",id:"highlight-9-navigation-mode-called-plain",level:2},{value:"Full changelog of v0.0.19",id:"full-changelog-of-v0019",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"This post also includes changes of v0.0.19."}),"\n",(0,t.jsx)(i.h3,{id:"highlight-1-new-window-api-breaking-change",children:"Highlight #1: New window API (breaking change)"}),"\n",(0,t.jsx)(i.p,{children:"Configuration properties: window_height, window_width and window_opacity has been moved to a new window/background API:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-toml",children:'# Window configuration\n#\n# \u2022 width - define the intial window width.\n#   Default: 600\n#\n# \u2022 height - define the inital window height.\n#   Default: 400\n#\n# \u2022 mode - define how the window will be created\n#     - "Windowed" (default) is based on width and height\n#     - "Maximized" window is created with maximized\n#     - "Fullscreen" window is created with fullscreen\n#\n[window]\nwidth = 600\nheight = 400\nmode = "Windowed"\n'})}),"\n",(0,t.jsx)(i.p,{children:"From now and on you can also set image as background."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-toml",children:'# Background configuration\n#\n# \u2022 opacity - changes the background transparency state\n#   Default: 1.0\n#\n# \u2022 mode - defines background mode bewteen "Color" and "Image"\n#   Default: Color\n#\n# \u2022 image - Set an image as background\n#   Default: None\n#\n[background]\nmode = "Image"\nopacity = 1.0\n[background.image]\npath = "/Users/rapha/Desktop/eastward.jpg"\nwidth = 200.0\nheight = 200.0\nx = 0.0\n'})}),"\n",(0,t.jsx)(i.p,{children:"Although you can define opacity though the new configuration API it does not work either for the image neither for the window. This something will be fixed in upcoming releases. An example below using the configuration we just saw."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:"https://media.discordapp.net/attachments/1110689410258841662/1152881776348364811/F6JGpamXsAAWvcG.png?width=1048&height=848",alt:"Example background"})}),"\n",(0,t.jsxs)(i.p,{children:["note: The image above is from the ",(0,t.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Eastward_(video_game)",children:"Eastward game"})]}),"\n",(0,t.jsx)(i.h2,{id:"highlight-2-cratesio",children:"Highlight #2: crates.io"}),"\n",(0,t.jsxs)(i.p,{children:["Rio terminal is now also available in crates.io: ",(0,t.jsx)(i.a,{href:"https://crates.io/crates/rioterm",children:"https://crates.io/crates/rioterm"})," ."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:"cargo install rioterm\n"})}),"\n",(0,t.jsx)(i.h2,{id:"highlight-3-alpine-linux-opensuse-and-nix-home-manager",children:"Highlight #3: Alpine Linux, openSUSE and Nix home manager."}),"\n",(0,t.jsxs)(i.p,{children:["\u2022 Rio has landed in Nix home manager: ",(0,t.jsx)(i.a,{href:"https://github.com/nix-community/home-manager/pull/4118",children:"nix-community/home-manager/pull/4118"})," and huge props to ",(0,t.jsx)(i.a,{href:"https://twitter.com/otaviosalvador",children:"@otaviosalvador"})," for making it possible."]}),"\n",(0,t.jsxs)(i.p,{children:["\u2022 Rio has landed in Alpine Linux: ",(0,t.jsx)(i.a,{href:"https://gitlab.alpinelinux.org/alpine/aports/-/merge_requests/51369",children:"gitlab.alpinelinux.org"})," and huge props to ",(0,t.jsx)(i.a,{href:"https://github.com/androw",children:"@androw"})," for making it possible."]}),"\n",(0,t.jsxs)(i.p,{children:["\u2022 Rio has landed in openSUSE: ",(0,t.jsx)(i.a,{href:"https://build.opensuse.org/package/show/X11:terminals/rioterm",children:"build.opensuse.org"})," and huge props to ",(0,t.jsx)(i.a,{href:"https://github.com/androw",children:"@androw"})," for making it possible."]}),"\n",(0,t.jsx)(i.h2,{id:"highlight-4-welcome-screen-and-default-creation-of-configuration-file",children:"Highlight #4: Welcome screen and default creation of configuration file"}),"\n",(0,t.jsx)(i.p,{children:"Now Rio terminal does create the configuration file per first initialization."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:"https://user-images.githubusercontent.com/240594/268500927-788ea316-ede8-4d23-ba1f-9621a6a82908.png",alt:"Welcome message"})}),"\n",(0,t.jsx)(i.h2,{id:"highlight-5-settings-ui",children:"Highlight #5: Settings UI"}),"\n",(0,t.jsx)(i.p,{children:"After v0.0.19, Rio will start to provide a custom internal settings UI, where you can manage your configuration without edit the file."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Settings UI",src:n(3853).Z+"",width:"852",height:"570"})}),"\n",(0,t.jsx)(i.p,{children:"Note: Not all the configuration options has been ported, so you would still need to use the config file for specific configuration updates."}),"\n",(0,t.jsx)(i.h2,{id:"highlight-6-error-handling",children:"Highlight #6: Error handling"}),"\n",(0,t.jsx)(i.p,{children:"Configuration errors, command errors, font not found and etecetera are not silent anymore. This version introduces an UI for error handling."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Error handling",src:n(3976).Z+"",width:"1424",height:"1024"})}),"\n",(0,t.jsx)(i.h2,{id:"highlight-7-adaptive-theme",children:"Highlight #7: Adaptive theme"}),"\n",(0,t.jsx)(i.p,{children:"Rio support theme based on the system theme (light and dark). This configuration only works for Web, MacOS and Windows."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-toml",children:'[adaptive-theme]\nlight = "belafonte-day"\ndark = "belafonte-night"\n'})}),"\n",(0,t.jsx)(i.p,{children:"Example of usage with MacOS:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Settings UI",src:n(510).Z+"",width:"538",height:"370"})}),"\n",(0,t.jsx)(i.h2,{id:"highlight-8-blinking-cursor",children:"Highlight #8: Blinking cursor"}),"\n",(0,t.jsx)(i.p,{children:"Rio now supports blinking cursor."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-toml",children:"# Blinking Cursor\n#\n# Default is false\n#\nblinking-cursor = true\n"})}),"\n",(0,t.jsx)(i.h2,{id:"highlight-9-navigation-mode-called-plain",children:'Highlight #9: Navigation mode called "Plain"'}),"\n",(0,t.jsx)(i.p,{children:'Navigation mode "Plain" is perfect if you use tmux/zellij or anything similar.'}),"\n",(0,t.jsx)(i.p,{children:"Plain navigation mode will simply turn off any platform key binding, will not add any key binding (like creation of tabs, windows, panels and other platform key bindings). Note it also get rid of platform key bingins such as shift+control+c for example, to re-add it you would need to map yourself."}),"\n",(0,t.jsx)(i.p,{children:"This mode is great if you want configure every single bit of how Rio key bindings will work."}),"\n",(0,t.jsx)(i.p,{children:"Usage:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-toml",children:'[navigation]\nmode = "Plain"\n'})}),"\n",(0,t.jsx)(i.h2,{id:"full-changelog-of-v0019",children:"Full changelog of v0.0.19"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Fix for retrieving shell environment variable when running inside of Flatpak sandbox (Ref: ",(0,t.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/198",children:"https://github.com/raphamorim/rio/issues/198"}),")."]}),"\n",(0,t.jsxs)(i.li,{children:["Rio terminal is now also available in crates.io: ",(0,t.jsx)(i.a,{href:"https://crates.io/crates/rioterm",children:"https://crates.io/crates/rioterm"})," ."]}),"\n",(0,t.jsxs)(i.li,{children:['Added "navigation.mode = "Plain"", it basically disables all platform key bindings for tabs, windows and panels creation (Ref ',(0,t.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/213",children:"https://github.com/raphamorim/rio/issues/213"}),")."]}),"\n",(0,t.jsxs)(i.li,{children:["Support for blinking cursor (Ref: ",(0,t.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/137",children:"https://github.com/raphamorim/rio/issues/137"}),") (this option is not enabled by default)."]}),"\n",(0,t.jsx)(i.li,{children:"Migrated font-kit to a custom font loader."}),"\n",(0,t.jsx)(i.li,{children:"Support to MacOS tile window positioning feature (left or right)."}),"\n",(0,t.jsx)(i.li,{children:"Added support to MacOS display native top bar items."}),"\n",(0,t.jsx)(i.li,{children:'Support to adaptive theme (theme selection based on user system theme variant "dark" or "light").'}),"\n",(0,t.jsxs)(i.li,{children:['Implemented "ScrollPageUp", "ScrollPageDown", "ScrollHalfPageUp", "ScrollHalfPageDown", "ScrollToTop", "ScrollToBottom", "ScrollLineUp", "ScrollLineDown" (Ref: ',(0,t.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/206",children:"https://github.com/raphamorim/rio/issues/206"}),")."]}),"\n",(0,t.jsx)(i.li,{children:'Support to "fonts.family" (it overwrittes regular, bold, bold-italic and italic font families).'}),"\n",(0,t.jsx)(i.li,{children:"Added a welcome screen UI."}),"\n",(0,t.jsx)(i.li,{children:"Added a settings UI."}),"\n",(0,t.jsx)(i.li,{children:'Exposes "RIO_CONFIG" environment variable that contains the path of the configuration.'}),"\n",(0,t.jsx)(i.li,{children:"Rio creates a configuration file with all defaults if does not exist."}),"\n",(0,t.jsx)(i.li,{children:'Added "OpenConfigEditor" key binding for all platforms.'}),"\n",(0,t.jsx)(i.li,{children:'Configuration property "editor" was removed.'}),"\n",(0,t.jsxs)(i.li,{children:["Created Assistant, Rio terminal UI for display error (Ref: ",(0,t.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/168",children:"https://github.com/raphamorim/rio/issues/168"}),")."]}),"\n",(0,t.jsxs)(i.li,{children:["Fix 'Backspace' keypress triggers Ctrl+h keybinding in Zellij instead of deleting character. (Ref: ",(0,t.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/197",children:"https://github.com/raphamorim/rio/issues/197"}),")."]}),"\n",(0,t.jsxs)(i.li,{children:['Implemented "TERM_PROGRAM" and "TERM_PROGRAM_VERSION" (Ref: ',(0,t.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/200",children:"https://github.com/raphamorim/rio/issues/200"}),")."]}),"\n",(0,t.jsx)(i.li,{children:"Whenever native tabs is on disable macos deadzone logic."}),"\n"]})]})}function c(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},510:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/adaptive-theme-0a39b7efecc31441e4b4853606cb02e5.gif"},3976:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/demo-error-handling-095b418bb1da6ebc7339b39039145e7d.png"},3853:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/demo-settings-9983cd7afab3b90b642cd4beb0de7269.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>s,a:()=>r});var t=n(7294);const a={},o=t.createContext(a);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);