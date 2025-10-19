$(document).ready(function() {
  $("td").click(function () {
    var content = $(this).text();
    var colIndex = $(this).index();
    var cliffName = $("th").eq(colIndex).text();

    // 忽略 "Not Available" 和活动列标题
    if (content === "Not Available" || colIndex === 0) {
      return;
    }

    $(this).toggleClass("tdhighlight");

    // 添加或移除活动
    if ($(this).hasClass("tdhighlight")) {
      $("#modalActivityList").append("<p>" + content + " <span class='cliffName'>at " + cliffName + "</span></p>");
    } else {
      $("#modalActivityList p:contains('" + content + "')").remove();
    }

    // 如果 Modal 未打开，则打开一次
    if (!$("#activityModal").hasClass("show")) {
      $("#activityModal").modal("show");
    }

    // ✅ 更新 Modal 内容状态
    updateModalState();
  });

  // 点击 Back to Activities
  $("#backToActivities").click(function() {
    $("#activityModal").modal("hide");
  });

  // 点击 Get Info
  $("#getInfo").click(function() {
    alert("Info request sent! (You can integrate email form here)");
  });

  // ✅ 定义更新 Modal 内容状态的函数
  function updateModalState() {
    const list = $("#modalActivityList");
    const items = list.children("p").length;

    if (items === 0) {
      // 当无选中活动时显示默认提示
      list.html("<p class='text-muted mb-0'></p>");
    }
  }

  // ✅ 初始化 Modal 默认提示
  updateModalState();
});
