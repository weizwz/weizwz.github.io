/**
 * 合成图片
 * @param {文字内容} text 
 * @param {字体大小} fontSize 
 */
function drawImage(text, fontSize) {
  const canvas = document.getElementById("coverCanvas");
  const $img = $("#coverPreviewImg");
  const context = canvas.getContext("2d");
  const width = $img.get(0).naturalWidth;
  const height = $img.get(0).naturalHeight;
  const color = $("#fontColor").val();
  canvas.width = width; //图片的宽度
  canvas.height = height;
  $("#coverCanvas").css({
    width: width,
    height: height
  });
  context.rect(0, 0, width, height);
  context.fillStyle = '#ffffff';
  context.fill();
  var myImage = new Image();
  // 背景图片
  myImage.src = $("#coverPreviewImg").attr('src');
  myImage.crossOrigin = "Anonymous";
  myImage.onload = function () {
    context.drawImage(
      myImage,
      0,
      0,
      canvas.width,
      canvas.height,
      0,
      0,
      canvas.width,
      canvas.height
    );
    // 添加文字
    const fontFamily = 'Microsoft YaHei';
    context.font = 'bolder ' + fontSize +'px/1 ' + fontFamily;
    context.fillStyle = color;
    context.textAlign = "center";
    // context.textBaseline = "middle";
    const left = canvas.width/2;
    const fontInfo = context.measureText(text);
    const top = canvas.height/2 + (fontInfo.actualBoundingBoxAscent + fontInfo.actualBoundingBoxDescent)/2;
    context.fillText(text, left, top);

    var imgUrl = canvas.toDataURL("image/png");
    $("#coverResultImg").attr("src", imgUrl).parent().show();
  };
}

/**
 * 将file对象转化为base64编码
 * @param { file-文件, imgId-图片ID, successFun-成功回调, failFun-失败回调 } option 
 */
function previewFile(option) {
  const {file, imgId, successFun, failFun} = option;
  let reader;
  if (file) {
    // 创建流对象
    reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      const base64 = e.target.result;
      document.querySelector('#' + imgId).src = e.target.result;
      if (typeof successFun === 'function') {
        successFun(base64);
      }
    }
  } else {
    document.querySelector('#' + imgId).src = '';
    if (typeof failFun === 'function') {
      failFun();
    }
  }
}

$(function(){
  $("#coverFile").change(function(){
    const file = this.files[0];
    const option = {
      file,
      imgId: 'coverPreviewImg',
      successFun: function() {
        $(".cover-preview-tip").hide();
      },
      failFun: function() {
        $(".cover-preview-tip").show();
      }
    }
    $("#coverFileName").val(file.name);
    previewFile(option);
  })
  layui.use(['form', 'colorpicker'], function(){ 
    const form = layui.form;
    const colorpicker = layui.colorpicker;
    // 颜色选择
    const colorSelect = function() {
      colorpicker.render({
        elem: '#fontColorSelect',
        color: '#000000',
        predefine: true,
        colors: ['#000000', '#393d49', '#ffffff', '#1890ff', '#31bdec', '#009688', '#ffb800', '#ff5722'],
        done: function(color){
          $('#fontColor').val(color);
        }
      });
    }
    colorSelect();
    // 自定义验证规则
    form.verify({
      fileName: function(value){
        if(value === ''){
          return '请选择图片上传';
        } else {
          const fileNameStr = value.split('.');
          const fileType = fileNameStr[fileNameStr.length - 1];
          if (fileType !== 'png' && fileType != 'jpg' && fileType != 'jpeg') {
            return '请选择符合格式要求的图片'
          }
        }
      },
      title: function(value){
        const strLen = value.trim().length;
        if(strLen <= 0){
          return '请输入标题文字';
        } else if(strLen > 120){
          return '标题文字不能超过120个字符';
        }
      },
      fontColor: function(value) {
        if(value === ''){
          return '请选择文字颜色';
        }
      },
      size: [
        /^[\d]{1,3}$/,
        '请输入1-3位数字'
      ]
    });
    // 重置
    $("#coverReset").click(function(){
      $("#coverPreviewImg, #coverResultImg").attr('src', '');
      $(".cover-preview-tip").show();
      colorSelect();
      $(".cover-result").hide();
    })
    form.on('submit(coverCreate)', function(data){
      // console.log(data.form, data.field, data.elem)
      const text = $("#coverWord").val();
      const fontSize = $("#fontSize").val();
      try {
        drawImage(text, fontSize);
      } catch {
        return false;
      }
      return false;
    });
  })
})
