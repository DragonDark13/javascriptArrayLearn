(()=>{function e(e,o){let l=e[0];return e.reduce(((e,n)=>{let t=Math.abs(n-o),s=Math.abs(e-o);return l=t===s?Math.min(n,e):t<s?n:e,l})),l}function o(e,o){e===o?console.log("true="+e):console.log("false="+e)}!function(e,o){let l=e.findIndex((function(e){}));l>-1&&e.slice(l)}([1,2,3,4,5]),console.log(e([4,7,10,11,12,17],9)),console.log(7===e([4,7,10,11,12,17],8)?"true":"false"),console.log(e([4,8,10,11,12,17],9)?"true":"false"),console.log(e([4,9,10,11,12,17],9)?"true":"false"),console.log(e([5],5)?"true":"false"),o(e([5],5),5),o(e([5],7),5),o(e([0,-2],-1),-2)})();