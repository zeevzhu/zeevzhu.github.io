(function(){
  var nav=document.getElementById('mainnav'), burger=document.getElementById('burger');
  if(burger&&nav){
    burger.addEventListener('click',function(){
      var open=nav.classList.toggle('open');
      burger.setAttribute('aria-expanded',open?'true':'false');
    });
  }
  var copyBtn=document.getElementById('copyEmail');
  if(copyBtn){
    copyBtn.addEventListener('click',function(){
      var done=function(){ var t=document.getElementById('toast'); if(t){ t.style.display='block'; setTimeout(function(){t.style.display='none'},2200); } };
      if(navigator.clipboard&&navigator.clipboard.writeText){ navigator.clipboard.writeText('zezhu@purdue.edu').then(done,done); } else { done(); }
    });
  }
  var totop=document.getElementById('totop');
  if(totop){
    window.addEventListener('scroll',function(){ totop.style.display=window.scrollY>700?'block':'none'; },{passive:true});
    totop.addEventListener('click',function(){ window.scrollTo({top:0,behavior:'smooth'}); });
  }
})();
