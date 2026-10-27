// Lluvia de código
const cv=document.getElementById('matrix'),cx=cv.getContext('2d');let cols,drops;
function size(){cv.width=innerWidth;cv.height=innerHeight;cols=Math.floor(cv.width/16);drops=Array(cols).fill(1)}
size();addEventListener('resize',size);
setInterval(()=>{cx.fillStyle='rgba(0,0,0,.08)';cx.fillRect(0,0,cv.width,cv.height);cx.fillStyle='#00ff88';cx.font='14px monospace';
drops.forEach((y,i)=>{cx.fillText(Math.random()<.5?'0':'1',i*16,y*16);drops[i]=y*16>cv.height&&Math.random()>.975?0:y+1})},60);
// Texto que se escribe
const words=['Estudiante de Ingeniería en Sistemas','Desarrollo web','Ciberseguridad'];let w=0,c=0,del=false;const t=document.getElementById('typed');
(function type(){const s=words[w];t.textContent=s.slice(0,c);if(!del&&c++===s.length){del=true;return setTimeout(type,1400)}
if(del&&c--===0){del=false;w=(w+1)%words.length}setTimeout(type,del?40:90)})();
// Barras y contadores al entrar en pantalla
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);
if(e.target.dataset.w)e.target.style.width=e.target.dataset.w+'%';
if(e.target.dataset.n){let n=+e.target.dataset.n,i=0;const id=setInterval(()=>{e.target.textContent=++i;if(i>=n)clearInterval(id)},90)}}));
document.querySelectorAll('[data-w],[data-n]').forEach(el=>io.observe(el));
// Formulario
document.getElementById('send').onclick=()=>{const m=document.getElementById('msg');
document.getElementById('ok').textContent=m.value.trim()?'Mensaje enviado. Te responderé pronto.':'Escribe un mensaje antes de enviar.';if(m.value.trim())m.value=''};
