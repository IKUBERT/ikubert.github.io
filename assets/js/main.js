/* IKUBERT · JS común para todas las páginas */
(function(){
  const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
  const nav=$('#site-nav'), navT=$('#navToggle'), navD=$('#navDrawer'), navO=$('#navOverlay');

  /* Menú móvil */
  function closeNav(){ if(!navD)return; navD.classList.remove('open');navO.classList.remove('open');navT.classList.remove('open');navT.setAttribute('aria-expanded','false');document.body.style.overflow=''; }
  if(navT){
    navT.addEventListener('click',()=>{const o=navD.classList.toggle('open');navO.classList.toggle('open',o);navT.classList.toggle('open',o);navT.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':'';});
    navO.addEventListener('click',closeNav);
    $$('a',navD).forEach(a=>a.addEventListener('click',closeNav));
  }

  /* En la portada, "Servicios" del menú baja a la sección en vez de cambiar de página */
  if(window.IKU && IKU.home){ $$('[data-home-href]').forEach(a=>a.setAttribute('href',a.dataset.homeHref)); }

  /* Scroll suave con compensación del menú fijo */
  function scrollToEl(t){ window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-(nav?nav.offsetHeight:0),behavior:'smooth'}); }
  $$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
    const id=a.getAttribute('href'); if(id.length<2)return;
    const t=document.querySelector(id); if(!t)return;
    e.preventDefault(); scrollToEl(t);
  }));

  /* Enlace activo del menú en la portada */
  const secs=$$('section[id]'), nls=$$('.nav-links-desktop a[href^="#"]');
  if(nls.length){ window.addEventListener('scroll',()=>{let c='';secs.forEach(s=>{if(window.scrollY>=s.offsetTop-140)c=s.id;});nls.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+c));},{passive:true}); }

  /* Acordeón "Nosotros" */
  window.toggleNosotros=function(force){
    const body=$('#nosotros-body'),arrow=$('#nosotros-arrow'),trig=$('#nosotros-trigger'); if(!body)return;
    const open=(force!==undefined)?force:!body.classList.contains('open');
    body.classList.toggle('open',open); trig.classList.toggle('nosotros-open',open); arrow.textContent=open?'×':'+';
    trig.setAttribute('aria-expanded',open);
  };
  ['nav-nosotros','drawer-nosotros'].forEach(id=>{
    const el=document.getElementById(id), sec=$('#nosotros');
    if(el&&sec) el.addEventListener('click',e=>{e.preventDefault();closeNav();scrollToEl(sec);setTimeout(()=>toggleNosotros(true),420);});
  });
  /* Si llegan desde otra página a /#nosotros, abrirlo */
  if(location.hash==='#nosotros') setTimeout(()=>toggleNosotros(true),300);

  /* Pilares */
  window.togglePillar=function(i){
    const p=document.getElementById('pillar-'+i); if(!p)return; const was=p.classList.contains('popen');
    $$('.pillar').forEach(x=>{x.classList.remove('popen');x.querySelector('.pillar-ico').textContent='+';});
    if(!was){p.classList.add('popen');p.querySelector('.pillar-ico').textContent='×';}
  };

  /* Tarjetas de servicio (móvil) */
  window.toggleSvc=function(btn){
    const body=btn.nextElementSibling, ico=btn.querySelector('.toggle-ico'), open=body.style.display==='block';
    body.style.display=open?'none':'block'; ico.textContent=open?'+':'−'; ico.style.transform=open?'':'rotate(45deg)';
    btn.setAttribute('aria-expanded',!open);
  };

  /* Preguntas frecuentes (páginas de servicio) */
  window.toggleFaq=function(el){
    const item=el.parentElement, was=item.classList.contains('open');
    $$('.faq-item.open').forEach(i=>{i.classList.remove('open');i.querySelector('.faq-ico').textContent='+';});
    if(!was){item.classList.add('open');el.querySelector('.faq-ico').textContent='×';}
  };

  /* Formularios → Google Apps Script (mismo endpoint de siempre) */
  function wireForm(form,onOk,btn,btnText){
    if(!form||!window.IKU)return;
    const t0=Date.now();
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const fd=new FormData(form), trampa=fd.get('website');
      fd.delete('website');
      /* Anti-spam: los bots llenan el campo oculto o envían en menos de 3 segundos.
         Se les muestra "enviado" pero no se manda nada a la planilla. */
      if(trampa || Date.now()-t0<3000){onOk();form.reset();return;}
      if(btn){btn.disabled=true;btn.textContent='PROCESANDO...';}
      fetch(IKU.form,{method:'POST',body:fd})
        .then(()=>{onOk();form.reset();track('formulario_enviado',{formulario:form.id});})
        .catch(()=>{if(btn){btn.disabled=false;btn.textContent='ERROR - INTÉNTALO DE NUEVO';}});
    });
  }
  const cf=$('#contact-form');
  wireForm(cf,()=>{$('#submit-btn').style.display='none';$('#response-msg').style.display='block';},$('#submit-btn'));
  const sf=$('#subscribe-form');
  wireForm(sf,()=>{$('#sub-msg').style.display='block';},$('#sub-btn'));

  /* Botón flotante de WhatsApp: en la portada aparece recién al bajar del inicio,
     así no tapa los botones principales en el teléfono */
  const waF=$('.wa-float'), heroSec=$('#inicio');
  if(waF && heroSec && 'IntersectionObserver' in window){
    waF.classList.add('oculto');
    new IntersectionObserver(es=>es.forEach(e=>waF.classList.toggle('oculto',e.intersectionRatio>0.35)),{threshold:[0,0.35,1]}).observe(heroSec);
  }

  /* Medición de clics a WhatsApp (solo si GA4 está activo) */
  function track(ev,params){ if(typeof window.gtag==='function') gtag('event',ev,params||{}); }
  $$('a[href*="wa.me/"]').forEach(a=>a.addEventListener('click',()=>track('click_whatsapp',{ubicacion:a.dataset.evento||a.textContent.trim().slice(0,40),pagina:location.pathname})));
})();
