Page({
  data: {
    array: ['14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'],
    objectArray: [
      {
        id: 0,
        name: '14'
      },
      {
        id: 1,
        name: '15'
      },
      {
        id: 2,
        name: '16'
      },
      {
        id: 3,
        name: '17'
      },
      {
        id: 4,
        name: '18'
      },
      {
        id: 5,
        name: '19'
      },
      {
        id: 6,
        name: '20'
      },
      {
        id: 7,
        name: '21'
      },
      {
        id: 8,
        name: '22'
      },
      {
        id: 9,
        name: '23'
      },
      {
        id: 10,
        name: '24'
      },
      {
        id: 11,
        name: '25'
      },
      {
        id: 12,
        name: '26'
      },
      {
        id: 13,
        name: '27'
      },
      {
        id: 14,
        name: '28'
      },
      {
        id: 15,
        name: '29'
      },
      {
        id: 16,
        name: '30'
      },
      {
        id: 17,
        name: '31'
      },
      {
        id: 18,
        name: '32'
      },
      {
        id: 19,
        name: '33'
      },
      {
        id: 20,
        name: '34'
      },
      {
        id: 21,
        name: '35'
      },
      {
        id: 22,
        name: '36'
      },
      {
        id: 23,
        name: '37'
      },
      {
        id: 24,
        name: '38'
      },
      {
        id: 25,
        name: '39'
      },{
        id: 26,
        name: '40'
      },
      {
        id: 27,
        name: '41'
      },
      {
        id: 28,
        name: '42'
      },
      {
        id: 29,
        name: '43'
      }, {
        id: 30,
        name: '44'
      },
      {
        id: 31,
        name: '45'
      },
      {
        id: 32,
        name: '46'
      },
      {
        id: 33,
        name: '47'
      },
      {
        id: 34,
        name: '48'
      },
      {
        id: 35,
        name: '49'
      },
      {
        id: 36,
        name: '50'
      },
      {
        id: 37,
        name: '51'
      },
      {
        id: 38,
        name: '52'
      },
      {
        id: 39,
        name: '53'
      },
      {
        id: 40,
        name: '54'
      },
      {
        id: 41,
        name: '55'
      },
      {
        id: 42,
        name: '56'
      },
      {
        id: 43,
        name: '57'
      },

      {
        id: 44,
        name: '58'
      },
      {
        id: 45,
        name: '59'
      }, {
        id: 46,
        name: '60'
      },
      {
        id: 47,
        name: '61'
      },
      {
        id: 48,
        name: '62'
      },
      {
        id: 49,
        name: '63'
      },
      {
        id: 50,
        name: '64'
      },
      {
        id: 51,
        name: '65'
      },
      {
        id: 52,
        name: '66'
      },
      {
        id: 53,
        name: '67'
      },
      {
        id: 54,
        name: '68'
      },
      {
        id: 55,
        name: '69'
      }, 
      {
        id: 56,
        name: '70'
      },
      {
        id: 57,
        name: '71'
      },
      {
        id: 58,
        name: '72'
      },
      {
        id: 59,
        name: '73'
      },
      {
        id: 60,
        name: '74'
      },
      {
        id: 61,
        name: '75'
      },
      {
        id: 62,
        name: '76'
      },
      {
        id: 63,
        name: '77'
      },
      {
        id: 64,
        name: '78'
      },
      {
        id: 65,
        name: '79'
      }, 
      {
        id: 66,
        name: '80'
      },
      {
        id: 67,
        name: '81'
      },
      {
        id: 68,
        name: '82'
      },
      {
        id: 69,
        name: '83'
      },
      {
        id: 70,
        name: '84'
      },
      {
        id: 71,
        name: '85'
      },
      {
        id: 72,
        name: '86'
      },
      {
        id: 73,
        name: '87'
      },
      {
        id: 74,
        name: '88'
      },
      {
        id: 75,
        name: '89'
      }, {
        id: 76,
        name: '90'
      },
    ],
    index: 0,
  },
  bindPickerChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
    console.log(this.data.array[e.detail.value])
  },
})