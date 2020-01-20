<template>
  <div class="order">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple leftBox">
          <!-- 左上 -->
          <div class="leftItem leftOne">
            <div class="orderNum">#45972</div>
            <div class="orderName">
              <div>T2019083003 Demo 003 检测项目</div>
              <i class="icon"></i>
            </div>
            <ul class="ulLeft">
              <li>
                <div>状态</div>
                <div class="state">已完成</div>
              </li>
              <li>
                <div>负责人</div>
                <div>
                  <div class="avatar"></div>
                  <div>斩无极</div>
                </div>
              </li>
              <li>
                <div>优先级</div>
                <div>
                  <i></i>
                  <div>中</div>
                </div>
              </li>
              <li>
                <div>写作人员</div>
                <div>
                  <div class="avatarBox">
                    <div class="avatar"></div>
                    <div class="avatar"></div>
                  </div>
                  <div>3+</div>
                  <div class="icon"></div>
                </div>
              </li>
            </ul>
          </div>
          <!-- 左边第二个 -->
          <div class="leftItem leftTwo"></div>
          <!-- 左边第三个 -->
          <div class="leftItem leftThree"></div>
          <!-- 左边第四个 -->
          <div class="leftItem leftFour"></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">2</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">3</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "order",
  components: {}
};
</script>
<style lang="less" scoped>
.order {
  padding: 1rem;
  box-sizing: border-box;

  .leftBox {
    .leftItem {
      padding: 1rem;
      background: #ffffff;
      border-radius: 0.3rem;
      margin-bottom: 1rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .leftOne {
      .orderNum {
        font-size: 0.75rem;
        color: #999999;
      }
      .orderName {
        display: flex;
        color: #333333;
        font-size: 0.88rem;
        align-items: center;
        justify-content: space-between;

        .icon {
          width: 1rem;
          height: 1rem;
          display: block;
          background: pink;
        }
      }

      .ulLeft {
        display: flex;
        color: #999999;
        font-size: 0.75rem;
        align-items: center;
        justify-content: space-between;

        li {
          padding: 0.25rem;
          border-right: 1px solid #eeeeee;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;

          &>div {
            display: flex;
            align-items: center;
            justify-content: center;

            
          }
          &>div:first-child{
              margin-bottom: 0.5rem;
          }

          &:last-child {
            border-right: none;
          }

          .state {
            width: 5rem;
            height: 1.25rem;
            background: linear-gradient(90deg,rgba(131, 230, 34, 1),rgba(255, 255, 255, 1));
            border-radius: 1rem;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:1.25rem;
            align-self: center;
          }

          .avatar {
            width: 1.25rem;
            height: 1.25rem;
            border-radius: 50%;
            background: pink;
            margin-right: 0.2rem;
          }

          .avatarBox{
            display: flex;
            justify-content: center;
            align-items: center;

            
          }
          
          .icon{
              width:1rem;
              height: 1rem;
              background: pink;
              display: block;
            }
        }
      }
    }
  }
}
</style>