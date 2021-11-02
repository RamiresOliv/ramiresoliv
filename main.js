openned = false
 
 function abouttome() {
  if (openned != true) {
   openned = true
   document.getElementById("abouttome_text").innerHTML = `<p>
  <em> gosto de programar. Mas talvez no futuro utilizar minhas habilidades de Programar para gerar dinheiro ou algo parecido\ <em>
em fim, nos meus dias eu fico maior tempo programando e criando mapas no [Roblox](https://roblox.com) sim não me critique até que a criação de Mapas melhora minha vizão em programar [Lua](https://www.lua.org)\

os tipos de linguagem que amo programar são:\

1. <a href="https://nodejs.org">Node.js</a> *(JavaScript)*\
2. <a href="https://www.lua.org">Lua</a> \
3. <a href="https://www.markdownguide.org">Markdown</a> \
4. <a href="https://developer.mozilla.org/docs/Web/HTML">Html</a> junto <a href="https://developer.mozilla.org/docs/Web/CSS">Css</a> \
5. <a href="https://www.ruby-lang.org">Ruby</a> (aprendendo) *com uso de <a href="https://jekyllrb.com">Jekyll</a>* \
6. <a href="https://docs.microsoft.com/azure/batch">Batch</a> \
7. <a href="https://www.python.org">Python</a> 
  </p>`
  } else {
     openned = false
     document.getElementById("abouttome_text").innerHTML = ""
   }
 }
