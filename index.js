/**
  * 身份证信息识别
  * 前1、2位数字表示：所在省份的代码
  * 第3、4位数字表示：所在城市的代码
  * 第5、6位数字表示：所在区县的代码
  * 第7~14位数字表示：出生年、月、日
  * 第15、16位数字表示：所在地的派出所的代码
  * 第17位数字表示性别：奇数表示男性，偶数表示女性
  * 第18位数字是校检码：也有的说是个人信息码，一般是随计算机的随机产生
 */

import pcaa from 'area-data/pcaa'

class IdCardFormat {
  /**
   * 构造函数
   * @param {String} idCardNo 身份证号码
   */
  constructor(idCardNo) {
    this.idCardNo = idCardNo
  }

  /**
   * 获取指定的身份证编码片段
   * @returns {String}
   */
  getSpecifiedCode(specified) {
    return this.idCardNo.slice(...specified)
  }

  /**
   * 获取省份编码
   * @returns {String}
   */
  getProvinceCode() {
    return this.getSpecifiedCode([0, 2])
  }

  /**
   * 获取市编码
   * @returns {String}
   */
  getCityCode() {
    return this.getSpecifiedCode([2, 4])
  }

  /**
    * 获取区编码
    * @returns {String}
   */
  getCountyCode() {
    return this.getSpecifiedCode([4, 6])
  }

  /**
   * 获取省份名称以及省份code
   * @returns {Object}
   */
  getProvince() {
    const proviceCode = `${this.getProvinceCode()}0000`
    return {
      province: pcaa['86'][proviceCode],
      proviceCode: proviceCode
    }
  }

  /**
    * 获取市以及市code
    * @returns {Object}
   */
  getCity() {
    const { proviceCode } = this.getProvince()
    const cityCode = `${this.getProvinceCode()}${this.getCityCode()}00`
    return {
      ...this.getProvince(),
      city: pcaa[proviceCode][cityCode],
      cityCode
    }
  }

  /**
   * 获取区以及区code
   * @returns
   */
  getCounty() {
    const provice = this.getProvinceCode()
    const city = this.getCityCode()
    const cityCode = `${provice}${city}00`
    const countyCode = `${provice}${city}${this.getCountyCode()}`
    return {
      ...this.getProvince(),
      ...this.getCity(),
      county: pcaa[cityCode][countyCode],
      countyCode
    }
  }

  /**
   * 查询生日
   * @returns {Object}
   */
  getBirthday() {
    const birthday = this.getSpecifiedCode([6, 14])
    return {
      birthday: birthday.replace(/(.{4})(.{2})/, '$1-$2-')
    }
  }

  /**
   * 获取年龄
   * @returns {Object}
   */
  getAge() {
    const birthday = this.getSpecifiedCode([6, 14])
    const d = new Date()
    const y = d.getFullYear()
    const m = (d.getMonth() + 1 + '').padStart(2, '0')
    const day = (d.getMonth() + 1 + '').padStart(2, '0')
    console.log(d.getMonth() + 1)
    const age = parseInt((`${y}${m}${day}` - birthday) / 10000)
    return {
      ...this.getBirthday(),
      age
    }
  }

  /**
   * 查询性别
   * @returns {Object}
   */
  getGender() {
    const code = this.getSpecifiedCode([-2, 18])
    // 奇数为男 偶数为女
    const isOdd = code % 2 === 1
    // 0 男 1 女
    let genderCode = ''
    let gender = ''
    if (isOdd) {
      genderCode = '0'
      gender = '男'
    } else {
      genderCode = '1'
      gender = '女'
    }
    return {
      genderCode,
      gender: gender
    }
  }

  /**
    * 获取身份证所有信息
    * @returns {Object}
   */
  getIdCardInfo() {
    return {
      ...this.getCounty(),
      ...this.getAge(),
      ...this.getGender()
    }
  }
}

if (module) {
  module.exports = IdCardFormat
}

export default IdCardFormat
