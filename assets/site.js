(function(){
  var nav=document.getElementById('mainnav'), burger=document.getElementById('burger');
  if(burger&&nav){
    burger.addEventListener('click',function(){
      var open=nav.classList.toggle('open');
      burger.setAttribute('aria-expanded',open?'true':'false');
    });
  }
  var totop=document.getElementById('totop');
  if(totop){
    window.addEventListener('scroll',function(){ totop.style.display=window.scrollY>700?'block':'none'; },{passive:true});
    totop.addEventListener('click',function(){ window.scrollTo({top:0,behavior:'smooth'}); });
  }
})();
