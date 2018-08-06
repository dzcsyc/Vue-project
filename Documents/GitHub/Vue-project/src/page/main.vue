<template>
    <div>
      <top-header headTitle="个人中心" canGoBack='true'></top-header>
      <section>
        <section class="main-info-section">
            <router-link :to="'/info'" class="main-info-link">
                <img src="static/elmlogo.jpeg" height="32" width="32">
                <p>{{userName}}</p>
            </router-link>
        </section>
        <section class="main-data-section">
          <ul>
            <router-link :to="'/balance'" class="main-data-link">
              <p>0.00元</p>
              <p>我的余额</p>
            </router-link>
            <router-link :to="'/benefit'" class="main-data-link">
              <p>0个</p>
              <p>我的优惠</p>
            </router-link>
            <router-link :to="'/points'" class="main-data-link">
              <p>0分</p>
              <p>我的积分</p>
            </router-link>
          </ul>
        </section>
      </section>
    </div>
</template>

<script>
import topHeader from '../components/header'
export default {
  name: "main",
  data () {
    return {
      userName: "登录"
    };
  },
  created () {
    var sUserName = sessionStorage.getItem('userName')
    if (sUserName) {
      this.userName = sUserName
    }
  },
  components: {
    topHeader
  }
};
</script>

<style lang="scss" scoped>
   @import "../../static/mixin.scss";

    .profile_page{
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
   .main-info-section{
        padding-top:1.95rem;
        .main-info-link{
            display:block;
            display:flex;
            box-align: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            background:$blue;
            padding: .666667rem .6rem;
            img{
                display:inline-block;
                @include wh(2.5rem,2.5rem);
                border-radius:50%;
                vertical-align:middle;
                .privateImage-svg{
                    background:$fc;
                    border-radius:50%;
                    @include wh(2.5rem,2.5rem);
                }
            }
            .user-info{
                margin-left:.48rem;
                -webkit-box-flex: 1;
                -ms-flex-positive: 1;
                flex-grow: 1;
                p{
                    font-weight:700;
                    @include sc(.8rem,$fc);
                }
            }
        }
   }
   .main-data-section{
        width:100%;
        background:$fc;
        box-sizing: border-box;
        ul{
            .main-data-link{
                float:left;
                width:33.33%;
                display:inline-block;
                border-right:1px solid #f1f1f1;
                p{
                    display:block;
                    width:100%;
                    text-align:center;
                }
            }
        }
   }
</style>
