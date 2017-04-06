define(['jquery','template'],function($,template){
        //$ 属于局部变量  所以  不会影响其他的jquery对象
 

    //一般情况下  模块会返回一个对象 获取构造函数
    var foot=function(){
        var self=this;
    }
  
    foot.prototype.init=function(){
       
        $('body').append(this.template.foot() );
    };


    foot.prototype.template={
        foot:template.compile(`
            <div class="footer">
                <div class="wrap clear wire">
                    <div class="footer-left">
                        <div class="f_l">
                            <h3><a href="javascript:;">订购指南</a></h3>
                            <ul>
                                <li><a href="javascript:;">注册流程</a></li>
                                <li><a href="javascript:;">订购流程</a></li>
                                <li><a href="javascript:;">发票指南</a></li>
                                <li><a href="javascript:;">发票指南</a></li>
                                <li><a href="javascript:;">会员制度说明</a></li>
                            </ul>
                        </div>
                        <div class="f_l">
                            <h3><a href="javascript:;">支付及配送</a></h3>
                            <ul>
                                <li><a href="javascript:;">支付方式</a></li>
                                <li><a href="javascript:;">货到付款</a></li>
                                <li><a href="javascript:;">环球卡</a></li>
                                <li><a href="javascript:;">配送时间与区域</a></li>
                            </ul>
                        </div>
                        <div class="f_l">
                            <h3><a href="javascript:;">售后服务</a></h3>
                            <ul>
                                <li><a href="javascript:;">如何退换货</a></li>
                                <li><a href="javascript:;">顾客服务</a></li>
                                <li><a href="javascript:;">赔偿先付承诺</a></li>      
                            </ul>
                        </div>
                        <div class="f_l">
                            <h3><a href="javascript:;">合作关系</a></h3>
                            <ul>
                                <li><a href="javascript:;">成为供应商</a></li>
                                <li><a href="javascript:;">合作伙伴</a></li>
                                <li><a href="javascript:;">阅视无限</a></li>
                                <li><a href="javascript:;">供应商系统</a></li>
                            </ul>
                        </div>
                        <div class="f_l">
                            <h3><a href="javascript:;">媒体资料库</a></h3>
                            <ul>
                                <li><a href="javascript:;">媒体资料</a></li>
                                <li><a href="javascript:;">社交媒体</a></li>
                                <li><a href="javascript:;">最新资讯</a></li>
                            </ul>
                        </div>
                        <div class="f_l">
                            <h3><a href="javascript:;">关于我们</a></h3>
                            <ul>
                                <li><a href="javascript:;">社会责任</a></li>
                                <li><a href="javascript:;">里程碑</a></li>
                                <li><a href="javascript:;">关于我们</a></li>
                            </ul>
                        </div>
                        
                    </div>
                    <div class="footer-right">
                        <div class="f_r">
                            <h3>微信扫一扫</h3>
                            <a href="javascript:;">
                                <img src="../img/dw2.png"/>
                            </a>
                            <div class="gif">
                                <img src="../img/dw2.png"/>
                                <img src="../img/dw2.png"/></div>
                            </div>
                        <div class="f_r">
                            <h3>手机APP下载</h3>
                            <a href="javascript:;">
                                <img src="../img/dw2.png"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    <div class="wrap clear">
                        <p class="c_r_1">Copyright&copy;2011-2015 GHS.NET  服务热线：4000-521-521</p>
                        <p class="c_r_2">悦家繁荣公司 版权所有 京ICP备15028264号 京ICP证150765号</p>
                        
                    </div>
                </div>
            </div>
    `)
    }
    return foot
})