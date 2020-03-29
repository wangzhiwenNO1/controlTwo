<template>
  <div class="teamBox">
    <div class="el-row">
      <div class="el-col" v-for="item in 2" :key="item">
        <div class="avatarBox">
          <el-avatar :size="70" src="#"></el-avatar>
          <div>周芷若</div>
          <div class="label">销售经理</div>
        </div>
        <div>
          <div>
            <span class="label">联系电话：</span>021—68686868
          </div>
          <div>
            <span class="label">联系邮箱：</span>zzr@tianji.com
          </div>
          <div>
            <span class="label">微信号：</span>1368888888
          </div>
          <div class="btnRow">
            <i class="el-icon-message"></i>
            <i class="el-icon-chat-dot-square"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.teamBox {
  width: 100%;
  box-sizing: border-box;

  .el-row {
    display: flex;
  }

  .el-col {
    background: #ffffff;
    display: flex;
    padding: 1rem;
    line-height: 1.88rem;
    position: relative;
    box-sizing: border-box;
    width: 50%;
    margin: 1rem;
  }

  .avatarBox {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 10rem;
    height: 9rem;
    background: rgba(242, 244, 250, 1);
    margin-right: 1rem;
    line-height: 1.3rem;
  }

  .el-avatar {
    margin-bottom: 0.5rem;
  }
  .label {
    font-size: 0.88rem;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }

  .btnRow {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    bottom: 1rem;
    right: 1rem;

    i::before {
      font-size: 1.5rem;
      color: #04AF00;
      margin-left: 2rem;
    }
  }

  
}
</style>