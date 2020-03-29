<template>
  <div class="profileBox">
    <div class="el-row">
      <div class="el-col">
        <div class="mechanism itemBox">
          <div class="title">机构简介</div>
          <div>上海必为检测服务有限公司是独立的第三方检测机构，特色项目包括：EMC电磁兼 容试验、三综合振动试验、ELV有害物质分析等，服务</div>
        </div>
        <div class="itemBox certificateBox" >
          <div class="title">
            <div>资质证书</div>
            <el-button icon="el-icon-circle-plus-outline" size="mini" type="text">上传证书</el-button>
          </div>
          <ul>
            <li>
              <el-image src="#" fit="fill"></el-image>
            </li>
          </ul>
        </div>
      </div>
      <div class="el-col">
          <div class="infoBox itemBox">
              <div class="title">基本信息</div>
              <div class="">                
                  <div><span>公司地址：</span>上海市浦东新区未来路138号 </div>
                  <div><span>公司规模：</span>50-100人 </div>
                  <div><span>公司性质：</span>私营企业</div>
                  <div><span>成立时间：</span>2010年</div>
                  <div><span>网站地址：</span>www</div>
              </div>
          </div>
          <div class=" itemBox">
              <div class="title">机构标签</div>
              <div>期初检测，电磁兼容，材料分析，失效分析</div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.profileBox {
  width: 100%;
  box-sizing: border-box;

  .el-row {
    display: flex;
  }

  .el-col {
    line-height: 1.88rem;
    position: relative;
    box-sizing: border-box;
    width: 50%;
  }

  .itemBox{
    padding: 0.5rem;
    background: #ffffff;
    margin:1rem 1rem 1rem 0;
  }

    .title{
        padding-bottom:0.3rem;
        border-bottom: 1px solid #F2F4FA;
        margin-bottom: 0.1rem;
        display: flex;
        justify-content: space-between;
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

  .certificateBox {
    .el-image {
      width: 8.31rem;
      height: 12.25rem;
      border: 0.06px solid rgba(51, 51, 51, 1);
    }
  }
  .infoBox{
      span{
          color:#999999;
      }
  }
}
</style>