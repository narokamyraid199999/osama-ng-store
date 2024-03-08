"use strict";(self.webpackChunkangularEcommerce=self.webpackChunkangularEcommerce||[]).push([[257],{2257:(v,c,o)=>{o.r(c),o.d(c,{WishlistModule:()=>Z});var r=o(6814),a=o(6261),t=o(5879),h=o(6660);function u(e,l){1&e&&(t.TgZ(0,"div",3),t._UZ(1,"i",4),t.qZA())}function p(e,l){1&e&&(t.TgZ(0,"div",5)(1,"h2",6)(2,"span",7),t._uU(3,"no wishlists "),t._UZ(4,"i",8),t.qZA()(),t.TgZ(5,"div",9)(6,"a",10),t._uU(7,"add new wishlist!"),t.qZA()()())}function g(e,l){if(1&e){const i=t.EpF();t.TgZ(0,"tr",16)(1,"td",17)(2,"p",18),t._uU(3),t.qZA()(),t.TgZ(4,"td",17),t._UZ(5,"img",19),t.qZA(),t.TgZ(6,"td",17)(7,"p"),t._uU(8),t.qZA()(),t.TgZ(9,"td",17)(10,"p"),t._uU(11),t.qZA()(),t.TgZ(12,"td")(13,"button",20),t.NdJ("click",function(){const d=t.CHM(i).$implicit,_=t.oxw(2);return t.KtG(_.deleteWish(null==d?null:d._id))}),t._UZ(14,"i",21),t.TgZ(15,"span",22),t._uU(16,"remove"),t.qZA()()()()}if(2&e){const i=l.$implicit;t.xp6(3),t.Oqu(i.title),t.xp6(2),t.Q6J("src",i.imageCover,t.LSH),t.xp6(3),t.Oqu(i.quantity),t.xp6(3),t.Oqu("EGP"+(null==i?null:i.price))}}function f(e,l){if(1&e&&(t.TgZ(0,"div",11)(1,"h2",12),t._uU(2,"my wishlist"),t.qZA(),t.TgZ(3,"table")(4,"thead")(5,"tr",13)(6,"td",14),t._uU(7," title "),t.qZA(),t.TgZ(8,"td",14),t._uU(9," img "),t.qZA(),t.TgZ(10,"td",14),t._uU(11," quantity "),t.qZA(),t.TgZ(12,"td",14),t._uU(13," price "),t.qZA(),t.TgZ(14,"td",14),t._uU(15," delete "),t.qZA()()(),t.TgZ(16,"tbody"),t.YNc(17,g,17,4,"tr",15),t.qZA()()()),2&e){const i=t.oxw();t.xp6(17),t.Q6J("ngForOf",i.wishlist.data)}}const m=[{path:"",component:(()=>{class e{constructor(i){this._wishService=i,this.wishlist={},this.deleteLoader=!1,this.isLoading=!1}ngOnInit(){this.getWishes()}getWishes(){this.isLoading=!0,this._wishService.getWishes().subscribe({next:i=>{"success"===i.status&&(console.log(i),this.wishlist=i,this.isLoading=!1)},error:i=>{console.log(i),this.isLoading=!1}})}deleteWish(i){this.deleteLoader=!0,this._wishService.deleteWish(i).subscribe({next:s=>{console.log("wish Deleted"),this.deleteLoader=!1,"success"===s.status&&this.getWishes()},error:s=>{console.log("error in deleting wish error ",s),this.deleteLoader=!1}})}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(h.M))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-wishlist"]],decls:4,vars:3,consts:[["class","flex justify-center py-36",4,"ngIf"],["class","container mx-auto flex flex-col items-center justify-center mt-32",4,"ngIf"],["class","container mx-auto my-20 px-[10%]",4,"ngIf"],[1,"flex","justify-center","py-36"],[1,"fa-solid","fa-spinner","text-7xl"],[1,"container","mx-auto","flex","flex-col","items-center","justify-center","mt-32"],[1,"capitalize","font-bold","border-b-2","pb-2"],[1,"text-4xl"],[1,"fa-solid","fa-face-sad-tear"],[1,"mt-14"],["routerLink","/home",1,"capitalize","underline","hover:cursor-pointer","hover:text-blue-600","text-2xl"],[1,"container","mx-auto","my-20","px-[10%]"],[1,"text-2xl","capitalize","font-bold","mb-4"],[1,"shadow-sm","shadow-gray-300"],[1,"p-4","bg-gray-200","text-black","capitalize","text-lg","font-bold"],["class","border-b-4 border-gray-200 pb-4",4,"ngFor","ngForOf"],[1,"border-b-4","border-gray-200","pb-4"],[1,"px-4"],[1,"text-xl","capitalize"],["width","150px","height","40px","alt","",3,"src"],[1,"py-2","px-2","mr-14","bg-re","uppercase","font-bold","text-white","rounded-full","hover:bg-gray-100",3,"click"],[1,"fa-solid","fa-trash","text-red-500","hover:text-red-400","text-xl","mr-1"],[1,"text-red-500","hover:text-red-400"]],template:function(s,n){1&s&&(t.TgZ(0,"section"),t.YNc(1,u,2,0,"div",0),t.YNc(2,p,8,0,"div",1),t.YNc(3,f,18,1,"div",2),t.qZA()),2&s&&(t.xp6(1),t.Q6J("ngIf",n.isLoading),t.xp6(1),t.Q6J("ngIf",!n.isLoading&&0==n.wishlist.data.length),t.xp6(1),t.Q6J("ngIf",!n.isLoading&&n.wishlist.data.length>0))},dependencies:[r.sg,r.O5,a.rH]})}return e})()}];let x=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[a.Bz.forChild(m),a.Bz]})}return e})(),Z=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[r.ez,x]})}return e})()}}]);