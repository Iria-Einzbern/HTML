<!--
 * @Author: kawaii-poi iria1314@qq.com
 * @Date: 2024-01-09 20:18:30
 * @LastEditors: kawaii-poi iria1314@qq.com
 * @LastEditTime: 2024-01-09 21:08:34
 * @FilePath: /HTML/登录界面/tips/Readme.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# 基于js的网页提示窗

 ---
 * ### 使用方法
   **解压文件夹并放在index.html同级目录下，并在head中引入以下js/css**
   ```javascript
   <link rel="stylesheet" tpye="text/css" href="./tips/tips.css">
   <script src="./tips/tips.js"></script>
   //需要使用Font Awesome图标
   <link rel="stylesheet" href="https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/4.7.0/css/font-awesome.min.css">
    ```
    **调用showTip函数**
    ```javascript
    //可传入两个参数：提示文本与提示方式（均为字符串）
    showTip(tipText,method)
    //若省略方式参数则默认为绿色确认提示窗
    showTip("这是确认提示窗")
    //传入warn参数则为黄色警告提示窗
    showTip("这是警告提示窗","warn")
    //传入参数err或error则为错误提示窗
    showTip("这是错误提示窗","err")
    showTip("这是错误提示窗","error")
    ```
* ### 实例
    ![](./4040474142.png)