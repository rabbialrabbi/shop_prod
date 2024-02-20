import{a as le,aK as ae,u as ue,aX as oe,n as Q,aL as de,a9 as ne,aM as re,aN as se,G as b,B as e,af as I,aY as ie,aZ as ce,aO as pe,aT as q,aU as $,aV as N,a8 as R,H as x,J as k,K as t,L as l,M as L,N as M,U as F,R as V,a_ as E,F as C,T,S as f,aW as g,a$ as z,b0 as K,Y as j,P as y,Z as B,_ as me,$ as U,E as _e,X as ve}from"./index.c7964aad.js";import"./moment.9709ab41.js";import{V as Y}from"./VForm.eb32a643.js";import{V as P}from"./VAutocomplete.1b9bb8f5.js";import{V as Z}from"./VTextarea.747d002e.js";import{a as ye,b as fe,c as Ve}from"./VCheckboxBtn.f1cc55ee.js";import{V as be}from"./VDialog.f16f3cc8.js";const G=le({name:"VSwitch",inheritAttrs:!1,props:{indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...ae(),...ye()},emits:{"update:indeterminate":p=>!0},setup(p,m){let{attrs:s,slots:o}=m;const i=ue(p,"indeterminate"),{loaderClasses:c}=oe(p),n=Q(()=>typeof p.loading=="string"&&p.loading!==""?p.loading:p.color),_=de(),u=Q(()=>p.id||`switch-${_}`);function d(){i.value&&(i.value=!1)}return ne(()=>{const[A,v]=re(s),[a,r]=se(p),[H,qe]=fe(p),D=b();function J(){var S,w;(S=D.value)==null||(w=S.input)==null||w.click()}return e(pe,I({class:["v-switch",{"v-switch--inset":p.inset},{"v-switch--indeterminate":i.value},c.value]},A,a,{id:u.value}),{...o,default:S=>{let{id:w,isDisabled:O,isReadonly:W,isValid:X}=S;return e(Ve,I({ref:D},H,{id:w.value,type:"checkbox","onUpdate:modelValue":d,"aria-checked":i.value?"mixed":void 0,disabled:O.value,readonly:W.value},v),{...o,default:()=>e("div",{class:"v-switch__track",onClick:J},null),input:ee=>{let{textColorClasses:te}=ee;return e("div",{class:["v-switch__thumb",te.value]},[p.loading&&e(ie,{name:"v-switch",active:!0,color:X.value===!1?void 0:n.value},{default:h=>o.loader?o.loader(h):e(ce,{active:h.isActive,color:h.color,indeterminate:!0,size:"16",width:"2"},null)})])}})}})}),{}}}),Ie={__name:"AddProduct",setup(p){q();const m=$();N(async()=>{await m.updateCategoryList(),await m.updateProductTypeList(),await m.updateUnitTypeList()});const s={name:null,category_id:null,product_type_id:null,unit_amount:null,unit_id:null,description:null,selling_price:null,cost_adjust_type:!0,cost:null,available_qty:null,reserved_qty:null,in_transit_qty:null},o=b(structuredClone(s)),i=b(),c=b([]);R(i,_=>{let u=m.productTypes;o.value.category_id=_,u=u.filter(d=>d.category_id===_),u=u.map(d=>({title:d.name,value:d.product_type_id})),c.value=u});const n=async()=>{try{const _=await z.post(K.createProduct,o.value);console.log(_.data),_.data.status&&(o.value=b(structuredClone(s)),i.value=null)}catch(_){console.log(_)}};return(_,u)=>(x(),k(V,{justify:"center"},{default:t(()=>[e(l,{cols:"12",md:"10"},{default:t(()=>[e(L,{title:"Add Product"},{default:t(()=>[e(M,null,{default:t(()=>[e(Y,{onSubmit:u[12]||(u[12]=F(()=>{},["prevent"]))},{default:t(()=>[e(V,null,{default:t(()=>[e(l,{cols:"12",md:"2"},{default:t(()=>[e(E,{width:"100%",src:"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}),e(C,{justify:"center",width:"100%",class:"mt-3"},{default:t(()=>[T(" Upload ")]),_:1})]),_:1}),e(l,{cols:"12",md:"5"},{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(f,{modelValue:o.value.name,"onUpdate:modelValue":u[0]||(u[0]=d=>o.value.name=d),label:"Product Name",placeholder:"Product Name",variant:"underlined"},null,8,["modelValue"])]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(P,{modelValue:i.value,"onUpdate:modelValue":u[1]||(u[1]=d=>i.value=d),items:g(m).getCategoriesSelect,label:"Category",placeholder:"Category",variant:"underlined"},null,8,["modelValue","items"])]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(P,{modelValue:o.value.product_type_id,"onUpdate:modelValue":u[2]||(u[2]=d=>o.value.product_type_id=d),items:c.value,label:"Product Type",placeholder:"Product Type",variant:"underlined"},null,8,["modelValue","items"])]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(V,null,{default:t(()=>[e(l,{cols:"6"},{default:t(()=>[e(f,{modelValue:o.value.unit_amount,"onUpdate:modelValue":u[3]||(u[3]=d=>o.value.unit_amount=d),label:"Unit Amount",placeholder:"Unit Amount",variant:"underlined",type:"number"},null,8,["modelValue"])]),_:1}),e(l,{cols:"6"},{default:t(()=>[e(P,{modelValue:o.value.unit_id,"onUpdate:modelValue":u[4]||(u[4]=d=>o.value.unit_id=d),items:g(m).getUnitTypeSelect,label:"Unit Type",placeholder:"Unit Type",variant:"underlined"},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(Z,{modelValue:o.value.description,"onUpdate:modelValue":u[5]||(u[5]=d=>o.value.description=d),label:"Description",placeholder:"Description",variant:"underlined"},null,8,["modelValue"])]),_:1})]),_:1}),e(l,{cols:"12",md:"5"},{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(V,null,{default:t(()=>[e(l,{cols:"6"},{default:t(()=>[e(f,{modelValue:o.value.selling_price,"onUpdate:modelValue":u[6]||(u[6]=d=>o.value.selling_price=d),label:"Selling Price",placeholder:"Selling Price",variant:"underlined",type:"number"},null,8,["modelValue"])]),_:1}),e(l,{cols:"6"},{default:t(()=>[e(G,{modelValue:o.value.cost_adjust_type,"onUpdate:modelValue":u[7]||(u[7]=d=>o.value.cost_adjust_type=d),label:"Adjust",variant:"underlined"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(V,null,{default:t(()=>[e(l,{cols:"6"},{default:t(()=>[e(f,{modelValue:o.value.cost,"onUpdate:modelValue":u[8]||(u[8]=d=>o.value.cost=d),label:"Cost",placeholder:"Cost",variant:"underlined",type:"number"},null,8,["modelValue"])]),_:1}),e(l,{cols:"6"},{default:t(()=>[e(f,{modelValue:o.value.available_qty,"onUpdate:modelValue":u[9]||(u[9]=d=>o.value.available_qty=d),label:"Available Qty",placeholder:"Available Qty",variant:"underlined",type:"number"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(V,null,{default:t(()=>[e(l,{cols:"6"},{default:t(()=>[e(f,{modelValue:o.value.reserved_qty,"onUpdate:modelValue":u[10]||(u[10]=d=>o.value.reserved_qty=d),label:"Reserved Qty",placeholder:"Reserved Qty",variant:"underlined",type:"number"},null,8,["modelValue"])]),_:1}),e(l,{cols:"6"},{default:t(()=>[e(f,{modelValue:o.value.in_transit_qty,"onUpdate:modelValue":u[11]||(u[11]=d=>o.value.in_transit_qty=d),label:"In Transit Qty",placeholder:"In Transit Qty",variant:"underlined",type:"number"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(l,{cols:"12",class:"d-flex gap-4"},{default:t(()=>[e(C,{type:"submit",onClick:n},{default:t(()=>[T(" Submit ")]),_:1}),e(C,{type:"reset",color:"secondary",variant:"tonal"},{default:t(()=>[T(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},ge={__name:"ProductEdit",props:["product"],setup(p){const m=p;let s=m.product;const o=q(),i=$();N(async()=>{await i.updateCategoryList(),await i.updateProductTypeList(),await i.updateUnitTypeList()});const c={name:s.name,category_id:s.category_id,product_type_id:s.product_type_id,unit_amount:s.unit_amount,unit_id:s.unit_id,description:s.description,selling_price:s.selling_price,cost_adjust_type:s.cost_adjust_type==1,cost:s.cost,available_qty:s.available_qty,reserved_qty:s.reserved_qty,in_transit_qty:s.in_transit_qty},n=b(structuredClone(c)),_=b(c.category_id),d=b((()=>{let v=i.productTypes;return v=v.filter(a=>a.category_id===_.value),v=v.map(a=>({title:a.name,value:a.product_type_id})),v})());R(_,v=>{let a=i.productTypes;n.value.category_id=v,a=a.filter(r=>r.category_id===v),a=a.map(r=>({title:r.name,value:r.product_type_id})),n.value.product_type_id=null,d.value=a});const A=async()=>{try{const v=K.editProduct+"/"+m.product.product_id,a=await z.put(v,n.value);await o.updateProductList(),o.editModalStatus=!1}catch(v){console.log(v)}};return(v,a)=>(x(),k(V,{justify:"center"},{default:t(()=>[e(l,{cols:"12",md:"10"},{default:t(()=>[e(L,{title:"Add Product"},{default:t(()=>[e(M,null,{default:t(()=>[e(Y,{onSubmit:a[12]||(a[12]=F(()=>{},["prevent"]))},{default:t(()=>[e(V,null,{default:t(()=>[e(l,{cols:"12",md:"2"},{default:t(()=>[e(E,{width:"100%",src:"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}),e(C,{justify:"center",width:"100%",class:"mt-3"},{default:t(()=>[T(" Upload ")]),_:1})]),_:1}),e(l,{cols:"12",md:"5"},{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(f,{modelValue:n.value.name,"onUpdate:modelValue":a[0]||(a[0]=r=>n.value.name=r),label:"Product Name",placeholder:"Product Name",variant:"underlined"},null,8,["modelValue"])]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(P,{modelValue:_.value,"onUpdate:modelValue":a[1]||(a[1]=r=>_.value=r),items:g(i).getCategoriesSelect,label:"Category",placeholder:"Category",variant:"underlined"},null,8,["modelValue","items"])]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(P,{modelValue:n.value.product_type_id,"onUpdate:modelValue":a[2]||(a[2]=r=>n.value.product_type_id=r),items:d.value,label:"Product Type",placeholder:"Product Type",variant:"underlined"},null,8,["modelValue","items"])]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(V,null,{default:t(()=>[e(l,{cols:"6"},{default:t(()=>[e(f,{modelValue:n.value.unit_amount,"onUpdate:modelValue":a[3]||(a[3]=r=>n.value.unit_amount=r),label:"Unit Amount",placeholder:"Unit Amount",variant:"underlined",type:"number"},null,8,["modelValue"])]),_:1}),e(l,{cols:"6"},{default:t(()=>[e(P,{modelValue:n.value.unit_id,"onUpdate:modelValue":a[4]||(a[4]=r=>n.value.unit_id=r),items:g(i).getUnitTypeSelect,label:"Unit Type",placeholder:"Unit Type",variant:"underlined"},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(Z,{modelValue:n.value.description,"onUpdate:modelValue":a[5]||(a[5]=r=>n.value.description=r),label:"Description",placeholder:"Description",variant:"underlined"},null,8,["modelValue"])]),_:1})]),_:1}),e(l,{cols:"12",md:"5"},{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(V,null,{default:t(()=>[e(l,{cols:"6"},{default:t(()=>[e(f,{modelValue:n.value.selling_price,"onUpdate:modelValue":a[6]||(a[6]=r=>n.value.selling_price=r),label:"Selling Price",placeholder:"Selling Price",variant:"underlined",type:"number"},null,8,["modelValue"])]),_:1}),e(l,{cols:"6"},{default:t(()=>[e(G,{modelValue:n.value.cost_adjust_type,"onUpdate:modelValue":a[7]||(a[7]=r=>n.value.cost_adjust_type=r),label:"Adjust",variant:"underlined"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(V,null,{default:t(()=>[e(l,{cols:"6"},{default:t(()=>[e(f,{modelValue:n.value.cost,"onUpdate:modelValue":a[8]||(a[8]=r=>n.value.cost=r),label:"Cost",placeholder:"Cost",variant:"underlined",type:"number"},null,8,["modelValue"])]),_:1}),e(l,{cols:"6"},{default:t(()=>[e(f,{modelValue:n.value.available_qty,"onUpdate:modelValue":a[9]||(a[9]=r=>n.value.available_qty=r),label:"Available Qty",placeholder:"Available Qty",variant:"underlined",type:"number"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(V,null,{default:t(()=>[e(l,{cols:"6"},{default:t(()=>[e(f,{modelValue:n.value.reserved_qty,"onUpdate:modelValue":a[10]||(a[10]=r=>n.value.reserved_qty=r),label:"Reserved Qty",placeholder:"Reserved Qty",variant:"underlined",type:"number"},null,8,["modelValue"])]),_:1}),e(l,{cols:"6"},{default:t(()=>[e(f,{modelValue:n.value.in_transit_qty,"onUpdate:modelValue":a[11]||(a[11]=r=>n.value.in_transit_qty=r),label:"In Transit Qty",placeholder:"In Transit Qty",variant:"underlined",type:"number"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(l,{cols:"12",class:"d-flex gap-4"},{default:t(()=>[e(C,{type:"submit",onClick:A},{default:t(()=>[T(" Submit ")]),_:1}),e(C,{type:"reset",color:"secondary",variant:"tonal"},{default:t(()=>[T(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Ue=y("thead",null,[y("tr",null,[y("th",{class:"text-uppercase"}," Name "),y("th",{class:"text-center text-uppercase"}," Product Type "),y("th",{class:"text-center text-uppercase"}," Quantity "),y("th",{class:"text-center text-uppercase"}," Price Cost "),y("th",{class:"text-center text-uppercase"}," Cost "),y("th",{class:"text-center text-uppercase"}," Action ")])],-1),xe={class:"text-center"},Ce={class:"text-center"},Te={class:"text-center"},Pe={class:"text-center"},Se={class:"text-center"},we={__name:"ProductTable",setup(p){const m=q();b(!1);const s=b(null);return(o,i)=>(x(),j(B,null,[e(ve,null,{default:t(()=>[Ue,y("tbody",null,[(x(!0),j(B,null,me(g(m).productList,c=>(x(),j("tr",{key:c.product_id},[y("td",null,U(c.name)+" - "+U(c.unit_amount)+U(c.unit),1),y("td",xe,U(c.product_type),1),y("td",Ce,U(c.available_qty),1),y("td",Te,U(c.selling_price),1),y("td",Pe,U(c.cost),1),y("td",Se,[e(_e,{size:"20",start:"",icon:"mdi-account-outline",onClick:n=>{s.value=c,g(m).editModalStatus=!0}},null,8,["onClick"])])]))),128))])]),_:1}),e(be,{modelValue:g(m).editModalStatus,"onUpdate:modelValue":i[0]||(i[0]=c=>g(m).editModalStatus=c),width:"auto"},{default:t(()=>[e(ge,{product:s.value},null,8,["product"])]),_:1},8,["modelValue"])],64))}},Be={__name:"ProductList",setup(p){return q(),(m,s)=>(x(),k(V,{justify:"center"},{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(L,{title:"Basic"},{default:t(()=>[e(we)]),_:1})]),_:1})]),_:1}))}};export{Ie as _,Be as a};
