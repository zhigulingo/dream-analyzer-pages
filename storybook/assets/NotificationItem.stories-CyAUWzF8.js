import{u as r}from"./notifications-DNcTnQ1E.js";import{q as N,l as a,s as y,A as S,B as j,C as G,D as L,T as W,y as s,F as q,v as O,x as U,p as c,E as H,z as J,u as K,G as P}from"./vue.esm-bundler-CGnV_34m.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./pinia-QrxFPRZ4.js";const R={key:0,class:"notification-container"},X=["onClick"],Y={class:"notification-content"},Z={class:"notification-icon"},ee={class:"notification-message"},te=["onClick"],z={__name:"NotificationSystem",setup(e){const f=r();function D(o){const n="notification-base",t={success:"notification-success",error:"notification-error",warning:"notification-warning",info:"notification-info"};return[n,t[o.type]||t.info]}function F(o){const n={success:"CheckCircleIcon",error:"ExclamationCircleIcon",warning:"ExclamationTriangleIcon",info:"InformationCircleIcon"};return n[o]||n.info}function V(o){o.onClick&&o.onClick()}return(o,n)=>(s(),N(W,{to:"body"},[S(f).notifications.length>0?(s(),a("div",R,[j(L,{name:"notification",tag:"div",class:"notification-list"},{default:G(()=>[(s(!0),a(q,null,O(S(f).notifications,t=>(s(),a("div",{key:t.id,class:U([D(t),"notification"]),onClick:$=>V(t)},[c("div",Y,[c("div",Z,[(s(),N(H(F(t.type)),{class:"w-5 h-5"}))]),c("div",ee,J(t.message),1),t.dismissible?(s(),a("button",{key:0,class:"notification-close",onClick:K($=>S(f).removeNotification(t.id),["stop"])},[...n[0]||(n[0]=[c("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])],8,te)):y("",!0)]),t.duration>0?(s(),a("div",{key:0,class:"notification-progress",style:P({animationDuration:`${t.duration}ms`})},null,4)):y("",!0)],10,X))),128))]),_:1})])):y("",!0)]))}},i=Q(z,[["__scopeId","data-v-a5ea5f12"]]);z.__docgenInfo={exportName:"default",displayName:"NotificationSystem",description:"",tags:{},sourceFiles:["/root/projects/dream-analyzer/tma/src/components/NotificationSystem.vue"]};const ie={title:"Components/NotificationItem",component:i,tags:["autodocs"]},l={render:()=>({components:{NotificationSystem:i},setup(){const e=r();return e.clearAll(),e.success("Анализ сна завершён!"),{}},template:"<NotificationSystem />"})},m={render:()=>({components:{NotificationSystem:i},setup(){const e=r();return e.clearAll(),e.error("Не удалось сохранить данные"),{}},template:"<NotificationSystem />"})},u={render:()=>({components:{NotificationSystem:i},setup(){const e=r();return e.clearAll(),e.warning("Осталось мало токенов"),{}},template:"<NotificationSystem />"})},p={render:()=>({components:{NotificationSystem:i},setup(){const e=r();return e.clearAll(),e.info("Обновление профиля..."),{}},template:"<NotificationSystem />"})},d={render:()=>({components:{NotificationSystem:i},setup(){const e=r();return e.clearAll(),e.success("Первое уведомление"),setTimeout(()=>e.warning("Второе уведомление"),100),setTimeout(()=>e.info("Третье уведомление"),200),{}},template:"<NotificationSystem />"})};var g,_,C;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    components: {
      NotificationSystem
    },
    setup() {
      const store = useNotificationStore();
      store.clearAll();
      store.success('Анализ сна завершён!');
      return {};
    },
    template: '<NotificationSystem />'
  })
}`,...(C=(_=l.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var k,v,h;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => ({
    components: {
      NotificationSystem
    },
    setup() {
      const store = useNotificationStore();
      store.clearAll();
      store.error('Не удалось сохранить данные');
      return {};
    },
    template: '<NotificationSystem />'
  })
}`,...(h=(v=m.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var w,A,I;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => ({
    components: {
      NotificationSystem
    },
    setup() {
      const store = useNotificationStore();
      store.clearAll();
      store.warning('Осталось мало токенов');
      return {};
    },
    template: '<NotificationSystem />'
  })
}`,...(I=(A=u.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var x,T,E;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => ({
    components: {
      NotificationSystem
    },
    setup() {
      const store = useNotificationStore();
      store.clearAll();
      store.info('Обновление профиля...');
      return {};
    },
    template: '<NotificationSystem />'
  })
}`,...(E=(T=p.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var b,B,M;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    components: {
      NotificationSystem
    },
    setup() {
      const store = useNotificationStore();
      store.clearAll();
      store.success('Первое уведомление');
      // Use setTimeout to bypass dedup
      setTimeout(() => store.warning('Второе уведомление'), 100);
      setTimeout(() => store.info('Третье уведомление'), 200);
      return {};
    },
    template: '<NotificationSystem />'
  })
}`,...(M=(B=d.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};const ae=["Success","Error","Warning","Info","Multiple"];export{m as Error,p as Info,d as Multiple,l as Success,u as Warning,ae as __namedExportsOrder,ie as default};
