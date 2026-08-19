(function(){
  var els=document.querySelectorAll('.sec, .plate, .close');
  if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches){return;}
  els.forEach(function(el){el.classList.add('rise');});
  var io=new IntersectionObserver(function(en){
    en.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{rootMargin:'0px 0px -8% 0px',threshold:.05});
  els.forEach(function(el){io.observe(el);});
})();
(function(){
  var bar=document.querySelector('.sortbar'), tariff=document.querySelector('.tariff');
  if(!bar||!tariff){return;}
  var rooms=[].slice.call(tariff.querySelectorAll('.room'));
  if(rooms.length<2){ bar.style.display='none'; return; }
  function apply(mode){
    var sorted=rooms.slice().sort(function(a,b){
      if(mode==='rank'){ return (+a.getAttribute('data-rank'))-(+b.getAttribute('data-rank')); }
      var x=+a.getAttribute('data-rate'), y=+b.getAttribute('data-rate');
      return mode==='desc' ? y-x : x-y;
    });
    sorted.forEach(function(r){ tariff.appendChild(r); });
    [].slice.call(bar.querySelectorAll('.sortbtn')).forEach(function(b){
      var on = b.getAttribute('data-sort')===mode;
      b.classList.toggle('is-on',on);
      b.setAttribute('aria-pressed',on?'true':'false');
    });
  }
  bar.addEventListener('click',function(e){
    var b=e.target;
    while(b&&b!==bar&&!b.getAttribute('data-sort')){ b=b.parentNode; }
    if(b&&b!==bar){ apply(b.getAttribute('data-sort')); }
  });
  /* the markup is in price order so it reads sensibly without script;
     most booked is what we want people to see, so apply it on load */
  apply('rank');
})();
(function(){
  var lb=document.getElementById('lb'),img=document.getElementById('lbimg'),
      cap=document.getElementById('lbcap'),close=document.getElementById('lbclose'),last=null;
  function open(btn){
    last=btn;
    var src=btn.querySelector('img');
    img.src=src.src; img.alt=src.alt;
    cap.textContent=btn.dataset.cap||'';
    lb.classList.add('on'); close.focus(); document.body.style.overflow='hidden';
  }
  function shut(){ lb.classList.remove('on'); img.src=''; document.body.style.overflow=''; if(last){last.focus(); last=null;} }
  document.querySelectorAll('.gal button').forEach(function(b){ b.addEventListener('click',function(){open(b);}); });
  close.addEventListener('click',shut);
  lb.addEventListener('click',function(e){ if(e.target===lb||e.target===img||e.target===cap){shut();} });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&lb.classList.contains('on')){shut();} });
})();