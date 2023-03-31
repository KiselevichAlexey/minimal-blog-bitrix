{"version":3,"sources":["fader.js"],"names":["BX","namespace","Grid","Fader","parent","this","table","container","init","prototype","getTable","parentNode","scrollStartEventName","isTouch","scrollEndEventName","getParam","fixedTable","getPinHeader","getFixedTable","debounceScrollHandler","debounce","_onWindowScroll","bind","window","proxy","toggle","document","addEventListener","Utils","listenerParams","passive","addCustomEvent","_onHeaderUpdated","getEarLeft","_onMouseoverLeft","getEarRight","_onMouseoverRight","stopScroll","adjustEarOffset","destroy","unbind","removeEventListener","removeCustomEvent","hideLeftEar","hideRightEar","event","preventDefault","startScrollByDirection","clearTimeout","scrollTimer","clearInterval","scrollInterval","direction","offset","scrollLeft","self","stepLength","stepTime","setTimeout","setInterval","earLeft","getByClass","getContainer","settings","get","earRight","getShadowLeft","querySelector","getShadowRight","prepare","windowHeight","height","tbodyPos","pos","tBodies","headerPos","tHead","scrollY","isIE","documentElement","scrollTop","bottomPos","top","posTop","bottom","requestAnimationFrame","lastPosTop","translate","style","transform","lastBottomPos","hasScroll","offsetWidth","clientWidth","hasScrollLeft","hasScrollRight","showLeftEar","addClass","removeClass","showRightEar","adjustFixedTablePosition","left","delegate","marginLeft"],"mappings":"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","file":""}