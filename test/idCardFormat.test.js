import IdCardFormat from '../src/idCardFormat';

const idCardNo = '620422199011142511'

// 实例化之后传值测试
const idCardFormat = new IdCardFormat()

test('获取生日 IdCardFormat.getBirthday', () => {
  const expectedVal = {
    birthday: '1990-11-14'
  }
  expect(idCardFormat.getBirthday(idCardNo)).toStrictEqual(expectedVal)
})

test('获取生日 IdCardFormat.getBirthday 不传值', () => {
  const expectedVal = {}
  expect(idCardFormat.getBirthday()).toStrictEqual(expectedVal)
})

test('获取年龄 IdCardFormat.getAge', () => {
  const expectedVal = {
    age: 30,
    birthday: '1990-11-14'
  }
  expect(idCardFormat.getAge(idCardNo)).toStrictEqual(expectedVal)
})

test('获取年龄 IdCardFormat.getAge 不传值', () => {
  const expectedVal = {}
  expect(idCardFormat.getAge()).toStrictEqual(expectedVal)
})

test('获取省份 IdCardFormat.getProvince', () => {
  const expectedVal = {
    proviceCode: "620000",
    province: "甘肃省"
  }
  expect(idCardFormat.getProvince(idCardNo)).toStrictEqual(expectedVal)
})

test('获取省份 IdCardFormat.getProvince 不传值', () => {
  const expectedVal = {}
  expect(idCardFormat.getProvince()).toStrictEqual(expectedVal)
})

test('获取市 IdCardFormat.getCity', () => {
  const expectedVal = {
    proviceCode: "620000",
    province: "甘肃省",
    city: "白银市",
    cityCode: "620400"
  }
  expect(idCardFormat.getCity(idCardNo)).toStrictEqual(expectedVal)
})

test('获取市 IdCardFormat.getCity 不传值', () => {
  const expectedVal = {}
  expect(idCardFormat.getCity()).toStrictEqual(expectedVal)
})

test('获取区 IdCardFormat.getCounty"}', () => {
  const expectedVal = {
    proviceCode: "620000",
    province: "甘肃省",
    city: "白银市",
    cityCode: "620400",
    county: "会宁县",
    countyCode: "620422"
  }
  expect(idCardFormat.getCounty(idCardNo)).toStrictEqual(expectedVal)
})

test('获取区 IdCardFormat.getCounty"} 不传值', () => {
  const expectedVal = {}
  expect(idCardFormat.getCounty()).toStrictEqual(expectedVal)
})

test('获取性别 IdCardFormat.getGender"}', () => {
  const expectedVal = {
    gender: "男",
    genderCode: "0"
  }
  expect(idCardFormat.getGender(idCardNo)).toStrictEqual(expectedVal)
})

test('获取性别 IdCardFormat.getGender"} 不传值', () => {
  const expectedVal = {}
  expect(idCardFormat.getGender()).toStrictEqual(expectedVal)
})

test('获取所有信息 IdCardFormat.getIdCardInfo"}', () => {
  const expectedVal = {
    age: 30,
    birthday: "1990-11-14",
    city: "白银市",
    cityCode: "620400",
    county: "会宁县",
    countyCode: "620422",
    gender: "男",
    genderCode: "0",
    proviceCode: "620000",
    province: "甘肃省"
  }
  expect(idCardFormat.getIdCardInfo(idCardNo)).toStrictEqual(expectedVal)
})

test('获取所有信息 IdCardFormat.getIdCardInfo"} 不传值', () => {
  const expectedVal = {}
  expect(idCardFormat.getIdCardInfo()).toStrictEqual(expectedVal)
})


// 传值测试
const idCardFormatHasVal = new IdCardFormat(idCardNo)
test('传值测试获取生日 IdCardFormat.getBirthday', () => {
  const expectedVal = {
    birthday: '1990-11-14'
  }
  expect(idCardFormatHasVal.getBirthday()).toStrictEqual(expectedVal)
})


test('传值测试获取年龄 IdCardFormat.getAge', () => {
  const expectedVal = {
    age: 30,
    birthday: '1990-11-14'
  }
  expect(idCardFormatHasVal.getAge()).toStrictEqual(expectedVal)
})

test('传值测试获取省份 IdCardFormat.getProvince', () => {
  const expectedVal = {
    proviceCode: "620000",
    province: "甘肃省"
  }
  expect(idCardFormatHasVal.getProvince()).toStrictEqual(expectedVal)
})

test('传值测试获取市 IdCardFormat.getCity', () => {
  const expectedVal = {
    proviceCode: "620000",
    province: "甘肃省",
    city: "白银市",
    cityCode: "620400"
  }
  expect(idCardFormatHasVal.getCity()).toStrictEqual(expectedVal)
})

test('传值测试获取区 IdCardFormat.getCounty"}', () => {
  const expectedVal = {
    proviceCode: "620000",
    province: "甘肃省",
    city: "白银市",
    cityCode: "620400",
    county: "会宁县",
    countyCode: "620422"
  }
  expect(idCardFormatHasVal.getCounty()).toStrictEqual(expectedVal)
})

test('传值测试获取性别 IdCardFormat.getGender"}', () => {
  const expectedVal = {
    gender: "男",
    genderCode: "0"
  }
  expect(idCardFormatHasVal.getGender()).toStrictEqual(expectedVal)
})

test('传值测试获取所有信息 IdCardFormat.getIdCardInfo"}', () => {
  const expectedVal = {
    age: 30,
    birthday: "1990-11-14",
    city: "白银市",
    cityCode: "620400",
    county: "会宁县",
    countyCode: "620422",
    gender: "男",
    genderCode: "0",
    proviceCode: "620000",
    province: "甘肃省"
  }
  expect(idCardFormatHasVal.getIdCardInfo()).toStrictEqual(expectedVal)
})
