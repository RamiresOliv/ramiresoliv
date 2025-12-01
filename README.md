<a href="https://github.com/RamiresOliv"> <img src="https://avatars.githubusercontent.com/u/69019082?v=4" alt="cate (oops)" min-width="400px" max-width="400px" width="400px" align="right"> </a>
<i>"Ramires"</i><br>
<p align="left">Hello, my name is Gabriel Ramires de Oliveira, a backend-focused programmer, addicted to coffee. I don't have many serious projects, but if you want to take a look at my creations, feel free.
Currently learning more Roblox-TS and Embedded systems.
</p

---

<font align="left">
<h4>Main Projects:</h4>
<a href="https://github.com/RamiresOliv/cobalt">cobalt language (concept)</a>
<br>
<a href="https://github.com/RamiresOliv/esp-projects">esp32 projects (idle)</a>
<br>
<a href="https://github.com/RamiresOliv/puropixel-ssd1306">puropixel ssd1306</a>
<br>
</font>
<h4>Using:</h4>

<a href="https://roblox-ts.com/"><img height="50px" width="50px" src="https://github.com/user-attachments/assets/38c71ae9-2007-42e6-af0f-db395af752f8"></a>&nbsp;&nbsp;&nbsp;<a href="https://rojo.space/"><img height="50px" width="100px" src="https://github.com/user-attachments/assets/9e15aeac-d247-4de6-9fa1-16af656441a7"></a></br>
<img src="https://skillicons.dev/icons?i=ts,lua,c,cpp,react&theme=dark">
<h4>Others:</h4>

<img src="https://skillicons.dev/icons?i=ts,lua,py,js,ruby,c,cpp,java,react&theme=dark">

<img src="https://skillicons.dev/icons?i=robloxstudio,npm,vscode,arduino,blender,raspberrypi,linux,windows&theme=dark">

---

```ts
import { CollectionService } from "@rbxts/services";

for (const obj of CollectionService.GetTagged("Lava")) {
    if (obj.IsA("BasePart")) {
        obj.Touched.Connect(part =>
            part
                .Parent
                ?.FindFirstChildOfClass("Humanoid")
                ?.TakeDamage(100)
        );
    }
}
```


> <i>Inspiration for this layout: <a href="https://github.com/ArthurFt">ArthurFt</a>.</i>
