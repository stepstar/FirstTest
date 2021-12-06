# mongoose 使用

### 1.安装

创建node.js项目后，安装mongoose：npm install mongoose

确保mongodb服务器。

### 2.使用流程

1）引入mongoose：

const mongoose = require('mongoose');

2）建立连接：

mongoose.connect('mongodb://localhost/test');

3）创建一个schema：

const schema={

​	name: String,

​	age: Number,

​	health: String

}

创建的schema只有在创建model时引用才可以起作用：mongoose.model('Cat', schema)。

mongoose有自己的基本数据类型定义：

<img src="/home/osuser/00project/testmongoose/doc/image-20211125081713076.png" alt="image-20211125081713076" style="zoom: 67%;" />

创建的schema生效后，存储到数据库的数据必须遵守，否则不能存储，但系统没有原生的错误提示，只是存储了一个空数据。

4）创建一个model：

const Cat = mongoose.model('Cat', { name: String });

5）写入数据库：

kitty.save();

写入后数据集的名称：是model定义的第一个参数，并且进行了修改：为名称的复数形式（若无s则自动在后面加上es），不区分大小写（均为小写）。

6）数据查找：

数据集.find({查询条件}, callback(err, 查询结果)=>{})

查询结果是一个Array，data[0]._doc是查询出的文档

