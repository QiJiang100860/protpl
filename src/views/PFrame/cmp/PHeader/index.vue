<template>
  <div class="header-wrapper">
    <div class="text">
      <img class="logo" :src="require('@/assets/logo.png')" alt />
      <span>中移上研院工业APP</span>
    </div>

    <div class="time">
      <div class="time-str">{{time}}</div>
      <div class="date-str">
        <div>{{week}}</div>
        <div>{{date}}</div>
      </div>
      <el-button class="login-out" type="warning" circle icon="el-icon-switch-button"></el-button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      date: "",
      week: "",
      time: ""
    };
  },
  created() {
    this.initTime();
  },
  methods: {
    initTime() {
      this.date = this.handleDate();
      this.week = this.handleWeek();
      this.time = this.handleTime();
      setTimeout(() => {
        this.initTime();
      }, 500);
    },
    // 处理周
    handleWeek() {
      const _now = new Date();
      const _date = _now.getDay();
      let _week = "星期";
      switch (_date) {
        case 1:
          _week += "一";
          break;
        case 2:
          _week += "二";
          break;
        case 3:
          _week += "三";
          break;
        case 4:
          _week += "四";
          break;
        case 5:
          _week += "五";
          break;
        case 6:
          _week += "六";
          break;
        default:
          _week += "七";
      }
      return _week;
    },
    // 处理日期
    handleDate() {
      const _now = new Date();
      const _addzero = n => {
        return n > 9 ? n : "0" + n;
      };
      const _y = _now.getFullYear();
      const _m = _now.getMonth() + 1;
      const _d = _now.getDate();
      return _y + "-" + _addzero(_m) + "-" + _addzero(_d);
    },

    // 处理时间
    handleTime() {
      const _now = new Date();
      const _addzero = n => {
        return n > 9 ? n : "0" + n;
      };
      const _h = _now.getHours();
      const _m = _now.getMinutes();
      const _s = _now.getSeconds();
      return _addzero(_h) + ":" + _addzero(_m) + ":" + _addzero(_s);
    }
  }
};
</script>

<style lang="less" scoped>
.header-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  padding: 0px 20px;
  z-index: 999;
  height: 70px;
  .text {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
    }
    span {
      margin-left: 10px;
    }
  }
  .time {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .time-str {
      font-size: 18px;
      color: #333;
      font-weight: 700;
      border-right: solid 1px #dedede;
      padding-right: 20px;
      margin-right: 20px;
    }
    .date-str {
      font-size: 12px;
    }
    .login-out{
        margin-left: 20px;
    }
  }
}
</style>