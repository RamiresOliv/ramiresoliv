openned = false
document.getElementById("RemoveMe").innerHTML = "";

function abouttome() {
   
  if (openned != true) {
    openned = true
    document.getElementById("abouttome_text").innerHTML = `
    <p><em> gosto de programar. Mas talvez no futuro utilizar minhas habilidades de Programar para gerar dinheiro ou algo parecido\</em></p>
 
    <p>em fim, nos meus dias eu fico maior tempo programando e criando mapas no <a href="https://roblox.com">Roblox<a> sim não me critique até que a criação de Mapas melhora minha vizão em programar <a href="https://www.lua.org">Lua</a></p>
 
    <p>os tipos de linguagem que amo programar são:</p>
 
    <p>1. <a href="https://nodejs.org">Node.js</a> <em>(JavaScript)</em></p>\
    <p>2. <a href="https://www.lua.org">Lua</a></p>\
    <p>3. <a href="https://www.markdownguide.org">Markdown</a></p>\
    <p>4. <a href="https://developer.mozilla.org/docs/Web/HTML">Html</a> junto <a href="https://developer.mozilla.org/docs/Web/CSS">Css</a></p>\
    <p>5. <a href="https://www.ruby-lang.org">Ruby</a> (aprendendo) <em>com uso de <a href="https://jekyllrb.com">Jekyll</a></em></p>\
    <p>6. <a href="https://docs.microsoft.com/azure/batch">Batch</a></p>\
    <p>7. <a href="https://www.python.org">Python</a></p>
    </p>`
  } else {
    openned = false
    document.getElementById("abouttome_text").innerHTML = ""
  }
}
