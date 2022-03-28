<script setup lang='ts'>
import { PersonOutline } from '@vicons/ionicons5'

const footerData = ref<any[]>([
  {
    title: '帮助中心',
    data: ['账户管理', '购物指南', '订单操作']
  },
  {
    title: '关注我们',
    data: ['新浪微博', '官方微信', '联系我们']
  },
  {
    title: '线下门店',
    data: ['地点', '服务网点', '授权体验店']
  },
  {
    title: '关于商城',
    data: ['了解商城', '加入商城', '捐献维护']
  }
])

</script>

<template>
  <div class="footer">
    <div class="footer_box main">
      <div class="box_artificial">
        <div class="artificial_icon">
          <n-icon size="50" color="#fff">
            <PersonOutline />
          </n-icon>
        </div>
        <div class="artificial_content">
          <div class="content_text">
            <div>人工客服</div>
            <div>400-xxx-xx13</div>
            <div>
              <n-button class="btn" color="#d3e4cd">在线咨询</n-button>
            </div>
          </div>
        </div>
      </div>
      <div class="box_item" v-for="item in footerData" :key="item.title">
        <div class="item_title">{{ item.title }}</div>
        <div class="item_list" v-for="(items,index) in item.data" :key="index">
          <a>{{ items }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.footer {
  margin-top: 50px;
  height: auto;
  min-height: 400px;
  background-color: #333333;
  .footer_box {
    display: flex;
    .box_artificial {
      margin-left: 50px;
      width: 40%;
      display: flex;
      margin-top: 20px;
      .artificial_content {
        margin-left: 20px;
        color: #fff;
        .content_text {
          font-size: 17px;
          div {
            margin-top: 5px;
            .btn {
              margin-top: 10px;
            }
          }
        }
      }
    }
    .box_item {
      margin-left: 100px;
      margin-top: 20px;
      width: 25%;
      .item_title {
        font-size: 17px;
        color: #fff;
      }
      .item_list {
        margin-top: 20px;
        font-size: 13px;
        color: #b0b0b0;
      }
    }
  }
}
</style>
