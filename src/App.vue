<template>
  <div id="app">
    <div>
      <el-row class="TopBox">
        <el-col :span="8">
          <div class="grid-content bg-purple topLeft">
            <div class="icon"></div>
            <div>上海达摩科技有限公司 | 令狐冲</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light TopsearchBox">
            <div class="searchBox"></div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple topRight">
            <div class>(5)</div>
            <div class="avatar"></div>
          </div>
        </el-col>
      </el-row>
      <div class="tabBox">
        <div class="tabLeft">
          <div class="tabItem active">
            <div class="icon"></div>
            <div>工作台</div>
          </div>
          <div class="tabItem">
            <div class="icon"></div>
            <div>订单管理</div>
          </div>
          <div class="tabItem">
            <div class="icon"></div>
            <div>设备管理</div>
          </div>
          <div class="tabItem">
            <div class="icon"></div>
            <div>供应商管理</div>
          </div>
          <div class="tabItem">
            <div class="icon"></div>
            <div>在线市场</div>
          </div>
          <div class="tabItem">
            <div class="icon"></div>
            <div>设置</div>
          </div>
        </div>

        <!-- right -->
        <div class="tabRight">
          <div >团队成员</div>
          <div>
            <img src="#" alt />
          </div>
          <div>12+</div>
          <div class="icon"></div>
        </div>
      </div>
    </div>
    <div class="viewBox">
      <router-view />
    </div>

    <div class="footer"></div>
  </div>
</template>

<script>


export default {
  name: 'app',
}
</script>

<style lang="less">
@import  './assets/css/reset.css';

.TopBox {
  height: 3.44rem;
  background: rgba(44, 100, 255, 1);
  display: flex;
  align-items: center;
  padding: 0 1rem;
  color: #fff;
  box-sizing: border-box;
}
.TopsearchBox{
  display: flex;
  justify-content: center;
  align-items: center;
}
.searchBox {
  width: 20rem;
  height: 2rem;
  background: rgba(25, 80, 233, 1);
  border-radius: 1rem;
}
.topRight {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: pink;
    margin-left: 2rem;
  }
}
.tabBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;
  background: rgba(255, 255, 255, 1);
  padding: 0 1rem;

  .tabLeft {
    display: flex;

    .tabItem {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 7.5rem;
      height: 2.5rem;
      // border-bottom: 1px solid rgba(44, 100, 255, 1);
      line-height: 2.5rem;
      margin-right:1rem;
      div {
        font-size: 1rem;
      }

      &.active {
        border-bottom: 1px solid rgba(44, 100, 255, 1);
      }
    }
    .icon {
      margin-right: 0.5rem;
    }
  }
  .tabRight {
    display: flex;
    align-items: center;
    font-size:0.75rem;
    color:#999999;

    img{
      display: block;
      width:1.25rem;
      height: 1.25rem;
      background: pink;
      border-radius: 50%;
    }
    div{
      margin-left:0.3rem;
    } 
  }

  .icon {
    width: 1.25rem;
    height: 1.25rem;
    background: pink;
  }
}

.viewBox{
  height: calc(100vh - 9.6rem);
  background: #F2F4FA;
}

.footer{
  height: 3.65rem;
  background: pink;
}
</style>
