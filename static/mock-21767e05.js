function e(){return new Promise(((e,r)=>{setTimeout((()=>{Math.random()>.5?e({code:0,data:[{key:1,label:"苹果",value:1},{key:2,label:"香蕉",value:2},{key:3,label:"橘子",value:3}],message:"成功"}):r(new Error("不小心出错了！"))}),3e3)}))}const r=()=>new Promise((e=>{setTimeout((()=>{e([...Array(5)].map(((e,r)=>({id:r,name:`c${r}`}))))}),1e3)})),a=e=>new Promise(((r,a)=>{setTimeout((()=>{a(new Error(`Sorry, there is an error here. The error id is ${e}`))}),1e3)}));export{a,r as b,e as g};
