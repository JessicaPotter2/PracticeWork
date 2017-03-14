# PracticeWork
work of practice


>这里是近期练习作品合集，素材PSD来自于不同的网站，只为更好地练习，不做商用。


<h3>单页网站练习20170228</h3>
>素材来自 <a href="http://pixelhint.com" target="_blank">Pixelhint.com</a>,已附上<a href="https://github.com/JessicaPotter2/PracticeWork/blob/master/%E4%BB%BF%E7%AB%9920170228/index.psd" target="_blank">PSD</a>网站实现：HTML5、CSS、JQuery。
**在线演示**<a href="http://codepen.io/cumtyeyunjiao/full/JWyPWq/" target="_blank">Demo</a>
####制作这个网页时遇到的问题及解决办法：
+ 将其放在<a href="http://codepen.io/cumtyeyunjiao/pens/public/">codepen</a>上时，由于引用了github上的JQuery和另一个插件的raw版本的文件，效果显现不出来，而且浏览器报错：because its MIME type ('text/plain') is not executable, and strict MIME type checking is enabled.Google了一下，说是因为raw.githubusercontent.com在Response中设置了X-Content-Type-Options:nosniff ，告诉浏览器强制检查资源的MIME，进行加载。这是一种安全功能，但是会更改浏览器的行为，导致浏览器不加载css文件和JS文件。答主建议将raw.githubusercontent.com换成rawgit.com，由此，codepen上的引用文件可访问。
<h4>网站整体预览图</h4>
<img src="https://github.com/JessicaPotter2/PracticeWork/blob/master/%E4%BB%BF%E7%AB%9920170228/%E4%BB%BF%E7%AB%9920170228.png?raw=true" alt="网站整体预览图" width="600px"/>




<h4>网站自适应情况图</h4>
<img src="https://github.com/JessicaPotter2/PracticeWork/blob/master/%E4%BB%BF%E7%AB%9920170228/%E8%87%AA%E9%80%82%E5%BA%94%E5%9B%BE%E7%89%87.png?raw=true" alt="网站自适应情况图" width="350px">

<h3>单页网站练习20170304</h3>
>素材来自 <a href="http://sc.chinaz.com/" target="_blank">站长素材</a>,已附上<a href="https://github.com/JessicaPotter2/PracticeWork/blob/master/%E4%BB%BF%E7%AB%9920170304/psd20434.psd" target="_blank">PSD</a>网站实现：HTML5、CSS、JavaScript、JQuery。
**在线演示**<a href="http://codepen.io/cumtyeyunjiao/full/jBrpPG/" target="_blank">Demo</a>

####制作这个网页时遇到的问题及解决办法：
+ 以我电脑显示屏的大小在浏览器里显示时是正常的，但是放到<a href="http://codepen.io/cumtyeyunjiao/pens/public/">codepen</a>上的网站并不能正常显示，以Full Page方法打开时，nav导航部分被挤下来了，因此我将自适应的max-width分得更细，让其在多分辨率下正常显示。
+ nav导航栏在隐藏后，点击menu_icon展示时，仅显示一个li的高度，其他的li被隐藏了，检查后发现我给nav设置了高度，且设置了overflow:hidden。header上的高度可以满足正常浏览时的布局，nav可以不用设置。
+ 一开始的logo是以wrapper_l的背景显示的，后来在小屏上发现，nav贴着header顶部，而不是在header底部，所以让logo以图片形式显示，在小屏上设置不浮动，nav就会以图片大小距离header顶部显示，给nav设置30%的左边距让其右边与menu_icon对齐。
+ footer要加overflow:hidden让背景色填满内容，对footer里的wrapper_s设置最小高度，以防小屏时联系方式被隐藏掉。
+ 为了更好地实现标签的语义化，footer底部信息用dl和dt标签来描述，由于联系方式较长，所以针对不同的屏幕大小对联系方式进行布局。
<h4>网站整体预览图</h4>
<img src="https://github.com/JessicaPotter2/PracticeWork/blob/master/%E4%BB%BF%E7%AB%9920170304/%E4%BB%BF%E7%AB%9920170304.png?raw=true" alt="网站整体预览图" width="600px"/>

<h4>网站自适应情况图</h4>

<img src="https://github.com/JessicaPotter2/PracticeWork/blob/master/%E4%BB%BF%E7%AB%9920170304/%E4%BB%BF%E7%AB%9920170304%E2%80%94%E2%80%94%E8%87%AA%E9%80%82%E5%BA%94.png?raw=true" alt="网站自适应情况图" width="350px"/>


<h3>单页网站练习20170306</h3>
>素材来自 <a href="http://pixelhint.com" target="_blank">Pixelhint.com</a>,已附上<a href="https://github.com/JessicaPotter2/PracticeWork/blob/master/%E4%BB%BF%E7%AB%9920170306/La_Casa.psd" target="_blank">PSD</a>网站实现：HTML5、CSS、JQuery。
**在线演示**<a href="http://codepen.io/cumtyeyunjiao/full/ZeJzxm/" target="_blank">Demo</a>
+ 由于font的问题，会导致下面展示图的排列不同，默认用Microsoft Yahei，导致将展示图的边框线挤掉了，尽管在比例合适的时候，但是原PSD用的是p22_corinthia字体，同样字体大小，如”16px“的情况下，实际大小是不同的，因此我换成p22_corinthia，合适比例的时候，边框线并没有被挤掉，文字的展示也符合原PSD上的布局。
+ 引用github上的font时，是没有其他资源引用时的按钮，因此我不断尝试，通过，字体页面字体文件的View Raw按钮，点击后会弹出下载框，此时下载框内的下载地址可以作为引用地址，.svg的引用与其他文件不同，有Raw按钮，但是Raw之后要将raw.githubusercontent.com该成rawgit.com才可引用。
<h4>网站整体预览图</h4>
<img src="https://github.com/JessicaPotter2/PracticeWork/blob/master/%E4%BB%BF%E7%AB%9920170306/%E4%BB%BF%E7%AB%9920170306.png?raw=true" alt="网站整体预览图" width="600px"/>

<h4>网站自适应情况图</h4>

<img src="https://github.com/JessicaPotter2/PracticeWork/blob/master/%E4%BB%BF%E7%AB%9920170306/%E4%BB%BF%E7%AB%9920170306%E2%80%94%E2%80%94%E8%87%AA%E9%80%82%E5%BA%94.png?raw=true" alt="网站自适应情况图" width="350px"/>
