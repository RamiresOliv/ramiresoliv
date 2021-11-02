openned = false
 
 function abouttome() {
  if (openned != true) {
   openned = true
   document.getElementById("abouttome_text").innerHTML = `<p>
  <em> gosto de programar. Mas talvez no futuro utilizar minhas habilidades de Programar para gerar dinheiro ou algo parecido <em>
em fim, nos meus dias eu fico maior tempo programando e criando mapas no [Roblox](https://roblox.com) sim não me critique até que a criação de Mapas melhora minha vizão em programar [Lua](https://www.lua.org)

os tipos de linguagem que amo programar são:

1. [Node.js](https://nodejs.org) *(JavaScript)*
2. [Lua](https://www.lua.org)
3. [Markdown](https://www.markdownguide.org)
4. [Html](https://developer.mozilla.org/docs/Web/HTML) junto [Css](https://developer.mozilla.org/docs/Web/CSS)
5. [Ruby](https://www.ruby-lang.org) (aprendendo) *com uso de [Jekyll](https://jekyllrb.com)*
6. [Batch](https://docs.microsoft.com/azure/batch/)
7. [Python](https://www.python.org)
  </p>`
  } else {
     document.getElementById("abouttome_text").innerHTML = ""
   }
 }
