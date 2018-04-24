# MIME 学习总结

## what

Multipurpose Internet Mail Extentions， 多用途互联网邮件拓展，指的是一系列电子邮件技术规范。

## why

传统电子邮件通信弊端：

+ 不能使用非英语字符
+ 不能插入二进制文件（比如图片）
+ 不能携带附件
##how

组装模块：

1. MIME-Version: 1.0 ：表明这封邮件使用MIME规范，1.0这个版本值不变；

2. Content-Type: text/plain; charset="ISO-8859-1"：信息类型+编码类型

   + 信息类型 = 主要类型 / 次要类型，缺省值为 text/plain，常见的有这些信息类型：

     text/plain：纯文本，文件扩展名.txt
     text/html：HTML文本，文件扩展名.htm和.html
     image/jpeg：jpeg格式的图片，文件扩展名.jpg
     image/gif：GIF格式的图片，文件扩展名.gif
     audio/x-wave：WAVE格式的音频，文件扩展名.wav
     audio/mpeg：MP3格式的音频，文件扩展名.mp3
     video/mpeg：MPEG格式的视频，文件扩展名.mpg
     application/zip：PK-ZIP格式的压缩文件，文件扩展名.zip

   + 编码类型：缺省值是ASCII码，其他可能的值是“UTF-8”、"GB2312"、“ISO-88589-1”等

3. Content-transfer-encoding: base64：编码转换方式，为了解决传统格式不支持非ASCII和二进制数据的问题，缺省值是“7bit”，即ASCII字符，可取值有5个，"8bit"（字节编码）、"binary"（二进制编码）、"quoted-printable"（可打印字符引用编码）和"base64"（使用A-Z、a-z、0-9、+、/、= 这65个字符表示二进制数字，由于ascii码的128～255之间的值是不可见字符，在路由传输过程中这部分字符可能会被错误处理，所以用这65个字符统一替代，4个字符替换3个字节）
##Function

上一模块中所讲的第二点，即Content-Type，现在被移植到HTTP协议中，以表示HTTP信息的类型。其实之前大学网络课学过这玩意，但是时间长了忘记了，偶然看书总有提及，就整理一篇供以后回顾，参考[MIME笔记-阮一峰](http://www.ruanyifeng.com/blog/2008/06/mime.html)








   ​




