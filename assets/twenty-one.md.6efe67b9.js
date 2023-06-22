import{_ as s,o as a,c as n,O as l}from"./chunks/framework.3254de84.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"twenty-one.md","filePath":"twenty-one.md"}'),p={name:"twenty-one.md"},o=l(`<h2 id="第二十一课——static与final关键字" tabindex="-1">第二十一课——static与final关键字 <a class="header-anchor" href="#第二十一课——static与final关键字" aria-label="Permalink to &quot;第二十一课——static与final关键字&quot;">​</a></h2><p><mark><strong>静态变量</strong></mark>是指在类中使用static​关键字声明的变量。<br> 与实例变量不同，静态变量属于类本身而不是类的实例，因此它们可以被所有实例共享，并且在类加载时就已经被初始化。</p><p>以下这两个都是静态变量，它们是属于MyClass这个类的，而不是属于对象的：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyClass</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">66</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>实例变量是每个对象单独的属性，而静态变量是该类所有对象共享的属性。<br> 任何对象都可以更改静态变量的值，但也可以在不创建对象的情况下操作静态变量。<br> 静态变量可以通过类名直接访问，而不需要创建该类的对象。例如，可以使用以下语句访问MyClass​类的静态变量：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> aa </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> MyClass</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> bb </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> MyClass</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>也就是：类名.静态变量名。<br> 你也可以：对象引用变量.静态变量名<br> 但是这是不鼓励的，因为它并不能清楚地表明它是静态变量。</p><hr><hr><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">请随意写</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span></code></pre></div><p>该语句中的System.out就是静态变量。</p><hr><hr><hr><p>静态方法，在声明中使用 static 修饰符的方法，应该用类名调用，而不需要创建类的实例。<br> 类名.方法名();<br> 注意: 你也可以使用对象引用来调用静态方法。<br> 实例变量名.方法名();<br> 但这是不鼓励的，因为它没有表明它们是静态方法。<br> 实例方法可以直接访问实例变量和实例方法。<br> 实例方法可以直接访问静态变量和静态方法。<br> 静态方法可以直接访问静态变量和静态方法。<br> 静态方法 <strong>不能</strong> 直接访问实例变量或实例方法 —— 它们必须使用对象引用。此外，静态方法不能使用 this 关键字，因为没有 this 引用的实例。</p><hr><hr><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Bukkit</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createBossBar</span><span style="color:#89DDFF;">(...);</span></span></code></pre></div><p>该语句的方法是静态方法。</p><hr><hr><hr><p>static修饰符在与final修饰符结合使用时，也用于定义<mark><strong>常量</strong></mark>。final修饰符表示此变量的值不能更改。<br> 例如，以下变量声明定义了一个名为PI的常量，其值是 π 的近似值(圆周长与直径的比值)：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">double</span><span style="color:#A6ACCD;"> PI </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3.141592653589793</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="小结" tabindex="-1">小结： <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结：&quot;">​</a></h3><p>①知道静态变量是什么。<br> ②知道静态方法是什么。<br> ③学会使用final关键字。<br> ④知道常量是什么。</p>`,26),t=[o];function e(r,c,i,C,y,D){return a(),n("div",null,t)}const d=s(p,[["render",e]]);export{F as __pageData,d as default};
