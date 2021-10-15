## 开发

```javascript
// 安装项目
npm install idcardformat area-data

// 使用
const idCardFormat = new IdCardFormat('身份证号码')

// 获取所有信息
idCardFormat.getIdCardInfo()

// 获取生日
idCardFormat.getBirthday()

// 获取年龄 会同时查询到生日和年龄
idCardFormat.getAge()

// 获取省份名称以及省份code
idCardFormat.getProvince()

// 获取市以及市code
idCardFormat.getCity()

// 获取区以及区code
idCardFormat.getCounty()

```