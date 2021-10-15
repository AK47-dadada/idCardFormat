## 使用说明

```bash
# 安装项目
npm install idcardformat area-data
```

```javascript

// 传值后实例化
const idCardFormat = new IdCardFormat('身份证号码')

// 获取所有信息
idCardFormat.getIdCardInfo()
// 结果
{
  age: 30,
  birthday: "生日",
  city: "市",
  cityCode: "620400",
  county: "区/县",
  countyCode: "620422",
  gender: "男",
  genderCode: "0",
  proviceCode: "620000",
  province: "甘肃省"
}

// 查询性别
idCardFormat.getGender()
{
  gender: "男",
  genderCode: "0"
}

// 获取生日
idCardFormat.getBirthday()
// 结果
{
  birthday: "生日"
}

// 获取年龄 会同时查询到生日和年龄
idCardFormat.getAge()
{
  age: 30,
  birthday: "生日"
}

// 获取省份名称以及省份code
idCardFormat.getProvince()
// 结果
{
  proviceCode: "620000",
  province: "甘肃省",
}

// 获取市以及市code
idCardFormat.getCity()
// 结果
{
  city: "市",
  cityCode: "620400",
  proviceCode: "620000",
  province: "省份",
}

// 获取区以及区code
idCardFormat.getCounty()
{
  city: "市",
  cityCode: "620400",
  county: "区/县",
  countyCode: "620422",
  proviceCode: "620000",
  province: "甘肃省"
}

```

```javascript
// 不传值实例化
const idCardFormat = new IdCardFormat()

// 获取所有信息
idCardFormat.getIdCardInfo('身份证号码')
// 结果
{
  age: 30,
  birthday: "生日",
  city: "市",
  cityCode: "620400",
  county: "区/县",
  countyCode: "620422",
  gender: "男",
  genderCode: "0",
  proviceCode: "620000",
  province: "甘肃省"
}

// 查询性别
idCardFormat.getGender('身份证号码')
{
  gender: "男",
  genderCode: "0"
}

// 获取生日
idCardFormat.getBirthday('身份证号码')
// 结果
{
  birthday: "生日"
}

// 获取年龄 会同时查询到生日和年龄
idCardFormat.getAge('身份证号码')
{
  age: 30,
  birthday: "生日"
}

// 获取省份名称以及省份code
idCardFormat.getProvince('身份证号码')
// 结果
{
  proviceCode: "620000",
  province: "甘肃省",
}

// 获取市以及市code
idCardFormat.getCity('身份证号码')
// 结果
{
  city: "市",
  cityCode: "620400",
  proviceCode: "620000",
  province: "省份",
}

// 获取区以及区code
idCardFormat.getCounty('身份证号码')
{
  city: "市",
  cityCode: "620400",
  county: "区/县",
  countyCode: "620422",
  proviceCode: "620000",
  province: "甘肃省"
}
```