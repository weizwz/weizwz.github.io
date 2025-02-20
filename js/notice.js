window.onload = () => {
  // 创建一个 div 元素作为公告容器
  const notice = document.createElement('div');
  notice.innerHTML = `
    <div style="
      position: fixed;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
      padding: 20px 30px;
      border-radius: 12px;
      box-shadow: 0 6px 12px #409eff;
      z-index: 1000;
      background: #EAF4FE;
      color: #333;
    ">
      <p style="margin: 0;">此博客已停止更新，更多内容请前往 
        <a href="https://note.weizwz.com/"
          target="_blank"
          style="
            color: #409eff;
            text-decoration: none;
          ">唯知笔记 note.weizwz.com</a>
      </p>
      <button style="
        background: none;
        border: none;
        color: #999;
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 10px;
      ">×</button>
    </div>
  `;

  // 将公告添加到页面中
  document.body.appendChild(notice);
  // 添加关闭按钮的点击事件
  notice.querySelector('button').addEventListener('click', () => {
    notice.remove();
  });
};